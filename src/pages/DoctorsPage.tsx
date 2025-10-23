import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

// Import doctor images
import doctor1 from '/images/doctor1.png'
import doctor2 from '/images/doctor2.jpg'
import doctor3 from '/images/doctor3.jpg'
import doctor4 from '/images/doctor4.jpg'
import doctor5 from '/images/doctor5.jpg'
import doctor6 from '/images/doctor6.jpg'

interface Doctor {
  id: number
  name: string
  specialty: string
  experience: string
  rating: number
  patients: number
  image: string
  isOnline: boolean
  nextAvailable: string
  price: string
  languages: string[]
  education: string
  achievements: string[]
  country: string
  city: string
}

const DoctorsPage = () => {
  const { t } = useTranslation()
  const [selectedSpecialty, setSelectedSpecialty] = useState('all')
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')
  const [visibleCount, setVisibleCount] = useState(8)
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([])

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      experience: '15+ years',
      rating: 4.9,
      patients: 2500,
      image: doctor1,
      isOnline: true,
      nextAvailable: t('doctors.availability.now'),
      price: '$150',
      languages: ['English', 'Spanish'],
      education: 'Harvard Medical School',
      achievements: ['Board Certified', 'Top 1% Cardiologist'],
      country: 'USA',
      city: 'New York'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      experience: '12+ years',
      rating: 4.8,
      patients: 1800,
      image: doctor2,
      isOnline: false,
      nextAvailable: t('doctors.availability.tomorrow'),
      price: '$180',
      languages: ['English', 'Mandarin'],
      education: 'Johns Hopkins University',
      achievements: ['Fellowship Trained', 'Research Published'],
      country: 'USA',
      city: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Dermatology',
      experience: '8+ years',
      rating: 4.9,
      patients: 3200,
      image: doctor3,
      isOnline: true,
      nextAvailable: t('doctors.availability.now'),
      price: '$120',
      languages: ['English', 'Spanish', 'French'],
      education: 'Stanford University',
      achievements: ['Cosmetic Specialist', 'Award Winner'],
      country: 'Canada',
      city: 'Toronto'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedics',
      experience: '20+ years',
      rating: 4.7,
      patients: 4500,
      image: doctor4,
      isOnline: false,
      nextAvailable: t('doctors.availability.nextWeek'),
      price: '$200',
      languages: ['English'],
      education: 'Mayo Clinic',
      achievements: ['Surgical Expert', '40+ Years Experience'],
      country: 'UK',
      city: 'London'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      specialty: 'Pediatrics',
      experience: '10+ years',
      rating: 4.9,
      patients: 2800,
      image: doctor5,
      isOnline: true,
      nextAvailable: t('doctors.availability.now'),
      price: '$100',
      languages: ['English', 'Korean'],
      education: 'UCLA Medical School',
      achievements: ['Child Specialist', 'Parent Favorite'],
      country: 'Australia',
      city: 'Sydney'
    },
    {
      id: 6,
      name: 'Dr. Robert Brown',
      specialty: 'Oncology',
      experience: '18+ years',
      rating: 4.8,
      patients: 1500,
      image: doctor6,
      isOnline: false,
      nextAvailable: t('doctors.availability.nextMonth'),
      price: '$250',
      languages: ['English', 'German'],
      education: 'MD Anderson',
      achievements: ['Cancer Specialist', 'Research Leader'],
      country: 'Germany',
      city: 'Berlin'
    },
    {
      id: 7,
      name: 'Dr. Maria Garcia',
      specialty: 'Gynecology',
      experience: '14+ years',
      rating: 4.9,
      patients: 2200,
      image: doctor1,
      isOnline: true,
      nextAvailable: t('doctors.availability.now'),
      price: '$130',
      languages: ['English', 'Spanish'],
      education: 'Cleveland Clinic',
      achievements: ['Women\'s Health Expert', 'Minimally Invasive'],
      country: 'France',
      city: 'Paris'
    },
    {
      id: 8,
      name: 'Dr. David Lee',
      specialty: 'Psychiatry',
      experience: '16+ years',
      rating: 4.7,
      patients: 1900,
      image: doctor2,
      isOnline: false,
      nextAvailable: t('doctors.availability.thisWeek'),
      price: '$160',
      languages: ['English', 'Japanese'],
      education: 'Yale University',
      achievements: ['Mental Health Expert', 'Therapy Specialist'],
      country: 'USA',
      city: 'Chicago'
    }
  ]

  const specialties = [
    'all', 'Cardiology', 'Neurology', 'Dermatology', 'Orthopedics', 
    'Pediatrics', 'Oncology', 'Gynecology', 'Psychiatry'
  ]

  const countries = ['all', 'USA', 'Canada', 'UK', 'Australia', 'Germany', 'France']
  const cities = ['all', 'New York', 'Los Angeles', 'Chicago', 'Toronto', 'London', 'Sydney', 'Berlin', 'Paris']

  useEffect(() => {
    let filtered = doctors

    if (selectedSpecialty !== 'all') {
      filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty)
    }

    if (selectedCountry !== 'all') {
      filtered = filtered.filter(doctor => doctor.country === selectedCountry)
    }

    if (selectedCity !== 'all') {
      filtered = filtered.filter(doctor => doctor.city === selectedCity)
    }

    setFilteredDoctors(filtered)
  }, [selectedSpecialty, selectedCountry, selectedCity, t])

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredDoctors.length))
  }

  const handleDoctorClick = (doctor: Doctor) => {
    // Navigate to doctor detail page or open booking modal
    console.log('Doctor clicked:', doctor)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('doctors.hero.title')}
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              {t('doctors.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                {t('doctors.hero.findDoctor')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                {t('doctors.hero.emergency')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Specialty Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                {t('doctors.filters.specialty')}
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? t('doctors.filters.allSpecialties') : t(`doctors.specialties.${specialty.toLowerCase()}`)}
                  </option>
                ))}
              </select>
            </div>

            {/* Country Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                {t('doctors.filters.country')}
              </label>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {countries.map(country => (
                  <option key={country} value={country}>
                    {country === 'all' ? t('doctors.filters.allCountries') : country}
                  </option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">
                {t('doctors.filters.city')}
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city === 'all' ? t('doctors.filters.allCities') : city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {t('doctors.results.title', { count: filteredDoctors.length })}
            </h2>
            <div className="text-gray-600">
              {t('doctors.results.showing', { 
                showing: Math.min(visibleCount, filteredDoctors.length), 
                total: filteredDoctors.length 
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('doctors.noResults.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('doctors.noResults.subtitle')}
              </p>
              <button
                onClick={() => {
                  setSelectedSpecialty('all')
                  setSelectedCountry('all')
                  setSelectedCity('all')
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('doctors.noResults.resetFilters')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.slice(0, visibleCount).map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
                >
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-56 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = doctor1
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        doctor.isOnline 
                          ? 'bg-green-100 text-green-800 border border-green-200' 
                          : 'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        {doctor.isOnline ? t('doctors.card.online') : t('doctors.card.offline')}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-gray-700 text-xs ml-1 font-medium">
                            {doctor.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{t(`doctors.specialties.${doctor.specialty.toLowerCase()}`)}</p>
                    <p className="text-gray-600 text-sm mb-3">{doctor.experience}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {doctor.nextAvailable}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {doctor.price} {t('doctors.card.perConsultation')}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {doctor.city}, {doctor.country}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {doctor.languages.slice(0, 2).map((lang, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {lang}
                        </span>
                      ))}
                      {doctor.languages.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{doctor.languages.length - 2}
                        </span>
                      )}
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        handleDoctorClick(doctor)
                      }}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      {t('doctors.card.bookAppointment')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredDoctors.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('doctors.loadMore')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Doctors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('doctors.whyChoose.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('doctors.whyChoose.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('doctors.whyChoose.verified.title')}
              </h3>
              <p className="text-gray-600">
                {t('doctors.whyChoose.verified.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('doctors.whyChoose.experience.title')}
              </h3>
              <p className="text-gray-600">
                {t('doctors.whyChoose.experience.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('doctors.whyChoose.patients.title')}
              </h3>
              <p className="text-gray-600">
                {t('doctors.whyChoose.patients.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t('doctors.whyChoose.quality.title')}
              </h3>
              <p className="text-gray-600">
                {t('doctors.whyChoose.quality.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DoctorsPage