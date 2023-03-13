
import { fethcImg } from "./axios";
const input = document.querySelector(`#search-form`);
const gallery = document.querySelector(`gallery`)

 function createMarkup(hits) {
       const listMarkup = 
       hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) => {
            return `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>${likes}</b>
    </p>
    <p class="info-item">
      <b>${views}</b>
    </p>
    <p class="info-item">
      <b>${comments}</b>
    </p>
    <p class="info-item">
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