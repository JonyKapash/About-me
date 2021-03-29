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
	"https://maps.google.com/maps?q=herz&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=kfar%20haruv&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=ramat&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=tel&t=&z=13&ie=UTF8&iwloc=&output=embed",
];
var i = 0;

function nextItem() {
	i = i + 1; // increase i by one
	i = i % cities.length; // if we've gone too high, start from `0` again
	return cities[i]; // give us back the item of where we are now
}

function prevItem() {
	if (i === 0) {
		// i would become 0
		i = cities.length; // so put it at the other end of the array
	}
	i = i - 1; // decrease by one
	return cities[i]; // give us back the item of where we are now
}

window.addEventListener("load", function () {
	document.getElementById("output").textContent = cities[0]; // initial value
	document.getElementById("prev_button").addEventListener(
		"click", // we want to listen for a click
		function (e) {
			// the e here is the event itself
			document.getElementById("output").textContent = prevItem();
		}
	);

	document.getElementById("next_button").addEventListener(
		"click", // we want to listen for a click
		function (e) {
			// the e here is the event itself
			document.getElementById("output").textContent = nextItem();
		}
	);
});
