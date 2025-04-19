const express = require('express');
const multer = require('multer');
const router = express.Router();
const taskController = require('../controllers/taskController');

const upload = multer({ dest: 'uploads/' });

router.post('/', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.patch('/:id/complete', taskController.markComplete);
router.post('/import', upload.single('file'), taskController.importCSV);

module.exports = router;
