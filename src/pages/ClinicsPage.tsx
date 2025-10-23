import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import amrita1 from '/images/Amrita/1.jpg'
import artemisMain from '/images/Artemis/Artemis-main.jpg'
import apolloMain from '/images/Apollo/Apollo.jpg'
import maxMain from '/images/Max/max-main.jpg'
import medantaMain from '/images/Medanta/main.jpg'
import metroMain from '/images/Metro/main.jpg'
import fortisMain from '/images/Fortis/main.jpg'
import asianMain from '/images/Asian/Marengo_new.jpg'

interface Clinic {
  id: string
  name: string
  location: string
  city: string
  country: string
  specialties: string[]
  image: string
  accreditation: string
  href: string
}

export const ClinicsPage = () => {
  const { t } = useTranslation()
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')
  const [filteredClinics, setFilteredClinics] = useState<Clinic[]>([])

  const clinics: Clinic[] = [
    {
      id: 'amrita',
      name: 'Amrita shifoxonasi',
      location: 'Faridobod, Hindiston',
      city: 'Faridobod',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: amrita1,
      accreditation: 'NABH, ISO, NABL',
      href: '/clinics/amrita-hospital'
    },
    {
      id: 'artemis',
      name: 'Artemis shifoxonasi',
      location: 'Gurgaon, Hindiston',
      city: 'Gurgaon',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: artemisMain,
      accreditation: 'NABH, JCI',
      href: '/clinics/artemis-hospital'
    },
    {
      id: 'apollo',
      name: 'Apollo shifoxonasi',
      location: 'Bangalor, Hindiston',
      city: 'Bangalor',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: apolloMain,
      accreditation: 'JCI',
      href: '/clinics/apollo-hospital'
    },
    {
      id: 'max',
      name: 'MAX shifoxonasi',
      location: 'Yangi Dehli, Hindiston',
      city: 'Yangi_dehli',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: maxMain,
      accreditation: 'JCI, NABH',
      href: '/clinics/max-hospital'
    },
    {
      id: 'medanta',
      name: 'Medanta shifoxonasi',
      location: 'Gurgaon, Hindiston',
      city: 'Gurgaon',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: medantaMain,
      accreditation: 'NABH',
      href: '/clinics/medanta-hospital'
    },
    {
      id: 'metro',
      name: 'Metro shifoxonasi',
      location: 'Faridobod, Hindiston',
      city: 'Faridobod',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: metroMain,
      accreditation: 'JCI, NABH',
      href: '/clinics/metro-hospital'
    },
    {
      id: 'fortis',
      name: 'Fortis shifoxonasi',
      location: 'Gurgaon, Hindiston',
      city: 'Gurgaon',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: fortisMain,
      accreditation: 'JCI, NABH, NABL',
      href: '/clinics/fortis-hospital'
    },
    {
      id: 'asian',
      name: 'Marengo Osiyo shifoxonasi',
      location: 'Faridobod, Hindiston',
      city: 'Faridobod',
      country: 'hindiston',
      specialties: ['kardiologiya', 'onkologiya', 'nevrologiya'],
      image: asianMain,
      accreditation: 'NABH, NABL',
      href: '/clinics/asian-hospital'
    }
  ]

  useEffect(() => {
    const filtered = clinics.filter(clinic => {
      const specialtyMatch = selectedSpecialty === 'all' || clinic.specialties.includes(selectedSpecialty)
      const countryMatch = selectedCountry === 'all' || clinic.country === selectedCountry
      const cityMatch = selectedCity === 'all' || clinic.city === selectedCity
      
      return specialtyMatch && countryMatch && cityMatch
    })
    setFilteredClinics(filtered)
  }, [selectedSpecialty, selectedCountry, selectedCity])

  const handleClinicClick = (href: string) => {
    if (href && href !== '#') {
      window.location.href = href
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="container relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('clinics.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              {t('clinics.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-20 text-blue-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('clinics.filters.specialty')}
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">{t('clinics.filters.allSpecialties')}</option>
                <option value="kardiologiya">{t('clinics.filters.cardiology')}</option>
                <option value="onkologiya">{t('clinics.filters.oncology')}</option>
                <option value="nevrologiya">{t('clinics.filters.neurology')}</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('clinics.filters.country')}
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">{t('clinics.filters.allCountries')}</option>
                <option value="hindiston">{t('clinics.filters.india')}</option>
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('clinics.filters.city')}
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">{t('clinics.filters.allCities')}</option>
                <option value="Yangi_dehli">{t('clinics.filters.newDelhi')}</option>
                <option value="Faridobod">{t('clinics.filters.faridabad')}</option>
                <option value="Gurgaon">{t('clinics.filters.gurgaon')}</option>
                <option value="Bangalor">{t('clinics.filters.bangalore')}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics Count */}
      <div className="py-4 bg-white">
        <div className="container text-center">
          <p className="text-lg text-gray-600">
            {filteredClinics.length} {t('clinics.found')}
          </p>
        </div>
      </div>

      {/* Clinics Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredClinics.map((clinic) => (
              <div
                key={clinic.id}
                onClick={() => handleClinicClick(clinic.href)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {t('clinics.viewDetails')}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{clinic.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {clinic.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {clinic.accreditation}
                    </span>
                    <span className="text-blue-600 font-semibold text-sm">
                      {t('clinics.details')} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredClinics.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('clinics.noResults')}
              </h3>
              <p className="text-gray-600">
                {t('clinics.tryDifferentFilters')}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
