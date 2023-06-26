import axios from "axios";

export const backgroundImgRequest = () => {
  axios.get('https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages|pageterms&piprop=original&&origin=*&titles=Dubai')
    .then((response: any) => console.log(response))
    .catch((error: any) => console.log(error))
};
