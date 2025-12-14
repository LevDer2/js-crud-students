// // ! Elements!
// const getStudentsButton = document.querySelector("#get-students-btn");
// const table = document.querySelector(".students-tbody");
// const formRef = document.querySelector("#add-student-form");

// // ! If here we have null we will add new student if underfined we will edit our student
// let editOrAdd = null;

// //! API Get STudents Функція для отримання всіх студентів
// function getStudents() {
//   return fetch(`http://localhost:3000/students`).then((res) => res.json());
// }

// // ! API Delete student
// function delStudentApi(id) {
//   return fetch(`http://localhost:3000/students/${id}`, {
//     method: "DELETE",
//   }).then((res) => res.json());
// }

// // ! API Add New student
// function addStudentApi(student) {
//   const options = {
//     method: "POST",
//     body: JSON.stringify(student),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`http://localhost:3000/students/`, options).then((res) =>
//     res.json()
//   );
// }

// // ! API Edit Student
// function editStudentApi(id, student) {
//   const options = {
//     method: "PUT",
//     body: JSON.stringify(student),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   return fetch(`http://localhost:3000/students/${id}`, options).then((res) =>
//     res.json()
//   );
// }

// // ! For checking our students
// // getStudents().then((res) => console.log(res));

// // ! If we click to this button we will get our students
// getStudentsButton.addEventListener("click", () => {
//   // getStudentsButton.textContent = "Оновити список студентів";
//   getStudentsButton.style.display = "none";
//   return getStudents().then(renderStudents);
// });

// // ! Render function
// function renderStudents(students) {
//   table.innerHTML = "";
//   const rows = students
//     .map(({ id, name, skills, isEnrolled, age, course, email }) => {
//       const skillsList = Object.values(skills).join("");
//       return `
//         <tr id="${id}">
//           <td>${id}</td>
//           <td data-action="Name">${name}</td>
//           <td data-action="Age">${age}</td>
//           <td data-action="Course">${course}</td>
//           <td data-action="Skills">${skillsList}</td>
//           <td data-action="Email">${email}</td>
//           <td data-action="CheckBox">${isEnrolled ? "Онлайн" : "Офлайн"}</td>
//           <td><button class="delete-students" data-action="Delete">Видалити студента</button>\
//           <button class="edit-students" data-action="Edit">Змінити дані студента</button></td>
//         </tr>
//       `;
//     })
//     .join("");
//   table.insertAdjacentHTML("beforeend", rows);
// }

// // ! If we click to this button we will delete one of our students
// table.addEventListener("click", (event) => {
//   // const deleteButton = event.target.closest("button.delete-students");
//   if (event.target.dataset.action === "Delete") {
//     const itemId = event.target.closest("tr").id;
//     return deleteStudent(itemId);
//   } else if (event.target.dataset.action === "Edit") {
//     const itemId = event.target.closest("tr").id; // <- важливо .id
//     editOrAdd = itemId; // краще зберігати тут id (а не undefined)
//     return updateStudent(itemId);
//   }
// });

// // ! Submit form to add new student or edit student
// formRef.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const { name, age, course, skills, email, isEnrolled } =
//     event.target.elements;
//   // console.log(name.value);
//   // console.log(age.value);
//   // console.log(course.value);
//   // console.log(skills.value);
//   // console.log(email.value);
//   // console.log(isEnrolled.checked);
//   const data = {
//     name: name.value.trim(),
//     age: Number(age.value.trim()),
//     course: course.value.trim(),
//     skills: skills.value.trim(),
//     email: email.value.trim(),
//     isEnrolled: isEnrolled.checked,
//   };
//   // ! Add student
//   if (editOrAdd === null) {
//     addStudentApi(data)
//       .then(() => getStudents())
//       .then(renderStudents);
//   }
//   // ! Edit student
//   else if (editOrAdd === undefined) {
//      editStudentApi(editId, { id: Number(editId), ...data })
//     .then(() => getStudents())
//     .then(renderStudents)
//     .finally(() => {
//       editId = null;
//       event.target.reset();
//     });
//   }
//   // event.target.reset();
// });

// // Функція для додавання нового студента
// function addStudent(e) {
//   // твій код
// }

// // Функція для оновлення студента
// function updateStudent(id) {
//   const tr = document.getElementById(id);
//   if (!tr) return;

//   const name = tr.querySelector('[data-action="Name"]').textContent.trim();
//   const age = tr.querySelector('[data-action="Age"]').textContent.trim();
//   const course = tr.querySelector('[data-action="Course"]').textContent.trim();
//   const skills = tr.querySelector('[data-action="Skills"]').textContent.trim();
//   const email = tr.querySelector('[data-action="Email"]').textContent.trim();
//   const status = tr.querySelector('[data-action="CheckBox"]').textContent.trim();

//   formRef.elements.name.value = name;
//   formRef.elements.age.value = age;
//   formRef.elements.course.value = course;
//   formRef.elements.skills.value = skills;
//   formRef.elements.email.value = email;
//   formRef.elements.isEnrolled.checked = status === "Онлайн";
// }


// // Функція для видалення студента
// function deleteStudent(id) {
//   console.log(id);
//   delStudentApi(id)
//     .then(() => getStudents())
//     .then(renderStudents);
// }

// // TODO Clean code in // and make edit function



// ! Elements!
const getStudentsButton = document.querySelector("#get-students-btn");
const table = document.querySelector(".students-tbody");
const formRef = document.querySelector("#add-student-form");

let editOrAdd = null;

//! API Get Students
function getStudents() {
  return fetch(`http://localhost:3000/students`).then((res) => res.json());
}

// ! API Delete student
function delStudentApi(id) {
  return fetch(`http://localhost:3000/students/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

// ! API Add New student
function addStudentApi(student) {
  const options = {
    method: "POST",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`http://localhost:3000/students/`, options).then((res) =>
    res.json()
  );
}

// ! API Edit Student
function editStudentApi(id, student) {
  const options = {
    method: "PUT",
    body: JSON.stringify(student),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`http://localhost:3000/students/${id}`, options).then((res) =>
    res.json()
  );
}

// ! If we click to this button we will get our students
getStudentsButton.addEventListener("click", () => {
  getStudentsButton.style.display = "none";
  return getStudents().then(renderStudents);
});

// ! Render function
function renderStudents(students) {
  table.innerHTML = "";
  const rows = students
    .map(({ id, name, skills, isEnrolled, age, course, email }) => {
      const skillsList =
        skills && typeof skills === "object"
          ? Object.values(skills).join(", ")
          : String(skills ?? "");

      return `
        <tr id="${id}">
          <td>${id}</td>
          <td data-action="Name">${name}</td>
          <td data-action="Age">${age}</td>
          <td data-action="Course">${course}</td>
          <td data-action="Skills">${skillsList}</td>
          <td data-action="Email">${email}</td>
          <td data-action="CheckBox">${isEnrolled ? "Онлайн" : "Офлайн"}</td>
          <td>
            <button class="delete-students" data-action="Delete">Видалити студента</button>
            <button class="edit-students" data-action="Edit">Змінити дані студента</button>
          </td>
        </tr>
      `;
    })
    .join("");

  table.insertAdjacentHTML("beforeend", rows);
}

// ! If we click to this button we will delete one of our students OR edit
table.addEventListener("click", (event) => {
  if (event.target.dataset.action === "Delete") {
    const itemId = event.target.closest("tr").id;
    return deleteStudent(itemId);
  } else if (event.target.dataset.action === "Edit") {
    // ✅ було: const itemId = event.target.closest("tr")
    const itemId = event.target.closest("tr").id;
    editOrAdd = itemId;
    return updateStudent(itemId);
  }
});

// ! Submit form to add new student or edit student
formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, age, course, skills, email, isEnrolled } =
    event.target.elements;

  const data = {
    name: name.value.trim(),
    age: Number(age.value.trim()),
    course: course.value.trim(),
    skills: skills.value.trim(),
    email: email.value.trim(),
    isEnrolled: isEnrolled.checked,
  };

  // ! Add student
  if (editOrAdd === null) {
    return addStudentApi(data)
      .then(() => getStudents())
      .then(renderStudents)
      .finally(() => {
        event.target.reset();
      });
  }

  const id = editOrAdd;

  return editStudentApi(id, { id: Number(id), ...data })
    .then(() => getStudents())
    .then(renderStudents)
    .finally(() => {
      editOrAdd = null;
      event.target.reset();
    });
});

function updateStudent(id) {
  const tr = document.getElementById(id);

  const nameText = tr.querySelector('[data-action="Name"]').textContent.trim();
  const ageText = tr.querySelector('[data-action="Age"]').textContent.trim();
  const courseText = tr.querySelector('[data-action="Course"]').textContent.trim();
  const skillsText = tr.querySelector('[data-action="Skills"]').textContent.trim();
  const emailText = tr.querySelector('[data-action="Email"]').textContent.trim();
  const statusText = tr.querySelector('[data-action="CheckBox"]').textContent.trim();

  formRef.elements.name.value = nameText;
  formRef.elements.age.value = ageText;
  formRef.elements.course.value = courseText;
  formRef.elements.skills.value = skillsText;
  formRef.elements.email.value = emailText;
  formRef.elements.isEnrolled.checked = statusText === "Онлайн";
}

// Функція для видалення студента
function deleteStudent(id) {
  return delStudentApi(id)
    .then(() => getStudents())
    .then(renderStudents);
}
