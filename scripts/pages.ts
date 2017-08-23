const pages: Page[] = [
  Page.quick('start',
    'Welcome to Team 4373\'s software setup guide',
    'This guide will walk you through the process of setting up your computer for writing code for our robot.',
    'os-select'
  ),
  new Page('os-select',
    'Select your operating system',
    'Please select the OS running on your computer.',
    [new Button('macOS', 'java', 'setOS:mac'), new Button('Windows', 'java', 'setOS:windows'), new Button('Something else', 'unknown-os')]
  ),
  Page.quick('unknown-os',
    'Seek Help',
    'Your OS is not common enough to be included in this guide. Please seek help from the Robotics team in person.'
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
    'If you are not on AFS\'s Wi-Fi, use the link below to download the Eclipse Installer, then run the Installer. You want to install the Eclipse IDE for Java Developers. If you are at AFS or if the Installer is not working, click the "Manual Installation" button below.',
    [new Button('Continue', 'wpilib'), new Button('Manual Installation', 'manual-eclipse')],
    'https://www.eclipse.org/downloads/download.php?file=/oomph/epp/oxygen/R/eclipse-inst-mac64.tar.gz&r=1',
    'https://www.eclipse.org/downloads/download.php?file=/oomph/epp/oxygen/R/eclipse-inst-win64.exe&r=1'
  ),
  new Page('manual-eclipse',
    'Manual Eclipse Installation',
    'To install Eclipse manually, download the file below, then move the eclipse folder to /Applications on macOS, or your home folder on Windows.',
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
      + '<li>Restart Eclipse when prompted, then close Eclipse once it opens.</li>'
      + '</ul>',
    'git-client'
  ),
  new Page('git-client',
    'Install GitHub Desktop',
    'GitHub Desktop is the recommended Git client for beginning Git users. Please use the link below to download it.'
      + '<br>However, if you have experience with Git, and would like a Git client that is more fully-featured, check out some alternatives by clicking "View Alternatives" below.',
    [new Button('Continue', 'vision-processing'), new Button('View Alternatives', 'alternative-git')],
    'https://central.github.com/deployments/desktop/desktop/latest/darwin',
    'https://central.github.com/deployments/desktop/desktop/latest/win32'
  ),
  new Page('alternative-git',
    'Alternative Git Clients',
    'If you have significant experience with Git and would like a client that supports features like stashing, tags, and submodules, the options below are the recommendations of Team 4373.'
      + '<ul><li><strong>Fork</strong> is a powerful but lightweight Git client for macOS. If you are using a Mac and don\'t want the hassle of SourceTree, this is the way to go.</li>'
      + '<li><strong>SourceTree</strong> is Atlassian\'s Git client that works on both macOS and Windows. It is powerful, if not particularly friendly to the uninitiated.</li></ul>'
      + 'Use the buttons below to go to the download pages for each program.',
      [new Button('Fork (macOS only)', 'git-fork'), new Button('SourceTree', 'git-sourcetree')]
  ),
  new Page('git-fork',
    'Install Fork',
    'Fork is a macOS-only native Git client. Use the link below to install it.',
    [new Button('Continue', 'vision-processing')],
    'https://git-fork.com/update/files/Fork.dmg'
  ),
  new Page('git-sourcetree',
    'Install SourceTree',
    'SourceTree is an industry-standard, heavy-duty Git client for macOS and Windows. Use the link below to download it.',
    [new Button('Continue', 'vision-processing')],
    'https://downloads.atlassian.com/software/sourcetree/SourceTree_2.6.1b.zip?_ga=2.159574132.812906158.1503506139-1162072413.1503506139',
    'https://downloads.atlassian.com/software/sourcetree/windows/ga/SourceTreeSetup-2.1.10.0.exe?_ga=2.135964664.812906158.1503506139-1162072413.1503506139'
  ),
  new Page('vision-processing',
    'Vision Processing',
    'If you are interested in working on vision processing, you will need to install OpenCV. If you are not interested in working on VP, skip this step.'
      + '<br>Windows users should follow the link below, click the "Win pack" link for the 3.3.0 version, and extract the downloaded .exe file to the Downloads folder using a program like 7-Zip.'
      + '<br>Mac users should seek help from the Robotics team to get this set up.',
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
    'Please create a Trello account using the link below. Once you have created an account, send the Robotics team your username so you can be added to the Trello team.',
    [new Button('Continue', 'github')],
    'https://trello.com/signup',
    'https://trello.com/signup'
  ),
  new Page('github',
    'Sign up for GitHub',
    'You will need to create a GitHub account to access our Git repos. Please follow the link below to create one (choose the free plan), then contact the Robotics team for an invite to our organization.'
      + '<br>If you are interested in receiving the benefits of a GitHub for Education account, contact the Robotics team for more information.',
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
    'Safari interferes with the installation of certain vital components. Google Chrome is the recommended browser for this setup process. If you have no choice but to use Safari, contact the Robotics team for help.'
  )
]
