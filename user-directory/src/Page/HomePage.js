import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Header from '../components/Header';
import Container from '../components/Container';
import Column from '../components/Column';
import Row from '../components/Row';
import Button from '../components/Button';
import API from '../utils/API'
//import ResultUser from "../utils/ResultUser/resultuser";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'name',
            profile: '',
            firstName: '',
            lastName: '',
            email: '',
            dob: ''
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Container />
            </div>
        );
    };
};

export default HomePage;