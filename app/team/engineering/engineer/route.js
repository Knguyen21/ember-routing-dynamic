import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return [
      {
        id: 1,
        name: 'Billy Yau',
        nickname: 'Silly Billy',
        age: 30,
        lifestyle: 'bum'
      },
      {
        id: 2,
        name: 'Yao ',
        nickname: 'Miss Yao',
        age: 26,
        lifestyle: 'biatch'
      },
      {
        id: 3,
        name: 'Jerimah',
        nickname: 'Jerry',
        age: 21,
        lifestyle: 'boy'
      }
    ][params.product_id - 1];
  }
});
