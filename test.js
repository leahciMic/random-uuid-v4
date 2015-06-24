var uuid = require('./uuidv4.js')
var assert = require('assert')

var VALID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

for (var i = 0; i < 100; i++) {
	assert( VALID_REGEX.test(uuid()) )
}
