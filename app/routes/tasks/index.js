import Ember from 'ember';

function addToMyPrivateMatrix(matrix) {

  if (!matrix.get('shared')) {

    var myPrivateMatrices = [];
    var matrixId = matrix.get('id');

    var storedValue = localStorage.getItem('myPrivateMatrices');
    if (storedValue) {
      myPrivateMatrices = storedValue.split(',');
    }

    if (!myPrivateMatrices.contains(matrixId)) {
      myPrivateMatrices.push(matrixId);
    }

    localStorage.setItem('myPrivateMatrices', myPrivateMatrices);
  }
}

export default Ember.Route.extend({

  model: function () {
    var matrix = this.modelFor('matrix');
    matrix.reload();

    addToMyPrivateMatrix(matrix);

    return matrix.get('tasks');
  }
});
