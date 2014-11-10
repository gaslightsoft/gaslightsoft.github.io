// JavaScript Document  <script>
function listItems(str,cat,element){
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
	d=xmlDoc.getElementsByTagName("description");
	u=xmlDoc.getElementsByTagName("id");
	p=xmlDoc.getElementsByTagName("ppu");
	v=xmlDoc.getElementsByTagName("views");
	cur=xmlDoc.getElementsByTagName("cur");
	q=xmlDoc.getElementsByTagName("quantity");
	
    for (i=0;i<t.length;i++)
      {
		var n = str.toUpperCase();
		var l = t[i].childNodes[0].nodeValue.toUpperCase().substr(0,str.length);
		var category = c[i].childNodes[0].nodeValue;
		
	if (n == l){
		if(cat == category){
    txt=txt + "<tr><td><div ><table><tr style='vertical-align:top;'><td><a class='listItem' href='items/"+u[i].childNodes[0].nodeValue+".html'><img style='height:100px' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></a></td><td style='width:1000px'><div>"+t[i].childNodes[0].nodeValue+"</div><div style='display:inline;'>Views: "+v[i].childNodes[0].nodeValue+" "+"</div><div style='display:inline;'>Available: "+q[i].childNodes[0].nodeValue+" </div><div>"+d[i].childNodes[0].nodeValue+"</div></td><td style='width:170px'><div>"+p[i].childNodes[0].nodeValue+" "+cur[i].childNodes[0].nodeValue+"</div><div><a>Buy It Now!<a></div><div><a>Add to Cart</a></div></td></tr></table></div></td></tr>";
		} else if (cat == "all"){
	 txt=txt + "<tr><td><div ><table><tr style='vertical-align:top;'><td><img style='height:100px' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></td><td style='width:1000px'><div>"+t[i].childNodes[0].nodeValue+"</div><div style='display:inline;'>Views: "+v[i].childNodes[0].nodeValue+" "+"</div><div style='display:inline;'>Available: "+q[i].childNodes[0].nodeValue+" </div><div></div></td><td style='width:170px'><div>"+p[i].childNodes[0].nodeValue+" "+cur[i].childNodes[0].nodeValue+"</div><div><a>Buy It Now!<a></div><div><a>Add to Cart</a></div></td></tr></table></div></td></tr>";
		}
	}
	  }
      document.getElementById(element).innerHTML=txt;
    }
  }
  xmlhttp.open("GET",xml,true);
  xmlhttp.send();
}
///////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
function loadsItems() {
	xml="data/items.xml"
	element="pop"
  if (false) { 
    document.getElementById(element).innerHTML="";
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
    var txt="<table><tr>";
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
		categoriediv=categoriediv + "<div class='catmenuitem'>" + categories[i] + "</div>";
	}
	categoriediv=categoriediv+""
    for (i=0;i<3;i++)
      {
		
	if (true){
	mainstyle="background-color:rgba(204,204,204,1);font-family:Arial, Helvetica, sans-serif;width: 200px;padding:2px;position:relative;";
	titlestyle="text-align:center;background-color:rgba(51,51,51,1);height:25px;width:150px;";
	imagestyle="height:100px;width:100px;";
	pricestyle="display:inline;width:50px;vertical-align:top;";
	infostyle="background-color:rgba(102,102,102,1);font-size:10px;padding:2px;height:auto;";
	viewstyle="display:inline;";
	buttonstyle="display:inline;";

	 txt=txt+"<td><a class='listItem' href='items/"+u[i].childNodes[0].nodeValue+".html'><div style='"+mainstyle+"' id='"+u[i].childNodes[0].nodeValue+"'><div style'"+titlestyle+"'>"+t[i].childNodes[0].nodeValue+"</div><div  align='center'><img style='"+imagestyle+"' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></div>"+
   		"<div style='"+pricestyle+"'>PPU:"+ p[i].childNodes[0].nodeValue +cur[i].childNodes[0].nodeValue+"</div><div style='"+infostyle+"'><div style='"+viewstyle+"'>Views:" +v[i].childNodes[0].nodeValue+"</div><div style='"+buttonstyle+"'>Available:"+ q[i].childNodes[0].nodeValue+"</div></div></div><br /></a></td>"
      }
	  }
	  txt=txt+"</tr></table>"
      document.getElementById(element).innerHTML=txt;
	  document.getElementById("categories").innerHTML=categoriediv;
    }
  }
  xmlhttp.open("GET",xml,true);
  xmlhttp.send();
}