/**
 * This file is derived from https://github.com/jneen/parsimmon and
 * https://github.com/DefinitelyTyped/DefinitelyTyped.
 */
/* eslint-disable @typescript-eslint/unified-signatures, functional/prefer-property-signatures, functional/no-throw-statements, functional/no-conditional-statements, @typescript-eslint/no-this-alias, consistent-this, @typescript-eslint/ban-ts-comment, prefer-spread, func-names, @typescript-eslint/init-declarations, new-cap, guard-for-in, no-plusplus, functional/no-let, functional/no-loop-statements, @typescript-eslint/prefer-for-of, functional/immutable-data, @typescript-eslint/no-use-before-define, @typescript-eslint/strict-boolean-expressions, no-param-reassign, functional/no-expression-statements, functional/no-this-expressions, @typescript-eslint/no-explicit-any, func-style, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return, @typescript-eslint/naming-convention, @typescript-eslint/method-signature-style, @typescript-eslint/no-confusing-void-expression, prefer-arrow-callback, functional/no-return-void, @typescript-eslint/no-unsafe-argument, functional/functional-parameters */
// cspell: ignore accum
function Parsimmon(action) {
    // @ts-expect-error
    if (!(this instanceof Parsimmon)) {
        // @ts-expect-error
        return new Parsimmon(action);
    }
    // @ts-expect-error
    this._ = action;
}
const _ = Parsimmon.prototype;
// -*- Helpers -*-
function makeSuccess(index, value) {
    return {
        expected: [],
        furthest: -1,
        index,
        status: true,
        value,
    };
}
function makeFailure(index, expected) {
    expected = [expected];
    return {
        expected,
        furthest: index,
        index: -1,
        status: false,
        value: null,
    };
}
function mergeReplies(result, last) {
    if (!last) {
        return result;
    }
    if (result.furthest > last.furthest) {
        return result;
    }
    const expected = result.furthest === last.furthest
        ? union(result.expected, last.expected)
        : last.expected;
    return {
        expected,
        furthest: last.furthest,
        index: result.index,
        status: result.status,
        value: result.value,
    };
}
function makeLineColumnIndex(input, i) {
    const lines = input.slice(0, i).split('\n');
    /*
     * Note that unlike the character offset, the line and column offsets are
     * 1-based.
     */
    const lineWeAreUpTo = lines.length;
    const columnWeAreUpTo = lines[lines.length - 1].length + 1;
    return {
        column: columnWeAreUpTo,
        line: lineWeAreUpTo,
        offset: i,
    };
}
// Returns the sorted set union of two arrays of strings
function union(xs, ys) {
    const obj = {};
    for (let i = 0; i < xs.length; i++) {
        // @ts-expect-error
        obj[xs[i]] = true;
    }
    for (let j = 0; j < ys.length; j++) {
        // @ts-expect-error
        obj[ys[j]] = true;
    }
    const keys = [];
    for (const k in obj) {
        keys.push(k);
    }
    keys.sort();
    return keys;
}
// -*- Error Formatting -*-
function flags(re) {
    const s = String(re);
    return s.slice(s.lastIndexOf('/') + 1);
}
function anchoredRegexp(re) {
    return RegExp(`^(?:${re.source})`, flags(re));
}
// -*- Combinators -*-
function seq(...params) {
    const parsers = [].slice.call(params);
    const numParsers = parsers.length;
    return Parsimmon(function (input, i) {
        let result;
        const accum = new Array(numParsers);
        for (let j = 0; j < numParsers; j += 1) {
            result = mergeReplies(parsers[j]._(input, i), result);
            if (!result.status) {
                return result;
            }
            accum[j] = result.value;
            i = result.index;
        }
        return mergeReplies(makeSuccess(i, accum), result);
    });
}
function seqMap(...params) {
    const args = [].slice.call(params);
    const mapper = args.pop();
    return seq.apply(null, args).map(function (results) {
        // @ts-expect-error
        return mapper.apply(null, results);
    });
}
function createLanguage(parsers) {
    const language = {};
    for (const key in parsers) {
        (function (rule) {
            const func = function () {
                // @ts-expect-error
                return parsers[rule](language);
            };
            // @ts-expect-error
            language[rule] = lazy(func);
        })(key);
    }
    return language;
}
function alt(...params) {
    const parsers = [].slice.call(params);
    return Parsimmon(function (input, i) {
        let result;
        for (let j = 0; j < parsers.length; j += 1) {
            result = mergeReplies(parsers[j]._(input, i), result);
            if (result.status) {
                return result;
            }
        }
        return result;
    });
}
function sepBy(parser, separator) {
    return sepBy1(parser, separator).or(succeed([]));
}
function sepBy1(parser, separator) {
    const pairs = separator.then(parser).many();
    return seqMap(parser, pairs, function (r, rs) {
        return [r].concat(rs);
    });
}
// -*- Core Parsing Methods -*-
_.parse = function (input) {
    const result = this.skip(eof)._(input, 0);
    if (result.status) {
        return {
            status: true,
            value: result.value,
        };
    }
    return {
        expected: result.expected,
        index: makeLineColumnIndex(input, result.furthest),
        status: false,
    };
};
// -*- Other Methods -*-
_.or = function (alternative) {
    return alt(this, alternative);
};
_.then = function (next) {
    return seq(this, next).map(function (results) {
        return results[1];
    });
};
_.many = function () {
    const self = this;
    return Parsimmon(function (input, i) {
        const accum = [];
        let result;
        for (;;) {
            result = mergeReplies(self._(input, i), result);
            if (result.status) {
                /* c8 ignore next 6 */
                if (i === result.index) {
                    throw new Error('infinite loop detected in .many() parser --- calling .many() on ' +
                        'a parser that can accept zero characters is usually the cause');
                }
                i = result.index;
                accum.push(result.value);
            }
            else {
                return mergeReplies(makeSuccess(i, accum), result);
            }
        }
    });
};
_.map = function (fn) {
    const self = this;
    return Parsimmon(function (input, i) {
        const result = self._(input, i);
        if (!result.status) {
            return result;
        }
        return mergeReplies(makeSuccess(result.index, fn(result.value)), result);
    });
};
_.skip = function (next) {
    return seq(this, next).map(function (results) {
        return results[0];
    });
};
_.node = function (name) {
    return seqMap(index, this, index, function (start, value, end) {
        return {
            end,
            name,
            start,
            value,
        };
    });
};
_.sepBy = function (separator) {
    return sepBy(this, separator);
};
_.desc = function (expected) {
    expected = [expected];
    const self = this;
    return Parsimmon(function (input, i) {
        const reply = self._(input, i);
        if (!reply.status) {
            reply.expected = expected;
        }
        return reply;
    });
};
// -*- Constructors -*-
function string(str) {
    const expected = `'${str}'`;
    return Parsimmon(function (input, i) {
        const j = i + str.length;
        const head = input.slice(i, j);
        if (head === str) {
            return makeSuccess(j, head);
        }
        return makeFailure(i, expected);
    });
}
function regexp(re, group = 0) {
    const anchored = anchoredRegexp(re);
    const expected = String(re);
    return Parsimmon(function (input, i) {
        const match = anchored.exec(input.slice(i));
        if (match) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const fullMatch = match[0];
            const groupMatch = match[group];
            return makeSuccess(i + fullMatch.length, groupMatch);
        }
        return makeFailure(i, expected);
    });
}
function succeed(value) {
    return Parsimmon(function (__, i) {
        return makeSuccess(i, value);
    });
}
function lazy(f) {
    const parser = Parsimmon(function (input, i) {
        parser._ = f()._;
        return parser._(input, i);
    });
    return parser;
}
// -*- Base Parsers -*-
const index = Parsimmon(function (input, i) {
    return makeSuccess(i, makeLineColumnIndex(input, i));
});
const eof = Parsimmon(function (input, i) {
    if (i < input.length) {
        return makeFailure(i, 'EOF');
    }
    return makeSuccess(i, null);
});
const optWhitespace = regexp(/\s*/u).desc('optional whitespace');
const whitespace = regexp(/\s+/u).desc('whitespace');
export const P = {
    alt,
    createLanguage,
    index,
    lazy,
    makeFailure,
    makeSuccess,
    of: succeed,
    optWhitespace,
    regexp,
    sepBy,
    sepBy1,
    seq,
    seqMap,
    string,
    succeed,
    whitespace,
};
//# sourceMappingURL=parsimmon.js.map