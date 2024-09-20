console.log('background script loaded');
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes('meetsmore.com')) {
    chrome.action.enable(tabId);
  } else {
    chrome.action.disable(tabId);
  }
});

chrome.action.onClicked.addListener((tab) => {
  console.log('background script loaded 3');
  if (tab.id && tab.url && tab.url.includes('meetsmore.com')) {
    chrome.tabs.sendMessage(tab.id, { action: "toggleRibbon" });
  }
});