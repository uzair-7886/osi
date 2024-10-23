export default {
    name: 'imageSlideshow',
    title: 'Image Slideshow',
    type: 'document',
    fields: [
      {
        name: 'images',
        title: 'Slideshow Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true
            }
          }
        ],
        validation: Rule => Rule.min(1).error('At least one image is required')
      }
    ]
  }