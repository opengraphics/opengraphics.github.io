(function() {
	// General utilities
	function setCookie(name, value) {
		document.cookie = name + "=" + value;
	}

	function getCookie(name) {
		var reg = new RegExp("(?:(?:^|.*;\s*)" + name + "\s*\=\s*([^;]*).*$)|^.*$");

		return document.cookie.replace(reg, "$1");
	}

	// Mobile nav

	ready(function() {
		var navOut = false;
		var togglers = document.getElementsByClassName("mobile-nav-toggler");
		var blackout = document.getElementById("blackout");
		var mobileMenu = document.getElementsByClassName("mobile-nav")[0];

		function setElementActive(element, state) {
			var current = element.className;
			var cleaned = current.replace(/\bactive\b/i, "");

			if (state) {
				element.className = cleaned + " active";
			} else {
				element.className = cleaned;
			}
		}

		function toggleNav() {
			navOut = !navOut;

			setElementActive(mobileMenu, navOut);
			setElementActive(blackout, navOut);
		}

		for (var i = 0; i < togglers.length; i++) {
			togglers[i].addEventListener("click", toggleNav);
		}
	});

	// Lights on/off button
	var lights = document.getElementsByClassName("lights");
	var sheet = document.querySelector("#theme-sheet");
	var lightsOn = false;

	function toggleLights() {
		lightsOn = !lightsOn;
		setCookie("lights", lightsOn ? "on" : "off");

		if (lightsOn) {
			sheet.setAttribute("href", "/css/light.css");
		} else {
			sheet.setAttribute("href", "/css/dark.css");
		}
	}

	if (getCookie("lights") == "on") {
		toggleLights();
	}

	ready(function() {
		for (var i = 0; i < lights.length; i++) {
			lights[i].addEventListener("click", toggleLights);
		}
	});
})();