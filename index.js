"use strict"

const assertNumber = input => {
	if (typeof input !== "number") {
		throw new TypeError(`Expected a number, got ${typeof input}`)
	}
}

module.exports = (a, b) => {
	assertNumber(a)
	assertNumber(b)

	return Math.abs(a - b)
}
