
/**
 * Parse the given `email`.
 *
 * @param {String} email
 * @return {Object}
 * @api public
 */

exports.parse = function (email) {
  var parts = email.split('@');
  var name = parts[0];
  var filters, filter;
  if (parts[0] && ~parts[0].indexOf('+')) {
    filters = parts[0].split('+');
    name = filters.shift();
    filter = filters.join('+');
  }
  return {
    local : parts[0],
    name : name,
    filter : filter,
    domain : parts[1]
  };
};


/**
 * Check if an `email` has a filter.
 *
 * @param {String} email
 * @return {Boolean}
 * @api public
 */

exports.hasFilter = function (email) {
  return !!~email.indexOf('+');
};