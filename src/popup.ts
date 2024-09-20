document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const optionsButton = document.getElementById('optionsButton');

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "toggleRibbon" });
        }
      });
    });
  }

  if (optionsButton) {
    optionsButton.addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  }
});