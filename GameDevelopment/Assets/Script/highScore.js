#pragma strict
 import UnityEngine.UI;
 
 var someText: Text;
  var goScore: Text;
 var goHighScore: Text;
 
 
//static var Score=0;


var hScore:String="HighScore";
//var hScore:int=0;
//var health=19;
static var Score=0;
var highScore:int=5;


function Start(){
Score=0;


    if(hScore==PlayerPrefs.HasKey("HighScore")){
           PlayerPrefs.SetInt(hScore,0);
      }
      else{
 // highScore = PlayerPrefs.GetInt(hScore); 
}
}
 function Awake() {

     // if(!PlayerPrefs.HasKey("HighScore")){
      //     PlayerPrefs.SetInt("HighScore",0);
      ///}
 }

function Update () {
    if(Score>PlayerPrefs.GetInt(hScore)){
             PlayerPrefs.SetInt(hScore, Score);
             PlayerPrefs.Save();
          
  //             highScore = PlayerPrefs.GetInt(hScore); 
    //             goHighScore.text=""+PlayerPrefs.GetInt(hScore);
       //    highScore = PlayerPrefs.GetInt(hScore,Score); 


                      }
                      
                      
  if(highScore<PlayerPrefs.GetInt(hScore)){
 highScore=PlayerPrefs.GetInt(hScore);
  goHighScore.text=""+highScore;
 
 }
 else{
 
  goHighScore.text=""+highScore;
 
 }
someText.text=""+Score;


goScore.text=""+Score;

}