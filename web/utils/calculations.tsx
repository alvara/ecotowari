import dayjs from 'dayjs';
import { ISticker } from '../services/type';

// return total number of days for all stickers in existence
export function totalDaysDeployed(stickers: ISticker[] = []): number {
  const now = dayjs();
  let totalDays = 0;

  // loop through stickers and add up the days
  stickers.forEach((sticker) => {
    console.log('COUNTING DAYS:', now.diff(sticker.started, 'day'));
    totalDays += now.diff(sticker.started, 'day') * sticker.qty;
  });

  return totalDays;
}

// return number of stickers deployed
export function totalStickers(stickers: ISticker[]): number {
  let total = 0;

  // loop through stickers to get sum of all stickers
  stickers?.forEach((sticker) => {
    total += sticker.qty;
  });

  return total;
}

// returns avg weight of flyers wasted per day
export function avgWastePerDay(): number {
  const avgWastePerWeek = 85; // TODO: calc avg weight of flyers wasted per week through studies
  return avgWastePerWeek / 7;
}

// How much water has been saved (in Liters)
export function waterSaved(stickers: ISticker[]): number {
  return ((avgWastePerDay() * totalDaysDeployed(stickers)) / 1000) * 62.12;
}

// How much electricity has been saved (in kWh)
export function electricitySaved(stickers: ISticker[]): number {
  return ((avgWastePerDay() * totalDaysDeployed(stickers)) / 1000) * 2.713;
}

// How much co2 has been saved (in kg-CO2e)
export function co2Saved(stickers: ISticker[]): number {
  return ((avgWastePerDay() * totalDaysDeployed(stickers)) / 1000) * 1.93;
}

// How much total weight of flyers has been reduced (in kg)
export function flyersReduced(stickers: ISticker[]): number {
  return (avgWastePerDay() * totalDaysDeployed(stickers)) / 1000;
}
