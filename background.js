chrome.commands.onCommand.addListener((command) => {
  if (command === "generate-password") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { message: "generate-password" });
    });
  }
});
