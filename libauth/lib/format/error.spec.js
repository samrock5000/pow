import test from 'ava';
import { formatError, unknownValue } from '../lib.js';
var TestEnum;
(function (TestEnum) {
    TestEnum["one"] = "TestEnum one.";
})(TestEnum || (TestEnum = {}));
test('formatError', (t) => {
    t.deepEqual(formatError("TestConstEnum one." /* TestConstEnum.one */, 'More text.'), 'TestConstEnum one. More text.');
    t.deepEqual(formatError(TestEnum.one, 'More.'), 'TestEnum one. More.');
    t.deepEqual(formatError('Anything.'), 'Anything.');
    t.deepEqual(formatError('Anything.', 'Details.'), 'Anything. Details.');
});
test('unknownValue', (t) => {
    const val = 'something';
    t.throws(() => {
        unknownValue(val);
    });
});
//# sourceMappingURL=error.spec.js.map