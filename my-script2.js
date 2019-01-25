//create count in the database 
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update html to relfect datase count 
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}
update()

//add one to count 
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count 
function reset() {
	if (confirm("Don't give up! Just keep trying!")) {
		localStorage.setItem("count",0);
		update();
	}
}