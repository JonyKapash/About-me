const GITHUB_URL = "https://api.github.com/users/JonyKapash";
// get object with information from github
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

//  Google city coordinates for the mini map in about.html
const kfarSaba =
	"https://maps.google.com/maps?q=kfar%20saba&t=&z=15&ie=UTF8&iwloc=&output=embed";
const herzliya =
	"https://maps.google.com/maps?q=Herzliya&t=&z=13&ie=UTF8&iwloc=&output=embed";
const kfarHaruv =
	"https://maps.google.com/maps?q=kfar%20haruv&t=&z=13&ie=UTF8&iwloc=&output=embed";
const ramatGan =
	"https://maps.google.com/maps?q=ramat%20gan&t=&z=13&ie=UTF8&iwloc=&output=embed";
const telAviv =
	"https://maps.google.com/maps?q=tel%20aviv&t=&z=13&ie=UTF8&iwloc=&output=embed";

const cities = [kfarSaba, herzliya, kfarHaruv, ramatGan, telAviv];

//For validation if checkbox has been checked and if so which one
const checkboxIds = [
	"JavaScript-checkbox",
	"ruby-checkbox",
	"c#-checkbox",
	"python-checkbox",
];

// Coding languages for the footer sentence
const codeLanguages = ["HTML", "CSS", "JavaScript"];

let firstName = document.getElementById("input-firstName");
let email = document.getElementById("input-email");
let comment = document.getElementById("input-Comment");

const animationDuration = 2500;

let citiesIndex = 0;

// loop trow codeLanguages arr and set the footer-sentence
var e = "";
for (var y = 0; y < codeLanguages.length; y++) {
	if (y != codeLanguages.length - 1) {
		e += `${codeLanguages[y]}, `;
	} else {
		e += `and ${codeLanguages[y]}.`;
	}
}

document.getElementById(
	"footer-sentence"
).innerHTML = `This page was built using: ${e}`;

function enableDisableButtons() {
	if (citiesIndex <= 0) {
		// disable previous button at the first city.
		document.getElementById("prev_button").disabled = true;
	} else if (0 < citiesIndex && citiesIndex < cities.length - 1) {
		// if we are in between the start and end of cities arr next and previous button enabled
		document.getElementById("next_button").disabled = false;
		document.getElementById("prev_button").disabled = false;
	} else {
		// disable next button at the last city.
		document.getElementById("next_button").disabled = true;
	}
}

function nextItem() {
	citiesIndex++; // increase citiesIndex by one
	enableDisableButtons();
	return cities[citiesIndex]; // give us back the item of where we are now
}

function prevItem() {
	citiesIndex--; // decrease by one
	enableDisableButtons();
	return cities[citiesIndex]; // give us back the item of where we are now
}

//define google map coordinations event listeners
window.addEventListener("load", function () {
	document.getElementById("prev_button").addEventListener(
		"click", // we want to listen for a click
		function () {
			document.getElementById("gmap-canvas").setAttribute("src", prevItem());
		}
	);

	document.getElementById("next_button").addEventListener(
		"click", // we want to listen for a click
		function () {
			document.getElementById("gmap-canvas").setAttribute("src", nextItem());
		}
	);
});

// Runs every time a user release a key and check all the required input fields
function checkIfInputEmpty() {
	if (
		firstName.value.trim() !== "" &&
		validateEmail(email.value) &&
		comment.value.trim() !== ""
	) {
		document.getElementById("button-submit").disabled = false;
	} else {
		document.getElementById("button-submit").disabled = true;
	}
}

// validate for email input in contact page
function validateEmail(emailAddress) {
	var re = /^\S+@\S+\.\S+$/;
	return re.test(emailAddress);
}

// print the form to the console when pressing submit button
function formSubmit() {
	let submitPrint = `First Name: ${firstName.value}, Last Name: ${
		document.getElementById("input-Lname").value
	}, Email: ${email.value}, Comment: ${
		comment.value
	}, Preferred Coding Languages:`;

	// loops over checkboxIds array and check what language is checked and print it to the console
	for (let n = 0; n < checkboxIds.length; n++) {
		if (document.getElementById(checkboxIds[n]).checked === true) {
			submitPrint =
				submitPrint + ` ${document.getElementById(checkboxIds[n]).value},`;
		}
	}

	// remove the last character from the string
	submitPrint = submitPrint.slice(0, -1) + ".";

	console.log(submitPrint);

	// reset form values back to empty
	document.getElementById("contact-form").reset();

	// disable the form submit button after form submitted
	document.getElementById("button-submit").disabled = true;
}

function activateAnimation() {
	document.getElementById("animate").classList.add("animate__hinge");

	setTimeout(function () {
		document.getElementById("animate").classList.remove("animate__hinge");
	}, animationDuration);
}

// add a click event on about-card element
// todo: Check why its stopping the page from loading if not at bottom of page.
document.getElementById("animate").addEventListener("click", function () {
	activateAnimation();
});
