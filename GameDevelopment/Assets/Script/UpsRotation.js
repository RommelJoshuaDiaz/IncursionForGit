#pragma strict

var rotateSpeed : float = 40.0;

function Update () {
//	transform.Rotate(Vector3(-30*rotateSpeed*Time.deltaTime,-20*rotateSpeed*Time.deltaTime,0));
	transform.Rotate (0, rotateSpeed * Time.deltaTime ,0	);
}