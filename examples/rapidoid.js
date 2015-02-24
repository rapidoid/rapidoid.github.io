var theme;
try {
	var m = /\bTHEME=(\w+?)\b/g.exec(document.cookie);
	theme = m[1];
} catch (e) {
}
if (theme && theme != 'default') {
	document.write('<link href="../theme-' + theme + '.css" rel="stylesheet">');
}

function goAt(url) {
	window.location.href = url;
}

function _stop(ev) {
	if (typeof ev.stopPropagation != "undefined") {
		ev.stopPropagation();
	} else if (typeof ev.preventDefault != "undefined") {
		ev.preventDefault();
	} else {
		ev.cancelBubble = true;
	}
}

function _emit(ev, eventId) {
	alert("This is not a live demo, so this button doesn't work!");
}

function _popup(popupUrl, onClosed) {
	var ww = 800;
	var hh = 600;

	var left = (screen.width / 2) - (ww / 2);
	var top = (screen.height / 2) - (hh / 2);

	var win = window.open(popupUrl, "windowname1", 'width=' + ww + ', height='
			+ hh + ', top=' + top + ', left=' + left);

	if (win.focus) {
		win.focus();
	}

	var winTimer = setInterval(function() {
		if (win.closed) {
			clearInterval(winTimer);
			if (onClosed) {
				onClosed(popupUrl);
			}
		}
	}, 100);
}
