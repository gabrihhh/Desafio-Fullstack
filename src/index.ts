import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = 3000;
const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const pipeDriveUrl = `https://api.pipedrive.com/v1/deals?status=won&api_token=${API_TOKEN}`;
app.use(express.json());

//=================================================================

app.get('/', (_req, res) => {
  res.send('API funcionando!');
});

app.get('/buscarNegociosGanhos', async (req, res) => {
    try{
        const response = await fetch(pipeDriveUrl);

    if (!response.ok) {
        const errorText = await response.text();
        return res.status(response.status).json({
            message: 'Erro ao buscar negócios do Pipedrive',
            http_status: response.status,
            detalhes: errorText,
        });
    }

    const data = await response.json();

    if(data.data){
        res.json(data.data)
    }else{
        res.status(200).json({
            message: 'Nenhum dado encontrado!',
            http_status: 200, 
        })
    }
    return 
    
    }catch(error:any){
        return res.status(500).json({
            message: 'Erro interno ao tentar buscar negócios',
            http_status: 500,
            detalhes: error.message,
        });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
