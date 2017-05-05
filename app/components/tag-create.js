import Ember from 'ember';

export default Ember.Component.extend({

    store: Ember.inject.service(),
    create: false,
    actions: {
        toggleCreate(){
            this.toggleProperty('create');
        },
        createNewTag(){
            let tag = this.get('store').createRecord('tag', {
                    name: this.get('name'),
            });
            tag.save();
        }
    }
});
