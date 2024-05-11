"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5789], {
        58516: function(e, t, r) {
            r.r(t), r.d(t, {
                ReservoirProvider: function() {
                    return ReservoirProvider
                }
            });
            var a = r(16356);
            r(97352);
            var i = r(15033),
                n = r(47226);
            let o = "a1882a5e-dd1b-5220-ab96-4653e1a7db54",
                s = {
                    chains: [{
                        id: n.Wr.MAINNET,
                        baseApiUrl: "https://api.reservoir.tools",
                        active: !0,
                        apiKey: o
                    }, {
                        id: n.Wr.GOERLI,
                        baseApiUrl: "https://api-goerli.reservoir.tools",
                        active: !1,
                        apiKey: o
                    }, {
                        id: n.Wr.SEPOLIA,
                        baseApiUrl: "https://api-sepolia.reservoir.tools",
                        active: !1,
                        apiKey: o
                    }, {
                        id: n.Wr.OPTIMISM,
                        baseApiUrl: "https://api-optimism.reservoir.tools/",
                        active: !1,
                        apiKey: o
                    }, {
                        id: n.Wr.OPTIMISM_GOERLI,
                        baseApiUrl: "https://api-optimism.reservoir.tools/",
                        active: !1,
                        apiKey: o
                    }, {
                        id: n.Wr.BASE,
                        baseApiUrl: "https://api-base.reservoir.tools/",
                        active: !1,
                        apiKey: o
                    }]
                },
                ReservoirProvider = e => {
                    let {
                        children: t
                    } = e, {
                        ReservoirKitProvider: r
                    } = i;
                    return (0, a.jsx)(r, {
                        options: s,
                        children: t
                    })
                }
        },
        39724: function(e, t, r) {
            r.d(t, {
                Fw: function() {
                    return R
                },
                VY: function() {
                    return A
                },
                fC: function() {
                    return $
                },
                xz: function() {
                    return _
                }
            });
            var a = r(84477),
                i = r(97352),
                n = r(12527),
                o = r(89849),
                s = r(58020),
                l = r(89744),
                p = r(8e4),
                d = r(26815),
                c = r(21155),
                u = r(65399);
            let f = "Collapsible",
                [b, v] = (0, o.b)(f),
                [m, h] = b(f),
                g = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        open: n,
                        defaultOpen: o,
                        disabled: l,
                        onOpenChange: p,
                        ...c
                    } = e, [f = !1, b] = (0, s.T)({
                        prop: n,
                        defaultProp: o,
                        onChange: p
                    });
                    return (0, i.createElement)(m, {
                        scope: r,
                        disabled: l,
                        contentId: (0, u.M)(),
                        open: f,
                        onOpenToggle: (0, i.useCallback)(() => b(e => !e), [b])
                    }, (0, i.createElement)(d.WV.div, (0, a.Z)({
                        "data-state": $409067139f391064$var$getState(f),
                        "data-disabled": l ? "" : void 0
                    }, c, {
                        ref: t
                    })))
                }),
                C = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        ...o
                    } = e, s = h("CollapsibleTrigger", r);
                    return (0, i.createElement)(d.WV.button, (0, a.Z)({
                        type: "button",
                        "aria-controls": s.contentId,
                        "aria-expanded": s.open || !1,
                        "data-state": $409067139f391064$var$getState(s.open),
                        "data-disabled": s.disabled ? "" : void 0,
                        disabled: s.disabled
                    }, o, {
                        ref: t,
                        onClick: (0, n.M)(e.onClick, s.onOpenToggle)
                    }))
                }),
                y = "CollapsibleContent",
                R = (0, i.forwardRef)((e, t) => {
                    let {
                        forceMount: r,
                        ...n
                    } = e, o = h(y, e.__scopeCollapsible);
                    return (0, i.createElement)(c.z, {
                        present: r || o.open
                    }, ({
                        present: e
                    }) => (0, i.createElement)(E, (0, a.Z)({}, n, {
                        ref: t,
                        present: e
                    })))
                }),
                E = (0, i.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        present: n,
                        children: o,
                        ...s
                    } = e, c = h(y, r), [u, f] = (0, i.useState)(n), b = (0, i.useRef)(null), v = (0, p.e)(t, b), m = (0, i.useRef)(0), g = m.current, C = (0, i.useRef)(0), R = C.current, E = c.open || u, $ = (0, i.useRef)(E), _ = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        let e = requestAnimationFrame(() => $.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), (0, l.b)(() => {
                        let e = b.current;
                        if (e) {
                            _.current = _.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let t = e.getBoundingClientRect();
                            m.current = t.height, C.current = t.width, $.current || (e.style.transitionDuration = _.current.transitionDuration, e.style.animationName = _.current.animationName), f(n)
                        }
                    }, [c.open, n]), (0, i.createElement)(d.WV.div, (0, a.Z)({
                        "data-state": $409067139f391064$var$getState(c.open),
                        "data-disabled": c.disabled ? "" : void 0,
                        id: c.contentId,
                        hidden: !E
                    }, s, {
                        ref: v,
                        style: {
                            "--radix-collapsible-content-height": g ? `${g}px` : void 0,
                            "--radix-collapsible-content-width": R ? `${R}px` : void 0,
                            ...e.style
                        }
                    }), E && o)
                });

            function $409067139f391064$var$getState(e) {
                return e ? "open" : "closed"
            }
            let $ = g,
                _ = C,
                A = R
        }
    }
]);