"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1226], {
        11515: function(e, t, n) {
            n.d(t, {
                aV: function() {
                    return z
                },
                fC: function() {
                    return A
                }
            });
            var r = n(84477),
                a = n(97352),
                i = (n(64353), n(87992)),
                o = n(28085),
                l = n(54065),
                s = n(43979),
                u = n(92634),
                c = n(70776),
                d = n(53511),
                f = n(17413),
                v = n(49474),
                m = n(78152),
                p = n(8262),
                h = n(13964),
                w = n(43270);
            n(43742);
            let g = "NavigationMenu",
                [C, b, E] = (0, v.B)(g),
                [M, N, R] = (0, v.B)(g),
                [D, $] = (0, i.b)(g, [E, R]),
                [T, y] = D(g),
                [_, F] = D(g),
                x = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: i,
                        onValueChange: o,
                        defaultValue: d,
                        delayDuration: f = 200,
                        skipDelayDuration: v = 300,
                        orientation: m = "horizontal",
                        dir: p,
                        ...h
                    } = e, [w, g] = (0, a.useState)(null), C = (0, u.e)(t, e => g(e)), b = (0, c.gm)(p), E = (0, a.useRef)(0), M = (0, a.useRef)(0), N = (0, a.useRef)(0), [R, D] = (0, a.useState)(!0), [$ = "", T] = (0, s.T)({
                        prop: i,
                        onChange: e => {
                            let t = "" !== e,
                                n = v > 0;
                            t ? (window.clearTimeout(N.current), n && D(!1)) : (window.clearTimeout(N.current), N.current = window.setTimeout(() => D(!0), v)), null == o || o(e)
                        },
                        defaultProp: d
                    }), y = (0, a.useCallback)(() => {
                        window.clearTimeout(M.current), M.current = window.setTimeout(() => T(""), 150)
                    }, [T]), _ = (0, a.useCallback)(e => {
                        window.clearTimeout(M.current), T(e)
                    }, [T]), F = (0, a.useCallback)(e => {
                        let t = $ === e;
                        t ? window.clearTimeout(M.current) : E.current = window.setTimeout(() => {
                            window.clearTimeout(M.current), T(e)
                        }, f)
                    }, [$, T, f]);
                    return (0, a.useEffect)(() => () => {
                        window.clearTimeout(E.current), window.clearTimeout(M.current), window.clearTimeout(N.current)
                    }, []), (0, a.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
                        scope: n,
                        isRootMenu: !0,
                        value: $,
                        dir: b,
                        orientation: m,
                        rootNavigationMenu: w,
                        onTriggerEnter: e => {
                            window.clearTimeout(E.current), R ? F(e) : _(e)
                        },
                        onTriggerLeave: () => {
                            window.clearTimeout(E.current), y()
                        },
                        onContentEnter: () => window.clearTimeout(M.current),
                        onContentLeave: y,
                        onItemSelect: e => {
                            T(t => t === e ? "" : e)
                        },
                        onItemDismiss: () => T("")
                    }, (0, a.createElement)(l.WV.nav, (0, r.Z)({
                        "aria-label": "Main",
                        "data-orientation": m,
                        dir: b
                    }, h, {
                        ref: C
                    })))
                }),
                $322c88a641701f3b$var$NavigationMenuProvider = e => {
                    let {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: r,
                        dir: i,
                        orientation: o,
                        children: l,
                        value: s,
                        onItemSelect: u,
                        onItemDismiss: c,
                        onTriggerEnter: d,
                        onTriggerLeave: v,
                        onContentEnter: m,
                        onContentLeave: h
                    } = e, [g, b] = (0, a.useState)(null), [E, M] = (0, a.useState)(new Map), [N, R] = (0, a.useState)(null);
                    return (0, a.createElement)(T, {
                        scope: t,
                        isRootMenu: n,
                        rootNavigationMenu: r,
                        value: s,
                        previousValue: (0, p.D)(s),
                        baseId: (0, f.M)(),
                        dir: i,
                        orientation: o,
                        viewport: g,
                        onViewportChange: b,
                        indicatorTrack: N,
                        onIndicatorTrackChange: R,
                        onTriggerEnter: (0, w.W)(d),
                        onTriggerLeave: (0, w.W)(v),
                        onContentEnter: (0, w.W)(m),
                        onContentLeave: (0, w.W)(h),
                        onItemSelect: (0, w.W)(u),
                        onItemDismiss: (0, w.W)(c),
                        onViewportContentChange: (0, a.useCallback)((e, t) => {
                            M(n => (n.set(e, t), new Map(n)))
                        }, []),
                        onViewportContentRemove: (0, a.useCallback)(e => {
                            M(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
                        }, [])
                    }, (0, a.createElement)(C.Provider, {
                        scope: t
                    }, (0, a.createElement)(_, {
                        scope: t,
                        items: E
                    }, l)))
                },
                P = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, o = y("NavigationMenuList", n), s = (0, a.createElement)(l.WV.ul, (0, r.Z)({
                        "data-orientation": o.orientation
                    }, i, {
                        ref: t
                    }));
                    return (0, a.createElement)(l.WV.div, {
                        style: {
                            position: "relative"
                        },
                        ref: o.onIndicatorTrackChange
                    }, (0, a.createElement)(C.Slot, {
                        scope: n
                    }, o.isRootMenu ? (0, a.createElement)(V, {
                        asChild: !0
                    }, s) : s))
                }),
                [k, I] = D("NavigationMenuItem"),
                L = ((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, o = y("NavigationMenuIndicator", n), s = b(n), [u, c] = (0, a.useState)(null), [d, f] = (0, a.useState)(null), v = "horizontal" === o.orientation, m = !!o.value;
                    (0, a.useEffect)(() => {
                        var e;
                        let t = s(),
                            n = null === (e = t.find(e => e.value === o.value)) || void 0 === e ? void 0 : e.ref.current;
                        n && c(n)
                    }, [s, o.value]);
                    let handlePositionChange = () => {
                        u && f({
                            size: v ? u.offsetWidth : u.offsetHeight,
                            offset: v ? u.offsetLeft : u.offsetTop
                        })
                    };
                    return $322c88a641701f3b$var$useResizeObserver(u, handlePositionChange), $322c88a641701f3b$var$useResizeObserver(o.indicatorTrack, handlePositionChange), d ? (0, a.createElement)(l.WV.div, (0, r.Z)({
                        "aria-hidden": !0,
                        "data-state": m ? "visible" : "hidden",
                        "data-orientation": o.orientation
                    }, i, {
                        ref: t,
                        style: {
                            position: "absolute",
                            ...v ? {
                                left: 0,
                                width: d.size + "px",
                                transform: `translateX(${d.offset}px)`
                            } : {
                                top: 0,
                                height: d.size + "px",
                                transform: `translateY(${d.offset}px)`
                            },
                            ...i.style
                        }
                    })) : null
                }, "NavigationMenuContent"),
                O = ((e, t) => {
                    let n = y(L, e.__scopeNavigationMenu),
                        {
                            onViewportContentChange: r,
                            onViewportContentRemove: a
                        } = n;
                    return (0, h.b)(() => {
                        r(e.value, {
                            ref: t,
                            ...e
                        })
                    }, [e, t, r]), (0, h.b)(() => () => a(e.value), [e.value, a]), null
                }, "navigationMenu.rootContentDismiss"),
                S = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        value: i,
                        triggerRef: l,
                        focusProxyRef: s,
                        wasEscapeCloseRef: c,
                        onRootContentClose: d,
                        onContentFocusOutside: f,
                        ...v
                    } = e, p = y(L, n), h = (0, a.useRef)(null), w = (0, u.e)(h, t), g = function(e, t) {
                        return `${e}-trigger-${t}`
                    }(p.baseId, i), C = function(e, t) {
                        return `${e}-content-${t}`
                    }(p.baseId, i), E = b(n), M = (0, a.useRef)(null), {
                        onItemDismiss: N
                    } = p;
                    (0, a.useEffect)(() => {
                        let e = h.current;
                        if (p.isRootMenu && e) {
                            let handleClose = () => {
                                var t;
                                N(), d(), e.contains(document.activeElement) && (null === (t = l.current) || void 0 === t || t.focus())
                            };
                            return e.addEventListener(O, handleClose), () => e.removeEventListener(O, handleClose)
                        }
                    }, [p.isRootMenu, e.value, l, N, d]);
                    let R = (0, a.useMemo)(() => {
                        let e = E(),
                            t = e.map(e => e.value);
                        "rtl" === p.dir && t.reverse();
                        let n = t.indexOf(p.value),
                            r = t.indexOf(p.previousValue),
                            a = i === p.value,
                            o = r === t.indexOf(i);
                        if (!a && !o) return M.current;
                        let l = (() => {
                            if (n !== r) {
                                if (a && -1 !== r) return n > r ? "from-end" : "from-start";
                                if (o && -1 !== n) return n > r ? "to-start" : "to-end"
                            }
                            return null
                        })();
                        return M.current = l, l
                    }, [p.previousValue, p.value, p.dir, E, i]);
                    return (0, a.createElement)(V, {
                        asChild: !0
                    }, (0, a.createElement)(m.XB, (0, r.Z)({
                        id: C,
                        "aria-labelledby": g,
                        "data-motion": R,
                        "data-orientation": p.orientation
                    }, v, {
                        ref: w,
                        onDismiss: () => {
                            var e;
                            let t = new Event(O, {
                                bubbles: !0,
                                cancelable: !0
                            });
                            null === (e = h.current) || void 0 === e || e.dispatchEvent(t)
                        },
                        onFocusOutside: (0, o.M)(e.onFocusOutside, e => {
                            var t;
                            f();
                            let n = e.target;
                            null !== (t = p.rootNavigationMenu) && void 0 !== t && t.contains(n) && e.preventDefault()
                        }),
                        onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, e => {
                            var t;
                            let n = e.target,
                                r = E().some(e => {
                                    var t;
                                    return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n)
                                }),
                                a = p.isRootMenu && (null === (t = p.viewport) || void 0 === t ? void 0 : t.contains(n));
                            (r || a || !p.isRootMenu) && e.preventDefault()
                        }),
                        onKeyDown: (0, o.M)(e.onKeyDown, e => {
                            let t = e.altKey || e.ctrlKey || e.metaKey,
                                n = "Tab" === e.key && !t;
                            if (n) {
                                let t = function(e) {
                                        let t = [],
                                            n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                                                acceptNode: e => {
                                                    let t = "INPUT" === e.tagName && "hidden" === e.type;
                                                    return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                                                }
                                            });
                                        for (; n.nextNode();) t.push(n.currentNode);
                                        return t
                                    }(e.currentTarget),
                                    n = document.activeElement,
                                    a = t.findIndex(e => e === n),
                                    i = e.shiftKey,
                                    o = i ? t.slice(0, a).reverse() : t.slice(a + 1, t.length);
                                if ($322c88a641701f3b$var$focusFirst(o)) e.preventDefault();
                                else {
                                    var r;
                                    null === (r = s.current) || void 0 === r || r.focus()
                                }
                            }
                        }),
                        onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, e => {
                            c.current = !0
                        })
                    })))
                }),
                V = ((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        children: i,
                        ...s
                    } = e, c = y("NavigationMenuViewport", n), f = (0, u.e)(t, c.onViewportChange), v = F(L, e.__scopeNavigationMenu), [m, p] = (0, a.useState)(null), [h, w] = (0, a.useState)(null), g = m ? (null == m ? void 0 : m.width) + "px" : void 0, C = m ? (null == m ? void 0 : m.height) + "px" : void 0, b = !!c.value, E = b ? c.value : c.previousValue;
                    return $322c88a641701f3b$var$useResizeObserver(h, () => {
                        h && p({
                            width: h.offsetWidth,
                            height: h.offsetHeight
                        })
                    }), (0, a.createElement)(l.WV.div, (0, r.Z)({
                        "data-state": function(e) {
                            return e ? "open" : "closed"
                        }(b),
                        "data-orientation": c.orientation
                    }, s, {
                        ref: f,
                        style: {
                            pointerEvents: !b && c.isRootMenu ? "none" : void 0,
                            "--radix-navigation-menu-viewport-width": g,
                            "--radix-navigation-menu-viewport-height": C,
                            ...s.style
                        },
                        onPointerEnter: (0, o.M)(e.onPointerEnter, c.onContentEnter),
                        onPointerLeave: (0, o.M)(e.onPointerLeave, function(e) {
                            return t => "mouse" === t.pointerType ? e(t) : void 0
                        }(c.onContentLeave))
                    }), Array.from(v.items).map(([e, {
                        ref: t,
                        forceMount: n,
                        ...i
                    }]) => {
                        let o = E === e;
                        return (0, a.createElement)(d.z, {
                            key: e,
                            present: n || o
                        }, (0, a.createElement)(S, (0, r.Z)({}, i, {
                            ref: (0, u.F)(t, e => {
                                o && e && w(e)
                            })
                        })))
                    }))
                }, (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeNavigationMenu: n,
                        ...i
                    } = e, o = y("FocusGroup", n);
                    return (0, a.createElement)(M.Provider, {
                        scope: n
                    }, (0, a.createElement)(M.Slot, {
                        scope: n
                    }, (0, a.createElement)(l.WV.div, (0, r.Z)({
                        dir: o.dir
                    }, i, {
                        ref: t
                    }))))
                })),
                W = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
            (e, t) => {
                let {
                    __scopeNavigationMenu: n,
                    ...i
                } = e, s = N(n), u = y("FocusGroupItem", n);
                return (0, a.createElement)(M.ItemSlot, {
                    scope: n
                }, (0, a.createElement)(l.WV.button, (0, r.Z)({}, i, {
                    ref: t,
                    onKeyDown: (0, o.M)(e.onKeyDown, e => {
                        let t = ["Home", "End", ...W].includes(e.key);
                        if (t) {
                            let t = s().map(e => e.ref.current),
                                n = "rtl" === u.dir ? "ArrowRight" : "ArrowLeft";
                            if ([n, "ArrowUp", "End"].includes(e.key) && t.reverse(), W.includes(e.key)) {
                                let n = t.indexOf(e.currentTarget);
                                t = t.slice(n + 1)
                            }
                            setTimeout(() => $322c88a641701f3b$var$focusFirst(t)), e.preventDefault()
                        }
                    })
                })))
            };

            function $322c88a641701f3b$var$focusFirst(e) {
                let t = document.activeElement;
                return e.some(e => e === t || (e.focus(), document.activeElement !== t))
            }

            function $322c88a641701f3b$var$useResizeObserver(e, t) {
                let n = (0, w.W)(t);
                (0, h.b)(() => {
                    let t = 0;
                    if (e) {
                        let r = new ResizeObserver(() => {
                            cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                        });
                        return r.observe(e), () => {
                            window.cancelAnimationFrame(t), r.unobserve(e)
                        }
                    }
                }, [e, n])
            }
            let A = x,
                z = P
        },
        53512: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "arrow-right-to-bracket",
                r = ["sign-in"],
                a = "f090",
                i = "M512 128v256c0 53.02-42.98 96-96 96h-72C330.7 480 320 469.3 320 456c0-13.26 10.75-24 24-24H416c26.4 0 48-21.6 48-48V128c0-26.4-21.6-48-48-48h-72C330.7 80 320 69.25 320 56C320 42.74 330.7 32 344 32H416C469 32 512 74.98 512 128zM345.5 239.6l-128-136C208.4 93.88 193.2 93.44 183.6 102.5C173.9 111.6 173.4 126.8 182.5 136.4L272.4 232H24C10.75 232 0 242.8 0 256s10.75 24 24 24h248.4l-89.92 95.56c-9.094 9.656-8.625 24.84 1.031 33.91C188.2 413.8 194.1 416 200 416c6.375 0 12.75-2.531 17.47-7.562l128-136C354.2 263.2 354.2 248.8 345.5 239.6z";
            t.definition = {
                prefix: "far",
                iconName: n,
                icon: [512, 512, r, a, i]
            }, t.faArrowRightToBracket = t.definition, t.prefix = "far", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = a, t.svgPathData = i, t.aliases = r
        },
        48534: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "chevron-left",
                icon: [320, 512, [9001], "f053", "M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z"]
            }, t.A3 = t.DF
        },
        88338: function(e, t, n) {
            var r = n(53512);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.Ye = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        14561: function(e, t, n) {
            var r = n(41684);
            t.DF = {
                prefix: r.prefix,
                iconName: r.iconName,
                icon: [r.width, r.height, r.aliases, r.unicode, r.svgPathData]
            }, t.f8 = t.DF, r.prefix, r.iconName, r.width, r.height, r.aliases, r.unicode, r.svgPathData, r.aliases
        },
        41684: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "circle-check",
                r = [61533, "check-circle"],
                a = "f058",
                i = "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [512, 512, r, a, i]
            }, t.faCircleCheck = t.definition, t.prefix = "fas", t.iconName = n, t.width = 512, t.height = 512, t.ligatures = r, t.unicode = a, t.svgPathData = i, t.aliases = r
        },
        39724: function(e, t, n) {
            n.d(t, {
                Fw: function() {
                    return E
                },
                VY: function() {
                    return D
                },
                fC: function() {
                    return N
                },
                xz: function() {
                    return R
                }
            });
            var r = n(84477),
                a = n(97352),
                i = n(12527),
                o = n(89849),
                l = n(58020),
                s = n(89744),
                u = n(8e4),
                c = n(26815),
                d = n(21155),
                f = n(65399);
            let v = "Collapsible",
                [m, p] = (0, o.b)(v),
                [h, w] = m(v),
                g = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        open: i,
                        defaultOpen: o,
                        disabled: s,
                        onOpenChange: u,
                        ...d
                    } = e, [v = !1, m] = (0, l.T)({
                        prop: i,
                        defaultProp: o,
                        onChange: u
                    });
                    return (0, a.createElement)(h, {
                        scope: n,
                        disabled: s,
                        contentId: (0, f.M)(),
                        open: v,
                        onOpenToggle: (0, a.useCallback)(() => m(e => !e), [m])
                    }, (0, a.createElement)(c.WV.div, (0, r.Z)({
                        "data-state": $409067139f391064$var$getState(v),
                        "data-disabled": s ? "" : void 0
                    }, d, {
                        ref: t
                    })))
                }),
                C = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        ...o
                    } = e, l = w("CollapsibleTrigger", n);
                    return (0, a.createElement)(c.WV.button, (0, r.Z)({
                        type: "button",
                        "aria-controls": l.contentId,
                        "aria-expanded": l.open || !1,
                        "data-state": $409067139f391064$var$getState(l.open),
                        "data-disabled": l.disabled ? "" : void 0,
                        disabled: l.disabled
                    }, o, {
                        ref: t,
                        onClick: (0, i.M)(e.onClick, l.onOpenToggle)
                    }))
                }),
                b = "CollapsibleContent",
                E = (0, a.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...i
                    } = e, o = w(b, e.__scopeCollapsible);
                    return (0, a.createElement)(d.z, {
                        present: n || o.open
                    }, ({
                        present: e
                    }) => (0, a.createElement)(M, (0, r.Z)({}, i, {
                        ref: t,
                        present: e
                    })))
                }),
                M = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        present: i,
                        children: o,
                        ...l
                    } = e, d = w(b, n), [f, v] = (0, a.useState)(i), m = (0, a.useRef)(null), p = (0, u.e)(t, m), h = (0, a.useRef)(0), g = h.current, C = (0, a.useRef)(0), E = C.current, M = d.open || f, N = (0, a.useRef)(M), R = (0, a.useRef)();
                    return (0, a.useEffect)(() => {
                        let e = requestAnimationFrame(() => N.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, s.b)(() => {
                        let e = m.current;
                        if (e) {
                            R.current = R.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let t = e.getBoundingClientRect();
                            h.current = t.height, C.current = t.width, N.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName), v(i)
                        }
                    }, [d.open, i]), (0, a.createElement)(c.WV.div, (0, r.Z)({
                        "data-state": $409067139f391064$var$getState(d.open),
                        "data-disabled": d.disabled ? "" : void 0,
                        id: d.contentId,
                        hidden: !M
                    }, l, {
                        ref: p,
                        style: {
                            "--radix-collapsible-content-height": g ? `${g}px` : void 0,
                            "--radix-collapsible-content-width": E ? `${E}px` : void 0,
                            ...e.style
                        }
                    }), M && o)
                });

            function $409067139f391064$var$getState(e) {
                return e ? "open" : "closed"
            }
            let N = g,
                R = C,
                D = E
        },
        28384: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return a
                },
                N: function() {
                    return i
                }
            });
            var r = n(80834);
            let a = (0, r.IM)((0, r.Z_)(), (0, r.O7)().or((0, r.Rx)())).and((0, r.Ry)({
                    hasFeedAccess: (0, r.O7)().default(!1),
                    hasLeaderboardAccess: (0, r.O7)().default(!1),
                    hasDismissedNewRewardsFeatureBanner: (0, r.O7)().default(!1),
                    hasDismissedNewLeaderboardFeatureBanner: (0, r.O7)().default(!1),
                    hasDismissedSetupProfile: (0, r.O7)().default(!1),
                    hasDismissedNewChannelsFeatureBanner: (0, r.O7)().default(!1),
                    version: (0, r.Rx)().int().min(1)
                })),
                i = {
                    hasFeedAccess: !1,
                    hasLeaderboardAccess: !1,
                    hasDismissedNewRewardsFeatureBanner: !1,
                    hasDismissedNewLeaderboardFeatureBanner: !1,
                    hasDismissedSetupProfile: !1,
                    hasDismissedNewChannelsFeatureBanner: !1,
                    version: 5
                }
        }
    }
]);