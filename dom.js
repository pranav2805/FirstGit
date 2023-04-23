//console.dir(document);

const title = document.getElementById('header-title');
//console.log(title);

title.style.color = 'blue';

const mainHeader = document.getElementById('main-header');
mainHeader.style.borderBottom = 'solid 3px #000';

const addItems = document.getElementById('add-items');
console.log(addItems);
addItems.style.color = 'green';

const items=document.getElementsByClassName('list-group-item');

items[2].style.backgroundColor = 'green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}
