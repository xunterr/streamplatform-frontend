import apiClient from "./client";

const streamEndpoint = "photos"
const getStreams = (token) => apiClient(token).get(`/${streamEndpoint}`);
const getStream = (id) => apiClient().get(`/${streamEndpoint}/${id}`)
const getPhotos = (token) => apiClient(token).get("/photos")
export default {
    getStreams,
    getStream,
    getPhotos
};