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

//numbers
var relationship = 0;
var irritated_boss = 0;
var promoted = 0;
var time = 420;

//function's
function removeStatus(number) {
	status.removeChild(status.childNodes[number]);
}
function removeOptions(number) {
	options.innerHTML= "";
}
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
	createNewLiOptions("get dressed","functiondressed");
	createNewLiOptions("go to the bathroom","functionGoToTheBathroom");
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	createNewLiOptions("go back to bed","functiongoBackToBed");
}
function functionGoToTheBathroom() {
	pic.src = "img/bathroom.png";
	removeOptions(0);
	createNewLiOptions("take a shower","functionTakeAShower");
	createNewLiOptions("brush your teeth","functionBrushYourTeeth");
	createNewLiOptions("go back to bed","functiongoBackToBed");
}
function functionGoToTheLivingRoom() {
	pic.src = "img/livingroom.png";
	removeOptions(0);
	pic.setAttribute("style","width:62%;");
	createNewLiOptions("eat breakfast","functionEatBreakfast");
	createNewLiOptions("check the weather","functionCheckTheWeather");
	createNewLiOptions("go back to bed","functiongoBackToBed");
}



function functionGameOver() {
	pic.src = "img/gameover.png";
	removeOptions(0);
	story.innerHTML = "GAME OVER";
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