import axios from 'axios';

const loginAction = async (userName, password) => {
    // makes post request to backend and returns user token

    const user = {
        username: userName,
        password: password
    }

    try {
        const loginResponse = await axios.post('http://localhost:8080/users/login', user);
        return { token: loginResponse.data.token };

    } catch (err) {
        // No response indicating a network error
        if (!err.response) {
            return { error: "Network Error: Cannot connect to localhost backend at port 8080" }
        }

        if (err.response.status === 400)
            return { error: "Cannot Login with provided credentials" }

        return { error: "An Error occured, Please contact support" }
    }
}

export default loginAction;
