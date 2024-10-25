export default {
    name: 'course',
    type: 'document',
    title: 'Course',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Course Name',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Course Image',
            options: {
                hotspot: true
            }
        }
    ]
}