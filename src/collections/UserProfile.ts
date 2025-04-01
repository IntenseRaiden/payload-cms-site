import type { CollectionConfig } from 'payload/types'

export const UserProfile: CollectionConfig = {
  slug: 'user-profile',
  labels: {
    singular: 'User Profile',
    plural: 'User Profile', // 👈 keep it singular if you want
  },
  admin: {
    useAsTitle: 'name',
    group: 'Structure',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short Bio',
    },
    {
      name: 'about',
      type: 'richText',
      label: 'About Me',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Interests / Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}
