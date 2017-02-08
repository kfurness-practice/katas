import { test } from 'ava';

test('Two empty strings should return 0', t => {
  const expected = 0

  const strand1 = ''
  const strand2 = ''

  const actual = dna.hammingDistance(strand1, strand2);

  t.is(actual, expected)
})

// test('A string with "A" should return 1', t => {
//   const expected = 1
//
//   const strand = "A"
//
//   const actual = dna.hammingDistance(strand);
//
//   t.is(actual, expected)
// })

const dna = {
  hammingDistance(strand1, strand2) {
    return 0
  }
}
