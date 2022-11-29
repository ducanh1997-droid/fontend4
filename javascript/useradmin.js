class Personnel{
    constructor(id,name,phone,adress,status){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.adress = adress;
        this.status = status;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getPhone(){
        return this.phone;
    }
    setPhone(phone){
        this.phone = phone;
    }
    getAdress(){
        return this.adress;
    }
    setAdress(adress){
        this.adress = adress;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status =status;
    }
}

let user1 = new Personnel(1,"Nguyễn Xuân Sang","0976441123","Hà Nội","Đang hoạt động");
let user2 = new Personnel(2,"Nguyễn Xuân Sang","0976441123","Hà Nội","Đang hoạt động");
let user3 = new Personnel(3,"Nguyễn Xuân Sang","0976441123","Hà Nội","Đang hoạt động");
let userArr = [user1,user2,user3];
function display(){
    let result = "";
    for(let i = 0;i<userArr.length;i++){
        if(userArr.length>=i){
            result += "<tr>"+
                "<td>"+ userArr[i].getId()+"</td>"+
                "<td>"+ userArr[i].getName()+"</td>"+
                "<td>"+ userArr[i].getPhone()+"</td>"+
                "<td>"+ userArr[i].getAdress()+"</td>"+
                "<td>"+ userArr[i].getStatus()+"</td>"+
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
    userArr.splice(index,1);
    display();
}

function add(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let status = "Đang hoạt động";

    let id = userArr.length+1;

    let newPerson = new Personnel(id,name,phone,address,status);
    userArr.push(newPerson);
    display();

}
let editing;
function openEditForm(index){
    openForm();
    document.getElementById("edit-name").value = userArr[index].getName();
    document.getElementById("edit-phone").value = userArr[index].getPhone();
    document.getElementById("edit-address").value = userArr[index].getAdress();
    editing = index;
}

function edit(editing){
    let name = document.getElementById("edit-name").value;
    let phone = document.getElementById("edit-phone").value;
    let adress = document.getElementById("edit-adress").value;
    let status = "Đang hoạt động";
    let newPerson = new Personnel(editing+1,name,phone,adress,status);
    userArr[editing] = newPerson;
    closeForm();
    display();
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
        if(userArr.length>=i){
            resultPage += "<tr>"+
                "<td>"+ userArr[i].getId()+"</td>"+
                "<td>"+ userArr[i].getName()+"</td>"+
                "<td>"+ userArr[i].getPhone()+"</td>"+
                "<td>"+ userArr[i].getAdress()+"</td>"+
                "<td>"+ userArr[i].getStatus()+"</td>"+
                "<td><a href='#' class=\"btn btn-info\" onclick='openEditForm("+i+"); return false;'>Sửa</a>"+"</td>"+
                "<td><a href='#' class=\"btn btn-delete\" onclick='Delete("+i+"); return false;'>Xoá</a>"+"</td>"
                + "</tr>"
        }
    }
    document.getElementById("data").innerHTML = resultPage;
}

function Search(){
    userArr = [user1,user2,user3];
    let arrSearch = new Array();
    let arrTemp = userArr;
    let name = document.getElementById("name").value;
    for(let i = 0;i<userArr.length;i++){
        a = userArr[i].getCar().toLowerCase();
        check = a.includes(name.toLowerCase());
        if(check){
            arrSearch.push(i);
        }
    }
    userArr = [];
    for(let i=0;i<arrSearch.length;i++){
        userArr.push(arrTemp[arrSearch[i]]);
    }console.log(name.toLowerCase());
    console.log(userArr);

    paging(userArr.length);
}


function getUserAdmin(username){
    document.getElementById("admin-welcome").innerHTML = "Xin chào "+username+" VietTransport";
    document.getElementById("welcomeSidebar").innerHTML = "Xin chào "+username+" VietTransport";
}