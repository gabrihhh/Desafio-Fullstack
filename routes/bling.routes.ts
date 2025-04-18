import { Router } from 'express';
import { inserirPedido } from '../api/bling/bling.controller';

const router = Router();

router.post('/pedidos', async (req, res) => {
    const {
        nomeCliente,
        codigoProduto,
        descricaoProduto,
        quantidade,
        valorUnitario
    } = req.body;

    try {
        const pedido = await inserirPedido(
        nomeCliente,
        codigoProduto,
        descricaoProduto,
        quantidade,
        valorUnitario
        );

        return res.status(pedido.status).json(pedido);
    } catch (error) {
        // Caso algo inesperado aconteça
        console.error('Erro inesperado:', error);
        return res.status(500).json({
        success: false,
        status: 500,
        error: 'Erro inesperado ao processar o pedido.',
        details: error instanceof Error ? error.message : error,
        });
    }
});

export default router;
