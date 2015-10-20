import DS from 'ember-data';
import {
  validator, buildValidations
}
  from 'ember-cp-validations';

var attr = DS.attr;

var Validations = buildValidations({
  title: [
    validator('presence', true),
    validator('length', {
      min: 1,
      max: 35
    })
  ],
  cost: [
    validator('format', {
      regex: /^\d+$/,
      message: ' must be a number'
    }),
    validator('presence', true)
  ],
  value: [
    validator('format', {
      regex: /^\d+$/,
      message: ' must be a number'
    }),
    validator('presence', true)
  ]

});

export default DS.Model.extend(Validations, {
  matrix: DS.belongsTo('matrix'),
  title: attr('string'),
  cost: attr('number'),
  value: attr('number'),
  description: attr('string'),
  matrix_id: attr('string')
});
