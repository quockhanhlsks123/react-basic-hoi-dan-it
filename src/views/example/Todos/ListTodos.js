import React from "react";
import "./listTodo.scss";
import AddTodo from "./AddTodo";


class ListTodo extends React.Component {

    state = {
        listTodo: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ]
    }

    addNewTodo = (todo) => {

        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
    }

    render() {

        let showlist = this.state.listTodo;

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
                                    <span> {index + 1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete">Delete</button>
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
