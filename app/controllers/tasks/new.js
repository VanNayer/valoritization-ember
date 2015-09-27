import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function (task) {
      var newTask = this.get('model');
      newTask.save(function() {}, function() {});
      this.transitionToRoute('task', newTask);
    }
  }
});
