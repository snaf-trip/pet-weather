import { makeAutoObservable } from 'mobx';
import { ServerData } from '../types/weatherResponseType.types';

class WeatherDataStore {
  data: ServerData | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  getData = (data: ServerData | undefined) => {
    this.data = data;
  };
}

export default new WeatherDataStore();
