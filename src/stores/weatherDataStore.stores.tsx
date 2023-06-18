import { makeAutoObservable } from 'mobx';
import {
  ServerData,
  WeatherServerResponseError,
} from '../types/weatherResponseType.types';

class WeatherDataStore {
  data: ServerData | string | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getData = (data: ServerData | string | undefined) => {
    this.data = data;
  };
}

export default new WeatherDataStore();
