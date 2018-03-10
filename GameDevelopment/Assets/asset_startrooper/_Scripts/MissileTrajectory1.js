var explosion : Transform;

function FixedUpdate () {
	rigidbody.AddForce (transform.TransformDirection (Vector3.forward) * 200.0);
}

function OnCollisionEnter(collision : Collision) {
	var contact : ContactPoint = collision.contacts[0];
	//var thisExplosion : GameObject = Instantiate (explosion, contact.point + (contact.normal * 5.0) , Quaternion.identity);

	 if (collision.gameObject.tag == "missileee"){

	
}


	

else{

			Network.Instantiate (explosion, contact.point + (contact.normal * 5.0) , Quaternion.identity,0);

	Destroy (gameObject);
}
	
	if (collision.gameObject.tag == "enemy")
	{
		Destroy (collision.gameObject);
	}
	
//	Destroy (thisExplosion, 2.0)


}

function Update(){

//networkView.RPC("SpawnBox", RPCMode.All, transform.position, transform.rotation.eulerAngles);

}