document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('optionsForm') as HTMLFormElement;
  const repoInput = document.getElementById('repoUrl') as HTMLInputElement;
  const pagesInput = document.getElementById('pageUrls') as HTMLInputElement;
  const status = document.getElementById('status');

  // Load saved options
  chrome.storage.sync.get(['repoUrl', 'pageUrls'], (result) => {
    repoInput.value = result.repoUrl || '';
    pagesInput.value = result.pageUrls || '';
  });

  // Save options
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    chrome.storage.sync.set(
      {
        repoUrl: repoInput.value,
        pageUrls: pagesInput.value,
      },
      () => {
        // Update status to let user know options were saved.
        if (status) {
          status.textContent = 'Options saved.';
          status.style.display = 'block';
          setTimeout(() => {
            status.style.display = 'none';
          }, 3000);
        }
      }
    );
  });
});