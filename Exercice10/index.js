//votre code ici

function printNumbers(start) {
	var myArray = [];
	for (let i = 1; i <= start; i++) {
		myArray.push(i);
		}
	return myArray.join(" ");
}
export default printNumbers

