
import { fethcImg } from "./axios";
const input = document.querySelector(`#search-form`);
const gallary = document.querySelector(`gallery`)


function createMarkup(response) {
      const listMarkup =
       response.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads
        }) => {
            const string =
            `   <div class="photo-card">
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
</div>`;
         return string;
         }
        )
        .join(` `);
     
        gallary.insertAdjacentHTML(`beforeend`, listMarkup);   
        }

// webformatURL - посилання на маленьке зображення для списку карток.
// largeImageURL - посилання на велике зображення.
// tags - рядок з описом зображення. Підійде для атрибуту alt.
// likes - кількість лайків.
// views - кількість переглядів.
// comments - кількість коментарів.
// downloads - кількість завантажень.


input.addEventListener(`submit`, onSubmit);
function onSubmit(event) {
event.preventDefault();
const serhcImg = event.target.elements.searchQuery.value;
console.log(serhcImg);
fethcImg(serhcImg)
.then(response => createMarkup(response));
}