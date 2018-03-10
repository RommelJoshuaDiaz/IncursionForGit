

public var healthBar : UnityEngine.UI.Image;  //Tells Unity that the gameObject is a UI Image
var fillAmount: float; //Fill Amount for UI Image
static var on=0;
static var onstop=0;
var canv_barier:Transform;
var imagee:Transform;

var parti:Transform;
var gameover:Transform;

var pause:Transform;


static var y=0;

static var amountfill:float=1;

function Start(){
imagee=GameObject.Find("ImageYeh").transform;
healthBar= imagee.GetComponent(Image);
healthBar.color.g=255;
healthBar.color.r=0;


}
function OnCollisionEnter(collision:Collision){

    	var audio: AudioSource = GetComponent.<AudioSource>();
    
    	
   if(collision.transform.name==("missileEnemy(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount - 0.12); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
    
    
    
    if(collision.transform.name==("Enemy1(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount - 0.03); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
    
    
        if(collision.transform.name==("Enemy2(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount - 0.03); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
    
    
    
    
        if(collision.transform.name==("Enemy3(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount -0.03); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
    
    
    
        if(collision.transform.name==("Enemy4(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount - 0.03); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
    
    
    
    
    
    
        if(collision.transform.name==("Enemy5(Clone)")){


         healthBar.fillAmount = (healthBar.fillAmount - 0.03); //for everytime the character enters the trigger it will lose half health
    	amountfill=healthBar.fillAmount;
	  	
	  	if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
	audio.Play();
//	audio.Play(44100);
    }
 if (collision.gameObject.tag == "barier")
	{
		healthBar.fillAmount = (healthBar.fillAmount - 0.03);
		amountfill=healthBar.fillAmount;
		if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
    	
	audio.Play();
	}
	
	 if (collision.gameObject.tag == "wallbarier")
	{
try{		healthBar.fillAmount = (healthBar.fillAmount - 0.03);
		amountfill=healthBar.fillAmount;
	}
	catch(ExitGUIException);	
    	
	audio.Play();	
		canv_barier.active=true;
		yield WaitForSeconds (2);
		canv_barier.active=false;
		if(onstop==0){
	      on=1;
    	}
    	else{
    	on=2;
    	}
    	
    	
	}
	/* if (collision.gameObject.tag == "health")
	{
	
	amountfill=0.9;
	healthBar.fillAmount=0.9;
	}
	*/
    
    }
 
function Update () {

imagee=GameObject.Find("ImageYeh").transform;
healthBar= imagee.GetComponent(Image);
if(amountfill>0.9){
healthBar.color.g=255;
healthBar.color.r=0;


}



 if(amountfill==0){
Instantiate(parti,transform.position,transform.rotation);
Destroy(gameObject);

pause.active=false;
gameover.active=true;

  GameObject.Find("Sphere1").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere2").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere3").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere4").GetComponent(FollowingScriptEnemy).enabled = false;
GameObject.Find("Sphere5").GetComponent(FollowingScriptEnemy).enabled = false;

 }
}
@script RequireComponent(AudioSource)