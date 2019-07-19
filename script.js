
const root = document.documentElement;
var s = [root.clientWidth, root.clientHeight];

// Size Check function ------------------------------------
var foot1 = document.getElementById('footer-element');
foot1.innerHTML = s[0]; //for printing for the first time
function sizeCheck(x){
	if(s[0] != x){
		foot1.innerHTML = x;
	}
}

// DropDown Menu --------------------------------------------
var dropContent = document.querySelector('.dropdown-content');
dropContent.style.left = s[0] - 250 +"px"; //for printing for the first time
function dropDown(x){
	if(x >= 540){
		if(s[0] != x){
			dropContent.style.left = x - 250 +"px";
		}
	}
}

// Clock - can be edited to add countdown -----------------
function startTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('cdh').innerHTML = h;
    document.getElementById('cdm').innerHTML = m;
    document.getElementById('cds').innerHTML = s;
}
function checkTime(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}

// reFreshing at every 10ms --------------------------------
function refresh(){
	var snew = [root.clientWidth, root.clientHeight];
	var x0 = snew[0];
	sizeCheck(x0);
	dropDown(x0);
	startTime();
}
setInterval(refresh,10);


// Menu ----------------------------------------------------
var hamMenu = document.getElementById('nav-ham-menu');
var navList = document.querySelector('.navbar-collapse');

hamMenu.addEventListener("click",function(){
	hamMenu.classList.toggle('clicked');
	navList.classList.toggle('active');
});

// Events -------------------------------------------------

