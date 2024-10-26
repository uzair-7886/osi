export default {
    name: 'methodologies',
    type: 'document',
    title: 'About Us Methodologies',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        }
    ]
}