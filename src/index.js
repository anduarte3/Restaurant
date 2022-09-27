import './style.css';

import loadHome from './modules/loadHome.js'
import loadMenu from './modules/loadMenu.js'

//import Icon from './sushi.png';

//adicionar as funções e eventos que levam para as outras abas
function createHeader() {
 
    //header
    const header = document.createElement('header');
    document.body.appendChild(header);
    console.log(header);   
    //h1
    const h1 = document.createElement('h1');
    h1.textContent = 'Sushi Bar';
    document.body.appendChild(h1);
    
}

//create buttons home e menu para addEvents
function pageButtons() {
    //buttons div
    const buttons = document.createElement('div');
    document.body.appendChild(buttons)
    //buttons
    const home = document.createElement('button');
    const menu = document.createElement('button');
    
    home.textContent = 'Home';
    menu.textContent = 'Menu';

    buttons.appendChild(home);
    buttons.appendChild(menu);

    home.setAttribute('id', 'home');
    menu.setAttribute('id', 'menu');

    //const contact = document.createElement('button');
    console.log(buttons);
}

function loadPage() {
    createHeader()
    pageButtons()
    loadHome()
    loadMenu()
}

initialize()

function initialize() {
    loadPage()
    addEvents()
}

function addEvents() {
    const homebtn = document.getElementById('home');
    const menubtn = document.getElementById('menu');
    
    homebtn.addEventListener('click', loadHome, {once: true});
    menubtn.addEventListener('click', loadMenu, {once: true});
    
}

