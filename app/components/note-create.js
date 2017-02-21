import Ember from 'ember';

export default Ember.Component.extend({
  create: false,
  actions: {
    toggleCreate(){
      this.toggleProperty('create');
    }
  }

});
