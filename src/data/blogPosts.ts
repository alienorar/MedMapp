import type { BlogPost } from '../types/blog'
import amritaDji from '/images/Amrita/DJI_0036.jpg'
import amritaUntitled from '/images/Amrita/Untitled.jpg'
import amritaRoom from '/images/Amrita/room.JPG'
import amritaAoc04825 from '/images/Amrita/AOC04825.jpg'
import amritaAoc07195 from '/images/Amrita/AOC07195.jpg'
import amritaMrt from '/images/Amrita/MRT.jpg'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Hindistonda Davolanishning 5 Afzalliklari',
    excerpt: 'Nima uchun bemorlar davolanish uchun Hindistonni tanlashadi? Yuqori malaka, zamonaviy texnologiyalar va hamyonbop narxlar.',
    image: amritaDji,
    category: {
      name: 'Tibbiy Turizm',
      color: '#3498db',
      bgColor: '#eaf3ff'
    },
    author: {
      name: 'Dr. N. Aliyev'
    },
    date: '2-sentabr, 2025',
    readTime: '5 daqiqa',
    slug: 'hindistonda-davolanishning-5-afzalliklari'
  },
  {
    id: '2',
    title: 'Jigar Ko\'chirish Operatsiyasiga Tayyorgarlik',
    excerpt: 'Jigar transplantatsiyasi murakkab jarayon. Unga ruhiy va jismoniy tayyorgarlik bo\'yicha mutaxassislar tavsiyalari.',
    image: amritaUntitled,
    category: {
      name: 'Transplantatsiya',
      color: '#2ecc71',
      bgColor: '#eafaf1'
    },
    author: {
      name: 'MedMapp Jamoasi'
    },
    date: '28-avgust, 2025',
    readTime: '7 daqiqa',
    slug: 'jigar-kochirish-operatsiyasiga-tayyorgarlik'
  },
  {
    id: '3',
    title: 'Hindistonning Top-3 Kardiologiya Markazlari',
    excerpt: 'Hindistonning yurak-qon tomir kasalliklarini davolashdagi yetakchi klinikalari sharhi va eng so\'nggi davolash usullari.',
    image: amritaRoom,
    category: {
      name: 'Kardiologiya',
      color: '#e74c3c',
      bgColor: '#fdeded'
    },
    author: {
      name: 'Salomatlik Eksperti'
    },
    date: '25-avgust, 2025',
    readTime: '6 daqiqa',
    slug: 'hindistonning-top-3-kardiologiya-markazlari'
  },
  {
    id: '4',
    title: 'Hindistonga Tibbiy Viza Olish Qo\'llanmasi',
    excerpt: 'Tibbiy viza uchun qanday hujjatlar kerak? Jarayon va muhim jihatlar haqida to\'liq ma\'lumot shu maqolada.',
    image: amritaAoc04825,
    category: {
      name: 'Qo\'llanma',
      color: '#f39c12',
      bgColor: '#fef5e7'
    },
    author: {
      name: 'MedMapp Jamoasi'
    },
    date: '20-avgust, 2025',
    readTime: '4 daqiqa',
    slug: 'hindistonga-tibbiy-viza-olish-qollanmasi'
  },
  {
    id: '5',
    title: 'Onkologiya Davolashida Yangi Texnologiyalar',
    excerpt: 'Hindistondagi onkologiya markazlarida qo\'llaniladigan eng so\'nggi davolash usullari va ularning samaradorligi.',
    image: amritaAoc07195,
    category: {
      name: 'Onkologiya',
      color: '#9b59b6',
      bgColor: '#f4e6ff'
    },
    author: {
      name: 'Dr. S. Kumar'
    },
    date: '15-avgust, 2025',
    readTime: '8 daqiqa',
    slug: 'onkologiya-davolashida-yangi-texnologiyalar'
  },
  {
    id: '6',
    title: 'Neyroxirurgiya So\'hasidagi Innovatsiyalar',
    excerpt: 'Beyin va orqa miya jarrohlik operatsiyalarida qo\'llaniladigan robot texnologiyalari va ularning afzalliklari.',
    image: amritaMrt,
    category: {
      name: 'Neyroxirurgiya',
      color: '#1abc9c',
      bgColor: '#e8f8f5'
    },
    author: {
      name: 'Dr. A. Patel'
    },
    date: '10-avgust, 2025',
    readTime: '6 daqiqa',
    slug: 'neyroxirurgiya-sohasidagi-innovatsiyalar'
  }
]
