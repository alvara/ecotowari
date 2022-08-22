import Airtable from 'airtable';
import { ISticker } from '../type';

export const getStickers = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  const data: ISticker[] = [];
  const table = base('Stickers');
  const records = await table.select().all();

  records.forEach(({ fields }) => {
    data.push({
      id: fields.Id as number,
      qty: (fields.Quantity as number) || 0,
      created: fields.Created as string,
      started: fields.Started ? (fields.Started as string) : null,
      notes: (fields.Notes as string) || '',
    });
  });

  console.log(data);
  return data;
};
