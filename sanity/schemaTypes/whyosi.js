export default {
    name: 'whyosi',
    type: 'document',
    title: 'Why Choose OSI',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'facilities',
            type: 'array',
            title: 'Facilities',
            of: [{ type: 'reference', to: [{ type: 'facility' }] }]
        }
    ]
}