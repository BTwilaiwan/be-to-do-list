const { getDB } = require('../config/database');

exports.getStatus = async (req, res) => { 
    try {
        const db = getDB();
        const resStatus = await db.collection('status').find({}).toArray();
        return resStatus;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getPriority = async (req, res) => { 
    try {
        const db = getDB();
        const resPriority = await db.collection('priority').find({}).toArray();
        return resPriority;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}