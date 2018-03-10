var missile : Transform;//GameObject;
var pos:Transform;
function Update () {
	if (Input.GetMouseButtonDown (0))
	{
	
	Instantiate(missile,pos.position,pos.rotation);
	//	var position : Vector3 = new Vector3(0, -0.2, 1) * 10.0;
	//	position = transform.TransformPoint (position);
		//var thisMissile : GameObject = Instantiate (missile, position, transform.rotation) as GameObject;
//		Physics.IgnoreCollision(thisMissile.collider, collider);
	}
}

function Start(){


missile = GameObject.Find ("missilePrefab").transform;


}
