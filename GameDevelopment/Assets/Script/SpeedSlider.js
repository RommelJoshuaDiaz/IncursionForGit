 import UnityEngine.UI;
 var mySlider: UnityEngine.UI.Slider;
 static var sliderPos:float=1.0;
 var xx:Transform;
 var x=0;
 function Start () {
      // substitute 'sliderName' with the literal name 
      // of your slider as it appears in the hierarchy:
      mySlider = GameObject.Find("SliderYea").GetComponent(UnityEngine.UI.Slider);
   
 }
 
 function Update () {
//      xx.active=true;
      
      if(SelectCraft.choice==0){
      mySlider.maxValue = 500; 
      }
      else if(SelectCraft.choice==1){
      mySlider.maxValue = 350; 
      }
      
      if(SelectCraft.choice==2){
      mySlider.maxValue = 650; 
      }
      
 if(x==0){
    mySlider.value=200;
 
 x=1;
 }
     // sliderPos=mySlider.value;
      sliderPos=mySlider.value;
      
      //insert desired variable here in place of 'n'
      // slider will automagically adjust to display new value
 }
 
 
 
