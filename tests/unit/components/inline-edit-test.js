import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('inline-edit', 'Unit | Component | inline edit', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('inline-edit in view mode when no value should call to add', function (assert) {
  // When
  this.render();

  // Then
  assert.equal(this.$().text().trim(), 'Add');
});

test('inline-edit in view mode should display the value', function (assert) {
  // Given
  var component = this.subject();
  Ember.run(function () {
    component.set('value', 'la belle');
  });

  // When
  this.render();

  // Then
  assert.equal(this.$().text().trim(), 'la belle');
});
