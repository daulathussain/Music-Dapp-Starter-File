"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9761], {
        70776: function(e, t, r) {
            r.d(t, {
                gm: function() {
                    return $f631663db3294ace$export$b39126d51d94e6f3
                }
            });
            var n = r(97352);
            let o = (0, n.createContext)(void 0);

            function $f631663db3294ace$export$b39126d51d94e6f3(e) {
                let t = (0, n.useContext)(o);
                return e || t || "ltr"
            }
        },
        17413: function(e, t, r) {
            r.d(t, {
                M: function() {
                    return $1746a345f3d73bb7$export$f680877a34711e37
                }
            });
            var n, o = r(97352),
                a = r(13964);
            let i = (n || (n = r.t(o, 2)))["useId".toString()] || (() => void 0),
                u = 0;

            function $1746a345f3d73bb7$export$f680877a34711e37(e) {
                let [t, r] = o.useState(i());
                return (0, a.b)(() => {
                    e || r(e => null != e ? e : String(u++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        64690: function(e, t, r) {
            r.d(t, {
                Pc: function() {
                    return E
                },
                ck: function() {
                    return k
                },
                fC: function() {
                    return _
                }
            });
            var n = r(84477),
                o = r(97352),
                a = r(28085),
                i = r(49474),
                u = r(92634),
                c = r(87992),
                l = r(17413),
                f = r(54065),
                s = r(43270),
                d = r(43979),
                b = r(70776);
            let v = "rovingFocusGroup.onEntryFocus",
                p = {
                    bubbles: !1,
                    cancelable: !0
                },
                m = "RovingFocusGroup",
                [$, g, w] = (0, i.B)(m),
                [I, E] = (0, c.b)(m, [w]),
                [C, F] = I(m),
                T = (0, o.forwardRef)((e, t) => (0, o.createElement)($.Provider, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)($.Slot, {
                    scope: e.__scopeRovingFocusGroup
                }, (0, o.createElement)(h, (0, n.Z)({}, e, {
                    ref: t
                }))))),
                h = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: i,
                        loop: c = !1,
                        dir: l,
                        currentTabStopId: m,
                        defaultCurrentTabStopId: $,
                        onCurrentTabStopIdChange: w,
                        onEntryFocus: I,
                        ...E
                    } = e, F = (0, o.useRef)(null), T = (0, u.e)(t, F), h = (0, b.gm)(l), [M = null, R] = (0, d.T)({
                        prop: m,
                        defaultProp: $,
                        onChange: w
                    }), [_, k] = (0, o.useState)(!1), y = (0, s.W)(I), D = g(r), A = (0, o.useRef)(!1), [x, S] = (0, o.useState)(0);
                    return (0, o.useEffect)(() => {
                        let e = F.current;
                        if (e) return e.addEventListener(v, y), () => e.removeEventListener(v, y)
                    }, [y]), (0, o.createElement)(C, {
                        scope: r,
                        orientation: i,
                        dir: h,
                        loop: c,
                        currentTabStopId: M,
                        onItemFocus: (0, o.useCallback)(e => R(e), [R]),
                        onItemShiftTab: (0, o.useCallback)(() => k(!0), []),
                        onFocusableItemAdd: (0, o.useCallback)(() => S(e => e + 1), []),
                        onFocusableItemRemove: (0, o.useCallback)(() => S(e => e - 1), [])
                    }, (0, o.createElement)(f.WV.div, (0, n.Z)({
                        tabIndex: _ || 0 === x ? -1 : 0,
                        "data-orientation": i
                    }, E, {
                        ref: T,
                        style: {
                            outline: "none",
                            ...e.style
                        },
                        onMouseDown: (0, a.M)(e.onMouseDown, () => {
                            A.current = !0
                        }),
                        onFocus: (0, a.M)(e.onFocus, e => {
                            let t = !A.current;
                            if (e.target === e.currentTarget && t && !_) {
                                let t = new CustomEvent(v, p);
                                if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                    let e = D().filter(e => e.focusable),
                                        t = e.find(e => e.active),
                                        r = e.find(e => e.id === M),
                                        n = [t, r, ...e].filter(Boolean),
                                        o = n.map(e => e.ref.current);
                                    $d7bdfb9eb0fdf311$var$focusFirst(o)
                                }
                            }
                            A.current = !1
                        }),
                        onBlur: (0, a.M)(e.onBlur, () => k(!1))
                    })))
                }),
                M = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: i = !0,
                        active: u = !1,
                        tabStopId: c,
                        ...s
                    } = e, d = (0, l.M)(), b = c || d, v = F("RovingFocusGroupItem", r), p = v.currentTabStopId === b, m = g(r), {
                        onFocusableItemAdd: w,
                        onFocusableItemRemove: I
                    } = v;
                    return (0, o.useEffect)(() => {
                        if (i) return w(), () => I()
                    }, [i, w, I]), (0, o.createElement)($.ItemSlot, {
                        scope: r,
                        id: b,
                        focusable: i,
                        active: u
                    }, (0, o.createElement)(f.WV.span, (0, n.Z)({
                        tabIndex: p ? 0 : -1,
                        "data-orientation": v.orientation
                    }, s, {
                        ref: t,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            i ? v.onItemFocus(b) : e.preventDefault()
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => v.onItemFocus(b)),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            if ("Tab" === e.key && e.shiftKey) {
                                v.onItemShiftTab();
                                return
                            }
                            if (e.target !== e.currentTarget) return;
                            let t = function(e, t, r) {
                                var n;
                                let o = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return R[o]
                            }(e, v.orientation, v.dir);
                            if (void 0 !== t) {
                                e.preventDefault();
                                let o = m().filter(e => e.focusable),
                                    a = o.map(e => e.ref.current);
                                if ("last" === t) a.reverse();
                                else if ("prev" === t || "next" === t) {
                                    var r, n;
                                    "prev" === t && a.reverse();
                                    let o = a.indexOf(e.currentTarget);
                                    a = v.loop ? (r = a, n = o + 1, r.map((e, t) => r[(n + t) % r.length])) : a.slice(o + 1)
                                }
                                setTimeout(() => $d7bdfb9eb0fdf311$var$focusFirst(a))
                            }
                        })
                    })))
                }),
                R = {
                    ArrowLeft: "prev",
                    ArrowUp: "prev",
                    ArrowRight: "next",
                    ArrowDown: "next",
                    PageUp: "first",
                    Home: "first",
                    PageDown: "last",
                    End: "last"
                };

            function $d7bdfb9eb0fdf311$var$focusFirst(e) {
                let t = document.activeElement;
                for (let r of e)
                    if (r === t || (r.focus(), document.activeElement !== t)) return
            }
            let _ = T,
                k = M
        },
        69761: function(e, t, r) {
            r.d(t, {
                VY: function() {
                    return M
                },
                aV: function() {
                    return T
                },
                fC: function() {
                    return F
                },
                xz: function() {
                    return h
                }
            });
            var n = r(84477),
                o = r(97352),
                a = r(28085),
                i = r(87992),
                u = r(64690),
                c = r(53511),
                l = r(54065),
                f = r(70776),
                s = r(43979),
                d = r(17413);
            let b = "Tabs",
                [v, p] = (0, i.b)(b, [u.Pc]),
                m = (0, u.Pc)(),
                [$, g] = v(b),
                w = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: a,
                        onValueChange: i,
                        defaultValue: u,
                        orientation: c = "horizontal",
                        dir: b,
                        activationMode: v = "automatic",
                        ...p
                    } = e, m = (0, f.gm)(b), [g, w] = (0, s.T)({
                        prop: a,
                        onChange: i,
                        defaultProp: u
                    });
                    return (0, o.createElement)($, {
                        scope: r,
                        baseId: (0, d.M)(),
                        value: g,
                        onValueChange: w,
                        orientation: c,
                        dir: m,
                        activationMode: v
                    }, (0, o.createElement)(l.WV.div, (0, n.Z)({
                        dir: m,
                        "data-orientation": c
                    }, p, {
                        ref: t
                    })))
                }),
                I = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: r,
                        loop: a = !0,
                        ...i
                    } = e, c = g("TabsList", r), f = m(r);
                    return (0, o.createElement)(u.fC, (0, n.Z)({
                        asChild: !0
                    }, f, {
                        orientation: c.orientation,
                        dir: c.dir,
                        loop: a
                    }), (0, o.createElement)(l.WV.div, (0, n.Z)({
                        role: "tablist",
                        "aria-orientation": c.orientation
                    }, i, {
                        ref: t
                    })))
                }),
                E = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: i,
                        disabled: c = !1,
                        ...f
                    } = e, s = g("TabsTrigger", r), d = m(r), b = $69cb30bb0017df05$var$makeTriggerId(s.baseId, i), v = $69cb30bb0017df05$var$makeContentId(s.baseId, i), p = i === s.value;
                    return (0, o.createElement)(u.ck, (0, n.Z)({
                        asChild: !0
                    }, d, {
                        focusable: !c,
                        active: p
                    }), (0, o.createElement)(l.WV.button, (0, n.Z)({
                        type: "button",
                        role: "tab",
                        "aria-selected": p,
                        "aria-controls": v,
                        "data-state": p ? "active" : "inactive",
                        "data-disabled": c ? "" : void 0,
                        disabled: c,
                        id: b
                    }, f, {
                        ref: t,
                        onMouseDown: (0, a.M)(e.onMouseDown, e => {
                            c || 0 !== e.button || !1 !== e.ctrlKey ? e.preventDefault() : s.onValueChange(i)
                        }),
                        onKeyDown: (0, a.M)(e.onKeyDown, e => {
                            [" ", "Enter"].includes(e.key) && s.onValueChange(i)
                        }),
                        onFocus: (0, a.M)(e.onFocus, () => {
                            let e = "manual" !== s.activationMode;
                            p || c || !e || s.onValueChange(i)
                        })
                    })))
                }),
                C = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopeTabs: r,
                        value: a,
                        forceMount: i,
                        children: u,
                        ...f
                    } = e, s = g("TabsContent", r), d = $69cb30bb0017df05$var$makeTriggerId(s.baseId, a), b = $69cb30bb0017df05$var$makeContentId(s.baseId, a), v = a === s.value, p = (0, o.useRef)(v);
                    return (0, o.useEffect)(() => {
                        let e = requestAnimationFrame(() => p.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, o.createElement)(c.z, {
                        present: i || v
                    }, ({
                        present: r
                    }) => (0, o.createElement)(l.WV.div, (0, n.Z)({
                        "data-state": v ? "active" : "inactive",
                        "data-orientation": s.orientation,
                        role: "tabpanel",
                        "aria-labelledby": d,
                        hidden: !r,
                        id: b,
                        tabIndex: 0
                    }, f, {
                        ref: t,
                        style: { ...e.style,
                            animationDuration: p.current ? "0s" : void 0
                        }
                    }), r && u))
                });

            function $69cb30bb0017df05$var$makeTriggerId(e, t) {
                return `${e}-trigger-${t}`
            }

            function $69cb30bb0017df05$var$makeContentId(e, t) {
                return `${e}-content-${t}`
            }
            let F = w,
                T = I,
                h = E,
                M = C
        }
    }
]);