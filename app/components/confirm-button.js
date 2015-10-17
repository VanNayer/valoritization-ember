import Ember from 'ember';

export default Ember.Component.extend({
  toBeDeleted: null,

  actions: {
    showConfirmation() {
      this.toggleProperty('isShowingConfirmation');
    },

    confirm() {
      this.toggleProperty('isShowingConfirmation');
      this.get('toBeDeleted').destroyRecord();
      this.sendAction();
    }
  }
});
