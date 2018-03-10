#pragma strict

var pos_upforward:Transform;
var pos_upbackward:Transform;
var pos_upleft:Transform;
var pos_upright:Transform;


var pos_downforward:Transform;
var pos_downbackward:Transform;
var pos_downleft:Transform;
var pos_downright:Transform;

var pos_forward:Transform;
var pos_backward:Transform;
var pos_left:Transform;
var pos_right:Transform;
var time=0.0;
//var step=0.0;
var speed=30.0;
var currentNumber=0;
var currentPosition=0;



//var enemyForm:GameObject;


var go;
function Start () {

//this.transform.position = Vector3.MoveTowards(this.transform.position,pos_forward, 2.0);
pos_forward = GameObject.Find ("forward3").transform;
pos_backward = GameObject.Find ("backward3").transform;
pos_left = GameObject.Find ("left3").transform;
pos_right = GameObject.Find ("right3").transform;

pos_upforward = GameObject.Find ("upforward3").transform;
pos_upbackward = GameObject.Find ("upbackward3").transform;
pos_upleft = GameObject.Find ("upleft3").transform;
pos_upright = GameObject.Find ("upright3").transform;

pos_downforward = GameObject.Find ("downforward3").transform;
pos_downbackward = GameObject.Find ("downbackward3").transform;
pos_downleft = GameObject.Find ("downleft3").transform;
pos_downright = GameObject.Find ("downright3").transform;

}

function Update () {

//var g=pos_backward.position;


//transform.position = Vector3.MoveTowards(transform.position, upPos.position, step);

//if(networkView.isMine){
time+=Time.deltaTime;


if(FollowingScriptEnemy.check==0){

var step = speed * Time.deltaTime;




if(time>2){
currentNumber = Random.Range(1,4);

currentPosition=Random.Range(1,5);


time=0;


}
if (transform.position.y<4){

transform.position.y+=5;
time=4;
}
if (transform.position.y>155){

transform.position.y-=5;
time=4;
}





if (transform.position.z>140){

transform.position.z-=5;
time=4;
}
if (transform.position.z<-140){

transform.position.z+=5;
time=4;
}




if (transform.position.x>130){

transform.position.x-=5;
time=4;
}
if (transform.position.x<-130){

transform.position.x+=5;
time=4;
}




}




switch (currentNumber){

case 1:
		if(currentPosition==1){
		
		//go=pos_upforward.position;
		
				transform.position = Vector3.MoveTowards(transform.position,pos_upforward.position, step);
	
		
		}
		if(currentPosition==2){
		
		//go=pos_upbackward.position;
		
				transform.position = Vector3.MoveTowards(transform.position,pos_upbackward.position, step);
	
		
		}
		if(currentPosition==3){
		
		//go=pos_upleft.position;
		
				transform.position = Vector3.MoveTowards(transform.position,pos_upleft.position, step);
	
		
		}
		if(currentPosition==4){
		
		//go=pos_upright.position;
		
				transform.position = Vector3.MoveTowards(transform.position,pos_upright.position, step);
		}
break;


case 2:
		if(currentPosition==1){
		
		//go=pos_forward.position;
				transform.position = Vector3.MoveTowards(transform.position,pos_downforward.position, step);
		
		}
		if(currentPosition==2){
		
		//go=pos_downbackward.position;
				transform.position = Vector3.MoveTowards(transform.position,pos_downbackward.position, step);
		
		}
		if(currentPosition==3){
		
		//go=pos_downleft.position;
				transform.position = Vector3.MoveTowards(transform.position,pos_downleft.position, step);
		
		}
		if(currentPosition==4){
		
		//go=pos_downright.position;
				transform.position = Vector3.MoveTowards(transform.position,pos_downright.position, step);
		
		}

break;

case 3:



		if(currentPosition==1){
		
		//go=pos_forward.position;
				transform.position = Vector3.MoveTowards(transform.position,pos_forward.position, step);
		
		}
		if(currentPosition==2){
		
		//go=pos_backward.position;
		transform.position = Vector3.MoveTowards(transform.position,pos_backward.position, step);
		
		}
		if(currentPosition==3){
		
		//go=pos_left.position;
		transform.position = Vector3.MoveTowards(transform.position,pos_left.position, step);
		
		}
		if(currentPosition==4){
		
		//go=pos_right.position;
		transform.position = Vector3.MoveTowards(transform.position,pos_right.position, step);
		
		}
break;


}



































if(time>1){

FollowingScriptEnemy.check=0;
}

//try{

//}
//catch(MissingComponentException){
//}



}




