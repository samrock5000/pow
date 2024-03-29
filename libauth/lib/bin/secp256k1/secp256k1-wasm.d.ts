import type { Secp256k1Wasm } from './secp256k1-wasm-types.js';
import { CompressionFlag, ContextFlag } from './secp256k1-wasm-types.js';
export type { Secp256k1Wasm };
export { ContextFlag, CompressionFlag };
/**
 * The most performant way to instantiate secp256k1 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateSecp256k1}.
 *
 * Note, most of this method is translated and boiled-down from Emscripten's
 * preamble.js. Significant changes to the WASM build or breaking updates to
 * Emscripten will likely require modifications to this method.
 *
 * @param webassemblyBytes - A buffer containing the secp256k1 binary.
 */
export declare const instantiateSecp256k1WasmBytes: (webassemblyBytes: ArrayBuffer) => Promise<Secp256k1Wasm>;
export declare const getEmbeddedSecp256k1Binary: () => ArrayBufferLike;
/**
 * An ultimately-portable (but slower) version of
 * {@link instantiateSecp256k1Bytes} that does not require the consumer to
 * provide the secp256k1 binary buffer.
 */
export declare const instantiateSecp256k1Wasm: () => Promise<Secp256k1Wasm>;
//# sourceMappingURL=secp256k1-wasm.d.ts.map