//  Declare Variables
let body = document.querySelector('body')
let header = document.querySelector('.header')
let mobileHeader = document.querySelector('.mobile-header')
let menuToggle = document.querySelector('.mobile-header_button')
let menuLinks = document.querySelectorAll('.mobile-header_menu-link')
let topButton = document.querySelector('.top-button')

// Include Smooth Scroll JS
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 750,
  speedAsDuration: true,
  updateURL: false,
  topOnEmptyHash: true,
})

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

window.addEventListener('scroll', () => {
  // Change mobile header background color when scrolled away from top
  if (window.pageYOffset > 0) {
    mobileHeader.classList.add('active')
  }

  // Otherwise, revert mobile header background color when scrolled back to top
  else if (window.pageYOffset === 0) {
    mobileHeader.classList.remove('active')
  }
})

// Open / Close (Toggle) the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active')
  mobileHeader.classList.toggle('mobile-header_open')
  body.classList.toggle('disable-scroll')

  // Change mobile header background color when you click the menu toggle button
  if (window.pageYOffset === 0) {
    mobileHeader.classList.toggle('active')
  }
  // Otherwise, do nothing
  else {
    return
  }
})

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function (event) {
    menuToggle.classList.remove('is-active')
    mobileHeader.classList.remove('mobile-header_open')
    body.classList.remove('disable-scroll')

    // Change mobile header background color when you click the menu toggle button
    if (window.pageYOffset === 0 && event.target.id === 'home') {
      mobileHeader.classList.remove('active')
    }
    // Otherwise, do nothing
    else if (window.pageYOffset === 0) {
      return
    }
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
