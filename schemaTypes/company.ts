import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Company',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(200),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'timeFrom',
      title: 'From',
      type: 'date',
    }),
    defineField({
      name: 'timeTo',
      title: 'To',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      role: 'role',
      timeFrom: 'timeFrom',
      timeTo: 'timeTo',
      logo: 'logo',
    },
    prepare({role, timeFrom, timeTo, logo}) {
      return {
        title: `${role}`,
        subtitle: `${timeFrom} - ${timeTo || ''}`,
        media: logo,
      }
    },
  },
  orderings: [
    {
      title: 'Time From, New',
      name: 'timeFromDesc',
      by: [{field: 'timeFrom', direction: 'desc'}],
    },
    {
      title: 'Time From, Old',
      name: 'timeFromAsc',
      by: [{field: 'timeFrom', direction: 'asc'}],
    },
  ],
})
