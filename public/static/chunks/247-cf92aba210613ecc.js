"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [247], {
        40651: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "angle-down",
                icon: [384, 512, [8964], "f107", "M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z"]
            }, t.gc = t.DF
        },
        29993: function(e, t) {
            t.DF = {
                prefix: "far",
                iconName: "angle-up",
                icon: [384, 512, [8963], "f106", "M23.5 294.5l152-143.1C180.1 146.2 186.1 144 192 144s11.88 2.188 16.5 6.562l152 143.1c9.625 9.125 10.03 24.31 .9375 33.93c-9.125 9.688-24.38 10.03-33.94 .9375l-135.5-128.4l-135.5 128.4c-9.562 9.094-24.75 8.75-33.94-.9375C13.47 318.9 13.87 303.7 23.5 294.5z"]
            }, t.on = t.DF
        },
        49079: function(e, t, n) {
            n.d(t, {
                $G: function() {
                    return ex
                },
                B4: function() {
                    return eh
                },
                JO: function() {
                    return em
                },
                VY: function() {
                    return eg
                },
                ck: function() {
                    return eb
                },
                eT: function() {
                    return eS
                },
                fC: function() {
                    return $cc7e05a45900e73f$export$be92b6f5f03c0fe9
                },
                h_: function() {
                    return $cc7e05a45900e73f$export$602eac185826482c
                },
                i4: function() {
                    return B
                },
                l_: function() {
                    return ew
                },
                u_: function() {
                    return ey
                },
                xz: function() {
                    return ev
                }
            });
            var l = n(84477),
                r = n(97352),
                o = n(64353),
                a = n(86352),
                i = n(12527),
                c = n(63545),
                u = n(8e4),
                d = n(89849),
                s = n(10256),
                p = n(43492),
                f = n(253),
                v = n(67157),
                h = n(65399),
                m = n(40764),
                g = n(51119),
                w = n(26815),
                b = n(66754),
                S = n(90106),
                y = n(58020),
                x = n(89744),
                C = n(96648),
                E = n(21666),
                P = n(13476),
                M = n(50249);
            let T = [" ", "Enter", "ArrowUp", "ArrowDown"],
                k = [" ", "Enter"],
                _ = "Select",
                [D, I, R] = (0, c.B)(_),
                [$, O] = (0, d.b)(_, [R, m.D7]),
                V = (0, m.D7)(),
                [L, N] = $(_),
                [H, W] = $(_),
                B = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        disabled: o = !1,
                        ...a
                    } = e, c = V(n), d = N("SelectTrigger", n), s = d.disabled || o, p = (0, u.e)(t, d.onTriggerChange), f = I(n), [v, h, g] = $cc7e05a45900e73f$var$useTypeaheadSearch(e => {
                        let t = f().filter(e => !e.disabled),
                            n = t.find(e => e.value === d.value),
                            l = $cc7e05a45900e73f$var$findNextItem(t, e, n);
                        void 0 !== l && d.onValueChange(l.value)
                    }), handleOpen = () => {
                        s || (d.onOpenChange(!0), g())
                    };
                    return (0, r.createElement)(m.ee, (0, l.Z)({
                        asChild: !0
                    }, c), (0, r.createElement)(w.WV.button, (0, l.Z)({
                        type: "button",
                        role: "combobox",
                        "aria-controls": d.contentId,
                        "aria-expanded": d.open,
                        "aria-required": d.required,
                        "aria-autocomplete": "none",
                        dir: d.dir,
                        "data-state": d.open ? "open" : "closed",
                        disabled: s,
                        "data-disabled": s ? "" : void 0,
                        "data-placeholder": void 0 === d.value ? "" : void 0
                    }, a, {
                        ref: p,
                        onClick: (0, i.M)(a.onClick, e => {
                            e.currentTarget.focus()
                        }),
                        onPointerDown: (0, i.M)(a.onPointerDown, e => {
                            let t = e.target;
                            t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && (handleOpen(), d.triggerPointerDownPosRef.current = {
                                x: Math.round(e.pageX),
                                y: Math.round(e.pageY)
                            }, e.preventDefault())
                        }),
                        onKeyDown: (0, i.M)(a.onKeyDown, e => {
                            let t = "" !== v.current,
                                n = e.ctrlKey || e.altKey || e.metaKey;
                            n || 1 !== e.key.length || h(e.key), (!t || " " !== e.key) && T.includes(e.key) && (handleOpen(), e.preventDefault())
                        })
                    })))
                }),
                A = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: o,
                        style: a,
                        children: i,
                        placeholder: c,
                        ...d
                    } = e, s = N("SelectValue", n), {
                        onValueNodeHasChildrenChange: p
                    } = s, f = void 0 !== i, v = (0, u.e)(t, s.onValueNodeChange);
                    return (0, x.b)(() => {
                        p(f)
                    }, [p, f]), (0, r.createElement)(w.WV.span, (0, l.Z)({}, d, {
                        ref: v,
                        style: {
                            pointerEvents: "none"
                        }
                    }), void 0 === s.value && void 0 !== c ? c : i)
                }),
                Z = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        children: o,
                        ...a
                    } = e;
                    return (0, r.createElement)(w.WV.span, (0, l.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t
                    }), o || "▼")
                }),
                F = "SelectContent",
                K = (0, r.forwardRef)((e, t) => {
                    let n = N(F, e.__scopeSelect),
                        [a, i] = (0, r.useState)();
                    return ((0, x.b)(() => {
                        i(new DocumentFragment)
                    }, []), n.open) ? (0, r.createElement)(q, (0, l.Z)({}, e, {
                        ref: t
                    })) : a ? (0, o.createPortal)((0, r.createElement)(U, {
                        scope: e.__scopeSelect
                    }, (0, r.createElement)(D.Slot, {
                        scope: e.__scopeSelect
                    }, (0, r.createElement)("div", null, e.children))), a) : null
                }),
                [U, z] = $(F),
                q = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        position: o = "item-aligned",
                        onCloseAutoFocus: a,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: d,
                        side: s,
                        sideOffset: h,
                        align: m,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: S,
                        collisionPadding: y,
                        sticky: x,
                        hideWhenDetached: C,
                        avoidCollisions: E,
                        ...T
                    } = e, k = N(F, n), [_, D] = (0, r.useState)(null), [R, $] = (0, r.useState)(null), O = (0, u.e)(t, e => D(e)), [V, L] = (0, r.useState)(null), [H, W] = (0, r.useState)(null), B = I(n), [A, Z] = (0, r.useState)(!1), K = (0, r.useRef)(!1);
                    (0, r.useEffect)(() => {
                        if (_) return (0, P.Ry)(_)
                    }, [_]), (0, f.EW)();
                    let z = (0, r.useCallback)(e => {
                            let [t, ...n] = B().map(e => e.ref.current), [l] = n.slice(-1), r = document.activeElement;
                            for (let n of e)
                                if (n === r || (null == n || n.scrollIntoView({
                                        block: "nearest"
                                    }), n === t && R && (R.scrollTop = 0), n === l && R && (R.scrollTop = R.scrollHeight), null == n || n.focus(), document.activeElement !== r)) return
                        }, [B, R]),
                        q = (0, r.useCallback)(() => z([V, _]), [z, V, _]);
                    (0, r.useEffect)(() => {
                        A && q()
                    }, [A, q]);
                    let {
                        onOpenChange: X,
                        triggerPointerDownPosRef: G
                    } = k;
                    (0, r.useEffect)(() => {
                        if (_) {
                            let e = {
                                    x: 0,
                                    y: 0
                                },
                                handlePointerMove = t => {
                                    var n, l, r, o;
                                    e = {
                                        x: Math.abs(Math.round(t.pageX) - (null !== (n = null === (l = G.current) || void 0 === l ? void 0 : l.x) && void 0 !== n ? n : 0)),
                                        y: Math.abs(Math.round(t.pageY) - (null !== (r = null === (o = G.current) || void 0 === o ? void 0 : o.y) && void 0 !== r ? r : 0))
                                    }
                                },
                                handlePointerUp = t => {
                                    e.x <= 10 && e.y <= 10 ? t.preventDefault() : _.contains(t.target) || X(!1), document.removeEventListener("pointermove", handlePointerMove), G.current = null
                                };
                            return null !== G.current && (document.addEventListener("pointermove", handlePointerMove), document.addEventListener("pointerup", handlePointerUp, {
                                capture: !0,
                                once: !0
                            })), () => {
                                document.removeEventListener("pointermove", handlePointerMove), document.removeEventListener("pointerup", handlePointerUp, {
                                    capture: !0
                                })
                            }
                        }
                    }, [_, X, G]), (0, r.useEffect)(() => {
                        let close = () => X(!1);
                        return window.addEventListener("blur", close), window.addEventListener("resize", close), () => {
                            window.removeEventListener("blur", close), window.removeEventListener("resize", close)
                        }
                    }, [X]);
                    let [J, Q] = $cc7e05a45900e73f$var$useTypeaheadSearch(e => {
                        let t = B().filter(e => !e.disabled),
                            n = t.find(e => e.ref.current === document.activeElement),
                            l = $cc7e05a45900e73f$var$findNextItem(t, e, n);
                        l && setTimeout(() => l.ref.current.focus())
                    }), ee = (0, r.useCallback)((e, t, n) => {
                        let l = !K.current && !n,
                            r = void 0 !== k.value && k.value === t;
                        (r || l) && (L(e), l && (K.current = !0))
                    }, [k.value]), et = (0, r.useCallback)(() => null == _ ? void 0 : _.focus(), [_]), en = (0, r.useCallback)((e, t, n) => {
                        let l = !K.current && !n,
                            r = void 0 !== k.value && k.value === t;
                        (r || l) && W(e)
                    }, [k.value]), el = "popper" === o ? j : Y, er = el === j ? {
                        side: s,
                        sideOffset: h,
                        align: m,
                        alignOffset: g,
                        arrowPadding: w,
                        collisionBoundary: S,
                        collisionPadding: y,
                        sticky: x,
                        hideWhenDetached: C,
                        avoidCollisions: E
                    } : {};
                    return (0, r.createElement)(U, {
                        scope: n,
                        content: _,
                        viewport: R,
                        onViewportChange: $,
                        itemRefCallback: ee,
                        selectedItem: V,
                        onItemLeave: et,
                        itemTextRefCallback: en,
                        focusSelectedItem: q,
                        selectedItemText: H,
                        position: o,
                        isPositioned: A,
                        searchRef: J
                    }, (0, r.createElement)(M.Z, {
                        as: b.g7,
                        allowPinchZoom: !0
                    }, (0, r.createElement)(v.M, {
                        asChild: !0,
                        trapped: k.open,
                        onMountAutoFocus: e => {
                            e.preventDefault()
                        },
                        onUnmountAutoFocus: (0, i.M)(a, e => {
                            var t;
                            null === (t = k.trigger) || void 0 === t || t.focus({
                                preventScroll: !0
                            }), e.preventDefault()
                        })
                    }, (0, r.createElement)(p.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: d,
                        onFocusOutside: e => e.preventDefault(),
                        onDismiss: () => k.onOpenChange(!1)
                    }, (0, r.createElement)(el, (0, l.Z)({
                        role: "listbox",
                        id: k.contentId,
                        "data-state": k.open ? "open" : "closed",
                        dir: k.dir,
                        onContextMenu: e => e.preventDefault()
                    }, T, er, {
                        onPlaced: () => Z(!0),
                        ref: O,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            outline: "none",
                            ...T.style
                        },
                        onKeyDown: (0, i.M)(T.onKeyDown, e => {
                            let t = e.ctrlKey || e.altKey || e.metaKey;
                            if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || Q(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                let t = B().filter(e => !e.disabled),
                                    n = t.map(e => e.ref.current);
                                if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                    let t = e.target,
                                        l = n.indexOf(t);
                                    n = n.slice(l + 1)
                                }
                                setTimeout(() => z(n)), e.preventDefault()
                            }
                        })
                    }))))))
                }),
                Y = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onPlaced: o,
                        ...i
                    } = e, c = N(F, n), d = z(F, n), [s, p] = (0, r.useState)(null), [f, v] = (0, r.useState)(null), h = (0, u.e)(t, e => v(e)), m = I(n), g = (0, r.useRef)(!1), b = (0, r.useRef)(!0), {
                        viewport: S,
                        selectedItem: y,
                        selectedItemText: C,
                        focusSelectedItem: E
                    } = d, P = (0, r.useCallback)(() => {
                        if (c.trigger && c.valueNode && s && f && S && y && C) {
                            let e = c.trigger.getBoundingClientRect(),
                                t = f.getBoundingClientRect(),
                                n = c.valueNode.getBoundingClientRect(),
                                l = C.getBoundingClientRect();
                            if ("rtl" !== c.dir) {
                                let r = l.left - t.left,
                                    o = n.left - r,
                                    i = e.left - o,
                                    c = e.width + i,
                                    u = Math.max(c, t.width),
                                    d = window.innerWidth - 10,
                                    p = (0, a.u)(o, [10, d - u]);
                                s.style.minWidth = c + "px", s.style.left = p + "px"
                            } else {
                                let r = t.right - l.right,
                                    o = window.innerWidth - n.right - r,
                                    i = window.innerWidth - e.right - o,
                                    c = e.width + i,
                                    u = Math.max(c, t.width),
                                    d = window.innerWidth - 10,
                                    p = (0, a.u)(o, [10, d - u]);
                                s.style.minWidth = c + "px", s.style.right = p + "px"
                            }
                            let r = m(),
                                i = window.innerHeight - 20,
                                u = S.scrollHeight,
                                d = window.getComputedStyle(f),
                                p = parseInt(d.borderTopWidth, 10),
                                v = parseInt(d.paddingTop, 10),
                                h = parseInt(d.borderBottomWidth, 10),
                                w = parseInt(d.paddingBottom, 10),
                                b = p + v + u + w + h,
                                x = Math.min(5 * y.offsetHeight, b),
                                E = window.getComputedStyle(S),
                                P = parseInt(E.paddingTop, 10),
                                M = parseInt(E.paddingBottom, 10),
                                T = e.top + e.height / 2 - 10,
                                k = y.offsetHeight / 2,
                                _ = y.offsetTop + k,
                                D = p + v + _;
                            if (D <= T) {
                                let e = y === r[r.length - 1].ref.current;
                                s.style.bottom = "0px";
                                let t = f.clientHeight - S.offsetTop - S.offsetHeight;
                                s.style.height = D + Math.max(i - T, k + (e ? M : 0) + t + h) + "px"
                            } else {
                                let e = r[0] && y === r[0].ref.current;
                                s.style.top = "0px";
                                let t = Math.max(T, p + S.offsetTop + (e ? P : 0) + k);
                                s.style.height = t + (b - D) + "px", S.scrollTop = D - T + S.offsetTop
                            }
                            s.style.margin = "10px 0", s.style.minHeight = x + "px", s.style.maxHeight = i + "px", null == o || o(), requestAnimationFrame(() => g.current = !0)
                        }
                    }, [m, c.trigger, c.valueNode, s, f, S, y, C, c.dir, o]);
                    (0, x.b)(() => P(), [P]);
                    let [M, T] = (0, r.useState)();
                    (0, x.b)(() => {
                        f && T(window.getComputedStyle(f).zIndex)
                    }, [f]);
                    let k = (0, r.useCallback)(e => {
                        e && !0 === b.current && (P(), null == E || E(), b.current = !1)
                    }, [P, E]);
                    return (0, r.createElement)(X, {
                        scope: n,
                        contentWrapper: s,
                        shouldExpandOnScrollRef: g,
                        onScrollButtonChange: k
                    }, (0, r.createElement)("div", {
                        ref: p,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: M
                        }
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({}, i, {
                        ref: h,
                        style: {
                            boxSizing: "border-box",
                            maxHeight: "100%",
                            ...i.style
                        }
                    }))))
                }),
                j = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        align: o = "start",
                        collisionPadding: a = 10,
                        ...i
                    } = e, c = V(n);
                    return (0, r.createElement)(m.VY, (0, l.Z)({}, c, i, {
                        ref: t,
                        align: o,
                        collisionPadding: a,
                        style: {
                            boxSizing: "border-box",
                            ...i.style,
                            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                [X, G] = $(F, {}),
                J = "SelectViewport",
                Q = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        ...o
                    } = e, a = z(J, n), c = G(J, n), d = (0, u.e)(t, a.onViewportChange), s = (0, r.useRef)(0);
                    return (0, r.createElement)(r.Fragment, null, (0, r.createElement)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        }
                    }), (0, r.createElement)(D.Slot, {
                        scope: n
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({
                        "data-radix-select-viewport": "",
                        role: "presentation"
                    }, o, {
                        ref: d,
                        style: {
                            position: "relative",
                            flex: 1,
                            overflow: "auto",
                            ...o.style
                        },
                        onScroll: (0, i.M)(o.onScroll, e => {
                            let t = e.currentTarget,
                                {
                                    contentWrapper: n,
                                    shouldExpandOnScrollRef: l
                                } = c;
                            if (null != l && l.current && n) {
                                let e = Math.abs(s.current - t.scrollTop);
                                if (e > 0) {
                                    let l = window.innerHeight - 20,
                                        r = parseFloat(n.style.minHeight),
                                        o = parseFloat(n.style.height),
                                        a = Math.max(r, o);
                                    if (a < l) {
                                        let r = a + e,
                                            o = Math.min(l, r),
                                            i = r - o;
                                        n.style.height = o + "px", "0px" === n.style.bottom && (t.scrollTop = i > 0 ? i : 0, n.style.justifyContent = "flex-end")
                                    }
                                }
                            }
                            s.current = t.scrollTop
                        })
                    }))))
                }),
                [ee, et] = $("SelectGroup"),
                en = "SelectItem",
                [el, er] = $(en),
                eo = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        value: o,
                        disabled: a = !1,
                        textValue: c,
                        ...d
                    } = e, s = N(en, n), p = z(en, n), f = s.value === o, [v, m] = (0, r.useState)(null != c ? c : ""), [g, b] = (0, r.useState)(!1), S = (0, u.e)(t, e => {
                        var t;
                        return null === (t = p.itemRefCallback) || void 0 === t ? void 0 : t.call(p, e, o, a)
                    }), y = (0, h.M)(), handleSelect = () => {
                        a || (s.onValueChange(o), s.onOpenChange(!1))
                    };
                    return (0, r.createElement)(el, {
                        scope: n,
                        value: o,
                        disabled: a,
                        textId: y,
                        isSelected: f,
                        onItemTextChange: (0, r.useCallback)(e => {
                            m(t => {
                                var n;
                                return t || (null !== (n = null == e ? void 0 : e.textContent) && void 0 !== n ? n : "").trim()
                            })
                        }, [])
                    }, (0, r.createElement)(D.ItemSlot, {
                        scope: n,
                        value: o,
                        disabled: a,
                        textValue: v
                    }, (0, r.createElement)(w.WV.div, (0, l.Z)({
                        role: "option",
                        "aria-labelledby": y,
                        "data-highlighted": g ? "" : void 0,
                        "aria-selected": f && g,
                        "data-state": f ? "checked" : "unchecked",
                        "aria-disabled": a || void 0,
                        "data-disabled": a ? "" : void 0,
                        tabIndex: a ? void 0 : -1
                    }, d, {
                        ref: S,
                        onFocus: (0, i.M)(d.onFocus, () => b(!0)),
                        onBlur: (0, i.M)(d.onBlur, () => b(!1)),
                        onPointerUp: (0, i.M)(d.onPointerUp, handleSelect),
                        onPointerMove: (0, i.M)(d.onPointerMove, e => {
                            if (a) {
                                var t;
                                null === (t = p.onItemLeave) || void 0 === t || t.call(p)
                            } else e.currentTarget.focus({
                                preventScroll: !0
                            })
                        }),
                        onPointerLeave: (0, i.M)(d.onPointerLeave, e => {
                            if (e.currentTarget === document.activeElement) {
                                var t;
                                null === (t = p.onItemLeave) || void 0 === t || t.call(p)
                            }
                        }),
                        onKeyDown: (0, i.M)(d.onKeyDown, e => {
                            var t;
                            let n = (null === (t = p.searchRef) || void 0 === t ? void 0 : t.current) !== "";
                            n && " " === e.key || (k.includes(e.key) && handleSelect(), " " === e.key && e.preventDefault())
                        })
                    }))))
                }),
                ea = "SelectItemText",
                ei = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        className: a,
                        style: i,
                        ...c
                    } = e, d = N(ea, n), s = z(ea, n), p = er(ea, n), f = W(ea, n), [v, h] = (0, r.useState)(null), m = (0, u.e)(t, e => h(e), p.onItemTextChange, e => {
                        var t;
                        return null === (t = s.itemTextRefCallback) || void 0 === t ? void 0 : t.call(s, e, p.value, p.disabled)
                    }), g = null == v ? void 0 : v.textContent, b = (0, r.useMemo)(() => (0, r.createElement)("option", {
                        key: p.value,
                        value: p.value,
                        disabled: p.disabled
                    }, g), [p.disabled, p.value, g]), {
                        onNativeOptionAdd: S,
                        onNativeOptionRemove: y
                    } = f;
                    return (0, x.b)(() => (S(b), () => y(b)), [S, y, b]), (0, r.createElement)(r.Fragment, null, (0, r.createElement)(w.WV.span, (0, l.Z)({
                        id: p.textId
                    }, c, {
                        ref: m
                    })), p.isSelected && d.valueNode && !d.valueNodeHasChildren ? (0, o.createPortal)(c.children, d.valueNode) : null)
                }),
                ec = "SelectScrollUpButton",
                eu = (0, r.forwardRef)((e, t) => {
                    let n = z(ec, e.__scopeSelect),
                        o = G(ec, e.__scopeSelect),
                        [a, i] = (0, r.useState)(!1),
                        c = (0, u.e)(t, o.onScrollButtonChange);
                    return (0, x.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = n.viewport;

                            function handleScroll() {
                                let t = e.scrollTop > 0;
                                i(t)
                            }
                            return handleScroll(), e.addEventListener("scroll", handleScroll), () => e.removeEventListener("scroll", handleScroll)
                        }
                    }, [n.viewport, n.isPositioned]), a ? (0, r.createElement)(ep, (0, l.Z)({}, e, {
                        ref: c,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                        }
                    })) : null
                }),
                ed = "SelectScrollDownButton",
                es = (0, r.forwardRef)((e, t) => {
                    let n = z(ed, e.__scopeSelect),
                        o = G(ed, e.__scopeSelect),
                        [a, i] = (0, r.useState)(!1),
                        c = (0, u.e)(t, o.onScrollButtonChange);
                    return (0, x.b)(() => {
                        if (n.viewport && n.isPositioned) {
                            let e = n.viewport;

                            function handleScroll() {
                                let t = e.scrollHeight - e.clientHeight,
                                    n = Math.ceil(e.scrollTop) < t;
                                i(n)
                            }
                            return handleScroll(), e.addEventListener("scroll", handleScroll), () => e.removeEventListener("scroll", handleScroll)
                        }
                    }, [n.viewport, n.isPositioned]), a ? (0, r.createElement)(ep, (0, l.Z)({}, e, {
                        ref: c,
                        onAutoScroll: () => {
                            let {
                                viewport: e,
                                selectedItem: t
                            } = n;
                            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                        }
                    })) : null
                }),
                ep = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeSelect: n,
                        onAutoScroll: o,
                        ...a
                    } = e, c = z("SelectScrollButton", n), u = (0, r.useRef)(null), d = I(n), s = (0, r.useCallback)(() => {
                        null !== u.current && (window.clearInterval(u.current), u.current = null)
                    }, []);
                    return (0, r.useEffect)(() => () => s(), [s]), (0, x.b)(() => {
                        var e;
                        let t = d().find(e => e.ref.current === document.activeElement);
                        null == t || null === (e = t.ref.current) || void 0 === e || e.scrollIntoView({
                            block: "nearest"
                        })
                    }, [d]), (0, r.createElement)(w.WV.div, (0, l.Z)({
                        "aria-hidden": !0
                    }, a, {
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...a.style
                        },
                        onPointerDown: (0, i.M)(a.onPointerDown, () => {
                            null === u.current && (u.current = window.setInterval(o, 50))
                        }),
                        onPointerMove: (0, i.M)(a.onPointerMove, () => {
                            var e;
                            null === (e = c.onItemLeave) || void 0 === e || e.call(c), null === u.current && (u.current = window.setInterval(o, 50))
                        }),
                        onPointerLeave: (0, i.M)(a.onPointerLeave, () => {
                            s()
                        })
                    }))
                }),
                ef = (0, r.forwardRef)((e, t) => {
                    let {
                        value: n,
                        ...o
                    } = e, a = (0, r.useRef)(null), i = (0, u.e)(t, a), c = (0, C.D)(n);
                    return (0, r.useEffect)(() => {
                        let e = a.current,
                            t = window.HTMLSelectElement.prototype,
                            l = Object.getOwnPropertyDescriptor(t, "value"),
                            r = l.set;
                        if (c !== n && r) {
                            let t = new Event("change", {
                                bubbles: !0
                            });
                            r.call(e, n), e.dispatchEvent(t)
                        }
                    }, [c, n]), (0, r.createElement)(E.T, {
                        asChild: !0
                    }, (0, r.createElement)("select", (0, l.Z)({}, o, {
                        ref: i,
                        defaultValue: n
                    })))
                });

            function $cc7e05a45900e73f$var$useTypeaheadSearch(e) {
                let t = (0, S.W)(e),
                    n = (0, r.useRef)(""),
                    l = (0, r.useRef)(0),
                    o = (0, r.useCallback)(e => {
                        let r = n.current + e;
                        t(r),
                            function updateSearch(e) {
                                n.current = e, window.clearTimeout(l.current), "" !== e && (l.current = window.setTimeout(() => updateSearch(""), 1e3))
                            }(r)
                    }, [t]),
                    a = (0, r.useCallback)(() => {
                        n.current = "", window.clearTimeout(l.current)
                    }, []);
                return (0, r.useEffect)(() => () => window.clearTimeout(l.current), []), [n, o, a]
            }

            function $cc7e05a45900e73f$var$findNextItem(e, t, n) {
                var l;
                let r = t.length > 1 && Array.from(t).every(e => e === t[0]),
                    o = r ? t[0] : t,
                    a = n ? e.indexOf(n) : -1,
                    i = (l = Math.max(a, 0), e.map((t, n) => e[(l + n) % e.length])),
                    c = 1 === o.length;
                c && (i = i.filter(e => e !== n));
                let u = i.find(e => e.textValue.toLowerCase().startsWith(o.toLowerCase()));
                return u !== n ? u : void 0
            }
            ef.displayName = "BubbleSelect";
            let $cc7e05a45900e73f$export$be92b6f5f03c0fe9 = e => {
                    let {
                        __scopeSelect: t,
                        children: n,
                        open: l,
                        defaultOpen: o,
                        onOpenChange: a,
                        value: i,
                        defaultValue: c,
                        onValueChange: u,
                        dir: d,
                        name: p,
                        autoComplete: f,
                        disabled: v,
                        required: g
                    } = e, w = V(t), [b, S] = (0, r.useState)(null), [x, C] = (0, r.useState)(null), [E, P] = (0, r.useState)(!1), M = (0, s.gm)(d), [T = !1, k] = (0, y.T)({
                        prop: l,
                        defaultProp: o,
                        onChange: a
                    }), [_, I] = (0, y.T)({
                        prop: i,
                        defaultProp: c,
                        onChange: u
                    }), R = (0, r.useRef)(null), $ = !b || !!b.closest("form"), [O, N] = (0, r.useState)(new Set), W = Array.from(O).map(e => e.props.value).join(";");
                    return (0, r.createElement)(m.fC, w, (0, r.createElement)(L, {
                        required: g,
                        scope: t,
                        trigger: b,
                        onTriggerChange: S,
                        valueNode: x,
                        onValueNodeChange: C,
                        valueNodeHasChildren: E,
                        onValueNodeHasChildrenChange: P,
                        contentId: (0, h.M)(),
                        value: _,
                        onValueChange: I,
                        open: T,
                        onOpenChange: k,
                        dir: M,
                        triggerPointerDownPosRef: R,
                        disabled: v
                    }, (0, r.createElement)(D.Provider, {
                        scope: t
                    }, (0, r.createElement)(H, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: (0, r.useCallback)(e => {
                            N(t => new Set(t).add(e))
                        }, []),
                        onNativeOptionRemove: (0, r.useCallback)(e => {
                            N(t => {
                                let n = new Set(t);
                                return n.delete(e), n
                            })
                        }, [])
                    }, n)), $ ? (0, r.createElement)(ef, {
                        key: W,
                        "aria-hidden": !0,
                        required: g,
                        tabIndex: -1,
                        name: p,
                        autoComplete: f,
                        value: _,
                        onChange: e => I(e.target.value),
                        disabled: v
                    }, void 0 === _ ? (0, r.createElement)("option", {
                        value: ""
                    }) : null, Array.from(O)) : null))
                },
                ev = B,
                eh = A,
                em = Z,
                $cc7e05a45900e73f$export$602eac185826482c = e => (0, r.createElement)(g.h, (0, l.Z)({
                    asChild: !0
                }, e)),
                eg = K,
                ew = Q,
                eb = eo,
                eS = ei,
                ey = eu,
                ex = es
        },
        96648: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return $010c2913dbd2fe3d$export$5cae361ad82dce8b
                }
            });
            var l = n(97352);

            function $010c2913dbd2fe3d$export$5cae361ad82dce8b(e) {
                let t = (0, l.useRef)({
                    value: e,
                    previous: e
                });
                return (0, l.useMemo)(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        }
    }
]);