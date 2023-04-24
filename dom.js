const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

//Add item to the list
function addItem(e){
    e.preventDefault();
    
    var inputText = document.getElementById('item').value;
    //console.log(inputText);

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(inputText));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    itemList.appendChild(li);

}


//Delete the item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}