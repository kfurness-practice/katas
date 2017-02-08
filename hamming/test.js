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

  const strand1 = 'A'
  const strand2 = 'B'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

test('First string of "A" and a second string of "A" should return 0', t => {
  const expected = 0

  const strand1 = 'A'
  const strand2 = 'A'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

test('First string of "GGACTGA" and a second string of "GGACTGA" should return 0', t => {
  const expected = 0

  const strand1 = 'GGACTGA'
  const strand2 = 'GGACTGA'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

test('First string of "ACT" and a second string of "GGA" should return 0', t => {
  const expected = 3

  const strand1 = 'ACT'
  const strand2 = 'GGA'

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})


const dna = {
  hammingDistance(strand1, strand2) {
    let mutations = 0
    for(let i = 0; i < strand1.length; i++) {
      if (strand1[i] != strand2[i]) {
        mutations++
      }
    }
    return mutations

  //   if(strand2 === "B") {
  //     return 1
  //   }
  //   return 0
  }
}
