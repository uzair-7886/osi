// /schemas/healthSafety.js
export default {
    name: 'healthSafety',
    title: 'Health & Safety Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        initialValue: 'Health & Safety',
        validation: Rule => Rule.required().warning('Title is required')
      },
      {
        name: 'intro',
        title: 'Intro Paragraphs',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'One or more rich‑text paragraphs',
        validation: Rule => Rule.min(1).warning('Add at least one intro paragraph')
      },
      {
        name: 'protocols',
        title: 'Safety Protocols',
        type: 'array',
        of: [{ type: 'protocol' }],
        validation: Rule => Rule.min(1).warning('Add at least one protocol')
      }
    ]
  }
  