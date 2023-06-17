import { makeAutoObservable } from 'mobx';
import { ServerData } from '../weatherResponseType';

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
