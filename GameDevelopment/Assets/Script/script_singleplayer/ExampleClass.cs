using UnityEngine;
using System.Collections;

public class ExampleClass : MonoBehaviour {
	int x=0;
	float timer=0.0f;
	public GameObject canvas;
	void Start () {

	}

	void Update(){
	
		if(x==1){

			timer += Time.deltaTime;
			if(timer<5.0){
			canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
				timer=0.0f;
				x=0;
			}
				print("BAO");
		}



	}

	void OnTriggerEnter(Collider other) {
		if (other.collider.tag== "enemyspawn") {
			//canvas.GetComponent<Animator>().SetBool("monolithDetected", true);
			x=1;
		}
	}
}
