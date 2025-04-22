import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'keyword',
  title: 'Keyword',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Keyword',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(50),
    }),
  ],
})
