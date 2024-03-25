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