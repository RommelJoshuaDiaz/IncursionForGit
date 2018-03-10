#pragma strict
//public var healthBar : UnityEngine.UI.Image;
public var healthBar : UnityEngine.UI.Image;
var imagee:Transform;
var target:Transform;
var desob:GameObject;
var timer=0.0;
function Start () {

target=GameObject.Find("SpaceCraft").transform;
imagee=GameObject.Find("ImageYeh").transform;
healthBar= imagee.GetComponent(Image);

}





function Update () {
timer+=Time.deltaTime;

target=GameObject.Find("SpaceCraft").transform;
//healthBar=GameObject.Find("ImageYeh").transform;
if(timer>18){

Destroy(desob);

}
}





function OnCollisionEnter(collision:Collision){
//


if(collision.transform.name==("SpaceCraft")){

     healthBar.fillAmount = (healthBar.fillAmount + 0.3); 
     health_sp.amountfill=healthBar.fillAmount;

Destroy(desob);


}


}