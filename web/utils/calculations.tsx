import dayjs from 'dayjs'

// return total number of days for all stickers in existence
export function totalDaysDeployed(stickers: {qty: number, started_at: Date}[]):number {
  const now = dayjs()
  let totalDays = 0

  // loop through stickers and add up the days
  stickers.forEach((sticker) => {
    totalDays += now.diff(sticker.started_at, 'day') * sticker.qty
  })

  return totalDays
}

// return number of stickers deployed
export function totalStickers(stickers: {qty: number, started_at: Date}[]):number {
  let total = 0

  // loop through stickers to get sum of all stickers
  stickers.forEach((sticker) => {
    total += sticker.qty
  })

  return total
}

// returns avg weight of flyers wasted per day
export function avgWastePerDay(): number {
  const avgWastePerWeek = 85 // TODO: calc avg weight of flyers wasted per week through studies
  return avgWastePerWeek / 7
}

// How much water has been saved (in Liters)
export function waterSaved(stickers: {qty: number, started_at: Date}[]): number {
  return (avgWastePerDay() * totalDaysDeployed(stickers) / 1000) * 62.12
}

// How much electricity has been saved (in kWh)
export function electricitySaved(stickers: {qty: number, started_at: Date}[]): number {
  return (avgWastePerDay() * totalDaysDeployed(stickers) / 1000) * 2.713
}

// How much co2 has been saved (in kg-CO2e)
export function co2Saved(stickers: {qty: number, started_at: Date}[]): number {
  return (avgWastePerDay() * totalDaysDeployed(stickers) / 1000) * 1.93
}

// How much total weight of flyers has been reduced (in kg)
export function flyersReduced(stickers: {qty: number, started_at: Date}[]): number {
  return (avgWastePerDay() * totalDaysDeployed(stickers) / 1000)
}
