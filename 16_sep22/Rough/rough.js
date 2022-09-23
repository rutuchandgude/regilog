
var sum = function(array, i) {
    if(array.length === 0){
        return 0;
    }
  console.log(array[i]);
  if(i === array.length-1){
    return array[i];
  }
  return array[i] + sum(array, i+1);
};
console.log(sum([1, 2, 3, 4, 5, 6],0))





// function swap(){
// 	var arr= [ 1, 2, 3, 4, 5, 6];
// 	let N = sizeof(arr) / sizeof(arr[0]);
// 	let d = 2;

// console.log(arr, d, N);
// 	console.log(arr, N);

// 	return 0;

// function Rotate(arr, d, n)
// {

// let temp;
 

// let k = 0;

// 	for (let i = d; i < n; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}


// 	for (let i = 0; i < d; i++) {
// 		temp[k] = arr[i];
// 		k++;
// 	}

// 	for (let i = 0; i < n; i++) {
// 		arr[i] = temp[i];
        
        
// 	}
// }


// function printTheArray(arr, n)
// {
// 	for (let i = 0; i < n; i++) {
// 		cout << arr[i] << " ";
//         console.log(arr[i]);
// 	}
// }


// }



//--------------Login---------------------

// let fData={        
//   'email':email.value,  
//   'password':password.value
// }
// console.log(fData);
//   let res = await axios.post('http://localhost:3000/registration', fData);
//   let data = res.data;
//   console.log(data);

// }  






const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const emailInput = document.querySelector("#email").value;
    const passInput = document.querySelector("#password").value;

    async function validate() {
  const mailInputVal = emailInput.value.trim();
  const passInputVal = passInput.value.trim();
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

      if(emailVal != "" && emailVal.length > 5 && emailVal.length <= 100 && isEmail(emailVal) && passwordVal != "" && passwordVal.length > 8 && passwordVal.length < 25){
        let fData={
            'email':email.value,
        'password':password.value,}
        
      }




    const object ={
        email:emailInput,
        password:passInput
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
            }
            else{
                console.log("err");
            }
        });
    })
  .catch(error=>console.log('error'));
})















//---------------Login-------
const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    validate();
  });
  
    const email = document.querySelector("#email").value;
    const passInput = document.querySelector("#password").value;

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
    

      if(emailVal != "" && emailVal.length > 5 && emailVal.length <= 100 && isEmail(emailVal) && passwordVal != "" && passwordVal.length > 8 && passwordVal.length < 25){
      
    const object ={
        email:emailInput,
        password:passInput
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
            }
            else{
                console.log("err");
            }
        });
    })
  .catch(error=>console.log('error'));


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


//-----------Home-------------

var outletCount = 0; //global variable to get the no of outlets
var data = [{
    "outlet": "JAYANAGAR",
    "cancelled": 126544,
    "duplicate": 1
  },
  {
    "outlet": "MALLESHWARAM",
    "cancelled": 31826,
    "duplicate": 31
  },
  {
    "outlet": "KOLAR",
    "cancelled": 10374,
    "duplicate": 10
  },
  {
    "outlet": "New Test",
    "cancelled": 154,
    "duplicate": 20
  }
];

let formatData = function(data) { //outlets is unique thats why formating it to loop forward in my code
  let outlets = [];
  data.forEach(element => {
    if (outlets.indexOf(element.outlet) == -1) {
      outlets.push(element.outlet);
    }
  });
  outletCount = outlets.length //calculating outlet count

  return {
    data: data,
    outlets: outlets,

  };
};

let renderTable = function(data) {
  outlets = data.outlets;
  data = data.data;
  let tbl = document.getElementById("tblOlSalesSummary");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");
  let th = document.createElement("th");
  th.innerHTML = "Bill Type"; //header
  th.classList.add("text-center");
  headerRow.appendChild(th);
  th = document.createElement("th");
  th.innerHTML = "Average"; //header
  th.classList.add("text-center");
  headerRow.appendChild(th);
  outlets.forEach(element => {
    th = document.createElement("th");
    th.innerHTML = element; //this one is populating outlet as header
    th.classList.add("text-center");

    headerRow.appendChild(th);

  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  let tbody = document.createElement("tbody"); // from here onwards i don't know what to do

  let row = document.createElement("tr");

  let total = 0;

  // static field insertion for Cancelled bill
  let el = 'Cancelled bill';
  td = document.createElement("td");
  td.innerHTML = el.toLocaleString('en-in');
  td.classList.add("text-right");
  row.appendChild(td);
  // Logic start to find the average cancelled amount 
  var total_cancel =0;
  total_can_count = 0;
  outlets.forEach(outlet => { 
    data.forEach(d => {
      if (d.outlet == outlet) {
        total_cancel += parseInt(d.cancelled);
        total_can_count++;

      }
    });
  });

  let el_avg = ( total_cancel / (total_can_count) );
  td = document.createElement("td");
  td.innerHTML = el_avg.toLocaleString('en-in');
  td.classList.add("text-right");
  row.appendChild(td);
  // Logic End to find the average cancelled amount 

  outlets.forEach(outlet => { 
    let el = 0;
    data.forEach(d => {
      if (d.outlet == outlet) {
        total += parseInt(d.cancelled);
        el = d.cancelled;
      }
    });
    td = document.createElement("td");
    td.innerHTML = el.toLocaleString('en-in');
    td.classList.add("text-right");
    row.appendChild(td);
  });

  
  /* console.log("row is : " , row.children ) */

  tbody.appendChild(row);

  let row_duplicate = document.createElement("tr");

  let total_dup = 0;
  // static field insertion for duplicate bill
  let el_2 = 'Duplicate bill';
  td = document.createElement("td");
  td.innerHTML = el_2.toLocaleString('en-in');
  td.classList.add("text-right");
  row_duplicate.appendChild(td);

  // Logic start to find the Duplicate average  
  total_dup_count = 0;
  outlets.forEach(outlet => { 
    data.forEach(d => {
      if (d.outlet == outlet) {
        total_dup += parseInt(d.duplicate);
        total_dup_count++;
      }
    });
  });

  let el_avg_2 = ( total_dup / (total_dup_count) );
  td = document.createElement("td");
  td.innerHTML = el_avg_2.toLocaleString('en-in');
  td.classList.add("text-right");
  row_duplicate.appendChild(td);

  // Logic End to find the Duplicate average  

  outlets.forEach(outlet => { //i am trying to loop through outlets but getting somthing else
    let el = 0;
    data.forEach(d => {
      if (d.outlet == outlet) {
        total += parseInt(d.duplicate);
        el = d.duplicate;
      }
    });
    td = document.createElement("td");
    td.innerHTML = el.toLocaleString('en-in');
    td.classList.add("text-right");
    row_duplicate.appendChild(td);
  });


  /* console.log("row is : " , row.children ) */

  tbody.appendChild(row);
  tbody.appendChild(row_duplicate);

  table.appendChild(tbody);
  tbl.innerHTML = "";
  tbl.appendChild(table);
  table.classList.add("table");
  table.classList.add("table-striped");
  table.classList.add("table-bordered");
  table.classList.add("table-hover");
}
let formatedData = formatData(data);
renderTable(formatedData);

{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
<div align="center" class="table table-responsive">
  <table id="tblOlSalesSummary"></table>
</div> */}

//-------------Home-- js---------------

function CreateTableFromJSON() {
  var obj = { "registration":[
      {
      
          "firstName": "rutuja",
          "lastName": "chandgude",
          "email": "rutu@gmail.com",
          "mobileNo": "1234123456",
          "password": "123123123",
          "cpassword": "123123123",
          "radioBtn": "Other",
          "selectStream": "Civil engineering",
          "id": 2
      },
      {
        "firstName": "rutuja",
        "lastName": "chandgude",
        "email": "rutu@gmail.com",
        "mobileNo": "1234123456",
        "password": "123123123",
        "cpassword": "123123123",
        "radioBtn": "Other",
        "selectStream": "Civil engineering",
        "id": 3
      }]}

var table = document.createElement('table');

var tr = table.insertRow(-1);

function iterate(obj,table,tr){

for(var props in obj){

  if(obj.hasOwnProperty(props)){

      if(typeof obj[props]=='object')
          {
              var trNext = table.insertRow(-1);
              var tabCellHead = trNext.insertCell(-1);
              var tabCell = trNext.insertCell(-1);
              var table_in = document.createElement('table'); 
              var tr_in;
              var th = document.createElement("th");      
              th.innerHTML = props;

              tabCellHead.appendChild(th);
              tabCell.appendChild(table_in)
              iterate(obj[props],table_in,tr_in);
          }
      else
          {
              if(tr === undefined)
              {
                  tr = table.insertRow(-1);
              }
              var tabCell = tr.insertCell(-1);
              console.log(props+' * '+obj[props]);
              tabCell.innerHTML = obj[props];
          }
  }
}
}

iterate(obj,table,tr);

var divContainer = document.getElementById("showData");
  divContainer.innerHTML = "";
  divContainer.appendChild(table);

}





//     async function CreateTable(){
//         fetch('http://localhost:3000/registration')
//         .then(res => res.json())
//         .then(data=>{

//             data.forEach(function(registration){  
//                 const obj = JSON.stringify(data);
//                 console.log(obj);

//             });  
//         })
//       .catch(error=>console.log('error'));
//       };

//  };

















