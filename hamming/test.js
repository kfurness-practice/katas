import { test } from 'ava';

test('An empty string should return 0', t => {
  const expected = 0

  const strand = ""

  const actual = dna.hammingDistance(strand);

  t.is(actual, expected)
})

const dna = {
  hammingDistance(strand) {
    return 0
  }
}
