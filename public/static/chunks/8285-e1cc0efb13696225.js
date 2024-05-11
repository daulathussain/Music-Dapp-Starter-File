"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8285], {
        58285: function(e, t, o) {
            o.d(t, {
                Mr: function() {
                    return ek
                },
                OO: function() {
                    return ec
                }
            });
            var n, r = o(97352),
                i = o(64353);

            function compose(e, t) {
                return o => e(t(o))
            }

            function thrush(e, t) {
                return t(e)
            }

            function tup(...e) {
                return e
            }

            function call(e) {
                e()
            }

            function isDefined(e) {
                return void 0 !== e
            }

            function noop() {}

            function reset(e) {
                e(2)
            }

            function getValue(e) {
                return e(4)
            }

            function connect(e, t) {
                return e(1, e => t(0, e))
            }

            function handleNext(e, t) {
                let o = e(1, e => {
                    o(), t(e)
                });
                return o
            }

            function stream() {
                let e = [];
                return (t, o) => {
                    switch (t) {
                        case 2:
                            e.splice(0, e.length);
                            return;
                        case 1:
                            return e.push(o), () => {
                                let t = e.indexOf(o);
                                t > -1 && e.splice(t, 1)
                            };
                        case 0:
                            e.slice().forEach(e => {
                                e(o)
                            });
                            return;
                        default:
                            throw Error(`unrecognized action ${t}`)
                    }
                }
            }

            function statefulStream(e) {
                let t = e,
                    o = stream();
                return (e, n) => {
                    switch (e) {
                        case 1:
                            n(t);
                            break;
                        case 0:
                            t = n;
                            break;
                        case 4:
                            return t
                    }
                    return o(e, n)
                }
            }

            function streamFromEmitter(e) {
                var t;
                return connect(e, t = stream()), t
            }

            function statefulStreamFromEmitter(e, t) {
                var o;
                return connect(e, o = statefulStream(t)), o
            }

            function pipe(e, ...t) {
                let o = function(...e) {
                    return t => e.reduceRight(thrush, t)
                }(...t);
                return (t, n) => {
                    switch (t) {
                        case 1:
                            return e(1, o(n));
                        case 2:
                            reset(e);
                            return
                    }
                }
            }

            function defaultComparator(e, t) {
                return e === t
            }

            function distinctUntilChanged(e = defaultComparator) {
                let t;
                return o => n => {
                    e(t, n) || (t = n, o(n))
                }
            }

            function filter(e) {
                return t => o => {
                    e(o) && t(o)
                }
            }

            function map(e) {
                return t => compose(t, e)
            }

            function mapTo(e) {
                return t => () => t(e)
            }

            function scan(e, t) {
                return o => n => o(t = e(t, n))
            }

            function skip(e) {
                return t => o => {
                    e > 0 ? e-- : t(o)
                }
            }

            function throttleTime(e) {
                let t, o = null;
                return n => r => {
                    o = r, t || (t = setTimeout(() => {
                        t = void 0, n(o)
                    }, e))
                }
            }

            function debounceTime(e) {
                let t, o;
                return n => r => {
                    t = r, o && clearTimeout(o), o = setTimeout(() => {
                        n(t)
                    }, e)
                }
            }

            function withLatestFrom(...e) {
                let t = Array(e.length),
                    o = 0,
                    n = null,
                    r = Math.pow(2, e.length) - 1;
                return e.forEach((e, i) => {
                    let l = Math.pow(2, i);
                    e(1, e => {
                        let a = o;
                        o |= l, t[i] = e, a !== r && o === r && n && (n(), n = null)
                    })
                }), e => i => {
                    let call2 = () => e([i].concat(t));
                    o === r ? call2() : n = call2
                }
            }

            function merge(...e) {
                return function(t, o) {
                    switch (t) {
                        case 1:
                            return function(...e) {
                                return () => {
                                    e.map(call)
                                }
                            }(...e.map(e => e(1, o)));
                        case 2:
                            return;
                        default:
                            throw Error(`unrecognized action ${t}`)
                    }
                }
            }

            function duc(e, t = defaultComparator) {
                return pipe(e, distinctUntilChanged(t))
            }

            function combineLatest(...e) {
                let t = stream(),
                    o = Array(e.length),
                    n = 0,
                    r = Math.pow(2, e.length) - 1;
                return e.forEach((e, i) => {
                        let l = Math.pow(2, i);
                        e(1, e => {
                            o[i] = e, (n |= l) === r && t(0, o)
                        })
                    }),
                    function(e, i) {
                        switch (e) {
                            case 1:
                                return n === r && i(o), t(1, i);
                            case 2:
                                return reset(t);
                            default:
                                throw Error(`unrecognized action ${e}`)
                        }
                    }
            }

            function system(e, t = [], {
                singleton: o
            } = {
                singleton: !0
            }) {
                return {
                    id: id(),
                    constructor: e,
                    dependencies: t,
                    singleton: o
                }
            }
            let id = () => Symbol(),
                l = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function systemToComponent(e, t, o) {
                let n = Object.keys(t.required || {}),
                    i = Object.keys(t.optional || {}),
                    a = Object.keys(t.methods || {}),
                    s = Object.keys(t.events || {}),
                    u = r.createContext({});

                function applyPropsToSystem(e, o) {
                    for (let r of (e.propsReady && (0, e.propsReady)(0, !1), n)) {
                        let n = e[t.required[r]];
                        n(0, o[r])
                    }
                    for (let n of i)
                        if (n in o) {
                            let r = e[t.optional[n]];
                            r(0, o[n])
                        }
                    e.propsReady && (0, e.propsReady)(0, !0)
                }
                let m = r.forwardRef((m, c) => {
                    var p;
                    let {
                        children: d,
                        ...f
                    } = m, [h] = r.useState(() => {
                        var t;
                        return applyPropsToSystem(t = function(e) {
                            let t = new Map,
                                _init = ({
                                    id: e,
                                    constructor: o,
                                    dependencies: n,
                                    singleton: r
                                }) => {
                                    if (r && t.has(e)) return t.get(e);
                                    let i = o(n.map(e => _init(e)));
                                    return r && t.set(e, i), i
                                };
                            return _init(e)
                        }(e), f), t
                    }), [g] = r.useState(() => {
                        var e;
                        return e = h, s.reduce((o, n) => (o[n] = function(e) {
                            let t, o;
                            let cleanup = () => t && t();
                            return function(n, r) {
                                switch (n) {
                                    case 1:
                                        if (!r) return cleanup(), noop;
                                        if (o === r) return;
                                        return cleanup(), o = r, t = e(1, r);
                                    case 2:
                                        cleanup(), o = null;
                                        return;
                                    default:
                                        throw Error(`unrecognized action ${n}`)
                                }
                            }
                        }(e[t.events[n]]), o), {})
                    });
                    return l(() => {
                        for (let e of s) e in f && (0, g[e])(1, f[e]);
                        return () => {
                            Object.values(g).map(reset)
                        }
                    }, [f, g, h]), l(() => {
                        applyPropsToSystem(h, f)
                    }), r.useImperativeHandle(c, (p = a.reduce((e, o) => (e[o] = e => {
                        let n = h[t.methods[o]];
                        n(0, e)
                    }, e), {}), () => p)), r.createElement(u.Provider, {
                        value: h
                    }, o ? r.createElement(o, function(e, t) {
                        let o = {},
                            n = {},
                            r = 0,
                            i = e.length;
                        for (; r < i;) n[e[r]] = 1, r += 1;
                        for (let e in t) n.hasOwnProperty(e) || (o[e] = t[e]);
                        return o
                    }([...n, ...i, ...s], f), d) : d)
                });
                return {
                    Component: m,
                    usePublisher: e => {
                        var t;
                        return r.useCallback((t = r.useContext(u)[e], e => {
                            var o, n;
                            (o = t)(0, n = e)
                        }), [e])
                    },
                    useEmitterValue: e => {
                        let t = r.useContext(u),
                            o = t[e],
                            [n, i] = r.useState(() => o(4));
                        return l(() => o(1, e => {
                            e !== n && i(() => e)
                        }), [o, n]), n
                    },
                    useEmitter: (e, t) => {
                        let o = r.useContext(u),
                            n = o[e];
                        l(() => n(1, t), [t, n])
                    }
                }
            }
            let a = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;
            var s = ((n = s || {})[n.DEBUG = 0] = "DEBUG", n[n.INFO = 1] = "INFO", n[n.WARN = 2] = "WARN", n[n.ERROR = 3] = "ERROR", n);
            let u = {
                    0: "debug",
                    1: "log",
                    2: "warn",
                    3: "error"
                },
                getGlobalThis = () => "undefined" == typeof globalThis ? window : globalThis,
                m = system(() => {
                    let e = statefulStream(3),
                        t = statefulStream((t, o, n = 1) => {
                            var r;
                            let i = null != (r = getGlobalThis().VIRTUOSO_LOG_LEVEL) ? r : e(4);
                            n >= i && console[u[n]]("%creact-virtuoso: %c%s %o", "color: #0253b3; font-weight: bold", "color: initial", t, o)
                        });
                    return {
                        log: t,
                        logLevel: e
                    }
                }, [], {
                    singleton: !0
                });

            function useSizeWithElRef(e, t = !0) {
                let o = r.useRef(null),
                    callbackRef = e => {};
                if ("undefined" != typeof ResizeObserver) {
                    let n = r.useMemo(() => new ResizeObserver(t => {
                        let o = t[0].target;
                        null !== o.offsetParent && e(o)
                    }), [e]);
                    callbackRef = e => {
                        e && t ? (n.observe(e), o.current = e) : (o.current && n.unobserve(o.current), o.current = null)
                    }
                }
                return {
                    ref: o,
                    callbackRef
                }
            }

            function useSize(e, t = !0) {
                return useSizeWithElRef(e, t).callbackRef
            }

            function useChangedListContentsSizes(e, t, o, n, i, l, a) {
                let u = r.useCallback(o => {
                    var r;
                    let u = function(e, t, o, n) {
                            let r = e.length;
                            if (0 === r) return null;
                            let i = [];
                            for (let l = 0; l < r; l++) {
                                let r = e.item(l);
                                if (!r || void 0 === r.dataset.index) continue;
                                let a = parseInt(r.dataset.index),
                                    u = parseFloat(r.dataset.knownSize),
                                    m = t(r, o);
                                if (0 === m && n("Zero-sized element, this should not happen", {
                                        child: r
                                    }, s.ERROR), m === u) continue;
                                let c = i[i.length - 1];
                                0 === i.length || c.size !== m || c.endIndex !== a - 1 ? i.push({
                                    startIndex: a,
                                    endIndex: a,
                                    size: m
                                }) : i[i.length - 1].endIndex++
                            }
                            return i
                        }(o.children, t, "offsetHeight", i),
                        m = o.parentElement;
                    for (; !m.dataset.virtuosoScroller;) m = m.parentElement;
                    let c = "window" === m.lastElementChild.dataset.viewportType,
                        p = a ? a.scrollTop : c ? window.pageYOffset || document.documentElement.scrollTop : m.scrollTop,
                        d = a ? a.scrollHeight : c ? document.documentElement.scrollHeight : m.scrollHeight,
                        f = a ? a.offsetHeight : c ? window.innerHeight : m.offsetHeight;
                    n({
                        scrollTop: Math.max(p, 0),
                        scrollHeight: d,
                        viewportHeight: f
                    }), null == l || l(("normal" === (r = getComputedStyle(o).rowGap) || (null == r ? void 0 : r.endsWith("px")) || i("row-gap was not resolved to pixel value correctly", r, s.WARN), "normal" === r) ? 0 : parseInt(null != r ? r : "0", 10)), null !== u && e(u)
                }, [e, t, i, l, a, n]);
                return useSizeWithElRef(u, o)
            }

            function correctItemSize(e, t) {
                return Math.round(e.getBoundingClientRect()[t])
            }

            function approximatelyEqual(e, t) {
                return 1.01 > Math.abs(e - t)
            }

            function useScrollTop(e, t, o, n = noop, l) {
                let a = r.useRef(null),
                    s = r.useRef(null),
                    u = r.useRef(null),
                    m = r.useCallback(o => {
                        let n = o.target,
                            r = n === window || n === document,
                            l = r ? window.pageYOffset || document.documentElement.scrollTop : n.scrollTop,
                            a = r ? document.documentElement.scrollHeight : n.scrollHeight,
                            m = r ? window.innerHeight : n.offsetHeight,
                            call2 = () => {
                                e({
                                    scrollTop: Math.max(l, 0),
                                    scrollHeight: a,
                                    viewportHeight: m
                                })
                            };
                        o.suppressFlushSync ? call2() : i.flushSync(call2), null !== s.current && (l === s.current || l <= 0 || l === a - m) && (s.current = null, t(!0), u.current && (clearTimeout(u.current), u.current = null))
                    }, [e, t]);
                return r.useEffect(() => {
                    let e = l || a.current;
                    return n(l || a.current), m({
                        target: e,
                        suppressFlushSync: !0
                    }), e.addEventListener("scroll", m, {
                        passive: !0
                    }), () => {
                        n(null), e.removeEventListener("scroll", m)
                    }
                }, [a, m, o, n, l]), {
                    scrollerRef: a,
                    scrollByCallback: function(e) {
                        a.current.scrollBy(e)
                    },
                    scrollToCallback: function(o) {
                        let n, r, i;
                        let l = a.current;
                        if (!l || "offsetHeight" in l && 0 === l.offsetHeight) return;
                        let m = "smooth" === o.behavior;
                        l === window ? (r = Math.max(correctItemSize(document.documentElement, "height"), document.documentElement.scrollHeight), n = window.innerHeight, i = document.documentElement.scrollTop) : (r = l.scrollHeight, n = correctItemSize(l, "height"), i = l.scrollTop);
                        let c = r - n;
                        if (o.top = Math.ceil(Math.max(Math.min(c, o.top), 0)), approximatelyEqual(n, r) || o.top === i) {
                            e({
                                scrollTop: i,
                                scrollHeight: r,
                                viewportHeight: n
                            }), m && t(!0);
                            return
                        }
                        m ? (s.current = o.top, u.current && clearTimeout(u.current), u.current = setTimeout(() => {
                            u.current = null, s.current = null, t(!0)
                        }, 1e3)) : s.current = null, l.scrollTo(o)
                    }
                }
            }
            let c = system(() => {
                    let e = stream(),
                        t = stream(),
                        o = statefulStream(0),
                        n = stream(),
                        r = statefulStream(0),
                        i = stream(),
                        l = stream(),
                        a = statefulStream(0),
                        s = statefulStream(0),
                        u = statefulStream(0),
                        m = statefulStream(0),
                        c = stream(),
                        p = stream(),
                        d = statefulStream(!1);
                    return connect(pipe(e, map(({
                        scrollTop: e
                    }) => e)), t), connect(pipe(e, map(({
                        scrollHeight: e
                    }) => e)), l), connect(t, r), {
                        scrollContainerState: e,
                        scrollTop: t,
                        viewportHeight: i,
                        headerHeight: a,
                        fixedHeaderHeight: s,
                        fixedFooterHeight: u,
                        footerHeight: m,
                        scrollHeight: l,
                        smoothScrollTargetReached: n,
                        scrollTo: c,
                        scrollBy: p,
                        statefulScrollTop: r,
                        deviation: o,
                        scrollingInProgress: d
                    }
                }, [], {
                    singleton: !0
                }),
                p = {
                    lvl: 0
                };

            function newAANode(e, t, o, n = p, r = p) {
                return {
                    k: e,
                    v: t,
                    lvl: o,
                    l: n,
                    r
                }
            }

            function empty(e) {
                return e === p
            }

            function find(e, t) {
                return empty(e) ? void 0 : t === e.k ? e.v : t < e.k ? find(e.l, t) : find(e.r, t)
            }

            function findMaxKeyValue(e, t, o = "k") {
                if (empty(e)) return [-1 / 0, void 0];
                if (Number(e[o]) === t) return [e.k, e.v];
                if (Number(e[o]) < t) {
                    let n = findMaxKeyValue(e.r, t, o);
                    return n[0] === -1 / 0 ? [e.k, e.v] : n
                }
                return findMaxKeyValue(e.l, t, o)
            }

            function insert(e, t, o) {
                var n, r;
                return empty(e) ? newAANode(t, o, 1) : t === e.k ? clone(e, {
                    k: t,
                    v: o
                }) : t < e.k ? split(skew(clone(e, {
                    l: insert(e.l, t, o)
                }))) : split(skew(clone(e, {
                    r: insert(e.r, t, o)
                })))
            }

            function walk(e) {
                return empty(e) ? [] : [...walk(e.l), {
                    k: e.k,
                    v: e.v
                }, ...walk(e.r)]
            }

            function clone(e, t) {
                return newAANode(void 0 !== t.k ? t.k : e.k, void 0 !== t.v ? t.v : e.v, void 0 !== t.lvl ? t.lvl : e.lvl, void 0 !== t.l ? t.l : e.l, void 0 !== t.r ? t.r : e.r)
            }

            function isSingle(e) {
                return empty(e) || e.lvl > e.r.lvl
            }

            function adjust(e) {
                let {
                    l: t,
                    r: o,
                    lvl: n
                } = e;
                if (o.lvl >= n - 1 && t.lvl >= n - 1) return e;
                if (n > o.lvl + 1) {
                    if (isSingle(t)) return skew(clone(e, {
                        lvl: n - 1
                    }));
                    if (!empty(t) && !empty(t.r)) return clone(t.r, {
                        l: clone(t, {
                            r: t.r.l
                        }),
                        r: clone(e, {
                            l: t.r.r,
                            lvl: n - 1
                        }),
                        lvl: n
                    });
                    throw Error("Unexpected empty nodes")
                }
                if (isSingle(e)) return split(clone(e, {
                    lvl: n - 1
                }));
                if (empty(o) || empty(o.l)) throw Error("Unexpected empty nodes"); {
                    let t = o.l,
                        r = isSingle(t) ? o.lvl - 1 : o.lvl;
                    return clone(t, {
                        l: clone(e, {
                            r: t.l,
                            lvl: n - 1
                        }),
                        r: split(clone(o, {
                            l: t.r,
                            lvl: r
                        })),
                        lvl: t.lvl + 1
                    })
                }
            }

            function rangesWithin(e, t, o) {
                if (empty(e)) return [];
                let n = findMaxKeyValue(e, t)[0];
                return arrayToRanges(function walkWithin(e, t, o) {
                    if (empty(e)) return [];
                    let {
                        k: n,
                        v: r,
                        l: i,
                        r: l
                    } = e, a = [];
                    return n > t && (a = a.concat(walkWithin(i, t, o))), n >= t && n <= o && a.push({
                        k: n,
                        v: r
                    }), n <= o && (a = a.concat(walkWithin(l, t, o))), a
                }(e, n, o), ({
                    k: e,
                    v: t
                }) => ({
                    index: e,
                    value: t
                }))
            }

            function arrayToRanges(e, t) {
                let o = e.length;
                if (0 === o) return [];
                let {
                    index: n,
                    value: r
                } = t(e[0]), i = [];
                for (let l = 1; l < o; l++) {
                    let {
                        index: o,
                        value: a
                    } = t(e[l]);
                    i.push({
                        start: n,
                        end: o - 1,
                        value: r
                    }), n = o, r = a
                }
                return i.push({
                    start: n,
                    end: 1 / 0,
                    value: r
                }), i
            }

            function split(e) {
                let {
                    r: t,
                    lvl: o
                } = e;
                return empty(t) || empty(t.r) || t.lvl !== o || t.r.lvl !== o ? e : clone(t, {
                    l: clone(e, {
                        r: t.l
                    }),
                    lvl: o + 1
                })
            }

            function skew(e) {
                let {
                    l: t
                } = e;
                return empty(t) || t.lvl !== e.lvl ? e : clone(t, {
                    r: clone(e, {
                        l: t.r
                    })
                })
            }

            function findIndexOfClosestSmallerOrEqual(e, t, o, n = 0) {
                let r = e.length - 1;
                for (; n <= r;) {
                    let i = Math.floor((n + r) / 2),
                        l = e[i],
                        a = o(l, t);
                    if (0 === a) return i;
                    if (-1 === a) {
                        if (r - n < 2) return i - 1;
                        r = i - 1
                    } else {
                        if (r === n) return i;
                        n = i + 1
                    }
                }
                throw Error(`Failed binary finding record in array - ${e.join(",")}, searched for ${t}`)
            }
            let d = system(() => {
                let e = statefulStream(!1);
                return {
                    recalcInProgress: e
                }
            }, [], {
                singleton: !0
            });

            function affectedGroupCount(e, t) {
                let o = 0,
                    n = 0;
                for (; o < e;) o += t[n + 1] - t[n] - 1, n++;
                let r = o === e;
                return n - (r ? 0 : 1)
            }

            function indexComparator({
                index: e
            }, t) {
                return t === e ? 0 : t < e ? -1 : 1
            }

            function offsetComparator({
                offset: e
            }, t) {
                return t === e ? 0 : t < e ? -1 : 1
            }

            function offsetPointParser(e) {
                return {
                    index: e.index,
                    value: e
                }
            }

            function createOffsetTree(e, t, o, n) {
                let r = e,
                    i = 0,
                    l = 0,
                    a = 0,
                    s = 0;
                if (0 !== t) {
                    s = findIndexOfClosestSmallerOrEqual(r, t - 1, indexComparator);
                    let e = r[s];
                    a = e.offset;
                    let n = findMaxKeyValue(o, t - 1);
                    i = n[0], l = n[1], r.length && r[s].size === findMaxKeyValue(o, t)[1] && (s -= 1), r = r.slice(0, s + 1)
                } else r = [];
                for (let {
                        start: e,
                        value: s
                    } of rangesWithin(o, t, 1 / 0)) {
                    let t = e - i,
                        o = t * l + a + t * n;
                    r.push({
                        offset: o,
                        size: s,
                        index: e
                    }), i = e, a = o, l = s
                }
                return {
                    offsetTree: r,
                    lastIndex: i,
                    lastOffset: a,
                    lastSize: l
                }
            }

            function sizeStateReducer(e, [t, o, n, r]) {
                t.length > 0 && n("received item sizes", t, s.DEBUG);
                let i = e.sizeTree,
                    l = i,
                    a = 0;
                if (o.length > 0 && empty(i) && 2 === t.length) {
                    let e = t[0].size,
                        n = t[1].size;
                    l = o.reduce((t, o) => insert(insert(t, o, e), o + 1, n), l)
                } else [l, a] = function(e, t) {
                    let o = empty(e) ? 0 : 1 / 0;
                    for (let n of t) {
                        let {
                            size: t,
                            startIndex: r,
                            endIndex: i
                        } = n;
                        if (o = Math.min(o, r), empty(e)) {
                            e = insert(e, 0, t);
                            continue
                        }
                        let l = rangesWithin(e, r - 1, i + 1);
                        if (l.some(function(e) {
                                let {
                                    size: t,
                                    startIndex: o,
                                    endIndex: n
                                } = e;
                                return e => e.start === o && (e.end === n || e.end === 1 / 0) && e.value === t
                            }(n))) continue;
                        let a = !1,
                            s = !1;
                        for (let {
                                start: o,
                                end: n,
                                value: r
                            } of l) a ? (i >= o || t === r) && (e = function remove(e, t) {
                            if (empty(e)) return p;
                            let {
                                k: o,
                                l: n,
                                r
                            } = e;
                            if (t === o) {
                                if (empty(n)) return r;
                                if (empty(r)) return n; {
                                    let [t, o] = function last(e) {
                                        return empty(e.r) ? [e.k, e.v] : last(e.r)
                                    }(n);
                                    return adjust(clone(e, {
                                        k: t,
                                        v: o,
                                        l: function deleteLast(e) {
                                            return empty(e.r) ? e.l : adjust(clone(e, {
                                                r: deleteLast(e.r)
                                            }))
                                        }(n)
                                    }))
                                }
                            }
                            return t < o ? adjust(clone(e, {
                                l: remove(n, t)
                            })) : adjust(clone(e, {
                                r: remove(r, t)
                            }))
                        }(e, o)) : (s = r !== t, a = !0), n > i && i >= o && r !== t && (e = insert(e, i + 1, r));
                        s && (e = insert(e, r, t))
                    }
                    return [e, o]
                }(l, t);
                if (l === i) return e;
                let {
                    offsetTree: u,
                    lastIndex: m,
                    lastSize: c,
                    lastOffset: d
                } = createOffsetTree(e.offsetTree, a, l, r);
                return {
                    sizeTree: l,
                    offsetTree: u,
                    lastIndex: m,
                    lastOffset: d,
                    lastSize: c,
                    groupOffsetTree: o.reduce((e, t) => insert(e, t, offsetOf(t, u, r)), p),
                    groupIndices: o
                }
            }

            function offsetOf(e, t, o) {
                if (0 === t.length) return 0;
                let {
                    offset: n,
                    index: r,
                    size: i
                } = t[findIndexOfClosestSmallerOrEqual(t, e, indexComparator)], l = e - r, a = i * l + (l - 1) * o + n;
                return a > 0 ? a + o : a
            }

            function originalIndexFromLocation(e, t, o) {
                if (void 0 !== e.groupIndex) return t.groupIndices[e.groupIndex] + 1; {
                    let n = "LAST" === e.index ? o : e.index,
                        r = originalIndexFromItemIndex(n, t);
                    return Math.max(0, r, Math.min(o, r))
                }
            }

            function originalIndexFromItemIndex(e, t) {
                if (!hasGroups(t)) return e;
                let o = 0;
                for (; t.groupIndices[o] <= e + o;) o++;
                return e + o
            }

            function hasGroups(e) {
                return !empty(e.groupOffsetTree)
            }
            let f = {
                    offsetHeight: "height",
                    offsetWidth: "width"
                },
                h = system(([{
                    log: e
                }, {
                    recalcInProgress: t
                }]) => {
                    let o = stream(),
                        n = stream(),
                        r = statefulStreamFromEmitter(n, 0),
                        i = stream(),
                        l = stream(),
                        a = statefulStream(0),
                        u = statefulStream([]),
                        m = statefulStream(void 0),
                        c = statefulStream(void 0),
                        d = statefulStream((e, t) => correctItemSize(e, f[t])),
                        h = statefulStream(void 0),
                        g = statefulStream(0),
                        S = {
                            offsetTree: [],
                            sizeTree: p,
                            groupOffsetTree: p,
                            lastIndex: 0,
                            lastOffset: 0,
                            lastSize: 0,
                            groupIndices: []
                        },
                        x = statefulStreamFromEmitter(pipe(o, withLatestFrom(u, e, g), scan(sizeStateReducer, S), distinctUntilChanged()), S),
                        w = statefulStreamFromEmitter(pipe(u, distinctUntilChanged(), scan((e, t) => ({
                            prev: e.current,
                            current: t
                        }), {
                            prev: [],
                            current: []
                        }), map(({
                            prev: e
                        }) => e)), []);
                    connect(pipe(u, filter(e => e.length > 0), withLatestFrom(x, g), map(([e, t, o]) => {
                        let n = e.reduce((e, n, r) => insert(e, n, offsetOf(n, t.offsetTree, o) || r), p);
                        return { ...t,
                            groupIndices: e,
                            groupOffsetTree: n
                        }
                    })), x), connect(pipe(n, withLatestFrom(x), filter(([e, {
                        lastIndex: t
                    }]) => e < t), map(([e, {
                        lastIndex: t,
                        lastSize: o
                    }]) => [{
                        startIndex: e,
                        endIndex: t,
                        size: o
                    }])), o), connect(m, c);
                    let I = statefulStreamFromEmitter(pipe(m, map(e => void 0 === e)), !0);
                    connect(pipe(c, filter(e => void 0 !== e && empty(x(4).sizeTree)), map(e => [{
                        startIndex: 0,
                        endIndex: 0,
                        size: e
                    }])), o);
                    let T = streamFromEmitter(pipe(o, withLatestFrom(x), scan(({
                        sizes: e
                    }, [t, o]) => ({
                        changed: o !== e,
                        sizes: o
                    }), {
                        changed: !1,
                        sizes: S
                    }), map(e => e.changed)));
                    pipe(a, scan((e, t) => ({
                        diff: e.prev - t,
                        prev: t
                    }), {
                        diff: 0,
                        prev: 0
                    }), map(e => e.diff))(1, e => {
                        let {
                            groupIndices: o
                        } = x(4);
                        if (e > 0) t(0, !0), i(0, e + affectedGroupCount(e, o));
                        else if (e < 0) {
                            let t = w(4);
                            t.length > 0 && (e -= affectedGroupCount(-e, t)), l(0, e)
                        }
                    }), pipe(a, withLatestFrom(e))(1, ([e, t]) => {
                        e < 0 && t("`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value", {
                            firstItemIndex: a
                        }, s.ERROR)
                    });
                    let v = streamFromEmitter(i);
                    connect(pipe(i, withLatestFrom(x), map(([e, t]) => {
                        let o = t.groupIndices.length > 0,
                            n = [],
                            r = t.lastSize;
                        if (o) {
                            let o = find(t.sizeTree, 0),
                                i = 0,
                                l = 0;
                            for (; i < e;) {
                                let e = t.groupIndices[l],
                                    a = t.groupIndices.length === l + 1 ? 1 / 0 : t.groupIndices[l + 1] - e - 1;
                                n.push({
                                    startIndex: e,
                                    endIndex: e,
                                    size: o
                                }), n.push({
                                    startIndex: e + 1,
                                    endIndex: e + 1 + a - 1,
                                    size: r
                                }), l++, i += a + 1
                            }
                            let a = walk(t.sizeTree),
                                s = i !== e;
                            return s && a.shift(), a.reduce((t, {
                                k: o,
                                v: n
                            }) => {
                                let r = t.ranges;
                                return 0 !== t.prevSize && (r = [...t.ranges, {
                                    startIndex: t.prevIndex,
                                    endIndex: o + e - 1,
                                    size: t.prevSize
                                }]), {
                                    ranges: r,
                                    prevIndex: o + e,
                                    prevSize: n
                                }
                            }, {
                                ranges: n,
                                prevIndex: e,
                                prevSize: 0
                            }).ranges
                        }
                        return walk(t.sizeTree).reduce((t, {
                            k: o,
                            v: n
                        }) => ({
                            ranges: [...t.ranges, {
                                startIndex: t.prevIndex,
                                endIndex: o + e - 1,
                                size: t.prevSize
                            }],
                            prevIndex: o + e,
                            prevSize: n
                        }), {
                            ranges: [],
                            prevIndex: 0,
                            prevSize: r
                        }).ranges
                    })), o);
                    let C = streamFromEmitter(pipe(l, withLatestFrom(x, g), map(([e, {
                        offsetTree: t
                    }, o]) => offsetOf(-e, t, o))));
                    return connect(pipe(l, withLatestFrom(x, g), map(([e, t, o]) => {
                        let n = t.groupIndices.length > 0;
                        if (n) {
                            if (empty(t.sizeTree)) return t;
                            let n = p,
                                r = w(4),
                                i = 0,
                                l = 0,
                                a = 0;
                            for (; i < -e;) {
                                a = r[l];
                                let e = r[l + 1] - a - 1;
                                l++, i += e + 1
                            }
                            n = walk(t.sizeTree).reduce((t, {
                                k: o,
                                v: n
                            }) => insert(t, Math.max(0, o + e), n), n);
                            let s = i !== -e;
                            if (s) {
                                let o = find(t.sizeTree, a);
                                n = insert(n, 0, o);
                                let r = findMaxKeyValue(t.sizeTree, -e + 1)[1];
                                n = insert(n, 1, r)
                            }
                            return { ...t,
                                sizeTree: n,
                                ...createOffsetTree(t.offsetTree, 0, n, o)
                            }
                        } {
                            let n = walk(t.sizeTree).reduce((t, {
                                k: o,
                                v: n
                            }) => insert(t, Math.max(0, o + e), n), p);
                            return { ...t,
                                sizeTree: n,
                                ...createOffsetTree(t.offsetTree, 0, n, o)
                            }
                        }
                    })), x), {
                        data: h,
                        totalCount: n,
                        sizeRanges: o,
                        groupIndices: u,
                        defaultItemSize: c,
                        fixedItemSize: m,
                        unshiftWith: i,
                        shiftWith: l,
                        shiftWithOffset: C,
                        beforeUnshiftWith: v,
                        firstItemIndex: a,
                        gap: g,
                        sizes: x,
                        listRefresh: T,
                        statefulTotalCount: r,
                        trackItemSizes: I,
                        itemSize: d
                    }
                }, tup(m, d), {
                    singleton: !0
                }),
                g = "undefined" != typeof document && "scrollBehavior" in document.documentElement.style;

            function normalizeIndexLocation(e) {
                let t = "number" == typeof e ? {
                    index: e
                } : e;
                return t.align || (t.align = "start"), t.behavior && g || (t.behavior = "auto"), t.offset || (t.offset = 0), t
            }
            let S = system(([{
                    sizes: e,
                    totalCount: t,
                    listRefresh: o,
                    gap: n
                }, {
                    scrollingInProgress: r,
                    viewportHeight: i,
                    scrollTo: l,
                    smoothScrollTargetReached: a,
                    headerHeight: u,
                    footerHeight: m,
                    fixedHeaderHeight: c,
                    fixedFooterHeight: p
                }, {
                    log: d
                }]) => {
                    let f = stream(),
                        h = statefulStream(0),
                        g = null,
                        S = null,
                        x = null;

                    function cleanup() {
                        g && (g(), g = null), x && (x(), x = null), S && (clearTimeout(S), S = null), r(0, !1)
                    }
                    return connect(pipe(f, withLatestFrom(e, i, t, h, u, m, d), withLatestFrom(n, c, p), map(([
                        [e, t, n, i, l, u, m, c], p, d, h
                    ]) => {
                        let w = normalizeIndexLocation(e),
                            {
                                align: I,
                                behavior: T,
                                offset: v
                            } = w,
                            C = i - 1,
                            E = originalIndexFromLocation(w, t, C),
                            y = offsetOf(E, t.offsetTree, p) + u;
                        "end" === I ? (y += d + findMaxKeyValue(t.sizeTree, E)[1] - n + h, E === C && (y += m)) : "center" === I ? y += (d + findMaxKeyValue(t.sizeTree, E)[1] - n + h) / 2 : y -= l, v && (y += v);
                        let retry = t => {
                            cleanup(), t ? (c("retrying to scroll to", {
                                location: e
                            }, s.DEBUG), f(0, e)) : c("list did not change, scroll successful", {}, s.DEBUG)
                        };
                        if (cleanup(), "smooth" === T) {
                            let e = !1;
                            x = o(1, t => {
                                e = e || t
                            }), g = handleNext(a, () => {
                                retry(e)
                            })
                        } else g = handleNext(pipe(o, e => {
                            let t = setTimeout(() => {
                                e(!1)
                            }, 150);
                            return o => {
                                o && (e(!0), clearTimeout(t))
                            }
                        }), retry);
                        return S = setTimeout(() => {
                            cleanup()
                        }, 1200), r(0, !0), c("scrolling from index to", {
                            index: E,
                            top: y,
                            behavior: T
                        }, s.DEBUG), {
                            top: y,
                            behavior: T
                        }
                    })), l), {
                        scrollToIndex: f,
                        topListHeight: h
                    }
                }, tup(h, c, m), {
                    singleton: !0
                }),
                x = "down",
                w = {
                    atBottom: !1,
                    notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
                    state: {
                        offsetBottom: 0,
                        scrollTop: 0,
                        viewportHeight: 0,
                        scrollHeight: 0
                    }
                },
                I = system(([{
                    scrollContainerState: e,
                    scrollTop: t,
                    viewportHeight: o,
                    headerHeight: n,
                    footerHeight: r,
                    scrollBy: i
                }]) => {
                    let l = statefulStream(!1),
                        a = statefulStream(!0),
                        s = stream(),
                        u = stream(),
                        m = statefulStream(4),
                        c = statefulStream(0),
                        p = statefulStreamFromEmitter(pipe(merge(pipe(duc(t), skip(1), mapTo(!0)), pipe(duc(t), skip(1), mapTo(!1), debounceTime(100))), distinctUntilChanged()), !1),
                        d = statefulStreamFromEmitter(pipe(merge(pipe(i, mapTo(!0)), pipe(i, mapTo(!1), debounceTime(200))), distinctUntilChanged()), !1);
                    connect(pipe(combineLatest(duc(t), duc(c)), map(([e, t]) => e <= t), distinctUntilChanged()), a), connect(pipe(a, throttleTime(50)), u);
                    let f = streamFromEmitter(pipe(combineLatest(e, duc(o), duc(n), duc(r), duc(m)), scan((e, [{
                            scrollTop: t,
                            scrollHeight: o
                        }, n, r, i, l]) => {
                            let a = {
                                viewportHeight: n,
                                scrollTop: t,
                                scrollHeight: o
                            };
                            if (t + n - o > -l) {
                                let o, n;
                                return t > e.state.scrollTop ? (o = "SCROLLED_DOWN", n = e.state.scrollTop - t) : (o = "SIZE_DECREASED", n = e.state.scrollTop - t || e.scrollTopDelta), {
                                    atBottom: !0,
                                    state: a,
                                    atBottomBecause: o,
                                    scrollTopDelta: n
                                }
                            }
                            return {
                                atBottom: !1,
                                notAtBottomBecause: a.scrollHeight > e.state.scrollHeight ? "SIZE_INCREASED" : n < e.state.viewportHeight ? "VIEWPORT_HEIGHT_DECREASING" : t < e.state.scrollTop ? "SCROLLING_UPWARDS" : "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM",
                                state: a
                            }
                        }, w), distinctUntilChanged((e, t) => e && e.atBottom === t.atBottom))),
                        h = statefulStreamFromEmitter(pipe(e, scan((e, {
                            scrollTop: t,
                            scrollHeight: o,
                            viewportHeight: n
                        }) => {
                            if (approximatelyEqual(e.scrollHeight, o)) return {
                                scrollTop: t,
                                scrollHeight: o,
                                jump: 0,
                                changed: !1
                            }; {
                                let r = o - (t + n) < 1;
                                return e.scrollTop !== t && r ? {
                                    scrollHeight: o,
                                    scrollTop: t,
                                    jump: e.scrollTop - t,
                                    changed: !0
                                } : {
                                    scrollHeight: o,
                                    scrollTop: t,
                                    jump: 0,
                                    changed: !0
                                }
                            }
                        }, {
                            scrollHeight: 0,
                            jump: 0,
                            scrollTop: 0,
                            changed: !1
                        }), filter(e => e.changed), map(e => e.jump)), 0);
                    connect(pipe(f, map(e => e.atBottom)), l), connect(pipe(l, throttleTime(50)), s);
                    let g = statefulStream(x);
                    connect(pipe(e, map(({
                        scrollTop: e
                    }) => e), distinctUntilChanged(), scan((e, t) => d(4) ? {
                        direction: e.direction,
                        prevScrollTop: t
                    } : {
                        direction: t < e.prevScrollTop ? "up" : x,
                        prevScrollTop: t
                    }, {
                        direction: x,
                        prevScrollTop: 0
                    }), map(e => e.direction)), g), connect(pipe(e, throttleTime(50), mapTo("none")), g);
                    let S = statefulStream(0);
                    return connect(pipe(p, filter(e => !e), mapTo(0)), S), connect(pipe(t, throttleTime(100), withLatestFrom(p), filter(([e, t]) => !!t), scan(([e, t], [o]) => [t, o], [0, 0]), map(([e, t]) => t - e)), S), {
                        isScrolling: p,
                        isAtTop: a,
                        isAtBottom: l,
                        atBottomState: f,
                        atTopStateChange: u,
                        atBottomStateChange: s,
                        scrollDirection: g,
                        atBottomThreshold: m,
                        atTopThreshold: c,
                        scrollVelocity: S,
                        lastJumpDueToItemResize: h
                    }
                }, tup(c)),
                T = system(([{
                    log: e
                }]) => {
                    let t = statefulStream(!1),
                        o = streamFromEmitter(pipe(t, filter(e => e), distinctUntilChanged()));
                    return t(1, t => {
                        t && e(4)("props updated", {}, s.DEBUG)
                    }), {
                        propsReady: t,
                        didMount: o
                    }
                }, tup(m), {
                    singleton: !0
                });

            function skipFrames(e, t) {
                0 == e ? t() : requestAnimationFrame(() => skipFrames(e - 1, t))
            }

            function getInitialTopMostItemIndexNumber(e, t) {
                let o = "number" == typeof e ? e : "LAST" === e.index ? t - 1 : e.index;
                return o
            }
            let v = system(([{
                sizes: e,
                listRefresh: t,
                defaultItemSize: o
            }, {
                scrollTop: n
            }, {
                scrollToIndex: r
            }, {
                didMount: i
            }]) => {
                let l = statefulStream(!0),
                    a = statefulStream(0),
                    s = statefulStream(!1);
                return connect(pipe(i, withLatestFrom(a), filter(([e, t]) => !!t), mapTo(!1)), l), pipe(combineLatest(t, i), withLatestFrom(l, e, o, s), filter(([
                    [, e], t, {
                        sizeTree: o
                    },
                    n, r
                ]) => e && (!empty(o) || isDefined(n)) && !t && !r), withLatestFrom(a))(1, ([, e]) => {
                    s(0, !0), skipFrames(3, () => {
                        handleNext(n, () => {
                            l(0, !0)
                        }), r(0, e)
                    })
                }), {
                    scrolledToInitialItem: l,
                    initialTopMostItemIndex: a
                }
            }, tup(h, c, S, T), {
                singleton: !0
            });

            function normalizeFollowOutput(e) {
                return !!e && ("smooth" === e ? "smooth" : "auto")
            }
            let behaviorFromFollowOutput = (e, t) => "function" == typeof e ? normalizeFollowOutput(e(t)) : t && normalizeFollowOutput(e),
                C = system(([{
                    totalCount: e,
                    listRefresh: t
                }, {
                    isAtBottom: o,
                    atBottomState: n
                }, {
                    scrollToIndex: r
                }, {
                    scrolledToInitialItem: i
                }, {
                    propsReady: l,
                    didMount: a
                }, {
                    log: u
                }, {
                    scrollingInProgress: m
                }]) => {
                    let c = statefulStream(!1),
                        p = stream(),
                        d = null;

                    function scrollToBottom(e) {
                        r(0, {
                            index: "LAST",
                            align: "end",
                            behavior: e
                        })
                    }

                    function trapNextSizeIncrease(e) {
                        let t = handleNext(n, t => {
                            !e || t.atBottom || "SIZE_INCREASED" !== t.notAtBottomBecause || d || (u(4)("scrolling to bottom due to increased size", {}, s.DEBUG), scrollToBottom("auto"))
                        });
                        setTimeout(t, 100)
                    }
                    return pipe(combineLatest(pipe(duc(e), skip(1)), a), withLatestFrom(duc(c), o, i, m), map(([
                        [e, t], o, n, r, i
                    ]) => {
                        let l = t && r,
                            a = "auto";
                        return l && (a = behaviorFromFollowOutput(o, n || i), l = l && !!a), {
                            totalCount: e,
                            shouldFollow: l,
                            followOutputBehavior: a
                        }
                    }), filter(({
                        shouldFollow: e
                    }) => e))(1, ({
                        totalCount: e,
                        followOutputBehavior: o
                    }) => {
                        d && (d(), d = null), d = handleNext(t, () => {
                            u(4)("following output to ", {
                                totalCount: e
                            }, s.DEBUG), scrollToBottom(o), d = null
                        })
                    }), pipe(combineLatest(duc(c), e, l), filter(([e, , t]) => e && t), scan(({
                        value: e
                    }, [, t]) => ({
                        refreshed: e === t,
                        value: t
                    }), {
                        refreshed: !1,
                        value: 0
                    }), filter(({
                        refreshed: e
                    }) => e), withLatestFrom(c, e))(1, ([, e]) => {
                        trapNextSizeIncrease(!1 !== e)
                    }), p(1, () => {
                        trapNextSizeIncrease(!1 !== c(4))
                    }), combineLatest(duc(c), n)(1, ([e, t]) => {
                        e && !t.atBottom && "VIEWPORT_HEIGHT_DECREASING" === t.notAtBottomBecause && scrollToBottom("auto")
                    }), {
                        followOutput: c,
                        autoscrollToBottom: p
                    }
                }, tup(h, I, S, v, T, m, c));

            function groupCountsToIndicesAndCount(e) {
                return e.reduce((e, t) => (e.groupIndices.push(e.totalCount), e.totalCount += t + 1, e), {
                    totalCount: 0,
                    groupIndices: []
                })
            }
            let E = system(([{
                totalCount: e,
                groupIndices: t,
                sizes: o
            }, {
                scrollTop: n,
                headerHeight: r
            }]) => {
                let i = stream(),
                    l = stream(),
                    a = streamFromEmitter(pipe(i, map(groupCountsToIndicesAndCount)));
                return connect(pipe(a, map(e => e.totalCount)), e), connect(pipe(a, map(e => e.groupIndices)), t), connect(pipe(combineLatest(n, o, r), filter(([e, t]) => hasGroups(t)), map(([e, t, o]) => findMaxKeyValue(t.groupOffsetTree, Math.max(e - o, 0), "v")[0]), distinctUntilChanged(), map(e => [e])), l), {
                    groupCounts: i,
                    topItemsIndexes: l
                }
            }, tup(h, c));

            function tupleComparator(e, t) {
                return !!(e && e[0] === t[0] && e[1] === t[1])
            }

            function rangeComparator(e, t) {
                return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex)
            }
            let y = "bottom",
                b = "none";

            function getOverscan(e, t, o) {
                return "number" == typeof e ? "up" === o && "top" === t || o === x && t === y ? e : 0 : "up" === o ? "top" === t ? e.main : e.reverse : t === y ? e.main : e.reverse
            }

            function getViewportIncrease(e, t) {
                return "number" == typeof e ? e : e[t] || 0
            }
            let F = system(([{
                    scrollTop: e,
                    viewportHeight: t,
                    deviation: o,
                    headerHeight: n,
                    fixedHeaderHeight: r
                }]) => {
                    let i = stream(),
                        l = statefulStream(0),
                        a = statefulStream(0),
                        s = statefulStream(0),
                        u = statefulStreamFromEmitter(pipe(combineLatest(duc(e), duc(t), duc(n), duc(i, tupleComparator), duc(s), duc(l), duc(r), duc(o), duc(a)), map(([e, t, o, [n, r], i, l, a, s, u]) => {
                            let m = e - s,
                                c = Math.max(o - m, 0),
                                p = b,
                                d = getViewportIncrease(u, "top"),
                                f = getViewportIncrease(u, y);
                            return (n -= s, n += o + a, r += o + a, n > e + (l + a) - d && (p = "up"), (r -= s) < e - c + t + f && (p = x), p !== b) ? [Math.max(m - o - getOverscan(i, "top", p) - d, 0), m - c - a + t + getOverscan(i, y, p) + f] : null
                        }), filter(e => null != e), distinctUntilChanged(tupleComparator)), [0, 0]);
                    return {
                        listBoundary: i,
                        overscan: s,
                        topListHeight: l,
                        increaseViewportBy: a,
                        visibleRange: u
                    }
                }, tup(c), {
                    singleton: !0
                }),
                L = {
                    items: [],
                    topItems: [],
                    offsetTop: 0,
                    offsetBottom: 0,
                    top: 0,
                    bottom: 0,
                    topListHeight: 0,
                    totalCount: 0,
                    firstItemIndex: 0
                };

            function transposeItems(e, t, o) {
                let n;
                if (0 === e.length) return [];
                if (!hasGroups(t)) return e.map(e => ({ ...e,
                    index: e.index + o,
                    originalIndex: e.index
                }));
                let r = e[0].index,
                    i = e[e.length - 1].index,
                    l = [],
                    a = rangesWithin(t.groupOffsetTree, r, i),
                    s = 0;
                for (let r of e) {
                    let e;
                    (!n || n.end < r.index) && (n = a.shift(), s = t.groupIndices.indexOf(n.start)), e = r.index === n.start ? {
                        type: "group",
                        index: s
                    } : {
                        index: r.index - (s + 1) + o,
                        groupIndex: s
                    }, l.push({ ...e,
                        size: r.size,
                        offset: r.offset,
                        originalIndex: r.index,
                        data: r.data
                    })
                }
                return l
            }

            function buildListState(e, t, o, n, r, i) {
                let {
                    lastSize: l,
                    lastOffset: a,
                    lastIndex: s
                } = r, u = 0, m = 0;
                if (e.length > 0) {
                    u = e[0].offset;
                    let t = e[e.length - 1];
                    m = t.offset + t.size
                }
                let c = o - s,
                    p = u,
                    d = a + c * l + (c - 1) * n - m;
                return {
                    items: transposeItems(e, r, i),
                    topItems: transposeItems(t, r, i),
                    topListHeight: t.reduce((e, t) => t.size + e, 0),
                    offsetTop: u,
                    offsetBottom: d,
                    top: p,
                    bottom: m,
                    totalCount: o,
                    firstItemIndex: i
                }
            }

            function buildListStateFromItemCount(e, t, o, n, r, i) {
                let l = 0;
                if (o.groupIndices.length > 0)
                    for (let t of o.groupIndices) {
                        if (t - l >= e) break;
                        l++
                    }
                let a = e + l,
                    s = getInitialTopMostItemIndexNumber(t, a),
                    u = Array.from({
                        length: a
                    }).map((e, t) => ({
                        index: t + s,
                        size: 0,
                        offset: 0,
                        data: i[t + s]
                    }));
                return buildListState(u, [], a, r, o, n)
            }
            let z = system(([{
                    sizes: e,
                    totalCount: t,
                    data: o,
                    firstItemIndex: n,
                    gap: r
                }, i, {
                    visibleRange: l,
                    listBoundary: a,
                    topListHeight: s
                }, {
                    scrolledToInitialItem: u,
                    initialTopMostItemIndex: m
                }, {
                    topListHeight: c
                }, p, {
                    didMount: d
                }, {
                    recalcInProgress: f
                }]) => {
                    let h = statefulStream([]),
                        g = statefulStream(0),
                        S = stream();
                    connect(i.topItemsIndexes, h);
                    let x = statefulStreamFromEmitter(pipe(combineLatest(d, f, duc(l, tupleComparator), duc(t), duc(e), duc(m), u, duc(h), duc(n), duc(r), o), filter(([e, t, , o, , , , , , , n]) => {
                        let r = n && n.length !== o;
                        return e && !t && !r
                    }), map(([, , [e, t], o, n, r, i, l, a, s, u]) => {
                        var m;
                        let {
                            sizeTree: c,
                            offsetTree: p
                        } = n, d = g(4);
                        if (0 === o) return { ...L,
                            totalCount: o
                        };
                        if (0 === e && 0 === t) return 0 === d ? { ...L,
                            totalCount: o
                        } : buildListStateFromItemCount(d, r, n, a, s, u || []);
                        if (empty(c)) {
                            if (d > 0) return null;
                            let e = buildListState(function(e, t, o) {
                                if (hasGroups(t)) {
                                    let n = originalIndexFromItemIndex(e, t),
                                        r = findMaxKeyValue(t.groupOffsetTree, n)[0];
                                    return [{
                                        index: r,
                                        size: 0,
                                        offset: 0
                                    }, {
                                        index: n,
                                        size: 0,
                                        offset: 0,
                                        data: o && o[0]
                                    }]
                                }
                                return [{
                                    index: e,
                                    size: 0,
                                    offset: 0,
                                    data: o && o[0]
                                }]
                            }(getInitialTopMostItemIndexNumber(r, o), n, u), [], o, s, n, a);
                            return e
                        }
                        let f = [];
                        if (l.length > 0) {
                            let e = l[0],
                                t = l[l.length - 1],
                                o = 0;
                            for (let n of rangesWithin(c, e, t)) {
                                let r = n.value,
                                    i = Math.max(n.start, e),
                                    l = Math.min(n.end, t);
                                for (let e = i; e <= l; e++) f.push({
                                    index: e,
                                    size: r,
                                    offset: o,
                                    data: u && u[e]
                                }), o += r
                            }
                        }
                        if (!i) return buildListState([], f, o, s, n, a);
                        let h = l.length > 0 ? l[l.length - 1] + 1 : 0,
                            S = function(e, t, o, n = 0) {
                                return n > 0 && (t = Math.max(t, e[findIndexOfClosestSmallerOrEqual(e, n, indexComparator)].offset)), arrayToRanges(function(e, t, o, n) {
                                    let r = findIndexOfClosestSmallerOrEqual(e, t, n),
                                        i = findIndexOfClosestSmallerOrEqual(e, o, n, r);
                                    return e.slice(r, i + 1)
                                }(e, t, o, offsetComparator), offsetPointParser)
                            }(p, e, t, h);
                        if (0 === S.length) return null;
                        let x = o - 1,
                            w = ((o => {
                                for (let n of S) {
                                    let r = n.value,
                                        i = r.offset,
                                        l = n.start,
                                        a = r.size;
                                    if (r.offset < e) {
                                        l += Math.floor((e - r.offset + s) / (a + s));
                                        let t = l - n.start;
                                        i += t * a + t * s
                                    }
                                    l < h && (i += (h - l) * a, l = h);
                                    let m = Math.min(n.end, x);
                                    for (let e = l; e <= m && !(i >= t); e++) o.push({
                                        index: e,
                                        size: a,
                                        offset: i,
                                        data: u && u[e]
                                    }), i += a + s
                                }
                            })(m = []), m);
                        return buildListState(w, f, o, s, n, a)
                    }), filter(e => null !== e), distinctUntilChanged()), L);
                    connect(pipe(o, filter(isDefined), map(e => null == e ? void 0 : e.length)), t), connect(pipe(x, map(e => e.topListHeight)), c), connect(c, s), connect(pipe(x, map(e => [e.top, e.bottom])), a), connect(pipe(x, map(e => e.items)), S);
                    let w = streamFromEmitter(pipe(x, filter(({
                            items: e
                        }) => e.length > 0), withLatestFrom(t, o), filter(([{
                            items: e
                        }, t]) => e[e.length - 1].originalIndex === t - 1), map(([, e, t]) => [e - 1, t]), distinctUntilChanged(tupleComparator), map(([e]) => e))),
                        I = streamFromEmitter(pipe(x, throttleTime(200), filter(({
                            items: e,
                            topItems: t
                        }) => e.length > 0 && e[0].originalIndex === t.length), map(({
                            items: e
                        }) => e[0].index), distinctUntilChanged())),
                        T = streamFromEmitter(pipe(x, filter(({
                            items: e
                        }) => e.length > 0), map(({
                            items: e
                        }) => {
                            let t = 0,
                                o = e.length - 1;
                            for (;
                                "group" === e[t].type && t < o;) t++;
                            for (;
                                "group" === e[o].type && o > t;) o--;
                            return {
                                startIndex: e[t].index,
                                endIndex: e[o].index
                            }
                        }), distinctUntilChanged(rangeComparator)));
                    return {
                        listState: x,
                        topItemsIndexes: h,
                        endReached: w,
                        startReached: I,
                        rangeChanged: T,
                        itemsRendered: S,
                        initialItemCount: g,
                        ...p
                    }
                }, tup(h, E, F, v, S, I, T, d), {
                    singleton: !0
                }),
                P = system(([{
                    sizes: e,
                    firstItemIndex: t,
                    data: o,
                    gap: n
                }, {
                    initialTopMostItemIndex: r
                }, {
                    initialItemCount: i,
                    listState: l
                }, {
                    didMount: a
                }]) => (connect(pipe(a, withLatestFrom(i), filter(([, e]) => 0 !== e), withLatestFrom(r, e, t, n, o), map(([
                    [, e], t, o, n, r, i = []
                ]) => buildListStateFromItemCount(e, t, o, n, r, i))), l), {}), tup(h, v, z, T), {
                    singleton: !0
                }),
                R = system(([{
                    scrollVelocity: e
                }]) => {
                    let t = statefulStream(!1),
                        o = stream(),
                        n = statefulStream(!1);
                    return connect(pipe(e, withLatestFrom(n, t, o), filter(([e, t]) => !!t), map(([e, t, o, n]) => {
                        let {
                            exit: r,
                            enter: i
                        } = t;
                        if (o) {
                            if (r(e, n)) return !1
                        } else if (i(e, n)) return !0;
                        return o
                    }), distinctUntilChanged()), t), pipe(combineLatest(t, e, o), withLatestFrom(n))(1, ([
                        [e, t, o], n
                    ]) => e && n && n.change && n.change(t, o)), {
                        isSeeking: t,
                        scrollSeekConfiguration: n,
                        scrollVelocity: e,
                        scrollSeekRangeChanged: o
                    }
                }, tup(I), {
                    singleton: !0
                }),
                k = system(([{
                    topItemsIndexes: e
                }]) => {
                    let t = statefulStream(0);
                    return connect(pipe(t, filter(e => e > 0), map(e => Array.from({
                        length: e
                    }).map((e, t) => t))), e), {
                        topItemCount: t
                    }
                }, tup(z)),
                H = system(([{
                    footerHeight: e,
                    headerHeight: t,
                    fixedHeaderHeight: o,
                    fixedFooterHeight: n
                }, {
                    listState: r
                }]) => {
                    let i = stream(),
                        l = statefulStreamFromEmitter(pipe(combineLatest(e, n, t, o, r), map(([e, t, o, n, r]) => e + t + o + n + r.offsetBottom + r.bottom)), 0);
                    return connect(duc(l), i), {
                        totalListHeight: l,
                        totalListHeightChanged: i
                    }
                }, tup(c, z), {
                    singleton: !0
                });

            function simpleMemoize(e) {
                let t, o = !1;
                return () => (o || (o = !0, t = e()), t)
            }
            let B = simpleMemoize(() => /iP(ad|od|hone)/i.test(navigator.userAgent) && /WebKit/i.test(navigator.userAgent)),
                O = system(([{
                    scrollBy: e,
                    scrollTop: t,
                    deviation: o,
                    scrollingInProgress: n
                }, {
                    isScrolling: r,
                    isAtBottom: i,
                    scrollDirection: l,
                    lastJumpDueToItemResize: a
                }, {
                    listState: u
                }, {
                    beforeUnshiftWith: m,
                    shiftWithOffset: c,
                    sizes: p,
                    gap: d
                }, {
                    log: f
                }, {
                    recalcInProgress: h
                }]) => {
                    let g = streamFromEmitter(pipe(u, withLatestFrom(a), scan(([, e, t, o], [{
                        items: n,
                        totalCount: r,
                        bottom: i,
                        offsetBottom: l
                    }, a]) => {
                        let s = i + l,
                            u = 0;
                        if (t === r && e.length > 0 && n.length > 0) {
                            let t = 0 === n[0].originalIndex && 0 === e[0].originalIndex;
                            t || 0 == (u = s - o) || (u += a)
                        }
                        return [u, n, r, s]
                    }, [0, [], 0, 0]), filter(([e]) => 0 !== e), withLatestFrom(t, l, n, i, f, h), filter(([, e, t, o, , , n]) => !n && !o && 0 !== e && "up" === t), map(([
                        [e], , , , , t
                    ]) => (t("Upward scrolling compensation", {
                        amount: e
                    }, s.DEBUG), e))));

                    function scrollByWith(t) {
                        t > 0 ? (e(0, {
                            top: -t,
                            behavior: "auto"
                        }), o(0, 0)) : (o(0, 0), e(0, {
                            top: -t,
                            behavior: "auto"
                        }))
                    }
                    return pipe(g, withLatestFrom(o, r))(1, ([e, t, n]) => {
                        n && B() ? o(0, t - e) : scrollByWith(-e)
                    }), pipe(combineLatest(statefulStreamFromEmitter(r, !1), o, h), filter(([e, t, o]) => !e && !o && 0 !== t), map(([e, t]) => t), throttleTime(1))(1, scrollByWith), connect(pipe(c, map(e => ({
                        top: -e
                    }))), e), pipe(m, withLatestFrom(p, d), map(([e, {
                        lastSize: t,
                        groupIndices: o,
                        sizeTree: n
                    }, r]) => {
                        if (0 === o.length) return e * (t + r); {
                            let i = 0,
                                l = find(n, 0),
                                a = 0,
                                s = 0;
                            for (; a < e;) {
                                a++, i += l;
                                let n = o.length === s + 1 ? 1 / 0 : o[s + 1] - o[s] - 1;
                                a + n > e && (i -= l, n = e - a + 1), a += n, i += n * (t + r), s++
                            }
                            return i
                        }
                    }))(1, t => {
                        o(0, t), requestAnimationFrame(() => {
                            e(0, {
                                top: t
                            }), requestAnimationFrame(() => {
                                o(0, 0), h(0, !1)
                            })
                        })
                    }), {
                        deviation: o
                    }
                }, tup(c, I, z, h, m, d)),
                N = system(([{
                    didMount: e
                }, {
                    scrollTo: t
                }, {
                    listState: o
                }]) => {
                    let n = statefulStream(0);
                    return pipe(e, withLatestFrom(n), filter(([, e]) => 0 !== e), map(([, e]) => ({
                        top: e
                    })))(1, e => {
                        handleNext(pipe(o, skip(1), filter(e => e.items.length > 1)), () => {
                            requestAnimationFrame(() => {
                                t(0, e)
                            })
                        })
                    }), {
                        initialScrollTop: n
                    }
                }, tup(T, c, z), {
                    singleton: !0
                }),
                W = system(([{
                    viewportHeight: e
                }, {
                    totalListHeight: t
                }]) => {
                    let o = statefulStream(!1),
                        n = statefulStreamFromEmitter(pipe(combineLatest(o, e, t), filter(([e]) => e), map(([, e, t]) => Math.max(0, e - t)), throttleTime(0), distinctUntilChanged()), 0);
                    return {
                        alignToBottom: o,
                        paddingTopAddition: n
                    }
                }, tup(c, H), {
                    singleton: !0
                }),
                M = system(([{
                    scrollTo: e,
                    scrollContainerState: t
                }]) => {
                    let o = stream(),
                        n = stream(),
                        r = stream(),
                        i = statefulStream(!1),
                        l = statefulStream(void 0);
                    return connect(pipe(combineLatest(o, n), map(([{
                        viewportHeight: e,
                        scrollTop: t,
                        scrollHeight: o
                    }, {
                        offsetTop: n
                    }]) => ({
                        scrollTop: Math.max(0, t - n),
                        scrollHeight: o,
                        viewportHeight: e
                    }))), t), connect(pipe(e, withLatestFrom(n), map(([e, {
                        offsetTop: t
                    }]) => ({ ...e,
                        top: e.top + t
                    }))), r), {
                        useWindowScroll: i,
                        customScrollParent: l,
                        windowScrollContainerState: o,
                        windowViewportRect: n,
                        windowScrollTo: r
                    }
                }, tup(c)),
                defaultCalculateViewLocation = ({
                    itemTop: e,
                    itemBottom: t,
                    viewportTop: o,
                    viewportBottom: n,
                    locationParams: {
                        behavior: r,
                        align: i,
                        ...l
                    }
                }) => e < o ? { ...l,
                    behavior: r,
                    align: null != i ? i : "start"
                } : t > n ? { ...l,
                    behavior: r,
                    align: null != i ? i : "end"
                } : null,
                V = system(([{
                    sizes: e,
                    totalCount: t,
                    gap: o
                }, {
                    scrollTop: n,
                    viewportHeight: r,
                    headerHeight: i,
                    fixedHeaderHeight: l,
                    fixedFooterHeight: a,
                    scrollingInProgress: s
                }, {
                    scrollToIndex: u
                }]) => {
                    let m = stream();
                    return connect(pipe(m, withLatestFrom(e, r, t, i, l, a, n), withLatestFrom(o), map(([
                        [e, t, o, n, r, i, l, a], u
                    ]) => {
                        let {
                            done: m,
                            behavior: c,
                            align: p,
                            calculateViewLocation: d = defaultCalculateViewLocation,
                            ...f
                        } = e, h = originalIndexFromLocation(e, t, n - 1), g = offsetOf(h, t.offsetTree, u) + r + i, S = g + findMaxKeyValue(t.sizeTree, h)[1], x = d({
                            itemTop: g,
                            itemBottom: S,
                            viewportTop: a + i,
                            viewportBottom: a + o - l,
                            locationParams: {
                                behavior: c,
                                align: p,
                                ...f
                            }
                        });
                        return x ? m && handleNext(pipe(s, filter(e => !1 === e), skip(s(4) ? 1 : 2)), m) : m && m(), x
                    }), filter(e => null !== e)), u), {
                        scrollIntoView: m
                    }
                }, tup(h, c, S, z, m), {
                    singleton: !0
                }),
                D = system(([{
                    sizes: e,
                    sizeRanges: t
                }, {
                    scrollTop: o
                }, {
                    initialTopMostItemIndex: n
                }, {
                    didMount: r
                }, {
                    useWindowScroll: i,
                    windowScrollContainerState: l,
                    windowViewportRect: a
                }]) => {
                    let s = stream(),
                        u = statefulStream(void 0),
                        m = statefulStream(null),
                        c = statefulStream(null);
                    return connect(l, m), connect(a, c), pipe(s, withLatestFrom(e, o, i, m, c))(1, ([e, t, o, n, r, i]) => {
                        let l = walk(t.sizeTree).map(({
                            k: e,
                            v: t
                        }, o, n) => {
                            let r = n[o + 1],
                                i = r ? r.k - 1 : 1 / 0;
                            return {
                                startIndex: e,
                                endIndex: i,
                                size: t
                            }
                        });
                        n && null !== r && null !== i && (o = r.scrollTop - i.offsetTop), e({
                            ranges: l,
                            scrollTop: o
                        })
                    }), connect(pipe(u, filter(isDefined), map(locationFromSnapshot)), n), connect(pipe(r, withLatestFrom(u), filter(([, e]) => void 0 !== e), distinctUntilChanged(), map(([, e]) => e.ranges)), t), {
                        getState: s,
                        restoreStateFrom: u
                    }
                }, tup(h, c, v, T, M));

            function locationFromSnapshot(e) {
                return {
                    offset: e.scrollTop,
                    index: 0,
                    align: "start"
                }
            }
            let A = system(([e, t, o, n, r, i, l, a, s, u]) => ({ ...e,
                    ...t,
                    ...o,
                    ...n,
                    ...r,
                    ...i,
                    ...l,
                    ...a,
                    ...s,
                    ...u
                }), tup(F, P, T, R, H, N, W, M, V, m)),
                U = system(([{
                    totalCount: e,
                    sizeRanges: t,
                    fixedItemSize: o,
                    defaultItemSize: n,
                    trackItemSizes: r,
                    itemSize: i,
                    data: l,
                    firstItemIndex: a,
                    groupIndices: s,
                    statefulTotalCount: u,
                    gap: m,
                    sizes: c
                }, {
                    initialTopMostItemIndex: p,
                    scrolledToInitialItem: d
                }, f, h, g, {
                    listState: S,
                    topItemsIndexes: x,
                    ...w
                }, {
                    scrollToIndex: I
                }, T, {
                    topItemCount: v
                }, {
                    groupCounts: C
                }, E]) => (connect(w.rangeChanged, E.scrollSeekRangeChanged), connect(pipe(E.windowViewportRect, map(e => e.visibleHeight)), f.viewportHeight), {
                    totalCount: e,
                    data: l,
                    firstItemIndex: a,
                    sizeRanges: t,
                    initialTopMostItemIndex: p,
                    scrolledToInitialItem: d,
                    topItemsIndexes: x,
                    topItemCount: v,
                    groupCounts: C,
                    fixedItemHeight: o,
                    defaultItemHeight: n,
                    gap: m,
                    ...g,
                    statefulTotalCount: u,
                    listState: S,
                    scrollToIndex: I,
                    trackItemSizes: r,
                    itemSize: i,
                    groupIndices: s,
                    ...w,
                    ...E,
                    ...f,
                    sizes: c,
                    ...h
                }), tup(h, v, c, D, C, z, S, O, k, E, A)),
                G = "-webkit-sticky",
                _ = "sticky",
                $ = simpleMemoize(() => {
                    if ("undefined" == typeof document) return _;
                    let e = document.createElement("div");
                    return e.style.position = G, e.style.position === G ? G : _
                });

            function useWindowViewportRectRef(e, t) {
                let o = r.useRef(null),
                    n = r.useCallback(n => {
                        let r, i;
                        if (null === n || !n.offsetParent) return;
                        let l = n.getBoundingClientRect(),
                            a = l.width;
                        if (t) {
                            let e = t.getBoundingClientRect(),
                                o = l.top - e.top;
                            r = e.height - Math.max(0, o), i = o + t.scrollTop
                        } else r = window.innerHeight - Math.max(0, l.top), i = l.top + window.pageYOffset;
                        o.current = {
                            offsetTop: i,
                            visibleHeight: r,
                            visibleWidth: a
                        }, e(o.current)
                    }, [e, t]),
                    {
                        callbackRef: i,
                        ref: l
                    } = useSizeWithElRef(n),
                    a = r.useCallback(() => {
                        n(l.current)
                    }, [n, l]);
                return r.useEffect(() => {
                    if (!t) return window.addEventListener("scroll", a), window.addEventListener("resize", a), () => {
                        window.removeEventListener("scroll", a), window.removeEventListener("resize", a)
                    }; {
                        t.addEventListener("scroll", a);
                        let e = new ResizeObserver(a);
                        return e.observe(t), () => {
                            t.removeEventListener("scroll", a), e.unobserve(t)
                        }
                    }
                }, [a, t]), i
            }
            let K = r.createContext(void 0),
                j = r.createContext(void 0);

            function identity(e) {
                return e
            }
            let q = system(() => {
                    let e = statefulStream(e => `Item ${e}`),
                        t = statefulStream(null),
                        o = statefulStream(e => `Group ${e}`),
                        n = statefulStream({}),
                        r = statefulStream(identity),
                        i = statefulStream("div"),
                        l = statefulStream(noop),
                        distinctProp = (e, t = null) => statefulStreamFromEmitter(pipe(n, map(t => t[e]), distinctUntilChanged()), t);
                    return {
                        context: t,
                        itemContent: e,
                        groupContent: o,
                        components: n,
                        computeItemKey: r,
                        headerFooterTag: i,
                        scrollerRef: l,
                        FooterComponent: distinctProp("Footer"),
                        HeaderComponent: distinctProp("Header"),
                        TopItemListComponent: distinctProp("TopItemList"),
                        ListComponent: distinctProp("List", "div"),
                        ItemComponent: distinctProp("Item", "div"),
                        GroupComponent: distinctProp("Group", "div"),
                        ScrollerComponent: distinctProp("Scroller", "div"),
                        EmptyPlaceholder: distinctProp("EmptyPlaceholder"),
                        ScrollSeekPlaceholder: distinctProp("ScrollSeekPlaceholder")
                    }
                }),
                Y = system(([e, t]) => ({ ...e,
                    ...t
                }), tup(U, q)),
                DefaultScrollSeekPlaceholder$1 = ({
                    height: e
                }) => r.createElement("div", {
                    style: {
                        height: e
                    }
                }),
                Z = {
                    position: $(),
                    zIndex: 1,
                    overflowAnchor: "none"
                },
                J = {
                    overflowAnchor: "none"
                },
                Q = r.memo(function({
                    showTopList: e = !1
                }) {
                    let t = ea("listState"),
                        o = el("sizeRanges"),
                        n = ea("useWindowScroll"),
                        i = ea("customScrollParent"),
                        l = el("windowScrollContainerState"),
                        a = el("scrollContainerState"),
                        s = i || n ? l : a,
                        u = ea("itemContent"),
                        m = ea("context"),
                        c = ea("groupContent"),
                        p = ea("trackItemSizes"),
                        d = ea("itemSize"),
                        f = ea("log"),
                        h = el("gap"),
                        {
                            callbackRef: g
                        } = useChangedListContentsSizes(o, d, p, e ? noop : s, f, h, i),
                        [S, x] = r.useState(0);
                    es("deviation", e => {
                        S !== e && x(e)
                    });
                    let w = ea("EmptyPlaceholder"),
                        I = ea("ScrollSeekPlaceholder") || DefaultScrollSeekPlaceholder$1,
                        T = ea("ListComponent"),
                        v = ea("ItemComponent"),
                        C = ea("GroupComponent"),
                        E = ea("computeItemKey"),
                        y = ea("isSeeking"),
                        b = ea("groupIndices").length > 0,
                        F = ea("paddingTopAddition"),
                        L = ea("scrolledToInitialItem"),
                        z = e ? {} : {
                            boxSizing: "border-box",
                            paddingTop: t.offsetTop + F,
                            paddingBottom: t.offsetBottom,
                            marginTop: S,
                            ...L ? {} : {
                                visibility: "hidden"
                            }
                        };
                    return !e && 0 === t.totalCount && w ? r.createElement(w, contextPropIfNotDomElement(w, m)) : r.createElement(T, { ...contextPropIfNotDomElement(T, m),
                        ref: g,
                        style: z,
                        "data-test-id": e ? "virtuoso-top-item-list" : "virtuoso-item-list"
                    }, (e ? t.topItems : t.items).map(e => {
                        let o = e.originalIndex,
                            n = E(o + t.firstItemIndex, e.data, m);
                        return y ? r.createElement(I, { ...contextPropIfNotDomElement(I, m),
                            key: n,
                            index: e.index,
                            height: e.size,
                            type: e.type || "item",
                            ..."group" === e.type ? {} : {
                                groupIndex: e.groupIndex
                            }
                        }) : "group" === e.type ? r.createElement(C, { ...contextPropIfNotDomElement(C, m),
                            key: n,
                            "data-index": o,
                            "data-known-size": e.size,
                            "data-item-index": e.index,
                            style: Z
                        }, c(e.index, m)) : r.createElement(v, { ...contextPropIfNotDomElement(v, m),
                            ...itemPropIfNotDomElement(v, e.data),
                            key: n,
                            "data-index": o,
                            "data-known-size": e.size,
                            "data-item-index": e.index,
                            "data-item-group-index": e.groupIndex,
                            style: J
                        }, b ? u(e.index, e.groupIndex, e.data, m) : u(e.index, e.data, m))
                    }))
                }),
                X = {
                    height: "100%",
                    outline: "none",
                    overflowY: "auto",
                    position: "relative",
                    WebkitOverflowScrolling: "touch"
                },
                ee = {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0
                },
                et = {
                    width: "100%",
                    position: $(),
                    top: 0,
                    zIndex: 1
                };

            function contextPropIfNotDomElement(e, t) {
                if ("string" != typeof e) return {
                    context: t
                }
            }

            function itemPropIfNotDomElement(e, t) {
                return {
                    item: "string" == typeof e ? void 0 : t
                }
            }
            let eo = r.memo(function() {
                    let e = ea("HeaderComponent"),
                        t = el("headerHeight"),
                        o = ea("headerFooterTag"),
                        n = useSize(e => t(correctItemSize(e, "height"))),
                        i = ea("context");
                    return e ? r.createElement(o, {
                        ref: n
                    }, r.createElement(e, contextPropIfNotDomElement(e, i))) : null
                }),
                en = r.memo(function() {
                    let e = ea("FooterComponent"),
                        t = el("footerHeight"),
                        o = ea("headerFooterTag"),
                        n = useSize(e => t(correctItemSize(e, "height"))),
                        i = ea("context");
                    return e ? r.createElement(o, {
                        ref: n
                    }, r.createElement(e, contextPropIfNotDomElement(e, i))) : null
                });

            function buildScroller({
                usePublisher: e,
                useEmitter: t,
                useEmitterValue: o
            }) {
                let n = r.memo(function({
                    style: n,
                    children: i,
                    ...l
                }) {
                    let a = e("scrollContainerState"),
                        s = o("ScrollerComponent"),
                        u = e("smoothScrollTargetReached"),
                        m = o("scrollerRef"),
                        c = o("context"),
                        {
                            scrollerRef: p,
                            scrollByCallback: d,
                            scrollToCallback: f
                        } = useScrollTop(a, u, s, m);
                    return t("scrollTo", f), t("scrollBy", d), r.createElement(s, {
                        ref: p,
                        style: { ...X,
                            ...n
                        },
                        "data-test-id": "virtuoso-scroller",
                        "data-virtuoso-scroller": !0,
                        tabIndex: 0,
                        ...l,
                        ...contextPropIfNotDomElement(s, c)
                    }, i)
                });
                return n
            }

            function buildWindowScroller({
                usePublisher: e,
                useEmitter: t,
                useEmitterValue: o
            }) {
                let n = r.memo(function({
                    style: n,
                    children: i,
                    ...l
                }) {
                    let s = e("windowScrollContainerState"),
                        u = o("ScrollerComponent"),
                        m = e("smoothScrollTargetReached"),
                        c = o("totalListHeight"),
                        p = o("deviation"),
                        d = o("customScrollParent"),
                        f = o("context"),
                        {
                            scrollerRef: h,
                            scrollByCallback: g,
                            scrollToCallback: S
                        } = useScrollTop(s, m, u, noop, d);
                    return a(() => (h.current = d || window, () => {
                        h.current = null
                    }), [h, d]), t("windowScrollTo", S), t("scrollBy", g), r.createElement(u, {
                        style: {
                            position: "relative",
                            ...n,
                            ...0 !== c ? {
                                height: c + p
                            } : {}
                        },
                        "data-virtuoso-scroller": !0,
                        ...l,
                        ...contextPropIfNotDomElement(u, f)
                    }, i)
                });
                return n
            }
            let Viewport$2 = ({
                    children: e
                }) => {
                    let t = r.useContext(K),
                        o = el("viewportHeight"),
                        n = el("fixedItemHeight"),
                        i = useSize(compose(o, e => correctItemSize(e, "height")));
                    return r.useEffect(() => {
                        t && (o(t.viewportHeight), n(t.itemHeight))
                    }, [t, o, n]), r.createElement("div", {
                        style: ee,
                        ref: i,
                        "data-viewport-type": "element"
                    }, e)
                },
                WindowViewport$2 = ({
                    children: e
                }) => {
                    let t = r.useContext(K),
                        o = el("windowViewportRect"),
                        n = el("fixedItemHeight"),
                        i = ea("customScrollParent"),
                        l = useWindowViewportRectRef(o, i);
                    return r.useEffect(() => {
                        t && (n(t.itemHeight), o({
                            offsetTop: 0,
                            visibleHeight: t.viewportHeight,
                            visibleWidth: 100
                        }))
                    }, [t, o, n]), r.createElement("div", {
                        ref: l,
                        style: ee,
                        "data-viewport-type": "window"
                    }, e)
                },
                TopItemListContainer = ({
                    children: e
                }) => {
                    let t = ea("TopItemListComponent"),
                        o = ea("headerHeight"),
                        n = { ...et,
                            marginTop: `${o}px`
                        },
                        i = ea("context");
                    return r.createElement(t || "div", {
                        style: n,
                        context: i
                    }, e)
                },
                er = r.memo(function(e) {
                    let t = ea("useWindowScroll"),
                        o = ea("topItemsIndexes").length > 0,
                        n = ea("customScrollParent"),
                        i = n || t ? em : eu,
                        l = n || t ? WindowViewport$2 : Viewport$2;
                    return r.createElement(i, { ...e
                    }, o && r.createElement(TopItemListContainer, null, r.createElement(Q, {
                        showTopList: !0
                    })), r.createElement(l, null, r.createElement(eo, null), r.createElement(Q, null), r.createElement(en, null)))
                }),
                {
                    Component: ei,
                    usePublisher: el,
                    useEmitterValue: ea,
                    useEmitter: es
                } = systemToComponent(Y, {
                    required: {},
                    optional: {
                        restoreStateFrom: "restoreStateFrom",
                        context: "context",
                        followOutput: "followOutput",
                        itemContent: "itemContent",
                        groupContent: "groupContent",
                        overscan: "overscan",
                        increaseViewportBy: "increaseViewportBy",
                        totalCount: "totalCount",
                        groupCounts: "groupCounts",
                        topItemCount: "topItemCount",
                        firstItemIndex: "firstItemIndex",
                        initialTopMostItemIndex: "initialTopMostItemIndex",
                        components: "components",
                        atBottomThreshold: "atBottomThreshold",
                        atTopThreshold: "atTopThreshold",
                        computeItemKey: "computeItemKey",
                        defaultItemHeight: "defaultItemHeight",
                        fixedItemHeight: "fixedItemHeight",
                        itemSize: "itemSize",
                        scrollSeekConfiguration: "scrollSeekConfiguration",
                        headerFooterTag: "headerFooterTag",
                        data: "data",
                        initialItemCount: "initialItemCount",
                        initialScrollTop: "initialScrollTop",
                        alignToBottom: "alignToBottom",
                        useWindowScroll: "useWindowScroll",
                        customScrollParent: "customScrollParent",
                        scrollerRef: "scrollerRef",
                        logLevel: "logLevel"
                    },
                    methods: {
                        scrollToIndex: "scrollToIndex",
                        scrollIntoView: "scrollIntoView",
                        scrollTo: "scrollTo",
                        scrollBy: "scrollBy",
                        autoscrollToBottom: "autoscrollToBottom",
                        getState: "getState"
                    },
                    events: {
                        isScrolling: "isScrolling",
                        endReached: "endReached",
                        startReached: "startReached",
                        rangeChanged: "rangeChanged",
                        atBottomStateChange: "atBottomStateChange",
                        atTopStateChange: "atTopStateChange",
                        totalListHeightChanged: "totalListHeightChanged",
                        itemsRendered: "itemsRendered",
                        groupIndices: "groupIndices"
                    }
                }, er),
                eu = buildScroller({
                    usePublisher: el,
                    useEmitterValue: ea,
                    useEmitter: es
                }),
                em = buildWindowScroller({
                    usePublisher: el,
                    useEmitterValue: ea,
                    useEmitter: es
                }),
                ec = ei,
                ep = {
                    items: [],
                    offsetBottom: 0,
                    offsetTop: 0,
                    top: 0,
                    bottom: 0,
                    itemHeight: 0,
                    itemWidth: 0
                },
                ed = {
                    items: [{
                        index: 0
                    }],
                    offsetBottom: 0,
                    offsetTop: 0,
                    top: 0,
                    bottom: 0,
                    itemHeight: 0,
                    itemWidth: 0
                },
                {
                    round: ef,
                    ceil: eh,
                    floor: eg,
                    min: eS,
                    max: ex
                } = Math;

            function buildItems(e, t, o) {
                return Array.from({
                    length: t - e + 1
                }).map((t, n) => {
                    let r = null === o ? null : o[n + e];
                    return {
                        index: n + e,
                        data: r
                    }
                })
            }

            function gapComparator(e, t) {
                return e && e.column === t.column && e.row === t.row
            }

            function dimensionComparator(e, t) {
                return e && e.width === t.width && e.height === t.height
            }
            let ew = system(([{
                overscan: e,
                visibleRange: t,
                listBoundary: o
            }, {
                scrollTop: n,
                viewportHeight: r,
                scrollBy: i,
                scrollTo: l,
                smoothScrollTargetReached: a,
                scrollContainerState: s,
                footerHeight: u,
                headerHeight: m
            }, c, p, {
                propsReady: d,
                didMount: f
            }, {
                windowViewportRect: h,
                useWindowScroll: g,
                customScrollParent: S,
                windowScrollContainerState: x,
                windowScrollTo: w
            }, I]) => {
                let T = statefulStream(0),
                    v = statefulStream(0),
                    C = statefulStream(ep),
                    E = statefulStream({
                        height: 0,
                        width: 0
                    }),
                    y = statefulStream({
                        height: 0,
                        width: 0
                    }),
                    b = stream(),
                    F = stream(),
                    L = statefulStream(0),
                    z = statefulStream(null),
                    P = statefulStream({
                        row: 0,
                        column: 0
                    }),
                    R = stream(),
                    k = stream(),
                    H = statefulStream(!1),
                    B = statefulStream(0),
                    O = statefulStream(!0),
                    N = statefulStream(!1);
                pipe(f, withLatestFrom(B), filter(([e, t]) => !!t))(1, () => {
                    O(0, !1), v(0, 0)
                }), pipe(combineLatest(f, O, y, E, B, N), filter(([e, t, o, n, , r]) => e && !t && 0 !== o.height && 0 !== n.height && !r))(1, ([, , , , e]) => {
                    N(0, !0), skipFrames(1, () => {
                        b(0, e)
                    }), handleNext(pipe(n), () => {
                        o(0, [0, 0]), O(0, !0)
                    })
                }), connect(pipe(k, filter(e => null != e && e.scrollTop > 0), mapTo(0)), v), pipe(f, withLatestFrom(k), filter(([, e]) => null != e))(1, ([, e]) => {
                    e && (E(0, e.viewport), y(0, null == e ? void 0 : e.item), P(0, e.gap), e.scrollTop > 0 && (H(0, !0), handleNext(pipe(n, skip(1)), e => {
                        H(0, !1)
                    }), l(0, {
                        top: e.scrollTop
                    })))
                }), connect(pipe(E, map(({
                    height: e
                }) => e)), r), connect(pipe(combineLatest(duc(E, dimensionComparator), duc(y, dimensionComparator), duc(P, (e, t) => e && e.column === t.column && e.row === t.row), duc(n)), map(([e, t, o, n]) => ({
                    viewport: e,
                    item: t,
                    gap: o,
                    scrollTop: n
                }))), R), connect(pipe(combineLatest(duc(T), t, duc(P, gapComparator), duc(y, dimensionComparator), duc(E, dimensionComparator), duc(z), duc(v), duc(H), duc(O), duc(B)), filter(([, , , , , , , e]) => !e), map(([e, [t, o], n, r, i, l, a, , s, u]) => {
                    let m, c;
                    let {
                        row: p,
                        column: d
                    } = n, {
                        height: f,
                        width: h
                    } = r, {
                        width: g
                    } = i;
                    if (0 === a && (0 === e || 0 === g)) return ep;
                    if (0 === h) {
                        var S;
                        let t = getInitialTopMostItemIndexNumber(u, e),
                            o = 0 === t ? Math.max(a - 1, 0) : t;
                        return S = buildItems(t, o, l), { ...ed,
                            items: S
                        }
                    }
                    let x = itemsPerRow(g, h, d);
                    s ? 0 === t && 0 === o && a > 0 ? (m = 0, c = a - 1) : (m = x * eg((t + p) / (f + p)), c = eS(e - 1, ex(c = x * eh((o + p) / (f + p)) - 1, x - 1)), m = eS(c, ex(0, m))) : (m = 0, c = -1);
                    let w = buildItems(m, c, l),
                        {
                            top: I,
                            bottom: T
                        } = gridLayout(i, n, r, w),
                        v = eh(e / x),
                        C = v * f + (v - 1) * p;
                    return {
                        items: w,
                        offsetTop: I,
                        offsetBottom: C - T,
                        top: I,
                        bottom: T,
                        itemHeight: f,
                        itemWidth: h
                    }
                })), C), connect(pipe(z, filter(e => null !== e), map(e => e.length)), T), connect(pipe(combineLatest(E, y, C, P), filter(([e, t, {
                    items: o
                }]) => o.length > 0 && 0 !== t.height && 0 !== e.height), map(([e, t, {
                    items: o
                }, n]) => {
                    let {
                        top: r,
                        bottom: i
                    } = gridLayout(e, n, t, o);
                    return [r, i]
                }), distinctUntilChanged(tupleComparator)), o);
                let W = statefulStream(!1);
                connect(pipe(n, withLatestFrom(W), map(([e, t]) => t || 0 !== e)), W);
                let M = streamFromEmitter(pipe(duc(C), filter(({
                        items: e
                    }) => e.length > 0), withLatestFrom(T, W), filter(([{
                        items: e
                    }, t, o]) => o && e[e.length - 1].index === t - 1), map(([, e]) => e - 1), distinctUntilChanged())),
                    V = streamFromEmitter(pipe(duc(C), filter(({
                        items: e
                    }) => e.length > 0 && 0 === e[0].index), mapTo(0), distinctUntilChanged())),
                    D = streamFromEmitter(pipe(duc(C), withLatestFrom(H), filter(([{
                        items: e
                    }, t]) => e.length > 0 && !t), map(([{
                        items: e
                    }]) => ({
                        startIndex: e[0].index,
                        endIndex: e[e.length - 1].index
                    })), distinctUntilChanged(rangeComparator), throttleTime(0)));
                connect(D, p.scrollSeekRangeChanged), connect(pipe(b, withLatestFrom(E, y, T, P), map(([e, t, o, n, r]) => {
                    let i = normalizeIndexLocation(e),
                        {
                            align: l,
                            behavior: a,
                            offset: s
                        } = i,
                        u = i.index;
                    "LAST" === u && (u = n - 1);
                    let m = itemTop(t, r, o, u = ex(0, u, eS(n - 1, u)));
                    return "end" === l ? m = ef(m - t.height + o.height) : "center" === l && (m = ef(m - t.height / 2 + o.height / 2)), s && (m += s), {
                        top: m,
                        behavior: a
                    }
                })), l);
                let A = statefulStreamFromEmitter(pipe(C, map(e => e.offsetBottom + e.bottom)), 0);
                return connect(pipe(h, map(e => ({
                    width: e.visibleWidth,
                    height: e.visibleHeight
                }))), E), {
                    data: z,
                    totalCount: T,
                    viewportDimensions: E,
                    itemDimensions: y,
                    scrollTop: n,
                    scrollHeight: F,
                    overscan: e,
                    scrollBy: i,
                    scrollTo: l,
                    scrollToIndex: b,
                    smoothScrollTargetReached: a,
                    windowViewportRect: h,
                    windowScrollTo: w,
                    useWindowScroll: g,
                    customScrollParent: S,
                    windowScrollContainerState: x,
                    deviation: L,
                    scrollContainerState: s,
                    footerHeight: u,
                    headerHeight: m,
                    initialItemCount: v,
                    gap: P,
                    restoreStateFrom: k,
                    ...p,
                    initialTopMostItemIndex: B,
                    gridState: C,
                    totalListHeight: A,
                    ...c,
                    startReached: V,
                    endReached: M,
                    rangeChanged: D,
                    stateChanged: R,
                    propsReady: d,
                    stateRestoreInProgress: H,
                    ...I
                }
            }, tup(F, c, I, R, T, M, m));

            function gridLayout(e, t, o, n) {
                let {
                    height: r
                } = o;
                if (void 0 === r || 0 === n.length) return {
                    top: 0,
                    bottom: 0
                };
                let i = itemTop(e, t, o, n[0].index),
                    l = itemTop(e, t, o, n[n.length - 1].index) + r;
                return {
                    top: i,
                    bottom: l
                }
            }

            function itemTop(e, t, o, n) {
                let r = itemsPerRow(e.width, o.width, t.column),
                    i = eg(n / r),
                    l = i * o.height + ex(0, i - 1) * t.row;
                return l > 0 ? l + t.row : l
            }

            function itemsPerRow(e, t, o) {
                return ex(1, eg((e + o) / (eg(t) + o)))
            }
            let eI = system(() => {
                    let e = statefulStream(e => `Item ${e}`),
                        t = statefulStream({}),
                        o = statefulStream(null),
                        n = statefulStream("virtuoso-grid-item"),
                        r = statefulStream("virtuoso-grid-list"),
                        i = statefulStream(identity),
                        l = statefulStream("div"),
                        a = statefulStream(noop),
                        distinctProp = (e, o = null) => statefulStreamFromEmitter(pipe(t, map(t => t[e]), distinctUntilChanged()), o);
                    return {
                        context: o,
                        itemContent: e,
                        components: t,
                        computeItemKey: i,
                        itemClassName: n,
                        listClassName: r,
                        headerFooterTag: l,
                        scrollerRef: a,
                        FooterComponent: distinctProp("Footer"),
                        HeaderComponent: distinctProp("Header"),
                        ListComponent: distinctProp("List", "div"),
                        ItemComponent: distinctProp("Item", "div"),
                        ScrollerComponent: distinctProp("Scroller", "div"),
                        ScrollSeekPlaceholder: distinctProp("ScrollSeekPlaceholder", "div")
                    }
                }),
                eT = system(([e, t]) => ({ ...e,
                    ...t
                }), tup(ew, eI)),
                ev = r.memo(function() {
                    let e = eL("gridState"),
                        t = eL("listClassName"),
                        o = eL("itemClassName"),
                        n = eL("itemContent"),
                        i = eL("computeItemKey"),
                        l = eL("isSeeking"),
                        a = eF("scrollHeight"),
                        s = eL("ItemComponent"),
                        u = eL("ListComponent"),
                        m = eL("ScrollSeekPlaceholder"),
                        c = eL("context"),
                        p = eF("itemDimensions"),
                        d = eF("gap"),
                        f = eL("log"),
                        h = eL("stateRestoreInProgress"),
                        g = useSize(e => {
                            let t = e.parentElement.parentElement.scrollHeight;
                            a(t);
                            let o = e.firstChild;
                            if (o) {
                                let {
                                    width: e,
                                    height: t
                                } = o.getBoundingClientRect();
                                p({
                                    width: e,
                                    height: t
                                })
                            }
                            d({
                                row: resolveGapValue("row-gap", getComputedStyle(e).rowGap, f),
                                column: resolveGapValue("column-gap", getComputedStyle(e).columnGap, f)
                            })
                        });
                    return h ? null : r.createElement(u, {
                        ref: g,
                        className: t,
                        ...contextPropIfNotDomElement(u, c),
                        style: {
                            paddingTop: e.offsetTop,
                            paddingBottom: e.offsetBottom
                        },
                        "data-test-id": "virtuoso-item-list"
                    }, e.items.map(t => {
                        let a = i(t.index, t.data, c);
                        return l ? r.createElement(m, {
                            key: a,
                            ...contextPropIfNotDomElement(m, c),
                            index: t.index,
                            height: e.itemHeight,
                            width: e.itemWidth
                        }) : r.createElement(s, { ...contextPropIfNotDomElement(s, c),
                            className: o,
                            "data-index": t.index,
                            key: a
                        }, n(t.index, t.data, c))
                    }))
                }),
                eC = r.memo(function() {
                    let e = eL("HeaderComponent"),
                        t = eF("headerHeight"),
                        o = eL("headerFooterTag"),
                        n = useSize(e => t(correctItemSize(e, "height"))),
                        i = eL("context");
                    return e ? r.createElement(o, {
                        ref: n
                    }, r.createElement(e, contextPropIfNotDomElement(e, i))) : null
                }),
                eE = r.memo(function() {
                    let e = eL("FooterComponent"),
                        t = eF("footerHeight"),
                        o = eL("headerFooterTag"),
                        n = useSize(e => t(correctItemSize(e, "height"))),
                        i = eL("context");
                    return e ? r.createElement(o, {
                        ref: n
                    }, r.createElement(e, contextPropIfNotDomElement(e, i))) : null
                }),
                Viewport$1 = ({
                    children: e
                }) => {
                    let t = r.useContext(j),
                        o = eF("itemDimensions"),
                        n = eF("viewportDimensions"),
                        i = useSize(e => {
                            n(e.getBoundingClientRect())
                        });
                    return r.useEffect(() => {
                        t && (n({
                            height: t.viewportHeight,
                            width: t.viewportWidth
                        }), o({
                            height: t.itemHeight,
                            width: t.itemWidth
                        }))
                    }, [t, n, o]), r.createElement("div", {
                        style: ee,
                        ref: i
                    }, e)
                },
                WindowViewport$1 = ({
                    children: e
                }) => {
                    let t = r.useContext(j),
                        o = eF("windowViewportRect"),
                        n = eF("itemDimensions"),
                        i = eL("customScrollParent"),
                        l = useWindowViewportRectRef(o, i);
                    return r.useEffect(() => {
                        t && (n({
                            height: t.itemHeight,
                            width: t.itemWidth
                        }), o({
                            offsetTop: 0,
                            visibleHeight: t.viewportHeight,
                            visibleWidth: t.viewportWidth
                        }))
                    }, [t, o, n]), r.createElement("div", {
                        ref: l,
                        style: ee
                    }, e)
                },
                ey = r.memo(function({ ...e
                }) {
                    let t = eL("useWindowScroll"),
                        o = eL("customScrollParent"),
                        n = o || t ? eR : eP,
                        i = o || t ? WindowViewport$1 : Viewport$1;
                    return r.createElement(n, { ...e
                    }, r.createElement(i, null, r.createElement(eC, null), r.createElement(ev, null), r.createElement(eE, null)))
                }),
                {
                    Component: eb,
                    usePublisher: eF,
                    useEmitterValue: eL,
                    useEmitter: ez
                } = systemToComponent(eT, {
                    optional: {
                        context: "context",
                        totalCount: "totalCount",
                        overscan: "overscan",
                        itemContent: "itemContent",
                        components: "components",
                        computeItemKey: "computeItemKey",
                        data: "data",
                        initialItemCount: "initialItemCount",
                        scrollSeekConfiguration: "scrollSeekConfiguration",
                        headerFooterTag: "headerFooterTag",
                        listClassName: "listClassName",
                        itemClassName: "itemClassName",
                        useWindowScroll: "useWindowScroll",
                        customScrollParent: "customScrollParent",
                        scrollerRef: "scrollerRef",
                        logLevel: "logLevel",
                        restoreStateFrom: "restoreStateFrom",
                        initialTopMostItemIndex: "initialTopMostItemIndex"
                    },
                    methods: {
                        scrollTo: "scrollTo",
                        scrollBy: "scrollBy",
                        scrollToIndex: "scrollToIndex"
                    },
                    events: {
                        isScrolling: "isScrolling",
                        endReached: "endReached",
                        startReached: "startReached",
                        rangeChanged: "rangeChanged",
                        atBottomStateChange: "atBottomStateChange",
                        atTopStateChange: "atTopStateChange",
                        stateChanged: "stateChanged"
                    }
                }, ey),
                eP = buildScroller({
                    usePublisher: eF,
                    useEmitterValue: eL,
                    useEmitter: ez
                }),
                eR = buildWindowScroller({
                    usePublisher: eF,
                    useEmitterValue: eL,
                    useEmitter: ez
                });

            function resolveGapValue(e, t, o) {
                return ("normal" === t || (null == t ? void 0 : t.endsWith("px")) || o(`${e} was not resolved to pixel value correctly`, t, s.WARN), "normal" === t) ? 0 : parseInt(null != t ? t : "0", 10)
            }
            let ek = eb,
                eH = system(() => {
                    let e = statefulStream(e => r.createElement("td", null, "Item $", e)),
                        t = statefulStream(null),
                        o = statefulStream(null),
                        n = statefulStream(null),
                        i = statefulStream({}),
                        l = statefulStream(identity),
                        a = statefulStream(noop),
                        distinctProp = (e, t = null) => statefulStreamFromEmitter(pipe(i, map(t => t[e]), distinctUntilChanged()), t);
                    return {
                        context: t,
                        itemContent: e,
                        fixedHeaderContent: o,
                        fixedFooterContent: n,
                        components: i,
                        computeItemKey: l,
                        scrollerRef: a,
                        TableComponent: distinctProp("Table", "table"),
                        TableHeadComponent: distinctProp("TableHead", "thead"),
                        TableFooterComponent: distinctProp("TableFoot", "tfoot"),
                        TableBodyComponent: distinctProp("TableBody", "tbody"),
                        TableRowComponent: distinctProp("TableRow", "tr"),
                        ScrollerComponent: distinctProp("Scroller", "div"),
                        EmptyPlaceholder: distinctProp("EmptyPlaceholder"),
                        ScrollSeekPlaceholder: distinctProp("ScrollSeekPlaceholder"),
                        FillerRow: distinctProp("FillerRow")
                    }
                }),
                eB = system(([e, t]) => ({ ...e,
                    ...t
                }), tup(U, eH)),
                DefaultScrollSeekPlaceholder = ({
                    height: e
                }) => r.createElement("tr", null, r.createElement("td", {
                    style: {
                        height: e
                    }
                })),
                DefaultFillerRow = ({
                    height: e
                }) => r.createElement("tr", null, r.createElement("td", {
                    style: {
                        height: e,
                        padding: 0,
                        border: 0
                    }
                })),
                eO = {
                    overflowAnchor: "none"
                },
                eN = r.memo(function() {
                    let e = eD("listState"),
                        t = eV("sizeRanges"),
                        o = eD("useWindowScroll"),
                        n = eD("customScrollParent"),
                        i = eV("windowScrollContainerState"),
                        l = eV("scrollContainerState"),
                        a = n || o ? i : l,
                        s = eD("itemContent"),
                        u = eD("trackItemSizes"),
                        m = eD("itemSize"),
                        c = eD("log"),
                        {
                            callbackRef: p,
                            ref: d
                        } = useChangedListContentsSizes(t, m, u, a, c, void 0, n),
                        [f, h] = r.useState(0);
                    eA("deviation", e => {
                        f !== e && (d.current.style.marginTop = `${e}px`, h(e))
                    });
                    let g = eD("EmptyPlaceholder"),
                        S = eD("ScrollSeekPlaceholder") || DefaultScrollSeekPlaceholder,
                        x = eD("FillerRow") || DefaultFillerRow,
                        w = eD("TableBodyComponent"),
                        I = eD("TableRowComponent"),
                        T = eD("computeItemKey"),
                        v = eD("isSeeking"),
                        C = eD("paddingTopAddition"),
                        E = eD("firstItemIndex"),
                        y = eD("statefulTotalCount"),
                        b = eD("context");
                    if (0 === y && g) return r.createElement(g, contextPropIfNotDomElement(g, b));
                    let F = e.offsetTop + C + f,
                        L = e.offsetBottom,
                        z = F > 0 ? r.createElement(x, {
                            height: F,
                            key: "padding-top",
                            context: b
                        }) : null,
                        P = L > 0 ? r.createElement(x, {
                            height: L,
                            key: "padding-bottom",
                            context: b
                        }) : null,
                        R = e.items.map(e => {
                            let t = e.originalIndex,
                                o = T(t + E, e.data, b);
                            return v ? r.createElement(S, { ...contextPropIfNotDomElement(S, b),
                                key: o,
                                index: e.index,
                                height: e.size,
                                type: e.type || "item"
                            }) : r.createElement(I, { ...contextPropIfNotDomElement(I, b),
                                ...itemPropIfNotDomElement(I, e.data),
                                key: o,
                                "data-index": t,
                                "data-known-size": e.size,
                                "data-item-index": e.index,
                                style: eO
                            }, s(e.index, e.data, b))
                        });
                    return r.createElement(w, {
                        ref: p,
                        "data-test-id": "virtuoso-item-list",
                        ...contextPropIfNotDomElement(w, b)
                    }, [z, ...R, P])
                }),
                Viewport = ({
                    children: e
                }) => {
                    let t = r.useContext(K),
                        o = eV("viewportHeight"),
                        n = eV("fixedItemHeight"),
                        i = useSize(compose(o, e => correctItemSize(e, "height")));
                    return r.useEffect(() => {
                        t && (o(t.viewportHeight), n(t.itemHeight))
                    }, [t, o, n]), r.createElement("div", {
                        style: ee,
                        ref: i,
                        "data-viewport-type": "element"
                    }, e)
                },
                WindowViewport = ({
                    children: e
                }) => {
                    let t = r.useContext(K),
                        o = eV("windowViewportRect"),
                        n = eV("fixedItemHeight"),
                        i = eD("customScrollParent"),
                        l = useWindowViewportRectRef(o, i);
                    return r.useEffect(() => {
                        t && (n(t.itemHeight), o({
                            offsetTop: 0,
                            visibleHeight: t.viewportHeight,
                            visibleWidth: 100
                        }))
                    }, [t, o, n]), r.createElement("div", {
                        ref: l,
                        style: ee,
                        "data-viewport-type": "window"
                    }, e)
                },
                eW = r.memo(function(e) {
                    let t = eD("useWindowScroll"),
                        o = eD("customScrollParent"),
                        n = eV("fixedHeaderHeight"),
                        i = eV("fixedFooterHeight"),
                        l = eD("fixedHeaderContent"),
                        a = eD("fixedFooterContent"),
                        s = eD("context"),
                        u = useSize(compose(n, e => correctItemSize(e, "height"))),
                        m = useSize(compose(i, e => correctItemSize(e, "height"))),
                        c = o || t ? eG : eU,
                        p = o || t ? WindowViewport : Viewport,
                        d = eD("TableComponent"),
                        f = eD("TableHeadComponent"),
                        h = eD("TableFooterComponent"),
                        g = l ? r.createElement(f, {
                            key: "TableHead",
                            style: {
                                zIndex: 2,
                                position: "sticky",
                                top: 0
                            },
                            ref: u,
                            ...contextPropIfNotDomElement(f, s)
                        }, l()) : null,
                        S = a ? r.createElement(h, {
                            key: "TableFoot",
                            style: {
                                zIndex: 1,
                                position: "sticky",
                                bottom: 0
                            },
                            ref: m,
                            ...contextPropIfNotDomElement(h, s)
                        }, a()) : null;
                    return r.createElement(c, { ...e
                    }, r.createElement(p, null, r.createElement(d, {
                        style: {
                            borderSpacing: 0,
                            overflowAnchor: "none"
                        },
                        ...contextPropIfNotDomElement(d, s)
                    }, [g, r.createElement(eN, {
                        key: "TableBody"
                    }), S])))
                }),
                {
                    Component: eM,
                    usePublisher: eV,
                    useEmitterValue: eD,
                    useEmitter: eA
                } = systemToComponent(eB, {
                    required: {},
                    optional: {
                        restoreStateFrom: "restoreStateFrom",
                        context: "context",
                        followOutput: "followOutput",
                        firstItemIndex: "firstItemIndex",
                        itemContent: "itemContent",
                        fixedHeaderContent: "fixedHeaderContent",
                        fixedFooterContent: "fixedFooterContent",
                        overscan: "overscan",
                        increaseViewportBy: "increaseViewportBy",
                        totalCount: "totalCount",
                        topItemCount: "topItemCount",
                        initialTopMostItemIndex: "initialTopMostItemIndex",
                        components: "components",
                        groupCounts: "groupCounts",
                        atBottomThreshold: "atBottomThreshold",
                        atTopThreshold: "atTopThreshold",
                        computeItemKey: "computeItemKey",
                        defaultItemHeight: "defaultItemHeight",
                        fixedItemHeight: "fixedItemHeight",
                        itemSize: "itemSize",
                        scrollSeekConfiguration: "scrollSeekConfiguration",
                        data: "data",
                        initialItemCount: "initialItemCount",
                        initialScrollTop: "initialScrollTop",
                        alignToBottom: "alignToBottom",
                        useWindowScroll: "useWindowScroll",
                        customScrollParent: "customScrollParent",
                        scrollerRef: "scrollerRef",
                        logLevel: "logLevel"
                    },
                    methods: {
                        scrollToIndex: "scrollToIndex",
                        scrollIntoView: "scrollIntoView",
                        scrollTo: "scrollTo",
                        scrollBy: "scrollBy",
                        getState: "getState"
                    },
                    events: {
                        isScrolling: "isScrolling",
                        endReached: "endReached",
                        startReached: "startReached",
                        rangeChanged: "rangeChanged",
                        atBottomStateChange: "atBottomStateChange",
                        atTopStateChange: "atTopStateChange",
                        totalListHeightChanged: "totalListHeightChanged",
                        itemsRendered: "itemsRendered",
                        groupIndices: "groupIndices"
                    }
                }, eW),
                eU = buildScroller({
                    usePublisher: eV,
                    useEmitterValue: eD,
                    useEmitter: eA
                }),
                eG = buildWindowScroller({
                    usePublisher: eV,
                    useEmitterValue: eD,
                    useEmitter: eA
                })
        }
    }
]);