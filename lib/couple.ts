// Edit names, labels, descriptions and photos here.
// Photos are served from /public/images. Add bride.jpg and groom.jpg there,
// or change the `photo` paths below. If a file is missing (or `photo` is null),
// the floral portrait placeholder is shown instead.

export type Profile = {
  id: 'bride' | 'groom'
  label: string
  name: string
  description: string
  photo: string | null
}

export const introduction = {
  eyebrow: 'The Bride & Groom',
  title: 'Two Souls, One Journey',
}

export const profiles: Profile[] = [
  {
    id: 'bride',
    label: 'The Bride',
    name: 'Dr. Pushpita',
    description:
      'Gentle in spirit and bright in heart, she brings warmth and grace to everyone around her. With the blessings of her family, she joyfully begins this beautiful new chapter.',
    photo: '/images/bride.jpg',
  },
  {
    id: 'groom',
    label: 'The Groom',
    name: 'Engr. Argho',
    description:
      'Kind, steadfast and full of quiet strength, he meets life with an open heart. With the blessings of his family, he joyfully steps forward into this sacred union.',
    photo: '/images/groom.jpg',
  },
]
