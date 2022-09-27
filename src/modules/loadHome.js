
//create big box with about text
//about

const square = document.createElement('div');
const aboutSushi = document.createElement('h2');
const para = document.createElement('p');

function loadHome(div,h2,p) {

function shadowBox() {

    //Big box
    document.body.appendChild(square);
    square.classList.add('box');

    //About 
    aboutSushi.textContent = 'About';
    square.appendChild(aboutSushi);

    //paragraph
    para.textContent = 'Sushi bar offers the best experience you could ever expect if you are a sushi lover,'
    square.appendChild(para);
}   

shadowBox()
}

export default loadHome;