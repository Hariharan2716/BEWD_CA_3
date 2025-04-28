require('dotenv').config();
const express = require('express');
const authRouter = require('./routes/authRoutes');

const app = express();

app.use(express.json());

app.use('/api', authRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
})
