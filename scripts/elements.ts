enum OS {
  macOS, Windows
}

enum ButtonAction {
  SetMac, SetWindows, SetChrome
}

let os

function $ (selector: string) {
  return document.querySelector(selector) as HTMLElement
}

class Button {
  title: string
  link: string
  actionId?: ButtonAction
  constructor (title: string, link: string, actionId?: ButtonAction) {
    this.title = title
    this.link = link
    this.actionId = actionId
  }
  runAction () {
    switch (this.actionId) {
      case ButtonAction.SetMac:
        os = OS.macOS
        break
      case ButtonAction.SetWindows:
        os = OS.Windows
        break
      case ButtonAction.SetChrome:
        window.location.href = 'chromebook.html'
        break
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
