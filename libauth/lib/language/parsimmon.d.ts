/**
 * This file is derived from https://github.com/jneen/parsimmon and
 * https://github.com/DefinitelyTyped/DefinitelyTyped.
 */
type Index = {
    /** zero-based character offset */
    offset: number;
    /** one-based line offset */
    line: number;
    /** one-based column offset */
    column: number;
};
type Mark<T> = {
    start: Index;
    end: Index;
    value: T;
};
type Node<Name extends string, T> = Mark<T> & {
    name: Name;
};
type Result<T> = Failure | Success<T>;
type Success<T> = {
    status: true;
    value: T;
};
type Failure = {
    status: false;
    expected: string[];
    index: Index;
};
type TypedRule<TLanguageSpec> = {
    [P in keyof TLanguageSpec]: (r: TypedLanguage<TLanguageSpec>) => Parser<TLanguageSpec[P]>;
};
type TypedLanguage<TLanguageSpec> = {
    [P in keyof TLanguageSpec]: Parser<TLanguageSpec[P]>;
};
type Parser<T> = {
    parse(input: string): Result<T>;
    or<U>(otherParser: Parser<U>): Parser<T | U>;
    then<U>(call: (result: T) => Parser<U>): Parser<U>;
    then<U>(anotherParser: Parser<U>): Parser<U>;
    map<U>(call: (result: T) => U): Parser<U>;
    skip<U>(otherParser: Parser<U>): Parser<T>;
    many(): Parser<T[]>;
    mark(): Parser<Mark<T>>;
    node<Name extends string>(name: Name): Parser<Node<Name, T>>;
    desc(description: string[] | string): Parser<T>;
    sepBy<U>(separator: Parser<U>): Parser<T[]>;
};
declare function makeSuccess(index: any, value: any): {
    expected: never[];
    furthest: number;
    index: any;
    status: boolean;
    value: any;
};
declare function makeFailure(index: any, expected: any): {
    expected: any;
    furthest: any;
    index: number;
    status: boolean;
    value: null;
};
declare function seq(...params: any[]): any;
declare function seqMap<T, U>(p1: Parser<T>, cb: (a1: T) => U): Parser<U>;
declare function seqMap<T, U, V>(p1: Parser<T>, p2: Parser<U>, cb: (a1: T, a2: U) => V): Parser<V>;
declare function seqMap<T, U, V, W>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, cb: (a1: T, a2: U, a3: V) => W): Parser<W>;
declare function seqMap<T, U, V, W, X>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, cb: (a1: T, a2: U, a3: V, a4: W) => X): Parser<X>;
declare function seqMap<T, U, V, W, X, Y>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X) => Y): Parser<Y>;
declare function createLanguage<TLanguageSpec>(parsers: TypedRule<TLanguageSpec>): TypedLanguage<TLanguageSpec>;
declare function alt(...params: any[]): any;
declare function sepBy(parser: any, separator: any): Parser<unknown>;
declare function sepBy1(parser: any, separator: any): Parser<any[]>;
declare function string(str: string): Parser<string>;
declare function regexp(re: RegExp, group?: number): Parser<string>;
declare function succeed(value: any): any;
declare function lazy(f: any): any;
export declare const P: {
    alt: typeof alt;
    createLanguage: typeof createLanguage;
    index: any;
    lazy: typeof lazy;
    makeFailure: typeof makeFailure;
    makeSuccess: typeof makeSuccess;
    of: typeof succeed;
    optWhitespace: Parser<string>;
    regexp: typeof regexp;
    sepBy: typeof sepBy;
    sepBy1: typeof sepBy1;
    seq: typeof seq;
    seqMap: typeof seqMap;
    string: typeof string;
    succeed: typeof succeed;
    whitespace: Parser<string>;
};
export {};
//# sourceMappingURL=parsimmon.d.ts.map