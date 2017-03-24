import DS from 'ember-data';

export default DS.Model.extend({
  displayName: DS.attr('string'),
  type:  DS.attr('string'),
  key: DS.attr('string')
});
