import axios from 'axios';

// // Gets all users
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function () {
        return (
            axios.get("https://randomuser.me/api/?results=200&nat=us")
    )
    }
};
