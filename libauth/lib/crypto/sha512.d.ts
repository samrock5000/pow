import type { HashFunction } from '../lib.js';
export type Sha512 = HashFunction & {
    /**
     * Finish an incremental sha512 hashing computation.
     *
     * Returns the final hash.
     *
     * @param rawState - a raw state returned by `update`.
     */
    final: (rawState: Uint8Array) => Uint8Array;
    /**
     * Returns the sha512 hash of the provided input.
     *
     * To incrementally construct a sha512 hash (e.g. for streaming), use `init`,
     * `update`, and `final`.
     *
     * @param input - a Uint8Array to be hashed using sha512
     */
    hash: (input: Uint8Array) => Uint8Array;
    /**
     * Begin an incremental sha512 hashing computation.
     *
     * The returned raw state can be provided to `update` with additional input to
     * advance the computation.
     *
     * ## Example
     * ```ts
     * const state1 = sha512.init();
     * const state2 = sha512.update(state1, new Uint8Array([1, 2, 3]));
     * const state3 = sha512.update(state2, new Uint8Array([4, 5, 6]));
     * const hash = sha512.final(state3);
     * ```
     */
    init: () => Uint8Array;
    /**
     * Add input to an incremental sha512 hashing computation.
     *
     * Returns a raw state that can again be passed to `update` with additional
     * input to continue the computation.
     *
     * When the computation has been updated with all input, pass the raw state to
     * `final` to finish and return a hash.
     *
     * @param rawState - a raw state returned by either `init` or `update`
     * @param input - a Uint8Array to be added to the sha512 computation
     */
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
};
/**
 * The most performant way to instantiate sha512 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateSha512}.
 *
 * @param webassemblyBytes - A buffer containing the sha512 binary.
 */
export declare const instantiateSha512Bytes: (webassemblyBytes: ArrayBuffer) => Promise<Sha512>;
export declare const getEmbeddedSha512Binary: () => ArrayBufferLike;
/**
 * An ultimately-portable (but slower) version of {@link instantiateSha512Bytes}
 * that does not require the consumer to provide the sha512 binary buffer.
 */
export declare const instantiateSha512: () => Promise<Sha512>;
//# sourceMappingURL=sha512.d.ts.map