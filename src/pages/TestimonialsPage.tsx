import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

interface Testimonial {
  id: number
  name: string
  treatment: string
  hospital: string
  quote: string
  image: string
  videoUrl?: string
  isVerified: boolean
}

const TestimonialsPage = () => {
  const { t } = useTranslation()
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [currentVideoUrl, setCurrentVideoUrl] = useState('')

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Ali Valiyev',
      treatment: 'Buyrak transplantatsiyasi',
      hospital: 'Amrita shifoxonasi',
      quote: 'MedMapp jamoasiga chuqur minnatdorchiligimni bildiraman. Ular nafaqat eng yaxshi klinikani topishga yordam berishdi, balki butun safar davomida meni qollab-quvvatlashdi.',
      image: 'https://placehold.co/120x120/333333/FFFFFF?text=A.V.',
      videoUrl: 'https://www.youtube.com/embed/GpGugHf003c',
      isVerified: true
    },
    {
      id: 2,
      name: 'Nodira Karimova',
      treatment: 'Yurak klapanini almashtirish',
      hospital: 'Fortis Escorts',
      quote: 'Yuragimdagi muammo tufayli juda xavotirda edim. MedMapp menga Hindistondagi eng yaxshi kardiologlardan birini topishga yordam berdi. Natijalardan juda mamnunman!',
      image: 'https://placehold.co/120x120/20c997/FFFFFF?text=N.K.',
      isVerified: true
    },
    {
      id: 3,
      name: 'Rustam Toshmatov',
      treatment: 'Onkologiya davolanishi',
      hospital: 'Apollo shifoxonasi',
      quote: 'Saraton tashxisi qoyilganda umidsizlikka tushgan edim. MedMapp orqali Hindistondagi eng yaxshi onkologlardan davolanish imkoniyatiga ega bo\'ldim. Hozir to\'liq sog\'ayib ketdim!',
      image: 'https://placehold.co/120x120/3b82f6/FFFFFF?text=R.T.',
      isVerified: true
    },
    {
      id: 4,
      name: 'Malika Karimova',
      treatment: 'Jigar transplantatsiyasi',
      hospital: 'Medanta shifoxonasi',
      quote: 'Jigar muammosi tufayli hayotim xavf ostida edi. MedMapp jamoasi menga eng yaxshi shifokorlarni topishda yordam berdi. Endi sog\'lom va baxtli hayot kechirayapman.',
      image: 'https://placehold.co/120x120/f59e0b/FFFFFF?text=M.K.',
      isVerified: true
    },
    {
      id: 5,
      name: 'Javlon Abdullayev',
      treatment: 'Neyroxirurgiya',
      hospital: 'Artemis shifoxonasi',
      quote: 'Miyamda o\'sma bor edi va O\'zbekistonda davolanish imkoniyati yo\'q edi. MedMapp orqali Hindistonda muvaffaqiyatli operatsiya qildirdim. Jamoaga rahmat!',
      image: 'https://placehold.co/120x120/ef4444/FFFFFF?text=J.A.',
      isVerified: true
    },
    {
      id: 6,
      name: 'Dilnoza Rahimova',
      treatment: 'Kosmetik jarrohlik',
      hospital: 'Max shifoxonasi',
      quote: 'Burnimni tuzatishni xohlagan edim. MedMapp menga eng yaxshi kosmetik jarrohlarni topishda yordam berdi. Natijadan juda mamnunman va tavsiya qilaman!',
      image: 'https://placehold.co/120x120/8b5cf6/FFFFFF?text=D.R.',
      isVerified: true
    }
  ]

  const handleVideoClick = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl)
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
    setCurrentVideoUrl('')
  }

  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVideoOpen])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/Dehli.jpg)' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-800/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('testimonials.hero.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('testimonials.hero.subtitle')}
          </p>
          
          {/* Trust Stats */}
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white">1,000+</div>
              <div className="text-sm opacity-80">{t('testimonials.hero.stats.mamnunBemorlar')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm opacity-80">{t('testimonials.hero.stats.ijobiyFikrlar')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm opacity-80">{t('testimonials.hero.stats.mamlakatdanBemorlar')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Video or Image */}
                {testimonial.videoUrl ? (
                  <div 
                    className="relative cursor-pointer group"
                    onClick={() => handleVideoClick(testimonial.videoUrl!)}
                  >
                    <img
                      src="/images/doctor4.jpg"
                      alt={testimonial.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-56 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                )}

                <div className="p-6 relative">
                  {/* Verified Badge */}
                  {testimonial.isVerified && (
                    <div className="absolute top-4 right-6 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      {t('testimonials.card.verified')}
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 pl-6 border-l-4 border-blue-500">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.treatment}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.hospital}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('testimonials.cta.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {t('testimonials.cta.subtitle')}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {t('testimonials.cta.shareButton')}
          </button>
        </div>
      </section>

      {/* Video Lightbox */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <iframe
              src={currentVideoUrl}
              title="Testimonial Video"
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default TestimonialsPage