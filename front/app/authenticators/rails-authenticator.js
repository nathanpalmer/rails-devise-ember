import Ember from 'ember';
import Authenticator from 'simple-auth-devise/authenticators/devise';

export default Authenticator.extend({
  restore: function(properties) {
    return Ember.$.ajax({
      url: '/users/restore'
    });
  },

  invalidate: function() {
    return Ember.$.ajax({
      method: 'DELETE',
      url: '/users/sign_out'
    });
  }
});
