function writePoem(theme, numberOfLines) {
		let poem = "";
		for (let i = 0; i < numberOfLines; i++) {
				poem += `I love ${theme}.\n`;
		}
		return poem;
}

console.log("--------------------");
const theme = process.argv[2] || "love";
const numberOfLines = process.argv[3] || 5;
console.log(writePoem(theme, numberOfLines));
console.log("--------------------");