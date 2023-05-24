export const facultyData = [
  {
    name: 'Haoqi Zhang',
    email: 'haoqi@northwestern.edu',
    slack_id:
      process.env.NODE_ENV === 'development' ? 'U03EA817FU3' : 'U0E2XS3LL',
    sig_lead: 'Summer BBQ',
  },
];

export const phdStudentData = [
  {
    name: 'Gobi Dasu',
    email: 'gobi@northwestern.edu',
    slack_id: 'UCCCTJGG4',
    sig_lead: 'Readily Available Learning Experiences',
    sig_member: 'Summer BBQ',
    sig_head: 'Haoqi Zhang',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1oIVc3kVQPe8fYXJc8fVqxSZxRfJg7DZjjhcEcY5jDVw/edit?usp=sharing',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Ryan Louie',
    email: 'ryan@northwestern.edu',
    slack_id: 'U6YKFU5UH',
    sig_lead: 'Collective Experiences',
    sig_member: 'Summer BBQ',
    sig_head: 'Haoqi Zhang',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1anytwho_bmYbAAPOkURNJsYsGajRrgG5kM8tbJZ1O90/edit?usp=sharing',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Kapil Garg',
    email: 'kapil@northwestern.edu',
    slack_id:
      process.env.NODE_ENV === 'development' ? 'U033BDY8A1E' : 'U0G17CVCZ',
    sig_lead: 'Networked Orchestration Technologies',
    sig_member: 'Summer BBQ',
    sig_head: 'Haoqi Zhang',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1xEJ3dDYqNA9SlufiD3GF4mN3DzvXg_JMc3D25rUjSHA/edit?usp=sharing',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
];

export const nonPhdStudentData = [
  // SIG NOT
  {
    name: 'Grace Wang',
    email: 'gracewang2025@u.northwestern.edu',
    slack_id: 'U04CQNKQ3TP',
    sig_member: 'Networked Orchestration Technologies',
    sig_head: 'Kapil Garg',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Jordan Checkoff',
    email: 'jordancheckoff2024@u.northwestern.edu',
    slack_id: 'U04TQL7TWLS',
    sig_member: 'Networked Orchestration Technologies',
    sig_head: 'Kapil Garg',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },

  // SIG CE
  {
    name: 'Pablo Gupta',
    email: 'SounakGupta2024@u.northwestern.edu',
    slack_id: 'U04CW56SBGC',
    sig_member: 'Collective Experiences',
    sig_head: 'Ryan Louie',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Oscar Dong',
    email: 'qianlidong2025@u.northwestern.edu',
    slack_id: 'U04TMMXC9PX',
    sig_member: 'Collective Experiences',
    sig_head: 'Ryan Louie',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Seva Suschenvskiy',
    email: 'vvseva@u.northwestern.edu',
    slack_id: 'U04UEAVNRQQ',
    sig_member: 'Collective Experiences',
    sig_head: 'Ryan Louie',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1KlvpfCvm0FyYrfFr0RWwWXo3V2fKFnxaXLBzI4N-xZA/edit',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },

  // SIG RALE
  {
    name: 'Mieraf Mulat',
    email: 'mierafmulat2023@u.northwestern.edu',
    slack_id: 'U03JH5SFA90',
    sig_member: 'Readily Available Learning Experiences',
    sig_head: 'Gobi Dasu',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1up5EH1-TiJAfoBK_HCb2d3bzKhgySx9CK6CWjZVheKo/edit',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Lev Rosenberg',
    email: 'levrosenberg2024@u.northwestern.edu',
    slack_id: 'U04CTHY5QGK',
    sig_member: 'Readily Available Learning Experiences',
    sig_head: 'Gobi Dasu',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },

  // SIG CAMP
  {
    name: 'Dani Zhang',
    email: 'danizhang2023@u.northwestern.edu',
    slack_id: 'U0358N1NE4F',
    sig_member: 'Contextually-Aware Metacognitive Practice',
    sig_head: 'Haoqi Zhang',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1aqT3wTVFdzaoipW9wYrjjlxoUTPxHkVO_hE97crdRaM/edit',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Ella Cutler',
    email: 'ellacutler2025@u.northwestern.edu',
    slack_id: 'U04U3953ZDF',
    sig_member: 'Contextually-Aware Metacognitive Practice',
    sig_head: 'Haoqi Zhang',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },

  // SIG HAT
  {
    name: 'Alex Feng',
    email: 'alexfeng2024@u.northwestern.edu',
    slack_id: 'U03JH5TCKFC',
    sig_member: 'Human-AI Tools',
    sig_head: 'Haoqi Zhang',
    individual_progress_map:
      'https://docs.google.com/spreadsheets/d/1SCHQjFryZe8HDQlcLFRB1eh4P9v8M0hvotj0Nyub9Lg/edit',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Coumba Ka',
    email: 'mameka2024@u.northwestern.edu',
    slack_id: 'U04TA4HES79',
    sig_member: 'Human-AI Tools',
    sig_head: 'Haoqi Zhang',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Suhuai Chen',
    email: 'suhuaichen2024@u.northwestern.edu',
    slack_id: 'U04U394RU1X',
    sig_member: 'Human-AI Tools',
    sig_head: 'Haoqi Zhang',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
  {
    name: 'Jiayi Zheng',
    email: 'jiayizheng2024@u.northwestern.edu',
    slack_id: 'U04TJ2FA4Q6',
    sig_member: 'Human-AI Tools',
    sig_head: 'Haoqi Zhang',
    individual_progress_map: '',
    mid_quarter_check_in: '',
    eoq_self_assessment: '',
  },
];
