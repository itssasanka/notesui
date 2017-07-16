import {
  validatePresence,
  validateLength,
} from 'ember-changeset-validations/validators';

export default {
  tag: [
    validatePresence(true),
    validateLength({min: 2})
  ]
};
