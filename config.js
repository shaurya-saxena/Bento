// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Shaurya',
  imageBackground: false,
  openInNewTab: true,

  // Greetings
  greetingMorning: 'You finally awake? ',
  greetingAfternoon: 'Feeling lazy? ',
  greetingEvening: 'Almost done, ',
  greetingNight: 'Get some Shut-eye!',

  // Weather
  weatherKey: 'f93896a134c9c17498862c57f2d4e8da',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C',
  weatherLatitude: '28.52',
  weatherLongitude: '77.28',
  

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://calendar.google.com/calendar/u/1/r',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com/',
    },
    {
      id: '3',
      name: 'Slides',
      icon: 'airplay',
      link: 'https://docs.google.com/presentation/u/0/',
    },
    {
      id: '4',
      name: 'Docs',
      icon: 'file-text',
      link: 'https://docs.google.com/document/u/0/',
    },
    {
      id: '5',
      name: 'Spotify',
      icon: 'headphones',
      link: 'https://open.spotify.com/playlist/5oxZIYU1L9N1CczN0C4JkM?si=Y3NjPV-JQ3eONUnZFUf_LQ&nd=1',
    },
    {
      id: '6',
      name: 'Sheets',
      icon: 'bar-chart-2',
      link: 'https://docs.google.com/spreadsheets/u/0/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'briefcase',
  secondListIcon: 'social',

  // Links
  lists: {
    firstList: [
      {
        name: 'Books',
        link: 'https://read.amazon.in/kindle-library?ref_=kcr_library',
      },
      {
        name: 'Moodle',
        link:  'https://moodle.iimamritsar.ac.in/my/',
      },
      {
        name: 'Figma',
        link: 'https://figma.com/',
      },
      {
        name: 'Google Meet',
        link: 'https://meet.google.com/,
      },
    ],
    secondList: [
      {
        name: 'Linkedin',
        link: 'https://linkedin.com/',
      },
      {
        name: 'Whatsapp',
        link: 'https://web.whatsapp.com/',
      },
      {
        name: 'Telegram',
        link: 'https://webk.telegram.org',
      },
      {
        name: 'Mail',
        link: 'https://gmail.com/',
      },      
    ],
  },
};
