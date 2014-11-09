// JavaScript Document
function loadItems(){
	var popitems="";
	var categoriediv="";
	var categories=["Vintage Computing",
					"Software",
					"Electronics",
					"Other"];
	for(i=0;i<categories.length;++i){
		categoriediv=categoriediv + "<li>" + categories[i] + "</li>";
	}
	document.getElementById("pop").innerHTML="<div>DICK</div>";
	document.getElementById("categories").innerHTML="<ul>"+ categoriediv +"</ul>";
}

     
// JavaScript Document  <script>
function loadsItems() {
	xml="data/items.xml"
	element="pop"
  if (false) { 
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
    var txt="";
	var popularv=[];
	var popular=[];
    x=xmlDoc.getElementsByTagName("item");
	t=xmlDoc.getElementsByTagName("title");
	u=xmlDoc.getElementsByTagName("id");
	c=xmlDoc.getElementsByTagName("category");
	p=xmlDoc.getElementsByTagName("ppu");
	v=xmlDoc.getElementsByTagName("views");
	cur=xmlDoc.getElementsByTagName("cur");
	q=xmlDoc.getElementsByTagName("quantity");
	
	for (i=0;i<x.length;i++){
		popularv[i]=v[i].childNodes[0].nodeValue;
		popularv.sort(function(a, b){return b-a});
	}

	var categoriediv="";
	var categories=["Vintage Computing",
					"Software",
					"Electronics",
					"Other"];
	for(i=0;i<categories.length;++i){
		categoriediv=categoriediv + "<li>" + categories[i] + "</li>";
	}
    for (i=0;i<x.length;i++)
      {
		
	if (true){
//	  txt=txt + "<div>" + t[i].childNodes[0].nodeValue + "<br /> Views: " + v[i].childNodes[0].nodeValue + "<br />Category: " + c[i].childNodes[0].nodeValue +"<br /><br />"+popularv[i] + "</div>"
     // txt=txt + "<div style='background: white;' id='" + t[i].childNodes[0].nodeValue + "'><a href='items/"+ u[i].childNodes[0].nodeValue +".html'>" + t[i].childNodes[0].nodeValue + "</a></div>";
	 txt=txt+"<div id='"+u[i].childNodes[0].nodeValue+"'>" +
		"<div id='title'>"+t[i].childNodes[0].nodeValue+"</div>"+
        "<div id='image'><img width='150px' height='100px' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></div>"+
   		"<div id='price'>PPU:"+ p[i].childNodes[0].nodeValue +cur[i].childNodes[0].nodeValue+"</div>"+
        "<div id='info'>"
        	"<div id='views'>Views:" +v[i].childNodes[0].nodeValue+"</div>"+
            "<div id='button'>Available:"+ q[i].childNodes[0].nodeValue+"</div>"+
        "</div></div>"
      }
	  }
      document.getElementById(element).innerHTML=txt;
	  document.getElementById("categories").innerHTML="<ul>"+ categoriediv +"</ul>";
      document.getElementById(element).style.border="1px solid #A5ACB2";
    }
  }
  xmlhttp.open("GET",xml,true);
  xmlhttp.send();
}