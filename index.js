const DomElement = function() {
    const text = document.querySelector('.text').value;
    const selector = document.querySelector('.selector').value;
    const height = document.querySelector('.height').value;
    const width = document.querySelector('.width').value;
    const bg = document.querySelector('.bg').value;
    const fontsize = document.querySelector('.fontsize').value;
};

DomElement.prototype.createElements = function() {
    if (selector[0] === '.') {
        let elem =  document.createElement('div');
        console.log(elem);
        document.body.appendChild(elem);
        elem.classList.add(selector);
        elem.style.height = height + 'px';
        elem.style.width = width + 'px';
        elem.style.backgroundColor = bg;
        elem.style.fontSize = fontsize + 'px';
    } else if(selector[0] === '#') {
        let elem =  document.createElement('div');
        document.body.appendChild(elem);
        elem.setAttribute('id', selector);
        elem.innerHTML = text;
        console.log(elem);
        elem.style.fontSize = fontsize + 'px';
        elem.style.backgroundColor = bg;
    }
};
button = document.querySelector('.button');

const domElement2 = new DomElement();
button.addEventListener('click', DomElement);