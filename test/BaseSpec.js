import { expect } from 'chai';
import Base from '../src/Base';

describe('Base', () => {

  it('Module should be an instance of `Object`.', () => {
    expect(Base).to.be.instanceOf(Object)
  });

  it('Module should have `Function` constructor.', () => {
    expect(Base.constructor.name).to.be.eq('Function')
  });

});
