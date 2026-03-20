export type UserRole = 'client' | 'admin'
export type Language = 'it' | 'en' | 'es'
export type ConsultationStatus = 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled'
export type PortalStepStatus = 'not_started' | 'in_progress' | 'completed' | 'blocked'
export type ClientRequestStatus = 'open' | 'in_review' | 'resolved'
export type ClientRequestType = 'support' | 'feedback' | 'revision' | 'automation'
export type AutomationStatus = 'active' | 'queued' | 'paused' | 'completed'

export interface Profile {
  id: string
  full_name: string | null
  phone: string | null
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
  day: number
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
  description: string | null
  type: 'pdf' | 'template' | 'guide' | 'video'
  file_url: string | null
  embed_url: string | null
  is_premium: boolean
  unlock_step_code: string | null
  is_active: boolean
  sort_order: number
  created_at: string
}

export interface ClientWorkspace {
  id: string
  user_id: string
  business_name: string | null
  offer_name: string | null
  niche: string | null
  target_customer: string | null
  main_goal: string | null
  current_stage: string | null
  primary_channel: string | null
  notes: string | null
  automation_focus: string | null
  workspace_health: number
  created_at: string
  updated_at: string
}

export interface ClientStep {
  id: string
  user_id: string
  code: string
  title: string
  summary: string
  deliverable_title: string | null
  next_action: string | null
  status: PortalStepStatus
  progress: number
  sort_order: number
  created_at: string
  updated_at: string
}

export interface ClientTask {
  id: string
  user_id: string
  step_code: string | null
  title: string
  description: string | null
  completed: boolean
  is_automated: boolean
  due_label: string | null
  sort_order: number
  created_at: string
  updated_at: string
}

export interface AutomationRun {
  id: string
  user_id: string
  title: string
  automation_type: string
  status: AutomationStatus
  summary: string | null
  last_run_at: string | null
  next_run_at: string | null
  created_at: string
  updated_at: string
}

export interface ClientRequest {
  id: string
  user_id: string
  type: ClientRequestType
  title: string
  description: string | null
  status: ClientRequestStatus
  created_at: string
  updated_at: string
}
