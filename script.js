const shareButton = document.querySelector('.share-button');
const sharePopup = document.querySelector('.share-popup');

shareButton.addEventListener('click', () => {
  sharePopup.classList.toggle('hidden');
});

// Click în afara popup-ului îl închide
document.addEventListener('click', (event) => {
  if (!sharePopup.contains(event.target) && !shareButton.contains(event.target)) {
    sharePopup.classList.add('hidden');
  }
});
