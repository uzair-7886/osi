// /schemas/conference.js
export default {
    name: 'conference',
    title: 'Oxford Leadership Conference',
    type: 'document',
    fields: [
      
      /* ─────────── HERO / COUNTDOWN ─────────── */
      {
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true }
          },
          { name: 'headline', title: 'Headline', type: 'string', initialValue: 'GEAR UP FOR OUR OXFORD LEADERSHIP CONFERENCE' },
          {
            name: 'countdownDate',          // <- the only thing the timer needs
            title: 'Conference Start (UTC)',
            type: 'datetime',
            description: 'First day of the event – countdown starts automatically'
          },
          { name: 'location',      title: 'Location', type: 'string', initialValue: 'Knowledge Park, Dubai' },
          { name: 'dates',      title: 'Dates', type: 'string', initialValue: '12-14 May, 2025' },
          { name: 'overview',      title: 'Overview', type: 'array', of: [{ type: 'block' }] },
          /* CTA buttons */
          { name: 'registerText',  title: 'Register Button Text', type: 'string', initialValue: 'Register Now' },
          { name: 'registerUrl',   title: 'Register Button URL',  type: 'url' },
          { name: 'agendaText',    title: 'Agenda Button Text',   type: 'string', initialValue: 'Conference Agenda' },
          { name: 'agendaUrl',     title: 'Agenda Button URL',    type: 'url' }
        ]
      },
  
      /* ─────────── PARTNERS ─────────── */
      {
        name: 'partners',
        title: 'Partners / Sponsor Logos',
        type: 'array',
        of: [{ type: 'image', options: { hotspot: true } }]
      },
  
      /* ─────────── WHO SHOULD ATTEND ─────────── */
      {
        name: 'audience',
        title: 'Who Should Attend',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'title',       title: 'Role / Segment', type: 'string' },
              { name: 'description', title: 'Copy',          type: 'text' }
            ]
          }
        ]
      },
  
      /* ─────────── WHY ATTEND ─────────── */
      {
        name: 'whyAttendDescription',
        title: 'Why Attend Description',
        type: 'array',
        of: [{ type: 'block' }],
      },
  
      // 2️⃣ Array of image + text bullets
      {
        name: 'whyAttend',
        title: 'Why Attend (with images, title & text)',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true },
              },
              {
                name: 'title',
                title: 'Bullet Title',
                type: 'string',
              },
              {
                name: 'description',
                title: 'Bullet Description',
                type: 'text',
                rows: 3,
              },
            ],
            preview: {
              select: {
                title: 'title',
                media: 'image',
              },
            },
          },
        ],
      },
  
      /* ─────────── SPEAKERS ─────────── */
      {
        name: 'speakers',
        title: 'Speakers',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
              { name: 'name',  title: 'Name',  type: 'string' },
              { name: 'title', title: 'Title / Affiliation', type: 'string' },
              { name: 'bio',   title: 'Short Bio', type: 'text', rows: 4 }
            ]
          }
        ]
      },
  
      /* ─────────── WHAT TO EXPECT ─────────── */
      {
        name: 'expectations',
        title: 'What To Expect (bullets with images)',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: { hotspot: true }
              },
              {
                name: 'text',
                title: 'Caption',
                type: 'string'
              }
            ],
            preview: {
              select: {
                title: 'text',
                media: 'image'
              }
            }
          }
        ]
      },
  
      /* ─────────── THEMATIC AREAS ─────────── */
      {
        name: 'themes',
        title: 'Thematic Areas',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'heading',      title: 'Heading', type: 'string' },
              { name: 'description',  title: 'Description', type: 'text' }
            ]
          }
        ]
      },
  
      /* ─────────── IMPACT STATS ─────────── */
      {
        name: 'impact',
        title: 'Impact Stats',
        type: 'object',
        fields: [
          { name: 'days',      title: 'Days',      type: 'number', initialValue: 3 },
          { name: 'sessions',  title: 'Sessions',  type: 'number', initialValue: 20 },
          { name: 'hours',     title: 'Hours',     type: 'number', initialValue: 40 }
        ]
      },
  
      /* ─────────── FEES ─────────── */
      {
        name: 'fees',
        title: 'Pricing',
        type: 'object',
        fields: [
          {
            name: 'options',
            title: 'Fee Options',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'title',
                    title: 'Option Title',
                    type: 'string',
                    description: 'e.g. “Conference Registration Fee”'
                  },
                  {
                    name: 'price',
                    title: 'Price',
                    type: 'string',
                    description: 'e.g. “GBP 850/-”'
                  },
                  {
                    name: 'description',
                    title: 'Details',
                    type: 'text',
                    description: 'What’s included in this fee'
                  }
                ],
                preview: {
                  select: { title: 'title', subtitle: 'price' }
                }
              }
            ],
            initialValue: [
              {
                title: 'Conference Registration Fee',
                price: 'GBP 850/-',
                description:
                  'Includes Membership of Oxford Leaders’ Network & Enrolment on Oxford Leadership Program'
              },
              {
                title: 'Early‑Bird Registration',
                price: 'GBP 499/-',
                description:
                  'Includes Membership of Oxford Leaders’ Network & Enrolment on Oxford Leadership Program'
              },
              {
                title: 'Membership Only',
                price: 'GBP 850/-',
                description:
                  'Membership of Oxford Leadership Program & Oxford Leaders’ Network'
              }
            ]
          }
        ]
      },
  
      /* ─────────── JOIN‑US ─────────── */
      {
        name: 'joinUsRoles',
        title: 'Join Us As',
        type: 'array',
        of: [{ type: 'string' }],
        initialValue: ['Mentor','Speaker','Sponsor']
      },
  
      /* ─────────── BEYOND THE CONFERENCE ─────────── */
      {
        name: 'beyond',
        title: 'Beyond The Conference',
        type: 'object',
        fields: [
          { name: 'headline', title: 'Headline', type: 'string', initialValue: 'Beyond the Conference: A Year‑Long Leadership Journey' },
          { name: 'description', type: 'array', of: [{ type: 'block' }] },
          { name: 'bullets',     type: 'array', of: [{ type: 'string' }] },
          { name: 'ctaText',     type: 'string', initialValue: 'Register Now' },
          { name: 'ctaUrl',      type: 'url' }
        ]
      }
    ]
  }
  