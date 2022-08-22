import type { NextApiRequest, NextApiResponse } from 'next';
import { getInstagram } from '../../../services/repository/getInstagram';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data from your database
  const data = await getInstagram();
  res.status(200).json(data);
}
