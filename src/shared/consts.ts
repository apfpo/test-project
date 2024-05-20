export const NAV_ITEMS = [
  "Weather", "TimeTable"
];

export type WEATHER = {
  day: string;
  temperature: string;
  type: string;
  air: string;
}

export type TIMETABLE = {
  day: string;
  todos: string;
  dayoff: string;
}

export const WEATHER_ITEMS = [
  {
    day: 'Monday',
    temperature: "+20",
    type: 'Sunny',
    air: '50'
  },
  {
    day: 'Tuesday',
    temperature: "+23",
    type: 'Sunny',
    air: '59'
  },{
    day: 'Wednesday',
    temperature: "+19",
    type: 'Cloudy',
    air: '80'
  },{
    day: 'Thursday',
    temperature: "+15",
    type: 'Rain',
    air: '46'
  },{
    day: 'Friday',
    temperature: "+17",
    type: 'Light Rain',
    air: '55'
  },{
    day: 'Saturday',
    temperature: "+20",
    type: 'Sunny',
    air: '52'
  },{
    day: 'Sunday',
    temperature: "+23",
    type: 'Sunny',
    air: '51'
  }
];

export const TIMETABLE_ITEMS = [
  {
    day: 'Monday',
    todos: 'work, cleaning, shopping',
    dayoff: false
  },
  {
    day: 'Tuesday',
    todos: 'work, polish',
    dayoff: false
  },
  {
    day: 'Wednesday',
    todos: 'walk',
    dayoff: true
  },
  {
    day: 'Thursday',
    todos: 'work, shopping',
    dayoff: false
  },
  {
    day: 'Friday',
    todos: 'work, studying',
    dayoff: false
  },
  {
    day: 'Saturday',
    todos: 'work, studying, walk',
    dayoff: true
  },
  {
    day: 'Sunday',
    todos: '-',
    dayoff: true
  },
];
