/****** Select required DOM element ******/

const dateDivDOM = document.querySelector(".todo__header-date");
const todoInputDOM = document.querySelector("#todo__header-entry-input");
const todoListDOM = document.querySelector(".todo__list");
const clearListBtnDOM = document.querySelector(
  ".todo__header-button:last-of-type"
);
const completedTodosCbDOM = document.querySelector("#completed-todos");
const nompletedTodosCbDOM = document.querySelector("#nompleted-todos");

var todos = [];
main();

function main() {
  showTime();

  todoInputDOM.focus();

  completedTodosCbDOM.checked = false;
  nompletedTodosCbDOM.checked = false;

  if (localStorage.getItem("todos")) {
    for (let todo of JSON.parse(localStorage.getItem("todos"))) {
      todos.push(todo);
      addTodo(todo);
    }
  }
}


/****** Event Listeners ******/

clearListBtnDOM.addEventListener("click", (e) => {
  todoListDOM.innerHTML = "";
  localStorage.removeItem("todos");
  todos = [];
});

todoInputDOM.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (todoInputDOM.value == "") {
      alert("To-do için açıklama girilmedi.");
    } else {
      if (todoListDOM.childElementCount < 12) {
        addTodo();
      } else {
        alert("Maksimum sayıya ulaşıldı.");
      }
    }
  }
});

completedTodosCbDOM.addEventListener("change", (e) => {
  if (e.target.checked) {
    for (let todo of todoListDOM.children) {
      let todoSpan = todo.querySelector("span");
      if (todoSpan.style.color !== "gray") {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
    nompletedTodosCbDOM.checked = false;
  } else {
    for (let todo of todoListDOM.children) {
      let todoSpan = todo.querySelector("span");
      if (todoSpan.style.color !== "gray") {
        todo.style.display = "flex";
      }
    }
  }
});

nompletedTodosCbDOM.addEventListener("change", (e) => {
  if (e.target.checked) {
    for (let todo of todoListDOM.children) {
      let todoSpan = todo.querySelector("span");
      if (todoSpan.style.color === "gray") {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    }
    completedTodosCbDOM.checked = false;
  } else {
    for (let todo of todoListDOM.children) {
      let todoSpan = todo.querySelector("span");
      if (todoSpan.style.color === "gray") {
        todo.style.display = "flex";
      }
    }
  }
});

/****** Functions ******/

function showTime() {
  let date = new Date();
  let options = { year: "numeric", month: "numeric", day: "numeric" };

  const dateFormatted = `${date
    .toLocaleTimeString("tr-TR", options)
    .slice(0, -9)}`;

  const timeFormatted = `${date
    .toLocaleTimeString("tr-TR", options)
    .slice(-8)}`;

  dateDivDOM.innerHTML = `${dateFormatted} ${timeFormatted}`;

  setTimeout(showTime, 1000);
}

function completeTodo(e) {
  let todoSpan = e.target.querySelector("span");

  if (todoSpan) {
    if (todoSpan.style.color === "gray") {
      todoSpan.style.textDecoration = "none";
      todoSpan.style.color = "black";
    } else {
      todoSpan.style.textDecoration = "line-through";
      todoSpan.style.color = "gray";
    }
  }
}

function addTodo(text = "") {
  let todoItem = document.createElement("li");
  todoItem.classList.add("todo__item");
  todoItem.addEventListener("click", completeTodo);
  todoItem.addEventListener("mouseover", (e) => {
    let todoDeleteBtn = e.target.querySelector("button");
    todoDeleteBtn.style.display = "block";
  });
  todoItem.addEventListener("mouseout", (e) => {
    let todoDeleteBtn = e.target.querySelector("button");
    todoDeleteBtn.style.display = "none";
  });

  let todoText = document.createElement("span");
  todoText.classList.add("todo__item-text");
  todoText.innerText = text === "" ? `${todoInputDOM.value}` : text;
  todoText.style.pointerEvents = "none";

  let todoRemoveBtn = document.createElement("button");
  todoRemoveBtn.classList.add("todo__item-remove-btn");
  todoRemoveBtn.innerHTML = `<i class="fas fa-times"></i>`;
  todoRemoveBtn.style.display = "none";
  todoRemoveBtn.addEventListener("click", (e) => {
    todos = todos.filter(
      (todo) =>
        todo !=
        e.target.parentElement.querySelector(".todo__item-text").innerText
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    todoListDOM.removeChild(e.target.parentElement);
  });
  todoRemoveBtn.addEventListener("mouseover", (e) => {
    e.stopPropagation();
    e.target.style.display = "block";
  });
  todoRemoveBtn.addEventListener("mouseout", (e) => {
    e.stopPropagation();
    e.target.style.display = "none";
  });

  todoItem.appendChild(todoText);
  todoItem.appendChild(todoRemoveBtn);
  todoListDOM.appendChild(todoItem);

  if (text === "") {
    todos.push(todoInputDOM.value);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  todoInputDOM.value = "";
}
