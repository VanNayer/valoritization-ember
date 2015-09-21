import Ember from 'ember';

export default Ember.Component.extend({

  percentFromLeft: Ember.computed('task.value', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var maxDiffValue = (extreme.maxValue - extreme.minValue);
    var taskValue = this.get('task').get('value');
    var percentFromLeft = (taskValue * 100) / ( maxDiffValue);
    return Math.round(percentFromLeft);
  }),
  percentFromTop: Ember.computed('task.cost', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskCost = this.get('task').get('cost');
    var maxDiffCost = (extreme.maxCost - extreme.minCost);
    var percentFromTop = (taskCost * 100) / ( maxDiffCost);
    return Math.round(percentFromTop);
  })
});
