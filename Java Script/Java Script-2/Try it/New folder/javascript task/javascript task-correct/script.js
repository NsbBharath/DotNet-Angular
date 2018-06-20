function gotoHome() 
{
	var x = document.getElementById("name").value;
	var y = document.getElementById("pwd").value;
	
	 if (x=="dhoni" && y=="1234") {
		
		localStorage.setItem("name",x);
		window.location = "page2.html"
	}
  
	if (x=="kohli" && y=="1234") {
		localStorage.setItem("name",x);
		window.location = "page2.html"
	};
 
    if (x=="yuvi" && y=="1234") {
		localStorage.setItem("name",x);
		window.location = "page2.html"
	};
}
function load()
{
	
	var a=localStorage.getItem("name");
	alert(a);
	
	if(a=="dhoni")
	{
		document.getElementById("dhoni").style="visibility:visible";
		var elem=document.getElementById("kohli");
		elem.parentNode.removeChild(elem);
		var elem1=document.getElementById("yuvi");
        elem1.parentNode.removeChild(elem1);
	
	}
	
	 if(a=="kohli")
	{
		document.getElementById("kohli").style="visibility:visible";
		var elem=document.getElementById("dhoni");
        elem.parentNode.removeChild(elem);
		var elem1=document.getElementById("yuvi");
        elem1.parentNode.removeChild(elem1);

	}
    if(a=="yuvi")
	{
		document.getElementById("yuvi").style="visibility:visible";
		var elem=document.getElementById("kohli");
        elem.parentNode.removeChild(elem);
		var elem1=document.getElementById("dhoni");
        elem1.parentNode.removeChild(elem1);
	}
}