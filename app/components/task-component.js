import Ember from 'ember';

export default Ember.Component.extend({

  percentFromLeft: Ember.computed('task.value', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskValue = this.get('task').get('value');
    return Math.round((taskValue * 90) / ( extreme.maxValue));
  }),

  percentFromTop: Ember.computed('task.cost', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskCost = this.get('task').get('cost');
    return Math.round(taskCost * 90) / ( extreme.maxCost);
  })

});
