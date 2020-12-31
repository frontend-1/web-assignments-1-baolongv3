

internalStorage = window.localStorage;


window.onload = () => {
    if(internalStorage.getItem('currentList') === null){
        internalStorage.setItem('currentList','[]');
    } 
    loadTable();

}
function addData(){

    let data = formToJSON();
    var employee = new Employee(data.name,data.age,data.address,data.yoe,data.phoneNumber,data.email,data.joinDate);
    let currentSession = internalStorage.getItem('currentList');
    if(currentSession === null){
        let currentSession = new Array();
        currentSession.push(employee);
        internalStorage.setItem('currentList',JSON.stringify(currentSession));
    }
    else {
        let currentSession = JSON.parse(internalStorage.getItem('currentList'));
        currentSession.push(employee);
        internalStorage.setItem('currentList',JSON.stringify(currentSession));

    }

}

function formToJSON(){   
    let formData = new FormData(document.querySelector('#add-form'))
    let JSON = {};
    for(var pair of formData){
        JSON[pair[0]] = pair[1];
    }
    return JSON;
}

function removeEmployee(button){
    index = button.parentNode.parentNode.children[0].innerHTML;
    let currentSession = JSON.parse(internalStorage.getItem('currentList'));
    currentSession = currentSession.splice(index,1);
    internalStorage.setItem('currentList',JSON.stringify(currentSession));
    location.reload();

}


function loadTable(){
    var currentSession = JSON.parse(internalStorage.getItem('currentList'));
    var bodyref = document.getElementById('emp-table').getElementsByTagName('tbody')[0];
    var i = 0;
    if(Array.isArray()){
        return;
    } else{
        for(item of currentSession){
            var row = bodyref.insertRow();
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);
            var cell7 = row.insertCell(7);
            var cell8 = row.insertCell(8);
            var cell9 = row.insertCell(9);
            cell0.innerHTML = ++i;
            cell1.innerHTML = item.name;
            cell2.innerHTML = item.age;
            cell3.innerHTML = item.address;
            cell4.innerHTML = item.YOE;
            cell5.innerHTML = item.phoneNumber;
            cell6.innerHTML = item.email;
            cell7.innerHTML = item.joinDate;
            cell8.innerHTML = "<button class='btn btn-secondary'>U</button>";
            cell9.innerHTML = "<button class='btn btn-danger' onclick='removeEmployee(this)'>X</button>";

            
        }
    }
}

//Model 
class Employee{
    constructor(name,age,address,YOE,phoneNumber,email,joinDate){
        this.name = name;
        this.age = age;
        this.address = address;
        this.YOE = YOE;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.joinDate = joinDate;
    }
    
}