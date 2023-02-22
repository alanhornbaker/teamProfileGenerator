function generateEmployeeHTML(employee) {
  return `
		<section class="employee">
			<h2>${employee.name}</h2>
			<h3>${employee.role}</h3>
			<p>${employee.email}</p>
			<p>${employee.id}</p>
		</section>
	`;
}

function renderEmployees() {
  const employeeSections = document.querySelector("#employee-sections");

  employees.forEach((employee) => {
    const employeeHTML = generateEmployeeHTML(employee);
    employeeSections.insertAdjacentHTML("beforeend", employeeHTML);
  });
}

renderEmployees();
