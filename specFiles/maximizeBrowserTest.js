describe('Maximize Browser', function () {

    it('should maximize the browser', function () {
        const pageUrl = 'https://www.zovyo.com/demo/angularjs/angular-app/#/login';

        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.manage().window().maximize(); // Maximize the browser

        browser.sleep(2000); // wait two seconds

        expect( browser.getCurrentUrl()).toBe(pageUrl);  // get current url of the page and assert

        expect(browser.getPageSource()).toContain('kannan'); //get page source and assert

    });

});