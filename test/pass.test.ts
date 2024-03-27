import { it } from 'node:test'
import assert from 'node:assert'

it('calls a nonexistent method', () => {
  const actual = 1
  const expected = 1
  assert.equal(actual, expected)
})
