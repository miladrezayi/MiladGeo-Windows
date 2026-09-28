# MiladGeo Windows v3

مبنای برنامه: index135.html

تغییرات v3:
- نسخه Windows با پنجره افقی و حداقل اندازه دسکتاپی
- لایه UI مخصوص Windows بدون تغییر منطق نسخه مرجع
- Excel به صورت local داخل برنامه بسته‌بندی می‌شود
- خروجی فقط Installer واقعی `MiladGeo-Setup.exe`
- نسخه موبایل/Telegram از این فایل جدا می‌ماند

نکته: برای منوی دسکتاپ، این نسخه یک لایه presentation مخصوص Windows اضافه می‌کند و منطق اصلی index135 را تغییر نمی‌دهد.


### V4 Excel Offline Fix
- Excel engine is bundled directly as `xlsx-engine.js` in the application source.
- The Windows app does not depend on the internet/CDN for Excel import.
- Version bumped to 1.3.0 so the Squirrel installer performs a real update over 1.2.0.
- Windows desktop mode is activated explicitly after page load.


### V5
- منوی دسکتاپ حرفه‌ای‌تر و واکنش‌گرا شد.
- Menu 4 / POINTS: ورود فایل TXT/CSV نقشه‌برداری با تشخیص خودکار جداکننده کاما، فاصله، Tab و ;.
- تشخیص/ورود PENZD, PNEZD, NEZ, ENZ, XYZ.
- خروجی PENZD/PNEZD/NEZ/ENZ/CSV و Leica ASCII.
- نسخه برنامه 1.4.0 است.
- برای GSI واقعی Leica باید مدل و تنظیمات GSI 8/16 مشخص شود؛ فایل generic ASCII با ساختار Point/Easting/Northing/Height/Code جداست.
