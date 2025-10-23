import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '/images/logo/MedMapp_Logo.png'
import uzFlag from '/images/language/uz.png'
import ruFlag from '/images/language/ru.png'
import enFlag from '/images/language/en.png'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
    setIsLangDropdownOpen(false)
  }

  const languages = [
    { code: 'uz', name: "O'zbekcha", flag: uzFlag },
    { code: 'ru', name: 'Русский', flag: ruFlag },
    { code: 'en', name: 'English', flag: enFlag },
  ]

  const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="MedMapp" className="h-12 w-auto" />
          </Link>

          <nav className="hidden xl:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.home')}
              {location.pathname === '/' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/services' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.services')}
              {location.pathname === '/services' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/clinics" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/clinics' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.clinics')}
              {location.pathname === '/clinics' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/pricing" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/pricing' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.pricing')}
              {location.pathname === '/pricing' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/doctors" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/doctors' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.doctors')}
              {location.pathname === '/doctors' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname === '/testimonials' ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.testimonials')}
              {location.pathname === '/testimonials' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-700 hover:text-primary transition-colors duration-300 font-medium text-sm px-3 py-2 relative ${
                location.pathname.startsWith('/blog') ? 'text-primary font-semibold' : ''
              }`}
            >
              {t('nav.blog')}
              {location.pathname.startsWith('/blog') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selection - Always visible */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 text-sm font-medium"
              >
                <img src={currentLang.flag} alt={currentLang.name} className="w-5 h-5 rounded" />
                <span className="hidden sm:inline">{currentLang.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        i18n.language === lang.code ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded" />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium text-sm font-semibold whitespace-nowrap group">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{t('common.getMedicalDiagnosis')}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden flex items-center justify-center p-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 transition-all duration-300 ease-out"
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Menu Panel */}
            <nav 
              className="absolute right-0 top-0 h-full w-80 shadow-2xl transform transition-all duration-500 ease-out translate-x-0 slide-in-right"
              style={{ 
                backgroundColor: '#ffffff', 
                opacity: 1,
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none'
              }}
            >
              {/* Menu Header */}
              <div 
                className="flex items-center justify-between p-6 border-b border-gray-200"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-gray-900">{t('nav.menu')}</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>


              {/* Navigation Links */}
              <div 
                className="p-6 space-y-1"
                style={{ backgroundColor: '#ffffff' }}
              >
                <Link
                  to="/"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.home')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/services' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.services')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/clinics"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/clinics' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.clinics')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/pricing"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/pricing' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.pricing')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/doctors"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/doctors' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.doctors')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/testimonials"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname === '/testimonials' ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.testimonials')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/blog"
                  className={`flex items-center justify-between py-4 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 font-medium transform hover:translate-x-2 ${
                    location.pathname.startsWith('/blog') ? 'bg-primary/10 text-primary font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{t('nav.blog')}</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* CTA Button */}
              <div 
                className="p-6 border-t border-gray-200"
                style={{ backgroundColor: '#ffffff' }}
              >
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-soft hover:shadow-medium flex items-center justify-center space-x-3 group">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{t('common.getMedicalDiagnosis')}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
