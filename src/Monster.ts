import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this._lifePoints < 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; } 
}