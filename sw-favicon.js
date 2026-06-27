self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.pathname === '/favicon.ico') {
    event.respondWith(
      Response.redirect(
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAg0lEQVR4nO3X0Q3AIAgE0JujK3dAx7EDNChnQCDhg1/vBRNBPMCMLDSA6cBLlOkVMMEsBJ7hGgS8w3cI3AhfIXArXEL8AJpD5pCLRVCAVTADEQFW4QyiBuAkfIdoQHegO1DrHbgGCJ8FKaZh+D6QYiNKsRNaImr/C04h2jPBADwqHPAB+Ftqt5RfrV0AAAAASUVORK5CYII=',
        302
      )
    );
  }
});
