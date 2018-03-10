var SpaceCraft1 : Transform;
//var pos:Transform;

function OnGUI(){

}



function OnNetworkLoadedLevel () {



 Network.Instantiate(SpaceCraft1,transform.position,transform.rotation, 0);
  
  
  
  
  
  
  
  
  
  
 


}
function OnPlayerDisconnected (player : NetworkPlayer) {
 Network.RemoveRPCs(player, 0);
 Network.DestroyPlayerObjects(player);
}
function UpdateStart(){

 //OnNetworkLoadedLevel ();

}
