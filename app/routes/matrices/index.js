import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.filter('matrix', function(matrix) {
      return matrix.get('shared');
    });
  }
});
