export declare enum CashAddressNetworkPrefix {
    mainnet = "bitcoincash",
    testnet = "bchtest",
    regtest = "bchreg"
}
/**
 * The CashAddress specification standardizes the format of the version byte:
 * - Most significant bit: reserved, must be `0`
 * - next 4 bits: Address Type
 * - 3 least significant bits: Payload Size
 *
 * Two Address Type values are currently standardized:
 * - 0 (`0b0000`): P2PKH
 * - 1 (`0b0001`): P2SH
 *
 * And two are proposed by `CHIP-2022-02-CashTokens`:
 * - 2 (`0b0010`): P2PKH + Token Support
 * - 3 (`0b0011`): P2SH + Token Support
 *
 * The CashAddress specification standardizes expected payload size using
 * {@link CashAddressSizeBits}. Currently, two size bit values are in use by
 * standard CashAddress types:
 * - `0` (`0b000`): 20 bytes (in use by `p2pkh` and `p2sh20`)
 * - `3` (`0b011`): 32 bytes (in use by `p2sh32`)
 */
export declare enum CashAddressVersionByte {
    /**
     * Pay to Public Key Hash (P2PKH): `0b00000000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0000` (P2PKH)
     * - Size bits: `000` (20 bytes)
     */
    p2pkh = 0,
    /**
     * 20-byte Pay to Script Hash (P2SH20): `0b00001000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0001` (P2SH)
     * - Size bits: `000` (20 bytes)
     */
    p2sh20 = 8,
    /**
     * 32-byte Pay to Script Hash (P2SH20): `0b00001000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0001` (P2SH)
     * - Size bits: `011` (32 bytes)
     */
    p2sh32 = 11,
    /**
     * Pay to Public Key Hash (P2PKH) with token support: `0b00010000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0010` (P2PKH + Tokens)
     * - Size bits: `000` (20 bytes)
     */
    p2pkhWithTokens = 16,
    /**
     * 20-byte Pay to Script Hash (P2SH20) with token support: `0b00011000`
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0011` (P2SH + Tokens)
     * - Size bits: `000` (20 bytes)
     */
    p2sh20WithTokens = 24,
    /**
     * 32-byte Pay to Script Hash (P2SH32) with token support: `0b00011011`
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0011` (P2SH + Tokens)
     * - Size bits: `011` (32 bytes)
     */
    p2sh32WithTokens = 27
}
/**
 * The address types currently defined in the CashAddress specification. See
 * also: {@link CashAddressVersionByte}.
 */
export declare enum CashAddressType {
    /**
     * Pay to Public Key Hash (P2PKH): `0b0000`
     */
    p2pkh = "p2pkh",
    /**
     * Pay to Script Hash (P2SH): `0b0001`
     */
    p2sh = "p2sh",
    /**
     * Pay to Public Key Hash (P2PKH) with token support: `0b0010`
     */
    p2pkhWithTokens = "p2pkhWithTokens",
    /**
     * Pay to Script Hash (P2SH) with token support: `0b0011`
     */
    p2shWithTokens = "p2shWithTokens"
}
/**
 * The address type bits currently defined in the CashAddress specification.
 * These map to: {@link CashAddressType}.
 */
export declare enum CashAddressTypeBits {
    /**
     * Pay to Public Key Hash (P2PKH)
     */
    p2pkh = 0,
    /**
     * Pay to Script Hash (P2SH)
     */
    p2sh = 1,
    /**
     * Pay to Public Key Hash (P2PKH) with token support
     */
    p2pkhWithTokens = 2,
    /**
     * Pay to Script Hash (P2SH) with token support
     */
    p2shWithTokens = 3
}
export declare const cashAddressTypeToTypeBits: {
    [key in CashAddressType]: CashAddressTypeBits;
};
export declare const cashAddressTypeBitsToType: {
    [key in CashAddressTypeBits]: CashAddressType;
};
export declare const cashAddressSizeBitsToLength: {
    readonly 0: 20;
    readonly 1: 24;
    readonly 2: 28;
    readonly 3: 32;
    readonly 4: 40;
    readonly 5: 48;
    readonly 6: 56;
    readonly 7: 64;
};
export declare const cashAddressLengthToSizeBits: {
    readonly 20: 0;
    readonly 24: 1;
    readonly 28: 2;
    readonly 32: 3;
    readonly 40: 4;
    readonly 48: 5;
    readonly 56: 6;
    readonly 64: 7;
};
export type CashAddressAvailableTypeBits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
export type CashAddressSupportedLength = keyof typeof cashAddressLengthToSizeBits;
export type CashAddressSizeBits = keyof typeof cashAddressSizeBitsToLength;
/**
 * Encode a CashAddress version byte for the given address type and payload
 * length. See {@link CashAddressVersionByte} for more information.
 *
 * The `type` parameter must be a number between `0` and `15`, and `bitLength`
 * must be one of the standardized lengths. To use the contents of a variable,
 * cast it to {@link CashAddressType} or {@link CashAddressSize} respectively,
 * e.g.:
 * ```ts
 * const type = 3 as CashAddressType;
 * const size = 160 as CashAddressSize;
 * getCashAddressVersionByte(type, size);
 * ```
 * @param typeBits - the address type bit of the payload being encoded
 * @param length - the length of the payload being encoded
 */
export declare const encodeCashAddressVersionByte: (typeBits: CashAddressAvailableTypeBits, length: CashAddressSupportedLength) => number;
export declare enum CashAddressVersionByteDecodingError {
    reservedBitSet = "Reserved bit is set."
}
/**
 * Decode a CashAddress version byte. For a list of known versions, see
 * {@link CashAddressVersionByte}.
 *
 * @param version - the version byte to decode
 */
export declare const decodeCashAddressVersionByte: (version: number) => CashAddressVersionByteDecodingError.reservedBitSet | {
    length: 64 | 32 | 24 | 20 | 28 | 40 | 48 | 56;
    typeBits: number;
};
/**
 * Convert a string into an array of 5-bit numbers, representing the characters
 * in a case-insensitive way.
 * @param prefix - the prefix to mask
 */
export declare const maskCashAddressPrefix: (prefix: string) => number[];
/**
 * Perform the CashAddress polynomial modulo operation, which is based on the
 * Bech32 polynomial modulo operation, but the returned checksum is 40 bits,
 * rather than 30.
 *
 * A.K.A. `PolyMod`
 *
 * @remarks
 * Notes from C++ implementation:
 * This function will compute what 8 5-bit values to XOR into the last 8 input
 * values, in order to make the checksum 0. These 8 values are packed together
 * in a single 40-bit integer. The higher bits correspond to earlier values.
 *
 * The input is interpreted as a list of coefficients of a polynomial over F
 * = GF(32), with an implicit 1 in front. If the input is [v0,v1,v2,v3,v4],
 * that polynomial is v(x) = 1*x^5 + v0*x^4 + v1*x^3 + v2*x^2 + v3*x + v4.
 * The implicit 1 guarantees that [v0,v1,v2,...] has a distinct checksum
 * from [0,v0,v1,v2,...].
 *
 * The output is a 40-bit integer whose 5-bit groups are the coefficients of
 * the remainder of v(x) mod g(x), where g(x) is the cashaddr generator, x^8
 * + [19]*x^7 + [3]*x^6 + [25]*x^5 + [11]*x^4 + [25]*x^3 + [3]*x^2 + [19]*x
 * + [1]. g(x) is chosen in such a way that the resulting code is a BCH
 * code, guaranteeing detection of up to 4 errors within a window of 1025
 * characters. Among the various possible BCH codes, one was selected to in
 * fact guarantee detection of up to 5 errors within a window of 160
 * characters and 6 errors within a window of 126 characters. In addition,
 * the code guarantee the detection of a burst of up to 8 errors.
 *
 * Note that the coefficients are elements of GF(32), here represented as
 * decimal numbers between []. In this finite field, addition is just XOR of
 * the corresponding numbers. For example, [27] + [13] = [27 ^ 13] = [22].
 * Multiplication is more complicated, and requires treating the bits of
 * values themselves as coefficients of a polynomial over a smaller field,
 * GF(2), and multiplying those polynomials mod a^5 + a^3 + 1. For example,
 * [5] * [26] = (a^2 + 1) * (a^4 + a^3 + a) = (a^4 + a^3 + a) * a^2 + (a^4 +
 * a^3 + a) = a^6 + a^5 + a^4 + a = a^3 + 1 (mod a^5 + a^3 + 1) = [9].
 *
 * During the course of the loop below, `c` contains the bit-packed
 * coefficients of the polynomial constructed from just the values of v that
 * were processed so far, mod g(x). In the above example, `c` initially
 * corresponds to 1 mod (x), and after processing 2 inputs of v, it
 * corresponds to x^2 + v0*x + v1 mod g(x). As 1 mod g(x) = 1, that is the
 * starting value for `c`.
 *
 * @param v - Array of 5-bit integers over which the checksum is to be computed
 */
export declare const cashAddressPolynomialModulo: (v: number[]) => number;
/**
 * Convert the checksum returned by {@link cashAddressPolynomialModulo} to an
 * array of 5-bit positive integers that can be Base32 encoded.
 * @param checksum - a 40 bit checksum returned by
 * {@link cashAddressPolynomialModulo}
 */
export declare const cashAddressChecksumToUint5Array: (checksum: number) => number[];
/**
 * Encode a payload as a CashAddress-like string using the CashAddress format.
 *
 * To encode a standard CashAddress, use {@link encodeCashAddress}.
 *
 * @param prefix - a valid prefix indicating the network for which to encode the
 * address – must be only lowercase letters (for standard CashAddress prefixes,
 * see {@link CashAddressNetworkPrefix})
 * @param version - a single byte indicating the version of this address (for
 * standard CashAddress versions, see {@link CashAddressVersionByte})
 * @param payload - the payload to encode
 */
export declare const encodeCashAddressFormat: (prefix: string, version: number, payload: Uint8Array) => string;
export declare enum CashAddressEncodingError {
    unsupportedPayloadLength = "Error encoding CashAddress: a payload of this length can not be encoded as a valid CashAddress.",
    noTypeBitsValueStandardizedForP2pk = "Error encoding CashAddress: no CashAddress type bit has been standardized for P2PK locking bytecode.",
    unknownLockingBytecodeType = "Error encoding CashAddress: unknown locking bytecode type."
}
export declare const isValidCashAddressPayloadLength: (length: number) => length is 64 | 32 | 24 | 20 | 28 | 40 | 48 | 56;
/**
 * Encode a payload as a CashAddress. This function is similar to
 * {@link encodeCashAddress} but supports non-standard `prefix`es and `type`s.
 *
 * **Note: this function cannot prevent all implementation errors via types.**
 * The function will throw if `payload` is not a valid
 * {@link CashAddressSupportedLength}. Confirm the length of untrusted inputs
 * before providing them to this function.
 *
 * For other address standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link encodeCashAddressFormat}.
 *
 * @param prefix - a valid prefix indicating the network for which to encode the
 * address (usually a {@link CashAddressNetworkPrefix}) – must be only lowercase
 * letters
 * @param typeBits - the type bit to encode in the version byte – must be a
 * number between `0` and `15`
 * @param payload - the payload to encode (for P2PKH, the public key hash; for
 * P2SH, the redeem bytecode hash)
 */
export declare const encodeCashAddressNonStandard: (prefix: string, typeBits: CashAddressAvailableTypeBits, payload: Uint8Array) => string;
/**
 * Encode a payload as a CashAddress.
 *
 * **Note: this function cannot prevent all implementation errors via types.**
 * The function will throw if `payload` is not a valid
 * {@link CashAddressSupportedLength}. Confirm the length of untrusted inputs
 * before providing them to this function.
 *
 * To encode a CashAddress with a custom/unknown prefix or type bit, see
 * {@link encodeCashAddressNonStandard}. For other address standards that
 * closely follow the CashAddress specification (but have alternative version
 * byte requirements), use {@link encodeCashAddressFormat}.
 *
 * @param prefix - the network for which to encode the address
 * (a {@link CashAddressNetworkPrefix})
 * @param type - the address type (a {@link CashAddressType})
 * @param payload - the payload to encode – for P2PKH, the public key hash; for
 * P2SH, the redeem bytecode hash
 */
export declare const encodeCashAddress: (prefix: `${CashAddressNetworkPrefix}`, type: `${CashAddressType}`, payload: Uint8Array) => string;
export declare enum CashAddressDecodingError {
    improperPadding = "Error decoding CashAddress: the payload is improperly padded.",
    invalidCharacters = "Error decoding CashAddress: the payload contains non-bech32 characters.",
    invalidChecksum = "Error decoding CashAddress: invalid checksum - please review the address for errors.",
    invalidFormat = "Error decoding CashAddress: CashAddresses should be of the form \"prefix:payload\".",
    mismatchedPayloadLength = "Error decoding CashAddress: mismatched payload length for specified address version.",
    reservedByte = "Error decoding CashAddress: unknown CashAddress version, reserved byte set.",
    unknownAddressType = "Error decoding CashAddress: unknown CashAddress type."
}
/**
 * Decode and validate a string using the CashAddress format. This is more
 * lenient than {@link decodeCashAddress}, which also validates the contents of
 * the version byte.
 *
 * Note, this method requires `address` to include a network prefix. To
 * decode a string with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * @param address - the CashAddress-like string to decode
 */
export declare const decodeCashAddressFormat: (address: string) => CashAddressDecodingError.improperPadding | CashAddressDecodingError.invalidCharacters | CashAddressDecodingError.invalidChecksum | CashAddressDecodingError.invalidFormat | {
    payload: Uint8Array;
    prefix: string;
    version: number;
};
/**
 * Decode and validate a CashAddress, strictly checking the version byte
 * according to the CashAddress specification. This is important for error
 * detection in CashAddresses.
 *
 * This function is similar to {@link decodeCashAddress} but supports
 * non-standard `type`s.
 *
 * For other address-like standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link decodeCashAddressFormat}.
 *
 * Note, this method requires that CashAddresses include a network prefix. To
 * decode an address with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * @param address - the CashAddress to decode
 */
export declare const decodeCashAddressNonStandard: (address: string) => CashAddressDecodingError.improperPadding | CashAddressDecodingError.invalidCharacters | CashAddressDecodingError.invalidChecksum | CashAddressDecodingError.invalidFormat | CashAddressDecodingError.mismatchedPayloadLength | CashAddressDecodingError.reservedByte | {
    payload: Uint8Array;
    prefix: string;
    typeBits: number;
};
/**
 * Decode and validate a CashAddress, strictly checking the version byte
 * according to the CashAddress specification. This is important for error
 * detection in CashAddresses.
 *
 * To decode CashAddresses with non-standard `type`s,
 * see {@link decodeCashAddressNonStandard}.
 *
 * For other address-like standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link decodeCashAddressFormat}.
 *
 * Note, this method requires that CashAddresses include a network prefix. To
 * decode an address with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * @param address - the CashAddress to decode
 */
export declare const decodeCashAddress: (address: string) => string | {
    payload: Uint8Array;
    prefix: string;
    type: CashAddressType;
};
/**
 * Attempt to decode and validate a CashAddress against a list of possible
 * prefixes. If the correct prefix is known, use {@link decodeCashAddress}.
 *
 * @param address - the CashAddress to decode
 * @param possiblePrefixes - the network prefixes to try
 */
export declare const decodeCashAddressFormatWithoutPrefix: (address: string, possiblePrefixes?: string[]) => CashAddressDecodingError.improperPadding | CashAddressDecodingError.invalidCharacters | CashAddressDecodingError.invalidChecksum | CashAddressDecodingError.invalidFormat | {
    payload: Uint8Array;
    prefix: string;
    version: number;
};
/**
 * Convert a CashAddress polynomial to CashAddress string format.
 *
 * @remarks
 * CashAddress polynomials take the form:
 *
 * `[lowest 5 bits of each prefix character] 0 [payload + checksum]`
 *
 * This method remaps the 5-bit integers in the prefix location to the matching
 * ASCII lowercase characters, replaces the separator with `:`, and then Bech32
 * encodes the remaining payload and checksum.
 *
 * @param polynomial - an array of 5-bit integers representing the terms of a
 * CashAddress polynomial
 */
export declare const cashAddressPolynomialToCashAddress: (polynomial: number[]) => string;
export declare enum CashAddressCorrectionError {
    tooManyErrors = "This address has more than 2 errors and cannot be corrected."
}
export type CashAddressCorrection = {
    /**
     * The corrected address in CashAddressFormat (including the prefix).
     */
    address: string;
    /**
     * An array of up to two numbers (in ascending order) indicating the index of
     * each corrected character within the corrected address.
     */
    corrections: [] | [number, number] | [number];
};
/**
 * Attempt to correct up to 2 errors in a CashAddress. The CashAddress must be
 * properly formed (include a prefix and only contain Bech32 characters).
 *
 * ## **Improper use of this method carries the risk of lost funds.**
 *
 * It is strongly advised that this method only be used under explicit user
 * control. With enough errors, this method is likely to find a plausible
 * correction for any address (but for which no private key exists). This is
 * effectively equivalent to burning the funds.
 *
 * Only 2 substitution errors can be corrected (or a single swap) – deletions
 * and insertions (errors that shift many other characters and change the
 * length of the payload) can never be safely corrected and will produce an
 * error.
 *
 * Errors can be corrected in both the prefix and the payload, but attempting to
 * correct errors in the prefix prior to this method can improve results, e.g.
 * for `bchtest:qq2azmyyv6dtgczexyalqar70q036yund53jvfde0x`, the string
 * `bchtest:qq2azmyyv6dtgczexyalqar70q036yund53jvfdecc` can be corrected, while
 * `typo:qq2azmyyv6dtgczexyalqar70q036yund53jvfdecc` can not.
 *
 * @param address - the CashAddress on which to attempt error correction
 */
export declare const attemptCashAddressFormatErrorCorrection: (address: string) => CashAddressCorrection | CashAddressDecodingError.invalidCharacters | CashAddressDecodingError.invalidFormat | CashAddressCorrectionError.tooManyErrors;
//# sourceMappingURL=cash-address.d.ts.map