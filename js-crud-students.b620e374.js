const getStudentsButton=document.querySelector("#get-students-btn"),table=document.querySelector(".students-tbody");function getStudents(){return fetch("http://localhost:3000/students").then(t=>t.json())}function renderStudents(t){table.innerHTML="";let e=t.map(({id:t,name:e,skills:n,isEnrolled:d,age:u,course:s,email:o})=>{let l=n>"1"?Object.values(n).join(", "):"He/she did not have skils";return`
        <tr>
          <td>${t}</td>
          <td>${e}</td>
          <td>${u}</td>
          <td>${s}</td>
          <td>${l}</td>
          <td>${o}</td>
          <td>${d?"Так":"Ні"}</td>
          <td><button class="delete-students">\u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438} \u{441}\u{442}\u{443}\u{434}\u{435}\u{43D}\u{442}\u{430}</button></td>
        </tr>
      `}).join("");table.insertAdjacentHTML("beforeend",e)}function addStudent(t){}function updateStudent(t){}function deleteStudent(t){console.log("Yes?")}getStudentsButton.addEventListener("click",t=>getStudents().then(renderStudents)),table.addEventListener("click",t=>{if(t.target.closest("button.delete-students"))return fetch("http://localhost:3000/students",{method:"DELETE"}).then(()=>deleteStudent)});
//# sourceMappingURL=js-crud-students.b620e374.js.map
