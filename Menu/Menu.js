/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

const header = document.querySelector('.header');
header.appendChild(createMenu(menuItems));


function createMenu(arr) {
  
  // create menu div
  const menuDiv = document.createElement('div');
  // header.appendChild(menuDiv);
  menuDiv.classList.add('menu');
  // no text

  //create UL
  const menuUl = document.createElement('ul');
  menuDiv.appendChild(menuUl);
  // no styles
  // no text

//   //create li
// const menuLi = document.createElement('li');
// menuUl.appendChild(menuLi);
// menuLi.classList.add('li')
// menuLi.textContent = 'test';

  // //create LIs  
  arr.map(item => {
    const newLi = document.createElement('li');
    menuUl.appendChild(newLi);
    newLi.classList.add('li');
    newLi.textContent = item;
  })

  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {
    menuDiv.classList.toggle('menu--open')
  });

  return menuDiv;

  
};


console.log(createMenu(menuItems))




