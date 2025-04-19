const Task = require('../models/Task');
const fs = require('fs');
const csv = require('csv-parser');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ error: 'Task não encontrada' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task não encontrada' });
        res.json({ message: 'Task removida com sucesso' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.markComplete = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
        if (!task) return res.status(404).json({ error: 'Task não encontrada' });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.importCSV = async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Arquivo CSV não enviado' });

    const tasks = [];
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            tasks.push({
                title: row.title,
                description: row.description,
                completed: row.completed === 'true'
            });
        })
        .on('end', async () => {
            try {
                await Task.insertMany(tasks);
                fs.unlinkSync(req.file.path); 
                res.status(201).json({ message: 'Tasks importadas com sucesso', total: tasks.length });
            } catch (err) {
                res.status(500).json({ error: err.message });
            }
        });
};
