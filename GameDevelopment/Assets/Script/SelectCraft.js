#pragma strict
var speed=3.0;
var time=0.0;
var aMesh1 : Mesh;
var aMesh2 : Mesh;
var aMesh3 : Mesh;
var s=0;
var img1:Transform;
var img2:Transform;
var img3:Transform;
var timerr=0;
static var openStart=0;
static var choice=0;

  
  var pit:Transform;
  
  
 var thePlane: GameObject;
  var myTexture1 : Texture;
  var myTexture2 : Texture; 
  var myTexture3 : Texture; 
  
  
  
  public var healthBar : UnityEngine.UI.Image;
  public var speedBar : UnityEngine.UI.Image;
  public var powerBar : UnityEngine.UI.Image;
  
  
  
  
  
 
  
  
  
  
function Start () {
choice=s;


img1=GameObject.Find("PenetrateHealth").transform;
healthBar= img1.GetComponent(Image);

img2=GameObject.Find("Speed").transform;
speedBar= img2.GetComponent(Image);

img3=GameObject.Find("Damage").transform;
powerBar= img3.GetComponent(Image);

healthBar.fillAmount=0;
speedBar.fillAmount=0;
powerBar.fillAmount=0;

}

function Update () {
time+=Time.deltaTime;
timerr+=0;
if(s==1){
pit.active=true;


}
else{

pit.active=false;
}
if(time>=0){
transform.Rotate(Vector3(0,-30*speed*Time.deltaTime,-30*speed*Time.deltaTime));

}


switch(s){

case 0:
if(healthBar.fillAmount<0.75&&speedBar.fillAmount<0.75&&powerBar.fillAmount<0.75){
		healthBar.fillAmount = (healthBar.fillAmount + 0.02); 
		speedBar.fillAmount = (speedBar.fillAmount + 0.02); 
		powerBar.fillAmount = (powerBar.fillAmount + 0.02);}

break;
case 1:
 
if(healthBar.fillAmount<1){
healthBar.fillAmount = (healthBar.fillAmount + 0.02); 
		} 
		
		if(powerBar.fillAmount<0.5){
		
		speedBar.fillAmount = (speedBar.fillAmount + 0.02); 
		
		powerBar.fillAmount = (powerBar.fillAmount + 0.02);
		}
		
	
		
		
		
break;


case 2:

if(healthBar.fillAmount<0.5){

healthBar.fillAmount = (healthBar.fillAmount + 0.02);}

 if(speedBar.fillAmount<1){
		speedBar.fillAmount = (speedBar.fillAmount + 0.02); 
		powerBar.fillAmount = (powerBar.fillAmount + 0.02); 
}
break;

}





}







function btn_Left(){

switch(s){
     
     case 0:
     var meshInstance4 : Mesh = Instantiate(aMesh3);
    GetComponent(MeshFilter).mesh = meshInstance4;
   s=2;
   choice=2;
      transform.localScale = new Vector3 (250,300,300); 
//transform.localScale += new Vector3(32, 15 , 27);
	renderer.material.mainTexture = myTexture3;
   thePlane.renderer.material.mainTexture = myTexture3;

   
   
   
   
     break; 
   case 1: var meshInstance5: Mesh = Instantiate(aMesh1);
    GetComponent(MeshFilter).mesh = meshInstance5;
   s=0;
   choice=0;
         transform.localScale = new Vector3 (18,18,18); 
  
   renderer.material.mainTexture = myTexture1;
   thePlane.renderer.material.mainTexture = myTexture1;
   
   
   
   

   
   
   
     break;

     case 2:
      var meshInstance6 : Mesh = Instantiate(aMesh2);
    GetComponent(MeshFilter).mesh = meshInstance6;
   s=1;
choice=1;
  transform.localScale = new Vector3 (43,43,43); 
      renderer.material.mainTexture = myTexture2;
   thePlane.renderer.material.mainTexture = myTexture2;
      break;
      
   
     }



   
   healthBar.fillAmount=0;
   speedBar.fillAmount=0;
   powerBar.fillAmount=0;
   
}


function btn_right(){

switch(s){
     
     case 0:
     var meshInstance1 : Mesh = Instantiate(aMesh2);
    GetComponent(MeshFilter).mesh = meshInstance1;
   s=1;
      choice=1;
  transform.localScale = new Vector3 (43,43,43);     


renderer.material.mainTexture = myTexture2;
   thePlane.renderer.material.mainTexture = myTexture2;
   

   
   
     break;
  
   case 1: var meshInstance2 : Mesh = Instantiate(aMesh3);
    GetComponent(MeshFilter).mesh = meshInstance2;
   s=2;
      choice=2;
      transform.localScale = new Vector3 (250,300,300); 
     renderer.material.mainTexture = myTexture3;
   thePlane.renderer.material.mainTexture = myTexture3;
   

     break;
     
     
     case 2:
      var meshInstance0 : Mesh = Instantiate(aMesh1);
    GetComponent(MeshFilter).mesh = meshInstance0;
   s=0;
      choice=0;
     transform.localScale = new Vector3 (18,18,18);      
       renderer.material.mainTexture = myTexture1;
   thePlane.renderer.material.mainTexture = myTexture1;  
   
   

            
                  
      break;
     }

   
   healthBar.fillAmount=0;
   speedBar.fillAmount=0;
   powerBar.fillAmount=0;
   
}
 
function Start_mp(){

openStart=1;

}


