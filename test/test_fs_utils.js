var fs_utils = require('../lib/fs_utils.js')
;

var fsWalkResults = fs_utils.dirTree('assets');
var util = require('util');
console.log(util.inspect(fsWalkResults, false, null));
