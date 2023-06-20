import { makeAutoObservable } from 'mobx';

class TempUnitStore {
  tempUnit: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  initTempUnit = (unit: string) => {
    this.tempUnit = unit;
  };

  changeTempUnit = () => {
    if (this.tempUnit === 'C') {
      this.tempUnit = 'F';
      localStorage.setItem('tempUnit', 'F');
    } else {
      this.tempUnit = 'C';
      localStorage.setItem('tempUnit', 'C');
    }
  };
}

export default new TempUnitStore();
