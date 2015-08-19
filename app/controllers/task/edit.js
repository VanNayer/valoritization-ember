import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {
      update: function (task) {
        task.save();
        this.transitionToRoute('task', task);
      }
    }
  }
);

