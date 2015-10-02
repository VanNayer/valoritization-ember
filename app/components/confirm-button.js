import Ember from 'ember';

export default Ember.Component.extend({
  taskToDelete: null,

  actions: {
    showConfirmation() {
      this.toggleProperty('isShowingConfirmation');
    },

    confirm() {
      this.toggleProperty('isShowingConfirmation');
      this.get('taskToDelete').destroyRecord();
      this.sendAction();
    }
  }
});
