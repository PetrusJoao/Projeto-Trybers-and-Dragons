import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _qtdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._qtdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return this._qtdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}