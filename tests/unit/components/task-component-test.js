import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';


moduleForComponent('task-component');

test('taskPosition the biggest in all is at 100% from the origin', function (assert) {
  // Given
  var component = this.subject();
  Ember.run(function () {
    component.set('task', Ember.Object.create({value: 100, cost: 100, title: 'Michel'}));
    component.set('extremeCoordinates', {minCost: 0, minValue: 0,maxCost: 100, maxValue: 100});
  });

  // When

  // Then
  assert.equal(this.$().text().trim(), 'Michel');
  assert.equal(this.$('.matrix__tasks__task').attr('style'), 'left: 100%; bottom: 100%;');
});


test('taskPosition the smallest in all is at 0% from the origin', function (assert) {
  // Given
  var component = this.subject();
  Ember.run(function () {
    component.set('task', Ember.Object.create({value: 100, cost: 100, title: 'Michel'}));
    component.set('extremeCoordinates', {minCost: 100, minValue: 100,maxCost: 1000, maxValue: 1000});
  });

  // When

  // Then
  assert.equal(this.$('.matrix__tasks__task').attr('style'), 'left: 0%; bottom: 0%;');
});


test('taskPosition in the middle of all is at 50% from the origin', function (assert) {
  // Given
  var component = this.subject();
  Ember.run(function () {
    component.set('task', Ember.Object.create({value: 100, cost: 100, title: 'Michel'}));
    component.set('extremeCoordinates', {minCost: 50, minValue: 50,maxCost: 150, maxValue: 150});
  });

  // When

  // Then
  assert.equal(this.$('.matrix__tasks__task').attr('style'), 'left: 50%; bottom: 50%;');
});


