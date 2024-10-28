export default {
    name: 'program',
    title: 'Programs',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
        description: 'The main title for the programs section'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'The subtitle text (e.g., "A DECADE OF DELIVERING")'
      },
      {
        name: 'programs',
        title: 'Programs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Program Title',
                type: 'string'
              },
              {
                name: 'ageRange',
                title: 'Age Range',
                type: 'string'
              },
              {
                name: 'image',
                title: 'Program Image',
                type: 'image',
                options: {
                  hotspot: true
                }
              }
            ]
          }
        ]
      }
    ]
  }