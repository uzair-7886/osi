export default {
    name: 'payment',
    type: 'document',
    title: 'Payment',
    fields: [
        {
            name: 'userId',
            type: 'string',
            title: 'User ID',
            validation: Rule => Rule.required(),
        },
        {
            name: 'amount',
            type: 'number',
            title: 'Amount',
            validation: Rule => Rule.required(),
        },
        {
            name: 'timestamp',
            type: 'datetime',
            title: 'Timestamp',
            initialValue: () => new Date().toISOString(),
        }
    ]
};
