import DS from "ember-data";

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export default DS.RESTAdapter.extend({

  host: 'http://localhost:4200/api',

  generateIdForRecord: function() {
    return guid();
  }
});
