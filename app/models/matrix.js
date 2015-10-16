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
  ]
});
export default DS.Model.extend(Validations, {
  title: attr('string'),
  tasks: DS.hasMany('task', {
    async: true
  })

});
