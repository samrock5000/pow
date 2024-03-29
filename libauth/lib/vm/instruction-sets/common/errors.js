import { formatError } from '../../../format/format.js';
export var AuthenticationErrorCommon;
(function (AuthenticationErrorCommon) {
    AuthenticationErrorCommon["calledReserved"] = "Program called an unassigned, reserved operation.";
    AuthenticationErrorCommon["calledReturn"] = "Program called an OP_RETURN operation.";
    AuthenticationErrorCommon["calledUpgradableNop"] = "Program called a disallowed upgradable non-operation (OP_NOP1-OP_NOP10).";
    AuthenticationErrorCommon["checkSequenceUnavailable"] = "Program called an OP_CHECKSEQUENCEVERIFY operation, but OP_CHECKSEQUENCEVERIFY requires transaction version 2 or higher.";
    AuthenticationErrorCommon["disabledOpcode"] = "Program contains a disabled opcode.";
    AuthenticationErrorCommon["divisionByZero"] = "Program attempted to divide a number by zero.";
    AuthenticationErrorCommon["emptyAlternateStack"] = "Tried to read from an empty alternate stack.";
    AuthenticationErrorCommon["emptyStack"] = "Tried to read from an empty stack.";
    AuthenticationErrorCommon["exceededMaximumBytecodeLengthLocking"] = "The provided locking bytecode exceeds the maximum bytecode length (10,000 bytes).";
    AuthenticationErrorCommon["exceededMaximumBytecodeLengthUnlocking"] = "The provided unlocking bytecode exceeds the maximum bytecode length (10,000 bytes).";
    AuthenticationErrorCommon["exceededMaximumVmNumberLength"] = "Program attempted an OP_BIN2NUM operation on a byte sequence that cannot be encoded within the maximum VM Number length.";
    AuthenticationErrorCommon["exceededMaximumStackDepth"] = "Program exceeded the maximum stack depth (1,000 items).";
    AuthenticationErrorCommon["exceededMaximumStackItemLength"] = "Program attempted to push a stack item that exceeded the maximum stack item length (520 bytes).";
    AuthenticationErrorCommon["exceededMaximumOperationCount"] = "Program exceeded the maximum operation count (201 operations).";
    AuthenticationErrorCommon["exceedsMaximumMultisigPublicKeyCount"] = "Program called an OP_CHECKMULTISIG that exceeds the maximum public key count (20 public keys).";
    AuthenticationErrorCommon["failedVerify"] = "Program failed an OP_VERIFY operation.";
    AuthenticationErrorCommon["invalidStackIndex"] = "Tried to read from an invalid stack index.";
    AuthenticationErrorCommon["incompatibleLocktimeType"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation with an incompatible locktime type. The transaction locktime and required locktime must both refer to either a block height or a block time.";
    AuthenticationErrorCommon["incompatibleSequenceType"] = "Program called an OP_CHECKSEQUENCEVERIFY operation with an incompatible sequence type flag. The input sequence number and required sequence number must both use the same sequence locktime type.";
    AuthenticationErrorCommon["insufficientLength"] = "Program called an OP_NUM2BIN operation with an insufficient byte length to re-encode the provided number.";
    AuthenticationErrorCommon["insufficientPublicKeys"] = "Program called an OP_CHECKMULTISIG operation that requires signatures from more public keys than are provided.";
    AuthenticationErrorCommon["invalidNaturalNumber"] = "Invalid input: the key/signature count inputs for OP_CHECKMULTISIG require a natural number (n > 0).";
    AuthenticationErrorCommon["invalidProtocolBugValue"] = "The OP_CHECKMULTISIG protocol bug value must be a VM Number 0 (to comply with the \"NULLDUMMY\" rule).";
    AuthenticationErrorCommon["invalidPublicKeyEncoding"] = "Encountered an improperly encoded public key.";
    AuthenticationErrorCommon["invalidVmNumber"] = "Invalid input: this operation requires a valid VM Number.";
    AuthenticationErrorCommon["invalidSignatureEncoding"] = "Encountered an improperly encoded signature.";
    AuthenticationErrorCommon["invalidSplitIndex"] = "Program called an OP_SPLIT operation with an invalid index.";
    AuthenticationErrorCommon["invalidTransactionInputIndex"] = "Program attempted to read from an invalid transaction input index.";
    AuthenticationErrorCommon["invalidTransactionOutputIndex"] = "Program attempted to read from an invalid transaction output index.";
    AuthenticationErrorCommon["invalidTransactionUtxoIndex"] = "Program attempted to read from an invalid transaction UTXO index.";
    AuthenticationErrorCommon["locktimeDisabled"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation, but locktime is disabled for this transaction.";
    AuthenticationErrorCommon["mismatchedBitwiseOperandLength"] = "Program attempted a bitwise operation on operands of different lengths.";
    AuthenticationErrorCommon["malformedLockingBytecode"] = "The provided locking bytecode is malformed.";
    AuthenticationErrorCommon["malformedP2shBytecode"] = "Redeem bytecode was malformed prior to P2SH evaluation.";
    AuthenticationErrorCommon["malformedPush"] = "Program must be long enough to push the requested number of bytes.";
    AuthenticationErrorCommon["malformedUnlockingBytecode"] = "The provided unlocking bytecode is malformed.";
    AuthenticationErrorCommon["negativeLocktime"] = "Program called an OP_CHECKLOCKTIMEVERIFY or OP_CHECKSEQUENCEVERIFY operation with a negative locktime.";
    AuthenticationErrorCommon["nonEmptyControlStack"] = "The active bytecode completed with a non-empty control stack (missing `OP_ENDIF`).";
    AuthenticationErrorCommon["nonMinimalPush"] = "Push operations must use the smallest possible encoding.";
    AuthenticationErrorCommon["nonNullSignatureFailure"] = "Program failed a signature verification with a non-null signature (violating the \"NULLFAIL\" rule).";
    AuthenticationErrorCommon["overflowsVmNumberRange"] = "Program attempted an arithmetic operation which exceeds the range of VM Numbers.";
    AuthenticationErrorCommon["requiresCleanStack"] = "Program completed with an unexpected number of items on the stack (must be exactly 1).";
    AuthenticationErrorCommon["requiresPushOnly"] = "Unlocking bytecode may contain only push operations.";
    AuthenticationErrorCommon["schnorrSizedSignatureInCheckMultiSig"] = "Program used a schnorr-sized signature (65 bytes) in an OP_CHECKMULTISIG operation.";
    AuthenticationErrorCommon["unexpectedElse"] = "Encountered an OP_ELSE outside of an OP_IF ... OP_ENDIF block.";
    AuthenticationErrorCommon["unexpectedEndIf"] = "Encountered an OP_ENDIF that is not following a matching OP_IF.";
    AuthenticationErrorCommon["unknownOpcode"] = "Called an unknown opcode.";
    AuthenticationErrorCommon["unmatchedSequenceDisable"] = "Program called an OP_CHECKSEQUENCEVERIFY operation requiring the disable flag, but the input's sequence number is missing the disable flag.";
    AuthenticationErrorCommon["unsatisfiedLocktime"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation that requires a locktime greater than the transaction's locktime.";
    AuthenticationErrorCommon["unsatisfiedSequenceNumber"] = "Program called an OP_CHECKSEQUENCEVERIFY operation that requires a sequence number greater than the input's sequence number.";
    AuthenticationErrorCommon["unsuccessfulEvaluation"] = "Unsuccessful evaluation: completed with a non-truthy value on top of the stack.";
})(AuthenticationErrorCommon || (AuthenticationErrorCommon = {}));
/**
 * Applies the `error` to a `state`.
 *
 * @remarks
 * If the state already has an error, this method does not override it.
 * (Evaluation should end after the first encountered error, so further errors
 * aren't relevant.)
 */
export const applyError = (state, errorType, errorDetails) => ({
    ...state,
    error: state.error ?? formatError(errorType, errorDetails),
});
//# sourceMappingURL=errors.js.map