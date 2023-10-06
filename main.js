// // url  для отправки запроса
// const API = "http://localhost:8000/todos";
// //!create
// //вытаскиеваем html elements
// const inpAdd = document.querySelector(".add-todo");
// const addBtn = document.querySelector(".add-btn");
// const list = document.querySelector(".list-group");

// // console.log(inpAdd, addBtn, list);
// // объект в котором хранятся данные нового тодо, который хотим добавить
// let newTodo = { todo: "" };

// //навещивем слушатель событии для получения введенных данных и помещения их в newTodo
// inpAdd.addEventListener("input", (e) => {
//   newTodo = { todo: e.target.value.trim() };
//   console.log(newTodo);
// });
// //фунkция для добавления нового таска в db.json
// async function addTodo() {
//   try {
//     if (!newTodo.todo.trim()) {
//       alert("fill input");
//       return;
//     }
//     await fetch(API, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTodo),
//     });
//   } catch (error) {
//     console.log(error, "ERROR");
//   }
//   inpAdd.value = "";
//   newTodo.todo = ""; //отчищяем тодо в 11 стоке
//   getTodos(); // для отображения нового добавленного таска без обновления страницы
// }
// //навещтваем слушатель событии for btn
// addBtn.addEventListener("click", addTodo);

// //!read
// // функции  для стягивание и отресовки данных
// async function getTodos() {
//   try {
//     let res = await fetch(API); // репонс обжект
//     let todos = await res.json(); // массив с обектами
//     render(todos); // функции для отрисвоки рендера
//   } catch (error) {
//     console.log(error);
//   }
// }
// // функция для отрисовки
// function render(todos) {
//   //отчищяем list вл избижения дубликата
//   list.innerHTML = "";
//   //перебераем массив с тасками и на каждый таск отрисовываем li с конпками
//   todos.forEach((item) => {
//     list.innerHTML += `
//     <li class='list-group-item d-flex
//     justify-content-between'>
//     <p>${item.todo}</p>
//     <button onclick='deleteTodo(${item.id})' class='btn btn-danger'>DELETE</button>
//     <button class='btn btn-warning'>Edit</button>
//     </li>
//     `;
//   });
// }

// getTodos();

// // ! delete
// async function deleteTodo(id) {
//   try {
//     await fetch(`${API}/${id}`, { method: "DELETE" });
//   } catch (error) {
//     console.log(error);
//   }
//   getTodos();
// }

const API = "https://rickandmortyapi.com/api/character";
const API_DB = "http://localhost:8000/data";
const list1 = document.querySelector(".list");
const list2 = document.querySelector(".list2");

async function getDataFromRickAdnMorty() {
  const result = await fetch(API)
    .then((data) => data.json())
    .catch((error) => console.log(error));

  result.results.forEach((item) => {
    list1.innerHTML += `
      <img src=${item.image} alt="img_rick_and_morty" />
      <p>${item.gender}</p>
      <p>${item.species}</p>
      <p>${item.status}</p>
      <h2>${item.name}</h2>
    `;
  });

  const dbResponse = await fetch(API_DB)
    .then((data) => data.json())
    .catch((error) => console.log(error));

  list2.innerHTML = "";

  dbResponse[0].forEach((item) => {
    list2.innerHTML += `
    <img src=${item.image} alt="img_rick_and_morty" />
    <p>${item.gender}</p>
    <p>${item.species}</p>
    <p>${item.status}</p>
    <h2>${item.name}</h2>
    `;
  });
}

getDataFromRickAdnMorty();
