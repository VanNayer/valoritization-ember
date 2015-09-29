import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('tasks', { path: '/' }, function() {
    this.resource('task', { path:'/task/:task_id' }, function(){
      // by default this.route('index');
    });
    this.route('new');
  });
});

export default Router;
