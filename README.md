# 📝 Offline Notes PWA

A fully offline-capable Progressive Web App (PWA) built using **React**, **Vite**, **Service Workers**, and **IndexedDB**. This project stores and retrieves notes offline, and allows installability on both desktop and mobile devices. It is optimized for offline-first behavior and includes real-time caching, storage, and full PWA support.


## 🚀 Features

- ⚛️ Built with React + Vite
- 🛠 Offline functionality using Service Workers
- 🧠 Data persistence via IndexedDB
- 📦 Static asset caching using Cache Storage API
- 🧭 Installable PWA with manifest and icons
- 💾 Works on both desktop and mobile
- 📶 Supports full offline access and usage
- 🌐 Deployed securely via Netlify


## 📚 What I Learned

- Creating and registering a **Service Worker**
- Caching strategies with `install` and `fetch` event listeners
- Setting up **IndexedDB** for local data storage using the `idb` package
- Detecting and handling offline behavior
- Building a PWA that works reliably across devices


- Dynamically managing and updating the cache
- Implementing a custom **PWA install prompt**
- Creating and linking a `manifest.webmanifest`
- Serving app through `vite preview` for accurate service worker testing
- Ensuring full offline support even on **mobile browsers** (with HTTPS)
- Handling platform-specific differences (like Safari on iOS vs Chrome on Android)
- Understanding Cache API vs IndexedDB for different data types



## 🛠 Tech Stack

- **Frontend**: React 18+, Vite
- **Offline DB**: IndexedDB (via `idb` wrapper)
- **Cache**: Cache Storage API
- **Service Worker**: Native registration & events
- **Deployment**: Netlify


## 📦 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/offline-notes-pwa.git
   cd offline-notes-pwa
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Build and preview production:

   ```bash
   npm run build
   npm run preview
   ```

5. For offline test:

   - Run `npm run preview`
   - Open in browser and test with DevTools > Network > Offline



## 📱 Mobile Support

- Fully installable on Android and iOS
- Icons and splash screen handled via `manifest.webmanifest`
- Add to Home Screen supported via browser prompt or custom button



## 📂 Folder Structure

```
public/
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── sw.js              # Service worker
├── manifest.webmanifest
src/
├── App.jsx            # Main UI
├── main.jsx           # App entry point
├── utils/db.js        # IndexedDB logic
```



## 📦 Deployment (Netlify)

1. Run:
   ```bash
   npm run build
   ```
2. Upload `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Test installability + offline support



## 📌 Final Thoughts

This project helped me go from:

- Understanding simple state management
- To building a secure, installable offline-first web app

It deepened my knowledge in:

- PWA architecture
- Service Worker caching strategies
- Real-world IndexedDB usage
- Mobile vs desktop browser differences
- Debugging MIME-type, scope, and cache issues



## 🔗 License

MIT © 2025 Your Name

