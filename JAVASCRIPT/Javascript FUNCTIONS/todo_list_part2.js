var todos = ["Buy new books"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
	// handle input
	if(input === "list") {
		listTodos();
	}
	else if(input === "new") {
	// ask for new todo
		addTodo()
	}
	else if(input === "delete") {
		deleteTodo()
	}

	// ask again for new input
	input = prompt("What would you like to do?");
}
console.log("Okay, you've quit the app");

function listTodos() {
	console.log("**********");
	todos.forEach(function(todo, i) {
		console.log(i + ":" + todo);
	});
	console.log("**********");
}

function addTodo() {
	// ask for new Todo
	var newTodo = prompt("Enter new Todo");
	// add to Todos array
	todos.push(newTodo);
	console.log("Added Todo");
}


function deleteTodo() {
	// ask for index of Todo to be deleted
	var index = prompt("Enter index of Todo to be deleted");
	// delete that Todo
	// splice()
	todos.splice(index, 1);
	console.log("Deleted Todo"); 
}