#pragma strict
var aMesh1 : Mesh;
var aMesh2 : Mesh;
var aMesh3 : Mesh;
var s=0;
  var pit:Transform;
  
  
 var thePlane: GameObject;
  var myTexture1 : Texture;
  var myTexture2 : Texture; 
  var myTexture3 : Texture; 
   var meshInstance : Mesh ;
function Start () {
if(SelectCraft.choice==0){
 meshInstance= Instantiate(aMesh1);
    GetComponent(MeshFilter).mesh = meshInstance;

     transform.localScale = new Vector3 (1,1,1); 

	renderer.material.mainTexture = myTexture1;
   thePlane.renderer.material.mainTexture = myTexture1;
   }
if(SelectCraft.choice==1){
 meshInstance= Instantiate(aMesh2);
    GetComponent(MeshFilter).mesh = meshInstance;

     transform.localScale = new Vector3 (3.3,2,2.6); 

	renderer.material.mainTexture = myTexture2;
   thePlane.renderer.material.mainTexture = myTexture2;
   pit.active=true;
   }
   
if(SelectCraft.choice==2){
      meshInstance= Instantiate(aMesh3);
    GetComponent(MeshFilter).mesh = meshInstance;

     transform.localScale = new Vector3 (16.5,16.5,20); 

	renderer.material.mainTexture = myTexture3;
   thePlane.renderer.material.mainTexture = myTexture3;
   
   
   }
   
   
   
}

function Update () {



   













}