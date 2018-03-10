var remoteIP = "192.168.1.1";
var remotePort = 25000;
var listenPort = 25000;
var useNAT = false;
var yourIP = "";
var yourPort = "";
static var select=0.0;
var craftChoice=0.0;
var onoff:Transform;
var L_audio:Transform;
//var orayt:Transform;
static var myPlayerName : String = "MyPlayerName";
static var xname:String;
var choose:Transform;
var craft:Transform;	
static var opengame=0;
function Awake(){



myPlayerName= PlayerPrefs.GetString("playerName");

}

function OnGUI () {

 // Checking if you are connected to the server or not
 if (Network.peerType == NetworkPeerType.Disconnected)
 {
 // If not connected

if (GUI.Button (new Rect(10,200,100,30),"Back"))
 {
 
 
   Application.LoadLevel("menu_start");
 
 }

 
 myPlayerName = GUI.TextField(new Rect(230,10,40,20),myPlayerName);
	
	if(GUI.changed){
			//Save the name changes
			PlayerPrefs.SetString("playerName", myPlayerName);
		xname=myPlayerName;
		}
		
			if(myPlayerName==""){
			GUI.Label (Rect (100, 240, 260, 100), "After entering your name you can start playing!");
		
				return;
		}
		else{
		Update();
		PlayerPrefs.SetString("playerName", myPlayerName);
		xname=myPlayerName;
		}
		
		
		
	if(xname==myPlayerName){
	
	
	}
	else{
		myPlayerName= PlayerPrefs.GetString("playerName");
	
	}
	
 // Fields to insert ip address and port 
 remoteIP = GUI.TextField(new Rect(120,10,100,20),remoteIP);

 if (GUI.Button (new Rect(10,125,100,30),"Connect"))
 { //kill();
// GameObject.Find("GameObject").GetComponent("PlayerProjectTileShoter").active=false;
 // onoff.active=true;
  L_audio.active=false;
  opengame=0;
choose.active=true;
craft.active=true;

 //transform.Find("Shooter").gameObject.active=false;
Network.useNat = useNAT;
 // Connecting to the server
 Network.Connect(remoteIP, remotePort);




 
 }
 if (GUI.Button (new Rect(10,50,100,30),"Start Server"))
 {
 

choose.active=true;
craft.active=true;

// transform.Find("SelectCraft").gameObject.active=true;
// onoff.active=true;
L_audio.active=false;
 Update();
 //kill();
 PlayerPrefs.SetString("playerName",myPlayerName);
  chat.showChat=false;
// orayt.test();
 Network.useNat = useNAT;
 // Creating server
 
 Network.InitializeServer(32, listenPort);

 if( opengame==1){
 // Notify our objects that the level and the network is ready
 for (var go : GameObject in FindObjectsOfType(GameObject))
 {
 go.SendMessage("OnNetworkLoadedLevel", 
SendMessageOptions.DontRequireReceiver); 
 
 }
 select=1.0;
 
 
 }
  }
 }
 else
 {
 
 
 
 
 // Getting your ip address and port
 var ipaddress = Network.player.ipAddress;
 var port = Network.player.port.ToString();
 
 GUI.Label(new Rect(140,20,250,40),"IP Adress: "+ipaddress+":"+port);
 if (GUI.Button (new Rect(10,10,100,50),"Disconnect"))
 {
 // Disconnect from the server
 //  onoff.active=false;
  L_audio.active=true;
 Network.Disconnect(200);
  Application.LoadLevel("Multi");
  select=0.0;
  
  
  
 }
 }
 
 

 
}

function OnConnectedToServer () {

//Mcamera.GetComponent(Camera).enabled = false
 // Notify our objects that the level and the network are ready
 for (var go : GameObject in FindObjectsOfType(GameObject))
 go.SendMessage("OnNetworkLoadedLevel", 
SendMessageOptions.DontRequireReceiver); 

//transform.Find("ChildToKill").gameObject.setActive(false);
 select=1.0;



}
function Update(){

		PlayerPrefs.SetString("playerName", myPlayerName);
		xname=myPlayerName;

}
function Start(){


choose.active=false;
craft.active=false;


}







