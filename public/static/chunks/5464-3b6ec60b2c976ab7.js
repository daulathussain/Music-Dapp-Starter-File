"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5464], {
        83760: function(e) {
            var t = Object.prototype.hasOwnProperty,
                r = "~";

            function Events() {}

            function EE(e, t, r) {
                this.fn = e, this.context = t, this.once = r || !1
            }

            function addListener(e, t, n, o, i) {
                if ("function" != typeof n) throw TypeError("The listener must be a function");
                var s = new EE(n, o || e, i),
                    c = r ? r + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
            }

            function clearEvent(e, t) {
                0 == --e._eventsCount ? e._events = new Events : delete e._events[t]
            }

            function EventEmitter() {
                this._events = new Events, this._eventsCount = 0
            }
            Object.create && (Events.prototype = Object.create(null), new Events().__proto__ || (r = !1)), EventEmitter.prototype.eventNames = function() {
                var e, n, o = [];
                if (0 === this._eventsCount) return o;
                for (n in e = this._events) t.call(e, n) && o.push(r ? n.slice(1) : n);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
            }, EventEmitter.prototype.listeners = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var o = 0, i = n.length, s = Array(i); o < i; o++) s[o] = n[o].fn;
                return s
            }, EventEmitter.prototype.listenerCount = function(e) {
                var t = r ? r + e : e,
                    n = this._events[t];
                return n ? n.fn ? 1 : n.length : 0
            }, EventEmitter.prototype.emit = function(e, t, n, o, i, s) {
                var c = r ? r + e : e;
                if (!this._events[c]) return !1;
                var u, l, d = this._events[c],
                    f = arguments.length;
                if (d.fn) {
                    switch (d.once && this.removeListener(e, d.fn, void 0, !0), f) {
                        case 1:
                            return d.fn.call(d.context), !0;
                        case 2:
                            return d.fn.call(d.context, t), !0;
                        case 3:
                            return d.fn.call(d.context, t, n), !0;
                        case 4:
                            return d.fn.call(d.context, t, n, o), !0;
                        case 5:
                            return d.fn.call(d.context, t, n, o, i), !0;
                        case 6:
                            return d.fn.call(d.context, t, n, o, i, s), !0
                    }
                    for (l = 1, u = Array(f - 1); l < f; l++) u[l - 1] = arguments[l];
                    d.fn.apply(d.context, u)
                } else {
                    var p, m = d.length;
                    for (l = 0; l < m; l++) switch (d[l].once && this.removeListener(e, d[l].fn, void 0, !0), f) {
                        case 1:
                            d[l].fn.call(d[l].context);
                            break;
                        case 2:
                            d[l].fn.call(d[l].context, t);
                            break;
                        case 3:
                            d[l].fn.call(d[l].context, t, n);
                            break;
                        case 4:
                            d[l].fn.call(d[l].context, t, n, o);
                            break;
                        default:
                            if (!u)
                                for (p = 1, u = Array(f - 1); p < f; p++) u[p - 1] = arguments[p];
                            d[l].fn.apply(d[l].context, u)
                    }
                }
                return !0
            }, EventEmitter.prototype.on = function(e, t, r) {
                return addListener(this, e, t, r, !1)
            }, EventEmitter.prototype.once = function(e, t, r) {
                return addListener(this, e, t, r, !0)
            }, EventEmitter.prototype.removeListener = function(e, t, n, o) {
                var i = r ? r + e : e;
                if (!this._events[i]) return this;
                if (!t) return clearEvent(this, i), this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || o && !s.once || n && s.context !== n || clearEvent(this, i);
                else {
                    for (var c = 0, u = [], l = s.length; c < l; c++)(s[c].fn !== t || o && !s[c].once || n && s[c].context !== n) && u.push(s[c]);
                    u.length ? this._events[i] = 1 === u.length ? u[0] : u : clearEvent(this, i)
                }
                return this
            }, EventEmitter.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = r ? r + e : e, this._events[t] && clearEvent(this, t)) : (this._events = new Events, this._eventsCount = 0), this
            }, EventEmitter.prototype.off = EventEmitter.prototype.removeListener, EventEmitter.prototype.addListener = EventEmitter.prototype.on, EventEmitter.prefixed = r, EventEmitter.EventEmitter = EventEmitter, e.exports = EventEmitter
        },
        73306: function(e, t, r) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var n = r(97352),
                o = r(28683),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = o.useSyncExternalStore,
                c = n.useRef,
                u = n.useEffect,
                l = n.useMemo,
                d = n.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, r, n, o) {
                var f = c(null);
                if (null === f.current) {
                    var p = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = p
                } else p = f.current;
                var m = s(e, (f = l(function() {
                    function a(t) {
                        if (!c) {
                            if (c = !0, e = t, t = n(t), void 0 !== o && p.hasValue) {
                                var r = p.value;
                                if (o(r, t)) return s = r
                            }
                            return s = t
                        }
                        if (r = s, i(e, t)) return r;
                        var u = n(t);
                        return void 0 !== o && o(r, u) ? r : (e = t, s = u)
                    }
                    var e, s, c = !1,
                        u = void 0 === r ? null : r;
                    return [function() {
                        return a(t())
                    }, null === u ? void 0 : function() {
                        return a(u())
                    }]
                }, [t, r, n, o]))[0], f[1]);
                return u(function() {
                    p.hasValue = !0, p.value = m
                }, [m]), d(m), m
            }
        },
        67598: function(e, t, r) {
            e.exports = r(73306)
        },
        14049: function(e, t, r) {
            function defaultShouldDehydrateMutation(e) {
                return e.state.isPaused
            }

            function defaultShouldDehydrateQuery(e) {
                return "success" === e.state.status
            }
            r.d(t, {
                wO: function() {
                    return persistQueryClient
                }
            });
            let n = ["added", "removed", "updated"];

            function isCacheableEventType(e) {
                return n.includes(e)
            }
            async function persistQueryClientRestore({
                queryClient: e,
                persister: t,
                maxAge: r = 864e5,
                buster: n = "",
                hydrateOptions: o
            }) {
                try {
                    let i = await t.restoreClient();
                    if (i) {
                        if (i.timestamp) {
                            let s = Date.now() - i.timestamp > r,
                                c = i.buster !== n;
                            s || c ? t.removeClient() : function(e, t, r) {
                                if ("object" != typeof t || null === t) return;
                                let n = e.getMutationCache(),
                                    o = e.getQueryCache(),
                                    i = t.mutations || [],
                                    s = t.queries || [];
                                i.forEach(t => {
                                    var o;
                                    n.build(e, { ...null == r ? void 0 : null == (o = r.defaultOptions) ? void 0 : o.mutations,
                                        mutationKey: t.mutationKey
                                    }, t.state)
                                }), s.forEach(t => {
                                    var n;
                                    let i = o.get(t.queryHash),
                                        s = { ...t.state,
                                            fetchStatus: "idle"
                                        };
                                    if (i) {
                                        i.state.dataUpdatedAt < s.dataUpdatedAt && i.setState(s);
                                        return
                                    }
                                    o.build(e, { ...null == r ? void 0 : null == (n = r.defaultOptions) ? void 0 : n.queries,
                                        queryKey: t.queryKey,
                                        queryHash: t.queryHash
                                    }, s)
                                })
                            }(e, i.clientState, o)
                        } else t.removeClient()
                    }
                } catch (e) {
                    t.removeClient()
                }
            }
            async function persistQueryClientSave({
                queryClient: e,
                persister: t,
                buster: r = "",
                dehydrateOptions: n
            }) {
                let o = {
                    buster: r,
                    timestamp: Date.now(),
                    clientState: function(e, t = {}) {
                        let r = [],
                            n = [];
                        if (!1 !== t.dehydrateMutations) {
                            let n = t.shouldDehydrateMutation || defaultShouldDehydrateMutation;
                            e.getMutationCache().getAll().forEach(e => {
                                n(e) && r.push({
                                    mutationKey: e.options.mutationKey,
                                    state: e.state
                                })
                            })
                        }
                        if (!1 !== t.dehydrateQueries) {
                            let r = t.shouldDehydrateQuery || defaultShouldDehydrateQuery;
                            e.getQueryCache().getAll().forEach(e => {
                                r(e) && n.push({
                                    state: e.state,
                                    queryKey: e.queryKey,
                                    queryHash: e.queryHash
                                })
                            })
                        }
                        return {
                            mutations: r,
                            queries: n
                        }
                    }(e, n)
                };
                await t.persistClient(o)
            }

            function persistQueryClient(e) {
                let t, r = !1,
                    n = persistQueryClientRestore(e).then(() => {
                        r || (t = function(e) {
                            let t = e.queryClient.getQueryCache().subscribe(t => {
                                    isCacheableEventType(t.type) && persistQueryClientSave(e)
                                }),
                                r = e.queryClient.getMutationCache().subscribe(t => {
                                    isCacheableEventType(t.type) && persistQueryClientSave(e)
                                });
                            return () => {
                                t(), r()
                            }
                        }(e))
                    });
                return [() => {
                    r = !0, null == t || t()
                }, n]
            }
        },
        38601: function(e, t, r) {
            function createSyncStoragePersister({
                storage: e,
                key: t = "REACT_QUERY_OFFLINE_CACHE",
                throttleTime: r = 1e3,
                serialize: n = JSON.stringify,
                deserialize: o = JSON.parse,
                retry: i
            }) {
                if (e) {
                    let trySave = r => {
                        try {
                            e.setItem(t, n(r));
                            return
                        } catch (e) {
                            return e
                        }
                    };
                    return {
                        persistClient: function(e, t = 100) {
                            let r, n = null;
                            return function(...o) {
                                r = o, null === n && (n = setTimeout(() => {
                                    e(...r), n = null
                                }, t))
                            }
                        }(e => {
                            let t = e,
                                r = trySave(t),
                                n = 0;
                            for (; r && t;) n++, (t = null == i ? void 0 : i({
                                persistedClient: t,
                                error: r,
                                errorCount: n
                            })) && (r = trySave(t))
                        }, r),
                        restoreClient: () => {
                            let r = e.getItem(t);
                            if (r) return o(r)
                        },
                        removeClient: () => {
                            e.removeItem(t)
                        }
                    }
                }
                return {
                    persistClient: noop,
                    restoreClient: () => void 0,
                    removeClient: noop
                }
            }

            function noop() {}
            r.d(t, {
                K: function() {
                    return createSyncStoragePersister
                }
            })
        },
        44848: function(e, t, r) {
            r.d(t, {
                FF: function() {
                    return validateObject
                },
                S5: function() {
                    return numberToBytesLE
                },
                Wd: function() {
                    return equalBytes
                },
                bytesToNumberBE: function() {
                    return bytesToNumberBE
                },
                ci: function() {
                    return bytesToHex
                },
                dQ: function() {
                    return bitMask
                },
                eV: function() {
                    return concatBytes
                },
                hexToBytes: function() {
                    return hexToBytes
                },
                n$: function() {
                    return createHmacDrbg
                },
                ql: function() {
                    return ensureBytes
                },
                tL: function() {
                    return numberToBytesBE
                },
                ty: function() {
                    return bytesToNumberLE
                }
            }), BigInt(0);
            let n = BigInt(1),
                o = BigInt(2),
                u8a = e => e instanceof Uint8Array,
                i = Array.from({
                    length: 256
                }, (e, t) => t.toString(16).padStart(2, "0"));

            function bytesToHex(e) {
                if (!u8a(e)) throw Error("Uint8Array expected");
                let t = "";
                for (let r = 0; r < e.length; r++) t += i[e[r]];
                return t
            }

            function hexToNumber(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return BigInt("" === e ? "0" : `0x${e}`)
            }

            function hexToBytes(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let r = new Uint8Array(t / 2);
                for (let t = 0; t < r.length; t++) {
                    let n = 2 * t,
                        o = e.slice(n, n + 2),
                        i = Number.parseInt(o, 16);
                    if (Number.isNaN(i) || i < 0) throw Error("Invalid byte sequence");
                    r[t] = i
                }
                return r
            }

            function bytesToNumberBE(e) {
                return hexToNumber(bytesToHex(e))
            }

            function bytesToNumberLE(e) {
                if (!u8a(e)) throw Error("Uint8Array expected");
                return hexToNumber(bytesToHex(Uint8Array.from(e).reverse()))
            }

            function numberToBytesBE(e, t) {
                return hexToBytes(e.toString(16).padStart(2 * t, "0"))
            }

            function numberToBytesLE(e, t) {
                return numberToBytesBE(e, t).reverse()
            }

            function ensureBytes(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = hexToBytes(t)
                    } catch (r) {
                        throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)
                    } else if (u8a(t)) n = Uint8Array.from(t);
                    else throw Error(`${e} must be hex string or Uint8Array`);
                let o = n.length;
                if ("number" == typeof r && o !== r) throw Error(`${e} expected ${r} bytes, got ${o}`);
                return n
            }

            function concatBytes(...e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                    r = 0;
                return e.forEach(e => {
                    if (!u8a(e)) throw Error("Uint8Array expected");
                    t.set(e, r), r += e.length
                }), t
            }

            function equalBytes(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            let bitMask = e => (o << BigInt(e - 1)) - n,
                u8n = e => new Uint8Array(e),
                u8fr = e => Uint8Array.from(e);

            function createHmacDrbg(e, t, r) {
                if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = u8n(e),
                    o = u8n(e),
                    i = 0,
                    reset = () => {
                        n.fill(1), o.fill(0), i = 0
                    },
                    h = (...e) => r(o, n, ...e),
                    reseed = (e = u8n()) => {
                        o = h(u8fr([0]), e), n = h(), 0 !== e.length && (o = h(u8fr([1]), e), n = h())
                    },
                    gen = () => {
                        if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let e = 0,
                            r = [];
                        for (; e < t;) {
                            n = h();
                            let t = n.slice();
                            r.push(t), e += n.length
                        }
                        return concatBytes(...r)
                    };
                return (e, t) => {
                    let r;
                    for (reset(), reseed(e); !(r = t(gen()));) reseed();
                    return reset(), r
                }
            }
            let s = {
                bigint: e => "bigint" == typeof e,
                function: e => "function" == typeof e,
                boolean: e => "boolean" == typeof e,
                string: e => "string" == typeof e,
                stringOrUint8Array: e => "string" == typeof e || e instanceof Uint8Array,
                isSafeInteger: e => Number.isSafeInteger(e),
                array: e => Array.isArray(e),
                field: (e, t) => t.Fp.isValid(e),
                hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
            };

            function validateObject(e, t, r = {}) {
                let checkField = (t, r, n) => {
                    let o = s[r];
                    if ("function" != typeof o) throw Error(`Invalid validator "${r}", expected function`);
                    let i = e[t];
                    if ((!n || void 0 !== i) && !o(i, e)) throw Error(`Invalid param ${String(t)}=${i} (${typeof i}), expected ${r}`)
                };
                for (let [e, r] of Object.entries(t)) checkField(e, r, !1);
                for (let [e, t] of Object.entries(r)) checkField(e, t, !0);
                return e
            }
        },
        80479: function(e, t, r) {
            function number(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function bytes(e, ...t) {
                if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function hash(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                number(e.outputLen), number(e.blockLen)
            }

            function exists(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function output(e, t) {
                bytes(e);
                let r = t.outputLen;
                if (e.length < r) throw Error(`digestInto() expects output buffer of length at least ${r}`)
            }
            r.d(t, {
                Gg: function() {
                    return exists
                },
                J8: function() {
                    return output
                },
                Rx: function() {
                    return number
                },
                aI: function() {
                    return bytes
                },
                vp: function() {
                    return hash
                }
            })
        },
        84086: function(e, t, r) {
            r.d(t, {
                kb: function() {
                    return Hash
                },
                eV: function() {
                    return concatBytes
                },
                GL: function() {
                    return createView
                },
                O6: function() {
                    return randomBytes
                },
                np: function() {
                    return rotr
                },
                O0: function() {
                    return toBytes
                },
                Jq: function() {
                    return u32
                },
                hE: function() {
                    return wrapConstructor
                }
            });
            let n = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0,
                u8a = e => e instanceof Uint8Array,
                u32 = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                createView = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                rotr = (e, t) => e << 32 - t | e >>> t,
                o = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0];
            if (!o) throw Error("Non little-endian hardware is not supported");

            function toBytes(e) {
                if ("string" == typeof e && (e = function(e) {
                        if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                        return new Uint8Array(new TextEncoder().encode(e))
                    }(e)), !u8a(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }

            function concatBytes(...e) {
                let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0)),
                    r = 0;
                return e.forEach(e => {
                    if (!u8a(e)) throw Error("Uint8Array expected");
                    t.set(e, r), r += e.length
                }), t
            }
            let Hash = class Hash {
                clone() {
                    return this._cloneInto()
                }
            };

            function wrapConstructor(e) {
                let hashC = t => e().update(toBytes(t)).digest(),
                    t = e();
                return hashC.outputLen = t.outputLen, hashC.blockLen = t.blockLen, hashC.create = () => e(), hashC
            }

            function randomBytes(e = 32) {
                if (n && "function" == typeof n.getRandomValues) return n.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        17051: function(e, t, r) {
            r.d(t, {
                Ko: function() {
                    return __privateAdd
                },
                ac: function() {
                    return __privateGet
                },
                qx: function() {
                    return __privateSet
                },
                wR: function() {
                    return s
                }
            });
            var n = r(83760),
                o = r(44333),
                i = r(65653),
                __accessCheck = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet = (e, t, r) => (__accessCheck(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet = (e, t, r, n) => (__accessCheck(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
                s = class extends n {
                    constructor({
                        chains: e = [o.R, i.w],
                        options: t
                    }) {
                        super(), this.chains = e, this.options = t
                    }
                    getBlockExplorerUrls(e) {
                        let {
                            default: t,
                            ...r
                        } = e.blockExplorers ? ? {};
                        if (t) return [t.url, ...Object.values(r).map(e => e.url)]
                    }
                    isChainUnsupported(e) {
                        return !this.chains.some(t => t.id === e)
                    }
                    setStorage(e) {
                        this.storage = e
                    }
                }
        },
        91798: function(e, t, r) {
            r.d(t, {
                QB: function() {
                    return configureChains
                },
                $j: function() {
                    return connect
                },
                _g: function() {
                    return createConfig
                },
                o6: function() {
                    return createStorage
                },
                vZ: function() {
                    return function deepEqual(e, t) {
                        if (e === t) return !0;
                        if (e && t && "object" == typeof e && "object" == typeof t) {
                            let r, n;
                            if (e.constructor !== t.constructor) return !1;
                            if (Array.isArray(e) && Array.isArray(t)) {
                                if ((r = e.length) != t.length) return !1;
                                for (n = r; 0 != n--;)
                                    if (!deepEqual(e[n], t[n])) return !1;
                                return !0
                            }
                            if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
                            if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
                            let o = Object.keys(e);
                            if ((r = o.length) !== Object.keys(t).length) return !1;
                            for (n = r; 0 != n--;)
                                if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
                            for (n = r; 0 != n--;) {
                                let r = o[n];
                                if (r && !deepEqual(e[r], t[r])) return !1
                            }
                            return !0
                        }
                        return e != e && t != t
                    }
                },
                zP: function() {
                    return disconnect
                },
                YD: function() {
                    return z
                },
                EG: function() {
                    return fetchBalance
                },
                RQ: function() {
                    return fetchBlockNumber
                },
                D0: function() {
                    return getAccount
                },
                Hy: function() {
                    return getNetwork
                },
                uV: function() {
                    return getPublicClient
                },
                xz: function() {
                    return getWalletClient
                },
                jr: function() {
                    return getWebSocketPublicClient
                },
                wp: function() {
                    return q
                },
                a4: function() {
                    return readContract
                },
                JH: function() {
                    return readContracts
                },
                If: function() {
                    return switchNetwork
                },
                uH: function() {
                    return watchAccount
                },
                QC: function() {
                    return watchNetwork
                },
                pC: function() {
                    return watchPublicClient
                },
                Tb: function() {
                    return watchWalletClient
                },
                fq: function() {
                    return watchWebSocketPublicClient
                }
            });
            var n, o, i, s, c, u, l = class extends Error {
                    constructor({
                        chainId: e,
                        connectorId: t
                    }) {
                        super(`Chain "${e}" not configured for connector "${t}".`), this.name = "ChainNotConfiguredForConnectorError"
                    }
                },
                d = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConnectorNotFoundError", this.message = "Connector not found"
                    }
                };

            function normalizeChainId(e) {
                return "string" == typeof e ? Number.parseInt(e, "0x" === e.trim().substring(0, 2) ? 16 : 10) : "bigint" == typeof e ? Number(e) : e
            }
            var f = r(17051),
                p = r(70278),
                m = r(79930),
                b = r(56218),
                y = r(37491),
                g = r(19473),
                v = class extends f.wR {
                    constructor({
                        chains: e,
                        options: t
                    } = {}) {
                        let r = {
                            shimDisconnect: !0,
                            getProvider() {
                                if ("undefined" == typeof window) return;
                                let e = window.ethereum;
                                return e ? .providers && e.providers.length > 0 ? e.providers[0] : e
                            },
                            ...t
                        };
                        super({
                            chains: e,
                            options: r
                        }), this.id = "injected", (0, f.Ko)(this, n, void 0), this.shimDisconnectKey = `${this.id}.shimDisconnect`, this.onAccountsChanged = e => {
                            0 === e.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, p.K)(e[0])
                            })
                        }, this.onChainChanged = e => {
                            let t = normalizeChainId(e),
                                r = this.isChainUnsupported(t);
                            this.emit("change", {
                                chain: {
                                    id: t,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = async e => {
                            if (1013 === e.code) {
                                let e = await this.getProvider();
                                if (e) {
                                    let e = await this.getAccount();
                                    if (e) return
                                }
                            }
                            this.emit("disconnect"), this.options.shimDisconnect && this.storage ? .removeItem(this.shimDisconnectKey)
                        };
                        let o = r.getProvider();
                        if ("string" == typeof r.name) this.name = r.name;
                        else if (o) {
                            let e = function(e) {
                                if (!e) return "Injected";
                                let getName = e => e.isApexWallet ? "Apex Wallet" : e.isAvalanche ? "Core Wallet" : e.isBackpack ? "Backpack" : e.isBifrost ? "Bifrost Wallet" : e.isBitKeep ? "BitKeep" : e.isBitski ? "Bitski" : e.isBlockWallet ? "BlockWallet" : e.isBraveWallet ? "Brave Wallet" : e.isCoin98 ? "Coin98 Wallet" : e.isCoinbaseWallet ? "Coinbase Wallet" : e.isDawn ? "Dawn Wallet" : e.isDefiant ? "Defiant" : e.isDesig ? "Desig Wallet" : e.isEnkrypt ? "Enkrypt" : e.isExodus ? "Exodus" : e.isFordefi ? "Fordefi" : e.isFrame ? "Frame" : e.isFrontier ? "Frontier Wallet" : e.isGamestop ? "GameStop Wallet" : e.isHaqqWallet ? "HAQQ Wallet" : e.isHyperPay ? "HyperPay Wallet" : e.isImToken ? "ImToken" : e.isHaloWallet ? "Halo Wallet" : e.isKuCoinWallet ? "KuCoin Wallet" : e.isMathWallet ? "MathWallet" : e.isNovaWallet ? "Nova Wallet" : e.isOkxWallet || e.isOKExWallet ? "OKX Wallet" : e.isOktoWallet ? "Okto Wallet" : e.isOneInchIOSWallet || e.isOneInchAndroidWallet ? "1inch Wallet" : e.isOneKey ? "OneKey Wallet" : e.isOpera ? "Opera" : e.isPhantom ? "Phantom" : e.isPortal ? "Ripio Portal" : e.isRabby ? "Rabby Wallet" : e.isRainbow ? "Rainbow" : e.isSafePal ? "SafePal Wallet" : e.isStatus ? "Status" : e.isSubWallet ? "SubWallet" : e.isTalisman ? "Talisman" : e.isTally ? "Taho" : e.isTokenPocket ? "TokenPocket" : e.isTokenary ? "Tokenary" : e.isTrust || e.isTrustWallet ? "Trust Wallet" : e.isTTWallet ? "TTWallet" : e.isXDEFI ? "XDEFI Wallet" : e.isZeal ? "Zeal" : e.isZerion ? "Zerion" : e.isMetaMask ? "MetaMask" : void 0;
                                if (e.providers ? .length) {
                                    let t = new Set,
                                        r = 1;
                                    for (let n of e.providers) {
                                        let e = getName(n);
                                        e || (e = `Unknown Wallet #${r}`, r += 1), t.add(e)
                                    }
                                    let n = [...t];
                                    return n.length ? n : n[0] ? ? "Injected"
                                }
                                return getName(e) ? ? "Injected"
                            }(o);
                            r.name ? this.name = r.name(e) : "string" == typeof e ? this.name = e : this.name = e[0]
                        } else this.name = "Injected";
                        this.ready = !!o
                    }
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider();
                            if (!t) throw new d;
                            t.on && (t.on("accountsChanged", this.onAccountsChanged), t.on("chainChanged", this.onChainChanged), t.on("disconnect", this.onDisconnect)), this.emit("message", {
                                type: "connecting"
                            });
                            let r = await t.request({
                                    method: "eth_requestAccounts"
                                }),
                                n = (0, p.K)(r[0]),
                                o = await this.getChainId(),
                                i = this.isChainUnsupported(o);
                            if (e && o !== e) {
                                let t = await this.switchChain(e);
                                o = t.id, i = this.isChainUnsupported(o)
                            }
                            return this.options.shimDisconnect && this.storage ? .setItem(this.shimDisconnectKey, !0), {
                                account: n,
                                chain: {
                                    id: o,
                                    unsupported: i
                                }
                            }
                        } catch (e) {
                            if (this.isUserRejectedRequestError(e)) throw new m.ab(e);
                            if (-32002 === e.code) throw new m.pT(e);
                            throw e
                        }
                    }
                    async disconnect() {
                        let e = await this.getProvider();
                        e ? .removeListener && (e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && this.storage ? .removeItem(this.shimDisconnectKey))
                    }
                    async getAccount() {
                        let e = await this.getProvider();
                        if (!e) throw new d;
                        let t = await e.request({
                            method: "eth_accounts"
                        });
                        return (0, p.K)(t[0])
                    }
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new d;
                        return e.request({
                            method: "eth_chainId"
                        }).then(normalizeChainId)
                    }
                    async getProvider() {
                        let e = this.options.getProvider();
                        return e && (0, f.qx)(this, n, e), (0, f.ac)(this, n)
                    }
                    async getWalletClient({
                        chainId: e
                    } = {}) {
                        let [t, r] = await Promise.all([this.getProvider(), this.getAccount()]), n = this.chains.find(t => t.id === e);
                        if (!t) throw Error("provider is required.");
                        return (0, b.K)({
                            account: r,
                            chain: n,
                            transport: (0, y.P)(t)
                        })
                    }
                    async isAuthorized() {
                        try {
                            if (this.options.shimDisconnect && !this.storage ? .getItem(this.shimDisconnectKey)) return !1;
                            let e = await this.getProvider();
                            if (!e) throw new d;
                            let t = await this.getAccount();
                            return !!t
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(e) {
                        let t = await this.getProvider();
                        if (!t) throw new d;
                        let r = (0, g.eC)(e);
                        try {
                            return await Promise.all([t.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: r
                                }]
                            }), new Promise(t => this.on("change", ({
                                chain: r
                            }) => {
                                r ? .id === e && t()
                            }))]), this.chains.find(t => t.id === e) ? ? {
                                id: e,
                                name: `Chain ${r}`,
                                network: `${r}`,
                                nativeCurrency: {
                                    name: "Ether",
                                    decimals: 18,
                                    symbol: "ETH"
                                },
                                rpcUrls: {
                                    default: {
                                        http: [""]
                                    },
                                    public: {
                                        http: [""]
                                    }
                                }
                            }
                        } catch (o) {
                            let n = this.chains.find(t => t.id === e);
                            if (!n) throw new l({
                                chainId: e,
                                connectorId: this.id
                            });
                            if (4902 === o.code || o ? .data ? .originalError ? .code === 4902) try {
                                await t.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: r,
                                        chainName: n.name,
                                        nativeCurrency: n.nativeCurrency,
                                        rpcUrls: [n.rpcUrls.public ? .http[0] ? ? ""],
                                        blockExplorerUrls: this.getBlockExplorerUrls(n)
                                    }]
                                });
                                let o = await this.getChainId();
                                if (o !== e) throw new m.ab(Error("User rejected switch after adding network."));
                                return n
                            } catch (e) {
                                throw new m.ab(e)
                            }
                            if (this.isUserRejectedRequestError(o)) throw new m.ab(o);
                            throw new m.x3(o)
                        }
                    }
                    async watchAsset({
                        address: e,
                        decimals: t = 18,
                        image: r,
                        symbol: n
                    }) {
                        let o = await this.getProvider();
                        if (!o) throw new d;
                        return o.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: e,
                                    decimals: t,
                                    image: r,
                                    symbol: n
                                }
                            }
                        })
                    }
                    isUserRejectedRequestError(e) {
                        return 4001 === e.code
                    }
                };
            n = new WeakMap;
            var __accessCheck = (e, t, r) => {
                    if (!t.has(e)) throw TypeError("Cannot " + r)
                },
                __privateGet = (e, t, r) => (__accessCheck(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
                __privateAdd = (e, t, r) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, r)
                },
                __privateSet = (e, t, r, n) => (__accessCheck(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
                __privateMethod = (e, t, r) => (__accessCheck(e, t, "access private method"), r),
                w = r(85031),
                E = r(9447),
                C = r(36875),
                P = r(76550),
                x = r(92565),
                k = r(14167),
                S = r(84339),
                T = r(56032),
                I = r(7342),
                A = r(89365),
                R = r(41680),
                F = r(70677),
                O = r(17114),
                B = r(23281),
                j = r(86174);

            function configureChains(e, t, {
                batch: r = {
                    multicall: {
                        wait: 32
                    }
                },
                pollingInterval: n = 4e3,
                rank: o,
                retryCount: i,
                retryDelay: s,
                stallTimeout: c
            } = {}) {
                if (!e.length) throw Error("must have at least one chain");
                let u = [],
                    l = {},
                    d = {};
                for (let r of e) {
                    let e = !1;
                    for (let n of t) {
                        let t = n(r);
                        t && (e = !0, u.some(({
                            id: e
                        }) => e === r.id) || (u = [...u, t.chain]), l[r.id] = [...l[r.id] || [], ...t.rpcUrls.http], t.rpcUrls.webSocket && (d[r.id] = [...d[r.id] || [], ...t.rpcUrls.webSocket]))
                    }
                    if (!e) throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)
                }
                return {
                    chains: u,
                    publicClient: ({
                        chainId: t
                    }) => {
                        let d = u.find(e => e.id === t) ? ? e[0],
                            f = l[d.id];
                        if (!f || !f[0]) throw Error(`No providers configured for chain "${d.id}"`);
                        let p = (0, w.v)({
                            batch: r,
                            chain: d,
                            transport: (0, E.t)(f.map(e => (0, C.d)(e, {
                                timeout: c
                            })), {
                                rank: o,
                                retryCount: i,
                                retryDelay: s
                            }),
                            pollingInterval: n
                        });
                        return Object.assign(p, {
                            chains: u
                        })
                    },
                    webSocketPublicClient: ({
                        chainId: t
                    }) => {
                        let l = u.find(e => e.id === t) ? ? e[0],
                            f = d[l.id];
                        if (!f || !f[0]) return;
                        let p = (0, w.v)({
                            batch: r,
                            chain: l,
                            transport: (0, E.t)(f.map(e => (function(e, t = {}) {
                                let {
                                    key: r = "webSocket",
                                    name: n = "WebSocket JSON-RPC",
                                    retryDelay: o
                                } = t;
                                return ({
                                    chain: i,
                                    retryCount: s,
                                    timeout: c
                                }) => {
                                    let u = t.retryCount ? ? s,
                                        l = c ? ? t.timeout ? ? 1e4,
                                        d = e || i ? .rpcUrls.default.webSocket ? .[0];
                                    if (!d) throw new x.I;
                                    return (0, S.q)({
                                        key: r,
                                        name: n,
                                        async request({
                                            method: e,
                                            params: t
                                        }) {
                                            let r = {
                                                    method: e,
                                                    params: t
                                                },
                                                n = await (0, k.hb)(d),
                                                {
                                                    error: o,
                                                    result: i
                                                } = await k.f4.webSocketAsync(n, {
                                                    body: r,
                                                    timeout: l
                                                });
                                            if (o) throw new P.bs({
                                                body: r,
                                                error: o,
                                                url: d
                                            });
                                            return i
                                        },
                                        retryCount: u,
                                        retryDelay: o,
                                        timeout: l,
                                        type: "webSocket"
                                    }, {
                                        getSocket: () => (0, k.hb)(d),
                                        async subscribe({
                                            params: e,
                                            onData: t,
                                            onError: r
                                        }) {
                                            let n = await (0, k.hb)(d),
                                                {
                                                    result: o
                                                } = await new Promise((o, i) => k.f4.webSocket(n, {
                                                    body: {
                                                        method: "eth_subscribe",
                                                        params: e
                                                    },
                                                    onResponse(e) {
                                                        if (e.error) {
                                                            i(e.error), r ? .(e.error);
                                                            return
                                                        }
                                                        if ("number" == typeof e.id) {
                                                            o(e);
                                                            return
                                                        }
                                                        "eth_subscription" === e.method && t(e.params)
                                                    }
                                                }));
                                            return {
                                                subscriptionId: o,
                                                unsubscribe: async () => new Promise(e => k.f4.webSocket(n, {
                                                    body: {
                                                        method: "eth_unsubscribe",
                                                        params: [o]
                                                    },
                                                    onResponse: e
                                                }))
                                            }
                                        }
                                    })
                                }
                            })(e, {
                                timeout: c
                            })), {
                                rank: o,
                                retryCount: i,
                                retryDelay: s
                            }),
                            pollingInterval: n
                        });
                        return Object.assign(p, {
                            chains: u
                        })
                    }
                }
            }
            var N = class extends Error {
                    constructor({
                        chainId: e,
                        connectorId: t
                    }) {
                        super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`), this.name = "ChainNotConfigured"
                    }
                },
                $ = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConnectorAlreadyConnectedError", this.message = "Connector already connected"
                    }
                },
                M = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConfigChainsNotFound", this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work."
                    }
                },
                G = class extends Error {
                    constructor({
                        connector: e
                    }) {
                        super(`"${e.name}" does not support programmatic chain switching.`), this.name = "SwitchChainNotSupportedError"
                    }
                },
                findAndReplace = (e, {
                    find: t,
                    replace: r
                }) => e && t(e) ? r(e) : "object" != typeof e ? e : Array.isArray(e) ? e.map(e => findAndReplace(e, {
                    find: t,
                    replace: r
                })) : e instanceof Object ? Object.entries(e).reduce((e, [n, o]) => ({ ...e,
                    [n]: findAndReplace(o, {
                        find: t,
                        replace: r
                    })
                }), {}) : e;

            function deserialize(e) {
                let t = JSON.parse(e),
                    r = findAndReplace(t, {
                        find: e => "string" == typeof e && e.startsWith("#bigint."),
                        replace: e => BigInt(e.replace("#bigint.", ""))
                    });
                return r
            }

            function getUnit(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(T.Bd[e])
            }

            function getReferenceKey(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function getCutoff(e, t) {
                let {
                    length: r
                } = e;
                for (let n = 0; n < r; ++n)
                    if (e[n] === t) return n + 1;
                return 0
            }

            function serialize(e, t, r, n) {
                return JSON.stringify(e, function(e, t) {
                    let r = "function" == typeof e,
                        n = "function" == typeof t,
                        o = [],
                        i = [];
                    return function(s, c) {
                        if ("object" == typeof c) {
                            if (o.length) {
                                let e = getCutoff(o, this);
                                0 === e ? o[o.length] = this : (o.splice(e), i.splice(e)), i[i.length] = s;
                                let r = getCutoff(o, c);
                                if (0 !== r) return n ? t.call(this, s, c, getReferenceKey(i, r)) : `[ref=${getReferenceKey(i,r)}]`
                            } else o[0] = c, i[0] = s
                        }
                        return r ? e.call(this, s, c) : c
                    }
                }((e, r) => {
                    let n = "bigint" == typeof r ? `#bigint.${r.toString()}` : r;
                    return t ? .(e, n) || n
                }, n), r ? ? void 0)
            }
            var q = {
                getItem: e => "",
                setItem: (e, t) => null,
                removeItem: e => null
            };

            function createStorage({
                deserialize: e = deserialize,
                key: t = "wagmi",
                serialize: r = serialize,
                storage: n
            }) {
                return { ...n,
                    getItem: (r, o = null) => {
                        let i = n.getItem(`${t}.${r}`);
                        try {
                            return i ? e(i) : o
                        } catch (e) {
                            return console.warn(e), o
                        }
                    },
                    setItem: (e, o) => {
                        if (null === o) n.removeItem(`${t}.${e}`);
                        else try {
                            n.setItem(`${t}.${e}`, r(o))
                        } catch (e) {
                            console.error(e)
                        }
                    },
                    removeItem: e => n.removeItem(`${t}.${e}`)
                }
            }
            var U = "store",
                _ = class {
                    constructor({
                        autoConnect: e = !1,
                        connectors: t = [new v],
                        publicClient: r,
                        storage: n = createStorage({
                            storage: "undefined" != typeof window ? window.localStorage : q
                        }),
                        logger: u = {
                            warn: console.warn
                        },
                        webSocketPublicClient: l
                    }) {
                        let d;
                        __privateAdd(this, s), this.publicClients = new Map, this.webSocketPublicClients = new Map, __privateAdd(this, o, void 0), __privateAdd(this, i, void 0), this.args = {
                            autoConnect: e,
                            connectors: t,
                            logger: u,
                            publicClient: r,
                            storage: n,
                            webSocketPublicClient: l
                        };
                        let f = "disconnected";
                        if (e) try {
                            let e = n.getItem(U),
                                t = e ? .state ? .data;
                            f = t ? .account ? "reconnecting" : "connecting", d = t ? .chain ? .id
                        } catch (e) {}
                        let p = "function" == typeof t ? t() : t;
                        p.forEach(e => e.setStorage(n)), this.store = (0, A.M)((0, I.XR)((0, I.tJ)(() => ({
                            connectors: p,
                            publicClient: this.getPublicClient({
                                chainId: d
                            }),
                            status: f,
                            webSocketPublicClient: this.getWebSocketPublicClient({
                                chainId: d
                            })
                        }), {
                            name: U,
                            storage: n,
                            partialize: t => ({ ...e && {
                                    data: {
                                        account: t ? .data ? .account,
                                        chain: t ? .data ? .chain
                                    }
                                },
                                chains: t ? .chains
                            }),
                            version: 2
                        }))), this.storage = n, __privateSet(this, i, n ? .getItem("wallet")), __privateMethod(this, s, c).call(this), e && "undefined" != typeof window && setTimeout(async () => await this.autoConnect(), 0)
                    }
                    get chains() {
                        return this.store.getState().chains
                    }
                    get connectors() {
                        return this.store.getState().connectors
                    }
                    get connector() {
                        return this.store.getState().connector
                    }
                    get data() {
                        return this.store.getState().data
                    }
                    get error() {
                        return this.store.getState().error
                    }
                    get lastUsedChainId() {
                        return this.data ? .chain ? .id
                    }
                    get publicClient() {
                        return this.store.getState().publicClient
                    }
                    get status() {
                        return this.store.getState().status
                    }
                    get subscribe() {
                        return this.store.subscribe
                    }
                    get webSocketPublicClient() {
                        return this.store.getState().webSocketPublicClient
                    }
                    setState(e) {
                        let t = "function" == typeof e ? e(this.store.getState()) : e;
                        this.store.setState(t, !0)
                    }
                    clearState() {
                        this.setState(e => ({ ...e,
                            chains: void 0,
                            connector: void 0,
                            data: void 0,
                            error: void 0,
                            status: "disconnected"
                        }))
                    }
                    async destroy() {
                        this.connector && await this.connector.disconnect ? .(), __privateSet(this, o, !1), this.clearState(), this.store.destroy()
                    }
                    async autoConnect() {
                        if (__privateGet(this, o)) return;
                        __privateSet(this, o, !0), this.setState(e => ({ ...e,
                            status: e.data ? .account ? "reconnecting" : "connecting"
                        }));
                        let e = __privateGet(this, i) ? [...this.connectors].sort(e => e.id === __privateGet(this, i) ? -1 : 1) : this.connectors,
                            t = !1;
                        for (let r of e) {
                            if (!r.ready || !r.isAuthorized) continue;
                            let e = await r.isAuthorized();
                            if (!e) continue;
                            let n = await r.connect();
                            this.setState(e => ({ ...e,
                                connector: r,
                                chains: r ? .chains,
                                data: n,
                                status: "connected"
                            })), t = !0;
                            break
                        }
                        return t || this.setState(e => ({ ...e,
                            data: void 0,
                            status: "disconnected"
                        })), __privateSet(this, o, !1), this.data
                    }
                    setConnectors(e) {
                        this.args = { ...this.args,
                            connectors: e
                        };
                        let t = "function" == typeof e ? e() : e;
                        t.forEach(e => e.setStorage(this.args.storage)), this.setState(e => ({ ...e,
                            connectors: t
                        }))
                    }
                    getPublicClient({
                        chainId: e
                    } = {}) {
                        let t = this.publicClients.get(-1);
                        if (t && t ? .chain.id === e || (t = this.publicClients.get(e ? ? -1))) return t;
                        let {
                            publicClient: r
                        } = this.args;
                        return t = "function" == typeof r ? r({
                            chainId: e
                        }) : r, this.publicClients.set(e ? ? -1, t), t
                    }
                    setPublicClient(e) {
                        let t = this.data ? .chain ? .id;
                        this.args = { ...this.args,
                            publicClient: e
                        }, this.publicClients.clear(), this.setState(e => ({ ...e,
                            publicClient: this.getPublicClient({
                                chainId: t
                            })
                        }))
                    }
                    getWebSocketPublicClient({
                        chainId: e
                    } = {}) {
                        let t = this.webSocketPublicClients.get(-1);
                        if (t && t ? .chain.id === e || (t = this.webSocketPublicClients.get(e ? ? -1))) return t;
                        let {
                            webSocketPublicClient: r
                        } = this.args;
                        return (t = "function" == typeof r ? r({
                            chainId: e
                        }) : r) && this.webSocketPublicClients.set(e ? ? -1, t), t
                    }
                    setWebSocketPublicClient(e) {
                        let t = this.data ? .chain ? .id;
                        this.args = { ...this.args,
                            webSocketPublicClient: e
                        }, this.webSocketPublicClients.clear(), this.setState(e => ({ ...e,
                            webSocketPublicClient: this.getWebSocketPublicClient({
                                chainId: t
                            })
                        }))
                    }
                    setLastUsedConnector(e = null) {
                        this.storage ? .setItem("wallet", e)
                    }
                };

            function createConfig(e) {
                let t = new _(e);
                return u = t, t
            }

            function getConfig() {
                if (!u) throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");
                return u
            }
            async function connect({
                chainId: e,
                connector: t
            }) {
                let r = getConfig(),
                    n = r.connector;
                if (n && t.id === n.id) throw new $;
                try {
                    r.setState(e => ({ ...e,
                        status: "connecting"
                    }));
                    let n = await t.connect({
                        chainId: e
                    });
                    return r.setLastUsedConnector(t.id), r.setState(e => ({ ...e,
                        connector: t,
                        chains: t ? .chains,
                        data: n,
                        status: "connected"
                    })), r.storage.setItem("connected", !0), { ...n,
                        connector: t
                    }
                } catch (e) {
                    throw r.setState(e => ({ ...e,
                        status: e.connector ? "connected" : "disconnected"
                    })), e
                }
            }
            async function disconnect() {
                let e = getConfig();
                e.connector && await e.connector.disconnect(), e.clearState(), e.storage.removeItem("connected")
            }
            o = new WeakMap, i = new WeakMap, s = new WeakSet, c = function() {
                let onChange = e => {
                        this.setState(t => ({ ...t,
                            data: { ...t.data,
                                ...e
                            }
                        }))
                    },
                    onDisconnect = () => {
                        this.clearState()
                    },
                    onError = e => {
                        this.setState(t => ({ ...t,
                            error: e
                        }))
                    };
                this.store.subscribe(({
                    connector: e
                }) => e, (e, t) => {
                    t ? .off ? .("change", onChange), t ? .off ? .("disconnect", onDisconnect), t ? .off ? .("error", onError), e && (e.on ? .("change", onChange), e.on ? .("disconnect", onDisconnect), e.on ? .("error", onError))
                });
                let {
                    publicClient: e,
                    webSocketPublicClient: t
                } = this.args;
                ("function" == typeof e || "function" == typeof t) && this.store.subscribe(({
                    data: e
                }) => e ? .chain ? .id, e => {
                    this.setState(t => ({ ...t,
                        publicClient: this.getPublicClient({
                            chainId: e
                        }),
                        webSocketPublicClient: this.getWebSocketPublicClient({
                            chainId: e
                        })
                    }))
                })
            };
            var D = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }],
                L = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "bytes32"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "bytes32"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }],
                z = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "tokenId",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "ApprovalForAll",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "operator",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "approved",
                        type: "bool"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "tokenId",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "payable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "tokenId",
                        type: "uint256"
                    }],
                    outputs: []
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "getApproved",
                    stateMutability: "view",
                    inputs: [{
                        name: "tokenId",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    type: "function",
                    name: "isApprovedForAll",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "operator",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "ownerOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "tokenId",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "owner",
                        type: "address"
                    }]
                }, {
                    type: "function",
                    name: "safeTransferFrom",
                    stateMutability: "payable",
                    inputs: [{
                        name: "from",
                        type: "address"
                    }, {
                        name: "to",
                        type: "address"
                    }, {
                        name: "tokenId",
                        type: "uint256"
                    }],
                    outputs: []
                }, {
                    type: "function",
                    name: "safeTransferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "from",
                        type: "address"
                    }, {
                        name: "to",
                        type: "address"
                    }, {
                        name: "id",
                        type: "uint256"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: []
                }, {
                    type: "function",
                    name: "setApprovalForAll",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "operator",
                        type: "address"
                    }, {
                        name: "approved",
                        type: "bool"
                    }],
                    outputs: []
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "tokenByIndex",
                    stateMutability: "view",
                    inputs: [{
                        name: "index",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "tokenByIndex",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "index",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "tokenId",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "tokenURI",
                    stateMutability: "view",
                    inputs: [{
                        name: "tokenId",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "payable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "tokeId",
                        type: "uint256"
                    }],
                    outputs: []
                }];

            function getPublicClient({
                chainId: e
            } = {}) {
                let t = getConfig();
                return e && t.getPublicClient({
                    chainId: e
                }) || t.publicClient
            }
            async function getWalletClient({
                chainId: e
            } = {}) {
                let t = getConfig(),
                    r = await t.connector ? .getWalletClient ? .({
                        chainId: e
                    }) || null;
                return r
            }

            function getWebSocketPublicClient({
                chainId: e
            } = {}) {
                let t = getConfig();
                return e && t.getWebSocketPublicClient({
                    chainId: e
                }) || t.webSocketPublicClient
            }

            function watchPublicClient(e, t) {
                let r = getConfig(),
                    handleChange = async () => t(getPublicClient(e)),
                    n = r.subscribe(({
                        publicClient: e
                    }) => e, handleChange);
                return n
            }

            function watchWalletClient({
                chainId: e
            }, t) {
                let r = getConfig(),
                    handleChange = async ({
                        chainId: r
                    }) => {
                        if (e && r && e !== r) return;
                        let n = await getWalletClient({
                            chainId: e
                        });
                        return getConfig().connector ? t(n) : t(null)
                    },
                    n = r.subscribe(({
                        data: e,
                        connector: t
                    }) => ({
                        account: e ? .account,
                        chainId: e ? .chain ? .id,
                        connector: t
                    }), handleChange, {
                        equalityFn: j.X
                    });
                return n
            }

            function watchWebSocketPublicClient(e, t) {
                let r = getConfig(),
                    handleChange = async () => t(getWebSocketPublicClient(e)),
                    n = r.subscribe(({
                        webSocketPublicClient: e
                    }) => e, handleChange);
                return n
            }
            async function multicall({
                chainId: e,
                contracts: t,
                blockNumber: r,
                blockTag: n,
                ...o
            }) {
                let i = getPublicClient({
                    chainId: e
                });
                if (!i.chains) throw new M;
                if (e && i.chain.id !== e) throw new N({
                    chainId: e
                });
                return i.multicall({
                    allowFailure: o.allowFailure ? ? !0,
                    blockNumber: r,
                    blockTag: n,
                    contracts: t
                })
            }
            async function readContract({
                address: e,
                account: t,
                chainId: r,
                abi: n,
                args: o,
                functionName: i,
                blockNumber: s,
                blockTag: c
            }) {
                let u = getPublicClient({
                    chainId: r
                });
                return u.readContract({
                    abi: n,
                    address: e,
                    account: t,
                    functionName: i,
                    args: o,
                    blockNumber: s,
                    blockTag: c
                })
            }
            async function readContracts({
                contracts: e,
                blockNumber: t,
                blockTag: r,
                ...n
            }) {
                let {
                    allowFailure: o = !0
                } = n;
                try {
                    let n = getPublicClient(),
                        i = e.reduce((e, t, r) => {
                            let o = t.chainId ? ? n.chain.id;
                            return { ...e,
                                [o]: [...e[o] || [], {
                                    contract: t,
                                    index: r
                                }]
                            }
                        }, {}),
                        s = (await Promise.all(Object.entries(i).map(([e, n]) => multicall({
                            allowFailure: o,
                            chainId: parseInt(e),
                            contracts: n.map(({
                                contract: e
                            }) => e),
                            blockNumber: t,
                            blockTag: r
                        })))).flat(),
                        c = Object.values(i).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return s.reduce((e, t, r) => (e && (e[c[r]] = t), e), [])
                } catch (n) {
                    if (n instanceof F.uq) throw n;
                    let promises = () => e.map(e => readContract({ ...e,
                        blockNumber: t,
                        blockTag: r
                    }));
                    if (o) return (await Promise.allSettled(promises())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(promises())
                }
            }
            async function fetchBalance({
                address: e,
                chainId: t,
                formatUnits: r,
                token: n
            }) {
                let o = getConfig(),
                    i = getPublicClient({
                        chainId: t
                    });
                if (n) {
                    let fetchContractBalance = async ({
                        abi: o
                    }) => {
                        let i = {
                                abi: o,
                                address: n,
                                chainId: t
                            },
                            [s, c, u] = await readContracts({
                                allowFailure: !1,
                                contracts: [{ ...i,
                                    functionName: "balanceOf",
                                    args: [e]
                                }, { ...i,
                                    functionName: "decimals"
                                }, { ...i,
                                    functionName: "symbol"
                                }]
                            });
                        return {
                            decimals: c,
                            formatted: (0, R.b)(s ? ? "0", getUnit(r ? ? c)),
                            symbol: u,
                            value: s
                        }
                    };
                    try {
                        return await fetchContractBalance({
                            abi: D
                        })
                    } catch (e) {
                        if (e instanceof F.uq) {
                            let {
                                symbol: e,
                                ...t
                            } = await fetchContractBalance({
                                abi: L
                            });
                            return {
                                symbol: (0, O.rR)((0, B.f)(e, {
                                    dir: "right"
                                })),
                                ...t
                            }
                        }
                        throw e
                    }
                }
                let s = [...o.publicClient.chains || [], ...o.chains ? ? []],
                    c = await i.getBalance({
                        address: e
                    }),
                    u = s.find(e => e.id === i.chain.id);
                return {
                    decimals: u ? .nativeCurrency.decimals ? ? 18,
                    formatted: (0, R.b)(c ? ? "0", getUnit(r ? ? 18)),
                    symbol: u ? .nativeCurrency.symbol ? ? "ETH",
                    value: c
                }
            }

            function getAccount() {
                let {
                    data: e,
                    connector: t,
                    status: r
                } = getConfig();
                switch (r) {
                    case "connected":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: r
                        };
                    case "reconnecting":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !!e ? .account,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: r
                        };
                    case "connecting":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: r
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: r
                        }
                }
            }

            function getNetwork() {
                let e = getConfig(),
                    t = e.data ? .chain ? .id,
                    r = e.chains ? ? [],
                    n = [...e.publicClient ? .chains || [], ...r].find(e => e.id === t) ? ? {
                        id: t,
                        name: `Chain ${t}`,
                        network: `${t}`,
                        nativeCurrency: {
                            name: "Ether",
                            decimals: 18,
                            symbol: "ETH"
                        },
                        rpcUrls: {
                            default: {
                                http: [""]
                            },
                            public: {
                                http: [""]
                            }
                        }
                    };
                return {
                    chain: t ? { ...n,
                        ...e.data ? .chain,
                        id : t
                    } : void 0,
                    chains: r
                }
            }
            async function switchNetwork({
                chainId: e
            }) {
                let {
                    connector: t
                } = getConfig();
                if (!t) throw new d;
                if (!t.switchChain) throw new G({
                    connector: t
                });
                return t.switchChain(e)
            }

            function watchAccount(e, {
                selector: t = e => e
            } = {}) {
                let r = getConfig(),
                    n = r.subscribe(({
                        data: e,
                        connector: r,
                        status: n
                    }) => t({
                        address: e ? .account,
                        connector: r,
                        status: n
                    }), () => e(getAccount()), {
                        equalityFn: j.X
                    });
                return n
            }

            function watchNetwork(e, {
                selector: t = e => e
            } = {}) {
                let r = getConfig(),
                    n = r.subscribe(({
                        data: e,
                        chains: r
                    }) => t({
                        chainId: e ? .chain ? .id,
                        chains: r
                    }), () => e(getNetwork()), {
                        equalityFn: j.X
                    });
                return n
            }
            async function fetchBlockNumber({
                chainId: e
            } = {}) {
                let t = getPublicClient({
                        chainId: e
                    }),
                    r = await t.getBlockNumber();
                return r
            }
        },
        55846: function(e, t, r) {
            function execTyped(e, t) {
                let r = e.exec(t);
                return r ? .groups
            }
            r.d(t, {
                Zw: function() {
                    return execTyped
                },
                cN: function() {
                    return i
                },
                eL: function() {
                    return n
                },
                lh: function() {
                    return o
                }
            });
            let n = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                o = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
                i = /^\(.+?\).*?$/
        },
        20412: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return _baseClone
                }
            });
            var n = r(97875),
                _arrayEach = function(e, t) {
                    for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                    return e
                },
                o = r(96981),
                i = r(67615),
                s = r(57),
                c = r(74383),
                u = r(95454),
                l = r(68706),
                d = r(67429),
                f = r(44003),
                p = r(48508),
                m = r(98638),
                b = r(94829),
                y = Object.prototype.hasOwnProperty,
                _initCloneArray = function(e) {
                    var t = e.length,
                        r = new e.constructor(t);
                    return t && "string" == typeof e[0] && y.call(e, "index") && (r.index = e.index, r.input = e.input), r
                },
                g = r(90056),
                _cloneDataView = function(e, t) {
                    var r = t ? (0, g.Z)(e.buffer) : e.buffer;
                    return new e.constructor(r, e.byteOffset, e.byteLength)
                },
                v = /\w*$/,
                _cloneRegExp = function(e) {
                    var t = new e.constructor(e.source, v.exec(e));
                    return t.lastIndex = e.lastIndex, t
                },
                w = r(60492),
                E = w.Z ? w.Z.prototype : void 0,
                C = E ? E.valueOf : void 0,
                P = r(63702),
                _initCloneByTag = function(e, t, r) {
                    var n = e.constructor;
                    switch (t) {
                        case "[object ArrayBuffer]":
                            return (0, g.Z)(e);
                        case "[object Boolean]":
                        case "[object Date]":
                            return new n(+e);
                        case "[object DataView]":
                            return _cloneDataView(e, r);
                        case "[object Float32Array]":
                        case "[object Float64Array]":
                        case "[object Int8Array]":
                        case "[object Int16Array]":
                        case "[object Int32Array]":
                        case "[object Uint8Array]":
                        case "[object Uint8ClampedArray]":
                        case "[object Uint16Array]":
                        case "[object Uint32Array]":
                            return (0, P.Z)(e, r);
                        case "[object Map]":
                        case "[object Set]":
                            return new n;
                        case "[object Number]":
                        case "[object String]":
                            return new n(e);
                        case "[object RegExp]":
                            return _cloneRegExp(e);
                        case "[object Symbol]":
                            return C ? Object(C.call(e)) : {}
                    }
                },
                x = r(34264),
                k = r(49756),
                S = r(30415),
                T = r(15492),
                I = r(15172),
                A = r(21241),
                R = A.Z && A.Z.isMap,
                F = R ? (0, I.Z)(R) : function(e) {
                    return (0, T.Z)(e) && "[object Map]" == (0, b.Z)(e)
                },
                O = r(61804),
                B = A.Z && A.Z.isSet,
                j = B ? (0, I.Z)(B) : function(e) {
                    return (0, T.Z)(e) && "[object Set]" == (0, b.Z)(e)
                },
                N = "[object Arguments]",
                $ = "[object Function]",
                M = "[object Object]",
                G = {};
            G[N] = G["[object Array]"] = G["[object ArrayBuffer]"] = G["[object DataView]"] = G["[object Boolean]"] = G["[object Date]"] = G["[object Float32Array]"] = G["[object Float64Array]"] = G["[object Int8Array]"] = G["[object Int16Array]"] = G["[object Int32Array]"] = G["[object Map]"] = G["[object Number]"] = G[M] = G["[object RegExp]"] = G["[object Set]"] = G["[object String]"] = G["[object Symbol]"] = G["[object Uint8Array]"] = G["[object Uint8ClampedArray]"] = G["[object Uint16Array]"] = G["[object Uint32Array]"] = !0, G["[object Error]"] = G[$] = G["[object WeakMap]"] = !1;
            var _baseClone = function baseClone(e, t, r, y, g, v) {
                var w, E = 1 & t,
                    C = 2 & t,
                    P = 4 & t;
                if (r && (w = g ? r(e, y, g, v) : r(e)), void 0 !== w) return w;
                if (!(0, O.Z)(e)) return e;
                var T = (0, k.Z)(e);
                if (T) {
                    if (w = _initCloneArray(e), !E) return (0, l.Z)(e, w)
                } else {
                    var I, A, R, B, q = (0, b.Z)(e),
                        U = q == $ || "[object GeneratorFunction]" == q;
                    if ((0, S.Z)(e)) return (0, u.Z)(e, E);
                    if (q == M || q == N || U && !g) {
                        if (w = C || U ? {} : (0, x.Z)(e), !E) return C ? (A = (I = w) && (0, i.Z)(e, (0, c.Z)(e), I), (0, i.Z)(e, (0, f.Z)(e), A)) : (B = (R = w) && (0, i.Z)(e, (0, s.Z)(e), R), (0, i.Z)(e, (0, d.Z)(e), B))
                    } else {
                        if (!G[q]) return g ? e : {};
                        w = _initCloneByTag(e, q, E)
                    }
                }
                v || (v = new n.Z);
                var _ = v.get(e);
                if (_) return _;
                v.set(e, w), j(e) ? e.forEach(function(n) {
                    w.add(baseClone(n, t, r, n, e, v))
                }) : F(e) && e.forEach(function(n, o) {
                    w.set(o, baseClone(n, t, r, o, e, v))
                });
                var D = P ? C ? m.Z : p.Z : C ? c.Z : s.Z,
                    L = T ? void 0 : D(e);
                return _arrayEach(L || e, function(n, i) {
                    L && (n = e[i = n]), (0, o.Z)(w, i, baseClone(n, t, r, i, e, v))
                }), w
            }
        },
        98638: function(e, t, r) {
            var n = r(19554),
                o = r(44003),
                i = r(74383);
            t.Z = function(e) {
                return (0, n.Z)(e, i.Z, o.Z)
            }
        },
        44003: function(e, t, r) {
            var n = r(28060),
                o = r(44328),
                i = r(67429),
                s = r(1463),
                c = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;)(0, n.Z)(t, (0, i.Z)(e)), e = (0, o.Z)(e);
                    return t
                } : s.Z;
            t.Z = c
        },
        94770: function(e, t, r) {
            var n = r(20412);
            t.Z = function(e) {
                return (0, n.Z)(e, 5)
            }
        },
        88121: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return parseAccount
                }
            });

            function parseAccount(e) {
                return "string" == typeof e ? {
                    address: e,
                    type: "json-rpc"
                } : e
            }
        },
        88284: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return call
                }
            });
            var n = r(88121),
                o = r(17764),
                i = r(89534),
                s = r(78734),
                c = r(70677),
                u = r(47276),
                l = r(74705),
                d = r(90633),
                f = r(19473),
                p = r(3741),
                m = r(47597),
                b = r(75250),
                y = r(33495),
                g = r(46465),
                v = r(25621);
            async function call(e, t) {
                let {
                    account: o = e.account,
                    batch: u = !!e.batch ? .multicall,
                    blockNumber: l,
                    blockTag: d = "latest",
                    accessList: g,
                    data: w,
                    gas: E,
                    gasPrice: C,
                    maxFeePerGas: P,
                    maxPriorityFeePerGas: x,
                    nonce: k,
                    to: S,
                    value: T,
                    ...I
                } = t, A = o ? (0, n.T)(o) : void 0;
                try {
                    (0, v.F)(t);
                    let r = l ? (0, f.eC)(l) : void 0,
                        n = r || d,
                        o = e.chain ? .formatters ? .transactionRequest ? .format,
                        i = o || y.tG,
                        c = i({ ...(0, b.K)(I, {
                                format: o
                            }),
                            from: A ? .address,
                            accessList: g,
                            data: w,
                            gas: E,
                            gasPrice: C,
                            maxFeePerGas: P,
                            maxPriorityFeePerGas: x,
                            nonce: k,
                            to: S,
                            value: T
                        });
                    if (u && function({
                            request: e
                        }) {
                            let {
                                data: t,
                                to: r,
                                ...n
                            } = e;
                            return !(!t || t.startsWith("0x82ad56cb")) && !!r && !(Object.values(n).filter(e => void 0 !== e).length > 0)
                        }({
                            request: c
                        })) try {
                        return await scheduleMulticall(e, { ...c,
                            blockNumber: l,
                            blockTag: d
                        })
                    } catch (e) {
                        if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e
                    }
                    let p = await e.request({
                        method: "eth_call",
                        params: n ? [c, n] : [c]
                    });
                    if ("0x" === p) return {
                        data: void 0
                    };
                    return {
                        data: p
                    }
                } catch (u) {
                    let n = function(e) {
                            if (!(e instanceof i.G)) return;
                            let t = e.walk();
                            return "object" == typeof t.data ? t.data.data : t.data
                        }(u),
                        {
                            offchainLookup: o,
                            offchainLookupSignature: s
                        } = await r.e(522).then(r.bind(r, 90522));
                    if (n ? .slice(0, 10) === s && S) return {
                        data: await o(e, {
                            data: n,
                            to: S
                        })
                    };
                    throw function(e, {
                        docsPath: t,
                        ...r
                    }) {
                        let n = (() => {
                            let t = (0, m.k)(e, r);
                            return t instanceof p.cj ? e : t
                        })();
                        return new c.cg(n, {
                            docsPath: t,
                            ...r
                        })
                    }(u, { ...t,
                        account: A,
                        chain: e.chain
                    })
                }
            }
            async function scheduleMulticall(e, t) {
                let {
                    batchSize: r = 1024,
                    wait: n = 0
                } = "object" == typeof e.batch ? .multicall ? e.batch.multicall : {}, {
                    blockNumber: i,
                    blockTag: p = "latest",
                    data: m,
                    multicallAddress: b,
                    to: y
                } = t, v = b;
                if (!v) {
                    if (!e.chain) throw new s.pZ;
                    v = (0, d.L)({
                        blockNumber: i,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let w = i ? (0, f.eC)(i) : void 0,
                    E = w || p,
                    {
                        schedule: C
                    } = (0, g.S)({
                        id: `${e.uid}.${E}`,
                        wait: n,
                        shouldSplitBatch(e) {
                            let t = e.reduce((e, {
                                data: t
                            }) => e + (t.length - 2), 0);
                            return t > 2 * r
                        },
                        fn: async t => {
                            let r = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                n = (0, l.R)({
                                    abi: o.F8,
                                    args: [r],
                                    functionName: "aggregate3"
                                }),
                                i = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: n,
                                        to: v
                                    }, E]
                                });
                            return (0, u.k)({
                                abi: o.F8,
                                args: [r],
                                functionName: "aggregate3",
                                data: i || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: P,
                        success: x
                    }] = await C({
                        data: m,
                        to: y
                    });
                if (!x) throw new c.VQ({
                    data: P
                });
                return "0x" === P ? {
                    data: void 0
                } : {
                    data: P
                }
            }
        },
        71654: function(e, t, r) {
            r.d(t, {
                C: function() {
                    return internal_estimateFeesPerGas
                },
                X: function() {
                    return estimateFeesPerGas
                }
            });
            var n = r(30350),
                o = r(61820),
                i = r(38012),
                s = r(51256),
                c = r(38720);
            async function estimateFeesPerGas(e, t) {
                return internal_estimateFeesPerGas(e, t)
            }
            async function internal_estimateFeesPerGas(e, t) {
                let {
                    block: r,
                    chain: u = e.chain,
                    request: l,
                    type: d = "eip1559"
                } = t || {}, f = await (async () => "function" == typeof u ? .fees ? .baseFeeMultiplier ? u.fees.baseFeeMultiplier({
                    block: r,
                    client: e,
                    request: l
                }) : u ? .fees ? .baseFeeMultiplier ? ? 1.2)();
                if (f < 1) throw new n.Fz;
                let p = f.toString().split(".")[1] ? .length ? ? 0,
                    m = 10 ** p,
                    multiply = e => e * BigInt(Math.ceil(f * m)) / BigInt(m),
                    b = r || await (0, o.s)(e, s.Q, "getBlock")({});
                if ("function" == typeof u ? .fees ? .estimateFeesPerGas) return u.fees.estimateFeesPerGas({
                    block: r,
                    client: e,
                    multiply,
                    request: l,
                    type: d
                });
                if ("eip1559" === d) {
                    if ("bigint" != typeof b.baseFeePerGas) throw new n.e5;
                    let t = l ? .maxPriorityFeePerGas ? l.maxPriorityFeePerGas : await (0, i.h)(e, {
                            block: b,
                            chain: u,
                            request: l
                        }),
                        r = multiply(b.baseFeePerGas),
                        o = l ? .maxFeePerGas ? ? r + t;
                    return {
                        maxFeePerGas: o,
                        maxPriorityFeePerGas: t
                    }
                }
                let y = l ? .gasPrice ? ? multiply(await (0, o.s)(e, c.o, "getGasPrice")({}));
                return {
                    gasPrice: y
                }
            }
        },
        22898: function(e, t, r) {
            r.d(t, {
                Q: function() {
                    return estimateGas
                }
            });
            var n = r(88121),
                o = r(47568),
                i = r(19473),
                s = r(30274),
                c = r(4287),
                u = r(89534),
                l = r(94069);
            let EstimateGasExecutionError = class EstimateGasExecutionError extends u.G {
                constructor(e, {
                    account: t,
                    docsPath: r,
                    chain: n,
                    data: o,
                    gas: i,
                    gasPrice: u,
                    maxFeePerGas: d,
                    maxPriorityFeePerGas: f,
                    nonce: p,
                    to: m,
                    value: b
                }) {
                    let y = (0, l.xr)({
                        from: t ? .address,
                        to: m,
                        value: void 0 !== b && `${(0,s.d)(b)} ${n?.nativeCurrency?.symbol||"ETH"}`,
                        data: o,
                        gas: i,
                        gasPrice: void 0 !== u && `${(0,c.o)(u)} gwei`,
                        maxFeePerGas: void 0 !== d && `${(0,c.o)(d)} gwei`,
                        maxPriorityFeePerGas: void 0 !== f && `${(0,c.o)(f)} gwei`,
                        nonce: p
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: r,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", y].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EstimateGasExecutionError"
                    }), this.cause = e
                }
            };
            var d = r(3741),
                f = r(47597),
                p = r(75250),
                m = r(33495),
                b = r(25621),
                y = r(40297);
            async function estimateGas(e, t) {
                let r = t.account ? ? e.account;
                if (!r) throw new o.o({
                    docsPath: "/docs/actions/public/estimateGas"
                });
                let s = (0, n.T)(r);
                try {
                    let {
                        accessList: r,
                        blockNumber: n,
                        blockTag: o,
                        data: c,
                        gas: u,
                        gasPrice: l,
                        maxFeePerGas: d,
                        maxPriorityFeePerGas: f,
                        nonce: g,
                        to: v,
                        value: w,
                        ...E
                    } = "local" === s.type ? await (0, y.Z)(e, t) : t, C = n ? (0, i.eC)(n) : void 0, P = C || o;
                    (0, b.F)(t);
                    let x = e.chain ? .formatters ? .transactionRequest ? .format,
                        k = x || m.tG,
                        S = k({ ...(0, p.K)(E, {
                                format: x
                            }),
                            from: s.address,
                            accessList: r,
                            data: c,
                            gas: u,
                            gasPrice: l,
                            maxFeePerGas: d,
                            maxPriorityFeePerGas: f,
                            nonce: g,
                            to: v,
                            value: w
                        }),
                        T = await e.request({
                            method: "eth_estimateGas",
                            params: P ? [S, P] : [S]
                        });
                    return BigInt(T)
                } catch (r) {
                    throw function(e, {
                        docsPath: t,
                        ...r
                    }) {
                        let n = (() => {
                            let t = (0, f.k)(e, r);
                            return t instanceof d.cj ? e : t
                        })();
                        return new EstimateGasExecutionError(n, {
                            docsPath: t,
                            ...r
                        })
                    }(r, { ...t,
                        account: s,
                        chain: e.chain
                    })
                }
            }
        },
        38012: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return estimateMaxPriorityFeePerGas
                },
                h: function() {
                    return internal_estimateMaxPriorityFeePerGas
                }
            });
            var n = r(30350),
                o = r(17114),
                i = r(61820),
                s = r(51256),
                c = r(38720);
            async function estimateMaxPriorityFeePerGas(e, t) {
                return internal_estimateMaxPriorityFeePerGas(e, t)
            }
            async function internal_estimateMaxPriorityFeePerGas(e, t) {
                let {
                    block: r,
                    chain: u = e.chain,
                    request: l
                } = t || {};
                if ("function" == typeof u ? .fees ? .defaultPriorityFee) {
                    let t = r || await (0, i.s)(e, s.Q, "getBlock")({});
                    return u.fees.defaultPriorityFee({
                        block: t,
                        client: e,
                        request: l
                    })
                }
                if (void 0 !== u ? .fees ? .defaultPriorityFee) return u ? .fees ? .defaultPriorityFee;
                try {
                    let t = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, o.y_)(t)
                } catch {
                    let [t, o] = await Promise.all([r ? Promise.resolve(r) : (0, i.s)(e, s.Q, "getBlock")({}), (0, i.s)(e, c.o, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new n.e5;
                    let u = o - t.baseFeePerGas;
                    if (u < 0 n) return 0 n;
                    return u
                }
            }
        },
        51256: function(e, t, r) {
            r.d(t, {
                Q: function() {
                    return getBlock
                }
            });
            var n = r(42912),
                o = r(19473),
                i = r(29764);
            async function getBlock(e, {
                blockHash: t,
                blockNumber: r,
                blockTag: s,
                includeTransactions: c
            } = {}) {
                let u = c ? ? !1,
                    l = void 0 !== r ? (0, o.eC)(r) : void 0,
                    d = null;
                if (!(d = t ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [t, u]
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [l || (s ? ? "latest"), u]
                    }))) throw new n.f({
                    blockHash: t,
                    blockNumber: r
                });
                let f = e.chain ? .formatters ? .block ? .format || i.Z;
                return f(d)
            }
        },
        270: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return getChainId
                }
            });
            var n = r(17114);
            async function getChainId(e) {
                let t = await e.request({
                    method: "eth_chainId"
                });
                return (0, n.ly)(t)
            }
        },
        38720: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return getGasPrice
                }
            });
            async function getGasPrice(e) {
                let t = await e.request({
                    method: "eth_gasPrice"
                });
                return BigInt(t)
            }
        },
        58046: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return getTransactionCount
                }
            });
            var n = r(17114),
                o = r(19473);
            async function getTransactionCount(e, {
                address: t,
                blockTag: r = "latest",
                blockNumber: i
            }) {
                let s = await e.request({
                    method: "eth_getTransactionCount",
                    params: [t, i ? (0, o.eC)(i) : r]
                });
                return (0, n.ly)(s)
            }
        },
        40297: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return prepareTransactionRequest
                }
            });
            var n = r(88121),
                o = r(71654),
                i = r(22898),
                s = r(51256),
                c = r(58046),
                u = r(47568),
                l = r(30350),
                d = r(61820),
                f = r(25621),
                p = r(10711);
            async function prepareTransactionRequest(e, t) {
                let {
                    account: r = e.account,
                    chain: m,
                    gas: b,
                    nonce: y,
                    type: g
                } = t;
                if (!r) throw new u.o;
                let v = (0, n.T)(r),
                    w = await (0, d.s)(e, s.Q, "getBlock")({
                        blockTag: "latest"
                    }),
                    E = { ...t,
                        from: v.address
                    };
                if (void 0 === y && (E.nonce = await (0, d.s)(e, c.K, "getTransactionCount")({
                        address: v.address,
                        blockTag: "pending"
                    })), void 0 === g) try {
                    E.type = (0, p.l)(E)
                } catch {
                    E.type = "bigint" == typeof w.baseFeePerGas ? "eip1559" : "legacy"
                }
                if ("eip1559" === E.type) {
                    let {
                        maxFeePerGas: r,
                        maxPriorityFeePerGas: n
                    } = await (0, o.C)(e, {
                        block: w,
                        chain: m,
                        request: E
                    });
                    if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < n) throw new l.ld({
                        maxPriorityFeePerGas: n
                    });
                    E.maxPriorityFeePerGas = n, E.maxFeePerGas = r
                } else {
                    if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new l.e5;
                    let {
                        gasPrice: r
                    } = await (0, o.C)(e, {
                        block: w,
                        chain: m,
                        request: E,
                        type: "legacy"
                    });
                    E.gasPrice = r
                }
                return void 0 === b && (E.gas = await (0, d.s)(e, i.Q, "estimateGas")({ ...E,
                    account: {
                        address: v.address,
                        type: "json-rpc"
                    }
                })), (0, f.F)(E), E
            }
        },
        72521: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return sendRawTransaction
                }
            });
            async function sendRawTransaction(e, {
                serializedTransaction: t
            }) {
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [t]
                })
            }
        },
        47983: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return i
                }
            });
            var n = r(76415),
                o = r(53546);
            let i = (0, n.a)({
                id: 8453,
                network: "base",
                name: "Base",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://base-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://base-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://base-mainnet.infura.io/v3"],
                        webSocket: ["wss://base-mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://mainnet.base.org"]
                    },
                    public: {
                        http: ["https://mainnet.base.org"]
                    }
                },
                blockExplorers: {
                    blockscout: {
                        name: "Basescout",
                        url: "https://base.blockscout.com"
                    },
                    default: {
                        name: "Basescan",
                        url: "https://basescan.org"
                    },
                    etherscan: {
                        name: "Basescan",
                        url: "https://basescan.org"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 5022
                    }
                }
            }, {
                formatters: o.V
            })
        },
        80854: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return i
                }
            });
            var n = r(76415),
                o = r(53546);
            let i = (0, n.a)({
                id: 84532,
                network: "base-sepolia",
                name: "Base Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://base-sepolia.g.alchemy.com/v2"],
                        webSocket: ["wss://base-sepolia.g.alchemy.com/v2"]
                    },
                    default: {
                        http: ["https://sepolia.base.org"]
                    },
                    public: {
                        http: ["https://sepolia.base.org"]
                    }
                },
                blockExplorers: {
                    blockscout: {
                        name: "Blockscout",
                        url: "https://base-sepolia.blockscout.com"
                    },
                    default: {
                        name: "Blockscout",
                        url: "https://base-sepolia.blockscout.com"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 1059647
                    }
                },
                testnet: !0,
                sourceId: 11155111
            }, {
                formatters: o.V
            })
        },
        65653: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return o
                }
            });
            var n = r(76415);
            let o = (0, n.a)({
                id: 5,
                network: "goerli",
                name: "Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-goerli.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://goerli.infura.io/v3"],
                        webSocket: ["wss://goerli.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://rpc.ankr.com/eth_goerli"]
                    },
                    public: {
                        http: ["https://rpc.ankr.com/eth_goerli"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0x56522D00C410a43BFfDF00a9A569489297385790",
                        blockCreated: 8765204
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 6507670
                    }
                },
                testnet: !0
            })
        },
        44333: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return o
                }
            });
            var n = r(76415);
            let o = (0, n.a)({
                id: 1,
                network: "homestead",
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://mainnet.infura.io/v3"],
                        webSocket: ["wss://mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    },
                    public: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                        blockCreated: 16966585
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        96044: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return i
                }
            });
            var n = r(76415),
                o = r(53546);
            let i = (0, n.a)({
                id: 10,
                name: "OP Mainnet",
                network: "optimism",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://opt-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://optimism-mainnet.infura.io/v3"],
                        webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://mainnet.optimism.io"]
                    },
                    public: {
                        http: ["https://mainnet.optimism.io"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://optimistic.etherscan.io"
                    },
                    default: {
                        name: "Optimism Explorer",
                        url: "https://explorer.optimism.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 4286263
                    }
                }
            }, {
                formatters: o.V
            })
        },
        33233: function(e, t, r) {
            r.d(t, {
                O: function() {
                    return i
                }
            });
            var n = r(76415),
                o = r(53546);
            let i = (0, n.a)({
                id: 11155420,
                name: "Optimism Sepolia",
                network: "optimism-sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://opt-sepolia.g.alchemy.com/v2"],
                        webSocket: ["wss://opt-sepolia.g.alchemy.com/v2"]
                    },
                    default: {
                        http: ["https://sepolia.optimism.io"]
                    },
                    public: {
                        http: ["https://sepolia.optimism.io"]
                    }
                },
                blockExplorers: {
                    blockscout: {
                        name: "Blockscout",
                        url: "https://optimism-sepolia.blockscout.com"
                    },
                    default: {
                        name: "Blockscout",
                        url: "https://optimism-sepolia.blockscout.com"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 1620204
                    }
                },
                testnet: !0
            }, {
                formatters: o.V
            })
        },
        2807: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return o
                }
            });
            var n = r(76415);
            let o = (0, n.a)({
                id: 11155111,
                network: "sepolia",
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "SEP",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-sepolia.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://sepolia.infura.io/v3"],
                        webSocket: ["wss://sepolia.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://rpc.sepolia.org"]
                    },
                    public: {
                        http: ["https://rpc.sepolia.org"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0x21B000Fd62a880b2125A61e36a284BB757b76025",
                        blockCreated: 3914906
                    }
                },
                testnet: !0
            })
        },
        53546: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return c
                }
            });
            var n = r(17114),
                o = r(29764),
                i = r(94605),
                s = r(30304);
            let c = {
                block: (0, o.G)({
                    format(e) {
                        let t = e.transactions ? .map(e => {
                            if ("string" == typeof e) return e;
                            let t = i.Tr(e);
                            return "0x7e" === t.typeHex && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? n.y_(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
                        });
                        return {
                            transactions: t,
                            stateRoot: e.stateRoot
                        }
                    }
                }),
                transaction: (0, i.y_)({
                    format(e) {
                        let t = {};
                        return "0x7e" === e.type && (t.isSystemTx = e.isSystemTx, t.mint = e.mint ? (0, n.y_)(e.mint) : void 0, t.sourceHash = e.sourceHash, t.type = "deposit"), t
                    }
                }),
                transactionReceipt: (0, s.d)({
                    format: e => ({
                        l1GasPrice: e.l1GasPrice ? (0, n.y_)(e.l1GasPrice) : null,
                        l1GasUsed: e.l1GasUsed ? (0, n.y_)(e.l1GasUsed) : null,
                        l1Fee: e.l1Fee ? (0, n.y_)(e.l1Fee) : null,
                        l1FeeScalar: e.l1FeeScalar ? Number(e.l1FeeScalar) : null
                    })
                })
            }
        },
        69843: function(e, t, r) {
            let n;
            r.d(t, {
                e: function() {
                    return createClient
                }
            });
            var o = r(88121);
            let i = 256;

            function createClient(e) {
                let {
                    batch: t,
                    cacheTime: r = e.pollingInterval ? ? 4e3,
                    key: s = "base",
                    name: c = "Base Client",
                    pollingInterval: u = 4e3,
                    type: l = "base"
                } = e, d = e.chain, f = e.account ? (0, o.T)(e.account) : void 0, {
                    config: p,
                    request: m,
                    value: b
                } = e.transport({
                    chain: d,
                    pollingInterval: u
                }), y = { ...p,
                    ...b
                }, g = {
                    account: f,
                    batch: t,
                    cacheTime: r,
                    chain: d,
                    key: s,
                    name: c,
                    pollingInterval: u,
                    request: m,
                    transport: y,
                    type: l,
                    uid: function(e = 11) {
                        if (!n || i + e > 512) {
                            n = "", i = 0;
                            for (let e = 0; e < 256; e++) n += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                        }
                        return n.substring(i, i++ + e)
                    }()
                };
                return Object.assign(g, {
                    extend: function extend(e) {
                        return t => {
                            let r = t(e);
                            for (let e in g) delete r[e];
                            let n = { ...e,
                                ...r
                            };
                            return Object.assign(n, {
                                extend: extend(n)
                            })
                        }
                    }(g)
                })
            }
        },
        85031: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return createPublicClient
                }
            });
            var n = r(69843),
                o = r(17764),
                i = r(47276),
                s = r(74705),
                c = r(90633),
                u = r(23281),
                l = r(19473),
                d = r(84857),
                f = r(89534),
                p = r(70677);

            function isNullUniversalResolverError(e, t) {
                if (!(e instanceof f.G)) return !1;
                let r = e.walk(e => e instanceof p.Lu);
                return r instanceof p.Lu && (!!(r.data ? .errorName === "ResolverNotFound" || r.data ? .errorName === "ResolverWildcardNotSupported" || r.reason ? .includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && r.reason === d.$[50])
            }
            var m = r(62832),
                b = r(79958),
                y = r(12570),
                g = r(63424);

            function encodedLabelToLabelhash(e) {
                if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]")) return null;
                let t = `0x${e.slice(1,65)}`;
                return (0, g.v)(t) ? t : null
            }

            function namehash(e) {
                let t = new Uint8Array(32).fill(0);
                if (!e) return (0, l.ci)(t);
                let r = e.split(".");
                for (let e = r.length - 1; e >= 0; e -= 1) {
                    let n = encodedLabelToLabelhash(r[e]),
                        o = n ? (0, b.O0)(n) : (0, y.w)((0, b.qX)(r[e]), "bytes");
                    t = (0, y.w)((0, m.zo)([t, o]), "bytes")
                }
                return (0, l.ci)(t)
            }

            function packetToBytes(e) {
                let t = e.replace(/^\.|\.$/gm, "");
                if (0 === t.length) return new Uint8Array(1);
                let r = new Uint8Array((0, b.qX)(t).byteLength + 2),
                    n = 0,
                    o = t.split(".");
                for (let e = 0; e < o.length; e++) {
                    let t = (0, b.qX)(o[e]);
                    if (t.byteLength > 255) {
                        var i;
                        t = (0, b.qX)((i = function(e) {
                            let t = new Uint8Array(32).fill(0);
                            return e ? encodedLabelToLabelhash(e) || (0, y.w)((0, b.qX)(e)) : (0, l.ci)(t)
                        }(o[e]), `[${i.slice(2)}]`))
                    }
                    r[n] = t.length, r.set(t, n + 1), n += t.length + 1
                }
                return r.byteLength !== n + 1 ? r.slice(0, n + 1) : r
            }
            var v = r(61820),
                w = r(86093),
                E = r(79930);

            function getContractError(e, {
                abi: t,
                address: r,
                args: n,
                docsPath: o,
                functionName: i,
                sender: s
            }) {
                let {
                    code: c,
                    data: u,
                    message: l,
                    shortMessage: d
                } = e instanceof p.VQ ? e : e instanceof f.G ? e.walk(e => "data" in e) || e.walk() : {}, m = e instanceof w.wb ? new p.Dk({
                    functionName: i
                }) : [3, E.XS.code].includes(c) && (u || l || d) ? new p.Lu({
                    abi: t,
                    data: "object" == typeof u ? u.data : u,
                    functionName: i,
                    message: d ? ? l
                }) : e;
                return new p.uq(m, {
                    abi: t,
                    args: n,
                    contractAddress: r,
                    docsPath: o,
                    functionName: i,
                    sender: s
                })
            }
            var C = r(88284);
            async function readContract(e, {
                abi: t,
                address: r,
                args: n,
                functionName: o,
                ...c
            }) {
                let u = (0, s.R)({
                    abi: t,
                    args: n,
                    functionName: o
                });
                try {
                    let {
                        data: s
                    } = await (0, v.s)(e, C.R, "call")({
                        data: u,
                        to: r,
                        ...c
                    });
                    return (0, i.k)({
                        abi: t,
                        args: n,
                        functionName: o,
                        data: s || "0x"
                    })
                } catch (e) {
                    throw getContractError(e, {
                        abi: t,
                        address: r,
                        args: n,
                        docsPath: "/docs/contract/readContract",
                        functionName: o
                    })
                }
            }
            async function getEnsAddress(e, {
                blockNumber: t,
                blockTag: r,
                coinType: n,
                name: d,
                universalResolverAddress: f
            }) {
                let p = f;
                if (!p) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    p = (0, c.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let c = (0, s.R)({
                            abi: o.X$,
                            functionName: "addr",
                            ...null != n ? {
                                args: [namehash(d), BigInt(n)]
                            } : {
                                args: [namehash(d)]
                            }
                        }),
                        f = await (0, v.s)(e, readContract, "readContract")({
                            address: p,
                            abi: o.k3,
                            functionName: "resolve",
                            args: [(0, l.NC)(packetToBytes(d)), c],
                            blockNumber: t,
                            blockTag: r
                        });
                    if ("0x" === f[0]) return null;
                    let m = (0, i.k)({
                        abi: o.X$,
                        args: null != n ? [namehash(d), BigInt(n)] : void 0,
                        functionName: "addr",
                        data: f[0]
                    });
                    if ("0x" === m || "0x00" === (0, u.f)(m)) return null;
                    return m
                } catch (e) {
                    if (isNullUniversalResolverError(e, "resolve")) return null;
                    throw e
                }
            }
            let EnsAvatarInvalidMetadataError = class EnsAvatarInvalidMetadataError extends f.G {
                constructor({
                    data: e
                }) {
                    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                        metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidMetadataError"
                    })
                }
            };
            let EnsAvatarInvalidNftUriError = class EnsAvatarInvalidNftUriError extends f.G {
                constructor({
                    reason: e
                }) {
                    super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidNftUriError"
                    })
                }
            };
            let EnsAvatarUriResolutionError = class EnsAvatarUriResolutionError extends f.G {
                constructor({
                    uri: e
                }) {
                    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUriResolutionError"
                    })
                }
            };
            let EnsAvatarUnsupportedNamespaceError = class EnsAvatarUnsupportedNamespaceError extends f.G {
                constructor({
                    namespace: e
                }) {
                    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUnsupportedNamespaceError"
                    })
                }
            };
            let P = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
                x = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
                k = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
                S = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
            async function isImageUri(e) {
                try {
                    let t = await fetch(e, {
                        method: "HEAD"
                    });
                    if (200 === t.status) {
                        let e = t.headers.get("content-type");
                        return e ? .startsWith("image/")
                    }
                    return !1
                } catch (t) {
                    if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image")) return !1;
                    return new Promise(t => {
                        let r = new Image;
                        r.onload = () => {
                            t(!0)
                        }, r.onerror = () => {
                            t(!1)
                        }, r.src = e
                    })
                }
            }

            function getGateway(e, t) {
                return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
            }

            function resolveAvatarUri({
                uri: e,
                gatewayUrls: t
            }) {
                let r = k.test(e);
                if (r) return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: r
                };
                let n = getGateway(t ? .ipfs, "https://ipfs.io"),
                    o = getGateway(t ? .arweave, "https://arweave.net"),
                    i = e.match(P),
                    {
                        protocol: s,
                        subpath: c,
                        target: u,
                        subtarget: l = ""
                    } = i ? .groups || {},
                    d = "ipns:/" === s || "ipns/" === c,
                    f = "ipfs:/" === s || "ipfs/" === c || x.test(e);
                if (e.startsWith("http") && !d && !f) {
                    let r = e;
                    return t ? .arweave && (r = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
                        uri: r,
                        isOnChain: !1,
                        isEncoded: !1
                    }
                }
                if ((d || f) && u) return {
                    uri: `${n}/${d?"ipns":"ipfs"}/${u}${l}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                if ("ar:/" === s && u) return {
                    uri: `${o}/${u}${l||""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                let p = e.replace(S, "");
                if (p.startsWith("<svg") && (p = `data:image/svg+xml;base64,${btoa(p)}`), p.startsWith("data:") || p.startsWith("{")) return {
                    uri: p,
                    isOnChain: !0,
                    isEncoded: !1
                };
                throw new EnsAvatarUriResolutionError({
                    uri: e
                })
            }

            function getJsonImage(e) {
                if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new EnsAvatarInvalidMetadataError({
                    data: e
                });
                return e.image || e.image_url || e.image_data
            }
            async function getMetadataAvatarUri({
                gatewayUrls: e,
                uri: t
            }) {
                try {
                    let r = await fetch(t).then(e => e.json()),
                        n = await parseAvatarUri({
                            gatewayUrls: e,
                            uri: getJsonImage(r)
                        });
                    return n
                } catch {
                    throw new EnsAvatarUriResolutionError({
                        uri: t
                    })
                }
            }
            async function parseAvatarUri({
                gatewayUrls: e,
                uri: t
            }) {
                let {
                    uri: r,
                    isOnChain: n
                } = resolveAvatarUri({
                    uri: t,
                    gatewayUrls: e
                });
                if (n) return r;
                let o = await isImageUri(r);
                if (o) return r;
                throw new EnsAvatarUriResolutionError({
                    uri: t
                })
            }
            async function getNftTokenUri(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return readContract(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return readContract(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new EnsAvatarUnsupportedNamespaceError({
                    namespace: t.namespace
                })
            }
            async function parseAvatarRecord(e, {
                gatewayUrls: t,
                record: r
            }) {
                return /eip155:/i.test(r) ? parseNftAvatarUri(e, {
                    gatewayUrls: t,
                    record: r
                }) : parseAvatarUri({
                    uri: r,
                    gatewayUrls: t
                })
            }
            async function parseNftAvatarUri(e, {
                gatewayUrls: t,
                record: r
            }) {
                let n = function(e) {
                        let t = e;
                        t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                        let [r, n, o] = t.split("/"), [i, s] = r.split(":"), [c, u] = n.split(":");
                        if (!i || "eip155" !== i.toLowerCase()) throw new EnsAvatarInvalidNftUriError({
                            reason: "Only EIP-155 supported"
                        });
                        if (!s) throw new EnsAvatarInvalidNftUriError({
                            reason: "Chain ID not found"
                        });
                        if (!u) throw new EnsAvatarInvalidNftUriError({
                            reason: "Contract address not found"
                        });
                        if (!o) throw new EnsAvatarInvalidNftUriError({
                            reason: "Token ID not found"
                        });
                        if (!c) throw new EnsAvatarInvalidNftUriError({
                            reason: "ERC namespace not found"
                        });
                        return {
                            chainID: parseInt(s),
                            namespace: c.toLowerCase(),
                            contractAddress: u,
                            tokenID: o
                        }
                    }(r),
                    o = await getNftTokenUri(e, {
                        nft: n
                    }),
                    {
                        uri: i,
                        isOnChain: s,
                        isEncoded: c
                    } = resolveAvatarUri({
                        uri: o,
                        gatewayUrls: t
                    });
                if (s && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
                    let e = c ? atob(i.replace("data:application/json;base64,", "")) : i,
                        r = JSON.parse(e);
                    return parseAvatarUri({
                        uri: getJsonImage(r),
                        gatewayUrls: t
                    })
                }
                let u = n.tokenID;
                return "erc1155" === n.namespace && (u = u.replace("0x", "").padStart(64, "0")), getMetadataAvatarUri({
                    gatewayUrls: t,
                    uri: i.replace(/(?:0x)?{id}/, u)
                })
            }
            async function getEnsText(e, {
                blockNumber: t,
                blockTag: r,
                name: n,
                key: u,
                universalResolverAddress: d
            }) {
                let f = d;
                if (!f) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    f = (0, c.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let c = await (0, v.s)(e, readContract, "readContract")({
                        address: f,
                        abi: o.k3,
                        functionName: "resolve",
                        args: [(0, l.NC)(packetToBytes(n)), (0, s.R)({
                            abi: o.nZ,
                            functionName: "text",
                            args: [namehash(n), u]
                        })],
                        blockNumber: t,
                        blockTag: r
                    });
                    if ("0x" === c[0]) return null;
                    let d = (0, i.k)({
                        abi: o.nZ,
                        functionName: "text",
                        data: c[0]
                    });
                    return "" === d ? null : d
                } catch (e) {
                    if (isNullUniversalResolverError(e, "resolve")) return null;
                    throw e
                }
            }
            async function getEnsAvatar(e, {
                blockNumber: t,
                blockTag: r,
                gatewayUrls: n,
                name: o,
                universalResolverAddress: i
            }) {
                let s = await (0, v.s)(e, getEnsText, "getEnsText")({
                    blockNumber: t,
                    blockTag: r,
                    key: "avatar",
                    name: o,
                    universalResolverAddress: i
                });
                if (!s) return null;
                try {
                    return await parseAvatarRecord(e, {
                        record: s,
                        gatewayUrls: n
                    })
                } catch {
                    return null
                }
            }
            async function getEnsName(e, {
                address: t,
                blockNumber: r,
                blockTag: n,
                universalResolverAddress: i
            }) {
                let s = i;
                if (!s) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    s = (0, c.L)({
                        blockNumber: r,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let u = `${t.toLowerCase().substring(2)}.addr.reverse`;
                try {
                    let [i, c] = await (0, v.s)(e, readContract, "readContract")({
                        address: s,
                        abi: o.du,
                        functionName: "reverse",
                        args: [(0, l.NC)(packetToBytes(u))],
                        blockNumber: r,
                        blockTag: n
                    });
                    if (t.toLowerCase() !== c.toLowerCase()) return null;
                    return i
                } catch (e) {
                    if (isNullUniversalResolverError(e, "reverse")) return null;
                    throw e
                }
            }
            async function getEnsResolver(e, {
                blockNumber: t,
                blockTag: r,
                name: n,
                universalResolverAddress: o
            }) {
                let i = o;
                if (!i) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    i = (0, c.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let [s] = await (0, v.s)(e, readContract, "readContract")({
                    address: i,
                    abi: [{
                        inputs: [{
                            type: "bytes"
                        }],
                        name: "findResolver",
                        outputs: [{
                            type: "address"
                        }, {
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    functionName: "findResolver",
                    args: [(0, l.NC)(packetToBytes(n))],
                    blockNumber: t,
                    blockTag: r
                });
                return s
            }

            function createFilterRequestScope(e, {
                method: t
            }) {
                let r = {};
                return "fallback" === e.transport.type && e.transport.onResponse ? .(({
                    method: e,
                    response: n,
                    status: o,
                    transport: i
                }) => {
                    "success" === o && t === e && (r[n] = i.request)
                }), t => r[t] || e.request
            }
            async function createBlockFilter(e) {
                let t = createFilterRequestScope(e, {
                        method: "eth_newBlockFilter"
                    }),
                    r = await e.request({
                        method: "eth_newBlockFilter"
                    });
                return {
                    id: r,
                    request: t(r),
                    type: "block"
                }
            }
            let FilterTypeNotSupportedError = class FilterTypeNotSupportedError extends f.G {
                constructor(e) {
                    super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FilterTypeNotSupportedError"
                    })
                }
            };
            var T = r(20553),
                I = r(25571),
                A = r(44682),
                R = r(77813);

            function encodeEventTopics({
                abi: e,
                eventName: t,
                args: r
            }) {
                let n = e[0];
                if (t && !(n = (0, R.mE)({
                        abi: e,
                        args: r,
                        name: t
                    }))) throw new w.mv(t, {
                    docsPath: "/docs/contract/encodeEventTopics"
                });
                if ("event" !== n.type) throw new w.mv(void 0, {
                    docsPath: "/docs/contract/encodeEventTopics"
                });
                let o = (0, A.t)(n),
                    i = (0, T.e)(o),
                    s = [];
                if (r && "inputs" in n) {
                    let e = n.inputs ? .filter(e => "indexed" in e && e.indexed),
                        t = Array.isArray(r) ? r : Object.values(r).length > 0 ? e ? .map(e => r[e.name]) ? ? [] : [];
                    t.length > 0 && (s = e ? .map((e, r) => Array.isArray(t[r]) ? t[r].map((n, o) => encodeArg({
                        param: e,
                        value: t[r][o]
                    })) : t[r] ? encodeArg({
                        param: e,
                        value: t[r]
                    }) : null) ? ? [])
                }
                return [i, ...s]
            }

            function encodeArg({
                param: e,
                value: t
            }) {
                if ("string" === e.type || "bytes" === e.type) return (0, y.w)((0, b.O0)(t));
                if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new FilterTypeNotSupportedError(e.type);
                return (0, I.E)([e], [t])
            }
            async function createContractEventFilter(e, {
                address: t,
                abi: r,
                args: n,
                eventName: o,
                fromBlock: i,
                strict: s,
                toBlock: c
            }) {
                let u = createFilterRequestScope(e, {
                        method: "eth_newFilter"
                    }),
                    d = o ? encodeEventTopics({
                        abi: r,
                        args: n,
                        eventName: o
                    }) : void 0,
                    f = await e.request({
                        method: "eth_newFilter",
                        params: [{
                            address: t,
                            fromBlock: "bigint" == typeof i ? (0, l.eC)(i) : i,
                            toBlock: "bigint" == typeof c ? (0, l.eC)(c) : c,
                            topics: d
                        }]
                    });
                return {
                    abi: r,
                    args: n,
                    eventName: o,
                    id: f,
                    request: u(f),
                    strict: s,
                    type: "event"
                }
            }
            async function createEventFilter(e, {
                address: t,
                args: r,
                event: n,
                events: o,
                fromBlock: i,
                strict: s,
                toBlock: c
            } = {}) {
                let u = o ? ? (n ? [n] : void 0),
                    d = createFilterRequestScope(e, {
                        method: "eth_newFilter"
                    }),
                    f = [];
                u && (f = [u.flatMap(e => encodeEventTopics({
                    abi: [e],
                    eventName: e.name,
                    args: r
                }))], n && (f = f[0]));
                let p = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: t,
                        fromBlock: "bigint" == typeof i ? (0, l.eC)(i) : i,
                        toBlock: "bigint" == typeof c ? (0, l.eC)(c) : c,
                        ...f.length ? {
                            topics: f
                        } : {}
                    }]
                });
                return {
                    abi: u,
                    args: r,
                    eventName: n ? n.name : void 0,
                    fromBlock: i,
                    id: p,
                    request: d(p),
                    strict: s,
                    toBlock: c,
                    type: "event"
                }
            }
            async function createPendingTransactionFilter(e) {
                let t = createFilterRequestScope(e, {
                        method: "eth_newPendingTransactionFilter"
                    }),
                    r = await e.request({
                        method: "eth_newPendingTransactionFilter"
                    });
                return {
                    id: r,
                    request: t(r),
                    type: "transaction"
                }
            }
            var F = r(88121),
                O = r(22898);
            async function estimateContractGas(e, {
                abi: t,
                address: r,
                args: n,
                functionName: o,
                ...i
            }) {
                let c = (0, s.R)({
                    abi: t,
                    args: n,
                    functionName: o
                });
                try {
                    let t = await (0, v.s)(e, O.Q, "estimateGas")({
                        data: c,
                        to: r,
                        ...i
                    });
                    return t
                } catch (s) {
                    let e = i.account ? (0, F.T)(i.account) : void 0;
                    throw getContractError(s, {
                        abi: t,
                        address: r,
                        args: n,
                        docsPath: "/docs/contract/estimateContractGas",
                        functionName: o,
                        sender: e ? .address
                    })
                }
            }
            var B = r(71654),
                j = r(38012);
            async function getBalance(e, {
                address: t,
                blockNumber: r,
                blockTag: n = "latest"
            }) {
                let o = r ? (0, l.eC)(r) : void 0,
                    i = await e.request({
                        method: "eth_getBalance",
                        params: [t, o || n]
                    });
                return BigInt(i)
            }
            var N = r(51256);
            let $ = new Map,
                M = new Map;
            async function withCache(e, {
                cacheKey: t,
                cacheTime: r = 1 / 0
            }) {
                let n = function(e) {
                        let buildCache = (e, t) => ({
                                clear: () => t.delete(e),
                                get: () => t.get(e),
                                set: r => t.set(e, r)
                            }),
                            t = buildCache(e, $),
                            r = buildCache(e, M);
                        return {
                            clear: () => {
                                t.clear(), r.clear()
                            },
                            promise: t,
                            response: r
                        }
                    }(t),
                    o = n.response.get();
                if (o && r > 0) {
                    let e = new Date().getTime() - o.created.getTime();
                    if (e < r) return o.data
                }
                let i = n.promise.get();
                i || (i = e(), n.promise.set(i));
                try {
                    let e = await i;
                    return n.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    n.promise.clear()
                }
            }
            let cacheKey = e => `blockNumber.${e}`;
            async function getBlockNumber(e, {
                cacheTime: t = e.cacheTime,
                maxAge: r
            } = {}) {
                let n = await withCache(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: cacheKey(e.uid),
                    cacheTime: r ? ? t
                });
                return BigInt(n)
            }
            var G = r(17114);
            async function getBlockTransactionCount(e, {
                blockHash: t,
                blockNumber: r,
                blockTag: n = "latest"
            } = {}) {
                let o;
                let i = void 0 !== r ? (0, l.eC)(r) : void 0;
                return o = t ? await e.request({
                    method: "eth_getBlockTransactionCountByHash",
                    params: [t]
                }) : await e.request({
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [i || n]
                }), (0, G.ly)(o)
            }
            async function getBytecode(e, {
                address: t,
                blockNumber: r,
                blockTag: n = "latest"
            }) {
                let o = void 0 !== r ? (0, l.eC)(r) : void 0,
                    i = await e.request({
                        method: "eth_getCode",
                        params: [t, o || n]
                    });
                if ("0x" !== i) return i
            }
            var q = r(270),
                U = r(53381),
                _ = r(74785);
            async function getLogs(e, {
                address: t,
                blockHash: r,
                fromBlock: n,
                toBlock: o,
                event: i,
                events: s,
                args: c,
                strict: u
            } = {}) {
                let d = u ? ? !1,
                    f = s ? ? (i ? [i] : void 0),
                    p = [];
                return f && (p = [f.flatMap(e => encodeEventTopics({
                    abi: [e],
                    eventName: e.name,
                    args: c
                }))], i && (p = p[0])), (r ? await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: p,
                        blockHash: r
                    }]
                }) : await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: p,
                        fromBlock: "bigint" == typeof n ? (0, l.eC)(n) : n,
                        toBlock: "bigint" == typeof o ? (0, l.eC)(o) : o
                    }]
                })).map(e => {
                    try {
                        let {
                            eventName: t,
                            args: r
                        } = f ? (0, U.F)({
                            abi: f,
                            data: e.data,
                            topics: e.topics,
                            strict: d
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, _.U)(e, {
                            args: r,
                            eventName: t
                        })
                    } catch (n) {
                        let t, r;
                        if (n instanceof w.SM || n instanceof w.Gy) {
                            if (d) return;
                            t = n.abiItem.name, r = n.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, _.U)(e, {
                            args: r ? [] : {},
                            eventName: t
                        })
                    }
                }).filter(Boolean)
            }
            async function getContractEvents(e, {
                abi: t,
                address: r,
                args: n,
                blockHash: o,
                eventName: i,
                fromBlock: s,
                toBlock: c,
                strict: u
            }) {
                let l = i ? (0, R.mE)({
                        abi: t,
                        name: i
                    }) : void 0,
                    d = l ? void 0 : t.filter(e => "event" === e.type);
                return (0, v.s)(e, getLogs, "getLogs")({
                    address: r,
                    args: n,
                    blockHash: o,
                    event: l,
                    events: d,
                    fromBlock: s,
                    toBlock: c,
                    strict: u
                })
            }
            async function getFeeHistory(e, {
                blockCount: t,
                blockNumber: r,
                blockTag: n = "latest",
                rewardPercentiles: o
            }) {
                let i = r ? (0, l.eC)(r) : void 0,
                    s = await e.request({
                        method: "eth_feeHistory",
                        params: [(0, l.eC)(t), i || n, o]
                    });
                return {
                    baseFeePerGas: s.baseFeePerGas.map(e => BigInt(e)),
                    gasUsedRatio: s.gasUsedRatio,
                    oldestBlock: BigInt(s.oldestBlock),
                    reward: s.reward ? .map(e => e.map(e => BigInt(e)))
                }
            }
            async function getFilterChanges(e, {
                filter: t
            }) {
                let r = "strict" in t && t.strict,
                    n = await t.request({
                        method: "eth_getFilterChanges",
                        params: [t.id]
                    });
                return n.map(e => {
                    if ("string" == typeof e) return e;
                    try {
                        let {
                            eventName: n,
                            args: o
                        } = "abi" in t && t.abi ? (0, U.F)({
                            abi: t.abi,
                            data: e.data,
                            topics: e.topics,
                            strict: r
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, _.U)(e, {
                            args: o,
                            eventName: n
                        })
                    } catch (o) {
                        let r, n;
                        if (o instanceof w.SM || o instanceof w.Gy) {
                            if ("strict" in t && t.strict) return;
                            r = o.abiItem.name, n = o.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, _.U)(e, {
                            args: n ? [] : {},
                            eventName: r
                        })
                    }
                }).filter(Boolean)
            }
            async function getFilterLogs(e, {
                filter: t
            }) {
                let r = t.strict ? ? !1,
                    n = await t.request({
                        method: "eth_getFilterLogs",
                        params: [t.id]
                    });
                return n.map(e => {
                    try {
                        let {
                            eventName: n,
                            args: o
                        } = "abi" in t && t.abi ? (0, U.F)({
                            abi: t.abi,
                            data: e.data,
                            topics: e.topics,
                            strict: r
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, _.U)(e, {
                            args: o,
                            eventName: n
                        })
                    } catch (o) {
                        let r, n;
                        if (o instanceof w.SM || o instanceof w.Gy) {
                            if ("strict" in t && t.strict) return;
                            r = o.abiItem.name, n = o.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, _.U)(e, {
                            args: n ? [] : {},
                            eventName: r
                        })
                    }
                }).filter(Boolean)
            }
            var D = r(38720);
            async function getProof(e, {
                address: t,
                blockNumber: r,
                blockTag: n,
                storageKeys: o
            }) {
                let i = void 0 !== r ? (0, l.eC)(r) : void 0,
                    s = await e.request({
                        method: "eth_getProof",
                        params: [t, o, i || (n ? ? "latest")]
                    });
                return { ...s,
                    balance: s.balance ? BigInt(s.balance) : void 0,
                    nonce: s.nonce ? (0, G.ly)(s.nonce) : void 0,
                    storageProof: s.storageProof ? s.storageProof.map(e => ({ ...e,
                        value: BigInt(e.value)
                    })) : void 0
                }
            }
            async function getStorageAt(e, {
                address: t,
                blockNumber: r,
                blockTag: n = "latest",
                slot: o
            }) {
                let i = void 0 !== r ? (0, l.eC)(r) : void 0,
                    s = await e.request({
                        method: "eth_getStorageAt",
                        params: [t, o, i || n]
                    });
                return s
            }
            var L = r(94069),
                z = r(94605);
            async function getTransaction(e, {
                blockHash: t,
                blockNumber: r,
                blockTag: n,
                hash: o,
                index: i
            }) {
                let s = n || "latest",
                    c = void 0 !== r ? (0, l.eC)(r) : void 0,
                    u = null;
                if (o ? u = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [o]
                    }) : t ? u = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [t, (0, l.eC)(i)]
                    }) : (c || s) && (u = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [c || s, (0, l.eC)(i)]
                    })), !u) throw new L.Bh({
                    blockHash: t,
                    blockNumber: r,
                    blockTag: s,
                    hash: o,
                    index: i
                });
                let d = e.chain ? .formatters ? .transaction ? .format || z.Tr;
                return d(u)
            }
            async function getTransactionConfirmations(e, {
                hash: t,
                transactionReceipt: r
            }) {
                let [n, o] = await Promise.all([(0, v.s)(e, getBlockNumber, "getBlockNumber")({}), t ? (0, v.s)(e, getTransaction, "getBlockNumber")({
                    hash: t
                }) : void 0]), i = r ? .blockNumber || o ? .blockNumber;
                return i ? n - i + 1 n : 0 n
            }
            var W = r(58046),
                H = r(30304);
            async function getTransactionReceipt(e, {
                hash: t
            }) {
                let r = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [t]
                });
                if (!r) throw new L.Yb({
                    hash: t
                });
                let n = e.chain ? .formatters ? .transactionReceipt ? .format || H.f;
                return n(r)
            }
            async function multicall(e, t) {
                let {
                    allowFailure: r = !0,
                    batchSize: n,
                    blockNumber: u,
                    blockTag: l,
                    contracts: d,
                    multicallAddress: m
                } = t, b = n ? ? ("object" == typeof e.batch ? .multicall && e.batch.multicall.batchSize || 1024), y = m;
                if (!y) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    y = (0, c.L)({
                        blockNumber: u,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let g = [
                        []
                    ],
                    E = 0,
                    C = 0;
                for (let e = 0; e < d.length; e++) {
                    let {
                        abi: t,
                        address: n,
                        args: o,
                        functionName: i
                    } = d[e];
                    try {
                        let e = (0, s.R)({
                            abi: t,
                            args: o,
                            functionName: i
                        });
                        C += (e.length - 2) / 2, b > 0 && C > b && g[E].length > 0 && (E++, C = (e.length - 2) / 2, g[E] = []), g[E] = [...g[E], {
                            allowFailure: !0,
                            callData: e,
                            target: n
                        }]
                    } catch (s) {
                        let e = getContractError(s, {
                            abi: t,
                            address: n,
                            args: o,
                            docsPath: "/docs/contract/multicall",
                            functionName: i
                        });
                        if (!r) throw e;
                        g[E] = [...g[E], {
                            allowFailure: !0,
                            callData: "0x",
                            target: n
                        }]
                    }
                }
                let P = await Promise.allSettled(g.map(t => (0, v.s)(e, readContract, "readContract")({
                        abi: o.F8,
                        address: y,
                        args: [t],
                        blockNumber: u,
                        blockTag: l,
                        functionName: "aggregate3"
                    }))),
                    x = [];
                for (let e = 0; e < P.length; e++) {
                    let t = P[e];
                    if ("rejected" === t.status) {
                        if (!r) throw t.reason;
                        for (let r = 0; r < g[e].length; r++) x.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let n = t.value;
                    for (let t = 0; t < n.length; t++) {
                        let {
                            returnData: o,
                            success: s
                        } = n[t], {
                            callData: c
                        } = g[e][t], {
                            abi: u,
                            address: l,
                            functionName: f,
                            args: m
                        } = d[x.length];
                        try {
                            if ("0x" === c) throw new w.wb;
                            if (!s) throw new p.VQ({
                                data: o
                            });
                            let e = (0, i.k)({
                                abi: u,
                                args: m,
                                data: o,
                                functionName: f
                            });
                            x.push(r ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = getContractError(t, {
                                abi: u,
                                address: l,
                                args: m,
                                docsPath: "/docs/contract/multicall",
                                functionName: f
                            });
                            if (!r) throw e;
                            x.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (x.length !== d.length) throw new f.G("multicall results mismatch");
                return x
            }
            async function simulateContract(e, {
                abi: t,
                address: r,
                args: n,
                dataSuffix: o,
                functionName: c,
                ...u
            }) {
                let l = u.account ? (0, F.T)(u.account) : void 0,
                    d = (0, s.R)({
                        abi: t,
                        args: n,
                        functionName: c
                    });
                try {
                    let {
                        data: s
                    } = await (0, v.s)(e, C.R, "call")({
                        batch: !1,
                        data: `${d}${o?o.replace("0x",""):""}`,
                        to: r,
                        ...u
                    }), l = (0, i.k)({
                        abi: t,
                        args: n,
                        functionName: c,
                        data: s || "0x"
                    });
                    return {
                        result: l,
                        request: {
                            abi: t,
                            address: r,
                            args: n,
                            dataSuffix: o,
                            functionName: c,
                            ...u
                        }
                    }
                } catch (e) {
                    throw getContractError(e, {
                        abi: t,
                        address: r,
                        args: n,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: c,
                        sender: l ? .address
                    })
                }
            }
            async function uninstallFilter(e, {
                filter: t
            }) {
                return t.request({
                    method: "eth_uninstallFilter",
                    params: [t.id]
                })
            }
            var Z = r(9891),
                K = r(44848),
                Q = r(73951);
            async function verifyHash(e, {
                address: t,
                hash: r,
                signature: n,
                ...i
            }) {
                let s = (0, g.v)(n) ? n : (0, l.NC)(n);
                try {
                    let {
                        data: n
                    } = await (0, v.s)(e, C.R, "call")({
                        data: (0, Q.w)({
                            abi: o.$o,
                            args: [t, r, s],
                            bytecode: "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
                        }),
                        ...i
                    });
                    return function(e, t) {
                        let r = (0, g.v)(e) ? (0, b.O0)(e) : e,
                            n = (0, g.v)(t) ? (0, b.O0)(t) : t;
                        return (0, K.Wd)(r, n)
                    }(n ? ? "0x0", "0x1")
                } catch (e) {
                    if (e instanceof p.cg) return !1;
                    throw e
                }
            }
            async function verifyMessage(e, {
                address: t,
                message: r,
                signature: n,
                ...o
            }) {
                let i = (0, Z.r)(r);
                return verifyHash(e, {
                    address: t,
                    hash: i,
                    signature: n,
                    ...o
                })
            }
            var V = r(19550);
            async function verifyTypedData(e, {
                address: t,
                signature: r,
                message: n,
                primaryType: o,
                types: i,
                domain: s,
                ...c
            }) {
                let u = (0, V.J)({
                    message: n,
                    primaryType: o,
                    types: i,
                    domain: s
                });
                return verifyHash(e, {
                    address: t,
                    hash: u,
                    signature: r,
                    ...c
                })
            }
            var J = r(42912);
            let X = new Map,
                Y = new Map,
                ee = 0;

            function observe(e, t, r) {
                let n = ++ee,
                    getListeners = () => X.get(e) || [],
                    unsubscribe = () => {
                        let t = getListeners();
                        X.set(e, t.filter(e => e.id !== n))
                    },
                    unwatch = () => {
                        let t = Y.get(e);
                        1 === getListeners().length && t && t(), unsubscribe()
                    },
                    o = getListeners();
                if (X.set(e, [...o, {
                        id: n,
                        fns: t
                    }]), o && o.length > 0) return unwatch;
                let i = {};
                for (let e in t) i[e] = (...t) => {
                    let r = getListeners();
                    if (0 !== r.length)
                        for (let n of r) n.fns[e] ? .(...t)
                };
                let s = r(i);
                return "function" == typeof s && Y.set(e, s), unwatch
            }
            var et = r(69525),
                er = r(3359),
                en = r(59156);

            function poll(e, {
                emitOnBegin: t,
                initialWaitTime: r,
                interval: n
            }) {
                let o = !0,
                    unwatch = () => o = !1,
                    watch = async () => {
                        let i;
                        t && (i = await e({
                            unpoll: unwatch
                        }));
                        let s = await r ? .(i) ? ? n;
                        await (0, en.D)(s);
                        let poll = async () => {
                            o && (await e({
                                unpoll: unwatch
                            }), await (0, en.D)(n), poll())
                        };
                        poll()
                    };
                return watch(), unwatch
            }

            function watchBlockNumber(e, {
                emitOnBegin: t = !1,
                emitMissed: r = !1,
                onBlockNumber: n,
                onError: o,
                poll: i,
                pollingInterval: s = e.pollingInterval
            }) {
                let c, u, l;
                let d = void 0 !== i ? i : "webSocket" !== e.transport.type;
                return d ? (() => {
                    let i = (0, er.P)(["watchBlockNumber", e.uid, t, r, s]);
                    return observe(i, {
                        onBlockNumber: n,
                        onError: o
                    }, n => poll(async () => {
                        try {
                            let t = await (0, v.s)(e, getBlockNumber, "getBlockNumber")({
                                cacheTime: 0
                            });
                            if (c) {
                                if (t === c) return;
                                if (t - c > 1 && r)
                                    for (let e = c + 1 n; e < t; e++) n.onBlockNumber(e, c), c = e
                            }(!c || t > c) && (n.onBlockNumber(t, c), c = t)
                        } catch (e) {
                            n.onError ? .(e)
                        }
                    }, {
                        emitOnBegin: t,
                        interval: s
                    }))
                })() : (u = !0, l = () => u = !1, (async () => {
                    try {
                        let {
                            unsubscribe: t
                        } = await e.transport.subscribe({
                            params: ["newHeads"],
                            onData(e) {
                                if (!u) return;
                                let t = (0, G.y_)(e.result ? .number);
                                n(t, c), c = t
                            },
                            onError(e) {
                                o ? .(e)
                            }
                        });
                        l = t, u || l()
                    } catch (e) {
                        o ? .(e)
                    }
                })(), l)
            }
            async function waitForTransactionReceipt(e, {
                confirmations: t = 1,
                hash: r,
                onReplaced: n,
                pollingInterval: o = e.pollingInterval,
                timeout: i
            }) {
                let s, c, u;
                let l = (0, er.P)(["waitForTransactionReceipt", e.uid, r]),
                    d = !1;
                return new Promise((f, p) => {
                    i && setTimeout(() => p(new L.mc({
                        hash: r
                    })), i);
                    let m = observe(l, {
                        onReplaced: n,
                        resolve: f,
                        reject: p
                    }, n => {
                        let i = (0, v.s)(e, watchBlockNumber, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: o,
                            async onBlockNumber(o) {
                                if (d) return;
                                let l = o,
                                    done = e => {
                                        i(), e(), m()
                                    };
                                try {
                                    if (u) {
                                        if (t > 1 && (!u.blockNumber || l - u.blockNumber + 1 n < t)) return;
                                        done(() => n.resolve(u));
                                        return
                                    }
                                    if (s || (d = !0, await (0, et.J)(async () => {
                                            (s = await (0, v.s)(e, getTransaction, "getTransaction")({
                                                hash: r
                                            })).blockNumber && (l = s.blockNumber)
                                        }, {
                                            delay: ({
                                                count: e
                                            }) => 200 * ~~(1 << e),
                                            retryCount: 6
                                        }), d = !1), u = await (0, v.s)(e, getTransactionReceipt, "getTransactionReceipt")({
                                            hash: r
                                        }), t > 1 && (!u.blockNumber || l - u.blockNumber + 1 n < t)) return;
                                    done(() => n.resolve(u))
                                } catch (r) {
                                    if (s && (r instanceof L.Bh || r instanceof L.Yb)) try {
                                        c = s, d = !0;
                                        let r = await (0, et.J)(() => (0, v.s)(e, N.Q, "getBlock")({
                                            blockNumber: l,
                                            includeTransactions: !0
                                        }), {
                                            delay: ({
                                                count: e
                                            }) => 200 * ~~(1 << e),
                                            retryCount: 6,
                                            shouldRetry: ({
                                                error: e
                                            }) => e instanceof J.f
                                        });
                                        d = !1;
                                        let o = r.transactions.find(({
                                            from: e,
                                            nonce: t
                                        }) => e === c.from && t === c.nonce);
                                        if (!o || (u = await (0, v.s)(e, getTransactionReceipt, "getTransactionReceipt")({
                                                hash: o.hash
                                            }), t > 1 && (!u.blockNumber || l - u.blockNumber + 1 n < t))) return;
                                        let i = "replaced";
                                        o.to === c.to && o.value === c.value ? i = "repriced" : o.from === o.to && 0 n === o.value && (i = "cancelled"), done(() => {
                                            n.onReplaced ? .({
                                                reason: i,
                                                replacedTransaction: c,
                                                transaction: o,
                                                transactionReceipt: u
                                            }), n.resolve(u)
                                        })
                                    } catch (e) {
                                        done(() => n.reject(e))
                                    } else done(() => n.reject(r))
                                }
                            }
                        })
                    })
                })
            }
            var ea = r(29764),
                eo = r(40297),
                ei = r(72521);

            function publicActions(e) {
                return {
                    call: t => (0, C.R)(e, t),
                    createBlockFilter: () => createBlockFilter(e),
                    createContractEventFilter: t => createContractEventFilter(e, t),
                    createEventFilter: t => createEventFilter(e, t),
                    createPendingTransactionFilter: () => createPendingTransactionFilter(e),
                    estimateContractGas: t => estimateContractGas(e, t),
                    estimateGas: t => (0, O.Q)(e, t),
                    getBalance: t => getBalance(e, t),
                    getBlock: t => (0, N.Q)(e, t),
                    getBlockNumber: t => getBlockNumber(e, t),
                    getBlockTransactionCount: t => getBlockTransactionCount(e, t),
                    getBytecode: t => getBytecode(e, t),
                    getChainId: () => (0, q.L)(e),
                    getContractEvents: t => getContractEvents(e, t),
                    getEnsAddress: t => getEnsAddress(e, t),
                    getEnsAvatar: t => getEnsAvatar(e, t),
                    getEnsName: t => getEnsName(e, t),
                    getEnsResolver: t => getEnsResolver(e, t),
                    getEnsText: t => getEnsText(e, t),
                    getFeeHistory: t => getFeeHistory(e, t),
                    estimateFeesPerGas: t => (0, B.X)(e, t),
                    getFilterChanges: t => getFilterChanges(e, t),
                    getFilterLogs: t => getFilterLogs(e, t),
                    getGasPrice: () => (0, D.o)(e),
                    getLogs: t => getLogs(e, t),
                    getProof: t => getProof(e, t),
                    estimateMaxPriorityFeePerGas: t => (0, j._)(e, t),
                    getStorageAt: t => getStorageAt(e, t),
                    getTransaction: t => getTransaction(e, t),
                    getTransactionConfirmations: t => getTransactionConfirmations(e, t),
                    getTransactionCount: t => (0, W.K)(e, t),
                    getTransactionReceipt: t => getTransactionReceipt(e, t),
                    multicall: t => multicall(e, t),
                    prepareTransactionRequest: t => (0, eo.Z)(e, t),
                    readContract: t => readContract(e, t),
                    sendRawTransaction: t => (0, ei.p)(e, t),
                    simulateContract: t => simulateContract(e, t),
                    verifyMessage: t => verifyMessage(e, t),
                    verifyTypedData: t => verifyTypedData(e, t),
                    uninstallFilter: t => uninstallFilter(e, t),
                    waitForTransactionReceipt: t => waitForTransactionReceipt(e, t),
                    watchBlocks: t => (function(e, {
                        blockTag: t = "latest",
                        emitMissed: r = !1,
                        emitOnBegin: n = !1,
                        onBlock: o,
                        onError: i,
                        includeTransactions: s,
                        poll: c,
                        pollingInterval: u = e.pollingInterval
                    }) {
                        let l, d, f;
                        let p = void 0 !== c ? c : "webSocket" !== e.transport.type,
                            m = s ? ? !1;
                        return p ? (() => {
                            let s = (0, er.P)(["watchBlocks", e.uid, r, n, m, u]);
                            return observe(s, {
                                onBlock: o,
                                onError: i
                            }, o => poll(async () => {
                                try {
                                    let n = await (0, v.s)(e, N.Q, "getBlock")({
                                        blockTag: t,
                                        includeTransactions: m
                                    });
                                    if (n.number && l ? .number) {
                                        if (n.number === l.number) return;
                                        if (n.number - l.number > 1 && r)
                                            for (let t = l ? .number + 1 n; t < n.number; t++) {
                                                let r = await (0, v.s)(e, N.Q, "getBlock")({
                                                    blockNumber: t,
                                                    includeTransactions: m
                                                });
                                                o.onBlock(r, l), l = r
                                            }
                                    }(!l ? .number || "pending" === t && !n ? .number || n.number && n.number > l.number) && (o.onBlock(n, l), l = n)
                                } catch (e) {
                                    o.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: n,
                                interval: u
                            }))
                        })() : (d = !0, f = () => d = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newHeads"],
                                    onData(t) {
                                        if (!d) return;
                                        let r = e.chain ? .formatters ? .block ? .format || ea.Z,
                                            n = r(t.result);
                                        o(n, l), l = n
                                    },
                                    onError(e) {
                                        i ? .(e)
                                    }
                                });
                                f = t, d || f()
                            } catch (e) {
                                i ? .(e)
                            }
                        })(), f)
                    })(e, t),
                    watchBlockNumber: t => watchBlockNumber(e, t),
                    watchContractEvent: t => (function(e, {
                        abi: t,
                        address: r,
                        args: n,
                        batch: o = !0,
                        eventName: i,
                        onError: s,
                        onLogs: c,
                        poll: u,
                        pollingInterval: l = e.pollingInterval,
                        strict: d
                    }) {
                        let f, p;
                        let m = void 0 !== u ? u : "webSocket" !== e.transport.type;
                        return m ? (() => {
                            let u = (0, er.P)(["watchContractEvent", r, n, o, e.uid, i, l]),
                                f = d ? ? !1;
                            return observe(u, {
                                onLogs: c,
                                onError: s
                            }, s => {
                                let c, u;
                                let d = !1,
                                    p = poll(async () => {
                                        if (!d) {
                                            try {
                                                u = await (0, v.s)(e, createContractEventFilter, "createContractEventFilter")({
                                                    abi: t,
                                                    address: r,
                                                    args: n,
                                                    eventName: i,
                                                    strict: f
                                                })
                                            } catch {}
                                            d = !0;
                                            return
                                        }
                                        try {
                                            let l;
                                            if (u) l = await (0, v.s)(e, getFilterChanges, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let o = await (0, v.s)(e, getBlockNumber, "getBlockNumber")({});
                                                l = c && c !== o ? await (0, v.s)(e, getContractEvents, "getContractEvents")({
                                                    abi: t,
                                                    address: r,
                                                    args: n,
                                                    eventName: i,
                                                    fromBlock: c + 1 n,
                                                    toBlock: o,
                                                    strict: f
                                                }) : [], c = o
                                            }
                                            if (0 === l.length) return;
                                            if (o) s.onLogs(l);
                                            else
                                                for (let e of l) s.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof E.yR && (d = !1), s.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: l
                                    });
                                return async () => {
                                    u && await (0, v.s)(e, uninstallFilter, "uninstallFilter")({
                                        filter: u
                                    }), p()
                                }
                            })
                        })() : (f = !0, p = () => f = !1, (async () => {
                            try {
                                let o = i ? encodeEventTopics({
                                        abi: t,
                                        eventName: i,
                                        args: n
                                    }) : [],
                                    {
                                        unsubscribe: u
                                    } = await e.transport.subscribe({
                                        params: ["logs", {
                                            address: r,
                                            topics: o
                                        }],
                                        onData(e) {
                                            if (!f) return;
                                            let r = e.result;
                                            try {
                                                let {
                                                    eventName: e,
                                                    args: n
                                                } = (0, U.F)({
                                                    abi: t,
                                                    data: r.data,
                                                    topics: r.topics,
                                                    strict: d
                                                }), o = (0, _.U)(r, {
                                                    args: n,
                                                    eventName: e
                                                });
                                                c([o])
                                            } catch (o) {
                                                let e, t;
                                                if (o instanceof w.SM || o instanceof w.Gy) {
                                                    if (d) return;
                                                    e = o.abiItem.name, t = o.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                                }
                                                let n = (0, _.U)(r, {
                                                    args: t ? [] : {},
                                                    eventName: e
                                                });
                                                c([n])
                                            }
                                        },
                                        onError(e) {
                                            s ? .(e)
                                        }
                                    });
                                p = u, f || p()
                            } catch (e) {
                                s ? .(e)
                            }
                        })(), p)
                    })(e, t),
                    watchEvent: t => (function(e, {
                        address: t,
                        args: r,
                        batch: n = !0,
                        event: o,
                        events: i,
                        onError: s,
                        onLogs: c,
                        poll: u,
                        pollingInterval: l = e.pollingInterval,
                        strict: d
                    }) {
                        let f, p;
                        let m = void 0 !== u ? u : "webSocket" !== e.transport.type,
                            b = d ? ? !1;
                        return m ? (() => {
                            let u = (0, er.P)(["watchEvent", t, r, n, e.uid, o, l]);
                            return observe(u, {
                                onLogs: c,
                                onError: s
                            }, s => {
                                let c, u;
                                let d = !1,
                                    f = poll(async () => {
                                        if (!d) {
                                            try {
                                                u = await (0, v.s)(e, createEventFilter, "createEventFilter")({
                                                    address: t,
                                                    args: r,
                                                    event: o,
                                                    events: i,
                                                    strict: b
                                                })
                                            } catch {}
                                            d = !0;
                                            return
                                        }
                                        try {
                                            let l;
                                            if (u) l = await (0, v.s)(e, getFilterChanges, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let n = await (0, v.s)(e, getBlockNumber, "getBlockNumber")({});
                                                l = c && c !== n ? await (0, v.s)(e, getLogs, "getLogs")({
                                                    address: t,
                                                    args: r,
                                                    event: o,
                                                    events: i,
                                                    fromBlock: c + 1 n,
                                                    toBlock: n
                                                }) : [], c = n
                                            }
                                            if (0 === l.length) return;
                                            if (n) s.onLogs(l);
                                            else
                                                for (let e of l) s.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof E.yR && (d = !1), s.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: l
                                    });
                                return async () => {
                                    u && await (0, v.s)(e, uninstallFilter, "uninstallFilter")({
                                        filter: u
                                    }), f()
                                }
                            })
                        })() : (f = !0, p = () => f = !1, (async () => {
                            try {
                                let n = i ? ? (o ? [o] : void 0),
                                    u = [];
                                n && (u = [n.flatMap(e => encodeEventTopics({
                                    abi: [e],
                                    eventName: e.name,
                                    args: r
                                }))], o && (u = u[0]));
                                let {
                                    unsubscribe: l
                                } = await e.transport.subscribe({
                                    params: ["logs", {
                                        address: t,
                                        topics: u
                                    }],
                                    onData(e) {
                                        if (!f) return;
                                        let t = e.result;
                                        try {
                                            let {
                                                eventName: e,
                                                args: r
                                            } = (0, U.F)({
                                                abi: n,
                                                data: t.data,
                                                topics: t.topics,
                                                strict: b
                                            }), o = (0, _.U)(t, {
                                                args: r,
                                                eventName: e
                                            });
                                            c([o])
                                        } catch (o) {
                                            let e, r;
                                            if (o instanceof w.SM || o instanceof w.Gy) {
                                                if (d) return;
                                                e = o.abiItem.name, r = o.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                            }
                                            let n = (0, _.U)(t, {
                                                args: r ? [] : {},
                                                eventName: e
                                            });
                                            c([n])
                                        }
                                    },
                                    onError(e) {
                                        s ? .(e)
                                    }
                                });
                                p = l, f || p()
                            } catch (e) {
                                s ? .(e)
                            }
                        })(), p)
                    })(e, t),
                    watchPendingTransactions: t => (function(e, {
                        batch: t = !0,
                        onError: r,
                        onTransactions: n,
                        poll: o,
                        pollingInterval: i = e.pollingInterval
                    }) {
                        let s, c;
                        let u = void 0 !== o ? o : "webSocket" !== e.transport.type;
                        return u ? (() => {
                            let o = (0, er.P)(["watchPendingTransactions", e.uid, t, i]);
                            return observe(o, {
                                onTransactions: n,
                                onError: r
                            }, r => {
                                let n;
                                let o = poll(async () => {
                                    try {
                                        if (!n) try {
                                            n = await (0, v.s)(e, createPendingTransactionFilter, "createPendingTransactionFilter")({});
                                            return
                                        } catch (e) {
                                            throw o(), e
                                        }
                                        let i = await (0, v.s)(e, getFilterChanges, "getFilterChanges")({
                                            filter: n
                                        });
                                        if (0 === i.length) return;
                                        if (t) r.onTransactions(i);
                                        else
                                            for (let e of i) r.onTransactions([e])
                                    } catch (e) {
                                        r.onError ? .(e)
                                    }
                                }, {
                                    emitOnBegin: !0,
                                    interval: i
                                });
                                return async () => {
                                    n && await (0, v.s)(e, uninstallFilter, "uninstallFilter")({
                                        filter: n
                                    }), o()
                                }
                            })
                        })() : (s = !0, c = () => s = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newPendingTransactions"],
                                    onData(e) {
                                        if (!s) return;
                                        let t = e.result;
                                        n([t])
                                    },
                                    onError(e) {
                                        r ? .(e)
                                    }
                                });
                                c = t, s || c()
                            } catch (e) {
                                r ? .(e)
                            }
                        })(), c)
                    })(e, t)
                }
            }

            function createPublicClient(e) {
                let {
                    key: t = "public",
                    name: r = "Public Client"
                } = e, o = (0, n.e)({ ...e,
                    key: t,
                    name: r,
                    type: "publicClient"
                });
                return o.extend(publicActions)
            }
        },
        56218: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return createWalletClient
                }
            });
            var n = r(69843),
                o = r(270),
                i = r(19473);
            async function addChain(e, {
                chain: t
            }) {
                let {
                    id: r,
                    name: n,
                    nativeCurrency: o,
                    rpcUrls: s,
                    blockExplorers: c
                } = t;
                await e.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: (0, i.eC)(r),
                        chainName: n,
                        nativeCurrency: o,
                        rpcUrls: s.default.http,
                        blockExplorerUrls: c ? Object.values(c).map(({
                            url: e
                        }) => e) : void 0
                    }]
                })
            }
            var s = r(73951),
                c = r(88121),
                u = r(47568),
                l = r(78734);

            function assertCurrentChain({
                chain: e,
                currentChainId: t
            }) {
                if (!e) throw new l.Bk;
                if (t !== e.id) throw new l.Yl({
                    chain: e,
                    currentChainId: t
                })
            }
            var d = r(3741),
                f = r(94069),
                p = r(47597),
                m = r(75250),
                b = r(33495),
                y = r(61820),
                g = r(25621),
                v = r(40297),
                w = r(72521);
            async function sendTransaction(e, t) {
                let {
                    account: r = e.account,
                    chain: n = e.chain,
                    accessList: i,
                    data: s,
                    gas: l,
                    gasPrice: E,
                    maxFeePerGas: C,
                    maxPriorityFeePerGas: P,
                    nonce: x,
                    to: k,
                    value: S,
                    ...T
                } = t;
                if (!r) throw new u.o({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let I = (0, c.T)(r);
                try {
                    let r;
                    if ((0, g.F)(t), null !== n && (r = await (0, y.s)(e, o.L, "getChainId")({}), assertCurrentChain({
                            currentChainId: r,
                            chain: n
                        })), "local" === I.type) {
                        let t = await (0, y.s)(e, v.Z, "prepareTransactionRequest")({
                            account: I,
                            accessList: i,
                            chain: n,
                            data: s,
                            gas: l,
                            gasPrice: E,
                            maxFeePerGas: C,
                            maxPriorityFeePerGas: P,
                            nonce: x,
                            to: k,
                            value: S,
                            ...T
                        });
                        r || (r = await (0, y.s)(e, o.L, "getChainId")({}));
                        let c = n ? .serializers ? .transaction,
                            u = await I.signTransaction({ ...t,
                                chainId: r
                            }, {
                                serializer: c
                            });
                        return await (0, y.s)(e, w.p, "sendRawTransaction")({
                            serializedTransaction: u
                        })
                    }
                    let c = e.chain ? .formatters ? .transactionRequest ? .format,
                        u = c || b.tG,
                        d = u({ ...(0, m.K)(T, {
                                format: c
                            }),
                            accessList: i,
                            data: s,
                            from: I.address,
                            gas: l,
                            gasPrice: E,
                            maxFeePerGas: C,
                            maxPriorityFeePerGas: P,
                            nonce: x,
                            to: k,
                            value: S
                        });
                    return await e.request({
                        method: "eth_sendTransaction",
                        params: [d]
                    })
                } catch (e) {
                    throw function(e, {
                        docsPath: t,
                        ...r
                    }) {
                        let n = (() => {
                            let t = (0, p.k)(e, r);
                            return t instanceof d.cj ? e : t
                        })();
                        return new f.mk(n, {
                            docsPath: t,
                            ...r
                        })
                    }(e, { ...t,
                        account: I,
                        chain: t.chain || void 0
                    })
                }
            }
            var E = r(70278);
            async function getAddresses(e) {
                if (e.account ? .type === "local") return [e.account.address];
                let t = await e.request({
                    method: "eth_accounts"
                });
                return t.map(e => (0, E.x)(e))
            }
            async function getPermissions(e) {
                let t = await e.request({
                    method: "wallet_getPermissions"
                });
                return t
            }
            async function requestAddresses(e) {
                let t = await e.request({
                    method: "eth_requestAccounts"
                });
                return t.map(e => (0, E.K)(e))
            }
            async function requestPermissions(e, t) {
                return e.request({
                    method: "wallet_requestPermissions",
                    params: [t]
                })
            }
            async function signMessage(e, {
                account: t = e.account,
                message: r
            }) {
                if (!t) throw new u.o({
                    docsPath: "/docs/actions/wallet/signMessage"
                });
                let n = (0, c.T)(t);
                if ("local" === n.type) return n.signMessage({
                    message: r
                });
                let o = "string" == typeof r ? (0, i.$G)(r) : r.raw instanceof Uint8Array ? (0, i.NC)(r.raw) : r.raw;
                return e.request({
                    method: "personal_sign",
                    params: [o, n.address]
                })
            }
            async function signTransaction(e, t) {
                let {
                    account: r = e.account,
                    chain: n = e.chain,
                    ...s
                } = t;
                if (!r) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
                let l = (0, c.T)(r);
                (0, g.F)({
                    account: l,
                    ...t
                });
                let d = await (0, y.s)(e, o.L, "getChainId")({});
                null !== n && assertCurrentChain({
                    currentChainId: d,
                    chain: n
                });
                let f = n ? .formatters || e.chain ? .formatters,
                    p = f ? .transactionRequest ? .format || b.tG;
                return "local" === l.type ? l.signTransaction({ ...s,
                    chainId: d
                }, {
                    serializer: e.chain ? .serializers ? .transaction
                }) : await e.request({
                    method: "eth_signTransaction",
                    params: [{ ...p(s),
                        chainId: (0, i.eC)(d),
                        from: l.address
                    }]
                })
            }
            var C = r(63424),
                P = r(3359),
                x = r(4304);
            async function signTypedData(e, {
                account: t = e.account,
                domain: r,
                message: n,
                primaryType: o,
                types: i
            }) {
                if (!t) throw new u.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
                let s = (0, c.T)(t),
                    l = {
                        EIP712Domain: (0, x.cj)({
                            domain: r
                        }),
                        ...i
                    };
                if ((0, x.iC)({
                        domain: r,
                        message: n,
                        primaryType: o,
                        types: l
                    }), "local" === s.type) return s.signTypedData({
                    domain: r,
                    primaryType: o,
                    types: l,
                    message: n
                });
                let d = (0, P.P)({
                    domain: r ? ? {},
                    primaryType: o,
                    types: l,
                    message: n
                }, (e, t) => (0, C.v)(t) ? t.toLowerCase() : t);
                return e.request({
                    method: "eth_signTypedData_v4",
                    params: [s.address, d]
                })
            }
            async function switchChain(e, {
                id: t
            }) {
                await e.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: (0, i.eC)(t)
                    }]
                })
            }
            async function watchAsset(e, t) {
                let r = await e.request({
                    method: "wallet_watchAsset",
                    params: t
                });
                return r
            }
            var k = r(74705);
            async function writeContract(e, {
                abi: t,
                address: r,
                args: n,
                dataSuffix: o,
                functionName: i,
                ...s
            }) {
                let c = (0, k.R)({
                        abi: t,
                        args: n,
                        functionName: i
                    }),
                    u = await (0, y.s)(e, sendTransaction, "sendTransaction")({
                        data: `${c}${o?o.replace("0x",""):""}`,
                        to: r,
                        ...s
                    });
                return u
            }

            function walletActions(e) {
                return {
                    addChain: t => addChain(e, t),
                    deployContract: t => (function(e, {
                        abi: t,
                        args: r,
                        bytecode: n,
                        ...o
                    }) {
                        let i = (0, s.w)({
                            abi: t,
                            args: r,
                            bytecode: n
                        });
                        return sendTransaction(e, { ...o,
                            data: i
                        })
                    })(e, t),
                    getAddresses: () => getAddresses(e),
                    getChainId: () => (0, o.L)(e),
                    getPermissions: () => getPermissions(e),
                    prepareTransactionRequest: t => (0, v.Z)(e, t),
                    requestAddresses: () => requestAddresses(e),
                    requestPermissions: t => requestPermissions(e, t),
                    sendRawTransaction: t => (0, w.p)(e, t),
                    sendTransaction: t => sendTransaction(e, t),
                    signMessage: t => signMessage(e, t),
                    signTransaction: t => signTransaction(e, t),
                    signTypedData: t => signTypedData(e, t),
                    switchChain: t => switchChain(e, t),
                    watchAsset: t => watchAsset(e, t),
                    writeContract: t => writeContract(e, t)
                }
            }

            function createWalletClient(e) {
                let {
                    key: t = "wallet",
                    name: r = "Wallet Client",
                    transport: o
                } = e, i = (0, n.e)({ ...e,
                    key: t,
                    name: r,
                    transport: e => o({ ...e,
                        retryCount: 0
                    }),
                    type: "walletClient"
                });
                return i.extend(walletActions)
            }
        },
        84339: function(e, t, r) {
            r.d(t, {
                q: function() {
                    return createTransport
                }
            });
            var n = r(88714);

            function createTransport({
                key: e,
                name: t,
                request: r,
                retryCount: o = 3,
                retryDelay: i = 150,
                timeout: s,
                type: c
            }, u) {
                return {
                    config: {
                        key: e,
                        name: t,
                        request: r,
                        retryCount: o,
                        retryDelay: i,
                        timeout: s,
                        type: c
                    },
                    request: (0, n.n)(r, {
                        retryCount: o,
                        retryDelay: i
                    }),
                    value: u
                }
            }
        },
        37491: function(e, t, r) {
            r.d(t, {
                P: function() {
                    return custom
                }
            });
            var n = r(84339);

            function custom(e, t = {}) {
                let {
                    key: r = "custom",
                    name: o = "Custom Provider",
                    retryDelay: i
                } = t;
                return ({
                    retryCount: s
                }) => (0, n.q)({
                    key: r,
                    name: o,
                    request: e.request.bind(e),
                    retryCount: t.retryCount ? ? s,
                    retryDelay: i,
                    type: "custom"
                })
            }
        },
        9447: function(e, t, r) {
            r.d(t, {
                t: function() {
                    return fallback
                }
            });
            var n = r(88714),
                o = r(59156),
                i = r(84339);

            function fallback(e, t = {}) {
                let {
                    key: r = "fallback",
                    name: s = "Fallback",
                    rank: c = !1,
                    retryCount: u,
                    retryDelay: l
                } = t;
                return ({
                    chain: t,
                    pollingInterval: d = 4e3,
                    timeout: f
                }) => {
                    let p = e,
                        onResponse = () => {},
                        m = (0, i.q)({
                            key: r,
                            name: s,
                            async request({
                                method: e,
                                params: r
                            }) {
                                let fetch = async (o = 0) => {
                                    let i = p[o]({
                                        chain: t,
                                        retryCount: 0,
                                        timeout: f
                                    });
                                    try {
                                        let t = await i.request({
                                            method: e,
                                            params: r
                                        });
                                        return onResponse({
                                            method: e,
                                            params: r,
                                            response: t,
                                            transport: i,
                                            status: "success"
                                        }), t
                                    } catch (t) {
                                        if (onResponse({
                                                error: t,
                                                method: e,
                                                params: r,
                                                transport: i,
                                                status: "error"
                                            }), (0, n.y)(t) || o === p.length - 1) throw t;
                                        return fetch(o + 1)
                                    }
                                };
                                return fetch()
                            },
                            retryCount: u,
                            retryDelay: l,
                            type: "fallback"
                        }, {
                            onResponse: e => onResponse = e,
                            transports: p.map(e => e({
                                chain: t,
                                retryCount: 0
                            }))
                        });
                    if (c) {
                        let e = "object" == typeof c ? c : {};
                        ! function({
                            chain: e,
                            interval: t = 4e3,
                            onTransports: r,
                            sampleCount: n = 10,
                            timeout: i = 1e3,
                            transports: s,
                            weights: c = {}
                        }) {
                            let {
                                stability: u = .7,
                                latency: l = .3
                            } = c, d = [], rankTransports_ = async () => {
                                let c = await Promise.all(s.map(async t => {
                                    let r, n;
                                    let o = t({
                                            chain: e,
                                            retryCount: 0,
                                            timeout: i
                                        }),
                                        s = Date.now();
                                    try {
                                        await o.request({
                                            method: "net_listening"
                                        }), n = 1
                                    } catch {
                                        n = 0
                                    } finally {
                                        r = Date.now()
                                    }
                                    let c = r - s;
                                    return {
                                        latency: c,
                                        success: n
                                    }
                                }));
                                d.push(c), d.length > n && d.shift();
                                let f = Math.max(...d.map(e => Math.max(...e.map(({
                                        latency: e
                                    }) => e)))),
                                    p = s.map((e, t) => {
                                        let r = d.map(e => e[t].latency),
                                            n = r.reduce((e, t) => e + t, 0) / r.length,
                                            o = d.map(e => e[t].success),
                                            i = o.reduce((e, t) => e + t, 0) / o.length;
                                        return 0 === i ? [0, t] : [l * (1 - n / f) + u * i, t]
                                    }).sort((e, t) => t[0] - e[0]);
                                r(p.map(([, e]) => s[e])), await (0, o.D)(t), rankTransports_()
                            };
                            rankTransports_()
                        }({
                            chain: t,
                            interval: e.interval ? ? d,
                            onTransports: e => p = e,
                            sampleCount: e.sampleCount,
                            timeout: e.timeout,
                            transports: p,
                            weights: e.weights
                        })
                    }
                    return m
                }
            }
        },
        36875: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return http
                }
            });
            var n = r(76550),
                o = r(92565),
                i = r(46465),
                s = r(14167),
                c = r(84339);

            function http(e, t = {}) {
                let {
                    batch: r,
                    fetchOptions: u,
                    key: l = "http",
                    name: d = "HTTP JSON-RPC",
                    retryDelay: f
                } = t;
                return ({
                    chain: p,
                    retryCount: m,
                    timeout: b
                }) => {
                    let {
                        batchSize: y = 1e3,
                        wait: g = 0
                    } = "object" == typeof r ? r : {}, v = t.retryCount ? ? m, w = b ? ? t.timeout ? ? 1e4, E = e || p ? .rpcUrls.default.http[0];
                    if (!E) throw new o.I;
                    return (0, c.q)({
                        key: l,
                        name: d,
                        async request({
                            method: t,
                            params: o
                        }) {
                            let c = {
                                    method: t,
                                    params: o
                                },
                                {
                                    schedule: l
                                } = (0, i.S)({
                                    id: `${e}`,
                                    wait: g,
                                    shouldSplitBatch: e => e.length > y,
                                    fn: e => s.f4.http(E, {
                                        body: e,
                                        fetchOptions: u,
                                        timeout: w
                                    }),
                                    sort: (e, t) => e.id - t.id
                                }),
                                fn = async e => r ? l(e) : [await s.f4.http(E, {
                                    body: e,
                                    fetchOptions: u,
                                    timeout: w
                                })],
                                [{
                                    error: d,
                                    result: f
                                }] = await fn(c);
                            if (d) throw new n.bs({
                                body: c,
                                error: d,
                                url: E
                            });
                            return f
                        },
                        retryCount: v,
                        retryDelay: f,
                        timeout: w,
                        type: "http"
                    }, {
                        fetchOptions: u,
                        url: e
                    })
                }
            }
        },
        17764: function(e, t, r) {
            r.d(t, {
                $o: function() {
                    return l
                },
                F8: function() {
                    return n
                },
                X$: function() {
                    return u
                },
                du: function() {
                    return s
                },
                k3: function() {
                    return i
                },
                nZ: function() {
                    return c
                }
            });
            let n = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                o = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }],
                i = [...o, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }],
                s = [...o, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }],
                c = [{
                    name: "text",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "key",
                        type: "string"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }],
                u = [{
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "coinType",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }]
                }],
                l = [{
                    inputs: [{
                        internalType: "address",
                        name: "_signer",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }]
        },
        84857: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return n
                },
                Up: function() {
                    return o
                },
                hZ: function() {
                    return i
                }
            });
            let n = {
                    1: "An `assert` condition failed.",
                    17: "Arithmic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                o = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                i = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        86093: function(e, t, r) {
            r.d(t, {
                CI: function() {
                    return InvalidAbiDecodingTypeError
                },
                FM: function() {
                    return AbiEventSignatureEmptyTopicsError
                },
                Gy: function() {
                    return DecodeLogTopicsMismatch
                },
                KY: function() {
                    return BytesSizeMismatchError
                },
                M4: function() {
                    return AbiEncodingBytesSizeMismatchError
                },
                MX: function() {
                    return AbiFunctionOutputsNotFoundError
                },
                S4: function() {
                    return AbiItemAmbiguityError
                },
                SM: function() {
                    return DecodeLogDataMismatch
                },
                cO: function() {
                    return AbiConstructorParamsNotFoundError
                },
                dh: function() {
                    return InvalidAbiEncodingTypeError
                },
                fM: function() {
                    return AbiConstructorNotFoundError
                },
                fs: function() {
                    return AbiEncodingLengthMismatchError
                },
                gr: function() {
                    return AbiEncodingArrayLengthMismatchError
                },
                hn: function() {
                    return InvalidArrayError
                },
                lC: function() {
                    return AbiEventSignatureNotFoundError
                },
                mv: function() {
                    return AbiEventNotFoundError
                },
                wM: function() {
                    return InvalidDefinitionTypeError
                },
                wb: function() {
                    return AbiDecodingZeroDataError
                },
                xB: function() {
                    return AbiDecodingDataSizeTooSmallError
                },
                xL: function() {
                    return AbiFunctionNotFoundError
                },
                yP: function() {
                    return AbiErrorSignatureNotFoundError
                }
            });
            var n = r(44682),
                o = r(86920),
                i = r(89534);
            let AbiConstructorNotFoundError = class AbiConstructorNotFoundError extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorNotFoundError"
                    })
                }
            };
            let AbiConstructorParamsNotFoundError = class AbiConstructorParamsNotFoundError extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorParamsNotFoundError"
                    })
                }
            };
            let AbiDecodingDataSizeTooSmallError = class AbiDecodingDataSizeTooSmallError extends i.G {
                constructor({
                    data: e,
                    params: t,
                    size: r
                }) {
                    super(`Data size of ${r} bytes is too small for given parameters.`, {
                        metaMessages: [`Params: (${(0,n.h)(t,{includeName:!0})})`, `Data:   ${e} (${r} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = r
                }
            };
            let AbiDecodingZeroDataError = class AbiDecodingZeroDataError extends i.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingZeroDataError"
                    })
                }
            };
            let AbiEncodingArrayLengthMismatchError = class AbiEncodingArrayLengthMismatchError extends i.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: r
                }) {
                    super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            };
            let AbiEncodingBytesSizeMismatchError = class AbiEncodingBytesSizeMismatchError extends i.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super(`Size of bytes "${t}" (bytes${(0,o.d)(t)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            };
            let AbiEncodingLengthMismatchError = class AbiEncodingLengthMismatchError extends i.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingLengthMismatchError"
                    })
                }
            };
            let AbiErrorSignatureNotFoundError = class AbiErrorSignatureNotFoundError extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            };
            let AbiEventSignatureEmptyTopicsError = class AbiEventSignatureEmptyTopicsError extends i.G {
                constructor({
                    docsPath: e
                }) {
                    super("Cannot extract event signature from empty topics.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureEmptyTopicsError"
                    })
                }
            };
            let AbiEventSignatureNotFoundError = class AbiEventSignatureNotFoundError extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureNotFoundError"
                    })
                }
            };
            let AbiEventNotFoundError = class AbiEventNotFoundError extends i.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventNotFoundError"
                    })
                }
            };
            let AbiFunctionNotFoundError = class AbiFunctionNotFoundError extends i.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionNotFoundError"
                    })
                }
            };
            let AbiFunctionOutputsNotFoundError = class AbiFunctionOutputsNotFoundError extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionOutputsNotFoundError"
                    })
                }
            };
            let AbiItemAmbiguityError = class AbiItemAmbiguityError extends i.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: [`\`${e.type}\` in \`${(0,n.t)(e.abiItem)}\`, and`, `\`${t.type}\` in \`${(0,n.t)(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiItemAmbiguityError"
                    })
                }
            };
            let BytesSizeMismatchError = class BytesSizeMismatchError extends i.G {
                constructor({
                    expectedSize: e,
                    givenSize: t
                }) {
                    super(`Expected bytes${e}, got bytes${t}.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BytesSizeMismatchError"
                    })
                }
            };
            let DecodeLogDataMismatch = class DecodeLogDataMismatch extends i.G {
                constructor({
                    abiItem: e,
                    data: t,
                    params: r,
                    size: o
                }) {
                    super(`Data size of ${o} bytes is too small for non-indexed event parameters.`, {
                        metaMessages: [`Params: (${(0,n.h)(r,{includeName:!0})})`, `Data:   ${t} (${o} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogDataMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e, this.data = t, this.params = r, this.size = o
                }
            };
            let DecodeLogTopicsMismatch = class DecodeLogTopicsMismatch extends i.G {
                constructor({
                    abiItem: e,
                    param: t
                }) {
                    super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogTopicsMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e
                }
            };
            let InvalidAbiEncodingTypeError = class InvalidAbiEncodingTypeError extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiEncodingType"
                    })
                }
            };
            let InvalidAbiDecodingTypeError = class InvalidAbiDecodingTypeError extends i.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiDecodingType"
                    })
                }
            };
            let InvalidArrayError = class InvalidArrayError extends i.G {
                constructor(e) {
                    super(`Value "${e}" is not a valid array.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidArrayError"
                    })
                }
            };
            let InvalidDefinitionTypeError = class InvalidDefinitionTypeError extends i.G {
                constructor(e) {
                    super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        47568: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return AccountNotFoundError
                }
            });
            var n = r(89534);
            let AccountNotFoundError = class AccountNotFoundError extends n.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.", {
                        docsPath: e,
                        docsSlug: "account"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountNotFoundError"
                    })
                }
            }
        },
        82663: function(e, t, r) {
            r.d(t, {
                b: function() {
                    return InvalidAddressError
                }
            });
            var n = r(89534);
            let InvalidAddressError = class InvalidAddressError extends n.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAddressError"
                    })
                }
            }
        },
        89534: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return BaseError
                }
            });
            var n = r(56668);
            let BaseError = class BaseError extends Error {
                constructor(e, t = {}) {
                    super(), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ViemError"
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: (0, n.bo)()
                    });
                    let r = t.cause instanceof BaseError ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        o = t.cause instanceof BaseError && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...o ? [`Docs: https://viem.sh${o}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...r ? [`Details: ${r}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = r, this.docsPath = o, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return function walk(e, t) {
                        return t ? .(e) ? e : e && "object" == typeof e && "cause" in e ? walk(e.cause, t) : t ? null : e
                    }(this, e)
                }
            }
        },
        42912: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return BlockNotFoundError
                }
            });
            var n = r(89534);
            let BlockNotFoundError = class BlockNotFoundError extends n.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let r = "Block";
                    e && (r = `Block at hash "${e}"`), t && (r = `Block at number "${t}"`), super(`${r} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BlockNotFoundError"
                    })
                }
            }
        },
        78734: function(e, t, r) {
            r.d(t, {
                Bk: function() {
                    return ChainNotFoundError
                },
                Yl: function() {
                    return ChainMismatchError
                },
                hJ: function() {
                    return InvalidChainIdError
                },
                mm: function() {
                    return ChainDoesNotSupportContract
                },
                pZ: function() {
                    return ClientChainNotConfiguredError
                }
            });
            var n = r(89534);
            let ChainDoesNotSupportContract = class ChainDoesNotSupportContract extends n.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: r
                }) {
                    super(`Chain "${t.name}" does not support contract "${r.name}".`, {
                        metaMessages: ["This could be due to any of the following:", ...e && r.blockCreated && r.blockCreated > e ? [`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${r.name}" configured.`]]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDoesNotSupportContract"
                    })
                }
            };
            let ChainMismatchError = class ChainMismatchError extends n.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainMismatchError"
                    })
                }
            };
            let ChainNotFoundError = class ChainNotFoundError extends n.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotFoundError"
                    })
                }
            };
            let ClientChainNotConfiguredError = class ClientChainNotConfiguredError extends n.G {
                constructor() {
                    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ClientChainNotConfiguredError"
                    })
                }
            };
            let InvalidChainIdError = class InvalidChainIdError extends n.G {
                constructor({
                    chainId: e
                }) {
                    super(`Chain ID "${e}" is invalid.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidChainIdError"
                    })
                }
            }
        },
        70677: function(e, t, r) {
            r.d(t, {
                cg: function() {
                    return CallExecutionError
                },
                uq: function() {
                    return ContractFunctionExecutionError
                },
                Lu: function() {
                    return ContractFunctionRevertedError
                },
                Dk: function() {
                    return ContractFunctionZeroDataError
                },
                VQ: function() {
                    return RawContractError
                }
            });
            var n = r(88121),
                o = r(84857),
                i = r(16189),
                s = r(44682),
                c = r(3359);

            function formatAbiItemWithArgs({
                abiItem: e,
                args: t,
                includeFunctionName: r = !0,
                includeName: n = !1
            }) {
                if ("name" in e && "inputs" in e && e.inputs) return `${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,c.P)(t[r]):t[r]}`).join(", ")})`
            }
            var u = r(77813),
                l = r(30274),
                d = r(4287),
                f = r(86093),
                p = r(89534),
                m = r(94069),
                b = r(56668);
            let CallExecutionError = class CallExecutionError extends p.G {
                constructor(e, {
                    account: t,
                    docsPath: r,
                    chain: o,
                    data: i,
                    gas: s,
                    gasPrice: c,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: f,
                    nonce: p,
                    to: b,
                    value: y
                }) {
                    let g = t ? (0, n.T)(t) : void 0,
                        v = (0, m.xr)({
                            from: g ? .address,
                            to: b,
                            value: void 0 !== y && `${(0,l.d)(y)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                            data: i,
                            gas: s,
                            gasPrice: void 0 !== c && `${(0,d.o)(c)} gwei`,
                            maxFeePerGas: void 0 !== u && `${(0,d.o)(u)} gwei`,
                            maxPriorityFeePerGas: void 0 !== f && `${(0,d.o)(f)} gwei`,
                            nonce: p
                        });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: r,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", v].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CallExecutionError"
                    }), this.cause = e
                }
            };
            let ContractFunctionExecutionError = class ContractFunctionExecutionError extends p.G {
                constructor(e, {
                    abi: t,
                    args: r,
                    contractAddress: n,
                    docsPath: o,
                    functionName: i,
                    sender: c
                }) {
                    let l = (0, u.mE)({
                            abi: t,
                            args: r,
                            name: i
                        }),
                        d = l ? formatAbiItemWithArgs({
                            abiItem: l,
                            args: r,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0,
                        f = l ? (0, s.t)(l, {
                            includeName: !0
                        }) : void 0,
                        p = (0, m.xr)({
                            address: n && (0, b.CR)(n),
                            function: f,
                            args: d && "()" !== d && `${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${d}`,
                            sender: c
                        });
                    super(e.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
                        cause: e,
                        docsPath: o,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", p].filter(Boolean)
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionExecutionError"
                    }), this.abi = t, this.args = r, this.cause = e, this.contractAddress = n, this.functionName = i, this.sender = c
                }
            };
            let ContractFunctionRevertedError = class ContractFunctionRevertedError extends p.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: r,
                    message: n
                }) {
                    let c, u, l, d, p;
                    if (t && "0x" !== t) try {
                        p = (0, i.p)({
                            abi: e,
                            data: t
                        });
                        let {
                            abiItem: r,
                            errorName: n,
                            args: c
                        } = p;
                        if ("Error" === n) l = c[0];
                        else if ("Panic" === n) {
                            let [e] = c;
                            l = o.$[e]
                        } else {
                            let e = r ? (0, s.t)(r, {
                                    includeName: !0
                                }) : void 0,
                                t = r && c ? formatAbiItemWithArgs({
                                    abiItem: r,
                                    args: c,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            u = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}` : ""]
                        }
                    } catch (e) {
                        c = e
                    } else n && (l = n);
                    c instanceof f.yP && (d = c.signature, u = [`Unable to decode signature "${d}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]), super(l && "execution reverted" !== l || d ? [`The contract function "${r}" reverted with the following ${d?"signature":"reason"}:`, l || d].join("\n") : `The contract function "${r}" reverted.`, {
                        cause: c,
                        metaMessages: u
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = p, this.reason = l, this.signature = d
                }
            };
            let ContractFunctionZeroDataError = class ContractFunctionZeroDataError extends p.G {
                constructor({
                    functionName: e
                }) {
                    super(`The contract function "${e}" returned no data ("0x").`, {
                        metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionZeroDataError"
                    })
                }
            };
            let RawContractError = class RawContractError extends p.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || ""), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RawContractError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        27586: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return SizeExceedsPaddingSizeError
                },
                m: function() {
                    return SliceOffsetOutOfBoundsError
                }
            });
            var n = r(89534);
            let SliceOffsetOutOfBoundsError = class SliceOffsetOutOfBoundsError extends n.G {
                constructor({
                    offset: e,
                    position: t,
                    size: r
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SliceOffsetOutOfBoundsError"
                    })
                }
            };
            let SizeExceedsPaddingSizeError = class SizeExceedsPaddingSizeError extends n.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: r
                }) {
                    super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeExceedsPaddingSizeError"
                    })
                }
            }
        },
        92196: function(e, t, r) {
            r.d(t, {
                Cd: function() {
                    return InvalidHexBooleanError
                },
                J5: function() {
                    return IntegerOutOfRangeError
                },
                M6: function() {
                    return SizeOverflowError
                }
            });
            var n = r(89534);
            let IntegerOutOfRangeError = class IntegerOutOfRangeError extends n.G {
                constructor({
                    max: e,
                    min: t,
                    signed: r,
                    size: n,
                    value: o
                }) {
                    super(`Number "${o}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntegerOutOfRangeError"
                    })
                }
            };
            let InvalidHexBooleanError = class InvalidHexBooleanError extends n.G {
                constructor(e) {
                    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidHexBooleanError"
                    })
                }
            };
            let SizeOverflowError = class SizeOverflowError extends n.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeOverflowError"
                    })
                }
            }
        },
        30350: function(e, t, r) {
            r.d(t, {
                Fz: function() {
                    return BaseFeeScalarError
                },
                e5: function() {
                    return Eip1559FeesNotSupportedError
                },
                ld: function() {
                    return MaxFeePerGasTooLowError
                }
            });
            var n = r(4287),
                o = r(89534);
            let BaseFeeScalarError = class BaseFeeScalarError extends o.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseFeeScalarError"
                    })
                }
            };
            let Eip1559FeesNotSupportedError = class Eip1559FeesNotSupportedError extends o.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "Eip1559FeesNotSupportedError"
                    })
                }
            };
            let MaxFeePerGasTooLowError = class MaxFeePerGasTooLowError extends o.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,n.o)(e)} gwei).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MaxFeePerGasTooLowError"
                    })
                }
            }
        },
        3741: function(e, t, r) {
            r.d(t, {
                C_: function() {
                    return InsufficientFundsError
                },
                G$: function() {
                    return FeeCapTooLowError
                },
                Hh: function() {
                    return FeeCapTooHighError
                },
                M_: function() {
                    return ExecutionRevertedError
                },
                WF: function() {
                    return IntrinsicGasTooHighError
                },
                ZI: function() {
                    return NonceTooHighError
                },
                cj: function() {
                    return UnknownNodeError
                },
                cs: function() {
                    return TipAboveFeeCapError
                },
                dR: function() {
                    return IntrinsicGasTooLowError
                },
                pZ: function() {
                    return TransactionTypeNotSupportedError
                },
                se: function() {
                    return NonceMaxValueError
                },
                vU: function() {
                    return NonceTooLowError
                }
            });
            var n = r(4287),
                o = r(89534);
            let ExecutionRevertedError = class ExecutionRevertedError extends o.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    let r = t ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
                    super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ExecutionRevertedError"
                    })
                }
            };
            Object.defineProperty(ExecutionRevertedError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(ExecutionRevertedError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            let FeeCapTooHighError = class FeeCapTooHighError extends o.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooHigh"
                    })
                }
            };
            Object.defineProperty(FeeCapTooHighError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            let FeeCapTooLowError = class FeeCapTooLowError extends o.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooLow"
                    })
                }
            };
            Object.defineProperty(FeeCapTooLowError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            let NonceTooHighError = class NonceTooHighError extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooHighError"
                    })
                }
            };
            Object.defineProperty(NonceTooHighError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            let NonceTooLowError = class NonceTooLowError extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooLowError"
                    })
                }
            };
            Object.defineProperty(NonceTooLowError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            let NonceMaxValueError = class NonceMaxValueError extends o.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceMaxValueError"
                    })
                }
            };
            Object.defineProperty(NonceMaxValueError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            let InsufficientFundsError = class InsufficientFundsError extends o.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InsufficientFundsError"
                    })
                }
            };
            Object.defineProperty(InsufficientFundsError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds/
            });
            let IntrinsicGasTooHighError = class IntrinsicGasTooHighError extends o.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooHighError"
                    })
                }
            };
            Object.defineProperty(IntrinsicGasTooHighError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            let IntrinsicGasTooLowError = class IntrinsicGasTooLowError extends o.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooLowError"
                    })
                }
            };
            Object.defineProperty(IntrinsicGasTooLowError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            let TransactionTypeNotSupportedError = class TransactionTypeNotSupportedError extends o.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionTypeNotSupportedError"
                    })
                }
            };
            Object.defineProperty(TransactionTypeNotSupportedError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            let TipAboveFeeCapError = class TipAboveFeeCapError extends o.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: r
                } = {}) {
                    super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TipAboveFeeCapError"
                    })
                }
            };
            Object.defineProperty(TipAboveFeeCapError, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            let UnknownNodeError = class UnknownNodeError extends o.G {
                constructor({
                    cause: e
                }) {
                    super(`An error occurred while executing: ${e?.shortMessage}`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownNodeError"
                    })
                }
            }
        },
        76550: function(e, t, r) {
            r.d(t, {
                Gg: function() {
                    return HttpRequestError
                },
                W5: function() {
                    return TimeoutError
                },
                bs: function() {
                    return RpcRequestError
                },
                c9: function() {
                    return WebSocketRequestError
                }
            });
            var n = r(3359),
                o = r(89534),
                i = r(56668);
            let HttpRequestError = class HttpRequestError extends o.G {
                constructor({
                    body: e,
                    details: t,
                    headers: r,
                    status: o,
                    url: s
                }) {
                    super("HTTP request failed.", {
                        details: t,
                        metaMessages: [o && `Status: ${o}`, `URL: ${(0,i.Gr)(s)}`, e && `Request body: ${(0,n.P)(e)}`].filter(Boolean)
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "HttpRequestError"
                    }), Object.defineProperty(this, "body", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "headers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "status", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "url", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.body = e, this.headers = r, this.status = o, this.url = s
                }
            };
            let WebSocketRequestError = class WebSocketRequestError extends o.G {
                constructor({
                    body: e,
                    details: t,
                    url: r
                }) {
                    super("WebSocket request failed.", {
                        details: t,
                        metaMessages: [`URL: ${(0,i.Gr)(r)}`, `Request body: ${(0,n.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WebSocketRequestError"
                    })
                }
            };
            let RpcRequestError = class RpcRequestError extends o.G {
                constructor({
                    body: e,
                    error: t,
                    url: r
                }) {
                    super("RPC Request failed.", {
                        cause: t,
                        details: t.message,
                        metaMessages: [`URL: ${(0,i.Gr)(r)}`, `Request body: ${(0,n.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcRequestError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.code = t.code
                }
            };
            let TimeoutError = class TimeoutError extends o.G {
                constructor({
                    body: e,
                    url: t
                }) {
                    super("The request took too long to respond.", {
                        details: "The request timed out.",
                        metaMessages: [`URL: ${(0,i.Gr)(t)}`, `Request body: ${(0,n.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TimeoutError"
                    })
                }
            }
        },
        79930: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return InvalidRequestRpcError
                },
                GD: function() {
                    return JsonRpcVersionUnsupportedError
                },
                I0: function() {
                    return ChainDisconnectedError
                },
                KB: function() {
                    return TransactionRejectedRpcError
                },
                LX: function() {
                    return MethodNotFoundRpcError
                },
                Og: function() {
                    return ResourceNotFoundRpcError
                },
                PE: function() {
                    return UnauthorizedProviderError
                },
                Pv: function() {
                    return LimitExceededRpcError
                },
                Ts: function() {
                    return UnsupportedProviderMethodError
                },
                XS: function() {
                    return InternalRpcError
                },
                ab: function() {
                    return UserRejectedRequestError
                },
                gS: function() {
                    return MethodNotSupportedRpcError
                },
                ir: function() {
                    return UnknownRpcError
                },
                nY: function() {
                    return InvalidParamsRpcError
                },
                pT: function() {
                    return ResourceUnavailableRpcError
                },
                s7: function() {
                    return ParseRpcError
                },
                u5: function() {
                    return ProviderDisconnectedError
                },
                x3: function() {
                    return SwitchChainError
                },
                yR: function() {
                    return InvalidInputRpcError
                }
            });
            var n = r(89534),
                o = r(76550);
            let RpcError = class RpcError extends n.G {
                constructor(e, {
                    code: t,
                    docsPath: r,
                    metaMessages: n,
                    shortMessage: i
                }) {
                    super(i, {
                        cause: e,
                        docsPath: r,
                        metaMessages: n || e ? .metaMessages
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.name = e.name, this.code = e instanceof o.bs ? e.code : t ? ? -1
                }
            };
            let ProviderRpcError = class ProviderRpcError extends RpcError {
                constructor(e, t) {
                    super(e, t), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderRpcError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = t.data
                }
            };
            let ParseRpcError = class ParseRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: ParseRpcError.code,
                        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ParseRpcError"
                    })
                }
            };
            Object.defineProperty(ParseRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32700
            });
            let InvalidRequestRpcError = class InvalidRequestRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: InvalidRequestRpcError.code,
                        shortMessage: "JSON is not a valid request object."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidRequestRpcError"
                    })
                }
            };
            Object.defineProperty(InvalidRequestRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32600
            });
            let MethodNotFoundRpcError = class MethodNotFoundRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: MethodNotFoundRpcError.code,
                        shortMessage: "The method does not exist / is not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotFoundRpcError"
                    })
                }
            };
            Object.defineProperty(MethodNotFoundRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32601
            });
            let InvalidParamsRpcError = class InvalidParamsRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: InvalidParamsRpcError.code,
                        shortMessage: "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParamsRpcError"
                    })
                }
            };
            Object.defineProperty(InvalidParamsRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32602
            });
            let InternalRpcError = class InternalRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: InternalRpcError.code,
                        shortMessage: "An internal error was received."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InternalRpcError"
                    })
                }
            };
            Object.defineProperty(InternalRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32603
            });
            let InvalidInputRpcError = class InvalidInputRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: InvalidInputRpcError.code,
                        shortMessage: "Missing or invalid parameters.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidInputRpcError"
                    })
                }
            };
            Object.defineProperty(InvalidInputRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32e3
            });
            let ResourceNotFoundRpcError = class ResourceNotFoundRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: ResourceNotFoundRpcError.code,
                        shortMessage: "Requested resource not found."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceNotFoundRpcError"
                    })
                }
            };
            Object.defineProperty(ResourceNotFoundRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32001
            });
            let ResourceUnavailableRpcError = class ResourceUnavailableRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: ResourceUnavailableRpcError.code,
                        shortMessage: "Requested resource not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceUnavailableRpcError"
                    })
                }
            };
            Object.defineProperty(ResourceUnavailableRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32002
            });
            let TransactionRejectedRpcError = class TransactionRejectedRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: TransactionRejectedRpcError.code,
                        shortMessage: "Transaction creation failed."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionRejectedRpcError"
                    })
                }
            };
            Object.defineProperty(TransactionRejectedRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32003
            });
            let MethodNotSupportedRpcError = class MethodNotSupportedRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: MethodNotSupportedRpcError.code,
                        shortMessage: "Method is not implemented."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotSupportedRpcError"
                    })
                }
            };
            Object.defineProperty(MethodNotSupportedRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32004
            });
            let LimitExceededRpcError = class LimitExceededRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: LimitExceededRpcError.code,
                        shortMessage: "Request exceeds defined limit."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "LimitExceededRpcError"
                    })
                }
            };
            Object.defineProperty(LimitExceededRpcError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32005
            });
            let JsonRpcVersionUnsupportedError = class JsonRpcVersionUnsupportedError extends RpcError {
                constructor(e) {
                    super(e, {
                        code: JsonRpcVersionUnsupportedError.code,
                        shortMessage: "Version of JSON-RPC protocol is not supported."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "JsonRpcVersionUnsupportedError"
                    })
                }
            };
            Object.defineProperty(JsonRpcVersionUnsupportedError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32006
            });
            let UserRejectedRequestError = class UserRejectedRequestError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: UserRejectedRequestError.code,
                        shortMessage: "User rejected the request."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UserRejectedRequestError"
                    })
                }
            };
            Object.defineProperty(UserRejectedRequestError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4001
            });
            let UnauthorizedProviderError = class UnauthorizedProviderError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: UnauthorizedProviderError.code,
                        shortMessage: "The requested method and/or account has not been authorized by the user."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnauthorizedProviderError"
                    })
                }
            };
            Object.defineProperty(UnauthorizedProviderError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4100
            });
            let UnsupportedProviderMethodError = class UnsupportedProviderMethodError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: UnsupportedProviderMethodError.code,
                        shortMessage: "The Provider does not support the requested method."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnsupportedProviderMethodError"
                    })
                }
            };
            Object.defineProperty(UnsupportedProviderMethodError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4200
            });
            let ProviderDisconnectedError = class ProviderDisconnectedError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: ProviderDisconnectedError.code,
                        shortMessage: "The Provider is disconnected from all chains."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderDisconnectedError"
                    })
                }
            };
            Object.defineProperty(ProviderDisconnectedError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4900
            });
            let ChainDisconnectedError = class ChainDisconnectedError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: ChainDisconnectedError.code,
                        shortMessage: "The Provider is not connected to the requested chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDisconnectedError"
                    })
                }
            };
            Object.defineProperty(ChainDisconnectedError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4901
            });
            let SwitchChainError = class SwitchChainError extends ProviderRpcError {
                constructor(e) {
                    super(e, {
                        code: SwitchChainError.code,
                        shortMessage: "An error occurred when attempting to switch chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainError"
                    })
                }
            };
            Object.defineProperty(SwitchChainError, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4902
            });
            let UnknownRpcError = class UnknownRpcError extends RpcError {
                constructor(e) {
                    super(e, {
                        shortMessage: "An unknown RPC error occurred."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownRpcError"
                    })
                }
            }
        },
        94069: function(e, t, r) {
            r.d(t, {
                Bh: function() {
                    return TransactionNotFoundError
                },
                JC: function() {
                    return InvalidStorageKeySizeError
                },
                Yb: function() {
                    return TransactionReceiptNotFoundError
                },
                j3: function() {
                    return InvalidSerializableTransactionError
                },
                mc: function() {
                    return WaitForTransactionReceiptTimeoutError
                },
                mk: function() {
                    return TransactionExecutionError
                },
                vl: function() {
                    return InvalidLegacyVError
                },
                xY: function() {
                    return FeeConflictError
                },
                xr: function() {
                    return prettyPrint
                }
            });
            var n = r(30274),
                o = r(4287),
                i = r(89534);

            function prettyPrint(e) {
                let t = Object.entries(e).map(([e, t]) => void 0 === t || !1 === t ? null : [e, t]).filter(Boolean),
                    r = t.reduce((e, [t]) => Math.max(e, t.length), 0);
                return t.map(([e, t]) => `  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")
            }
            let FeeConflictError = class FeeConflictError extends i.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeConflictError"
                    })
                }
            };
            let InvalidLegacyVError = class InvalidLegacyVError extends i.G {
                constructor({
                    v: e
                }) {
                    super(`Invalid \`v\` value "${e}". Expected 27 or 28.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidLegacyVError"
                    })
                }
            };
            let InvalidSerializableTransactionError = class InvalidSerializableTransactionError extends i.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", prettyPrint(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- a Legacy Transaction with `gasPrice`"]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSerializableTransactionError"
                    })
                }
            };
            let InvalidStorageKeySizeError = class InvalidStorageKeySizeError extends i.G {
                constructor({
                    storageKey: e
                }) {
                    super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidStorageKeySizeError"
                    })
                }
            };
            let TransactionExecutionError = class TransactionExecutionError extends i.G {
                constructor(e, {
                    account: t,
                    docsPath: r,
                    chain: i,
                    data: s,
                    gas: c,
                    gasPrice: u,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: f,
                    to: p,
                    value: m
                }) {
                    let b = prettyPrint({
                        chain: i && `${i?.name} (id: ${i?.id})`,
                        from: t ? .address,
                        to: p,
                        value: void 0 !== m && `${(0,n.d)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,
                        data: s,
                        gas: c,
                        gasPrice: void 0 !== u && `${(0,o.o)(u)} gwei`,
                        maxFeePerGas: void 0 !== l && `${(0,o.o)(l)} gwei`,
                        maxPriorityFeePerGas: void 0 !== d && `${(0,o.o)(d)} gwei`,
                        nonce: f
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: r,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", b].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionExecutionError"
                    }), this.cause = e
                }
            };
            let TransactionNotFoundError = class TransactionNotFoundError extends i.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: r,
                    hash: n,
                    index: o
                }) {
                    let i = "Transaction";
                    r && void 0 !== o && (i = `Transaction at block time "${r}" at index "${o}"`), e && void 0 !== o && (i = `Transaction at block hash "${e}" at index "${o}"`), t && void 0 !== o && (i = `Transaction at block number "${t}" at index "${o}"`), n && (i = `Transaction with hash "${n}"`), super(`${i} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionNotFoundError"
                    })
                }
            };
            let TransactionReceiptNotFoundError = class TransactionReceiptNotFoundError extends i.G {
                constructor({
                    hash: e
                }) {
                    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionReceiptNotFoundError"
                    })
                }
            };
            let WaitForTransactionReceiptTimeoutError = class WaitForTransactionReceiptTimeoutError extends i.G {
                constructor({
                    hash: e
                }) {
                    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        92565: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return UrlRequiredError
                }
            });
            var n = r(89534);
            let UrlRequiredError = class UrlRequiredError extends n.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro"
                    })
                }
            }
        },
        56668: function(e, t, r) {
            r.d(t, {
                CR: function() {
                    return getContractAddress
                },
                Gr: function() {
                    return getUrl
                },
                bo: function() {
                    return getVersion
                }
            });
            let getContractAddress = e => e,
                getUrl = e => e,
                getVersion = () => "viem@1.21.3"
        },
        22485: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return decodeAbiParameters
                }
            });
            var n = r(86093),
                o = r(70278),
                i = r(86920),
                s = r(60155),
                c = r(23281),
                u = r(17114),
                l = r(25571);

            function decodeAbiParameters(e, t) {
                if ("0x" === t && e.length > 0) throw new n.wb;
                if ((0, i.d)(t) && 32 > (0, i.d)(t)) throw new n.xB({
                    data: t,
                    params: e,
                    size: (0, i.d)(t)
                });
                return function({
                    data: e,
                    params: t
                }) {
                    let r = [],
                        d = 0;
                    for (let f = 0; f < t.length; f++) {
                        if (d >= (0, i.d)(e)) throw new n.xB({
                            data: e,
                            params: t,
                            size: (0, i.d)(e)
                        });
                        let p = t[f],
                            {
                                consumed: m,
                                value: b
                            } = function decodeParam({
                                data: e,
                                param: t,
                                position: r
                            }) {
                                let i = (0, l.S)(t.type);
                                if (i) {
                                    let [n, o] = i;
                                    return function(e, {
                                        param: t,
                                        length: r,
                                        position: n
                                    }) {
                                        if (!r) {
                                            let r = (0, u.ly)((0, s.tP)(e, n, n + 32, {
                                                    strict: !0
                                                })),
                                                o = (0, u.ly)((0, s.tP)(e, r, r + 32, {
                                                    strict: !0
                                                })),
                                                i = 0,
                                                c = [];
                                            for (let n = 0; n < o; ++n) {
                                                let n = decodeParam({
                                                    data: (0, s.tP)(e, r + 32),
                                                    param: t,
                                                    position: i
                                                });
                                                i += n.consumed, c.push(n.value)
                                            }
                                            return {
                                                value: c,
                                                consumed: 32
                                            }
                                        }
                                        if (hasDynamicChild(t)) {
                                            let o = (0, l.S)(t.type),
                                                i = !o ? .[0],
                                                c = 0,
                                                d = [];
                                            for (let o = 0; o < r; ++o) {
                                                let r = (0, u.ly)((0, s.tP)(e, n, n + 32, {
                                                        strict: !0
                                                    })),
                                                    l = decodeParam({
                                                        data: (0, s.tP)(e, r),
                                                        param: t,
                                                        position: i ? c : 32 * o
                                                    });
                                                c += l.consumed, d.push(l.value)
                                            }
                                            return {
                                                value: d,
                                                consumed: 32
                                            }
                                        }
                                        let o = 0,
                                            i = [];
                                        for (let s = 0; s < r; ++s) {
                                            let r = decodeParam({
                                                data: e,
                                                param: t,
                                                position: n + o
                                            });
                                            o += r.consumed, i.push(r.value)
                                        }
                                        return {
                                            value: i,
                                            consumed: o
                                        }
                                    }(e, {
                                        length: n,
                                        param: { ...t,
                                            type: o
                                        },
                                        position: r
                                    })
                                }
                                if ("tuple" === t.type) return function(e, {
                                    param: t,
                                    position: r
                                }) {
                                    let n = 0 === t.components.length || t.components.some(({
                                            name: e
                                        }) => !e),
                                        o = n ? [] : {},
                                        i = 0;
                                    if (hasDynamicChild(t)) {
                                        let c = (0, u.ly)((0, s.tP)(e, r, r + 32, {
                                            strict: !0
                                        }));
                                        for (let r = 0; r < t.components.length; ++r) {
                                            let u = t.components[r],
                                                l = decodeParam({
                                                    data: (0, s.tP)(e, c),
                                                    param: u,
                                                    position: i
                                                });
                                            i += l.consumed, o[n ? r : u ? .name] = l.value
                                        }
                                        return {
                                            consumed: 32,
                                            value: o
                                        }
                                    }
                                    for (let s = 0; s < t.components.length; ++s) {
                                        let c = t.components[s],
                                            u = decodeParam({
                                                data: e,
                                                param: c,
                                                position: r + i
                                            });
                                        i += u.consumed, o[n ? s : c ? .name] = u.value
                                    }
                                    return {
                                        consumed: i,
                                        value: o
                                    }
                                }(e, {
                                    param: t,
                                    position: r
                                });
                                if ("string" === t.type) return function(e, {
                                    position: t
                                }) {
                                    let r = (0, u.ly)((0, s.tP)(e, t, t + 32, {
                                            strict: !0
                                        })),
                                        n = (0, u.ly)((0, s.tP)(e, r, r + 32, {
                                            strict: !0
                                        }));
                                    if (0 === n) return {
                                        consumed: 32,
                                        value: ""
                                    };
                                    let o = (0, u.rR)((0, c.f)((0, s.tP)(e, r + 32, r + 32 + n, {
                                        strict: !0
                                    })));
                                    return {
                                        consumed: 32,
                                        value: o
                                    }
                                }(e, {
                                    position: r
                                });
                                if (t.type.startsWith("bytes")) return function(e, {
                                    param: t,
                                    position: r
                                }) {
                                    let [n, o] = t.type.split("bytes");
                                    if (!o) {
                                        let t = (0, u.ly)((0, s.tP)(e, r, r + 32, {
                                                strict: !0
                                            })),
                                            n = (0, u.ly)((0, s.tP)(e, t, t + 32, {
                                                strict: !0
                                            }));
                                        if (0 === n) return {
                                            consumed: 32,
                                            value: "0x"
                                        };
                                        let o = (0, s.tP)(e, t + 32, t + 32 + n, {
                                            strict: !0
                                        });
                                        return {
                                            consumed: 32,
                                            value: o
                                        }
                                    }
                                    let i = (0, s.tP)(e, r, r + parseInt(o), {
                                        strict: !0
                                    });
                                    return {
                                        consumed: 32,
                                        value: i
                                    }
                                }(e, {
                                    param: t,
                                    position: r
                                });
                                let d = (0, s.tP)(e, r, r + 32, {
                                    strict: !0
                                });
                                if (t.type.startsWith("uint") || t.type.startsWith("int")) return function(e, {
                                    param: t
                                }) {
                                    let r = t.type.startsWith("int"),
                                        n = parseInt(t.type.split("int")[1] || "256");
                                    return {
                                        consumed: 32,
                                        value: n > 48 ? (0, u.y_)(e, {
                                            signed: r
                                        }) : (0, u.ly)(e, {
                                            signed: r
                                        })
                                    }
                                }(d, {
                                    param: t
                                });
                                if ("address" === t.type) return {
                                    consumed: 32,
                                    value: (0, o.x)((0, s.tP)(d, -20))
                                };
                                if ("bool" === t.type) return {
                                    consumed: 32,
                                    value: (0, u.XA)(d)
                                };
                                throw new n.CI(t.type, {
                                    docsPath: "/docs/contract/decodeAbiParameters"
                                })
                            }({
                                data: e,
                                param: p,
                                position: d
                            });
                        r.push(b), d += m
                    }
                    return r
                }({
                    data: t,
                    params: e
                })
            }

            function hasDynamicChild(e) {
                let {
                    type: t
                } = e;
                if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
                if ("tuple" === t) return e.components ? .some(hasDynamicChild);
                let r = (0, l.S)(e.type);
                return !!(r && hasDynamicChild({ ...e,
                    type: r[1]
                }))
            }
        },
        16189: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return decodeErrorResult
                }
            });
            var n = r(84857),
                o = r(86093),
                i = r(60155),
                s = r(57821),
                c = r(22485),
                u = r(44682);

            function decodeErrorResult({
                abi: e,
                data: t
            }) {
                let r = (0, i.tP)(t, 0, 4);
                if ("0x" === r) throw new o.wb;
                let l = [...e || [], n.Up, n.hZ],
                    d = l.find(e => "error" === e.type && r === (0, s.o)((0, u.t)(e)));
                if (!d) throw new o.yP(r, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: d,
                    args: "inputs" in d && d.inputs && d.inputs.length > 0 ? (0, c.r)(d.inputs, (0, i.tP)(t, 4)) : void 0,
                    errorName: d.name
                }
            }
        },
        53381: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return decodeEventLog
                }
            });
            var n = r(86093),
                o = r(20553),
                i = r(22485),
                s = r(44682);
            let c = "/docs/contract/decodeEventLog";

            function decodeEventLog({
                abi: e,
                data: t,
                strict: r,
                topics: u
            }) {
                let l = r ? ? !0,
                    [d, ...f] = u;
                if (!d) throw new n.FM({
                    docsPath: c
                });
                let p = e.find(e => "event" === e.type && d === (0, o.e)((0, s.t)(e)));
                if (!(p && "name" in p) || "event" !== p.type) throw new n.lC(d, {
                    docsPath: c
                });
                let {
                    name: m,
                    inputs: b
                } = p, y = b ? .some(e => !("name" in e && e.name)), g = y ? [] : {}, v = b.filter(e => "indexed" in e && e.indexed);
                for (let e = 0; e < v.length; e++) {
                    let t = v[e],
                        r = f[e];
                    if (!r) throw new n.Gy({
                        abiItem: p,
                        param: t
                    });
                    g[t.name || e] = function({
                        param: e,
                        value: t
                    }) {
                        if ("string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) return t;
                        let r = (0, i.r)([e], t) || [];
                        return r[0]
                    }({
                        param: t,
                        value: r
                    })
                }
                let w = b.filter(e => !("indexed" in e && e.indexed));
                if (w.length > 0) {
                    if (t && "0x" !== t) try {
                        let e = (0, i.r)(w, t);
                        if (e) {
                            if (y) g = [...g, ...e];
                            else
                                for (let t = 0; t < w.length; t++) g[w[t].name] = e[t]
                        }
                    } catch (e) {
                        if (l) {
                            if (e instanceof n.xB) throw new n.SM({
                                abiItem: p,
                                data: e.data,
                                params: e.params,
                                size: e.size
                            });
                            throw e
                        }
                    } else if (l) throw new n.SM({
                        abiItem: p,
                        data: "0x",
                        params: w,
                        size: 0
                    })
                }
                return {
                    eventName: m,
                    args: Object.values(g).length > 0 ? g : void 0
                }
            }
        },
        47276: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return decodeFunctionResult
                }
            });
            var n = r(86093),
                o = r(22485),
                i = r(77813);
            let s = "/docs/contract/decodeFunctionResult";

            function decodeFunctionResult({
                abi: e,
                args: t,
                functionName: r,
                data: c
            }) {
                let u = e[0];
                if (r && !(u = (0, i.mE)({
                        abi: e,
                        args: t,
                        name: r
                    }))) throw new n.xL(r, {
                    docsPath: s
                });
                if ("function" !== u.type) throw new n.xL(void 0, {
                    docsPath: s
                });
                if (!u.outputs) throw new n.MX(u.name, {
                    docsPath: s
                });
                let l = (0, o.r)(u.outputs, c);
                return l && l.length > 1 ? l : l && 1 === l.length ? l[0] : void 0
            }
        },
        25571: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return encodeAbiParameters
                },
                S: function() {
                    return getArrayComponents
                }
            });
            var n = r(86093),
                o = r(82663),
                i = r(20886),
                s = r(62832),
                c = r(89481),
                u = r(86920),
                l = r(60155),
                d = r(19473);

            function encodeAbiParameters(e, t) {
                if (e.length !== t.length) throw new n.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let r = function({
                        params: e,
                        values: t
                    }) {
                        let r = [];
                        for (let f = 0; f < e.length; f++) r.push(function prepareParam({
                            param: e,
                            value: t
                        }) {
                            let r = getArrayComponents(e.type);
                            if (r) {
                                let [o, i] = r;
                                return function(e, {
                                    length: t,
                                    param: r
                                }) {
                                    let o = null === t;
                                    if (!Array.isArray(e)) throw new n.hn(e);
                                    if (!o && e.length !== t) throw new n.gr({
                                        expectedLength: t,
                                        givenLength: e.length,
                                        type: `${r.type}[${t}]`
                                    });
                                    let i = !1,
                                        c = [];
                                    for (let t = 0; t < e.length; t++) {
                                        let n = prepareParam({
                                            param: r,
                                            value: e[t]
                                        });
                                        n.dynamic && (i = !0), c.push(n)
                                    }
                                    if (o || i) {
                                        let e = encodeParams(c);
                                        if (o) {
                                            let t = (0, d.eC)(c.length, {
                                                size: 32
                                            });
                                            return {
                                                dynamic: !0,
                                                encoded: c.length > 0 ? (0, s.zo)([t, e]) : t
                                            }
                                        }
                                        if (i) return {
                                            dynamic: !0,
                                            encoded: e
                                        }
                                    }
                                    return {
                                        dynamic: !1,
                                        encoded: (0, s.zo)(c.map(({
                                            encoded: e
                                        }) => e))
                                    }
                                }(t, {
                                    length: o,
                                    param: { ...e,
                                        type: i
                                    }
                                })
                            }
                            if ("tuple" === e.type) return function(e, {
                                param: t
                            }) {
                                let r = !1,
                                    n = [];
                                for (let o = 0; o < t.components.length; o++) {
                                    let i = t.components[o],
                                        s = Array.isArray(e) ? o : i.name,
                                        c = prepareParam({
                                            param: i,
                                            value: e[s]
                                        });
                                    n.push(c), c.dynamic && (r = !0)
                                }
                                return {
                                    dynamic: r,
                                    encoded: r ? encodeParams(n) : (0, s.zo)(n.map(({
                                        encoded: e
                                    }) => e))
                                }
                            }(t, {
                                param: e
                            });
                            if ("address" === e.type) return function(e) {
                                if (!(0, i.U)(e)) throw new o.b({
                                    address: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, c.gc)(e.toLowerCase())
                                }
                            }(t);
                            if ("bool" === e.type) return {
                                dynamic: !1,
                                encoded: (0, c.gc)((0, d.C4)(t))
                            };
                            if (e.type.startsWith("uint") || e.type.startsWith("int")) {
                                let r = e.type.startsWith("int");
                                return function(e, {
                                    signed: t
                                }) {
                                    return {
                                        dynamic: !1,
                                        encoded: (0, d.eC)(e, {
                                            size: 32,
                                            signed: t
                                        })
                                    }
                                }(t, {
                                    signed: r
                                })
                            }
                            if (e.type.startsWith("bytes")) return function(e, {
                                param: t
                            }) {
                                let [, r] = t.type.split("bytes"), o = (0, u.d)(e);
                                if (!r) {
                                    let t = e;
                                    return o % 32 != 0 && (t = (0, c.gc)(t, {
                                        dir: "right",
                                        size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                    })), {
                                        dynamic: !0,
                                        encoded: (0, s.zo)([(0, c.gc)((0, d.eC)(o, {
                                            size: 32
                                        })), t])
                                    }
                                }
                                if (o !== parseInt(r)) throw new n.M4({
                                    expectedSize: parseInt(r),
                                    value: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, c.gc)(e, {
                                        dir: "right"
                                    })
                                }
                            }(t, {
                                param: e
                            });
                            if ("string" === e.type) return function(e) {
                                let t = (0, d.$G)(e),
                                    r = Math.ceil((0, u.d)(t) / 32),
                                    n = [];
                                for (let e = 0; e < r; e++) n.push((0, c.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                                    dir: "right"
                                }));
                                return {
                                    dynamic: !0,
                                    encoded: (0, s.zo)([(0, c.gc)((0, d.eC)((0, u.d)(t), {
                                        size: 32
                                    })), ...n])
                                }
                            }(t);
                            throw new n.dh(e.type, {
                                docsPath: "/docs/contract/encodeAbiParameters"
                            })
                        }({
                            param: e[f],
                            value: t[f]
                        }));
                        return r
                    }({
                        params: e,
                        values: t
                    }),
                    f = encodeParams(r);
                return 0 === f.length ? "0x" : f
            }

            function encodeParams(e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let {
                        dynamic: n,
                        encoded: o
                    } = e[r];
                    n ? t += 32 : t += (0, u.d)(o)
                }
                let r = [],
                    n = [],
                    o = 0;
                for (let i = 0; i < e.length; i++) {
                    let {
                        dynamic: s,
                        encoded: c
                    } = e[i];
                    s ? (r.push((0, d.eC)(t + o, {
                        size: 32
                    })), n.push(c), o += (0, u.d)(c)) : r.push(c)
                }
                return (0, s.zo)([...r, ...n])
            }

            function getArrayComponents(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        73951: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return encodeDeployData
                }
            });
            var n = r(86093),
                o = r(62832),
                i = r(25571);
            let s = "/docs/contract/encodeDeployData";

            function encodeDeployData({
                abi: e,
                args: t,
                bytecode: r
            }) {
                if (!t || 0 === t.length) return r;
                let c = e.find(e => "type" in e && "constructor" === e.type);
                if (!c) throw new n.fM({
                    docsPath: s
                });
                if (!("inputs" in c) || !c.inputs || 0 === c.inputs.length) throw new n.cO({
                    docsPath: s
                });
                let u = (0, i.E)(c.inputs, t);
                return (0, o.SM)([r, u])
            }
        },
        74705: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return encodeFunctionData
                }
            });
            var n = r(86093),
                o = r(62832),
                i = r(57821),
                s = r(25571),
                c = r(44682),
                u = r(77813);

            function encodeFunctionData({
                abi: e,
                args: t,
                functionName: r
            }) {
                let l = e[0];
                if (r && !(l = (0, u.mE)({
                        abi: e,
                        args: t,
                        name: r
                    }))) throw new n.xL(r, {
                    docsPath: "/docs/contract/encodeFunctionData"
                });
                if ("function" !== l.type) throw new n.xL(void 0, {
                    docsPath: "/docs/contract/encodeFunctionData"
                });
                let d = (0, c.t)(l),
                    f = (0, i.o)(d),
                    p = "inputs" in l && l.inputs ? (0, s.E)(l.inputs, t ? ? []) : void 0;
                return (0, o.SM)([f, p ? ? "0x"])
            }
        },
        44682: function(e, t, r) {
            r.d(t, {
                h: function() {
                    return formatAbiParams
                },
                t: function() {
                    return formatAbiItem
                }
            });
            var n = r(86093);

            function formatAbiItem(e, {
                includeName: t = !1
            } = {}) {
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new n.wM(e.type);
                return `${e.name}(${formatAbiParams(e.inputs,{includeName:t})})`
            }

            function formatAbiParams(e, {
                includeName: t = !1
            } = {}) {
                return e ? e.map(e => (function(e, {
                    includeName: t
                }) {
                    return e.type.startsWith("tuple") ? `(${formatAbiParams(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        77813: function(e, t, r) {
            r.d(t, {
                mE: function() {
                    return getAbiItem
                }
            });
            var n = r(86093),
                o = r(63424),
                i = r(20553),
                s = r(57821),
                c = r(20886);

            function getAbiItem({
                abi: e,
                args: t = [],
                name: r
            }) {
                let u;
                let l = (0, o.v)(r, {
                        strict: !1
                    }),
                    d = e.filter(e => l ? "function" === e.type ? (0, s.o)(e) === r : "event" === e.type && (0, i.e)(e) === r : "name" in e && e.name === r);
                if (0 !== d.length) {
                    if (1 === d.length) return d[0];
                    for (let e of d) {
                        if (!("inputs" in e)) continue;
                        if (!t || 0 === t.length) {
                            if (!e.inputs || 0 === e.inputs.length) return e;
                            continue
                        }
                        if (!e.inputs || 0 === e.inputs.length || e.inputs.length !== t.length) continue;
                        let r = t.every((t, r) => {
                            let n = "inputs" in e && e.inputs[r];
                            return !!n && function isArgOfType(e, t) {
                                let r = typeof e,
                                    n = t.type;
                                switch (n) {
                                    case "address":
                                        return (0, c.U)(e);
                                    case "bool":
                                        return "boolean" === r;
                                    case "function":
                                    case "string":
                                        return "string" === r;
                                    default:
                                        if ("tuple" === n && "components" in t) return Object.values(t.components).every((t, r) => isArgOfType(Object.values(e)[r], t));
                                        if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(n)) return "number" === r || "bigint" === r;
                                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(n)) return "string" === r || e instanceof Uint8Array;
                                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(n)) return Array.isArray(e) && e.every(e => isArgOfType(e, { ...t,
                                            type: n.replace(/(\[[0-9]{0,}\])$/, "")
                                        }));
                                        return !1
                                }
                            }(t, n)
                        });
                        if (r) {
                            if (u && "inputs" in u && u.inputs) {
                                let r = function getAmbiguousTypes(e, t, r) {
                                    for (let n in e) {
                                        let o = e[n],
                                            i = t[n];
                                        if ("tuple" === o.type && "tuple" === i.type && "components" in o && "components" in i) return getAmbiguousTypes(o.components, i.components, r[n]);
                                        let s = [o.type, i.type],
                                            u = !!(s.includes("address") && s.includes("bytes20")) || !!(s.includes("address") && s.includes("string") || s.includes("address") && s.includes("bytes")) && (0, c.U)(r[n]);
                                        if (u) return s
                                    }
                                }(e.inputs, u.inputs, t);
                                if (r) throw new n.S4({
                                    abiItem: e,
                                    type: r[0]
                                }, {
                                    abiItem: u,
                                    type: r[1]
                                })
                            }
                            u = e
                        }
                    }
                    return u || d[0]
                }
            }
        },
        70278: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return getAddress
                },
                x: function() {
                    return checksumAddress
                }
            });
            var n = r(82663),
                o = r(79958),
                i = r(12570),
                s = r(20886);

            function checksumAddress(e, t) {
                let r = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    n = (0, i.w)((0, o.qX)(r), "bytes"),
                    s = (t ? r.substring(`${t}0x`.length) : r).split("");
                for (let e = 0; e < 40; e += 2) n[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()), (15 & n[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
                return `0x${s.join("")}`
            }

            function getAddress(e, t) {
                if (!(0, s.U)(e)) throw new n.b({
                    address: e
                });
                return checksumAddress(e, t)
            }
        },
        88714: function(e, t, r) {
            r.d(t, {
                n: function() {
                    return buildRequest
                },
                y: function() {
                    return isDeterministicError
                }
            });
            var n = r(89534),
                o = r(76550),
                i = r(79930),
                s = r(69525);
            let isDeterministicError = e => "code" in e ? -1 !== e.code && -32004 !== e.code && -32005 !== e.code && -32042 !== e.code && -32603 !== e.code : e instanceof o.Gg && !!e.status && 403 !== e.status && 408 !== e.status && 413 !== e.status && 429 !== e.status && 500 !== e.status && 502 !== e.status && 503 !== e.status && 504 !== e.status;

            function buildRequest(e, {
                retryDelay: t = 150,
                retryCount: r = 3
            } = {}) {
                return async c => (0, s.J)(async () => {
                    try {
                        return await e(c)
                    } catch (e) {
                        switch (e.code) {
                            case i.s7.code:
                                throw new i.s7(e);
                            case i.B.code:
                                throw new i.B(e);
                            case i.LX.code:
                                throw new i.LX(e);
                            case i.nY.code:
                                throw new i.nY(e);
                            case i.XS.code:
                                throw new i.XS(e);
                            case i.yR.code:
                                throw new i.yR(e);
                            case i.Og.code:
                                throw new i.Og(e);
                            case i.pT.code:
                                throw new i.pT(e);
                            case i.KB.code:
                                throw new i.KB(e);
                            case i.gS.code:
                                throw new i.gS(e);
                            case i.Pv.code:
                                throw new i.Pv(e);
                            case i.GD.code:
                                throw new i.GD(e);
                            case i.ab.code:
                                throw new i.ab(e);
                            case i.PE.code:
                                throw new i.PE(e);
                            case i.Ts.code:
                                throw new i.Ts(e);
                            case i.u5.code:
                                throw new i.u5(e);
                            case i.I0.code:
                                throw new i.I0(e);
                            case i.x3.code:
                                throw new i.x3(e);
                            case 5e3:
                                throw new i.ab(e);
                            default:
                                if (e instanceof n.G) throw e;
                                throw new i.ir(e)
                        }
                    }
                }, {
                    delay: ({
                        count: e,
                        error: r
                    }) => {
                        if (r && r instanceof o.Gg) {
                            let e = r ? .headers ? .get("Retry-After");
                            if (e ? .match(/\d/)) return 1e3 * parseInt(e)
                        }
                        return ~~(1 << e) * t
                    },
                    retryCount: r,
                    shouldRetry: ({
                        error: e
                    }) => !isDeterministicError(e)
                })
            }
        },
        76415: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return defineChain
                }
            });

            function defineChain(e, t = {}) {
                let {
                    fees: r = e.fees,
                    formatters: n = e.formatters,
                    serializers: o = e.serializers
                } = t;
                return { ...e,
                    fees: r,
                    formatters: n,
                    serializers: o
                }
            }
        },
        90633: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return getChainContractAddress
                }
            });
            var n = r(78734);

            function getChainContractAddress({
                blockNumber: e,
                chain: t,
                contract: r
            }) {
                let o = t ? .contracts ? .[r];
                if (!o) throw new n.mm({
                    chain: t,
                    contract: {
                        name: r
                    }
                });
                if (e && o.blockCreated && o.blockCreated > e) throw new n.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: r,
                        blockCreated: o.blockCreated
                    }
                });
                return o.address
            }
        },
        62832: function(e, t, r) {
            function concat(e) {
                return "string" == typeof e[0] ? concatHex(e) : function(e) {
                    let t = 0;
                    for (let r of e) t += r.length;
                    let r = new Uint8Array(t),
                        n = 0;
                    for (let t of e) r.set(t, n), n += t.length;
                    return r
                }(e)
            }

            function concatHex(e) {
                return `0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`
            }
            r.d(t, {
                SM: function() {
                    return concatHex
                },
                zo: function() {
                    return concat
                }
            })
        },
        89481: function(e, t, r) {
            r.d(t, {
                gc: function() {
                    return padHex
                },
                vk: function() {
                    return pad
                }
            });
            var n = r(27586);

            function pad(e, {
                dir: t,
                size: r = 32
            } = {}) {
                return "string" == typeof e ? padHex(e, {
                    dir: t,
                    size: r
                }) : function(e, {
                    dir: t,
                    size: r = 32
                } = {}) {
                    if (null === r) return e;
                    if (e.length > r) throw new n.$({
                        size: e.length,
                        targetSize: r,
                        type: "bytes"
                    });
                    let o = new Uint8Array(r);
                    for (let n = 0; n < r; n++) {
                        let i = "right" === t;
                        o[i ? n : r - n - 1] = e[i ? n : e.length - n - 1]
                    }
                    return o
                }(e, {
                    dir: t,
                    size: r
                })
            }

            function padHex(e, {
                dir: t,
                size: r = 32
            } = {}) {
                if (null === r) return e;
                let o = e.replace("0x", "");
                if (o.length > 2 * r) throw new n.$({
                    size: Math.ceil(o.length / 2),
                    targetSize: r,
                    type: "hex"
                });
                return `0x${o["right"===t?"padEnd":"padStart"](2*r,"0")}`
            }
        },
        86920: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return size
                }
            });
            var n = r(63424);

            function size(e) {
                return (0, n.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        60155: function(e, t, r) {
            r.d(t, {
                tP: function() {
                    return slice
                }
            });
            var n = r(27586),
                o = r(63424),
                i = r(86920);

            function slice(e, t, r, {
                strict: n
            } = {}) {
                return (0, o.v)(e, {
                    strict: !1
                }) ? function(e, t, r, {
                    strict: n
                } = {}) {
                    assertStartOffset(e, t);
                    let o = `0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;
                    return n && assertEndOffset(o, t, r), o
                }(e, t, r, {
                    strict: n
                }) : function(e, t, r, {
                    strict: n
                } = {}) {
                    assertStartOffset(e, t);
                    let o = e.slice(t, r);
                    return n && assertEndOffset(o, t, r), o
                }(e, t, r, {
                    strict: n
                })
            }

            function assertStartOffset(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, i.d)(e) - 1) throw new n.m({
                    offset: t,
                    position: "start",
                    size: (0, i.d)(e)
                })
            }

            function assertEndOffset(e, t, r) {
                if ("number" == typeof t && "number" == typeof r && (0, i.d)(e) !== r - t) throw new n.m({
                    offset: r,
                    position: "end",
                    size: (0, i.d)(e)
                })
            }
        },
        23281: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return trim
                }
            });

            function trim(e, {
                dir: t = "left"
            } = {}) {
                let r = "string" == typeof e ? e.replace("0x", "") : e,
                    n = 0;
                for (let e = 0; e < r.length - 1 && "0" === r["left" === t ? e : r.length - e - 1].toString(); e++) n++;
                return (r = "left" === t ? r.slice(n) : r.slice(0, r.length - n), "string" == typeof e) ? (1 === r.length && "right" === t && (r = `${r}0`), `0x${r.length%2==1?`0${r}`:r}`) : r
            }
        },
        17114: function(e, t, r) {
            r.d(t, {
                H_: function() {
                    return fromHex
                },
                XA: function() {
                    return hexToBool
                },
                Yf: function() {
                    return assertSize
                },
                ly: function() {
                    return hexToNumber
                },
                rR: function() {
                    return hexToString
                },
                y_: function() {
                    return hexToBigInt
                }
            });
            var n = r(92196),
                o = r(86920),
                i = r(23281),
                s = r(79958);

            function assertSize(e, {
                size: t
            }) {
                if ((0, o.d)(e) > t) throw new n.M6({
                    givenSize: (0, o.d)(e),
                    maxSize: t
                })
            }

            function fromHex(e, t) {
                let r = "string" == typeof t ? {
                        to: t
                    } : t,
                    n = r.to;
                return "number" === n ? hexToNumber(e, r) : "bigint" === n ? hexToBigInt(e, r) : "string" === n ? hexToString(e, r) : "boolean" === n ? hexToBool(e, r) : (0, s.nr)(e, r)
            }

            function hexToBigInt(e, t = {}) {
                let {
                    signed: r
                } = t;
                t.size && assertSize(e, {
                    size: t.size
                });
                let n = BigInt(e);
                if (!r) return n;
                let o = (e.length - 2) / 2,
                    i = (1 n << 8 n * BigInt(o) - 1 n) - 1 n;
                return n <= i ? n : n - BigInt(`0x${"f".padStart(2*o,"f")}`) - 1 n
            }

            function hexToBool(e, t = {}) {
                let r = e;
                if (t.size && (assertSize(r, {
                        size: t.size
                    }), r = (0, i.f)(r)), "0x00" === (0, i.f)(r)) return !1;
                if ("0x01" === (0, i.f)(r)) return !0;
                throw new n.Cd(r)
            }

            function hexToNumber(e, t = {}) {
                return Number(hexToBigInt(e, t))
            }

            function hexToString(e, t = {}) {
                let r = (0, s.nr)(e);
                return t.size && (assertSize(r, {
                    size: t.size
                }), r = (0, i.f)(r, {
                    dir: "right"
                })), new TextDecoder().decode(r)
            }
        },
        79958: function(e, t, r) {
            r.d(t, {
                O0: function() {
                    return toBytes
                },
                nr: function() {
                    return hexToBytes
                },
                qX: function() {
                    return stringToBytes
                }
            });
            var n = r(89534),
                o = r(63424),
                i = r(89481),
                s = r(17114),
                c = r(19473);
            let u = new TextEncoder;

            function toBytes(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? function(e, t) {
                    let r = (0, c.eC)(e, t);
                    return hexToBytes(r)
                }(e, t) : "boolean" == typeof e ? function(e, t = {}) {
                    let r = new Uint8Array(1);
                    return (r[0] = Number(e), "number" == typeof t.size) ? ((0, s.Yf)(r, {
                        size: t.size
                    }), (0, i.vk)(r, {
                        size: t.size
                    })) : r
                }(e, t) : (0, o.v)(e) ? hexToBytes(e, t) : stringToBytes(e, t)
            }
            let l = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function charCodeToBase16(e) {
                return e >= l.zero && e <= l.nine ? e - l.zero : e >= l.A && e <= l.F ? e - (l.A - 10) : e >= l.a && e <= l.f ? e - (l.a - 10) : void 0
            }

            function hexToBytes(e, t = {}) {
                let r = e;
                t.size && ((0, s.Yf)(r, {
                    size: t.size
                }), r = (0, i.vk)(r, {
                    dir: "right",
                    size: t.size
                }));
                let o = r.slice(2);
                o.length % 2 && (o = `0${o}`);
                let c = o.length / 2,
                    u = new Uint8Array(c);
                for (let e = 0, t = 0; e < c; e++) {
                    let r = charCodeToBase16(o.charCodeAt(t++)),
                        i = charCodeToBase16(o.charCodeAt(t++));
                    if (void 0 === r || void 0 === i) throw new n.G(`Invalid byte sequence ("${o[t-2]}${o[t-1]}" in "${o}").`);
                    u[e] = 16 * r + i
                }
                return u
            }

            function stringToBytes(e, t = {}) {
                let r = u.encode(e);
                return "number" == typeof t.size ? ((0, s.Yf)(r, {
                    size: t.size
                }), (0, i.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }
        },
        19473: function(e, t, r) {
            r.d(t, {
                $G: function() {
                    return stringToHex
                },
                C4: function() {
                    return boolToHex
                },
                NC: function() {
                    return toHex
                },
                ci: function() {
                    return bytesToHex
                },
                eC: function() {
                    return numberToHex
                }
            });
            var n = r(92196),
                o = r(89481),
                i = r(17114);
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function toHex(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? numberToHex(e, t) : "string" == typeof e ? stringToHex(e, t) : "boolean" == typeof e ? boolToHex(e, t) : bytesToHex(e, t)
            }

            function boolToHex(e, t = {}) {
                let r = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, i.Yf)(r, {
                    size: t.size
                }), (0, o.vk)(r, {
                    size: t.size
                })) : r
            }

            function bytesToHex(e, t = {}) {
                let r = "";
                for (let t = 0; t < e.length; t++) r += s[e[t]];
                let n = `0x${r}`;
                return "number" == typeof t.size ? ((0, i.Yf)(n, {
                    size: t.size
                }), (0, o.vk)(n, {
                    dir: "right",
                    size: t.size
                })) : n
            }

            function numberToHex(e, t = {}) {
                let r;
                let {
                    signed: i,
                    size: s
                } = t, c = BigInt(e);
                s ? r = i ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (r = BigInt(Number.MAX_SAFE_INTEGER));
                let u = "bigint" == typeof r && i ? -r - 1 n : 0;
                if (r && c > r || c < u) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new n.J5({
                        max: r ? `${r}${t}` : void 0,
                        min: `${u}${t}`,
                        signed: i,
                        size: s,
                        value: `${e}${t}`
                    })
                }
                let l = `0x${(i&&c<0?(1n<<BigInt(8*s))+BigInt(c):c).toString(16)}`;
                return s ? (0, o.vk)(l, {
                    size: s
                }) : l
            }
            let c = new TextEncoder;

            function stringToHex(e, t = {}) {
                let r = c.encode(e);
                return bytesToHex(r, t)
            }
        },
        47597: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return getNodeError
                }
            });
            var n = r(89534),
                o = r(3741);

            function getNodeError(e, t) {
                let r = (e.details || "").toLowerCase(),
                    i = e.walk(e => e.code === o.M_.code);
                return i instanceof n.G ? new o.M_({
                    cause: e,
                    message: i.details
                }) : o.M_.nodeMessage.test(r) ? new o.M_({
                    cause: e,
                    message: e.details
                }) : o.Hh.nodeMessage.test(r) ? new o.Hh({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : o.G$.nodeMessage.test(r) ? new o.G$({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : o.ZI.nodeMessage.test(r) ? new o.ZI({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.vU.nodeMessage.test(r) ? new o.vU({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.se.nodeMessage.test(r) ? new o.se({
                    cause: e,
                    nonce: t ? .nonce
                }) : o.C_.nodeMessage.test(r) ? new o.C_({
                    cause: e
                }) : o.WF.nodeMessage.test(r) ? new o.WF({
                    cause: e,
                    gas: t ? .gas
                }) : o.dR.nodeMessage.test(r) ? new o.dR({
                    cause: e,
                    gas: t ? .gas
                }) : o.pZ.nodeMessage.test(r) ? new o.pZ({
                    cause: e
                }) : o.cs.nodeMessage.test(r) ? new o.cs({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas,
                    maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
                }) : new o.cj({
                    cause: e
                })
            }
        },
        29764: function(e, t, r) {
            r.d(t, {
                G: function() {
                    return i
                },
                Z: function() {
                    return formatBlock
                }
            });
            var n = r(74073),
                o = r(94605);

            function formatBlock(e) {
                let t = e.transactions ? .map(e => "string" == typeof e ? e : o.Tr(e));
                return { ...e,
                    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                    hash: e.hash ? e.hash : null,
                    logsBloom: e.logsBloom ? e.logsBloom : null,
                    nonce: e.nonce ? e.nonce : null,
                    number: e.number ? BigInt(e.number) : null,
                    size: e.size ? BigInt(e.size) : void 0,
                    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                    transactions: t,
                    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                }
            }
            let i = (0, n.$)("block", formatBlock)
        },
        75250: function(e, t, r) {
            r.d(t, {
                K: function() {
                    return extract
                }
            });

            function extract(e, {
                format: t
            }) {
                if (!t) return {};
                let r = {},
                    n = t(e || {});
                return ! function extract_(t) {
                    let n = Object.keys(t);
                    for (let o of n) o in e && (r[o] = e[o]), t[o] && "object" == typeof t[o] && !Array.isArray(t[o]) && extract_(t[o])
                }(n), r
            }
        },
        74073: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return defineFormatter
                }
            });

            function defineFormatter(e, t) {
                return ({
                    exclude: r,
                    format: n
                }) => ({
                    exclude: r,
                    format: e => {
                        let o = t(e);
                        if (r)
                            for (let e of r) delete o[e];
                        return { ...o,
                            ...n(e)
                        }
                    },
                    type: e
                })
            }
        },
        74785: function(e, t, r) {
            r.d(t, {
                U: function() {
                    return formatLog
                }
            });

            function formatLog(e, {
                args: t,
                eventName: r
            } = {}) {
                return { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    logIndex: e.logIndex ? Number(e.logIndex) : null,
                    transactionHash: e.transactionHash ? e.transactionHash : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    ...r ? {
                        args: t,
                        eventName: r
                    } : {}
                }
            }
        },
        94605: function(e, t, r) {
            r.d(t, {
                Tr: function() {
                    return formatTransaction
                },
                c8: function() {
                    return i
                },
                y_: function() {
                    return s
                }
            });
            var n = r(17114),
                o = r(74073);
            let i = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559"
            };

            function formatTransaction(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, n.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, n.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? i[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t
            }
            let s = (0, o.$)("transaction", formatTransaction)
        },
        30304: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return u
                },
                f: function() {
                    return formatTransactionReceipt
                }
            });
            var n = r(17114),
                o = r(74073),
                i = r(74785),
                s = r(94605);
            let c = {
                "0x0": "reverted",
                "0x1": "success"
            };

            function formatTransactionReceipt(e) {
                return { ...e,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    contractAddress: e.contractAddress ? e.contractAddress : null,
                    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                    logs: e.logs ? e.logs.map(e => (0, i.U)(e)) : null,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? (0, n.ly)(e.transactionIndex) : null,
                    status: e.status ? c[e.status] : null,
                    type: e.type ? s.c8[e.type] || e.type : null
                }
            }
            let u = (0, o.$)("transactionReceipt", formatTransactionReceipt)
        },
        33495: function(e, t, r) {
            r.d(t, {
                iy: function() {
                    return s
                },
                tG: function() {
                    return formatTransactionRequest
                }
            });
            var n = r(19473),
                o = r(74073);
            let i = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2"
            };

            function formatTransactionRequest(e) {
                return { ...e,
                    gas: void 0 !== e.gas ? (0, n.eC)(e.gas) : void 0,
                    gasPrice: void 0 !== e.gasPrice ? (0, n.eC)(e.gasPrice) : void 0,
                    maxFeePerGas: void 0 !== e.maxFeePerGas ? (0, n.eC)(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: void 0 !== e.maxPriorityFeePerGas ? (0, n.eC)(e.maxPriorityFeePerGas) : void 0,
                    nonce: void 0 !== e.nonce ? (0, n.eC)(e.nonce) : void 0,
                    type: void 0 !== e.type ? i[e.type] : void 0,
                    value: void 0 !== e.value ? (0, n.eC)(e.value) : void 0
                }
            }
            let s = (0, o.$)("transactionRequest", formatTransactionRequest)
        },
        61820: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return getAction
                }
            });

            function getAction(e, t, r) {
                return n => e[t.name || r] ? .(n) ? ? t(e, n)
            }
        },
        20553: function(e, t, r) {
            r.d(t, {
                e: function() {
                    return getEventSelector
                }
            });
            var n = r(79958),
                o = r(46492);
            let getEventSignature = e => (0, o.r)(e);
            var i = r(12570);
            let hash = e => (0, i.w)((0, n.O0)(e)),
                getEventSelector = e => hash(getEventSignature(e))
        },
        57821: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return getFunctionSelector
                }
            });
            var n = r(60155),
                o = r(79958),
                i = r(46492),
                s = r(12570);
            let hash = e => (0, s.w)((0, o.O0)(e)),
                getFunctionSelector = e => (0, n.tP)(hash((0, i.r)(e)), 0, 4)
        },
        46492: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return getFunctionSignature
                }
            });
            var n = r(55846);
            let o = /^tuple(?<array>(\[(\d*)\])*)$/;

            function formatAbiParameters(e) {
                let t = "",
                    r = e.length;
                for (let i = 0; i < r; i++) {
                    let s = e[i];
                    t += function formatAbiParameter(e) {
                        let t = e.type;
                        if (o.test(e.type) && "components" in e) {
                            t = "(";
                            let r = e.components.length;
                            for (let n = 0; n < r; n++) {
                                let o = e.components[n];
                                t += formatAbiParameter(o), n < r - 1 && (t += ", ")
                            }
                            let i = (0, n.Zw)(o, e.type);
                            return t += `)${i?.array??""}`, formatAbiParameter({ ...e,
                                type: t
                            })
                        }
                        return ("indexed" in e && e.indexed && (t = `${t} indexed`), e.name) ? `${t} ${e.name}` : t
                    }(s), i !== r - 1 && (t += ", ")
                }
                return t
            }
            var i = r(89534);
            let getFunctionSignature = e => {
                var t;
                let r = "string" == typeof e ? e : "function" === (t = e).type ? `function ${t.name}(${formatAbiParameters(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${formatAbiParameters(t.outputs)})`:""}` : "event" === t.type ? `event ${t.name}(${formatAbiParameters(t.inputs)})` : "error" === t.type ? `error ${t.name}(${formatAbiParameters(t.inputs)})` : "constructor" === t.type ? `constructor(${formatAbiParameters(t.inputs)})${"payable"===t.stateMutability?" payable":""}` : "fallback" === t.type ? "fallback()" : "receive() external payable";
                return function(e) {
                    let t = !0,
                        r = "",
                        n = 0,
                        o = "",
                        s = !1;
                    for (let i = 0; i < e.length; i++) {
                        let c = e[i];
                        if (["(", ")", ","].includes(c) && (t = !0), "(" === c && n++, ")" === c && n--, t) {
                            if (0 === n) {
                                if (" " === c && ["event", "function", ""].includes(o)) o = "";
                                else if (o += c, ")" === c) {
                                    s = !0;
                                    break
                                }
                                continue
                            }
                            if (" " === c) {
                                "," !== e[i - 1] && "," !== r && ",(" !== r && (r = "", t = !1);
                                continue
                            }
                            o += c, r += c
                        }
                    }
                    if (!s) throw new i.G("Unable to normalize signature.");
                    return o
                }(r)
            }
        },
        12570: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return keccak256
                }
            });
            var n = r(80479);
            let o = BigInt(4294967296 - 1),
                i = BigInt(32),
                rotlSH = (e, t, r) => e << r | t >>> 32 - r,
                rotlSL = (e, t, r) => t << r | e >>> 32 - r,
                rotlBH = (e, t, r) => t << r - 32 | e >>> 64 - r,
                rotlBL = (e, t, r) => e << r - 32 | t >>> 64 - r;
            var s = r(84086);
            let [c, u, l] = [
                [],
                [],
                []
            ], d = BigInt(0), f = BigInt(1), p = BigInt(2), m = BigInt(7), b = BigInt(256), y = BigInt(113);
            for (let e = 0, t = f, r = 1, n = 0; e < 24; e++) {
                [r, n] = [n, (2 * r + 3 * n) % 5], c.push(2 * (5 * n + r)), u.push((e + 1) * (e + 2) / 2 % 64);
                let o = d;
                for (let e = 0; e < 7; e++)(t = (t << f ^ (t >> m) * y) % b) & p && (o ^= f << (f << BigInt(e)) - f);
                l.push(o)
            }
            let [g, v] = function(e, t = !1) {
                let r = new Uint32Array(e.length),
                    n = new Uint32Array(e.length);
                for (let s = 0; s < e.length; s++) {
                    let {
                        h: c,
                        l: u
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & o),
                            l: Number(e >> i & o)
                        } : {
                            h: 0 | Number(e >> i & o),
                            l: 0 | Number(e & o)
                        }
                    }(e[s], t);
                    [r[s], n[s]] = [c, u]
                }
                return [r, n]
            }(l, !0), rotlH = (e, t, r) => r > 32 ? rotlBH(e, t, r) : rotlSH(e, t, r), rotlL = (e, t, r) => r > 32 ? rotlBL(e, t, r) : rotlSL(e, t, r);
            let Keccak = class Keccak extends s.kb {
                constructor(e, t, r, o = !1, i = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = r, this.enableXOF = o, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, n.Rx)(r), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, s.Jq)(this.state)
                }
                keccak() {
                    ! function(e, t = 24) {
                        let r = new Uint32Array(10);
                        for (let n = 24 - t; n < 24; n++) {
                            for (let t = 0; t < 10; t++) r[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                            for (let t = 0; t < 10; t += 2) {
                                let n = (t + 8) % 10,
                                    o = (t + 2) % 10,
                                    i = r[o],
                                    s = r[o + 1],
                                    c = rotlH(i, s, 1) ^ r[n],
                                    u = rotlL(i, s, 1) ^ r[n + 1];
                                for (let r = 0; r < 50; r += 10) e[t + r] ^= c, e[t + r + 1] ^= u
                            }
                            let t = e[2],
                                o = e[3];
                            for (let r = 0; r < 24; r++) {
                                let n = u[r],
                                    i = rotlH(t, o, n),
                                    s = rotlL(t, o, n),
                                    l = c[r];
                                t = e[l], o = e[l + 1], e[l] = i, e[l + 1] = s
                            }
                            for (let t = 0; t < 50; t += 10) {
                                for (let n = 0; n < 10; n++) r[n] = e[t + n];
                                for (let n = 0; n < 10; n++) e[t + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10]
                            }
                            e[0] ^= g[n], e[1] ^= v[n]
                        }
                        r.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    (0, n.Gg)(this);
                    let {
                        blockLen: t,
                        state: r
                    } = this;
                    e = (0, s.O0)(e);
                    let o = e.length;
                    for (let n = 0; n < o;) {
                        let i = Math.min(t - this.pos, o - n);
                        for (let t = 0; t < i; t++) r[this.pos++] ^= e[n++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: r,
                        blockLen: n
                    } = this;
                    e[r] ^= t, (128 & t) != 0 && r === n - 1 && this.keccak(), e[n - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    (0, n.Gg)(this, !1), (0, n.aI)(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: r
                        } = this;
                    for (let n = 0, o = e.length; n < o;) {
                        this.posOut >= r && this.keccak();
                        let i = Math.min(r - this.posOut, o - n);
                        e.set(t.subarray(this.posOut, this.posOut + i), n), this.posOut += i, n += i
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return (0, n.Rx)(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if ((0, n.J8)(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: r,
                        outputLen: n,
                        rounds: o,
                        enableXOF: i
                    } = this;
                    return e || (e = new Keccak(t, r, n, i, o)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = o, e.suffix = r, e.outputLen = n, e.enableXOF = i, e.destroyed = this.destroyed, e
                }
            };
            let w = (0, s.hE)(() => new Keccak(136, 1, 32));
            var E = r(63424),
                C = r(79958),
                P = r(19473);

            function keccak256(e, t) {
                let r = w((0, E.v)(e, {
                    strict: !1
                }) ? (0, C.O0)(e) : e);
                return "bytes" === (t || "hex") ? r : (0, P.NC)(r)
            }
        },
        46465: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return createBatchScheduler
                }
            });
            let n = new Map;

            function createBatchScheduler({
                fn: e,
                id: t,
                shouldSplitBatch: r,
                wait: o = 0,
                sort: i
            }) {
                let exec = async () => {
                        let t = getScheduler();
                        flush();
                        let r = t.map(({
                            args: e
                        }) => e);
                        0 !== r.length && e(r).then(e => {
                            i && Array.isArray(e) && e.sort(i);
                            for (let r = 0; r < t.length; r++) {
                                let {
                                    pendingPromise: n
                                } = t[r];
                                n.resolve ? .([e[r], e])
                            }
                        }).catch(e => {
                            for (let r = 0; r < t.length; r++) {
                                let {
                                    pendingPromise: n
                                } = t[r];
                                n.reject ? .(e)
                            }
                        })
                    },
                    flush = () => n.delete(t),
                    getBatchedArgs = () => getScheduler().map(({
                        args: e
                    }) => e),
                    getScheduler = () => n.get(t) || [],
                    setScheduler = e => n.set(t, [...getScheduler(), e]);
                return {
                    flush,
                    async schedule(e) {
                        let t = {},
                            n = new Promise((e, r) => {
                                t.resolve = e, t.reject = r
                            }),
                            i = r ? .([...getBatchedArgs(), e]);
                        i && exec();
                        let s = getScheduler().length > 0;
                        return s ? setScheduler({
                            args: e,
                            pendingPromise: t
                        }) : (setScheduler({
                            args: e,
                            pendingPromise: t
                        }), setTimeout(exec, o)), n
                    }
                }
            }
        },
        69525: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return withRetry
                }
            });
            var n = r(59156);

            function withRetry(e, {
                delay: t = 100,
                retryCount: r = 2,
                shouldRetry: o = () => !0
            } = {}) {
                return new Promise((i, s) => {
                    let attemptRetry = async ({
                        count: c = 0
                    } = {}) => {
                        let retry = async ({
                            error: e
                        }) => {
                            let r = "function" == typeof t ? t({
                                count: c,
                                error: e
                            }) : t;
                            r && await (0, n.D)(r), attemptRetry({
                                count: c + 1
                            })
                        };
                        try {
                            let t = await e();
                            i(t)
                        } catch (e) {
                            if (c < r && await o({
                                    count: c,
                                    error: e
                                })) return retry({
                                error: e
                            });
                            s(e)
                        }
                    };
                    attemptRetry()
                })
            }
        },
        14167: function(e, t, r) {
            r.d(t, {
                hb: function() {
                    return getSocket
                },
                f4: function() {
                    return l
                }
            });
            let n = function() {
                if ("undefined" != typeof WebSocket) return WebSocket;
                if (void 0 !== global.WebSocket) return global.WebSocket;
                if (void 0 !== window.WebSocket) return window.WebSocket;
                if (void 0 !== self.WebSocket) return self.WebSocket;
                throw Error("`WebSocket` is not supported in this environment")
            }();
            var o = r(76550),
                i = r(46465);

            function withTimeout(e, {
                errorInstance: t = Error("timed out"),
                timeout: r,
                signal: n
            }) {
                return new Promise((o, i) => {
                    (async () => {
                        let s;
                        try {
                            let c = new AbortController;
                            r > 0 && (s = setTimeout(() => {
                                n ? c.abort() : i(t)
                            }, r)), o(await e({
                                signal: c ? .signal
                            }))
                        } catch (e) {
                            "AbortError" === e.name && i(t), i(e)
                        } finally {
                            clearTimeout(s)
                        }
                    })()
                })
            }
            var s = r(3359);
            let c = 0;
            async function http(e, {
                body: t,
                fetchOptions: r = {},
                timeout: n = 1e4
            }) {
                let {
                    headers: i,
                    method: u,
                    signal: l
                } = r;
                try {
                    let d;
                    let f = await withTimeout(async ({
                        signal: o
                    }) => {
                        let d = await fetch(e, { ...r,
                            body: Array.isArray(t) ? (0, s.P)(t.map(e => ({
                                jsonrpc: "2.0",
                                id: e.id ? ? c++,
                                ...e
                            }))) : (0, s.P)({
                                jsonrpc: "2.0",
                                id: t.id ? ? c++,
                                ...t
                            }),
                            headers: { ...i,
                                "Content-Type": "application/json"
                            },
                            method: u || "POST",
                            signal: l || (n > 0 ? o : void 0)
                        });
                        return d
                    }, {
                        errorInstance: new o.W5({
                            body: t,
                            url: e
                        }),
                        timeout: n,
                        signal: !0
                    });
                    if (d = f.headers.get("Content-Type") ? .startsWith("application/json") ? await f.json() : await f.text(), !f.ok) throw new o.Gg({
                        body: t,
                        details: (0, s.P)(d.error) || f.statusText,
                        headers: f.headers,
                        status: f.status,
                        url: e
                    });
                    return d
                } catch (r) {
                    if (r instanceof o.Gg || r instanceof o.W5) throw r;
                    throw new o.Gg({
                        body: t,
                        details: r.message,
                        url: e
                    })
                }
            }
            let u = new Map;
            async function getSocket(e) {
                let t = u.get(e);
                if (t) return t;
                let {
                    schedule: r
                } = (0, i.S)({
                    id: e,
                    fn: async () => {
                        let r = new n(e),
                            o = new Map,
                            i = new Map,
                            onMessage = ({
                                data: e
                            }) => {
                                let t = JSON.parse(e),
                                    r = "eth_subscription" === t.method,
                                    n = r ? t.params.subscription : t.id,
                                    s = r ? i : o,
                                    c = s.get(n);
                                c && c({
                                    data: e
                                }), r || s.delete(n)
                            },
                            onClose = () => {
                                u.delete(e), r.removeEventListener("close", onClose), r.removeEventListener("message", onMessage)
                            };
                        return r.addEventListener("close", onClose), r.addEventListener("message", onMessage), r.readyState === n.CONNECTING && await new Promise((e, t) => {
                            r && (r.onopen = e, r.onerror = t)
                        }), t = Object.assign(r, {
                            requests: o,
                            subscriptions: i
                        }), u.set(e, t), [t]
                    }
                }), [o, [s]] = await r();
                return s
            }
            async function webSocketAsync(e, {
                body: t,
                timeout: r = 1e4
            }) {
                return withTimeout(() => new Promise(r => l.webSocket(e, {
                    body: t,
                    onResponse: r
                })), {
                    errorInstance: new o.W5({
                        body: t,
                        url: e.url
                    }),
                    timeout: r
                })
            }
            let l = {
                http,
                webSocket: function(e, {
                    body: t,
                    onResponse: r
                }) {
                    if (e.readyState === e.CLOSED || e.readyState === e.CLOSING) throw new o.c9({
                        body: t,
                        url: e.url,
                        details: "Socket is closed."
                    });
                    let n = c++,
                        callback = ({
                            data: o
                        }) => {
                            let i = JSON.parse(o);
                            ("number" != typeof i.id || n === i.id) && (r ? .(i), "eth_subscribe" === t.method && "string" == typeof i.result && e.subscriptions.set(i.result, callback), "eth_unsubscribe" === t.method && e.subscriptions.delete(t.params ? .[0]))
                        };
                    return e.requests.set(n, callback), e.send(JSON.stringify({
                        jsonrpc: "2.0",
                        ...t,
                        id: n
                    })), e
                },
                webSocketAsync
            }
        },
        9891: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return hashMessage
                }
            });
            var n = r(62832),
                o = r(79958),
                i = r(12570);

            function hashMessage(e, t) {
                let r = "string" == typeof e ? (0, o.qX)(e) : e.raw instanceof Uint8Array ? e.raw : (0, o.O0)(e.raw),
                    s = (0, o.qX)(`Ethereum Signed Message:
${r.length}`);
                return (0, i.w)((0, n.zo)([s, r]), t)
            }
        },
        19550: function(e, t, r) {
            r.d(t, {
                J: function() {
                    return hashTypedData
                }
            });
            var n = r(25571),
                o = r(62832),
                i = r(19473),
                s = r(12570),
                c = r(4304);

            function hashTypedData({
                domain: e,
                message: t,
                primaryType: r,
                types: n
            }) {
                let i = void 0 === e ? {} : e,
                    u = {
                        EIP712Domain: (0, c.cj)({
                            domain: i
                        }),
                        ...n
                    };
                (0, c.iC)({
                    domain: i,
                    message: t,
                    primaryType: r,
                    types: u
                });
                let l = ["0x1901"];
                return i && l.push(function({
                    domain: e,
                    types: t
                }) {
                    return hashStruct({
                        data: e,
                        primaryType: "EIP712Domain",
                        types: t
                    })
                }({
                    domain: i,
                    types: u
                })), "EIP712Domain" !== r && l.push(hashStruct({
                    data: t,
                    primaryType: r,
                    types: u
                })), (0, s.w)((0, o.zo)(l))
            }

            function hashStruct({
                data: e,
                primaryType: t,
                types: r
            }) {
                let o = function encodeData({
                    data: e,
                    primaryType: t,
                    types: r
                }) {
                    let o = [{
                            type: "bytes32"
                        }],
                        c = [function({
                            primaryType: e,
                            types: t
                        }) {
                            let r = (0, i.NC)(function({
                                primaryType: e,
                                types: t
                            }) {
                                let r = "",
                                    n = function findTypeDependencies({
                                        primaryType: e,
                                        types: t
                                    }, r = new Set) {
                                        let n = e.match(/^\w*/u),
                                            o = n ? .[0];
                                        if (r.has(o) || void 0 === t[o]) return r;
                                        for (let e of (r.add(o), t[o])) findTypeDependencies({
                                            primaryType: e.type,
                                            types: t
                                        }, r);
                                        return r
                                    }({
                                        primaryType: e,
                                        types: t
                                    });
                                n.delete(e);
                                let o = [e, ...Array.from(n).sort()];
                                for (let e of o) r += `${e}(${t[e].map(({name:e,type:t})=>`
                                $ {
                                    t
                                }
                                $ {
                                    e
                                }
                                `).join(",")})`;
                                return r
                            }({
                                primaryType: e,
                                types: t
                            }));
                            return (0, s.w)(r)
                        }({
                            primaryType: t,
                            types: r
                        })];
                    for (let u of r[t]) {
                        let [t, l] = function encodeField({
                            types: e,
                            name: t,
                            type: r,
                            value: o
                        }) {
                            if (void 0 !== e[r]) return [{
                                type: "bytes32"
                            }, (0, s.w)(encodeData({
                                data: o,
                                primaryType: r,
                                types: e
                            }))];
                            if ("bytes" === r) {
                                let e = o.length % 2 ? "0" : "";
                                return o = `0x${e+o.slice(2)}`, [{
                                    type: "bytes32"
                                }, (0, s.w)(o)]
                            }
                            if ("string" === r) return [{
                                type: "bytes32"
                            }, (0, s.w)((0, i.NC)(o))];
                            if (r.lastIndexOf("]") === r.length - 1) {
                                let i = r.slice(0, r.lastIndexOf("[")),
                                    c = o.map(r => encodeField({
                                        name: t,
                                        type: i,
                                        types: e,
                                        value: r
                                    }));
                                return [{
                                    type: "bytes32"
                                }, (0, s.w)((0, n.E)(c.map(([e]) => e), c.map(([, e]) => e)))]
                            }
                            return [{
                                type: r
                            }, o]
                        }({
                            types: r,
                            name: u.name,
                            type: u.type,
                            value: e[u.name]
                        });
                        o.push(t), c.push(l)
                    }
                    return (0, n.E)(o, c)
                }({
                    data: e,
                    primaryType: t,
                    types: r
                });
                return (0, s.w)(o)
            }
        },
        3359: function(e, t, r) {
            r.d(t, {
                P: function() {
                    return stringify
                }
            });
            let stringify = (e, t, r) => JSON.stringify(e, (e, r) => {
                let n = "bigint" == typeof r ? r.toString() : r;
                return "function" == typeof t ? t(e, n) : n
            }, r)
        },
        25621: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return assertRequest
                }
            });
            var n = r(88121),
                o = r(82663),
                i = r(3741),
                s = r(94069),
                c = r(20886);

            function assertRequest(e) {
                let {
                    account: t,
                    gasPrice: r,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l,
                    to: d
                } = e, f = t ? (0, n.T)(t) : void 0;
                if (f && !(0, c.U)(f.address)) throw new o.b({
                    address: f.address
                });
                if (d && !(0, c.U)(d)) throw new o.b({
                    address: d
                });
                if (void 0 !== r && (void 0 !== u || void 0 !== l)) throw new s.xY;
                if (u && u > 2 n ** 256 n - 1 n) throw new i.Hh({
                    maxFeePerGas: u
                });
                if (l && u && l > u) throw new i.cs({
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: l
                })
            }
        },
        10711: function(e, t, r) {
            r.d(t, {
                l: function() {
                    return getTransactionType
                }
            });
            var n = r(94069);

            function getTransactionType(e) {
                if (e.type) return e.type;
                if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                throw new n.j3({
                    transaction: e
                })
            }
        },
        4304: function(e, t, r) {
            r.d(t, {
                cj: function() {
                    return getTypesForEIP712Domain
                },
                iC: function() {
                    return validateTypedData
                }
            });
            var n = r(86093),
                o = r(82663),
                i = r(20886),
                s = r(86920),
                c = r(19473);
            let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                l = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

            function validateTypedData({
                domain: e,
                message: t,
                primaryType: r,
                types: d
            }) {
                let validateData = (e, t) => {
                    for (let r of e) {
                        let {
                            name: e,
                            type: f
                        } = r, p = t[e], m = f.match(l);
                        if (m && ("number" == typeof p || "bigint" == typeof p)) {
                            let [e, t, r] = m;
                            (0, c.eC)(p, {
                                signed: "int" === t,
                                size: parseInt(r) / 8
                            })
                        }
                        if ("address" === f && "string" == typeof p && !(0, i.U)(p)) throw new o.b({
                            address: p
                        });
                        let b = f.match(u);
                        if (b) {
                            let [e, t] = b;
                            if (t && (0, s.d)(p) !== parseInt(t)) throw new n.KY({
                                expectedSize: parseInt(t),
                                givenSize: (0, s.d)(p)
                            })
                        }
                        let y = d[f];
                        y && validateData(y, p)
                    }
                };
                if (d.EIP712Domain && e && validateData(d.EIP712Domain, e), "EIP712Domain" !== r) {
                    let e = d[r];
                    validateData(e, t)
                }
            }

            function getTypesForEIP712Domain({
                domain: e
            }) {
                return ["string" == typeof e ? .name && {
                    name: "name",
                    type: "string"
                }, e ? .version && {
                    name: "version",
                    type: "string"
                }, "number" == typeof e ? .chainId && {
                    name: "chainId",
                    type: "uint256"
                }, e ? .verifyingContract && {
                    name: "verifyingContract",
                    type: "address"
                }, e ? .salt && {
                    name: "salt",
                    type: "bytes32"
                }].filter(Boolean)
            }
        },
        4287: function(e, t, r) {
            r.d(t, {
                o: function() {
                    return formatGwei
                }
            });
            var n = r(56032),
                o = r(41680);

            function formatGwei(e, t = "wei") {
                return (0, o.b)(e, n.Zn[t])
            }
        },
        88266: function(e, t, r) {
            r.d(t, {
                f: function() {
                    return parseEther
                }
            });
            var n = r(56032),
                o = r(34588);

            function parseEther(e, t = "wei") {
                return (0, o.v)(e, n.ez[t])
            }
        },
        34588: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return parseUnits
                }
            });

            function parseUnits(e, t) {
                let [r, n = "0"] = e.split("."), o = r.startsWith("-");
                if (o && (r = r.slice(1)), n = n.replace(/(0+)$/, ""), 0 === t) 1 === Math.round(Number(`.${n}`)) && (r = `${BigInt(r)+1n}`), n = "";
                else if (n.length > t) {
                    let [e, o, i] = [n.slice(0, t - 1), n.slice(t - 1, t), n.slice(t)], s = Math.round(Number(`${o}.${i}`));
                    (n = s > 9 ? `${BigInt(e)+BigInt(1)}0`.padStart(e.length + 1, "0") : `${e}${s}`).length > t && (n = n.slice(1), r = `${BigInt(r)+1n}`), n = n.slice(0, t)
                } else n = n.padEnd(t, "0");
                return BigInt(`${o?"-":""}${r}${n}`)
            }
        },
        59156: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return wait
                }
            });
            async function wait(e) {
                return new Promise(t => setTimeout(t, e))
            }
        },
        59665: function(e, t, r) {
            r.d(t, {
                $4: function() {
                    return useConnect
                },
                Dm: function() {
                    return useContractReads
                },
                KQ: function() {
                    return useBalance
                },
                LN: function() {
                    return useNetwork
                },
                ZR: function() {
                    return useConfig
                },
                _g: function() {
                    return createConfig
                },
                do: function() {
                    return useContractRead
                },
                eM: function() {
                    return WagmiConfig
                },
                g0: function() {
                    return useSwitchNetwork
                },
                mA: function() {
                    return useAccount
                },
                py: function() {
                    return useWalletClient
                },
                qL: function() {
                    return useDisconnect
                },
                t_: function() {
                    return usePublicClient
                }
            });
            var n = r(38601),
                o = r(93561),
                i = r(14049),
                s = r(91798),
                c = r(9687),
                u = r(97352),
                l = r(53572),
                d = r(95475),
                f = r(68315),
                p = r(28683),
                m = r(35693),
                b = r(39883),
                y = r(48267),
                g = r(67598);

            function createConfig({
                queryClient: e = new o.S({
                    defaultOptions: {
                        queries: {
                            cacheTime: 864e5,
                            networkMode: "offlineFirst",
                            refetchOnWindowFocus: !1,
                            retry: 0
                        },
                        mutations: {
                            networkMode: "offlineFirst"
                        }
                    }
                }),
                storage: t = (0, s.o6)({
                    storage: "undefined" != typeof window && window.localStorage ? window.localStorage : s.wp
                }),
                persister: r = "undefined" != typeof window ? (0, n.K)({
                    key: "cache",
                    storage: t,
                    serialize: e => e,
                    deserialize: e => e
                }) : void 0,
                ...c
            }) {
                let u = (0, s._g)({ ...c,
                    storage: t
                });
                return r && (0, i.wO)({
                    queryClient: e,
                    persister: r,
                    dehydrateOptions: {
                        shouldDehydrateQuery: e => 0 !== e.cacheTime && !1 !== e.queryKey[0].persist
                    }
                }), Object.assign(u, {
                    queryClient: e
                })
            }
            var v = u.createContext(void 0),
                w = u.createContext(void 0);

            function WagmiConfig({
                children: e,
                config: t
            }) {
                return u.createElement(v.Provider, {
                    children: u.createElement(c.aH, {
                        children: e,
                        client: t.queryClient,
                        context: w
                    }),
                    value: t
                })
            }

            function useConfig() {
                let e = u.useContext(v);
                if (!e) throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");
                return e
            }
            var E = p.useSyncExternalStore;

            function hasObjectPrototype(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function queryKeyHashFn(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!hasObjectPrototype(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let r = t.prototype;
                    return !!(hasObjectPrototype(r) && r.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}))
            }

            function useMutation(e, t, r) {
                let n = (0, m.lV)(e, t, r);
                return (0, b.D)({
                    context: w,
                    ...n
                })
            }

            function useQuery(e, t, r) {
                let n = Array.isArray(e) ? "function" == typeof t ? { ...r,
                        queryKey: e,
                        queryFn: t
                    } : { ...t,
                        queryKey: e
                    } : e,
                    o = function(e, t) {
                        var r, n;
                        let o = (0, c.NL)({
                                context: e.context
                            }),
                            i = (0, l.S)(),
                            s = (0, d._)(),
                            p = o.defaultQueryOptions({ ...e,
                                queryKeyHashFn
                            });
                        p._optimisticResults = i ? "isRestoring" : "optimistic", p.onError && (p.onError = f.V.batchCalls(p.onError)), p.onSuccess && (p.onSuccess = f.V.batchCalls(p.onSuccess)), p.onSettled && (p.onSettled = f.V.batchCalls(p.onSettled)), p.suspense && "number" != typeof p.staleTime && (p.staleTime = 1e3), (p.suspense || p.useErrorBoundary) && !s.isReset() && (p.retryOnMount = !1);
                        let [m] = u.useState(() => new t(o, p)), b = m.getOptimisticResult(p);
                        if (E(u.useCallback(e => i ? () => void 0 : m.subscribe(f.V.batchCalls(e)), [m, i]), () => m.getCurrentResult(), () => m.getCurrentResult()), u.useEffect(() => {
                                s.clearReset()
                            }, [s]), u.useEffect(() => {
                                m.setOptions(p, {
                                    listeners: !1
                                })
                            }, [p, m]), p.suspense && b.isLoading && b.isFetching && !i) throw m.fetchOptimistic(p).then(({
                            data: e
                        }) => {
                            p.onSuccess ? .(e), p.onSettled ? .(e, null)
                        }).catch(e => {
                            s.clearReset(), p.onError ? .(e), p.onSettled ? .(void 0, e)
                        });
                        if (b.isError && !s.isReset() && !b.isFetching && (r = p.useErrorBoundary, n = [b.error, m.getCurrentQuery()], "function" == typeof r ? r(...n) : !!r)) throw b.error;
                        let y = "loading" === b.status && "idle" === b.fetchStatus ? "idle" : b.status,
                            g = "loading" === y && "fetching" === b.fetchStatus;
                        return { ...b,
                            defaultedOptions: p,
                            isIdle: "idle" === y,
                            isLoading: g,
                            observer: m,
                            status: y
                        }
                    }({
                        context: w,
                        ...n
                    }, y.z),
                    i = {
                        data: o.data,
                        error: o.error,
                        fetchStatus: o.fetchStatus,
                        isError: o.isError,
                        isFetched: o.isFetched,
                        isFetchedAfterMount: o.isFetchedAfterMount,
                        isFetching: o.isFetching,
                        isIdle: o.isIdle,
                        isLoading: o.isLoading,
                        isRefetching: o.isRefetching,
                        isSuccess: o.isSuccess,
                        refetch: o.refetch,
                        status: o.status,
                        internal: {
                            dataUpdatedAt: o.dataUpdatedAt,
                            errorUpdatedAt: o.errorUpdatedAt,
                            failureCount: o.failureCount,
                            isFetchedAfterMount: o.isFetchedAfterMount,
                            isLoadingError: o.isLoadingError,
                            isPaused: o.isPaused,
                            isPlaceholderData: o.isPlaceholderData,
                            isPreviousData: o.isPreviousData,
                            isRefetchError: o.isRefetchError,
                            isStale: o.isStale,
                            remove: o.remove
                        }
                    };
                return o.defaultedOptions.notifyOnChangeProps ? i : function(e, t) {
                    let r = {};
                    return Object.keys(e).forEach(n => {
                        Object.defineProperty(r, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (t.trackedProps.add(n), e[n])
                        })
                    }), r
                }(i, o.observer)
            }
            var useQueryClient2 = () => (0, c.NL)({
                context: w
            });

            function usePublicClient({
                chainId: e
            } = {}) {
                return (0, g.useSyncExternalStoreWithSelector)(t => (0, s.pC)({
                    chainId: e
                }, t), () => (0, s.uV)({
                    chainId: e
                }), () => (0, s.uV)({
                    chainId: e
                }), e => e, (e, t) => e.uid === t.uid)
            }

            function queryKey({
                chainId: e
            }) {
                return [{
                    entity: "walletClient",
                    chainId: e,
                    persist: !1
                }]
            }

            function queryFn({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, s.xz)({
                    chainId: e
                })
            }

            function useWalletClient({
                chainId: e,
                suspense: t,
                onError: r,
                onSettled: n,
                onSuccess: o
            } = {}) {
                let {
                    connector: i
                } = useAccount(), c = useChainId({
                    chainId: e
                }), l = useQuery(queryKey({
                    chainId: c
                }), queryFn, {
                    cacheTime: 0,
                    enabled: !!i,
                    staleTime: 1 / 0,
                    suspense: t,
                    onError: r,
                    onSettled: n,
                    onSuccess: o
                }), d = useQueryClient2();
                return u.useEffect(() => {
                    let e = (0, s.Tb)({
                        chainId: c
                    }, e => {
                        e ? d.invalidateQueries(queryKey({
                            chainId: c
                        })) : d.removeQueries(queryKey({
                            chainId: c
                        }))
                    });
                    return e
                }, [d, c]), l
            }

            function useChainId({
                chainId: e
            } = {}) {
                let t = usePublicClient({
                    chainId: e
                });
                return t.chain.id
            }

            function queryKey2({
                chainId: e,
                scopeKey: t
            }) {
                return [{
                    entity: "blockNumber",
                    chainId: e,
                    scopeKey: t
                }]
            }

            function queryFn2({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, s.RQ)({
                    chainId: e
                })
            }

            function useBlockNumber({
                cacheTime: e = 0,
                chainId: t,
                enabled: r = !0,
                scopeKey: n,
                staleTime: o,
                suspense: i,
                watch: c = !1,
                onBlock: l,
                onError: d,
                onSettled: f,
                onSuccess: p
            } = {}) {
                let m = useChainId({
                        chainId: t
                    }),
                    b = usePublicClient({
                        chainId: m
                    }),
                    y = function({
                        chainId: e
                    } = {}) {
                        return (0, g.useSyncExternalStoreWithSelector)(t => (0, s.fq)({
                            chainId: e
                        }, t), () => (0, s.jr)({
                            chainId: e
                        }), () => (0, s.jr)({
                            chainId: e
                        }), e => e, (e, t) => e ? .uid === t ? .uid)
                    }({
                        chainId: m
                    }),
                    v = useQueryClient2();
                return u.useEffect(() => {
                    if (!r || !c && !l) return;
                    let e = y ? ? b,
                        t = e.watchBlockNumber({
                            onBlockNumber: e => {
                                c && v.setQueryData(queryKey2({
                                    chainId: m,
                                    scopeKey: n
                                }), e), l && l(e)
                            },
                            emitOnBegin: !0
                        });
                    return t
                }, [m, n, l, b, v, c, y, r]), useQuery(queryKey2({
                    scopeKey: n,
                    chainId: m
                }), queryFn2, {
                    cacheTime: e,
                    enabled: r,
                    staleTime: o,
                    suspense: i,
                    onError: d,
                    onSettled: f,
                    onSuccess: p
                })
            }

            function useInvalidateOnBlock({
                chainId: e,
                enabled: t,
                queryKey: r
            }) {
                let n = useQueryClient2(),
                    o = u.useCallback(() => n.invalidateQueries({
                        queryKey: r
                    }, {
                        cancelRefetch: !1
                    }), [n, r]);
                useBlockNumber({
                    chainId: e,
                    enabled: t,
                    onBlock: t ? o : void 0,
                    scopeKey: t ? void 0 : "idle"
                })
            }
            var isPlainObject2 = e => "object" == typeof e && !Array.isArray(e);

            function useSyncExternalStoreWithTracked(e, t, r = t, n = s.vZ) {
                let o = u.useRef([]),
                    i = (0, g.useSyncExternalStoreWithSelector)(e, t, r, e => e, (e, t) => {
                        if (isPlainObject2(e) && isPlainObject2(t) && o.current.length) {
                            for (let r of o.current) {
                                let o = n(e[r], t[r]);
                                if (!o) return !1
                            }
                            return !0
                        }
                        return n(e, t)
                    });
                if (isPlainObject2(i)) {
                    let e = { ...i
                    };
                    return Object.defineProperties(e, Object.entries(e).reduce((e, [t, r]) => ({ ...e,
                        [t]: {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (o.current.includes(t) || o.current.push(t), r)
                        }
                    }), {})), e
                }
                return i
            }

            function useAccount({
                onConnect: e,
                onDisconnect: t
            } = {}) {
                let r = useConfig(),
                    n = u.useCallback(e => (0, s.uH)(e), [r]),
                    o = useSyncExternalStoreWithTracked(n, s.D0),
                    i = u.useRef(),
                    c = i.current;
                return u.useEffect(() => {
                    c ? .status !== "connected" && "connected" === o.status && e ? .({
                        address: o.address,
                        connector: o.connector,
                        isReconnected: c ? .status === "reconnecting" || c ? .status === void 0
                    }), c ? .status === "connected" && "disconnected" === o.status && t ? .(), i.current = o
                }, [e, t, c, o]), o
            }

            function queryFn4({
                queryKey: [{
                    address: e,
                    chainId: t,
                    formatUnits: r,
                    token: n
                }]
            }) {
                if (!e) throw Error("address is required");
                return (0, s.EG)({
                    address: e,
                    chainId: t,
                    formatUnits: r,
                    token: n
                })
            }

            function useBalance({
                address: e,
                cacheTime: t,
                chainId: r,
                enabled: n = !0,
                formatUnits: o,
                scopeKey: i,
                staleTime: s,
                suspense: c,
                token: l,
                watch: d,
                onError: f,
                onSettled: p,
                onSuccess: m
            } = {}) {
                let b = useChainId({
                        chainId: r
                    }),
                    y = u.useMemo(() => (function({
                        address: e,
                        chainId: t,
                        formatUnits: r,
                        scopeKey: n,
                        token: o
                    }) {
                        return [{
                            entity: "balance",
                            address: e,
                            chainId: t,
                            formatUnits: r,
                            scopeKey: n,
                            token: o
                        }]
                    })({
                        address: e,
                        chainId: b,
                        formatUnits: o,
                        scopeKey: i,
                        token: l
                    }), [e, b, o, i, l]),
                    g = useQuery(y, queryFn4, {
                        cacheTime: t,
                        enabled: !!(n && e),
                        staleTime: s,
                        suspense: c,
                        onError: f,
                        onSettled: p,
                        onSuccess: m
                    });
                return useInvalidateOnBlock({
                    chainId: b,
                    enabled: !!(n && d && e),
                    queryKey: y
                }), g
            }
            var mutationKey = e => [{
                    entity: "connect",
                    ...e
                }],
                mutationFn = e => {
                    let {
                        connector: t,
                        chainId: r
                    } = e;
                    if (!t) throw Error("connector is required");
                    return (0, s.$j)({
                        connector: t,
                        chainId: r
                    })
                };

            function useConnect({
                chainId: e,
                connector: t,
                onError: r,
                onMutate: n,
                onSettled: o,
                onSuccess: i
            } = {}) {
                let s = useConfig(),
                    {
                        data: c,
                        error: l,
                        isError: d,
                        isIdle: f,
                        isLoading: p,
                        isSuccess: m,
                        mutate: b,
                        mutateAsync: y,
                        reset: g,
                        status: v,
                        variables: w
                    } = useMutation(mutationKey({
                        connector: t,
                        chainId: e
                    }), mutationFn, {
                        onError: r,
                        onMutate: n,
                        onSettled: o,
                        onSuccess: i
                    }),
                    E = u.useCallback(r => b({
                        chainId: r ? .chainId ? ? e,
                        connector: r ? .connector ? ? t
                    }), [e, t, b]),
                    C = u.useCallback(r => y({
                        chainId: r ? .chainId ? ? e,
                        connector: r ? .connector ? ? t
                    }), [e, t, y]);
                return {
                    connect: E,
                    connectAsync: C,
                    connectors: s.connectors,
                    data: c,
                    error: l,
                    isError: d,
                    isIdle: f,
                    isLoading: p,
                    isSuccess: m,
                    pendingConnector: w ? .connector,
                    reset: g,
                    status: v,
                    variables: w
                }
            }
            var C = [{
                    entity: "disconnect"
                }],
                mutationFn2 = () => (0, s.zP)();

            function useDisconnect({
                onError: e,
                onMutate: t,
                onSettled: r,
                onSuccess: n
            } = {}) {
                let {
                    error: o,
                    isError: i,
                    isIdle: s,
                    isLoading: c,
                    isSuccess: u,
                    mutate: l,
                    mutateAsync: d,
                    reset: f,
                    status: p
                } = useMutation(C, mutationFn2, { ...e ? {
                        onError(t, r, n) {
                            e(t, n)
                        }
                    } : {},
                    onMutate: t,
                    ...r ? {
                        onSettled(e, t, n, o) {
                            r(t, o)
                        }
                    } : {},
                    ...n ? {
                        onSuccess(e, t, r) {
                            n(r)
                        }
                    } : {}
                });
                return {
                    disconnect: l,
                    disconnectAsync: d,
                    error: o,
                    isError: i,
                    isIdle: s,
                    isLoading: c,
                    isSuccess: u,
                    reset: f,
                    status: p
                }
            }

            function useNetwork() {
                let e = useConfig(),
                    t = (0, u.useCallback)(e => (0, s.QC)(e), [e]);
                return useSyncExternalStoreWithTracked(t, s.Hy)
            }
            var mutationKey5 = e => [{
                    entity: "switchNetwork",
                    ...e
                }],
                mutationFn5 = e => {
                    let {
                        chainId: t
                    } = e;
                    if (!t) throw Error("chainId is required");
                    return (0, s.If)({
                        chainId: t
                    })
                };

            function useSwitchNetwork({
                chainId: e,
                throwForSwitchChainNotSupported: t,
                onError: r,
                onMutate: n,
                onSettled: o,
                onSuccess: i
            } = {}) {
                let s, c;
                let l = useConfig(),
                    d = function() {
                        let [, e] = u.useReducer(e => e + 1, 0);
                        return e
                    }(),
                    {
                        data: f,
                        error: p,
                        isError: m,
                        isIdle: b,
                        isLoading: y,
                        isSuccess: g,
                        mutate: v,
                        mutateAsync: w,
                        reset: E,
                        status: C,
                        variables: P
                    } = useMutation(mutationKey5({
                        chainId: e
                    }), mutationFn5, {
                        onError: r,
                        onMutate: n,
                        onSettled: o,
                        onSuccess: i
                    }),
                    x = u.useCallback(t => v({
                        chainId: t ? ? e
                    }), [e, v]),
                    k = u.useCallback(t => w({
                        chainId: t ? ? e
                    }), [e, w]);
                u.useEffect(() => {
                    let e = l.subscribe(({
                        chains: e,
                        connector: t
                    }) => ({
                        chains: e,
                        connector: t
                    }), d);
                    return e
                }, [l, d]);
                let S = !!l.connector ? .switchChain;
                return (t || S) && (s = x, c = k), {
                    chains: l.chains ? ? [],
                    data: f,
                    error: p,
                    isError: m,
                    isIdle: b,
                    isLoading: y,
                    isSuccess: g,
                    pendingChainId: P ? .chainId,
                    reset: E,
                    status: C,
                    switchNetwork: s,
                    switchNetworkAsync: c,
                    variables: P
                }
            }

            function useContractRead({
                abi: e,
                address: t,
                account: r,
                args: n,
                blockNumber: o,
                blockTag: i,
                cacheOnBlock: c = !1,
                cacheTime: l,
                chainId: d,
                enabled: f = !0,
                functionName: p,
                isDataEqual: b,
                keepPreviousData: y,
                onError: g,
                onSettled: v,
                onSuccess: w,
                scopeKey: E,
                select: C,
                staleTime: P,
                structuralSharing: x = (e, t) => (0, s.vZ)(e, t) ? e : (0, m.Q$)(e, t),
                suspense: k,
                watch: S
            } = {}) {
                let T = useChainId({
                        chainId: d
                    }),
                    {
                        data: I
                    } = useBlockNumber({
                        chainId: T,
                        enabled: S || c,
                        scopeKey: S || c ? void 0 : "idle",
                        watch: S
                    }),
                    A = o ? ? I,
                    R = u.useMemo(() => (function({
                        account: e,
                        address: t,
                        args: r,
                        blockNumber: n,
                        blockTag: o,
                        chainId: i,
                        functionName: s,
                        scopeKey: c
                    }) {
                        return [{
                            entity: "readContract",
                            account: e,
                            address: t,
                            args: r,
                            blockNumber: n,
                            blockTag: o,
                            chainId: i,
                            functionName: s,
                            scopeKey: c
                        }]
                    })({
                        account: r,
                        address: t,
                        args: n,
                        blockNumber: c ? A : void 0,
                        blockTag: i,
                        chainId: T,
                        functionName: p,
                        scopeKey: E
                    }), [r, t, n, A, i, c, T, p, E]),
                    F = u.useMemo(() => {
                        let r = !!(f && e && t && p);
                        return c && (r = !!(r && A)), r
                    }, [e, t, A, c, f, p]);
                return useInvalidateOnBlock({
                    chainId: T,
                    enabled: !!(F && S && !c),
                    queryKey: R
                }), useQuery(R, function({
                    abi: e
                }) {
                    return async ({
                        queryKey: [{
                            account: t,
                            address: r,
                            args: n,
                            blockNumber: o,
                            blockTag: i,
                            chainId: c,
                            functionName: u
                        }]
                    }) => {
                        if (!e) throw Error("abi is required");
                        if (!r) throw Error("address is required");
                        return await (0, s.a4)({
                            account: t,
                            address: r,
                            args: n,
                            blockNumber: o,
                            blockTag: i,
                            chainId: c,
                            abi: e,
                            functionName: u
                        }) ? ? null
                    }
                }({
                    abi: e
                }), {
                    cacheTime: l,
                    enabled: F,
                    isDataEqual: b,
                    keepPreviousData: y,
                    select: C,
                    staleTime: P,
                    structuralSharing: x,
                    suspense: k,
                    onError: g,
                    onSettled: v,
                    onSuccess: w
                })
            }

            function useContractReads({
                allowFailure: e,
                blockNumber: t,
                blockTag: r,
                cacheOnBlock: n = !1,
                cacheTime: o,
                contracts: i,
                enabled: c = !0,
                isDataEqual: l,
                keepPreviousData: d,
                onError: f,
                onSettled: p,
                onSuccess: b,
                scopeKey: y,
                select: g,
                staleTime: v,
                structuralSharing: w = (e, t) => (0, s.vZ)(e, t) ? e : (0, m.Q$)(e, t),
                suspense: E,
                watch: C
            } = {}) {
                let P = e ? ? !0,
                    {
                        data: x
                    } = useBlockNumber({
                        enabled: C || n,
                        watch: C
                    }),
                    k = useChainId(),
                    S = t ? ? x,
                    T = u.useMemo(() => (function({
                        allowFailure: e,
                        blockNumber: t,
                        blockTag: r,
                        chainId: n,
                        contracts: o,
                        scopeKey: i
                    }) {
                        return [{
                            entity: "readContracts",
                            allowFailure: e,
                            blockNumber: t,
                            blockTag: r,
                            chainId: n,
                            scopeKey: i,
                            contracts: (o ? ? []).map(({
                                address: e,
                                args: t,
                                chainId: r,
                                functionName: n
                            }) => ({
                                address: e,
                                args: t,
                                chainId: r,
                                functionName: n
                            }))
                        }]
                    })({
                        allowFailure: P,
                        blockNumber: n ? S : void 0,
                        blockTag: r,
                        chainId: k,
                        contracts: i,
                        scopeKey: y
                    }), [P, S, r, n, k, y, i]),
                    I = u.useMemo(() => {
                        let e = !!(c && i ? .every(e => e.abi && e.address && e.functionName));
                        return n && (e = !!(e && S)), e
                    }, [S, n, i, c]);
                useInvalidateOnBlock({
                    enabled: !!(I && C && !n),
                    queryKey: T
                });
                let A = (i ? ? []).map(({
                    abi: e
                }) => e);
                return useQuery(T, function({
                    abis: e
                }) {
                    return ({
                        queryKey: [{
                            allowFailure: t,
                            blockNumber: r,
                            blockTag: n,
                            contracts: o
                        }]
                    }) => {
                        let i = o.map((t, r) => ({ ...t,
                            abi: e[r]
                        }));
                        return (0, s.JH)({
                            allowFailure: t,
                            contracts: i,
                            blockNumber: r,
                            blockTag: n
                        })
                    }
                }({
                    abis: A
                }), {
                    cacheTime: o,
                    enabled: I,
                    isDataEqual: l,
                    keepPreviousData: d,
                    staleTime: v,
                    select: g,
                    structuralSharing: w,
                    suspense: E,
                    onError: f,
                    onSettled: p,
                    onSuccess: b
                })
            }
        },
        7342: function(e, t, r) {
            r.d(t, {
                XR: function() {
                    return subscribeWithSelector
                },
                tJ: function() {
                    return persist
                }
            });
            let subscribeWithSelector = e => (t, r, n) => {
                    let o = n.subscribe;
                    n.subscribe = (e, t, r) => {
                        let i = e;
                        if (t) {
                            let o = (null == r ? void 0 : r.equalityFn) || Object.is,
                                s = e(n.getState());
                            i = r => {
                                let n = e(r);
                                if (!o(s, n)) {
                                    let e = s;
                                    t(s = n, e)
                                }
                            }, (null == r ? void 0 : r.fireImmediately) && t(s, s)
                        }
                        return o(i)
                    };
                    let i = e(t, r, n);
                    return i
                },
                toThenable = e => t => {
                    try {
                        let r = e(t);
                        if (r instanceof Promise) return r;
                        return {
                            then: e => toThenable(e)(r),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => toThenable(t)(e)
                        }
                    }
                },
                oldImpl = (e, t) => (r, n, o) => {
                    let i, s, c = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        u = !1,
                        l = new Set,
                        d = new Set;
                    try {
                        i = c.getStorage()
                    } catch (e) {}
                    if (!i) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), r(...e)
                    }, n, o);
                    let f = toThenable(c.serialize),
                        setItem = () => {
                            let e;
                            let t = c.partialize({ ...n()
                                }),
                                r = f({
                                    state: t,
                                    version: c.version
                                }).then(e => i.setItem(c.name, e)).catch(t => {
                                    e = t
                                });
                            if (e) throw e;
                            return r
                        },
                        p = o.setState;
                    o.setState = (e, t) => {
                        p(e, t), setItem()
                    };
                    let m = e((...e) => {
                            r(...e), setItem()
                        }, n, o),
                        hydrate = () => {
                            var e;
                            if (!i) return;
                            u = !1, l.forEach(e => e(n()));
                            let t = (null == (e = c.onRehydrateStorage) ? void 0 : e.call(c, n())) || void 0;
                            return toThenable(i.getItem.bind(i))(c.name).then(e => {
                                if (e) return c.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(s = c.merge(e, null != (t = n()) ? t : m), !0), setItem()
                            }).then(() => {
                                null == t || t(s, void 0), u = !0, d.forEach(e => e(s))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return o.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            null == i || i.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => hydrate(),
                        hasHydrated: () => u,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (d.add(e), () => {
                            d.delete(e)
                        })
                    }, hydrate(), s || m
                },
                newImpl = (e, t) => (r, n, o) => {
                    let i, s = {
                            storage: function(e, t) {
                                let r;
                                try {
                                    r = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var n;
                                        let parse = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                                            o = null != (n = r.getItem(e)) ? n : null;
                                        return o instanceof Promise ? o.then(parse) : parse(o)
                                    },
                                    setItem: (e, n) => r.setItem(e, JSON.stringify(n, null == t ? void 0 : t.replacer)),
                                    removeItem: e => r.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        u = new Set,
                        l = new Set,
                        d = s.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), r(...e)
                    }, n, o);
                    let setItem = () => {
                            let e = s.partialize({ ...n()
                            });
                            return d.setItem(s.name, {
                                state: e,
                                version: s.version
                            })
                        },
                        f = o.setState;
                    o.setState = (e, t) => {
                        f(e, t), setItem()
                    };
                    let p = e((...e) => {
                            r(...e), setItem()
                        }, n, o),
                        hydrate = () => {
                            var e, t;
                            if (!d) return;
                            c = !1, u.forEach(e => {
                                var t;
                                return e(null != (t = n()) ? t : p)
                            });
                            let o = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = n()) ? e : p)) || void 0;
                            return toThenable(d.getItem.bind(d))(s.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return r(i = s.merge(e, null != (t = n()) ? t : p), !0), setItem()
                            }).then(() => {
                                null == o || o(i, void 0), i = n(), c = !0, l.forEach(e => e(i))
                            }).catch(e => {
                                null == o || o(void 0, e)
                            })
                        };
                    return o.persist = {
                        setOptions: e => {
                            s = { ...s,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(s.name)
                        },
                        getOptions: () => s,
                        rehydrate: () => hydrate(),
                        hasHydrated: () => c,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (l.add(e), () => {
                            l.delete(e)
                        })
                    }, s.skipHydration || hydrate(), i || p
                },
                persist = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), oldImpl(e, t)) : newImpl(e, t)
        },
        86174: function(e, t, r) {
            function shallow(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                if (e instanceof Map && t instanceof Map) {
                    if (e.size !== t.size) return !1;
                    for (let [r, n] of e)
                        if (!Object.is(n, t.get(r))) return !1;
                    return !0
                }
                if (e instanceof Set && t instanceof Set) {
                    if (e.size !== t.size) return !1;
                    for (let r of e)
                        if (!t.has(r)) return !1;
                    return !0
                }
                let r = Object.keys(e);
                if (r.length !== Object.keys(t).length) return !1;
                for (let n = 0; n < r.length; n++)
                    if (!Object.prototype.hasOwnProperty.call(t, r[n]) || !Object.is(e[r[n]], t[r[n]])) return !1;
                return !0
            }
            r.d(t, {
                X: function() {
                    return shallow
                },
                Z: function() {
                    return shallow$1
                }
            });
            var shallow$1 = (e, t) => (console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { shallow } from 'zustand/shallow'`."), shallow(e, t))
        },
        89365: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return createStore
                },
                Z: function() {
                    return vanilla
                }
            });
            let createStoreImpl = e => {
                    let t;
                    let r = new Set,
                        setState = (e, n) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != n ? n : "object" != typeof o) ? o : Object.assign({}, t, o), r.forEach(r => r(t, e))
                            }
                        },
                        getState = () => t,
                        n = {
                            setState,
                            getState,
                            subscribe: e => (r.add(e), () => r.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), r.clear()
                            }
                        };
                    return t = e(setState, getState, n), n
                },
                createStore = e => e ? createStoreImpl(e) : createStoreImpl;
            var vanilla = e => (console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."), createStore(e))
        }
    }
]);