import axios from "axios";

export const backgroundImgRequest = () => {
  axios.get('https://wikimedia-image-search.p.rapidapi.com/wiki/', {
    params: {
      query: 'Екатеринбург',
      results: '1',
      page: '1'
    },
    headers: {
      'X-RapidAPI-Key': '800cc2adabmsh01337b748222354p14e843jsnfdcc3b862d81',
      'X-RapidAPI-Host': 'wikimedia-image-search.p.rapidapi.com'
    }
  }).then((response: any) => console.log(response)).catch((error: any) => console.log(error))
};
