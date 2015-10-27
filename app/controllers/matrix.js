import Ember from 'ember';
import _ from 'lodash';


export default Ember.Controller.extend({

  extremeCoordinates: function () {

    var tasks = this.model.get('tasks');

    var values = tasks.map(function (task) {
      return task.get('value');
    });

    var costs = tasks.map(function (task) {
      return task.get('cost');
    });


    return {
      minValue: (values.length <= 1) ? 0 : _.min(values),
      maxValue: (values.length < 1) ? 10 : _.max(values),
      minCost: (costs.length <= 1) ? 0 : _.min(costs),
      maxCost: (costs.length < 1) ? 10 : _.max(costs)
    };

  }.property('model.tasks.@each.value', 'model.tasks.@each.cost').readOnly(),

  actions: {
    addTaskToMatrix: function (task) {
      this.get('model').get('tasks').pushObject(task);
    },

    computeBestNext: function () {

      var bestNext = _.max(this.get('model').get('tasks').toArray(), function (task) {
        return task.get('value') / task.get('cost');
      });
      this.growl.info(bestNext.get('title') + ' is your next task.');

    }

  }

});
