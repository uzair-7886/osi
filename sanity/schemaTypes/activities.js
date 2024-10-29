export default {
    name: 'activities',
    type: 'document',
    title: 'Activities',
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
            name: 'activities',
            type: 'array',
            title: 'Activities',
            of: [{ type: 'reference', to: [{ type: 'activity' }] }]
        }
    ]
}