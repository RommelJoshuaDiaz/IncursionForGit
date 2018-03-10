#pragma strict

public var healthBar : UnityEngine.UI.Image;  //Tells Unity that the gameObject is a UI Image
var fillAmount: float; 
var canv_barier:Transform;
var amountfill:float=1;
var textdeath:Text;
var death=0;
var textjudge:Text;
var hm:int=0;
function Start () {
judge.j=0;
}

function Update () {
if(amountfill<=0&&hm==0){

		hm=1;
		healthBar.fillAmount=1;
amountfill=healthBar.fillAmount;
networkView.RPC("Respawn",RPCMode.All);

	hm=0;
}



if(	judge.j==1){

if(death>=10){
textjudge.text="LOSE";

}
else{
textjudge.text="WINNER";

}
textjudge.active=true;

judge.j=2;
if(judge.j==2){

  
}
}


//hideFlags(this);


}

function OnCollisionEnter(collision:Collision){
  if(collision.transform.name==("missileP(Clone)"))
  {
        healthBar.fillAmount = (healthBar.fillAmount - 0.12); 
    	amountfill=healthBar.fillAmount;
	}
 if (collision.gameObject.tag == "wallbarier")
	{   
		healthBar.fillAmount = (healthBar.fillAmount - 0.07); 
    	amountfill=healthBar.fillAmount;
		canv_barier.active=true;
		yield WaitForSeconds (2);
		canv_barier.active=false;
	}
	 if (collision.gameObject.tag == "barier")
	{
		healthBar.fillAmount = (healthBar.fillAmount - 0.07); 
    	amountfill=healthBar.fillAmount;
	}
  if(collision.transform.name==("SpaceCraft_mp(Clone)"))
  {
        healthBar.fillAmount = (healthBar.fillAmount - 0.07); 
    	amountfill=healthBar.fillAmount;
	}

}

@RPC
function Respawn(){
	if (networkView.isMine)
	{
		//theScoreBoard.LocalPlayerDied();
	


		// Randomize starting location
		
			death+=1;
			textdeath.text=""+death;
		var spawnpoints : GameObject[] = GameObject.FindGameObjectsWithTag ("Spawn");
		var spawnpoint : Transform = spawnpoints[Random.Range(0, spawnpoints.length)].transform;
	
		transform.position=spawnpoint.position;
		transform.rotation=spawnpoint.rotation;	
	
	
	if(death>=10){
	judge.j=1;
		
		
		}
	}
	
}

