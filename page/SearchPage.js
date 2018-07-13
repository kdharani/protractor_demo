
let json = require('../data/simpleData.json');
let locator = require('../locator/elements');

var SearchPage = function () {

    let searchBox = element(by.id(locator.Weather.city));
    let currentWeather = element(by.css(locator.Weather.currentWeather));

    this.searchByCity = function(){
        searchBox.clear();
        searchBox.sendKeys(json.city);
        browser.driver.actions().sendKeys(protractor.Key.ENTER).perform();

    }

    this.getCurrentWeather = function(){
        return currentWeather.getText();
    }

}

module.exports = new SearchPage();