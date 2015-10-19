import Ember from 'ember';

export default Ember.Component.extend({
  taskPosition: Ember.computed('task.value', 'task.cost', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskValue = this.get('task').get('value');
    var taskCost = this.get('task').get('cost');

    var relativeCost = (taskCost - extreme.minCost);
    var relativeCostDelta = (extreme.maxCost - extreme.minCost);
    var x = Math.round((( relativeCost) * 100) / ( relativeCostDelta));

    var relativeValue = (taskValue - extreme.minValue);
    var relativeValueDelta = (extreme.maxValue - extreme.minValue);
    var y = Math.round((( relativeValue) * 100) / ( relativeValueDelta));

    return new Ember.Handlebars.SafeString('left: ' + x + '%; bottom: ' + y + '%;');
  })

});
