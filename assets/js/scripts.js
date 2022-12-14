import headerCreateImage from './HeaderCreateImage.js'

let HIDDEN_CLASS_NAME = 'visuallyhidden'
let TARGET_CLASS_NAME = 'target'
let SOURCE_CLASS_NAME = 'source'
let targetIdToShow = 1
let activePriceButton

let roomSizesButtons = document.querySelectorAll('.target-1 .transparent-button')
let siteSizesButtons = document.querySelectorAll('.target-2 .transparent-button')
let jurSizesButtons = document.querySelectorAll('.target-3 .transparent-button')

let roomPriceBlock = document.querySelector('[data-client-type="room-people-price"] .workload-content')
let sitePriceBlock = document.querySelector('[data-client-type="site-people-price"] .workload-content')
let jurPriceBlock = document.querySelector('[data-client-type="jur-people-price"] .workload-content')

const categories = {
  sitePriceBlock,
  roomPriceBlock,
  jurPriceBlock,
}

async function renderJson(animActive) {
  const allServicesPrices = await (await fetch('/wp-content/themes/ecodez/services-list.json')).json()
  allServicesPrices.forEach(({ category, services }) => {
    if (categories[category]) {
      categories[category].innerHTML = ''
      services.reverse().forEach((e) => {
        getCategoryTemplate(categories[category], e)
      })
    }
    if (animActive === 1) {
      anime({
        targets: categories[category].children,
        translateX: ['-100%', 0],
        opacity: [0, 1],
        easing: 'spring(1, 100, 100, 0)',
        delay: anime.stagger(100),
      })
    } else if (animActive === 0) {
      anime({
        targets: categories[category].children,
        opacity: [0.7, 1],
        scale: [0.8, 1],
      })
    }
  })
  let allPriceArray = document.querySelectorAll('.workload-item p')
  allPriceArray.forEach((e) => {
    e.innerText === 'от договорная BYN'
      ? (e.innerHTML = '<span class="workload-price-accent">договорная</span>')
      : e.innerText
  })
}

renderJson()

function getCategoryTemplate(block, e) {
  block.insertAdjacentHTML(
    'afterbegin',
    `
            <div class="workload-item anim-item">
            <picture>
            <img width="300" height="150" src="${
              e.imgSrc
            }" class="attachment-medium size-medium" alt="Главная" loading="lazy" sizes="(max-width: 300px) 100vw, 300px">
            <noscript><img src="${e.imgSrc}" alt="Главная"></noscript>
            </picture>
            <span class="workload-title">
                ${e.servicesName}
            </span>
            <p>от <span class="workload-price-accent">${e[activePriceButton || 'price_1']} BYN</span></p>
            </div>
        `
  )
}

roomSizesButtons.forEach((e) => {
  choiseSize(e)
})
siteSizesButtons.forEach((e) => {
  choiseSize(e)
})
jurSizesButtons.forEach((e) => {
  choiseSize(e)
})

function choiseSize(e) {
  e.addEventListener('click', () => {
    const parentBlockClassName = e.parentElement.parentElement.classList
    let activeButtons = document.querySelectorAll(
      `.${parentBlockClassName[1]} .workload-buttons .transparent-button.active`
    )
    activeButtons.forEach((element) => {
      element.classList.remove('active')
    })
    activePriceButton = e.dataset.buttonId
    e.classList.add('active')
    anime({
      targets: document.querySelector(`.${parentBlockClassName[1]} .workload-content`).children,
      opacity: [1, 0.7],
      scale: [1, 0.8],
    })
    setTimeout(() => renderJson(0), 300)
  })
}

let reviewsBlock = document.querySelector('.reviews-block ul')
let reviewsBlockItem = document.querySelectorAll('.reviews-block ul li')
let reviewsPrevButton = document.querySelector('.reviews-prev-button')
let reviewsNextButton = document.querySelector('.reviews-next-button')
let reviewsDotsBlock = document.querySelector('.reviews-dots')
let activeSliderIndex = 0
let scrollingOver = true

if (reviewsBlock != null) {
  for (let i = 0; i < reviewsBlockItem.length; i++) {
    let dot = document.createElement('div')
    dot.classList.add('reviews-prev-dots')
    dot.dataset.reviewsId = i
    reviewsDotsBlock.append(dot)
  }

  let reviewsDots = document.querySelectorAll('.reviews-dots .reviews-prev-dots')
  reviewsDots[activeSliderIndex].classList.add('active')

  reviewsDots.forEach((e) => {
    e.addEventListener('click', () => {
      if (scrollingOver === true) {
        changeSlide(e.dataset.reviewsId)
      }
    })
  })

  reviewsBlock.style.width = reviewsBlockItem.length * 100 + '%'
  reviewsPrevButton.addEventListener('click', () => {
    if (scrollingOver === true) {
      changeSlide('left')
    }
  })
  reviewsNextButton.addEventListener('click', () => {
    if (scrollingOver === true) {
      changeSlide('right')
    }
  })

  function changeSlide(e) {
    for (let i = 0; i < reviewsDots.length; i++) {
      reviewsDots[i].classList.remove('active')
    }
    if (e == 'left') {
      scrollingOver = false
      if (activeSliderIndex == 0) {
        activeSliderIndex = reviewsBlockItem.length - 1
      } else {
        activeSliderIndex--
      }
    } else if (e == 'right') {
      scrollingOver = false
      if (activeSliderIndex == reviewsBlockItem.length - 1) {
        activeSliderIndex = 0
      } else {
        activeSliderIndex++
      }
    } else if (typeof parseInt(e) === 'number') {
      scrollingOver = false
      activeSliderIndex = e
    }
    reviewsDots[activeSliderIndex].classList.add('active')
    reviewsBlock.style.transform = `translateX(-${activeSliderIndex * reviewsBlockItem[0].clientWidth}px)`
    setTimeout(() => {
      scrollingOver = true
    }, 500)
  }
}

/* Calculator */

let calculateForm = document.querySelector('.calculate-form form')
let calculateInput = document.querySelector('.calculate-form .input-calculate input')
let calculateResult = document.querySelector('.calculate-form .input-calculate .itogo')
let selectFizOrJur = document.querySelectorAll('.calculate-form .fiz-or-jur input')
let fizCalculateBlock = document.querySelector('.calculate-form .fiz-calculate')
let jurCalculateBlock = document.querySelector('.calculate-form .jur-calculate select')
let selectFizSize = document.querySelectorAll('.calculate-form .fiz-calculate input')
if (calculateForm != null) {
  calculateForm.classList.add('active-fiz')
  fizCalculateBlock.classList.add('active-room')
  selectFizOrJur.forEach((e) => {
    e.addEventListener('click', () => {
      selectFizOrJur.forEach((e) => {
        e.classList.remove('active')
      })
      e.classList.add('active')
      changeCalculatePerson(e.value)
    })
  })

  calculateInput.addEventListener('keyup', () => {
    calculateInput.value = calculateInput.value.replace(/[^0-9.]/g, '')
    calculateNumber(calculateInput.value)
  })
}

function changeCalculatePerson(activeValue) {
  calculateForm.classList.remove('active-fiz')
  calculateForm.classList.remove('active-jur')
  if (activeValue == 'Физ лиц') {
    calculateForm.classList.add('active-fiz')
  } else if (activeValue == 'Юр лицо') {
    calculateForm.classList.add('active-jur')
  }
}

selectFizSize.forEach((e) => {
  e.addEventListener('click', () => {
    selectFizSize.forEach((e) => {
      e.classList.remove('active')
    })
    e.classList.add('active')
    changeCalculateFizSize(e.value)
  })
})

function changeCalculateFizSize(activeValue) {
  fizCalculateBlock.classList.remove('active-room')
  fizCalculateBlock.classList.remove('active-plot')
  if (activeValue == 'Комната') {
    fizCalculateBlock.classList.add('active-room')
  } else if (activeValue == 'Участок') {
    fizCalculateBlock.classList.add('active-plot')
  }
}

function calculateNumber(numString) {
  let num = parseInt(numString, 10)
  if (!num) return
  let newNum = 0
  if (calculateForm.classList.contains('active-jur')) {
    if (jurCalculateBlock.value === 'Истребительная дезинсекция') {
      if (num <= 200) newNum = num * 0.85
      else if (num > 200 && num <= 400) newNum = num * 0.75
      else if (num > 400 && num <= 600) newNum = num * 0.6
      else if (num > 600 && num <= 1000) newNum = num * 0.45
      else if (num > 1000 && num <= 1500) newNum = num * 0.41
      else newNum = num * 0.41
    } else if (jurCalculateBlock.value === 'Дезинфекция') {
      if (num <= 200) newNum = num * 0.79
      else if (num > 200 && num <= 400) newNum = num * 0.69
      else if (num > 400 && num <= 600) newNum = num * 0.6
      else if (num > 600 && num <= 1000) newNum = num * 0.55
      else if (num > 1000 && num <= 1500) newNum = num * 0.45
      else newNum = num * 0.45
    }
  }
  calculateResult.innerHTML = `${newNum.toFixed(2)} BYN`
}

document.addEventListener('DOMContentLoaded', () => {
  // PREOLADER //

  document.querySelector('body .preolader svg').style.scale = 1.5
  document.querySelector('.preolader svg path').style.transform = 'rotate(45deg)'
  setTimeout(() => {
    document.body.classList.add('loaded')
  }, 700)
  setTimeout(() => {
    document.querySelector('body.loaded .preolader').style.opacity = 0
  }, 1400)
  setTimeout(() => {
    document.querySelector('body.loaded .preolader').style.display = 'none'
  }, 2100)

  let ctaSmallButton = document.querySelector('.cta-small-block .cta-button.transparent-button')
  let ctaSmallCircle = document.querySelector('#coupon-circle-big circle')
  let positionCtaButton = 0
  changePositionCtaButton()

  function changePositionCtaButton() {
    if (ctaSmallCircle === null && ctaSmallButton === null) {
      return
    }
    positionCtaButton = ctaSmallCircle.getBoundingClientRect().width / 2 + ctaSmallButton.offsetWidth / 2
    if (window.innerWidth > 768) {
      ctaSmallButton.style.left = `calc(90% - ${positionCtaButton}px)`
    } else {
      ctaSmallButton.style.left = 'initial'
    }
  }

  window.addEventListener('resize', () => {
    changePositionCtaButton()
    resizeServiceInfoImg()
  })

  let targetbodyObserver = document.querySelector('body')

  const config = {
    attributes: true,
  }

  const callback = function (mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.attributeName === 'class' && targetbodyObserver.classList.contains('loaded')) {
        function workloadContentAnim(e) {
          if (e) {
            for (let item of e.children) {
              item.classList.add('anim-item')
            }
            new Waypoint({
              element: document.querySelector('.price-section .target-1 .workload-content'),
              handler: function (direction) {
                if (direction == 'down') {
                  anime({
                    targets: e.children,
                    translateX: ['-100%', 0],
                    opacity: [0, 1],
                    easing: 'spring(1, 100, 100, 0)',
                    delay: anime.stagger(100),
                  })
                } else {
                  anime({
                    targets: e.children,
                    translateX: [0, '-100%'],
                    opacity: [1, 0],
                    easing: 'spring(1, 100, 100, 0)',
                    delay: anime.stagger(100),
                  })
                }
              },
              offset: '85%',
            })
          }
        }

        function flexRowAnimItem(e) {
          if (e) {
            for (let item of e.children) {
              item.classList.add('anim-item')
            }
            new Waypoint({
              element: e,
              handler: function (direction) {
                if (direction == 'down') {
                  anime({
                    targets: e.children,
                    translateX: ['-100%', 0],
                    opacity: [0, 1],
                    easing: 'spring(1, 100, 100, 0)',
                    delay: anime.stagger(100),
                  })
                } else {
                  anime({
                    targets: e.children,
                    translateX: [0, '-100%'],
                    opacity: [1, 0],
                    easing: 'spring(1, 100, 100, 0)',
                    delay: anime.stagger(100),
                  })
                }
              },
              offset: '85%',
            })
          }
        }

        function animFromDownToUp(e) {
          if (e) {
            e.classList.add('anim-item')
            new Waypoint({
              element: e,
              handler: function (direction) {
                if (direction == 'down') {
                  anime({
                    targets: e,
                    translateY: [100, 0],
                    opacity: [0, 1],
                    easing: 'spring(1, 100, 100, 0)',
                  })
                } else {
                  anime({
                    targets: e,
                    translateY: [0, 100],
                    opacity: [1, 0],
                    easing: 'spring(1, 100, 100, 0)',
                  })
                }
              },
              offset: '90%',
            })
          }
        }

        function simpleAnimItem(e) {
          if (e) {
            e.classList.add('anim-item')
            new Waypoint({
              element: e,
              handler: function (direction) {
                if (direction == 'down') {
                  anime({
                    targets: e,
                    translateX: [-100, 0],
                    opacity: [0, 1],
                    easing: 'spring(1, 100, 100, 0)',
                  })
                } else {
                  anime({
                    targets: e,
                    translateX: [0, -100],
                    opacity: [1, 0],
                    easing: 'spring(1, 100, 100, 0)',
                  })
                }
              },
              offset: '85%',
            })
          }
        }

        function main() {
          let targets = getElements(TARGET_CLASS_NAME)
          let sources = getElements(SOURCE_CLASS_NAME)
          sources.forEach(function (sourceNode) {
            let sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME)
            sourceNode.addEventListener('click', function () {
              setTimeout(() => showTarget(targets, sourceNodeId), 600)
              activeButton(sources, sourceNodeId)
              activePriceButton = document.querySelector(
                `.target-${sourceNodeId} .workload-buttons .transparent-button.active`
              ).dataset.buttonId
              setTimeout(
                () => (activeAnimWorkloadItem = document.querySelector(`.target-${sourceNodeId} .workload-content`)),
                600
              )
              anime({
                targets: activeAnimWorkloadItem.children,
                scale: [1, 0],
                opacity: [1, 0],
                easing: 'spring(1, 100, 100, 0)',
              })
              setTimeout(() => {
                activeAnimPriceWorkload = document.querySelector(`.target-${sourceNodeId} .price-workload`)
                simpleAnimItem(activeAnimPriceWorkload)
                activeAnimWorkloadButtons = document.querySelector(`.target-${sourceNodeId} .workload-buttons`)
                flexRowAnimItem(activeAnimWorkloadButtons)
              }, 600)
              setTimeout(() => workloadContentAnim(activeAnimWorkloadItem), 1000)
              setTimeout(renderJson, 500)
            })
          })
          showTarget(targets, targetIdToShow)
          activeButton(sources, targetIdToShow)
        }

        function getElements(type) {
          return [].slice.call(document.querySelectorAll('.' + type)).sort(function (targetNode1, targetNode2) {
            let target1Num = extractId(targetNode1, TARGET_CLASS_NAME)
            let target2Num = extractId(targetNode2, TARGET_CLASS_NAME)
            return target1Num > target2Num
          })
        }

        function extractId(targetNode, baseClass) {
          let currentClassIndex = targetNode.classList.length
          while (currentClassIndex--) {
            let currentClass = targetNode.classList.item(currentClassIndex)
            let maybeIdNum = parseInt(currentClass.split('-')[1])
            if (isNaN(maybeIdNum)) {
              continue
            }
            let classStrinToValidate = baseClass + '-' + maybeIdNum
            if (classStrinToValidate === currentClass) {
              return maybeIdNum
            }
          }
        }

        function showTarget(targets, targetId) {
          targets.forEach(function (targetNode) {
            let currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME)
            if (currentTargetNodeId === targetId) {
              targetNode.classList.remove(HIDDEN_CLASS_NAME)
            } else {
              targetNode.classList.add(HIDDEN_CLASS_NAME)
            }
          })
        }

        function activeButton(sources, targetId) {
          sources.forEach(function (targetNode) {
            let sourcesTargetNodeId = extractId(targetNode, SOURCE_CLASS_NAME)
            if (sourcesTargetNodeId === targetId) {
              targetNode.classList.add('active')
            } else {
              targetNode.classList.remove('active')
            }
          })
        }
        main()

        anime({
          targets: '.fullscreen-section__title .h1',
          translateX: ['-200%', 0],
          opacity: [0, 1],
          delay: 1000,
          easing: 'spring(1, 100, 15, 0)',
        })
        anime({
          targets: '.fullscreen-section__title .fullscreen-sectio__subtitle',
          translateX: ['-200%', 0],
          opacity: [0, 1],
          delay: 1500,
          easing: 'spring(1, 100, 15, 0)',
        })
        anime({
          targets: ['.star-404'],
          rotate: [0, 150],
          easing: 'spring(1, 100, 15, 0)',
          delay: 1000,
        })
        anime({
          targets: ['.circle-404 path'],
          d: 'M814.849 596.934C800.248 617.936 775.228 630.357 742.279 634.706C709.33 639.054 668.561 635.312 622.667 624.09C530.885 601.647 418.816 549.344 308.247 472.469C197.678 395.595 109.618 308.758 56.6163 230.538C30.1132 191.425 12.4065 154.512 5.00793 122.111C-2.39056 89.7106 0.538605 61.9315 15.1405 40.9295C29.7424 19.9274 54.7622 7.50705 87.7108 3.15835C120.66 -1.19042 161.429 2.55212 207.323 13.7742C299.105 36.2167 411.174 88.5203 521.743 165.394C632.312 242.268 720.372 329.106 773.374 407.326C799.877 446.439 817.583 483.352 824.982 515.753C832.381 548.153 829.451 575.932 814.849 596.934Z',
          easing: 'spring(1, 100, 50, 0)',
          delay: 1000,
        })
        anime({
          targets: ['.block-404-text .block-404-text-background'],
          translateY: [-300, 0],
          translatexX: [300, 0],
          opacity: [0, 1],
          keyframes: [
            {
              translateY: [-200, 0],
            },
            {
              rotate: [0, 30],
              delay: 500,
            },
          ],
          delay: 2000,
        })
        anime({
          targets: ['.block-404-text .block-404-text-item'],
          translateX: [-100, 0],
          opacity: [0, 1],
          easing: 'spring(1, 100, 100, 0)',
          delay: 3000,
        })

        let activeAnimH2 = document.querySelectorAll('.home-page .h2')
        activeAnimH2.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimAboutSection = document.querySelectorAll('.about-section')
        activeAnimAboutSection.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimReviewsSection = document.querySelectorAll('.reviews-section')
        activeAnimReviewsSection.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeFirstLineAnimServicesSection = document.querySelector('.services-section .flex-list')
        flexRowAnimItem(activeFirstLineAnimServicesSection)

        let activeAnimPriceButtons = document.querySelector('.price-section .price-buttons')
        flexRowAnimItem(activeAnimPriceButtons)

        let activeAnimPriceSection = document.querySelector('.whyus-section .flex-list')
        flexRowAnimItem(activeAnimPriceSection)

        let activeAnimAboutWorkingSection = document.querySelector('.about-working-section .flex-list')
        flexRowAnimItem(activeAnimAboutWorkingSection)

        let activeAnimServicesPageAboutSectionTitle = document.querySelectorAll('.about-section .services-page-title')
        activeAnimServicesPageAboutSectionTitle.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimServicesPageTitleW100 = document.querySelectorAll('.service-info-w-100 .services-page-title')
        activeAnimServicesPageTitleW100.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimServicesPageSubtitleW100 = document.querySelectorAll(
          '.service-info-w-100 .services-page-subtitle'
        )
        activeAnimServicesPageSubtitleW100.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimServiceInfoImage = document.querySelectorAll('.service-info .services-page-image')
        activeAnimServiceInfoImage.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimUsefulMaterial = document.querySelectorAll('.service-info .useful-material')
        activeAnimUsefulMaterial.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimServicesPageTitle = document.querySelectorAll('.service-info .service-text .services-page-title')
        activeAnimServicesPageTitle.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimServicesPageText = document.querySelectorAll('.service-info p')
        activeAnimServicesPageText.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimServicesPageTextList = document.querySelectorAll('.service-info ul')
        activeAnimServicesPageTextList.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimServicesSeporatorInfo = document.querySelectorAll('.service-info .services-seporator-info')
        activeAnimServicesSeporatorInfo.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimCustomServiceList = document.querySelector('.service-info .custom-service-list')
        flexRowAnimItem(activeAnimCustomServiceList)

        let activeAnimCtaPopup = document.querySelectorAll('.cta .cta-popup')
        activeAnimCtaPopup.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimCtaBlock = document.querySelectorAll('.bottom-form')
        activeAnimCtaBlock.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimCtaFirstBlock = document.querySelectorAll('.bottom-form .cta-first-block')
        activeAnimCtaFirstBlock.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimContactSectionH4 = document.querySelectorAll('.contact-us-section .h4')
        activeAnimContactSectionH4.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimContactSectionItem = document.querySelectorAll('.contact-us-section .contacts-item')
        activeAnimContactSectionItem.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimCtaBlockImage = document.querySelectorAll('.bottom-form .services-page-image')
        activeAnimCtaBlockImage.forEach((e) => {
          simpleAnimItem(e)
        })

        let activeAnimCtaBlockForm = document.querySelectorAll('.bottom-form .wpcf7-form .cta-form-input')
        activeAnimCtaBlockForm.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimContactsForm = document.querySelectorAll('.contacts-form.bottom-form .wpcf7 p')
        activeAnimContactsForm.forEach((e) => {
          animFromDownToUp(e)
        })

        let activeAnimServiceInfoW100 = document.querySelectorAll('.service-info-w-100 .flex-list')
        activeAnimServiceInfoW100.forEach((e) => {
          flexRowAnimItem(e)
        })

        let activeAnimWorkloadButtons = document.querySelector('.price-section .target-1 .workload-buttons')
        flexRowAnimItem(activeAnimWorkloadButtons)

        let activeAnimPriceWorkload = document.querySelector('.price-section .target-1 .price-workload')
        simpleAnimItem(activeAnimPriceWorkload)

        let activeAnimWorkloadItem = document.querySelector('.price-section .workload-content')
        workloadContentAnim(activeAnimWorkloadItem)

        let activeAnimFaqSection = document.querySelector('.faq-section .flex-list')
        flexRowAnimItem(activeAnimFaqSection)
      }
    }
  }

  // Создаём экземпляр наблюдателя с указанной функцией колбэка
  const observerBlock = new MutationObserver(callback)

  // Начинаем наблюдение за настроенными изменениями целевого элемента
  observerBlock.observe(targetbodyObserver, config)

  let allServiceInfoBlock = document.querySelectorAll('.service-info .flex-list')

  function resizeServiceInfoImg() {
    allServiceInfoBlock.forEach((e) => {
      e.querySelector('.services-page-image').style.height = `${e.querySelector('.service-text').offsetHeight}px`
    })
  }

  resizeServiceInfoImg()
})

jQuery(document).ready(function ($) {
  headerCreateImage()
  $('a[href*=#]:not([href=#])').click(function () {
    var target = $(this.hash)
    if (target.length) {
      $('html,body').animate(
        {
          scrollTop: target.offset().top - 100,
        },
        200
      )
    }
  })
})
