const Schema = require('../lib/Schema');

describe('Schema', () => {
  it('validates a valid schema', () => {
    const schema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
      },
      weight: {
        type: String
      }
    });
    const dog = {
      name: 'buckwheat',
      age: 5,
      weight: '30 lbs'
    };
      
    expect(schema.validate(dog)).toEqual({
      name: 'buckwheat',
      age: 5,
      weight: '30 lbs'
    });
  });
    
});
