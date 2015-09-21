import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'td',

  tasksOfCell: Ember.computed('tasks', function () {
    var matchingTasks = this.get('tasks')
      .filterBy('cost', this.get('cell').x);
    return matchingTasks;
  })
});
