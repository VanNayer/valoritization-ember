import Ember from 'ember';

export default Ember.Component.extend({


  taskPosition: Ember.computed('task.value', 'task.cost', 'extremeCoordinates', function () {
    var extreme = this.get('extremeCoordinates');
    var taskValue = this.get('task').get('value');
    var taskCost = this.get('task').get('cost');
    var x = Math.round((taskValue * 90) / ( extreme.maxValue));
    var y = Math.round((taskCost * 90) / ( extreme.maxCost));

    return new Ember.Handlebars.SafeString('left: ' + x + '%; bottom: ' + y + '%;');
  })


});
