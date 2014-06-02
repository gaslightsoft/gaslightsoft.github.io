// JavaScript Document

function goUrl(url){
	window.location.assign(url);
	}
function show(a){
	document.getElementById(a).style.visibility = "visible";
}
function hide(a){
	document.getElementById(a).style.visibility = "hidden";
}
function revealLogin(){
	var p = document.getElementById("prompt")
	p.style.visibility = "visible";
	p.width = 10;
}
function unrevealLogin(){
	var p = document.getElementById("prompt")
	p.style.visibility = "hidden";
}