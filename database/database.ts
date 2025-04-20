import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@localhost:27017/${process.env.MONGO_DB}?authSource=admin`);mongodb://username:password
        console.log('MongoDB conectado com sucesso!');
    } catch (err: any) {
        console.error('Erro ao conectar ao MongoDB:', err.message);
        process.exit(1);
    }
};

export default connectDB;
