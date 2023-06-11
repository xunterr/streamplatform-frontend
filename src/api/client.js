import axios from "axios";

const apiClient = (token) => {
    var client =  axios.create({
        // Later read this URL from an environment variable
        baseURL: "https://jsonplaceholder.typicode.com",
    })
    if(token){
        client.defaults.headers.common['Authorization']=token;
    }
    return client;
};

export default apiClient;