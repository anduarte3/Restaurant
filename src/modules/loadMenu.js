const bigSquare = document.createElement('div');
const food = document.createElement('h2');

const paraOne = document.createElement('p');
const imgTwo = document.createElement("img");
const paraTwo = document.createElement('p');
const imgOne = document.createElement("img");
const paraThree = document.createElement('p');
const imgThree = document.createElement("img");

function loadMenu() {
    //box
    document.body.appendChild(bigSquare);
    bigSquare.classList.add('menu-box');
    bigSquare.classList.add('display');
    //title
    food.textContent = 'Popular Choices';
    bigSquare.appendChild(food);
    //title (food name)
    paraOne.textContent = 'California roll';
    paraOne.setAttribute('class','title-roll');
    bigSquare.appendChild(paraOne);
    //image One
    imgOne.src = '../src/california.png';
    bigSquare.appendChild(imgOne);
    imgOne.style.borderRadius = '20px';
    imgOne.style.border = '2px, solid, black';
    //title (food name)
    paraTwo.textContent = 'Nigiri';
    paraTwo.setAttribute('class','title-roll');
    bigSquare.appendChild(paraTwo);
    //image Two
    imgTwo.src = '../src/nigiri.png';
    bigSquare.appendChild(imgTwo);
    imgTwo.style.borderRadius = '20px';
    imgTwo.style.border = '2px, solid, black';
    //image Three
    paraThree.textContent = 'Makimono roll';
    paraThree.setAttribute('class','title-roll');
    bigSquare.appendChild(paraThree);
    //image Two
    imgThree.src = '../src/makimono.png';
    bigSquare.appendChild(imgThree);
    imgThree.style.borderRadius = '20px';
    imgThree.style.border = '2px, solid, black';
}
export default loadMenu;