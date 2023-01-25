const weatherData = {
  coord: {
    lon: 10.99,
    lat: 44.34,
  },
  weather: [
    {
      id: 501,
      main: 'Rain',
      description: 'moderate rain',
      icon: '10d',
    },
  ],
  base: 'stations',
  main: {
    temp: 298.48,
    feels_like: 298.74,
    temp_min: 297.56,
    temp_max: 300.05,
    pressure: 1015,
    humidity: 64,
    sea_level: 1015,
    grnd_level: 933,
  },
  visibility: 10000,
  wind: {
    speed: 0.62,
    deg: 349,
    gust: 1.18,
  },
  rain: {
    '1h': 3.16,
  },
  clouds: {
    all: 100,
  },
  dt: 1661870592,
  sys: {
    type: 2,
    id: 2075663,
    country: 'IT',
    sunrise: 1661834187,
    sunset: 1661882248,
  },
  timezone: 7200,
  id: 3163858,
  name: 'Zocca',
  cod: 200,
};
const secondWeatherData = {
  city: {
    id: 3163858,
    name: 'Zocca',
    coord: {
      lon: 10.99,
      lat: 44.34,
    },
    country: 'IT',
    population: 4593,
    timezone: 7200,
  },
  cod: '200',
  message: 0.0582563,
  cnt: 7,
  list: [
    {
      dt: 1661857200,
      sunrise: 1661834187,
      sunset: 1661882248,
      temp: {
        day: 299.66,
        min: 288.93,
        max: 299.66,
        night: 290.31,
        eve: 297.16,
        morn: 288.93,
      },
      feels_like: {
        day: 299.66,
        night: 290.3,
        eve: 297.1,
        morn: 288.73,
      },
      pressure: 1017,
      humidity: 44,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      speed: 2.7,
      deg: 209,
      gust: 3.58,
      clouds: 53,
      pop: 0.7,
      rain: 2.51,
    },
    {
      dt: 1661943600,
      sunrise: 1661920656,
      sunset: 1661968542,
      temp: {
        day: 295.76,
        min: 287.73,
        max: 295.76,
        night: 289.37,
        eve: 292.76,
        morn: 287.73,
      },
      feels_like: {
        day: 295.64,
        night: 289.45,
        eve: 292.97,
        morn: 287.59,
      },
      pressure: 1014,
      humidity: 60,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'heavy rain',
          icon: '10d',
        },
      ],
      speed: 2.29,
      deg: 215,
      gust: 3.27,
      clouds: 66,
      pop: 0.82,
      rain: 5.32,
    },
    {
      dt: 1662030000,
      sunrise: 1662007126,
      sunset: 1662054835,
      temp: {
        day: 293.38,
        min: 287.06,
        max: 293.38,
        night: 287.06,
        eve: 289.01,
        morn: 287.84,
      },
      feels_like: {
        day: 293.31,
        night: 287.01,
        eve: 289.05,
        morn: 287.85,
      },
      pressure: 1014,
      humidity: 71,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'clear sky',
          icon: '10d',
        },
      ],
      speed: 2.67,
      deg: 60,
      gust: 2.66,
      clouds: 97,
      pop: 0.84,
      rain: 4.49,
    },
  ],
};

// TODO we want to print out all of the description properties from each object in the list property
const allDays = secondWeatherData.list;
for (let i = 0; i < allDays.length; i++) {
  console.log(allDays[i].weather[0].description);
}
console.log('==============================');

for (let item of allDays) {
  console.log(item.weather[0].description);
}

// TODO (298K − 273.15) × 9/5 + 32
const currentTemp = weatherData.main.temp;

const FahreneitTemp = ((currentTemp - 273.15) * 9) / 5 + 32;
const cityName = weatherData.name;

console.log(`The temperature in ${cityName} is  ${FahreneitTemp.toFixed(2)}F`);

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}
