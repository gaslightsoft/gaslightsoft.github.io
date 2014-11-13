// JavaScript Document  <script>
function showResult(str,cat,xml,element) {
  if (str.length==0) { 
    document.getElementById(element).innerHTML="";
    document.getElementById(element).style.border="0px";
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
	t=xmlDoc.getElementsByTagName("title");
	c=xmlDoc.getElementsByTagName("category");
	u=xmlDoc.getElementsByTagName("id");

    for (i=0;i<t.length;i++)
      {
		var n = str.toUpperCase();
		var l = t[i].childNodes[0].nodeValue.toUpperCase().substr(0,str.length);
		var category = c[i].childNodes[0].nodeValue;
		
	if (n == l){
		if(cat == category){
      txt=txt + "<div class='searchitem' id='" + t[i].childNodes[0].nodeValue + "' a onclick='item_page("+ u[i].childNodes[0].nodeValue +")'>" + t[i].childNodes[0].nodeValue + "</div>";
		} else if (cat == "all"){
			txt=txt + "<div class='searchitem' id='" + t[i].childNodes[0].nodeValue+"' a onclick='item_page("+ u[i].childNodes[0].nodeValue +")'>" + t[i].childNodes[0].nodeValue + "</div>";
		}
      }
	  }
      document.getElementById(element).innerHTML=txt;
      document.getElementById(element).style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET",xml,true);
  xmlhttp.send();
}