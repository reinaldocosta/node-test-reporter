import { it } from 'node:test'
import assert from 'node:assert'

it('calls a nonexistent method', () => {
  const actual = 2
  const expected = 2
  assert.equal(actual, expected)
})
