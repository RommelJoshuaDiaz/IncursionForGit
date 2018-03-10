#pragma strict
var  time=0.0;
function Start () {
	renderer.material.color.a=0;
}

function Update () {

time+=Time.deltaTime;
if(time>=0){
	renderer.material.color.a += 0.12 * Time.deltaTime;
}
}