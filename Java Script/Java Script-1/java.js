function validateForm() {
    var x = document.getElementById("xname").value
    var y = document.getElementById("xage").value
	
	 if (x=="" && y== "")
	 {
		 document.getElementById("n1").innerHTML = "*Please enter your name";
		 document.getElementById("n2").innerHTML = "*Please enter your age";
		 return false;
	 }
    
	if (x == "")
    {
document.getElementById("n1").innerHTML = "*Please enter your name";
        return false;
    }
    else
{
document.getElementById("n1").innerHTML = "";
}
if (y == "")
    {
        document.getElementById("n2").innerHTML = "*Please enter your age";
        return false;
    } else
{
document.getElementById("n2").innerHTML = "";
}
if (y<7 || y>120)
    {
        document.getElementById("n2").innerHTML = "*Please enter your Valid age";
        return false;
    }
    
        if (x!="" && y != "")
    {
		alert("Successful Registered");
		document.getElementById("xname").value="";
		document.getElementById("xage").value="";
			}

}