#pragma strict
var speed=3.0;
var time=0.0;
var aMesh1 : Mesh;
var aMesh2 : Mesh;
var aMesh3 : Mesh;
var s=0;

static var choice=0;

  
  var pit:Transform;
  
  
 var thePlane: GameObject;
  var myTexture1 : Texture;
  var myTexture2 : Texture; 
  var myTexture3 : Texture; 
  
  
  
  
  
  
  
function Start () {
choice=s;
//thePlane=gameObject.Find("craftchoose").transform;


}

function Update () {
time+=Time.deltaTime;
//timerr+=0;
if(s==1){
pit.active=true;


}
else{

pit.active=false;
}
if(time>=0){
transform.Rotate(Vector3(0,-30*speed*Time.deltaTime,-30*speed*Time.deltaTime));

}



}







function btn_Left(){

switch(s){
     
     case 0:
     var meshInstance4 : Mesh = Instantiate(aMesh3);
    GetComponent(MeshFilter).mesh = meshInstance4;
   s=2;
   choice=2;
      transform.localScale = new Vector3 (8,10,10); 
//transform.localScale += new Vector3(32, 15 , 27);
	renderer.material.mainTexture = myTexture3;
   thePlane.renderer.material.mainTexture = myTexture3;

   
   
   
   
     break; 
   case 1: var meshInstance5: Mesh = Instantiate(aMesh1);
    GetComponent(MeshFilter).mesh = meshInstance5;
   s=0;
   choice=0;
         transform.localScale = new Vector3 (0.5,0.5,0.5); 
  
   renderer.material.mainTexture = myTexture1;
   thePlane.renderer.material.mainTexture = myTexture1;
   
   
   
   

   
   
   
     break;

     case 2:
      var meshInstance6 : Mesh = Instantiate(aMesh2);
    GetComponent(MeshFilter).mesh = meshInstance6;
   s=1;
choice=1;
  transform.localScale = new Vector3 (1.3,1.3,1.3); 
      renderer.material.mainTexture = myTexture2;
   thePlane.renderer.material.mainTexture = myTexture2;
      break;
      
   
     }



   
   
}


function btn_right(){

switch(s){
     
     case 0:
     var meshInstance1 : Mesh = Instantiate(aMesh2);
    GetComponent(MeshFilter).mesh = meshInstance1;
   s=1;
      choice=1;
  transform.localScale = new Vector3 (1.3,1.3,1.3);     


renderer.material.mainTexture = myTexture2;
   thePlane.renderer.material.mainTexture = myTexture2;
   

   
   
     break;
  
   case 1: var meshInstance2 : Mesh = Instantiate(aMesh3);
    GetComponent(MeshFilter).mesh = meshInstance2;
   s=2;
      choice=2;
      transform.localScale = new Vector3 (8,10,10); 
     renderer.material.mainTexture = myTexture3;
   thePlane.renderer.material.mainTexture = myTexture3;
   

     break;
     
     
     case 2:
      var meshInstance0 : Mesh = Instantiate(aMesh1);
    GetComponent(MeshFilter).mesh = meshInstance0;
   s=0;
      choice=0;
     transform.localScale = new Vector3 (0.5,0.5,0.5);      
       renderer.material.mainTexture = myTexture1;
   thePlane.renderer.material.mainTexture = myTexture1;  
   
   

            
                  
      break;
     }

   
   
}

function startmulti(){




}
 



