import { useState } from "react";

const TodoNew = (props) => {
    // const valueInput = "Hung";
    const [valueInput, setValueInput] = useState("Hung")

    const { addNewTodo, name, todoList } = props;

    const handleClick = () => {
        console.log(valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }

    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)} />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My text is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;