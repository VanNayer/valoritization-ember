import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findRecord('matrix', 1)
      .then(
      function (matrix) {
        return matrix;
      },
      function () {
        return null;
      }
    );
  }
});
