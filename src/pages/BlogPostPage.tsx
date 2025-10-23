import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>()
  
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-lg text-gray-600">Maqola topilmadi</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-4xl mx-auto px-5">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Bosh sahifa</Link>
            <span className="text-gray-400">/</span>
            <Link to="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Post Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {post.category.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex justify-center items-center space-x-6 text-blue-100">
            <div className="flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Post Image */}
      <div className="max-w-4xl mx-auto px-5 py-8">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-4xl mx-auto px-5 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Asosiy mavzular</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bu maqolada siz Hindistonda tibbiy davolanishning afzalliklari, 
              eng yaxshi klinikalar va shifokorlar haqida batafsil ma'lumot olasiz. 
              Biz sizga to'liq qo'llanma va maslahatlar beramiz.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Yuqori sifat va malaka</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hindiston tibbiyot sohasida dunyoda yetakchi o'rinda turadi. 
              Bu yerda eng zamonaviy texnologiyalar va tajribali shifokorlar mavjud.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Hamyonbop narxlar</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              G'arb mamlakatlariga nisbatan Hindistonda davolanish ancha arzon. 
              Bu esa ko'plab bemorlar uchun imkoniyat yaratadi.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-lg my-8">
              <p className="text-lg italic text-gray-700">
                "Hindistonda davolanish - bu nafaqat sog'liqni tiklash, 
                balki yangi tajriba va imkoniyatlar olishdir."
              </p>
            </blockquote>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Xulosa</h3>
            <p className="text-gray-700 leading-relaxed">
              Hindistonda davolanish sizning sog'liqingiz va moliyaviy ahvolingiz uchun 
              eng yaxshi tanlov bo'lishi mumkin. MedMapp sizga bu yo'lda to'liq yordam beradi.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
