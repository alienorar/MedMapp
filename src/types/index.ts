export interface Hospital {
  id: string
  name: string
  name_uz: string
  name_ru: string
  name_en: string
  slug: string
  location: string
  city: string
  country: string
  specialties: string[]
  accreditations: string[]
  image: string
  images?: string[]
  description_uz?: string
  description_ru?: string
  description_en?: string
  created_at?: string
}

export interface Doctor {
  id: string
  name: string
  name_uz: string
  name_ru: string
  name_en: string
  specialty: string
  specialty_uz: string
  specialty_ru: string
  specialty_en: string
  experience_years: number
  procedures_count: number
  hospital_id: string
  hospital_name: string
  city: string
  country: string
  rating: number
  image: string
  bio_uz?: string
  bio_ru?: string
  bio_en?: string
  created_at?: string
}

export interface Service {
  id: string
  name_uz: string
  name_ru: string
  name_en: string
  description_uz: string
  description_ru: string
  description_en: string
  icon: string
  created_at?: string
}

export interface BlogPost {
  id: string
  title_uz: string
  title_ru: string
  title_en: string
  slug: string
  excerpt_uz: string
  excerpt_ru: string
  excerpt_en: string
  content_uz: string
  content_ru: string
  content_en: string
  category: string
  author: string
  image: string
  published_at: string
  created_at?: string
}

export interface Testimonial {
  id: string
  patient_name: string
  treatment: string
  rating: number
  content_uz: string
  content_ru: string
  content_en: string
  image?: string
  created_at?: string
}

export interface ConsultationForm {
  name: string
  dob: string
  phone: string
  email?: string
  requirements?: string
  medicalFiles: File[]
}

export interface PricingItem {
  id: string
  treatment_uz: string
  treatment_ru: string
  treatment_en: string
  hospital_id?: string
  price_from: number
  price_to?: number
  currency: string
  notes_uz?: string
  notes_ru?: string
  notes_en?: string
  created_at?: string
}

export type Language = 'uz' | 'ru' | 'en'
