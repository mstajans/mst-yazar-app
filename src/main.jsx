import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
)


// Servis çalışanı kaydı — uygulama olarak kurulabilmesi ve hızlı açılış için.
// Yeni sürüm yayınlandığında sayfa yenilenince otomatik devralır.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => { /* sessizce geç */ });
  });
}
