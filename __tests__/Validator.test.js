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
    
    it('returns the field cast to type', () => {
      const dog = {
        name: 'buckwheat',
        age: '5',
        weight: '30 lbs'
      };
      expect(validator.validate(dog)).toEqual(5);
    });
      
    it('returns the field', () => {
      const dog = {
        name: 'buckwheat',
        weight: '30 lbs'
      };
      expect(() => validator.validate(dog)).toThrowErrorMatchingSnapshot();
    });
      
    describe('optional fields', () => {
      beforeAll(() => {
        validator = new Validator('age', {
          type: Number
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
      it('returns the field cast to type', () => {
        const dog = {
          name: 'buckwheat',
          age: '5',
          weight: '30 lbs'
        };
          
        expect(validator.validate(dog)).toEqual(5);
      });
        
    });
  });
})
;
