console.log("hallo");
const title = document.getElementById('title');
const pic = document.getElementById('pic');
const story = document.getElementById('p-story');
const options = document.getElementById('ul-options');
const status = document.getElementById('ul-status');

const li = document.createElement("LI");

//boolean's
var hyped = false;
var energy = false;
var dressed = false;
var tired = true;
var dirty = true;
var late = true;
var clean = false;
var nice_breath = false;
var clean_teeth = false;
var know_the_weather = false;
//numbers
var relationship = 0;
var irritated_boss = 0;
//function's
function remove(number) {
	status.removeChild(status.childNodes[number]);
}
function functionstart() {
	pic.src = "img/clock7.png";
	remove(0);
	remove(0);
}
function functionhyped() {
	pic.src = "img/clock7.png";
	remove(0);
	remove(0);
	textnode('hyped')
	replaceChild('bye','hallo',0)
	hyped = true;
}
function textnode (text1) {
	li.innerHTML = text1;
	status.appendChild(li);
}
function replaceChild(text2,id,number) {
	li.innerHTML = '<button id='+id+'>'+text2+'</button>';
	options.replaceChild(li, options.childNodes[number]);
}


//document.getElementById('pic').src = "bedroom.png";

//document.getElementById('pic').setAttribute("style", "width:50%; height:50%;");

/*var par = document.getElementById('ul-options');
var elements = par.getElementsByTagName('li');
par.removeChild(elements[0]);*/

//document.getElementById("h3").innerHTML = "hallo";