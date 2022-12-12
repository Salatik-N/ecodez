let burgerButton = document.querySelector('.burger-button-block')
let burgerContent = document.querySelector('#burger-content')
let burgerContentBlock = document.querySelector('#burger-content .menu-menu-container')
let header = document.querySelector('.site-header')
let listOfHeaderItems = document.querySelector('.burger-content ul.menu')
let headerProgressDot = document.querySelector('.burger-content .progress-line .progress-line-dot')
let listOfHeaderItemsPadding = 0

if(window.innerWidth > 1000) {
	listOfHeaderItemsPadding = 142
}

burgerContent.style.top = `-${burgerContent.scrollHeight}px`

function toggleHeader(){
	burgerButton.children[0].classList.toggle('active')
	burgerContent.classList.toggle('active')
	if(burgerContent.classList.contains('active')){
		document.body.style.overflowY = 'hidden'
		burgerContent.style.top = header.scrollHeight + 'px'
		burgerContent.style.opacity = 1
		setTimeout(()=>{burgerContent.style.bottom = 0}, 300)
	} else{
		document.body.style.overflowY = 'auto'
		burgerContent.style.top = `-${burgerContentBlock.scrollHeight}px`
		burgerContent.style.opacity = 0
		burgerContent.style.bottom = null
	}
}

burgerButton.addEventListener('click', toggleHeader)
function paddingLeftHeaderContent(){
	burgerContentBlock.style.paddingLeft = `${burgerButton.getBoundingClientRect().x}px`
}

function changePositionProgressLineHeader(){
	headerProgressDot.style.top = burgerContentBlock.scrollTop * 100 / burgerContentBlock.scrollHeight + (burgerContentBlock.clientHeight * 100 / burgerContentBlock.scrollHeight) * burgerContentBlock.scrollTop / (burgerContentBlock.scrollHeight - burgerContentBlock.clientHeight) + '%'
}

burgerContentBlock.addEventListener("scroll", function() {
	changePositionProgressLineHeader()
})

const resizeObserver = new ResizeObserver(() => {
	changePositionProgressLineHeader()
});

resizeObserver.observe(listOfHeaderItems);

window.addEventListener('resize', ()=>{
	if(window.innerWidth <= 1440){
		burgerContentBlock.style.paddingLeft = null
	} else {
		paddingLeftHeaderContent()
	}
});