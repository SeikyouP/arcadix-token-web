const themeToggle = document.querySelector('.theme-toggle')
const lightButton = document.querySelector('.light-btn')
const darkButton = document.querySelector('.dark-btn')

// themeToggle.addEventListener('click', () => {
//   document.body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode()
// })

lightButton.addEventListener('click', () => {
  enableLightMode()
})

darkButton.addEventListener('click', () => {
  enableDarkMode()
})

function enableDarkMode() {
  document.body.classList.remove('light-theme')
  document.body.classList.add('dark-theme')
  themeToggle.setAttribute('aria-label', 'Switch to light theme')
}

function enableLightMode() {
  document.body.classList.remove('dark-theme')
  document.body.classList.add('light-theme')
  themeToggle.setAttribute('aria-label', 'Switch to dark theme')
}

function setThemePreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
    return
  }
  enableLightMode()
}

document.onload = setThemePreference()
