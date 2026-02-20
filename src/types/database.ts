export type UserRole = 'client' | 'admin'
export type Language = 'it' | 'en' | 'es'
export type ConsultationStatus = 'new' | 'contacted' | 'scheduled' | 'completed'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  role: UserRole
  language: Language
  onboarding_completed: boolean
  created_at: string
  updated_at: string
}

export interface CourseProgress {
  id: string
  user_id: string
  day_number: number
  completed: boolean
  completed_at: string | null
  created_at: string
}

export interface Consultation {
  id: string
  name: string
  email: string
  whatsapp: string
  challenge: string
  status: ConsultationStatus
  notes: string | null
  created_at: string
}

export interface Resource {
  id: string
  title: string
  description: string
  file_url: string
  is_free: boolean
  download_count: number
  created_at: string
}
