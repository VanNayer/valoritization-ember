module.exports = function(app) {
  var express = require('express');
  var taskRouter = express.Router();

  taskRouter.get('/', function(req, res) {
    res.send({task:[
      {id: 1, title: '12345', cost: 1, value: 8001},
      {id: 2, title: '2345', cost: 2, value: 8002},
      {id: 3, title: '345', cost: 3, value: 8003},
      {id: 4, title: '45', cost: 4, value: 8004},
      {id: 5, title: '5', cost: 5, value: 8005},

    ]});
  });

  taskRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  taskRouter.get('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  taskRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  taskRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks', taskRouter);
};
