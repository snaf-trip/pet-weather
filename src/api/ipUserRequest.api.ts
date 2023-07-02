import axios from "axios";
import { ipServerResponse } from "../types/ipResponseType.types";
import { ServerData } from "../types/weatherResponseType.types";
import { getUserLocationRequest } from "./userLocationRequest.api";
import { UserLoactionStorage } from "../types/userLocationStorageType.types";

export const ipGetter = (
  getData: (data: ServerData | string | undefined) => void,
  setUserLocation: React.Dispatch<React.SetStateAction<UserLoactionStorage | null>>
) => {
  axios('https://ipapi.co/json/')
    .then((response: ipServerResponse) => {
      getUserLocationRequest(response.data.ip, getData, setUserLocation);
    })
    .catch(error => {
      console.log(error);
      getData('Не удалось определить ваше местоположение(');
    })
}
