function gotoHome() 
{
	var uname = document.getElementById("name").value;
	var pswd = document.getElementById("pwd").value;
		
	if (uname=="" && pswd=="") {
		document.getElementById("user").innerHTML="*Please Enter Your Name";
		document.getElementById("pswrd").innerHTML="*Please Enter Your Password";
		return false;
	}
	if (uname=="")
    {
		document.getElementById("user").innerHTML = "*Please Enter Your Name";
        return false;
    }
    else
	{
		document.getElementById("user").innerHTML = "";
	}
	if (pswd=="")
    {
        document.getElementById("pswrd").innerHTML ="*Please Enter Your Password";
        return false;
    } 
	else
	{
		document.getElementById("pswrd").innerHTML = "";
	}
	if (uname!="dhoni" && pswd!="1234") {
		alert("Wrong User name & Password");
		document.getElementById("name").value="";
		document.getElementById("pwd").value="";
		return false;
	}
	if (uname!="yuvi" && pswd!="1234") {
		alert("Wrong User name & Password");
		document.getElementById("name").value="";
		document.getElementById("pwd").value="";
		return false;
	}
	if (uname!="kohli" && pswd!="1234") {
		alert("Wrong User name & Password");
		document.getElementById("name").value="";
		document.getElementById("pwd").value="";
		return false;
	}
	
	 if (uname=="dhoni" && pswd=="1234") {
		
		sessionStorage.setItem("name",uname);
		window.location = "player.html"
	}
  
	if (uname=="kohli" && pswd=="1234") {
		sessionStorage.setItem("name",uname);
		window.location = "player.html"
	}
 
    if (uname=="yuvi" && pswd=="1234") {
		sessionStorage.setItem("name",uname);
		window.location = "player.html"
	}
	
}
function load()
{
	
	var usrnme=sessionStorage.getItem("name");
	alert(usrnme);
	
	if(usrnme=="dhoni")
	{
		document.getElementById("dhoni").style="visibility:visible";
		var virat=document.getElementById("kohli");
		virat.parentNode.removeChild(virat);
		var yuvii=document.getElementById("yuvi");
        yuvii.parentNode.removeChild(yuvii);
	
	}
	
	 if(usrnme=="kohli")
	{
		document.getElementById("kohli").style="visibility:visible";
		var msd=document.getElementById("dhoni");
        msd.parentNode.removeChild(msd);
		var yuvii=document.getElementById("yuvi");
        yuvii.parentNode.removeChild(yuvii);

	}
    if(usrnme=="yuvi")
	{
		document.getElementById("yuvi").style="visibility:visible";
		var virat=document.getElementById("kohli");
        virat.parentNode.removeChild(virat);
		var msd=document.getElementById("dhoni");
        msd.parentNode.removeChild(msd);
	}
}