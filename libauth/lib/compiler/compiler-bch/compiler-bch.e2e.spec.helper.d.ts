import type { BytecodeGenerationResult, CompilationContextBCH, CompilationData, CompilerConfiguration } from '../../lib.js';
/**
 * `m`
 */
export declare const hdPrivateKey = "xprv9s21ZrQH143K2PfMvkNViFc1fgumGqBew45JD8SxA59Jc5M66n3diqb92JjvaR61zT9P89Grys12kdtV4EFVo6tMwER7U2hcUmZ9VfMYPLC";
/**
 * `m`
 */
export declare const hdPublicKey = "xpub661MyMwAqRbcEsjq2muW5PYkDikFgHuWJGzu1WrZiQgHUsgEeKMtGducsZe1iRsGAGNGDzmWYDM69ya24LMyR7mDhtzqQsc286XEQfM2kkV";
/**
 * `m/0`
 */
export declare const privkey: Uint8Array;
/**
 * Uses `createCompiler` rather than `createCompilerBCH` for performance.
 */
export declare const expectCompilationResult: import("ava").Macro<[string, CompilationData, BytecodeGenerationResult<import("../../lib.js").AuthenticationProgramStateCommon>, ({
    [variableId: string]: import("../../lib.js").WalletTemplateVariable;
} | undefined)?, (Partial<CompilerConfiguration<CompilationContextBCH>> | undefined)?], unknown>;
//# sourceMappingURL=compiler-bch.e2e.spec.helper.d.ts.map