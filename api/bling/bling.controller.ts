import { PedidoBlingResponse } from '../../interfaces/pedidobling.interface'

const API_TOKEN = process.env.BLING_API_TOKEN;
if(!API_TOKEN) throw new Error('API Token Bling não encontrado no arquivo .env')
const blingUrl = `https://www.bling.com.br/Api/v2/pedido/json/?apikey=${API_TOKEN}`

export async function inserirPedido(
    nomeCliente: string,
    codigoProduto: string,
    descricaoProduto: string,
    quantidade: number,
    valorUnitario: number
  ): Promise<PedidoBlingResponse> {
    const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <pedido>
        <cliente>
          <nome>${nomeCliente}</nome>
        </cliente>
        <itens>
          <item>
            <codigo>${codigoProduto}</codigo>
            <descricao>${descricaoProduto}</descricao>
            <un>pc</un>
            <qtde>${quantidade}</qtde>
            <vlr_unit>${valorUnitario}</vlr_unit>
          </item>
        </itens>
        <parcelas>
          <parcela>
            <vlr>${valorUnitario}</vlr>
            <data>${new Date().toLocaleDateString('pt-BR')}</data>
          </parcela>
        </parcelas>
      </pedido>
    `;

    try {
        const response = await fetch(`${blingUrl}?apikey=${process.env.BLING_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ xml }),
        });

        const data = await response.json();

        if (!response.ok) {
            return {
            success: false,
            status: response.status,
            error: 'Erro ao criar pedido no Bling.',
            "data":data.retorno.erros.erro
            };
        }

        const pedidoBling = data.retorno?.pedidos?.[0]?.pedido;

        return {
            success: true,
            status: response.status,
            message: 'Pedido criado com sucesso!',
            numeroPedido: pedidoBling?.numero,
            situacao: pedidoBling?.situacao,
            data: pedidoBling,
        };

        } catch (error: any) {
        return {
            success: false,
            status: 500,
            error: 'Erro interno ao criar pedido no Bling.',
            details: error.message || error,
        };
    }
  }
  