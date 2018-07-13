let element = require("../locator/elements.json")

describe('Textbox Test', function () {
    it('should able to enter text ', function () {
        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.manage().window().maximize();

        //Enter data into username textbox
        browser.findElement(by.name(element.Login.username)).clear();
        browser.findElement(by.name(element.Login.username)).sendKeys('Testing@gmail.com');
        browser.sleep(3000);
    });
});