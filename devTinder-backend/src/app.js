const express = require('express');
const connectToDatabase = require('./config/database');
const healthCheckRoutes = require('./routes/healthCheckRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    try {
        await connectToDatabase();
        console.log("Database connected successfully - MongoDB");
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
});

app.use('/api', healthCheckRoutes);
app.use('/api', userRoutes);

module.exports = app;
