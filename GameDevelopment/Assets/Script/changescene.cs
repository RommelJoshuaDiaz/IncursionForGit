using UnityEngine;
using System.Collections;

public class changescene : MonoBehaviour {
	public void nextscene(string nextScene){

		Application.LoadLevel (nextScene);
	}

	public void exitscene(){

		Application.Quit();


	}
}