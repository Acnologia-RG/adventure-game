console.log("hallo");

//const list//
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const story = document.getElementById('p-story');
const options = document.getElementById('ul-options');
const status = document.getElementById('ul-status');

//boolean's//
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
var got_keys = false;
var eaten = true;

//room vars//
var bedroom = false;
var bathroom = false;
var livingroom = false;

//numbers//
var relationship = 0;
var irritated_boss = 0;
var promoted = 0;
var troll = 0;
var job = 1;
var day = 1;

function functiondressed() {
	dressed = true;
	functionGetUp();
}
function functionTakeAShower() {
	clean = true;
	dirty = false;
	removeStatus(2);
	removeStatus(2);
	functionGoToTheBathroom();
}
function functionBrushYourTeeth() {
	nice_breath = true;
	clean_teeth = true;
	functionGoToTheBathroom();
}
function functionEatBreakfast() {
	energy = true;
	functionGoToTheLivingRoom();
}
function functionCheckTheWeather() {
	know_the_weather = true;
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
	console.log("day "+day+" back at home");
	if (got_keys==false) {
		functionGameOver();
	}
	else if (got_keys==true) {
	title.innerHTML="your at home";
	pic.src = "img/home.png";
	pic.setAttribute("style","width:95%;");
	removeOptions();
	late=true;
	createNewLiOptions("make dinner","functionMakeDinner");
	createNewLiOptions("play some games","functionPlayGame");
	createNewLiOptions("watch some TV","functionWatchTV");
	createNewLiOptions("go to bed","functionSleep");
	}
}
function functionGetKeys() {
	got_keys = true;
	if (bedroom==true) {
	functionGetUp();
	} else if (bathroom==true) {
	functionGoToTheBathroom();
	} else if (livingroom==true) {
	functionGoToTheLivingRoom();
	}
}

function functionSleep() {
	energy = false;
	dressed = false;
	clean = false;
	dirty = true;
	nice_breath = false;
	clean_teeth = false;
	late_for_work = false;
	know_the_weather = false;
	worked = false;
	got_keys = false;
	day++
	if (irritated_boss==1 && troll==0) {
		troll++
	} else if (irritated_boss==2 && troll==1) {
		troll++
	} else if (irritated_boss==3 && troll==2) {
		troll++		
	}
}

function functionMeetKatie() {
	removeOptions();
	story.innerHTML = "you meet the lovely katie"
	createNewLiOptions("ask her out","functionAskKatieOut")
	createNewLiOptions("go back to work","functionWork");
}
function functionAskKatieOut() {
	if (clean==true&&nice_breath==true&&clean_teeth==true&&energy==true&&know_the_weather==true) {
		story.innerHTML="you impressed her and she wants to go out with you";
		relationship++;
	} else {
		story.innerHTML="you did not impress her and failed to get a date with her";
		createNewLiOptions("go back to work","functionWork");
	}
}
function functionDateKatie() {
	if (energy==true && dressed==true && clean==true && dirty==false && nice_breath==true && clean_teeth==true) {
		story.innerHTML="you had a great date with katie and now the 2 of you are in a relationship";
		title.innerHTML="good job";
		functionWinkatie();
	} else {
		title.innerHTML="fail";
		story.innerHTML='the date went "not so good"'
		weekend();
	}
}