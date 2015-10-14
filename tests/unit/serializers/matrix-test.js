import { moduleForModel, test } from 'ember-qunit';

moduleForModel('matrix', 'Unit | Serializer | matrix', {
  // Specify the other units that are required for this test.
  needs: ['serializer:matrix']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
