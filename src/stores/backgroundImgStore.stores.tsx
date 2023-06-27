import { makeAutoObservable } from 'mobx';

class BackgroundImgStore {
  imgUrl: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  changeImgUrl = (url: string) => {
    this.imgUrl = url;
  };
}

export default new BackgroundImgStore();
