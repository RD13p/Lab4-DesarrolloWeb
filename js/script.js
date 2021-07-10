var post = document.getElementById("ButtonPost");
var clear = document.getElementById("ButtonClear");
var mark = document.getElementById("ButtonMark");
var del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
    e.preventDefault();

    var todo = document.getElementById("textTodo").value;
    var list = document.getElementById("TodoList");

    var currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + `<input type = "checkbox" name ="todo" class = "prueba" /> ${todo} <br>`
}

function TodoClear() {

    var todos = document.getElementsByName("todo");

    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }

}

function TodoMark() {
    var todos = document.getElementsByName("todo");

    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
}


function TodoDel() {
    var list = document.getElementById("TodoList");
    list.innerHTML = "";
    var todos = document.getElementsByName("todo");
    todos.forEach(elemento => {
        if (elemento.checked) {
            elemento.parentElement.remove();
        }
    })
}