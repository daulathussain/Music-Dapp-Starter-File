"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8408], {
        48408: function(e, r, t) {
            t.r(r), t.d(r, {
                GlobalModal: function() {
                    return GlobalModal
                }
            });
            var o = t(16356),
                n = t(97352),
                a = t(6665),
                l = t(66753),
                s = t(47934),
                d = t(97946),
                c = t(21956),
                i = t(22181),
                u = t(89412),
                p = t(81688),
                f = t(85846);
            let Fallback = () => {
                let {
                    closeCancelModal: e,
                    activeModal: r
                } = i.ModalContext.useContainer(), {
                    resetBoundary: t
                } = (0, l.cO)(), {
                    activeTrackId: a,
                    hideExpandedPlayer: c
                } = (0, p.PZ)(), [u, h] = n.useState(!0), b = (() => {
                    switch (r) {
                        case i.ModalType.PAPER_ETH_MINT_MODAL:
                            return "Whoops! We ran into an issue with our ETH checkout provider.";
                        case i.ModalType.PAPER_CC_MINT_MODAL:
                            return "Whoops! We ran into an issue with our credit card payments.";
                        default:
                            return "Whoops! We ran into an issue."
                    }
                })();
                return (0, o.jsx)(s.F, {
                    variant: "error",
                    text: (0, o.jsxs)(o.Fragment, {
                        children: [b, " Please", " ", (0, o.jsx)(d.s, {
                            absoluteUri: f.Wv,
                            className: "text-brand300 hover:text-brand600",
                            type: "external",
                            children: "let us know"
                        }), " ", "or try again"]
                    }),
                    isToastOpen: u,
                    setToastOpen: r => {
                        e(), t(), h(r)
                    },
                    withAudioPlayer: !!a,
                    inverted: !c,
                    withExpandedAudioPlayer: !c
                })
            };

            function GlobalModalComponent() {
                let {
                    modalContent: e,
                    activeModal: r,
                    closeCancelModal: t
                } = (0, i.useModal)(), {
                    isAuthenticating: s
                } = (0, c.F_)(), d = (0, n.useCallback)(e => {
                    e || t()
                }, [t]), u = null !== r;
                return (0, o.jsx)(l.SV, {
                    fallback: (0, o.jsx)(Fallback, {}),
                    children: (0, o.jsx)(a.fC, {
                        open: u && !s,
                        onOpenChange: d,
                        children: (0, o.jsx)(a.h_, {
                            forceMount: u || void 0,
                            children: null == e ? void 0 : e.body
                        })
                    })
                })
            }

            function SecondaryGlobalModalComponent() {
                let {
                    modalContent: e,
                    activeModal: r,
                    closeCancelModal: t
                } = (0, u.useSecondaryModal)(), s = n.useCallback(e => {
                    e || t()
                }, [t]);
                return (0, o.jsx)(l.SV, {
                    fallback: (0, o.jsx)(Fallback, {}),
                    children: (0, o.jsx)(a.fC, {
                        open: null !== r,
                        onOpenChange: s,
                        children: (0, o.jsx)(a.h_, {
                            children: null == e ? void 0 : e.body
                        })
                    })
                })
            }
            let GlobalModal = () => (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsx)(GlobalModalComponent, {}), (0, o.jsx)(SecondaryGlobalModalComponent, {})]
            })
        },
        66753: function(e, r, t) {
            t.d(r, {
                SV: function() {
                    return $44d7e150ebc754d2$export$e926676385687eaf
                },
                cO: function() {
                    return $7c3c25b3f398a9d6$export$c052f6604b7d51fe
                }
            });
            var o = t(97352);

            function $parcel$export(e, r, t, o) {
                Object.defineProperty(e, r, {
                    get: t,
                    set: o,
                    enumerable: !0,
                    configurable: !0
                })
            }
            $parcel$export({}, "ErrorBoundary", () => $44d7e150ebc754d2$export$e926676385687eaf), $parcel$export({}, "ErrorBoundaryContext", () => n);
            let n = (0, o.createContext)(null),
                a = {
                    didCatch: !1,
                    error: null
                };
            let $44d7e150ebc754d2$export$e926676385687eaf = class $44d7e150ebc754d2$export$e926676385687eaf extends o.Component {
                state = a;
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary = (...e) => {
                    let {
                        error: r
                    } = this.state;
                    null !== r && (this.props.onReset ? .({
                        args: e,
                        reason: "imperative-api"
                    }), this.setState(a))
                };
                componentDidCatch(e, r) {
                    this.props.onError ? .(e, r)
                }
                componentDidUpdate(e, r) {
                    let {
                        didCatch: t
                    } = this.state, {
                        resetKeys: o
                    } = this.props;
                    t && null !== r.error && function(e = [], r = []) {
                        return e.length !== r.length || e.some((e, t) => !Object.is(e, r[t]))
                    }(e.resetKeys, o) && (this.props.onReset ? .({
                        next: o,
                        prev: e.resetKeys,
                        reason: "keys"
                    }), this.setState(a))
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: r,
                        FallbackComponent: t,
                        fallback: a
                    } = this.props, {
                        didCatch: l,
                        error: s
                    } = this.state, d = e;
                    if (l) {
                        let e = {
                            error: s,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, o.isValidElement)(a)) d = a;
                        else if ("function" == typeof r) d = r(e);
                        else if (t) d = (0, o.createElement)(t, e);
                        else throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")
                    }
                    return (0, o.createElement)(n.Provider, {
                        value: {
                            didCatch: l,
                            error: s,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, d)
                }
            };

            function $7c3c25b3f398a9d6$export$c052f6604b7d51fe() {
                let e = (0, o.useContext)(n);
                ! function(e) {
                    if (null == e || "boolean" != typeof e.didCatch || "function" != typeof e.resetErrorBoundary) throw Error("ErrorBoundaryContext not found")
                }(e);
                let [r, t] = (0, o.useState)({
                    error: null,
                    hasError: !1
                }), a = (0, o.useMemo)(() => ({
                    resetBoundary: () => {
                        e ? .resetErrorBoundary(), t({
                            error: null,
                            hasError: !1
                        })
                    },
                    showBoundary: e => t({
                        error: e,
                        hasError: !0
                    })
                }), [e ? .resetErrorBoundary]);
                if (r.hasError) throw r.error;
                return a
            }

            function $62ff477d53f02a5b$export$f0c7a449e0cfaec7(e, r) {
                let t = (0, o.forwardRef)((t, n) => (0, o.createElement)($44d7e150ebc754d2$export$e926676385687eaf, r, (0, o.createElement)(e, { ...t,
                        ref: n
                    }))),
                    n = e.displayName || e.name || "Unknown";
                return t.displayName = `withErrorBoundary(${n})`, t
            }
            $parcel$export({}, "useErrorBoundary", () => $7c3c25b3f398a9d6$export$c052f6604b7d51fe), $parcel$export({}, "withErrorBoundary", () => $62ff477d53f02a5b$export$f0c7a449e0cfaec7)
        }
    }
]);