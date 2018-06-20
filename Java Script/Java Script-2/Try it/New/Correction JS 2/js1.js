function validate()
{
	var x = document.getElementById("uname").value;
	var y = document.getElementById("pwd").value;
	if (x=="dhoni" && y=="1234") 
	{	
		localStorage.setItem("name",x);
		window.location = "page2.html"
	}
function load()
{
	var a=localStorage.getItem("name");
	alert(a);
}
