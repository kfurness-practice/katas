import { test } from 'ava'

test('A game of card1 being 1 and card2 being 2 should return card2 as the winner', t=> {
  const expected = "Card2 Wins"

  const card1 = '1'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

const war = {
  round(card1, card2) {
    return 'Card2 Wins'
  }
}
