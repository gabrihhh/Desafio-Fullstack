export interface PedidoBlingResponse {
    success: boolean;
    status: number;
    message?: string;
    data?: any;
    error?: string;
    details?: any;
    numeroPedido?:number;
    situacao?:string
}