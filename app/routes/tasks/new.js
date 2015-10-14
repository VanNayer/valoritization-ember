import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    var record = this.store.createRecord('task');
    var matrix = this.modelFor("matrix");
    record.set('matrix_id', matrix.get('id'));
    return record;
  }
});
