describe('Browser Navigation', function () {

    it('should able to navigate back, forward and refresh', function () {
        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.manage().window().maximize();
        browser.sleep(4000);

        //Navigation
        browser.navigate().to('https://www.facebook.com');
        browser.sleep(4000);
        browser.navigate().back();
        browser.sleep(4000);
        browser.navigate().forward();
        browser.sleep(4000);
        browser.navigate().refresh();
        browser.sleep(4000);
    });
});