export default {
  name: 'activity',
  type: 'document',
  title: 'Activity',
  fields: [
      {
          name: 'name',
          type: 'string',
          title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'subtitle',
    },
      {
          name: 'description',
          type: 'text',
          title: 'Description'
      },
      {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
              hotspot: true
          }
      }
  ]
}