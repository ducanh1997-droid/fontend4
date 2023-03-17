function login() {
    let username = $("#username1").val()
    let password = $("#password1").val()
    let user = {
        username: username,
        password: password,
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/users/login",
        data: JSON.stringify(user),
        success:function (data)
        {
            alert("Bạn đã đăng nhập thành công")
            window.location.href = "/casestudy/vehicleadmin.html?_ijt=vt93siqgvkl71t2m2vke2hhi3a&_ij_reload=RELOAD_ON_SAVE#"
        },error:function (){
            alert("Bạn đã nhập sai tài khoản hoặc mật khẩu!!!")
        }
    })
    event.preventDefault();
}
function register(){
    let username=$("#username").val()
    let email =$("#email").val()
    let password=$("#password").val()
    let confimPassword=$("#confirm-password").val()
    if (password !== confimPassword) {
        alert('Mật khẩu và xác nhận mật khẩu không giống nhau!');
        return ;
    }
    let user={
        username:username,
        email: email,
        password : password,
    }
    $.ajax({
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/users/register",
        data: JSON.stringify(user),
        success:function (data){
            alert("Bạn đã đăng kí thành công mời bạn đăng nhập để vào ứng dụng !!")
            window.location.href="index.html"
        },
        error:function (){
            alert("bạn đã nhập sai định dạng mời bạn đăng nhập lại!!")
        }
    })
    event.preventDefault();
}