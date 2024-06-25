const TodoData = (props) => {
    const { todoList, delteteTodo } = props;
    const handleClick = (id) => {
        delteteTodo(id);

    }
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item">
                        <div>
                            {item.name}
                        </div>
                        <button
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}
                        >Delete
                        </button>
                    </div>
                )
            })}
        </div >
    )
}

export default TodoData;