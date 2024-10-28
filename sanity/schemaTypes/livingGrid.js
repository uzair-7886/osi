export default {
    name: 'livingGrid',
    title: 'Living Grid',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string'
      },
      {
        name: 'mainCard',
        title: 'Main Card',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ]
      },
      {
        name: 'gridCards',
        title: 'Grid Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }
        ],
        validation: Rule => Rule.max(4)
      }
    ]
  }