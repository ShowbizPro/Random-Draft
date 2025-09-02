const resultDiv = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

const options = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];

async function fetchResult() {
  const res = await fetch(`https://raw.githubusercontent.com/${GITHUB_USERNAME}/${REPO_NAME}/${BRANCH}/${FILE_PATH}`);
  const data = await res.json();
  resultDiv.textContent = `Last result: ${data.result}`;
}

async function spinWheel() {
  const newResult = options[Math.floor(Math.random() * options.length)];
  resultDiv.textContent = `You spun: ${newResult}`;

  // ✅ POST to your backend or GitHub Action webhook here to update result.json
  // Since frontend can't write directly to GitHub (security), this part is delegated
}

// Initial load
fetchResult();
setInterval(fetchResult, 5000);

spinButton.addEventListener('click', spinWheel);
