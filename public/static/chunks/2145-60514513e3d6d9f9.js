"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2145], {
        12527: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return $e42e1063c40fb3ef$export$b9ecd428b558ff10
                }
            });

            function $e42e1063c40fb3ef$export$b9ecd428b558ff10(e, n, {
                checkForDefaultPrevented: t = !0
            } = {}) {
                return function(r) {
                    if (null == e || e(r), !1 === t || !r.defaultPrevented) return null == n ? void 0 : n(r)
                }
            }
        },
        8e4: function(e, n, t) {
            t.d(n, {
                F: function() {
                    return $6ed0406888f73fc4$export$43e446d32b3d21af
                },
                e: function() {
                    return $6ed0406888f73fc4$export$c7b2cbe3552a0d05
                }
            });
            var r = t(97352);

            function $6ed0406888f73fc4$export$43e446d32b3d21af(...e) {
                return n => e.forEach(e => {
                    "function" == typeof e ? e(n) : null != e && (e.current = n)
                })
            }

            function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e) {
                return (0, r.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e), e)
            }
        },
        89849: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return $c512c27ab02ef895$export$50c7b4e9d9f19c1
                },
                k: function() {
                    return $c512c27ab02ef895$export$fd42f52fd3ae1109
                }
            });
            var r = t(97352);

            function $c512c27ab02ef895$export$fd42f52fd3ae1109(e, n) {
                let t = (0, r.createContext)(n);

                function Provider(e) {
                    let {
                        children: n,
                        ...o
                    } = e, i = (0, r.useMemo)(() => o, Object.values(o));
                    return (0, r.createElement)(t.Provider, {
                        value: i
                    }, n)
                }
                return Provider.displayName = e + "Provider", [Provider, function(o) {
                    let i = (0, r.useContext)(t);
                    if (i) return i;
                    if (void 0 !== n) return n;
                    throw Error(`\`${o}\` must be used within \`${e}\``)
                }]
            }

            function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e, n = []) {
                let t = [],
                    createScope = () => {
                        let n = t.map(e => (0, r.createContext)(e));
                        return function(t) {
                            let o = (null == t ? void 0 : t[e]) || n;
                            return (0, r.useMemo)(() => ({
                                [`__scope${e}`]: { ...t,
                                    [e]: o
                                }
                            }), [t, o])
                        }
                    };
                return createScope.scopeName = e, [function(n, o) {
                    let i = (0, r.createContext)(o),
                        u = t.length;

                    function Provider(n) {
                        let {
                            scope: t,
                            children: o,
                            ...a
                        } = n, l = (null == t ? void 0 : t[e][u]) || i, c = (0, r.useMemo)(() => a, Object.values(a));
                        return (0, r.createElement)(l.Provider, {
                            value: c
                        }, o)
                    }
                    return t = [...t, o], Provider.displayName = n + "Provider", [Provider, function(t, a) {
                        let l = (null == a ? void 0 : a[e][u]) || i,
                            c = (0, r.useContext)(l);
                        if (c) return c;
                        if (void 0 !== o) return o;
                        throw Error(`\`${t}\` must be used within \`${n}\``)
                    }]
                }, function(...e) {
                    let n = e[0];
                    if (1 === e.length) return n;
                    let createScope1 = () => {
                        let t = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = t.reduce((n, {
                                useScope: t,
                                scopeName: r
                            }) => {
                                let o = t(e),
                                    i = o[`__scope${r}`];
                                return { ...n,
                                    ...i
                                }
                            }, {});
                            return (0, r.useMemo)(() => ({
                                [`__scope${n.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return createScope1.scopeName = n.scopeName, createScope1
                }(createScope, ...n)]
            }
        },
        43492: function(e, n, t) {
            let r;
            t.d(n, {
                XB: function() {
                    return f
                }
            });
            var o = t(84477),
                i = t(97352),
                u = t(12527),
                a = t(26815),
                l = t(8e4),
                c = t(90106);
            let d = "dismissableLayer.update",
                s = (0, i.createContext)({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                f = (0, i.forwardRef)((e, n) => {
                    var t;
                    let {
                        disableOutsidePointerEvents: f = !1,
                        onEscapeKeyDown: v,
                        onPointerDownOutside: p,
                        onFocusOutside: $,
                        onInteractOutside: m,
                        onDismiss: b,
                        ...h
                    } = e, E = (0, i.useContext)(s), [y, N] = (0, i.useState)(null), w = null !== (t = null == y ? void 0 : y.ownerDocument) && void 0 !== t ? t : null == globalThis ? void 0 : globalThis.document, [, P] = (0, i.useState)({}), C = (0, l.e)(n, e => N(e)), g = Array.from(E.layers), [x] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), D = g.indexOf(x), A = y ? g.indexOf(y) : -1, O = E.layersWithOutsidePointerEventsDisabled.size > 0, S = A >= D, T = function(e, n = null == globalThis ? void 0 : globalThis.document) {
                        let t = (0, c.W)(e),
                            r = (0, i.useRef)(!1),
                            o = (0, i.useRef)(() => {});
                        return (0, i.useEffect)(() => {
                            let handlePointerDown = e => {
                                    if (e.target && !r.current) {
                                        let r = {
                                            originalEvent: e
                                        };

                                        function handleAndDispatchPointerDownOutsideEvent() {
                                            $5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside", t, r, {
                                                discrete: !0
                                            })
                                        }
                                        "touch" === e.pointerType ? (n.removeEventListener("click", o.current), o.current = handleAndDispatchPointerDownOutsideEvent, n.addEventListener("click", o.current, {
                                            once: !0
                                        })) : handleAndDispatchPointerDownOutsideEvent()
                                    }
                                    r.current = !1
                                },
                                e = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", handlePointerDown)
                                }, 0);
                            return () => {
                                window.clearTimeout(e), n.removeEventListener("pointerdown", handlePointerDown), n.removeEventListener("click", o.current)
                            }
                        }, [n, t]), {
                            onPointerDownCapture: () => r.current = !0
                        }
                    }(e => {
                        let n = e.target,
                            t = [...E.branches].some(e => e.contains(n));
                        !S || t || (null == p || p(e), null == m || m(e), e.defaultPrevented || null == b || b())
                    }, w), L = function(e, n = null == globalThis ? void 0 : globalThis.document) {
                        let t = (0, c.W)(e),
                            r = (0, i.useRef)(!1);
                        return (0, i.useEffect)(() => {
                            let handleFocus = e => {
                                e.target && !r.current && $5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside", t, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", handleFocus), () => n.removeEventListener("focusin", handleFocus)
                        }, [n, t]), {
                            onFocusCapture: () => r.current = !0,
                            onBlurCapture: () => r.current = !1
                        }
                    }(e => {
                        let n = e.target,
                            t = [...E.branches].some(e => e.contains(n));
                        t || (null == $ || $(e), null == m || m(e), e.defaultPrevented || null == b || b())
                    }, w);
                    return ! function(e, n = null == globalThis ? void 0 : globalThis.document) {
                        let t = (0, c.W)(e);
                        (0, i.useEffect)(() => {
                            let handleKeyDown = e => {
                                "Escape" === e.key && t(e)
                            };
                            return n.addEventListener("keydown", handleKeyDown), () => n.removeEventListener("keydown", handleKeyDown)
                        }, [t, n])
                    }(e => {
                        let n = A === E.layers.size - 1;
                        n && (null == v || v(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, w), (0, i.useEffect)(() => {
                        if (y) return f && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = w.body.style.pointerEvents, w.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(y)), E.layers.add(y), $5cb92bef7577960e$var$dispatchUpdate(), () => {
                            f && 1 === E.layersWithOutsidePointerEventsDisabled.size && (w.body.style.pointerEvents = r)
                        }
                    }, [y, w, f, E]), (0, i.useEffect)(() => () => {
                        y && (E.layers.delete(y), E.layersWithOutsidePointerEventsDisabled.delete(y), $5cb92bef7577960e$var$dispatchUpdate())
                    }, [y, E]), (0, i.useEffect)(() => {
                        let handleUpdate = () => P({});
                        return document.addEventListener(d, handleUpdate), () => document.removeEventListener(d, handleUpdate)
                    }, []), (0, i.createElement)(a.WV.div, (0, o.Z)({}, h, {
                        ref: C,
                        style: {
                            pointerEvents: O ? S ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, u.M)(e.onFocusCapture, L.onFocusCapture),
                        onBlurCapture: (0, u.M)(e.onBlurCapture, L.onBlurCapture),
                        onPointerDownCapture: (0, u.M)(e.onPointerDownCapture, T.onPointerDownCapture)
                    }))
                });

            function $5cb92bef7577960e$var$dispatchUpdate() {
                let e = new CustomEvent(d);
                document.dispatchEvent(e)
            }

            function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(e, n, t, {
                discrete: r
            }) {
                let o = t.originalEvent.target,
                    i = new CustomEvent(e, {
                        bubbles: !1,
                        cancelable: !0,
                        detail: t
                    });
                n && o.addEventListener(e, n, {
                    once: !0
                }), r ? (0, a.jH)(o, i) : o.dispatchEvent(i)
            }
        },
        65399: function(e, n, t) {
            t.d(n, {
                M: function() {
                    return $1746a345f3d73bb7$export$f680877a34711e37
                }
            });
            var r, o = t(97352),
                i = t(89744);
            let u = (r || (r = t.t(o, 2)))["useId".toString()] || (() => void 0),
                a = 0;

            function $1746a345f3d73bb7$export$f680877a34711e37(e) {
                let [n, t] = o.useState(u());
                return (0, i.b)(() => {
                    e || t(e => null != e ? e : String(a++))
                }, [e]), e || (n ? `radix-${n}` : "")
            }
        },
        51119: function(e, n, t) {
            t.d(n, {
                h: function() {
                    return a
                }
            });
            var r = t(84477),
                o = t(97352),
                i = t(64353),
                u = t(26815);
            let a = (0, o.forwardRef)((e, n) => {
                var t;
                let {
                    container: a = null == globalThis ? void 0 : null === (t = globalThis.document) || void 0 === t ? void 0 : t.body,
                    ...l
                } = e;
                return a ? i.createPortal((0, o.createElement)(u.WV.div, (0, r.Z)({}, l, {
                    ref: n
                })), a) : null
            })
        },
        21155: function(e, n, t) {
            t.d(n, {
                z: function() {
                    return $921a889cee6df7e8$export$99c2b779aa4e8b8b
                }
            });
            var r = t(97352),
                o = t(64353),
                i = t(8e4),
                u = t(89744);
            let $921a889cee6df7e8$export$99c2b779aa4e8b8b = e => {
                let {
                    present: n,
                    children: t
                } = e, a = function(e) {
                    var n;
                    let [t, i] = (0, r.useState)(), a = (0, r.useRef)({}), l = (0, r.useRef)(e), c = (0, r.useRef)("none"), d = e ? "mounted" : "unmounted", [s, f] = (n = {
                        mounted: {
                            UNMOUNT: "unmounted",
                            ANIMATION_OUT: "unmountSuspended"
                        },
                        unmountSuspended: {
                            MOUNT: "mounted",
                            ANIMATION_END: "unmounted"
                        },
                        unmounted: {
                            MOUNT: "mounted"
                        }
                    }, (0, r.useReducer)((e, t) => {
                        let r = n[e][t];
                        return null != r ? r : e
                    }, d));
                    return (0, r.useEffect)(() => {
                        let e = $921a889cee6df7e8$var$getAnimationName(a.current);
                        c.current = "mounted" === s ? e : "none"
                    }, [s]), (0, u.b)(() => {
                        let n = a.current,
                            t = l.current,
                            r = t !== e;
                        if (r) {
                            let r = c.current,
                                o = $921a889cee6df7e8$var$getAnimationName(n);
                            e ? f("MOUNT") : "none" === o || (null == n ? void 0 : n.display) === "none" ? f("UNMOUNT") : t && r !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), l.current = e
                        }
                    }, [e, f]), (0, u.b)(() => {
                        if (t) {
                            let handleAnimationEnd = e => {
                                    let n = $921a889cee6df7e8$var$getAnimationName(a.current),
                                        r = n.includes(e.animationName);
                                    e.target === t && r && (0, o.flushSync)(() => f("ANIMATION_END"))
                                },
                                handleAnimationStart = e => {
                                    e.target === t && (c.current = $921a889cee6df7e8$var$getAnimationName(a.current))
                                };
                            return t.addEventListener("animationstart", handleAnimationStart), t.addEventListener("animationcancel", handleAnimationEnd), t.addEventListener("animationend", handleAnimationEnd), () => {
                                t.removeEventListener("animationstart", handleAnimationStart), t.removeEventListener("animationcancel", handleAnimationEnd), t.removeEventListener("animationend", handleAnimationEnd)
                            }
                        }
                        f("ANIMATION_END")
                    }, [t, f]), {
                        isPresent: ["mounted", "unmountSuspended"].includes(s),
                        ref: (0, r.useCallback)(e => {
                            e && (a.current = getComputedStyle(e)), i(e)
                        }, [])
                    }
                }(n), l = "function" == typeof t ? t({
                    present: a.isPresent
                }) : r.Children.only(t), c = (0, i.e)(a.ref, l.ref), d = "function" == typeof t;
                return d || a.isPresent ? (0, r.cloneElement)(l, {
                    ref: c
                }) : null
            };

            function $921a889cee6df7e8$var$getAnimationName(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence"
        },
        26815: function(e, n, t) {
            t.d(n, {
                WV: function() {
                    return a
                },
                jH: function() {
                    return $8927f6f2acc4f386$export$6d1a0317bde7de7f
                }
            });
            var r = t(84477),
                o = t(97352),
                i = t(64353),
                u = t(66754);
            let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, n) => {
                let t = (0, o.forwardRef)((e, t) => {
                    let {
                        asChild: i,
                        ...a
                    } = e, l = i ? u.g7 : n;
                    return (0, o.useEffect)(() => {
                        window[Symbol.for("radix-ui")] = !0
                    }, []), (0, o.createElement)(l, (0, r.Z)({}, a, {
                        ref: t
                    }))
                });
                return t.displayName = `Primitive.${n}`, { ...e,
                    [n]: t
                }
            }, {});

            function $8927f6f2acc4f386$export$6d1a0317bde7de7f(e, n) {
                e && (0, i.flushSync)(() => e.dispatchEvent(n))
            }
        },
        66754: function(e, n, t) {
            t.d(n, {
                A4: function() {
                    return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
                },
                g7: function() {
                    return u
                }
            });
            var r = t(84477),
                o = t(97352),
                i = t(8e4);
            let u = (0, o.forwardRef)((e, n) => {
                let {
                    children: t,
                    ...i
                } = e, u = o.Children.toArray(t), l = u.find($5e63c961fc1ce211$var$isSlottable);
                if (l) {
                    let e = l.props.children,
                        t = u.map(n => n !== l ? n : o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null);
                    return (0, o.createElement)(a, (0, r.Z)({}, i, {
                        ref: n
                    }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
                }
                return (0, o.createElement)(a, (0, r.Z)({}, i, {
                    ref: n
                }), t)
            });
            u.displayName = "Slot";
            let a = (0, o.forwardRef)((e, n) => {
                let {
                    children: t,
                    ...r
                } = e;
                return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, { ... function(e, n) {
                        let t = { ...n
                        };
                        for (let r in n) {
                            let o = e[r],
                                i = n[r],
                                u = /^on[A-Z]/.test(r);
                            u ? o && i ? t[r] = (...e) => {
                                i(...e), o(...e)
                            } : o && (t[r] = o) : "style" === r ? t[r] = { ...o,
                                ...i
                            } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                        }
                        return { ...e,
                            ...t
                        }
                    }(r, t.props),
                    ref: n ? (0, i.F)(n, t.ref) : t.ref
                }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
            });
            a.displayName = "SlotClone";
            let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({
                children: e
            }) => (0, o.createElement)(o.Fragment, null, e);

            function $5e63c961fc1ce211$var$isSlottable(e) {
                return (0, o.isValidElement)(e) && e.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
            }
        },
        90106: function(e, n, t) {
            t.d(n, {
                W: function() {
                    return $b1b2314f5f9a1d84$export$25bec8c6f54ee79a
                }
            });
            var r = t(97352);

            function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e) {
                let n = (0, r.useRef)(e);
                return (0, r.useEffect)(() => {
                    n.current = e
                }), (0, r.useMemo)(() => (...e) => {
                    var t;
                    return null === (t = n.current) || void 0 === t ? void 0 : t.call(n, ...e)
                }, [])
            }
        },
        58020: function(e, n, t) {
            t.d(n, {
                T: function() {
                    return $71cd76cc60e0454e$export$6f32135080cb4c3
                }
            });
            var r = t(97352),
                o = t(90106);

            function $71cd76cc60e0454e$export$6f32135080cb4c3({
                prop: e,
                defaultProp: n,
                onChange: t = () => {}
            }) {
                let [i, u] = function({
                    defaultProp: e,
                    onChange: n
                }) {
                    let t = (0, r.useState)(e),
                        [i] = t,
                        u = (0, r.useRef)(i),
                        a = (0, o.W)(n);
                    return (0, r.useEffect)(() => {
                        u.current !== i && (a(i), u.current = i)
                    }, [i, u, a]), t
                }({
                    defaultProp: n,
                    onChange: t
                }), a = void 0 !== e, l = a ? e : i, c = (0, o.W)(t), d = (0, r.useCallback)(n => {
                    if (a) {
                        let t = "function" == typeof n ? n(e) : n;
                        t !== e && c(t)
                    } else u(n)
                }, [a, e, u, c]);
                return [l, d]
            }
        },
        89744: function(e, n, t) {
            t.d(n, {
                b: function() {
                    return o
                }
            });
            var r = t(97352);
            let o = (null == globalThis ? void 0 : globalThis.document) ? r.useLayoutEffect : () => {}
        }
    }
]);