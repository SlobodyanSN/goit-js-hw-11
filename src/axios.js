import axios from 'axios';
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
return response.data
}
catch(error) {
    console.log(error);
}

}