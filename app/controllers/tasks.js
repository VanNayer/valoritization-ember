import Ember from 'ember';
import _ from 'lodash';


export default Ember.Controller.extend({

  extremeCoordinates: function () {
    var values = this.model.map(function (task) {
      return task.get('value');
    });

    var costs = this.model.map(function (task) {
      return task.get('cost');
    });

    return {
      minValue: _.min(values),
      maxValue: _.max(values),
      minCost: _.min(costs),
      maxCost: _.max(costs)
    };
  }.property('model.@each.value', 'model.@each.cost').readOnly()


});



