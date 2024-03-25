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

function newDataInserted(){
	let tbody = document.getElementById("table-body");
	let newRow = tbody.insertRow(0);
	
	let cell0 = newRow.insertCell(0);
	cell0.innerHTML = empData.id;

	let cell1 = newRow.insertCell(1);
	cell1.innerHTML = empData.name;

	let cell2 = newRow.insertCell(2);
	cell3.innerHTML = empData.address;

	let cell3 = newRow.insertCell(3);
	cell4.innerHTML = empData.designation;

	let cell4 = newRow.insertCell(4);
	cell5.innerHTML = empData.department;

	let cell5 = newRow.insertCell(5);
	cell6.innerHTML = empData.salary;

	let cell6 = newRow.insertCell(6);
	cell6.innerHTML = `<button onclick="editEmpData(this)">EDIT</button>
					  <button onclick="deleteEmpData(this)">DELETE</button>`;

}

function clearFields(){
	id.value="";
	name.value="";
	address.value="";
	designation.value="";
	department.value="";
	salary.value="";
	selectedRow=null;
}

function editEmpData(obj){
	selectedRow = obj.parentElement.parenrElement;
	id.value = selectedRow.cells[0].innerHTML;
	name.value = selectedRow.cells[1].innerHTML;
	address.value = selectedRow.cells[2].innerHTML;
	designation.value = selectedRow.cells[3].innerHTML;
	department.value = selectedRow.cells[4].innerHTML;
	salary.value = selectedRow.cells[5].innerHTML;

}

function updateRow(empData){
 selectedRow.cells[0].innerHTML = id.value;
 selectedRow.cells[1].innerHTML = name.value;
 selectedRow.cells[2].innerHTML = address.value;
 selectedRow.cells[3].innerHTML = designation.value;
 selectedRow.cells[4].innerHTML = department.value;
 selectedRow.cells[5].innerHTML = salary.value;

}
