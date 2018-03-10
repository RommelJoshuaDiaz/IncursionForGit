using UnityEngine;
using System.Collections;

public class random : MonoBehaviour {
	
	Animator animator; 
	
	// Use this for initialization
	void Start () {
		animator = GetComponent<Animator>();
		string attackState = string.Format("anim{0}", Random.Range((int) 1, (int) 3));
		animator.Play(attackState);
		
	}
	
	// Update is called once per frame
	void Update () {
		if (Random.Range ((int)1, (int)1000) > 990) {
			string attackState = string.Format ("anim{0}", Random.Range ((int)1, (int)3));
			animator.Play (attackState);		
		}
	}
}
	