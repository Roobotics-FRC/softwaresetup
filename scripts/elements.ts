enum OS {
  macOS, Windows
}

let os

function $ (selector: string) {
  return document.querySelector(selector) as HTMLElement
}

class Button {
  title: string
  link: string
  actionId?: string
  constructor (title: string, link: string, actionId?: string) {
    this.title = title
    this.link = link
    this.actionId = actionId
  }
  runAction () {
    switch (this.actionId) {
      case 'setOS:mac':
        os = OS.macOS
        break
      case 'setOS:windows':
        os = OS.Windows
        break
      case 'loadGuide:chrome':
        window.location.href = 'chromebook.html'
    }
  }
}

class Page {
  id: string
  title: string
  content: string
  macLink: string | undefined
  winLink: string | undefined
  actions: Button[]
  constructor (id: string, title: string, content: string, actions: Button[], macLink?: string, winLink?: string) {
    this.id = id
    this.title = title
    this.content = content
    this.macLink = macLink
    this.winLink = winLink
    this.actions = actions
  }
  static quick (id: string, title: string, content: string, nextPage?: string) {
    return new Page(id, title, content, nextPage !== undefined ? [new Button('Continue', nextPage)] : [])
  }
}
