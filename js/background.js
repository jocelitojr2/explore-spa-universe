export function changeBackground() {
  const body = document.body
  const { pathname } = window.location
  body.className = ""
  
  if (pathname === '/') {
    return
  }
  
  body.classList.add(`${pathname.replace("/", "")}`)
}