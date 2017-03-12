import Ember from 'ember';

export default Ember.Route.extend({

	queryParams:{
		tag_id: {
			refreshModel: true
		}
	},	
	model(params){
		return this.get('store').query('note', params);
	}
});
