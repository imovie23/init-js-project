const createElement = (tag, className, id, dataSet) => {
  const name = document.createElement(tag)
  name.classList.add(className)

  if (dataSet) {
    name.dataset.testid = dataSet
  }

  if (id) {
    name.id = id
  }

  return name
}

const exampleDom = () => {
  const main = document.getElementsByTagName('main')[0]
  let clicked = document.getElementById('clicked')
  let btnLess = document.getElementById('btn-less')
  let btnTxt = document.getElementsByClassName('btn-less__txt')[0]

  if (!btnLess) {
    btnLess = createElement('section', 'btn-less', 'btn-less')
  }

  if (!clicked) {
    clicked = createElement('div', 'btn-less__example', 'clicked', 'clicked-test')
  }
  if (!btnTxt) {
    btnTxt = createElement('h2', 'btn-less__txt')
    btnTxt.innerHTML = 'Click me'
  }

  btnLess.append(clicked)
  clicked.append(btnTxt)

  if (main) {
    main.append(btnLess)
  }

  function onBtnClick() {
    let elementCount = document.getElementsByClassName('btn-less__count')[0]

    if (!elementCount) {
      elementCount = createElement('span', 'btn-less__count', 'btn-less__count', 'btn-less__count')
      btnLess.append(elementCount)
    }

    if (clicked) {
      clicked.remove()
    }

    elementCount.innerHTML = `To stop or start the animation click on it...`
  }

  if (clicked) {
    clicked.addEventListener('click', onBtnClick)
  }

  return btnLess
}

module.exports = exampleDom
