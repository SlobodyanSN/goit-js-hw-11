
import { fethcImg } from "./axios";
const input = document.querySelector(`#search-form`);
const gallery = document.querySelector(`.gallery`)

 function createMarkup(hits) {
       const listMarkup = 
       hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) => {
            return `<div class="photo-card">
            <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" width=320 height=240/></a>
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
       console.log(listMarkup);
      gallery.insertAdjacentHTML(`beforeend`,listMarkup); 
      }

input.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
event.preventDefault();
const serhcImg = event.target.elements.searchQuery.value.trim();
fethcImg(serhcImg)
.then(hits => {createMarkup(hits)})

};