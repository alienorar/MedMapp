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
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div className="header-container">
        <div className="header-content">
          <Link to="/" className="header-logo">
            <img src={logo} alt="MedMapp" className="header-logo-img" />
          </Link>

          <nav className="header-nav">
            <Link 
              to="/" 
              className={`header-nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/services" 
              className={`header-nav-link ${location.pathname === '/services' ? 'active' : ''}`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              to="/clinics" 
              className={`header-nav-link ${location.pathname === '/clinics' ? 'active' : ''}`}
            >
              {t('nav.clinics')}
            </Link>
            <Link 
              to="/pricing" 
              className={`header-nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
            >
              {t('nav.pricing')}
            </Link>
            <Link 
              to="/doctors" 
              className={`header-nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}
            >
              {t('nav.doctors')}
            </Link>
            <Link 
              to="/testimonials" 
              className={`header-nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
            >
              {t('nav.testimonials')}
            </Link>
            <Link 
              to="/blog" 
              className={`header-nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
            >
              {t('nav.blog')}
            </Link>
          </nav>

          <div className="header-actions">
            <div className="language-selector">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="language-button"
              >
                <img src={currentLang.flag} alt={currentLang.name} className="language-flag" />
                <span className="language-code">{currentLang.code.toUpperCase()}</span>
                <svg className="language-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`language-option ${i18n.language === lang.code ? 'active' : ''}`}
                    >
                      <img src={lang.flag} alt={lang.name} className="language-option-flag" />
                      <span className="language-option-text">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="cta-button">
              <svg className="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="cta-text">{t('common.getMedicalDiagnosis')}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? (
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

               {isMenuOpen && (
                 <nav className="mobile-nav">
                   <Link
                     to="/"
                     className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.home')}
                   </Link>
                   <Link
                     to="/services"
                     className={`mobile-nav-link ${location.pathname === '/services' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.services')}
                   </Link>
                   <Link
                     to="/clinics"
                     className={`mobile-nav-link ${location.pathname === '/clinics' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.clinics')}
                   </Link>
                   <Link
                     to="/pricing"
                     className={`mobile-nav-link ${location.pathname === '/pricing' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.pricing')}
                   </Link>
                   <Link
                     to="/doctors"
                     className={`mobile-nav-link ${location.pathname === '/doctors' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.doctors')}
                   </Link>
                   <Link
                     to="/testimonials"
                     className={`mobile-nav-link ${location.pathname === '/testimonials' ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.testimonials')}
                   </Link>
                   <Link
                     to="/blog"
                     className={`mobile-nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
                     onClick={() => setIsMenuOpen(false)}
                   >
                     {t('nav.blog')}
                   </Link>
                 </nav>
               )}
      </div>
    </header>
  )
}
