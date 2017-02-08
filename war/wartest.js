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

test('3: A game of card1 being 5 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card1 Wins"

  const card1 = '5'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('4: A game of card1 being 3 and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card1 Wins"

  const card1 = '3'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('5: A game of card1 being King and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card1 Wins"

  const card1 = 'king'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

const war = {
  round(card1, card2) {
    if( card1 === 'king') {
      return 'Card1 Wins'
    }
    const card1Int = Number(card1)
    const card2Int = Number(card2)
    return card1Int > card2Int ? 'Card1 Wins' : 'Card2 Wins'
  }
}
