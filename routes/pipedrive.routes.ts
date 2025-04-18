import { Router } from 'express';
import { buscarNegociosGanhos } from '../api/pipedrive/pipedrive.controller';

const router = Router();

router.get('/ganhos', async (req, res) => {
  try {
    const negocios = await buscarNegociosGanhos();
    res.status(200).json(negocios);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
