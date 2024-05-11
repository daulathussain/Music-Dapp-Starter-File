"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5071], {
        5071: function(e, r, t) {
            t.r(r), t.d(r, {
                PrivateRouteGuard: function() {
                    return PrivateRouteGuard
                }
            });
            var n = t(16356),
                i = t(97352),
                o = t(71992),
                l = t.n(o),
                u = t(17820),
                d = t(96301);

            function PrivateRouteGuard(e) {
                var r, t, a;
                let {
                    children: s,
                    routes: c
                } = e, {
                    pathname: f
                } = (0, o.useRouter)(), {
                    authUser: h,
                    isConnectingAPIUser: m,
                    isAuthenticatedWithAPI: v,
                    isHydrated: b
                } = (0, d.aC)(), g = (0, i.useMemo)(() => c.find(e => f === e.path), [f, c]), p = !!(null == h ? void 0 : null === (r = h.roles) || void 0 === r ? void 0 : r.isAdmin) || !!(null == h ? void 0 : null === (t = h.roles) || void 0 === t ? void 0 : t.isArtistRelations), C = !!(null == h ? void 0 : null === (a = h.roles) || void 0 === a ? void 0 : a.isAdmin), y = !!(null == h ? void 0 : h.artist), x = (0, i.useMemo)(() => {
                    if (!g) return "continue";
                    if (m || !b) return "loading";
                    if (!v) return "redirect";
                    switch (g.setting) {
                        case "soundTeam":
                            if (p) return "continue";
                            return "redirect";
                        case "onlyAdmin":
                            if (C) return "continue";
                            return "redirect";
                        case "onlyArtist":
                            if (y) return "continue";
                            return "redirect";
                        case "onlyNonArtist":
                            if (!y) return "continue";
                            return "redirect";
                        default:
                            return v ? "continue" : "redirect"
                    }
                }, [g, m, b, v, p, C, y]);
                return ((0, i.useEffect)(() => {
                    "redirect" === x && l().push("/")
                }, [x]), "continue" !== x) ? (0, n.jsx)(u.S, {}) : s
            }
        },
        32678: function(e, r, t) {
            t.d(r, {
                M: function() {
                    return Center
                }
            });
            var n = t(16356);
            t(97352);
            var i = t(8205);

            function Center(e) {
                let {
                    children: r,
                    css: t,
                    isFullScreen: i = !1
                } = e;
                return (0, n.jsx)(o, {
                    css: t,
                    isFullScreen: i,
                    children: r
                })
            }
            let o = (0, i.zo)("div", {
                variants: {
                    isFullScreen: {
                        true: {
                            height: "100vh",
                            width: "100vw",
                            position: "fixed",
                            top: 0,
                            left: 0
                        }
                    }
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            })
        },
        17820: function(e, r, t) {
            t.d(r, {
                S: function() {
                    return FullScreenLoading
                }
            });
            var n = t(16356);
            t(97352);
            var i = t(32678),
                o = t(43607);

            function FullScreenLoading() {
                return (0, n.jsx)(i.M, {
                    isFullScreen: !0,
                    children: (0, n.jsx)(o.$, {
                        type: "fullScreenLoading",
                        size: "xl"
                    })
                })
            }
        },
        43607: function(e, r, t) {
            t.d(r, {
                $: function() {
                    return l
                }
            });
            var n = t(8205);
            let i = (0, n.F4)({
                    to: {
                        transform: "rotate(1turn)"
                    }
                }),
                o = {
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    animation: `${i} 0.45s linear infinite`
                },
                l = (0, n.zo)("div", {
                    display: "flex",
                    justifyContent: "center",
                    "&::after": {
                        content: "",
                        borderRadius: "50%",
                        borderColor: "currentColor"
                    },
                    variants: {
                        size: {
                            xs: {
                                "&::after": {
                                    width: "0.75rem",
                                    height: "0.75rem"
                                }
                            },
                            sm: {
                                "&::after": {
                                    width: "1rem",
                                    height: "1rem"
                                }
                            },
                            md: {
                                "&::after": {
                                    width: "1.5rem",
                                    height: "1.5rem"
                                }
                            },
                            lg: {
                                "&::after": {
                                    width: "2rem",
                                    height: "2rem"
                                }
                            },
                            xl: {
                                "&::after": {
                                    width: "3em",
                                    height: "3em"
                                }
                            }
                        },
                        type: {
                            base: {
                                "&::after": { ...o
                                }
                            },
                            trending: {
                                marginY: 100,
                                "&::after": { ...o
                                }
                            },
                            fullScreenLoading: {
                                "&::after": {
                                    borderWidth: "4px",
                                    borderStyle: "solid",
                                    borderColor: n.rS.colors.gray200,
                                    borderBottomColor: "#6D7180",
                                    borderLeftColor: "#6D7180",
                                    animation: `${i} 0.65s linear infinite`
                                }
                            },
                            buyModal: {
                                marginRight: "4px",
                                "&::after": {
                                    borderWidth: "2px",
                                    borderStyle: "solid",
                                    borderColor: n.rS.colors.gray200,
                                    borderBottomColor: "#6D7180",
                                    borderLeftColor: "#6D7180",
                                    animation: `${i} 0.65s linear infinite`
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        type: "base"
                    }
                })
        }
    }
]);