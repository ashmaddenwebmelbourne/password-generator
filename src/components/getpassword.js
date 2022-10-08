import { tippy } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function getpassword(options, passwordLength) {
	let password = [];

	if (options.length < 1) {
		return tippy("#button", {
			content: "Please Select Atleast 1 Option!",
			theme: "grey",
			showOnCreate: true,
			hideOnClick: true,
			arrow: false,
		});
	} else {
		for (let i = 0; i < passwordLength; i++) {
			[...document.querySelectorAll("button")].forEach((node) => {
				if (node._tippy) {
					node._tippy.destroy();
				}
			});

			const passwordOption = {
				1: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
				2: "abcdefghijklmnopqrstuvwxyz",
				3: "0123456789",
				4: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
			};
			let isAllowed = false;

			while (isAllowed === false) {
				let randomNum = Math.floor(Math.random() * (5 - 1) + 1);
				if (options.includes(randomNum.toString())) {
					let optionLength = Math.floor(Math.random() * (passwordOption[randomNum.toString()].length - 0) + 0);
					password.push(passwordOption[randomNum.toString()].slice(optionLength, optionLength + 1));
					isAllowed = true;
				}
			}
		}
	}

	let passwordBars = document.getElementsByClassName("bars");
	passwordBars = passwordBars[0].childNodes;
	let passwordStrength = options.length * passwordLength;

	for (let i = 0; i < passwordBars.length; i++) {
		if (passwordStrength === 10) {
			document.getElementById("strength").textContent = "Too Weak!";
			passwordBars[0].style.backgroundColor = "#F64A4A";
			passwordBars[1].style.backgroundColor = "#18171F";
			passwordBars[2].style.backgroundColor = "#18171F";
			passwordBars[3].style.backgroundColor = "#18171F";
			break;
		}
		if (passwordStrength <= 15 && passwordStrength > 10) {
			document.getElementById("strength").textContent = "Weak";
			passwordBars[0].style.backgroundColor = "#FB7C58";
			passwordBars[1].style.backgroundColor = "#FB7C58";
			passwordBars[2].style.backgroundColor = "#18171F";
			passwordBars[3].style.backgroundColor = "#18171F";
			break;
		}
		if (passwordStrength <= 30 && passwordStrength > 15) {
			document.getElementById("strength").textContent = "Medium";
			passwordBars[0].style.backgroundColor = "#F8CD65";
			passwordBars[1].style.backgroundColor = "#F8CD65";
			passwordBars[2].style.backgroundColor = "#F8CD65";
			passwordBars[3].style.backgroundColor = "#18171F";
			break;
		}
		if (passwordStrength > 30) {
			document.getElementById("strength").textContent = "Strong";
			passwordBars[0].style.backgroundColor = "#A4FFAF";
			passwordBars[1].style.backgroundColor = "#A4FFAF";
			passwordBars[2].style.backgroundColor = "#A4FFAF";
			passwordBars[3].style.backgroundColor = "#A4FFAF";
			break;
		}
	}

	return (document.getElementById("password").textContent = password.join(""));
}
