<template>
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h1 id="header-title">Item Lister</h1>
        </div>
        <div class="col-md-6 align-self-center">
            <input type="text" class="form-control" id="filter" placeholder="Search Items...">
        </div>
      </div>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form id="addForm" class="form-inline mb-3">
      <input type="text" class="form-control mr-2" id="item">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    </ul>
   </div>
  </div>
</template>

<script>
export default {
  mounted(){
    // var form = document.getElementById('addForm');
    // var itemList =  document.getElementById('items');
    // form.addEventListener('submit', formm);
    // function formm(e) {
    //   e.preventDefault();
    //   //Getinput
    //   var item = document.getElementById('item').value;
    //   //Add Class 
    //   var li = document.createElement('li');
    //   //Add Id
    //   li.className = 'list-group-item';
    //   //add textNode
    //   li.appendChild(document.createTextNode(item));  
    //   itemList.appendChild(li);


    // }
    var addForm = document.querySelector('#addForm');
    var items = document.querySelector('#items');
    var filter = document.getElementById('filter');
    

    //add event
    addForm.addEventListener('submit', form);
    //Delete Event 
    items.addEventListener('click', removeItem);
    //Filter Event
    filter.addEventListener('keyup', filterItems);


    function form(e){
      e.preventDefault();
      //Get Input
      var item = document.querySelector('#item').value;
      //create li element 
      var li = document.createElement('li');
      //add Class
      li.className = 'list-group-item';
      //Text Node
      li.appendChild(document.createTextNode(item));
      //create del button element 
      var deleteBtn = document.createElement('button');
      //add class to delete button
      deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
      //Append Text Node
      deleteBtn.appendChild(document.createTextNode('X'));
      //append Button to li 
      li.appendChild(deleteBtn);
      //append li to list



      items.appendChild(li);
    }
   function removeItem(e){
     if(e.target.classList.contains('delete')){
       if(confirm('are you sure?')){
         var li = e.target.parentElement;
         items.removeChild(li);
       }
     }
    }

    //Filter Items
    function filterItems(e){
      //Convert Text To lowercase 
      var text = e.target.value.toLowerCase();
      //Get lis
      var itema = items.getElementsByTagName('li');
      //convert to an array
      Array.from(itema).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
          item.style.display = 'block';
        }
        else{
          item.style.display = 'none';
        }
      });
    }
    }
}
</script>

<style>

</style>