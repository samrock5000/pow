/* eslint-disable functional/no-conditional-statements, functional/no-let, functional/no-expression-statements, no-underscore-dangle, functional/no-try-statements, @typescript-eslint/no-magic-numbers, @typescript-eslint/max-params, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-assertion */
/**
 * Note, most of this method is translated and boiled-down from the wasm-pack
 * workflow. Significant changes to wasm-bindgen or wasm-pack build will likely
 * require modifications to this method.
 */
export const instantiateRustWasm = async (webassemblyBytes, expectedImportModuleName, hashExportName, initExportName, updateExportName, finalExportName) => {
    const wasm = (await WebAssembly.instantiate(webassemblyBytes, {
        [expectedImportModuleName]: {
            /**
             * This would only be called in cases where a `__wbindgen_malloc` failed.
             * Since `__wbindgen_malloc` isn't exposed to consumers, this error
             * can only be encountered if the code below is broken.
             */
            /* c8 ignore next 10 */
            // eslint-disable-next-line camelcase, @typescript-eslint/naming-convention
            __wbindgen_throw: (ptr, len) => {
                // eslint-disable-next-line functional/no-throw-statements
                throw new Error(
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                Array.from(getUint8Memory().subarray(ptr, ptr + len))
                    .map((num) => String.fromCharCode(num))
                    .join(''));
            },
        },
    })).instance.exports; // eslint-disable-line @typescript-eslint/no-explicit-any
    let cachedUint8Memory; // eslint-disable-line @typescript-eslint/init-declarations
    let cachedUint32Memory; // eslint-disable-line @typescript-eslint/init-declarations
    let cachedGlobalArgumentPtr; // eslint-disable-line @typescript-eslint/init-declarations
    const globalArgumentPtr = () => {
        if (cachedGlobalArgumentPtr === undefined) {
            cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
        }
        return cachedGlobalArgumentPtr;
    };
    /**
     * Must be hoisted for `__wbindgen_throw`.
     */
    // eslint-disable-next-line func-style
    function getUint8Memory() {
        if (cachedUint8Memory === undefined ||
            cachedUint8Memory.buffer !== wasm.memory.buffer) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cachedUint8Memory = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8Memory;
    }
    const getUint32Memory = () => {
        if (cachedUint32Memory === undefined ||
            cachedUint32Memory.buffer !== wasm.memory.buffer) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            cachedUint32Memory = new Uint32Array(wasm.memory.buffer);
        }
        return cachedUint32Memory;
    };
    const passArray8ToWasm = (array) => {
        const ptr = wasm.__wbindgen_malloc(array.length);
        getUint8Memory().set(array, ptr);
        return [ptr, array.length];
    };
    const getArrayU8FromWasm = (ptr, len) => getUint8Memory().subarray(ptr, ptr + len);
    const hash = (input) => {
        const [ptr0, len0] = passArray8ToWasm(input);
        const retPtr = globalArgumentPtr();
        try {
            wasm[hashExportName](retPtr, ptr0, len0);
            const mem = getUint32Memory();
            const ptr = mem[retPtr / 4];
            const len = mem[retPtr / 4 + 1];
            const realRet = getArrayU8FromWasm(ptr, len).slice();
            wasm.__wbindgen_free(ptr, len);
            return realRet;
        }
        finally {
            wasm.__wbindgen_free(ptr0, len0);
        }
    };
    const init = () => {
        const retPtr = globalArgumentPtr();
        wasm[initExportName](retPtr);
        const mem = getUint32Memory();
        const ptr = mem[retPtr / 4];
        const len = mem[retPtr / 4 + 1];
        const realRet = getArrayU8FromWasm(ptr, len).slice();
        wasm.__wbindgen_free(ptr, len);
        return realRet;
    };
    const update = (rawState, input) => {
        const [ptr0, len0] = passArray8ToWasm(rawState);
        const [ptr1, len1] = passArray8ToWasm(input);
        const retPtr = globalArgumentPtr();
        try {
            wasm[updateExportName](retPtr, ptr0, len0, ptr1, len1);
            const mem = getUint32Memory();
            const ptr = mem[retPtr / 4];
            const len = mem[retPtr / 4 + 1];
            const realRet = getArrayU8FromWasm(ptr, len).slice();
            wasm.__wbindgen_free(ptr, len);
            return realRet;
        }
        finally {
            rawState.set(getUint8Memory().subarray(ptr0 / 1, ptr0 / 1 + len0));
            wasm.__wbindgen_free(ptr0, len0);
            wasm.__wbindgen_free(ptr1, len1);
        }
    };
    const final = (rawState) => {
        const [ptr0, len0] = passArray8ToWasm(rawState);
        const retPtr = globalArgumentPtr();
        try {
            wasm[finalExportName](retPtr, ptr0, len0);
            const mem = getUint32Memory();
            const ptr = mem[retPtr / 4];
            const len = mem[retPtr / 4 + 1];
            const realRet = getArrayU8FromWasm(ptr, len).slice();
            wasm.__wbindgen_free(ptr, len);
            return realRet;
        }
        finally {
            rawState.set(getUint8Memory().subarray(ptr0 / 1, ptr0 / 1 + len0));
            wasm.__wbindgen_free(ptr0, len0);
        }
    };
    return {
        final,
        hash,
        init,
        update,
    };
};
/* eslint-enable functional/no-conditional-statements, functional/no-let, functional/no-expression-statements, no-underscore-dangle, functional/no-try-statements, @typescript-eslint/no-magic-numbers, @typescript-eslint/max-params, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-assertion */
//# sourceMappingURL=hashes.js.map