import { useTranslation } from 'react-i18next'
import BlogPostCard from '../components/BlogPostCard'
import { blogPosts } from '../data/blogPosts'
import amritaAoc01729 from '/images/Amrita/AOC01729.jpg'



export const BlogPage = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Blog Header */}
      <section className="blog-header relative bg-cover bg-center bg-no-repeat py-20 px-5 text-center text-white rounded-b-3xl" 
               style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${amritaAoc01729})` }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <section className="blog-main">
          <div className="blog-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
