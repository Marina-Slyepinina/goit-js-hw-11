import axios from "axios";

const myApiKey = "49653024-3e206daf7693dc60176f31220";

export function getImagesByQuery(query) {
    return axios.get("https://pixabay.com/api/", {
        params: {
            key: myApiKey,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })

}   