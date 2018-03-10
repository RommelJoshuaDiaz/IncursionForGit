var missile : GameObject;

function Update () {
	if (Input.GetMouseButtonDown (0))
	{
		var position : Vector3 = new Vector3(0, -0.35, 1) * 10.0;
		position = transform.TransformPoint (position);
		//var thisMissile : GameObject = 
		Network.Instantiate (missile, position, transform.rotation,0);// as GameObject;
//		Physics.IgnoreCollision(thisMissile.collider, collider);
	}
}
