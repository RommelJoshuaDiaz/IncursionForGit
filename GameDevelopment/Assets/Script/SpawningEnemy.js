#pragma strict

var spoint_1:Transform;

var spoint_2:Transform;
var spoint_3:Transform;
var spoint_4:Transform;

var spoint_5:Transform;


var enemy1:Transform;

var enemy2:Transform;
var enemy3:Transform;
var enemy4:Transform;

var enemy5:Transform;
var parti:Transform;

static var x=1;


static var spawningcount=1;
//var spawn=5;





function Start () {


    	var audio: AudioSource = GetComponent.<AudioSource>();
    	
    	
	audio.Play();
	
	yield WaitForSeconds(4);
	spawningcount=0;
	
}

function Update () {


if(spawningcount==0){

    //	var audio: AudioSource = GetComponent.<AudioSource>();
    	
    	
	//audio.Play();
	
Instantiate(parti,spoint_1.position,spoint_1.rotation);
Instantiate(parti,spoint_2.position,spoint_1.rotation);
Instantiate(parti,spoint_3.position,spoint_3.rotation);
Instantiate(parti,spoint_4.position,spoint_4.rotation);
Instantiate(parti,spoint_5.position,spoint_5.rotation);

Instantiate(enemy1,spoint_1.position,spoint_1.rotation);
Instantiate(enemy2,spoint_2.position,spoint_1.rotation);
Instantiate(enemy3,spoint_3.position,spoint_3.rotation);
Instantiate(enemy4,spoint_4.position,spoint_4.rotation);
Instantiate(enemy5,spoint_5.position,spoint_5.rotation);

spawningcount=3;
}

}
function delay(){

	yield WaitForSeconds(4);

}
@script RequireComponent(AudioSource)