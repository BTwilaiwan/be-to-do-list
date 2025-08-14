const { getDB } = require('../config/database');

exports.getTaskList = async (req, res) => { 
    try {
        const db = getDB();
        const resTask = await db.collection('tasks').find({}).toArray();
        return resTask;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}