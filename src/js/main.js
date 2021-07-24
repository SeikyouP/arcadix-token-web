//  Declare Variables
let body = document.querySelector('body')
let header = document.querySelector('.header')
let mobileHeader = document.querySelector('.mobile-header')
let mobileMenu = document.querySelector('.mobile-header_menu')
let menuToggle = document.querySelector('.mobile-header_button')
let menuLinks = document.querySelectorAll('.mobile-header_menu-link')
let topButton = document.querySelector('.top-button')

let plusButton = document.querySelectorAll('.content_plus-icon')
let minusButton = document.querySelectorAll('.content_minus-icon')
let answer = document.querySelectorAll('.content_answer')
let plusMinusButton = document.querySelectorAll('.content_plus-minus')
let returnTop = document.querySelectorAll('.content_top-button-section')
let question = document.querySelectorAll('.content_question')

for (let i = 0; i < plusMinusButton.length; i++) {
  plusMinusButton[i].addEventListener('click', () => {
    plusButton[i].classList.toggle('content_plus-icon--active')
    minusButton[i].classList.toggle('content_minus-icon--active')
    answer[i].classList.toggle('content_answer--open')
  })
}

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', () => {
    plusButton[i].classList.toggle('content_plus-icon--active')
    minusButton[i].classList.toggle('content_minus-icon--active')
    answer[i].classList.toggle('content_answer--open')
  })
}

for (let i = 0; i < plusMinusButton.length; i++) {
  plusMinusButton[i].addEventListener('touchstart', () => {
    plusButton[i].classList.toggle('content_plus-icon--active')
    minusButton[i].classList.toggle('content_minus-icon--active')
    answer[i].classList.toggle('content_answer--open')
  })
}

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('touchstart', () => {
    plusButton[i].classList.toggle('content_plus-icon--active')
    minusButton[i].classList.toggle('content_minus-icon--active')
    answer[i].classList.toggle('content_answer--open')
  })
}

// Include Smooth Scroll JS
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true,
  updateURL: false,
  topOnEmptyHash: true,
  header: '[data-scroll-header]',
})

// Event to change header background only
window.addEventListener('scroll', () => {
  // Change header background color when scrolled away from top
  if (window.pageYOffset > 0) {
    header.classList.add('active')
  }

  // Otherwise, revert header background color when scrolled back to top
  else if (window.pageYOffset === 0) {
    header.classList.remove('active')
  }
})

// Event to change mobile header background only
window.addEventListener('scroll', () => {
  // Change mobile header background color when scrolled away from top
  if (window.pageYOffset > 0) {
    mobileHeader.classList.add('mobile-header--active')
  }

  // Otherwise, revert mobile header background color when scrolled back to top
  else if (window.pageYOffset === 0) {
    mobileHeader.classList.remove('mobile-header--active')
  }
})

// Toggle the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active')
  mobileHeader.classList.add('mobile-header--active')
  mobileMenu.classList.toggle('mobile-header_menu--open')
  body.classList.toggle('disable-scroll')
})

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menuToggle.classList.remove('is-active')
    mobileMenu.classList.remove('mobile-header_menu--open')
    body.classList.remove('disable-scroll')
  })
}

// Listen for Scroll Event
window.addEventListener('scroll', function () {
  // Check where (y-position) the top button should be visible
  if (window.pageYOffset >= 300) {
    topButton.classList.add('top-button--active')
  }

  // Otherwise, check which Y-position the top button should be invisible
  else if (window.pageYOffset < 300) {
    topButton.classList.remove('top-button--active')
  }
})
