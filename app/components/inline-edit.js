import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  actions: {

    startEditing: function () {
      this.toggleProperty(("editing"));
    },

    stopEditing: function () {
      this.toggleProperty("editing");
      this.get('model').save();
    },

    cancelEditing: function () {
      this.toggleProperty("editing");
      this.get("content").rollback();
    }
  }

});
