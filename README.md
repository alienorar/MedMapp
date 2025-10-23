# MedMapp - Medical Tourism Platform

React + Vite + TypeScript + Tailwind CSS + Supabase platformasi

## 📋 Loyiha haqida

MedMapp - bu Hindistonda tibbiy turizm xizmatlari ko'rsatuvchi platforma. Platforma 3 tilda (O'zbekcha, Ruscha, Inglizcha) ishlaydi va Supabase backend bilan to'liq integratsiyalangan.

## 🚀 Texnologiyalar

- **React 18** - UI library
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **i18next** - Internationalization (uz/ru/en)
- **Supabase** - Backend & Database
- **React Hook Form** - Form management

## 📁 Loyiha tuzilmasi

```
medmapp-react/
├── src/
│   ├── components/          # Reusable komponentlar
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pages/              # Sahifa komponentlari
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ClinicsPage.tsx
│   │   ├── DoctorsPage.tsx
│   │   ├── PricingPage.tsx
│   │   ├── TestimonialsPage.tsx
│   │   └── BlogPage.tsx
│   ├── lib/                # Utility va konfiguratsiyalar
│   │   └── supabase.ts
│   ├── i18n/               # Tarjimalar
│   │   ├── config.ts
│   │   └── locales/
│   │       ├── uz.json
│   │       ├── ru.json
│   │       └── en.json
│   ├── types/              # TypeScript turlari
│   │   └── index.ts
│   ├── App.tsx             # Asosiy komponent
│   └── main.tsx            # Entry point
├── public/
│   └── images/             # Rasmlar
├── .env                    # Environment variables
└── package.json
```

## 🔧 O'rnatish

1. Dependencies o'rnatish:
```bash
npm install
```

2. `.env` faylini sozlash (loyihada allaqachon mavjud):
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id
VITE_BITRIX_WEBHOOK_URL=your_bitrix_webhook_url
VITE_BITRIX_CUSTOM_FIELD_ID=your_custom_field_id
```

3. Development server ishga tushirish:
```bash
npm run dev
```

4. Production build:
```bash
npm run build
```

## 🌍 Ko'p tillilik (i18n)

Loyihada 3 ta til qo'llab-quvvatlanadi:
- 🇺🇿 O'zbekcha (uz)
- 🇷🇺 Ruscha (ru)
- 🇬🇧 Inglizcha (en)

Tilni o'zgartirish header'dagi til tanlash tugmasi orqali amalga oshiriladi. Tanlangan til `localStorage` da saqlanadi.

## 🗄️ Supabase Integration

Loyiha Supabase bilan to'liq integratsiyalangan. Backend tayyor bo'lishi kerak:

### Ma'lumotlar modellari:

1. **hospitals** - Shifoxonalar
2. **doctors** - Shifokorlar
3. **services** - Xizmatlar
4. **blog_posts** - Blog postlari
5. **testimonials** - Sharhlar
6. **pricing** - Narxlar

### Misol so'rov:

```typescript
import { supabase } from '@/lib/supabase'

// Shifoxonalarni olish
const { data: hospitals, error } = await supabase
  .from('hospitals')
  .select('*')
  .eq('country', 'India')

// Shifokorlarni olish
const { data: doctors, error } = await supabase
  .from('doctors')
  .select('*, hospital:hospitals(name)')
  .order('created_at', { ascending: false })
```

## 📝 Yangi komponent qo'shish

1. `src/components/` yoki `src/pages/` papkasida yangi fayl yarating
2. TypeScript interface'larini `src/types/index.ts` ga qo'shing
3. Kerakli tarjimalarni `src/i18n/locales/` ga qo'shing
4. Komponentni kerakli joyda import qiling

## 🎨 Styling

Loyihada Tailwind CSS ishlatiladi. Custom stylelar `src/index.css` faylida yozilishi mumkin.

### Asosiy ranglar:
- Primary: `blue-600` (#007BFF)
- Secondary: `gray-700` (#6c757d)

## 🔒 Xavfsizlik

- Barcha environment variables `.env` faylida saqlanadi
- Supabase Row Level Security (RLS) ishlatiladi
- API kalitlari hech qachon frontend kodga qo'shilmaydi

## 📱 Responsive Design

Loyiha to'liq responsive va barcha ekran o'lchamlarida ishlaydi:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🚀 Deploy

Loyihani deploy qilish uchun:

```bash
npm run build
```

Build qilingan fayllar `dist/` papkasida bo'ladi. Ularni istalgan static hosting xizmatiga (Vercel, Netlify, Cloudflare Pages) deploy qilish mumkin.

## 📞 Aloqa

- Email: info@medmapp.uz
- Phone: +998(77) 535-66-55
- Telegram: @medmapp_uz

## 📄 License

© 2025 MedMapp. Barcha huquqlar himoyalangan.
