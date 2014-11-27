import Ember from 'ember';
import Base from 'simple-auth/stores/base';
import Ephemeral from 'simple-auth/stores/ephemeral';

export default Ephemeral.extend({
  restore: function() {
    return { authenticator: "simple-auth-authenticator:rails" };
  }
});
