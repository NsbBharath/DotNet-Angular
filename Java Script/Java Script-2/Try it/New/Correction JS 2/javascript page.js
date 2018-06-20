function validate()
{  
var name=document.getElementById("name").value;  
var passwordlength=document.getElementById("pwd").value.length;  
var pass=document.getElementById("pwd").value; 
var vstr=document.getElementById("virat").innerHTML;  
var ystr=document.getElementById("ysingh").innerHTML; 
var dstr=document.getElementById("msdhoni").innerHTML; 
var n1=vstr.replace("quick","HIDDEN");
var n2=ystr.replace("quick","HIDDEN");
var n3=dstr.replace("quick","HIDDEN");
if(name=="" && pass=="") 
{
document.getElementById("namelocation").innerHTML="*Please enter your name";  
document.getElementById("passwordlocation").innerHTML="*Please enter your password";
}
if(name=="dhoni" && pass=="dhoni123")
{
alert("Login Successful"); 
window.location="players.html"
document.getElementById("virat").style.visibility=n"hidden";
document.getElementById("ysingh").style.visibility="hidden";
} else {
document.getElementById("namelocation").innerHTML="*Please enter your name";  
document.getElementById("passwordlocation").innerHTML= "*Please enter your password";
}
if(name =="kohli" && pass =="kohli123")
{
alert("Login Successful"); 
window.location="kohli.html"
} else {
document.getElementById("namelocation").innerHTML="*Please enter your name";  
document.getElementById("passwordlocation").innerHTML= "*Please enter your password";

}
if(name =="yuvi" && pass =="yuvi123")
{
alert("Login Successful"); 
window.location="Yuvi.html"
}else {
document.getElementById("namelocation").innerHTML="*Please enter your name";  
document.getElementById("passwordlocation").innerHTML= "*Please enter your password";
}

if(name=="" && pass!="")
{
document.getElementById("namelocation").innerHTML="*Please enter your name"; 
document.getElementById("passwordlocation").innerHTML="";
}
else if(name!="" && pass=="")
{
document.getElementById("namelocations").innerHTML="";	
document.getElementById("passwordlocation").innerHTML="*Please enter your password"; 
}
}
