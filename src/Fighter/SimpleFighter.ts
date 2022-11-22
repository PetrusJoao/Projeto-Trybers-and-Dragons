export default interface SimpleFighter {
  lifePoints: number,
  strength: number,

  attack(enemy: SimpleFighter): void
  receiveDamage(attackPoints: number): number
}

// export interface Attack {
//   attack(enemy: SimpleFighter): void
// }
// 
// export interface ReceiveDamage {
//   receiveDamage(attackPoints: number): number
// }