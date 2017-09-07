import { Rank } from 'game/rank'
import Sheep from 'game/sheep'

export default class Board {
  readonly field: Sheep[]
  readonly stocks: Map<Rank, Sheep[]>

  constructor () {
    this.field = [
      new Sheep(1),
      new Sheep(3),
      new Sheep(1000),
      new Sheep(30)
    ]

    this.stocks = new Map()
    this.stocks.set(1, [new Sheep(1), new Sheep(1)])
    this.stocks.set(3, [new Sheep(3)])
    this.stocks.set(10, [new Sheep(10), new Sheep(10), new Sheep(10)])
  }
}
