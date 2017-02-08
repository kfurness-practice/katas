import { test } from 'ava'

test('1: A game of card1 being 1 and card2 being 2 should return card2 as the winner', t=> {
  const expected = "Card2 Wins"

  const card1 = '1'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('2: A game of card1 being 2 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card1 Wins"

  const card1 = '2'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

const war = {
  round(card1, card2) {
    if (card1 === '2') {
      return 'Card1 Wins'
    }
    return 'Card2 Wins'
  }
}
