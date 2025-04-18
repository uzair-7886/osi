// /schemas/termsAndConditions.js
export default {
    name: 'termsAndConditions',
    title: 'Terms & Conditions',
    type: 'document',
    fields: [
      {
        name: 'rawContent',
        title: 'Raw Content',
        type: 'text',
        description:
          'Paste the full Terms & Conditions text here (including all numbered clauses).',
        rows: 50,
        validation: Rule => Rule.required().warning('You need to paste the T&C text.')
      }
    ]
  }
  