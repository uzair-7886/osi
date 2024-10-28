import { v4 as uuidv4 } from 'uuid';

export default {
    name: 'enrolledUser',
    type: 'document',
    title: 'Enrolled User',
    fields: [
        {
            name: 'userId',
            type: 'string',
            title: 'User ID',
            initialValue: uuidv4,
            readOnly: true,
            validation: Rule => Rule.required(),
        },
        {
            name: 'firstName',
            type: 'string',
            title: 'First Name',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'secondName',
            type: 'string',
            title: 'Second Name',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'email',
            type: 'email',
            title: 'Email',
            validation: Rule => Rule.required().min(3).max(50)
        },
        {
            name: 'phone',
            type: 'string',
            title: 'Phone',
            validation: Rule => Rule.required().min(3).max(50)
        }
    ]
};
