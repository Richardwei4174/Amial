export type ActivityPost = {
  // personal info
  creatorName: string
  creatorUserName: string
  creatorProfileImageUrl: string
  
  // activity
  id: string
  title: string
  date: string
  time: string
  location: string
  category: string
  description: string
  tags: string[]
  imageUrl?: string // '?' means optional
  createdAt: string

  // engagement
  attendeeCount: number
  commentCount: number
  joinedByMe: boolean

}