import axios from 'axios';
const BASE_URL = `https://pixabay.com/api/?key=`;
const KEY = `34229211-437131f2e92cbbf7829eea8a9`
 export const limit_per_page = 40;




export async function fethcImg(serhcImg, page = 1) {
 
const response = await axios(`${BASE_URL}${KEY}`,{params:{
      
        q : `${serhcImg}`,
        image_type : `photo`,
        orientation : `horizontal`,
        safesearch : `true`,
        per_page: limit_per_page,
        page: page
}
})
const data = await response.data
return data
} 





