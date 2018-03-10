#pragma strict

var spoint_1:Transform;

var spoint_2:Transform;
var spoint_3:Transform;

var spoint_4:Transform;
var spoint_5:Transform;


var currentNumber=0;

var uphealth:Transform;
var upammo:Transform;


var timer = 15.0;
var x=0;
static var upscore=4;




function Start () {
timer = 15.0;
}

function Update () {

timer+=Time.deltaTime;

if(timer>20){
currentNumber = Random.Range(1,4);

if(currentNumber==1){
Instantiate(uphealth,spoint_1.position,spoint_1.rotation);}
else if (currentNumber==2){


Instantiate(uphealth,spoint_2.position,spoint_1.rotation);}

else if (currentNumber==3){

Instantiate(uphealth,spoint_3.position,spoint_3.rotation);
}

timer=0;
x=0;
}

if(x==0){

if(timer>10){
currentNumber = Random.Range(1,3);

if(currentNumber==1){
Instantiate(upammo,spoint_4.position,spoint_4.rotation);}
else if (currentNumber==2){


Instantiate(upammo,spoint_5.position,spoint_5.rotation);}
x=1;
}
}








}


