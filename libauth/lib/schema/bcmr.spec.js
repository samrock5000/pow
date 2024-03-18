import test from 'ava';
import { importMetadataRegistry } from '../lib.js';
test('importMetadataRegistry: accepts templates as either JSON strings or pre-parsed objects', (t) => {
    const registry = {
        latestRevision: '',
        registryIdentity: { name: '' },
        version: { major: 0, minor: 0, patch: 0 },
    };
    t.deepEqual(registry, importMetadataRegistry(registry));
    t.deepEqual(registry, importMetadataRegistry(JSON.stringify(registry)));
});
//# sourceMappingURL=bcmr.spec.js.map