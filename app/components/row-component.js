import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',

  row:  Ember.computed('row', 'tasks', function () {
    return this.get('row');
  }),

  tasksOfRow: Ember.computed('row', 'tasks', function () {
    return this.get('tasks')
      .filterBy('value', this.get('row').y);
  })
});
