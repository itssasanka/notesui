import Ember from 'ember'

export default Ember.Component.extend({
  checkData(){
    if(Ember.isBlank(this.get('name'))){
      this.errors.pushObject('Tag name cannot be empty.');
    }
  },

  store: Ember.inject.service(),
  create: false,errors: [],
  actions: {
    toggleCreate(){
      this.set('errors', []);
      this.toggleProperty('create');
    },

    createNewTag(){
      this.set('errors', []);
      this.checkData();
      if(Ember.isEmpty(this.get('errors'))){
        let tag = this.get('store').createRecord('tag', {
          name: this.get('name'),
        });
        tag.save()
          .then(()=>{
            this.set('name','');
            this.toggleProperty('create')
          })
          .catch((response)=>{
            this.set('errors', response.errors.map(e=>e.detail))
          });
      }
    },

    toggleSubmit(){
      this.$('.small-button').prop('disabled', Ember.isBlank(this.get('name')));
    }
  }
});
