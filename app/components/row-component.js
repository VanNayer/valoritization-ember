import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  row:  Ember.computed('row', function () {
    console.log(this.get('row'));
    return this.get('row');
  }),

  tasksOfRow: Ember.computed('tasks.[]', function () {
    var matchingTasks = this.get('tasks').filterBy('value', this.get('row').y);

    return matchingTasks;
  })
});
