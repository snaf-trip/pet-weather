import { makeAutoObservable } from 'mobx';
import { ServerData } from '../weatherResponseType';

class WeatherDataStore {
  data: ServerData | undefined = undefined;

  constructor() {
    // makeObservable(this, {
    //   data: observable,
    //   getData: action,
    // });
    makeAutoObservable(this);
  }

  getData = (data: ServerData) => {
    this.data = data;
  };
}

export default new WeatherDataStore();
