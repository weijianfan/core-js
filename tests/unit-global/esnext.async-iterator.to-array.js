import { STRICT } from '../helpers/constants';
import { createIterator } from '../helpers/helpers';

QUnit.test('AsyncIterator#toArray', assert => {
  const { toArray } = AsyncIterator.prototype;

  assert.isFunction(toArray);
  assert.arity(toArray, 0);
  assert.name(toArray, 'toArray');
  assert.looksNative(toArray);
  assert.nonEnumerable(AsyncIterator.prototype, 'toArray');

  if (STRICT) {
    assert.throws(() => toArray.call(undefined), TypeError);
    assert.throws(() => toArray.call(null), TypeError);
  }

  return toArray.call(createIterator([1, 2, 3])).then(it => {
    assert.arrayEqual(it, [1, 2, 3]);
  });
});
