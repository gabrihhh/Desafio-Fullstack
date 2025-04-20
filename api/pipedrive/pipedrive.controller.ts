const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
if(!API_TOKEN) throw new Error('API Token Pipedrive não encontrado no arquivo .env')
const pipeDriveUrl = `https://api.pipedrive.com/v1/deals?status=won&api_token=${API_TOKEN}`;


export async function buscarNegociosGanhos(): Promise<any> {


    try{
        const response = await fetch(pipeDriveUrl);

    if (!response.ok) {
        const errorText = await response.text();
        return {
            message: 'Erro ao buscar negócios do Pipedrive',
            http_status: response.status,
            detalhes: errorText,
        };
    }

    const data = await response.json();

    if(data.data){
        return data.data
    }else{
        return {
            message: 'Nenhum dado encontrado!',
            http_status: 200, 
        }
    }
    return 
    
    }catch(error:any){
        return {
            message: 'Erro interno ao tentar buscar negócios',
            http_status: 500,
            detalhes: error.message,
        };
    }
};
