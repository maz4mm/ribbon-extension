interface RibbonEvent extends Event {
  detail?: {
    sha: string;
  };
}

(function () {
  let ribbonElement: HTMLDivElement | null = null;

  function createRibbon(sha: string): HTMLDivElement {
    const ribbon = document.createElement('div');
    ribbon.style.position = 'fixed';
    ribbon.style.bottom = '10px';
    ribbon.style.left = '20px';
    ribbon.style.width = '500px';
    ribbon.style.padding = '2px';
    ribbon.style.margin = '-12px 0 0 -250px';
    ribbon.style.fontSize = '12px';
    ribbon.style.textAlign = 'center';
    ribbon.style.color = 'white';
    ribbon.style.background = '#7B1FA2';
    ribbon.style.transform = 'rotate(45deg)';
    ribbon.style.zIndex = '2000';
    ribbon.style.opacity = '0.8';
    ribbon.style.cursor = 'pointer';

    const ribbonText = document.createElement('a');
    ribbonText.style.padding = '3px';
    ribbonText.style.border = '1px dashed #E1BEE7';
    ribbonText.style.color = 'white';
    ribbonText.style.textDecoration = 'none';
    ribbonText.href = `https://github.com/meetsmore/meetsmore/commits/${sha}`;
    ribbonText.target = '_blank';
    ribbonText.textContent = sha;

    ribbon.appendChild(ribbonText);
    document.body.appendChild(ribbon);

    return ribbon;
  }

  function showRibbon(event: RibbonEvent): void {
    if (!ribbonElement && event.detail) {
      ribbonElement = createRibbon(event.detail.sha);
    }
    if (ribbonElement) {
      ribbonElement.style.display = 'block';
    }
  }

  function hideRibbon(): void {
    if (ribbonElement) {
      ribbonElement.style.display = 'none';
    }
  }

  document.addEventListener('showRibbon', showRibbon as EventListener);
  document.addEventListener('hideRibbon', hideRibbon as EventListener);
})();