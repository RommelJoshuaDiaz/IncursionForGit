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

	transform.Find("MCamera").gameObject.active=false;
		transform.Find("SCanvas").gameObject.active=false;
		transform.Find("speed").gameObject.active=false;
 
		
		
// GameObject.Find("SpaceCraft_mp(Clone)").GetComponent(MissileLauncher).enabled = false;
//var tmp2 : PlayerControls = GetComponent(PlayerControls);
		//		tmp2.enabled = false;	
//				var tmp4 : Slider = GetComponent(Slider);
//				tmp4.enabled = false;	
//transform.Find("pos").gameObject.active=false;
//transform.Find("SliderYea").gameObject.active=false;

}
catch(MissingComponentException){
}
//var tmp3 : Ediwow = GetComponent(Ediwow);
				//tmp3.enabled = false;
		// This is just some remote controlled player, don't execute direct
/*	// user input on this. DO enable multiplayer controll
transform.Find("MCamera").gameObject.active=true;
		
 GameObject.Find("SpaceCraft_mp(Clone)").GetComponent(PlayerControls).enabled = true;
		
		
 GameObject.Find("SpaceCraft_mp(Clone)").GetComponent(MissileLauncher).enabled = true;

*/
}



}