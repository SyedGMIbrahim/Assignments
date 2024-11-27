import React from "react";

function App() {
	const addTodo = () => {
		const title = document.getElementById("title").value;
		const description = document.getElementById("description").value;

		if (title && description) {
			const todoDiv = document.createElement("div");
			todoDiv.className = "todoItem";

			const titleElement = document.createElement("h3");
			titleElement.innerText = title;

			const descriptionElement = document.createElement("p");
			descriptionElement.innerText = description;

			todoDiv.appendChild(titleElement);
			todoDiv.appendChild(descriptionElement);

			// Corrected ID here
			document.getElementById("todoList").appendChild(todoDiv);

			document.getElementById("title").value = "";
			document.getElementById("description").value = "";
		}
	};

	return (
		<div className="App">
		<h1>TODO Application</h1>
		<input type="text" id="title" placeholder="Title" />
		<input type="text" id="description" placeholder="Description" />
		<button onClick={addTodo}>Add TODO</button>
		<div id="todoList" className="todoList"></div>
		</div>
	);
}

export default App;
