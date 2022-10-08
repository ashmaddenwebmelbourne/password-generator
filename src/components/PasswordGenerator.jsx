import React from "react";
import ButtonOptions from "./ButtonOptions";
import PasswordStrength from "./PasswordStrength";
import getpassword from "./getpassword";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import copyIcon from "../images/icon-copy.svg";

export default function PasswordGenerator() {
	function generatePassword() {
		let options = document.getElementById("options");
		let optionsArray = [];
		let optionChildren = options.children;
		for (let i = 0; i < optionChildren.length; i++) {
			if (optionChildren[i].children[0].className === "checkbox-on") {
				optionsArray.push(optionChildren[i].children[0].id);
			}
		}
		getpassword(optionsArray, document.getElementById("range-slider").value);
	}

	function handleChange() {
		let passwordLength = document.getElementById("range-slider").value;
		document.getElementById("range-value").innerHTML = passwordLength;
	}

	function copyPassword() {
		let range = document.createRange();
		range.selectNode(document.getElementById("password"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand("copy");
		window.getSelection().removeAllRanges();
	}

	return (
		<div>
			<div className="card-top card-background-dark-grey">
				<h1 id="password" className="font-color-white">
					PTx1f5DaFX
				</h1>
				<Tippy content="Copied" trigger="click" theme="grey" placement="top" arrow={false}>
					<img id="copy-icon" onClick={copyPassword} src={copyIcon} alt="Copy logo"></img>
				</Tippy>
			</div>
			<div className="card-bottom card-background-dark-grey">
				<div className="column">
					<div className="row">
						<label className="font-color-white">Character Length</label>
						<h2 id="range-value" className="font-color-green">
							20
						</h2>
					</div>
					<input id="range-slider" className="slider" type="range" min="10" max="30" defaultValue="20" step="1" onChange={handleChange} />
					<div id="options">
						<ButtonOptions desc={"Include Uppercase Letters"} id={1} />
						<ButtonOptions desc={"Include Lowercase Letters"} id={2} />
						<ButtonOptions desc={"Include Numbers"} id={3} />
						<ButtonOptions desc={"Include Symbols"} id={4} />
					</div>

					<div className="row card-background-darker-grey mob-stack">
						<p className="font-color-grey">Strength</p>
						<div className="row-2">
							<h2 id="strength" className="font-color-white font-uppercase">
								Strength
							</h2>
							<PasswordStrength />
						</div>
					</div>
					<button id="button" onClick={generatePassword} className="button">
						Generate →
					</button>
				</div>
			</div>
		</div>
	);
}
