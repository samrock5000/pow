/**
 * Generate an "estimated" transaction – an invalid transaction that matches
 * the expected size of the final transaction.
 *
 * This is useful for estimating the required transaction fee before attempting
 * to properly sign the transaction – especially for transactions that require
 * approval and signatures from multiple entities. An estimated transaction can
 * be quickly generated by a single entity without requiring any variable data
 * (like private keys or wallet data).
 *
 * @remarks
 * Like `generateTransaction` This method accepts a transaction template and
 * generates bytecode given all compilation directives, however, each directive
 * must also contain an `estimate` scenario ID that will be used as the `data`
 * in the compilation. The template must also include a
 * `totalInputValueSatoshis` value (the total satoshi value of all transaction
 * inputs).
 *
 * The `valueSatoshis` property of each output is also optional. (All output
 * `valueSatoshis` properties will be set to `excessiveSatoshis` to guarantee the
 * transaction's invalidity).
 *s
 * @param template - the transaction template from which to generate the
 * "estimated" transaction
 */
export const estimateTransaction = (template) => 
// TODO: estimateTransaction
typeof template === 'object'
    ? { completions: [], errors: [], stage: 'inputs', success: false }
    : { completions: [], errors: [], stage: 'inputs', success: false };
//# sourceMappingURL=estimate-transaction.js.map