import Ember from 'ember';

export default Ember.Component.extend({


  taskPosition: Ember.computed('task.value', 'task.cost', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskValue = this.get('task').get('value');
    var taskCost = this.get('task').get('cost');
    var x = Math.round((taskCost * 90) / ( extreme.maxCost));
    var y = Math.round((taskValue * 90) / ( extreme.maxValue));

    return new Ember.Handlebars.SafeString('left: ' + x + '%; bottom: ' + y + '%;');
  })


});
