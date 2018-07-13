describe('Browser Navigation', function () {

    it('should able to navigate back, forward and refresh', function () {
        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.manage().window().maximize();
        browser.sleep(2000);

        // Click on Checkbox
        browser.findElement(by.id('Field')).click();
        browser.sleep(2000);

        //Click on link
        browser.findElement(by.partialLinkText('have an account?')).click();
        browser.sleep(2000);

        //Navigate back
        browser.navigate().back();
        browser.sleep(2000);

        //Click on SignIn button
        browser.findElement(by.buttonText('Sign In')).click();
        browser.sleep(2000);
    });
});