#pragma strict
var time = 0.0;
var speed= 20;
static var shieldon=1;
var shield:Transform;
function Start () {

}

function Update () {


time+=Time.deltaTime;
if(time>=0){
transform.Rotate(Vector3(-30*speed*Time.deltaTime,-10*speed*Time.deltaTime,-10*speed*Time.deltaTime));
	renderer.material.color.a -= 0.09 * Time.deltaTime;
transform.parent = GameObject.Find("SpaceCraft").transform;
shieldon=0;
if(renderer.material.color.a<0){

shieldon=1;

//GameObject.Find("SpaceCraft").GetComponent(BoxCollider).enabled = false;

}
}if(shieldon==1){
Destroy(gameObject);
}
}