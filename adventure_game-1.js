console.log("hallo");
var pic = document.getElementById('pic');
var status = document.getElementById('ul-status');
var elements = document.getElementsByClassName('li');

//document.getElementById('pic').src = "bedroom.png";

//document.getElementById('pic').setAttribute("style", "width:50%; height:50%;");

/*var par = document.getElementById('ul-options');
var elements = par.getElementsByTagName('li');
par.removeChild(elements[0]);*/

//document.getElementById("h3").innerHTML = "hallo";

function start() {
	pic.src = "img/clock7.png";
	console.log(elements[0]);
	console.log(status.childNodes);
	status.removeChild(childNodes[0]);
}
function start2() {
	pic.src = "img/clock7.png";
	console.log(elements[0]);
	status.removeChild(elements[0]);
	status.innerHTML = "<li>hyped</li>";
}