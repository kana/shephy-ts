import { Rank } from 'game/rank'

export default class Sheep {
  readonly rank: Rank

  constructor (rank: Rank) {
    this.rank = rank
  }
}
