import { nativeSubclass } from '../helpers/helpers';

import Symbol from 'core-js-pure/es/symbol';

import AsyncIterator from 'core-js-pure/actual/async-iterator';

QUnit.test('AsyncIterator', assert => {
  assert.isFunction(AsyncIterator);
  assert.arity(AsyncIterator, 0);

  assert.true(AsyncIterator.from([1, 2, 3]) instanceof AsyncIterator, 'Async From Proxy');
  assert.true(AsyncIterator.from([1, 2, 3]).drop(1) instanceof AsyncIterator, 'Async Drop Proxy');

  if (nativeSubclass) {
    const Sub = nativeSubclass(AsyncIterator);
    assert.true(new Sub() instanceof AsyncIterator, 'abstract constructor');
  }

  assert.throws(() => new AsyncIterator(), 'direct constructor throws');
  assert.throws(() => AsyncIterator(), 'throws w/o `new`');
});

QUnit.test('AsyncIterator#constructor', assert => {
  assert.same(AsyncIterator.prototype.constructor, AsyncIterator, 'AsyncIterator#constructor is AsyncIterator');
});

QUnit.test('AsyncIterator#@@toStringTag', assert => {
  assert.same(AsyncIterator.prototype[Symbol.toStringTag], 'AsyncIterator', 'AsyncIterator::@@toStringTag is `AsyncIterator`');
});
