ready(function() {
	// mobile nav
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