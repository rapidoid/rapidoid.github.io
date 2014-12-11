function loadScript(url, callback) {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;

	if (callback) {
		script.onreadystatechange = callback;
		script.onload = callback;
	}

	head.appendChild(script);
}

loadScript("social-utils.js");
loadScript("https://apis.google.com/js/plusone.js");
loadScript("http://platform.linkedin.com/in.js");

