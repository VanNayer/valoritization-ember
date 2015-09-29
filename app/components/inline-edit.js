import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  //focusOut: function(){
  //  if (!this.get('isInvalid')) {
  //    this.toggleProperty("editing");
  //    this.get('model').save();
  //  }
  //},

  validations: Ember.computed('value', function () {
    return this.get('model').validateSync().validations;
  }),

  isInvalid: Ember.computed('validations', function () {
    return this.get('validations').get('isInvalid');
  }),

  invalidMessage: Ember.computed('validations', function () {
    return this.get('validations').get('message');
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
      this.get("model").rollbackAttributes();
    }
  }

});
