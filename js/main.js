
function openNav() {
	document.getElementById("myNav").style.display ="block";
	document.getElementById("myNav").style.height = "100%";
	
	}
	
	function closeNav() {
	document.getElementById("myNav").style.height = "0%";
	
	}
	
	
	
	
	
	  var mainListDiv = document.getElementById("mainListDiv"),
		mediaButton = document.getElementById("mediaButton");
	
	mediaButton.onclick = function () {
		
		"use strict";
		
		mainListDiv.classList.toggle("show_list");
		mediaButton.classList.toggle("active");
		
	};
	
	
	