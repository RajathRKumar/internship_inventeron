let students = [
    { name: "Draco", marks: 85 },
    { name: "Smokie", marks: 72 },
    { name: "Lucifer", marks: 91 }
];

function showSection(section) {

    document.getElementById("homeSection").classList.add("d-none");
    document.getElementById("studentsSection").classList.add("d-none");
    document.getElementById("addSection").classList.add("d-none");

    if (section === "home") {
        document.getElementById("homeSection").classList.remove("d-none");
    }
    else if (section === "students") {
        document.getElementById("studentsSection").classList.remove("d-none");
        displayStudents();
    }
    else {
        document.getElementById("addSection").classList.remove("d-none");
    }
}


function displayStudents() {

    let container = document.getElementById("studentList");
    container.innerHTML = "";

    for (let i = 0; i < students.length; i++) {

        let grade;

        if (students[i].marks >= 90) {
            grade = "A";
        } else if (students[i].marks >= 75) {
            grade = "B";
        } else {
            grade = "C";
        }

        container.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card bg-light text-dark shadow-lg border-0">
                    <div class="card-body">
                        <h5 class="fw-bold">${students[i].name}</h5>
                        <p>Marks: ${students[i].marks}</p>
                        <span class="badge bg-primary">Grade: ${grade}</span>
                    </div>
                </div>
            </div>
        `;
    }
}


function addStudent() {

    let name = document.getElementById("name").value;
    let marks = parseInt(document.getElementById("marks").value);

    if (name === "" || isNaN(marks)) {
        alert("Please enter valid details!");
        return;
    }

    students.push({ name: name, marks: marks });

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";

    alert("Student Added Successfully!");
}