// ! Elements!
const getStudentsButton = document.querySelector("#get-students-btn");
const table = document.querySelector(".students-tbody");
const formRef = document.querySelector("#add-student-form");
// ! If here we have null we will add new student if underfined we will edit our student
let editOrAdd = null;
//! API Get STudents Функція для отримання всіх студентів
function getStudents() {
    return fetch(`http://localhost:3000/students`).then((res)=>res.json());
}
// ! API Delete student
function delStudentApi(id) {
    return fetch(`http://localhost:3000/students/${id}`, {
        method: "DELETE"
    }).then((res)=>res.json());
}
// ! API Add New student
function addStudentApi(student) {
    const options = {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(`http://localhost:3000/students/`, options).then((res)=>res.json());
}
// ! API Edit Student
function editStudentApi(id, student) {
    const options = {
        method: "PUT",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json"
        }
    };
    return fetch(`http://localhost:3000/students/${id}`, options).then((res)=>res.json());
}
// ! For checking our students
// getStudents().then((res) => console.log(res));
// ! If we click to this button we will get our students
getStudentsButton.addEventListener("click", ()=>{
    // getStudentsButton.textContent = "Оновити список студентів";
    getStudentsButton.style.display = "none";
    return getStudents().then(renderStudents);
});
// ! Render function
function renderStudents(students) {
    table.innerHTML = "";
    const rows = students.map(({ id, name, skills, isEnrolled, age, course, email })=>{
        const skillsList = Object.values(skills).join("");
        return `
        <tr id="${id}">
          <td>${id}</td>
          <td data-action="Name">${name}</td>
          <td data-action="Age">${age}</td>
          <td data-action="Course">${course}</td>
          <td data-action="Skills">${skillsList}</td>
          <td data-action="Email">${email}</td>
          <td data-action="CheckBox">${isEnrolled ? "\u041E\u043D\u043B\u0430\u0439\u043D" : "\u041E\u0444\u043B\u0430\u0439\u043D"}</td>
          <td><button class="delete-students" data-action="Delete">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button>\
          <button class="edit-students" data-action="Edit">\u{417}\u{43C}\u{456}\u{43D}\u{438}\u{442}\u{438} \u{434}\u{430}\u{43D}\u{456} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button></td>
        </tr>
      `;
    }).join("");
    table.insertAdjacentHTML("beforeend", rows);
}
// ! If we click to this button we will delete one of our students
table.addEventListener("click", (event)=>{
    // const deleteButton = event.target.closest("button.delete-students");
    if (event.target.dataset.action === "Delete") {
        const itemId = event.target.closest("tr").id;
        return deleteStudent(itemId);
    } else if (event.target.dataset.action === "Edit") {
        const itemId = event.target.closest("tr");
        console.log(itemId);
        editOrAdd = undefined;
        return updateStudent(itemId);
    }
});
// ! Submit form to add new student or edit student
formRef.addEventListener("submit", (event)=>{
    event.preventDefault();
    const { name, age, course, skills, email, isEnrolled } = event.target.elements;
    console.log(name.value);
    console.log(age.value);
    console.log(course.value);
    console.log(skills.value);
    console.log(email.value);
    console.log(isEnrolled.checked);
    const data = {
        name: name.value.trim(),
        age: Number(age.value.trim()),
        course: course.value.trim(),
        skills: skills.value.trim(),
        email: email.value.trim(),
        isEnrolled: isEnrolled.checked
    };
    // ! Add student
    if (editOrAdd === null) addStudentApi(data).then(()=>getStudents()).then(renderStudents);
// event.target.reset();
});
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
    console.log(id);
    delStudentApi(id).then(()=>getStudents()).then(renderStudents);
} // TODO Clean code in // and make edit function

//# sourceMappingURL=js-crud-students.579125c3.js.map
