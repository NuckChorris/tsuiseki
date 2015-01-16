import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('stories', function () {});
  this.resource('charts', function () {});
});

export default Router;
