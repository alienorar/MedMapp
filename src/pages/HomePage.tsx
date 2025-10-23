import { useTranslation } from 'react-i18next'
import hospital1 from '/images/hospital1.png'
import doctor1 from '/images/doctor1.png'
import doctor2 from '/images/doctor2.jpg'
import doctor3 from '/images/doctor3.jpg'
import doctor4 from '/images/doctor4.jpg'
import doctor5 from '/images/doctor5.jpg'
import doctor6 from '/images/doctor6.jpg'
import amritaMain from '/images/Amrita/Amrita-01.png'
import apolloMain from '/images/Apollo/Apollo.jpg'
import artemisMain from '/images/Artemis/Artemis-main.jpg'
import asianMain from '/images/Asian/Marengo_new.jpg'
import fortisMain from '/images/Fortis/main.jpg'
import maxMain from '/images/Max/max-main.jpg'
import medantaMain from '/images/Medanta/main.jpg'
import metroMain from '/images/Metro/main.jpg'

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 lg:py-32 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/images/Intro.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img 
              src={hospital1} 
              alt="Medical Background" 
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            
            {/* Consultation Form */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl max-w-6xl mx-auto backdrop-blur-sm bg-white/95">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {/* Location Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-800 mb-2 text-left">
                    {t('home.form.location')}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-blue-500 group-focus-within:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <select className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 text-gray-800 font-medium bg-white hover:border-gray-300 transition-all duration-300 appearance-none cursor-pointer">
                      <option className="text-gray-500">{t('home.form.selectRegion')}</option>
                      <option>Toshkent</option>
                      <option>Samarqand</option>
                      <option>Buxoro</option>
                      <option>Namangan</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Treatment Method Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-800 mb-2 text-left">
                    {t('home.form.treatment')}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500 group-focus-within:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <select className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-red-500/20 focus:border-red-500 text-gray-800 font-medium bg-white hover:border-gray-300 transition-all duration-300 appearance-none cursor-pointer">
                      <option className="text-gray-500">{t('home.form.selectTreatment')}</option>
                      <option>Kardiologiya</option>
                      <option>Onkologiya</option>
                      <option>Neyroxirurgiya</option>
                      <option>Ortopediya</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-800 mb-2 text-left">
                    {t('home.form.phone')}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-green-500 group-focus-within:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="+998 (90) 123-45-67"
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-green-500/20 focus:border-green-500 text-gray-800 font-medium bg-white hover:border-gray-300 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-transparent mb-2">
                    {/* Invisible label for spacing */}
                    &nbsp;
                  </label>
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>{t('home.form.consultation')}</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Text Overlay */}
        <div className="absolute bottom-0 left-0 p-8">
          <p className="text-6xl font-bold text-white opacity-10">CUTTING EDGE TECHNOLOGY</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100</div>
              <div className="text-lg opacity-90">{t('home.stats.satisfiedPatients')}</div>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20</div>
              <div className="text-lg opacity-90">{t('home.stats.internationalClinics')}</div>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150</div>
              <div className="text-lg opacity-90">{t('home.stats.worldClassDoctors')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-disciplinary Medical Care Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('home.medicalCare.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {t('home.medicalCare.subtitle')}
            </p>
          </div>
          
          {/* Medical Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🧬', title: t('home.medicalCare.oncology'), desc: t('home.medicalCare.oncologyDesc'), color: 'bg-purple-50 text-purple-600' },
              { icon: '🧠', title: t('home.medicalCare.neurosurgery'), desc: t('home.medicalCare.neurosurgeryDesc'), color: 'bg-cyan-50 text-cyan-600' },
              { icon: '🦴', title: t('home.medicalCare.spineSurgery'), desc: t('home.medicalCare.spineSurgeryDesc'), color: 'bg-blue-50 text-blue-600' },
              { icon: '❤️', title: t('home.medicalCare.cardiology'), desc: t('home.medicalCare.cardiologyDesc'), color: 'bg-red-50 text-red-600' },
              { icon: '🦴', title: t('home.medicalCare.orthopedics'), desc: t('home.medicalCare.orthopedicsDesc'), color: 'bg-amber-50 text-amber-600' },
              { icon: '🧪', title: t('home.medicalCare.ivf'), desc: t('home.medicalCare.ivfDesc'), color: 'bg-green-50 text-green-600' },
              { icon: '👩', title: t('home.medicalCare.gynecology'), desc: t('home.medicalCare.gynecologyDesc'), color: 'bg-pink-50 text-pink-600' },
              { icon: '✨', title: t('home.medicalCare.cosmeticSurgery'), desc: t('home.medicalCare.cosmeticSurgeryDesc'), color: 'bg-indigo-50 text-indigo-600' },
              { icon: '⚖️', title: t('home.medicalCare.weightLoss'), desc: t('home.medicalCare.weightLossDesc'), color: 'bg-orange-50 text-orange-600' },
              { icon: '🫀', title: t('home.medicalCare.liverTransplant'), desc: t('home.medicalCare.liverTransplantDesc'), color: 'bg-red-50 text-red-600' },
              { icon: '🫘', title: t('home.medicalCare.kidneyTransplant'), desc: t('home.medicalCare.kidneyTransplantDesc'), color: 'bg-emerald-50 text-emerald-600' },
              { icon: '🦴', title: t('home.medicalCare.boneMarrow'), desc: t('home.medicalCare.boneMarrowDesc'), color: 'bg-gray-50 text-gray-600' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Hospitals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{t('home.hospitals.title')}</h2>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">{t('home.hospitals.viewAll')}</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: t('home.hospitals.amrita'), location: t('home.hospitals.amritaLocation'), image: amritaMain },
              { name: t('home.hospitals.artemis'), location: t('home.hospitals.artemisLocation'), image: artemisMain },
              { name: t('home.hospitals.apollo'), location: t('home.hospitals.apolloLocation'), image: apolloMain },
              { name: t('home.hospitals.max'), location: t('home.hospitals.maxLocation'), image: maxMain },
            ].map((hospital, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{hospital.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {hospital.location}
                  </p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                    {t('home.hospitals.viewDetails')} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('home.howWeWork.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('home.howWeWork.subtitle')}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howWeWork.step1.title')}</h3>
                    <p className="text-gray-600">{t('home.howWeWork.step1.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howWeWork.step2.title')}</h3>
                    <p className="text-gray-600">{t('home.howWeWork.step2.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howWeWork.step3.title')}</h3>
                    <p className="text-gray-600">{t('home.howWeWork.step3.desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.howWeWork.step4.title')}</h3>
                    <p className="text-gray-600">{t('home.howWeWork.step4.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img src={doctor1} alt="Doctor" className="w-full h-96 object-cover rounded-xl shadow-lg" />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-xl flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-900">
        <div className="container">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📋', title: t('home.services.medicalReport'), desc: t('home.services.medicalReportDesc') },
              { icon: '✈️', title: t('home.services.preTravel'), desc: t('home.services.preTravelDesc') },
              { icon: '📄', title: t('home.services.visaHelp'), desc: t('home.services.visaHelpDesc') },
              { icon: '🗣️', title: t('home.services.translators'), desc: t('home.services.translatorsDesc') },
              { icon: '🏨', title: t('home.services.hotel'), desc: t('home.services.hotelDesc') },
              { icon: '📅', title: t('home.services.appointment'), desc: t('home.services.appointmentDesc') },
            ].map((service, i) => (
              <div key={i} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-20 transition-all duration-300">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center text-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white text-opacity-80 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try Now Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('home.tryNow.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('home.tryNow.subtitle')}
              </p>
              <div className="relative">
                <img src={doctor2} alt="Doctor consultation" className="w-full h-80 object-cover rounded-xl shadow-lg" />
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">💙</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('home.tryNow.onlineConsultation')}</h3>
                    <p className="text-gray-600">{t('home.tryNow.onlineConsultationDesc')}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('home.tryNow.secondOpinion')}</h3>
                    <p className="text-gray-600">{t('home.tryNow.secondOpinionDesc')}</p>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    {t('home.tryNow.chatWithExpert')}
                  </button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t('home.tryNow.healthServices')}</h3>
                    <p className="text-gray-600">{t('home.tryNow.healthServicesDesc')}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    {t('home.tryNow.sendRequest')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5000+', label: t('home.finalStats.patients') },
              { number: '50+', label: t('home.finalStats.hospitals') },
              { number: '200+', label: t('home.finalStats.doctors') },
              { number: '98%', label: t('home.finalStats.satisfaction') },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('home.ourServices.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('home.ourServices.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: t('home.ourServices.cardiology'), desc: t('home.ourServices.cardiologyDesc'), color: 'bg-red-50 text-red-600' },
              { icon: '🧬', title: t('home.ourServices.oncology'), desc: t('home.ourServices.oncologyDesc'), color: 'bg-purple-50 text-purple-600' },
              { icon: '🧠', title: t('home.ourServices.neurosurgery'), desc: t('home.ourServices.neurosurgeryDesc'), color: 'bg-cyan-50 text-cyan-600' },
              { icon: '🦴', title: t('home.ourServices.orthopedics'), desc: t('home.ourServices.orthopedicsDesc'), color: 'bg-amber-50 text-amber-600' },
              { icon: '🫁', title: t('home.ourServices.transplant'), desc: t('home.ourServices.transplantDesc'), color: 'bg-emerald-50 text-emerald-600' },
              { icon: '✨', title: t('home.ourServices.cosmetic'), desc: t('home.ourServices.cosmeticDesc'), color: 'bg-pink-50 text-pink-600' },
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('home.popularHospitals.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('home.popularHospitals.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: t('home.popularHospitals.amrita'), location: t('home.popularHospitals.amritaLocation'), image: amritaMain, certifications: 'NABH, ISO, NABL' },
              { name: t('home.popularHospitals.apollo'), location: t('home.popularHospitals.apolloLocation'), image: apolloMain, certifications: 'NABH, JCI, NABL' },
              { name: t('home.popularHospitals.artemis'), location: t('home.popularHospitals.artemisLocation'), image: artemisMain, certifications: 'NABH, ISO' },
              { name: t('home.popularHospitals.asian'), location: t('home.popularHospitals.asianLocation'), image: asianMain, certifications: 'NABH, NABL' },
              { name: t('home.popularHospitals.fortis'), location: t('home.popularHospitals.fortisLocation'), image: fortisMain, certifications: 'NABH, JCI' },
              { name: t('home.popularHospitals.max'), location: t('home.popularHospitals.maxLocation'), image: maxMain, certifications: 'NABH, NABL' },
              { name: t('home.popularHospitals.medanta'), location: t('home.popularHospitals.medantaLocation'), image: medantaMain, certifications: 'NABH, JCI' },
              { name: t('home.popularHospitals.metro'), location: t('home.popularHospitals.metroLocation'), image: metroMain, certifications: 'NABH, ISO' },
            ].map((hospital, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      {t('home.popularHospitals.details')}
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {hospital.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{hospital.certifications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('home.doctors.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('home.doctors.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: t('home.doctors.rajesh'), specialty: t('home.doctors.cardiologist'), experience: t('home.doctors.experience15'), image: doctor1 },
              { name: t('home.doctors.priya'), specialty: t('home.doctors.oncologist'), experience: t('home.doctors.experience12'), image: doctor2 },
              { name: t('home.doctors.amit'), specialty: t('home.doctors.neurosurgeon'), experience: t('home.doctors.experience18'), image: doctor3 },
              { name: t('home.doctors.sunita'), specialty: t('home.doctors.orthopedist'), experience: t('home.doctors.experience14'), image: doctor4 },
              { name: t('home.doctors.vikram'), specialty: t('home.doctors.transplantologist'), experience: t('home.doctors.experience20'), image: doctor5 },
              { name: t('home.doctors.anjali'), specialty: t('home.doctors.cosmeticSurgeon'), experience: t('home.doctors.experience10'), image: doctor6 },
            ].map((doctor, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group">
                <div className="relative mb-6">
                  <img src={doctor.image} alt={doctor.name} className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {doctor.experience}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  {t('home.doctors.consultation')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('home.cta.title')}</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t('home.cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('home.cta.call')}</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>{t('home.cta.chat')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
