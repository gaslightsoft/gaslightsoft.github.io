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
	var p = document.getElementById("login");
	p.innerHTML="<input placeholder='Username' id='login-username'/><input placeholder='Password' type='password' id='login-password' /><div><div id='cancel1'><a onclick='unrevealLogin()'>cancel</a></div><div align='right' id='submit1' height='10px' width='50px'><div id='submit1i'  onclick=signin()' >SIGN IN</div></div></div>"
}
function unrevealLogin(){
	var l = document.getElementById("login");
	l.innerHTML="<div align='right' id='hook'><div id='hookie' onclick='revealLogin()'>LOGIN</div>"

}
function getitemnum(){
	
}
