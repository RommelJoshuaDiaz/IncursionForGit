var missile :Transform;
var pos:Transform;
function Update () {

	if (Input.GetMouseButtonDown (0))
	{
	//	var position : Vector3 = new Vector3(0, -0.2, 1) * 10.0;
	//	position = transform.TransformPoint (position);
	
	
	Instantiate (missile,pos.transform.position,pos.transform.rotation);// as GameObject;
//		Physics.IgnoreCollision(thisMissile.collider, collider);
	}
}
function Start(){


	missile=GameObject.Find("mp_missilePrefabb").transform;

}
