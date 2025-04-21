export default {
    title: 'Testimonials',
    name: 'testimonials',
    type: 'document',
    fields: [
      {
        title: 'Testimonials List',
        name: 'testimonialsList',
        type: 'array',
        of: [
          {
            title: 'Testimonial',
            name: 'testimonial',
            type: 'object',
            fields: [
              {
                title: 'Testimonial Text',
                name: 'text',
                type: 'text',
                validation: Rule => Rule.required().min(10).max(500),
              },
              {
                title: 'Name',
                name: 'name',
                type: 'string',
                validation: Rule => Rule.required().min(2).max(50),
              },
              // {
              //   title:'Rating',
              //   name:'rating',
              //   type:'number',
              // },
              {
                title:"Country",
                name:"country",
                type:"string",
              },
              {
                title: 'Image',
                name: 'image',
                type: 'image',
                options: {
                  hotspot: true,
                },
                validation: Rule => Rule.required(),
              },
            ],
          },
        ],
      },
    ],
  }