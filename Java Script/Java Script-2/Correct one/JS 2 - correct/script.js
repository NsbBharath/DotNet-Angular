function gotoHome() {
	var x = document.getElementById("uname").value;
	var y = document.getElementById("pwd").value;
  if (x=="yuvaraj" && y=="yuvaraj1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html"
	};
  if (x=="dhoni" && y=="dhoni1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html"
	};
  if (x=="virat" && y=="virat1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html"
	};
  
}
function credDetails() {
		var uname = localStorage.getItem("uname");
	switch(uname){
		case "dhoni":
			document.getElementById("dhoni").style.display = "block";
			break;
		case "virat":
			document.getElementById("virat").style.display = "block";
			break;
		case "yuvaraj":
			document.getElementById("yuvaraj").style.display = "block";
			break;
	}
}