export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Gallery Title',
        type: 'string',
        description: 'Main title for the gallery section'
      },
      {
        name: 'sections',
        title: 'Gallery Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'name',
                title: 'Section Name',
                type: 'string'
              },
              {
                name: 'description',
                title: 'Section Description',
                type: 'text'
              },
              {
                name: 'images',
                title: 'Section Images',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    fields: [
                      {
                        name: 'image',
                        title: 'Image',
                        type: 'image',
                        options: {
                          hotspot: true
                        }
                      },
                      {
                        name: 'caption',
                        title: 'Caption',
                        type: 'string'
                      },
                      {
                        name: 'alt',
                        title: 'Alt Text',
                        type: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }