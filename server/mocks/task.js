module.exports = function(app) {
  var express = require('express');
  var taskRouter = express.Router();

  var tasks = {
      1: {id: 1, title: '12345', cost: 1, value: 5},
      2: {id: 2, title: '2345', cost: 2, value: 4},
      3: {id: 3, title: '345', cost: 3, value: 3},
      4: {id: 4, title: '45', cost: 4, value: 2},
      5: {id: 5, title: '5', cost: 5, value: 1}
    };



  taskRouter.get('/', function(req, res) {
    var tasksInArray = [];
    for (var taskId in tasks){
        tasksInArray.push(tasks[taskId])
    }
    res.send({tasks: tasksInArray});
  });

  taskRouter.post('/', function(req, res) {
    if (!!req.body.task.id && tasks[req.body.task.id] == null){
        tasks[req.body.task.id] = req.body.task;
        res.status(204).end();
    }
    res.status(500).end();
  });

  taskRouter.get('/:id', function(req, res) {
    res.send({task:tasks[req.params.id]});
  });

  taskRouter.put('/:id', function(req, res) {
    var task = req.body.task;
    task.id = req.params.id;

    tasks[req.params.id] = task;
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  taskRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });


  app.use('/api/tasks',require('body-parser').json(), taskRouter);
};
