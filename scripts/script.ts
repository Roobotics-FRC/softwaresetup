const pm = PageManager.Instance

const titleEl: HTMLElement = $('#title')
const contentEl: HTMLElement = $('#content')
const linkEl: HTMLElement = $('#link')
const linkButtonEl: HTMLElement = $('#link-button')
const actionsEl: HTMLElement = $('.actions')

document.addEventListener('DOMContentLoaded', () => {
  const isSafari: boolean = navigator.userAgent.indexOf('Safari') > -1
  const isChrome: boolean = navigator.userAgent.indexOf('Chrome') > -1
  if (isSafari && !isChrome) {
    pm.loadPageWithID('no-safari')
  } else {
    pm.loadPageWithID('start')
  }
}, false)
