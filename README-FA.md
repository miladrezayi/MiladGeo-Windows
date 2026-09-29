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


## V11 — Mouse Menu Click Fix
- رفع مسیر کلیک موس روی INPUT JOB و منوهای 1 تا 16 در Windows.
- اضافه شدن hit-testing صریح و click bridge در capture phase.
- نسخه برنامه: 1.9.0.
- این ZIP دقیقاً 8 فایل دارد.


## V12 — Job / Point / KML-KMZ final fixes
- دکمه INPUT JOB در Windows هم‌اندازه کارت‌های منوی اصلی شد.
- کنار نام Job وضعیت با 🔴/🟢 نمایش داده می‌شود.
- پنج فیلد ورود دستی PENZD در Windows در یک ردیف قرار گرفتند.
- IMPORT TO POINTS و CLEAR LIST در یک ردیف قرار گرفتند و Preview ردیف بالایی است.
- KML و KMZ در Windows از Save Dialog واقعی Electron استفاده می‌کنند تا فایل واقعاً روی سیستم ذخیره شود.
- خطای Syntax داخل PDF که اجرای کل JavaScript و کلیک منوها را مختل می‌کرد، اصلاح شد.
- نسخه برنامه به 2.0.0 ارتقا یافت.

## V13 — Windows UI / Import / Job / KML final pass
- Preview و Import یکی شدند: با `PREVIEW / IMPORT` هم پیش‌نمایش انجام می‌شود و هم فایل وارد Point List می‌شود.
- `IMPORT TO POINTS` حذف شد و `PREVIEW / IMPORT` کنار `CLEAR LIST` قرار گرفت.
- پنج ورودی دستی PENZD در یک ردیف فشرده و هم‌سطح نگه داشته شدند.
- کارت JOB در دسکتاپ وسط‌چین شد و دکمه JOB دقیقاً در محور بالای منوهای 2 و 3 قرار می‌گیرد.
- فضای ذخیره‌سازی Windows به namespace جدید منتقل شد تا JOB آزمایشی قبلی (مثل `g`) در اجرای V13 نمایش داده نشود؛ Telegram همچنان با Telegram User ID فضای یکتای خودش را دارد.
- مسیر ذخیره KML/KMZ در Windows مقاوم‌تر شد و در صورت خطای Native Save به fallback فایل واقعی برمی‌گردد.
- نسخه برنامه: `2.1.0`.
