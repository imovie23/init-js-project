const { getByTestId } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

const exampleDOM = require('../exampleDom')

describe('testing DOM', () => {
  let container = null
  beforeEach(() => {
    container = exampleDOM()
  })

  afterEach(() => {
    container.remove()
    container = null
  })

  it('remove Node', async () => {
    const button = getByTestId(container, 'clicked-test')
    button.click()
    expect(button).not.toBeInTheDocument()
  })
  it('add Node with some text', () => {
    const button = getByTestId(container, 'clicked-test')
    const text = `To stop or start the animation click on it...`
    button.click()
    expect(getByTestId(container, 'btn-less__count')).toBeTruthy()
    expect(getByTestId(container, 'btn-less__count')).toHaveTextContent(text)
  })
})
