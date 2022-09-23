const form = document.querySelector("#form");
const email = document.querySelector("#email");
const verifyBtn = document.querySelector("verifybtn");
document.querySelector("#password").disabled=true;
document.querySelector("#cpassword").disabled=true;
 let id;
let firstname;
let lname;
let emailid;
let mobno;
let pass;
let gender;
let selectstream;


form.addEventListener("submit", function (e) {
  e.preventDefault();
  validate();
});

 function validate() {
  const emailVal = email.value.trim();
 // const passwordVal = password.value.trim();
//   const cpasswordVal = cpassword.value.trim();



  //validate email
//   if (emailVal === "") {
//     setErrorMsg(email, "emailid cannot be blank");
//   } else if (emailVal.length < 5) {
//     setErrorMsg(email, "emailid min 5 char");
//   } else if (emailVal.length >= 100) {
//     setErrorMsg(email, "emailid less than 100 char");
//   } else if (!isEmail(emailVal)) {
//     setErrorMsg(email, "Not valid email");
//   } else {
//     setSuccessMsg(email);
//   }

//   function isEmail(isemail) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(isemail);
//   }

 
  //confirm password
//   if (cpasswordVal === "") {
//     setErrorMsg(cpassword, "password cannot be blank");
//   } else if (password.value !== cpassword.value) {
//     setErrorMsg(cpassword, "Password are not matching");
//   } else {
//     setSuccessMsg(cpassword);
//   }

  if (
    emailVal != "" &&
    emailVal.length > 5 &&
    emailVal.length <= 100 
    // isEmail(emailVal) &&
    // passwordVal != "" &&
    // checkPass(passwordVal) &&
    // passwordVal.length >= 8 &&
    // passwordVal.length < 25 &&
    // cpasswordVal != "" &&
    // password.value == cpassword.value
  ) {
    const object = {
      email: email.value
    };

    fetch("http://localhost:3000/registration")
      .then((res) => res.json())
      .then((data) => {
        data.forEach(function (registration) {
          const userInfo = JSON.stringify(registration);
          const databaseInfo = JSON.stringify(object);
                // userEmail=registration.email;
          if (registration.email === object.email) {


            console.log("success");
         
             id = registration.id;
             firstname=registration.firstName;
             lname=registration.lastName;
             emailid=registration.email;
             mobno=registration.mobileNo;
             pass=registration.password;
            gender=registration.radioBtn;
            selectstream=registration.selectStream;

            document.querySelector("#password").disabled=false;
            document.querySelector("#cpassword").disabled=false;

          let password=document.querySelector("#password").value;

       //validate password
//   if (password === "") {
//     setErrorMsg(password, "password cannot be blank");
//   } else if (password.length < 8) {
//     setErrorMsg(password, "password cannot be less than 8 char");
//   } else if (password.length > 25) {
//     setErrorMsg(password, "password cannot be more than 25 char");
//   } else if (!checkPass(password)) {
//     setErrorMsg(password, "Enter strong password");
//   } else {
//     setSuccessMsg(password);
//   }

//   function checkPass(checkpass) {
//     return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,25}$/.test(
//       checkpass
//     );
//   }

            passChange();

          } else {
            console.log("err");
          }
        });
      })
      .catch((error) => console.log("error"));
  }
}

//    document.querySelector("verifybtn").disabled=true;
  
async function passChange(){
    passVal1 = document.querySelector("#password").value;
   passVal2 =  document.querySelector("#cpassword").value;
   if(passVal1 == passVal2 && passVal1!=''){
    const object = {
        "firstName": firstname,
        "lastName": lname,
        "email": emailid,
        "mobileNo": mobno,
        "password":  passVal1,
        "radioBtn": gender,
        "selectStream":selectstream,
        "id":id
      };
            
            let res =await axios.put(   
                "http://localhost:3000/registration/"+id,
               object
              );
              let data = res.data;
              console.log(data);
              console.log("pass Match");
              setTimeout(function() { alert("Pass change Successfully"); }, 5000);
              window.location.href="../Login/login.html";
          }else{
            console.log("pass isn't Match");
     
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
