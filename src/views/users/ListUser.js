import React from "react";
import axios from 'axios';

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    async componentDidMount() {
        let list = await axios.get("https://reqres.in/api/users?page=2")
            .then(list => {
                console.log("check data: ", list.data.data)
                this.setState({
                    listUser: list && list.data && list.data.data ? list.data.data : []
                })
            })
    }

    render() {
        let listUser = this.state.listUser
        return (
            <>
                <div>
                    this is list users
                </div>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    So {index + 1} - {item.id} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>

            </>
        )
    }
}

export default ListUser