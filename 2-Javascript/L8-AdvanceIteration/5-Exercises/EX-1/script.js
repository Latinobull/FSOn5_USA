function calculateMeanTemperature(forecast) {
  const {
    today: { low: todayLow, todayHigh },
    tomorrow: { tomorrowLow, tomorrowHigh },
  } = forecast;
  console.log(todayLow);

  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

calculateMeanTemperature({
  today: { low: 28, high: 32 },
  tomorrow: { low: 25, high: 29 },
});
