// schemas/downloadBrochureHeroSection.js

export default {
    name: 'brochures',
    title: 'Download Brochure Hero Section',
    type: 'document',
    fields: [
      {
        name: 'summerProgramBrochure',
        title: 'Summer Program Brochure (PDF)',
        type: 'file',
        options: {
          accept: '.pdf'
        },
        validation: Rule =>
          Rule.required().error('Please upload the Summer Program brochure PDF.')
      },
      {
        name: 'executiveProgramBrochure',
        title: 'Executive Program Brochure (PDF)',
        type: 'file',
        options: {
          accept: '.pdf'
        },
        validation: Rule =>
          Rule.required().error('Please upload the Executive Program brochure PDF.')
      }
    ]
  }
  