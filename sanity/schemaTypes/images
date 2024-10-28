export default {
    name: 'images',
    type: 'document',
    title: 'About Us Images',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Image Name',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'description',
            type: 'text',
            title: 'Image Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        }
    ]
}