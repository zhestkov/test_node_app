module.exports = {
  "Demo test Google": function(browser) {
    browser
      .url("http://localhost:4000")
      .waitForElementVisible("body", 1000)
      //   .setValue("input[type=text]", "nightwatchsadfdgsdfgdfhdfghgdh")
      //   .waitForElementVisible("input[type=submit]", 3000)
      //   .click("input[name=btnK]")
      //   .pause(1000)
      .assert.containsText("body", "Hello world!")
      .end();
  }
};
