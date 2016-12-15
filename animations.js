(function () {
	document.getElementById('bounce').addEventListener("click", function () {
		var square = document.getElementById('square');
		square.className = "verticalbounce";
		document.getElementsByClassName("verticalbounce")[0].addEventListener("animationend", function () {
			var square = document.getElementById('square');
			square.className = "";
		});
	});
})();
