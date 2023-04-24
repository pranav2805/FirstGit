const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);

//Add item to the list
function addItem(e){
    e.preventDefault();
    
    var inputText = document.getElementById('item').value;
    var descText = document.getElementById('description').value;
    //console.log(inputText);

    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(inputText));

    var brk = document.createElement('br');

    li.appendChild(brk);

    li.appendChild(document.createTextNode(descText));

    var deleteBtn = document.createElement('button');

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');

    editBtn.className = 'btn btn-sm float-right';

    editBtn.appendChild(document.createTextNode('EDIT'));

    li.appendChild(editBtn);

    itemList.appendChild(li);

    //document.getElementsByTagName('item').textContent =" ";

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


function filterItem(e){
    var text = e.target.value.toLowerCase();
    //console.log(text);

    var items = itemList.getElementsByTagName('li');
    //console.log(items);

    //var items = itemList.get

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}