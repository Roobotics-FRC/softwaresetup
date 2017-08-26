const pages: Page[] = [
  Page.quick('start',
    'Welcome to Team 4373\'s software setup guide',
    'This guide will walk you through the process of setting up your computer for software development.',
    'os-select'
  ),
  new Page('os-select',
    'Select your operating system',
    'Please select the OS running on your computer.',
    [new Button('macOS', 'java', 'setOS:mac'), new Button('Windows', 'java', 'setOS:windows'), new Button('Something else', 'unknown-os')]
  ),
  Page.quick('unknown-os',
    'Seek Help',
    'Your OS is not common enough to be included in this guide. Please seek help from me in person.'
  ),
  new Page('java',
    'Install JDK',
    'Install the JDK software from the link below. You will need to click the "Accept License Agreement" button before downloading. If you are on Windows, download the Windows x64 version. If you are on macOS, download the Mac OS X version. Run the installer once it is downloaded. Ensure that you are downloading the Java SE Development Kit, NOT the Demos and Samples.',
    [new Button('Continue', 'eclipse')],
    'http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html',
    'http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html'
  ),
  new Page('eclipse',
    'Install Eclipse',
    'If you are not on AFS\'s Wi-Fi, use the link below to download the Eclipse Installer, then run the Installer. You want to install the <strong>Eclipse IDE for Java Developers</strong>. If you are at AFS or if the Installer is not working, click the "Manual Installation" button below.',
    [new Button('Continue', 'wpilib'), new Button('Manual Installation', 'manual-eclipse')],
    'https://www.eclipse.org/downloads/download.php?file=/oomph/epp/oxygen/R/eclipse-inst-mac64.tar.gz&r=1',
    'https://www.eclipse.org/downloads/download.php?file=/oomph/epp/oxygen/R/eclipse-inst-win64.exe&r=1'
  ),
  new Page('manual-eclipse',
    'Manual Eclipse Installation',
    'To install Eclipse manually, download the file below, then move the extracted file(s) to /Applications on macOS, or your home folder on Windows.',
    [new Button('Continue', 'wpilib')],
    'http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/oxygen/R/eclipse-java-oxygen-R-macosx-cocoa-x86_64.dmg',
    'http://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/oxygen/R/eclipse-java-oxygen-R-win32-x86_64.zip'
  ),
  Page.quick('wpilib',
    'Install the WPILib plugin',
    'To install the WPILib plugin for Eclipse: <ul>'
      + '<li>Open Eclipse (use the default workspace if prompted).</li>'
      + '<li>Select the Help menu within Eclipse, then choose "Install new software"</li>'
      + '<li>Click "Add" and enter the name <code>WPILib</code> and the location <code>http://first.wpi.edu/FRC/roborio/release/eclipse/</code></li>'
      + '<li>Click "OK"</li>'
      + '<li>Make sure that the only checkbox selected is the one next to "Robot Java Development"&mdash;NOT "Robot C++ Development"</li>'
      + '<li>Click "Next", accept the license agreement, and click "OK" on the security warning.</li>'
      + '<li>Restart Eclipse when prompted, then close out of it.</li>'
      + '</ul>',
    'git-client'
  ),
  new Page('git-client',
    'Install GitHub Desktop',
    'GitHub Desktop is the recommended Git client for beginning Git users. Please use the link below to download it.',
    [new Button('Continue', 'vision-processing')],
    'https://central.github.com/deployments/desktop/desktop/latest/darwin',
    'https://central.github.com/deployments/desktop/desktop/latest/win32'
  ),
  new Page('vision-processing',
    'Vision Processing',
    'If you are interested in working on vision processing, you will need to install OpenCV. If you are not interested in working on VP, skip this step.'
      + '<br>Windows users should follow the link below, click the "Win pack" link for the 3.3.0 version, and extract the downloaded .exe file to the Downloads folder using a program like 7-Zip.'
      + '<br>Mac users should contact me to get this set up.',
    [new Button('Continue', 'slack')],
    undefined,
    'http://opencv.org/releases.html'
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
    'You will need to create a GitHub account to access our Git repos. Please follow the link below to create one (choose the free plan), then contact me for an invite to our organization.'
      + '<br>If you are interested in receiving the benefits of a GitHub for Education account, send me an email for more information.',
    [new Button('Continue', 'end')],
    'https://github.com/join',
    'https://github.com/join'
  ),
  Page.quick('end',
    'You\'re all set up!',
    'You are good to go. Might I suggest taking this opportunity to brush up on your Java skills?'
  ),
  Page.quick('no-safari',
    'Use a different browser',
    'Safari interferes with the installation of certain vital components. Google Chrome is the recommended browser for this setup process. If you have no choice but to use Safari, contact me for help.'
  )
]
