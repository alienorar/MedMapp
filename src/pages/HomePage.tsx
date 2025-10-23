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
      {/* Hero Section with Consultation Form */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img 
            src={hospital1} 
            alt="Medical Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Ishonchli, xavfsiz va shaffof
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              MedMapp platformasi orqali Hindistondagi eng mashhur shifoxonalarda davolaning!
            </p>
            
            {/* Consultation Form */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                {/* Location Input */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Qayerda istiqomat qilasiz?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <select className="w-full pl-10 pr-10 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                      <option>Viloyatni tanlang</option>
                      <option>Toshkent</option>
                      <option>Samarqand</option>
                      <option>Buxoro</option>
                      <option>Namangan</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Treatment Method Input */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Davolash usuli
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <select className="w-full pl-10 pr-10 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                      <option>Davolash usulini</option>
                      <option>Kardiologiya</option>
                      <option>Onkologiya</option>
                      <option>Neyroxirurgiya</option>
                      <option>Ortopediya</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Phone Input */}
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-left">
                    Telefon raqamingiz
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <input 
                      type="tel" 
                      placeholder="+998 (90) 123-45-67"
                      className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-1">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                    Bepul konsultatsiya
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
              <div className="text-lg opacity-90">Mamnun bemorlar</div>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20</div>
              <div className="text-lg opacity-90">Xalqaro Klinikalar</div>
            </div>
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">150</div>
              <div className="text-lg opacity-90">Jahon darajasidagi Shifokorlar</div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-disciplinary Medical Care Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ko'p tarmoqli tibbiy yordam
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Soch ekishdan tortib yurak transplantatsiyasigacha, biz sizning barcha tibbiy ehtiyojlaringizni qoplaymiz.
            </p>
          </div>
          
          {/* Medical Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🧬', title: 'Onkologiya', desc: 'Isbotlangan natijalarga ega saratonni davolash.', color: 'bg-purple-50 text-purple-600' },
              { icon: '🧠', title: 'Neyrojarrohlik', desc: 'Kattalar va bolalar uchun nevrologik jarrohlik amaliyotlari.', color: 'bg-cyan-50 text-cyan-600' },
              { icon: '🦴', title: 'Umurtqa jarrohligi', desc: 'Harakatchanlikni yaxshilash uchun aniq jarrohlik amaliyotlari.', color: 'bg-blue-50 text-blue-600' },
              { icon: '❤️', title: 'Kardiologiya', desc: 'Kattalar va bolalar uchun jahon darajasidagi yurak parvarishi.', color: 'bg-red-50 text-red-600' },
              { icon: '🦴', title: 'Ortopediya', desc: 'Bo\'g\'imlarni almashtirish va suyak deformatsiyasini davolash.', color: 'bg-amber-50 text-amber-600' },
              { icon: '🧪', title: 'EKU', desc: 'Yuqori muvaffaqiyat darajasiga ega bepushtlikni davolash.', color: 'bg-green-50 text-green-600' },
              { icon: '👩', title: 'Ginekologiya', desc: 'Ayollar salomatligi uchun ixtisoslashtirilgan xizmatlar.', color: 'bg-pink-50 text-pink-600' },
              { icon: '✨', title: 'Kosmetik jarrohlik', desc: 'Sizga yangi ko\'rinish beruvchi estetik muolajalar.', color: 'bg-indigo-50 text-indigo-600' },
              { icon: '⚖️', title: 'Vazn yo\'qotish', desc: 'Samarali bariatrik jarrohlik orqali vaznni kamaytirish.', color: 'bg-orange-50 text-orange-600' },
              { icon: '🫀', title: 'Jigar transplantatsiyasi', desc: 'Turli murakkablikdagi jigar ko\'chirib o\'tkazish amaliyotlari.', color: 'bg-red-50 text-red-600' },
              { icon: '🫘', title: 'Buyrak transplantatsiyasi', desc: 'Buyrak transplantatsiyasi va parvarishi bo\'yicha mutaxassis.', color: 'bg-emerald-50 text-emerald-600' },
              { icon: '🦴', title: 'Suyak iligi', desc: 'Mos va nomos donorlar uchun imkoniyatlar.', color: 'bg-gray-50 text-gray-600' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Ommabop shifoxonalar</h2>
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Barchasini ko'rish</a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Amrita shifoxonasi, Faridobod', location: 'Faridabod, Dehli, Hindiston', image: amritaMain },
              { name: 'Artemis shifoxonasi', location: 'Gurgaon', image: artemisMain },
              { name: 'Apollo shifoxonasi', location: 'Bangalor', image: apolloMain },
              { name: 'MAX shifoxonasi', location: 'Yangi Dehli', image: maxMain },
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
                    Batafsil ko'rish →
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
                Biz qanday ishlaymiz?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Biz Hindistonda davolanishni 4 oddiy qadamda tashkil qilamiz.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">1</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Biz bilan bog'laning</h3>
                    <p className="text-gray-600">Kasallik tafsilotlarini biz bilan baham ko'ring va jamoamiz siz bilan bog'lanadi.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">2</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tibbiy xulosa oling</h3>
                    <p className="text-gray-600">48 soat ichida tibbiy xulosa va davolanishning taxminiy narxini oling.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">3</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Chiptalaringizni band qiling</h3>
                    <p className="text-gray-600">Parvozlaringizni band qiling va sizni aeroportda jamoamiz kutib oladi</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">4</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Davolanishni boshlang</h3>
                    <p className="text-gray-600">Hindistonda davolanish jarayonini boshlang va sog'ligingizni tiklang.</p>
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
              Bizning xizmatlarimiz har bir ehtiyojni qoplaydi
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto">
              Jamoamizdan biriktirilgan menejer sizga yordam beradi. Bizdan kutishingiz mumkin bo'lgan xizmatlar ro'yxati BEPUL.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📋', title: 'Tibbiy xulosa va narxlar', desc: 'Tezkor xulosalar va narx takliflarini oling.' },
              { icon: '✈️', title: 'Sayohatdan oldingi konsultatsiyalar', desc: 'Sayohat qilishdan oldin davolanish jarayonini tushunib oling.' },
              { icon: '📄', title: 'Viza yordami', desc: 'Tibbiy viza olishda to\'liq yordam oling.' },
              { icon: '🗣️', title: 'Tarjimonlar', desc: 'Har bir qadamda til to\'siqlarini yengish uchun malakali mutaxassislar.' },
              { icon: '🏨', title: 'Mehmonxona xizmati', desc: 'Shifoxonaga yaqin va byudjetingizga mos.' },
              { icon: '📅', title: 'Qabul va uchrashuv', desc: 'Tibbiy logistikaning to\'liq muvofiqlashtirilishi.' },
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
                Hozir sinab ko'ring
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Sog'liqni saqlash ehtiyojlaringiz uchun tez va ishonchli yechimlar.
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Onlayn shifokor maslahatini oling</h3>
                    <p className="text-gray-600">Uyingizdan chiqmasdan tajribali shifokorlar bilan bog'laning.</p>
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Ikkinchi fikrni oling</h3>
                    <p className="text-gray-600">Hisobotlaringizni yuboring va bepul ekspert xulosasini oling.</p>
                  </div>
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                    Sog'liqni saqlash mutaxassisi bilan suhbatlashing
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Salomatlik xizmatlari</h3>
                    <p className="text-gray-600">Jahon darajasidagi salomatlik markazlarida davolaning.</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    So'rov yuborish
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
              { number: '5000+', label: 'Bemorlar' },
              { number: '50+', label: 'Shifoxonalar' },
              { number: '200+', label: 'Shifokorlar' },
              { number: '98%', label: 'Mamnunlik' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bizning xizmatlarimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Sizning sog'ligingiz uchun to'liq g'amxo'rlik</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '❤️', title: 'Kardiologiya', desc: 'Yurak kasalliklarini davolash', color: 'bg-red-50 text-red-600' },
              { icon: '🧬', title: 'Onkologiya', desc: 'Saraton kasalliklarini davolash', color: 'bg-purple-50 text-purple-600' },
              { icon: '🧠', title: 'Neyroxirurgiya', desc: 'Miya va asab tizimi', color: 'bg-cyan-50 text-cyan-600' },
              { icon: '🦴', title: 'Ortopediya', desc: "Bo'g'imlar va suyaklar", color: 'bg-amber-50 text-amber-600' },
              { icon: '🫁', title: 'Transplantatsiya', desc: 'Organ ko\'chirish operatsiyalari', color: 'bg-emerald-50 text-emerald-600' },
              { icon: '✨', title: 'Kosmetik jarrohlik', desc: 'Estetik operatsiyalar', color: 'bg-pink-50 text-pink-600' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Eng mashhur shifoxonalar</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hindistonning eng yaxshi tibbiy markazlari</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: 'Amrita Hospital', location: 'Faridabad, Hindiston', image: amritaMain, certifications: 'NABH, ISO, NABL' },
              { name: 'Apollo Hospital', location: 'Chennai, Hindiston', image: apolloMain, certifications: 'NABH, JCI, NABL' },
              { name: 'Artemis Hospital', location: 'Gurgaon, Hindiston', image: artemisMain, certifications: 'NABH, ISO' },
              { name: 'Asian Hospital', location: 'Mumbai, Hindiston', image: asianMain, certifications: 'NABH, NABL' },
              { name: 'Fortis Hospital', location: 'Delhi, Hindiston', image: fortisMain, certifications: 'NABH, JCI' },
              { name: 'Max Hospital', location: 'Delhi, Hindiston', image: maxMain, certifications: 'NABH, NABL' },
              { name: 'Medanta Hospital', location: 'Gurgaon, Hindiston', image: medantaMain, certifications: 'NABH, JCI' },
              { name: 'Metro Hospital', location: 'Delhi, Hindiston', image: metroMain, certifications: 'NABH, ISO' },
            ].map((hospital, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img src={hospital.image} alt={hospital.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Batafsil
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bizning shifokorlarimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Yuqori malakali va tajribali mutaxassislar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Rajesh Kumar', specialty: 'Kardiolog', experience: '15 yil', image: doctor1 },
              { name: 'Dr. Priya Sharma', specialty: 'Onkolog', experience: '12 yil', image: doctor2 },
              { name: 'Dr. Amit Patel', specialty: 'Neyroxirurg', experience: '18 yil', image: doctor3 },
              { name: 'Dr. Sunita Singh', specialty: 'Ortoped', experience: '14 yil', image: doctor4 },
              { name: 'Dr. Vikram Mehta', specialty: 'Transplantolog', experience: '20 yil', image: doctor5 },
              { name: 'Dr. Anjali Gupta', specialty: 'Kosmetik jarroh', experience: '10 yil', image: doctor6 },
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
                  Konsultatsiya
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tibbiy yordamga muhtojmisiz?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Bizning mutaxassislarimiz sizga yordam berishga tayyor</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Telefon qilish</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Chat qilish</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
