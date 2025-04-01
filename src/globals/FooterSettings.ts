import type { GlobalConfig } from 'payload/types'

export const FooterSettings: GlobalConfig = {
  slug: 'footer-settings',
  label: 'Footer Settings',
  admin: {
    group: 'Structure',
  },
  fields: [
    {
      name: 'footerText',
      type: 'textarea',
      label: 'Footer Text',
      required: false,
      admin: {
        description: 'Copyright, disclaimers, or custom text.',
      },
    },
    {
      name: 'footerSocialLinks',
      type: 'array',
      label: 'Social Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'footerLinks',
      type: 'array',
      label: 'Footer Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
