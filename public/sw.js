// MST Yazar — servis çalışanı
// Strateji: uygulama kabuğu önbellekte, VERİ ASLA önbellekte.
// Telif ve satış rakamları eski gösterilirse yanlış bilgi olur; o yüzden
// /api/ istekleri hiç dokunulmadan ağa gider.
const SURUM = "mst-yazar-v2-amiral";
const KABUK = ["/", "/index.html", "/manifest.webmanifest", "/icons/icon-192.png", "/icons/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(KABUK)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((adlar) => Promise.all(adlar.filter((a) => a !== SURUM).map((a) => caches.delete(a))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  // API ve farklı alan adları: dokunma, doğrudan ağa gitsin
  if (url.pathname.startsWith("/api/") || url.origin !== self.location.origin) return;
  if (e.request.method !== "GET") return;

  // Sayfa gezinmeleri: önce ağ (güncel sürüm gelsin), internet yoksa önbellekteki kabuk
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then((y) => { const k = y.clone(); caches.open(SURUM).then((c) => c.put("/index.html", k)); return y; })
        // Ağ yoksa önbellekteki kabuğu ver. Önbellekte de yoksa caches.match
        // undefined döner ve respondWith "Failed to convert value to Response"
        // ile patlar — bu durumda ekran bomboş kalır. Bu yüzden her hâlükârda
        // geçerli bir Response üretiyoruz.
        .catch(() => caches.match("/index.html").then((y) => y || new Response(
          "<!doctype html><meta charset='utf-8'><title>Bağlantı yok</title>" +
          "<body style='background:#070D1B;color:#F5F0E4;font-family:sans-serif;" +
          "display:flex;align-items:center;justify-content:center;height:100vh;text-align:center'>" +
          "<div><p>İnternet bağlantısı kurulamadı.</p>" +
          "<p style='opacity:.6;font-size:14px'>Bağlantınızı kontrol edip sayfayı yenileyin.</p></div>",
          { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } })))
    );
    return;
  }

  // Statik dosyalar: önbellekten ver, arkada tazele
  e.respondWith(
    caches.match(e.request).then((onbellek) => {
      const ag = fetch(e.request).then((y) => {
        if (y && y.status === 200) { const k = y.clone(); caches.open(SURUM).then((c) => c.put(e.request, k)); }
        return y;
      }).catch(() => onbellek);
      // onbellek yoksa ag; ag da başarısızsa undefined dönmesin diye son çare.
      return onbellek || ag.then((y) => y || Response.error());
    })
  );
});
