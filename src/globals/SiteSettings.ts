import type { GlobalConfig } from 'payload/types'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Structure',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
    },
    //   {
    //     name: 'logo',
    //     type: 'upload',
    //    relationTo: 'media',
    //   },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Links',
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
      name: 'seo',
      label: 'Default SEO',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        //     {
        //       name: 'openGraphImage',
        //      type: 'upload',
        //      relationTo: 'media',
        //       label: 'Open Graph Image',
        //    },
      ],
    },
  ],
}
