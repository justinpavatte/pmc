function detectPlatform() {
  let platform = 'Unknown platform';

  // Attempt to use User-Agent Client Hints
  if (navigator.userAgentData) {
      const data = navigator.userAgentData;
      if (data.platform) {
          platform = data.platform;
          return platform;
      }
  }

  // Fallback to parsing navigator.userAgent
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Windows NT')) {
      platform = 'Windows';
  } else if (userAgent.includes('Android')) {
      platform = 'Android';
  } else if (userAgent.includes('iPhone')) {
      platform = 'iPhone';
  } else if (userAgent.includes('iPad')) {
      platform = 'iPad';
  } else if (userAgent.includes('Macintosh') || userAgent.includes('Mac OS X')) {
      platform = 'macOS';
  } else if (userAgent.includes('Linux')) {
      platform = 'Linux';
  }

  if (platform !== 'Unknown platform') {
      return platform;
  }

  // Fallback to navigator.platform as the last resort
  platform = navigator.platform;
  console.log(`Detected platform using navigator.platform: ${platform}`);
  return platform;
}

async function writeToLog(message) {
    let apiUrl =  "https://api.todoist.com/rest/v2/comments";
    //Public Todoist account. Google Curtis.
    let apiToken = "8972a19cadcc698cf4843761485fd359165c061b";
    let taskId = "7994854973";

    let p = detectPlatform();
    let environmentString = `
Platform: ${p}
Platform(Legacy): ${navigator.platform}
Screen: ${screen.width}x${screen.height} @ ${screen.colorDepth} bits
Language: ${navigator.language || navigator.languages[0]}
Time Zone Enabled: ${typeof Intl !== 'undefined' && Intl.DateTimeFormat().resolvedOptions().timeZone}
`;

    let commentData = {
      task_id: taskId,
      content: message + environmentString
    };
    let response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });
    console.log(response.status);
}