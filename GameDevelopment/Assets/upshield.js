#pragma strict
//public var healthBar : UnityEngine.UI.Image;
//public var healthBar : UnityEngine.UI.Image;
//var imagee:Transform;
var target:Transform;
var desob:GameObject;
var timer=0.0;
//var shield:Transform;
static var spawnShield=0;
function Start () {

target=GameObject.Find("SpaceCraft").transform;
//imagee=GameObject.Find("ImageYeh").transform;
//healthBar= imagee.GetComponent(Image);

}





function Update () {
timer+=Time.deltaTime;


target=GameObject.Find("SpaceCraft").transform;
//healthBar=GameObject.Find("ImageYeh").transform;
if(timer>10){

Destroy(desob);

}
}





function OnCollisionEnter(collision:Collision){
//


if(collision.transform.name==("SpaceCraft")){


//GameObject.Find("SpaceCraft").GetComponent(BoxCollider).enabled = false;
Destroy(desob);

spawnShield=1;

}


}