import React from 'react'
import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import amrita1 from '/images/Amrita/1.jpg'
import amritaMain from '/images/Amrita/Amrita-01.png'
import artemisMain from '/images/Artemis/Artemis-main.jpg'
import apolloMain from '/images/Apollo/Apollo.jpg'
// import maxMain from '/images/Max/max-main.jpg'
// import medantaMain from '/images/Medanta/main.jpg'
// import metroMain from '/images/Metro/main.jpg'
// import fortisMain from '/images/Fortis/main.jpg'
// import asianMain from '/images/Asian/Marengo_new.jpg'
import doctor1 from '/images/doctor1.png'
import doctor2 from '/images/doctor2.jpg'
import doctor3 from '/images/doctor3.jpg'
// import doctor4 from '/images/doctor4.jpg'
// import doctor5 from '/images/doctor5.jpg'
// import doctor6 from '/images/doctor6.jpg'

interface Clinic {
  id: string
  name: string
  location: string
  city: string
  country: string
  description: string
  image: string
  heroImage: string
  accreditation: string[]
  specialties: string[]
  stats: {
    beds: number
    doctors: number
    years: number
    patients: number
  }
  treatments: {
    icon: React.ReactElement
    title: string
    description: string
  }[]
  doctors: {
    name: string
    specialty: string
    experience: string
    image: string
    rating: number
    patients: number
    education: string
    languages: string[]
  }[]
  prices: {
    category: string
    treatments: {
      name: string
      price: string
      duration: string
    }[]
  }[]
  infrastructure: string[]
  gallery: {
    image: string
    title: string
  }[]
}

export const ClinicSinglePage = () => {
  const { t } = useTranslation()
  const { clinicId } = useParams<{ clinicId: string }>()
  const [activeTab, setActiveTab] = useState('about')
  
  // Use clinicId to determine which clinic data to show
  const currentClinicId = clinicId || 'amrita'
  
  // Log for debugging (remove in production)
  console.log('Current clinic ID:', currentClinicId)
  const [isSticky, setIsSticky] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  // Mock clinic data - in real app, this would come from API
  const clinic: Clinic = {
    id: 'amrita',
    name: 'Amrita shifoxonasi',
    location: 'Faridobod, Hindiston',
    city: 'Faridobod',
    country: 'hindiston',
    description: 'Amrita shifoxonasi Hindistonning eng yaxshi tibbiy markazlaridan biri bo\'lib, 25 yildan ortiq tajribaga ega. Shifoxona 1000 dan ortiq o\'rin va 200 dan ortiq shifokor bilan xizmat ko\'rsatadi. Bu yerda kardiologiya, onkologiya, nevrologiya va boshqa ko\'plab yo\'nalishlar bo\'yicha davolanish amalga oshiriladi.',
    image: amrita1,
    heroImage: amritaMain,
    accreditation: ['NABH', 'ISO', 'NABL'],
    specialties: ['kardiologiya', 'onkologiya', 'nevrologiya', 'ortopediya'],
    stats: {
      beds: 1000,
      doctors: 200,
      years: 25,
      patients: 50000
    },
    treatments: [
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            <path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/>
          </svg>
        ),
        title: 'Kardiologiya',
        description: 'Yurak va qon tomir kasalliklarini davolash'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14.5A3.5 3.5 0 0 1 7.5 11H11a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 11 18H7.5a3.5 3.5 0 0 1-3.5-3.5Z"/>
            <path d="M20 9.5A3.5 3.5 0 0 0 16.5 6H13a3.5 3.5 0 0 0-3.5 3.5v0A3.5 3.5 0 0 0 13 13h3.5a3.5 3.5 0 0 0 3.5-3.5Z"/>
            <path d="M11 11v7"/>
            <path d="M13 6v7"/>
          </svg>
        ),
        title: 'Onkologiya',
        description: 'Saraton kasalliklarini davolash'
      },
      {
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5a3 3 0 1 0-5.993.295M12 5a3 3 0 1 1 5.993.295M15 13a3 3 0 1 0-5.993.295M15 13a3 3 0 1 1 5.993.295M9 13a3 3 0 1 0-5.993.295M9 13a3 3 0 1 1 5.993.295M17.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
            <path d="M17.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
            <path d="M6.5 8.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
            <path d="M6.5 17.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
            <path d="M12 5V2"/>
            <path d="M12 21v-3"/>
            <path d="m15 13 2.5-1.5"/>
            <path d="m9 13-2.5-1.5"/>
            <path d="m15 13 2.5 1.5"/>
            <path d="m9 13-2.5 1.5"/>
            <path d="m17.5 8.5-2.5 1.5"/>
            <path d="m6.5 8.5 2.5 1.5"/>
            <path d="m17.5 17.5-2.5-1.5"/>
            <path d="m6.5 17.5 2.5-1.5"/>
          </svg>
        ),
        title: 'Nevrologiya',
        description: 'Miya va asab tizimi kasalliklari'
      }
    ],
    doctors: [
      {
        name: 'Dr. Rajesh Kumar',
        specialty: 'Kardiolog',
        experience: '15 yil',
        image: doctor1,
        rating: 4.8,
        patients: 2500,
        education: 'MD, DM Cardiology',
        languages: ['Hindi', 'English', 'Uzbek']
      },
      {
        name: 'Dr. Priya Sharma',
        specialty: 'Onkolog',
        experience: '12 yil',
        image: doctor2,
        rating: 4.9,
        patients: 1800,
        education: 'MD, DM Oncology',
        languages: ['Hindi', 'English']
      },
      {
        name: 'Dr. Amit Patel',
        specialty: 'Nevrolog',
        experience: '18 yil',
        image: doctor3,
        rating: 4.7,
        patients: 3200,
        education: 'MD, DM Neurology',
        languages: ['Hindi', 'English', 'Gujarati']
      }
    ],
    prices: [
      {
        category: 'Kardiologiya',
        treatments: [
          { name: 'Angioplastiya', price: '$3,000', duration: '2-3 kun' },
          { name: 'Bypass operatsiyasi', price: '$8,000', duration: '7-10 kun' },
          { name: 'Valve almashtirish', price: '$12,000', duration: '10-14 kun' }
        ]
      },
      {
        category: 'Onkologiya',
        treatments: [
          { name: 'Kemoterapiya kursi', price: '$2,500', duration: '3-6 oy' },
          { name: 'Radioterapiya', price: '$4,000', duration: '6-8 hafta' },
          { name: 'Tumor jarrohligi', price: '$6,000', duration: '5-7 kun' }
        ]
      }
    ],
    infrastructure: [
      'Zamonaviy operatsiya xonalari',
      'ICU va CCU bo\'limlari',
      'MRI va CT skanerlar',
      'Laboratoriya xizmatlari',
      '24/7 tez yordam xizmati',
      'Xalqaro standartlar'
    ],
    gallery: [
      { image: amrita1, title: 'Asosiy binoning ko\'rinishi' },
      { image: amritaMain, title: 'Shifoxona ichki qismi' },
      { image: artemisMain, title: 'Operatsiya xonasi' },
      { image: apolloMain, title: 'ICU bo\'limi' }
    ]
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={clinic.heroImage} 
            alt={clinic.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {clinic.name}
            </h1>
            <p className="text-xl md:text-2xl mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {clinic.location}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {clinic.accreditation.map((cert, index) => (
                <span key={index} className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {cert}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                {t('clinicSingle.consultNow')}
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                {t('clinicSingle.viewGallery')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className={`bg-white border-b border-gray-200 py-4 transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-lg' : ''}`}>
        <div className="container">
          <div className="flex justify-center">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'about', label: t('clinicSingle.nav.about') },
                { id: 'treatments', label: t('clinicSingle.nav.treatments') },
                { id: 'doctors', label: t('clinicSingle.nav.doctors') },
                { id: 'prices', label: t('clinicSingle.nav.prices') },
                { id: 'infrastructure', label: t('clinicSingle.nav.infrastructure') },
                { id: 'gallery', label: t('clinicSingle.nav.gallery') },
                { id: 'appointment', label: t('clinicSingle.nav.appointment') }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 whitespace-nowrap ${
                    activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('clinicSingle.about.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {clinic.description}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{clinic.stats.beds}</div>
                  <div className="text-gray-600">{t('clinicSingle.about.beds')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{clinic.stats.doctors}</div>
                  <div className="text-gray-600">{t('clinicSingle.about.doctors')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{clinic.stats.years}+</div>
                  <div className="text-gray-600">{t('clinicSingle.about.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{clinic.stats.patients}+</div>
                  <div className="text-gray-600">{t('clinicSingle.about.patients')}</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={clinic.image} 
                alt={clinic.name} 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('clinicSingle.treatments.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clinicSingle.treatments.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinic.treatments.map((treatment, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{treatment.title}</h3>
                <p className="text-gray-600">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('clinicSingle.doctors.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clinicSingle.doctors.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinic.doctors.map((doctor, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 mb-4">{doctor.experience} {t('clinicSingle.doctors.experience')}</p>
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill={i < Math.floor(doctor.rating) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">{doctor.rating}</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  {t('clinicSingle.doctors.consult')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('clinicSingle.prices.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clinicSingle.prices.subtitle')}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('clinicSingle.prices.treatment')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('clinicSingle.prices.price')}</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">{t('clinicSingle.prices.duration')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {clinic.prices.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-blue-50">
                        <td colSpan={3} className="px-6 py-3 text-sm font-semibold text-blue-900">
                          {category.category}
                        </td>
                      </tr>
                      {category.treatments.map((treatment, treatmentIndex) => (
                        <tr key={treatmentIndex} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{treatment.name}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-blue-600">{treatment.price}</td>
                          <td className="px-6 py-4 text-sm text-gray-600">{treatment.duration}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('clinicSingle.infrastructure.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('clinicSingle.infrastructure.subtitle')}
              </p>
              <ul className="space-y-4">
                {clinic.infrastructure.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src={clinic.image} 
                alt="Infrastructure" 
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('clinicSingle.gallery.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('clinicSingle.gallery.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinic.gallery.map((item, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setLightboxImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <p className="text-white font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-6">
              {t('clinicSingle.appointment.title')}
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {t('clinicSingle.appointment.subtitle')}
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('clinicSingle.appointment.fullName')}
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={t('clinicSingle.appointment.fullNamePlaceholder')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('clinicSingle.appointment.phone')}
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+998 (90) 123-45-67"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('clinicSingle.appointment.treatment')}
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>{t('clinicSingle.appointment.selectTreatment')}</option>
                  <option>Kardiologiya</option>
                  <option>Onkologiya</option>
                  <option>Nevrologiya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('clinicSingle.appointment.message')}
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t('clinicSingle.appointment.messagePlaceholder')}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                {t('clinicSingle.appointment.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={lightboxImage} 
              alt="Gallery" 
              className="max-w-full max-h-full rounded-lg"
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
