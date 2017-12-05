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
var hyped = false;
var energy = false;
var dressed = false;
var clean = false;
var nice_breath = false;
var clean_teeth = false;
var late_for_work = false;
var know_the_weather = false;

//numbers
var relationship = 0;
var irritated_boss = 0;
var promoted = 0;
var time = 420;

//function's
function functionstart() {
	pic.src = "img/clock7.png";
	removeStatus(0);
	removeStatus(0);
	removeOptions(0);
	late = false;
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("snooze","functionSnooze");
}
function functionhyped() {
	functionstart();
	hyped = true;
}
function functionSnooze() {
	pic.src = "img/clock8.png";
	late_for_work = true;
	removeOptions(0);
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("see your already late and continue sleeping","functionGameOver");
}
function functionGetUp() {
	pic.src = "img/bedroom.png";
	removeOptions(0);
	if (dressed==false) {
	createNewLiOptions("get dressed","functiondressed");
	}
	createNewLiOptions("go to the bathroom","functionGoToTheBathroom");
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	createNewLiOptions("go back to bed","functiongoBackToBed");
}
function functionGoToTheBathroom() {
	pic.src = "img/bathroom.png";
	removeOptions(0);
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
	removeOptions(0);
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
function functionGoToWork() {
	if (late_for_work==true) {
		title.innerHTML="fired"
		story.innerHTML="your late on your first day of work so you got fired"
		createNewLiOptions("search for a new job","functionGetANewJob")
		createNewLiOptions("fuck work. go home and relax","functionFuckWork")
	} else {
		pic.src = "img/office.png";
	}

}
function functionGetANewJob() {

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

function functionGameOver() {
	pic.src = "img/gameover.png";
	removeOptions(0);
	story.innerHTML = "GAME OVER";
}
function functionForEverAlone() {

}

//much needed functions
function removeStatus(number) {
	status.removeChild(status.childNodes[number]);
}
function removeOptions(number) {
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