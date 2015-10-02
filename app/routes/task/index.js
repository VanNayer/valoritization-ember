import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    displayNewTaskForm: function(){
      this.transitionTo('tasks.new');
    }
  }
});
