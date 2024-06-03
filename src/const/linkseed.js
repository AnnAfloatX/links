import {getDate} from '../util/linkUtil'

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
    id: 0,
    title: 'Heels Flow Fundamentals - Level 1+',
    type: types.class,
    day: 'Monday',
    time: '10:30am',
    location: locations.fullcircle,
    buttonLink: `https://www.fullcirclebrooklyn.com/class-schedule#/class-schedule/r/1296?trainer=5214`,
    buttonText: 'Sign up'
  },
  {
    id: 1,
    title: 'Heels Flow - Level 2+',
    type: types.class,
    day: 'Saturday',
    time: '1:00pm',
    location: locations.fullcircle,
    buttonLink: `https://www.fullcirclebrooklyn.com/class-schedule#/class-schedule/r/1296?trainer=5214`,
    buttonText: 'Sign up'
  },
]

