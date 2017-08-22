function $ (selector: string) {
  return document.querySelector(selector) as HTMLElement
}

window.addEventListener('beforeunload', function () {
  return 'Are you sure you want to exit?'
}, false)

const titleEl: HTMLElement = $('#title')
const contentEl: HTMLElement = $('#content')
const linkEl: HTMLElement = $('#link')
const linkButtonEl: HTMLElement = $('#link-button')
const actionsEl: HTMLElement = $('.actions')

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
  titleEl.textContent = page.title
  contentEl.innerHTML = page.content
  if (os === OS.macOS && page.macLink !== undefined) {
    linkButtonEl.style.display = "block"
    linkEl.setAttribute('href', page.macLink)
  } else if (os === OS.Windows && page.winLink !== undefined) {
    linkButtonEl.style.display = "block"
    linkEl.setAttribute('href', page.winLink)
  } else {
    linkButtonEl.style.display = "none"
  }
  while (actionsEl.firstChild) {
    actionsEl.removeChild(actionsEl.firstChild);
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
    actionsEl.appendChild(button)
  }
}