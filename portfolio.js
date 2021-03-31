const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

fetch(GITHUB_URL)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		const profileImage = document.getElementById("profile-image");
		profileImage.src = data.avatar_url;
	});

let cities = [
	"https://maps.google.com/maps?q=kfar%20saba&t=&z=15&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=Herzliya&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=kfar%20haruv&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=ramat%20gan&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed",
];

let i = 0;

document.getElementById("prev_button").disabled = true; //disable prev button when page loads.

function nextItem() {
	document.getElementById("prev_button").disabled = false;
	i++; // increase i by one
	if (i >= cities.length - 1) {
		// disable next button at the last city.
		document.getElementById("next_button").disabled = true;
	}

	return cities[i]; // give us back the item of where we are now.
}

function prevItem() {
	i--; // decrease by one.
	if (i < cities.length) {
		document.getElementById("next_button").disabled = false;
	}
	if (i <= 0) {
		document.getElementById("prev_button").disabled = true;
	}

	return cities[i]; // give us back the item of where we are now.
}

window.addEventListener("load", function () {
	document.getElementById("prev_button").addEventListener(
		"click", // we want to listen for a click.
		function (e) {
			// the e here is the event itself.
			document.getElementById("gmap_canvas").setAttribute("src", prevItem());
		}
	);

	document.getElementById("next_button").addEventListener(
		"click", // we want to listen for a click.
		function (e) {
			// the e here is the event itself.

			document.getElementById("gmap_canvas").setAttribute("src", nextItem());
		}
	);
});
