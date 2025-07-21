const mongoose = require('mongoose');

const dbURI = process.env.DATABASE_URL || "mongodb+srv://tanmaysinghx:bRSlttZxP2eDwgqw@ts-cluster.zrpmnal.mongodb.net/devTinder";

const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = connectToDatabase;