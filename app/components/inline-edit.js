import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  focusOut: function(){
    this.send('stopEditing');
  },

  focusTextField: function() {
    this.$('input').focus();
  },

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
      this.set('editing', true);
      Ember.run.scheduleOnce('afterRender', this, this.focusTextField);
    },

    stopEditing: function () {
      if (!this.get('isInvalid')) {
        this.set('editing', false);
        this.get('model').save();
      }
    },

    cancelEditing: function () {
      this.set('editing', false);
      this.get("model").rollbackAttributes();
    }
  }

});
