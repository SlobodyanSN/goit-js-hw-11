
import Notiflix from "notiflix";
import { fethcImg } from "./axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector(`#search-form`);
const gallery = document.querySelector(`.gallery`)

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 500,
  captionsData: 'alt'});

function clearGalery() {
  gallery.innerHTML = ``;
}

 function createMarkup(hits) {
       const listMarkup = 
       hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) => {
            return `<div class="photo-card">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" width=300 height=200/></a>
            <div class="info">
            <p class="info-item">Likes: 
              <b>${likes}</b>
            </p>
              <p class="info-item">Views: 
                <b>${views}</b>
              </p>
              <p class="info-item">Comments: 
                <b>${comments}</b>
              </p>
              <p class="info-item">Downloads:
                <b>${downloads}</b> 
              </p>
            </div>
          </div>` }).join("");
     
      gallery.insertAdjacentHTML(`beforeend`,listMarkup); 
      }

input.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
  clearGalery()
event.preventDefault();
const serhcImg = event.target.elements.searchQuery.value.trim();
if (serhcImg ==="") {
  Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
  return
}
fethcImg(serhcImg)
.then(hits => {createMarkup(hits)})

};