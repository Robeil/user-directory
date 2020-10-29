import React from 'react';

class Container extends React.Component {
    render(props) {
        return (
            <div>
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
            </div>
        )
    }
}

export default Container;