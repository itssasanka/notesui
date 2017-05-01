import Ember from 'ember';

export default Ember.Route.extend({

    queryParams: {
        tag_id: {
            refreshModel: true
        }
    },
    model(params){
        return Ember.RSVP.hash({
            notes: this.store.query('note', params),
            tags: this.store.findAll('tag')
        });
    },

    setupController(controller, model) {
        this._super(...arguments);
        Ember.set(controller, 'notes', model.notes);
        Ember.set(controller, 'tags', model.tags);
    }
});
