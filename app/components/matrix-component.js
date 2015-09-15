import Ember from 'ember';

var nbRow = 20;
var nbCellPerRow = 20;
var rows = [];

for (var y = nbRow; y >= 0; y--) {
  var cells = [];
  for (var x = 0; x <= nbCellPerRow; x++) {
    cells.push({x: x, y: y});
  }
  rows.push({y: y, cells: cells});
}


export default Ember.Component.extend({
  rows: rows
});
