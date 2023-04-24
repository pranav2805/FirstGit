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

const items = document.querySelectorAll('.list-group-item');

items[1].style.backgroundColor = 'green';

//const odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
const odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#7EF36B';
}