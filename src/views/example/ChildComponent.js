import React from "react";
import "./demo.scss"


class ChildComponent extends React.Component {
    state = {
        showjobs: false,
        showX: true
    }

    handleShowHide = () => {
        this.setState({
            showjobs: !this.state.showjobs
        })
    }

    handleOnclickDetete = (item) => {
        this.props.deleteAjob(item)
    }

    handleOnclickDetail = () => {
        this.setState({
            showX: !this.state.showX
        })
    }

    render() {
        let { abc } = this.props;
        console.log("check props", this.props);
        let { showjobs, showX } = this.state;

        return (
            <>
                {showjobs === false ?
                    <button
                        onClick={() => this.handleShowHide()}
                        className="btn_show">Show</button>
                    :
                    showjobs &&
                    <>
                        <div className="job-list">
                            {
                                abc.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <> </>
                                            {showX === true &&
                                                <span onClick={() => this.handleOnclickDetete(item)}>X</span>
                                            }

                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button onClick={() => this.handleShowHide()}>Hide</button>
                        <span>
                            <button onClick={() => this.handleOnclickDetail()}>Detail</button>
                        </span>

                    </>
                }

            </>

        )
    }
}



// const ChildComponent = (props) => {
//     let { abc } = props
//     Handleshow = (event) => {
//         console.log(event);
//     }
//     return (
//         <div className="job-list">
//             <button onClick={(event) => this.Handleshow(event)}>Show</button>
//             {
//                 abc.map((item, index) => {
//                     if (item.salary > 450) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     }

//                 })
//             }
//         </div>
//     )
// }

export default ChildComponent;