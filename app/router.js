import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function () {

  this.resource('matrix', { path: '/:matrix_id'}, function () {
    // by default this.route('index');
    this.resource('tasks', function () {
      this.route('new');
    });
    this.resource('task', { path: '/:task_id'}, function () {
      // by default this.route('index');
    });
  });
  this.resource('matrices', function () {
    this.route('new');
  });
  this.route('about', { path: '/about' });
});

if (window.history && window.history.pushState) {
  Router.reopen({
    rootURL: '/',
    location: 'history'
  });
} else {
  Router.reopen({
    location: 'none'
  });
}

export default Router;
