async function writeToLog(message) {
    let apiUrl =  "https://api.todoist.com/rest/v2/comments";
    //Todoist account is Curtis Google
    let apiToken = "8972a19cadcc698cf4843761485fd359165c061b";
    let taskId = "7994854973";

    let environmentString = `
User Agent: ${navigator.userAgent}
App Name: ${navigator.appName}
Platform: ${navigator.platform}
Language: ${navigator.language || navigator.languages[0]}
Screen: ${screen.width}x${screen.height} @ ${screen.colorDepth} bits
Viewport: ${window.innerWidth}x${window.innerHeight}
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