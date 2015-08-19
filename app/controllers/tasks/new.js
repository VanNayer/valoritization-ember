import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    save: function (task) {
      task.save(function() {}, function() {});
      this.transitionToRoute('task', task);
    }
  }
});
