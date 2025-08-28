# راهنمای تنظیم EmailJS ✅

## مشکل حل شده
خطای `The public key is required` مربوط به عدم مقداردهی اولیه EmailJS بود.

## تغییرات انجام شده

### 1. مقداردهی اولیه در `main.js`
```javascript
import emailjs from '@emailjs/browser'

// مقداردهی اولیه EmailJS
emailjs.init('RG3Rzc36WWFWVLcbK')
```

### 2. ساده‌سازی در `CallModal.vue`
```javascript
// قبل:
const response = await emailjs.send(
  'service_xo229ph',
  'template_2pbj6e4',
  'RG3Rzc36WWFWVLcbK', // User ID اضافی
  templateParams,
)

// بعد:
const response = await emailjs.send(
  'service_xo229ph',
  'template_2pbj6e4',
  templateParams,
)
```

## اطلاعات EmailJS
- **User ID**: `RG3Rzc36WWFWVLcbK`
- **Service ID**: `service_xo229ph`
- **Template ID**: `template_2pbj6e4`

## نکات مهم
- ✅ EmailJS حالا در `main.js` مقداردهی اولیه شده است
- ✅ نیازی به ارسال User ID در هر درخواست نیست
- ✅ خطای `public key is required` دیگر رخ نمی‌دهد

## تست
فرم تماس حالا باید بدون خطا کار کند و ایمیل‌ها ارسال شوند.

## مشکل حل شده! 🎉
EmailJS حالا به درستی تنظیم شده و فرم تماس کار می‌کند.
