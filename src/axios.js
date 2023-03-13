import axios from 'axios';
import Notiflix from "notiflix";
const BASE_URL = `https://pixabay.com/api/?key=`;
const KEY = `34229211-437131f2e92cbbf7829eea8a9`
const limit_per_page = 40;
let page = 2;



export async function fethcImg(serhcImg) {
    try{
const response = await axios(`${BASE_URL}${KEY}`,{params:{
      
        q : `${serhcImg}`,
        image_type : `photo`,
        orientation : `horizontal`,
        safesearch : `true`,
        per_page: limit_per_page,
        page: page
}
})
if (response.status !== 200) {
    Notiflix.Notify.failure(`${response.statusText}`)
    return
}
if (response.data.total === 0 ) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
}

Notiflix.Notify.success(`Hooray! We found ${response.data.totalHits} images.`)
// console.log(response);
const hits = await response.data.hits
return hits
}
catch(error) {
    console.log(error);
}

}