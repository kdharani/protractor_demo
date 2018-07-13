var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
//new command
exports.config = {
    framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4723/wd/hub',
    allScriptsTimeout: 11000,
    specs: ['../specFiles/spliterCompTest.js'],
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }


},
   /* capabilities: {
        browserName: 'safari',
    	platformName: 'iOS',
    	platformVersion: '11.2',
    	deviceName: 'iPhone Simulator',
    	safariInitialUrl:'https://www.google.com/',
        autoWebView: true,
    	automationName:'XCUITest'
        /!*platformName: 'ios',
        platformVersion:'11.2',
        deviceName:'iPhone 6s',
        automationName:'XCUITest',
        browserName: 'Safari',
        startIWDP: true,
        webkitResponseTimeout: 50000,
        safariInitialUrl:'https://www.accuweather.com',
        xcodeOrgId:'PTY3ERDG4R',
        xcodeSigningId:'iPhone Developer',
        udid: 'auto',
        autoWebView: true,
        newCommandTimeout: 3000,
        clearSystemFiles: true*!/
    },*/
jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
}
,
params: {
    username: 'kenndy',
        common
:
    {
        url: 'https://www.accuweather.com'
    }
,
    city: {
        name: 'Chennai, India',
            weather
    :
        'Mostly cloudy'
    }
,
    registration: {
        firstName: 'kannan',
            lastName
    :
        'dharani',
            email
    :
        'kannan.dharani@gmail.com',
            password
    :
        'Testing123'
    }
,
    login: {
        userName: 'kdharani',
            password
    :
        'Testing123'
    }
}
,

onPrepare: function () {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: './target/screenshots'
        })
    );
}
/* multiCapabilities: [
     {
         //'browserName': 'firefox'
     },
     {
         'browserName': 'chrome'
     },
     {
         'chromeOptions': {
             'args': ['disable-infobars']
         }
     }
     ]
 */
}