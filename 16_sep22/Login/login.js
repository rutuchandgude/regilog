const form = document.querySelector('#form');
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener('submit',function(e){
    e.preventDefault();
    validate();
  });

    async function validate() {
      
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim(); 

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

  function isEmail(isemail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(isemail);
  }

     //validate password
     if (passwordVal === "") {
        setErrorMsg(password, "password cannot be blank");
      } else if (passwordVal.length < 8) {
        setErrorMsg(password, "password cannot be less than 8 char");
      } else if (passwordVal.length > 25) {
        setErrorMsg(password, "password cannot be more than 25 char");
      } else {
        setSuccessMsg(password);
      }
    
      if(emailVal != "" && emailVal.length > 5 && emailVal.length <= 100 && isEmail(emailVal) && passwordVal != "" && passwordVal.length >= 8 && passwordVal.length < 25){
        
    const object ={
      email:email.value,
      password:password.value
  };
 
  fetch('http://localhost:3000/registration')
  .then(res => res.json())
  .then(data=>{
      data.forEach(function(registration){
          const userInfo = JSON.stringify(registration);
          const databaseInfo = JSON.stringify(object);

          // console.log(userInfo);
          // console.log(databaseInfo);

          if(registration.email===object.email && registration.password===object.password){
              console.log('success');
              setTimeout(function() { alert("Login Successfully..🎉"); }, 5000);
              window.location.href="../Home/home.html";
          }
          else{
            console.log("err");
        }
      });
      
  })
.catch(error=>console.log('error'));

      };
    
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







