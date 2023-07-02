import axios from "axios";
import { getWeatherRequest } from "./weatherRequest.api";
import { ServerData } from "../types/weatherResponseType.types";
import { locationServerResponse } from "../types/locationResponseType.types";
import { UserLoactionStorage } from "../types/userLocationStorageType.types";

const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
const token = "536c6b135859427ae5d135a6529b14afb36f2182";

export const getUserLocationRequest = (
  ip: string,
  getData: (data: ServerData | string | undefined) => void,
  setUserLocation: React.Dispatch<React.SetStateAction<UserLoactionStorage | null>>
) => {
  axios
    .get(url + ip, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + token
      }
    })
    .then((response: locationServerResponse) => {
      getWeatherRequest(response.data.location.data.city, getData);
      let userLocation = {
        city: response.data.location.data.city,
        country: response.data.location.data.country
      };
      setUserLocation(userLocation)
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
    })
    .catch((error) => {
      console.log(error);
      getData('Не удалось определить ваше местоположение(');
    });
};

