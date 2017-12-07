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
function functionGoHome() {
	late=true;
	createNewLiOptions("make dinner","functionMakeDinner");
	createNewLiOptions("play some games","functionPlayGame");
	createNewLiOptions("watch some TV","functionWatchTV");
	createNewLiOptions("go to bed","functionSleep");
}


function functionSleep() {
	energy = false;
	dressed = false;
	clean = false;
	nice_breath = false;
	clean_teeth = false;
	late_for_work = false;
	know_the_weather = false;
	worked = false;
	if (irritated_boss==1 && troll==0) {
		troll++
	} else if (irritated_boss==2 && troll==1) {
		troll++
	} else if (irritated_boss==3 && troll==2) {
		troll++		
	}
}