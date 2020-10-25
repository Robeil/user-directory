import React, { Component } from "react";

class User extends Component {
    render() {
        return (
            <div className="container">
            <h1>Sample of users for now</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Users</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>DOB</th>
                        </tr>
                        <tr>
                            <td>Picture</td>
                            <td>Soliana</td>
                            <td>Robeil</td>
                            <td>Solishikor1@gmail.com</td>
                            <td>03/06/2019</td>

                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}
export default User;