import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('products', function(){
    this.route('product', {path: '/:product_id'});
  });
  // this.route('product',  // this.route('product', {path: '/products/:product_id'})
  this.route('about');
  this.route('contact');
  this.route('team', function(){
    this.route('leadership');
    this.route('sales');
    this.route('engineering', function() {
      this.route('engineer', {path: '/:engineer_id'});
      });
    });

  });


export default Router;
