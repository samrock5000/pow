import type { HashFunction } from '../lib.js';
export type Ripemd160 = HashFunction & {
    /**
     * Finish an incremental ripemd160 hashing computation.
     *
     * Returns the final hash.
     *
     * @param rawState - a raw state returned by `update`
     */
    final: (rawState: Uint8Array) => Uint8Array;
    /**
     * Returns the ripemd160 hash of the provided input.
     *
     * To incrementally construct a ripemd160 hash (e.g. for streaming), use
     * `init`, `update`, and `final`.
     *
     * @param input - a Uint8Array to be hashed using ripemd160
     */
    hash: (input: Uint8Array) => Uint8Array;
    /**
     * Begin an incremental ripemd160 hashing computation.
     *
     * The returned raw state can be provided to `update` with additional input to
     * advance the computation.
     *
     * ## Example
     * ```ts
     * const state1 = ripemd160.init();
     * const state2 = ripemd160.update(state1, new Uint8Array([1, 2, 3]));
     * const state3 = ripemd160.update(state2, new Uint8Array([4, 5, 6]));
     * const hash = ripemd160.final(state3);
     * ```
     */
    init: () => Uint8Array;
    /**
     * Add input to an incremental ripemd160 hashing computation.
     *
     * Returns a raw state that can again be passed to `update` with additional
     * input to continue the computation.
     *
     * When the computation has been updated with all input, pass the raw state to
     * `final` to finish and return a hash.
     *
     * @param rawState - a raw state returned by either `init` or `update`
     * @param input - a Uint8Array to be added to the ripemd160 computation
     */
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
};
/**
 * The most performant way to instantiate ripemd160 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateRipemd160}.
 *
 * @param webassemblyBytes - A buffer containing the ripemd160 binary.
 */
export declare const instantiateRipemd160Bytes: (webassemblyBytes: ArrayBuffer) => Promise<Ripemd160>;
export declare const getEmbeddedRipemd160Binary: () => ArrayBufferLike;
/**
 * An ultimately-portable (but slower) version of
 * {@link instantiateRipemd160Bytes} that does not require the consumer to
 * provide the ripemd160 binary buffer.
 */
export declare const instantiateRipemd160: () => Promise<Ripemd160>;
//# sourceMappingURL=ripemd160.d.ts.map