import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = {
            tags: payload
        };

        return this._super(store, primaryModelClass, payload, id, requestType);
    },

    serializeIntoHash: function (hash, type, record, options) {
        Ember.merge(hash, this.serialize(record, options));
    },
    extractErrors: function (store, typeClass, payload, id) {
        if (payload && typeof payload === 'object') {
            payload = payload.error;
            this.normalizeErrors(typeClass, payload);
        }
        return payload;
    }
});