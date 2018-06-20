function gotoHome() {
	var x = document.getElementById("uname").value;
	var y = document.getElementById("pwd").value;
	
  if (x=="yuvaraj" && y=="yuvaraj1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html";
	}
  if (x=="dhoni" && y=="dhoni1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html";
	}
  if (x=="virat" && y=="virat1234") {
		localStorage.setItem("uname",document.getElementById("uname").value);
  window.location = "page2.html";
	}
}