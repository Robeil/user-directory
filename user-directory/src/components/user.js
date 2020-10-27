import React, { Component } from "react";
// import UserDirectory from '../utils/API';
class User extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>User Directory</h1>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th >Email</th>
                            <th >DOB</th>
                        </tr>
                        <tr>
                            <td>Picture</td>
                            <td>Soli</td>
                            <td>Rob</td>
                            <td>Solishikor1@gmail.com</td>
                            <td>03/06/2019</td>
                        </tr>
                    </thead>
                </table>
                <div>
                    
                    {/* <UserDirectory />*/}
                </div>
            </div>
        )
    }
}

//  use loop or something that can loop the data from api 
export default User;