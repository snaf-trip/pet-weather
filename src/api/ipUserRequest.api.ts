import axios from "axios";
import { ipServerResponse } from "../types/ipResponseType.types";
import { ServerData } from "../types/weatherResponseType.types";
import { getUserLocationRequest } from "./userLocationRequest.api";


export const ipGetter = (getData: (data: ServerData | undefined) => void) => {
  axios('https://ipapi.co/json/')
    .then((response: ipServerResponse) => {
      getUserLocationRequest(response.data.ip, getData);
    })
    .catch(error => { console.log(error) })
}
