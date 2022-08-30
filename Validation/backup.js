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
uName.addEventListener("blur", function (e) {
  console.log(e.target);
  if (uName.value.length == 0) {
    paraMsg = document.getElementById("nameP").textContent = `Name is required`;
    console.log(paraMsg);
  }
});

uName.addEventListener("blur", function (e) {
  console.log(e.target);
  if (uName.value.length == 0) {
    uName.style.border = `2px solid red`;
    console.log(paraMsg);
  }
});

submitBtn.addEventListener("click", function (e) {
  console.log();
  if (uName.value.length == 0) {
    e.preventDefault();
    paraMsg = document.getElementById("nameP").textContent = `Name is required`;
    console.log(paraMsg);
  }
});

//Email Validation
email.addEventListener("input", function () {
  var emailIn = email.value;
  var emailTest = /\w+@gmail.com/;
  if (emailTest.test(emailIn) == false) {
    paraMsg = document.getElementById(
      "emailP"
    ).textContent = `Email is not valid`;
  } else if (emailTest.test(emailIn) == true) {
    paraMsg = document.getElementById("emailP").textContent = ``;
  }
});

submitBtn.addEventListener("click", function () {
  var emailIn = email.value;
  var emailTest = /\w@gmail.com/;
  if (emailTest.test(email) == false) {
    paraMsg = document.getElementById(
      "emailP"
    ).textContent = `Email is not valid`;
  }
});

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
    console.log(paraMsg);
  }
});

//Gender Validation
gender.addEventListener("mouseenter", function () {
  if (male.checked || female.checked == false) {
    paraMsg = document.getElementById(
      "genderP"
    ).textContent = `Please select your gender`;
  } else if (male.checked || female.checked == true) {
    paraMsg = document.getElementById("genderP").textContent = ``;
  }
});

gender.addEventListener("mouseleave", function () {
  if (male.checked || female.checked == false) {
    paraMsg = document.getElementById(
      "genderP"
    ).textContent = `Please select your gender`;
  } else if (male.checked || female.checked == true) {
    paraMsg = document.getElementById("genderP").textContent = ``;
  }
});

//Sport Checkbox Validation
sport.addEventListener("mouseenter", function () {
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
});

sport.addEventListener("mouseleave", function () {
  var sporstsGroup = document.getElementsByName("sport");
  //   console.log(sporstsGroup);
  var checkedSport = 0;
  for (var i = 0; i < sporstsGroup.length; i++) {
    if (sporstsGroup[i].checked) {
      checkedSport++;
    }
  }
  if (checkedSport >= 2) {
    paraMsg = document.getElementById("sportP").textContent = ``;
    // console.log("mouse leave if" + checkedSport); //
  } else {
    paraMsg = document.getElementById(
      "sportP"
    ).textContent = `Pleas select at least 2 sports`;
    // console.log("mouse leave else" + checkedSport); //
  }
});

submitBtn.addEventListener("clicked", function () {
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
    // console.log("submit if" + checkedSport); //
  } else {
    paraMsg = document.getElementById(
      "sportP"
    ).textContent = `Pleas select at least 2 sports`;
    // console.log("submit else" + checkedSport); //
  }
});
