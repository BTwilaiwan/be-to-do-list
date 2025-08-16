const { getDB } = require('../config/database');
const { formatDateOnly } = require('../shared/formatDate')

exports.getTaskList = async (req, res) => { 
    try {
        const db = getDB();
        const resTask = await db.collection('tasks').find({}).toArray();
        return resTask;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createTask = async (req, res) => {
  try {
    const db = getDB();
    const connectTask = db.collection('tasks');
    const findId = await connectTask.findOne({ _id: req.taskCode });
    if (findId) {
        return { message: "Task Code is duplicate." } ;
    }

    const newTask = {
        _id: req.taskCode,
        title: req.title,
        description: req.description,
        dueDate: formatDateOnly(req.dueDate),
        status: req.status,
        priority: req.priority,
        priorityId: req.priorityId,
        createdDate: formatDateOnly(),
        updatedDate: formatDateOnly()
    };
    const respose = await connectTask.insertOne(newTask);
    return respose;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


