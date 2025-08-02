# راهنمای تنظیم ارسال ایمیل با EmailJS

## مراحل تنظیم:

### 1. ثبت‌نام در EmailJS

- به [emailjs.com](https://www.emailjs.com) بروید
- یک حساب کاربری رایگان ایجاد کنید
- وارد حساب کاربری خود شوید

### 2. تنظیم Email Service

- در Dashboard، روی "Email Services" کلیک کنید
- "Add New Service" را بزنید
- یکی از گزینه‌های زیر را انتخاب کنید:
  - **Gmail** (پیشنهادی)
  - **Outlook**
  - **SMTP**

### 3. ایجاد Email Template

- در Dashboard، روی "Email Templates" کلیک کنید
- "Create New Template" را بزنید
- یک نام برای template انتخاب کنید (مثل "Contact Form")
- محتوای ایمیل را به شکل زیر بنویسید:

```html
<h2>درخواست جدید از وب‌سایت</h2>

<p><strong>نام:</strong> {{from_name}}</p>
<p><strong>ایمیل:</strong> {{from_email}}</p>
<p><strong>موضوع:</strong> {{subject}}</p>
<p><strong>پیام:</strong></p>
<p>{{message}}</p>

<hr />
<p><small>این ایمیل از فرم تماس وب‌سایت ارسال شده است.</small></p>
```

### 4. دریافت اطلاعات مورد نیاز

بعد از ایجاد template، این اطلاعات را کپی کنید:

- **User ID** (از Account > API Keys)
- **Service ID** (از Email Services)
- **Template ID** (از Email Templates)

### 5. به‌روزرسانی کد

در فایل `src/components/CallModal.vue`، این مقادیر را جایگزین کنید:

```javascript
// خط 49: User ID خود را جایگزین کنید
emailjs.init('YOUR_USER_ID')

// خط 51: ایمیل خود را جایگزین کنید
to_email: 'your-email@example.com'

// خط 59: Service ID خود را جایگزین کنید
;('YOUR_SERVICE_ID')

// خط 60: Template ID خود را جایگزین کنید
;('YOUR_TEMPLATE_ID')
```

### مثال کامل:

```javascript
emailjs.init('user_abc123def456')
to_email: 'nima@example.com'
;('YOUR_SERVICE_ID') // service_xyz789
;('YOUR_TEMPLATE_ID') // template_abc123
```

## تست کردن

1. فرم را پر کنید
2. دکمه "Send request" را بزنید
3. ایمیل خود را بررسی کنید

## نکات مهم

- **رایگان:** EmailJS تا 200 ایمیل در ماه رایگان است
- **امن:** API keys شما محفوظ هستند
- **سریع:** تنظیم در کمتر از 10 دقیقه

## عیب‌یابی

اگر ایمیل ارسال نمی‌شود:

1. Console را بررسی کنید
2. User ID, Service ID, و Template ID را چک کنید
3. Email Service را بررسی کنید
4. Template را بررسی کنید

## پشتیبانی

- [مستندات EmailJS](https://www.emailjs.com/docs/)
- [نمونه‌های کد](https://www.emailjs.com/docs/examples/)
