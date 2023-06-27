import axios from "axios";
import BackgroundImgStore from '../stores/backgroundImgStore.stores'

export const backgroundImgRequest = (
  location: string,
) => {
  const { changeImgUrl } = BackgroundImgStore;
  axios.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&&origin=*&titles=${location}`)
    .then((response: any) => {
      changeImgUrl(response.data.query.pages[0].original.source);
    })
    .catch((error: any) => console.log(error))
};
