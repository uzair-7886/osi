export default {
    name: 'descriptions',
    type: 'document',
    title: 'About Us Description',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Main Heading',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'sub_heading',
            type: 'string',
            title: 'Sub Heading'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [{ type: 'reference', to: [{ type: 'images' }] }]
        },
        {
            name: 'methodologies',
            type: 'array',
            title: 'Methodologies',
            of: [{ type: 'reference', to: [{ type: 'methodologies' }] }]
        }
    ]
}