"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5265], {
        6665: function(e, t, n) {
            n.d(t, {
                Dx: function() {
                    return Y
                },
                PK: function() {
                    return $5d3850c4d0b4e6c7$export$dad7c95542bacce0
                },
                VY: function() {
                    return X
                },
                aV: function() {
                    return U
                },
                dk: function() {
                    return j
                },
                fC: function() {
                    return $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9
                },
                h_: function() {
                    return B
                },
                hg: function() {
                    return h
                },
                x8: function() {
                    return q
                },
                xz: function() {
                    return K
                }
            });
            var o = n(84477),
                r = n(97352),
                a = n(12527),
                l = n(8e4),
                c = n(89849),
                u = n(65399),
                i = n(58020),
                d = n(43492),
                s = n(67157),
                f = n(51119),
                p = n(21155),
                g = n(26815),
                D = n(253),
                _ = n(50249),
                b = n(13476),
                m = n(66754);
            let v = "Dialog",
                [E, $] = (0, c.b)(v),
                [R, C] = E(v),
                h = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...c
                    } = e, u = C("DialogTrigger", n), i = (0, l.e)(t, u.triggerRef);
                    return (0, r.createElement)(g.WV.button, (0, o.Z)({
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": u.open,
                        "aria-controls": u.contentId,
                        "data-state": $5d3850c4d0b4e6c7$var$getState(u.open)
                    }, c, {
                        ref: i,
                        onClick: (0, a.M)(e.onClick, u.onOpenToggle)
                    }))
                }),
                M = "DialogPortal",
                [O, w] = E(M, {
                    forceMount: void 0
                }),
                $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: o,
                        container: a
                    } = e, l = C(M, t);
                    return (0, r.createElement)(O, {
                        scope: t,
                        forceMount: n
                    }, r.Children.map(o, e => (0, r.createElement)(p.z, {
                        present: n || l.open
                    }, (0, r.createElement)(f.h, {
                        asChild: !0,
                        container: a
                    }, e))))
                },
                F = "DialogOverlay",
                Z = (0, r.forwardRef)((e, t) => {
                    let n = w(F, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...l
                        } = e,
                        c = C(F, e.__scopeDialog);
                    return c.modal ? (0, r.createElement)(p.z, {
                        present: a || c.open
                    }, (0, r.createElement)(k, (0, o.Z)({}, l, {
                        ref: t
                    }))) : null
                }),
                k = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...a
                    } = e, l = C(F, n);
                    return (0, r.createElement)(_.Z, {
                        as: m.g7,
                        allowPinchZoom: !0,
                        shards: [l.contentRef]
                    }, (0, r.createElement)(g.WV.div, (0, o.Z)({
                        "data-state": $5d3850c4d0b4e6c7$var$getState(l.open)
                    }, a, {
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...a.style
                        }
                    })))
                }),
                y = "DialogContent",
                I = (0, r.forwardRef)((e, t) => {
                    let n = w(y, e.__scopeDialog),
                        {
                            forceMount: a = n.forceMount,
                            ...l
                        } = e,
                        c = C(y, e.__scopeDialog);
                    return (0, r.createElement)(p.z, {
                        present: a || c.open
                    }, c.modal ? (0, r.createElement)(P, (0, o.Z)({}, l, {
                        ref: t
                    })) : (0, r.createElement)(x, (0, o.Z)({}, l, {
                        ref: t
                    })))
                }),
                P = (0, r.forwardRef)((e, t) => {
                    let n = C(y, e.__scopeDialog),
                        c = (0, r.useRef)(null),
                        u = (0, l.e)(t, n.contentRef, c);
                    return (0, r.useEffect)(() => {
                        let e = c.current;
                        if (e) return (0, b.Ry)(e)
                    }, []), (0, r.createElement)(A, (0, o.Z)({}, e, {
                        ref: u,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            var t;
                            e.preventDefault(), null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                        }),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                o = 2 === t.button || n;
                            o && e.preventDefault()
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => e.preventDefault())
                    }))
                }),
                x = (0, r.forwardRef)((e, t) => {
                    let n = C(y, e.__scopeDialog),
                        a = (0, r.useRef)(!1),
                        l = (0, r.useRef)(!1);
                    return (0, r.createElement)(A, (0, o.Z)({}, e, {
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            var o, r;
                            null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t), t.defaultPrevented || (a.current || null === (r = n.triggerRef.current) || void 0 === r || r.focus(), t.preventDefault()), a.current = !1, l.current = !1
                        },
                        onInteractOutside: t => {
                            var o, r;
                            null === (o = e.onInteractOutside) || void 0 === o || o.call(e, t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (l.current = !0));
                            let c = t.target,
                                u = null === (r = n.triggerRef.current) || void 0 === r ? void 0 : r.contains(c);
                            u && t.preventDefault(), "focusin" === t.detail.originalEvent.type && l.current && t.preventDefault()
                        }
                    }))
                }),
                A = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: c,
                        onCloseAutoFocus: u,
                        ...i
                    } = e, f = C(y, n), p = (0, r.useRef)(null), g = (0, l.e)(t, p);
                    return (0, D.EW)(), (0, r.createElement)(r.Fragment, null, (0, r.createElement)(s.M, {
                        asChild: !0,
                        loop: !0,
                        trapped: a,
                        onMountAutoFocus: c,
                        onUnmountAutoFocus: u
                    }, (0, r.createElement)(d.XB, (0, o.Z)({
                        role: "dialog",
                        id: f.contentId,
                        "aria-describedby": f.descriptionId,
                        "aria-labelledby": f.titleId,
                        "data-state": $5d3850c4d0b4e6c7$var$getState(f.open)
                    }, i, {
                        ref: g,
                        onDismiss: () => f.onOpenChange(!1)
                    }))), !1)
                }),
                V = "DialogTitle",
                W = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...a
                    } = e, l = C(V, n);
                    return (0, r.createElement)(g.WV.h2, (0, o.Z)({
                        id: l.titleId
                    }, a, {
                        ref: t
                    }))
                }),
                T = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...a
                    } = e, l = C("DialogDescription", n);
                    return (0, r.createElement)(g.WV.p, (0, o.Z)({
                        id: l.descriptionId
                    }, a, {
                        ref: t
                    }))
                }),
                S = (0, r.forwardRef)((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...l
                    } = e, c = C("DialogClose", n);
                    return (0, r.createElement)(g.WV.button, (0, o.Z)({
                        type: "button"
                    }, l, {
                        ref: t,
                        onClick: (0, a.M)(e.onClick, () => c.onOpenChange(!1))
                    }))
                });

            function $5d3850c4d0b4e6c7$var$getState(e) {
                return e ? "open" : "closed"
            }
            let [z, N] = (0, c.k)("DialogTitleWarning", {
                contentName: y,
                titleName: V,
                docsSlug: "dialog"
            }), $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = e => {
                let {
                    __scopeDialog: t,
                    children: n,
                    open: o,
                    defaultOpen: a,
                    onOpenChange: l,
                    modal: c = !0
                } = e, d = (0, r.useRef)(null), s = (0, r.useRef)(null), [f = !1, p] = (0, i.T)({
                    prop: o,
                    defaultProp: a,
                    onChange: l
                });
                return (0, r.createElement)(R, {
                    scope: t,
                    triggerRef: d,
                    contentRef: s,
                    contentId: (0, u.M)(),
                    titleId: (0, u.M)(),
                    descriptionId: (0, u.M)(),
                    open: f,
                    onOpenChange: p,
                    onOpenToggle: (0, r.useCallback)(() => p(e => !e), [p]),
                    modal: c
                }, n)
            }, K = h, B = $5d3850c4d0b4e6c7$export$dad7c95542bacce0, U = Z, X = I, Y = W, j = T, q = S
        }
    }
]);