/**
 * @description : Modify the code to use const and let instead of var.
 * @param {string} : taskFirst - I prefer const when I can.
 * @param {string} : taskNext - But sometimes let is okay.
 * @returns {string} : taskFirst and taskNext
 */

export function taskFirst() {
	const task = 'I prefer const when I can.';
	return task;
}

export function getLast() {
	return ' is okay';
}

export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();

	return combination;
}
