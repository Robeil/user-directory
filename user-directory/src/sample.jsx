import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
            myCar: 'Toyota'
        };
    }
    changeColor = () => {
        this.setState({ color: "yellow" });
    }

    render() {
        return (
            <div>
            {/*this will help to redner the users from the api.js */}
               <select value={this.state.myCar}>
                <option value="Ford">Ford</option>
                <option value="Volvo" selected>Volvo</option>
                <option value="Fiat">Fiat</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
            </select>
                <h1 style={{color: "green"}}>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
            from {this.state.year}.
          </p>
                <button
                    type="button"
                    onClick={this.changeColor}
                >change color</button>
            </div>
        );
    }
}

export default Car;



// import React from 'react'
// import Col from '../Col'
// import Row from '../Row'
// import Container from '../Container'
// import { useEffect } from 'react'
// import API from '../../utils/API'

//   // listItem renders a bootstrap list item containing data from the employee api call
// function List({ picture, name, email, dob }) {

//     useEffect(() => {
//         API.getUsers()
//           .then((res) => console.log(res.data.results))
//           .catch((err) => console.log(err));
//       }, []);

// return (
//         <Container>
//             <image image={picture}/>
//             <ul>
//                 <li>
//                     {name}
//                 </li>
//                 <li>
//                     {email}
//                 </li>
//                 <li>
//                     {dob}
//                 </li>
//             </ul>
//         </Container>
//     )
// };

