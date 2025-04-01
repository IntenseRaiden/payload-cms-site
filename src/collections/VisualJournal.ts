import type { CollectionConfig } from 'payload'

export const VisualJournal: CollectionConfig = {
  slug: 'visual-journal',
  labels: {
    singular: 'Visual Journal',
    plural: 'Visual Journal', // 👈 prevent "Journals"
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'tags', 'createdAt'],
    group: 'Content',
  },
  fields: [
    {
      name: 'title',
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
      name: 'published',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'location',
      type: 'text',
      admin: {
        description: 'Optional — e.g. city, place, or event',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature on homepage?',
      defaultValue: false,
    },
  ],
}
