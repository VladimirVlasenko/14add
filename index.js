let button = document.querySelector('.button');
let divElement;


button.addEventListener('click', () => {
    let selector = document.querySelector('.selector').value;
    let height = document.querySelector('.height').value;
    let width = document.querySelector('.width').value;
    let bg = document.querySelector('.bg').value;
    let fontSize = document.querySelector('.fontsize').value;
    let text = document.querySelector('.text').value;
    let left = '200';
    let top = '200';

    const DomElement = function(selector, height, width, bg, fontSize, text) {
        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.text = text;
    };



    const domElement2 = new DomElement(selector, height, width, bg, fontSize, text);
    console.log(domElement2);

    DomElement.prototype.createElements = function() {
        if (this.selector[0] === '.') {
            elem =  document.createElement('div');
            document.body.appendChild(elem);
            elem.classList.add(this.selector);
            elem.textContent = text;
            elem.style.cssText = `background-color: ${bg};
                width: ${width + 'px'};
                height: ${height + 'px'};
                fontSize: ${fontSize + 'px'};
                margin-left: ${left + 'px'};
                margin-top: ${top + "px"};
                position: relative;
                `;
            divElement = document.querySelector('div');
        } else if(this.selector[0] === '#') {
            let elem =  document.createElement('p');
            console.log(elem);
            document.body.appendChild(elem);
            elem.setAttribute('id', this.selector);
            elem.textContent = this.text;
            elem.style.cssText = `background-color: ${bg};
                width: ${width + 'px'};
                height: ${height + 'px'};
                fontSize: ${fontSize + 'px'};
            `;
        }
    };
    domElement2.createElements();

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        let keyName = event.key;
        if (keyName === 'ArrowRight') {
            divElement.style.marginLeft = `${((left * 1) + 10) + 'px'}`;
            left *= 1; 
            left +=10;
        }
        if (keyName === 'ArrowLeft') {
            divElement.style.marginLeft = `${((left * 1) - 10) + 'px'}`;
            left *= 1; 
            left -=10;
        }
        if (keyName === 'ArrowUp') {
            divElement.style.marginTop = `${((top * 1) - 10) + 'px'}`;
            top *= 1; 
            top -=10;
        }
        if (keyName === 'ArrowDown') {
            divElement.style.marginTop = `${((top * 1) + 10) + 'px'}`;
            top *= 1; 
            top +=10;
        }
    });
});

