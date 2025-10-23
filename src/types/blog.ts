export interface BlogPost {
  id: string
  title: string
  excerpt: string
  image: string
  category: {
    name: string
    color: string
    bgColor: string
  }
  author: {
    name: string
    avatar?: string
  }
  date: string
  readTime: string
  slug: string
}

export interface BlogCategory {
  name: string
  color: string
  bgColor: string
}
