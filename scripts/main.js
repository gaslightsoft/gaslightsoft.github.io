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
function loadFooter(){
	var row1=["Software","Office","Services","Help"];
	var footer="<table id='table' width='100%' class='table'><tr>"
	for(i=0;i<4;i++){
		footer=footer+"<th>"+row1[i]+"</th>";
	}
	document.getElementById("footer").innerHTML=footer;
}