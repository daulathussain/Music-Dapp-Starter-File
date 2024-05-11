"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9721], {
        13476: function(e, t, n) {
            n.d(t, {
                Ry: function() {
                    return hideOthers
                }
            });
            var r = new WeakMap,
                a = new WeakMap,
                o = {},
                c = 0,
                unwrapHost = function(e) {
                    return e && (e.host || unwrapHost(e.parentNode))
                },
                applyAttributeToOthers = function(e, t, n, u) {
                    var i = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = unwrapHost(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    o[n] || (o[n] = new WeakMap);
                    var l = o[n],
                        d = [],
                        s = new Set,
                        f = new Set(i),
                        keep = function(e) {
                            !e || s.has(e) || (s.add(e), keep(e.parentNode))
                        };
                    i.forEach(keep);
                    var deep = function(e) {
                        !e || f.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                            if (s.has(e)) deep(e);
                            else {
                                var t = e.getAttribute(u),
                                    o = null !== t && "false" !== t,
                                    c = (r.get(e) || 0) + 1,
                                    i = (l.get(e) || 0) + 1;
                                r.set(e, c), l.set(e, i), d.push(e), 1 === c && o && a.set(e, !0), 1 === i && e.setAttribute(n, "true"), o || e.setAttribute(u, "true")
                            }
                        })
                    };
                    return deep(t), s.clear(), c++,
                        function() {
                            d.forEach(function(e) {
                                var t = r.get(e) - 1,
                                    o = l.get(e) - 1;
                                r.set(e, t), l.set(e, o), t || (a.has(e) || e.removeAttribute(u), a.delete(e)), o || e.removeAttribute(n)
                            }), --c || (r = new WeakMap, r = new WeakMap, a = new WeakMap, o = {})
                        }
                },
                hideOthers = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        a = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                    return a ? (r.push.apply(r, Array.from(a.querySelectorAll("[aria-live]"))), applyAttributeToOthers(r, a, n, "aria-hidden")) : function() {
                        return null
                    }
                }
        },
        50249: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r, a = n(43112),
                o = n(97352),
                c = "right-scroll-bar-position",
                u = "width-before-scroll-bar",
                i = n(86840),
                l = (0, n(43011)._)(),
                nothing = function() {},
                d = o.forwardRef(function(e, t) {
                    var n = o.useRef(null),
                        r = o.useState({
                            onScrollCapture: nothing,
                            onWheelCapture: nothing,
                            onTouchMoveCapture: nothing
                        }),
                        c = r[0],
                        u = r[1],
                        d = e.forwardProps,
                        s = e.children,
                        f = e.className,
                        v = e.removeScrollBar,
                        m = e.enabled,
                        h = e.shards,
                        p = e.sideCar,
                        g = e.noIsolation,
                        b = e.inert,
                        y = e.allowPinchZoom,
                        E = e.as,
                        $ = void 0 === E ? "div" : E,
                        S = (0, a.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                        w = (0, i.q)([n, t]),
                        C = (0, a.__assign)((0, a.__assign)({}, S), c);
                    return o.createElement(o.Fragment, null, m && o.createElement(p, {
                        sideCar: l,
                        removeScrollBar: v,
                        shards: h,
                        noIsolation: g,
                        inert: b,
                        setCallbacks: u,
                        allowPinchZoom: !!y,
                        lockRef: n
                    }), d ? o.cloneElement(o.Children.only(s), (0, a.__assign)((0, a.__assign)({}, C), {
                        ref: w
                    })) : o.createElement($, (0, a.__assign)({}, C, {
                        className: f,
                        ref: w
                    }), s))
                });
            d.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, d.classNames = {
                fullWidth: u,
                zeroRight: c
            };
            var SideCar = function(e) {
                var t = e.sideCar,
                    n = (0, a.__rest)(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return o.createElement(r, (0, a.__assign)({}, n))
            };
            SideCar.isSideCarExport = !0;
            var stylesheetSingleton = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(a) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = r || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var o, c;
                                (o = t).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), c = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(c)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                styleHookSingleton = function() {
                    var e = stylesheetSingleton();
                    return function(t, n) {
                        o.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                styleSingleton = function() {
                    var e = styleHookSingleton();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                s = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                parse = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                getOffset = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        a = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [parse(n), parse(r), parse(a)]
                },
                getGapWidth = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return s;
                    var t = getOffset(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                f = styleSingleton(),
                getStyles = function(e, t, n, r) {
                    var a = e.left,
                        o = e.top,
                        i = e.right,
                        l = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(a, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(c, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(u, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(u, " .").concat(u, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
                },
                RemoveScrollBar = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        a = void 0 === r ? "margin" : r,
                        c = o.useMemo(function() {
                            return getGapWidth(a)
                        }, [a]);
                    return o.createElement(f, {
                        styles: getStyles(c, !t, a, n ? "" : "!important")
                    })
                },
                v = !1;
            if ("undefined" != typeof window) try {
                var m = Object.defineProperty({}, "passive", {
                    get: function() {
                        return v = !0, !0
                    }
                });
                window.addEventListener("test", m, m), window.removeEventListener("test", m, m)
            } catch (e) {
                v = !1
            }
            var h = !!v && {
                    passive: !1
                },
                elementCanBeScrolled = function(e, t) {
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
                },
                locationCouldBeScrolled = function(e, t) {
                    var n = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), elementCouldBeScrolled(e, n)) {
                            var r = getScrollVariables(e, n);
                            if (r[1] > r[2]) return !0
                        }
                        n = n.parentNode
                    } while (n && n !== document.body);
                    return !1
                },
                elementCouldBeScrolled = function(e, t) {
                    return "v" === e ? elementCanBeScrolled(t, "overflowY") : elementCanBeScrolled(t, "overflowX")
                },
                getScrollVariables = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                handleScroll = function(e, t, n, r, a) {
                    var o, c = (o = window.getComputedStyle(t).direction, "h" === e && "rtl" === o ? -1 : 1),
                        u = c * r,
                        i = n.target,
                        l = t.contains(i),
                        d = !1,
                        s = u > 0,
                        f = 0,
                        v = 0;
                    do {
                        var m = getScrollVariables(e, i),
                            h = m[0],
                            p = m[1] - m[2] - c * h;
                        (h || p) && elementCouldBeScrolled(e, i) && (f += p, v += h), i = i.parentNode
                    } while (!l && i !== document.body || l && (t.contains(i) || t === i));
                    return s && (a && 0 === f || !a && u > f) ? d = !0 : !s && (a && 0 === v || !a && -u > v) && (d = !0), d
                },
                getTouchXY = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                getDeltaXY = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                extractRef = function(e) {
                    return e && "current" in e ? e.current : e
                },
                p = 0,
                g = [],
                b = (l.useMedium(function(e) {
                    var t = o.useRef([]),
                        n = o.useRef([0, 0]),
                        r = o.useRef(),
                        c = o.useState(p++)[0],
                        u = o.useState(function() {
                            return styleSingleton()
                        })[0],
                        i = o.useRef(e);
                    o.useEffect(function() {
                        i.current = e
                    }, [e]), o.useEffect(function() {
                        if (e.inert) {
                            document.body.classList.add("block-interactivity-".concat(c));
                            var t = (0, a.__spreadArray)([e.lockRef.current], (e.shards || []).map(extractRef), !0).filter(Boolean);
                            return t.forEach(function(e) {
                                    return e.classList.add("allow-interactivity-".concat(c))
                                }),
                                function() {
                                    document.body.classList.remove("block-interactivity-".concat(c)), t.forEach(function(e) {
                                        return e.classList.remove("allow-interactivity-".concat(c))
                                    })
                                }
                        }
                    }, [e.inert, e.lockRef.current, e.shards]);
                    var l = o.useCallback(function(e, t) {
                            if ("touches" in e && 2 === e.touches.length) return !i.current.allowPinchZoom;
                            var a, o = getTouchXY(e),
                                c = n.current,
                                u = "deltaX" in e ? e.deltaX : c[0] - o[0],
                                l = "deltaY" in e ? e.deltaY : c[1] - o[1],
                                d = e.target,
                                s = Math.abs(u) > Math.abs(l) ? "h" : "v";
                            if ("touches" in e && "h" === s && "range" === d.type) return !1;
                            var f = locationCouldBeScrolled(s, d);
                            if (!f) return !0;
                            if (f ? a = s : (a = "v" === s ? "h" : "v", f = locationCouldBeScrolled(s, d)), !f) return !1;
                            if (!r.current && "changedTouches" in e && (u || l) && (r.current = a), !a) return !0;
                            var v = r.current || a;
                            return handleScroll(v, t, e, "h" === v ? u : l, !0)
                        }, []),
                        d = o.useCallback(function(e) {
                            if (g.length && g[g.length - 1] === u) {
                                var n = "deltaY" in e ? getDeltaXY(e) : getTouchXY(e),
                                    r = t.current.filter(function(t) {
                                        var r;
                                        return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                    })[0];
                                if (r && r.should) {
                                    e.cancelable && e.preventDefault();
                                    return
                                }
                                if (!r) {
                                    var a = (i.current.shards || []).map(extractRef).filter(Boolean).filter(function(t) {
                                        return t.contains(e.target)
                                    });
                                    (a.length > 0 ? l(e, a[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                                }
                            }
                        }, []),
                        s = o.useCallback(function(e, n, r, a) {
                            var o = {
                                name: e,
                                delta: n,
                                target: r,
                                should: a
                            };
                            t.current.push(o), setTimeout(function() {
                                t.current = t.current.filter(function(e) {
                                    return e !== o
                                })
                            }, 1)
                        }, []),
                        f = o.useCallback(function(e) {
                            n.current = getTouchXY(e), r.current = void 0
                        }, []),
                        v = o.useCallback(function(t) {
                            s(t.type, getDeltaXY(t), t.target, l(t, e.lockRef.current))
                        }, []),
                        m = o.useCallback(function(t) {
                            s(t.type, getTouchXY(t), t.target, l(t, e.lockRef.current))
                        }, []);
                    o.useEffect(function() {
                        return g.push(u), e.setCallbacks({
                                onScrollCapture: v,
                                onWheelCapture: v,
                                onTouchMoveCapture: m
                            }), document.addEventListener("wheel", d, h), document.addEventListener("touchmove", d, h), document.addEventListener("touchstart", f, h),
                            function() {
                                g = g.filter(function(e) {
                                    return e !== u
                                }), document.removeEventListener("wheel", d, h), document.removeEventListener("touchmove", d, h), document.removeEventListener("touchstart", f, h)
                            }
                    }, []);
                    var b = e.removeScrollBar,
                        y = e.inert;
                    return o.createElement(o.Fragment, null, y ? o.createElement(u, {
                        styles: "\n  .block-interactivity-".concat(c, " {pointer-events: none;}\n  .allow-interactivity-").concat(c, " {pointer-events: all;}\n")
                    }) : null, b ? o.createElement(RemoveScrollBar, {
                        gapMode: "margin"
                    }) : null)
                }), SideCar),
                y = o.forwardRef(function(e, t) {
                    return o.createElement(d, (0, a.__assign)({}, e, {
                        ref: t,
                        sideCar: b
                    }))
                });
            y.classNames = d.classNames;
            var E = y
        },
        86840: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return useMergeRefs
                }
            });
            var r = n(97352);

            function useMergeRefs(e, t) {
                var n, a, o;
                return n = t || null, a = function(t) {
                    return e.forEach(function(e) {
                        return "function" == typeof e ? e(t) : e && (e.current = t), e
                    })
                }, (o = (0, r.useState)(function() {
                    return {
                        value: n,
                        callback: a,
                        facade: {
                            get current() {
                                return o.value
                            },
                            set current(value) {
                                var e = o.value;
                                e !== value && (o.value = value, o.callback(value, e))
                            }
                        }
                    }
                })[0]).callback = a, o.facade
            }
        },
        43011: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return createSidecarMedium
                },
                s: function() {
                    return createMedium
                }
            });
            var r = n(43112);

            function ItoI(e) {
                return e
            }

            function innerCreateMedium(e, t) {
                void 0 === t && (t = ItoI);
                var n = [],
                    r = !1;
                return {
                    read: function() {
                        if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e
                    },
                    useMedium: function(e) {
                        var a = t(e, r);
                        return n.push(a),
                            function() {
                                n = n.filter(function(e) {
                                    return e !== a
                                })
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (r = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        r = !0;
                        var t = [];
                        if (n.length) {
                            var a = n;
                            n = [], a.forEach(e), t = n
                        }
                        var executeQueue = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            cycle = function() {
                                return Promise.resolve().then(executeQueue)
                            };
                        cycle(), n = {
                            push: function(e) {
                                t.push(e), cycle()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                }
            }

            function createMedium(e, t) {
                return void 0 === t && (t = ItoI), innerCreateMedium(e, t)
            }

            function createSidecarMedium(e) {
                void 0 === e && (e = {});
                var t = innerCreateMedium(null);
                return t.options = (0, r.__assign)({
                    async: !0,
                    ssr: !1
                }, e), t
            }
        },
        253: function(e, t, n) {
            n.d(t, {
                EW: function() {
                    return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c
                }
            });
            var r = n(97352);
            let a = 0;

            function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c() {
                (0, r.useEffect)(() => {
                    var e, t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : $3db38b7d1fb3fe6a$var$createFocusGuard()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : $3db38b7d1fb3fe6a$var$createFocusGuard()), a++, () => {
                        1 === a && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), a--
                    }
                }, [])
            }

            function $3db38b7d1fb3fe6a$var$createFocusGuard() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
            }
        },
        67157: function(e, t, n) {
            let r;
            n.d(t, {
                M: function() {
                    return f
                }
            });
            var a = n(84477),
                o = n(97352),
                c = n(8e4),
                u = n(26815),
                i = n(90106);
            let l = "focusScope.autoFocusOnMount",
                d = "focusScope.autoFocusOnUnmount",
                s = {
                    bubbles: !1,
                    cancelable: !0
                },
                f = (0, o.forwardRef)((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: f,
                        onUnmountAutoFocus: m,
                        ...h
                    } = e, [p, g] = (0, o.useState)(null), b = (0, i.W)(f), y = (0, i.W)(m), E = (0, o.useRef)(null), $ = (0, c.e)(t, e => g(e)), S = (0, o.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, o.useEffect)(() => {
                        if (r) {
                            function handleFocusIn(e) {
                                if (S.paused || !p) return;
                                let t = e.target;
                                p.contains(t) ? E.current = t : $d3863c46a17e8a28$var$focus(E.current, {
                                    select: !0
                                })
                            }

                            function handleFocusOut(e) {
                                if (S.paused || !p) return;
                                let t = e.relatedTarget;
                                null === t || p.contains(t) || $d3863c46a17e8a28$var$focus(E.current, {
                                    select: !0
                                })
                            }
                            document.addEventListener("focusin", handleFocusIn), document.addEventListener("focusout", handleFocusOut);
                            let e = new MutationObserver(function(e) {
                                let t = document.activeElement;
                                for (let n of e) n.removedNodes.length > 0 && !(null != p && p.contains(t)) && $d3863c46a17e8a28$var$focus(p)
                            });
                            return p && e.observe(p, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", handleFocusIn), document.removeEventListener("focusout", handleFocusOut), e.disconnect()
                            }
                        }
                    }, [r, p, S.paused]), (0, o.useEffect)(() => {
                        if (p) {
                            v.add(S);
                            let e = document.activeElement,
                                t = p.contains(e);
                            if (!t) {
                                let t = new CustomEvent(l, s);
                                p.addEventListener(l, b), p.dispatchEvent(t), t.defaultPrevented || (function(e, {
                                    select: t = !1
                                } = {}) {
                                    let n = document.activeElement;
                                    for (let r of e)
                                        if ($d3863c46a17e8a28$var$focus(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }($d3863c46a17e8a28$var$getTabbableCandidates(p).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && $d3863c46a17e8a28$var$focus(p))
                            }
                            return () => {
                                p.removeEventListener(l, b), setTimeout(() => {
                                    let t = new CustomEvent(d, s);
                                    p.addEventListener(d, y), p.dispatchEvent(t), t.defaultPrevented || $d3863c46a17e8a28$var$focus(null != e ? e : document.body, {
                                        select: !0
                                    }), p.removeEventListener(d, y), v.remove(S)
                                }, 0)
                            }
                        }
                    }, [p, b, y, S]);
                    let w = (0, o.useCallback)(e => {
                        if (!n && !r || S.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            a = document.activeElement;
                        if (t && a) {
                            let t = e.currentTarget,
                                [r, o] = function(e) {
                                    let t = $d3863c46a17e8a28$var$getTabbableCandidates(e),
                                        n = $d3863c46a17e8a28$var$findVisible(t, e),
                                        r = $d3863c46a17e8a28$var$findVisible(t.reverse(), e);
                                    return [n, r]
                                }(t),
                                c = r && o;
                            c ? e.shiftKey || a !== o ? e.shiftKey && a === r && (e.preventDefault(), n && $d3863c46a17e8a28$var$focus(o, {
                                select: !0
                            })) : (e.preventDefault(), n && $d3863c46a17e8a28$var$focus(r, {
                                select: !0
                            })) : a === t && e.preventDefault()
                        }
                    }, [n, r, S.paused]);
                    return (0, o.createElement)(u.WV.div, (0, a.Z)({
                        tabIndex: -1
                    }, h, {
                        ref: $,
                        onKeyDown: w
                    }))
                });

            function $d3863c46a17e8a28$var$getTabbableCandidates(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function $d3863c46a17e8a28$var$findVisible(e, t) {
                for (let n of e)
                    if (! function(e, {
                            upTo: t
                        }) {
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === t || e !== t);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function $d3863c46a17e8a28$var$focus(e, {
                select: t = !1
            } = {}) {
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            let v = (r = [], {
                add(e) {
                    let t = r[0];
                    e !== t && (null == t || t.pause()), (r = $d3863c46a17e8a28$var$arrayRemove(r, e)).unshift(e)
                },
                remove(e) {
                    var t;
                    null === (t = (r = $d3863c46a17e8a28$var$arrayRemove(r, e))[0]) || void 0 === t || t.resume()
                }
            });

            function $d3863c46a17e8a28$var$arrayRemove(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
        }
    }
]);