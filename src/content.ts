let ribbonVisible = false;

function isMeetsmorePage(): boolean {
  return window.location.hostname.includes('meetsmore.com');
}

function getMetaContentByName(metaName: string): string | null {
  const metaElement = document.querySelector(`meta[name="${metaName}"]`);
  return metaElement ? metaElement.getAttribute('content') : null;
}

function injectRibbonScript(): void {
  if (isMeetsmorePage()) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('VersionRibbon.js');
    (document.head || document.documentElement).appendChild(script);

    // Dispatch showRibbon event after script injection
    script.onload = () => {
      const sha = getMetaContentByName('revision-short-sha') || 'N/A';
      document.dispatchEvent(new CustomEvent('showRibbon', { detail: { sha } }));
      ribbonVisible = true;
    };
  }
}

function toggleRibbon(): void {
  if (isMeetsmorePage()) {
    const sha = getMetaContentByName('revision-short-sha') || 'N/A';
    if (ribbonVisible) {
      document.dispatchEvent(new CustomEvent('hideRibbon'));
    } else {
      document.dispatchEvent(new CustomEvent('showRibbon', { detail: { sha } }));
    }
    ribbonVisible = !ribbonVisible;
  }
}

chrome.runtime.onMessage.addListener((request: { action: string }, sender, sendResponse) => {
  if (request.action === "toggleRibbon") {
    toggleRibbon();
  }
});

injectRibbonScript();