"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [199], {
        63386: function(e, t, _) {
            _.d(t, {
                Z: function() {
                    return BadgeImage
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(44361),
                i = _(73950),
                o = _(74995);

            function BadgeImage(e) {
                let {
                    type: t,
                    size: _ = 18,
                    className: E,
                    ...a
                } = e, T = (() => {
                    switch (t) {
                        case "goldenEgg":
                            return {
                                alt: "goldenEggBadge",
                                src: "/images/golden-egg-badge.png"
                            };
                        case o.Iy.LIMITED:
                            return {
                                alt: "starBadge",
                                src: "/images/star-badge.png"
                            };
                        default:
                            return {
                                alt: "checkBadge",
                                src: "/images/check-badge.png"
                            }
                    }
                })();
                return (0, r.jsx)(i.G, { ...a,
                    className: (0, n.m)(`h-[${_}px] w-[${_}px]`, E),
                    width: _,
                    height: _,
                    ...T
                })
            }
        },
        96220: function(e, t, _) {
            _.d(t, {
                e: function() {
                    return FollowButton
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(72102),
                i = _(44361),
                o = _(69083),
                E = _(29617),
                a = _(69598),
                T = _(96301),
                l = _(59792);
            let FollowButton = e => {
                let {
                    userId: t,
                    artistId: _,
                    fullWidth: O = !1,
                    size: s = "L",
                    variant: L = "primary",
                    dark: d = !1,
                    className: u,
                    sourceLocation: A,
                    useIcon: N = !1
                } = e, {
                    authUser: I
                } = (0, T.aC)(), {
                    followingStatus: c,
                    onClick: S
                } = (0, l.O)({
                    userId: t,
                    artistId: _,
                    sourceLocation: A
                }), R = !0 === c ? "Following" : "Follow";
                if ((null == I ? void 0 : I.id) === t) return null;
                let D = "loading" === c,
                    C = "secondary" === L ? c ? "tertiary" : "secondary" : c ? "tertiary" : "primary";
                return (0, r.jsx)(a.z, {
                    label: R,
                    variant: d ? "tertiary" : C,
                    darkMode: c && "loading" !== c ? d && c : void 0,
                    onClick: S,
                    size: N ? "squared" : s,
                    fullWidth: O,
                    loading: D,
                    iconOnly: N,
                    leadingIcon: N ? (0, r.jsx)(n.G, {
                        icon: c && "loading" !== c ? o.hk : E.FK
                    }) : void 0,
                    className: u || (0, i.m)("notification" === L && !!c && " transition-all duration-500 ease-in-out hover:!bg-white hover:!shadow-tertiary", "M" === s && "h-9 w-[78px] min-w-[60px] font-medium", "XS" === s && "min-w-[80px]", N && "aspect-square h-9 w-9 min-w-[unset] p-0", N && D && "[&_.loading-circle]:h-4 [&_.loading-circle]:w-4")
                })
            }
        },
        68753: function(e, t, _) {
            _.d(t, {
                q: function() {
                    return Avatar
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(67317),
                i = _(95390);

            function Avatar(e) {
                let {
                    webappUri: t,
                    ..._
                } = e;
                return (0, r.jsx)(n.c, { ..._,
                    webappUriPath: (0, i.OU)(t)
                })
            }
        },
        42789: function(e, t, _) {
            _.d(t, {
                l: function() {
                    return VerifiedRainbow
                }
            });
            var r = _(16356);
            _(97352);
            let VerifiedRainbow = e => (0, r.jsxs)("svg", { ...e,
                width: "16",
                height: "17",
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, r.jsx)("path", {
                    d: "M6.85056 2.10125C7.4006 1.2871 8.5994 1.2871 9.14944 2.10125V2.10125C9.50553 2.62832 10.1745 2.84567 10.7723 2.62857V2.62857C11.6959 2.29321 12.6657 2.99784 12.6322 3.97981V3.97981C12.6104 4.61552 13.0239 5.18454 13.6352 5.36033V5.36033C14.5795 5.63187 14.9499 6.77199 14.3456 7.54669V7.54669C13.9543 8.04823 13.9543 8.75158 14.3456 9.25311V9.25311C14.9499 10.0278 14.5795 11.1679 13.6352 11.4395V11.4395C13.0239 11.6153 12.6104 12.1843 12.6322 12.82V12.82C12.6657 13.802 11.6959 14.5066 10.7723 14.1712V14.1712C10.1745 13.9541 9.50553 14.1715 9.14944 14.6986V14.6986C8.5994 15.5127 7.4006 15.5127 6.85056 14.6986V14.6986C6.49447 14.1715 5.82554 13.9541 5.22766 14.1712V14.1712C4.30412 14.5066 3.33428 13.802 3.36783 12.82V12.82C3.38955 12.1843 2.97613 11.6153 2.36482 11.4395V11.4395C1.42055 11.1679 1.0501 10.0278 1.65443 9.25311V9.25311C2.04567 8.75158 2.04567 8.04823 1.65443 7.54669V7.54669C1.0501 6.77199 1.42055 5.63187 2.36482 5.36033V5.36033C2.97613 5.18454 3.38955 4.61552 3.36783 3.97981V3.97981C3.33428 2.99784 4.30412 2.29321 5.22766 2.62857V2.62857C5.82554 2.84567 6.49447 2.62832 6.85056 2.10125V2.10125Z",
                    fill: "#EB5CBB"
                }), (0, r.jsx)("path", {
                    d: "M5.08325 8.81689L6.74992 10.4836L10.9166 6.31689",
                    stroke: "white",
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        },
        67317: function(e, t, _) {
            _.d(t, {
                c: function() {
                    return AvatarUI
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(23496),
                i = _(5111);

            function AvatarUI(e) {
                let {
                    src: t,
                    username: _,
                    size: o,
                    walletAddress: E,
                    webappUriPath: a,
                    priority: T = !1,
                    unoptimized: l = !1,
                    loading: O,
                    backgroundColor: s,
                    onClick: L,
                    children: d = null,
                    className: u,
                    wrapperClassName: A,
                    ...N
                } = e, {
                    hasBorder: I,
                    hasDarkBorder: c,
                    hasShadow: S,
                    scaleOnHover: R = !1,
                    borderRadius: D = "25%",
                    disableLink: C
                } = N;
                return (0, r.jsxs)("div", {
                    className: `relative w-[${o}px]`,
                    children: [(0, r.jsx)(n.f, {
                        href: a,
                        disableLink: C,
                        hasShadow: !!S,
                        hasBorder: !!I,
                        hasDarkBorder: !!c,
                        borderRadius: D,
                        onClickEffect: L,
                        scaleOnHover: R,
                        css: {
                            backgroundColor: s || (t ? "unset" : "$black")
                        },
                        className: A,
                        children: (0, r.jsx)(n.E, {
                            src: t || (0, i.l)({
                                walletAddress: E
                            }),
                            size: o,
                            alt: _ || "avatar-img",
                            priority: T,
                            borderRadius: D,
                            unoptimized: l,
                            loading: O,
                            className: u
                        })
                    }), d]
                })
            }
        },
        5111: function(e, t, _) {
            _.d(t, {
                l: function() {
                    return getPlaceholderAvatarSrc
                }
            });

            function getPlaceholderAvatarSrc(e) {
                let {
                    walletAddress: t
                } = e, _ = t ? t.slice(t.length - 8) : "0", r = t ? parseInt(_, 16) : 0;
                return `https://d16zqvkniqf1rn.cloudfront.net/placeholders/avatars/v2/${r%8+1}.jpg`
            }
        },
        26225: function(e, t, _) {
            _.d(t, {
                A_: function() {
                    return o
                },
                Cz: function() {
                    return E
                },
                WZ: function() {
                    return T
                },
                dL: function() {
                    return a
                },
                fK: function() {
                    return i
                }
            });
            var r = _(5441),
                n = _(8205);
            let i = (0, n.zo)(r.l_, {
                    display: "flex"
                }),
                o = (0, n.zo)(r.fC, {
                    overflow: "hidden",
                    width: 275
                }),
                E = (0, n.zo)(r.LW, {
                    display: "flex",
                    userSelect: "none",
                    touchAction: "none",
                    padding: 2,
                    background: "$neutral50",
                    transition: "background 160ms ease-out",
                    "&:hover": {
                        background: "$neutral50"
                    },
                    '&[data-orientation="vertical"]': {
                        width: 7
                    },
                    '&[data-orientation="horizontal"]': {
                        flexDirection: "column",
                        height: 7
                    },
                    "@laptop": {
                        '&[data-orientation="vertical"]': {
                            width: 7
                        },
                        '&[data-orientation="horizontal"]': {
                            flexDirection: "column",
                            height: 7
                        }
                    },
                    variants: {
                        hiddenOnMobile: {
                            true: {
                                background: "transparent",
                                "&:hover": {
                                    background: "transparent"
                                },
                                "@tabletLandscape": {
                                    background: "$neutral50",
                                    "&:hover": {
                                        background: "$neutral50"
                                    }
                                }
                            }
                        }
                    }
                }),
                a = (0, n.zo)(r.bU, {
                    flex: 1,
                    background: "$neutral200",
                    borderRadius: 10,
                    position: "relative",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 6
                    },
                    variants: {
                        hiddenOnMobile: {
                            true: {
                                background: "transparent",
                                "@tabletLandscape": {
                                    background: "$neutral200"
                                }
                            }
                        }
                    }
                }),
                T = {
                    "&:hover": {
                        "&::-webkit-scrollbar": {
                            height: "3px",
                            background: "$neutral200"
                        },
                        "&::-webkit-scrollbar-thumb": {
                            background: "$neutral400"
                        }
                    },
                    "&::-webkit-scrollbar": {
                        background: "transparent",
                        width: "3px",
                        touchAction: "none",
                        padding: 2,
                        transition: "background 160ms ease-out"
                    },
                    "&::-webkit-scrollbar-thumb": {
                        background: "transparent",
                        borderRadius: 10,
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 6
                        }
                    }
                }
        },
        23496: function(e, t, _) {
            _.d(t, {
                E: function() {
                    return SquareImage
                },
                f: function() {
                    return ImageWrapper
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(49542),
                i = _(8205),
                o = _(97946),
                E = _(73950),
                a = _(76292);
            let SquareImage = e => {
                    let {
                        src: t,
                        alt: _,
                        size: n,
                        priority: i = !1,
                        borderRadius: o,
                        unoptimized: T = !1,
                        loading: l,
                        className: O
                    } = e;
                    return (0, r.jsx)(E.G, {
                        placeholder: n > 40 ? "blur" : void 0,
                        blurDataURL: n > 40 ? (0, a.Z)(n, n) : void 0,
                        src: t,
                        alt: _,
                        priority: i,
                        sizes: `${n}px`,
                        width: n,
                        height: n,
                        style: {
                            borderRadius: o,
                            aspectRatio: "1/1",
                            objectFit: "cover"
                        },
                        unoptimized: T,
                        loading: l,
                        className: O
                    })
                },
                handleLinkClick = e => {
                    e.stopPropagation()
                },
                ImageWrapper = e => {
                    let {
                        children: t,
                        css: _ = {},
                        hasDarkBorder: i = !1,
                        className: E,
                        ...a
                    } = e, {
                        hasShadow: l = !1,
                        hasBorder: O = !1,
                        borderRadius: s,
                        disableLink: L,
                        scaleOnHover: d = !1
                    } = a, u = "href" in a ? a.href : void 0, A = "onClickEffect" in a ? a.onClickEffect : void 0, N = (0, r.jsx)(T, {
                        className: (0, n.default)(d ? "group-hover:[&_img]:scale-[1.2] group-hover:[&_svg]:scale-[1.2]" : void 0, E),
                        boxShadow: l,
                        border: O,
                        scaleOnHover: d,
                        hasDarkBorder: i,
                        css: {
                            borderRadius: s,
                            ..._
                        },
                        onClick: "onClick" in a ? a.onClick : void 0,
                        children: t
                    });
                    return L || !u ? N : (0, r.jsx)(o.s, {
                        onClick: A || handleLinkClick,
                        pathnameUri: u,
                        children: N
                    })
                },
                T = (0, i.zo)("div", {
                    position: "relative",
                    overflow: "hidden",
                    outline: "none",
                    variants: {
                        border: {
                            true: {
                                border: "1px solid $neutral200"
                            }
                        },
                        hasDarkBorder: {
                            true: {
                                border: "1px solid $base800"
                            }
                        },
                        boxShadow: {
                            true: {
                                boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.15), inset 2px 2px 20px rgba(255, 255, 255, 0.5), 0px 0px 0px 2px rgba(0, 0, 0, 0.04)"
                            }
                        },
                        scaleOnHover: {
                            true: {
                                transform: "translateZ(0)",
                                "img, svg": {
                                    transition: "transform 0.4s ease"
                                },
                                "&:hover": {
                                    "img, svg": {
                                        transform: "scale(1.2)"
                                    }
                                }
                            }
                        }
                    }
                })
        },
        73950: function(e, t, _) {
            _.d(t, {
                G: function() {
                    return E
                }
            });
            var r = _(16356),
                n = _(97352),
                i = _(40286),
                o = _.n(i);
            let E = n.memo(function NextImage(e) {
                let [t, _] = n.useState(!1), {
                    unoptimized: i,
                    width: E,
                    sizes: a
                } = e, T = a || ("number" == typeof E ? `${E}px` : E), l = n.useCallback(() => _(!0), [_]);
                return t && !i ? (0, r.jsx)(NextImage, { ...e,
                    unoptimized: !0
                }) : (0, r.jsx)(o(), { ...e,
                    alt: e.alt,
                    unoptimized: i,
                    sizes: i ? void 0 : T,
                    onError: l,
                    onErrorCapture: l
                })
            })
        },
        76292: function(e, t, _) {
            _.d(t, {
                T: function() {
                    return blurImage
                }
            });
            let shimmer = (e, t) => `
<svg width="${e}" height="${t}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#DDDDDD" offset="0%" />
      <stop stop-color="#F9F9F9" offset="30%" />
      <stop stop-color="#DDDDDD" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${e}" height="${t}" fill="#F9F9F9" />
  <rect id="r" width="${e}" height="${t}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${e}" to="${e}" dur="1s" repeatCount="indefinite"  />
</svg>`,
                toBase64 = e => window.btoa(e),
                blurImage = (e, t) => `data:image/svg+xml;base64,${toBase64(shimmer(e,t))}`;
            t.Z = blurImage
        },
        54668: function(e, t, _) {
            _.d(t, {
                Z: function() {
                    return A
                }
            });
            var r = _(16356),
                n = _(97352),
                i = _(72102),
                o = _(6665),
                E = _(49542),
                a = _(44361),
                T = _(40612),
                l = _(8205),
                O = _(78382),
                s = _(28166),
                L = _(83835);
            let useIsOverflow = e => {
                let t = (0, n.useRef)(void 0);
                return (0, L.G)(() => {
                    let _ = e.current;
                    if (!_) return;
                    let trigger = () => {
                            t.current = _.scrollHeight > _.clientHeight
                        },
                        r = new ResizeObserver(trigger);
                    return r.observe(_), trigger(), () => r.disconnect()
                }, [e]), t.current
            };
            var d = _(26225),
                u = _(21922);
            let A = n.forwardRef((e, t) => {
                var _;
                let {
                    backCallToAction: o,
                    body: l,
                    closeModal: L,
                    callToAction: d,
                    isCentered: A = !1,
                    isFullScreen: R = !1,
                    showHeaderShadow: D = !1,
                    showFooterShadow: C = !1,
                    size: U = "small",
                    subHeader: g,
                    title: P,
                    bodyWithoutPadding: f = !1,
                    bodyWithoutPaddingBottom: h = !1,
                    overlayClassName: p,
                    containerClassName: M,
                    bodyClassName: w,
                    preventClose: m,
                    mobileFullScreen: v,
                    modalType: G
                } = e, x = (0, n.useRef)(null), B = useIsOverflow(x), {
                    height: b
                } = (0, O.P)(), W = (0, r.jsx)("div", {
                    className: "flex flex-col justify-center",
                    children: !!P && (0, r.jsx)("div", {
                        className: (0, a.m)("font-title text-title-s font-medium md:text-title-l", !!g && "mb-2", A && "text-center", v && "text-title-m md:text-title-l"),
                        children: P
                    })
                }), F = (0, r.jsx)(I, {
                    css: {
                        maxHeight: b || "100vh"
                    },
                    className: p,
                    isFullScreen: R,
                    mobileFullScreen: v,
                    children: (0, r.jsxs)(N, {
                        className: M,
                        onOpenAutoFocus: e => e.preventDefault(),
                        size: U,
                        isFullScreen: R,
                        mobileFullScreen: v,
                        onEscapeKeyDown: e => {
                            m && e.preventDefault()
                        },
                        onPointerDownOutside: e => {
                            m && e.preventDefault()
                        },
                        children: [(0, r.jsxs)("div", {
                            className: (0, a.m)("z-above1 bg-white", D && "-mt-4 p-4 pb-2.5 shadow-tertiary md:-mt-6 md:p-6 md:pb-3"),
                            children: [(0, r.jsxs)("div", {
                                className: (0, a.m)("flex justify-between", A && "justify-end"),
                                children: [!A && W, !!L && (0, r.jsx)(u.h, {
                                    icon: (0, r.jsx)(i.G, {
                                        icon: T.g8,
                                        size: "lg",
                                        "data-testid": s.n.MODAL_CLOSE_BUTTON
                                    }),
                                    onClick: L
                                })]
                            }), g]
                        }), (0, r.jsx)(c, {
                            ref: (_ = [x, t], e => {
                                _.forEach(t => {
                                    "function" == typeof t ? t(e) : null != t && (t.current = e)
                                })
                            }),
                            withSubtext: !!g,
                            isCentered: A,
                            withoutPadding: !g && !P,
                            withoutPaddingBottom: h,
                            className: (0, E.default)(w, B && h && "pb-4"),
                            children: l
                        }), A && W, (!!d || !!o) && (0, r.jsxs)(S, {
                            showShadow: C || B,
                            withoutPadding: f,
                            children: [!!o && o, !!d && d]
                        })]
                    }, G)
                }, G);
                return (0, r.jsx)(r.Fragment, {
                    children: F
                })
            });
            A.displayName = "StandardModal";
            let N = (0, l.zo)(o.VY, {
                    overflow: "hidden",
                    position: "relative",
                    backgroundColor: "$white",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 16,
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px -8px 28px rgba(0, 0, 0, 0.28)",
                    padding: "16px 0px",
                    zIndex: "$modal",
                    width: "100%",
                    maxHeight: "100%",
                    "> *": {
                        paddingX: 16
                    },
                    "@tablet": {
                        width: "unset",
                        padding: "24px 0px",
                        maxHeight: "calc(100vh - 200px)",
                        "> *": {
                            paddingX: 24
                        }
                    },
                    variants: {
                        size: {
                            small: {
                                "@tablet": {
                                    width: 420
                                }
                            },
                            medium: {
                                "@tablet": {
                                    width: 600
                                }
                            },
                            large: {
                                "@tablet": {
                                    width: 830
                                }
                            }
                        },
                        isFullScreen: {
                            true: {
                                width: "100vw",
                                height: "100vh",
                                borderRadius: 0
                            }
                        },
                        mobileFullScreen: {
                            true: {
                                width: "100vw",
                                height: "100vh",
                                borderRadius: 0,
                                "@tablet": {
                                    height: "unset"
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        size: "small"
                    },
                    compoundVariants: [{
                        isFullScreen: !0,
                        size: "small",
                        css: {
                            "@tablet": {
                                width: 420,
                                borderRadius: 16
                            }
                        }
                    }, {
                        isFullScreen: !0,
                        size: "medium",
                        css: {
                            "@tablet": {
                                width: 600,
                                borderRadius: 16
                            }
                        }
                    }, {
                        isFullScreen: !0,
                        size: "large",
                        css: {
                            "@tablet": {
                                width: 830,
                                borderRadius: 16
                            }
                        }
                    }, {
                        mobileFullScreen: !0,
                        size: "small",
                        css: {
                            "@tablet": {
                                width: 420,
                                borderRadius: 16
                            }
                        }
                    }, {
                        mobileFullScreen: !0,
                        size: "medium",
                        css: {
                            "@tablet": {
                                width: 600,
                                borderRadius: 16
                            }
                        }
                    }, {
                        mobileFullScreen: !0,
                        size: "large",
                        css: {
                            "@tablet": {
                                width: 830,
                                borderRadius: 16
                            }
                        }
                    }]
                }),
                I = (0, l.zo)(o.aV, {
                    background: "rgba(0, 0, 0, 0.6)",
                    zIndex: "$overlay",
                    position: "fixed",
                    inset: 0,
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    padding: 16,
                    variants: {
                        isFullScreen: {
                            true: {
                                padding: 0
                            }
                        },
                        mobileFullScreen: {
                            true: {
                                padding: 0,
                                "@tablet": {
                                    padding: 16
                                }
                            }
                        }
                    }
                }),
                c = (0, l.zo)("div", {
                    height: "100%",
                    overflowY: "auto",
                    fontFamily: "$base",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "$neutral700",
                    paddingY: 24,
                    ...d.WZ,
                    "@tablet": {
                        fontSize: 16
                    },
                    variants: {
                        withoutPadding: {
                            true: {
                                paddingY: "0 !important"
                            }
                        },
                        withSubtext: {
                            true: {
                                paddingY: 16
                            }
                        },
                        isCentered: {
                            true: {
                                paddingTop: 0,
                                paddingBottom: 24
                            }
                        },
                        withoutPaddingBottom: {
                            true: {
                                paddingTop: 24,
                                paddingBottom: 0
                            }
                        }
                    }
                }),
                S = (0, l.zo)("div", {
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                    gap: 12,
                    marginTop: 16,
                    "@tablet": {
                        marginTop: 24
                    },
                    variants: {
                        isCentered: {
                            true: {
                                marginTop: 32
                            }
                        },
                        showShadow: {
                            true: {
                                margin: "0px 0px -16px 0",
                                padding: "10px 16px 16px 16px",
                                "@tablet": {
                                    margin: "0px 0px -24px 0",
                                    padding: "12px 24px 24px 24px"
                                },
                                lift: "high",
                                width: "auto"
                            }
                        },
                        withoutPadding: {
                            true: {
                                marginTop: "0 !important"
                            }
                        }
                    }
                })
        },
        7847: function(e, t, _) {
            _.d(t, {
                Hf: function() {
                    return a
                },
                KS: function() {
                    return o
                },
                Od: function() {
                    return T
                }
            });
            var r = _(16356),
                n = _(97352),
                i = _(8205);
            let o = n.memo(n.forwardRef((e, t) => {
                    let {
                        width: _,
                        height: n,
                        borderRadius: i,
                        css: o,
                        ...E
                    } = e;
                    return (0, r.jsx)(T, {
                        ref: t,
                        css: {
                            width: _,
                            height: n,
                            borderRadius: i,
                            ...o
                        },
                        ...E
                    })
                })),
                E = (0, i.F4)({
                    "0%": {
                        opacity: 0
                    },
                    "100%": {
                        opacity: "100%"
                    }
                }),
                a = {
                    background: "linear-gradient(135deg, #E7E7E7 0%, rgba(238, 238, 238, 0.37) 52.1%)",
                    position: "relative",
                    overflow: "hidden",
                    "&::after": {
                        animationName: `${E}`,
                        animationDuration: "1000ms",
                        animationDirection: "alternate",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "ease-in-out",
                        backgroundColor: "$neutral100",
                        borderRadius: "inherit",
                        bottom: 0,
                        content: '""',
                        left: 0,
                        position: "absolute",
                        right: 0,
                        top: 0
                    }
                },
                T = (0, i.zo)("div", { ...a
                })
        },
        98335: function(e, t, _) {
            _.d(t, {
                O: function() {
                    return VerifiedTooltip
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(49542),
                i = _(8205),
                o = _(42789),
                E = _(34524);
            let VerifiedTooltip = e => {
                    let {
                        toolTipOffset: t,
                        portal: _ = !1,
                        noTooltip: i = !1,
                        size: T = 20
                    } = e, l = (0, r.jsx)(a, {
                        className: (0, n.default)(!i && "md:[&_svg]:hover:rounded-full md:[&_svg]:hover:shadow-secondary "),
                        css: {
                            svg: {
                                height: T ? `${T}px` : "20px",
                                width: T ? `${T}px` : "20px"
                            }
                        },
                        children: (0, r.jsx)(o.l, {})
                    }), O = (0, r.jsx)(E.Tooltip.StyledContent, {
                        className: "px-2",
                        sideOffset: t,
                        children: "Verified Artist"
                    });
                    return i ? (0, r.jsx)("div", {
                        children: l
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            className: "block md:!hidden",
                            children: l
                        }), (0, r.jsx)("div", {
                            className: "!hidden md:!block",
                            children: (0, r.jsxs)(E.Tooltip, {
                                openOnClick: !1,
                                children: [(0, r.jsx)(E.Tooltip.Trigger, {
                                    asChild: !0,
                                    children: l
                                }), _ ? (0, r.jsx)(E.Tooltip.Portal, {
                                    children: O
                                }) : O]
                            })
                        })]
                    })
                },
                a = (0, i.zo)("div", {})
        },
        6289: function(e, t, _) {
            _.d(t, {
                BK: function() {
                    return useFollowingStatus
                },
                FQ: function() {
                    return setFollowingStatus
                },
                a4: function() {
                    return useFollowersFollowing
                }
            });
            var r = _(97352),
                n = _(28839);
            _(96960);
            var i = _(96301),
                o = _(3928),
                E = _(26475);
            let {
                batchedKeys: a,
                useBatchedKey: T
            } = (0, E.y)({
                chunkLimit: 50
            });

            function setFollowingStatus(e) {
                let {
                    userId: t,
                    isFollowing: _
                } = e, r = a.keys.get(t);
                r && (0, o.QQb)({
                    query: o.sZT,
                    variables: {
                        users: r
                    }
                }, e => e ? (0, n.ZP)(e, e => {
                    for (let r of e.data.userRelationStatuses)
                        if (r.userId === t) {
                            r.isFollowing = _;
                            return
                        }
                    e.data.userRelationStatuses.push({
                        isFollowing: _,
                        userId: t
                    })
                }) : e)
            }

            function useFollowingStatus(e) {
                let {
                    userId: t
                } = e, _ = T({
                    key: t
                }), n = !!_, {
                    isAuthenticatedWithAPI: E
                } = (0, i.aC)(), {
                    data: a = !1,
                    isLoading: l
                } = (0, o.aM2)(o.sZT, {
                    variables: !!_ && {
                        users: _
                    },
                    cacheTime: 1 / 0,
                    select(e) {
                        let {
                            data: _
                        } = e;
                        for (let e of _.userRelationStatuses)
                            if (e.userId === t) return e.isFollowing;
                        return !1
                    },
                    enabled: E && !!(null == _ ? void 0 : _.length),
                    keepPreviousData: !0,
                    staleTime: 0
                }), O = (0, r.useMemo)(() => !!E && (l || !n ? "loading" : a), [n, l, a, E]);
                return O
            }

            function useFollowersFollowing(e) {
                let {
                    publicAddress: t
                } = e, {
                    orderedList: _,
                    isLoadingNewPage: r,
                    loadMoreNextPage: n
                } = (0, o.NSZ)(o._qD, {
                    getNextPageParam(e) {
                        let {
                            data: {
                                userByAddress: t
                            }
                        } = e;
                        return (null == t ? void 0 : t.following.pageInfo.hasNextPage) && {
                            after: t.following.pageInfo.endCursor
                        }
                    },
                    list(e) {
                        let {
                            userByAddress: t
                        } = e;
                        return null == t ? void 0 : t.following.edges.map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    filterQueryKey: {
                        publicAddress: t
                    },
                    variables: !!t && (e => {
                        let {
                            pageParam: _
                        } = e;
                        return {
                            publicAddress: t,
                            followingCursor: {
                                first: 20,
                                after: (null == _ ? void 0 : _.after) || null
                            }
                        }
                    }),
                    staleTime: 0
                }), {
                    orderedList: i,
                    isLoadingNewPage: E,
                    loadMoreNextPage: a
                } = (0, o.NSZ)(o.vcm, {
                    getNextPageParam(e) {
                        let {
                            data: {
                                userByAddress: t
                            }
                        } = e;
                        return (null == t ? void 0 : t.followers.pageInfo.hasNextPage) && {
                            after: t.followers.pageInfo.endCursor
                        }
                    },
                    list(e) {
                        let {
                            userByAddress: t
                        } = e;
                        return null == t ? void 0 : t.followers.edges.map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    filterQueryKey: {
                        publicAddress: t
                    },
                    variables: !!t && (e => {
                        let {
                            pageParam: _
                        } = e;
                        return {
                            publicAddress: t,
                            followingCursor: {
                                first: 20,
                                after: (null == _ ? void 0 : _.after) || null
                            }
                        }
                    }),
                    staleTime: 0
                });
                return {
                    followingLoading: r,
                    followingUsersData: _,
                    followersLoading: E,
                    followerUsersData: i,
                    followingLoadMore: n,
                    followersLoadMore: a
                }
            }
        },
        95095: function(e, t, _) {
            _.d(t, {
                T: function() {
                    return UserRowSkeleton
                },
                p: function() {
                    return UserRow
                }
            });
            var r = _(16356);
            _(97352);
            var n = _(44361),
                i = _(59287),
                o = _(8205),
                E = _(63386),
                a = _(96220),
                T = _(68753),
                l = _(97946),
                O = _(7847),
                s = _(98335),
                L = _(3928),
                d = _(74995),
                u = _(95390);
            let UserRow = e => {
                    let {
                        user: t,
                        secondaryText: _,
                        sourceLocation: o,
                        hasGoldenEgg: O = !1,
                        isVip: S = !1
                    } = e, R = (0, L.S3c)(L.jjh, t), {
                        id: D,
                        avatar: C,
                        artist: U,
                        publicAddress: g,
                        webappUri: P,
                        username: f
                    } = R, h = R.username, p = (0, i.pc)(g, 5, 4), M = (0, u.OU)(P), w = "";
                    _ ? w = _ : h !== p && (w = p);
                    let m = O || S;
                    return (0, r.jsxs)(A, {
                        children: [(0, r.jsx)(l.s, {
                            pathnameUri: M,
                            className: "w-full",
                            children: (0, r.jsxs)(N, {
                                className: "UserInfoContainer",
                                children: [(0, r.jsxs)("div", {
                                    className: (0, n.m)("relative aspect-square h-auto flex-shrink-0 flex-grow-0 rounded-full bg-neutral100", " [&_img]:w-full [&_img]:object-cover", m && "text-gradient-animated p-1", O ? "golden-egg-border" : S ? "limited-border" : ""),
                                    children: [(0, r.jsx)("div", {
                                        className: "absolute -right-1 -top-1 z-above1",
                                        children: m && (0, r.jsx)(E.Z, {
                                            type: O ? "goldenEgg" : d.Iy.LIMITED
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: (0, n.m)("aspect-square rounded-full", m ? "h-9 w-9" : "h-10 w-10"),
                                        children: (0, r.jsx)(T.q, {
                                            size: 40,
                                            src: null == C ? void 0 : C.url,
                                            username: f,
                                            walletAddress: g,
                                            borderRadius: "50%",
                                            disableLink: !0,
                                            webappUri: P
                                        })
                                    })]
                                }), (0, r.jsxs)(I, {
                                    className: "UserInfo",
                                    children: [(0, r.jsxs)(c, {
                                        children: [(0, r.jsx)("h4", {
                                            children: h
                                        }), U && (0, r.jsx)(s.O, {
                                            size: 16
                                        })]
                                    }), !!w && (0, r.jsx)("h5", {
                                        children: w
                                    })]
                                })]
                            })
                        }), (0, r.jsx)(a.e, {
                            variant: "primary",
                            size: "XS",
                            userId: D,
                            artistId: null == U ? void 0 : U.id,
                            sourceLocation: o
                        })]
                    })
                },
                A = (0, o.zo)("div", {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    height: 52,
                    paddingY: 6
                }),
                N = (0, o.zo)("div", {
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginRight: 16
                }),
                I = (0, o.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    width: "100%",
                    h4: {
                        title: "XXS",
                        color: "$base800",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflowX: "hidden"
                    },
                    h5: {
                        base: "S",
                        color: "$base700"
                    }
                }),
                c = (0, o.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 4
                }),
                UserRowSkeleton = () => (0, r.jsxs)(A, {
                    className: "animate-pulse",
                    children: [(0, r.jsxs)(N, {
                        children: [(0, r.jsx)(S, {}), (0, r.jsxs)(I, {
                            children: [(0, r.jsx)(R, {}), (0, r.jsx)(D, {})]
                        })]
                    }), (0, r.jsx)(C, {})]
                }),
                S = (0, o.zo)(O.Od, {
                    height: 40,
                    width: 40,
                    borderRadius: "50%",
                    flexShrink: 0
                }),
                R = (0, o.zo)(O.Od, {
                    width: 80,
                    height: 16,
                    borderRadius: 4
                }),
                D = (0, o.zo)(O.Od, {
                    width: 80,
                    height: 14,
                    borderRadius: 4
                }),
                C = (0, o.zo)(O.Od, {
                    width: 62,
                    height: 26,
                    borderRadius: 6
                })
        },
        21956: function(e, t, _) {
            _.d(t, {
                F_: function() {
                    return useAuthState
                },
                Mk: function() {
                    return triggerLogout
                },
                SR: function() {
                    return triggerLogin
                },
                fD: function() {
                    return i
                },
                jf: function() {
                    return triggerLoginWithRedirect
                }
            });
            var r = _(31265),
                n = _(63558);
            let i = (0, r.sj)({
                    postLoginRedirect: null,
                    loginRequested: !1,
                    isAuthenticating: !1,
                    logoutRequested: !1,
                    isLoggingOut: !1
                }),
                useAuthState = () => {
                    let e = (0, n.R)(i);
                    return e
                },
                triggerLogin = () => {
                    i.postLoginRedirect = null, i.loginRequested = !0
                },
                triggerLoginWithRedirect = e => {
                    let {
                        postLoginRedirect: t
                    } = e;
                    i.postLoginRedirect = t, i.loginRequested = !0
                },
                triggerLogout = () => {
                    i.postLoginRedirect = null, i.logoutRequested = !0
                }
        },
        43158: function(e, t, _) {
            _.r(t), _.d(t, {
                MediaQuery: function() {
                    return T
                },
                useMediaQuery: function() {
                    return useMediaQuery
                }
            });
            var r = _(97352),
                n = _(22248),
                i = _(77757),
                o = _(8205),
                E = _(83835),
                a = _(22546);
            let T = (0, a.f)(function() {
                    let [e, t] = r.useState(!1), _ = (0, i.GS)(o.w5.mobile), a = (0, i.GS)(o.w5.mobileLandscape), T = (0, i.GS)(o.w5.embedMobile), l = (0, i.GS)(o.w5.tablet), O = (0, i.GS)(o.w5.tabletLandscape), s = (0, i.GS)(o.w5.laptop), L = (0, i.GS)(o.w5.desktop), d = (0, i.GS)(o.w5.desktopMd), u = (0, i.GS)(o.w5.desktopLg), A = (0, i.GS)(o.w5.uploadFlow), [N, I] = r.useState(getSize);

                    function getSize() {
                        let e = {
                            width: 0,
                            height: 0
                        };
                        return e.width = window.innerWidth, e.height = window.innerHeight, e
                    }
                    return (0, E.G)(() => {
                        t(!0);
                        let e = (0, n.Z)(function() {
                            I(getSize())
                        }, 250);
                        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                    }, []), {
                        mobile: _,
                        mobileLandscape: a,
                        embedMobile: T,
                        tablet: l,
                        tabletLandscape: O,
                        laptop: s,
                        desktop: L,
                        desktopMd: d,
                        desktopLg: u,
                        uploadFlow: A
                    }
                }),
                useMediaQuery = () => T.useContainer()
        },
        60303: function(e, t, _) {
            _.d(t, {
                GE: function() {
                    return a
                },
                mU: function() {
                    return o
                }
            });
            var r = _(85306),
                n = _(97189),
                i = _(10612);
            let {
                useSubscription: o,
                subscriptionStores: E,
                Effects: a
            } = (0, r.l)({
                graphqlWsOptions: {
                    url: i.Fl.href,
                    connectionParams: () => ({ ...n.L
                    })
                }
            })
        },
        44397: function(e, t, _) {
            _.d(t, {
                GE: function() {
                    return r.GE
                },
                mU: function() {
                    return r.mU
                }
            });
            var r = _(60303)
        },
        36750: function(e, t, _) {
            _.d(t, {
                c: function() {
                    return RefetchOnComplete
                }
            });
            var r = _(85740),
                n = _(55344),
                i = _(44397),
                o = _(3928);

            function RefetchOnComplete(e) {
                let {
                    trigger: t,
                    refetch: _,
                    throttled: E,
                    filter: a,
                    ...T
                } = e, l = Array.isArray(t) ? t : [t], O = "function" == typeof _ ? _ : Array.isArray(_) ? _ : [_];

                function invalidate() {
                    if ("function" == typeof O) {
                        O();
                        return
                    }(0, o.EEr)({
                        operations: O,
                        ...T
                    })
                }
                let s = E ? (0, r.Z)(invalidate, (0, n.Z)(E), {
                        leading: !0,
                        trailing: !0
                    }) : invalidate,
                    handleEffect = function(e) {
                        if (!a || a(e)) return s()
                    },
                    L = new Set;
                for (let e of l) L.add(o.Lfh.onCompleted(e, handleEffect)), L.add(i.GE.onCompleted(e, handleEffect));
                return function() {
                    for (let e of L) e();
                    L.clear()
                }
            }
        },
        59792: function(e, t, _) {
            _.d(t, {
                O: function() {
                    return useFollow
                }
            });
            var r = _(97352),
                n = _(58658),
                i = _(6289),
                o = _(96301),
                E = _(21956),
                a = _(75747),
                T = _(36750),
                l = _(3928),
                O = _(64398),
                s = _(14034);

            function useFollow(e) {
                let {
                    userId: t,
                    artistId: _,
                    sourceLocation: T
                } = e, {
                    authUser: L
                } = (0, o.aC)(), {
                    mutateAsync: d
                } = (0, l.Dbo)(l.c4R, {
                    retry: 3
                }), {
                    mutateAsync: u
                } = (0, l.Dbo)(l.kp, {
                    retry: 3
                }), {
                    mutateAsync: A
                } = (0, l.Dbo)(l.SVu, {
                    retry: 3
                }), N = (0, O.S)(), {
                    openToast: I
                } = (0, a.useToast)(), c = (0, i.BK)({
                    userId: t
                }), S = r.useCallback(() => {
                    !0 === c ? ((0, s.uH)({
                        event: "Unfollow Clicked",
                        properties: {
                            associationId: t,
                            associationType: "User",
                            sourceComponent: T
                        }
                    }), (0, i.FQ)({
                        userId: t,
                        isFollowing: !1
                    }), u({
                        input: {
                            user: t
                        }
                    }, {
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            I({
                                text: `You unfollowed ${t.unfollowUser.userB.username}.`,
                                variant: "success"
                            }), _ && A({
                                input: {
                                    artists: [_]
                                }
                            })
                        }
                    }).catch(e => {
                        (0, i.FQ)({
                            userId: t,
                            isFollowing: !0
                        }), N({
                            action: n.pe.FOLLOW_UNFOLLOW_ERROR,
                            error: e,
                            errorType: n.QS.FETCH_GQL_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error calling UnfollowUserMutation",
                            feature: n.h6.FOLLOW_SUBSCRIBE,
                            unindexedExtra: {
                                userIdToFollowUnfollow: t
                            },
                            toast: "Error unfollowing user"
                        })
                    })) : ((0, s.uH)({
                        event: "Follow Clicked",
                        properties: {
                            associationId: t,
                            associationType: "User",
                            sourceComponent: T
                        }
                    }), (0, i.FQ)({
                        userId: t,
                        isFollowing: !0
                    }), d({
                        input: {
                            user: t
                        }
                    }, {
                        onSuccess: async e => {
                            let {
                                data: t
                            } = e;
                            I({
                                text: `You followed ${t.followUser.userB.username}.`,
                                variant: "success"
                            })
                        }
                    }).catch(e => {
                        (0, i.FQ)({
                            userId: t,
                            isFollowing: !1
                        }), N({
                            action: n.pe.FOLLOW_UNFOLLOW_ERROR,
                            error: e,
                            errorType: n.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error calling FollowUserMutation",
                            feature: n.h6.FOLLOW_SUBSCRIBE,
                            unindexedExtra: {
                                userIdToFollowUnfollow: t
                            },
                            toast: "Error following user"
                        })
                    }))
                }, [_, d, c, N, I, T, u, A, t]), R = r.useCallback(async e => {
                    if (e.stopPropagation(), null == L ? void 0 : L.id) {
                        await S();
                        return
                    }(0, s.uH)({
                        event: "Sign in Clicked",
                        properties: {
                            sourceComponent: "Follow/Unfollow Button"
                        }
                    }), (0, E.SR)()
                }, [null == L ? void 0 : L.id, S]);
                return {
                    followingStatus: c,
                    onClick: R
                }
            }(0, T.c)({
                trigger: [l.c4R, l.kp, l.Mw2],
                refetch: [l.sZT, l.aPv, l.ggI, l.WLz, l.C$m, l.ijT]
            })
        },
        78382: function(e, t, _) {
            _.d(t, {
                P: function() {
                    return useVisualViewport
                }
            });
            var r = _(97352),
                n = _(22248);
            let useVisualViewport = function() {
                let {
                    delayDebounce: e = 200
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [t, _] = (0, r.useState)({
                    width: 0,
                    height: 0
                }), i = (0, r.useCallback)(() => {
                    var e, t, r, n, i, o;
                    _({
                        width: (null === (t = window) || void 0 === t ? void 0 : null === (e = t.visualViewport) || void 0 === e ? void 0 : e.width) || (null === (r = window) || void 0 === r ? void 0 : r.innerWidth) || 0,
                        height: (null === (i = window) || void 0 === i ? void 0 : null === (n = i.visualViewport) || void 0 === n ? void 0 : n.height) || (null === (o = window) || void 0 === o ? void 0 : o.innerHeight) || 0
                    })
                }, []), o = (0, r.useMemo)(() => e <= 0 ? i : (0, n.Z)(i, e, {
                    leading: !0,
                    trailing: !0
                }), [i, e]);
                return (0, r.useEffect)(() => (window.addEventListener("resize", o), i(), () => {
                    window.removeEventListener("resize", o)
                }), [o, i]), t
            }
        },
        28166: function(e, t, _) {
            _.d(t, {
                n: function() {
                    return r
                },
                r: function() {
                    return n
                }
            });
            let r = {
                    RELEASE_PAGE_CONNECT_BUTTON: "RELEASE_PAGE_CONNECT_BUTTON",
                    RELEASE_PAGE_COLLECT_BUTTON: "RELEASE_PAGE_COLLECT_BUTTON",
                    RELEASE_PAGE_COLLECT_SECONDARY_BUTTON: "RELEASE_PAGE_COLLECT_SECONDARY_BUTTON",
                    RELEASE_PAGE_SELL_BUTTON: "RELEASE_PAGE_SELL_BUTTON",
                    RELEASE_PAGE_OPENSEA_BUTTON: "RELEASE_PAGE_OPENSEA_BUTTON",
                    VERIFY_ACCOUNT_MODAL_BUTTON: "VERIFY_ACCOUNT_MODAL_BUTTON",
                    VERIFY_ACCOUNT_MODAL_DISCONNECT_BUTTON: "VERIFY_ACCOUNT_MODAL_DISCONNECT_BUTTON",
                    ARTIST_PAGE_SOUNDS_RELEASED: "ARTIST_PAGE_SOUNDS_RELEASED",
                    COLLECTORS_CARD: "COLLECTORS_CARD",
                    JOIN_DROP_BUTTON: "JOIN_DROP_BUTTON",
                    HERO_FEATUED_RELEASE_CONTAINER: "HERO_FEATUED_RELEASE_CONTAINER",
                    HERO_FEATURED_RELEASE_CONTAINER_ARTIST_LINK: "HERO_FEATURED_RELEASE_CONTAINER_ARTIST_LINK",
                    RELEASE_CARD: "RELEASE_CARD",
                    ARTIST_PAGE_COLLECTORS_COUNT: "ARTIST_PAGE_COLLECTORS_COUNT",
                    USER_MENU_ITEMS_CONTAINER: "USER_MENU_ITEMS_CONTAINER",
                    USER_MENU_CONTAINER: "USER_MENU_CONTAINER",
                    COLLECTED_BY_MODAL_ROW: "COLLECTED_BY_MODAL_ROW",
                    ALL_SOUNDS_DROPDOWN: "ALL_SOUNDS_DROPDOWN",
                    BUY_AND_COMMENT_MODAL_CONTAINER: "BUY_AND_COMMENT_MODAL_CONTAINER",
                    BUY_MODAL_COLLECT_BUTTON: "BUY_MODAL_COLLECT_BUTTON",
                    MINT_INFO_COLLECTED: "MINT_INFO_COLLECTED",
                    MINT_INFO_OPEN_EDITION_DURATION: "MINT_INFO_OPEN_EDITION_DURATION",
                    MINT_INFO_COLLECTED_MAX: "MINT_INFO_COLLECTED_MAX",
                    MINT_INFO_OPEN_EDITION_CONTENT: "MINT_INFO_OPEN_EDITION_CONTENT",
                    MINT_INFO_RANGE_EDITION: "MINT_INFO_RANGE_EDITION",
                    RELEASE_PAGE_COMMENT_BUTTON: "RELEASE_PAGE_COMMENT_BUTTON",
                    SET_TIMESLOT_MODAL_WAVEFORM: "SET_TIMESLOT_MODAL_WAVEFORM",
                    SET_TIMESLOT_MODAL_SKIP_BUTTON: "SET_TIMESLOT_MODAL_SKIP_BUTTON",
                    SET_TIMESLOT_MODAL_NEXT_BUTTON: "SET_TIMESLOT_MODAL_NEXT_BUTTON",
                    SET_COMMENT_MODAL_TESTAREA: "SET_COMMENT_MODAL_TESTAREA",
                    SET_COMMENT_MODAL_NEXT_BUTTON: "SET_COMMENT_MODAL_NEXT_BUTTON",
                    ALLOW_LIST_CSV_INPUT: "ALLOW_LIST_CSV_INPUT",
                    INVALID_ADDRESSES_TOAST_MESSAGE: "INVALID_ADDRESSES_TOAST_MESSAGE",
                    DUPLICATE_ADDRESSES_TOAST_MESSAGE: "DUPLICATE_ADDRESSES_TOAST_MESSAGE",
                    AVAILABLE_TO_WITHDRAW: "AVAILABLE_TO_WITHDRAW",
                    YOUR_EARNINGS: "YOUR_EARNINGS",
                    CONFIRM_WITHDRAWAL_MODAL_WITHDRAW_BUTTON: "CONFIRM_WITHDRAWAL_MODAL_WITHDRAW_BUTTON",
                    CONFIRM_WITHDRAWAL_MODAL_LIST: "CONFIRM_WITHDRAWAL_MODAL_LIST",
                    CONFIRM_WITHDRAWAL_MODAL_TOTAL: "CONFIRM_WITHDRAWAL_MODAL_TOTAL",
                    EARNINGS_DESKTOP_TABLE_RELEASE_ROW: "EARNINGS_DESKTOP_TABLE_RELEASE_ROW",
                    EARNINGS_MOBILE_TABLE_RELEASE_ROW: "EARNINGS_MOBILE_TABLE_RELEASE_ROW",
                    EARNINGS_ROW_RELEASE_TITLE: "EARNINGS_ROW_RELEASE_TITLE",
                    UPLOAD_STEP_NAV_BAR: e => `UPLOAD_STEP_NAV_BAR_${e}`,
                    UPLOAD_FREE_MINT_ALLOWLIST_MODAL_LABEL: "UPLOAD_FREE_MINT_ALLOWLIST_MODAL_LABEL",
                    UPLOAD_TOOL_PRESALE_ALLOWLIST_MODAL_LABEL: "UPLOAD_TOOL_PRESALE_ALLOWLIST_MODAL_LABEL",
                    UPLOAD_ALLOWLIST_MODAL_COLLECTORS_TOTAL: "UPLOAD_ALLOWLIST_MODAL_COLLECTORS_TOTAL",
                    UPLOAD_ALLOWLIST_MODAL_MANUAL_TOTAL: "UPLOAD_ALLOWLIST_MODAL_MANUAL_TOTAL",
                    FEED_NEW_ACTIVITY_BUTTON: "FEED_NEW_ACTIVITY_BUTTON",
                    POPUP_BUTTON_WRAPPER: "POPUP_BUTTON_WRAPPER",
                    ACCESS_BADGE: "ACCESS_BADGE",
                    MODAL_CLOSE_BUTTON: "MODAL_CLOSE_BUTTON",
                    DATE_PICKER: "DATE_PICKER",
                    SONG_PAGE_RANGE_PROGRESS_BAR: "SONG_PAGE_RANGE_PROGRESS_BAR",
                    SONG_PAGE_OPEN_EDITION_ENDS_IN_TIMER: "SONG_PAGE_OPEN_EDITION_ENDS_IN_TIMER",
                    SONG_PAGE_STATIC_PROGRESS_BAR: "SONG_PAGE_STATIC_PROGRESS_BAR",
                    SONG_PAGE_PRICE: "SONG_PAGE_PRICE",
                    SONG_PAGE_MINTING_DROPDOWN: "SONG_PAGE_MINTING_DROPDOWN",
                    SONG_PAGE_MINTING_DROPDOWN_COMMENT_BUTTON: "SONG_PAGE_MINTING_DROPDOWN_COMMENT_BUTTON",
                    DATE_PICKER_FREE_MINT_START_TIME: "DATE_PICKER_FREE_MINT_START_TIME",
                    DATE_PICKER_PRESALE_START_TIME: "DATE_PICKER_PRESALE_START_TIME",
                    DATE_PICKER_PUBLIC_MINT_START_TIME: "DATE_PICKER_PUBLIC_MINT_START_TIME",
                    TOGGLE_SWITCH: "TOGGLE_SWITCH",
                    TOGGLE_SWITCH_FREE_MINT: "TOGGLE_SWITCH_FREE_MINT",
                    TOGGLE_SWITCH_PRESALE: "TOGGLE_SWITCH_PRESALE",
                    TOGGLE_SWITCH_GA_EDITION: "TOGGLE_SWITCH_GA_EDITION",
                    TOGGLE_SWITCH_SPOTIFY_PRESAVE: "TOGGLE_SWITCH_SPOTIFY_PRESAVE",
                    UPLOAD_TOOL_AUCTION_CONFIG_FREE_MINT_START_TIME_ERROR: "UPLOAD_TOOL_AUCTION_CONFIG_FREE_MINT_START_TIME_ERROR",
                    UPLOAD_TOOL_AUCTION_CONFIG_PRESALE_START_TIME_ERROR: "UPLOAD_TOOL_AUCTION_CONFIG_PRESALE_START_TIME_ERROR",
                    UPLOAD_TOOL_SAVE_AND_CONTINUE_BUTTON: "UPLOAD_TOOL_SAVE_AND_CONTINUE_BUTTON",
                    UPLOAD_TOOL_AUCTION_GRID: "UPLOAD_TOOL_AUCTION_GRID",
                    DATE_PICKER_PUBLIC_START_TIME: "DATE_PICKER_PUBLIC_START_TIME",
                    UPLOAD_TOOL_TOTAL_MINT_RANGE_MIN: "UPLOAD_TOOL_TOTAL_MINT_RANGE_MIN",
                    UPLOAD_TOOL_TOTAL_MINT_RANGE_MAX: "UPLOAD_TOOL_TOTAL_MINT_RANGE_MAX",
                    UPLOAD_TOOL_AUCTION_STEP_PRESALE_PRICE: "UPLOAD_TOOL_AUCTION_STEP_PRESALE_PRICE",
                    UPLOAD_TOOL_AUCTION_STEP_PUBLIC_PRICE: "UPLOAD_TOOL_AUCTION_STEP_PUBLIC_PRICE",
                    UPLOAD_TOOL_AUCTION_STEP_FREE_MINT_MAX_SUPPLY: "UPLOAD_TOOL_AUCTION_STEP_FREE_MINT_MAX_SUPPLY",
                    UPLOAD_TOOL_AUCTION_STEP_PRESALE_MAX_SUPPLY: "UPLOAD_TOOL_AUCTION_STEP_PRESALE_MAX_SUPPLY",
                    UPLOAD_TOOL_AUCTION_STEP_PUBLIC_MAX_SUPPLY: "UPLOAD_TOOL_AUCTION_STEP_PUBLIC_MAX_SUPPLY",
                    UPLOAD_TOOL_REVIEW_AUCTION_SECTION: "UPLOAD_TOOL_REVIEW_AUCTION_SECTION",
                    UPLOAD_TOOL_REVIEW_STEP_PRESALE_PRICE: "UPLOAD_TOOL_REVIEW_STEP_PRESALE_PRICE",
                    UPLOAD_TOOL_REVIEW_STEP_PUBLIC_PRICE: "UPLOAD_TOOL_REVIEW_STEP_PUBLIC_PRICE",
                    UPLOAD_TOOL_REVIEW_STEP_FREE_MINT_MAX_SUPPLY: "UPLOAD_TOOL_REVIEW_STEP_FREE_MINT_MAX_SUPPLY",
                    UPLOAD_TOOL_REVIEW_STEP_PRESALE_MAX_SUPPLY: "UPLOAD_TOOL_REVIEW_STEP_PRESALE_MAX_SUPPLY",
                    UPLOAD_TOOL_REVIEW_STEP_OPEN_FREE_MINT_ALLOWLIST_MODAL: "UPLOAD_TOOL_REVIEW_STEP_OPEN_FREE_MINT_ALLOWLIST_MODAL",
                    UPLOAD_TOOL_REVIEW_STEP_OPEN_PRESALE_ALLOWLIST_MODAL: "UPLOAD_TOOL_REVIEW_STEP_OPEN_PRESALE_ALLOWLIST_MODAL",
                    UPLOAD_TOOL_AUCTION_STEP_FIXED_EDITION: "UPLOAD_TOOL_AUCTION_STEP_FIXED_EDITION",
                    UPLOAD_CONFIRM_VALUES_CHECKBOX: "UPLOAD_CONFIRM_VALUES_CHECKBOX",
                    UPLOAD_TOOL_CONTINUE_EDITING_BUTTON: "UPLOAD_TOOL_CONTINUE_EDITING_BUTTON",
                    UPLOAD_TOOL_DRAFT_RELEASE_ROW: "UPLOAD_TOOL_DRAFT_RELEASE_ROW",
                    SPLITS_FORM_RECIPIENT_ROW: "SPLITS_FORM_RECIPIENT_ROW",
                    SPLITS_FORM_PERCENT_INPUT: "SPLITS_FORM_PERCENT_INPUT",
                    VIEW_SONG_OR_ALBUM_BUTTON: "VIEW_SONG_OR_ALBUM_BUTTON",
                    WITHDRAW_BUTTON: "WITHDRAW_BUTTON",
                    WITHDRAW_ALL_BUTTON: "WITHDRAW_ALL_BUTTON",
                    SEE_ALL_LINK: e => `SEE_ALL_LINK_${e.toUpperCase()}`,
                    BUY_EDITION_MODAL_COLLECTED_RATIO: "BUY_EDITION_MODAL_COLLECTED_RATIO",
                    BUY_EDITION_MODAL_PRICE: "BUY_EDITION_MODAL_PRICE",
                    BUY_EDITION_MODAL_MAX_MINTABLE_PER_ACCOUNT: "BUY_EDITION_MODAL_MAX_MINTABLE_PER_ACCOUNT",
                    ADD_TO_SHELF_MENU_ITEM_DROPDOWN: "ADD_TO_SHELF_MENU_ITEM_DROPDOWN",
                    FEED_POST_MENU_ITEM_DROPDOWN: "FEED_POST_MENU_ITEM_DROPDOWN",
                    ADD_TO_QUEUE_MENU_ITEM_DROPDOWN: "ADD_TO_QUEUE_MENU_ITEM_DROPDOWN",
                    ADD_AS_FEATURE_MENU_ITEM_DROPDOWN: "ADD_AS_FEATURE_MENU_ITEM_DROPDOWN",
                    LIKE_SOUND_MENU_ITEM_DROPDOWN: "LIKE_SOUND_MENU_ITEM_DROPDOWN",
                    ALLOWLIST_MULTISELECT: e => `ALLOWLIST_MULTISELECT_${e}`,
                    ALLOWLIST_MULTISELECT_SELECTED: e => `ALLOWLIST_MULTISELECT_SELECTED_${e}`,
                    ALLOWLIST_MULTISELECT_ROW: e => `ALLOWLIST_MULTISELECT_ROW_${e}`,
                    ALLOWLIST_MULTISELECT_SELECTED_ITEMS_CONTAINER: "ALLOWLIST_MULTISELECT_SELECTED_ITEMS_CONTAINER",
                    BONDING_CURVE_MINT_COMPONENT: "BONDING_CURVE_MINT_COMPONENT",
                    BONDING_CURVE_MINT_COMPONENT_COLLECT: "BONDING_CURVE_MINT_COMPONENT_COLLECT",
                    BONDING_CURVE_MINT_COMPONENT_SELL: "BONDING_CURVE_MINT_COMPONENT_SELL",
                    BONDING_CURVE_OWNER_SELLING_UNAVAILABLE: "BONDING_CURVE_OWNER_SELLING_UNAVAILABLE",
                    BONDING_CURVE_SELLING_UNAVAILABLE: "BONDING_CURVE_SELLING_UNAVAILABLE",
                    BONDING_CURVE_COLLECTING_UNAVAILABLE: "BONDING_CURVE_COLLECTING_UNAVAILABLE",
                    BONDING_CURVE_QUANTITY_ROW: "BONDING_CURVE_QUANTITY_ROW",
                    BONDING_CURVE_TOTAL: "BONDING_CURVE_TOTAL",
                    UNABLE_TO_SELL_GOLDEN_EGG: "UNABLE_TO_SELL_GOLDEN_EGG",
                    NO_EDITIONS_TO_SELL: "NO_EDITIONS_TO_SELL",
                    USER_DOES_NOT_HAVE_ENOUGH_EDITIONS: "USER_DOES_NOT_HAVE_ENOUGH_EDITIONS",
                    AMOUNT_TO_SELL_CONTENT: "AMOUNT_TO_SELL_CONTENT",
                    REDUCE_QUANTITY_ERROR_BUTTON: "REDUCE_QUANTITY_ERROR_BUTTON",
                    BONDING_CURVE_MAX_THRESHOLD_REACHED: "BONDING_CURVE_MAX_THRESHOLD_REACHED",
                    OPTIMISM_NETWORK: "OPTIMISM_NETWORK",
                    ETHEREUM_NETWORK: "ETHEREUM_NETWORK",
                    GET_NOTIFIED_BUTTON: "GET_NOTIFIED_BUTTON",
                    RELEASE_PAGE_MARKETPLACE_BUTTON: "RELEASE_PAGE_MARKETPLACE_BUTTON",
                    TIMER_BADGE: "TIMER_BADGE",
                    SOLD_OUT_BADGE: "SOLD_OUT_BADGE",
                    ENDED_BADGE: "ENDED_BADGE",
                    QUANTITY_BADGE: "QUANTITY_BADGE",
                    SECONDARY_BADGE: "SECONDARY_BADGE",
                    SPOTIFY_PRESAVE_BUTTON: "SPOTIFY_PRESAVE_BUTTON",
                    CHANNEL_SETTINGS_SAVE_BUTTON: "CHANNEL_SETTINGS_SAVE_BUTTON"
                },
                n = "test"
        },
        74995: function(e, t, _) {
            var r, n, i, o;

            function getTierForNumber(e) {
                if (null !== e) return ({
                    0: "free",
                    1: "limited"
                })[e]
            }
            _.d(t, {
                Hn: function() {
                    return getTierForNumber
                },
                Iy: function() {
                    return n
                },
                a8: function() {
                    return r
                }
            }), (i = r || (r = {}))[i.FREE = 0] = "FREE", i[i.LIMITED = 1] = "LIMITED", (o = n || (n = {})).FREE = "free", o.LIMITED = "limited"
        },
        95390: function(e, t, _) {
            _.d(t, {
                OU: function() {
                    return webappUriPath
                },
                Z3: function() {
                    return getMarketPlaceUrl
                },
                fu: function() {
                    return KeepCurrentBrowserHost
                }
            });
            var r = _(47226);
            let n = window.location.href;

            function webappUriPath(e) {
                let {
                    subpath: t,
                    params: _
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = new URL(e, n);
                if (t && (r.pathname = (r.pathname + t).replace(/([^:]\/)\/+/g, "$1")), _)
                    for (let [e, t] of Object.entries(_)) null === t ? r.searchParams.delete(e) : t && r.searchParams.set(e, t);
                return r.pathname + r.search
            }

            function KeepCurrentBrowserHost(e) {
                let t = new URL(e);
                return t.host = new URL(window.location.href).host, t
            }
            let getMarketPlaceUrl = (e, t, _) => {
                switch (_) {
                    case r.Wr.GOERLI:
                        return `https://testnets.reservoir.tools/goerli/collection/${t}`;
                    case r.Wr.SEPOLIA:
                        return `https://testnets.reservoir.tools/sepolia/collection/${t}`;
                    default:
                        return e
                }
            }
        }
    }
]);