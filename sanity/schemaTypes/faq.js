export default {
    title: 'FAQs',
    name: 'faqs',
    type: 'document',
    fields: [
      {
        title: 'FAQ List',
        name: 'faqList',
        type: 'array',
        of: [
          {
            title: 'FAQ Item',
            name: 'faqItem',
            type: 'object',
            fields: [
              {
                title: 'Question',
                name: 'question',
                type: 'string',
                validation: Rule => Rule.required().min(10).max(200)
              },
              {
                title: 'Answer',
                name: 'answer',
                type: 'text',
                validation: Rule => Rule.required().min(10)
              },
              {
                title: 'Image',
                name: 'image',
                type: 'image',
                options: {
                  hotspot: true
                },
                validation: Rule => Rule.required()
              }
            ]
          }
        ]
      }
    ]
  }