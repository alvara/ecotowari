import Airtable from 'airtable';
import { IInstagram } from '../type';

export const getInstagram = async () => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
  }).base(process.env.AIRTABLE_BASE_ID);

  const data: IInstagram[] = [];
  const table = base('Instagram');
  const records = await table.select().all();

  records.forEach(({ fields }) => {
    data.push({
      id: fields.Id as number,
      image: fields.Image as string,
      publishDate: fields.PublishDate as string,
      notes: (fields.Notes as string) || '',
      status: fields.Status ? (fields.Status as string) : null,
    });
  });

  console.log(data);
  return data;
};
