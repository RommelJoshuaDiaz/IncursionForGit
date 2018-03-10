#pragma strict

var showbtn=1;
var credit:Transform;
//var canvascredit:Transform;

function Start () {

}

function Update () {

} 


function clickbtn(){


switch (showbtn){
case 1: 
credit.active=true;
showbtn=2;
break;
case 2:
credit.active=false;
showbtn=1;
break;}

}