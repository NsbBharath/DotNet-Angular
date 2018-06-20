function validate()
{  
var name=document.getElementById("name").value;  
var passwordlength=document.getElementById("pwd").value.length;  
var pass=document.getElementById("pwd").value;  

if(name=="" && pass=="") 
{
document.getElementById("namelocation").innerHTML="*Please enter your name";  
document.getElementById("passwordlocation").innerHTML="*Please enter your password";
}
if(name=="dhoni" && pass=="dhoni123")
{
alert("Login Successful"); 
window.location="Dhoni.html"
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
