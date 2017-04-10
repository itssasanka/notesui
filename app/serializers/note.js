import DS from 'ember-data';

export default DS.RESTSerializer.extend(
	DS.EmbeddedRecordsMixin, 
	{
		attrs: {
			tags: { embedded: 'always' },
		}
	},


	{
		normalizeResponse(store, primaryModelClass, payload, id, requestType) {
			payload = {
				notes: payload
			};

			console.log(payload);
			return this._super(store, primaryModelClass, payload, id, requestType);
		}
	}
);
