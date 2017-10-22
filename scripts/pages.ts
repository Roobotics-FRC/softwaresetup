const pages: Page[] = [
  Page.quick('start',
    'Welcome to Team 4373\'s software setup guide',
    'This guide will walk you through the process of setting up your computer for software development.',
    'os-select'
  ),
  new Page('os-select',
    'Select your operating system',
    'Please select the OS running on your computer.',
    [new Button('macOS', 'java', ButtonAction.SetMac), new Button('Windows', 'java', ButtonAction.SetWindows), new Button('Chrome OS', '', ButtonAction.SetChrome), new Button('Other', 'unknown-os')]
  ),
  Page.quick('unknown-os',
    'Seek Help',
    'Your OS is not common enough to be included in this guide. Please seek help from me in person.'
  ),
  new Page('java',
    'Install JDK',
    'Install the JDK software from the link below. You will need to click the "Accept License Agreement" button before downloading. If you are on Windows, download the Windows x64 version. If you are on macOS, download the Mac OS X version. Run the installer once it is downloaded. Ensure that you are downloading the Java SE Development Kit, NOT the Demos and Samples.',
    [new Button('Continue', 'intellij')],
    'http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html',
    'http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html'
  ),
  new Page('intellij',
    'Install IntelliJ',
    'Please use the link below to download IntelliJ Community Edition, then install the software once the download completes. If you are on Windows, select the checkboxes next to "64-bit launcher" and ".java" when running the installer, and leave all other values as default.',
    [new Button('Continue', 'checkstyle')],
    'https://www.jetbrains.com/idea/download/download-thanks.html?platform=mac&code=IIC',
    'https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC'
  ),
  Page.quick('checkstyle',
  'Install the Checkstyle plugin',
  'Checkstyle makes sure your code is clean and readable. To install it:<ul>'
    + '<li>Open IntelliJ</li>'
    + '<li>Click the "Configure" button at the bottom right, then select "Plugins" from the list</li>'
    + '<li>Click the "Browse Repositories..." button at the bottom of the window that opens</li>'
    + '<li>Use the search box to search for "CheckStyle-IDEA" and install the plugin that comes up by clicking the green Install button</li>'
    + '<li>Quit IntelliJ</li>'
    + '</ul>',
  'wpilib'
),
  new Page('wpilib',
    'Install the WPILib plugins',
    'Please download the ZIP file and extract it to your home directory (/Users/[your-username] on macOS and C:\\Users\\[your-username] on Windows).',
    [new Button('Continue', 'git-client')],
    '/softwaresetup/wpilib.zip',
    '/softwaresetup/wpilib.zip'
  ),
  new Page('git-client',
    'Install GitHub Desktop',
    'GitHub Desktop is the recommended Git client for beginning Git users. Please use the link below to download it.',
    [new Button('Continue', 'slack')],
    'https://central.github.com/deployments/desktop/desktop/latest/darwin',
    'https://central.github.com/deployments/desktop/desktop/latest/win32'
  ),
  new Page('slack',
    'Sign up for Slack',
    'If you have not yet signed up for a Slack account, please do so by following the link below. You <strong>must</strong> use your AFS email address. You should enter your real name and make your username something recognizable '
      + '(a recommended convention is the last two digits of your year of graduation, followed by your first name, followed by your last initial).',
    [new Button('Continue', 'trello')],
    'https://team4373.slack.com/signup',
    'https://team4373.slack.com/signup'
  ),
  new Page('trello',
    'Sign up for Trello',
    'Please create a Trello account using the link below. Once you have created an account, send me your username so you can be added to the Trello team.',
    [new Button('Continue', 'github')],
    'https://trello.com/signup',
    'https://trello.com/signup'
  ),
  new Page('github',
    'Sign up for GitHub',
    'You will need to create a GitHub account to access our Git repos. Please follow the link below to create one (choose the free plan), then contact me for an invite to our organization.',
    [new Button('Continue', 'end')],
    'https://github.com/join',
    'https://github.com/join'
  ),
  Page.quick('end',
    'Setup complete!',
    'You are good to go for now. We will continue setting up IntelliJ during our meetings.'
  ),
  Page.quick('no-safari',
    'Use a different browser',
    'Safari interferes with the installation of certain vital components. Google Chrome is the recommended browser for this setup process. If you have no choice but to use Safari, contact me for help.'
  )
]
