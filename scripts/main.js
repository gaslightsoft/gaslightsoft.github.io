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
	p.style.width = "100%";
	p.style.height = "100%";
	
	var l = document.getElementById("login")
	l.style.visibility = "visible";
	l.style.width = "100%";
	l.style.height = "100px";
}
function unrevealLogin(){
	var p = document.getElementById("prompt")
	p.style.visibility = "hidden";
	p.style.width = "10px";
	p.style.height = "auto";
	
	var l = document.getElementById("login")
	l.style.width = "auto";
	l.style.height = "10px";
}
function getitemnum(){
	
}
