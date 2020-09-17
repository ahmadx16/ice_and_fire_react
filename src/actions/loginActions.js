import axios from 'axios';

const loginAction = async (userName, password) => {
    // makes post request to backend and returns user token

    const user = {
        username: userName,
        password: password
    }

    try {
        const loginResponse = await axios.post('http://localhost:8080/users/login', user);
        if (loginResponse.data.token) {
            return {token: loginResponse.data.token};
        } else {
            return {error:"login Error"};
        }

    } catch (err) {
        return {error:err.response}
    }

}

export default loginAction;
