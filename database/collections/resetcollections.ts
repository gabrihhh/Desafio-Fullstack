import mongoose from 'mongoose';
import { Deal } from '../models/deals.model';
import dotenv from 'dotenv';

dotenv.config(); // Carrega variáveis do .env

const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
} = process.env;

const mongoURI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

async function resetDealsCollection() {
  try {
    await mongoose.connect(mongoURI);

    const db = mongoose.connection.db!;
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((col) => col.name);

    if (collectionNames.includes('deals')) {
      console.log('Coleção "deals" encontrada. Deletando...');
      await db.dropCollection('deals');
      console.log('Coleção "deals" deletada.');
    }

    console.log('Criando nova coleção "deals"...');
    await Deal.init();
    console.log('Nova coleção "deals" criada com sucesso.');

    await mongoose.disconnect();
    console.log('Conexão encerrada.');
  } catch (error) {
    console.error('Erro ao resetar a coleção "deals":', error);
    process.exit(1);
  }
}

resetDealsCollection();
