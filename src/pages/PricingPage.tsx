import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import amrita1 from '/images/Amrita/1.jpg'
import amritaWard from '/images/Amrita/Ward.jpg'
import amritaMRT from '/images/Amrita/MRT.jpg'

interface PricingData {
  id: number
  procedure: string
  price: number
  department: string
  clinic: string
  clinicName: string
  clinicImage: string
  duration?: string
  description?: string
}

export const PricingPage = () => {
  const { t } = useTranslation()
  const [selectedDepartment, setSelectedDepartment] = useState('kardiologiya')
  const [selectedProcedure, setSelectedProcedure] = useState('all')
  const [selectedSort, setSelectedSort] = useState('default')
  const [filteredData, setFilteredData] = useState<PricingData[]>([])

  const allData: PricingData[] = [
    // Kardiologiya
    { id: 1, procedure: 'Angioplastika (1 stent)', price: 3500, department: 'kardiologiya', clinic: 'amrita', clinicName: 'Amrita shifoxonasi', clinicImage: amrita1, duration: '2-3 kun', description: 'Yurak tomirlarini kengaytirish' },
    { id: 2, procedure: 'Koronar shuntlash (CABG)', price: 4800, department: 'kardiologiya', clinic: 'amrita', clinicName: 'Amrita shifoxonasi', clinicImage: amrita1, duration: '7-10 kun', description: 'Yurak bypass operatsiyasi' },
    { id: 3, procedure: 'Angioplastika (1 stent)', price: 3800, department: 'kardiologiya', clinic: 'fortis', clinicName: 'Fortis Escorts', clinicImage: amrita1, duration: '2-3 kun', description: 'Yurak tomirlarini kengaytirish' },
    { id: 4, procedure: 'Koronar shuntlash (CABG)', price: 5200, department: 'kardiologiya', clinic: 'fortis', clinicName: 'Fortis Escorts', clinicImage: amrita1, duration: '7-10 kun', description: 'Yurak bypass operatsiyasi' },
    { id: 5, procedure: 'Yurak klapanini almashtirish', price: 7500, department: 'kardiologiya', clinic: 'apollo', clinicName: 'Apollo Hospitals', clinicImage: amrita1, duration: '10-14 kun', description: 'Yurak klapanini almashtirish' },
    { id: 6, procedure: 'Angioplastika (2 stent)', price: 4200, department: 'kardiologiya', clinic: 'artemis', clinicName: 'Artemis Hospital', clinicImage: amrita1, duration: '3-4 kun', description: 'Ikki stent bilan angioplastika' },
    
    // Ortopediya
    { id: 7, procedure: 'Tizza bo\'g\'imini almashtirish', price: 4500, department: 'ortopediya', clinic: 'amrita', clinicName: 'Amrita shifoxonasi', clinicImage: amritaWard, duration: '5-7 kun', description: 'Tizza protezi o\'rnatish' },
    { id: 8, procedure: 'Chanoq-son bo\'g\'imini almashtirish', price: 5500, department: 'ortopediya', clinic: 'fortis', clinicName: 'Fortis Escorts', clinicImage: amritaWard, duration: '7-10 kun', description: 'Chanoq-son protezi o\'rnatish' },
    { id: 9, procedure: 'Tizza bo\'g\'imini almashtirish', price: 4900, department: 'ortopediya', clinic: 'apollo', clinicName: 'Apollo Hospitals', clinicImage: amritaWard, duration: '5-7 kun', description: 'Tizza protezi o\'rnatish' },
    { id: 10, procedure: 'Yelka bo\'g\'imini almashtirish', price: 3800, department: 'ortopediya', clinic: 'artemis', clinicName: 'Artemis Hospital', clinicImage: amritaWard, duration: '4-6 kun', description: 'Yelka protezi o\'rnatish' },
    { id: 11, procedure: 'Oyoq suyagini tiklash', price: 3200, department: 'ortopediya', clinic: 'max', clinicName: 'MAX Hospital', clinicImage: amritaWard, duration: '3-5 kun', description: 'Suyak tiklash operatsiyasi' },

    // Onkologiya
    { id: 12, procedure: 'Kimyoterapiya (1 sikl)', price: 800, department: 'onkologiya', clinic: 'amrita', clinicName: 'Amrita shifoxonasi', clinicImage: amritaMRT, duration: '1-2 kun', description: 'Kimyoterapiya kursi' },
    { id: 13, procedure: 'Nur terapiyasi (IMRT)', price: 6000, department: 'onkologiya', clinic: 'apollo', clinicName: 'Apollo Hospitals', clinicImage: amritaMRT, duration: '6-8 hafta', description: 'Zamonaviy nur terapiyasi' },
    { id: 14, procedure: 'Tumor jarrohligi', price: 4500, department: 'onkologiya', clinic: 'fortis', clinicName: 'Fortis Escorts', clinicImage: amritaMRT, duration: '5-7 kun', description: 'Tumor olib tashlash' },
    { id: 15, procedure: 'Kimyoterapiya (6 sikl)', price: 4200, department: 'onkologiya', clinic: 'artemis', clinicName: 'Artemis Hospital', clinicImage: amritaMRT, duration: '3-6 oy', description: 'To\'liq kimyoterapiya kursi' },
    { id: 16, procedure: 'Immunoterapiya', price: 8500, department: 'onkologiya', clinic: 'max', clinicName: 'MAX Hospital', clinicImage: amritaMRT, duration: '6-12 oy', description: 'Immunoterapiya kursi' },

    // Nevrologiya
    { id: 17, procedure: 'Miya shishi olib tashlash', price: 12000, department: 'nevrologiya', clinic: 'amrita', clinicName: 'Amrita shifoxonasi', clinicImage: amrita1, duration: '7-14 kun', description: 'Miya shishi jarrohligi' },
    { id: 18, procedure: 'Epilepsiya jarrohligi', price: 15000, department: 'nevrologiya', clinic: 'apollo', clinicName: 'Apollo Hospitals', clinicImage: amrita1, duration: '10-21 kun', description: 'Epilepsiya jarrohligi' },
    { id: 19, procedure: 'Spinal jarrohlik', price: 8000, department: 'nevrologiya', clinic: 'fortis', clinicName: 'Fortis Escorts', clinicImage: amrita1, duration: '5-10 kun', description: 'Umurtqa jarrohligi' },
    { id: 20, procedure: 'Miya anevrizmasi jarrohligi', price: 18000, department: 'nevrologiya', clinic: 'artemis', clinicName: 'Artemis Hospital', clinicImage: amrita1, duration: '14-21 kun', description: 'Miya anevrizmasi jarrohligi' }
  ]

  const departments = [
    { value: 'kardiologiya', label: t('pricing.departments.cardiology') },
    { value: 'ortopediya', label: t('pricing.departments.orthopedics') },
    { value: 'onkologiya', label: t('pricing.departments.oncology') },
    { value: 'nevrologiya', label: t('pricing.departments.neurology') }
  ]

  const sortOptions = [
    { value: 'default', label: t('pricing.sort.default') },
    { value: 'cheapest', label: t('pricing.sort.cheapest') },
    { value: 'expensive', label: t('pricing.sort.expensive') }
  ]

  useEffect(() => {
    let filtered = allData.filter(item => item.department === selectedDepartment)
    
    if (selectedProcedure !== 'all') {
      filtered = filtered.filter(item => item.procedure === selectedProcedure)
    }

    if (selectedSort === 'cheapest') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (selectedSort === 'expensive') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilteredData(filtered)
  }, [selectedDepartment, selectedProcedure, selectedSort])

  const getProceduresForDepartment = (department: string) => {
    const procedures = allData
      .filter(item => item.department === department)
      .map(item => item.procedure)
    return [...new Set(procedures)]
  }

  const handleRequestQuote = (item: PricingData) => {
    // In real app, this would open a modal or navigate to quote request
    console.log('Request quote for:', item)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="container relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              {t('pricing.subtitle')}
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
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('pricing.filters.department')}
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => {
                  setSelectedDepartment(e.target.value)
                  setSelectedProcedure('all')
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {departments.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('pricing.filters.procedure')}
              </label>
              <select
                value={selectedProcedure}
                onChange={(e) => setSelectedProcedure(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">{t('pricing.filters.allProcedures')}</option>
                {getProceduresForDepartment(selectedDepartment).map((procedure) => (
                  <option key={procedure} value={procedure}>
                    {procedure}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2">
                {t('pricing.filters.sort')}
              </label>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Header */}
      <div className="py-6 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {departments.find(d => d.value === selectedDepartment)?.label} {t('pricing.results.prices')}
            </h3>
            <span className="text-lg text-gray-600">
              {filteredData.length} {t('pricing.results.found')}
            </span>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {filteredData.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('pricing.noResults')}
              </h3>
              <p className="text-gray-600">
                {t('pricing.tryDifferentFilters')}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredData.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.clinicImage}
                      alt={item.clinicName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = 'https://placehold.co/600x400/cccccc/FFFFFF?text=Klinika'
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-gray-700">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {item.procedure}
                    </h4>
                    <p className="text-blue-600 font-semibold mb-3">
                      {item.clinicName}
                    </p>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-green-600">
                        ${item.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">
                        {t('pricing.startingFrom')}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleRequestQuote(item)}
                      className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      {t('pricing.requestQuote')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              {t('pricing.cta.title')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('pricing.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('pricing.cta.consult')}</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{t('pricing.cta.chat')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
