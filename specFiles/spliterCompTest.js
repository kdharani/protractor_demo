describe('Splitter Example', function () {

    beforeEach(function(){
        browser.get('https://embed.plnkr.co/plunk/Lrd3UV');
        browser.manage().window().maximize();
        browser.sleep(3000);
    });

    it('should able to drag and drop splitter comp', function () {

        let frmElem = $('div.plunker-resize-handle');
        let toElem = $('div.plunker-sidebar-resize');

        //Using dragAndDrop method
        //browser.actions().dragAndDrop(frmElem,toElem).perform();

        //Using mouseDown, mouseMove and mouseUp
        //browser.actions().mouseDown(frmElem).mouseMove(toElem).mouseUp().perform();

        //Using coordinates
        browser.actions().mouseDown(frmElem).mouseMove({x: -toElem.getSize().width, y: 0}).mouseUp().perform();

        browser.sleep(3000);
    });
});