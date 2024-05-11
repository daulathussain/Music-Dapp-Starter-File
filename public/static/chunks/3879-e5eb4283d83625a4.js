"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3879], {
        85306: function(e, t, r) {
            function extendedTypeof(e) {
                return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
            }

            function isObject(e) {
                return "object" === extendedTypeof(e)
            }

            function limitCloseReason(e, t) {
                return e.length < 124 ? e : t
            }

            function validateMessage(e) {
                if (!isObject(e)) throw Error(`Message is expected to be an object, but got ${extendedTypeof(e)}`);
                if (!e.type) throw Error("Message is missing the 'type' property");
                if ("string" != typeof e.type) throw Error(`Message is expects the 'type' property to be a string, but got ${extendedTypeof(e.type)}`);
                switch (e.type) {
                    case s.ConnectionInit:
                    case s.ConnectionAck:
                    case s.Ping:
                    case s.Pong:
                        if (null != e.payload && !isObject(e.payload)) throw Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
                        break;
                    case s.Subscribe:
                        if ("string" != typeof e.id) throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(e.id)}`);
                        if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
                        if (!isObject(e.payload)) throw Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${extendedTypeof(e.payload)}`);
                        if ("string" != typeof e.payload.query) throw Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${extendedTypeof(e.payload.query)}`);
                        if (null != e.payload.variables && !isObject(e.payload.variables)) throw Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${extendedTypeof(e.payload.variables)}`);
                        if (null != e.payload.operationName && "string" !== extendedTypeof(e.payload.operationName)) throw Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${extendedTypeof(e.payload.operationName)}`);
                        if (null != e.payload.extensions && !isObject(e.payload.extensions)) throw Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${extendedTypeof(e.payload.extensions)}`);
                        break;
                    case s.Next:
                        if ("string" != typeof e.id) throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(e.id)}`);
                        if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
                        if (!isObject(e.payload)) throw Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${extendedTypeof(e.payload)}`);
                        break;
                    case s.Error:
                        var t;
                        if ("string" != typeof e.id) throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(e.id)}`);
                        if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
                        if (!(Array.isArray(t = e.payload) && t.length > 0 && t.every(e => "message" in e))) throw Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
                        break;
                    case s.Complete:
                        if ("string" != typeof e.id) throw Error(`"${e.type}" message expects the 'id' property to be a string, but got ${extendedTypeof(e.id)}`);
                        if (!e.id) throw Error(`"${e.type}" message requires a non-empty 'id' property`);
                        break;
                    default:
                        throw Error(`Invalid message 'type' property "${e.type}"`)
                }
                return e
            }

            function stringifyMessage(e, t) {
                return validateMessage(e), JSON.stringify(e, t)
            }
            r.d(t, {
                l: function() {
                    return GraphQLReactWS
                }
            }), (o = i || (i = {}))[o.InternalServerError = 4500] = "InternalServerError", o[o.InternalClientError = 4005] = "InternalClientError", o[o.BadRequest = 4400] = "BadRequest", o[o.BadResponse = 4004] = "BadResponse", o[o.Unauthorized = 4401] = "Unauthorized", o[o.Forbidden = 4403] = "Forbidden", o[o.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", o[o.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", o[o.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", o[o.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", o[o.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests", (n = s || (s = {})).ConnectionInit = "connection_init", n.ConnectionAck = "connection_ack", n.Ping = "ping", n.Pong = "pong", n.Subscribe = "subscribe", n.Next = "next", n.Error = "error", n.Complete = "complete";
            var o, n, i, s, __await = function(e) {
                    return this instanceof __await ? (this.v = e, this) : new __await(e)
                },
                __asyncGenerator = function(e, t, r) {
                    if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                    var o, n = r.apply(e, t || []),
                        i = [];
                    return o = {}, verb("next"), verb("throw"), verb("return"), o[Symbol.asyncIterator] = function() {
                        return this
                    }, o;

                    function verb(e) {
                        n[e] && (o[e] = function(t) {
                            return new Promise(function(r, o) {
                                i.push([e, t, r, o]) > 1 || resume(e, t)
                            })
                        })
                    }

                    function resume(e, t) {
                        try {
                            var r;
                            (r = n[e](t)).value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(i[0][2], r)
                        } catch (e) {
                            settle(i[0][3], e)
                        }
                    }

                    function fulfill(e) {
                        resume("next", e)
                    }

                    function reject(e) {
                        resume("throw", e)
                    }

                    function settle(e, t) {
                        e(t), i.shift(), i.length && resume(i[0][0], i[0][1])
                    }
                };

            function isLikeCloseEvent(e) {
                return isObject(e) && "code" in e && "reason" in e
            }
            var a = r(97352),
                l = r(31265),
                c = r(62969),
                u = r(63558);

            function useStableCallback(e) {
                let t = function(e) {
                    let t = (0, a.useRef)(null);
                    return t.current = e, t
                }(e);
                return (0, a.useCallback)(function(...e) {
                    return t.current(...e)
                }, [])
            }
            var d = Object.defineProperty,
                __defNormalProp = (e, t, r) => t in e ? d(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                __publicField = (e, t, r) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, r), r);

            function GraphQLReactWS({
                graphqlWsOptions: e
            }) {
                let t = "undefined" == typeof window ? null : function(e) {
                    let t;
                    let {
                        url: r,
                        connectionParams: o,
                        lazy: n = !0,
                        onNonLazyError: a = console.error,
                        lazyCloseTimeout: l = 0,
                        keepAlive: c = 0,
                        disablePong: u,
                        connectionAckWaitTimeout: d = 0,
                        retryAttempts: p = 5,
                        retryWait: f = async function(e) {
                            let t = 1e3;
                            for (let r = 0; r < e; r++) t *= 2;
                            await new Promise(e => setTimeout(e, t + Math.floor(2700 * Math.random() + 300)))
                        },
                        shouldRetry: y = isLikeCloseEvent,
                        isFatalConnectionProblem: h,
                        on: b,
                        webSocketImpl: g,
                        generateID: m = function() {
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                                let t = 16 * Math.random() | 0;
                                return ("x" == e ? t : 3 & t | 8).toString(16)
                            })
                        },
                        jsonMessageReplacer: v,
                        jsonMessageReviver: w
                    } = e;
                    if (g) {
                        if (!("function" == typeof g && "constructor" in g && "CLOSED" in g && "CLOSING" in g && "CONNECTING" in g && "OPEN" in g)) throw Error("Invalid WebSocket implementation provided");
                        t = g
                    } else "undefined" != typeof WebSocket ? t = WebSocket : "undefined" != typeof global ? t = global.WebSocket || global.MozWebSocket : "undefined" != typeof window && (t = window.WebSocket || window.MozWebSocket);
                    if (!t) throw Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
                    let x = t,
                        E = (() => {
                            let e = (() => {
                                    let e = {};
                                    return {
                                        on: (t, r) => (e[t] = r, () => {
                                            delete e[t]
                                        }),
                                        emit(t) {
                                            var r;
                                            "id" in t && (null === (r = e[t.id]) || void 0 === r || r.call(e, t))
                                        }
                                    }
                                })(),
                                t = {
                                    connecting: (null == b ? void 0 : b.connecting) ? [b.connecting] : [],
                                    opened: (null == b ? void 0 : b.opened) ? [b.opened] : [],
                                    connected: (null == b ? void 0 : b.connected) ? [b.connected] : [],
                                    ping: (null == b ? void 0 : b.ping) ? [b.ping] : [],
                                    pong: (null == b ? void 0 : b.pong) ? [b.pong] : [],
                                    message: (null == b ? void 0 : b.message) ? [e.emit, b.message] : [e.emit],
                                    closed: (null == b ? void 0 : b.closed) ? [b.closed] : [],
                                    error: (null == b ? void 0 : b.error) ? [b.error] : []
                                };
                            return {
                                onMessage: e.on,
                                on(e, r) {
                                    let o = t[e];
                                    return o.push(r), () => {
                                        o.splice(o.indexOf(r), 1)
                                    }
                                },
                                emit(e, ...r) {
                                    for (let o of [...t[e]]) o(...r)
                                }
                            }
                        })();

                    function errorOrClosed(e) {
                        let t = [E.on("error", r => {
                            t.forEach(e => e()), e(r)
                        }), E.on("closed", r => {
                            t.forEach(e => e()), e(r)
                        })]
                    }
                    let C, S = 0,
                        _, T = !1,
                        k = 0,
                        N = !1;
                    async function connect() {
                        clearTimeout(_);
                        let [e, t] = await (null != C ? C : C = new Promise((e, t) => (async () => {
                            let n, a;
                            if (T) {
                                if (await f(k), !S) return C = void 0, t({
                                    code: 1e3,
                                    reason: "All Subscriptions Gone"
                                });
                                k++
                            }
                            E.emit("connecting");
                            let l = new x("function" == typeof r ? await r() : r, "graphql-transport-ws");

                            function enqueuePing() {
                                isFinite(c) && c > 0 && (clearTimeout(a), a = setTimeout(() => {
                                    l.readyState === x.OPEN && (l.send(stringifyMessage({
                                        type: s.Ping
                                    })), E.emit("ping", !1, void 0))
                                }, c))
                            }
                            errorOrClosed(e => {
                                C = void 0, clearTimeout(n), clearTimeout(a), t(e), isLikeCloseEvent(e) && 4499 === e.code && (l.close(4499, "Terminated"), l.onerror = null, l.onclose = null)
                            }), l.onerror = e => E.emit("error", e), l.onclose = e => E.emit("closed", e), l.onopen = async () => {
                                try {
                                    E.emit("opened", l);
                                    let e = "function" == typeof o ? await o() : o;
                                    if (l.readyState !== x.OPEN) return;
                                    l.send(stringifyMessage(e ? {
                                        type: s.ConnectionInit,
                                        payload: e
                                    } : {
                                        type: s.ConnectionInit
                                    }, v)), isFinite(d) && d > 0 && (n = setTimeout(() => {
                                        l.close(i.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout")
                                    }, d)), enqueuePing()
                                } catch (e) {
                                    E.emit("error", e), l.close(i.InternalClientError, limitCloseReason(e instanceof Error ? e.message : Error(e).message, "Internal client error"))
                                }
                            };
                            let p = !1;
                            l.onmessage = ({
                                data: t
                            }) => {
                                try {
                                    let r = validateMessage("string" == typeof t ? JSON.parse(t, w) : t);
                                    if (E.emit("message", r), "ping" === r.type || "pong" === r.type) {
                                        E.emit(r.type, !0, r.payload), "pong" === r.type ? enqueuePing() : u || (l.send(stringifyMessage(r.payload ? {
                                            type: s.Pong,
                                            payload: r.payload
                                        } : {
                                            type: s.Pong
                                        })), E.emit("pong", !1, r.payload));
                                        return
                                    }
                                    if (p) return;
                                    if (r.type !== s.ConnectionAck) throw Error(`First message cannot be of type ${r.type}`);
                                    clearTimeout(n), p = !0, E.emit("connected", l, r.payload), T = !1, k = 0, e([l, new Promise((e, t) => errorOrClosed(t))])
                                } catch (e) {
                                    l.onmessage = null, E.emit("error", e), l.close(i.BadResponse, limitCloseReason(e instanceof Error ? e.message : Error(e).message, "Bad response"))
                                }
                            }
                        })()));
                        e.readyState === x.CLOSING && await t;
                        let release = () => {},
                            n = new Promise(e => release = e);
                        return [e, release, Promise.race([n.then(() => {
                            if (!S) {
                                let complete = () => e.close(1e3, "Normal Closure");
                                isFinite(l) && l > 0 ? _ = setTimeout(() => {
                                    e.readyState === x.OPEN && complete()
                                }, l) : complete()
                            }
                        }), t])]
                    }

                    function shouldRetryConnectOrThrow(e) {
                        var t;
                        if (isLikeCloseEvent(e) && (![1e3, 1001, 1006, 1005, 1012, 1013, 1013].includes(t = e.code) && t >= 1e3 && t <= 1999 || [i.InternalServerError, i.InternalClientError, i.BadRequest, i.BadResponse, i.Unauthorized, i.SubprotocolNotAcceptable, i.SubscriberAlreadyExists, i.TooManyInitialisationRequests].includes(e.code))) throw e;
                        if (N) return !1;
                        if (isLikeCloseEvent(e) && 1e3 === e.code) return S > 0;
                        if (!p || k >= p || !y(e) || (null == h ? void 0 : h(e))) throw e;
                        return T = !0
                    }
                    return n || (async () => {
                        for (S++;;) try {
                            let [, , e] = await connect();
                            await e
                        } catch (e) {
                            try {
                                if (!shouldRetryConnectOrThrow(e)) return
                            } catch (e) {
                                return null == a ? void 0 : a(e)
                            }
                        }
                    })(), {
                        on: E.on,
                        subscribe(e, t) {
                            let r = m(e),
                                o = !1,
                                n = !1,
                                releaser = () => {
                                    S--, o = !0
                                };
                            return (async () => {
                                for (S++;;) try {
                                    let [i, a, l] = await connect();
                                    if (o) return a();
                                    let c = E.onMessage(r, e => {
                                        switch (e.type) {
                                            case s.Next:
                                                t.next(e.payload);
                                                return;
                                            case s.Error:
                                                n = !0, o = !0, t.error(e.payload), releaser();
                                                return;
                                            case s.Complete:
                                                o = !0, releaser();
                                                return
                                        }
                                    });
                                    i.send(stringifyMessage({
                                        id: r,
                                        type: s.Subscribe,
                                        payload: e
                                    }, v)), releaser = () => {
                                        o || i.readyState !== x.OPEN || i.send(stringifyMessage({
                                            id: r,
                                            type: s.Complete
                                        }, v)), S--, o = !0, a()
                                    }, await l.finally(c);
                                    return
                                } catch (e) {
                                    if (!shouldRetryConnectOrThrow(e)) return
                                }
                            })().then(() => {
                                n || t.complete()
                            }).catch(e => {
                                t.error(e)
                            }), () => {
                                o || releaser()
                            }
                        },
                        iterate(e) {
                            let t = [],
                                r = {
                                    done: !1,
                                    error: null,
                                    resolve: () => {}
                                },
                                o = this.subscribe(e, {
                                    next(e) {
                                        t.push(e), r.resolve()
                                    },
                                    error(e) {
                                        r.done = !0, r.error = e, r.resolve()
                                    },
                                    complete() {
                                        r.done = !0, r.resolve()
                                    }
                                }),
                                n = function() {
                                    return __asyncGenerator(this, arguments, function*() {
                                        for (;;) {
                                            for (t.length || (yield __await(new Promise(e => r.resolve = e))); t.length;) yield yield __await(t.shift());
                                            if (r.error) throw r.error;
                                            if (r.done) return yield __await(void 0)
                                        }
                                    })
                                }();
                            return n.throw = async e => (r.done || (r.done = !0, r.error = e, r.resolve()), {
                                done: !0,
                                value: void 0
                            }), n.return = async () => (o(), {
                                done: !0,
                                value: void 0
                            }), n
                        },
                        async dispose() {
                            if (N = !0, C) {
                                let [e] = await C;
                                e.close(1e3, "Normal Closure")
                            }
                        },
                        terminate() {
                            C && E.emit("closed", {
                                code: 4499,
                                reason: "Terminated",
                                wasClean: !1
                            })
                        }
                    }
                }(e);
                let ListenerGenerator = class ListenerGenerator {
                    constructor({
                        cleanup: e
                    }) {
                        __publicField(this, "done", !1), __publicField(this, "throwMe", null), __publicField(this, "pending", []), __publicField(this, "cleanup"), __publicField(this, "deferred", null), this.cleanup = e
                    }
                    dispose() {
                        var e;
                        this.done || (this.done = !0, null == (e = this.cleanup) || e.call(this), this.cleanup = null)
                    }
                    resolveNext(e) {
                        var t;
                        this.done || (this.pending.push(e), null == (t = this.deferred) || t.resolve(!1))
                    }
                    resolveCompleted() {
                        var e;
                        this.done || (this.done = !0, null == (e = this.deferred) || e.resolve(!0), this.dispose())
                    }
                    reject(e) {
                        var t;
                        this.done || (this.throwMe = e, null == (t = this.deferred) || t.reject(e), this.dispose())
                    }[Symbol.asyncIterator]() {
                        return this
                    }
                    async next() {
                        if (this.done) return {
                            done: !0,
                            value: void 0
                        };
                        if (this.throwMe) throw this.throwMe;
                        if (this.pending.length) return {
                            value: this.pending.shift(),
                            done: !1
                        };
                        let e = await new Promise((e, t) => this.deferred = {
                            resolve: e,
                            reject: t
                        });
                        return e ? {
                            done: !0,
                            value: void 0
                        } : {
                            value: this.pending.shift(),
                            done: !1
                        }
                    }
                    async
                    throw (e) {
                        throw e
                    }
                    async
                    return () {
                        return this.dispose(), {
                            value: void 0,
                            done: !0
                        }
                    }
                };
                let BroadcastAsyncGenerator = class BroadcastAsyncGenerator {
                    constructor({
                        generator: e,
                        cleanupBroadcaster: t
                    }) {
                        __publicField(this, "generator"), __publicField(this, "listeners", new Set), __publicField(this, "cleanupBroadcaster"), __publicField(this, "disposed", !1), this.generator = e, this.cleanupBroadcaster = t, this.broadcast().catch(console.error)
                    }
                    async broadcast() {
                        try {
                            for await (let e of this.generator) for (let t of this.listeners) t.resolveNext(e);
                            for (let e of this.listeners) e.resolveCompleted()
                        } catch (e) {
                            for (let t of this.listeners) t.reject(e)
                        }
                    }
                    removeListener(e) {
                        this.listeners.delete(e), 0 === this.listeners.size && this.cleanupBroadcaster()
                    }
                    subscribe(e) {
                        if (this.disposed) throw Error("Generator has already been disposed!");
                        let cleanupListener = () => {
                                t.resolveCompleted(), this.removeListener(t), e.abortController.abort()
                            },
                            t = new ListenerGenerator({
                                cleanup: cleanupListener
                            });
                        return e.abortSignal.addEventListener("abort", cleanupListener), this.listeners.add(t), t
                    }
                };
                let r = {},
                    o = new Map;

                function subscribe({
                    query: e,
                    variables: n
                }, i) {
                    let s;
                    if (!t) return null;
                    let a = {
                            query: e,
                            variables: n
                        },
                        l = JSON.stringify(a),
                        c = o.get(l);
                    if (c) s = c;
                    else {
                        let e = new Set;
                        s = {
                            subscription: function({
                                payload: e,
                                onDispose: o
                            }) {
                                if (!t) throw Error("graphql-ws client not available");
                                let {
                                    query: n,
                                    variables: i
                                } = e;

                                function handleDispose() {
                                    a(), o()
                                }
                                let s = new ListenerGenerator({
                                        cleanup: handleDispose
                                    }),
                                    a = t.subscribe(e, {
                                        next: e => {
                                            s.resolveNext(e);
                                            let t = r[n];
                                            if (t && e.data)
                                                for (let r of t) try {
                                                    Promise.all([r({
                                                        operation: n,
                                                        result: { ...e,
                                                            data: e.data
                                                        },
                                                        variables: i
                                                    })]).catch(() => null)
                                                } catch (e) {}
                                        },
                                        error: e => {
                                            s.reject(e), cleanupGenerator()
                                        },
                                        complete: () => {
                                            s.resolveCompleted(), cleanupGenerator()
                                        }
                                    });

                                function cleanupGenerator() {
                                    handleDispose(), s.resolveCompleted()
                                }
                                let l = new BroadcastAsyncGenerator({
                                    generator: s,
                                    cleanupBroadcaster: cleanupGenerator
                                });
                                return {
                                    subscribe: e => l.subscribe(e),
                                    cleanup: cleanupGenerator
                                }
                            }({
                                payload: a,
                                onDispose() {
                                    for (let t of (o.delete(l), e)) t.abort();
                                    e.clear()
                                }
                            }),
                            subscriptionsControllers: e
                        }, o.set(l, s)
                    }
                    let {
                        subscriptionsControllers: u,
                        subscription: {
                            cleanup: d,
                            subscribe: p
                        }
                    } = s, f = new AbortController, y = f.signal;
                    f.signal.addEventListener("abort", function cleanupSubscriptionController() {
                        f.signal.removeEventListener("abort", cleanupSubscriptionController), u.delete(f), 0 === u.size && d()
                    }), u.add(f);
                    let h = i({
                        iterator: p({
                            abortSignal: y,
                            abortController: f
                        }),
                        abortController: f,
                        abortSignal: y
                    }).catch(e => (console.error(e), null));
                    return h.finally(() => f.abort()), {
                        subscription: h,
                        abortController: f,
                        abortSignal: y
                    }
                }
                let n = new Map;

                function getSubscriptionStore({
                    query: e,
                    variables: t,
                    initialData: r = null
                }) {
                    let o = e + JSON.stringify(t),
                        i = n.get(o);
                    if (i) return i;
                    let s = (0, l.sj)({
                        data: r,
                        error: null,
                        ref: (0, l.iH)({
                            current: r
                        })
                    });
                    return n.set(o, s), s
                }
                return {
                    client: t,
                    subscribe,
                    useSubscription: function({
                        query: e,
                        onData: t,
                        onError: r,
                        variables: o,
                        initialData: n = null,
                        enabled: i = !0
                    }) {
                        let s = getSubscriptionStore({
                            query: e,
                            variables: o,
                            initialData: n
                        });
                        n && !s.data && (s.data = n, s.ref.current = n);
                        let {
                            data: l,
                            error: d
                        } = (0, u.R)(s), p = useStableCallback(e => {
                            if (t) try {
                                Promise.all([t(e)]).catch(console.error)
                            } catch (e) {
                                console.error(e)
                            }
                        }), f = useStableCallback(e => {
                            if (r) try {
                                Promise.all([r(e)]).catch(console.error)
                            } catch (e) {
                                console.error(e)
                            }
                        }), y = function(e) {
                            let t = (0, a.useRef)(e);
                            return (0, a.useMemo)(() => {
                                let r = t.current;
                                return e === r || c(e, r) ? r : (t.current = e, e)
                            }, [e])
                        }(o);
                        return (0, a.useEffect)(() => {
                            if ("undefined" == typeof window || !1 === y || !1 === i) return;
                            let t = subscribe({
                                query: e,
                                variables: y
                            }, async function({
                                iterator: e
                            }) {
                                for await (let t of e) {
                                    if (t.data) {
                                        let e = { ...t,
                                            data: t.data
                                        };
                                        s.ref.current !== t && (s.data = e, !t.errors && s.error && (s.error = null)), p(e)
                                    }
                                    if (t.errors) {
                                        let e = { ...t,
                                            errors: t.errors
                                        };
                                        s.ref.current !== t && (s.error = e), f(e)
                                    }
                                    s.ref.current = t
                                }
                            });
                            if (t) return () => {
                                t.abortController.abort()
                            }
                        }, [y, i, e]), {
                            data: l,
                            error: d,
                            store: s
                        }
                    },
                    subscriptionStores: n,
                    setSubscriptionData: function({
                        query: e,
                        variables: t
                    }, r) {
                        let o = getSubscriptionStore({
                            query: e,
                            variables: t,
                            initialData: r
                        });
                        o.ref.current !== r && (o.data = r, o.ref.current = r)
                    },
                    getSubscriptionStore,
                    Effects: {
                        onCompleted(e, t) {
                            let o = r[e] || (r[e] = new Set);
                            return o.add(t),
                                function() {
                                    o.delete(t), 0 === o.size && (r[e] = null)
                                }
                        }
                    }
                }
            }
        },
        22248: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return lodash_es_debounce
                }
            });
            var o = r(61804),
                n = r(86572),
                lodash_es_now = function() {
                    return n.Z.Date.now()
                },
                i = r(69056),
                s = Math.max,
                a = Math.min,
                lodash_es_debounce = function(e, t, r) {
                    var n, l, c, u, d, p, f = 0,
                        y = !1,
                        h = !1,
                        b = !0;
                    if ("function" != typeof e) throw TypeError("Expected a function");

                    function invokeFunc(t) {
                        var r = n,
                            o = l;
                        return n = l = void 0, f = t, u = e.apply(o, r)
                    }

                    function shouldInvoke(e) {
                        var r = e - p,
                            o = e - f;
                        return void 0 === p || r >= t || r < 0 || h && o >= c
                    }

                    function timerExpired() {
                        var e, r, o, n = lodash_es_now();
                        if (shouldInvoke(n)) return trailingEdge(n);
                        d = setTimeout(timerExpired, (e = n - p, r = n - f, o = t - e, h ? a(o, c - r) : o))
                    }

                    function trailingEdge(e) {
                        return (d = void 0, b && n) ? invokeFunc(e) : (n = l = void 0, u)
                    }

                    function debounced() {
                        var e, r = lodash_es_now(),
                            o = shouldInvoke(r);
                        if (n = arguments, l = this, p = r, o) {
                            if (void 0 === d) return f = e = p, d = setTimeout(timerExpired, t), y ? invokeFunc(e) : u;
                            if (h) return clearTimeout(d), d = setTimeout(timerExpired, t), invokeFunc(p)
                        }
                        return void 0 === d && (d = setTimeout(timerExpired, t)), u
                    }
                    return t = (0, i.Z)(t) || 0, (0, o.Z)(r) && (y = !!r.leading, c = (h = "maxWait" in r) ? s((0, i.Z)(r.maxWait) || 0, t) : c, b = "trailing" in r ? !!r.trailing : b), debounced.cancel = function() {
                        void 0 !== d && clearTimeout(d), f = 0, n = p = l = d = void 0
                    }, debounced.flush = function() {
                        return void 0 === d ? u : trailingEdge(lodash_es_now())
                    }, debounced
                }
        },
        85740: function(e, t, r) {
            var o = r(22248),
                n = r(61804);
            t.Z = function(e, t, r) {
                var i = !0,
                    s = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return (0, n.Z)(r) && (i = "leading" in r ? !!r.leading : i, s = "trailing" in r ? !!r.trailing : s), (0, o.Z)(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: s
                })
            }
        }
    }
]);