#pragma strict
public var healthBar : UnityEngine.UI.Image;
function Start () {

}

function Update () {
}


function selectCraft(){

SelectCraft.choice=0;
healthyeah();
highScore.Score=0;

}
function healthyeah(){
PlayerHealth.amountfill=1;
SpawningEnemy.x=1;
SpawningEnemy.spawningcount=0;
//healthBar.color.b=0;
//healthBar.color.r=0;
//PlayerHealth.amountfill=1;



}




