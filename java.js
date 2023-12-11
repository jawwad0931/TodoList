const search = document.getElementById('search');
const listContainer = document.getElementById('list-container');

function add(){
    if(search === ""){
        alert('Please fill the field');
    }else{
        let li = document.createElement('li');
        li.className = 'list-group-item'; 
        li.innerHTML = search.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.className = 'span1';
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    search.value="";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData()
    }
},false);

function SaveData(){
    localstorage.setitem("data",listContainer.innerHTML)
}

function showtask(){
    listContainer.innerHTML = localstorage.getitem("data");
}

showtask();