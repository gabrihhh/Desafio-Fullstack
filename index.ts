import './config/env'
import express from 'express';
import pipedriveRoutes from './routes/pipedrive.routes';

const app = express();

//======================Configs======================

app.use(express.json());

//=======================ROTAS========================

app.use('/api/pipedrive',pipedriveRoutes)

//=======================Exports=====================

export default app