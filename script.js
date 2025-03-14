const elt_password = document.querySelector('.password');
const copy_text = document.querySelector('.copy-btn')

const passwords = { 
	alphabets: [],
	characters: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '?']
};
for (let i = 0; i < 26; i++) {
	let randomIndex = Math.floor(Math.random() * 26);
	let randomLetter = String.fromCharCode(97 + randomIndex);
	passwords.alphabets.push(randomLetter);
}
function generate() {
	let generatedPassword = "";
	let passwordLength = 6;

	for (let i = 0; i < passwordLength; i++) {
		let number = Math.floor(Math.random() * 10);
		generatedPassword += passwords.alphabets[number] + passwords.characters[number] + number;
	}
	elt_password.innerText = generatedPassword;
}
copy_text.addEventListener('click', () => {
  	copy_text.innerText = "Copied";

  	setTimeout(() => {
  		copy_text.innerText = "Copy";
  	}, 2000)


	var range = document.createRange();
	range.selectNode(elt_password)
	window.getSelection().addRange(range)
	document.execCommand("copy")
})
