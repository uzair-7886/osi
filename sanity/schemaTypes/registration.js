export default {
    name: 'registration',
    title: 'Registration',
    type: 'document',
    fields: [
      {
        name: 'applicationId',
        title: 'Application ID',
        type: 'string',
        readOnly: true,
      },
      {
        name: 'status',
        title: 'Application Status',
        type: 'string',
        options: {
          list: [
            { title: 'Draft', value: 'draft' },
            { title: 'Step 1 Complete', value: 'step1' },
            { title: 'Step 2 Complete', value: 'step2' },
            { title: 'Step 3 Complete', value: 'step3' },
            { title: 'Completed', value: 'completed' },
          ],
        },
      },
      {
        name: 'step1',
        title: 'Registration Details',
        type: 'object',
        fields: [
          {
            name: 'ageGroup',
            title: 'Age Group',
            type: 'string',
          },
          {
            name: 'subject1',
            title: 'Subject 1',
            type: 'string',
          },
          {
            name: 'subject2',
            title: 'Subject 2',
            type: 'string',
          },
        ],
      },
      {
        name: 'step2',
        title: 'Personal Details',
        type: 'object',
        fields: [
          {
            name: 'firstName',
            title: 'First Name',
            type: 'string',
          },
          {
            name: 'surname',
            title: 'Surname',
            type: 'string',
          },
          {
            name: 'dateOfBirth',
            title: 'Date of Birth',
            type: 'date',
          },
          {
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
              list: ['male', 'female', 'other'],
            },
          },
          {
            name: 'email',
            title: 'Email',
            type: 'email',
          },
          {
            name: 'mobile',
            title: 'Mobile',
            type: 'string',
          },
          {
            name: 'address',
            title: 'Address',
            type: 'string',
          },
          {
            name: 'town',
            title: 'Town/City',
            type: 'string',
          },
          {
            name: 'country',
            title: 'Country',
            type: 'string',
          },
        ],
      },
      {
        name: 'step3',
        title: 'Institution Details',
        type: 'object',
        fields: [
          {
            name: 'institution',
            title: 'Institution Type',
            type: 'string',
            options: {
              list: ['school', 'university', 'organisation'],
            },
          },
          {
            name: 'institutionName',
            title: 'Institution Name',
            type: 'string',
          },
          {
            name: 'institutionCity',
            title: 'Institution City',
            type: 'string',
          },
          {
            name: 'institutionCountry',
            title: 'Institution Country',
            type: 'string',
          },
          {
            name: 'visaRequirement',
            title: 'Visa Requirement',
            type: 'boolean',
          },
          {
            name: 'hearAbout',
            title: 'How Did You Hear About Us',
            type: 'string',
          },
        ],
      },
      {
        name: 'payment',
        title: 'Payment Details',
        type: 'object',
        fields: [
          {
            name: 'amount',
            title: 'Total Amount',
            type: 'number',
          },
          {
            name: 'paymentStatus',
            title: 'Payment Status',
            type: 'string',
            options: {
              list: ['pending', 'completed', 'failed'],
            },
          },
        ],
      },
      {
        name: 'termsAgreed',
        title: 'Terms Agreed',
        type: 'boolean',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
      {
        name: 'updatedAt',
        title: 'Updated At',
        type: 'datetime',
      },
    ],
  }