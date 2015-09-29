import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function (task) {
      var newTask = this.get('model');
      const {
        m,
        validations
        } = newTask.validateSync();

      if(validations.get('isValid')) {
        newTask.save(function() {}, function() {});
        this.transitionToRoute('tasks.new');
      }
    }
  }
});
