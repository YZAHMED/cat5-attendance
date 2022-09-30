console.log("Hello World");


const employees = ["Mohammed Hamza", "Adil Abbas"];

const employeesEl = document.getElementById('employees');
const hamza = document.getElementById('hamzabtn');
const available = document.getElementById('available');
const d = new Date()


console.log(employees.length);

hamza.addEventListener('click', function () {
    available.innerHTML += `<li> Hamza: ${d}</li>`
})
