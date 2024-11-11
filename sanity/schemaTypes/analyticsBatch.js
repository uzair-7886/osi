export default {
    name: 'analyticsBatch',
    type: 'document',
    title: 'Analytics Batch',
    fields: [
        {
            name: 'date',
            type: 'datetime',
            title: 'Date',
            description: 'The date and time of the batch.',
        },
        {
            name: 'events',
            type: 'array',
            title: 'Events',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'event', type: 'string', title: 'Event Name' },
                        { name: 'timestamp', type: 'datetime', title: 'Timestamp' },
                        { name: 'userId', type: 'string', title: 'User ID' },
                        {
                            name: 'metadata',
                            type: 'object',
                            title: 'Metadata',
                            fields: [
                                { name: 'page', type: 'string', title: 'Page' },
                                {
                                    name: 'details',
                                    type: 'object',
                                    title: 'Details',
                                    fields: [
                                        { name: 'value', type: 'number', title: 'Value' },
                                        { name: 'currency', type: 'string', title: 'Currency' },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
