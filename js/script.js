var OS;
(function (OS) {
    OS[OS["macOS"] = 0] = "macOS";
    OS[OS["Windows"] = 1] = "Windows";
})(OS || (OS = {}));
var ButtonAction;
(function (ButtonAction) {
    ButtonAction[ButtonAction["SetMac"] = 0] = "SetMac";
    ButtonAction[ButtonAction["SetWindows"] = 1] = "SetWindows";
    ButtonAction[ButtonAction["SetChrome"] = 2] = "SetChrome";
})(ButtonAction || (ButtonAction = {}));
var os;
function $(selector) {
    return document.querySelector(selector);
}
var Button = /** @class */ (function () {
    function Button(title, link, actionId) {
        this.title = title;
        this.link = link;
        this.actionId = actionId;
    }
    Button.prototype.runAction = function () {
        switch (this.actionId) {
            case ButtonAction.SetMac:
                os = OS.macOS;
                break;
            case ButtonAction.SetWindows:
                os = OS.Windows;
                break;
            case ButtonAction.SetChrome:
                window.location.href = 'chromebook.html';
                break;
        }
    };
    return Button;
}());
var Page = /** @class */ (function () {
    function Page(id, title, content, actions, macLink, winLink) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.macLink = macLink;
        this.winLink = winLink;
        this.actions = actions;
    }
    Page.quick = function (id, title, content, nextPage) {
        return new Page(id, title, content, nextPage !== undefined ? [new Button('Continue', nextPage)] : []);
    };
    return Page;
}());
var pages = [
    Page.quick('start', 'Welcome to Team 4373\'s software setup guide', 'This guide will walk you through the process of setting up your computer for software development.', 'os-select'),
    new Page('os-select', 'Select your operating system', 'Please select the OS running on your computer.', [new Button('macOS', 'java', ButtonAction.SetMac), new Button('Windows', 'java', ButtonAction.SetWindows), new Button('Chrome OS', '', ButtonAction.SetChrome), new Button('Other', 'unknown-os')]),
    Page.quick('unknown-os', 'Seek Help', 'Your OS is not common enough to be included in this guide. Please seek help from me in person.'),
    new Page('java', 'Install JDK', 'Install JDK 11 using the link below. You will need to click the "Accept License Agreement" button before downloading. If you are on Windows, download the first Windows version (the exe installer). If you are on macOS, download the first macOS version (the zip file). Run the installer once it is downloaded.', [new Button('Continue', 'intellij')], 'https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html', 'https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html'),
    new Page('intellij', 'Install IntelliJ', 'Please use the link below to download IntelliJ Community Edition, then install the software once the download completes. If you are on Windows, select the checkboxes next to "64-bit launcher" and ".java" when running the installer, and leave all other values as default.', [new Button('Continue', 'checkstyle')], 'https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC', 'https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC'),
    Page.quick('checkstyle', 'Install the Checkstyle plugin', 'Checkstyle makes sure your code is clean and readable. To install it:<ul>'
        + '<li>Open IntelliJ</li>'
        + '<li>Click the "Configure" button at the bottom right, then select "Plugins" from the list</li>'
        + '<li>Click the "Browse Repositories..." button at the bottom of the window that opens</li>'
        + '<li>Use the search box to search for "CheckStyle-IDEA" and install the plugin that comes up by clicking the green Install button</li>'
        + '<li>Quit IntelliJ</li>'
        + '</ul>', 'git-client'),
    new Page('git-client', 'Install GitHub Desktop', 'GitHub Desktop is the recommended Git client for beginning Git users. Please use the link below to download it.', [new Button('Continue', 'slack')], 'https://central.github.com/deployments/desktop/desktop/latest/darwin', 'https://central.github.com/deployments/desktop/desktop/latest/win32'),
    new Page('slack', 'Sign up for Slack', 'If you have not yet signed up for a Slack account, please do so by following the link below. You <strong>must</strong> use your AFS email address. You should enter your real name and make your username something recognizable '
        + '(a recommended convention is the last two digits of your year of graduation, followed by your first name, followed by your last initial).', [new Button('Continue', 'trello')], 'https://team4373.slack.com/signup', 'https://team4373.slack.com/signup'),
    new Page('trello', 'Sign up for Trello', 'Please create a Trello account using the link below. Once you have created an account, send me your username so you can be added to the Trello team.', [new Button('Continue', 'github')], 'https://trello.com/signup', 'https://trello.com/signup'),
    new Page('github', 'Sign up for GitHub', 'You will need to create a GitHub account to access our Git repos. Please follow the link below to create one (choose the free plan), then contact me for an invite to our organization.', [new Button('Continue', 'end')], 'https://github.com/join', 'https://github.com/join'),
    Page.quick('end', 'Setup complete!', 'You are good to go for now. We will continue setting up IntelliJ during our meetings.'),
    Page.quick('no-safari', 'Use a different browser', 'Safari interferes with the installation of certain vital components. Google Chrome is the recommended browser for this setup process. If you have no choice but to use Safari, seek help from an experienced software team member.')
];
var PageManager = /** @class */ (function () {
    function PageManager() {
        this.pageHistory = [];
        this.backButton = $('#back-button');
        this.backButton.style.display = 'none';
        this.backButton.addEventListener('click', function (e) {
            e.preventDefault();
            pm.goBack();
        }, false);
    }
    Object.defineProperty(PageManager, "Instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    PageManager.prototype.loadPageWithID = function (id, saveHistory) {
        var _this = this;
        if (saveHistory === void 0) { saveHistory = true; }
        var page = pages.find(function (e) { return e.id === id; });
        if (page === undefined)
            return;
        titleEl.textContent = page.title;
        contentEl.innerHTML = page.content;
        if (os === OS.macOS && page.macLink !== undefined) {
            linkButtonEl.style.display = 'block';
            linkEl.setAttribute('href', page.macLink);
        }
        else if (os === OS.Windows && page.winLink !== undefined) {
            linkButtonEl.style.display = 'block';
            linkEl.setAttribute('href', page.winLink);
        }
        else {
            linkButtonEl.style.display = 'none';
        }
        while (actionsEl.firstChild) {
            actionsEl.removeChild(actionsEl.firstChild);
        }
        var _loop_1 = function (action) {
            var button = document.createElement('button');
            button.classList.add('button', '-dark');
            button.textContent = action.title;
            button.addEventListener('click', function (e) {
                e.preventDefault();
                action.runAction();
                _this.loadPageWithID(action.link);
            });
            actionsEl.appendChild(button);
        };
        for (var _i = 0, _a = page.actions; _i < _a.length; _i++) {
            var action = _a[_i];
            _loop_1(action);
        }
        // TSLint incorrectly thinks that `this.currentPage` is always defined. It's not.
        // tslint:disable-next-line
        if (saveHistory && this.currentPage !== undefined) {
            this.pageHistory.push(this.currentPage);
        }
        this.currentPage = id;
        if (this.pageHistory.length === 0) {
            this.backButton.style.display = 'none';
        }
        else {
            this.backButton.style.display = 'inline-block';
        }
    };
    PageManager.prototype.goBack = function () {
        var lastPg = this.pageHistory.pop();
        if (lastPg !== undefined)
            this.loadPageWithID(lastPg, false);
    };
    return PageManager;
}());
var pm = PageManager.Instance;
var titleEl = $('#title');
var contentEl = $('#content');
var linkEl = $('#link');
var linkButtonEl = $('#link-button');
var actionsEl = $('.actions');
document.addEventListener('DOMContentLoaded', function () {
    var isSafari = navigator.userAgent.indexOf('Safari') > -1;
    var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
    if (isSafari && !isChrome) {
        pm.loadPageWithID('no-safari');
    }
    else {
        pm.loadPageWithID('start');
    }
}, false);
