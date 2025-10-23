import { useTranslation } from 'react-i18next'

export const Loading = () => {
  const { t } = useTranslation()

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Medical Cross with Airplane Icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto relative">
            {/* Blue Cross */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-4 bg-blue-400 rounded-sm"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-16 bg-blue-400 rounded-sm"></div>
            </div>
            
            {/* White Airplane */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white transform rotate-45" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            
            {/* Green Dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full loading-bounce"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-gray-600 text-lg font-medium loading-pulse">
          {t('common.loading') || 'Yuklanmoqda...'}
        </div>
      </div>
    </div>
  )
}
