export const NAV_ITEMS = [
  "Weather", "TimeTable"
];

export type ITEM = {
  date: string;
  day: string;
  weather: {
    temperature: string;
    type: string;
    air: string;
  };
  schedule: {
    todos: string;
    dayoff: boolean

  }
}

export const ITEMS : ITEM[] = [
{
  date: "31/05",
  day: "Friday",
  weather: {
    temperature: "+20",
    type: "Sun",
    air: "30"
  },
  schedule: {
    todos: "cleaning",
    dayoff: false
  }
},
{
  date: "1/06",
  day: "Saturday",
  weather: {
    temperature: "+23",
    type: "Rain",
    air: "35"
  },
  schedule: {
    todos: "studing",
    dayoff: true
  }
},
{
  date: "2/06",
  day: "Sunday",
  weather: {
    temperature: "+13",
    type: "Cloud",
    air: "12"
  },
  schedule: {
    todos: "shoping",
    dayoff: true
  }
}
]


