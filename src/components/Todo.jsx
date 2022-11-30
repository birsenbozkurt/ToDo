import React from "react";
import { GrFormClose, GrEdit, GrFormCheckmark } from "react-icons/gr";

const Todo = ({ todo }) => {
	return (
		<div className="todo-row">
			<div>{todo.content}</div>
			<div className="todo-icons"></div>
		</div>
	);
};

export default Todo;
