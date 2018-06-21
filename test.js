var uuid = require('./uuidv4.js')
var VALID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

it('should create valid regexes', () => {
	for (var i = 0; i < 100; i++) {
		expect(uuid()).toMatch(VALID_REGEX);
	}
});
