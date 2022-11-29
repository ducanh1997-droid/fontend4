const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123456";
function login(){
     if(ADMIN_USERNAME == document.getElementById("username").value &&
         ADMIN_PASSWORD == document.getElementById("password").value){
          window.location.href = 'vehicleadmin.html';
     }else{
          alert("Tài khoản không tồn tại");
     }

     // location.replace("https://www.w3schools.com")
}
