import Store from '../authenticators/rails-authenticator';

export default {
  name:       'simple-auth-rails-authenticator',
  before:     'simple-auth',
  initialize: function(container, application) {
    container.register('simple-auth-authenticator:rails', Store);
  }
};
