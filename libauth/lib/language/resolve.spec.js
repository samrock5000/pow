import test from 'ava';
import { IdentifierResolutionType, parseScript, resolveScriptSegment, } from '../lib.js';
test('resolveScriptSegment: error on unrecognized parse results', (t) => {
    const segment = {
        end: {
            column: 24,
            line: 1,
            offset: 23,
        },
        name: 'Script',
        start: {
            column: 1,
            line: 1,
            offset: 0,
        },
        value: [
            {
                end: {
                    column: 24,
                    line: 1,
                    offset: 23,
                },
                name: 'Unknown',
                start: {
                    column: 1,
                    line: 1,
                    offset: 0,
                },
                value: 'unrecognized_expression',
            },
        ],
    };
    t.deepEqual(resolveScriptSegment(segment, () => ({
        bytecode: Uint8Array.of(),
        status: true,
        type: IdentifierResolutionType.variable,
    })), [
        {
            range: {
                endColumn: 24,
                endLineNumber: 1,
                startColumn: 1,
                startLineNumber: 1,
            },
            type: 'error',
            value: 'Unrecognized segment: Unknown',
        },
    ]);
});
test('resolveScriptSegment: marks unknown identifier types', (t) => {
    const parseResult = parseScript('some_identifier');
    if (!parseResult.status) {
        t.fail('Parse failed.');
        return;
    }
    const malformedResolver = () => ({
        bytecode: Uint8Array.of(),
        status: true,
        type: 'unknown-type',
    });
    const resolved = resolveScriptSegment(parseResult.value, malformedResolver);
    t.deepEqual(resolved, [
        {
            range: {
                endColumn: 16,
                endLineNumber: 1,
                startColumn: 1,
                startLineNumber: 1,
            },
            type: 'bytecode',
            unknown: 'some_identifier',
            value: Uint8Array.of(),
        },
    ]);
});
//# sourceMappingURL=resolve.spec.js.map