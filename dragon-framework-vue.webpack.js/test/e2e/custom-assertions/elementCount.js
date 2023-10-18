// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = (selector, count) => {
  this.message = `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;
  this.pass = value => value === this.expected;
  this.value = res => res.value;
  this.command = (cb) => {
    const self = this;
    return this.api.execute(s => document.querySelectorAll(s).length, [selector], (res) => {
      cb.call(self, res);
    });
  };
};
