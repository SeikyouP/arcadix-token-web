const themeToggle = document.querySelector('.theme-toggle')
const lightButton = document.querySelector('.light-btn')
const darkButton = document.querySelector('.dark-btn')

themeToggle.addEventListener('click', () => {
  document.body.classList.contains('light-theme') ? enableDarkMode() : enableLightMode()
})

function enableLightMode() {
  document.body.classList.remove('dark-theme')
  document.body.classList.add('light-theme')
  lightButton.style.display = 'none'
  darkButton.style.display = 'block'
}

function enableDarkMode() {
  document.body.classList.remove('light-theme')
  document.body.classList.add('dark-theme')
  lightButton.style.display = 'block'
  darkButton.style.display = 'none'
}

function setThemePreference() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode()
    return
  }
  enableLightMode()
}

document.onload = setThemePreference()
