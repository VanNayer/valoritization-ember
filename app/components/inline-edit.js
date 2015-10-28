import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  timer: null,

  click: function () {
    if (!this.get('editing')) {
      this.send('startEditing');
    }
  },


  //didInsertElement: function () {
  //
  //
  //  var element = this.$('div')[0];

  //var needDoubleClick = undefined != this.get('action');
  //
  //// When we want to handle single&double click
  //if (needDoubleClick) {
  //  element.onclick = function () {
  //
  //    var timer = this.get('timer');
  //    var model = this.get('model');
  //    if (timer) {
  //      clearTimeout(timer);
  //    }
  //    this.set('timer', setTimeout(function () {
  //      this.sendAction('action', model);
  //    }.bind(this), 200));
  //  }.bind(this);
  //
  //  element.ondblclick = function () {
  //    var timer = this.get('timer');
  //    clearTimeout(timer);
  //    this.send('startEditing');
  //  }.bind(this);
  //} else {
  //  // Otherwise
  //  element.onclick = function () {
  //    this.send('startEditing');
  //  }.bind(this);
  //}
  //},


  focusOut: function () {
    this.send('stopEditing');
  },

  focusTextField: function () {
    this.$('input').get(0).focus();
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
