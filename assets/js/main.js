/*======================= MENU SHOW Y HIDDEN ======================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*============== MENU SHOW ==============*/
// Validate if constant exist
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*============== MENU HIDDEN ==============*/
// Validate if constant exist
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*======================= REMOVE MENU MOBILE ======================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=========================== ANIMATED TEXT =======================*/
const texts = document.querySelector(".animated-text").children,
      textsLength = texts.length
let index = 0

function animateText() {
    for (let i = 0; i < textsLength; i++) {
        texts[i].classList.remove("text-in")
    }
    texts[index].classList.add("text-in")
    if (index == textsLength - 1) {
        index = 0;
    } else {
        index++;
    }

    setTimeout(animateText, 2000)
}

window.onload = animateText

/*======================= PORTOFOLIO SWIPER ======================*/
var swiper = new Swiper(".portofolio__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

/*================== SCROLL SECTION ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=================== CHANGE BACKGROUND HEADER ===================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*======================== SHOW SCOLL UP ========================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scrollup class
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=================== CHANGE DARK THEME ===================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously choose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark-theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Active / deactive the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*======================== ANIMATION ========================*/
// gsap.registerPlugin(ScrollTrigger)
// var tl = gsap.timeline()

// tl.from('.home__data', {
//     y: '-40%',
//     duration: 1.5,
//     ease: Power4.easeOut
// })

// tl.from('.stagger-nav', {
//     x: '-100%',
//     opacity: 0,
//     stagger: .3,
//     duration: 1.5,
//     ease: Power4.easeOut
// }, "-=1.5")

// tl.from('.stagger1', {
//     y: -50,
//     opacity: 0,
//     stagger: .3,
//     duration: 2,
//     ease: Power4.easeOut
// }, "-=1.5")

// tl.from('.stagger1-2', {
//     x: -50,
//     opacity: 0,
//     stagger: .1,
//     duration: 1,
//     ease: Power4.ease
// }, "-=1.5")


// gsap.from(".nav__btns", {
//     x: 50,
//     opacity: 0,
//     duration: 2,
//     ease: Power4.easeOut
// })

// gsap.from(".scale-hero", {
//     stagger: .3,
//     scale: 0,
//     duration: 2,
//     ease: Back.easeOut.config(1.5)
// })

// gsap.from(".about__title", {
//     scrollTrigger: {
//         trigger: '.about__title',
//         start: "top bottom"
//     },
//     scale: 0.1,
//     duration: 1.2,
//     ease: Power4.easeOut
// })

// gsap.from(".img-container", {
//     scrollTrigger: {
//         trigger: '.about__title',
//         start: "top center"
//     },
//     x: -50,
//     opacity: 0,
//     duration: 2,
//     ease: Power4.easeOut
// })

// gsap.from(".about__data", {
//     scrollTrigger: {
//         trigger: '.about__title',
//         start: "top center"
//     },
//     x: 50,
//     opacity: 0,
//     duration: 2,
//     ease: Power4.easeOut
// })

// gsap.from(".q-title", {
//     scrollTrigger: {
//         trigger: '.qualification',
//         start: "top center"
//     },
//     scale: 0.1,
//     duration: 1.2,
//     ease: Power4.easeOut
// })

// gsap.from(".q-square", {
//     scrollTrigger: {
//         trigger: '.qualification',
//         start: "top center"
//     },
//     scale: 0.1,
//     duration: 2,
//     stagger: .3,
//     ease: Power4.easeOut
// })

// gsap.from(".porto-title", {
//     scrollTrigger: {
//         trigger: '.portofolio',
//         start: "top center"
//     },
//     scale: 0.1,
//     duration: 2,
//     ease: Power4.easeOut
// })

// gsap.from(".portofolio__container", {
//     scrollTrigger: {
//         trigger: '.portofolio',
//         start: "top center"
//     },
//     y: 50,
//     opacity: 0,
//     duration: 3,
//     stagger: 1,
//     ease: Power4.easeOut
// })

// gsap.from(".footer__bg", {
//     scrollTrigger: {
//         trigger: '.contact__section',
//         start: "top center"
//     },
//     y: 50,
//     opacity: 0,
//     duration: 2,
//     stagger: .3,
//     ease: Power4.easeOut
// })

// gsap.from(".footer__header", {
//     scrollTrigger: {
//         trigger: '.contact__section',
//         start: "top center"
//     },
//     scale: 0.1,
//     duration: 2,
//     stagger: .3,
//     ease: Power4.easeOut
// })