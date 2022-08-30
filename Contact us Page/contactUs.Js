var uName = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var submitBtn = document.getElementById("submit");
var resetBtn = document.getElementById("reset");
var male = document.getElementById("male");
var female = document.getElementById("female");
var phone = document.getElementById("phone");
console.log(uName, email, password, submitBtn, resetBtn, male, female);

//Name Validation
// var namVal = function () {
//   if (uName.value.length == 0) {
//     document.getElementById("nameP").textContent = `Name is required`;
//     uName.style.border = `2px solid red`;
//   } else {
//     document.getElementById("nameP").textContent = ``;
//     uName.style.border = `2px solid #ccc`;
//   }
// };
// uName.addEventListener("blur", namVal);
// uName.addEventListener("focus", namVal);

let unameValid,
  emailValid,
  passValid,
  phoneValid,
  genderValid = false;

submitBtn.addEventListener("click", (e) => {
  if (!(unameValid && emailValid && passValid && phoneValid && genderValid)) {
    e.preventDefault();
  }
});

var uNameVal = function () {
  var nameIn = uName.value;
  var nameTest = /([A-Z][a-z]{2,10} [A-Z][a-z]{2,10})/;
  if (!nameTest.test(nameIn)) {
    unameValid = false;
    uName.style.border = `2px solid red`;
    let paraMsg = document.getElementById("nameP");
    paraMsg.textContent = `Full Name required with capital letter`;
    paraMsg.style.fontSize = "14px";
  } else {
    unameValid = true;
    document.getElementById("nameP").textContent = ``;
    uName.style.border = `2px solid #ccc`;
  }
};

uName.addEventListener("input", uNameVal);
uName.addEventListener("blur", uNameVal);
submitBtn.addEventListener("click", uNameVal);

// var nameTest = /([A-Z][a-z]{2,10} [A-Z][a-z]{2,10})/;

// submitBtn.addEventListener("click", function (e) {
//   if (uName.value.length == 0) {
//     e.preventDefault();
//     document.getElementById("nameP").textContent = `Name is required`;
//     uName.style.border = `2px solid red`;
//     console.log("if");
//   }
// });

// function (e) {
//   var nameIn = uName.value;
//   if (!nameTest.test(nameIn)) {
//     e.preventDefault();
//     uName.style.border = `2px solid red`;
//     let paraMsg = document.getElementById("nameP");
//     paraMsg.textContent = `Write your full name start with a capital letter`;
//     paraMsg.style.fontSize = "14px";
//     console.log("else if");
//   }
// }

// *********************************************************//

//Email Validation
var emailVal = function () {
  var emailIn = email.value;
  var emailTest = /\w+@gmail.com/;
  if (emailTest.test(emailIn) == false) {
    emailValid = false;
    let paraMsg = document.getElementById("emailP");
    paraMsg.textContent = `Email is not valid`;
    email.style.border = `2px solid red`;
  } else if (emailTest.test(emailIn) == true) {
    emailValid = true;
    document.getElementById("emailP").textContent = ``;
    email.style.border = `2px solid #ccc`;
  }
};
email.addEventListener("blur", emailVal);
email.addEventListener("input", emailVal);
submitBtn.addEventListener("click", emailVal);

//****************************************************************//

//password Validation
var passVal = function (e) {
  if (password.value.length < 8) {
    passValid = false;
    document.getElementById(
      "passwordP"
    ).textContent = `Password must be at least 8 characters`;
    password.style.border = "2px solid red";
  } else if (password.value.length >= 8) {
    passValid = true;
    document.getElementById("passwordP").textContent = ``;
    password.style.border = `2px solid #ccc`;
  }
};

password.addEventListener("input", passVal);
password.addEventListener("blur", passVal);
submitBtn.addEventListener("click", passVal);

//************************************************************ */

//Gender Validation
var genderVal = function (e) {
  if (male.checked == false && female.checked == false) {
    genderValid = false;
    document.getElementById(
      "genderP"
    ).textContent = `Please select your gender`;
  } else if (male.checked == true || female.checked == true) {
    genderValid = true;
    document.getElementById("genderP").textContent = ``;
  }
};

female.addEventListener("click", genderVal);
male.addEventListener("click", genderVal);
female.addEventListener("mouseenter", genderVal);
female.addEventListener("mouseleave", genderVal);
male.addEventListener("mouseenter", genderVal);
male.addEventListener("mouseleave", genderVal);
submitBtn.addEventListener("click", genderVal);

//Phone Validation
var phoneVal = function () {
  var phoneIn = phone.value;
  var phoneTest = /(010|011|012|015)[0-9]{8}/;
  if (!phoneTest.test(phoneIn)) {
    phoneValid = false;
    let paraMsg = document.getElementById("phoneP");
    paraMsg.textContent = `phone is not valid`;
    phone.style.border = `2px solid red`;
    console.log("not");
  } else if (phoneTest.test(phoneIn) == true) {
    phoneValid = true;
    document.getElementById("phoneP").textContent = ``;
    phone.style.border = `2px solid #ccc`;
    console.log("yes");
  }
};
phone.addEventListener("input", phoneVal);
phone.addEventListener("blur", phoneVal);
submitBtn.addEventListener("click", phoneVal);

// --------------------------------
resetBtn.addEventListener("click", function () {
  document.getElementById("nameP").textContent = ``;
  uName.style.border = ``;

  document.getElementById("emailP").textContent = ``;
  email.style.border = ``;

  document.getElementById("passwordP").textContent = ``;
  password.style.border = ``;

  document.getElementById("phoneP").textContent = ``;
  phone.style.border = ``;

  document.getElementById("genderP").textContent = ``;
});
