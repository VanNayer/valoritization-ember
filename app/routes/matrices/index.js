import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('matrix', { shared: true });
  },
  actions: {
    goToMatrix: function(todo) {
      this.transitionTo('matrix', todo);
    }
  }
});
