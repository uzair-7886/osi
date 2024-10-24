export default {
    name: 'subject',
    type: 'document',
    title: 'Subject',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Subject Name',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        }
    ]
}
