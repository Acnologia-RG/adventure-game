console.log("hallo");

//const list//
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const story = document.getElementById('p-story');
const options = document.getElementById('ul-options');

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
var played_games = false;
var watched_TV = false;

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

//start game functions//
function functionstart() {
	if (eaten==true) {
	eaten=false;
	console.log("day "+day+" in bed");
	pic.src = "img/clock7.png";
	removeOptions();
	late = false;
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("snooze","functionSnooze");
	story.innerHTML = "you just woke-up from your sleep";
	} else if (eaten==false) {
		functionSnooze()
		story.innerHTML="you overslept";
	}
}
function functionhyped() {
	functionstart();
	hyped = true;
	story.innerHTML = "you just woke-up from your sleep and you feel really excited";
}
//functions for at home in the morning//
function functionSnooze() {
	console.log("day "+day+" late and still in bed");
	pic.src = "img/clock8.png";
	late_for_work = true;
	removeOptions();
	createNewLiOptions("get up","functionGetUp");
	createNewLiOptions("see your already late and continue sleeping","functionGameOver");
	story.innerHTML = "";
}
function functionGetUp() {
	console.log("day "+day+" in the bedroom");
	bedroom = true;
	bathroom = false;
	livingroom = false;
	pic.src = "img/bedroom.png";
	removeOptions();
	if (dressed==false) {
	createNewLiOptions("get dressed","functiondressed");
	}
	createNewLiOptions("go to the bathroom","functionGoToTheBathroom");
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	if (day==2 && got_keys==false || day==5 && got_keys==false) {
	createNewLiOptions("get your keys","functionGetKeys");
	}
	createNewLiOptions("go back to bed","functiongoBackToBed");
	story.innerHTML = "";
}
function functionGoToTheBathroom() {
	console.log("day "+day+" in the bathroom");
	bedroom = false;
	bathroom = true;
	livingroom = false;
	pic.src = "img/bathroom.png";
	removeOptions();
	if (clean==false && dirty==true) {
	createNewLiOptions("take a shower","functionTakeAShower");
	}if (nice_breath == false && clean_teeth == false) {
	createNewLiOptions("brush your teeth","functionBrushYourTeeth");
	}
	createNewLiOptions("go to the living room","functionGoToTheLivingRoom");
	if (day==4 && got_keys==false || day==6 && got_keys==false) {
	createNewLiOptions("get your keys","functionGetKeys");
	}
	createNewLiOptions("go back to bed","functiongoBackToBed");
}
function functionGoToTheLivingRoom() {
	console.log("day "+day+" in the Living Room");
	bedroom = false;
	bathroom = false;
	livingroom = true;
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
	if (day==1 && got_keys==false || day==3 && got_keys==false || day==7 && got_keys==false) {
	createNewLiOptions("get your keys","functionGetKeys");
	}
	if (dressed==true && energy==true ) {
		createNewLiOptions("go to work","functionGoToWork");
	} else if (dressed==false) {
		functionGameOver();
	} else if (dirty==true && energy==false) {
		functionGameOver();
	}
}
//functions for at work//
function functionGoToWork() {
	console.log("day "+day+" at work");
	if (job===1) {
	pic.src = "img/office.png";
	pic.setAttribute("style","width:90%;");
	} else if (job===2) {
	pic.src = "img/office2.png";
	pic.setAttribute("style","width:90%;");
	}
	if (late_for_work==true && job===1) {
		removeOptions();
		title.innerHTML="fired";
		story.innerHTML="your late on your first day of work so you got fired";
		createNewLiOptions("search for a new job","functionGetANewJob");
		createNewLiOptions("fuck work. go home and relax","functionFuckWork");
		got_work = false;
	} else if (late_for_work==true && job===2) {
		removeOptions();
		title.innerHTML="fired";
		story.innerHTML="your late on your first day of work so you got fired again";
		createNewLiOptions("search for a new job","functionGameOver");
		createNewLiOptions("fuck work. go home and relax","functionFuckWork");
		got_work = false;
	} else if (irritated_boss<3 && troll<3){
		removeOptions();
		title.innerHTML = "at work";
		story.innerHTML = "you got to work on time";
		if (worked==false) {
			if (day===3) {
				createNewLiOptions("meet the new co-worker","functionMeetKatie")
			}
			createNewLiOptions("work really hard","functionWork");
		}
		if (energy==false) {
		createNewLiOptions("take a break","functionTakeABreak");
		}
		if (worked==true) {
			createNewLiOptions("go home","functionGoHome");
			story.innerHTML="your finnaly home after a long day at work";
		}
		if (irritated_boss===0 && troll===0) {
		createNewLiOptions("start faffing around with your colleague's","functionFuckAroundAtWork");
		} else if (irritated_boss===1 && troll===1) {
			createNewLiOptions("troll your colleague's","functionFuckAroundAtWork");
		} else if (irritated_boss===2 && troll===2) {
			createNewLiOptions("download and play some games","functionFuckAroundAtWork");
		}
	} else if (irritated_boss===3 && troll===3 || irritated_boss===3 && troll===2) {
		removeOptions();
		title.innerHTML="fired";
		story.innerHTML="you pissed off your boss to much and got fired";
		got_work=false;
	}
}
//functions for at home after work or during the weekend//
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
	if (eaten==false) {
	createNewLiOptions("make dinner","functionMakeDinner");
	}
	if (played_games==false) {
	createNewLiOptions("play some games","functionPlayGames");
	}
	if (watched_TV==false) {
	createNewLiOptions("watch some TV","functionWatchTV");
	}
	createNewLiOptions("go to bed","functionSleep");
	}
}
function functionMakeDinner() {
	eaten = true;
	if (day<6) {
	functionGoHome();
	} else if (day===6 || day===7) {
	weekend();
	}
}
function functionPlayGames() {
	played_games = true;
	if (day<6) {
	functionGoHome();
	} else if (day===6 || day===7) {
	weekend();
	}
}
function functionWatchTV() {
	watched_TV = true;
	if (day<6) {
	functionGoHome();
	} else if (day===6 || day===7) {
	weekend();
	}
}
//weekend stuff
function weekend() {
	console.log("day"+ day +"the weekend");
	bedroom = false;
	bathroom = false;
	livingroom = false;
	got_keys = true;
	removeOptions();
	if (relationship===1) {
	createNewLiOptions("date with katie","functionDateKatie");
	}
	if (eaten==false) {
	createNewLiOptions("make dinner","functionMakeDinner");
	}
	if (energy==false) {
	createNewLiOptions("eat breakfast","functionEatBreakfast");
	}
	if (dressed==false) {
	createNewLiOptions("get dressed","functiondressed");
	}
	if (clean==false && dirty==true) {
	createNewLiOptions("take a shower","functionTakeAShower");
	}if (nice_breath == false && clean_teeth == false) {
	createNewLiOptions("brush your teeth","functionBrushYourTeeth");
	}
	if (played_games==false) {
	createNewLiOptions("play some games","functionPlayGames");
	}
	if (watched_TV==false) {
	createNewLiOptions("watch some TV","functionWatchTV");
	}
	createNewLiOptions("go to bed","functionSleep");
}
//katie stuff
function functionMeetKatie() {
	removeOptions();
	if (relationship<1) {
	story.innerHTML = "you meet the lovely katie";
	createNewLiOptions("ask her out","functionAskKatieOut");
	}
	createNewLiOptions("go back to work","functionWork");
}
function functionAskKatieOut() {
	if (clean==true&&nice_breath==true&&clean_teeth==true&&energy==true&&know_the_weather==true) {
		story.innerHTML="you impressed her and she wants to go out with you";
		relationship++;
		functionMeetKatie();
	} else {
		removeOptions();
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
//once per day things/activities//
function functionSleep() {
	energy = false;
	dressed = false;
	clean = false;
	dirty = true;
	nice_breath = false;
	clean_teeth = false;
	late_for_work = false;
	know_the_weather = false;
	played_games = false;
	watched_TV = false;
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
	if (day<6) {
		functionstart();
	} else if (day===6 || day===7) {
		weekend();
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
	} else if (day===6 || day===7) {
	weekend()
	}
}
function functionGetANewJob() {
	if (hyped == true && energy == true && dressed == true && clean == true && nice_breath == true && clean_teeth == true && know_the_weather == true) {
		got_work = true;
		story.innerHTML = "you found a new job";
		job++;
		irritated_boss=0;
		troll=0;
		functionGoHome();
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
	if (bedroom==true) {
	functionGetUp();
	} else if (day===6||day===7) {
		weekend();
	}
}
function functionTakeAShower() {
	clean = true;
	dirty = false;
	if (bathroom==true) {
	functionGoToTheBathroom();
	} else if (day===6||day===7) {
		weekend();
	}
}
function functionBrushYourTeeth() {
	nice_breath = true;
	clean_teeth = true;
	if (bathroom==true) {
	functionGoToTheBathroom();
	} else if (day===6||day===7) {
		weekend();
	}
}
function functionEatBreakfast() {
	energy = true;
	if (livingroom==true) {
		functionGoToTheLivingRoom();
	} else if (day===6||day===7) {
		weekend();
	}
}
function functionCheckTheWeather() {
	know_the_weather = true;
	functionGoToTheLivingRoom();
}
function functiongoBackToBed() {
	functionSnooze();
}
//game over functions//
function functionGameOver() {
	pic.src = "img/gameover.png";
	removeOptions();
	title.innerHTML = "GAME OVER";
	if (got_work==false) {
		story.innerHTML = "you got fired and failed to find a new job on time";
	} else if (got_keys==false) {
		story.innerHTML = "you forgot your keys like a dumbass";
	} else if (dressed==false) {
		story.innerHTML = "you went to work naked";
	} else if (dirty==true && energy==false) {
		story.innerHTML = "you where so tired that you could not make it to your work on time and got fired";
	} else {
		story.innerHTML = "you suck at life";
	}
}
function functionForEverAlone() {
	pic.src = "img/foreveralone.gif";
	title.innerHTML="win?";
	story.innerHTML="you made it. but your alone";
}
function functionFuckWork() {
	pic.src = "img/gameover.png"
	title.innerHTML = "GAME OVER";
	story.innerHTML = "your a lazy shit. maybe i should make a hobo game for ya. how to survive as a hobo";
}
//wins//
function functionWinkatie() {
	title.innerHTML="WIN";
	story.innerHTML="your in a great relationship with katie. your job is going great too you got promoted"
}
//much needed functions//
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