using UnityEngine;
using System.Collections;

public class HideCanvas : MonoBehaviour {
	//It's better to reference the player and the monolith once. Calling find each update it's not a good choice
	GameObject player;
//	GameObject monolith;
	public Transform monolith;
	public GameObject canvas; // assigned from inspector
	bool isVisible;
	
	//set a limit to hide/unhide as const to avoid magic numbers in the code
	const float limit = 20.0f;
	
	void Start () {
		//Look for the player game object, in my case it's "First Person Controller"
		player = GameObject.Find ("SpaceCraft");
	//	monolith = GameObject.Find ("Enemy1");
		//Set disabled as default to hide the canvas
		isVisible = false;
		canvas.SetActive (isVisible);
	}
	
	void Update () {
		float distance = Vector3.Distance (player.transform.position, monolith.transform.position);
		//Sometimes texts are written backwards when using lookAt. This is a workarround to fix this issue
		canvas.transform.LookAt(2 * canvas.transform.position - player.transform.position);
		if (distance < limit && !isVisible) {
			isVisible = true;
			canvas.SetActive (isVisible);
		}
		if (distance >= limit && isVisible) {
			isVisible = false;
			canvas.SetActive (isVisible);
		}
	}
}
