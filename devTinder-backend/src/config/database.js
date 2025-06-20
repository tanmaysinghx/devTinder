const mongoose = require('mongoose');

const dbURI = process.env.DATABASE_URL || 'mongodb://localhost:27017/mydatabase';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Database connection successful');
    } catch (error) {
        console.error('Database connection error:', error);
    }
}

module.exports = connectToDatabase;