import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addMatrix: function () {

      var newMatrice = this.get('model');

      if (newMatrice.validateSync().validations.get('isValid')) {
        newMatrice.save()
          .then(function (matrixSaved) {
            this.transitionToRoute('matrix', matrixSaved);
          }.bind(this))
          .catch(function (err) {
            console.log(err);
          });
      }
    }
  }
});
