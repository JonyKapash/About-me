const GITHUB_URL = "https://api.github.com/users/JonyKapash";

fetch(GITHUB_URL)
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		const profileImage = document.getElementById("profile-image");
		profileImage.src = data.avatar_url;
		const profileName = document.getElementById("my-name");
		profileName.innerText = data.name;
	});

//  Google city coordinates for the mini map in about
const cities = [
	"https://maps.google.com/maps?q=kfar%20saba&t=&z=15&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=Herzliya&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=kfar%20haruv&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=ramat%20gan&t=&z=13&ie=UTF8&iwloc=&output=embed",
	"https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed",
];

//For validation if checkbox has been checked and if so which one
const checkboxIds = [
	"JavaScript-checkbox",
	"ruby-checkbox",
	"c#-checkbox",
	"python-checkbox",
];

// Coding languages for the footer sentence
const codeLanguages = ["HTML, ", " CSS ", " and JavaScript."];

let i = 0;

function nextItem() {
	document.getElementById("prev_button").disabled = false;
	i++; // increase i by one
	if (i >= cities.length - 1) {
		// disable next button at the last city.
		document.getElementById("next_button").disabled = true;
	}

	return cities[i]; // give us back the item of where we are now
}

function prevItem() {
	i--; // decrease by one
	if (i < cities.length) {
		document.getElementById("next_button").disabled = false;
	}
	if (i <= 0) {
		document.getElementById("prev_button").disabled = true;
	}

	return cities[i]; // give us back the item of where we are now
}

window.addEventListener("load", function () {
	document.getElementById("prev_button").addEventListener(
		"click", // we want to listen for a click
		function (e) {
			// the e here is the event itself
			document.getElementById("gmap-canvas").setAttribute("src", prevItem());
		}
	);

	document.getElementById("next_button").addEventListener(
		"click", // we want to listen for a click
		function (e) {
			// the e here is the event itself

			document.getElementById("gmap-canvas").setAttribute("src", nextItem());
		}
	);
});

let firstName = document.getElementById("input-firstName");
let email = document.getElementById("input-email");
let comment = document.getElementById("input-Comment");

// Runs every time a user release a key and check all the required input fields
function checkIfInputEmpty() {
	if (
		firstName.value.trim() !== "" &&
		email.value.trim() !== "" &&
		comment.value.trim() !== ""
	) {
		document.getElementById("button-submit").disabled = false;
	} else {
		document.getElementById("button-submit").disabled = true;
	}
}

// print the form to the console when pressing submit button
function formSubmit() {
	console.log(
		`First Name: ${
			document.getElementById("input-firstName").value
		}, Last Name: ${document.getElementById("input-Lname").value}, Email: ${
			document.getElementById("input-email").value
		}, Comment: ${
			document.getElementById("input-Comment").value
		}, Preferred Coding Languages:`
	);

	// loops over checkboxIds array and check what language is checked and print it to the console
	for (let n = 0; n < checkboxIds.length; n++) {
		if (document.getElementById(checkboxIds[n]).checked === true) {
			console.log(`${document.getElementById(checkboxIds[n]).value}, `);
		}
	}

	// reset form values back to empty
	let form = document.getElementById("contact-form");
	form.reset();

	// disable the form submit button after form submitted
	document.getElementById("button-submit").disabled = true;
}

function activeAnimation() {
	document.getElementById("animate").classList.add("animate__hinge");

	setTimeout(function () {
		document.getElementById("animate").classList.remove("animate__hinge");
	}, 2500);
}

// loop trow codeLanguages arr and set the footer-sentence
var e = "";
for (var y = 0; y < codeLanguages.length; y++) {
	e += codeLanguages[y];
}
document.getElementById(
	"footer-sentence"
).innerHTML = `This page was built using: ${e}`;

// add a click event on about-card element
// todo: Check why its stopping the page from loading

document.getElementById("animate").addEventListener("click", function () {
	activeAnimation();
});
