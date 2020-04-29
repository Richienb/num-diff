const test = require("ava")
const numberDiff = require(".")

test("main", t => {
	t.is(numberDiff(2, 5), 3)
})
