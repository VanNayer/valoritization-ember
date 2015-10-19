import Ember from 'ember';

export default Ember.Route.extend({

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('freshPage', true);
  },

  model: function () {
    var record = this.store.createRecord('task');
    var matrix = this.modelFor("matrix");
    record.set('matrix_id', matrix.get('id'));
    return record;
  }
});
