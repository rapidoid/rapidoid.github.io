var theme;
try {
	var m = /\bTHEME=(\w+?)\b/g.exec(document.cookie);
	theme = m[1];
} catch (e) {
}
if (theme && theme != 'default') {
	document.write('<link href="http://maxcdn.bootstrapcdn.com/bootswatch/3.3.0/'
			+ theme + '/bootstrap.min.css" rel="stylesheet">');
}

function goAt(url) {
	window.location.href = url;
}

function _emit(event) {

	var x = document.querySelectorAll("input,textarea");

	var inputs = {};

	for (var i = 0; i < x.length; i++) {
		var t = $(x[i]);
		var _h = t.attr('_h');

		if (_h) {
			var val;

			if (t.prop('type') == 'checkbox' || t.prop('type') == 'radio') {
				val = t.prop('checked');
			} else {
				val = t.val();
			}

			inputs[_h] = val;
		}
	}

	x = document.querySelectorAll("option");

	for (var i = 0; i < x.length; i++) {
		var t = $(x[i]);
		var _h = t.attr('_h');

		if (_h) {
			inputs[_h] = t.prop('selected');
		}
	}

	$.post(window.location.href, {
		event : event,
		inputs : JSON.stringify(inputs)
	}).done(function(data) {
		if (data._redirect_) {
			goAt(data._redirect_);
			return;
		}
		for ( var sel in data) {
			$(sel).html(data[sel]);
		}
	}).fail(function(data) {
		alert("Error!");
		console.log(data);
	});
}
