# EmailJS Integration Setup Guide

## Contact Form Fields That Will Be Sent:

✅ **Name** - Your full name
✅ **Company** - Company/Organization name  
✅ **Email** - Your email address
✅ **Phone** - Your phone number (format: +92XXXXXXXXX)
✅ **Service** - Selected service from dropdown
✅ **Message** - Your inquiry message
✅ **Submitted At** - Timestamp (auto-added, Pakistan time)

---

## What You Need to Do:

### Step 1: Go to EmailJS Website
1. Visit: https://www.emailjs.com/
2. Click "Sign Up" and create a free account

### Step 2: Add Gmail Service
1. In dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail**
4. Click **Connect Account** and authorize your Gmail
5. Copy your **Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Name: `template_contact`
4. Copy and paste this template:

```
Subject: New Business Inquiry from {{from_name}}

From: {{from_name}} ({{from_email}})
Company: {{company}}
Phone: {{phone}}
Service: {{service}}
Submitted: {{submitted_at}}

Message:
{{message}}

---
To: {{to_email}}
```

5. Click **Save**
6. Copy your **Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Your Public Key
1. Go to **Account** settings
2. Copy your **Public Key** (looks like: `abcd1234efgh5678...`)

### Step 5: Update Configuration
Open this file: `lib/email-service.ts`

Replace these three values at the top:
```typescript
const SERVICE_ID = "service_xxxxx";        // Your Service ID
const TEMPLATE_ID = "template_contact";    // Your Template ID
const PUBLIC_KEY = "your_public_key_here"; // Your Public Key
```

### Step 6: Test It!
1. Run: `npm run dev`
2. Go to Contact page
3. Fill form and submit
4. Check your email at nexvoratechnology.online@gmail.com

---

## Troubleshooting:

**Email not received?**
- Check SPAM folder
- Verify all three credentials are correct (no extra spaces)
- Check browser console for errors (F12)

**"Failed to send email" message?**
- Gmail account might need 2FA enabled
- Check EmailJS dashboard for errors
- Verify email template variable names match exactly

---

## All Form Locations on Your Site:

1. ✅ `/contact` page - Main contact form with info panels
2. ✅ `/` homepage - Business Inquiry section (bottom)
3. ✅ All other pages - Contact form will work on any page

Each form submission will send an email to: **nexvoratechnology.online@gmail.com**

---

## Email Template Variables Reference:

When setting up your template, use these exact variable names:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{company}}` - Visitor's company
- `{{phone}}` - Visitor's phone
- `{{service}}` - Selected service type
- `{{message}}` - Inquiry message
- `{{submitted_at}}` - Submission timestamp
- `{{to_email}}` - Your email (nexvoratechnology.online@gmail.com)
