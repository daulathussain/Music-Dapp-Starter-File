"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5441], {
        86352: function(e, r, t) {
            t.d(r, {
                u: function() {
                    return $ae6933e535247d3d$export$7d15b64cf5a3a4c4
                }
            });

            function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(e, [r, t]) {
                return Math.min(t, Math.max(r, e))
            }
        },
        10256: function(e, r, t) {
            t.d(r, {
                gm: function() {
                    return $f631663db3294ace$export$b39126d51d94e6f3
                }
            });
            var n = t(97352);
            let o = (0, n.createContext)(void 0);

            function $f631663db3294ace$export$b39126d51d94e6f3(e) {
                let r = (0, n.useContext)(o);
                return e || r || "ltr"
            }
        },
        5441: function(e, r, t) {
            t.d(r, {
                LW: function() {
                    return I
                },
                Ns: function() {
                    return U
                },
                bU: function() {
                    return N
                },
                fC: function() {
                    return k
                },
                l_: function() {
                    return H
                }
            });
            var n = t(84477),
                o = t(97352),
                l = t(26815),
                a = t(21155),
                i = t(89849),
                c = t(8e4),
                s = t(90106),
                d = t(10256),
                u = t(89744),
                h = t(86352),
                f = t(12527);
            let b = "ScrollArea",
                [v, p] = (0, i.b)(b),
                [w, m] = v(b),
                $ = (0, o.forwardRef)((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        type: a = "hover",
                        dir: i,
                        scrollHideDelay: s = 600,
                        ...u
                    } = e, [h, f] = (0, o.useState)(null), [b, v] = (0, o.useState)(null), [p, m] = (0, o.useState)(null), [$, g] = (0, o.useState)(null), [S, E] = (0, o.useState)(null), [T, C] = (0, o.useState)(0), [R, y] = (0, o.useState)(0), [P, _] = (0, o.useState)(!1), [L, z] = (0, o.useState)(!1), D = (0, c.e)(r, e => f(e)), W = (0, d.gm)(i);
                    return (0, o.createElement)(w, {
                        scope: t,
                        type: a,
                        dir: W,
                        scrollHideDelay: s,
                        scrollArea: h,
                        viewport: b,
                        onViewportChange: v,
                        content: p,
                        onContentChange: m,
                        scrollbarX: $,
                        onScrollbarXChange: g,
                        scrollbarXEnabled: P,
                        onScrollbarXEnabledChange: _,
                        scrollbarY: S,
                        onScrollbarYChange: E,
                        scrollbarYEnabled: L,
                        onScrollbarYEnabledChange: z,
                        onCornerWidthChange: C,
                        onCornerHeightChange: y
                    }, (0, o.createElement)(l.WV.div, (0, n.Z)({
                        dir: W
                    }, u, {
                        ref: D,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": T + "px",
                            "--radix-scroll-area-corner-height": R + "px",
                            ...e.style
                        }
                    })))
                }),
                g = (0, o.forwardRef)((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        children: a,
                        ...i
                    } = e, s = m("ScrollAreaViewport", t), d = (0, o.useRef)(null), u = (0, c.e)(r, d, s.onViewportChange);
                    return (0, o.createElement)(o.Fragment, null, (0, o.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, o.createElement)(l.WV.div, (0, n.Z)({
                        "data-radix-scroll-area-viewport": ""
                    }, i, {
                        ref: u,
                        style: {
                            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
                            ...e.style
                        }
                    }), (0, o.createElement)("div", {
                        ref: s.onContentChange,
                        style: {
                            minWidth: "100%",
                            display: "table"
                        }
                    }, a)))
                }),
                S = "ScrollAreaScrollbar",
                E = (0, o.forwardRef)((e, r) => {
                    let {
                        forceMount: t,
                        ...l
                    } = e, a = m(S, e.__scopeScrollArea), {
                        onScrollbarXEnabledChange: i,
                        onScrollbarYEnabledChange: c
                    } = a, s = "horizontal" === e.orientation;
                    return (0, o.useEffect)(() => (s ? i(!0) : c(!0), () => {
                        s ? i(!1) : c(!1)
                    }), [s, i, c]), "hover" === a.type ? (0, o.createElement)(T, (0, n.Z)({}, l, {
                        ref: r,
                        forceMount: t
                    })) : "scroll" === a.type ? (0, o.createElement)(C, (0, n.Z)({}, l, {
                        ref: r,
                        forceMount: t
                    })) : "auto" === a.type ? (0, o.createElement)(R, (0, n.Z)({}, l, {
                        ref: r,
                        forceMount: t
                    })) : "always" === a.type ? (0, o.createElement)(y, (0, n.Z)({}, l, {
                        ref: r
                    })) : null
                }),
                T = (0, o.forwardRef)((e, r) => {
                    let {
                        forceMount: t,
                        ...l
                    } = e, i = m(S, e.__scopeScrollArea), [c, s] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        let e = i.scrollArea,
                            r = 0;
                        if (e) {
                            let handlePointerEnter = () => {
                                    window.clearTimeout(r), s(!0)
                                },
                                handlePointerLeave = () => {
                                    r = window.setTimeout(() => s(!1), i.scrollHideDelay)
                                };
                            return e.addEventListener("pointerenter", handlePointerEnter), e.addEventListener("pointerleave", handlePointerLeave), () => {
                                window.clearTimeout(r), e.removeEventListener("pointerenter", handlePointerEnter), e.removeEventListener("pointerleave", handlePointerLeave)
                            }
                        }
                    }, [i.scrollArea, i.scrollHideDelay]), (0, o.createElement)(a.z, {
                        present: t || c
                    }, (0, o.createElement)(R, (0, n.Z)({
                        "data-state": c ? "visible" : "hidden"
                    }, l, {
                        ref: r
                    })))
                }),
                C = (0, o.forwardRef)((e, r) => {
                    var t;
                    let {
                        forceMount: l,
                        ...i
                    } = e, c = m(S, e.__scopeScrollArea), s = "horizontal" === e.orientation, d = $57acba87d6e25586$var$useDebounceCallback(() => h("SCROLL_END"), 100), [u, h] = (t = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, (0, o.useReducer)((e, r) => {
                        let n = t[e][r];
                        return null != n ? n : e
                    }, "hidden"));
                    return (0, o.useEffect)(() => {
                        if ("idle" === u) {
                            let e = window.setTimeout(() => h("HIDE"), c.scrollHideDelay);
                            return () => window.clearTimeout(e)
                        }
                    }, [u, c.scrollHideDelay, h]), (0, o.useEffect)(() => {
                        let e = c.viewport,
                            r = s ? "scrollLeft" : "scrollTop";
                        if (e) {
                            let t = e[r],
                                handleScroll = () => {
                                    let n = e[r],
                                        o = t !== n;
                                    o && (h("SCROLL"), d()), t = n
                                };
                            return e.addEventListener("scroll", handleScroll), () => e.removeEventListener("scroll", handleScroll)
                        }
                    }, [c.viewport, s, h, d]), (0, o.createElement)(a.z, {
                        present: l || "hidden" !== u
                    }, (0, o.createElement)(y, (0, n.Z)({
                        "data-state": "hidden" === u ? "hidden" : "visible"
                    }, i, {
                        ref: r,
                        onPointerEnter: (0, f.M)(e.onPointerEnter, () => h("POINTER_ENTER")),
                        onPointerLeave: (0, f.M)(e.onPointerLeave, () => h("POINTER_LEAVE"))
                    })))
                }),
                R = (0, o.forwardRef)((e, r) => {
                    let t = m(S, e.__scopeScrollArea),
                        {
                            forceMount: l,
                            ...i
                        } = e,
                        [c, s] = (0, o.useState)(!1),
                        d = "horizontal" === e.orientation,
                        u = $57acba87d6e25586$var$useDebounceCallback(() => {
                            if (t.viewport) {
                                let e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                                    r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                                s(d ? e : r)
                            }
                        }, 10);
                    return $57acba87d6e25586$var$useResizeObserver(t.viewport, u), $57acba87d6e25586$var$useResizeObserver(t.content, u), (0, o.createElement)(a.z, {
                        present: l || c
                    }, (0, o.createElement)(y, (0, n.Z)({
                        "data-state": c ? "visible" : "hidden"
                    }, i, {
                        ref: r
                    })))
                }),
                y = (0, o.forwardRef)((e, r) => {
                    let {
                        orientation: t = "vertical",
                        ...l
                    } = e, a = m(S, e.__scopeScrollArea), i = (0, o.useRef)(null), c = (0, o.useRef)(0), [s, d] = (0, o.useState)({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), u = $57acba87d6e25586$var$getThumbRatio(s.viewport, s.content), h = { ...l,
                        sizes: s,
                        onSizesChange: d,
                        hasThumb: !!(u > 0 && u < 1),
                        onThumbChange: e => i.current = e,
                        onThumbPointerUp: () => c.current = 0,
                        onThumbPointerDown: e => c.current = e
                    };

                    function getScrollPosition(e, r) {
                        return function(e, r, t, n = "ltr") {
                            let o = $57acba87d6e25586$var$getThumbSize(t),
                                l = r || o / 2,
                                a = t.scrollbar.paddingStart + l,
                                i = t.scrollbar.size - t.scrollbar.paddingEnd - (o - l),
                                c = t.content - t.viewport,
                                s = $57acba87d6e25586$var$linearScale([a, i], "ltr" === n ? [0, c] : [-1 * c, 0]);
                            return s(e)
                        }(e, c.current, s, r)
                    }
                    return "horizontal" === t ? (0, o.createElement)(P, (0, n.Z)({}, h, {
                        ref: r,
                        onThumbPositionChange: () => {
                            if (a.viewport && i.current) {
                                let e = a.viewport.scrollLeft,
                                    r = $57acba87d6e25586$var$getThumbOffsetFromScroll(e, s, a.dir);
                                i.current.style.transform = `translate3d(${r}px, 0, 0)`
                            }
                        },
                        onWheelScroll: e => {
                            a.viewport && (a.viewport.scrollLeft = e)
                        },
                        onDragScroll: e => {
                            a.viewport && (a.viewport.scrollLeft = getScrollPosition(e, a.dir))
                        }
                    })) : "vertical" === t ? (0, o.createElement)(_, (0, n.Z)({}, h, {
                        ref: r,
                        onThumbPositionChange: () => {
                            if (a.viewport && i.current) {
                                let e = a.viewport.scrollTop,
                                    r = $57acba87d6e25586$var$getThumbOffsetFromScroll(e, s);
                                i.current.style.transform = `translate3d(0, ${r}px, 0)`
                            }
                        },
                        onWheelScroll: e => {
                            a.viewport && (a.viewport.scrollTop = e)
                        },
                        onDragScroll: e => {
                            a.viewport && (a.viewport.scrollTop = getScrollPosition(e))
                        }
                    })) : null
                }),
                P = (0, o.forwardRef)((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: l,
                        ...a
                    } = e, i = m(S, e.__scopeScrollArea), [s, d] = (0, o.useState)(), u = (0, o.useRef)(null), h = (0, c.e)(r, u, i.onScrollbarXChange);
                    return (0, o.useEffect)(() => {
                        u.current && d(getComputedStyle(u.current))
                    }, [u]), (0, o.createElement)(D, (0, n.Z)({
                        "data-orientation": "horizontal"
                    }, a, {
                        ref: h,
                        sizes: t,
                        style: {
                            bottom: 0,
                            left: "rtl" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === i.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": $57acba87d6e25586$var$getThumbSize(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.x),
                        onDragScroll: r => e.onDragScroll(r.x),
                        onWheelScroll: (r, t) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollLeft + r.deltaX;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && i.viewport && s && l({
                                content: i.viewport.scrollWidth,
                                viewport: i.viewport.offsetWidth,
                                scrollbar: {
                                    size: u.current.clientWidth,
                                    paddingStart: $57acba87d6e25586$var$toInt(s.paddingLeft),
                                    paddingEnd: $57acba87d6e25586$var$toInt(s.paddingRight)
                                }
                            })
                        }
                    }))
                }),
                _ = (0, o.forwardRef)((e, r) => {
                    let {
                        sizes: t,
                        onSizesChange: l,
                        ...a
                    } = e, i = m(S, e.__scopeScrollArea), [s, d] = (0, o.useState)(), u = (0, o.useRef)(null), h = (0, c.e)(r, u, i.onScrollbarYChange);
                    return (0, o.useEffect)(() => {
                        u.current && d(getComputedStyle(u.current))
                    }, [u]), (0, o.createElement)(D, (0, n.Z)({
                        "data-orientation": "vertical"
                    }, a, {
                        ref: h,
                        sizes: t,
                        style: {
                            top: 0,
                            right: "ltr" === i.dir ? 0 : void 0,
                            left: "rtl" === i.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": $57acba87d6e25586$var$getThumbSize(t) + "px",
                            ...e.style
                        },
                        onThumbPointerDown: r => e.onThumbPointerDown(r.y),
                        onDragScroll: r => e.onDragScroll(r.y),
                        onWheelScroll: (r, t) => {
                            if (i.viewport) {
                                let n = i.viewport.scrollTop + r.deltaY;
                                e.onWheelScroll(n), n > 0 && n < t && r.preventDefault()
                            }
                        },
                        onResize: () => {
                            u.current && i.viewport && s && l({
                                content: i.viewport.scrollHeight,
                                viewport: i.viewport.offsetHeight,
                                scrollbar: {
                                    size: u.current.clientHeight,
                                    paddingStart: $57acba87d6e25586$var$toInt(s.paddingTop),
                                    paddingEnd: $57acba87d6e25586$var$toInt(s.paddingBottom)
                                }
                            })
                        }
                    }))
                }),
                [L, z] = v(S),
                D = (0, o.forwardRef)((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        sizes: a,
                        hasThumb: i,
                        onThumbChange: d,
                        onThumbPointerUp: u,
                        onThumbPointerDown: h,
                        onThumbPositionChange: b,
                        onDragScroll: v,
                        onWheelScroll: p,
                        onResize: w,
                        ...$
                    } = e, g = m(S, t), [E, T] = (0, o.useState)(null), C = (0, c.e)(r, e => T(e)), R = (0, o.useRef)(null), y = (0, o.useRef)(""), P = g.viewport, _ = a.content - a.viewport, z = (0, s.W)(p), D = (0, s.W)(b), W = $57acba87d6e25586$var$useDebounceCallback(w, 10);

                    function handleDragScroll(e) {
                        if (R.current) {
                            let r = e.clientX - R.current.left,
                                t = e.clientY - R.current.top;
                            v({
                                x: r,
                                y: t
                            })
                        }
                    }
                    return (0, o.useEffect)(() => {
                        let handleWheel = e => {
                            let r = e.target,
                                t = null == E ? void 0 : E.contains(r);
                            t && z(e, _)
                        };
                        return document.addEventListener("wheel", handleWheel, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", handleWheel, {
                            passive: !1
                        })
                    }, [P, E, _, z]), (0, o.useEffect)(D, [a, D]), $57acba87d6e25586$var$useResizeObserver(E, W), $57acba87d6e25586$var$useResizeObserver(g.content, W), (0, o.createElement)(L, {
                        scope: t,
                        scrollbar: E,
                        hasThumb: i,
                        onThumbChange: (0, s.W)(d),
                        onThumbPointerUp: (0, s.W)(u),
                        onThumbPositionChange: D,
                        onThumbPointerDown: (0, s.W)(h)
                    }, (0, o.createElement)(l.WV.div, (0, n.Z)({}, $, {
                        ref: C,
                        style: {
                            position: "absolute",
                            ...$.style
                        },
                        onPointerDown: (0, f.M)(e.onPointerDown, e => {
                            if (0 === e.button) {
                                let r = e.target;
                                r.setPointerCapture(e.pointerId), R.current = E.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", handleDragScroll(e)
                            }
                        }),
                        onPointerMove: (0, f.M)(e.onPointerMove, handleDragScroll),
                        onPointerUp: (0, f.M)(e.onPointerUp, e => {
                            let r = e.target;
                            r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = y.current, R.current = null
                        })
                    })))
                }),
                W = "ScrollAreaThumb",
                x = (0, o.forwardRef)((e, r) => {
                    let {
                        forceMount: t,
                        ...l
                    } = e, i = z(W, e.__scopeScrollArea);
                    return (0, o.createElement)(a.z, {
                        present: t || i.hasThumb
                    }, (0, o.createElement)(A, (0, n.Z)({
                        ref: r
                    }, l)))
                }),
                A = (0, o.forwardRef)((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        style: a,
                        ...i
                    } = e, s = m(W, t), d = z(W, t), {
                        onThumbPositionChange: u
                    } = d, h = (0, c.e)(r, e => d.onThumbChange(e)), b = (0, o.useRef)(), v = $57acba87d6e25586$var$useDebounceCallback(() => {
                        b.current && (b.current(), b.current = void 0)
                    }, 100);
                    return (0, o.useEffect)(() => {
                        let e = s.viewport;
                        if (e) {
                            let handleScroll = () => {
                                if (v(), !b.current) {
                                    let r = $57acba87d6e25586$var$addUnlinkedScrollListener(e, u);
                                    b.current = r, u()
                                }
                            };
                            return u(), e.addEventListener("scroll", handleScroll), () => e.removeEventListener("scroll", handleScroll)
                        }
                    }, [s.viewport, v, u]), (0, o.createElement)(l.WV.div, (0, n.Z)({
                        "data-state": d.hasThumb ? "visible" : "hidden"
                    }, i, {
                        ref: h,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...a
                        },
                        onPointerDownCapture: (0, f.M)(e.onPointerDownCapture, e => {
                            let r = e.target,
                                t = r.getBoundingClientRect(),
                                n = e.clientX - t.left,
                                o = e.clientY - t.top;
                            d.onThumbPointerDown({
                                x: n,
                                y: o
                            })
                        }),
                        onPointerUp: (0, f.M)(e.onPointerUp, d.onThumbPointerUp)
                    }))
                }),
                O = "ScrollAreaCorner",
                M = (0, o.forwardRef)((e, r) => {
                    let t = m(O, e.__scopeScrollArea),
                        l = !!(t.scrollbarX && t.scrollbarY),
                        a = "scroll" !== t.type && l;
                    return a ? (0, o.createElement)(Z, (0, n.Z)({}, e, {
                        ref: r
                    })) : null
                }),
                Z = (0, o.forwardRef)((e, r) => {
                    let {
                        __scopeScrollArea: t,
                        ...a
                    } = e, i = m(O, t), [c, s] = (0, o.useState)(0), [d, u] = (0, o.useState)(0);
                    return $57acba87d6e25586$var$useResizeObserver(i.scrollbarX, () => {
                        var e;
                        let r = (null === (e = i.scrollbarX) || void 0 === e ? void 0 : e.offsetHeight) || 0;
                        i.onCornerHeightChange(r), u(r)
                    }), $57acba87d6e25586$var$useResizeObserver(i.scrollbarY, () => {
                        var e;
                        let r = (null === (e = i.scrollbarY) || void 0 === e ? void 0 : e.offsetWidth) || 0;
                        i.onCornerWidthChange(r), s(r)
                    }), c && d ? (0, o.createElement)(l.WV.div, (0, n.Z)({}, a, {
                        ref: r,
                        style: {
                            width: c,
                            height: d,
                            position: "absolute",
                            right: "ltr" === i.dir ? 0 : void 0,
                            left: "rtl" === i.dir ? 0 : void 0,
                            bottom: 0,
                            ...e.style
                        }
                    })) : null
                });

            function $57acba87d6e25586$var$toInt(e) {
                return e ? parseInt(e, 10) : 0
            }

            function $57acba87d6e25586$var$getThumbRatio(e, r) {
                let t = e / r;
                return isNaN(t) ? 0 : t
            }

            function $57acba87d6e25586$var$getThumbSize(e) {
                let r = $57acba87d6e25586$var$getThumbRatio(e.viewport, e.content),
                    t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
                    n = (e.scrollbar.size - t) * r;
                return Math.max(n, 18)
            }

            function $57acba87d6e25586$var$getThumbOffsetFromScroll(e, r, t = "ltr") {
                let n = $57acba87d6e25586$var$getThumbSize(r),
                    o = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
                    l = r.scrollbar.size - o,
                    a = r.content - r.viewport,
                    i = "ltr" === t ? [0, a] : [-1 * a, 0],
                    c = (0, h.u)(e, i),
                    s = $57acba87d6e25586$var$linearScale([0, a], [0, l - n]);
                return s(c)
            }

            function $57acba87d6e25586$var$linearScale(e, r) {
                return t => {
                    if (e[0] === e[1] || r[0] === r[1]) return r[0];
                    let n = (r[1] - r[0]) / (e[1] - e[0]);
                    return r[0] + n * (t - e[0])
                }
            }
            let $57acba87d6e25586$var$addUnlinkedScrollListener = (e, r = () => {}) => {
                let t = {
                        left: e.scrollLeft,
                        top: e.scrollTop
                    },
                    n = 0;
                return ! function loop() {
                    let o = {
                            left: e.scrollLeft,
                            top: e.scrollTop
                        },
                        l = t.left !== o.left,
                        a = t.top !== o.top;
                    (l || a) && r(), t = o, n = window.requestAnimationFrame(loop)
                }(), () => window.cancelAnimationFrame(n)
            };

            function $57acba87d6e25586$var$useDebounceCallback(e, r) {
                let t = (0, s.W)(e),
                    n = (0, o.useRef)(0);
                return (0, o.useEffect)(() => () => window.clearTimeout(n.current), []), (0, o.useCallback)(() => {
                    window.clearTimeout(n.current), n.current = window.setTimeout(t, r)
                }, [t, r])
            }

            function $57acba87d6e25586$var$useResizeObserver(e, r) {
                let t = (0, s.W)(r);
                (0, u.b)(() => {
                    let r = 0;
                    if (e) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
                        });
                        return n.observe(e), () => {
                            window.cancelAnimationFrame(r), n.unobserve(e)
                        }
                    }
                }, [e, t])
            }
            let k = $,
                H = g,
                I = E,
                N = x,
                U = M
        }
    }
]);