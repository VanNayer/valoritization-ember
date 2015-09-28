import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  isInvalid: Ember.computed('value', function () {
    var newTask = this.get('model');
    const {
      m,
      validations
      } = newTask.validateSync();
    return (validations.get('isInvalid'));
  }),

  actions: {

    startEditing: function () {
      this.toggleProperty(("editing"));
    },

    stopEditing: function () {
      if (!this.get('isInvalid')) {

        this.toggleProperty("editing");
        this.get('model').save();
      }
    },

    cancelEditing: function () {
      this.toggleProperty("editing");
      this.get("content").rollback();
    }
  }

});
