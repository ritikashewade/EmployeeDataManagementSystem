let id = document.getElementById("id");
let name = document.getElementById("name");
let address = document.getElementById("address");
let designation = document.getElementById("designation");
let department = document.getElementById("department");
let salary = document.getElementById("salary");

let selectedRow = null

function empDataManagement(){
	let empData = fetchEmpData();
	if(selectedRow == null){
		displayData(employeeData);
	}
}

function fetchEmpData(){
	let empData={};
	empData.id = id.value;
	empData.name = name.value;
	empData.address = address.value;
	empData.designation = designation.value;
	empData.department = department.value;
	empData.salary = salary.value;

	return empData;
}

function displayData(){
	let tbody = document.getElementById("table-body");
	let newRow = tbody.insertRow(0);
	let cell0 = newRow.insertCell(0);
}