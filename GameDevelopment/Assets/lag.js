#pragma strict

function Start () {

}

function Update () {
if (networkView.isMine)
	{	//	transform.Find("MCamera").gameObject.active=true;
		
// GameObject.Find("SpaceCraft_2(Clone)").GetComponent(PlayerControls).enabled = true;
		
		
 //GameObject.Find("SpaceCraft_2(Clone)").GetComponent(Ediwow).enabled = true;

	}
	// This is just some remote controlled player, don't execute direct
	// user input on this. DO enable multiplayer controll
	else
	{
	try{
//GameObject.Find("SpaceCraft_mp").GetComponent(PlayerControls).enabled = true;
var tmp2 : MissileLauncher = GetComponent(MissileLauncher);
		tmp2.enabled = false;	
		
		var tmp3 : PlayerControls = GetComponent(PlayerControls);
		tmp3.enabled = false;
}
catch(MissingComponentException){
}
}
}