// return number of days a sticker has been deployed on the field
export function daysDeployed(startedAt: Date):number {
  // return Date.now() - startedAt.toUTCString
}

// returns avg weight of flyers wasted
export function avgWastePerDay(stickers: {qty: number, started_at: Date}[]): number {
  let weight : number

  
  // stickers.forEach((sticker) => {
    
  // })
  console.log(daysDeployed(stickers[0].started_at))
  return weight
}