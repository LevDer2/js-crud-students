// ! Elements!
const getStudentsButton = document.querySelector("#get-students-btn");
const table = document.querySelector(".students-table");

// Функція для отримання всіх студентів
function getStudents() {
  return fetch(`http://localhost:3000/students`).then((res) => res.json());
}

getStudents().then((res) => console.log(res));

getStudentsButton.addEventListener("click", (event) => {
  return getStudents().then(renderStudents);
});

// Функція для відображення студентів у таблиці
function renderStudents(students) {
  table.innerHTML = "";
    //  * make a new table for students
    const student = students
      .map(({id, name, skills, isEnrolled, age, course, email}) => {
        return `<li class="app-item">${country.name.common}</li>`;
      })
      .join("");
    // * Add our items in the end of the list
    table.insertAdjacentHTML("beforeend", student);
}

// Функція для додавання нового студента
function addStudent(e) {
  // твій код
}

// Функція для оновлення студента
function updateStudent(id) {
  // твій код
}

// Функція для видалення студента
function deleteStudent(id) {
  // твій код
}
