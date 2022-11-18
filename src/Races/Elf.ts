import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _qtdRacesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._qtdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return this._qtdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}