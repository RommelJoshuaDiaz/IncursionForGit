#pragma strict
//public var healthBar : UnityEngine.UI.Image;

var target:Transform;
var desob:GameObject;
static var openSP=0;


var sp1:Transform;
var sp2:Transform;
var sp3:Transform;





function Start () {

}





function Update () {
target=GameObject.Find("SpaceCraft").transform;
//sp1=GameObject.Find("sp1").transform;

//sp2=GameObject.Find("sp2").transform;


//sp3=GameObject.Find("sp3").transform;


}





function OnCollisionEnter(collision:Collision){
//timer+=Time.deltaTime;


if(collision.transform.name==("SpaceCraft")){

//healthBar.color.r=0;
//healthBar.color.g=255;
//PlayerHealth.amountfill=1;
openSP=1;
/*
if(SelectCraft.choice==1){
sp1.active=true;}
if(SelectCraft.choice==3){
sp2.active=true;}
if(SelectCraft.choice==2){

sp3.active=true;
}*/
Destroy(desob);























}



}