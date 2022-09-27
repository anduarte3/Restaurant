import './style.css';

import loadHome from './modules/loadHome.js'
import loadMenu from './modules/loadMenu.js'

function createHeader() {
    //header
    const header = document.createElement('header');
    document.body.appendChild(header);
    //h1
    const h1 = document.createElement('h1');
    h1.textContent = 'Sushi Restaurant';
    document.body.appendChild(h1); 
}
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


// If you are using GitHub pages to host your completed page 
// you need to do a tiny bit more work to get it to show up. 
// After running webpack the full bundled version of your site is available 
// in the dist folder, but GH pages is looking for an index.html 
// in the root directory of your project.

// Simply follow the instructions on this https://gist.github.com/cobyism/4730490. EZPZ!
// Recall that the source branch for GitHub Pages is set in your repository’s 
// settings.
