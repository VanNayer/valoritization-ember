import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['matrix'],

  actions: {
    addTask: function () {

      var newTask = this.get('model');
      if (newTask.validateSync().validations.get('isValid')) {
        newTask.save()
          .then(function (taskSaved) {
            this.get('controllers.matrix').send('addTaskToMatrix', taskSaved);
            this.transitionToRoute('task.index', taskSaved);
          }.bind(this))
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  }
});
