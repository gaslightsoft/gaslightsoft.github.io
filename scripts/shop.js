// JavaScript Document  <script>
function listcatItems(str,cat,xml,element){
	listItems('',cat,element)
}

// JavaScript Document  <script>
function listItems(str,cat,element){
xml="data/items.xml"
  if (str.length==0) { 
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
	dol="";

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
		if (cur[i].childNodes[0].nodeValue == "CAD" ||cur[i].childNodes[0].nodeValue == "USD"){
			dol="$";
		}

		var n = str.toUpperCase();
		var l = t[i].childNodes[0].nodeValue.toUpperCase().substr(0,str.length);
		var addtocart = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>"+
            "<input type='hidden' name='business' value='g.lee.gaslightsoftware@gmail.com'>"+
       		"<input type='hidden' name='cmd' value='_cart'>"+
            "<input type='hidden' name='add' value='1' />"+
            "<input type='hidden' name='item_name' value='"+t[i].childNodes[0].nodeValue+"'>"+
			"<input type='hidden'name='amount' value='"+p[i].childNodes[0].nodeValue+"'>"+
    		"<input type='hidden' name='currency_code' value='"+cur[i].childNodes[0].nodeValue+"'>"+
            "<input type='hidden' name='shopping_url' value='http://gaslightsoft.github.io/shop.html'>"+
						"<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' border='0' name='submit'  onclick='getContinueShoppingURL(this.form)' onclick='decrement_number("+u[i].childNodes[0].nodeValue+")' alt='PayPal - The safer, easier way to pay online!'>"+
            "<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>"+
        "</form>"
		
		var buyitnow = "<form target='paypal' action='https://www.paypal.com/cgi-bin/webscr' method='post'>"+
            "<input type='hidden' name='business' value='g.lee.gaslightsoftware@gmail.com'>"+
       		"<input type='hidden' name='cmd' value='_xclick'>"+
            "<input type='hidden' name='item_name' value='"+t[i].childNodes[0].nodeValue+"'>"+
			"<input type='hidden'name='amount' value='"+p[i].childNodes[0].nodeValue+"'>"+
    		"<input type='hidden' name='currency_code' value='"+cur[i].childNodes[0].nodeValue+"'>"+
            "<input type='hidden' name='shopping_url' value='http://gaslightsoft.github.io/shop.html'>"+
			"<input type='number' width='5' size='2' placeholder='Qty' name='quantity' value=''/>"+
			"<input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif' border='0' name='submit' onclick='decrement_number("+u[i].childNodes[0].nodeValue+")' alt='PayPal - The safer, easier way to pay online!'>"+
			"<img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'>"+
		   "</form>"

	if (n == l || n.length==0){
		var category = c[i].childNodes[0].nodeValue;
		if(cat == category){
    txt=txt + "<tr><td><div ><table><tr style='vertical-align:top;'><td><img style='height:100px' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></td><td style='width:1000px'><div>"+t[i].childNodes[0].nodeValue+"</div><div style='display:inline;'>Views: "+v[i].childNodes[0].nodeValue+" "+"</div><div style='display:inline;'>Available: "+q[i].childNodes[0].nodeValue+" </div><div>"+"</div></td><td style='width:170px'><div>"+p[i].childNodes[0].nodeValue+dol+" "+cur[i].childNodes[0].nodeValue+"</div><div>"+buyitnow+"</div><div>"+addtocart+"</div><div></div></td></tr></table></div></td></tr>";
		} else if (cat == "all"){
	 txt=txt + "<tr><td><div ><table><tr style='vertical-align:top;'><td><img style='height:100px' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></td><td style='width:1000px'><div>"+t[i].childNodes[0].nodeValue+"</div><div style='display:inline;'>Views: "+v[i].childNodes[0].nodeValue+" "+"</div><div style='display:inline;'>Available: "+q[i].childNodes[0].nodeValue+" </div><div></div></td><td style='width:170px'><div>"+p[i].childNodes[0].nodeValue+dol+" "+cur[i].childNodes[0].nodeValue+"</div><div>"+buyitnow+"</div><div>"+addtocart+"</div><div></div></td></tr></table></div></td></tr>";
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
		categoriediv=categoriediv + "<div onclick=\"listcatItems('cat','"+i+"','"+xml+"','bodybody')\" class='catmenuitem'>" + categories[i] + "</div>";
	}
	categoriediv=categoriediv+ "<div onclick=\"listcatItems('cat','all','"+xml+"','bodybody')\" class='catmenuitem'>All Items</div>";
    for (i=0;i<4;i++)
      {

	if (true){
	mainstyle="background-color:rgba(204,204,204,1);font-family:Arial, Helvetica, sans-serif;width: 200px;padding:2px;position:relative;";
	titlestyle="text-align:center;background-color:rgba(51,51,51,1);height:25px;width:150px;";
	imagestyle="height:100px;width:100px;";
	pricestyle="display:inline;width:50px;vertical-align:top;";
	infostyle="background-color:rgba(102,102,102,1);font-size:10px;padding:2px;height:auto;";
	viewstyle="display:inline;";
	buttonstyle="display:inline;";

	 txt=txt+"<td><div style='"+mainstyle+"' id='"+u[i].childNodes[0].nodeValue+"'><div style'"+titlestyle+"'>"+t[i].childNodes[0].nodeValue+"</div><div align='center'><img style='"+imagestyle+"' src='images/"+u[i].childNodes[0].nodeValue+".jpg' /></div>"+
   		"<div style='"+pricestyle+"'>PPU:"+ p[i].childNodes[0].nodeValue +cur[i].childNodes[0].nodeValue+"</div><div style='"+infostyle+"'><div style='"+viewstyle+"'>Views:" +v[i].childNodes[0].nodeValue+"</div><div style='"+buttonstyle+"'>Available:"+ q[i].childNodes[0].nodeValue+"</div></div></div><br /></td>"
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

function decrement_number(id){
	if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else {  // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		xmlDoc=loadXMLDoc("data/items.xml");
		newel=xmlDoc.createElement("edition");
	for (i=0;i<4;i++)
      {
		x=xmlDoc.getElementsByTagName("item");
		x[i].appendChild(newel);
	  }

  }	
  }
  xmlhttp.open("POST","data/items.xml",true);
  xmlhttp.send();
}