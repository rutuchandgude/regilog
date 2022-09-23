const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("emailid");
const mobileNo = document.getElementById("mobileno");
const password = document.getElementById("pass");
const cpassword = document.getElementById("cpassword");
const radioBtn = document.getElementsByName("gender");
const selectStream = document.querySelector("#slctstream");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

let userEmail;
async function validate() {

  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = mobileNo.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  const radioBtnVal = radioBtn.value;
  const selectStreamVal = selectStream.options[selectStream.selectedIndex].text;

  //validate usename
  if (firstNameVal === "") {
    setErrorMsg(firstName, "Firstname cannot be blank");
  } else if (!isAlphabate(firstNameVal)) {
    setErrorMsg(firstName, "Firstname can only be alphabate");
  } else if (firstNameVal.length <= 2) {
    setErrorMsg(firstName, "Firstname should be min 3 char");
  } else if (firstNameVal.length >= 50) {
    setErrorMsg(firstName, "Firstname less than 50 char");
  } else {
    setSuccessMsg(firstName);
  }

  //validate lastname
  if (lastNameVal === "") {
    setErrorMsg(lastName, "Lastname cannot be blank");
  } else if (!isAlphabate(lastNameVal)) {
    setErrorMsg(lastName, "Lastname can only be alphabate");
  } else if (lastNameVal.length <= 2) {
    setErrorMsg(lastName, "Lastname should be min 3 char");
  } else if (lastNameVal.length >= 50) {
    setErrorMsg(lastName, "Lastname less than 50 char");
  } else {
    setSuccessMsg(lastName);
  }

  //validate mobilno
  if (phoneVal === "") {
    setErrorMsg(mobileNo, "Mobile number cannot be blank");
  } else if (phoneVal == "0") {
    setErrorMsg(mobileNo, "Phone number cannot start with 0");
  } else if (!isDigit(phoneVal)) {
    setErrorMsg(mobileNo, "Invalid number, must be 10 digits");
  } else if (phoneVal.length != 10) {
    setErrorMsg(mobileNo, "Phone number must be 10 digits.");
  } else {
    setSuccessMsg(mobileNo);
  }

  //validate email
  if (emailVal === "") {
    setErrorMsg(email, "emailid cannot be blank");
  } else if (emailVal.length < 5) {
    setErrorMsg(email, "emailid min 5 char");
  } else if (emailVal.length >= 100) {
    setErrorMsg(email, "emailid less than 100 char");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not valid email");
  } else {
    setSuccessMsg(email);
  }

  const object ={
    email:email.value,
};
  fetch('http://localhost:3000/registration')
  .then(res => res.json())
  .then(data=>{
      data.forEach(function(registration){
          const userInfo = JSON.stringify(registration);
          const databaseInfo = JSON.stringify(object);
          userEmail=registration.email;
         
          // console.log(userInfo);
          // console.log(databaseInfo);

          if(registration.email===object.email){
              console.log('user already registered');
              setTimeout(function() { alert("user already registered"); }, 5000);
              window.location.href="../Registration/registration.html";
          }
          else{
            console.log("new user");
        }

      });
      
  })
.catch(error=>console.log('error'));

      

  //validate password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, "password cannot be less than 8 char");
  } else if (passwordVal.length > 25) {
    setErrorMsg(password, "password cannot be more than 25 char");
  } else if (!checkPass(passwordVal)) {
    setErrorMsg(password, "Enter strong password");
  } else {
    setSuccessMsg(password);
  }

  //confirm password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "password cannot be blank");
  } else if (password.value !== cpassword.value) {
    setErrorMsg(cpassword, "Password are not matching");
  } else {
    setSuccessMsg(cpassword);
  }

  //Gender
  let i = 0;
  if (radioBtn[i].checked) {
    console.log("Gender: " + radioBtn[i].value);
  } else if (radioBtn[i + 1].checked) {
    console.log("Gender: " + radioBtn[i + 1].value);
  } else if (radioBtn[i + 2].checked) {
    console.log("Gender: " + radioBtn[i + 2].value);
  } else {
    alert("select gender");
  }

  //Select stream
  let j = 0;
  if (selectStream.value === "0") {
    alert("Please Select stream");
  } else {
    setSuccessMsg(selectStream);
    console.log(selectStreamVal);
  }

  function isAlphabate(isalpha) {
    return /^[A-Za-z]+$/.test(isalpha);
  }

  function isDigit(isdigit) {
    return /^\d{10}$/.test(isdigit);
  }

  function isEmail(isemail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(isemail);
  }
  // successMsg();
  function checkPass(checkpass) {
    return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/.test(checkpass);
  }

  if (
    firstNameVal != "" &&
    firstNameVal.length >= 2 &&
    firstNameVal.length <= 50 &&
    lastNameVal != "" &&
    lastNameVal.length >= 2 &&
    lastNameVal.length <= 50 &&
    phoneVal != 0 &&
    isDigit(phoneVal) &&
    phoneVal.length == 10 &&
    emailVal != "" && userEmail!=emailVal &&
    emailVal.length > 5 &&
    emailVal.length <= 100 &&
    isEmail(emailVal) &&
    passwordVal != "" &&
   checkPass(passwordVal) &&
    passwordVal.length >= 8 &&
    passwordVal.length < 25 &&
    cpasswordVal != "" &&
    password.value == cpassword.value &&
    selectStream.value != 0
  ) {
    let gender;
    for (let i = 0; i < 3; i++) {
      if (radioBtn[i].checked) {
        radioBtn[i].value;
        gender = radioBtn[i].value;
      }
    }

    let fData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      mobileNo: mobileNo.value,
      password: password.value,
      cpassword: cpassword.value,
      radioBtn: gender,
      selectStream: selectStream.value,
    };
    
    // let flag=true;

    let res = axios.post(
      "http://localhost:3000/registration",
      fData
    );
    let data = res.data;
    console.log(data);
     setTimeout(function() { alert("Registration Successfull..✨"); }, 5000);
     window.location.href="../Login/login.html";
  } else {
    console.log("regierror");
  }
}

function setErrorMsg(input, errormsgs) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector("small");
  inputBox.className = "input-box error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const inputBox = input.parentElement;
  inputBox.className = "input-box success";
}
