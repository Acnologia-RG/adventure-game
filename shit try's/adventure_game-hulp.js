console.log("hallo");
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const story = document.getElementById('p-story');
const options = document.getElementById('ul-options');
const status = document.getElementById('ul-status');

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

var relationship = 0;
var irritated_boss = 0;
var promoted = 0;
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