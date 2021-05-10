document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.querySelector('#todoList');
    const todoForm = document.querySelector('#todoForm');
    const todoSearch = document.querySelector('#todoSearch');
    const todoTextarea = todoForm.querySelector('textarea');

    function addTask(text) {
        const element = document.createElement("div");
        element.classList.add("element");

        //pobieram zawartości
        const elementInner = document.querySelector("#elementTemplate").content.cloneNode(true);

        //wrzucenie do elementu
        element.append(elementInner);


        //wstawienie tekstu
        element.querySelector(".element-text").innerText = text;

        // wrzucenie elementu do listy
        todoList.append(element);
    }

    todoForm.addEventListener('submit', e => {
        e.preventDefault();

        if (todoTextarea.value !== '') {
            addTask(todoTextarea.value);
            todoTextarea.value = '';
        }
    });

    todoList.addEventListener("click", e => {
        if (e.target.classList.contains("element-delete")) {
            e.target.closest(".element").remove();
        }
    });
});
