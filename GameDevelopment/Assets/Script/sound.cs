﻿using UnityEngine;
using System.Collections;

public class sound : MonoBehaviour {
	
	public AudioClip clip ;
	AudioSource source ; 
	
	// Use this for initialization
	void Start () {
		
		source = GetComponent<AudioSource> ();
		
		source.PlayOneShot (clip, 2f); 
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
