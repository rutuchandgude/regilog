// const form = document.getElementById("form");
// const firstName = document.getElementById("fname");
// const lastName = document.getElementById("lname");
// const email = document.getElementById("emailid");
// const mobileNo = document.getElementById("mobileno");
// const password = document.getElementById("pass");
// const cpassword = document.getElementById("cpassword");
// const radioBtn = document.getElementsByName("gender");
// const selectStream = document.querySelector("#slctstream");


$(document).ready(function () {

    $.getJSON("http://localhost:3000/registration",
            function (data) {
        var user = '';

        $.each(data, function (key, value) {
            
            // console.log(value);
             user += '<tr class="row">';
             user += '<td>' +
                value.firstName + '</td>';

                user += '<td>' +
                value.lastName + '</td>';
                
                user += '<td>' +
                value.email + '</td>';
                

                user += '<td>' +
                value.mobileNo + '</td>';

                user += '<td>' +
                value.radioBtn + '</td>';
                user += '<td>' +
                value.selectStream + '</td>';

                user += '<td id="delete" type="submit" class="btn" onclick="deleteRow(this);">Delete</td>' + '<td id="update" class="btn">Update</td>';

                user += '</tr>';
            user += '</tr>';  
        });
    
        $('#table').append(user);
    });
});


  
async function deleteRow(row){

//   let res = await delete(
//       "http://localhost:3000/registration/",
//       row
//   );
//   let data = res.data;
//   console.log(data);
   
    $(row).closest("tr").remove();
    console.log("deleterow");
}





            
 