#pragma strict

public var healthBar : UnityEngine.UI.Image;  //Tells Unity that the gameObject is a UI Image
var fillAmount: float; //Fill Amount for UI Image

var health=100;
var canv_barier:Transform;

static var amountfill:float=1;
var parti:Transform;
var canv_gameover:Transform;
var strength=1;
var hidep:Transform;
var crafff:Transform;
 var xy=0;
function Start () {

healthBar.fillAmount = 1;
amountfill=healthBar.fillAmount;

if(SelectCraft.choice==0){

strength=1;
		

}
if(SelectCraft.choice==1){



strength=2;

}
if(SelectCraft.choice==2){


strength=3;

}

}

function Update () {
switch(SelectCraft.choice){
case 1: EnemyHealth.damage=7;
break;
case 2: EnemyHealth.damage=12;
break;
case 3:  EnemyHealth.damage=22;
break;



}
 if(amountfill==0){
GameObject.Find("SpaceCraft").GetComponent(PlayerControls).enabled = false;

GameObject.Find("SpaceCraft").GetComponent(Missilellaunchersp).enabled = false;
if(xy==0){
Instantiate(parti,transform.position,transform.rotation);
xy=1;

}
crafff.active=false;
hidep.active=false;
canv_gameover.active=true;
canv_barier.active=false;

}


}


function OnCollisionEnter(collision:Collision){
if(shieldrotate.shieldon==1){
	audio.Play();
    	var audio: AudioSource = GetComponent.<AudioSource>();
      if(strength==2){	
   if(collision.transform.name==("missileEnemy(Clone)")){
    healthBar.fillAmount = (healthBar.fillAmount - 0.05); 
    amountfill=healthBar.fillAmount;
	}
	
  if(collision.gameObject.tag == "enemyspawn"){
     healthBar.fillAmount = (healthBar.fillAmount - 0.02); 
     amountfill=healthBar.fillAmount;


  }
  
  if(collision.gameObject.tag == "barier"){
  
    healthBar.fillAmount = (healthBar.fillAmount - 0.02);
    amountfill=healthBar.fillAmount;


  }
   if (collision.gameObject.tag == "wallbarier"){
   
   
    healthBar.fillAmount = (healthBar.fillAmount - 0.02);
    amountfill=healthBar.fillAmount;


  		canv_barier.active=true;
		yield WaitForSeconds (2);
		canv_barier.active=false;
   }

	}
	 if(strength==1){	
   if(collision.transform.name==("missileEnemy(Clone)")){
    healthBar.fillAmount = (healthBar.fillAmount - 0.12); 
    amountfill=healthBar.fillAmount;
	}
	
  if(collision.gameObject.tag == "enemyspawn"){
     healthBar.fillAmount = (healthBar.fillAmount - 0.05); 
     amountfill=healthBar.fillAmount;


  }
  
  if(collision.gameObject.tag == "barier"){
  
    healthBar.fillAmount = (healthBar.fillAmount - 0.04);
    amountfill=healthBar.fillAmount;


  }
   if (collision.gameObject.tag == "wallbarier"){
   
   
    healthBar.fillAmount = (healthBar.fillAmount - 0.04);
    amountfill=healthBar.fillAmount;


  		canv_barier.active=true;
		yield WaitForSeconds (2);
		canv_barier.active=false;
   }

	}
	 if(strength==3){	
   if(collision.transform.name==("missileEnemy(Clone)")){
    healthBar.fillAmount = (healthBar.fillAmount - 0.15); 
    amountfill=healthBar.fillAmount;
	}
	
  if(collision.gameObject.tag == "enemyspawn"){
     healthBar.fillAmount = (healthBar.fillAmount - 0.06); 
     amountfill=healthBar.fillAmount;


  }
  
  if(collision.gameObject.tag == "barier"){
  
    healthBar.fillAmount = (healthBar.fillAmount - 0.06);
    amountfill=healthBar.fillAmount;


  }
   if (collision.gameObject.tag == "wallbarier"){
   
   
    healthBar.fillAmount = (healthBar.fillAmount - 0.06);
    amountfill=healthBar.fillAmount;


  		canv_barier.active=true;
		yield WaitForSeconds (2);
		canv_barier.active=false;
   }

	}
	
	 /*  if (collision.gameObject.tag == "upshield"){
Instantiate(shield,craft.transform.position,craft.transform.rotation);
}*/
	}
	else{}
	
	}
	
	
	
	
	@script RequireComponent(AudioSource)