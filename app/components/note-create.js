import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    create: false,
    actions: {
        toggleCreate(){
            this.toggleProperty('create');
        },
        createNewNote(){
            this.get('store').createRecord('note', {
                    title: this.get('title'),
                    content: this.get('body'),
                    tag_ids: [1]
                }
            );
        }

    }

});
