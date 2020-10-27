import React, { Component } from "react";
// import API from "../utils/API";
import axios from "axios";

class UserDirectory extends Component {
    state = {
        users: {}
    };
componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
    .then(res => {
        console.log(res);
        this.setState({users: res.data});
    })
}
//    users = query => {
//         API.search(query)
//             .then(res => this.setState({ result: res.data }))
//             .catch(err => console.log(err));
//             console.log(this.state.result);
//     };

    render() {
        return  <ul>
       {this.state.users.map(users => <li key={users.id}>{users.name}</li>)}
       </ul>
    
    
    }
}

export default UserDirectory;
