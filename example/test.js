describe('success', () => {
  it('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})

describe('failure', () => {
  it('two plus two is five', () => {
    expect(2 + 2).toBe(5)
  })
  it('two plus two is six', () => {
    expect(2 + 2).toBe(6)
  })
})
