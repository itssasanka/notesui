import Ember from 'ember';
import TagValidations from '../validations/tag';

const { Component, get } = Ember;

export default Component.extend({
  TagValidations,

  store: Ember.inject.service(),
  create: false, errors: [],
  actions: {
    toggleCreate(){
      this.toggleProperty('create');
    },

    createNewTag(){
      this.changeset.validate().then(() => alert(this.changeset.get("isValid")));
      if (Ember.isEmpty(this.get('errors'))) {
        let tag = this.get('store').createRecord('tag', {
          name: this.get('name'),
        });
        tag.save()
          .then(() => {
            this.set('name', '');
            this.toggleProperty('create')
          })
          .catch((response) => {
            this.set('errors', response.errors.map(e => e.detail))
          });
      }
    },

    toggleSubmit(){
      this.$('.small-button').prop('disabled', Ember.isBlank(this.changeset.get('name')));
    }
  }
});
