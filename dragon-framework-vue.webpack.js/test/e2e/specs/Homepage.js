// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'show Homepage page.': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(`${devServer}/homepage`)
      .waitForElementVisible('.homepage', 5000)
      .assert.elementPresent('.homepage')
      .end();
  },
};
