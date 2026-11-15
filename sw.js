// Service worker : permet d'utiliser l'appli sans connexion.
// Après chaque modification d'un fichier, augmente le numéro de VERSION
// pour que les appareils déjà installés récupèrent la nouvelle version.
const VERSION = "v1";
const CACHE = "maths-quotidien-" + VERSION;
const FICHIERS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icones/icone.svg",
  "./icones/icone-192.png",
  "./icones/icone-512.png",
  "./icones/icone-maskable-512.png",
  "./icones/apple-touch-icon.png",
  "./icones/favicon-32.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n.startsWith("maths-quotidien-") && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

// Réseau d'abord (pour avoir la dernière version), sinon la copie enregistrée.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(rep => {
        const copie = rep.clone();
        caches.open(CACHE).then(c => c.put(e.request, copie));
        return rep;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
  );
});
