describe('Login Suite', function(){

    // We call it specs (Test Cases)
    it('login test', function(){
        browser.get('http://amasik.com/demo/angularjs/angular-app');
        browser.driver.sleep(10000);
        let expetedTitle = browser.getTitle();
        console.log(expetedTitle);
        expect(expetedTitle).toBe('Testing');
    });
});