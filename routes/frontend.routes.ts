import { Router } from 'express';
import { Deal } from '../database/models/deals.model';
import { buscarNegociosGanhos } from '../api/pipedrive/pipedrive.controller';

const router = Router();

router.get('/refresh', async (req, res) => {
    try {
        const negocios = await buscarNegociosGanhos();

        if (negocios.message) {
            return res.status(negocios.http_status).json(negocios);
        }

        const insertedDeals = await Deal.insertMany(negocios);

        res.status(201).json({
            message: 'Deals atualizados com sucesso!',
            deals: insertedDeals,
        });
    } catch (err: any) {
        res.status(500).json({ message: 'Erro ao atualizar deals', error: err.message });
    }
});

export default router;
