let headerItems = document.querySelectorAll('.burger-content ul.menu .menu-item')

const kirToLat = function (str) {
  let ru = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'j',
    з: 'z',
    и: 'i',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'shch',
    ы: 'y',
    э: 'e',
    ю: 'u',
    я: 'ya',
    ъ: 'ie',
    ь: '',
    й: 'i',
    '/': '-',
  }
  let newString = []

  return [...str]
    .map((l) => {
      let latL = ru[l.toLocaleLowerCase()]

      if (l !== l.toLocaleLowerCase()) {
        latL = latL.charAt(0).toLocaleUpperCase() + latL.slice(1)
      } else if (latL === undefined) {
        latL = l
      }

      return latL
    })
    .join('')
}

const availableImages = sessionStorage.getItem('verifiedImages')
function checkIfImageExists(url) {
  return new Promise((resolve, reject) => {
    if (availableImages) {
      if (availableImages.includes(url)) {
        return resolve(url)
      } else {
        return reject()
      }
    }
    const img = new Image()
    img.src = `/wp-content/uploads/image-header/${url}.jpg`
    img.onload = () => resolve(url)
    img.onerror = reject
  })
}

const getImageName = (namePage) => {
  if (namePage.innerText.split('\n')[0].match(/[a-z]/i)) {
    return namePage.innerText.split('\n')[0]
  } else {
    return kirToLat(namePage.innerText.split('\n')[0])
  }
}

export default function headerCreateImage() {
  if (window.innerWidth >= 1440) {
    paddingLeftHeaderContent()
  }

  if (window.innerWidth > 1000) {
    const promises = []
    headerItems.forEach((e) => {
      promises.push(
        new Promise(async (resolve, reject) => {
          const nameImg = getImageName(e)
          try {
            await checkIfImageExists(nameImg).then(() => {
              const img = document.createElement('img')
              img.src = `/wp-content/uploads/image-header/${nameImg}.jpg`
              img.classList.add('header-title-img')
              img.alt = `Переход на страницу ${e.innerText.split('\n')[0]}`
              e.appendChild(img.cloneNode(true))

              if (e.children[2] !== undefined) {
                e.lastChild.style.top = `${e.children[0].offsetHeight + e.children[1].offsetHeight}px`
              } else {
                e.lastChild.style.top = `${e.children[0].offsetHeight}px`
              }

              if (e.children[2] !== undefined) {
                e.lastChild.style.top = `${e.children[0].offsetHeight + e.children[1].offsetHeight}px`
              } else {
                e.lastChild.style.top = `${e.children[0].offsetHeight}px`
              }

              e.addEventListener('mouseenter', () => {
                if (e.parentElement.parentElement.classList.contains('hovered')) {
                  e.parentElement.parentElement.classList.remove('hovered')
                }
                e.classList.add('hovered')
              })
              e.addEventListener('mouseleave', () => {
                if (e.parentElement.parentElement.classList.contains('menu-item-has-children')) {
                  e.parentElement.parentElement.classList.add('hovered')
                }
                e.classList.remove('hovered')
              })

              if (e.lastChild.getBoundingClientRect().x !== listOfHeaderItems.getBoundingClientRect().x) {
                e.lastChild.style.left = `-${
                  e.lastChild.getBoundingClientRect().x - listOfHeaderItems.getBoundingClientRect().x
                }px`
              }
              e.lastChild.style.width = `${listOfHeaderItems.offsetWidth}px`
              resolve(nameImg)
            })
          } catch (e) {
            reject(e)
          }

          e.children[0].addEventListener('click', toggleHeader)
        })
      )
    })

    Promise.allSettled(promises).then((results) => {
      const availableImages = results.filter((result) => result.status === 'fulfilled').map((result) => result.value)
      if (availableImages.length) {
        sessionStorage.setItem('verifiedImages', JSON.stringify(availableImages))
      }
    })
  }
}
