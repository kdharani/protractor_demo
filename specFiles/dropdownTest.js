/**
 * Created by Selenium on 08-12-2015.
 */

var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Select Wrapper", function () {


    it("Handling the dropdown list", function () {


        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");

        mySelect.selectByText("Harry Potter");
        //mySelect.selectByValue("3");
        elemenet.all()
        expect($$('select#userSelect option').count()).toBe(6);

        $$('select#userSelect option').last().getText().then(function (text){
            //console.log(text);
            expect(text).toBe('Neville Longbottom');
        });

        $$('select#userSelect option').each(function(element, index){
            element.getText().then(function(text){
                console.log(text, index);
            });
        });

        browser.sleep(2000);

        var foo = element(by.id('foo'));
        expect(foo.getSize()).toEqual(jasmine.objectContaining({
            width: 50,
            height: 20
        });

    });


    it("Finding count and printing all dropdown items", function () {


        var dropoptions = mySelect.getOptions();

        dropoptions.then(function (options) {

            console.log(options.length);


            for (var i = 0; i < options.length - 1; i++) {


                element(by.repeater("cust in Customers").row(i)).getText().then(function (text) {

                    console.log(text);

                });


            }


        });

        browser.sleep(2000);

    });


});
