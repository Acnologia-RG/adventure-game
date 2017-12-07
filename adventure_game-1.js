console.log("hallo");
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const story = document.getElementById('p-story');
const options = document.getElementById('ul-options');
const status = document.getElementById('ul-status');

//boolean's
var tired = true;
var dirty = true;
var late = true;
var single = true;
var got_work = true;
var hyped = false;
var energy = false;
var dressed = false;
var clean = false;
var nice_breath = false;
var clean_teeth = false;
var late_for_work = false;
var know_the_weather = false;
var worked = false;

//numbers
var relationship = 0;
var irritated_boss = 0;
var promoted = 0;
var troll = 0;
var time = 420;

//start game functions
function functionstart() {
	pic.src = "img/clock7.png";
	removeStatus(0);
	removeStatus(0);
	removeOptions();
	late = false;
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("snooze","functionSnooze");
	story.innerHTML = "you just woke-up from your sleep";
}
function functionhyped() {
	functionstart();
	hyped = true;
	story.innerHTML = "you just woke-up from your sleep and you feel really excited";
}

//functions for at home in the morning
function functionSnooze() {
	pic.src = "img/clock8.png";
	late_for_work = true;
	removeOptions();
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("see your already late and continue sleeping","functionGameOver");
	story.innerHTML = "";
}
function functionGetUp() {
	pic.src = "img/bedroom.png";
	removeOptions();
	if (dressed==false) {
	createNewLiOptions("get dressed","functiondressed");
	}
	createNewLiOptions("go to the bathroom","functionGoToTheBathroom");
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	createNewLiOptions("go back to bed","functiongoBackToBed");
	story.innerHTML = "";
}
function functionGoToTheBathroom() {
	pic.src = "img/bathroom.png";
	removeOptions();
	if (clean==false || dirty==true) {
	createNewLiOptions("take a shower","functionTakeAShower");
	}if (nice_breath == false || clean_teeth == false) {
	createNewLiOptions("brush your teeth","functionBrushYourTeeth");
	}
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	createNewLiOptions("go back to bed","functiongoBackToBed");
}
function functionGoToTheLivingRoom() {
	pic.src = "img/livingroom.png";
	removeOptions();
	pic.setAttribute("style","width:62%;");
	if (energy==false) {
	createNewLiOptions("eat breakfast","functionEatBreakfast");
	}
	if (know_the_weather==false) {
	createNewLiOptions("check the weather","functionCheckTheWeather");
	}
	createNewLiOptions("go to the bathroom","functionGoToTheBathroom");
	createNewLiOptions("go back to bed","functiongoBackToBed");
	createNewLiOptions("go to work","functionGoToWork");
}

//functions for at work
function functionGoToWork() {
	pic.src = "img/office.png";
	pic.setAttribute("style","width:90%;");
	if (late_for_work==true) {
		removeOptions();
		title.innerHTML="fired";
		story.innerHTML="your late on your first day of work so you got fired";
		createNewLiOptions("search for a new job","functionGetANewJob");
		createNewLiOptions("fuck work. go home and relax","functionFuckWork");
		got_work = false;
	} else if (irritated_boss<3 && troll<3){
		removeOptions();
		title.innerHTML = "at work";
		story.innerHTML = "you got to work on time";
		if (worked==false) {
		createNewLiOptions("work really hard","functionWork");
		}
		if (energy==false) {
		createNewLiOptions("take a break","functionTakeABreak");
		}
		if (worked==true) {
			createNewLiOptions("go home","functionGoHome");
		}
		if (irritated_boss==0  && troll==0) {
		createNewLiOptions("start faffing around with your colleague's","functionFuckAroundAtWork");
		} else if (irritated_boss==1 && troll==1) {
			createNewLiOptions("troll your colleague's","functionFuckAroundAtWork");
		} else if (irritated_boss==2 && troll==2) {
			createNewLiOptions("download and play some games","functionFuckAroundAtWork");
		}
	} else if (irritated_boss==3 && troll==3) {
		removeOptions();
		title.innerHTML="fired";
		story.innerHTML="you pissed off your boss to much and got fired";
		got_work=false;
	}
}
//functions for after work at home
function functionGoHome() {
	pic.src = "img/home.png";
	removeOptions();
	late=true;
	createNewLiOptions("make dinner","functionMakeDinner");
	createNewLiOptions("play some games","functionPlayGame");
	createNewLiOptions("watch some TV","functionWatchTV");
	createNewLiOptions("go to bed","functionSleep");
}


//once per day things/activities
function functionGetANewJob() {
	if (hyped==true&&energy==true&&dressed==true&&clean==true&&nice_breath==true&&clean_teeth==true&&know_the_weather==true) {
		got_work = true;
		story.innerHTML = "you found a new job";
		} else {
		functionGameOver();
	}
}
function functionWork() {
	energy=false;
	worked=true;
	promoted++;
	functionGoToWork();
}
function functionTakeABreak() {
	energy=true;
	functionGoToWork();
}
function functionFuckAroundAtWork() {
	irritated_boss++;
	functionGoToWork();
}
function functiondressed() {
	dressed = true;
	createNewLiStatus("dressed");
	functionGetUp();
}
function functionTakeAShower() {
	clean = true;
	dirty = false;
	createNewLiStatus("clean");
	removeStatus(2);
	removeStatus(2);
	functionGoToTheBathroom();
}
function functionBrushYourTeeth() {
	nice_breath = true;
	clean_teeth = true;
	createNewLiStatus("nice breath");
	createNewLiStatus("clean teeth");
	functionGoToTheBathroom();
}
function functionEatBreakfast() {
	energy = true;
	createNewLiStatus("energy");
	functionGoToTheLivingRoom();
}
function functionCheckTheWeather() {
	know_the_weather = true;
	createNewLiStatus("know the weather");
	functionGoToTheLivingRoom();
}
function functiongoBackToBed() {
	functionSnooze();
}

//game over functions
function functionGameOver() {
	pic.src = "img/gameover.png";
	removeOptions();
	title.innerHTML = "GAME OVER";
	if (got_work==false) {
		story.innerHTML = "you got fired and failed to find a new job"
	}else{
	story.innerHTML = "you suck at life";
	}
}
function functionForEverAlone() {
	pic.src = "img/foreveralone.gif";
}
function functionFuckWork() {
	pic.src = "img/gameover.png"
	title.innerHTML = "GAME OVER";
	story.innerHTML = "your a lazy shit. maybe i should make a hobo game for ya. how to survive as a hobo";
}
//much needed functions
function removeStatus(number) {
	status.removeChild(status.childNodes[number]);
}
function removeOptions() {
	options.innerHTML= "";
}
function createNewLiOptions(text, onclick) {
    var nodeLi = document.createElement("LI");
    var nodebutton = document.createElement("button");
    nodebutton.setAttribute("onclick",onclick+"();");
    var textnode = document.createTextNode(text);
    nodeLi.appendChild(nodebutton);
    nodebutton.appendChild(textnode);
    document.getElementById("ul-options").appendChild(nodeLi);
}
function createNewLiStatus(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("ul-status").appendChild(node); 
}

//document.getElementById('pic').src = "bedroom.png";

//document.getElementById('pic').setAttribute("style", "width:50%; height:50%;");

//document.getElementById("h3").innerHTML = "hallo";