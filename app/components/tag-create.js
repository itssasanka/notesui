import Ember from 'ember';

export default Ember.Component.extend({
    checkData(){
        if(Ember.isBlank(this.get('name'))){
            this.errors.pushObject({name: 'Tag name cannot be empty.'});
        }
    },
    didUpdateAttrs(){
      console.log("updated");
    },

    store: Ember.inject.service(),
    create: false,
    errors: [],
    actions: {
        toggleCreate(){
            this.toggleProperty('create');
        },
        createNewTag(){
            this.checkData();
            if(Ember.isEmpty(this.get('errors'))){
                let tag = this.get('store').createRecord('tag', {
                    name: this.get('name'),
                });
                tag.save().then(()=>{}).catch((aa)=>{this.set('errors', aa.errors.map(e=>e.detail))});

            }
        },
        toggleSubmit(){
            this.$('.small-button').prop('disabled', Ember.isBlank(this.get('name')));
        }
    }
});
