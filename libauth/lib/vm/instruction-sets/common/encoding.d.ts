/**
 * Validate a DER-encoded signature.
 *
 * @remarks
 * This function is consensus-critical since BIP66, but differs from the BIP66
 * specification in that it does not validate the existence of a signing
 * serialization type byte at the end of the signature (to support
 * OP_CHECKDATASIG). To validate a bitcoin-encoded signature (including null
 * signatures), use {@link isValidSignatureEncodingBCHTransaction}.
 *
 * @privateRemarks
 * From the Bitcoin ABC C++ implementation:
 *
 * Format: 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
 * total-length: 1-byte length descriptor of everything that follows,
 * excluding the sighash byte.
 * R-length: 1-byte length descriptor of the R value that follows.
 * R: arbitrary-length big-endian encoded R value. It must use the
 * shortest possible encoding for a positive integers (which means no null
 * bytes at the start, except a single one when the next byte has its highest
 * bit set).
 * S-length: 1-byte length descriptor of the S value that follows.
 * S: arbitrary-length big-endian encoded S value. The same rules apply.
 */
export declare const isValidSignatureEncodingDER: (signature: Uint8Array) => boolean;
/**
 * Validate the encoding of a transaction signature, including a signing
 * serialization type byte (A.K.A. "sighash" byte).
 *
 * @param transactionSignature - the full transaction signature
 */
export declare const isValidSignatureEncodingBCHTransaction: (transactionSignature: Uint8Array, validSigningSerializationTypes: number[]) => boolean;
/**
 * Split a bitcoin-encoded signature into a signature and signing serialization
 * type.
 *
 * While a bitcoin-encoded signature only includes a single byte to encode the
 * signing serialization type, a 3-byte forkId can be appended to the signing
 * serialization to provide replay-protection between different forks. (See
 * Bitcoin Cash's Replay Protected Sighash spec for details.)
 *
 * @param encodedSignature - a signature that passes
 * {@link isValidSignatureEncodingBCHTransaction}
 */
export declare const decodeBitcoinSignature: (encodedSignature: Uint8Array) => {
    signature: Uint8Array;
    signingSerializationType: Uint8Array;
};
//# sourceMappingURL=encoding.d.ts.map