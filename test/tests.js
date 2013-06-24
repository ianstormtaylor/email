describe('email', function () {
  var assert = require('assert')
    , email = require('email')
    , parse = email.parse;

  describe('email.parse(str)', function () {
    it('should support .local', function () {
      var email = parse('ian@ianstormtaylor.com');
      assert('ian' === email.local);
    });

    it('should support .name', function () {
      var email = parse('ian@ianstormtaylor.com');
      assert('ian' === email.name);
      email = parse('ian+filter@ianstormtaylor.com');
      assert('ian' === email.name);
    });

    it('should support .filter', function () {
      var email = parse('ian@ianstormtaylor.com');
      assert(undefined === email.filter);
      email = parse('ian+filter+filter@ianstormtaylor.com');
      assert('filter+filter' === email.filter);
    });

    it('should support .domain', function () {
      var email = parse('ian@ianstormtaylor.com');
      assert('ianstormtaylor.com' === email.domain);
    });
  });
});