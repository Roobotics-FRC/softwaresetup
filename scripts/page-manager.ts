class PageManager {
  private static _instance: PageManager
  private pageHistory: string[]
  private currentPage: string
  private backButton: HTMLElement

  private constructor () {
    this.pageHistory = []
    this.backButton = $('#back-button')
    this.backButton.style.display = 'none'
    this.backButton.addEventListener('click', e => {
      e.preventDefault()
      pm.goBack()
    }, false)
  }

  public static get Instance () {
    return this._instance || (this._instance = new this())
  }

  loadPageWithID (id: string, saveHistory = true) {
    let page: Page | undefined = pages.find(e => e.id === id)
    if (page === undefined) return
    titleEl.textContent = page.title
    contentEl.innerHTML = page.content
    if (os === OS.macOS && page.macLink !== undefined) {
      linkButtonEl.style.display = 'block'
      linkEl.setAttribute('href', page.macLink)
    } else if (os === OS.Windows && page.winLink !== undefined) {
      linkButtonEl.style.display = 'block'
      linkEl.setAttribute('href', page.winLink)
    } else {
      linkButtonEl.style.display = 'none'
    }
    while (actionsEl.firstChild) {
      actionsEl.removeChild(actionsEl.firstChild)
    }
    for (const action of page.actions) {
      let button: HTMLElement = document.createElement('button')
      button.classList.add('button', '-dark')
      button.textContent = action.title
      button.addEventListener('click', e => {
        e.preventDefault()
        action.runAction()
        this.loadPageWithID(action.link)
      })
      actionsEl.appendChild(button)
    }
    if (saveHistory && this.currentPage !== undefined) {
      this.pageHistory.push(this.currentPage)
    }
    this.currentPage = id
    if (this.pageHistory.length === 0) {
      this.backButton.style.display = 'none'
    } else {
      this.backButton.style.display = 'inline-block'
    }
  }

  goBack () {
    let lastPg = this.pageHistory.pop()
    if (lastPg !== undefined) this.loadPageWithID(lastPg, false)
  }
}
