import Ember from 'ember';
import Authenticator from 'simple-auth-devise/authenticators/devise';

export default Authenticator.extend({
  restore: function(properties) {
    return $.ajax({
      url: '/users/restore'
    });
  },

  invalidate: function() {
    return $.ajax({
      method: 'DELETE',
      url: '/users/sign_out'
    });
  }
});
