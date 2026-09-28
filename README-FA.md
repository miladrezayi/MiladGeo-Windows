# MiladGeo Windows v10

مبنای این نسخه: `MiladGeo-Windows-v9.html`

### اصلاحات V10
- منوی JOB در دسکتاپ واقعاً با CSS فعال دسکتاپ اصلاح شد و به کارت عریض حرفه‌ای تبدیل شد.
- ورود دستی PENZD در Menu 4 روی دسکتاپ در **یک سطر** قرار می‌گیرد: Point / X / Y / Z / DP.
- Menu 4 با عنوان **POINT / TXT** حفظ شده است.
- کنار `IMPORT TO POINTS` دکمه `CLEAR LIST` قرار دارد و لیست را پاک می‌کند.
- ورود TXT/PENZD برای یک محتوای فایل، با fingerprint داخلی فقط یک بار انجام می‌شود؛ زدن Import چندبار نقطه تکراری اضافه نمی‌کند.
- با `CLEAR LIST` حافظه فایل‌های واردشده نیز پاک می‌شود تا بعداً بتوان همان فایل را دوباره وارد کرد.
- خروجی KML و KMZ در Windows از مسیر Native Save Dialog خود ویندوز ذخیره می‌شود؛ بنابراین دیگر به دانلود Blob مرورگر وابسته نیست.
- Excel engine به‌صورت local در `xlsx-engine.js` بسته‌بندی شده و به CDN وابسته نیست.
- نسخه برنامه به `1.8.0` افزایش یافته تا نصب‌کننده Squirrel به‌عنوان نسخه جدید شناسایی شود.

### تعداد فایل‌های این بسته
دقیقاً ۸ فایل پروژه در ZIP قرار دارد:
1. `index.html`
2. `main.js`
3. `preload.js`
4. `package.json`
5. `forge.config.js`
6. `xlsx-engine.js`
7. `.github/workflows/main.yml`
8. `README-FA.md`

### Build
فایل‌ها را در مخزن GitHub جایگزین کن و Commit بزن. سپس GitHub Actions را اجرا کن. خروجی فقط `MiladGeo-Setup.exe` است.
