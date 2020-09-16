import axios from 'axios';

const loginAction = async (userName, password) => {
    // makes post request to backend and returns user token

    const user = {
        username: userName,
        password: password
    }

    try {
        const loginResponse = await axios.post('http://localhost:8080/users/login', user);
        return loginResponse.data.token;

    } catch (err) {
        console.log(err.response)
    }

}

export default loginAction;
