document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
  const optionsButton = document.getElementById('optionsButton');

  // Load the current ribbon visibility state
  chrome.storage.sync.get(['ribbonVisible'], (result) => {
    const ribbonVisible = result.ribbonVisible !== undefined ? result.ribbonVisible : true;
    updateToggleButtonText(toggleButton, ribbonVisible);
  });

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0].id) {
          chrome.tabs.sendMessage(tabs[0].id, { action: "toggleRibbon" });

          // Update button text after toggling
          chrome.storage.sync.get(['ribbonVisible'], (result) => {
            updateToggleButtonText(toggleButton, result.ribbonVisible);
          });
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

function updateToggleButtonText(button: HTMLButtonElement, isVisible: boolean) {
  button.textContent = isVisible ? 'Hide Ribbon' : 'Show Ribbon';
}