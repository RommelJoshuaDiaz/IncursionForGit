#pragma strict
var health=19;

static var damage=10;
var particle:Transform;




function Start () {

switch(SelectCraft.choice){
case 1: damage=7;
break;
case 2: damage=12;
break;
case 3: damage=22;
break;



}


}

function Update () {
switch(SelectCraft.choice){
case 1: damage=7;
break;
case 2: damage=12;
break;
case 3: damage=22;
break;



}
}



function OnCollisionEnter(collision:Collision){


if(collision.transform.name==("SPlayer")){

health-=5;





}
if(collision.transform.name==("missilePrefab(Clone)")){

/*
if (SelectCraft.choice==1){
health-=10;
}
if (SelectCraft.choice==2){
health-=7;
}
if (SelectCraft.choice==3){
health-=20;
}
*/health -=damage; 







if(health<0){

Instantiate(particle,transform.position,transform.rotation);
highScore.Score+=1;

SpawningEnemy.spawningcount-=1;
Destroy(gameObject);


}


}
}
