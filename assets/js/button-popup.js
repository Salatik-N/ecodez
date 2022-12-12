let popup = document.getElementById('popup')
let popupButton = document.querySelector('#request-call')
let ctaPopup = document.getElementById('cta-popup-block')
let ctaPopupButton = document.querySelector('.cta-popup')
let siteBlock = document.querySelector('#page.site')

if (ctaPopupButton) {
	ctaPopupButton.addEventListener('click', () => {
		requestCall(ctaPopup)
	})
}
popupButton.addEventListener('click', () => {
	requestCall(popup)
})

function requestCall(typePopup) {
	typePopup.classList.add('active')
	let bodyOverflow = document.body
	bodyOverflow.style.overflow = 'hidden'
	let closePopup = document.querySelectorAll('.close-popup')
	closePopup.forEach(e => {
		e.addEventListener('click', () => {
			typePopup.classList.remove('active')
			if(document.querySelector('#burger-content.active') == undefined){
				bodyOverflow.style.overflow = 'auto'
			}
		})
		siteBlock.classList.remove('popup-active')
	})
	typePopup.addEventListener('mouseup', (e) => {
		if (typePopup === e.target) {
			typePopup.classList.remove('active')
			bodyOverflow.style.overflow = 'auto'
		}
		siteBlock.classList.remove('popup-active')
	})
	siteBlock.classList.add('popup-active')
}