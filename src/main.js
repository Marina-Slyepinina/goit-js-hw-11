import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api"
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions"

const form = document.querySelector(".form");
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    iziToast.destroy();
    clearGallery();
    showLoader()
    event.preventDefault();
    
    
    const userValue = event.target.elements["search-text"].value.toLowerCase();

    if (userValue.trim() === "") {
        hideLoader();
        return iziToast.show({message: "Search query cannot be empty"});
    }

    getImagesByQuery(userValue)
    .then(response => {
        hideLoader();
        if (response.data.hits.length) {
            const arrImg = response.data.hits;
            createGallery(arrImg);
            return;
        }
        
        iziToast.show({
            message: "Sorry, there are no images matching your search query. Please try again!",
            backgroundColor: '#EF4040',
            position: 'center',
            messageColor: '#fafafb',
            messageSize: '16px',
            progressBarColor: '#b51b1b'
        });
    })
    .catch(error => {
        iziToast.show({
            message: error.message,
            backgroundColor: '#EF4040',
            position: 'center',
            messageColor: '#fafafb',
            messageSize: '16px',
            progressBarColor: '#b51b1b'
        });
    })

    form.reset();
}