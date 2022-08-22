import type { NextApiRequest, NextApiResponse } from 'next';
import { getStickers } from '../../../services/repository/getStickers';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data from your database
  const data = await getStickers();
  res.status(200).json(data);
}
