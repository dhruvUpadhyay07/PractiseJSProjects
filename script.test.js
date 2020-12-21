const rewire = require("rewire")
const script = rewire("./script")
const countDown = script.__get__("countDown")

// @ponicode
describe("countDown", () => {
    test("0", () => {
        countDown()
    })
})
