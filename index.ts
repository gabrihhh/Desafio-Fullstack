import './config/env'
import express from 'express';
import pipedriveRoutes from './routes/pipedrive.routes';
import blingRoutes from './routes/bling.routes';
const app = express();

//======================Configs======================

app.use(express.json());

//=======================ROTAS========================

app.use('/api/pipedrive',pipedriveRoutes)
app.use('/api/bling',blingRoutes)

//=======================Exports=====================

export default app