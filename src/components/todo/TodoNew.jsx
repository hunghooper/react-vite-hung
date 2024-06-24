const TodoNew = (props) => {
    const { addNewTodo, name } = props;

    const handleClick = () => {
        alert(`click me`)
    }

    const handleOnChange = (name) => {
        console.log(`check onChange value ${name}`)
    }

    return (
        <div className="todo-new">
            <input
                type="text"
                onChange={(event) => handleOnChange(event.target.value)} />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;