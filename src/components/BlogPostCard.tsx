import { Link } from 'react-router-dom'
import type { BlogPost } from '../types/blog'
import { useTranslation } from 'react-i18next'

interface BlogPostCardProps {
  post: BlogPost
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const { t } = useTranslation()

  return (
    <article className="post-card bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl group">
      {/* Image Wrapper */}
      <div className="post-card-image-wrapper relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="post-card-image w-full h-48 object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <span className="post-date-badge absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm border border-white border-opacity-20">
          {post.date}
        </span>
      </div>

      {/* Content */}
      <div className="post-card-content p-5 flex flex-col flex-grow">
        {/* Category */}
        <span 
          className="post-category inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 self-start"
          style={{ 
            backgroundColor: post.category.bgColor, 
            color: post.category.color 
          }}
        >
          {post.category.name}
        </span>

        {/* Title */}
        <h2 className="post-title text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="post-excerpt text-gray-600 text-sm leading-relaxed flex-grow mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="post-meta flex justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-4">
          <div className="post-author flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-gray-400"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="font-medium">{post.author.name}</span>
          </div>
          <Link 
            to={`/blog/${post.slug}`} 
            className="read-more-link text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center gap-1"
          >
            {t('common.readMore')}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="inline-block"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard