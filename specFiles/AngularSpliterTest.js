describe('Angular Splitter component', function () {

    beforeEach(function(){
        browser.get('https://embed.plnkr.co/plunk/Lrd3UV');
        browser.manage().window().maximize();
    })

    it('should able to resize the vertical splitter', function () {
        let elem = $('div.plunker-resize-handle');
        let target = $('div.plunker-sidebar-resize');

        //Using dragAndDrop method
        browser.actions().dragAndDrop(elem, target).perform();

        //Using mouseDown, mouseMove and mouseUp methods
        //browser.actions().mouseDown(elem).mouseMove(target).mouseUp().perform();

        //Using coordinates
        //browser.actions().mouseDown(elem).mouseMove({x: -500, y: 0}).mouseUp().perform();

        browser.sleep(10000);
    });

});