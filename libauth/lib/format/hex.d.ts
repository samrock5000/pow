/**
 * Returns an array of incrementing values starting at `begin` and incrementing
 * by one for `length`.
 *
 * E.g.: `range(3)` → `[0, 1, 2]` and `range(3, 1)` → `[1, 2, 3]`
 *
 * @param length - the number of elements in the array
 * @param begin - the index at which the range starts (default: `0`)
 */
export declare const range: (length: number, begin?: number) => number[];
/**
 * Split a string into an array of `chunkLength` strings. The final string may
 * have a length between 1 and `chunkLength`.
 *
 * E.g.: `splitEvery('abcde', 2)` → `['ab', 'cd', 'e']`
 */
export declare const splitEvery: (input: string, chunkLength: number) => string[];
/**
 * Decode a hexadecimal-encoded string into a Uint8Array.
 *
 * E.g.: `hexToBin('2a64ff')` → `new Uint8Array([42, 100, 255])`
 *
 * Note, this method always completes. If `validHex` is not divisible by 2,
 * the final byte will be parsed as if it were prepended with a `0` (e.g. `aaa`
 * is interpreted as `aa0a`). If `validHex` is potentially malformed, check
 * it with {@link isHex} before calling this method.
 *
 * @param validHex - a string of valid, hexadecimal-encoded data
 */
export declare const hexToBin: (validHex: string) => Uint8Array;
/**
 * For use before {@link hexToBin}. Returns true if the provided string is valid
 * hexadecimal (length is divisible by 2, only uses hexadecimal characters).
 * @param maybeHex - a string to test
 */
export declare const isHex: (maybeHex: string) => boolean;
/**
 * Encode a Uint8Array into a hexadecimal-encoded string.
 *
 * E.g.: `binToHex(new Uint8Array([42, 100, 255]))` → `'2a64ff'`
 *
 * @param bytes - a Uint8Array to encode
 */
export declare const binToHex: (bytes: Uint8Array) => string;
/**
 * Decode a hexadecimal-encoded string into bytes, reverse it, then re-encode.
 *
 * @param validHex - a string of valid, hexadecimal-encoded data. See
 * {@link hexToBin} for more information.
 */
export declare const swapEndianness: (validHex: string) => string;
/**
 * Reduce an array of `Uint8Array`s into a single `Uint8Array`.
 * @param array - the array of `Uint8Array`s to flatten
 */
export declare const flattenBinArray: (array: Uint8Array[]) => Uint8Array;
/**
 * Compare to `Uint8Array`s, return true if their contents are exactly the same,
 * otherwise return false.
 * @param a - the first Uint8Array
 * @param b - the second Uint8Array
 */
export declare const binsAreEqual: (a: Uint8Array, b: Uint8Array) => boolean;
//# sourceMappingURL=hex.d.ts.map