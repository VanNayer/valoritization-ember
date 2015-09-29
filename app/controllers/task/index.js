import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteTask: function (task) {
      task.destroyRecord();
      this.transitionToRoute('tasks.new');
    }
  }
});
