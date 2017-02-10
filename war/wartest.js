import { test } from 'ava'

test('1a: A game of card1 being 1 and card2 being 2 should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = '1'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('2a: A game of card1 being 2 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '2'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('3a: A game of card1 being 5 and card2 being 1 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '5'
  const card2 = '1'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('4a: A game of card1 being 3 and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = '3'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('5a: A game of card1 being King and card2 being 2 should return card1 as the winner', t=> {
  const expected = "Card 1 Wins"

  const card1 = 'King'
  const card2 = '2'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('6a: A game of card1 being Queen and card2 being King should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = 'Queen'
  const card2 = 'King'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('7a A game of card1 being King and card2 being Ace should return card2 as the winner', t=> {
  const expected = "Card 2 Wins"

  const card1 = 'King'
  const card2 = 'Ace'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('8a A game of card1 being 8and card2 being 8 should return call for a tie breaker function', t=> {
  const expected = undefined

  const card1 = '8'
  const card2 = '8'

  const actual = war.round(card1, card2)

  t.is(actual, expected)
})

test('1b: Should contain a deck of 52 cards', t=> {
  const expected = 52

  const actual = war.deck.length

  t.is(actual, expected)
})

test('2b: Should split the deck in half and give player1 26 cards', t=> {
  const expected = 26

  const actual = war.playerCards.player1Cards().length

  t.is(actual, expected)
})

test('3b: Should randomize the deck of cards', t=> {
  const expected = war.deck

  const actual = war.randomizeDeck(war.deck)

  t.not(actual, expected)
})

test('4a: First battle should return first card from each player deck', t=> {
  const player1Cards = ['3 of Hearts', 'Jack of Clubs']
  const player2Cards = ['2 of Clubs', 'King of Clubs']
  const expected = {player1: '3 of Hearts', player2: '2 of Clubs'}

  const actual = war.playCards(player1Cards, player2Cards)

  console.log({expected});
  console.log({actual});

  t.deepEqual(actual, expected)
})


const war = {
  deck: ['Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', '5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs','10 of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs',  'Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts', 'Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds', 'Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', '5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs', '10 of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs'],

  randomizeDeck: function(deck) {
    const randomDeck = deck.slice()
    for (var i = randomDeck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = randomDeck[i];
        randomDeck[i] = randomDeck[j];
        randomDeck[j] = temp;
    }
    return randomDeck;
  },

  playerCards: {
    deck: function(deck) {
      return war.randomizeDeck(deck)
      },
    player1Cards: function() {
      return war.playerCards.deck(war.deck).slice(0, 26)
    },
    player2Cards: function() {
      return war.playerCards.deck(war.deck).slice(26, 52)
    },
  },

  playCards: function(player1Cards, player2Cards) {
    const round = {player1: player1Cards[0], player2: player2Cards[0]}
    return round
  },

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
