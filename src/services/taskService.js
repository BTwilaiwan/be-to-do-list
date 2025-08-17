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
    const response = {
        statusCode: 200,
        message: ''
    }
    const findId = await connectTask.findOne({ _id: req.taskCode });
    if (findId) {
        response.statusCode = 500,
        response.message = 'Task Code is duplicate.'
        return response;
    }
    const findPriority = await db.collection('priority').findOne({ priority: req.priority });

    const newTask = {
        _id: req.taskCode,
        title: req.title,
        description: req.description,
        dueDate: formatDateOnly(req.dueDate),
        status: req.status,
        priority: req.priority,
        priorityId: findPriority.priorityId,
        createdDate: formatDateOnly(),
        updatedDate: formatDateOnly()
    };
    const resCreate = await connectTask.insertOne(newTask);
    return resCreate;
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteTaskById = async (req, res) => { 
    try {
        const db = getDB();
        const taskCode = req.params.taskCode;
        const response = {
            statusCode: 200,
            message: ''
        }
        const result = await db.collection('tasks').deleteOne({ _id: taskCode });
        if (result?.deletedCount) {
            response.statusCode = 200;
            response.message = "Task deleted successfully";
        } else {
            response.statusCode = 404;
            response.message = "Task not found.";
        }
        return response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateStatus = async (req, res) => { 
    try {
        const db = getDB();
        const taskcode = req.body.map(item => item._id);
        const response = {
            statusCode: 200,
            message: ''
        }
        const result = await db.collection('tasks').updateMany(
            { _id: { $in: taskcode } },
            { $set: { 
                status: 'Completed', 
                updatedDate: formatDateOnly() 
            } } 
        );
         if (result.modifiedCount > 0) {
            response.statusCode = 200;
            response.message = `${result.modifiedCount} tasks updated successfully`;
        } else {
            response.statusCode = 404;
            response.message = "Task not found.";
        }
        return response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateTask = async (req, res) => { 
    try {
        const db = getDB();
        const taskCode = req.params.taskCode;
        const data = req.body;  
        const response = {
            statusCode: 200,
            message: ''
        }
        const findPriority = await db.collection('priority').findOne({ priority: data.priority });
        const result = await db.collection('tasks').updateOne(
            { _id: taskCode },
            {
                $set: { 
                    ...data, 
                    priorityId: findPriority.priorityId,
                    updatedDate: formatDateOnly() 
                } 
            }
        );
        if (result.modifiedCount > 0) {
            response.statusCode = 200;
            response.message = "Task updated successfully";
        } else {
            response.statusCode = 404;
            response.message = "Task not found.";
        }
        return response
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
