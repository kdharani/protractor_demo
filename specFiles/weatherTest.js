let searchPage = require('../page/SearchPage');
let json = require('../data/simpleData.json');

describe('Weather Test', function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        browser.driver.get(browser.params.common.url);
        browser.driver.manage().window().maximize();
        browser.driver.sleep(2000);


    })
    it('should able to search with city', function () {
        //Search by city
        searchPage.searchByCity();
        browser.driver.sleep(10000);
        expect(searchPage.getCurrentWeather()).toBe(json.weather);

      /*  let locator = require('../locator/elements');
        browser.driver.findElement(by.id(locator.Weather.city)).clear();
        browser.driver.findElement(by.id(locator.Weather.city)).sendKeys(json.city);
        //browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.driver.findElement(by.css('button[type="submit"]')).click();*/


/*        browser.driver.executeScript('window.scrollTo(0,0);').then(function(){
            console.log('++++++SCROLLED UP+++++');*/
        });


 /*       browser.driver.findElement(by.css('li.current.first.cl div.info span.cond')).getText().then(function (text) {
            console.log(text)
            expect(text).toBe(json.weather);
        })*/

       // expect($$('dev#feed-tabs').count()).toBe(5);



        browser.driver.sleep(4000);
    });
//});