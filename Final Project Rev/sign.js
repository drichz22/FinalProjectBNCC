// const telephone = document.getElementById('telephone')
// const form = document.getElementById('form')
// const text = document.getElementById('text')

// form.addEventListener('submit', (e) => {

//     let messages = []
//     if (telephone.value.length > 14){
//         messages.push('Numbers must not exceed 14 digits')
//     }

//     if (text.value.length < 5){
//         messages.push('Comment must be more than 5 words')
//     }

//     if (messages.length > 0){
//         e.preventDefault()
//         errorElement.innertext = messages.join(', ')
//     }

// })

const firebaseConfig = {
    apiKey: "AIzaSyCWePr3fVal5xa4hsiSY8oTGfF2IReQDoA",
    authDomain: "final-project-bncc-validation.firebaseapp.com",
    databaseURL: "https://final-project-bncc-validation-default-rtdb.firebaseio.com",
    projectId: "final-project-bncc-validation",
    storageBucket: "final-project-bncc-validation.appspot.com",
    messagingSenderId: "725279382358",
    appId: "1:725279382358:web:7aca45213edf28abea54f7"
  };

 // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("form");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var Name = getElementVal("name");
  var Email = getElementVal("email");
  var Messages = getElementVal("comment");
  var Telephone = getElementVal("telephone");

  saveMessages(Name, Email, Messages, Telephone);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("form").reset();
}

const saveMessages = (Name, Email, Messages, Telephone) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    Name: Name,
    Email: Email,
    Telephone: Telephone,
    Comments: Messages
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
