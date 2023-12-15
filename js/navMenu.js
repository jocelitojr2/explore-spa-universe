export function navActive() {
  const { href } = window.location
  const menuOptions = document.querySelectorAll('nav a')

  menuOptions.forEach((item) => {
    if (item.href === href) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}