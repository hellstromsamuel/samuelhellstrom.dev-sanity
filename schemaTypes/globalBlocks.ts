import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'globalBlocks',
  title: 'Global blocks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companies',
      title: 'Companies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'company'}]}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Company List',
      }
    },
  },
})
