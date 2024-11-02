export const faqSection = {
    name: 'faqSection',
    title: 'Frequently Asked Questions',
    type: 'document',
    fields: [
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string',
        description: 'Title of the FAQ section (e.g., "General FAQ\'s")'
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
        description: 'Subtitle for the FAQ section'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'Description for the FAQ section'
      },
      {
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'answer',
                title: 'Answer',
                type: 'string',
                validation: Rule => Rule.required()
              }
            ]
          }
        ]
      },
      {
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Order in which this section should appear on the page'
      }
    ]
  };