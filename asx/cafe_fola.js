// JavaScript Document
// A function that handles XHLHttpRequest for page
function menuCat(page){
// detects if the browser has XMLHttpRequest functionality implemented as a global function
// if so the XMLHttpRequest object is created that way.
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
//otherwise code creates the XMLHttpRequest by calling ActiveXObject.
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

// The following code fragment parses an XML document called navigation_kids.xml into an XML DOM object.
xmlhttp.open("GET","navigation_kids.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

// var n is assigned xmlDoc
var n=xmlDoc.getElementsByTagName("nav");

// a for loop is created to go through each index in the var n
for (i=0;i<n.length;i++)
  {
    //if the title elements is not equal to page
    if(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue != page)
	{
    // then the following code is executed.
    document.write("<li><a href=");
    document.write(n[i].getElementsByTagName("link")[0].childNodes[0].nodeValue);
	  document.write(">");
	  document.write(n[i].getElementsByTagName("title")[0].childNodes[0].nodeValue);
	  document.write("</a></li>");
	}
	else{
    // the following code is executed.
		    document.write("<li class=\"nav-selected\">");
			  document.write(page);
			  document.write("<li>");
	}

  }
}

// A function that handles XHLHttpRequest for leftNav and topNav
function appContainer(leftNav, topNav){

// detects if the browser has XMLHttpRequest functionality implemented as a global function
// if so the XMLHttpRequest object is created that way.
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
//otherwise code creates the XMLHttpRequest by calling ActiveXObject.
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  // The following code fragment parses an XML document called webmasterList.xml into an XML DOM object.
xmlhttp.open("GET","webMasterList.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML;

// var x is assigned xmlDoc
var x=xmlDoc.getElementsByTagName("app");
//var c;

// a for loop is created to go through each index in the var x
for (i=0;i<x.length;i++)
  {

  // x[i] category is assigned to var c
  // another for loop is created to goes through each index in var c
  c=x[i].getElementsByTagName("category");
   for (j=0;j<c.length;j++)
  {
    // if category in the x[i] is equals to leftNav
    if (x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue == leftNav )
   { //document.write(x[i].getElementsByTagName("category")[j].childNodes[0].nodeValue);

   // then another for loop with an if statement is created to check if topNav is also equals to category
	 for (f=0;f<c.length;f++)
  	 {
	     if (x[i].getElementsByTagName("category")[f].childNodes[0].nodeValue == topNav)
         {
            // if the if conditions are met then the following takes place.
		 	 //f=c.length;
             document.write("<div class=\"app-container\">");
             document.write("<div class=\"app-image\" style=\" background:url(");
             document.write(x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue);
             document.write(")  center no-repeat; background-size: 163px Auto\">");
             document.write("<div class=\"stores-links\">");

          //if the conditions here are also met then the following also takes place.
         if (x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue != "false")
         {
      		document.write("<a href=\"http://apps.microsoft.com/webpdp/app/");
      		document.write(x[i].getElementsByTagName("win8")[0].childNodes[0].nodeValue);
      		document.write("\">");
      		document.write("<img id=\"store\" alt=\"W8\" onmouseout=\"this.src='http://windowsparent.com/images/W8.png'\"  onmouseover=\"this.src='http://windowsparent.com/images/W8_hover.png'\" src=\"http://windowsparent.com/images/W8.png\">");
      		document.write("</a>");
         }
         // another if contion this times if it is true then the following takes place.
	     if (x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue != "false")
         {
           document.write("<a href=\"http://www.windowsphone.com/s?appid=");
           document.write(x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue);
           document.write("\"><img id=\"store\"  alt=\"Wp7\" onmouseout=\"this.src='http://windowsparent.com/images/WP7.png'\"  onmouseover=\"this.src='http://windowsparent.com/images/WP7_hover.png'\" src=\"http://windowsparent.com/images/WP7.png\"></a>");
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
