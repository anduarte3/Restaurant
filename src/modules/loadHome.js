const square = document.createElement('div');
const aboutSushi = document.createElement('h2');
const para = document.createElement('p');

function loadHome() {
    //Big box
    document.body.appendChild(square);
    square.classList.add('box');
    square.classList.add('display');
    //About 
    aboutSushi.textContent = 'About';
    square.appendChild(aboutSushi);
    //paragraph
    para.textContent = 'Sushi bar offers the best experience you could ever expect if you are a sushi lover,'
    square.appendChild(para);

}
// function setActiveButton() {

//     if active button home = true 
//     remove(square)
//     else active button menu = false
//     remove(bigsquare)
// }
export default loadHome;