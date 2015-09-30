import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function (task) {
      var newTask = this.get('model');
      const {
        m,
        validations
        } = newTask.validateSync();

      if (validations.get('isValid')) {
        newTask.save()
          .then(function (taskSaved) {
            this.transitionToRoute('task.index', taskSaved);
          }.bind(this))
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  }
});
