describe('Locate element', function(){

    it('Locate element test',function(){
        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.driver.manage().window().maximize();

        //syntax I
        //element(by.id('Field')).getWebElement().click();

        // syntax II
        //browser.driver.findElement(by.id('Field')).click();

        // syntax III
        browser.findElement(by.css('input.field.login-checkbox[tabindex="4"]')).click();

        browser.sleep(5000);


    });
});