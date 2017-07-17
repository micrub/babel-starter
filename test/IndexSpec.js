import { expect } from 'chai';
import Core from '../src/index';

const MODULE_PROPERTIES_AMOUNT = 1;

describe('Core', () => {

  it('Module should be an instance of `Object`.', () => {
    expect(Core).to.be.instanceOf(Object)
  });

  it('Module should have '+ MODULE_PROPERTIES_AMOUNT + ' properties.', () => {
    expect(Object.keys(Core).length).to.be.eq(MODULE_PROPERTIES_AMOUNT);
  });

  it('Module should have `Object` constructor.', () => {
    expect(Core.constructor.name).to.be.eq('Object')
  });

  it('Module should have `Base` class property.', () => {
    expect(Core.Base).to.be.instanceOf(Object)
  });

});
