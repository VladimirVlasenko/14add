document.addEventListener('DOMContentLoaded', function() {
    const DomElement = function(selector, height, width, bg, fontsize) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontsize = fontsize;
        this.createElements();
    };
    DomElement.prototype.createElements = function(selector, height, width, bg, fontsize) {
         if (this.selector[0] === '.') {
             this.elem = document.createElement('div');
            this.elem.className = this.selector.substring(1);
        } else if(this.selector[0] === '#') {
            this.elem = document.createElement('p');
            this.elem.id = this.selector.substring(1);
        }
        this.elem.style.cssText = `height: ${this.height}px; width: ${this.width}px; background:
        ${this.bg}; font-size: ${this.fontSize}px;`;
        console.log(this.height);
        document.body.append(this.elem);
     };
    
    DomElement.prototype.createText = function (text) {
        this.elem.textContent = text;
        console.log(this.elem);
    };
    
    let someElem = new DomElement('.div', 200, 300, 'green', 23);
    someElem.createElements();
    someElem.createText('Ехал Грека через реку');
    
    let someElem2 = new DomElement('#paragraph', 200, 500, 'yellow', 53);
    someElem2.createElements();
    someElem2.createText('Видит Грека - в реке рак');
});



