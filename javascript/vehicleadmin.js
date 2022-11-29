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
    document.getElementById("content").style.filter = "blur(10px)";
    document.getElementById("popup").style.display = "block";
}
function closeForm(){
    document.getElementById("content").style.filter = "blur(0px)";
    document.getElementById("popup").style.display = "none";
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
    // document.getElementById("")

    openForm();
    document.getElementById("edit-car").value = vehicleArr[index].getCar();
    document.getElementById("edit-manufacturer").value = vehicleArr[index].getManufacturer();
    document.getElementById("edit-indexPlace").value = vehicleArr[index].getType();
    document.getElementById("edit-origin").value = vehicleArr[index].getOrigin();
    document.getElementById("edit-year").value = vehicleArr[index].getProductionYear();
    document.getElementById("edit-licensePlates").value = vehicleArr[index].getLicensePlates();
    document.getElementById("edit-driver").value = vehicleArr[index].getDriver();
    editing = index;
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

function paging(index){
    page(1);
    let result = "";
    let numPage = Math.floor(index/5)+1;
    for(let i=0;i<numPage;i++){
        result += "<button onclick='page("+(i+1)+")'>"+(i+1)+"</button>"
    }
    document.getElementById("paging").innerHTML = result;
}
function page(index){
    let resultPage = "";
    for(let i = (index-1)*5+1; i<=(index*5);i++){
        if(vehicleArr.length>=i){
            resultPage += "<tr>"+
                "<td>"+ vehicleArr[i-1].getId()+"</td>"+
                "<td>"+ vehicleArr[i-1].getCar()+"</td>"+
                "<td>"+ vehicleArr[i-1].getManufacturer()+"</td>"+
                "<td>"+ vehicleArr[i-1].getType()+" chỗ</td>"+
                "<td>"+ vehicleArr[i-1].getProductionYear()+"</td>"+
                "<td>"+ vehicleArr[i-1].getOrigin()+"</td>"+
                "<td>"+ vehicleArr[i-1].getLicensePlates()+"</td>"+
                "<td>"+ vehicleArr[i-1].getDriver()+"</td>"+
                "<td><a href='#' class=\"btn btn-info\" onclick='openEditForm("+(i-1)+"); return false;'>Sửa</a>"+"</td>"+
                "<td><a href='#' class=\"btn btn-delete\" onclick='Delete("+(i-1)+"); return false;'>Xoá</a>"+"</td>"
                + "</tr>"
        }
    }
    document.getElementById("data").innerHTML = resultPage;
}

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

