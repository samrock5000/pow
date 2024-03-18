/**
 * Libauth is designed to simultaneously support multiple chains/versions of
 * bitcoin without patches to the Libauth codebase. As such, Libauth can
 * potentially include support for multiple implementations of a particular data
 * structure. By convention, Libauth identifies chain-specific implementations
 * with an uppercase currency symbol suffix.
 *
 * For example, a "transaction" may include different properties depending on
 * the chain for which it is created. The type {@link TransactionBCH} specifies
 * a transaction intended for the BCH network, while the type
 * {@link TransactionBTC} specifies a transaction intended for BTC.
 *
 * For convenience, unless another chain is specified, Libauth types refer to
 * their BCH implementation, e.g. {@link Transaction} is an alias for
 * {@link TransactionBCH}.
 *
 * This file tests these default mappings.
 */
export {};
//# sourceMappingURL=mappings.spec.d.ts.map