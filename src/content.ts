let ribbonVisible = false;
let repoUrl: string = '';
let pageUrls: string[] = [];

function isMeetsmorePage(): boolean {
  return window.location.hostname.includes('meetsmore.com');
}

function getMetaContentByName(metaName: string): string | null {
  const metaElement = document.querySelector(`meta[name="${metaName}"]`);
  return metaElement ? metaElement.getAttribute('content') : null;
}

// Load options before injecting the script
chrome.storage.sync.get(['repoUrl', 'pageUrls'], (result) => {
  repoUrl = result.repoUrl || '';
  pageUrls = result.pageUrls ? result.pageUrls.split(',').map((url: string) => url.trim()) : [];

  if (shouldRunOnThisPage()) {
    injectRibbonScript();
  }
});

function shouldRunOnThisPage(): boolean {
  if (pageUrls.length === 0) {
    return true; // Run on all pages if no specific pages are set
  }
  return pageUrls.some(url => window.location.href.includes(url));
}

function injectRibbonScript(): void {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL('VersionRibbon.js');
  (document.head || document.documentElement).appendChild(script);

  script.onload = () => {
    const sha = getMetaContentByName('revision-short-sha') || 'N/A';
    document.dispatchEvent(new CustomEvent('showRibbon', { detail: { sha, repoUrl } }));
    ribbonVisible = true;
  };
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