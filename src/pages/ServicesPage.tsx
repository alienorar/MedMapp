import { useTranslation } from 'react-i18next'

export const ServicesPage = () => {
  const { t } = useTranslation()

  const specialties = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          <path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/>
        </svg>
      ),
      title: t('services.specialties.cardiology.title'),
      description: t('services.specialties.cardiology.description')
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
      title: t('services.specialties.oncology.title'),
      description: t('services.specialties.oncology.description')
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
      title: t('services.specialties.neurosurgery.title'),
      description: t('services.specialties.neurosurgery.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15.5 20a4.5 4.5 0 0 1-7 0"/>
          <path d="M8.5 4a4.5 4.5 0 0 1 7 0"/>
          <path d="M12.5 12a2.5 2.5 0 0 1-1 0"/>
          <path d="M8.5 12H4a2.5 2.5 0 0 1 0-5h4.5"/>
          <path d="M15.5 12H20a2.5 2.5 0 0 0 0-5h-4.5"/>
        </svg>
      ),
      title: t('services.specialties.orthopedics.title'),
      description: t('services.specialties.orthopedics.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 13c0 5-3.5 7.5-7.69 8.95a1 1 0 0 1-.62 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1z"/>
          <path d="M12 22V10"/>
        </svg>
      ),
      title: t('services.specialties.liverTransplant.title'),
      description: t('services.specialties.liverTransplant.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M12 8v8"/>
          <path d="M16 12H8"/>
        </svg>
      ),
      title: t('services.specialties.kidneyTransplant.title'),
      description: t('services.specialties.kidneyTransplant.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
      title: t('services.specialties.cosmeticSurgery.title'),
      description: t('services.specialties.cosmeticSurgery.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/>
          <path d="M8.5 2h7"/>
          <path d="M14.5 16h-5"/>
        </svg>
      ),
      title: t('services.specialties.ivf.title'),
      description: t('services.specialties.ivf.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m16 16 3-8 3 8c-2 2-4 2-6 0Z"/>
          <path d="M2 16h3"/>
          <path d="M7 16h3"/>
          <path d="M21 16h-3"/>
          <path d="M15 16h-3"/>
          <path d="M22 16.5c0 1.4-1.6 2.5-3.5 2.5s-3.5-1.1-3.5-2.5"/>
          <path d="M11 16.5c0 1.4-1.6 2.5-3.5 2.5S4 17.9 4 16.5"/>
          <path d="M12 4V2"/>
          <path d="M12 12V7"/>
        </svg>
      ),
      title: t('services.specialties.bariatricSurgery.title'),
      description: t('services.specialties.bariatricSurgery.description')
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
        <div className="container relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
            <a href="#services-process" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              {t('services.ctaButton')}
            </a>
          </div>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-20 bg-white" id="services-process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('services.processTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('services.processSubtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                        <path d="m9 14 2 2 4-4"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.steps.preTravel.title')}</h3>
                      <ul className="space-y-3 text-gray-600">
                        {(t('services.steps.preTravel.items', { returnObjects: true }) as string[])?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        <path d="M3.22 12H9.5l.7-1 2.1 4.4 3.2-7.4H22"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.steps.duringTravel.title')}</h3>
                      <ul className="space-y-3 text-gray-600">
                        {(t('services.steps.duringTravel.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('services.steps.postTravel.title')}</h3>
                      <ul className="space-y-3 text-gray-600">
                        {(t('services.steps.postTravel.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Specialty Section */}
      <section className="py-20 bg-gray-50">
      <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.title}</h3>
                <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
              </div>
            ))}
          </div>
      </div>
      </section>
    </div>
  )
}
