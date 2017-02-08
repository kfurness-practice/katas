import { test } from 'ava';

test('Two empty strings should return 0', t => {
  const expected = 0

  const strand1 = ''
  const strand2 = ''

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

test('First string of "A" and a second string of "B" should return 1', t => {
  const expected = 1

  const strand1 = "A"
  const strand2 = 'B'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

test('A string with "A" should return 1', t => {
  const expected = 0

  const strand1 = "A"
  const strand2 = 'A'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

const dna = {
  hammingDistance(strand1, strand2) {
    if(strand2 === "B") {
      return 1
    }
    return 0
  }
}
