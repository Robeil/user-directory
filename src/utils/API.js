import axios from 'axios';

const getUsers = {
  getUsers: function () {
    return axios.get('https://randomuser.me/api/?results=100&nat=us&inc=name,email,phone,login,picture');
  }
}

export default getUsers;