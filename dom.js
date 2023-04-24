//console.dir(document);

const title = document.getElementById('header-title');
//console.log(title);

title.style.color = 'blue';

const mainHeader = document.getElementById('main-header');
mainHeader.style.borderBottom = 'solid 3px #000';

const addItems = document.getElementById('add-items');
console.log(addItems);
addItems.style.color = 'green';

/* const items=document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
} */

/* const li=document.getElementsByTagName('li');

console.log(li);

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = 'grey';
} */

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';

// const items = document.querySelectorAll('.list-group-item');

// items[1].style.backgroundColor = 'green';

// //const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
// const odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#7EF36B';
// }


//Traversing DOM
const itemList = document.querySelector('#items');

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.fontWeight = 'bold';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'coral';


//Creating an element
var newDiv = document.createElement('div');

newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello div');
// console.log(newDiv);

var newDivText = document.createTextNode('HELLO WORLD');

//Add text to newDiv
newDiv.appendChild(newDivText);

console.log(newDiv);

var container = document.querySelector('header .container');

var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);

