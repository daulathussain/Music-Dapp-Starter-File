"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8943], {
        78564: function(o, r, e) {
            e.d(r, {
                c: function() {
                    return t
                }
            });
            var n = e(8205);
            let t = (0, n.F4)({
                "0%": {
                    opacity: 0
                },
                "100%": {
                    opacity: 1
                }
            })
        },
        9421: function(o, r, e) {
            e.d(r, {
                BX: function() {
                    return fadeInAnimation
                },
                DR: function() {
                    return a
                },
                Jw: function() {
                    return d
                },
                ie: function() {
                    return i
                },
                ws: function() {
                    return t
                }
            });
            var n = e(8205);
            let fadeInAnimation = o => {
                    let {
                        duration: r,
                        delay: e
                    } = o;
                    return {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: r,
                            delay: e
                        }
                    }
                },
                t = (0, n.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                a = (0, n.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                i = (0, n.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                d = (0, n.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                })
        },
        69598: function(o, r, e) {
            e.d(r, {
                z: function() {
                    return b
                }
            });
            var n = e(16356),
                t = e(97352),
                a = e(49542),
                i = e(78570),
                d = e.n(i),
                l = e(44361),
                u = e(8205);
            let s = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    outline: "none",
                    borderRadius: "6px",
                    lineHeight: "20px",
                    paddingX: "20px",
                    paddingY: "12px",
                    cursor: "pointer",
                    maxWidth: "fit-content",
                    border: "1.5px solid transparent",
                    fontFamily: "$title",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    "&:hover": {
                        boxShadow: "0px 2px 4px 0px #0000002E"
                    },
                    "&:disabled": {
                        cursor: "not-allowed",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    },
                    svg: {
                        zoom: "0.9"
                    },
                    compoundVariants: [{
                        loading: !0,
                        variant: "primary",
                        css: {
                            cursor: "not-allowed",
                            border: "none !important",
                            background: "$neutral400",
                            "&:hover": {
                                background: "$neutral400",
                                boxShadow: "none"
                            },
                            "&:focus": {
                                "&:hover": {
                                    background: "$neutral400",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "secondary",
                        css: {
                            cursor: "not-allowed",
                            border: "1.5px solid $neutral400 !important",
                            color: "$neutral400",
                            outlineColor: "$neutral400",
                            "&:hover, &:focus": {
                                background: "$neutral400",
                                boxShadow: "none"
                            },
                            "&:focus": {
                                "&:hover": {
                                    background: "$neutral400",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "tertiary",
                        css: {
                            cursor: "not-allowed",
                            border: "1.5px solid $neutral200 !important",
                            color: "$neutral300",
                            "&:hover, &:focus": {
                                boxShadow: "none",
                                background: "transparent"
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "brand",
                        css: {
                            cursor: "not-allowed",
                            border: "none !important",
                            background: "$brand100",
                            "&:hover": {
                                background: "$brand100",
                                boxShadow: "none"
                            },
                            "&:focus": {
                                "&:hover": {
                                    background: "$brand100",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "critical",
                        css: {
                            cursor: "not-allowed",
                            border: "none !important",
                            background: "$destructive200",
                            "&:hover": {
                                background: "$destructive200",
                                boxShadow: "none"
                            },
                            "&:focus": {
                                "&:hover": {
                                    background: "$destructive200",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "text",
                        css: {
                            cursor: "not-allowed",
                            border: "none !important",
                            color: "$neutral300",
                            "&:hover": {
                                background: "$neutral300",
                                boxShadow: "none"
                            },
                            "&:focus": {
                                "&:hover": {
                                    background: "$neutral300",
                                    boxShadow: "none"
                                }
                            }
                        }
                    }, {
                        loading: !0,
                        variant: "fuchsia",
                        css: {
                            opacity: .5
                        }
                    }, {
                        darkMode: !0,
                        variant: "tertiary",
                        css: {
                            backgroundColor: "transparent",
                            color: "$white",
                            border: "1.5px solid $white",
                            "&:hover": {
                                backgroundColor: "transparent",
                                border: "1.5px solid $white",
                                color: "$white"
                            },
                            "&:focus": {
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    border: "1.5px solid $white",
                                    color: "$white"
                                }
                            },
                            "&:active, &:focus": {
                                border: "2px solid $base800"
                            }
                        }
                    }],
                    variants: {
                        darkMode: {
                            true: {}
                        },
                        loading: {
                            true: {
                                cursor: "not-allowed",
                                outline: "none !important",
                                "&:hover": {
                                    boxShadow: "none"
                                }
                            }
                        },
                        fullWidth: {
                            true: {
                                width: "100%",
                                maxWidth: "unset"
                            }
                        },
                        size: {
                            XS: {
                                height: "26px",
                                minWidth: "62px",
                                paddingX: 0,
                                fontSize: 12
                            },
                            S: {
                                height: "36px",
                                fontSize: "14px"
                            },
                            M: {
                                minWidth: "103px",
                                height: "40px",
                                fontSize: "14px"
                            },
                            L: {
                                minWidth: "109px",
                                height: "44px",
                                fontSize: "16px"
                            },
                            XL: {
                                minWidth: "112px",
                                fontSize: "16px",
                                height: "52px"
                            },
                            full: {
                                maxWidth: "100%"
                            },
                            squared: {
                                width: "40px",
                                height: "40px",
                                fontSize: "14px"
                            }
                        },
                        hasIcon: {
                            true: {
                                display: "flex",
                                alignItems: "center"
                            }
                        },
                        variant: {
                            primary: {
                                background: "$neutral800",
                                color: "white",
                                "&:hover": {
                                    background: "black",
                                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.18)"
                                },
                                "&:focus": {
                                    outline: "2px solid $neutral800",
                                    border: "1.5px solid white",
                                    "&:hover": {
                                        background: "black"
                                    }
                                },
                                "&:disabled": {
                                    background: "$neutral400"
                                }
                            },
                            secondary: {
                                background: "white",
                                color: "$neutral800",
                                border: "1px solid $neutral800",
                                "&:focus": {
                                    outline: "2px solid $neutral800",
                                    backgroundColor: "white"
                                },
                                "&:disabled": {
                                    color: "$neutral400",
                                    borderColor: "$neutral400",
                                    outlineColor: "$neutral400"
                                },
                                "&:hover": {
                                    backgroundColor: "$base100"
                                }
                            },
                            tertiary: {
                                backgroundColor: "white",
                                color: "$neutral800",
                                textTransform: "none",
                                border: "1px solid $neutral200",
                                "&:focus": {
                                    borderColor: "$neutral400",
                                    border: "1.5px solid $base800"
                                },
                                "&:hover": {
                                    boxShadow: "none",
                                    backgroundColor: "$base100",
                                    border: "1px solid transparent"
                                },
                                "&:disabled": {
                                    color: "$neutral300",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        textTransform: "none",
                                        border: "1px solid $neutral200"
                                    }
                                }
                            },
                            brand: {
                                background: "$brand300",
                                color: "white",
                                outline: "none",
                                "&:hover": {
                                    background: "$brand500"
                                },
                                "&:focus": {
                                    outline: "2px solid $brand300",
                                    border: "1.5px solid white",
                                    "&:hover": {
                                        outlineColor: "$brand500"
                                    }
                                },
                                "&:disabled": {
                                    background: "$brand100"
                                }
                            },
                            critical: {
                                background: "$destructive300",
                                color: "white",
                                outline: "none",
                                "&:hover": {
                                    background: "$destructive700",
                                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.18)"
                                },
                                "&:focus": {
                                    background: "$destructive300",
                                    outline: "2px solid $destructive300",
                                    border: "2px solid white",
                                    "&:hover": {
                                        outlineColor: "$destructive300"
                                    }
                                },
                                "&:disabled": {
                                    background: "$destructive200"
                                }
                            },
                            text: {
                                background: "transparent",
                                color: "$neutral800",
                                "&:hover": {
                                    background: "$neutral100",
                                    boxShadow: "none"
                                },
                                "&:disabled": {
                                    color: "$neutral300",
                                    "&:hover": {
                                        background: "transparent"
                                    }
                                }
                            },
                            link: {
                                background: "transparent",
                                display: "inline",
                                padding: 0,
                                height: "auto",
                                minWidth: "unset",
                                color: "$neutral800",
                                textDecoration: "underline",
                                textUnderlineOffset: "4px",
                                "&:hover": {
                                    color: "$neutral900",
                                    boxShadow: "none"
                                },
                                "&:active": {
                                    color: "$neutral900",
                                    boxShadow: "none"
                                },
                                "&:focused": {
                                    color: "$neutral900",
                                    boxShadow: "none"
                                },
                                "&:disabled": {
                                    color: "$neutral300",
                                    pointerEvents: "none",
                                    cursor: "not-allowed",
                                    "&:hover": {
                                        background: "transparent"
                                    }
                                }
                            },
                            fuchsia: {
                                background: u.rS.gradients.fuchsia,
                                backgroundPosition: "center",
                                backgroundSize: "200%",
                                color: "#fff",
                                "&:focus": {
                                    outline: "2px solid #EB5CBB",
                                    border: "1.5px solid white"
                                },
                                "&:disabled": {
                                    opacity: .5
                                }
                            },
                            green: {
                                background: "$brand500",
                                borderRadius: "$extraLarge",
                                color: "$white",
                                "&:hover, &:focus": {
                                    background: "$brand600"
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        size: "L"
                    }
                },
                c = (0, u.zo)("button", s),
                LeadingIcon = o => {
                    let {
                        children: r,
                        iconOnly: e
                    } = o;
                    return (0, n.jsx)("div", {
                        "data-testid": "button-leading-icon",
                        className: (0, a.clsx)("flex items-center", !e && "mr-2"),
                        children: r
                    })
                },
                TrailingIcon = o => {
                    let {
                        children: r,
                        iconOnly: e
                    } = o;
                    return (0, n.jsx)("div", {
                        "data-testid": "button-trailing-icon",
                        className: e ? "" : "ml-2",
                        children: r
                    })
                },
                b = t.forwardRef(function(o, r) {
                    let {
                        leadingIcon: e,
                        trailingIcon: t,
                        testId: i,
                        fullWidthAnchor: u = !1,
                        iconOnly: s = !1,
                        deprecatedCSS: b,
                        className: p,
                        labelComponent: h,
                        ...x
                    } = o, f = (0, n.jsx)("div", {
                        className: (0, a.clsx)("loading-circle inline-block aspect-square flex-grow-0 animate-spin rounded-full border-2 border-solid", "primary" === x.variant && "border-base100 border-l-neutral400  border-t-neutral400", ("secondary" === x.variant || "tertiary" === x.variant || "text" === x.variant) && "border-white  border-l-neutral400 border-t-neutral400 ", ("brand" === x.variant || "green" === x.variant) && "border-base50 border-l-brand100 border-t-brand100", "critical" === x.variant && "border-base50 border-l-destructive200 border-t-destructive200", "fuchsia" === x.variant && "border-base50 border-l-fuchsia500 border-t-fuchsia500", (s || "squared" === x.size) && "ml-0 aspect-square h-4/5", "XS" === x.size && "ml-2 h-2.5 w-2.5 !border-1.5", ("S" === x.size || "M" === x.size || "full" === x.size) && "ml-1 h-3.5 w-3.5", ("L" === x.size || "XL" === x.size || !x.size) && "ml-1 h-4 w-4")
                    }), g = null == x ? void 0 : x.href, v = (null == g ? void 0 : g.startsWith("http")) || (null == g ? void 0 : g.startsWith("mailto")), m = (0, n.jsxs)(c, {
                        "aria-label": x.label,
                        "aria-disabled": x.disabled,
                        hasIcon: !!e || !!t,
                        disabled: x.disabled,
                        loading: x.loading,
                        darkMode: x.darkMode,
                        "data-testid": i,
                        css: b,
                        ...x,
                        ref: r,
                        onClick: x.loading ? void 0 : o => {
                            o.currentTarget.blur(), x.onClick && x.onClick(o)
                        },
                        className: p,
                        children: [e && !x.loading && (0, n.jsx)(LeadingIcon, {
                            iconOnly: s,
                            children: e
                        }), s ? null : null != h ? h : x.label, !!t && !x.loading && (0, n.jsx)(TrailingIcon, {
                            iconOnly: s,
                            children: t
                        }), x.loading ? f : null]
                    });
                    return (0, n.jsx)(n.Fragment, {
                        children: (null == x ? void 0 : x.href) ? (0, n.jsx)(d(), {
                            className: (0, l.m)("!text-[unset] [text-decoration:unset]", u && "w-full"),
                            href: x.href,
                            "data-testid": i,
                            "data-href": x.href,
                            rel: v ? "noopener noreferrer" : void 0,
                            role: "link",
                            target: v ? "_blank" : void 0,
                            children: m
                        }) : m
                    })
                })
        },
        46061: function(o, r, e) {
            e.d(r, {
                Q_: function() {
                    return a
                },
                _R: function() {
                    return i
                }
            });
            var n = e(78564),
                t = e(9421);
            let a = {
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "400ms",
                        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform, opacity",
                        '&[data-state="delayed-open"], &[data-state="open"], ': {
                            '&[data-side="top"]': {
                                animationName: t.ie
                            },
                            '&[data-side="right"]': {
                                animationName: t.Jw
                            },
                            '&[data-side="bottom"]': {
                                animationName: t.ws
                            },
                            '&[data-side="left"]': {
                                animationName: t.DR
                            }
                        }
                    }
                },
                i = {
                    borderRadius: 8,
                    height: "100%",
                    padding: "8px 6px",
                    backgroundColor: "$neutral900",
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 28px rgba(0, 0, 0, 0.28)",
                    base: "XS",
                    fontStyle: "medium",
                    color: "#fff",
                    ".arrow": {
                        fill: "#000",
                        width: " unset",
                        height: "unset"
                    },
                    ...a
                };
            n.c, n.c
        },
        31451: function(o, r, e) {
            e.d(r, {
                g: function() {
                    return TooltipContextProvider
                },
                n: function() {
                    return useTooltipContext
                }
            });
            var n = e(16356),
                t = e(97352);
            let a = t.createContext(null);

            function useTooltipContext() {
                let o = t.useContext(a);
                if (!o) throw Error("Tooltip compound components cannot be rendered outside the Tooltip component");
                return o
            }

            function TooltipContextProvider(o) {
                let {
                    children: r,
                    openOnClick: e,
                    ...i
                } = o, [d, l] = (0, t.useState)(!1), u = {
                    openContent: d,
                    setOpenContent: l,
                    openOnClick: e,
                    ...i
                };
                return (0, n.jsx)(a.Provider, {
                    value: u,
                    children: r
                })
            }
        },
        34524: function(o, r, e) {
            e.r(r), e.d(r, {
                Tooltip: function() {
                    return Tooltip
                }
            });
            var n = e(16356),
                t = e(97352),
                a = e(52889),
                i = e(49542),
                d = e(8205),
                l = e(42529),
                u = e(46061),
                s = e(24455),
                c = e(31451);

            function TooltipComponent(o) {
                let {
                    children: r,
                    delayDuration: e = 0,
                    ...t
                } = o, {
                    openContent: i
                } = (0, c.n)();
                return (0, n.jsx)(a.zt, {
                    delayDuration: e,
                    children: (0, n.jsx)(a.fC, {
                        delayDuration: e,
                        open: i,
                        ...t,
                        children: r
                    })
                })
            }

            function Tooltip(o) {
                let {
                    children: r,
                    openOnClick: e,
                    delayCloseMs: t,
                    ...a
                } = o;
                return (0, n.jsx)(c.g, {
                    openOnClick: e,
                    delayCloseMs: t,
                    children: (0, n.jsx)(TooltipComponent, { ...a,
                        children: r
                    })
                })
            }
            let b = (0, t.forwardRef)(function(o, r) {
                    let {
                        children: e,
                        size: t = "xs",
                        ...a
                    } = o, {
                        sideOffset: d = 6,
                        side: l = "top",
                        avoidCollisions: u = !0,
                        className: c,
                        ...b
                    } = a, h = (0, s.Z)();
                    return (0, n.jsx)(p, {
                        sideOffset: d,
                        side: l,
                        avoidCollisions: u,
                        collisionBoundary: h,
                        className: (0, i.default)("z-tooltip bg-neutral900 font-base font-medium text-white shadow-secondary ", "xs" === t ? "rounded-sm px-2.5 py-2 text-base-xs" : "rounded-md px-2 py-3 text-base-s", c),
                        ...b,
                        ref: r,
                        children: e
                    })
                }),
                p = (0, d.zo)(a.VY, { ...u.Q_
                });
            Tooltip.StyledContent = b, Tooltip.Content = a.VY, Tooltip.Trigger = function(o) {
                let {
                    children: r,
                    ...e
                } = o, {
                    className: d
                } = e, {
                    openContent: u,
                    setOpenContent: s,
                    openOnClick: b,
                    delayCloseMs: p
                } = (0, c.n)(), h = t.useRef(null), x = (0, l.R)(() => {
                    if (p) {
                        null !== h.current && clearTimeout(h.current), h.current = setTimeout(() => {
                            s(!1)
                        }, p);
                        return
                    }
                    s(!1)
                });
                return (0, n.jsx)(a.xz, {
                    className: (0, i.default)("cursor-default hover:cursor-default", d),
                    onClick: () => {
                        b && s(!u)
                    },
                    onMouseOver: () => {
                        null !== h.current && (clearTimeout(h.current), h.current = null), b || s(!0)
                    },
                    onMouseLeave: x,
                    onBlur: x,
                    ...e,
                    children: r
                })
            }, Tooltip.Portal = a.h_
        },
        24455: function(o, r, e) {
            e.d(r, {
                Z: function() {
                    return useGetLayoutContainer
                }
            });
            var n = e(97352),
                t = e(83835);
            let useGetLayoutContainer = () => {
                let [o, r] = (0, n.useState)(null);
                return (0, t.G)(() => {
                    r(window.document.getElementById("layout"))
                }, []), o
            }
        }
    }
]);