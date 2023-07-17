import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("asdasdasd");
    }

    handledeleteTodo = (todo) => {
        let currentTodo = this.state.listTodo
        currentTodo = currentTodo.filter(item => item.id != todo.id)
        this.setState({
            listTodo: currentTodo
        })
        toast.success("delete successed")
    }

    handleOnChange = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
        // console.log("check", editTodoCopy)
    }

    handleEditTodo = (todo) => {
        let editTodo = this.state.editTodo;
        let listTodos = this.state.listTodo;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        console.log("check IsEmpty: ", isEmptyObj)
        console.log(editTodo.id, " - ", todo.id)
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]

            let ObjIndex = listTodosCopy.findIndex(item => item.id === todo.id);

            listTodosCopy[ObjIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: true
            })
            toast.success("Edit successed ");
            return;
        }
        this.setState({
            editTodo: todo
        })
    }

    render() {
        let showlist = this.state.listTodo;
        let editTodo = this.state.editTodo;
        const isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />

                <div className="list-todo-content">
                    {showlist && showlist.length > 0 &&
                        showlist.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id == item.id ?
                                                <span>
                                                    {index + 1} - <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChange(event)} />
                                                </span>
                                                :
                                                <span> {index + 1} - {item.title}</span>
                                            }

                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?

                                            "Save"
                                            :
                                            "Edit"
                                        }
                                    </button>

                                    <button className="delete"
                                        onClick={() => this.handledeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })

                    }

                </div>

            </div>
        )
    }
}

export default ListTodo;
