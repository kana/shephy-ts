import Sheep from 'game/sheep'

export default class Board {
  readonly field: Sheep[]

  constructor () {
    this.field = [
      new Sheep(1),
      new Sheep(3),
      new Sheep(1000),
      new Sheep(30)
    ]
  }
}
