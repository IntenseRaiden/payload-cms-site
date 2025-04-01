import type { CollectionConfig } from 'payload'

export const Showcase: CollectionConfig = {
  slug: 'showcase',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'status', 'createdAt'],
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
      name: 'type',
      type: 'select',
      hasMany: false,
      required: true,
      options: [
        { label: 'Project', value: 'project' },
        { label: 'My Work', value: 'my-work' },
        { label: 'Work in Progress', value: 'wip' },
        { label: 'Experiment / Concept', value: 'concept' },
        { label: 'Inspiration', value: 'inspiration' },
        { label: 'Australian Business', value: 'aussie-business' },
        { label: 'Tool or Product I Like', value: 'product-spotlight' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      hasMany: false,
      defaultValue: 'completed',
      options: [
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Completed', value: 'completed' },
        { label: 'Archived', value: 'archived' },
      ],
    },
    {
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack',
      fields: [
        {
          name: 'tech',
          type: 'text',
        },
      ],
    },
    {
      name: 'links',
      type: 'array',
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
    {
      name: 'source',
      type: 'text',
      label: 'Source / Attribution',
      admin: {
        description: 'Add a URL, person, or company if you didn’t make this.',
      },
    },
    {
      name: 'learningNote',
      type: 'textarea',
      label: 'What I Learned',
      admin: {
        description: 'Write a short reflection or takeaway about this showcase item.',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Feature this on homepage?',
      defaultValue: false,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
  ],
}
