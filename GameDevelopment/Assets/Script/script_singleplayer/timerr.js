#pragma strict

var pause:Transform;
var resume:Transform;
static var timer=0.0;
var imagee:Transform;

function Start () {
resume.active=false;

}

function Update () {

timer+=Time.deltaTime;
if(timer>3){
timer=0.0;

}

}


function pausegame(){

Time.timeScale = 0;
pause.active=false;
resume.active=true;

}

function resumegame(){

Time.timeScale = 1;
pause.active=true;
resume.active=false;


}

function exit(){

Time.timeScale = 1;


}




function offfire(){

GameObject.Find("SpaceCraft").GetComponent(MissileLauncher).enabled = false;
//GameObject.Find("SpaceCraft").GetComponent(BoxCollider).enabled = false;

}
function onfire(){


GameObject.Find("SpaceCraft").GetComponent(MissileLauncher).enabled = true;

//imagee.active=true;
}

