import Ember from 'ember';

export default Ember.Route.extend({


  model: function () {

    var storedValue = localStorage.getItem('myPrivateMatrices');
    var myPrivateMatrices;
    if (storedValue) {
      var myPrivateMatriceIds = localStorage.getItem('myPrivateMatrices').split(',');
      myPrivateMatrices = this.store.query('matrix', {ids: myPrivateMatriceIds});
    }

    return {
      publicMatrices: this.store.find('matrix', {shared: true}),
      myPrivateMatrices: myPrivateMatrices
    }
  },


  actions: {
    goToMatrix: function (todo) {
      this.transitionTo('matrix', todo);
    }
  }
});
