import { Dispatch, SetStateAction } from "react";
import { ServerData, ServerResponse } from "../weatherResponseType";
import axios from "axios";

const url = 'https://api.weatherapi.com/v1/current.json?key=41dab428dc624be0b63184944231406&q=Чебоксары&aqi=no';

export const getWeatherRequest = (
  setWeatherData: Dispatch<SetStateAction<ServerData | undefined>>
) => {
  axios
    .get(url)
    .then((response: ServerResponse) => {
      setWeatherData(response.data);
    })
    .catch((error: any) => console.log(error));
};
