var nView: NetworkView;

var cubePrefab : Transform;

function Start() {
	nView = GetComponent.<NetworkView>();
}


@RPC
function SpawnBox (viewID : NetworkViewID, location : Vector3) {
	// Instantate the prefab locally
/*	var clone : Transform;
	clone = Instantiate(cubePrefab, location, Quaternion.identity) as Transform;
	var nView : NetworkView;
	nView = clone.GetComponent.<NetworkView>();
	nView.viewID = viewID;
*/
 Network.Instantiate(cubePrefab, transform.position, transform.rotation, 0);
}


function Update(){

	if (Input.GetMouseButtonDown (0))
	{
		var viewID = Network.AllocateViewID();
		
		nView.RPC("SpawnBox", 
						RPCMode.AllBuffered, 
						viewID, 
						transform.position);
	
	
	
	}


}