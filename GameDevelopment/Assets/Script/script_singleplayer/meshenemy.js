#pragma strict


var currentNumber=0;
var x=0;
  
     var myTexture1 : Texture;
       var myTexture2 : Texture;
         var myTexture3 : Texture;
           var myTexture4 : Texture;
             var myTexture5 : Texture;
               var myTexture6 : Texture;
                 var myTexture7 : Texture;
                   var myTexture8 : Texture;
                     var myTexture9 : Texture;
                       var myTexture10 : Texture;
                       
   var thePlane:Transform;     
function Start () {

}






function Update () {
if(x==0){
currentNumber = Random.Range(1,11);

switch(currentNumber){
case 1:
renderer.material.mainTexture = myTexture1;
thePlane.renderer.material.mainTexture = myTexture1;
break;

case 2:
renderer.material.mainTexture = myTexture2;
thePlane.renderer.material.mainTexture = myTexture2;
break;
case 3:
renderer.material.mainTexture = myTexture3;
thePlane.renderer.material.mainTexture = myTexture3;
break;
case 4:
renderer.material.mainTexture = myTexture4;
thePlane.renderer.material.mainTexture = myTexture4;
break;
case 5:
renderer.material.mainTexture = myTexture5;
thePlane.renderer.material.mainTexture = myTexture5;
break;
case 6:
renderer.material.mainTexture = myTexture6;
thePlane.renderer.material.mainTexture = myTexture6;
break;
case 7:
renderer.material.mainTexture = myTexture7;
thePlane.renderer.material.mainTexture = myTexture7;
break;
case 8:
renderer.material.mainTexture = myTexture8;
thePlane.renderer.material.mainTexture = myTexture8;
break;
case 9:
renderer.material.mainTexture = myTexture9;
thePlane.renderer.material.mainTexture = myTexture9;
break;
case 10:
renderer.material.mainTexture = myTexture10;
thePlane.renderer.material.mainTexture = myTexture10;
break;


}





x=1;












}
}