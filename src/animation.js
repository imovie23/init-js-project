export default () => {
  const image = document.getElementsByClassName('img-scss__logo')[0]
  let rotate = 0
  let timerId = null

  const animation = prev => {
    if (prev) {
      clearInterval(prev)
      timerId = undefined
      return timerId
    }

    timerId = setInterval(() => {
      image.setAttribute('style', `transform: rotate(${(rotate += 1)}deg);`)
    }, 30)
    return timerId
  }

  animation(timerId)

  image.addEventListener('click', () => animation(timerId))
}
