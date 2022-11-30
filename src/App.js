import React, { useState } from "react";
import { useTodoLayerValue } from "./context/TodoContext";
import TodoList from "./components/TodoList";

const App = () => {
	const [{ todos }, dispatch] = useTodoLayerValue();
	const [content, setContent] = useState("");

	const handleSubmit = (event) => {
		console.log(content);
		event.preventDefault();

		if (!content) return;

		const newTodo = {
			id: Math.floor(Math.random() * 4551515),
			content,
			isCompleted: false,
		};

		dispatch({
			type: "ADD_TODO",
			payload: newTodo,
		});

		setContent("");
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="todo-form">
				<input type="todo input" className="todo-input" onChange={(event) => setContent(event.target.value)} value={content} />
				<button className="todo-button">Ekle</button>
			</form>
			{/* Todo List */}
			<TodoList todos={todos} />
		</div>
	);
};

export default App;
