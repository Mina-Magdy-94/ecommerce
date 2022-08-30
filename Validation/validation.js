var uName = document.getElementById("name");
var email = document.getElementById("email");
var passsword = document.getElementById("password");
var gender = document.getElementById("gender");
var sport = document.getElementById("sport");
var country = document.getElementById("country");
var submitBtn = document.getElementById("submit");
var resetBtn = document.getElementById("reset");
var male = document.getElementById("male");
var female = document.getElementById("female");
var tennis = document.getElementById("tennis");
var running = document.getElementById("running");
var football = document.getElementById("football");
// console.log(
//   uName,
//   email,
//   passsword,
//   gender,
//   sport,
//   country,
//   submitBtn,
//   resetBtn
// );

//Name Validation
var namVal = function () {
  if (uName.value.length == 0) {
    paraMsg = document.getElementById("nameP").textContent = `Name is required`;
    uName.style.border = `2px solid red`;
  } else {
    paraMsg = document.getElementById("nameP").textContent = ``;
    uName.style.border = `2px solid #ccc`;
  }
};
uName.addEventListener("blur", namVal);
uName.addEventListener("focus", namVal);

uName.addEventListener("input", function () {
  if (uName.value.length < 5) {
    uName.style.border = `2px solid red`;
    paraMsg = document.getElementById(
      "nameP"
    ).textContent = `Write at least 5 characters`;
    console.log(paraMsg);
  } else {
    paraMsg = document.getElementById("nameP").textContent = ``;
    uName.style.border = `2px solid #ccc`;
    console.log(paraMsg);
  }
});

submitBtn.addEventListener("click", function (e) {
  if (uName.value.length == 0) {
    e.preventDefault();
    paraMsg = document.getElementById("nameP").textContent = `Name is required`;
    uName.style.border = `2px solid red`;
  }
});
// *********************************************************//
//Email Validation
var emailVal = function () {
  var emailIn = email.value;
  var emailTest = /\w+@gmail.com/;
  if (emailTest.test(emailIn) == false) {
    paraMsg = document.getElementById(
      "emailP"
    ).textContent = `Email is not valid`;
    emailIn.style.border = `2px solid red`;
  } else if (emailTest.test(emailIn) == true) {
    paraMsg = document.getElementById("emailP").textContent = ``;
    email.style.border = `2px solid #ccc`;
  }
};
email.addEventListener("input", emailVal);
submitBtn.addEventListener("click", emailVal);
//****************************************************************//
//password Validation
passsword.addEventListener("input", function (e) {
  if (passsword.value.length < 8) {
    paraMsg = document.getElementById(
      "passwordP"
    ).textContent = `Password must be at least 8 characters`;
    passsword.style.border = `2px solid red`; //Something is not working ***********************
  } else if (passsword.value.length >= 8) {
    paraMsg = document.getElementById("passwordP").textContent = ``;
    passsword.style.border = `2px solid green`; //Something is not working************************
  }
});

submitBtn.addEventListener("click", function (e) {
  console.log();
  if (passsword.value.length < 8) {
    e.preventDefault();
    paraMsg = document.getElementById(
      "passwordP"
    ).textContent = `Password must be at least 8 characters`;
    passsword.style.border = `2px solid red`;
  }
});
// ****************************************************//
//Gender Validation
var genderVal = function () {
  if (male.checked == false && female.checked == false) {
    paraMsg = document.getElementById(
      "genderP"
    ).textContent = `Please select your gender`;
  } else if (male.checked == true || female.checked == true) {
    paraMsg = document.getElementById("genderP").textContent = ``;
  }
};
female.addEventListener("click", genderVal);
male.addEventListener("click", genderVal);
gender.addEventListener("mouseenter", genderVal);
gender.addEventListener("mouseleave", genderVal);
//****************************************************//
//Sport Checkbox Validation
var sportsVal = function () {
  var sporstsGroup = document.getElementsByName("sport");
  console.log(sporstsGroup);
  var checkedSport = 0;
  for (var i = 0; i < sporstsGroup.length; i++) {
    if (sporstsGroup[i].checked) {
      checkedSport++;
    }
  }
  if (checkedSport >= 2) {
    paraMsg = document.getElementById("sportP").textContent = ``;
    // console.log("mouse enter if" + checkedSport); //
  } else {
    paraMsg = document.getElementById(
      "sportP"
    ).textContent = `Pleas select at least 2 sports`;
    // console.log("mouse enter else" + checkedSport); //
  }
};
sport.addEventListener("mouseenter", sportsVal);
sport.addEventListener("mouseleave", sportsVal);
submitBtn.addEventListener("clicked", sportsVal);
//*********************************************************//
//Validation for Select element
var countryVal = function () {
  if (country.value == "") {
    paraMsg = document.getElementById(
      "countryP"
    ).textContent = `Please select country`;
  } else {
    paraMsg = document.getElementById("countryP").textContent = ``;
  }
};
country.addEventListener("mouseenter", countryVal);
country.addEventListener("mouseleave", countryVal);
country.addEventListener("click", countryVal);
