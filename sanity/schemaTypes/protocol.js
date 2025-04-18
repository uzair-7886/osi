// /schemas/protocol.js
export default {
    name: 'protocol',
    title: 'Protocol',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required().warning('Each protocol needs a title')
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: Rule => Rule.required().warning('Add a description for this protocol')
      }
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description'
      }
    }
  }
  