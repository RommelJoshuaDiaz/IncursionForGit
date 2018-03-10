using UnityEngine;
using System.Collections;

public class monolithDetection : MonoBehaviour {

	
	GameObject canvas;
	// Use this for initialization
	void Start () {
		canvas = GameObject.Find("Yeba");
	}
	
	// Update is called once per frame
	void Update () {
		RaycastHit hit;
		Vector3 fwd = transform.TransformDirection(Vector3.forward);
		if (Physics.Raycast (transform.position, fwd,out hit, 2000.0F)) {
			if(hit.collider.gameObject.name.Equals("Enemy1(Clone)")){
				canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				print(hit.collider.gameObject.name);
			}

			else if(hit.collider.gameObject.name.Equals("Enemy2(Clone)")){
				canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				print(hit.collider.gameObject.name);
			}
	
			else if(hit.collider.gameObject.name.Equals("Enemy3(Clone)")){
				canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				print(hit.collider.gameObject.name);
			}
			else if(hit.collider.gameObject.name.Equals("Enemy4(Clone)")){
				canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				print(hit.collider.gameObject.name);
			}

			else if(hit.collider.gameObject.name.Equals("Enemy5(Clone)")){
				canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				print(hit.collider.gameObject.name);
			}
			else{
				try{
					canvas.GetComponent<Animator>().SetBool("monolithDetected", false);
				}
				catch(MissingComponentException){
					
					canvas.GetComponent<Animator>().SetBool("monolithDetected", false);
				}

				}
		}else
			canvas.GetComponent<Animator>().SetBool("monolithDetected", false);
	}
}
