console.log("hallo");
var pic = document.getElementById('pic');
var status = document.getElementById('ul-status');
var elements = status.getElementsByClass('li');

//document.getElementById('pic').src = "bedroom.png";

//document.getElementById('pic').setAttribute("style", "width:50%; height:50%;");

/*var par = document.getElementById('ul-options');
var elements = par.getElementsByTagName('li');
par.removeChild(elements[0]);*/

//document.getElementById("h3").innerHTML = "hallo";

function start() {
	pic.src = "img/clock7.png";

	status.removeChild(elements[0]);
}
function start2() {
	pic.src = "img/clock7.png";
	status.removeChild(elements[0]);
	status.innerHTML = "<li>hyped</li>";
}