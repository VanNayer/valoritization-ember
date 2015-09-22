import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  actions: {
    startEditing: function () {
      this.toggleProperty(("editing"));
    },

    stopEditing: function () {
      this.toggleProperty("editing");
      if(this.get("isDirty")){
        this.get("content").save();
      }
    },

    cancelEditing: function () {
      this.toggleProperty("editing");
      this.get("content").rollback();
    }
  }

});
