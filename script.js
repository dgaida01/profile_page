
var connRequests =2;
var connApproved=500

function removeCon(connName){
    var element = document.getElementById(connName);
    element.remove();
    connRequests--;
    element = document.getElementById("reqCount");
    element.innerHTML=connRequests

}

function acceptCon(connName){
    var element = document.getElementById(connName);
     removeCon(connName);
    element = document.getElementById("connCount");
    connApproved++;
    element.innerHTML=connApproved;



}

function changeName(){
var newName = prompt("What is the new name?")
    document.getElementById("profileCardName").innerHTML=newName;
}