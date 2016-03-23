import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Andrew Palmer',
        nickname: 'Palm Sugar',
        age: 28
      },
      {
        id: 2,
        name: 'Celena Toon',
        nickname: 'Seatuna',
        age: 26
      },
      {
        id: 3,
        name: 'Khanhnhat Nguyen',
        nickname: 'Queen-K',
        age: 28
      }
    ];
  }
});
