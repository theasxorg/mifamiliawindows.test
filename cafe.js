// JavaScript Document
function menuCat(page){
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","../../../../navigation_kids.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

var n=xmlDoc.getElementsByTagName("nav");

for (i=0;i<n.length;i++)
  { 
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{
      document.write("<li><a href=");
      document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
	  document.write(">");
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  document.write("</a></li>");
	}
	else{
		      document.write("<li class=\"nav-selected\">");
			  document.write(page);
			  document.write("<li>");
	}
  
  }
}

function appContainer(leftNav, topNav){
	
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

xmlhttp.open("GET","../../../../webMasterList.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

var x=xmlDoc.getElementsByTagName("app");
//var c;

for (i=0;i<x.length;i++)
  { 
  
  c=x[i].getElementsByTagName("category");
   for (j=0;j<c.length;j++)
  { 
  
    if (x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue == leftNav )
   { //document.write(x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue);
     

	 for (f=0;f<c.length;f++)
  	 { 
	     if (x[i].getElementsByTagName("category")[f].childNodes[0].nodeValue == topNav)
         { 
		 
		 	 //f=c.length;
             document.write("<div class=\"app-container\">");
             document.write("<div class=\"app-image\" style=\" background:url(");
             document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
             document.write(")  center no-repeat; background-size: 163px Auto\">");
             document.write("<div class=\"stores-links\">");
      
         if (x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
      		document.write("<a href=\"http://apps.microsoft.com/webpdp/app/");
      		document.write(x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue);
      		document.write("\">");
      		document.write("<img id=\"store\" alt=\"W8\" onmouseout=\"this.src='../../../../images/W8.png'\"  onmouseover=\"this.src='../../../../images/W8_hover.png'\" src=\"../../../../images/W8.png\">");
      		document.write("</a>");
         }  
	     if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {
           document.write("<a href=\"");
           document.write(x[i].getElementsByTagName("bitly")[0].childNodes[0].nodeValue);
           document.write("\"><img id=\"store\"  alt=\"Wp7\" onmouseout=\"this.src='../../../../images/WP7.png'\"  onmouseover=\"this.src='../../../../images/WP7_hover.png'\" src=\"../../../../images/WP7.png\"></a>");
	    }
	    document.write("</div></div>");
        document.write("<h4>");
        document.write(x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
        document.write("</h4>");
        document.write(x[i].getElementsByTagName("tweet")[0].childNodes[0].nodeValue);
        document.write("</div>");  
		 }
        }
    
     }

    
 }
  
  }
}