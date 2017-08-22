function $ (selector: string) {
  return document.querySelector(selector) as HTMLElement
}

window.addEventListener('beforeunload', function () {
  return 'Are you sure you want to exit?'
}, false)

const title: HTMLElement = $('#title')
const content: HTMLElement = $('#content')
const link: HTMLElement = $('#link')
const linkButton: HTMLElement = $('#link-button')
const actions: HTMLElement = $('.actions')

document.addEventListener('DOMContentLoaded', function () {
  const isSafari: boolean = navigator.userAgent.indexOf("Safari") > -1
  const isChrome: boolean = navigator.userAgent.indexOf('Chrome') > -1
  if (isSafari && !isChrome) {
    loadPageWithID('no-safari')
  } else {
    loadPageWithID('start')
  }
}, false);

function loadPageWithID (id: string) {
  let page: Page = pages.find(e => e.id === id)
  title.textContent = page.title
  content.innerHTML = page.content
  if (os === OS.macOS && page.macLink !== undefined) {
    linkButton.style.display = "block"
    link.setAttribute('href', page.macLink)
  } else if (os === OS.Windows && page.winLink !== undefined) {
    linkButton.style.display = "block"
    link.setAttribute('href', page.winLink)
  } else {
    linkButton.style.display = "none"
  }
  while (actions.firstChild) {
    actions.removeChild(actions.firstChild);
  }
  for (const action of page.actions) {
    let button: HTMLElement = document.createElement('button')
    button.classList.add('button', '-dark')
    button.textContent = action.title
    button.addEventListener('click', e => {
      e.preventDefault()
      action.runAction()
      loadPageWithID(action.link)
    })
    actions.appendChild(button)
  }
}