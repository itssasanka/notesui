import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'notesapp:4000'
});
