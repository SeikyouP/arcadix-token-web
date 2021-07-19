//  Declare Variables
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

//Include Menuspy JS
// var elm = document.querySelector('#menuspy') // Desktop Menu
// var ms = new MenuSpy(elm, {
//   activeClass: 'current',
//   enableLocationHash: false,
// })

// var elm2 = document.querySelector('#mobile-menuspy') // Mobile Menu
// var ms2 = new MenuSpy(elm2, {
//   activeClass: 'current',
//   enableLocationHash: false,
// })

// Open / Close (Toggle) the mobile menu when you click the menu toggle button
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('is-active')
  mobileHeader.classList.toggle('mobile-header_active')
})

// Close the moblie menu when you click on any mobile link
for (i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function () {
    menuToggle.classList.remove('is-active')
    mobileHeader.classList.remove('mobile-header_active')
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
