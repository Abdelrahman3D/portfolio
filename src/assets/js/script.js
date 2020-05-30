(function() {
  initServiceWorker();
})();

function initServiceWorker() {
  if (!navigator.serviceWorker) return;

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then((swReg) => {
        return swReg;
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error('Service Worker Error', err);
      });
  });
}
