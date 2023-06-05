const types = {
  class: 'Class',
  performance: "Performance"
}

const locations = {
  fullcircle: {
    name: 'Full Circle Brooklyn',
    map: '',
  },
  nimble: {
    name: "EveryBody's Nimble",
    map: '',
  },
  houseofyes: {
    name: 'House of Yes',
    map: '',
  }
}

export const links = [
  {
    id: 3,
    title: 'Nasty Wednesday',
    day: 'Wednesday',
    time: '9pm',
    type: types.performance,
    location: locations.houseofyes,
    buttonLink:'https://www.eventbrite.com/e/nasty-wednesday-everybodys-nimbles-open-pole-social-club-tickets-631197527797',
    buttonText: 'Free RSVP',
  },
  {
    id: 0,
    title: 'Heels FLow - Fundamentals',
    type: types.class,
    day: 'Thursday',
    time: '10am',
    location: locations.fullcircle,
    buttonLink: 'https://www.wellnessliving.com/schedule/fullcirclebrooklyn?dt_date=2023-06-08&k_class_tab=0&a_class[]=509805',
    buttonText: 'Sign up'
  },
  {
    id: 1,
    title: 'Heels Flow - Open Level',
    type: types.class,
    day: 'Wednesday',
    time: '4:30pm',
    location: locations.fullcircle,
    buttonLink: 'https://www.wellnessliving.com/schedule/fullcirclebrooklyn?dt_date=2023-06-07&k_class_tab=0&a_class[]=498165',
    buttonText: 'Sign up'
  },
  {
    id: 2,
    title: 'Heels Clinic and Flow',
    type: types.class,
    day: 'Tuesday',
    time: '5:40pm',
    location: locations.nimble,
    buttonLink: 'https://www.wellnessliving.com/schedule/everybodys_nimble?dt_date=2023-06-13&k_class_tab=0&a_class[]=464403',
    buttonText: 'Sign up'
  },
]

