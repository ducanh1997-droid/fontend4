let percent;
let context ="";
let countCash = 0;
class Vehicle{
    constructor(id,car,manufacturer,type,productionYear,origin,licensePlates,driver){
            this.id = id;
            this.car = car;
            this.manufacturer = manufacturer;
            this.type = type;
            this.productionYear = productionYear;
            this.origin = origin;
            this.licensePlates =licensePlates;
            this.driver = driver;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getCar(){
        return this.car;
    }
    setCar(car){
        this.car = car;
    }
    getManufacturer(){
        return this.manufacturer;
    }
    setManufacturer(manufacturer){
        this.manufacturer = manufacturer;
    }
    getType(){
        return this.type;
    }
    setType(type){
        this.type = type;
    }
    getOrigin(){
        return this.origin;
    }
    setOrigin(origin){
        this.origin =origin;
    }
    getLicensePlates(){
        return this.licensePlates;
    }
    setLicensePlates(licensePlates){
        this.licensePlates =licensePlates;
    }
    getDriver(){
        return this.driver;
    }
    setDriver(driver){
        this.driver = driver;
    }
    getProductionYear(){
        return this.productionYear;
    }
    setProductionYear(productionYear){
        this.productionYear = productionYear;
    }
}

let car1 = new Vehicle(1,"Santafe","HUYNDAI","7","2017","Singapore","30E-25646","Nguyễn xuân Sang");
let car2 = new Vehicle(2,"Creta","HUYNDAI","5","2022","Singapore","30H-25766","Nguyễn Văn Tùng");
let car3 = new Vehicle(3,"Grand i10","HUYNDAI","4","2021","Singapore","37H-12766","Phan Văn Minh");
let car4 = new Vehicle(4,"Santafe","HUYNDAI","7","2017","Singapore","30E-25646","Nguyễn xuân Sang");
let car5 = new Vehicle(5,"Creta","HUYNDAI","5","2022","Singapore","30H-25766","Nguyễn Văn Tùng");
let car6 = new Vehicle(6,"Grand i10","HUYNDAI","4","2021","Singapore","37H-12766","Phan Văn Minh");
let car7 = new Vehicle(7,"Creta","HUYNDAI","5","2022","Singapore","30H-25766","Nguyễn Văn Tùng");
let car8 = new Vehicle(8,"Grand i10","HUYNDAI","4","2021","Singapore","37H-12766","Phan Văn Minh");
let vehicleArr = [car1,car2,car3,car4,car5,car6,car7,car8];
function display(){
    let result = "";
    for(let i = 0;i<vehicleArr.length;i++){
        if(vehicleArr.length>=i){
        result += "<tr>"+
            "<td>"+ vehicleArr[i].getId()+"</td>"+
            "<td>"+ vehicleArr[i].getCar()+"</td>"+
            "<td>"+ vehicleArr[i].getManufacturer()+"</td>"+
            "<td>"+ vehicleArr[i].getType()+" chỗ</td>"+
            "<td>"+ vehicleArr[i].getProductionYear()+"</td>"+
            "<td>"+ vehicleArr[i].getOrigin()+"</td>"+
            "<td>"+ vehicleArr[i].getLicensePlates()+"</td>"+
            "<td>"+ vehicleArr[i].getDriver()+"</td>"+
            "<td><a href='#' class=\"btn btn-info\" onclick='openEditForm("+i+"); return false;'>Sửa</a>"+"</td>"+
            "<td><a href='#' class=\"btn btn-delete\" onclick='Delete("+i+"); return false;'>Xoá</a>"+"</td>"
        + "</tr>"
    }
    }
    document.getElementById("data").innerHTML = result;
}

function openForm(){
    document.getElementById("content-table").style.filter = "blur(10px)";
    document.getElementById("popup").style.display = "block";
}
function openFormAccount(){
    document.getElementById("content-account").style.filter = "blur(10px)";
    document.getElementById("popup1").style.display = "block";
}
function openFormPlan(){
    document.getElementById("content-plan").style.filter = "blur(10px)";
    document.getElementById("popup2").style.display = "block";
}
function closeForm(){
    document.getElementById("content-table").style.filter = "blur(0px)";
    document.getElementById("popup").style.display = "none";
}
function closeFormAccount(){
    document.getElementById("content-account").style.filter = "blur(0px)";
    document.getElementById("popup1").style.display = "none";
}
function closeFormPlan(){
    document.getElementById("content-plan").style.filter = "blur(0px)";
    document.getElementById("popup2").style.display = "none";
}
function Delete(index){
    vehicleArr.splice(index,1);
    paging(vehicleArr.length);
}

function add(){
   let car = document.getElementById("car").value;
   let manufacturer = document.getElementById("manufacturer").value;
   let driver = document.getElementById("find-width-user").value;
   let indexPlace = document.getElementById("index-place").value;
   let licensePlates = document.getElementById("find-license-plates").value;
   let year = document.getElementById("year").value;
   let origin = document.getElementById("origin").value;

    let max = vehicleArr[0].getId();
    for(let i = 0;i<vehicleArr.length;i++){
        if(max<vehicleArr[i].getId()){
            max = vehicleArr[i].getId();
        }
    }
    let id = max+1;
    let newCar = new Vehicle(id,car,manufacturer,indexPlace,year,origin,licensePlates,driver);
    vehicleArr.push(newCar);
    paging(vehicleArr.length);

}
let editing;
function openEditForm(index){
    openForm();
}
function openEditFormAccount(index){
    openFormAccount();
}
function openEditFormPlan(index){
    openFormPlan();
}
function edit(editing){
    let car = document.getElementById("edit-car").value;
    let manufacturer = document.getElementById("edit-manufacturer").value;
    let driver = document.getElementById("edit-driver").value;
    let indexPlace = document.getElementById("edit-indexPlace").value;
    let licensePlates = document.getElementById("edit-licensePlates").value;
    let year = document.getElementById("edit-year").value;
    let origin = document.getElementById("edit-origin").value;

    let newCar = new Vehicle(editing+1,car,manufacturer,indexPlace,year,origin,licensePlates,driver);
    vehicleArr[editing] = newCar;
    closeForm();
    paging(vehicleArr.length);
}

// function paging(index){
//     page(1);
//     let result = "";
//     let numPage = Math.floor(index/5)+1;
//     for(let i=0;i<numPage;i++){
//         result += "<button onclick='page("+(i+1)+")'>"+(i+1)+"</button>"
//     }
//     document.getElementById("paging").innerHTML = result;
// }
// function page(index){
//     let resultPage = "";
//     for(let i = (index-1)*5+1; i<=(index*5);i++){
//         if(vehicleArr.length>=i){
//             resultPage += "<tr>"+
//                 "<td>"+ vehicleArr[i-1].getId()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getCar()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getManufacturer()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getType()+" chỗ</td>"+
//                 "<td>"+ vehicleArr[i-1].getProductionYear()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getOrigin()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getLicensePlates()+"</td>"+
//                 "<td>"+ vehicleArr[i-1].getDriver()+"</td>"+
//                 "<td><a href='#' class=\"btn btn-info\" onclick='openEditForm("+(i-1)+"); return false;'>Sửa</a>"+"</td>"+
//                 "<td><a href='#' class=\"btn btn-delete\" onclick='Delete("+(i-1)+"); return false;'>Xoá</a>"+"</td>"
//                 + "</tr>"
//         }
//     }
//     document.getElementById("data").innerHTML = resultPage;
// }

function Search(){
    vehicleArr = [car1,car2,car3,car4,car5,car6,car7,car8];
    let arrSearch = new Array();
    let arrTemp = vehicleArr;
    let car = document.getElementById("car").value;
    for(let i = 0;i<vehicleArr.length;i++){
            a = vehicleArr[i].getCar().toLowerCase();
            check = a.includes(car.toLowerCase());
            if(check){
                arrSearch.push(i);
            }
    }
    vehicleArr = [];
    for(let i=0;i<arrSearch.length;i++){
        vehicleArr.push(arrTemp[arrSearch[i]]);
    }console.log(car.toLowerCase());
    console.log(vehicleArr);

     paging(vehicleArr.length);
}
function getUserAdmin(username){
    document.getElementById("admin-welcome").innerHTML = "Xin chào "+username+" VietTransport";
    document.getElementById("welcomeSidebar").innerHTML = "Xin chào "+username+" VietTransport";
}

function openExchange(){
    document.getElementsByClassName("fa-user")[0].style.color = "#ffffff";
    document.getElementById("content-table").style.display = "block";
    document.getElementById("content-account").style.display = "none";
    document.getElementById("content-dashboard").style.display = "none";
    document.getElementById("content-chart").style.display = "none";
    document.getElementById("content-plan").style.display = "none";
    document.getElementById("dashboard").style.background = "#ffffff";
    document.getElementById("dashboard").style.color = "#8d8d8d";
    document.getElementById("dashboard").style.borderRadius = "none";
    document.getElementById("dashboard").style.width = "200px";
    document.getElementsByClassName("fa-chart-simple")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-ruler")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-piggy-bank")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-chart-mixed")[0].style.color = "#8d8d8d";
    document.getElementById("exchange").style.background = "#266663";
    document.getElementById("exchange").style.color = "#ffffff";
    document.getElementById("exchange").style.borderRadius = "5px";
    document.getElementById("exchange").style.width = "190px";
    document.getElementById("plan").style.background = "#ffffff";
    document.getElementById("plan").style.color = "#8d8d8d";
    document.getElementById("plan").style.borderRadius = "none";
    document.getElementById("plan").style.width = "200px";
    document.getElementById("account").style.background = "#ffffff";
    document.getElementById("account").style.color = "#8d8d8d";
    document.getElementById("account").style.borderRadius = "none";
    document.getElementById("account").style.width = "200px";
    document.getElementById("chart").style.background = "#ffffff";
    document.getElementById("chart").style.color = "#8d8d8d";
    document.getElementById("chart").style.borderRadius = "none";
    document.getElementById("chart").style.width = "200px";
}
function openPlan(){
    document.getElementsByClassName("fa-ruler")[0].style.color = "#ffffff";
    document.getElementById("content-table").style.display = "none";
    document.getElementById("content-account").style.display = "none";
    document.getElementById("content-dashboard").style.display = "none";
    document.getElementById("content-chart").style.display = "none";
    document.getElementById("content-plan").style.display = "block";
    document.getElementById("dashboard").style.background = "#ffffff";
    document.getElementById("dashboard").style.color = "#8d8d8d";
    document.getElementById("dashboard").style.borderRadius = "none";
    document.getElementById("dashboard").style.width = "200px";
    document.getElementById("exchange").style.background = "#ffffff";
    document.getElementById("exchange").style.color = "#8d8d8d";
    document.getElementById("exchange").style.borderRadius = "none";
    document.getElementById("exchange").style.width = "200px";
    document.getElementById("account").style.background = "#ffffff";
    document.getElementById("account").style.color = "#8d8d8d";
    document.getElementById("account").style.borderRadius = "none";
    document.getElementById("account").style.width = "200px";
    document.getElementsByClassName("fa-chart-simple")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-user")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-piggy-bank")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-chart-mixed")[0].style.color = "#8d8d8d";
    document.getElementById("plan").style.background = "#266663";
    document.getElementById("plan").style.color = "#ffffff";
    document.getElementById("plan").style.borderRadius = "5px";
    document.getElementById("plan").style.width = "190px";
    document.getElementById("data-plan").innerHTML = context;
    document.getElementById("chart").style.background = "#ffffff";
    document.getElementById("chart").style.color = "#8d8d8d";
    document.getElementById("chart").style.borderRadius = "none";
    document.getElementById("chart").style.width = "200px";

}
function openAccount(){
    document.getElementsByClassName("fa-piggy-bank")[0].style.color = "#ffffff";
    document.getElementById("content-table").style.display = "none";
    document.getElementById("content-dashboard").style.display = "none";
    document.getElementById("content-account").style.display = "block";
    document.getElementById("content-plan").style.display = "none";
    document.getElementById("content-chart").style.display = "none";
    document.getElementById("dashboard").style.background = "#ffffff";
    document.getElementById("dashboard").style.color = "#8d8d8d";
    document.getElementById("dashboard").style.borderRadius = "none";
    document.getElementById("dashboard").style.width = "200px";
    document.getElementById("exchange").style.background = "#ffffff";
    document.getElementById("exchange").style.color = "#8d8d8d";
    document.getElementById("exchange").style.borderRadius = "none";
    document.getElementById("exchange").style.width = "200px";
    document.getElementsByClassName("fa-chart-simple")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-ruler")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-user")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-chart-mixed")[0].style.color = "#8d8d8d";
    document.getElementById("account").style.background = "#266663";
    document.getElementById("account").style.color = "#ffffff";
    document.getElementById("account").style.borderRadius = "5px";
    document.getElementById("account").style.width = "190px";
    document.getElementById("plan").style.background = "#ffffff";
    document.getElementById("plan").style.color = "#8d8d8d";
    document.getElementById("plan").style.borderRadius = "none";
    document.getElementById("plan").style.width = "200px";
    document.getElementById("chart").style.background = "#ffffff";
    document.getElementById("chart").style.color = "#8d8d8d";
    document.getElementById("chart").style.borderRadius = "none";
    document.getElementById("chart").style.width = "200px";
}

function openChart(){
    document.getElementsByClassName("fa-chart-mixed")[0].style.color = "#ffffff";
    document.getElementById("content-table").style.display = "none";
    document.getElementById("content-dashboard").style.display = "none";
    document.getElementById("content-account").style.display = "none";
    document.getElementById("content-plan").style.display = "none";
    document.getElementById("content-chart").style.display = "block";
    document.getElementById("dashboard").style.background = "#ffffff";
    document.getElementById("dashboard").style.color = "#8d8d8d";
    document.getElementById("dashboard").style.borderRadius = "none";
    document.getElementById("dashboard").style.width = "200px";
    document.getElementById("exchange").style.background = "#ffffff";
    document.getElementById("exchange").style.color = "#8d8d8d";
    document.getElementById("exchange").style.borderRadius = "none";
    document.getElementById("exchange").style.width = "200px";
    document.getElementsByClassName("fa-chart-simple")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-ruler")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-user")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-piggy-bank")[0].style.color = "#8d8d8d";
    document.getElementById("chart").style.background = "#266663";
    document.getElementById("chart").style.color = "#ffffff";
    document.getElementById("chart").style.borderRadius = "5px";
    document.getElementById("chart").style.width = "190px";
    document.getElementById("plan").style.background = "#ffffff";
    document.getElementById("plan").style.color = "#8d8d8d";
    document.getElementById("plan").style.borderRadius = "none";
    document.getElementById("plan").style.width = "200px";
    document.getElementById("account").style.background = "#ffffff";
    document.getElementById("account").style.color = "#8d8d8d";
    document.getElementById("account").style.borderRadius = "none";
    document.getElementById("account").style.width = "200px";
}
function openDashboard(){
    createHomeChart();
    document.getElementsByClassName("fa-chart-simple")[0].style.color = "#ffffff";
    document.getElementById("content-table").style.display = "none";
    document.getElementById("content-dashboard").style.display = "block";
    document.getElementById("content-account").style.display = "none";
    document.getElementById("content-plan").style.display = "none";
    document.getElementById("content-chart").style.display = "none";
    document.getElementById("dashboard").style.background = "#266663";
    document.getElementById("dashboard").style.color = "#ffffff";
    document.getElementById("dashboard").style.borderRadius = "5px";
    document.getElementById("dashboard").style.width = "190px";
    document.getElementById("exchange").style.background = "#ffffff";
    document.getElementById("exchange").style.color = "#8d8d8d";
    document.getElementById("exchange").style.borderRadius = "none";
    document.getElementById("exchange").style.width = "200px";
    document.getElementById("plan").style.background = "#ffffff";
    document.getElementById("plan").style.color = "#8d8d8d";
    document.getElementById("plan").style.borderRadius = "none";
    document.getElementById("plan").style.width = "200px";
    document.getElementsByClassName("fa-user")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-ruler")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-piggy-bank")[0].style.color = "#8d8d8d";
    document.getElementsByClassName("fa-chart-mixed")[0].style.color = "#8d8d8d";
    document.getElementById("account").style.background = "#ffffff";
    document.getElementById("account").style.color = "#8d8d8d";
    document.getElementById("account").style.borderRadius = "none";
    document.getElementById("account").style.width = "200px";
    document.getElementById("chart").style.background = "#ffffff";
    document.getElementById("chart").style.color = "#8d8d8d";
    document.getElementById("chart").style.borderRadius = "none";
    document.getElementById("chart").style.width = "200px";
}


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody  = document.getElementsByClassName("tab-body")[0];
let tabPane = tabHeader.getElementsByTagName("div");
let tabPane1 = tabBody.getElementsByTagName("div");

// for(let i = 0;i<tabPane.length;i++){
//     tabPane[i].addEventListener("click",function (){
//
//
//
//     });
// }
function openIncome(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabPane[0].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("div")[0].classList.add("active");
    tabIndicator.style.left = `calc(calc(100%/2)*${0})`;
}

function openExpences(){
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabPane[1].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById("tab-expences").classList.add("active");
    tabIndicator.style.left = `calc(calc(100%/2)*${1})`;
}
$("select").on("click" , function() {
    $(this).parent(".select-box").toggleClass("open");
});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});

$("#form select").on("change" , function() {
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");

    label.find(".label-desc").html(selection);
});

function selectCategory(e) {
    if (e == "fa-dumbbell") {
        $("#block-fa-dumbbell p")[0].classList.add("active-category");
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        let id = $(".block-category p.active-category").attr("id");
        console.log(id);
        document.getElementById("fa-dumbbell").style.borderRadius = "2px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-bus") {
        $("#block-fa-bus p")[0].classList.add("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        let id = $(".block-category p.active-category").attr("id");
        console.log(id);
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "2px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-mug-saucer") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.add("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "2px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-family") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.add("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "2px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-school") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.add("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "2px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-gift") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.add("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "2px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-cart-shopping") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.add("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "2px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-hand-holding-dollar") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.add("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        let id = $(".block-category p.active-category").attr("id");
        console.log(id);
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "2px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-gift-card") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.add("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "2px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-question") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.add("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "2px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-sack-dollar") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");

        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        $("#block-fa-sack-dollar p")[0].classList.add("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-sack-dollar").style.borderRadius = "2px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-building-columns") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.add("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "2px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-person") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "2px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.add("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-pig") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "2px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.add("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-filter-circle-dollar") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "2px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.add("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");

    } else if (e == "fa-face-smile-relaxed") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "2px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.add("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-graduation-cap") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "2px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "100px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.add("active-category");
        $("#block-fa-handshake-angle p")[0].classList.remove("active-category");
    } else if (e == "fa-handshake-angle") {
        $("#block-fa-bus p")[0].classList.remove("active-category");
        $("#block-fa-dumbbell p")[0].classList.remove("active-category");
        $("#block-fa-mug-saucer p")[0].classList.remove("active-category");
        $("#block-fa-family p")[0].classList.remove("active-category");
        $("#block-fa-school p")[0].classList.remove("active-category");
        $("#block-fa-gift p")[0].classList.remove("active-category");
        $("#block-fa-cart-shopping p")[0].classList.remove("active-category");
        $("#block-fa-hand-holding-dollar p")[0].classList.remove("active-category");
        $("#block-fa-gift-card p")[0].classList.remove("active-category");
        $("#block-fa-question p")[0].classList.remove("active-category");
        $("#block-fa-sack-dollar p")[0].classList.remove("active-category");
        $("#block-fa-building-columns p")[0].classList.remove("active-category");
        document.getElementById("fa-dumbbell").style.borderRadius = "100px";
        document.getElementById("fa-bus").style.borderRadius = "100px";
        document.getElementById("fa-mug-saucer").style.borderRadius = "100px";
        document.getElementById("fa-family").style.borderRadius = "100px";
        document.getElementById("fa-school").style.borderRadius = "100px";
        document.getElementById("fa-gift").style.borderRadius = "100px";
        document.getElementById("fa-cart-shopping").style.borderRadius = "100px";
        document.getElementById("fa-hand-holding-dollar").style.borderRadius = "100px";
        document.getElementById("fa-gift-card").style.borderRadius = "100px";
        document.getElementById("fa-question").style.borderRadius = "100px";
        document.getElementById("fa-sack-dollar").style.borderRadius = "100px";
        document.getElementById("fa-building-columns").style.borderRadius = "100px";
        document.getElementById("fa-person").style.borderRadius = "100px";
        document.getElementById("fa-pig").style.borderRadius = "100px";
        document.getElementById("fa-filter-circle-dollar").style.borderRadius = "100px";
        document.getElementById("fa-face-smile-relaxed").style.borderRadius = "100px";
        document.getElementById("fa-graduation-cap").style.borderRadius = "100px";
        document.getElementById("fa-handshake-angle").style.borderRadius = "2px";
        $("#block-fa-person p")[0].classList.remove("active-category");
        $("#block-fa-pig p")[0].classList.remove("active-category");
        $("#block-fa-filter-circle-dollar p")[0].classList.remove("active-category");
        $("#block-fa-face-smile-relaxed p")[0].classList.remove("active-category");
        $("#block-fa-graduation-cap p")[0].classList.remove("active-category");
        $("#block-fa-handshake-angle p")[0].classList.add("active-category");
    }
}
function findAllCash() {
    $.ajax({
        url:"http://localhost:8080/cash",
        type:"GET",
        success(data){

            let arr = data.content;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<tr>
                                <td style="padding-top: 5px; box-sizing: border-box; ">
                                    <div style="float: left" class="icon-border-bus-dashboard" id="${arr[i].category.icon}">
                                        <i class="fa-light ${arr[i].category.icon}"></i>
                                    </div>
                                    <p >${arr[i].category.name}</p>
                                </td>
                                <td style="color: #8d8d8d">${arr[i].date.slice(0,10)}</td>
                                <td>${arr[i].name}</td>
                                <td>${arr[i].money.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</td>
                                <td>
                                    <a href="#" onclick="updateForm(${arr[i].id})" class="btn btn-info">Sửa</a>
                                </td>
                                <td>
                                    <a href="#" onclick="deleteCash(${arr[i].id})" class="btn btn-delete">Xoá</a>
                                </td>
                            </tr>`
            }
            document.getElementById("data").innerHTML = context
        }
    })
}

function findAllAccount() {
    $.ajax({
        url:"http://localhost:8080/account",
        type:"GET",
        success(data){
            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<tr>
                                <td style="padding-top: 5px; box-sizing: border-box; ">
                                    <div style="float: left" class="icon-border-bus-dashboard" id="${arr[i].category.icon}">
                                        <i class="fa-light ${arr[i].category.icon}"></i>
                                    </div>
                                    <p >${arr[i].category.name}</p>
                                </td>
                                <td>${arr[i].money.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</td>
                                <td>${arr[i].nameCard}</td>
                                <td style="color: #8d8d8d">${arr[i].expired}</td>
                                <td>
                                    <a href="#" onclick="updateFormAccount(${arr[i].id})" class="btn btn-info">Sửa</a>
                                </td>
                                <td>
                                    <a href="#" onclick="deleteAccount(${arr[i].id})" class="btn btn-delete">Xoá</a>
                                </td>
                            </tr>`
            }
            document.getElementById("data-account").innerHTML = context
        }
    })
}

function findAllPlan() {
    let salary;
    let money;

    var ajaxCall = $.ajax({
        url:"http://localhost:8080/plan",
        type:"GET",
        success(data){
            let arr = data;
            countCash = 0;
            context = "";
            for (let i = 0; i < arr.length; i++) {
                getSalary(function(output){
                },parseInt(`${arr[i].id}`),arr,i);

                countCash ++;
            }


        }
    })
    event.preventDefault();
    ajaxCall.done(function (data){

    })
}

// function setPercentBar(){
//     setTimeout( function(){
//         findAllPlan();
//     }, 5000 );
//
//     let percent;
//     getSalary(function(output){
//         percent = (output/100000000)*100;
//         console.log(percent);
//         console.log(percent);
//         console.log(percent);
//     });
//
//
// }

function findAllCategoryByExpense() {
    $.ajax({
        url:"http://localhost:8080/cash/categories/expences",
        type:"GET",
        success(data){
            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<div class="block-category" id="block-${arr[i].icon}">
                                            <div class="icon-border" id="${arr[i].icon}" onclick="selectCategory(this.id)">
                                                <i class="fa-light ${arr[i].icon}"></i>
                                            </div>
                                                <p id="${arr[i].id}">${arr[i].name}</p>
                             </div>`
            }
            document.getElementById("category-expense").innerHTML += context
        }
    })
}

function findAllCategoryByIncome() {
    $.ajax({
        url:"http://localhost:8080/cash/categories/income",
        type:"GET",
        success(data){

            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<div class="block-category" id="block-${arr[i].icon}">
                                            <div class="icon-border" id="${arr[i].icon}" onclick="selectCategory(this.id)">
                                                <i class="fa-light ${arr[i].icon}"></i>
                                            </div>
                                                <p id="${arr[i].id}">${arr[i].name}</p>
                             </div>`
            }
            document.getElementById("category-income").innerHTML += context
        }
    })
}
function findAllCategoryByAccount() {
    $.ajax({
        url:"http://localhost:8080/cash/categories/account",
        type:"GET",
        success(data){
            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<div class="block-category" id="block-${arr[i].icon}">
                                            <div class="icon-border" id="${arr[i].icon}" onclick="selectCategory(this.id)">
                                                <i class="fa-light ${arr[i].icon}"></i>
                                            </div>
                                                <p id="${arr[i].id}">${arr[i].name}</p>
                             </div>`
            }
            document.getElementById("category-account").innerHTML += context
        }
    })
}
function findAllCategoryByPlan() {
    $.ajax({
        url:"http://localhost:8080/cash/categories/plan",
        type:"GET",
        success(data){
            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                context += `<div class="block-category" id="block-${arr[i].icon}" style="width: 80px">
                                            <div class="icon-border" id="${arr[i].icon}" onclick="selectCategory(this.id)">
                                                <i class="fa-light ${arr[i].icon}"></i>
                                            </div>
                                                <p id="${arr[i].id}">${arr[i].name}</p>
                             </div>`
            }
            document.getElementById("category-plan").innerHTML += context
        }
    })
}
function createForm() {
    $("#money").val("")
    $("#select-box1").val("")
    $("#date1").val("");
    $("#action").val("");
    $("#money1").val("")
    $("#select-box2").val("")
    $("#date2").val("");
    $("#action1").val("");
    document.getElementsByClassName("edit")[0].setAttribute("onclick", "createCash()");
    document.getElementsByClassName("edit")[1].setAttribute("onclick", "createCash()");
    openEditForm();
}
function createFormAddAccount() {
    $("#money2").val("")
    $("#date3").val("");
    $("#action2").val("");
    document.getElementsByClassName("edit")[2].setAttribute("onclick", "createAccount()");
    openEditFormAccount();
}
function createFormAddPlan() {
    $("#money3").val("")
    $("#date4").val("");
    $("#date5").val("");
    $("#action3").val("");
    document.getElementsByClassName("edit")[3].setAttribute("onclick", "createPlan()");
    openEditFormPlan();
}
function checkType(){
    if(document.getElementById("expense").classList.contains("active")){
        return "expense";
    }else{
        return "income";
    }
}
function createCash() {
    let cash;
    if(checkType() == "expense"){
         cash = {
            name: $("#action").val(),
            date: $("#date1").val()+"T00:00:00.332",
            money: $("#money").val(),
            type: "expense",
            category:{
                id:$(".block-category p.active-category").attr("id")
            },
            user: null
        }
    }else{
         cash = {
            name: $("#action1").val(),
            date: $("#date2").val()+"T00:00:00.332",
            money: $("#money1").val(),
            type: "income",
             category:{
                 id:$(".block-category p.active-category").attr("id")
             },
            user: null
        }
    }
    $.ajax({
        url: "http://localhost:8080/cash",
        type: "POST",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(cash),
        success() {
            findAllCash()
            closeForm()
        }
    })
    event.preventDefault()
}
function updateForm(id) {
    $.ajax({
        url: `http://localhost:8080/cash/${id}`,
        type: "GET",
        success(data) {
            $("#money").val(data.money)
            $("#select-box1").val("")
            $("#date1").val(data.date.slice(0,10));
            $("#action").val(data.name);
            $("#money1").val(data.money)
            $("#select-box2").val("")
            $("#date2").val(data.date.slice(0,10));
            $("#action1").val(data.name);
            document.getElementsByClassName("edit")[0].setAttribute("onclick", `updateCash(${id})`)
            document.getElementsByClassName("edit")[1].setAttribute("onclick", `updateCash(${id})`)
            openEditForm();
        }
    })
}
function updateCash(id) {
    let cash;
    if(checkType() == "expense"){
        cash = {
            id: id,
            name: $("#action").val(),
            date: $("#date1").val()+"T00:00:00.332",
            money: $("#money").val(),
            type: "expense",
            category:null,
            user: null
        }
    }else{
        cash = {
            id: id,
            name: $("#action1").val(),
            date: $("#date2").val()+"T00:00:00.332",
            money: $("#money1").val(),
            type: "income",
            category:null,
            user: null
        }
    }
    $.ajax({
        url: "http://localhost:8080/cash/"+id,
        type: "PUT",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(cash),
        success() {
            closeForm()
            findAllCash()
        }
    })
    event.preventDefault()
}
function deleteCash(id) {
    if (confirm("Có xóa không?")) {
        $.ajax({
            url: "http://localhost:8080/cash/" + id,
            type: "DELETE",
            success() {
                findAllCash()
            }
        })
    }
    event.preventDefault()
}
function createAccount() {
    let account;
    account = {
            nameCard: $("#action2").val(),
            expired: $("#date3").val(),
            money: $("#money2").val(),
            category:{
                id:$(".block-category p.active-category").attr("id")
            },
            user: {
                id:1
            }
        }
    $.ajax({
        url: "http://localhost:8080/account",
        type: "POST",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(account),
        success() {
            findAllAccount()
            closeFormAccount()
        }
    })
    event.preventDefault()
}

function updateFormAccount(id) {
    $.ajax({
        url: `http://localhost:8080/account/${id}`,
        type: "GET",
        success(data) {
            $("#money2").val(data.money)
            $("#date3").val(data.expired);
            $("#action2").val(data.nameCard);
            document.getElementsByClassName("edit")[2].setAttribute("onclick", `updateAccount(${id})`)
            openEditFormAccount();
        }
    })
}
function updateAccount(id) {
    let account;
    account = {
        id:id,
        nameCard: $("#action2").val(),
        expired: $("#date3").val(),
        money: $("#money2").val(),
        category:{
            id:$(".block-category p.active-category").attr("id")
        },
        user: {
            id:1
        }
    }
    $.ajax({
        url: "http://localhost:8080/cash/"+id,
        type: "PUT",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(account),
        success() {
            closeFormAccount()
            findAllAccount()
        }
    })
    event.preventDefault()
}

function deleteAccount(id) {
    if (confirm("Có xóa không?")) {
        $.ajax({
            url: "http://localhost:8080/account/" + id,
            type: "DELETE",
            success() {
                findAllAccount()
            }
        })
    }
    event.preventDefault()
}


function createPlan() {
    let account;
    account = {
        name: $("#action3").val(),
        startDate: $("#date4").val(),
        endDate: $("#date5").val(),
        money: $("#money3").val(),
        category:{
            id:$(".block-category p.active-category").attr("id")
        },
        user: {
            id:1
        }
    }
    $.ajax({
        url: "http://localhost:8080/plan",
        type: "POST",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(account),
        success() {
            findAllPlan()
            closeFormPlan()
        }
    })
    event.preventDefault()
}
function updateFormPlan(id) {
    $.ajax({
        url: `http://localhost:8080/plan/${id}`,
        type: "GET",
        success(data) {
            $("#money3").val(data.money)
            $("#date4").val(data.startDate);
            $("#date5").val(data.endDate);
            $("#action3").val(data.name);
            document.getElementsByClassName("edit")[3].setAttribute("onclick", `updatePlan(${id})`)
            openEditFormPlan();
        }
    })
}
function updatePlan(id) {
    let account;
    account = {
        id:id,
        name: $("#action3").val(),
        startDate: $("#date4").val(),
        endDate: $("#date5").val(),
        money: $("#money3").val(),
        category:{
            id:$(".block-category p.active-category").attr("id")
        },
        user: {
            id:1
        }
    }
    $.ajax({
        url: "http://localhost:8080/plan/"+id,
        type: "PUT",
        contentType: "application/json",
        accept: "application/json",
        data: JSON.stringify(account),
        success() {
            findAllPlan()

            closeFormPlan()
        }
    })
    event.preventDefault()
}
function deletePlan(id) {
    if (confirm("Có xóa không?")) {
        $.ajax({
            url: "http://localhost:8080/plan/" + id,
            type: "DELETE",
            success() {
                findAllPlan()
            }
        })
    }
    event.preventDefault()
}


$(document).mouseup(function(e)
{
    var container = $("#popup");
    var container1 = $("#popup1");
    var container2 = $("#popup2");
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        document.getElementById("content-table").style.filter = "blur(0px)";
        document.getElementById("popup").style.display = "none";
    }
    if (!container1.is(e.target) && container1.has(e.target).length === 0)
    {
        document.getElementById("content-account").style.filter = "blur(0px)";
        document.getElementById("popup1").style.display = "none";
    }
    if (!container2.is(e.target) && container2.has(e.target).length === 0)
    {
        document.getElementById("content-plan").style.filter = "blur(0px)";
        document.getElementById("popup2").style.display = "none";
    }
});


function getSalary(handleData,id,arr,i){
    $.ajax({
        url: `http://localhost:8080/cash/categories/salary/get`,
        type: "GET",
        success:function (data) {
           handleData(data),
               getMoneyByPlanId(function (output){
               },id,data,arr,i)

        }
    })
}

function getMoneyByPlanId(handleData,id,data,arr,i){
    let ajaxCall1 = $.ajax({
        url: `http://localhost:8080/plan/categories/salary/get/`+id,
        type: "GET",
        success:function (data1) {
            handleData(data1)
            percent = (data1/data)*100;console.log(data);
            console.log(data1);
            console.log(percent);
            context += `<tr>
                                <td style="padding-top: 5px; box-sizing: border-box; ">
                                    <div style="float: left" class="icon-border-bus-dashboard" id="${arr[i].category.icon}">
                                        <i class="fa-light ${arr[i].category.icon}"></i>
                                    </div>
                                    <p >${arr[i].category.name}</p>
                                </td>
                                <td>${arr[i].money.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</td>
                                <td>${arr[i].name}</td>
                                <td style="color: #8d8d8d">${arr[i].startDate} -> ${arr[i].endDate}</td>
                                <td>
                                <div class="plan-bar-1">
                                        <div id="bar-1" style="width: ${percent}%">
                                            <span class="percentage-1">
                                            ${percent}%
                          
                                        </span>
                                        </div>
                                   </div>
                                </td>
                                <td>
                                    <a href="#" onclick="updateFormPlan(${arr[i].id})" class="btn btn-info">Sửa</a>
                                </td>
                                <td>
                                    <a href="#" onclick="deletePlan(${arr[i].id})" class="btn btn-delete">Xoá</a>
                                </td>
                            </tr>`
            document.getElementById("data-plan").innerHTML = context;
        }
    })


}
function getHistoryPayment(){
    $.ajax({
        url: `http://localhost:8080/cash/cash/expences`,
        type: "GET",
        success(data){
            let arr = data;
            let context = "";
            for (let i = 0; i < arr.length; i++) {
                // let price = numeral(arr[i].money).format('$0,0.00');
                // context += `<div class="block-category" id="block-${arr[i].icon}">
                //                             <div class="icon-border" id="${arr[i].icon}" onclick="selectCategory(this.id)">
                //                                 <i class="fa-light ${arr[i].icon}"></i>
                //                             </div>
                //                                 <p id="${arr[i].id}">${arr[i].name}</p>
                //              </div>`
                context +=`<div class="item-history">
                            <div class="icon-border-dashboard" id="${arr[i].category.icon}">
                                <i class="fa-light ${arr[i].category.icon}"></i>
                            </div>
                            <div class="item-name-history">
                                <h6>${arr[i].category.name}</h6>
                                <p>${arr[i].date}</p>
                            </div>
                            <div class="item-percent-history">
                                <p>${arr[i].name}</p>
                            </div>
                            <div class="item-price-history">
                                <p>${arr[i].money.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}</p>
                            </div>
                        </div>`
            }
            document.getElementsByClassName("payment-history")[0].innerHTML += context
        }
    })
}



const ctx = document.getElementById('myChart');
let type='bar';
let labels=[];
let data=[];
let choice;
let mySelect;
let myChartMetasetIndex=-1;
let chart1;
const data1 = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];
let chart=new Chart(
    ctx,
    {
        type: 'bar',
        options:{
            maintainAspectRatio: false,
            aspectRatio:2,
            scales:{
                y:{
                    min:0
                }
            },
            plugins:{
                legend:{
                    display: false
                }
            }
        },
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: [],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 240, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ]
                }
            ]
        }
    }
);
// lấy dữ liệu
$(function (){$(".date-bar li").click(function(){
    $(this).animate({top:'+=3px'}, "fast",function (){
        $(this).css({"box-shadow":"0px 0px white","background-color": "#a6a3a3"})
    });
    $(this).animate({top:'-=3px'},"fast",function (){
        $(this).css({"box-shadow":"0px 2px 3px grey","background-color": "#ffffff"})
    });
    $(this).hover(function (){
            $(this).css("background-color", "#a6a3a3")
        },
        function (){
            $(this).css("background-color", "#ffffff")
        }
    )
    if($(this).attr("id")!=="dateChoose"){
        choice=$(this).attr("id")
    }
    if(choice==="date"){
        let d=new Date(new Date().valueOf()+7*60*60*1000);
        let string=d.toISOString().slice(0,10)
        $.getJSON("http://localhost:8080/cash/search/"+string+"T00:00:00/"+string+"T23:59:59",
            function (result) {
                let dataIn=[];
                let dataOut=[];
                let arr = result;
                let title='Biểu đồ thống kê thu nhập chi tiêu ngày';
                labels=[];
                // createChartInfo(choice,arr)
                dataIn.push(arr[0][2])
                dataOut.push(arr[1][2])
                labels.push(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
                title+=labels;
                createChart(dataIn,dataOut,type,labels,title)
            })
    } else
    if( choice ==="week"){
        labels=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
        let d=new Date(new Date().valueOf()+7*60*60*1000);
        let milli=24*60*60*1000;
        let index=d.getDay();
        if(index===0){
            index=6;
        }else{
            index-=1;
        }
        for(let i=0;i<7;i++){
            if(i===index){
                labels[i]+="("+d.toISOString().slice(0,10)+")";
            } else {
                if (i < index) {
                    let d1= new Date(d.valueOf()-milli*(index-i));
                    labels[i]+="("+d1.toISOString().slice(0,10)+")";
                } else {
                    let d1= new Date(d.valueOf()+milli*(i-index));
                    labels[i]+="("+d1.toISOString().slice(0,10)+")";
                }
            }
        }
        $.getJSON("http://localhost:8080/cash/search/"+labels[0].slice(7,17)+"T00:00:00/"+labels[6].slice(7,17)+"T23:59:59",
            function (result){
                let title='Biểu đồ thống kê thu nhập chi tiêu từ '+labels[0].slice(7,17)+" đến "+labels[6].slice(7,17);
                let dataIn=[0,0,0,0,0,0,0];
                let dataOut=[0,0,0,0,0,0,0];
                for(let i=0;i<result.length;i++) {
                    let d=new Date(new Date().valueOf()+7*60*60*1000);
                    for (let j = 0; j<labels.length; j++)
                    {
                        let d1= new Date(d.valueOf()-milli*(index-j));
                        if(result[i][1]===d1.toISOString().slice(0,10))
                            if (result[i][0] === "income") {
                                dataIn[j]+=result[i][2]
                            } else {
                                dataOut[j]+=result[i][2]
                            }
                    }
                }
                createChart(dataIn,dataOut,type,labels,title)
            })
    }else
    if(choice === "months"){
        labels=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let d=new Date(""+new Date().getFullYear());
        $.getJSON("http://localhost:8080/cash/search/"+d.toISOString().slice(0,10)+"T00:00:00/"+new Date(new Date().valueOf()+7*60*60*1000).toISOString().slice(0,10)+"T23:59:59",
            function (result){
                let title="Biểu đồ thống kê thu nhập chi tiêu theo các tháng trong năm "+d.getFullYear()
                let dataIn=[0,0,0,0,0,0,0,0,0,0,0,0];
                let dataOut=[0,0,0,0,0,0,0,0,0,0,0,0];
                for (let i=0;i<result.length;i++){
                    if(result[i][0]==="income"){
                        dataIn[parseInt(result[i][1].slice(5,7))-1]+=result[i][2]
                    }else{
                        dataOut[parseInt(result[i][1].slice(5,7))-1]+=result[i][2]
                    }
                }
                createChart(dataIn,dataOut,type,labels,title)
            })
    } else if(choice === "year"){
        $.getJSON("http://localhost:8080/cash/searchByYear/",
            function (result){
                labels=[];
                let dataIn=[];
                let dataOut=[];
                let title="Biểu đồ thống kế theo các năm"
                for(let i=0;i<result.length;i++){
                    if(result[i][0]==="income"){
                        dataIn.push(result[i][2])
                    }else{
                        dataOut.push(result[i][2])
                    }
                    if(i%2===0){
                        labels.push(result[i][1])
                    }
                }
                createChart(dataIn,dataOut,type,labels,title)
            })}
})})
$(function(){
    $(".chartType-bar button").click(function (){
        $(".chartType-bar #selectType").text("Chart type: "+$(this).attr("name"))
        $(".chartType-bar #selectType").attr("name",$(this).attr("name"))
        type=$(this).attr("name")
        chart.config.type=type;
        chart.update();
    })
})
$(function (){
    $("#dateChoose").click(function (){
            let dc=$(".dateChoice").css("display");
            if(dc==="none"){
                $("#startDate").val("")
                $("#endDate").val("")
                $(".dateChoice").css("display","inline-block")
                $(".chartType-bar").css("top","160px")
            }else{
                $(".dateChoice").css("display","none")
                $(".chartType-bar").css("top","96px")
            }
        }
    )
})
$(function (){
    $(".dateChoice button").click(function (){
        if( $("#startDate").val()!=="" && $("#endDate").val()!==""){
            choice="chooseDate"
            let startDate = new Date($("#startDate").val()+"T07:00:00")
            let endDate = new Date($("#endDate").val()+"T07:00:00")
            if(startDate.valueOf()<endDate.valueOf()){
                $.getJSON("http://localhost:8080/cash/search/"+startDate.toISOString().slice(0,10)+"T00:00:00/"+endDate.toISOString().slice(0,10)+"T23:59:59",
                    function (result){
                        labels=[];
                        let dataIn=[];
                        let dataOut=[];
                        let milli=24*60*60*1000;
                        while(startDate.valueOf()<=endDate.valueOf()){
                            labels.push(startDate.getDate()+"/"+(startDate.getMonth()+1)+"/"+startDate.getFullYear());
                            dataIn.push(0)
                            dataOut.push(0)
                            startDate=new Date(startDate.valueOf()+milli);
                        }
                        let title="Biểu đồ thống kế theo chi tiêu thu nhập từ ngày "+labels[0]+" đến ngày "+labels[labels.length-1]
                        for (let i=0;i<result.length;i++){
                            let d= new Date(result[i][1])
                            let temp=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
                            for (let j=0;j<labels.length;j++){
                                if(labels[j]===temp){
                                    if (result[i][0]==="income"){
                                        dataIn[j]+=result[i][2]
                                    } else{
                                        dataOut[j]+=result[i][2]
                                    }
                                }
                            }
                        }
                        createChart(dataIn,dataOut,type,labels,title)
                    })
            }
        }else
        if( $("#startDate").val()!=="" || $("#endDate").val()!=="") {
            choice="chooseDate"
            let d;
            if($("#startDate").val()!==""){
                d= new Date($("#startDate").val()+"T07:00:00");
            } else {
                d= new Date($("#endDate").val()+"T07:00:00");
            }
            $.getJSON("http://localhost:8080/cash/search/"+d.toISOString().slice(0,10)+"T00:00:00/"+d.toISOString().slice(0,10)+"T23:59:59",
                function (result){
                    labels=[];
                    let dataIn=[];
                    let dataOut=[];
                    let title="Biểu đồ thống kế theo chi tiêu thu nhập ngày "
                    dataIn.push(result[0][2])
                    dataOut.push(result[1][2])
                    labels.push(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
                    title+=labels;
                    createChart(dataIn,dataOut,type,labels,title)
                })
        }
        $(".chartType-bar").css("top","96px")
        $(".dateChoice").css("display","none")
    })
})
//  Tạo đối tượng biểu đồ
function createChart(data1,data2,type,labels,title) {
    chart.destroy();
    chart=new Chart(
        ctx,
        {
            type: type,
            options:{
                maintainAspectRatio: false,
                plugins:{
                },
                aspectRatio:2,
                scales:{
                    //     // x:{
                    //     //     ticks:{
                    //     //         callback:value=>value+ 'm'
                    //     //     }
                    //     // },
                    y:{
                        min:0
                        // ticks:{
                        //     callback:value=>value
                        // }
                    }
                },
                plugins : {
                    title: {
                        display: true,
                        text: title
                    }
                },onClick: (e) => {
                    for (let j = 0; j < chart._metasets.length; j++) {
                        let chartElementArr = chart._metasets[j].data;
                        if (chart.config.type === 'bar') {
                            for (let i = 0; i < chartElementArr.length; i++) {
                                let xMin = (2 * chartElementArr[i].x - chartElementArr[i].width) / 2;
                                let xMax = (2 * chartElementArr[i].x + chartElementArr[i].width) / 2;
                                if (e.x >= xMin && e.x <= xMax && e.y > (chartElementArr[i].base - chartElementArr[i].height) && e.y <= chartElementArr[i].base) {
                                    if (mySelect !== i||(mySelect==i&&myChartMetasetIndex!==j)) {
                                        mySelect = i;
                                        myChartMetasetIndex=j;
                                        createDetailChart(mySelect,myChartMetasetIndex);
                                        break;
                                    } else {
                                        chart1.destroy();
                                        mySelect = -1;
                                        break;
                                    }
                                }
                            }

                        } else {
                            let radius = chartElementArr[j].options.radius
                            for (let i = 0; i < chartElementArr.length; i++) {
                                let x = chartElementArr[i].x;
                                let y = chartElementArr[i].y;
                                if (e.x >= (x - radius) && e.x <= (x + radius) && e.y >= (y - radius) && e.y <= (y + radius)) {
                                    if (mySelect !== i||(mySelect==i&&myChartMetasetIndex!==j)) {
                                        mySelect = i;
                                        myChartMetasetIndex=j;
                                        createDetailChart(mySelect,myChartMetasetIndex);
                                        break;
                                    } else {
                                        $(".statistical div table").css("display","none")
                                        chart1.destroy();
                                        mySelect = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            data: {
                labels: labels,
                datasets: [
                    // {fill: 0} ,
                    {
                        label: 'Income Money',
                        data: data1,
                        backgroundColor: ['green']
                        // backgroundColor: [
                        //     'rgba(255, 99, 132, 0.2)',
                        //     'rgba(255, 159, 240, 0.2)',
                        //     'rgba(255, 205, 86, 0.2)',
                        //     'rgba(75, 192, 192, 0.2)',
                        //     'rgba(54, 162, 235, 0.2)',
                        //     'rgba(153, 102, 255, 0.2)',
                        //     'rgba(201, 203, 207, 0.2)'
                        // ]
                    },
                    {
                        label: 'Outcome Money',
                        data: data2,
                        backgroundColor: ['yellow']
                    }
                ]
            }
        }
    );
};
function createDetailChart(mySelect,myMetaIndex) {
    let labels1 = []
    let data1 = []
    let type
    if (myMetaIndex === 0) {
        type = "income"
    } else {
        type = "expense"
    }
    if (choice === "date") {
        let d = new Date(new Date().valueOf() + 7 * 60 * 60 * 1000);
        let string = d.toISOString().slice(0, 10)
        $.getJSON("http://localhost:8080/cash/chartDetail/" + string + "T00:00:00/" + string + "T23:59:59/" + type,
            function (result) {
                for (let i = 0; i < result.length; i++) {
                    labels1.push(result[i][0]);
                    data1.push(result[i][1])
                }
                createDetailChartTable(type,result)
                createChart2(labels1, data1)
            })
    } else if (choice === "week") {
        $.getJSON("http://localhost:8080/cash/chartDetail/" + labels[mySelect].slice(labels[mySelect].length - 11, labels[mySelect].length - 1) + "T00:00:00/" + labels[mySelect].slice(labels[mySelect].length - 11, labels[mySelect].length - 1) + "T23:59:59/" + type,
            function (result) {
                for (let i = 0; i < result.length; i++) {
                    labels1.push(result[i][0]);
                    data1.push(result[i][1])
                }
                createDetailChartTable(type,result)
                createChart2(labels1, data1)
            })
    } else if (choice === "months") {
        let d = new Date(new Date().getFullYear(), mySelect);
        let d1 = new Date(new Date().getFullYear(), mySelect + 1);
        $.getJSON("http://localhost:8080/cash/chartDetail/" + d.toISOString().slice(0, 10) + "T00:00:00/" + new Date(d1.valueOf() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10) + "T23:59:59/" + type,
            function (result) {
                for (let i = 0; i < result.length; i++) {
                    labels1.push(result[i][0]);
                    data1.push(result[i][1])
                }
                createDetailChartTable(type,result)
                createChart2(labels1, data1)
            })
    } else if (choice === "year") {
        let d = new Date("" + labels[mySelect])
        let d1 = new Date(parseInt(labels[mySelect]) + 1 + "")
        $.getJSON("http://localhost:8080/cash/chartDetail/" + d.toISOString().slice(0, 10) + "T00:00:00/" + new Date(d1.valueOf() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10) + "T23:59:59/" + type,
            function (result) {
                for (let i = 0; i < result.length; i++) {
                    labels1.push(result[i][0]);
                    data1.push(result[i][1])
                }
                createDetailChartTable(type,result)
                createChart2(labels1, data1)
            })
    } else {
        let s =labels[mySelect];
        let temp=s.split("/")
        let d=new Date(new Date(temp[2]+"/"+temp[1]+"/"+temp[0]).valueOf()+7 * 60 * 60 * 1000)
        $.getJSON("http://localhost:8080/cash/chartDetail/" + d.toISOString().slice(0, 10) + "T00:00:00/" + d.toISOString().slice(0, 10) + "T23:59:59/"+type,
            function (result) {
                for (let i = 0; i < result.length; i++) {
                    labels1.push(result[i][0]);
                    data1.push(result[i][1])
                }
                createDetailChartTable(type,result)
                createChart2(labels1, data1)
            })
    }
}
function createDetailChartTable(type,arr){
    let ctx= `<table style="border: 1px solid black"><tr><td>Category</td><td>Money</td></tr>`
    for (let i=arr.length-1;i>=0;i--){
        ctx+=`<tr><td>${arr[i][0]}</td><td>${arr[i][1]}</td></tr>`
    }
    ctx+='</table>';
    $(".statistical div").html(ctx);
}
function  createChart2(labels1,data1){
    if (chart1 !== undefined) {
        chart1.destroy();
    }
    chart1 = new Chart(
        document.getElementById("detailChart"),
        {
            type: "pie",
            options: {
                maintainAspectRatio: false,
            },
            data: {
                labels: labels1,
                datasets: [
                    {
                        label: "",
                        data: data1,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 240, 0.2)',
                            'rgba(255, 205, 86, 0.2)',]
                    }
                ]
            }
        }
    )
}

function createHomeChart(){
    let startDate = new Date("2023-03-15"+"T07:00:00")
    let endDate = new Date("2023-03-17"+"T07:00:00")
    if(startDate.valueOf()<endDate.valueOf()){
        $.getJSON("http://localhost:8080/cash/search/"+startDate.toISOString().slice(0,10)+"T00:00:00/"+endDate.toISOString().slice(0,10)+"T23:59:59",
            function (result){
                let labels=[];
                let dataIn=[];
                let dataOut=[];
                let milli=24*60*60*1000;
                while(startDate.valueOf()<=endDate.valueOf()){
                    labels.push(startDate.getDate()+"/"+(startDate.getMonth()+1)+"/"+startDate.getFullYear());
                    dataIn.push(0)
                    dataOut.push(0)
                    startDate=new Date(startDate.valueOf()+milli);
                }
                let title="Biểu đồ thống kế theo chi tiêu thu nhập từ ngày "+labels[0]+" đến ngày "+labels[labels.length-1]
                for (let i=0;i<result.length;i++){
                    let d= new Date(result[i][1])
                    let temp=d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()
                    for (let j=0;j<labels.length;j++){
                        if(labels[j]===temp){
                            if (result[i][0]==="income"){
                                dataIn[j]+=result[i][2]
                            } else{
                                dataOut[j]+=result[i][2]
                            }
                        }
                    }
                }
                createChart1(dataIn,dataOut,"bar",labels,title)
            })
    }
}
let homeChart;
function createChart1(data1,data2,type,labels,title) {
    if (homeChart !== undefined) {
        homeChart.destroy();}
        homeChart= new Chart(
        document.getElementById("acquisitions1"),
        {
            type: type,
            options:{
                maintainAspectRatio: false,
                plugins:{
                },
                aspectRatio:2,
                scales:{
                    //     // x:{
                    //     //     ticks:{
                    //     //         callback:value=>value+ 'm'
                    //     //     }
                    //     // },
                    y:{
                        min:0
                        // ticks:{
                        //     callback:value=>value
                        // }
                    }
                },
                plugins : {
                    title: {
                        display: true,
                        text: title
                    }
                },onClick: (e) => {
                    for (let j = 0; j < chart._metasets.length; j++) {
                        let chartElementArr = chart._metasets[j].data;
                        if (chart.config.type === 'bar') {
                            for (let i = 0; i < chartElementArr.length; i++) {
                                let xMin = (2 * chartElementArr[i].x - chartElementArr[i].width) / 2;
                                let xMax = (2 * chartElementArr[i].x + chartElementArr[i].width) / 2;
                                if (e.x >= xMin && e.x <= xMax && e.y > (chartElementArr[i].base - chartElementArr[i].height) && e.y <= chartElementArr[i].base) {
                                    if (mySelect !== i||(mySelect==i&&myChartMetasetIndex!==j)) {
                                        mySelect = i;
                                        myChartMetasetIndex=j;
                                        createDetailChart(mySelect,myChartMetasetIndex);
                                        break;
                                    } else {
                                        chart1.destroy();
                                        mySelect = -1;
                                        break;
                                    }
                                }
                            }

                        } else {
                            let radius = chartElementArr[j].options.radius
                            for (let i = 0; i < chartElementArr.length; i++) {
                                let x = chartElementArr[i].x;
                                let y = chartElementArr[i].y;
                                if (e.x >= (x - radius) && e.x <= (x + radius) && e.y >= (y - radius) && e.y <= (y + radius)) {
                                    if (mySelect !== i||(mySelect==i&&myChartMetasetIndex!==j)) {
                                        mySelect = i;
                                        myChartMetasetIndex=j;
                                        createDetailChart(mySelect,myChartMetasetIndex);
                                        break;
                                    } else {
                                        $(".statistical div table").css("display","none")
                                        chart1.destroy();
                                        mySelect = -1;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            },
            data: {
                labels: labels,
                datasets: [
                    // {fill: 0} ,
                    {
                        label: 'Income Money',
                        data: data1,
                        backgroundColor: ['green']
                        // backgroundColor: [
                        //     'rgba(255, 99, 132, 0.2)',
                        //     'rgba(255, 159, 240, 0.2)',
                        //     'rgba(255, 205, 86, 0.2)',
                        //     'rgba(75, 192, 192, 0.2)',
                        //     'rgba(54, 162, 235, 0.2)',
                        //     'rgba(153, 102, 255, 0.2)',
                        //     'rgba(201, 203, 207, 0.2)'
                        // ]
                    },
                    {
                        label: 'Outcome Money',
                        data: data2,
                        backgroundColor: ['yellow']
                    }
                ]
            }
        }
    );
};