import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {
        id: 1,
        title: "Note1",
        content: "hello",
        tags: ["test", "test2"]
      },
      {
        id: 2,
        title: "Note2",
        content: "hi",
        tags: ["test2", "test3"]
      }
    ];
  }
});
