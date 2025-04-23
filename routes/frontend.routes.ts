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

        const dealsAtualizados = [];

        for (const negocio of negocios) {
            const existingDeal = await Deal.findOne({ id: negocio.id });

            if (!existingDeal) {
                await Deal.insertMany([negocio]);
                dealsAtualizados.push(negocio);
            } else {
                const existingWonTime = existingDeal.won_time;
                const newWonTime = negocio.won_time;

                if (existingWonTime !== newWonTime) {
                    await Deal.updateOne({ id: negocio.id }, { $set: negocio });
                    dealsAtualizados.push(negocio);
                } else {
                    console.log(`Negócio id ${negocio.id} já existe e data de ganho é igual.`);
                }
            }
        }

        res.status(201).json({
            message: 'Deals atualizados com sucesso!',
            data: dealsAtualizados
        });

    } catch (err:any) {
        console.error('Erro ao atualizar deals:', err);
        res.status(500).json({ message: 'Erro ao atualizar deals', error: err.message });
    }
});





export default router;
