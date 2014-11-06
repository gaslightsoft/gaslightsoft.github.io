// JavaScript Document  <script>
function showResult(str) {
  if (str.length==0) { 
    document.getElementById("livesearch").innerHTML="";
    document.getElementById("livesearch").style.border="0px";
    return;
  }
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		xmlDoc=xmlhttp.responseXML;
    txt="";
    x=xmlDoc.getElementsByTagName("item");
	t=xmlDoc.getElementsByTagName("name");
	u=xmlDoc.getElementsByTagName("location");

    for (i=0;i<t.length;i++)
      {
		var n = str.toUpperCase();
		var l = t[i].childNodes[0].nodeValue.toUpperCase().substr(0,str.length);
		
	if (n == l){
      txt=txt + "<div style='background: white;' id='" + t[i].childNodes[0].nodeValue + "'><a href='"+ u[i].childNodes[0].nodeValue +"'>" + t[i].childNodes[0].nodeValue + "</a></div>";
      }}
      document.getElementById("livesearch").innerHTML=txt;
      document.getElementById("livesearch").style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET","data/links.xml",true);
  xmlhttp.send();
}