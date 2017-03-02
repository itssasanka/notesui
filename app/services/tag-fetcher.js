import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.get('store').findAll('tag');
  }

});
