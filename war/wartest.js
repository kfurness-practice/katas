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

test('6: A game of card1 being Queen and card2 being King should return card2 as the winner', t=> {
  const expected = "Card2 Wins"

  const card1 = 'queen'
  const card2 = 'king'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('7 A game of card1 being King and card2 being Ace should return card2 as the winner', t=> {
  const expected = "Card2 Wins"

  const card1 = 'king'
  const card2 = 'ace'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

const war = {
  round(card1, card2) {
    const arr = []
    arr.push(card1, card2)
    const normalize = arr.map((card) => {
      switch (card) {
        case 'ace' :
          return 14
        case 'king' :
          return 13
        case 'queen' :
          return 12
        case 'jack' :
          return 11
        default :
          return Number(card)
      }
    })

    return normalize[0] > normalize[1] ? 'Card1 Wins' : 'Card2 Wins'
  }
}
