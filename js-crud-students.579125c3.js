// ! Elements!
const getStudentsButton = document.querySelector("#get-students-btn");
const table = document.querySelector(".students-tbody");
// Функція для отримання всіх студентів
function getStudents() {
    return fetch(`http://localhost:3000/students`).then((res)=>res.json());
}
// ! For checking our students
// getStudents().then((res) => console.log(res));
// ! If we click to this button we will get our students
getStudentsButton.addEventListener("click", (event)=>{
    return getStudents().then(renderStudents);
});
// ! If we click to this button we will delete one of our students
table.addEventListener("click", (event)=>{
    const deleteButton = event.target.closest("button.delete-students");
    if (deleteButton) return fetch(`http://localhost:3000/students`, {
        method: "DELETE"
    }).then(()=>deleteStudent);
});
// Функція для відображення студентів у таблиці
function renderStudents(students) {
    table.innerHTML = "";
    const rows = students.map(({ id, name, skills, isEnrolled, age, course, email })=>{
        const skillsList = skills > "1" ? Object.values(skills).join(", ") : "He/she did not have skils";
        return `
        <tr>
          <td>${id}</td>
          <td>${name}</td>
          <td>${age}</td>
          <td>${course}</td>
          <td>${skillsList}</td>
          <td>${email}</td>
          <td>${isEnrolled ? "\u0422\u0430\u043A" : "\u041D\u0456"}</td>
          <td><button class="delete-students">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button></td>
        </tr>
      `;
    }).join("");
    table.insertAdjacentHTML("beforeend", rows);
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
    console.log("Yes?");
}

//# sourceMappingURL=js-crud-students.579125c3.js.map
