import Store from '../stores/rails-store';

export default {
  name:       'simple-auth-rails-store',
  before:     'simple-auth',
  initialize: function(container, application) {
    container.register('simple-auth-session-store:rails', Store);
  }
};
