# Quick Start Guide - Implementing Recommendations

This guide will help you quickly implement the recommendations from the dependency analysis.

## Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org/))
- npm 9+ (comes with Node.js)
- Git installed

## Step 1: Install Dependencies (5 minutes)

```bash
# Navigate to project directory
cd kalendarz

# Install dependencies
npm install

# Verify installation
npm list
```

Expected output:
```
kalendarz@1.0.0
├── date-fns@3.0.6
└── validator@13.11.0
```

## Step 2: Set Up Development Environment (10 minutes)

```bash
# Install Vite for development server
npm install -D vite

# Start development server
npm run dev
```

Your app should now be running at `http://localhost:5173`

## Step 3: Choose Your Backend (30-60 minutes)

### Option A: Firebase (Recommended for Beginners)

1. **Create Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add Project"
   - Follow the wizard

2. **Install Firebase SDK**
   ```bash
   npm install firebase
   ```

3. **Create `src/firebase.js`**
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';
   import { getAuth } from 'firebase/auth';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const auth = getAuth(app);
   ```

4. **Create `.env` file**
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

5. **Update `src/firebase.js` to use environment variables**
   ```javascript
   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID
   };
   ```

### Option B: Supabase (Open Source Alternative)

1. **Create Supabase Project**
   - Go to [Supabase](https://supabase.com/)
   - Click "Start your project"
   - Follow the wizard

2. **Install Supabase SDK**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Create `src/supabase.js`**
   ```javascript
   import { createClient } from '@supabase/supabase-js';

   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

   export const supabase = createClient(supabaseUrl, supabaseAnonKey);
   ```

4. **Create `.env` file**
   ```env
   VITE_SUPABASE_URL=your_supabase_url_here
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

## Step 4: Migrate from localStorage to Database

### Example: Migrating Schedule Storage (Firebase)

**Before (localStorage):**
```javascript
function saveSchedule(scheduleData) {
  const schedules = JSON.parse(localStorage.getItem('schedules') || '[]');
  schedules.push(scheduleData);
  localStorage.setItem('schedules', JSON.stringify(schedules));
}
```

**After (Firebase):**
```javascript
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase.js';

async function saveSchedule(scheduleData) {
  try {
    const docRef = await addDoc(collection(db, 'schedules'), {
      ...scheduleData,
      createdAt: new Date()
    });
    console.log('Schedule saved with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error saving schedule:', error);
    throw error;
  }
}
```

**After (Supabase):**
```javascript
import { supabase } from './supabase.js';

async function saveSchedule(scheduleData) {
  try {
    const { data, error } = await supabase
      .from('schedules')
      .insert([{
        ...scheduleData,
        created_at: new Date()
      }])
      .select();

    if (error) throw error;
    console.log('Schedule saved:', data);
    return data[0].id;
  } catch (error) {
    console.error('Error saving schedule:', error);
    throw error;
  }
}
```

## Step 5: Add Form Validation

### Using Validator.js

**Before:**
```javascript
const email = document.getElementById('email').value;
if (!email) {
  alert('Email is required');
  return;
}
```

**After:**
```javascript
import validator from 'validator';

const email = document.getElementById('email').value;

if (!validator.isEmail(email)) {
  showMessage('Please enter a valid email address', 'error');
  return;
}
```

**More examples:**
```javascript
// Validate phone number
if (!validator.isMobilePhone(phone, 'pl-PL')) {
  showMessage('Invalid phone number', 'error');
}

// Validate URL
if (!validator.isURL(website)) {
  showMessage('Invalid website URL', 'error');
}

// Sanitize input (prevent XSS)
const cleanInput = validator.escape(userInput);
```

## Step 6: Use date-fns for Date Operations

**Before:**
```javascript
const date = new Date(slot.date);
const formatted = date.toLocaleDateString('pl-PL', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
```

**After:**
```javascript
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

const formatted = format(new Date(slot.date), 'EEEE, d MMMM yyyy', {
  locale: pl
});
```

**More examples:**
```javascript
import { addDays, isAfter, isBefore, parseISO } from 'date-fns';

// Add days to a date
const nextWeek = addDays(new Date(), 7);

// Compare dates
if (isAfter(endDate, startDate)) {
  // Valid date range
}

// Parse ISO date string
const date = parseISO('2025-10-17');

// Check if date is in the past
if (isBefore(date, new Date())) {
  showMessage('Date cannot be in the past', 'error');
}
```

## Step 7: Add Error Tracking (Optional but Recommended)

```bash
npm install @sentry/browser
```

**Create `src/sentry.js`:**
```javascript
import * as Sentry from '@sentry/browser';

export function initSentry() {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new Sentry.BrowserTracing(),
    ],
    tracesSampleRate: 1.0,
    environment: import.meta.env.MODE, // 'development' or 'production'
  });
}
```

**Add to `.env`:**
```env
VITE_SENTRY_DSN=your_sentry_dsn_here
```

**Initialize in your main HTML file:**
```html
<script type="module">
  import { initSentry } from './src/sentry.js';
  initSentry();
</script>
```

## Step 8: Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output will be in the `dist/` directory.

## Step 9: Deploy

### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Option B: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option C: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
firebase deploy
```

## Troubleshooting

### Error: "Cannot find module 'vite'"
```bash
npm install -D vite
```

### Error: "Firebase is not defined"
Make sure you're importing Firebase in your HTML:
```html
<script type="module">
  import { db } from './src/firebase.js';
  // Your code here
</script>
```

### Error: "localStorage is not defined"
This happens in Node.js environments. Use the web app only in browsers.

### Build fails with "VITE_* not defined"
Make sure your `.env` file exists and contains all required variables.

## Next Steps

1. ✅ Follow Step 1-2 to get started
2. ✅ Choose a backend (Step 3)
3. ✅ Migrate one feature from localStorage to database (Step 4)
4. ✅ Test thoroughly
5. ✅ Migrate remaining features
6. ✅ Add form validation (Step 5)
7. ✅ Replace Date manipulation with date-fns (Step 6)
8. ✅ Add error tracking (Step 7)
9. ✅ Build and deploy (Step 8-9)

## Resources

- [Firebase Documentation](https://firebase.google.com/docs/web/setup)
- [Supabase Documentation](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [date-fns Documentation](https://date-fns.org/docs/Getting-Started)
- [Validator.js Documentation](https://github.com/validatorjs/validator.js)

## Need Help?

- Create an issue in the repository
- Check the DEPENDENCY_ANALYSIS.md for detailed recommendations
- Review the official documentation for each tool

Good luck! 🚀
