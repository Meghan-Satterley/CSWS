/*  Meghan Satterley, 2023-2024, Honors Thesis Project, Main Script  */
/*  Version 3.1  */
/*  Consolidated Social Work Services, Inc.  */ 

/* MENU DISPLAY */

const headerMenu = document.getElementById('header-menu'),
	headerToggle = document.getElementById('header-toggle'),
	headerClose = document.getElementById('header-close')

	/* SHOW */
	
	if(headerToggle) {
		headerToggle.addEventListener('click', () => {
			headerMenu.classList.add('show-menu')
		})
	}

	/* HIDE */

	if(headerClose) {
		headerClose.addEventListener('click', () => {
			headerMenu.classList.remove('show-menu')
		})
	}

/* REMOVE MENU MOBILE */

const headerLink = document.querySelectorAll('.header_link')

const linkAction = () => {
	const headerMenu = document.getElememntById('header-menu')
	headerMenu.classList.remove('header-menu')
}
headerLink.forEach(n => n.addEventListener('click', linkAction))

/* BLUR */

const blurHeader = () => {
	const header = document.getElementById('header')
	this.scrollY >= 50 ? header.classList.add('blur-header')
					   : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/* SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.header_menu a[href*=' + sectionId + ']')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		}
		else {
			sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)