import React, { Component } from 'react';
import API from "../utils/API";
import ResultUser from './ResultUser/resultuser';

class Action extends Component {
    state = {
        results: []
    };

    componentDidMount(){
        this.searchUsers("results");
    }
    searchUsers = query => {
        API.searchUsers(query)
        .then(res => this.setState({ results: res.data.data}))
        .catch(err => console.log(err));
    };
    render() {
        const { results } = this.state;
        return (
            <div>
            <ResultUser results={results} />
            </div>
        )
    }
}
export default Action;