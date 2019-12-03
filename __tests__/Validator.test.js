const Validator = require('../lib/Validator');

describe('Validator', () => {
  let validator;

  describe('required fields', () => {
    beforeAll(() => {
      validator = new Validator('age', {
        type: Number,
        required: true
      });
    });
      
    it('returns the field', () => {
      const dog = {
        name: 'buckwheat',
        age: 5,
        weight: '30 lbs'
      };
      expect(validator.validate(dog)).toEqual(5);
    });
      
  });
})
;
