// /schemas/executiveProgram.js
export default {
    name: 'executiveProgram',
    title: 'OCL Executive Program',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        initialValue: 'OCL Executive Program'
      },
      {
        name: 'overview',
        title: 'Overview (rich text)',
        type: 'array',
        of: [{ type: 'block' }],
        description: 'Intro paragraphs'
      },
      {
        name: 'audience',
        title: 'Who Should Attend?',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'programInfo',
        title: 'Program Info',
        type: 'object',
        fields: [
          { name: 'programName', title: 'Program Name', type: 'string', initialValue: 'Oxford Executive Program' },
          { name: 'fee', title: 'Fee', type: 'string', initialValue: '£6,999' },
          { name: 'inclusions', title: 'Inclusions', type: 'text', rows: 4 },
          { name: 'deadline', title: 'Application Deadline', type: 'string', initialValue: '30th May, 2025' },
          { name: 'applyText', title: 'Button Text', type: 'string', initialValue: 'Apply Now' },
          { name: 'applyLink', title: 'Button Link', type: 'url' }
        ]
      },
      {
        name: 'courses',
        title: 'Core Courses',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'optionalLectures',
        title: 'Optional Lectures',
        type: 'array',
        of: [{ type: 'string' }]
      }
    ]
  }
  