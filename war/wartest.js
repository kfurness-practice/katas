import { test } from 'ava'

test('1: A game of card1 being 1 and card2 being 2 should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = '1'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('2: A game of card1 being 2 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '2'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('3: A game of card1 being 5 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '5'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('4: A game of card1 being 3 and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '3'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('5: A game of card1 being King and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = 'King'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('6: A game of card1 being Queen and card2 being King should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = 'Queen'
  const card2 = 'King'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('7 A game of card1 being King and card2 being Ace should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = 'King'
  const card2 = 'Ace'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('8 A game of card1 being 8and card2 being 8 should return call for a tie breaker function', t=> {
  const expected = undefined

  const card1 = '8'
  const card2 = '8'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

const war = {
  tieBreaker: function() {
    return
  },
  round: function(card1, card2) {
    const arr = []
    arr.push(card1, card2)
    const normalize = arr.map((card) => {
      switch (card) {
        case 'Ace' :
          return 14
        case 'King' :
          return 13
        case 'Queen' :
          return 12
        case 'Jack' :
          return 11
        default :
          return Number(card)
      }
    })
    if( normalize[0] === normalize[1] ) {
      war.tieBreaker()
      return
    }
    return normalize[0] > normalize[1] ? 'Card 1 Wins' : 'Card 2 Wins'
  }
}
