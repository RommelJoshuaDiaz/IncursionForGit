#pragma strict
var shield:Transform;


function Start () {

}

function Update () {
if(upshield.spawnShield==1){


Instantiate(shield,this.transform.position,this.transform.rotation);

upshield.spawnShield=0;}
}

