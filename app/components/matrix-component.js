import Ember from 'ember';

var nbRow = 10;
var nbCellPerRow = 10;
var rows = [];

for (var y = nbRow; y >= 0; y--) {
  var cells = [];
  for (var x = 0; x <= nbCellPerRow; x++) {
    cells.push({x: x});
  }
  rows.push({y: y, cells: cells});
}


export default Ember.Component.extend({
  rows: Ember.computed('tasks', function() {
    return rows;
  }),
  tasks: Ember.computed('tasks', function() {
    return this.get('tasks');
  })
});
