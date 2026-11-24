export interface Section {
  id: string
  label: string
}

export const sections: Section[] = [
  { id: 'bio', label: 'Bio' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
