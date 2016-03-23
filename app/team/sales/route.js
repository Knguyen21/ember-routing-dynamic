import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {
        id: 1,
        name: 'Nick',
        nickname: 'Fedora',
        age: 27
      },
      {
        id: 2,
        name: 'Mike',
        nickname: 'Rooster',
        age: 32
      },
      {
        id: 3,
        name: 'Ethan',
        nickname: 'Easy E',
        age: 25
      }
    ];
  }
});
