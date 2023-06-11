import apiClient from "./client";

const getMessages = () => apiClient().get("/comments");

export default {
    getMessages
};