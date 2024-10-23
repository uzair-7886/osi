export default {
    name: 'heroSection',
    title: 'Hero Section',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string',
        },
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        },
    ],
};