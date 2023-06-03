import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponents extends React.Component {
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'developer', salary: 500 },
            { id: 'abcJob2', title: 'Testers', salary: 400 },
            { id: 'abcJob3', title: 'Manager', salary: 1000 },


        ]
    }

    addnewjob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
        console.log("check job from parent: ", job)
    }

    deleteAjob = (job) => {
        let currentjob = this.state.arrJobs
        currentjob = currentjob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentjob
        })
        console.log("new job list: ", job)
    }

    componentDidUpdate(prevProp, PrevState) {
        console.log("Prev props: ", PrevState, "Prev State: ", this.state);
    }

    componentDidMount() {
        console.log("return as function");
    }

    render() {
        console.log("call render", this.state);
        return (
            <>
                <AddComponent addnewjob={this.addnewjob}
                />


                <ChildComponent
                    abc={this.state.arrJobs}
                    deleteAjob={this.deleteAjob}
                />

            </>

        )
    }
}

export default MyComponents;