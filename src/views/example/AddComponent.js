import React from "react";
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitlejob = (event) => {
        this.setState({
            title: event.target.value
        })

    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = () => {
        if (!this.state.title || !this.state.salary) {
            alert("Need to fill all parameter");
            return;
        }
        this.props.addnewjob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: "",
            salary: ""
        })
    }

    render() {
        // var arr = ['a', 'b', 'c']
        // var arr2 = [...arr, 'd', 'e', 'f']

        // console.log(arr);
        // console.log(arr2)

        return (
            <>
                <form>
                    <label htmlFor="fname">Job Title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitlejob(event)}
                    /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    /><br /><br />
                    <input type="Button" value="Submit"
                        onClick={() => this.handleSubmit()}
                    />

                </form>
            </>
        )
    }
}

export default AddComponent