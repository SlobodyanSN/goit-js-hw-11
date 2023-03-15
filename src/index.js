
import Notiflix from "notiflix";
import { fethcImg } from "./axios";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const input = document.querySelector(`#search-form`);
const gallery = document.querySelector(`.gallery`);
const load_more = document.querySelector(`.load-more`);
load_more.hidden = true;
let page = 1;

const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 500,
  captionsData: 'alt'});

function clearGalery() {
  gallery.innerHTML = ``;
}

 function createMarkup(data) {
       const listMarkup = 
       data.hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads
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
     
      load_more.hidden = false;
      return data
      }

input.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
  clearGalery()
event.preventDefault();
const serhcImg = event.target.elements.searchQuery.value.trim();
if (serhcImg ==="") {
  throw new Error(
  Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))

}
fethcImg(serhcImg, page)
.then(data => {createMarkup(data)})
.catch(error)

load_more.addEventListener(`click`, addPage);
function addPage() {
page +=1
fethcImg(serhcImg, page)
.then(data => {createMarkup(data)})
.catch(error) 
  
}

}

