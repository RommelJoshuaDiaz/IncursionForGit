	#pragma strict

var damp=3.0;
var enemySpeed=7.0;
var timer=0.0;

var enemyTransform:Transform;
var target:Transform;
var speed= 5.0;


var bullet:Transform;
var bulletSpawn:Transform;
var tf=1;
var attackReady : boolean;
 var delay=6.0;
static var check=0;


var enemynum=0;

function Start () {


target = GameObject.Find ("SpaceCraft").transform;
}

function Update () {
try{


target = GameObject.Find ("SpaceCraft").transform;
}
catch(MissingComponentException){
  GameObject.Find("Sphere1").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere2").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere3").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere4").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere5").GetComponent(FollowingScriptEnemy).enabled = false;
}
}


function OnTriggerStay(objectTriggered:Collider){
timer +=Time.deltaTime;


if(objectTriggered.transform==target){
var positionDifference= (target.position-enemyTransform.position)/4;
var rotate= Quaternion.LookRotation(target.position-enemyTransform.position);
enemyTransform.rotation=Quaternion.Slerp(enemyTransform.rotation,rotate,Time.deltaTime+damp);





if(timerr.timer>0&& timerr.timer<0.02 && enemynum==1 ){
Instantiate(bullet,bulletSpawn.position,bulletSpawn.rotation);
//timerr.timer=0.0;	



}


if(timerr.timer>0.02&& timerr.timer<0.04 && enemynum==2 ){
Instantiate(bullet,bulletSpawn.position,bulletSpawn.rotation);
//timerr.timer=0.0;	



}

if(timerr.timer>0.04&& timerr.timer<0.06 && enemynum==3 ){
Instantiate(bullet,bulletSpawn.position,bulletSpawn.rotation);
//timerr.timer=0.0;	



}


if(timerr.timer>0.06&& timerr.timer<0.08 && enemynum==4 ){
Instantiate(bullet,bulletSpawn.position,bulletSpawn.rotation);
//timerr.timer=0.0;	



}

if(timerr.timer>0.1&& timerr.timer<0.12 && enemynum==5 ){
Instantiate(bullet,bulletSpawn.position,bulletSpawn.rotation);
//timerr.timer=0.0;	



}







if (Mathf.Abs(positionDifference.x)>=4.0 ||	Mathf.Abs(positionDifference.z)>=4.0){
enemyTransform.transform.Translate(Vector3.forward*Time.deltaTime*enemySpeed);

}
check=1;
}


else{

check=0;

}






}



