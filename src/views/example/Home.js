import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";

class Home extends React.Component {

    componentDidMount = () => {
        // setTimeout(() => {
        //     this.props.history.push("/todo")
        // }, 3000)
    }

    render() {
        return (
            <>
                <p>Hello world from Homepage with hoidanit</p>
            </>
        )
    }
}

export default Color(Home)