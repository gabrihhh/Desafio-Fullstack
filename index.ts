import './config/env'
import express from 'express';
import pipedriveRoutes from './routes/pipedrive.routes';
import blingRoutes from './routes/bling.routes';
import frontendRoutes from './routes/frontend.routes';
import connectDB from './database/database';

const app = express();

connectDB()

app.use(express.json());

//=======================ROTAS========================

app.use('/api/pipedrive',pipedriveRoutes)
app.use('/api/bling',blingRoutes)
app.use('/api/frontend',frontendRoutes)

//=======================Exports=====================

export default app