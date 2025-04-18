// /schemas/studentCodeOfConduct.js
export default {
    name: 'studentCodeOfConduct',
    title: 'Student Code of Conduct',
    type: 'document',
    fields: [
      {
        name: 'rawContent',
        title: 'Raw Content',
        type: 'text',
        description: 'Paste the full “Student Code of Conduct” text here (no parentheses).',
        rows: 40,
        validation: Rule => Rule.required().warning('You need to paste the conduct text here.')
      }
    ]
  }
  