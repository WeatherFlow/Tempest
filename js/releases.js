$(document).ready(function () {
	$("#app-menu").on("click, touchend", function () {
		$("#sidebar").toggle();
	});

	$("#udp-versions").change(function () {
		var version = $(this).val();
		// https://weatherflow.github.io/SmartWeather/api/udp/v29/
		if (version != "---") {
			window.location = "/SmartWeather/api/udp/" + version;
		}
	});
})