import Ember from 'ember';

export default Ember.Route.extend({


  model: function () {
    var matrix = this.modelFor('matrix');
    matrix.reload();
    return matrix.get('tasks');
  }
});
