#pragma strict
var changeImage : Image; 

var citelogo: Sprite;

var timer=0.0;



function Start () {

}

function Update () {
timer+=Time.deltaTime;


if(timer>5){
changeImage.sprite = citelogo;
}

}