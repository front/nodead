var util = require('util'),
    underscore = require('underscore'),
    async = require('async');

// Merge Node's util module, Underscore and Async into one object.
module.exports = underscore.defaults(util, underscore, { async: async });
