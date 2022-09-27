
const bigSquare = document.createElement('div');
const food = document.createElement('h2');
const para = document.createElement('p');

function loadMenu() {

    //box
    document.body.appendChild(bigSquare);
    bigSquare.classList.add('menu-box');
    //title
    food.textContent = 'Popular Choices';
    bigSquare.appendChild(food);
    // title (food name)
    para.textContent = 'California roll';
    para.setAttribute('class','title-roll');
    bigSquare.appendChild(para);
    //image
    const img = document.createElement("img");
    console.log(img)
    

//california roll
//nigiri
//sashimi
//hot roll

    console.log('loadMenu')
}


export default loadMenu;