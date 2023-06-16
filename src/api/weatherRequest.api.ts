import { ServerData, ServerResponse } from "../weatherResponseType";
import axios from "axios";

const url = 'https://api.weatherapi.com/v1/current.json?key=41dab428dc624be0b63184944231406&q=Екатеринбург&aqi=no';

export const getWeatherRequest = (
  sity: string,
  getData: (data: ServerData) => void
) => {
  axios
    .get(`https://api.weatherapi.com/v1/current.json?key=41dab428dc624be0b63184944231406&q=${sity}&aqi=no`)
    .then((response: ServerResponse) => {
      getData(response.data);
    })
    .catch((error: any) => console.log(error));
};
