const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

mongoose.connect('mongodb://localhost:27017/taskdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = 3334;
app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});
