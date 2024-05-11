(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5489, 8943], {
        9137: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[soundHandle]/[releaseSlug]", function() {
                return s(33095)
            }])
        },
        93862: function(e, t, s) {
            "use strict";
            s.d(t, {
                Y: function() {
                    return isEditReleaseDisabled
                },
                u: function() {
                    return getReleaseTypeString
                }
            });
            let getReleaseTypeString = e => {
                    switch (e) {
                        case "SINGLE":
                        default:
                            return "Song";
                        case "ALBUM":
                            return "Album"
                    }
                },
                isEditReleaseDisabled = e => {
                    let {
                        releaseType: t,
                        auctionContractType: s
                    } = e;
                    return "SINGLE" !== t || "ARTIST" === s
                }
        },
        61450: function(e, t, s) {
            "use strict";
            s.d(t, {
                r: function() {
                    return FeedDivider
                }
            });
            var l = s(16356);
            s(97352);
            var r = s(44361);
            let FeedDivider = e => {
                let {
                    className: t
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, r.m)("flex h-[1px] w-full flex-col items-center justify-center overflow-visible py-5", t),
                    children: (0, l.jsx)("div", {
                        className: "h-[1px] w-full flex-shrink-0 bg-base200"
                    })
                })
            }
        },
        80222: function(e, t, s) {
            "use strict";
            s.d(t, {
                g: function() {
                    return PostFloatingButton
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(72102),
                i = s(78608),
                n = s(56482),
                o = s(84385),
                d = s(58430),
                c = s(66361),
                u = s(52931),
                x = s(96301),
                m = s(21956),
                p = s(22181),
                h = s(42529),
                g = s(14034),
                f = s(81688),
                v = s(85846);

            function PostFloatingButton(e) {
                let {
                    channelId: t,
                    channelSelectorDisabled: s,
                    selectedResource: j,
                    sourceLocation: b
                } = e, {
                    openModal: w
                } = (0, p.useModal)(), {
                    isAuthenticatedWithAPI: C
                } = (0, x.aC)(), {
                    activeTrackId: y
                } = (0, f.PZ)(), {
                    value: S
                } = (0, i.useGate)(v.ln.SPOTIFY_LINKS), L = (0, h.R)(() => {
                    C ? ((0, g.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: b
                        }
                    }), w(p.ModalType.FEED_POST, {
                        body: S ? (0, l.jsx)(u.s, {
                            sourceLocation: b,
                            selectedResource: j,
                            channelId: t,
                            channelSelectorDisabled: s
                        }) : (0, l.jsx)(c.t, {
                            sourceLocation: b,
                            preselectedResource: j,
                            channelId: t
                        }, "post-input")
                    })) : (0, m.SR)()
                }), N = (0, r.useMemo)(() => y ? `calc(${d.U}px + ${o.MINIMIZED_PLAYER_HEIGHT}px + env(safe-area-inset-bottom))` : `calc(${d.U}px + env(safe-area-inset-bottom))`, [y]);
                return (0, l.jsx)("button", {
                    className: "fixed right-4 z-feedPostFloatingButton mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm  transition-all active:scale-95 md:hidden",
                    onClick: L,
                    style: {
                        bottom: N
                    },
                    children: (0, l.jsx)(a.G, {
                        icon: n.r8,
                        fontSize: 20,
                        className: "text-white"
                    })
                })
            }
        },
        69965: function(e, t, s) {
            "use strict";
            s.d(t, {
                pQ: function() {
                    return Seo
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(13041),
                i = s.n(a),
                n = s(81688),
                o = s(64328);
            let useSetPageTitle = e => {
                    let {
                        defaultTitle: t
                    } = e, {
                        activeTrackId: s,
                        playing: l
                    } = (0, n.PZ)(), {
                        releaseInfo: a
                    } = (0, o.w)({
                        trackId: s,
                        shouldFetch: !0
                    }), [i, d] = r.useState(t);
                    return r.useEffect(() => {
                        l && a && d(a.artist ? `${a.title} • ${a.artist.name}` : a.title)
                    }, [a, l]), r.useEffect(() => {
                        l || d(t)
                    }, [l, i, t]), i
                },
                d = "Sound.xyz",
                Seo = e => {
                    let {
                        title: t = null,
                        description: s = null,
                        twitterHandle: r = null,
                        image: a = null,
                        smallTwitterCard: n,
                        audioUrl: o = null,
                        url: c
                    } = e, u = a || "https://d2i9ybouka0ieh.cloudfront.net/website-content/twitter/og-card-2023.png", x = useSetPageTitle({
                        defaultTitle: t || d
                    });
                    return (0, l.jsxs)(i(), {
                        children: [(0, l.jsx)("title", {
                            children: x
                        }), (0, l.jsx)("meta", {
                            name: "apple-itunes-app",
                            content: "app-id=6446258640"
                        }), ["og:site_name", "og:title", "twitter:title"].map(e => (0, l.jsx)("meta", {
                            property: e,
                            content: t || d
                        }, e)), o && ["og:audio", "og:url", "music:preview_url:url", "music:preview_url:secure_url", "music:preview_url:type"].map(e => (0, l.jsx)("meta", {
                            name: e,
                            content: o
                        }, e)), c ? (0, l.jsx)("meta", {
                            name: "og:url",
                            content: c
                        }, "og:url") : null, ["description", "og:description", "twitter:description"].map(e => (0, l.jsx)("meta", {
                            name: e,
                            content: s || "Discover new music and prove you were the first"
                        }, e)), (0, l.jsx)("meta", {
                            name: "twitter:card",
                            content: n ? "summary" : "summary_large_image"
                        }), r && ["twitter:site", "twitter:creator"].map(e => (0, l.jsx)("meta", {
                            name: e,
                            content: r
                        }, e)), (0, l.jsx)("meta", {
                            name: "twitter:image",
                            content: u
                        }), (0, l.jsx)("meta", {
                            property: "og:image",
                            content: u
                        }), (0, l.jsx)("meta", {
                            name: "robots",
                            content: "index,follow"
                        })]
                    })
                }
        },
        72866: function(e, t, s) {
            "use strict";
            s.d(t, {
                HA: function() {
                    return i
                },
                t4: function() {
                    return a
                },
                wv: function() {
                    return useReleaseActivityState
                }
            });
            var l = s(31265),
                r = s(63558);
            let a = {
                    ACTIVITY: "activity",
                    AUDIENCE: "audience",
                    OVERVIEW: "overview",
                    POSTS: "posts"
                },
                i = (0, l.sj)({
                    scrollIndices: {},
                    filter: {}
                }),
                useReleaseActivityState = () => (0, r.R)(i)
        },
        78564: function(e, t, s) {
            "use strict";
            s.d(t, {
                c: function() {
                    return r
                }
            });
            var l = s(8205);
            let r = (0, l.F4)({
                "0%": {
                    opacity: 0
                },
                "100%": {
                    opacity: 1
                }
            })
        },
        9421: function(e, t, s) {
            "use strict";
            s.d(t, {
                BX: function() {
                    return fadeInAnimation
                },
                DR: function() {
                    return a
                },
                Jw: function() {
                    return n
                },
                ie: function() {
                    return i
                },
                ws: function() {
                    return r
                }
            });
            var l = s(8205);
            let fadeInAnimation = e => {
                    let {
                        duration: t,
                        delay: s
                    } = e;
                    return {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: t,
                            delay: s
                        }
                    }
                },
                r = (0, l.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                a = (0, l.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                i = (0, l.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                n = (0, l.F4)({
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
        90278: function(e, t, s) {
            "use strict";
            s.d(t, {
                $: function() {
                    return EditReleaseMenuItem
                }
            });
            var l = s(16356);
            s(97352);
            var r = s(72102),
                a = s(98454),
                i = s(8094);
            let EditReleaseMenuItem = e => {
                let {
                    disabled: t = !1,
                    onClick: s
                } = e;
                return (0, l.jsx)("div", {
                    onClick: t ? () => null : s,
                    children: (0, l.jsxs)(i.Xi, {
                        disabled: t,
                        children: [(0, l.jsx)(r.G, {
                            icon: a.Iw,
                            size: "lg"
                        }), (0, l.jsx)(i.i_, {
                            children: "Edit release"
                        })]
                    })
                })
            }
        },
        1808: function(e, t, s) {
            "use strict";
            s.d(t, {
                w: function() {
                    return n
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(44361),
                i = s(98910);
            let n = r.memo(function(e) {
                let {
                    className: t,
                    barClassName: s
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, a.m)("flex h-40 w-full items-center justify-center md:mt-8", t),
                    children: (0, l.jsx)(i.j, {
                        height: void 0,
                        barClassName: s
                    })
                })
            })
        },
        50509: function(e, t, s) {
            "use strict";
            s.d(t, {
                W2: function() {
                    return x
                },
                gM: function() {
                    return MinimalUser
                }
            });
            var l = s(16356);
            s(97352), s(96960);
            var r = s(8205),
                a = s(10228),
                i = s(68753),
                n = s(97946),
                o = s(98335),
                d = s(25347),
                c = s(3928),
                u = s(95390);
            let MinimalUser = e => {
                    let {
                        userFrag: t,
                        hideAvatar: s = !1,
                        avatarSize: r = 24,
                        verifiedSize: g = 20,
                        borderRadius: f = 4,
                        avatarHasBorder: v,
                        maxWidth: j = 120,
                        gap: b,
                        hideAvatarOnMobile: w = !1,
                        hideVerified: C = !1,
                        imagePriority: y
                    } = e, S = (0, c.S3c)(c.hns, t), {
                        avatar: L,
                        publicAddress: N,
                        username: I,
                        artist: M,
                        webappUri: E
                    } = S, k = (0, l.jsx)(n.s, {
                        pathnameUri: (0, u.OU)(E),
                        children: (0, l.jsxs)(x, {
                            css: {
                                gap: b || ""
                            },
                            children: [!s && (0, l.jsx)(m, {
                                hideAvatarOnMobile: w,
                                children: (0, l.jsx)(i.q, {
                                    src: null == L ? void 0 : L.url,
                                    size: r,
                                    username: I,
                                    walletAddress: N,
                                    borderRadius: f,
                                    hasBorder: v,
                                    webappUri: E,
                                    scaleOnHover: !0,
                                    priority: y
                                })
                            }), (0, l.jsx)(h, {
                                className: "username",
                                css: {
                                    maxWidth: j
                                },
                                children: I
                            })]
                        })
                    });
                    return (0, l.jsxs)(p, {
                        children: [(0, l.jsx)(d.I, {
                            userHoverCardContent: (0, l.jsx)(a.U, {
                                userId: S.id
                            }),
                            trigger: k,
                            triggerAsChild: !0
                        }), M && !C && (0, l.jsx)(o.O, {
                            portal: !0,
                            size: g
                        })]
                    })
                },
                x = (0, r.zo)("div", {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                    "@tabletLandscape": {
                        gap: 8
                    }
                }),
                m = (0, r.zo)("div", {
                    borderRadius: 4,
                    flexShrink: 0,
                    variants: {
                        hideAvatarOnMobile: {
                            true: {
                                display: "none",
                                "@tablet": {
                                    display: "block"
                                }
                            }
                        }
                    }
                }),
                p = (0, r.zo)("div", {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4
                }),
                h = (0, r.zo)("h3", {
                    base: "S",
                    fontStyle: "semibold",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    "@tablet": {
                        base: "M"
                    },
                    "@tabletLandscape": {
                        base: "L"
                    }
                })
        },
        69598: function(e, t, s) {
            "use strict";
            s.d(t, {
                z: function() {
                    return x
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(49542),
                i = s(78570),
                n = s.n(i),
                o = s(44361),
                d = s(8205);
            let c = {
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
                                background: d.rS.gradients.fuchsia,
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
                u = (0, d.zo)("button", c),
                LeadingIcon = e => {
                    let {
                        children: t,
                        iconOnly: s
                    } = e;
                    return (0, l.jsx)("div", {
                        "data-testid": "button-leading-icon",
                        className: (0, a.clsx)("flex items-center", !s && "mr-2"),
                        children: t
                    })
                },
                TrailingIcon = e => {
                    let {
                        children: t,
                        iconOnly: s
                    } = e;
                    return (0, l.jsx)("div", {
                        "data-testid": "button-trailing-icon",
                        className: s ? "" : "ml-2",
                        children: t
                    })
                },
                x = r.forwardRef(function(e, t) {
                    let {
                        leadingIcon: s,
                        trailingIcon: r,
                        testId: i,
                        fullWidthAnchor: d = !1,
                        iconOnly: c = !1,
                        deprecatedCSS: x,
                        className: m,
                        labelComponent: p,
                        ...h
                    } = e, g = (0, l.jsx)("div", {
                        className: (0, a.clsx)("loading-circle inline-block aspect-square flex-grow-0 animate-spin rounded-full border-2 border-solid", "primary" === h.variant && "border-base100 border-l-neutral400  border-t-neutral400", ("secondary" === h.variant || "tertiary" === h.variant || "text" === h.variant) && "border-white  border-l-neutral400 border-t-neutral400 ", ("brand" === h.variant || "green" === h.variant) && "border-base50 border-l-brand100 border-t-brand100", "critical" === h.variant && "border-base50 border-l-destructive200 border-t-destructive200", "fuchsia" === h.variant && "border-base50 border-l-fuchsia500 border-t-fuchsia500", (c || "squared" === h.size) && "ml-0 aspect-square h-4/5", "XS" === h.size && "ml-2 h-2.5 w-2.5 !border-1.5", ("S" === h.size || "M" === h.size || "full" === h.size) && "ml-1 h-3.5 w-3.5", ("L" === h.size || "XL" === h.size || !h.size) && "ml-1 h-4 w-4")
                    }), f = null == h ? void 0 : h.href, v = (null == f ? void 0 : f.startsWith("http")) || (null == f ? void 0 : f.startsWith("mailto")), j = (0, l.jsxs)(u, {
                        "aria-label": h.label,
                        "aria-disabled": h.disabled,
                        hasIcon: !!s || !!r,
                        disabled: h.disabled,
                        loading: h.loading,
                        darkMode: h.darkMode,
                        "data-testid": i,
                        css: x,
                        ...h,
                        ref: t,
                        onClick: h.loading ? void 0 : e => {
                            e.currentTarget.blur(), h.onClick && h.onClick(e)
                        },
                        className: m,
                        children: [s && !h.loading && (0, l.jsx)(LeadingIcon, {
                            iconOnly: c,
                            children: s
                        }), c ? null : null != p ? p : h.label, !!r && !h.loading && (0, l.jsx)(TrailingIcon, {
                            iconOnly: c,
                            children: r
                        }), h.loading ? g : null]
                    });
                    return (0, l.jsx)(l.Fragment, {
                        children: (null == h ? void 0 : h.href) ? (0, l.jsx)(n(), {
                            className: (0, o.m)("!text-[unset] [text-decoration:unset]", d && "w-full"),
                            href: h.href,
                            "data-testid": i,
                            "data-href": h.href,
                            rel: v ? "noopener noreferrer" : void 0,
                            role: "link",
                            target: v ? "_blank" : void 0,
                            children: j
                        }) : j
                    })
                })
        },
        46061: function(e, t, s) {
            "use strict";
            s.d(t, {
                Q_: function() {
                    return a
                },
                _R: function() {
                    return i
                }
            });
            var l = s(78564),
                r = s(9421);
            let a = {
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "400ms",
                        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform, opacity",
                        '&[data-state="delayed-open"], &[data-state="open"], ': {
                            '&[data-side="top"]': {
                                animationName: r.ie
                            },
                            '&[data-side="right"]': {
                                animationName: r.Jw
                            },
                            '&[data-side="bottom"]': {
                                animationName: r.ws
                            },
                            '&[data-side="left"]': {
                                animationName: r.DR
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
            l.c, l.c
        },
        31451: function(e, t, s) {
            "use strict";
            s.d(t, {
                g: function() {
                    return TooltipContextProvider
                },
                n: function() {
                    return useTooltipContext
                }
            });
            var l = s(16356),
                r = s(97352);
            let a = r.createContext(null);

            function useTooltipContext() {
                let e = r.useContext(a);
                if (!e) throw Error("Tooltip compound components cannot be rendered outside the Tooltip component");
                return e
            }

            function TooltipContextProvider(e) {
                let {
                    children: t,
                    openOnClick: s,
                    ...i
                } = e, [n, o] = (0, r.useState)(!1), d = {
                    openContent: n,
                    setOpenContent: o,
                    openOnClick: s,
                    ...i
                };
                return (0, l.jsx)(a.Provider, {
                    value: d,
                    children: t
                })
            }
        },
        34524: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                Tooltip: function() {
                    return Tooltip
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(52889),
                i = s(49542),
                n = s(8205),
                o = s(42529),
                d = s(46061),
                c = s(24455),
                u = s(31451);

            function TooltipComponent(e) {
                let {
                    children: t,
                    delayDuration: s = 0,
                    ...r
                } = e, {
                    openContent: i
                } = (0, u.n)();
                return (0, l.jsx)(a.zt, {
                    delayDuration: s,
                    children: (0, l.jsx)(a.fC, {
                        delayDuration: s,
                        open: i,
                        ...r,
                        children: t
                    })
                })
            }

            function Tooltip(e) {
                let {
                    children: t,
                    openOnClick: s,
                    delayCloseMs: r,
                    ...a
                } = e;
                return (0, l.jsx)(u.g, {
                    openOnClick: s,
                    delayCloseMs: r,
                    children: (0, l.jsx)(TooltipComponent, { ...a,
                        children: t
                    })
                })
            }
            let x = (0, r.forwardRef)(function(e, t) {
                    let {
                        children: s,
                        size: r = "xs",
                        ...a
                    } = e, {
                        sideOffset: n = 6,
                        side: o = "top",
                        avoidCollisions: d = !0,
                        className: u,
                        ...x
                    } = a, p = (0, c.Z)();
                    return (0, l.jsx)(m, {
                        sideOffset: n,
                        side: o,
                        avoidCollisions: d,
                        collisionBoundary: p,
                        className: (0, i.default)("z-tooltip bg-neutral900 font-base font-medium text-white shadow-secondary ", "xs" === r ? "rounded-sm px-2.5 py-2 text-base-xs" : "rounded-md px-2 py-3 text-base-s", u),
                        ...x,
                        ref: t,
                        children: s
                    })
                }),
                m = (0, n.zo)(a.VY, { ...d.Q_
                });
            Tooltip.StyledContent = x, Tooltip.Content = a.VY, Tooltip.Trigger = function(e) {
                let {
                    children: t,
                    ...s
                } = e, {
                    className: n
                } = s, {
                    openContent: d,
                    setOpenContent: c,
                    openOnClick: x,
                    delayCloseMs: m
                } = (0, u.n)(), p = r.useRef(null), h = (0, o.R)(() => {
                    if (m) {
                        null !== p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                            c(!1)
                        }, m);
                        return
                    }
                    c(!1)
                });
                return (0, l.jsx)(a.xz, {
                    className: (0, i.default)("cursor-default hover:cursor-default", n),
                    onClick: () => {
                        x && c(!d)
                    },
                    onMouseOver: () => {
                        null !== p.current && (clearTimeout(p.current), p.current = null), x || c(!0)
                    },
                    onMouseLeave: h,
                    onBlur: h,
                    ...s,
                    children: t
                })
            }, Tooltip.Portal = a.h_
        },
        24455: function(e, t, s) {
            "use strict";
            s.d(t, {
                Z: function() {
                    return useGetLayoutContainer
                }
            });
            var l = s(97352),
                r = s(83835);
            let useGetLayoutContainer = () => {
                let [e, t] = (0, l.useState)(null);
                return (0, r.G)(() => {
                    t(window.document.getElementById("layout"))
                }, []), e
            }
        },
        6310: function(e, t, s) {
            "use strict";
            s.d(t, {
                K: function() {
                    return EmptyUserStat
                }
            });
            var l = s(16356);
            s(97352);
            var r = s(8205);
            let Subtract1 = () => (0, l.jsx)("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.3148 14.2383L0 0L14.2383 16.3148C28.0396 32.1289 28.0396 55.7063 14.2383 71.5204L0 87.8352L16.3148 73.5969C32.1289 59.7956 55.7063 59.7956 71.5204 73.5969L87.8352 87.8352L73.5969 71.5204C59.7956 55.7063 59.7956 32.1289 73.5969 16.3148L87.8352 0L71.5204 14.2383C55.7063 28.0396 32.1289 28.0396 16.3148 14.2383ZM23.3455 23.549L13.4052 13.7493L23.2049 23.6896C34.2925 34.9362 34.2925 53.0025 23.2049 64.2491L13.4052 74.1894L23.3455 64.3897C34.5921 53.3021 52.6584 53.3021 63.9051 64.3897L73.8454 74.1894L64.0456 64.2491C52.9581 53.0025 52.9581 34.9362 64.0456 23.6896L73.8454 13.7493L63.9051 23.549C52.6584 34.6366 34.5921 34.6366 23.3455 23.549Z",
                        fill: "#262626"
                    })
                }),
                Star4 = () => (0, l.jsx)("svg", {
                    width: "125",
                    height: "125",
                    viewBox: "0 0 125 125",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        d: "M62.1086 0L62.7709 23.9865C63.3356 44.4366 79.7809 60.8819 100.231 61.4466L124.218 62.1089L100.231 62.7712C79.7809 63.3359 63.3356 79.7811 62.7709 100.231L62.1086 124.218L61.4463 100.231C60.8816 79.7811 44.4364 63.3359 23.9862 62.7712L-0.000244141 62.1089L23.9862 61.4466C44.4364 60.8819 60.8816 44.4366 61.4463 23.9865L62.1086 0Z",
                        fill: "#262626"
                    })
                }),
                Union1 = () => (0, l.jsx)("svg", {
                    width: "113",
                    height: "112",
                    viewBox: "0 0 113 112",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M55.2547 4.15645C55.2547 8.17776 56.3879 19.0686 56.5549 19.0686C56.7218 19.0686 57.855 8.17776 57.855 4.15645C57.855 0.135144 56.7218 0 56.5549 0C56.3879 0 55.2547 0.135144 55.2547 4.15645ZM59.3849 46.5148C59.3849 36.905 56.9241 19.0687 56.5615 19.0687C56.1988 19.0687 53.738 36.905 53.738 46.5148C53.738 46.6762 53.7387 46.8351 53.74 46.9913C53.3339 46.5515 52.8883 46.0879 52.3997 45.5992C45.6203 38.8199 31.3012 27.9729 31.0454 28.2287C30.7895 28.4845 41.6365 42.8036 48.4159 49.583C49.6634 50.8306 50.7479 51.7974 51.6886 52.5431C50.3652 52.3462 48.6744 52.2219 46.5143 52.2219C36.9045 52.2219 19.0682 54.6828 19.0682 55.0454C19.0682 55.408 36.9045 57.8689 46.5143 57.8689C47.8326 57.8689 48.9761 57.8226 49.968 57.7417C49.4811 58.1867 48.9642 58.6808 48.4159 59.2291C41.6365 66.0085 30.7895 80.3276 31.0454 80.5834C31.3012 80.8392 45.6203 69.9923 52.3997 63.2129C52.9331 62.6794 53.4153 62.1758 53.8508 61.7004C53.7788 62.6494 53.738 63.7334 53.738 64.9715C53.738 74.5812 56.1988 92.4176 56.5615 92.4176C56.9241 92.4176 59.3849 74.5812 59.3849 64.9715C59.3849 63.7219 59.3433 62.6294 59.2701 61.6742C59.7119 62.1572 60.2019 62.6695 60.7451 63.2127C67.5245 69.9921 81.8436 80.8391 82.0994 80.5832C82.3553 80.3274 71.5083 66.0083 64.7289 59.229C64.1805 58.6806 63.6637 58.1865 63.1767 57.7415C64.1293 57.8144 65.2187 57.8559 66.4645 57.8559C76.052 57.8559 93.8471 55.4007 93.8471 55.0389C93.8471 54.6771 76.052 52.222 66.4645 52.222C64.4111 52.222 62.7827 52.3346 61.4914 52.5152C62.4241 51.7733 63.4971 50.815 64.7291 49.5829C71.5085 42.8035 82.3554 28.4844 82.0996 28.2286C81.8438 27.9728 67.5247 38.8198 60.7453 45.5991C60.2477 46.0968 59.7947 46.5684 59.3827 47.0154C59.3842 46.8514 59.3849 46.6845 59.3849 46.5148ZM55.2547 107.33C55.2547 103.308 56.3879 92.4177 56.5549 92.4177C56.7218 92.4177 57.855 103.308 57.855 107.33C57.855 111.351 56.7218 111.486 56.5549 111.486C56.3879 111.486 55.2547 111.351 55.2547 107.33ZM19.0684 55.0522C19.0684 55.2192 8.17751 56.3523 4.15621 56.3523C0.134899 56.3523 -0.000244141 55.2192 -0.000244141 55.0522C-0.000244141 54.8852 0.134899 53.7521 4.15621 53.7521C8.17751 53.7521 19.0684 54.8852 19.0684 55.0522ZM108.725 56.3425C104.713 56.3425 93.847 55.212 93.847 55.0454C93.847 54.8788 104.713 53.7483 108.725 53.7483C112.737 53.7483 112.872 54.8788 112.872 55.0454C112.872 55.212 112.737 56.3425 108.725 56.3425ZM82.0951 80.5878C81.9773 80.7056 88.8611 89.1882 91.698 92.0251C94.5349 94.862 95.4296 94.158 95.5474 94.0402C95.6652 93.9224 96.3693 93.0276 93.5324 90.1907C90.6955 87.3538 82.2129 80.47 82.0951 80.5878ZM21.4471 92.0253C24.2841 89.1884 31.1678 80.7058 31.05 80.588C30.9322 80.4702 22.4497 87.354 19.6127 90.1909C16.7758 93.0278 17.4799 93.9225 17.5977 94.0403C17.7155 94.1581 18.6102 94.8622 21.4471 92.0253ZM31.05 28.2241C31.1678 28.1063 24.2841 19.6238 21.4471 16.7868C18.6102 13.9499 17.7155 14.654 17.5977 14.7718C17.4799 14.8896 16.7758 15.7843 19.6127 18.6213C22.4497 21.4582 30.9322 28.3419 31.05 28.2241ZM91.6982 16.7867C88.8613 19.6237 81.9775 28.1062 82.0953 28.224C82.2131 28.3418 90.6957 21.4581 93.5326 18.6212C96.3695 15.7842 95.6654 14.8895 95.5476 14.7717C95.4298 14.6539 94.5351 13.9498 91.6982 16.7867Z",
                        fill: "#262626"
                    })
                }),
                Wave1 = () => (0, l.jsxs)("svg", {
                    width: "214",
                    height: "102",
                    viewBox: "0 0 214 102",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M42.029 101.969C40.3942 101.972 38.761 101.865 37.1405 101.649C23.8147 99.8723 11.7224 90.9081 0.140153 74.2411L0 74.0393L0.185003 73.8767L75.2788 6.73237L75.4526 7.01829C79.0349 12.6973 82.7854 15.8703 86.9283 16.7113C93.3529 18.0175 99.9569 13.4261 106.342 8.98603C112.823 4.50115 119.528 -0.185564 126.188 1.17111C130.471 2.04006 134.334 5.27479 137.989 11.0603L167.785 29.2858C170.477 29.0605 173.185 29.1244 175.864 29.4764C189.189 31.2535 201.282 40.2177 212.864 56.8846L213.621 57.9778L167.651 29.8464C147.289 31.5899 126.687 48.9071 106.684 65.7591C85.51 83.5921 63.6686 101.969 42.029 101.969ZM0.762431 74.1346C12.1821 90.5325 24.1063 99.3621 37.2021 101.1C60.1872 104.161 83.6375 84.4387 106.309 65.3555C126.137 48.6773 146.555 31.5002 166.855 29.3867L137.585 11.4751L137.551 11.4191C133.969 5.74009 130.219 2.56143 126.053 1.72052C119.629 0.414292 113.025 5.00569 106.639 9.44573C100.159 13.9306 93.4594 18.6173 86.7938 17.2606C82.5612 16.4029 78.749 13.2411 75.1331 7.59572L0.762431 74.1346ZM168.609 29.8015L211.608 56.111C200.396 40.2905 188.651 31.758 175.791 30.0426C173.41 29.7308 171.006 29.6482 168.609 29.7959V29.8015Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M49.8832 87.8752C48.3831 87.8761 46.8846 87.775 45.3983 87.5725C33.603 85.9523 22.9009 77.9468 12.6306 63.0906L13.0959 62.771C23.2429 77.4871 33.8385 85.4197 45.4992 87.0175C65.726 89.7869 86.3621 72.5929 106.32 55.9596C126.379 39.2478 147.115 21.9978 167.583 24.8009C179.401 26.421 190.126 34.4266 200.374 49.2827L199.908 49.6023C189.761 34.8807 179.166 26.9536 167.505 25.3559C147.284 22.5865 126.642 39.7804 106.684 56.4137C88.0832 71.8922 68.8991 87.8752 49.8832 87.8752Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M57.7317 73.7814C56.3849 73.7811 55.0398 73.6855 53.7065 73.4955C43.3857 72.0323 34.0347 64.9799 25.1154 51.9344L25.5751 51.6205C34.4103 64.5145 43.6435 71.4998 53.7962 72.9237C71.2592 75.4016 89.1147 60.736 106.337 46.575C123.676 32.3075 141.605 17.5634 159.309 20.0749C169.63 21.5381 178.981 28.5906 187.9 41.636L187.44 41.95C178.605 29.0559 169.372 22.0707 159.219 20.6467C141.756 18.1688 123.901 32.8344 106.679 46.9955C90.6564 60.181 74.124 73.7814 57.7317 73.7814Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M65.5915 59.6877C64.385 59.6894 63.1801 59.6014 61.9867 59.4242C53.1739 58.1124 45.1684 52.0129 37.5721 40.7839L38.0375 40.498C45.5608 51.5925 53.4206 57.6134 62.0708 58.8972C76.7701 61.0892 91.7832 48.9464 106.325 37.2016C120.952 25.3839 136.077 13.1626 151.017 15.3882C159.83 16.7001 167.836 22.7939 175.432 34.0285L174.967 34.3425C167.443 23.248 159.584 17.227 150.933 15.9432C136.234 13.7569 121.221 25.8941 106.679 37.6389C93.2296 48.4755 79.3601 59.6877 65.5915 59.6877Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M73.4512 45.6051C72.3849 45.6068 71.3202 45.5243 70.2669 45.3584C62.979 44.198 56.3414 39.0515 50.0401 29.6277L50.5054 29.3137C56.717 38.6031 63.2088 43.671 70.3566 44.8034C82.2976 46.6927 94.5134 37.0782 106.331 27.7777C118.238 18.4043 130.555 8.71689 142.737 10.6398C150.025 11.8003 156.663 16.9467 162.964 26.3705L162.493 26.6845C156.287 17.3952 149.795 12.3272 142.647 11.1948C130.712 9.30554 118.491 18.92 106.673 28.2206C95.7803 36.7811 84.5681 45.6051 73.4512 45.6051Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M81.3222 31.5282C80.3826 31.5303 79.4446 31.4497 78.5192 31.2872C72.7113 30.2781 67.4639 26.0791 62.4801 18.4604L62.951 18.152C67.8451 25.6362 72.9691 29.7511 78.6145 30.7378C87.7973 32.3355 97.2043 25.2382 106.303 18.3707C115.497 11.4359 125.005 4.2601 134.429 5.90269C140.237 6.9174 145.484 11.1108 150.462 18.7295L149.997 19.0378C145.103 11.5593 139.979 7.43877 134.334 6.4577C125.145 4.85435 115.744 11.9573 106.645 18.7911C98.376 25.0868 89.8323 31.5282 81.3222 31.5282Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M127.489 1.51059L127.214 1.99857L177.1 30.2113L177.376 29.7233L127.489 1.51059Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M117.156 2.67131L116.695 2.99086L141.639 38.9472L142.1 38.6276L117.156 2.67131Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M106.785 9.21588H106.225V65.5685H106.785V9.21588Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M95.7776 15.48L70.8801 92.2433L71.4134 92.4162L96.3108 15.653L95.7776 15.48Z",
                        fill: "#262626"
                    }), (0, l.jsx)("path", {
                        d: "M85.3736 16.5096L35.5482 101.029L36.0312 101.314L85.8565 16.7943L85.3736 16.5096Z",
                        fill: "#262626"
                    })]
                }),
                VectorWithStars = () => (0, l.jsxs)(a, {
                    children: [(0, l.jsx)(o, {
                        children: (0, l.jsx)(Subtract1, {})
                    }), (0, l.jsx)(n, {
                        children: (0, l.jsx)(Star4, {})
                    }), (0, l.jsx)(i, {
                        children: (0, l.jsx)(Wave1, {})
                    }), (0, l.jsx)(d, {
                        children: (0, l.jsx)(Union1, {})
                    })]
                }),
                a = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    width: 228,
                    height: 155
                }),
                i = (0, r.zo)("div", {
                    margin: "0 auto",
                    svg: {
                        width: 220
                    }
                }),
                n = (0, r.zo)("div", {
                    position: "absolute",
                    transform: "translate(-8px, -40px)",
                    svg: {
                        width: 40
                    }
                }),
                o = (0, r.zo)("div", {
                    position: "absolute",
                    transform: "translate(150px, 10px)",
                    svg: {
                        width: 20
                    }
                }),
                d = (0, r.zo)("div", {
                    position: "absolute",
                    transform: "translate(78px, -74px)",
                    svg: {
                        width: 43
                    }
                }),
                EmptyUserStat = e => {
                    let {
                        header: t,
                        subText: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "-mt-2 flex h-full w-full flex-col items-center justify-center",
                        children: [(0, l.jsx)(VectorWithStars, {}), (0, l.jsxs)("div", {
                            className: "mt-6 flex flex-col items-center gap-4 text-center",
                            children: [(0, l.jsx)("h3", {
                                className: "max-w-[300px] font-title text-title-m font-medium",
                                children: t
                            }), (0, l.jsx)("div", {
                                className: "max-w-[271px] font-base  text-base-l text-neutral400",
                                children: s
                            })]
                        })]
                    })
                }
        },
        56949: function(e, t, s) {
            "use strict";
            s.d(t, {
                A_: function() {
                    return i
                },
                G: function() {
                    return n
                },
                Jd: function() {
                    return d
                },
                Sy: function() {
                    return o
                },
                U1: function() {
                    return FOLLOWING_EMPTY_HEADER
                },
                Vb: function() {
                    return FOLLOWING_EMPTY_SUBTEXT
                },
                fr: function() {
                    return FOLLOWERS_EMPTY_SUBTEXT
                },
                jb: function() {
                    return a
                }
            });
            var l = s(8205),
                r = s(26225);
            let a = 10,
                i = (0, l.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "396px",
                    overflow: "auto",
                    height: "396px",
                    ...r.WZ,
                    variants: {
                        empty: {
                            true: {
                                overflow: "hidden"
                            }
                        }
                    }
                }),
                n = "Looking for followers?",
                FOLLOWERS_EMPTY_SUBTEXT = e => `When someone follows ${e}, they'll show up here`,
                FOLLOWING_EMPTY_HEADER = e => `${e} isn't following anyone`,
                FOLLOWING_EMPTY_SUBTEXT = e => `When ${e} follows someone, they’ll show up here.`,
                o = "This channel doesn't have any members yet",
                d = "When someone joins, they'll show up here"
        },
        50620: function(e, t, s) {
            "use strict";
            s.d(t, {
                E: function() {
                    return useEditPath
                }
            });
            var l = s(97352),
                r = s(64571),
                a = s(95390);
            let i = "DISABLED";

            function useEditPath(e) {
                let {
                    auctionContractType: t,
                    draftId: s,
                    releaseId: n,
                    releaseType: o,
                    stepId: d
                } = e;
                return (0, l.useMemo)(() => {
                    if ("SINGLE" !== o) return i;
                    switch (t) {
                        case "TIERED_EDITION":
                            return {
                                path: (0, a.OU)((0, r.kT)({
                                    releaseId: n,
                                    stepId: d
                                }))
                            };
                        case "EDITION":
                            if (!s) return i;
                            return {
                                path: (0, a.OU)((0, r.Hp)({
                                    draftId: s,
                                    stepId: d
                                }))
                            };
                        default:
                            return i
                    }
                }, [t, s, n, o, d])
            }
        },
        33095: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSG: function() {
                    return t8
                },
                default: function() {
                    return PublicReleasePage
                }
            });
            var l = s(16356),
                r = s(97352),
                a = s(13041),
                i = s.n(a),
                n = s(71992),
                o = s.n(n);
            s(96960);
            var d = s(80222),
                c = s(69965),
                u = s(78608),
                x = s(44361),
                m = s(93862),
                p = s(19716),
                h = s(23740),
                g = s(73096),
                f = s(73845),
                v = s(78714),
                j = s(96578),
                b = s(72102),
                w = s(27457),
                C = s(15328),
                y = s(8094);
            let DownloadAudioMenuItem = e => {
                let {
                    disabled: t,
                    trackId: s
                } = e, r = (0, C.o)(s);
                return (0, l.jsxs)(y.Xi, {
                    onClick: r,
                    disabled: t,
                    children: [(0, l.jsx)(b.G, {
                        icon: w.q7,
                        size: "lg"
                    }), (0, l.jsx)(y.i_, {
                        children: "Download audio"
                    })]
                })
            };
            var S = s(90278),
                L = s(81992),
                N = s(66361),
                I = s(52931),
                M = s(68550),
                E = s(85178),
                k = s(96301),
                T = s(21956),
                A = s(22181),
                R = s(60265),
                P = s(3928),
                F = s(50620),
                _ = s(14042),
                O = s(51020),
                z = s(25989),
                D = s(97193),
                U = s(22315),
                $ = s(3141);
            let sleep = e => new Promise(t => setTimeout(t, e)),
                B = (0, D.Z)(5);
            var H = s(83835),
                W = s(14034),
                Z = s(81688),
                G = s(85846),
                V = s(64571),
                X = s(58285),
                Y = s(14906),
                Q = s(68753),
                q = s(97946),
                K = s(42529),
                J = s(95390),
                ee = s(65571);
            let et = "posted this song to the feed".split(" ");

            function ReleaseCreatedPostActivity(e) {
                var t, s;
                let {
                    createdPostFrag: r
                } = e, {
                    post: a
                } = (0, P.S3c)(P.l4B, r), i = (0, K.R)(() => {
                    (0, W.uH)({
                        event: "Post Link Clicked",
                        properties: {
                            associationId: a.id,
                            associationType: "Post",
                            sourceComponent: "Release Activity Feed"
                        }
                    })
                });
                return (0, l.jsx)(ee.e, {
                    timestamp: a.createdAt,
                    children: (0, l.jsx)(q.s, {
                        pathnameUri: (0, J.OU)(a.webappUri),
                        onClick: i,
                        children: (0, l.jsxs)("div", {
                            className: "flex w-full items-center",
                            children: [(0, l.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, l.jsx)("div", {
                                    className: "hidden h-12 w-12 flex-shrink-0 md:flex",
                                    children: (0, l.jsx)(Q.q, {
                                        disableLink: !0,
                                        size: 48,
                                        borderRadius: 999,
                                        walletAddress: a.creator.publicAddress,
                                        webappUri: a.creator.webappUri,
                                        src: null === (t = a.creator.avatar) || void 0 === t ? void 0 : t.url,
                                        username: a.creator.username
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "h-10 w-10 flex-shrink-0 md:hidden",
                                    children: (0, l.jsx)(Q.q, {
                                        disableLink: !0,
                                        size: 40,
                                        borderRadius: 999,
                                        walletAddress: a.creator.publicAddress,
                                        webappUri: a.creator.webappUri,
                                        src: null === (s = a.creator.avatar) || void 0 === s ? void 0 : s.url,
                                        username: a.creator.username
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "hidden items-center md:inline-flex",
                                    children: (0, l.jsx)(ee._, {
                                        username: a.creator.username,
                                        isArtist: !!a.creator.artist
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "ml-2 inline-flex flex-wrap items-start md:ml-0 md:items-center",
                                children: [(0, l.jsx)("div", {
                                    className: "inline-flex md:hidden",
                                    children: (0, l.jsx)(ee._, {
                                        username: a.creator.username,
                                        isArtist: !!a.creator.artist
                                    })
                                }), et.map((e, t) => (0, l.jsxs)("span", {
                                    className: "font-base text-neutral500",
                                    children: [e, t !== et.length - 1 && G.L_]
                                }, `${e}-${t}`))]
                            })]
                        })
                    })
                })
            }
            var es = s(32185),
                el = s(55614);
            let Ordinal = e => {
                let {
                    edition: t,
                    className: s
                } = e;
                return (0, l.jsxs)("span", {
                    className: (0, x.m)("font-base text-base-s font-semibold md:text-base-m lg:text-base-l", s),
                    children: ["#", `${t}`, G.L_]
                })
            };
            var er = s(14542),
                ea = s(11817);
            let MinimalEgg = e => (0, l.jsxs)("svg", {
                width: 18,
                height: 21,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#a)"
                }), (0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#b)",
                    style: {
                        mixBlendMode: "overlay"
                    }
                }), (0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "#D9A625",
                    style: {
                        mixBlendMode: "color"
                    }
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.595 19.451c4.13 0 7.627-4.038 7.627-9.22s-3.497-9.22-7.627-9.22c-1.807 0-3.711.994-5.178 2.675a10.01 10.01 0 0 0-2.45 6.545c0 5.182 3.497 9.22 7.628 9.22Zm0 .513c4.495 0 8.14-4.357 8.14-9.733S13.091.498 8.595.498C4.61.498.454 4.855.454 10.23s3.645 9.733 8.14 9.733Z",
                    fill: "#fff",
                    fillOpacity: .7
                }), (0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#c)"
                }), (0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#d)",
                    style: {
                        mixBlendMode: "overlay"
                    }
                }), (0, l.jsx)("path", {
                    d: "M16.735 10.231c0 5.376-3.644 9.733-8.14 9.733S.454 15.607.454 10.231 4.611.498 8.594.498c4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "#D9A625",
                    style: {
                        mixBlendMode: "color"
                    }
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.595 19.451c4.13 0 7.627-4.038 7.627-9.22s-3.497-9.22-7.627-9.22c-1.807 0-3.711.994-5.178 2.675a10.01 10.01 0 0 0-2.45 6.545c0 5.182 3.497 9.22 7.628 9.22Zm0 .513c4.495 0 8.14-4.357 8.14-9.733S13.091.498 8.595.498C4.61.498.454 4.855.454 10.23s3.645 9.733 8.14 9.733Z",
                    fill: "#fff",
                    fillOpacity: .7
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.78 12.851c1.476.706 3.532 1.15 5.815 1.15 2.282 0 4.338-.444 5.814-1.15 1.493-.714 2.318-1.656 2.318-2.62h.462c0 1.245-1.047 2.303-2.58 3.037-1.552.741-3.678 1.194-6.014 1.194-2.337 0-4.463-.453-6.014-1.194C1.047 12.534 0 11.475 0 10.23h.462c0 .964.825 1.906 2.318 2.62ZM8.595 6.462c-.279 0-.554.007-.826.02a.23.23 0 0 1-.022-.462 17.864 17.864 0 0 1 1.695 0 .23.23 0 1 1-.022.462c-.271-.013-.547-.02-.825-.02ZM6.48 6.358a.23.23 0 0 1-.196.26c-.579.081-1.13.191-1.646.327a.23.23 0 1 1-.118-.447c.536-.14 1.105-.254 1.7-.337a.23.23 0 0 1 .26.197Zm4.227 0a.23.23 0 0 1 .26-.197 14.72 14.72 0 0 1 1.7.337.231.231 0 0 1-.117.447 14.262 14.262 0 0 0-1.646-.326.23.23 0 0 1-.197-.26ZM3.4 7.093a.23.23 0 0 1-.127.3 7.205 7.205 0 0 0-1.567.853.23.23 0 0 1-.274-.372 7.663 7.663 0 0 1 1.667-.908.23.23 0 0 1 .301.127Zm10.445.022a.23.23 0 0 1 .302-.126 7.694 7.694 0 0 1 1.552.843.23.23 0 1 1-.27.375 7.233 7.233 0 0 0-1.458-.79.23.23 0 0 1-.126-.302Z",
                    fill: "#202020"
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.741 17.229c.595-1.78.968-4.255.968-6.998 0-2.744-.373-5.218-.968-6.998-.298-.891-.648-1.596-1.026-2.073-.379-.48-.76-.698-1.12-.698V0c.562 0 1.062.341 1.483.874.423.534.794 1.294 1.1 2.213.616 1.839.993 4.364.993 7.144 0 2.78-.377 5.305-.992 7.144-.307.919-.678 1.678-1.101 2.213-.421.533-.921.874-1.484.874V20c.362 0 .742-.219 1.121-.698.378-.477.728-1.182 1.026-2.073ZM5.48 10.23c0 .336.005.667.016.993a.231.231 0 0 1-.461.015 30.37 30.37 0 0 1 0-2.015.23.23 0 0 1 .461.015c-.01.327-.016.658-.016.993Zm-.12 2.571a.23.23 0 0 1 .252.207c.067.696.16 1.36.274 1.981a.23.23 0 1 1-.454.083 24.261 24.261 0 0 1-.28-2.019.23.23 0 0 1 .207-.252Zm0-5.14a.23.23 0 0 1-.208-.253c.069-.707.163-1.383.28-2.019a.23.23 0 0 1 .454.083 23.804 23.804 0 0 0-.274 1.981.23.23 0 0 1-.253.208Zm.62 8.814a.23.23 0 0 1 .284.16c.21.735.452 1.373.72 1.89a.23.23 0 1 1-.41.212 10.744 10.744 0 0 1-.754-1.976.23.23 0 0 1 .16-.286ZM5.996 3.92a.23.23 0 0 1-.157-.286c.201-.698.436-1.318.698-1.84a.23.23 0 1 1 .413.208c-.247.49-.472 1.082-.668 1.76a.23.23 0 0 1-.286.158Z",
                    fill: "#202020"
                }), (0, l.jsxs)("defs", {
                    children: [(0, l.jsxs)("linearGradient", {
                        id: "a",
                        x1: -.544,
                        y1: 16.383,
                        x2: 27.436,
                        y2: 6.128,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .172,
                            stopColor: "#9EA1A1"
                        }), (0, l.jsx)("stop", {
                            offset: .457,
                            stopColor: "#848B8A"
                        }), (0, l.jsx)("stop", {
                            offset: .554,
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .823,
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .925,
                            stopColor: "#757A7B"
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#576265"
                        })]
                    }), (0, l.jsxs)("linearGradient", {
                        id: "b",
                        x1: 6.953,
                        y1: 10.231,
                        x2: 2.553,
                        y2: .626,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: 0
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#fff"
                        })]
                    }), (0, l.jsxs)("linearGradient", {
                        id: "c",
                        x1: -.544,
                        y1: 16.383,
                        x2: 27.436,
                        y2: 6.128,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .172,
                            stopColor: "#9EA1A1"
                        }), (0, l.jsx)("stop", {
                            offset: .457,
                            stopColor: "#848B8A"
                        }), (0, l.jsx)("stop", {
                            offset: .554,
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .823,
                            stopColor: "#576265"
                        }), (0, l.jsx)("stop", {
                            offset: .925,
                            stopColor: "#757A7B"
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#576265"
                        })]
                    }), (0, l.jsxs)("linearGradient", {
                        id: "d",
                        x1: 6.953,
                        y1: 10.231,
                        x2: 2.553,
                        y2: .626,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: 0
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#fff"
                        })]
                    })]
                })]
            });
            var ei = s(43158);
            let BondingCurveSaleList = e => {
                    var t;
                    let {
                        activityFrag: s
                    } = e, {
                        laptop: r,
                        desktop: a
                    } = ei.MediaQuery.useContainer(), i = r && !a, {
                        release: n,
                        date: o,
                        user: d,
                        quantity: c,
                        fromTokenId: u,
                        toTokenId: x,
                        amountPaidInWei: m
                    } = (0, P.S3c)(P.ftT, s), {
                        avatar: p,
                        username: h,
                        publicAddress: g,
                        webappUri: f
                    } = (0, P.S3c)(P.hns, d), v = (0, V.j7)({
                        weiValue: m,
                        maxDecimals: 4
                    }), j = !!(null === (t = n.goldenEggNft) || void 0 === t ? void 0 : t.tokenId) && BigInt(n.goldenEggNft.tokenId) >= u && BigInt(n.goldenEggNft.tokenId) <= x;
                    return (0, l.jsxs)(ea.ZH, {
                        children: [(0, l.jsx)(er.w, {
                            src: null == p ? void 0 : p.url,
                            username: h,
                            walletAddress: g,
                            userWebappUri: f,
                            forceMobileView: i
                        }), (0, l.jsxs)(es.y, {
                            isoDateString: o,
                            truncateChildren: !0,
                            forceMobileView: i,
                            children: [(0, l.jsx)(ea.jA, {
                                margin: "first",
                                children: (0, l.jsx)(el.w, {
                                    userFrag: d,
                                    forceMobileView: i
                                })
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["minted", G.L_]
                            }), 1 === c && (0, l.jsx)(Ordinal, {
                                edition: u
                            }), j && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    className: "inline-flex h-3 scale-[0.7] items-center align-middle md:scale-75 [&_svg]:drop-shadow-[0px_2px_5px_rgba(217,_166,_37,_0.6)]",
                                    children: (0, l.jsx)(MinimalEgg, {})
                                }), "\xa0"]
                            }), c > 1 && (0, l.jsxs)(ea.IG, {
                                children: [c, " editions", G.L_]
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["for", G.L_]
                            }), (0, l.jsx)(ea.IG, {
                                bold: !0,
                                children: v
                            })]
                        })]
                    })
                },
                BondingCurveSoldList = e => {
                    let {
                        activityFrag: t
                    } = e, {
                        laptop: s,
                        desktop: r
                    } = ei.MediaQuery.useContainer(), a = s && !r, {
                        date: i,
                        user: n,
                        quantity: o,
                        paymentInWei: d,
                        firstTokenId: c
                    } = (0, P.S3c)(P.uFk, t), {
                        avatar: u,
                        username: x,
                        publicAddress: m,
                        webappUri: p
                    } = (0, P.S3c)(P.hns, n), h = (0, V.j7)({
                        weiValue: d,
                        maxDecimals: 4
                    });
                    return (0, l.jsxs)(ea.ZH, {
                        children: [(0, l.jsx)(er.w, {
                            src: null == u ? void 0 : u.url,
                            username: x,
                            walletAddress: m,
                            userWebappUri: p,
                            forceMobileView: a
                        }), (0, l.jsxs)(es.y, {
                            isoDateString: i,
                            truncateChildren: !0,
                            forceMobileView: a,
                            children: [(0, l.jsx)(ea.jA, {
                                margin: "first",
                                children: (0, l.jsx)(el.w, {
                                    userFrag: n,
                                    forceMobileView: a
                                })
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["sold", G.L_]
                            }), 1 === o && (0, l.jsx)(Ordinal, {
                                edition: c
                            }), o > 1 && (0, l.jsxs)(ea.IG, {
                                children: [o, " editions", G.L_]
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["for", G.L_]
                            }), (0, l.jsx)(ea.IG, {
                                bold: !0,
                                children: h
                            })]
                        })]
                    })
                };
            var en = s(47314),
                eo = s(63386),
                ed = s(34524),
                ec = s(74995);

            function SingleQuantity(e) {
                let {
                    tierNumber: t,
                    edition: s,
                    goldenEgg: r
                } = e;
                return (0, l.jsxs)(ed.Tooltip, {
                    openOnClick: !1,
                    children: [(0, l.jsx)(ed.Tooltip.Trigger, {
                        children: (0, l.jsxs)(ea.IG, {
                            className: "group flex items-center",
                            children: [t === ec.a8.LIMITED && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(eo.Z, {
                                    type: r ? "goldenEgg" : ec.Iy.LIMITED
                                }), G.L_]
                            }), (0, l.jsx)(Ordinal, {
                                edition: s,
                                className: "transition-colors group-hover:text-base400"
                            })]
                        })
                    }), (0, l.jsxs)(ed.Tooltip.StyledContent, {
                        size: "sm",
                        children: [t === ec.a8.LIMITED ? en.X.FALLBACK.heading : en.X.FREE.heading, G.L_, (0, l.jsx)(Ordinal, {
                            edition: s,
                            className: "md:text-base-s lg:text-base-s"
                        })]
                    })]
                })
            }
            var eu = s(8205),
                ex = s(26225);

            function formatTierNumber(e) {
                let t = "";
                return e === ec.a8.FREE ? t = `Free${G.L_}` : e === ec.a8.LIMITED && (t = `Limited${G.L_}`), t
            }(0, eu.zo)("div", {
                display: "flex",
                position: "relative",
                flexDirection: "column",
                gap: 16,
                "@desktop": {
                    paddingX: 0
                },
                variants: {
                    noPadding: {
                        true: {
                            paddingX: 0
                        }
                    }
                }
            }), (0, eu.zo)("div", {
                display: "flex"
            }), (0, eu.zo)("div", {
                "@desktop": {
                    paddingX: 0
                }
            }), (0, eu.zo)("div", {
                display: "flex",
                width: "max-content",
                height: "max-content",
                alignItems: "center"
            }), (0, eu.zo)("div", {
                width: "fit-content",
                marginX: 4,
                paddingY: 8,
                "&:first-child": {
                    marginLeft: 0
                },
                "&:last-child": {
                    marginRight: "2rem"
                },
                "@tablet": {
                    paddingY: 0
                }
            }), (0, eu.zo)(ex.A_, {
                width: "unset"
            });
            let PrimarySaleList = e => {
                var t;
                let {
                    activityFrag: s
                } = e, {
                    laptop: r,
                    desktop: a
                } = ei.MediaQuery.useContainer(), i = r && !a, {
                    date: n,
                    release: o,
                    user: d,
                    fromTokenId: c,
                    fromSerialNumber: u,
                    toTokenId: x,
                    quantity: m,
                    amountPaidInWei: p,
                    tierNumber: h
                } = (0, P.S3c)(P.TsL, s), g = !!(null === (t = o.goldenEggNft) || void 0 === t ? void 0 : t.tokenId) && BigInt(o.goldenEggNft.tokenId) >= c && BigInt(o.goldenEggNft.tokenId) <= x, {
                    avatar: f,
                    username: v,
                    publicAddress: j,
                    webappUri: b
                } = (0, P.S3c)(P.hns, d), w = (0, V.j7)({
                    weiValue: p,
                    maxDecimals: 4
                }), C = formatTierNumber(h);
                return (0, l.jsxs)(ea.ZH, {
                    children: [(0, l.jsx)(er.w, {
                        src: null == f ? void 0 : f.url,
                        username: v,
                        walletAddress: j,
                        userWebappUri: b,
                        forceMobileView: i
                    }), (0, l.jsxs)(es.y, {
                        isoDateString: n,
                        truncateChildren: !0,
                        forceMobileView: i,
                        children: [(0, l.jsx)(ea.jA, {
                            margin: "first",
                            children: (0, l.jsx)(el.w, {
                                userFrag: d,
                                forceMobileView: i
                            })
                        }), (0, l.jsxs)(ea.IG, {
                            children: ["minted", G.L_]
                        }), 1 === m && (0, l.jsx)(SingleQuantity, {
                            tierNumber: h,
                            edition: null != u ? u : c,
                            goldenEgg: g
                        }), m > 1 && (0, l.jsx)(ea.IG, {
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center",
                                children: [h === ec.a8.LIMITED && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(eo.Z, {
                                        type: ec.Iy.LIMITED
                                    }), G.L_]
                                }), m, " ", C, "Editions", G.L_]
                            })
                        }), (0, l.jsxs)(ea.IG, {
                            children: ["for", G.L_]
                        }), (0, l.jsx)(ea.IG, {
                            bold: !0,
                            children: w
                        })]
                    })]
                })
            };
            var em = s(71353);
            let ReleaseDroppedList = e => {
                    let {
                        activityFrag: t
                    } = e, {
                        user: s,
                        date: r
                    } = (0, P.S3c)(P.afW, t);
                    return (0, l.jsx)(em.P, {
                        userFrag: s,
                        releaseFrag: null,
                        isoDateString: r,
                        action: em.K.RELEASE_DROPPED,
                        hideArtist: !0,
                        releaseFeed: !0
                    })
                },
                ReleaseLikedList = e => {
                    let {
                        activityFrag: t
                    } = e, {
                        user: s,
                        date: r
                    } = (0, P.S3c)(P.YVb, t);
                    return (0, l.jsx)(em.P, {
                        userFrag: s,
                        releaseFrag: null,
                        isoDateString: r,
                        action: em.K.RELEASE_LIKED,
                        releaseFeed: !0
                    })
                },
                ReleasePlaylistAddedList = e => {
                    let {
                        userFrag: t,
                        playlistFrag: s,
                        isoDateString: r
                    } = e, {
                        laptop: a,
                        desktop: i
                    } = ei.MediaQuery.useContainer(), n = a && !i, {
                        name: o,
                        webappUri: d
                    } = (0, P.S3c)(P.gKo, s), {
                        avatar: c,
                        username: u,
                        publicAddress: x,
                        webappUri: m
                    } = (0, P.S3c)(P.hns, t), p = (0, l.jsx)(ea.jA, {
                        margin: "first",
                        children: (0, l.jsx)(el.w, {
                            userFrag: t,
                            forceMobileView: n
                        })
                    });
                    return (0, l.jsxs)(ea.ZH, {
                        children: [(0, l.jsx)(er.w, {
                            src: null == c ? void 0 : c.url,
                            username: u,
                            walletAddress: x,
                            userWebappUri: m,
                            forceMobileView: n
                        }), (0, l.jsxs)(es.y, {
                            isoDateString: r,
                            truncateChildren: !0,
                            forceMobileView: n,
                            children: [p, (0, l.jsx)(ea.IG, {
                                children: "added this Sound to\xa0"
                            }), (0, l.jsx)(q.s, {
                                pathnameUri: (0, J.OU)(d),
                                children: (0, l.jsxs)(ea.IG, {
                                    black: !0,
                                    className: "playlist-name",
                                    children: [o, "\xa0"]
                                })
                            })]
                        })]
                    })
                },
                ep = "presaved this Sound".split(" "),
                ReleasePresavedList = e => {
                    var t, s;
                    let {
                        activityFrag: r
                    } = e, {
                        user: a,
                        date: i
                    } = (0, P.S3c)(P.L3f, r);
                    return (0, l.jsx)(ee.e, {
                        timestamp: i,
                        children: (0, l.jsx)(q.s, {
                            pathnameUri: (0, J.OU)(a.webappUri),
                            children: (0, l.jsxs)("div", {
                                className: "flex w-full items-center",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, l.jsx)("div", {
                                        className: "hidden h-12 w-12 flex-shrink-0 md:flex",
                                        children: (0, l.jsx)(Q.q, {
                                            disableLink: !0,
                                            size: 48,
                                            borderRadius: 999,
                                            walletAddress: a.publicAddress,
                                            webappUri: a.webappUri,
                                            src: null === (t = a.avatar) || void 0 === t ? void 0 : t.url,
                                            username: a.username
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "h-10 w-10 flex-shrink-0 md:hidden",
                                        children: (0, l.jsx)(Q.q, {
                                            disableLink: !0,
                                            size: 40,
                                            borderRadius: 999,
                                            walletAddress: a.publicAddress,
                                            webappUri: a.webappUri,
                                            src: null === (s = a.avatar) || void 0 === s ? void 0 : s.url,
                                            username: a.username
                                        })
                                    }), (0, l.jsx)("div", {
                                        className: "hidden items-center md:inline-flex",
                                        children: (0, l.jsx)(ee._, {
                                            username: a.username,
                                            isArtist: !!a.artist
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: "ml-2 inline-flex flex-wrap items-start md:ml-0 md:items-center",
                                    children: [(0, l.jsx)("div", {
                                        className: "inline-flex md:hidden",
                                        children: (0, l.jsx)(ee._, {
                                            username: a.username,
                                            isArtist: !!a.artist
                                        })
                                    }), ep.map((e, t) => (0, l.jsxs)("span", {
                                        className: "font-base text-neutral500",
                                        children: [e, t !== ep.length - 1 && G.L_]
                                    }, `${e}-${t}`))]
                                })]
                            })
                        })
                    })
                };
            var eh = s(52803);
            let ReleasesAddedList = e => {
                    let {
                        activityFrag: t
                    } = e, {
                        id: s,
                        playlist: r,
                        numAddedReleases: a,
                        user: i,
                        date: n
                    } = (0, P.S3c)(P.N5j, t);
                    return r ? (0, l.jsx)(eh.PR, {
                        actionId: s,
                        userFrag: i,
                        playlistFrag: r,
                        featuredReleases: null,
                        isoDateString: n,
                        releaseCount: a,
                        actionType: eh.Cw.RELEASE_ADDED,
                        releaseFeed: !0
                    }) : null
                },
                SecondarySaleList = e => {
                    var t;
                    let {
                        activityFrag: s
                    } = e, {
                        tabletLandscape: r,
                        laptop: a,
                        desktop: i
                    } = ei.MediaQuery.useContainer(), n = a && !i, {
                        release: o,
                        date: d,
                        amountPaidInWei: c,
                        fromTokenId: u,
                        fromSerialNumber: x,
                        tierNumber: m,
                        toTokenId: p,
                        quantity: h,
                        user: g,
                        purchasedFromUser: f
                    } = (0, P.S3c)(P.CBN, s), v = !!(null === (t = o.goldenEggNft) || void 0 === t ? void 0 : t.tokenId) && BigInt(o.goldenEggNft.tokenId) >= u && BigInt(o.goldenEggNft.tokenId) <= p, j = (0, V.j7)({
                        weiValue: c,
                        maxDecimals: 4
                    }), {
                        avatar: b,
                        username: w,
                        publicAddress: C,
                        webappUri: y
                    } = (0, P.S3c)(P.hns, g), S = formatTierNumber(m);
                    return (0, l.jsxs)(ea.ZH, {
                        children: [(0, l.jsx)(er.w, {
                            src: null == b ? void 0 : b.url,
                            username: w,
                            walletAddress: C,
                            userWebappUri: y,
                            forceMobileView: n
                        }), (0, l.jsxs)(es.y, {
                            isoDateString: d,
                            truncateChildren: !0,
                            forceMobileView: n,
                            children: [(0, l.jsx)(ea.jA, {
                                margin: "first",
                                children: (0, l.jsx)(el.w, {
                                    userFrag: g,
                                    forceMobileView: n
                                })
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["purchased", G.L_]
                            }), 1 === h && (0, l.jsxs)(ea.IG, {
                                children: [S, (0, l.jsx)(Ordinal, {
                                    edition: x || u
                                })]
                            }), h > 1 && (0, l.jsxs)(ea.IG, {
                                children: [h, " ", S, "editions", G.L_]
                            }), v && (0, l.jsxs)(ea.D8, {
                                media: "notTabletLandscape",
                                children: [(0, l.jsx)(ea.GP, {
                                    children: (0, l.jsx)(MinimalEgg, {})
                                }), G.L_]
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["from", G.L_]
                            }), (0, l.jsxs)(ea.jA, {
                                children: [(0, l.jsx)(el.w, {
                                    userFrag: f,
                                    forceMobileView: n
                                }), !r && G.L_]
                            }), (0, l.jsxs)(ea.IG, {
                                children: ["for", G.L_]
                            }), (0, l.jsx)(ea.IG, {
                                bold: !0,
                                children: j
                            })]
                        })]
                    })
                };
            var eg = s(33037),
                ef = s(74057),
                ev = s(75196),
                ej = s(43607),
                eb = s(76254),
                ew = s(3351);
            let FEED_TYPES = () => [{
                    type: P.IsM.All,
                    label: "All"
                }, {
                    type: P.IsM.Posts,
                    label: "Posts"
                }, {
                    type: P.IsM.Collections,
                    label: "Collected"
                }, {
                    type: P.IsM.Playlists,
                    label: "Playlists"
                }, {
                    type: P.IsM.Likes,
                    label: "Likes"
                }, {
                    type: P.IsM.Presaves,
                    label: "Presaves"
                }],
                FeedHeader = e => {
                    let {
                        filter: t,
                        setFilter: s,
                        icons: r
                    } = e;
                    return (0, l.jsxs)(eC, {
                        children: [(0, l.jsxs)(eS, {
                            children: [(0, l.jsx)(ex.fK, {
                                children: (0, l.jsx)(ey, {
                                    children: FEED_TYPES().map(e => {
                                        let {
                                            type: r,
                                            label: a
                                        } = e;
                                        return (0, l.jsx)(eL, {
                                            children: (0, l.jsx)(ew.A, {
                                                text: a,
                                                isSelected: (0, V.nz)({
                                                    prev: t || [],
                                                    currentSelected: r,
                                                    all: Object.values(P.IsM),
                                                    allKey: P.IsM.All
                                                }),
                                                onClick: () => {
                                                    s((0, V.T8)({
                                                        prev: t || [],
                                                        currentSelected: r,
                                                        all: Object.values(P.IsM),
                                                        allKey: P.IsM.All
                                                    }))
                                                }
                                            })
                                        }, r)
                                    })
                                })
                            }), (0, l.jsx)(ex.Cz, {
                                hiddenOnMobile: !0,
                                orientation: "horizontal",
                                children: (0, l.jsx)(ex.dL, {
                                    hiddenOnMobile: !0
                                })
                            })]
                        }), (0, l.jsx)(eN, {
                            children: r
                        })]
                    })
                },
                eC = (0, eu.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    overflow: "hidden",
                    margin: "-12px 0 10px",
                    padding: "0 16px",
                    h3: {
                        kicker: "S",
                        fontStyle: "regular",
                        textTransform: "uppercase"
                    },
                    "@tablet": {
                        flexDirection: "row",
                        alignItems: "center"
                    },
                    "@desktop": {
                        margin: "2px 0 21px",
                        padding: "0"
                    }
                }),
                ey = (0, eu.zo)("div", {
                    display: "flex"
                }),
                eS = (0, eu.zo)(ex.A_, {
                    marginLeft: -16,
                    paddingLeft: 0,
                    width: "calc(100% + 32px)",
                    "@tablet": {
                        width: "fit-content"
                    },
                    "@desktop": {
                        paddingLeft: 16
                    }
                }),
                eL = (0, eu.zo)("div", {
                    width: "fit-content",
                    marginX: 4,
                    paddingY: 8,
                    "&:first-child": {
                        marginLeft: 0
                    },
                    "&:last-child": {
                        marginRight: "2rem"
                    },
                    "@tablet": {
                        paddingY: 0
                    }
                }),
                eN = (0, eu.zo)("div", {
                    marginLeft: "auto"
                });
            var eI = s(72866),
                eM = s(44484);
            let ActionComponent = e => {
                    let {
                        item: t
                    } = e, s = (0, P.S3c)(P.tCH, t);
                    switch (s.__typename) {
                        case "PrimarySale":
                            return (0, l.jsx)(PrimarySaleList, {
                                activityFrag: s
                            }, s.id);
                        case "SecondarySale":
                            return (0, l.jsx)(SecondarySaleList, {
                                activityFrag: s
                            }, s.id);
                        case "BondingCurveSale":
                            return (0, l.jsx)(BondingCurveSaleList, {
                                activityFrag: s
                            }, s.id);
                        case "BondingCurveSold":
                            return (0, l.jsx)(BondingCurveSoldList, {
                                activityFrag: s
                            }, s.id);
                        case "ReleasesAddedToPlaylist":
                            return s.playlist ? (0, l.jsx)(ReleasesAddedList, {
                                activityFrag: s
                            }, s.id) : null;
                        case "ReleasesAddedRemovedFromPlaylist":
                            return s.playlist ? (0, l.jsx)(ReleasePlaylistAddedList, {
                                userFrag: s.user,
                                isoDateString: s.date,
                                playlistFrag: s.playlist
                            }) : null;
                        case "PlaylistCreated":
                            return s.playlist ? (0, l.jsx)(ReleasePlaylistAddedList, {
                                userFrag: s.user,
                                playlistFrag: s.playlist,
                                isoDateString: s.date
                            }) : null;
                        case "ReleaseDropped":
                            return (0, l.jsx)(ReleaseDroppedList, {
                                activityFrag: s
                            }, s.id);
                        case "ReleaseLiked":
                            return s.release ? (0, l.jsx)(ReleaseLikedList, {
                                activityFrag: s
                            }, s.id) : null;
                        case "CreatedPost":
                            return (0, l.jsx)(ReleaseCreatedPostActivity, {
                                createdPostFrag: s
                            });
                        case "UserPresavedRelease":
                            return (0, l.jsx)(ReleasePresavedList, {
                                activityFrag: s
                            }, s.id);
                        default:
                            return null
                    }
                },
                renderItemContent = e => {
                    let {
                        item: t
                    } = e;
                    return (0, l.jsx)(ActionComponent, {
                        item: t
                    }, t.id)
                },
                eE = (0, Y.ZN)(P.IsM);

            function ReleaseActivityFeed(e) {
                var t;
                let {
                    releaseId: s
                } = e, [a, i] = (0, r.useState)(!1), [n, o] = (0, r.useState)(!1), {
                    data: d,
                    hasNextPage: c,
                    loadMore: u,
                    refetch: x,
                    loading: m,
                    setFilter: p,
                    error: h
                } = function(e) {
                    var t, s, l;
                    let {
                        releaseId: a
                    } = e, i = (0, eI.wv)(), n = (0, r.useCallback)(e => {
                        if ((0, eM.Z)(i.filter.types, e) || !a) return;
                        let t = null == e ? void 0 : e.filter(e => e !== P.IsM.All);
                        eI.HA.filter[a] = {
                            types: t
                        }
                    }, [a, i.filter.types]), o = {
                        types: a && (null === (s = i.filter[a]) || void 0 === s ? void 0 : null === (t = s.types) || void 0 === t ? void 0 : t.length) ? null === (l = i.filter[a]) || void 0 === l ? void 0 : l.types : [P.IsM.All]
                    }, {
                        orderedList: d,
                        isLoading: c,
                        loadMoreNextPage: u,
                        refetch: x,
                        error: m,
                        hasNextPage: p = !1
                    } = (0, P.NSZ)(P.gS7, {
                        getNextPageParam(e) {
                            let {
                                data: {
                                    releaseActivityFeed: {
                                        pageInfo: t
                                    }
                                }
                            } = e;
                            return t.hasNextPage && {
                                after: t.endCursor
                            }
                        },
                        filterQueryKey: {
                            releaseId: a,
                            filter: o
                        },
                        variables: !!a && (e => {
                            let {
                                pageParam: t
                            } = e, s = (null == t ? void 0 : t.after) || null;
                            return {
                                releaseId: a,
                                filter: o,
                                pagination: {
                                    after: s,
                                    first: null == s ? 20 : 10
                                }
                            }
                        }),
                        list(e) {
                            let {
                                releaseActivityFeed: t
                            } = e;
                            return t.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        order: [
                            [e => e.date, e => e.id],
                            ["desc", "desc"]
                        ],
                        staleTime: 0
                    });
                    return {
                        data: d,
                        loading: c,
                        loadMore: u,
                        error: m,
                        hasNextPage: p,
                        refetch: x,
                        setFilter: n,
                        filter: o
                    }
                }({
                    releaseId: s
                }), g = (0, eI.wv)(), {
                    isPopStateEvent: f
                } = (0, eb.g$)(), v = (0, r.useMemo)(() => m || a || 0 !== d.length ? m || a || c ? (0, l.jsx)(ej.$, {
                    className: "py-5 text-neutral400"
                }) : null : (0, l.jsx)(eg.u, {}), [d.length, c, a, m]), j = (0, K.R)(async () => {
                    i(!0), await x(), await new Promise(e => setTimeout(e, 200)), o(!0), i(!1)
                });
                (0, r.useEffect)(() => {
                    let e = setTimeout(() => {
                        o(!1)
                    }, G.Rc);
                    return () => clearTimeout(e)
                }, [n]);
                let b = null === (t = g.filter[s]) || void 0 === t ? void 0 : t.types,
                    w = (0, r.useMemo)(() => (null == b ? void 0 : b.filter(eE)) || [], [b]),
                    C = !!h && 0 === d.length && !m;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(FeedHeader, {
                        filter: w,
                        setFilter: p,
                        icons: (0, l.jsx)(ef.h, {
                            isFetchingNewActivity: a,
                            refetch: j,
                            showRefreshSuccess: n
                        })
                    }), C && (0, l.jsx)(ev.IY, {
                        divider: !0
                    }), (0, l.jsx)("div", {
                        className: "overflow-hidden",
                        children: (0, l.jsx)(X.OO, {
                            useWindowScroll: !0,
                            data: d,
                            itemContent: (e, t) => renderItemContent({
                                index: e,
                                item: t,
                                releaseId: s
                            }),
                            endReached: u,
                            rangeChanged: e => {
                                let {
                                    startIndex: t
                                } = e;
                                return eI.HA.scrollIndices[s] = t
                            },
                            components: {
                                Footer: () => v
                            },
                            overscan: 100,
                            ...f && g.scrollIndices[s] ? {
                                initialTopMostItemIndex: g.scrollIndices[s] || 0
                            } : {}
                        })
                    })]
                })
            }
            var ek = s(73304),
                eT = s(42420);
            let ExportCSVMenuItem = e => {
                let {
                    onClick: t,
                    disabled: s
                } = e;
                return (0, l.jsxs)(y.Xi, {
                    onClick: t,
                    disabled: s,
                    children: [(0, l.jsx)(b.G, {
                        icon: eT.fu,
                        size: "lg"
                    }), (0, l.jsx)(y.i_, {
                        children: "Export CSV"
                    })]
                })
            };
            var eA = s(21922),
                eR = s(75747),
                eP = s(51401),
                eF = s(63226),
                e_ = s(83487);

            function EmptyAudienceSvg(e) {
                return (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 97,
                    height: 49,
                    fill: "none",
                    ...e,
                    children: [(0, l.jsx)("path", {
                        fill: "#1F1F1F",
                        d: "M91.617 37.665a5.173 5.173 0 0 0 5.028 5.028 5.173 5.173 0 0 0-5.028 5.028 5.173 5.173 0 0 0-5.028-5.028 5.173 5.173 0 0 0 5.028-5.028Z"
                    }), (0, l.jsx)("rect", {
                        width: 21.72,
                        height: 21.72,
                        x: 12.234,
                        y: .64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 21.72,
                        height: 21.72,
                        x: 37.234,
                        y: .64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 21.72,
                        height: 21.72,
                        x: 62.234,
                        y: .64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 12.234,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 24.734,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 37.234,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 49.734,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 62.234,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 74.734,
                        y: 25.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 12.234,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 24.734,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 37.234,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 49.734,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 62.234,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("rect", {
                        width: 9.22,
                        height: 9.72,
                        x: 74.734,
                        y: 38.64,
                        stroke: "#0F0F0F",
                        strokeWidth: .28,
                        rx: 1.86
                    }), (0, l.jsx)("path", {
                        fill: "#1F1F1F",
                        d: "M7.865.775a7.716 7.716 0 0 0 7.5 7.5 7.716 7.716 0 0 0-7.5 7.5 7.716 7.716 0 0 0-7.5-7.5 7.716 7.716 0 0 0 7.5-7.5Z"
                    })]
                })
            }

            function EmptyAudience(e) {
                let {
                    hasSaleStarted: t,
                    userId: s,
                    artistId: r
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex h-auto w-full min-w-0 flex-col items-center justify-center gap-4 self-stretch overflow-hidden rounded-xl bg-base100 p-10 text-center",
                    children: [(0, l.jsx)(EmptyAudienceSvg, {
                        className: "hidden md:block"
                    }), (0, l.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-1",
                        children: [(0, l.jsx)("span", {
                            className: "font-title text-title-s font-medium text-base900",
                            children: "Be the first"
                        }), (0, l.jsx)("span", {
                            className: "font-base text-base-m font-normal text-base600",
                            children: "Collect to join the audience"
                        })]
                    }), !t && s && r && (0, l.jsx)(e_.I, {
                        userId: s,
                        artistId: r,
                        type: "audience"
                    })]
                })
            }
            var eO = s(5221),
                ez = s(5111),
                eD = s(73950),
                eU = s(76292);
            let e$ = 25,
                eB = {
                    WHALE: {
                        icon: "/images/audience-whale-badge.png",
                        long_title: "The Whale",
                        short_title: "Whale",
                        long_description: "Be the top spender",
                        short_descrition: "Highest spender"
                    },
                    RECENT: {
                        icon: "/images/audience-recent-badge.png",
                        long_title: "Recent Collector",
                        short_title: "Recent",
                        long_description: "Be a recent collector",
                        short_descrition: "Latest collector"
                    },
                    EARLIEST: {
                        icon: "/images/audience-earliest-badge.png",
                        long_title: "Earliest Collector",
                        short_title: "Earliest",
                        long_description: "Be the first to collect",
                        short_descrition: "First collector"
                    }
                };

            function Highlight(e) {
                var t, s;
                let {
                    type: r,
                    collector: a
                } = e, i = (0, V.by)({
                    weiValue: a.volumeSpent,
                    maxDecimals: 4
                }), n = (0, eO.default)(new Date(a.firstNftCollectedDate), "MMM dd, yyyy"), o = "WHALE" === r ? `Spent ${i} ETH` : `Collected ${n}`;
                return (0, l.jsxs)(q.s, {
                    pathnameUri: (0, J.OU)(a.user.webappUri),
                    className: "group relative col-span-6 flex w-full min-w-0 flex-col gap-0 self-stretch overflow-hidden rounded-xl md:rounded-[20px]",
                    children: [(0, l.jsx)("div", {
                        className: "aspect-square w-full overflow-hidden rounded-t-xl md:rounded-t-[20px]",
                        children: (0, l.jsx)(eD.G, {
                            src: null !== (s = null === (t = a.user.avatar) || void 0 === t ? void 0 : t.url) && void 0 !== s ? s : (0, ez.l)({
                                walletAddress: a.user.publicAddress
                            }),
                            alt: "user avatar",
                            className: "aspect-square rounded-t-xl object-cover transition-transform duration-300 ease-linear [transform:translateZ(0)] group-hover:scale-[1.2] md:rounded-t-[20px]",
                            placeholder: "blur",
                            blurDataURL: (0, eU.Z)(400, 400),
                            width: 400,
                            height: 400
                        })
                    }), (0, l.jsxs)("div", {
                        className: "absolute right-[2px] top-[2px] flex items-center gap-1 rounded-[93px] bg-[rgba(0,0,0,0.60)] py-[3px] pl-3 pr-[3px] md:right-1 md:top-1 md:py-[6px] md:pr-[6px]",
                        children: [(0, l.jsx)("span", {
                            className: "text-title hidden font-title text-title-xxs font-medium text-white md:block lt:hidden xl:block",
                            children: eB[r].long_title
                        }), (0, l.jsx)("span", {
                            className: "text-title font-title text-title-xxs font-medium text-white md:hidden lt:block xl:hidden",
                            children: eB[r].short_title
                        }), (0, l.jsx)(eD.G, {
                            width: 22,
                            height: 22,
                            alt: "badge",
                            src: eB[r].icon
                        })]
                    }), (0, l.jsx)("div", {
                        className: "absolute bottom-[55px] left-0 right-0 hidden h-[25%] bg-[linear-gradient(180deg,rgba(14,18,19,0.00)_0%,#0E1213_100%)] md:flex lt:hidden xl:flex"
                    }), (0, l.jsxs)("div", {
                        className: "hidden h-[55px] flex-col gap-1 bg-black px-4 pb-4 pt-0 md:flex lt:hidden xl:flex",
                        children: [(0, l.jsx)("span", {
                            className: "overflow-hidden text-ellipsis whitespace-nowrap font-title text-title-s font-medium text-base100",
                            children: a.user.username
                        }), (0, l.jsx)("span", {
                            className: "overflow-hidden text-ellipsis whitespace-nowrap font-base text-base-s font-normal text-base400",
                            children: o
                        })]
                    })]
                })
            }

            function EmptyHighlight(e) {
                let {
                    type: t
                } = e, {
                    icon: s,
                    long_description: r,
                    long_title: a,
                    short_descrition: i,
                    short_title: n
                } = eB[t];
                return (0, l.jsx)("div", {
                    className: (0, x.m)("col-span-6 flex aspect-square h-auto w-full min-w-0 items-center justify-center", "self-stretch rounded-xl bg-base100 p-3 md:aspect-[5/6] md:rounded-[20px] md:p-10 lt:aspect-square lt:p-3 xl:aspect-[5/6] xl:p-10"),
                    children: (0, l.jsxs)("div", {
                        className: "flex flex-col items-center gap-1 text-center md:gap-3 lt:gap-1 xl:gap-3",
                        children: [(0, l.jsx)(eD.G, {
                            src: s,
                            alt: "badge",
                            height: 28,
                            width: 28
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col gap-1 md:gap-2",
                            children: [(0, l.jsx)("span", {
                                className: "hidden font-title text-title-m font-medium text-base900 md:block lt:hidden xl:block",
                                children: a
                            }), (0, l.jsx)("span", {
                                className: "block font-title text-title-xxs font-medium text-base900 md:hidden lt:block xl:hidden",
                                children: n
                            }), (0, l.jsx)("span", {
                                className: "hidden font-base text-base-m font-normal text-base500 md:block lt:hidden xl:block",
                                children: r
                            }), (0, l.jsx)("span", {
                                className: "block font-base text-base-xs font-normal text-base500 md:hidden lt:block xl:hidden",
                                children: i
                            })]
                        })]
                    })
                })
            }

            function HighlightedAudience(e) {
                let {
                    releaseFrag: t,
                    hasAudience: s
                } = e, r = (0, P.S3c)(P.LP, t), a = (0, P.S3c)(P.QWX, r.topSpentCollector), i = (0, P.S3c)(P.QWX, r.latestCollector), n = (0, P.S3c)(P.QWX, r.earliestCollector);
                return (0, l.jsx)("div", {
                    className: "mb-8 grid w-full grid-cols-[repeat(18,1fr)] gap-2 overflow-visible md:gap-3 lt:gap-2 xl:gap-3",
                    children: s ? (0, l.jsxs)(l.Fragment, {
                        children: [a ? (0, l.jsx)(Highlight, {
                            type: "WHALE",
                            collector: a
                        }) : (0, l.jsx)(EmptyHighlight, {
                            type: "WHALE"
                        }), i ? (0, l.jsx)(Highlight, {
                            type: "RECENT",
                            collector: i
                        }) : (0, l.jsx)(EmptyHighlight, {
                            type: "RECENT"
                        }), n ? (0, l.jsx)(Highlight, {
                            type: "EARLIEST",
                            collector: n
                        }) : (0, l.jsx)(EmptyHighlight, {
                            type: "EARLIEST"
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(EmptyHighlight, {
                            type: "WHALE"
                        }), (0, l.jsx)(EmptyHighlight, {
                            type: "RECENT"
                        }), (0, l.jsx)(EmptyHighlight, {
                            type: "EARLIEST"
                        })]
                    })
                })
            }
            var eH = s(58658),
                eW = s(1808),
                eZ = s(69598),
                eG = s(36750),
                eV = s(64398),
                eX = s(49542),
                eY = s(21597),
                eQ = s(77134),
                eq = s(64638),
                eK = s(98335);

            function AudienceCommentCard(e) {
                let {
                    username: t,
                    publicAddress: s,
                    content: a,
                    lexicalContent: i,
                    avatarUrl: n,
                    date: o,
                    isArtist: d,
                    webappUri: c,
                    totalEditions: u,
                    postCount: m,
                    edition: p,
                    sort: h,
                    className: g
                } = e, [f, v] = (0, r.useState)(!1), j = "vip" === p, b = "goldenEgg" === p;
                return (0, l.jsxs)("div", {
                    className: (0, x.m)("relative flex h-auto w-full max-w-[255px] items-center justify-center gap-[10px] overflow-hidden rounded-lg bg-neutral900 py-3 pl-3 pr-4", g),
                    children: [(0, l.jsxs)("div", {
                        className: (0, eX.default)("relative flex h-12 w-12 flex-shrink-0 rounded-full", j ? "limited-border p-[2px]" : b ? "golden-egg-border p-[2px]" : ""),
                        children: ["ga" !== p && (0, l.jsx)(Badge, {
                            hasGoldenEgg: b,
                            type: "hover_card"
                        }), (0, l.jsx)(Q.q, {
                            size: 48,
                            src: n,
                            username: t,
                            borderRadius: "50%",
                            walletAddress: s,
                            webappUri: c
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "group flex h-auto w-full flex-col gap-1 overflow-hidden",
                        children: [(0, l.jsx)(q.s, {
                            pathnameUri: (0, J.OU)(c),
                            children: (0, l.jsxs)("div", {
                                className: "flex items-center gap-1",
                                children: [(0, l.jsx)("h2", {
                                    className: "overflow-hidden text-ellipsis whitespace-nowrap font-base text-base-m font-semibold text-white",
                                    children: t
                                }), d && (0, l.jsx)(eK.O, {
                                    noTooltip: !0,
                                    size: 14
                                })]
                            })
                        }), (0, l.jsx)("span", {
                            className: "font-base text-base-s font-medium text-base400",
                            children: "top" === h ? (0, l.jsxs)(l.Fragment, {
                                children: [u > 0 ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, eY.ZP)(u), "\xa0", (0, V.Lo)({
                                        word: "edition",
                                        count: u
                                    })]
                                }) : (0, l.jsxs)(l.Fragment, {
                                    children: [(0, eY.ZP)(m), "\xa0", (0, V.Lo)({
                                        word: "post",
                                        count: m
                                    })]
                                }), "ga" !== p && "number" == typeof u && (0, l.jsxs)(l.Fragment, {
                                    children: [G.L_, "•", G.L_]
                                }), "ga" !== p && (0, l.jsx)(l.Fragment, {
                                    children: (0, l.jsx)("span", {
                                        className: (0, eX.default)("text-gradient-animated bg-clip-text", j ? "limited-text" : "golden-egg-text"),
                                        style: {
                                            WebkitTextFillColor: "transparent"
                                        },
                                        children: j ? "Limited Edition" : "Golden Egg"
                                    })
                                })]
                            }) : (0, eO.default)(new Date(o), "P")
                        }), (a || i) && (0, l.jsx)("p", {
                            className: (0, eX.default)("h-auto flex-grow overflow-hidden text-ellipsis font-base text-base-m text-white", !f && "max-h-9"),
                            onClick: () => v(e => !e),
                            children: (0, l.jsx)(eQ.y, {
                                maxHeightClassName: "max-h-[40px]",
                                className: "from-neutral900 from-40%",
                                buttonClassName: "!text-white hover:bg-transparent text-base-s",
                                enabled: !0,
                                children: null != i ? (0, l.jsx)(eq.X, {
                                    state: i,
                                    className: "overflow-hidden text-ellipsis font-base text-base-m text-white"
                                }) : (0, l.jsx)("div", {
                                    className: "break-words",
                                    children: a
                                })
                            })
                        })]
                    })]
                })
            }
            var eJ = s(36619),
                e0 = s(25828);

            function Badge(e) {
                let {
                    hasGoldenEgg: t,
                    type: s
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, x.m)("text-gradient-animated absolute z-above1 rounded-full p-[2px]", t ? "golden-egg-border" : "limited-border", "audience" === s && "right-[2px] top-[2px]", "hover_card" === s && "-right-[2px] -top-[2px]"),
                    children: (0, l.jsx)("div", {
                        className: (0, x.m)("flex h-[18px] w-[18px] items-center justify-center rounded-full bg-black p-[4px]"),
                        children: (0, l.jsx)(eD.G, {
                            alt: t ? "golden egg badge" : "limited badge",
                            src: t ? "/icons/only-egg.svg" : "/icons/only-star.svg",
                            className: "!h-[10px] !w-[10px] !object-contain",
                            width: 10,
                            height: 10
                        })
                    })
                })
            }

            function AudienceSeat(e) {
                var t;
                let {
                    seatFrag: s,
                    sort: a,
                    tier: i
                } = e, n = (0, P.S3c)(P.Cnz, s), o = (0, r.useRef)(null), {
                    isGoldenEggWinner: d,
                    vipNftsCount: c,
                    user: {
                        avatar: u,
                        publicAddress: m,
                        webappUri: p
                    }
                } = n, {
                    tablet: h
                } = (0, ei.useMediaQuery)(), g = !!c && "GA" !== i, f = (0, l.jsx)("div", {
                    className: (0, x.m)("relative aspect-square h-auto w-full min-w-0 bg-neutral100", "col-span-1 rounded-lg [&_img]:w-full [&_img]:object-cover"),
                    children: (0, l.jsxs)(q.s, {
                        pathnameUri: (0, J.OU)(p),
                        children: [(d || g) && "GA" !== i && (0, l.jsx)(Badge, {
                            hasGoldenEgg: d,
                            type: "audience"
                        }), (0, l.jsx)(eD.G, {
                            src: null !== (t = null == u ? void 0 : u.url) && void 0 !== t ? t : (0, ez.l)({
                                walletAddress: m
                            }),
                            alt: "user avatar",
                            className: "rounded-lg object-cover",
                            placeholder: "blur",
                            blurDataURL: (0, eU.Z)(400, 400),
                            fill: !0
                        })]
                    })
                });
                return h ? (0, l.jsxs)(eJ.HoverCard, {
                    closeDelay: 100,
                    children: [(0, l.jsx)(eJ.HoverCard.Trigger, {
                        ref: o,
                        asChild: !0,
                        children: f
                    }), (0, l.jsx)(eJ.StyledHoverContent, {
                        className: "min-w-[253px] p-0",
                        sideOffset: 8,
                        side: "top",
                        onPointerDownOutside: e => {
                            e.target === o.current && e.preventDefault()
                        },
                        children: (0, l.jsx)(TopCommentCard, {
                            data: n,
                            edition: d ? "goldenEgg" : g ? "vip" : "ga",
                            tier: i,
                            sort: a
                        })
                    })]
                }) : f
            }
            let TopCommentCard = e => {
                    let {
                        data: t,
                        edition: s,
                        tier: r,
                        sort: a
                    } = e, {
                        user: {
                            username: i,
                            publicAddress: n,
                            artist: o,
                            webappUri: d,
                            avatar: c
                        },
                        nftsCount: u,
                        gaNftsCount: x,
                        vipNftsCount: m,
                        mostRecentReleasePost: p,
                        firstActivityDate: h,
                        postCount: g
                    } = (0, P.S3c)(P.AB2, t), f = (0, e0.F)(null == p ? void 0 : p.lexicalContent);
                    return (0, l.jsx)(AudienceCommentCard, {
                        username: i,
                        content: null == p ? void 0 : p.content,
                        lexicalContent: f,
                        date: h,
                        publicAddress: n,
                        totalEditions: "ALL" === r ? u : "VIP" === r ? m : x,
                        postCount: g,
                        avatarUrl: null == c ? void 0 : c.url,
                        isArtist: null != o,
                        webappUri: d,
                        edition: s,
                        sort: a
                    })
                },
                SkeletonSeat = () => (0, l.jsx)("div", {
                    className: "relative col-span-1 aspect-square h-auto w-full min-w-0 animate-pulse rounded-lg bg-neutral100"
                }),
                LoadingSeats = () => (0, l.jsxs)("div", {
                    className: "flex w-full flex-col gap-2 md:gap-4",
                    children: [(0, l.jsx)("div", {
                        className: "grid w-full grid-cols-[repeat(4,1fr)] gap-3 overflow-hidden",
                        children: Array.from({
                            length: 4
                        }).map((e, t) => (0, l.jsx)(SkeletonSeat, {}, t))
                    }), (0, l.jsx)("div", {
                        className: "hidden w-full grid-cols-[repeat(6,1fr)] gap-3 overflow-hidden md:grid",
                        children: Array.from({
                            length: 6
                        }).map((e, t) => (0, l.jsx)(SkeletonSeat, {}, t))
                    }), (0, l.jsx)("div", {
                        className: "hidden w-full grid-cols-[repeat(7,1fr)] gap-3 overflow-hidden md:grid",
                        children: Array.from({
                            length: 7
                        }).map((e, t) => (0, l.jsx)(SkeletonSeat, {}, t))
                    }), (0, l.jsx)("div", {
                        className: "grid w-full grid-cols-[repeat(6,1fr)] gap-2 overflow-hidden md:hidden",
                        children: Array.from({
                            length: 12
                        }).map((e, t) => (0, l.jsx)(SkeletonSeat, {}, t))
                    })]
                });

            function AudienceSeats(e) {
                let {
                    releaseFrag: t,
                    sort: s,
                    paginate: a,
                    tabsTopOffset: i
                } = e, {
                    collectors: n,
                    hasNextPage: o,
                    isFetchingNextPage: d,
                    loading: c,
                    fetchMore: u,
                    rows: x
                } = function(e) {
                    let {
                        releaseId: t,
                        sort: s,
                        paginate: a
                    } = e, {
                        tablet: i
                    } = (0, ei.useMediaQuery)(), n = (0, eV.S)(), o = P.gpI.All, {
                        orderedList: d,
                        error: c,
                        isLoadingNewPage: u,
                        loadMoreNextPage: x,
                        hasNextPage: m = !1,
                        isFetchingNextPage: p
                    } = (0, P.NSZ)(P.z0H, {
                        filterQueryKey: {
                            releaseId: t,
                            tier: o,
                            sort: s
                        },
                        getNextPageParam(e) {
                            let {
                                data: t
                            } = e;
                            return t.releaseAudience.pageInfo.hasNextPage && {
                                after: t.releaseAudience.pageInfo.endCursor
                            }
                        },
                        variables(e) {
                            let {
                                pageParam: l
                            } = e;
                            return {
                                input: {
                                    releaseId: t,
                                    pagination: {
                                        sort: function(e, t) {
                                            let s = "top" === t,
                                                l = {
                                                    firstActivityDate: "ASC"
                                                };
                                            switch (e) {
                                                case "GA":
                                                    return s ? {
                                                        gaNftsCount: "DESC"
                                                    } : l;
                                                case "ALL":
                                                    return s ? {
                                                        priorityTop: "DESC"
                                                    } : l;
                                                case "VIP":
                                                    return s ? {
                                                        vipNftsCount: "DESC"
                                                    } : l;
                                                default:
                                                    return
                                            }
                                        }(o, s),
                                        first: a ? 51 : 34,
                                        after: (null == l ? void 0 : l.after) || null,
                                        tier: o
                                    }
                                }
                            }
                        },
                        list(e) {
                            let {
                                releaseAudience: t
                            } = e;
                            return t.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        onError(e) {
                            n({
                                action: eH.pe.AUDIENCE_FETCH_ERROR,
                                error: e,
                                errorType: eH.QS.FETCH_GQL_ERROR,
                                isArtistOnlyPage: !1,
                                level: "error",
                                message: "Error calling useAudience hook",
                                feature: eH.h6.AUDIENCE,
                                indexedTags: {
                                    releaseId: t
                                }
                            })
                        },
                        staleTime: 0
                    }), h = (0, r.useMemo)(() => d.slice(0, 4).map(e => (0, l.jsx)(AudienceSeat, {
                        seatFrag: e,
                        tier: o,
                        sort: s
                    }, `audience-seat-${e.id}`)), [d, s, o]), g = (0, r.useMemo)(() => d.slice(4, 10).map(e => (0, l.jsx)(AudienceSeat, {
                        seatFrag: e,
                        tier: o,
                        sort: s
                    }, `audience-seat-${e.id}`)), [d, s, o]), f = (0, r.useMemo)(() => d.slice(10, 17).map(e => (0, l.jsx)(AudienceSeat, {
                        seatFrag: e,
                        tier: o,
                        sort: s
                    }, `audience-seat-${e.id}`)), [d, s, o]), v = (0, r.useMemo)(() => d.slice(17, e$).map(e => (0, l.jsx)(AudienceSeat, {
                        seatFrag: e,
                        tier: o,
                        sort: s
                    }, `audience-seat-${e.id}`)), [d, s, o]), j = (0, r.useMemo)(() => {
                        let e = a ? d.slice(i ? e$ : 4) : d.slice(i ? e$ : 4, i ? e$ + 9 : 28);
                        return e.map(e => (0, l.jsx)(AudienceSeat, {
                            seatFrag: e,
                            tier: o,
                            sort: s
                        }, `audience-seat-${e.id}`))
                    }, [d, a, s, i, o]);
                    return {
                        rows: {
                            firstRow: h,
                            secondRow: g,
                            thirdRow: f,
                            fourthRow: v,
                            remainingRows: j
                        },
                        collectors: d,
                        loading: u,
                        hasNextPage: m,
                        fetchMore: x,
                        error: c,
                        isFetchingNextPage: p
                    }
                }({
                    releaseId: t.id,
                    sort: s,
                    paginate: a
                }), m = d && o, p = (0, r.useMemo)(() => m && a ? (0, l.jsx)(eW.w, {
                    className: "md:mt-0"
                }) : null, [m, a]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [c && !n.length ? (0, l.jsx)(LoadingSeats, {}) : (0, l.jsxs)("div", {
                        className: "flex w-full flex-col gap-2 md:gap-4",
                        children: [x.firstRow.length ? (0, l.jsx)("div", {
                            className: "grid w-full grid-cols-[repeat(4,1fr)] gap-2 overflow-hidden md:gap-3",
                            children: x.firstRow
                        }) : null, x.secondRow.length ? (0, l.jsx)("div", {
                            className: "hidden w-full grid-cols-[repeat(6,1fr)] gap-2 overflow-hidden md:grid md:gap-3",
                            children: x.secondRow
                        }) : null, x.thirdRow.length ? (0, l.jsx)("div", {
                            className: "hidden w-full grid-cols-[repeat(7,1fr)] gap-2 overflow-hidden md:grid md:gap-3",
                            children: x.thirdRow
                        }) : null, x.fourthRow.length ? (0, l.jsx)("div", {
                            className: "hidden w-full grid-cols-[repeat(8,1fr)] gap-2 overflow-hidden md:grid md:gap-3",
                            children: x.fourthRow
                        }) : null, x.remainingRows.length ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(X.Mr, {
                                context: {
                                    fetchMore: u
                                },
                                endReached: u,
                                data: x.remainingRows,
                                itemContent: (e, t) => t,
                                overscan: 200,
                                listClassName: "grid w-full grid-cols-[repeat(6,1fr)] md:grid-cols-[repeat(9,1fr)] gap-2 overflow-hidden md:gap-3",
                                components: {
                                    Footer: () => p
                                },
                                useWindowScroll: !0
                            }), a && m && (0, l.jsx)("div", {
                                className: "pt-20"
                            })]
                        }) : null]
                    }), o && !a && (0, l.jsx)("div", {
                        className: "mt-3 flex w-full items-center justify-center",
                        children: (0, l.jsx)(eZ.z, {
                            label: "See All",
                            variant: "tertiary",
                            size: "S",
                            onClick: () => {
                                R.M8.song_tab = eI.t4.AUDIENCE, window.scrollTo({
                                    top: i,
                                    behavior: "instant"
                                })
                            }
                        })
                    })]
                })
            }

            function Audience(e) {
                let {
                    releaseFrag: t,
                    isFullPage: s,
                    tabsTopOffset: a
                } = e, [i, n] = (0, r.useState)("top"), o = (0, P.S3c)(P.KSu, t), {
                    artist: {
                        id: d,
                        userId: c
                    },
                    mintStartTimestamp: u,
                    postCount: m
                } = o, p = u <= Date.now(), {
                    openToast: h
                } = (0, eR.useToast)(), {
                    data: g
                } = (0, eP.z)({
                    release: o
                }), f = g.totalMinted > 0 || m > 0, v = !f, downloadCSV = async () => {
                    try {
                        let {
                            data: {
                                releaseBackersCSVUrl: e
                            }
                        } = await (0, P.ChE)(P.xM, {
                            variables: {
                                releaseId: o.id
                            }
                        });
                        if (e) window.open(e);
                        else throw Error("Could not find release backers CSV file")
                    } catch (e) {
                        h({
                            text: "Download CSV release backers failed.",
                            variant: "error"
                        })
                    }
                };
                return (0, l.jsxs)("div", {
                    className: (0, x.m)("flex h-full w-full flex-col gap-6"),
                    children: [(0, l.jsxs)("div", {
                        className: "w-full",
                        children: [!s && (0, l.jsx)("div", {
                            className: "mb-2 flex w-full items-center justify-between",
                            children: (0, l.jsx)(eF.NZ, {
                                title: "Audience"
                            })
                        }), (0, l.jsx)(HighlightedAudience, {
                            hasAudience: f,
                            releaseFrag: o
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full items-center justify-between",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, l.jsx)(ew.A, {
                                    text: "Top",
                                    isSelected: "top" === i,
                                    onClick: () => n("top"),
                                    disabled: v
                                }), (0, l.jsx)(ew.A, {
                                    text: "Earliest",
                                    isSelected: "earliest" === i,
                                    onClick: () => n("earliest"),
                                    disabled: v
                                })]
                            }), (0, l.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, l.jsx)(y.E6, {
                                    align: "end",
                                    css: {
                                        width: "auto"
                                    },
                                    trigger: (0, l.jsx)(eA.h, {
                                        icon: (0, l.jsx)(b.G, {
                                            icon: ek.S6
                                        })
                                    }),
                                    disabled: v,
                                    children: (0, l.jsx)(ExportCSVMenuItem, {
                                        onClick: downloadCSV,
                                        disabled: v
                                    })
                                })
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "relative flex flex-col overflow-visible",
                        children: f ? (0, l.jsx)(AudienceSeats, {
                            releaseFrag: o,
                            sort: i,
                            paginate: s,
                            tabsTopOffset: a
                        }) : (0, l.jsx)(EmptyAudience, {
                            artistId: d,
                            hasSaleStarted: p,
                            userId: c
                        })
                    })]
                })
            }(0, eG.c)({
                trigger: P.z_b,
                refetch: [P.z0H, P.pVX],
                throttled: "3 seconds"
            }), (0, eG.c)({
                trigger: [P.G3U, P.HLY, P.SGu, P.pP9],
                refetch: [P.z0H]
            });
            var e1 = s(76348),
                e2 = s(2504),
                e5 = s(73534),
                e3 = s(64328),
                e4 = s(44497),
                e7 = s(50509),
                e6 = s(95169),
                e8 = s(47544),
                e9 = s(92434),
                te = s(58061),
                tt = s(85787),
                ts = s(50868);
            let tl = (0, ts.zo)("p", "font-numerals text-numerals-s text-white h-fit", {
                    variants: {
                        small: {
                            true: "text-numerals-2xs",
                            false: ""
                        },
                        variant: {
                            feedReleaseDropped: "text-numerals-2xs",
                            release: "text-white md:!text-numerals-2xs !text-numerals-3xs",
                            landingPage: "text-white"
                        }
                    }
                }),
                tr = (0, ts.zo)("span", "font-base text-base-xs uppercase font-semibold text-white", {
                    variants: {
                        small: {
                            true: "hidden",
                            false: ""
                        }
                    }
                }),
                ta = (0, ts.zo)("div", "flex justify-center font-numerals text-numerals-s", {
                    variants: {
                        fuschia: {
                            true: "bg-fuchsia bg-clip-text fill-transparent text-transparent",
                            false: ""
                        },
                        variant: {
                            feedReleaseDropped: "text-numerals-2xs text-white",
                            release: "text-white !text-[17px] !leading-[17px] md:!text-numerals-2xs",
                            landingPage: "text-white"
                        }
                    }
                }),
                ti = (0, ts.zo)("div", "grid grid-cols-7 my-0 mx-auto max-w-[264px] md:p-0 md:backdrop-filter-none md:rounded-none md:shadow-transparent md:max-w-[337px]", {
                    variants: {
                        fuschia: {
                            true: "text-fuchsia500",
                            false: ""
                        },
                        small: {
                            true: "pr-0 w-full",
                            false: ""
                        },
                        variant: {
                            feedReleaseDropped: " text-white",
                            release: "text-white md:mb-[16px] mb:mt-1",
                            landingPage: "mt-6 mb-0"
                        }
                    }
                }),
                HeroCountdownNumber = e => {
                    let {
                        variant: t,
                        value: s,
                        label: r,
                        isLast: a,
                        fuschia: i,
                        small: n
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: (0, x.m)("flex flex-col items-center gap-y-1.5 rounded-xl", i && "rounded-none bg-fuchsia bg-clip-text fill-transparent text-transparent"),
                            children: [(0, l.jsx)(tl, {
                                variant: t,
                                small: n,
                                suppressHydrationWarning: !0,
                                children: String(s).padStart(2, "0")
                            }), (0, l.jsx)(tr, {
                                small: n,
                                children: r
                            })]
                        }), !a && (0, l.jsx)(ta, {
                            variant: t,
                            fuschia: !!i,
                            children: ":"
                        })]
                    })
                },
                ListeningPartyCountdown = e => {
                    let {
                        seconds: t,
                        minutes: s,
                        hours: r,
                        days: a,
                        fuschia: i,
                        variant: n = "release",
                        small: o
                    } = e;
                    return (0, l.jsxs)(ti, {
                        variant: n,
                        fuschia: i,
                        small: o,
                        children: [(0, l.jsx)(HeroCountdownNumber, {
                            variant: n,
                            fuschia: i,
                            value: a,
                            label: "days",
                            small: o
                        }), (0, l.jsx)(HeroCountdownNumber, {
                            variant: n,
                            fuschia: i,
                            value: r,
                            label: "hrs",
                            small: o
                        }), (0, l.jsx)(HeroCountdownNumber, {
                            variant: n,
                            fuschia: i,
                            value: s,
                            label: "min",
                            small: o
                        }), (0, l.jsx)(HeroCountdownNumber, {
                            variant: n,
                            fuschia: i,
                            value: t,
                            label: "sec",
                            isLast: !0,
                            small: o
                        })]
                    })
                },
                Countdown = e => {
                    var t;
                    let {
                        mintStartTimestamp: s,
                        listeningParty: r,
                        currentListeningParty: a,
                        releaseCard: i = !1,
                        className: n,
                        onCountdownExpire: o,
                        small: d = !1
                    } = e, {
                        seconds: c,
                        minutes: u,
                        hours: m,
                        days: p
                    } = (0, $.J7)({
                        expiryTimestamp: null !== (t = null == a ? void 0 : a.listeningParty) && void 0 !== t ? t : null != r ? 1 : s,
                        onExpire: o ? () => setTimeout(o, 1e3) : void 0
                    });
                    return (0, l.jsxs)("div", {
                        className: (0, x.m)("flex flex-col items-center gap-4 text-white lt:items-start", n),
                        children: [(0, l.jsx)("p", {
                            className: "font-kicker text-kicker-s uppercase opacity-100",
                            children: i || (0, l.jsx)(l.Fragment, {
                                children: null != r ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: "hidden dt:block",
                                        children: "\uD83C\uDFA7 Listening Party Begins In..."
                                    }), (0, l.jsx)("span", {
                                        className: "block dt:hidden",
                                        children: "Listening Party"
                                    })]
                                }) : (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("span", {
                                        className: "hidden dt:block",
                                        children: "Release Party Begins..."
                                    }), (0, l.jsx)("span", {
                                        className: "block dt:hidden",
                                        children: "Release Party"
                                    })]
                                })
                            })
                        }), (0, l.jsx)(ListeningPartyCountdown, {
                            seconds: c,
                            minutes: u,
                            hours: m,
                            days: p,
                            variant: i ? "feedReleaseDropped" : "release",
                            small: d
                        })]
                    })
                };
            var tn = s(97613);

            function AnimatedCountdown(e) {
                let {
                    mintStartTimestamp: t,
                    currentListeningParty: s,
                    listeningParty: r,
                    hideCountdown: a,
                    small: i,
                    artistId: n,
                    userId: o,
                    releaseId: d,
                    spotifyPresaveCampaign: c
                } = e, {
                    authUser: u
                } = (0, k.aC)();
                return (0, l.jsx)(tt.M, {
                    children: !a && (0, l.jsxs)(to, {
                        className: "flex flex-col items-center md:z-above1 md:mt-7 md:items-start",
                        ...td,
                        small: i,
                        children: [(0, l.jsx)(Countdown, {
                            className: "gap-3",
                            mintStartTimestamp: t,
                            small: i,
                            currentListeningParty: s,
                            listeningParty: r
                        }), !!o && !!n && (0, l.jsx)(l.Fragment, {
                            children: null != d && null != c && c ? (0, l.jsx)("div", {
                                className: "mt-8 md:mt-0",
                                children: (0, l.jsx)(tn.B, {
                                    releaseId: d,
                                    variant: "hero"
                                })
                            }) : (null == u ? void 0 : u.id) !== o && (0, l.jsx)("div", {
                                className: "mt-8 md:mt-0",
                                children: (0, l.jsx)(e_.I, {
                                    type: "default",
                                    userId: o,
                                    artistId: n
                                })
                            })
                        })]
                    })
                })
            }
            let to = (0, eu.zo)(e5.E.div, {
                    "@tablet": {
                        "> *:nth-child(1)": {
                            alignItems: "flex-start"
                        }
                    },
                    variants: {
                        small: {
                            true: {
                                gap: 24
                            }
                        }
                    }
                }),
                td = {
                    initial: {
                        opacity: 1,
                        transform: "translateY(0%)"
                    },
                    exit: {
                        opacity: 0,
                        transform: "translateY(110%)"
                    },
                    transition: {
                        delay: .1,
                        duration: .5
                    }
                };
            var tc = s(32716);
            let tu = {
                    initial: {
                        y: 0,
                        x: 8,
                        z: 0
                    },
                    default: {
                        y: [0, 0, 0],
                        x: [-72, -188, 8],
                        z: [-48, 0, 0]
                    },
                    toggled: {
                        y: [0, 0, 0],
                        x: [8, 124, -72],
                        z: [0, 0, -48]
                    },
                    initialEgg: {
                        y: 0,
                        x: -72,
                        z: -164
                    },
                    defaultEgg: {
                        y: [0, 0, 0],
                        x: [8, 124, -72],
                        z: [0, 0, -156]
                    },
                    toggledEgg: {
                        y: [0, 0, 0],
                        x: [-72, -188, 8],
                        z: [-156, 0, 0]
                    }
                },
                tx = {
                    initial: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    default: {
                        x: [0, 0, 0],
                        y: [20, -164, 0],
                        z: [-64, 0, 0]
                    },
                    toggled: {
                        x: [0, 0, 0],
                        y: [10, 30, 30],
                        z: [0, 0, -270]
                    },
                    initialEgg: {
                        x: 0,
                        y: 30,
                        z: -270
                    },
                    defaultEgg: {
                        x: [0, 0, 0],
                        y: [-20, 30, 30],
                        z: [0, 0, -270]
                    },
                    toggledEgg: {
                        x: [0, 0, 0],
                        y: [30, -164, 0],
                        z: [-270, 0, 0]
                    }
                };

            function SongHero(e) {
                var t;
                let {
                    releaseFrag: s
                } = e, {
                    authUser: a
                } = (0, k.aC)(), i = (0, P.S3c)(P.b71, s), {
                    animatedGoldenEggImageOptimized: n,
                    artist: o,
                    coverImage: d,
                    goldenEggImage: c,
                    id: u,
                    listeningParty: m,
                    mintStartTimestamp: p,
                    spotifyPresaveCampaign: h,
                    title: g,
                    track: f,
                    type: v
                } = i, j = null !== (t = d.dominantColor) && void 0 !== t ? t : "#1F1F1F", b = "ALBUM" === v, {
                    onPlayClick: w,
                    isLoading: C,
                    isPlaying: y,
                    ref: S,
                    currentListeningParty: L
                } = (0, O.a)({
                    isAlbum: b,
                    trackId: f.id,
                    playlist: {
                        associationId: o.id,
                        type: P.eXh.Artist
                    },
                    listeningParty: m,
                    releaseId: u,
                    onListeningPartyStart() {
                        (0, Z.Db)({
                            trackId: f.id
                        }).catch(e1.Tb), (0, W.L9)({
                            event: "Joined Listening Party",
                            properties: {
                                associationType: "Release",
                                associationId: u,
                                sourceComponent: "Song Page"
                            }
                        })
                    }
                }), N = !b && !L, I = (0, e2.Z)(p) || null != m && !L, M = (0, V.R2)({
                    goldenEggImage: null == c ? void 0 : c.url,
                    animatedGoldenEggImage: null == n ? void 0 : n.url
                }), E = !!M && I, T = (0, e3.w)({
                    trackId: f.id,
                    shouldFetch: !!f.id
                }), {
                    trackAudioUrl: A
                } = T;
                return (0, r.useEffect)(() => {
                    A && (0, te.Qb)({
                        url: A
                    })
                }, [A]), (0, l.jsxs)("div", {
                    className: "relative h-[338px] w-full px-4 pt-6 md:m-[0_auto] md:h-[308px] md:rounded-xl md:px-6 md:pb-8 md:pt-6 lt:max-w-[calc(1180px-48px)]",
                    style: {
                        backgroundColor: j
                    },
                    children: [(0, l.jsx)("div", {
                        className: "absolute inset-0 h-full w-full overflow-hidden bg-base800 opacity-50 md:rounded-xl"
                    }), (0, l.jsxs)("div", {
                        className: (0, x.m)("relative flex h-full w-full flex-col-reverse items-center justify-center", "md:items-[unset] md:h-auto md:flex-row md:items-center md:justify-between md:gap-6"),
                        children: [(0, l.jsx)("div", {
                            className: "min-w-0 max-w-full flex-1",
                            children: (0, l.jsxs)("div", {
                                className: "flex h-full w-full items-center justify-center pb-4 md:block md:h-auto md:pb-0 lg:w-4/5",
                                children: [(0, l.jsxs)("div", {
                                    className: "relative z-above2 hidden rounded-md md:block",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex h-[82px] w-full items-center gap-4",
                                        children: [(0, l.jsx)(e8.J, {
                                            playing: y,
                                            loading: C,
                                            onClick: w,
                                            color: "white",
                                            size: "xl",
                                            disabled: !N,
                                            ref: S,
                                            currentListeningParty: L,
                                            rounded: !0
                                        }), (0, l.jsxs)("div", {
                                            className: "flex h-full w-full min-w-0 flex-col justify-center gap-3",
                                            children: [(0, l.jsx)("div", {
                                                className: "max-w-full font-title text-[32px] font-medium leading-[32px] text-white",
                                                children: (0, l.jsx)(e6.R, {
                                                    children: (0, l.jsx)("h3", {
                                                        children: g
                                                    })
                                                })
                                            }), (0, l.jsx)(SongHeroDetails, {
                                                releaseFrag: i
                                            })]
                                        })]
                                    }), (0, l.jsx)("div", {
                                        className: "hidden md:flex",
                                        children: (0, l.jsx)(AnimatedCountdown, {
                                            mintStartTimestamp: p,
                                            hideCountdown: I,
                                            userId: o.userId,
                                            artistId: o.id,
                                            currentListeningParty: L,
                                            listeningParty: m,
                                            releaseId: u,
                                            spotifyPresaveCampaign: h
                                        })
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: (0, x.m)("flex max-w-full flex-col items-center justify-center gap-1 pb-1 md:hidden md:pb-0", (h || (null == a ? void 0 : a.id) !== o.userId) && "mt-12"),
                                    children: [(0, l.jsx)("div", {
                                        className: "max-w-full font-title text-title-l font-medium text-white",
                                        children: (0, l.jsx)(e6.R, {
                                            children: (0, l.jsx)("h3", {
                                                children: g
                                            })
                                        })
                                    }), (0, l.jsx)(SongHeroDetails, {
                                        releaseFrag: i
                                    })]
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative z-above1 flex h-[164px] w-[164px] flex-shrink-0 justify-end md:h-[252px] md:w-[300px] lt:w-[252px]",
                            children: [(0, l.jsx)(SongHeroCoverImages, {
                                showGoldenEggToggle: E,
                                hideCountdown: I,
                                release: i
                            }), (0, l.jsx)("div", {
                                className: "absolute top-[75px] w-full md:hidden",
                                children: (0, l.jsx)(AnimatedCountdown, {
                                    small: !0,
                                    mintStartTimestamp: p,
                                    hideCountdown: I,
                                    userId: o.userId,
                                    artistId: o.id,
                                    listeningParty: m,
                                    releaseId: u,
                                    spotifyPresaveCampaign: h,
                                    currentListeningParty: L
                                })
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: "absolute bottom-0 -ml-4 w-full max-w-full md:-ml-3 md:max-w-[calc(100%-24px)]",
                        children: (0, l.jsx)(e4.u, {
                            type: "withComments",
                            releaseFrag: i,
                            isTrackDisabled: !N,
                            showBottomHalf: !1,
                            enableTouchHandler: !0
                        })
                    })]
                })
            }

            function SongHeroDetails(e) {
                let {
                    releaseFrag: t
                } = e, s = (0, P.S3c)(P.H9p, t), {
                    data: {
                        totalMinted: r
                    }
                } = (0, eP.z)({
                    release: s
                }), {
                    artist: a,
                    track: i,
                    id: n
                } = s, {
                    openModal: o
                } = (0, A.useModal)();
                return (0, l.jsxs)("div", {
                    className: "group z-above1 flex items-center whitespace-nowrap font-base text-base-s text-white duration-300 [&_.username:hover]:brightness-130 [&_.username]:text-base-s [&_.username]:text-white [&_.username]:transition-[filter] md:[&_.username]:max-w-none",
                    children: [(0, l.jsx)(e7.gM, {
                        avatarSize: 20,
                        borderRadius: 20,
                        userFrag: a.user,
                        gap: 6,
                        hideAvatarOnMobile: !0,
                        hideVerified: !0,
                        imagePriority: !0
                    }), r ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("span", {
                            className: "mx-2",
                            children: "•"
                        }), (0, l.jsxs)("button", {
                            className: "font-base text-base-s text-white transition-[filter] duration-300 hover:brightness-130",
                            onClick: () => {
                                o("RELEASE_MINTS", {
                                    body: (0, l.jsx)(e9.Y, {
                                        releaseId: n
                                    })
                                })
                            },
                            children: [(0, eY.ZP)(r), " Mint", 1 === r ? "" : "s"]
                        })]
                    }) : null, (0, l.jsx)("span", {
                        className: "mx-2",
                        children: "•"
                    }), (0, V.a7)({
                        playTimeInSeconds: i.duration
                    })]
                })
            }

            function SongHeroCoverImages(e) {
                var t, s, a;
                let {
                    showGoldenEggToggle: i,
                    hideCountdown: n,
                    release: o
                } = e, {
                    tablet: d
                } = (0, ei.useMediaQuery)(), [c, u] = (0, r.useState)(!1), [m, p] = (0, r.useState)(!1), [h, g] = (0, r.useState)(!0), f = d ? 252 : 164, v = (0, P.S3c)(P.JsV, o), j = {
                    duration: .6
                }, b = { ...j,
                    type: "spring"
                }, w = d ? tu : tx, C = (0, r.useMemo)(() => c ? f - (d ? 58 : 32) : f, [f, d, c]), y = (0, r.useMemo)(() => c ? f : f - (d ? 58 : 32), [f, d, c]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [i && (0, l.jsxs)(th, {
                        className: "perspective-12 preserve3d relative z-above2 mb-6 h-[164px] w-[164px] md:h-[252px] md:w-[252px]",
                        onClick: () => {
                            u(!c), g(!1)
                        },
                        onMouseOver: () => p(!0),
                        onMouseLeave: () => p(!1),
                        isToggled: c,
                        children: [(0, l.jsx)(e5.E.div, {
                            className: "relative",
                            variants: w,
                            animate: h ? "initial" : c ? "toggled" : "default",
                            transition: j,
                            onAnimationStart: () => {
                                document.body.classList.add("overflow-x-hidden")
                            },
                            onAnimationComplete: () => {
                                document.body.classList.remove("overflow-x-hidden")
                            },
                            children: (0, l.jsx)(e5.E.div, {
                                className: "song-card",
                                animate: {
                                    x: d ? m ? 0 : c ? 16 : -16 : 0
                                },
                                transition: b,
                                children: (0, l.jsx)(tc.S, {
                                    songTitle: v.title,
                                    isAnimated: !!v.animatedCoverImage,
                                    coverImage: (null === (t = v.animatedCoverImage) || void 0 === t ? void 0 : t.url) || v.coverImage.url,
                                    size: C,
                                    hasCountdown: !n,
                                    showGoldenEggToggle: !0
                                })
                            })
                        }), (0, l.jsx)(e5.E.div, {
                            className: "relative",
                            variants: w,
                            animate: h ? "initialEgg" : c ? "toggledEgg" : "defaultEgg",
                            transition: j,
                            children: (0, l.jsx)(e5.E.div, {
                                className: "golden-egg-card",
                                animate: {
                                    x: d ? m ? 0 : c ? -16 : 16 : 0
                                },
                                transition: b,
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-[164px] w-[164px] items-center justify-center rounded-md md:h-[252px] md:w-[252px]",
                                    children: [(0, l.jsx)("div", {
                                        className: (0, x.m)("absolute left-2 top-3 z-above1 scale-[.8]", c ? "md:left-4 md:top-4" : "md:left-1 md:top-6 md:scale-[.6]"),
                                        children: (0, l.jsx)(GoldenEggCoverBadge, {
                                            releaseFrag: v
                                        })
                                    }), (0, l.jsx)(tc.S, {
                                        songTitle: v.title,
                                        isAnimated: !!v.animatedGoldenEggImageOptimized,
                                        coverImage: (0, V.R2)({
                                            goldenEggImage: v.goldenEggImage.url,
                                            animatedGoldenEggImage: null === (s = v.animatedGoldenEggImageOptimized) || void 0 === s ? void 0 : s.url
                                        }),
                                        size: y,
                                        hasCountdown: !n,
                                        showGoldenEggToggle: !0
                                    })]
                                })
                            })
                        })]
                    }), !i && (0, l.jsx)(tc.S, {
                        songTitle: v.title,
                        isAnimated: !!v.animatedCoverImage,
                        coverImage: (null === (a = v.animatedCoverImage) || void 0 === a ? void 0 : a.url) || v.coverImage.url,
                        size: f,
                        hasCountdown: !n,
                        showGoldenEggToggle: !1
                    })]
                })
            }

            function GoldenEggCoverBadge(e) {
                let {
                    releaseFrag: t
                } = e, s = (0, P.S3c)(P.Jqi, t), r = s.goldenEggNft;
                return (0, l.jsxs)("div", {
                    className: "flex items-center gap-2 rounded-[75.0302px] bg-[rgba(255,255,255,0.7)] p-[4px_20px_4px_6px] backdrop-blur-[9.78654px] transition-all duration-700 ease-in-out",
                    children: [(0, l.jsx)(eD.G, {
                        alt: "golden egg image",
                        src: "/images/golden_egg_icon.png",
                        width: 42,
                        height: 42
                    }), (0, l.jsx)("div", {
                        className: "flex flex-col",
                        children: r ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(q.s, {
                                pathnameUri: (0, J.OU)(r.owner.webappUri),
                                children: (0, l.jsx)("p", {
                                    className: "font-base text-base-s font-semibold text-black",
                                    children: r.owner.username
                                })
                            }), (0, l.jsxs)("p", {
                                className: "font-base text-base-xs font-medium text-black opacity-50",
                                children: ["Edition #", r.serialNumber]
                            })]
                        }) : (0, l.jsx)("p", {
                            className: "font-base text-base-m font-medium text-black opacity-75",
                            children: "Not Revealed"
                        })
                    })]
                })
            }
            let tm = (0, eu.F4)({
                    "40%": {
                        opacity: 1
                    },
                    "60%": {
                        opacity: .5
                    },
                    "100%": {
                        opacity: .5
                    }
                }),
                tp = (0, eu.F4)({
                    "0%": {
                        opacity: .5
                    },
                    "50%": {
                        opacity: 1
                    }
                }),
                th = (0, eu.zo)("div", {
                    ".song-card, .golden-egg-card": {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 164,
                        height: 164,
                        borderRadius: 8,
                        userSelect: "none",
                        "@tablet": {
                            width: 252,
                            height: 252
                        }
                    },
                    variants: {
                        isToggled: {
                            true: {
                                ".song-card": {
                                    animation: `1s ease 0s normal forwards 1 ${tm}`
                                },
                                ".golden-egg-card": {
                                    animation: `1s ease 0s normal forwards 1 ${tp}`
                                }
                            },
                            false: {
                                ".song-card": {
                                    animation: `1s ease 0s normal forwards 1 ${tp}`
                                },
                                ".golden-egg-card": {
                                    animation: `1s ease 0s normal forwards 1 ${tm}`
                                }
                            }
                        }
                    }
                });
            var tg = s(10228),
                tf = s(96220),
                tv = s(25347),
                tj = s(40612),
                tb = s(54668),
                tw = s(95095),
                tC = s(6310),
                ty = s(56949),
                tS = s(6289);
            let userItemContent = (e, t) => {
                    let {
                        userA: s
                    } = (0, P.S3c)(P.hXV, t);
                    return (0, l.jsx)("div", {
                        className: "px-6",
                        children: (0, l.jsx)(tw.p, {
                            user: s,
                            sourceLocation: "Followers Modal"
                        })
                    }, `follower-${s.id}-${e}`)
                },
                FollowersModal = e => {
                    let {
                        followersData: t
                    } = e, {
                        publicAddress: s,
                        followerCount: a,
                        username: i
                    } = (0, P.S3c)(P.JWT, t), {
                        followerUsersData: n,
                        followersLoading: o,
                        followersLoadMore: d
                    } = (0, tS.a4)({
                        publicAddress: s
                    }), {
                        closeCancelModal: c
                    } = (0, A.useModal)(), u = !n || 0 === n.length, [x, m] = r.useState(), p = r.useCallback(() => o ? (0, l.jsxs)("div", {
                        className: "h-6 px-6",
                        children: [(0, l.jsx)(tw.T, {}), (0, l.jsx)(tw.T, {}), (0, l.jsx)(tw.T, {})]
                    }) : (0, l.jsx)("div", {
                        className: "h-6"
                    }), [o]), h = r.useMemo(() => n.slice(0, ty.jb), [n]), g = r.useMemo(() => n.slice(ty.jb), [n]), f = (0, l.jsxs)(ty.A_, {
                        ref: e => {
                            m(e || void 0)
                        },
                        empty: u,
                        children: [u && !o && (0, l.jsx)(tC.K, {
                            header: ty.G,
                            subText: (0, ty.fr)(i)
                        }), !u && (0, l.jsxs)(l.Fragment, {
                            children: [h.length > 0 && h.map((e, t) => userItemContent(t, e)), g.length > 0 && (0, l.jsx)(X.OO, {
                                data: g,
                                itemContent: userItemContent,
                                customScrollParent: x,
                                endReached: d,
                                components: {
                                    Footer: p
                                },
                                atTopStateChange: () => null
                            })]
                        })]
                    });
                    return (0, l.jsx)(tb.Z, {
                        bodyClassName: "p-0",
                        containerClassName: "pb-0",
                        subHeader: (0, l.jsxs)("div", {
                            className: "flex w-full items-center justify-between pb-4",
                            children: [(0, l.jsx)("h3", {
                                className: "font-title text-title-l font-medium",
                                children: a > 0 ? `${(0,eY.ZP)(a)} ${(0,V.Lo)({count:a,word:"follower"})}` : "followers"
                            }), (0, l.jsx)(eA.h, {
                                icon: (0, l.jsx)(b.G, {
                                    icon: tj.g8,
                                    size: "lg",
                                    className: "text-base500"
                                }),
                                onClick: c
                            })]
                        }),
                        body: f,
                        showHeaderShadow: !0
                    })
                };
            var tL = s(77794);
            let BehindTheMusicSectionV2 = e => {
                var t;
                let {
                    releaseFrag: s
                } = e, {
                    artist: a,
                    behindTheMusic: i
                } = (0, P.S3c)(P.DNV, s), {
                    avatar: n,
                    publicAddress: o,
                    username: d,
                    webappUri: c
                } = (0, P.S3c)(P.hns, a.user), {
                    openModal: u
                } = (0, A.useModal)(), [m, p] = (0, r.useState)(!1), [h, g] = (0, r.useState)(tL.tK), [f, v] = (0, r.useState)(0), j = (0, r.useRef)(null), b = tL.Ac * tL.hA, w = !!f && f > b, C = a.id, y = a.user.id;
                (0, r.useEffect)(() => {
                    var e;
                    v(null === (e = j.current) || void 0 === e ? void 0 : e.scrollHeight)
                }, [j, null === (t = j.current) || void 0 === t ? void 0 : t.scrollHeight]);
                let S = (0, l.jsx)(q.s, {
                    pathnameUri: (0, J.OU)(c),
                    children: (0, l.jsx)("div", {
                        className: "flex items-center justify-center gap-3",
                        children: (0, l.jsx)("div", {
                            className: "shrink-0 rounded-sm",
                            children: (0, l.jsx)(Q.q, {
                                src: null == n ? void 0 : n.url,
                                size: tL.IX,
                                username: d,
                                walletAddress: o,
                                borderRadius: tL.IX,
                                webappUri: c,
                                scaleOnHover: !0
                            })
                        })
                    })
                });
                return (0, l.jsxs)("div", {
                    className: "relative",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center justify-between gap-7 md:justify-start",
                        children: [(0, l.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [(0, l.jsx)(tv.I, {
                                userHoverCardContent: (0, l.jsx)(tg.U, {
                                    userId: y
                                }),
                                trigger: S
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, l.jsxs)("div", {
                                    className: "relative flex items-center gap-1",
                                    children: [(0, l.jsx)(q.s, {
                                        pathnameUri: (0, J.OU)(c),
                                        children: (0, l.jsx)("h3", {
                                            className: "username max-w-[35vw] overflow-hidden text-ellipsis whitespace-nowrap font-base text-base-l font-semibold text-base800 md:max-w-xs",
                                            children: d
                                        })
                                    }), (0, l.jsx)(eK.O, {
                                        portal: !0,
                                        size: 20,
                                        noTooltip: !0
                                    })]
                                }), (0, l.jsxs)("p", {
                                    className: "cursor-pointer font-base text-base-s font-normal text-base500",
                                    onClick: () => {
                                        u(A.ModalType.FOLLOWERS, {
                                            body: (0, l.jsx)(FollowersModal, {
                                                followersData: a.user
                                            })
                                        })
                                    },
                                    children: [(0, eY.ZP)(a.user.followerCount), " followers"]
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "items-align flex flex-row-reverse gap-2",
                            children: [(0, l.jsx)(tf.e, {
                                artistId: C,
                                userId: y,
                                size: "M",
                                variant: "primary",
                                sourceLocation: "Song Page"
                            }), (0, l.jsx)(e_.I, {
                                type: "icon_button",
                                artistId: C,
                                userId: y
                            })]
                        })]
                    }), (0, l.jsx)(e5.E.div, {
                        ref: j,
                        animate: m ? "expand" : "collapse",
                        variants: {
                            expand: {
                                height: "auto",
                                overflow: "visible",
                                transition: {
                                    duration: .2,
                                    delay: .1
                                }
                            },
                            collapse: {
                                height: w ? b : "auto",
                                overflow: "hidden",
                                transition: {
                                    duration: .3,
                                    ease: "easeOut"
                                }
                            }
                        },
                        transition: {
                            ease: "easeOut"
                        },
                        className: (0, x.m)("mt-3 line-clamp-3 flex h-auto flex-col overflow-hidden text-ellipsis whitespace-pre-wrap font-base text-base-l text-base900 md:mt-10", h),
                        onAnimationComplete: () => {
                            m ? g("") : g(tL.tK)
                        },
                        children: (0, l.jsx)("p", {
                            children: i.trim()
                        })
                    }), !!w && (0, l.jsx)("div", {
                        className: "mt-2.5 flex",
                        children: (0, l.jsx)(eZ.z, {
                            label: m ? "Show less" : "Read more",
                            variant: "text",
                            onClick: () => {
                                p(e => (e || g(""), !e))
                            },
                            size: "S",
                            className: "-mx-1 h-auto px-1 py-0 font-base text-base-m font-medium text-base800"
                        })
                    })]
                })
            };
            var tN = s(87589),
                tI = s(54614),
                tM = s(61450),
                tE = s(31981),
                tk = s(76501),
                tT = s(53529),
                tA = s(87593),
                tR = s(63834),
                tP = s(66538),
                tF = s(13834),
                t_ = s(58870),
                tO = s(47226),
                tz = s(99507),
                tD = s(73335);
            let tU = eH.Lj.MINTING;
            (0, eG.c)({
                trigger: [P._gV, P.Fkv],
                refetch: [P.pVX, P.M81, P.lMr]
            });
            var t$ = s(83666),
                tB = s(58038),
                tH = s(35143),
                tW = s(88258);

            function PinPostToWaveformModal(e) {
                let {
                    releaseId: t,
                    postId: s
                } = e, {
                    authUser: a
                } = (0, k.aC)(), {
                    tablet: i
                } = ei.MediaQuery.useContainer(), {
                    closeCancelModal: n
                } = A.ModalContext.useContainer(), {
                    openToast: o
                } = eR.ToastContext.useContainer(), {
                    selectedNft: d,
                    isLoading: c
                } = (0, t$.d)({
                    releaseId: t
                }), {
                    claimedSongSlots: u,
                    canOverwriteSlot: x,
                    songSlot: m,
                    setSongSlot: p,
                    isLoading: h
                } = (0, tB.i)({
                    releaseId: t,
                    selectedNft: d
                }), {
                    pinPost: g,
                    isPinning: f
                } = function(e) {
                    let {
                        postId: t,
                        releaseId: s,
                        songSlot: a
                    } = e, {
                        openModal: i
                    } = A.ModalContext.useContainer(), {
                        openToast: n,
                        closeToast: o
                    } = eR.ToastContext.useContainer(), {
                        isAuthenticating: d
                    } = (0, T.F_)(), c = (0, eV.S)(), u = (0, tD.f)(), {
                        mutateAsync: x,
                        isLoading: m
                    } = (0, P.Dbo)(P._gV, {}), [p, h] = (0, r.useState)(!1), g = (0, K.R)(async () => {
                        if (null == a) {
                            n({
                                text: "Please select a spot on the song to pin your post",
                                variant: "error"
                            });
                            return
                        }
                        try {
                            h(!0);
                            let e = await x({
                                input: {
                                    releaseId: s,
                                    songSlot: a,
                                    postId: t
                                }
                            });
                            "MutationPinReleasePostToWaveformSuccess" === e.data.pinReleasePostToWaveform.__typename ? (i(A.ModalType.SHARE_TO_SOCIAL, {
                                body: (0, l.jsx)(tz.R, {
                                    postId: t
                                })
                            }), u({
                                action: eH.nc.COMMENT_SET,
                                message: `User set post on releaseId ${s}`,
                                pillar: tU,
                                isArtistOnlyPage: !1,
                                data: {
                                    songSlot: a,
                                    releaseId: s,
                                    postId: t
                                }
                            })) : n({
                                text: "Something went wrong. Please try again",
                                variant: "error"
                            }), o()
                        } catch (e) {
                            o(), c({
                                action: eH.XW.SET_COMMENT_ERROR,
                                error: e,
                                errorType: eH.QS.UNKNOWN,
                                message: "Error posting comment",
                                level: "fatal",
                                pillar: tU,
                                toast: "Encountered an error. Please try again.",
                                isArtistOnlyPage: !1,
                                indexedTags: {
                                    releaseId: s,
                                    songSlot: a,
                                    postId: t
                                }
                            })
                        }
                    });
                    return {
                        pinPost: g,
                        isLoading: m || d,
                        isPinning: p
                    }
                }({
                    releaseId: t,
                    songSlot: m,
                    postId: s
                }), v = ("number" == typeof(null == d ? void 0 : d.songSlot) || f) && !x, j = (0, r.useCallback)(e => (null == d ? void 0 : d.songSlot) !== e && (null == u ? void 0 : u.includes(e)) && !x ? (p(null), o({
                    text: tW.I,
                    variant: "error"
                })) : p(e), [x, u, o, null == d ? void 0 : d.songSlot, p]), b = (0, K.R)(async () => {
                    await g()
                }), w = null == d ? void 0 : d.release.track.id;
                if (!u || !w || !a) return null;
                let C = h || c || f,
                    y = (0, l.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: (0, l.jsx)(tH.I, {
                            onSlotClicked: j,
                            claimedSlots: u,
                            totalSlots: tO.ug,
                            selectedSlot: m,
                            trackId: w,
                            canOverwrite: x,
                            selectedNft: d,
                            disableSlotSelection: v,
                            loading: C
                        })
                    });
                return (0, l.jsx)(tb.Z, {
                    title: "Select timestamp to pin post",
                    body: y,
                    closeModal: n,
                    bodyClassName: "overflow-y-auto",
                    bodyWithoutPaddingBottom: !0,
                    showHeaderShadow: !1,
                    size: "medium",
                    isFullScreen: !i,
                    callToAction: (0, l.jsx)(eZ.z, {
                        label: f ? "Posting..." : "Post",
                        variant: "primary",
                        onClick: b,
                        disabled: !d,
                        loading: C,
                        fullWidth: !0
                    })
                })
            }

            function ReleasePostFeedItem(e) {
                var t, s, a, i, n;
                let {
                    userFrag: d,
                    releasePostFrag: c,
                    commentButtonAction: u,
                    shareButtonSource: x,
                    source: m,
                    repostSource: p
                } = e, {
                    authUser: h
                } = (0, k.aC)(), {
                    openModal: g
                } = (0, A.useModal)(), f = (0, P.S3c)(P.pqv, c), v = u === tE.id.ShowModal, j = (0, e0.F)(f.lexicalContent), {
                    creator: w,
                    channel: C,
                    id: S,
                    authorNftsCountVip: L,
                    authorNftsCountGa: N,
                    createdAt: I,
                    webappUri: M,
                    optionalRelease: E,
                    content: R,
                    commentCount: F
                } = f, _ = null !== (i = null == C ? void 0 : C.id) && void 0 !== i ? i : null, {
                    isChannelCurator: O
                } = (0, tR.j)({
                    channelId: _
                }), z = (0, r.useMemo)(() => new Date(I).getTime(), [I]), {
                    unPinPost: D
                } = function(e) {
                    let {
                        postId: t
                    } = e, {
                        openToast: s
                    } = eR.ToastContext.useContainer(), {
                        isAuthenticating: l
                    } = (0, T.F_)(), a = (0, eV.S)(), {
                        mutateAsync: i,
                        isLoading: n
                    } = (0, P.Dbo)(P.Fkv, {}), [o, d] = (0, r.useState)(!1), c = (0, K.R)(async () => {
                        try {
                            d(!0);
                            let e = await i({
                                postId: t
                            });
                            if ("MutationUnpinReleasePostFromWaveformSuccess" !== e.data.unpinReleasePostFromWaveform.__typename) {
                                s({
                                    text: "Something went wrong. Please try again",
                                    variant: "error"
                                });
                                return
                            }
                            s({
                                text: "Your post was unpinned successfully",
                                variant: "success"
                            })
                        } catch (e) {
                            a({
                                action: eH.XW.SET_COMMENT_ERROR,
                                error: e,
                                errorType: eH.QS.UNKNOWN,
                                message: "Error unpinning comment",
                                level: "fatal",
                                pillar: tU,
                                toast: "Encountered an error. Please try again.",
                                isArtistOnlyPage: !1,
                                indexedTags: {
                                    postId: t
                                }
                            })
                        }
                    });
                    return {
                        unPinPost: c,
                        isLoading: n || l,
                        isUnpinning: o
                    }
                }({
                    postId: f.id
                }), U = null == h ? void 0 : null === (t = h.roles) || void 0 === t ? void 0 : t.isAdmin, $ = w.id === (null == h ? void 0 : h.id), B = (null === (s = f.waveformPostAttr) || void 0 === s ? void 0 : s.postId) === S, H = B && (null === (a = f.waveformPostAttr) || void 0 === a ? void 0 : a.user.id) === (null == h ? void 0 : h.id), Z = $ && (!!L || !!N) && !!(null == E ? void 0 : E.id) && !H, G = (0, K.R)(() => {
                    Z && f && g(A.ModalType.COMMENT_MODAL_V2, {
                        body: (0, l.jsx)(PinPostToWaveformModal, {
                            releaseId: E.id,
                            postId: f.id
                        })
                    })
                }), V = (0, K.R)(async () => {
                    H && await D()
                });
                return (0, l.jsx)("div", {
                    className: "cursor-pointer rounded-lg",
                    "data-feed-clickable-div": !0,
                    onClick: e => {
                        e.target instanceof HTMLElement && e.target.hasAttribute("data-feed-clickable-div") && (o().push((0, J.OU)(M)), (0, W.uH)({
                            event: "Post Link Clicked",
                            properties: {
                                associationId: S,
                                associationType: "Post",
                                sourceComponent: "Song Page"
                            }
                        }))
                    },
                    children: (0, l.jsx)(tP.V, {
                        userFrag: d,
                        channelFrag: C,
                        description: "posted",
                        timestamp: z,
                        dropdownContent: (0, l.jsxs)(l.Fragment, {
                            children: [H && (0, l.jsx)(y.Xi, {
                                onClick: V,
                                children: (0, l.jsxs)("div", {
                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-base800",
                                    children: [(0, l.jsx)(b.G, {
                                        icon: tA.RP,
                                        size: "lg"
                                    }), "Unpin"]
                                })
                            }), Z && (0, l.jsx)(y.Xi, {
                                onClick: G,
                                children: (0, l.jsxs)("div", {
                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-base800",
                                    children: [(0, l.jsx)(b.G, {
                                        icon: tA.RP,
                                        size: "lg"
                                    }), "Pin to waveform"]
                                })
                            }), ($ || U || O) && (0, l.jsx)(t_.v, {
                                postId: S,
                                creatorUserId: w.id,
                                channelId: _
                            })]
                        }),
                        authorNftsCountGa: N,
                        authorNftsCountVip: L,
                        children: (0, l.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            "data-feed-clickable-div": !0,
                            "font-base": !0,
                            "text-base-m": !0,
                            children: [(0, l.jsx)(eQ.y, {
                                maxHeightClassName: "max-h-[140px] md:max-h-[160px]",
                                enabled: v,
                                children: j ? (0, l.jsx)(eq.X, {
                                    state: j,
                                    className: "font-base text-base-m"
                                }) : (0, l.jsx)("div", {
                                    className: "text-base700",
                                    "data-feed-clickable-div": !0,
                                    children: R
                                })
                            }), (0, l.jsx)(tE.QD, {
                                postFrag: f,
                                commentButtonAction: u,
                                sourceLocation: x,
                                resourceOwnerTwitterHandle: null !== (n = null == E ? void 0 : E.artist.user.twitterHandle) && void 0 !== n ? n : null,
                                iconSize: 18,
                                hideShareButton: !1,
                                hideRepostButton: !1,
                                source: m,
                                repostSource: p
                            }), (0, l.jsx)(tF.J, {
                                previewCommentFrag: null,
                                postId: S,
                                postWebappUri: M,
                                postCommentCount: F,
                                showCommentInput: !1
                            })]
                        })
                    })
                })
            }

            function isReleasePost(e) {
                return "ReleasePost" === e.__typename
            }

            function PostsPreview(e) {
                var t;
                let {
                    releaseId: s,
                    onSeeAll: r
                } = e, {
                    value: a
                } = (0, u.useGate)(G.ln.SPOTIFY_LINKS), {
                    data: i,
                    isLoading: n
                } = (0, P.aM2)(P.rsI, {
                    variables: {
                        releaseId: s
                    },
                    staleTime: 1 / 0
                }), o = (null == i ? void 0 : null === (t = i.data.release) || void 0 === t ? void 0 : t.topPosts.filter(isReleasePost)) || [];
                return (0, l.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, l.jsx)("div", {
                        className: "flex items-center justify-between",
                        children: (0, l.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: (0, l.jsx)(eF.NZ, {
                                title: "Posts"
                            })
                        })
                    }), a ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "mb-3 mt-6",
                            children: (0, l.jsx)(tk.R, {
                                channel: null,
                                sourceLocation: "Song Page Post Button",
                                selectedResource: {
                                    type: "release",
                                    releaseId: s
                                },
                                setSelectedResource: null,
                                variant: "inline",
                                showChannelSelector: !0,
                                channelSelectorDisabled: !1
                            })
                        }), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, l.jsx)(tM.r, {
                                className: "pb-0 pt-5"
                            })
                        })]
                    }) : (0, l.jsx)("div", {
                        className: "py-4",
                        children: (0, l.jsx)(FeedPostInput, {
                            preselectedResource: {
                                type: "release",
                                releaseId: s
                            }
                        })
                    }), (0, l.jsxs)("div", {
                        className: "-mx-1 flex flex-col gap-6",
                        children: [(0, l.jsx)("div", {
                            className: "ml-1 pt-6",
                            children: o.map(e => (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(ReleasePostFeedItem, {
                                    userFrag: e.creator,
                                    releasePostFrag: e,
                                    commentButtonAction: tE.id.GoPostPage,
                                    shareButtonSource: "Song Page",
                                    source: "Song Page",
                                    repostSource: null
                                }), (0, l.jsx)(tM.r, {})]
                            }, e.id))
                        }), n && (0, l.jsx)(Skeleton, {}), !n && o.length > 0 && (0, l.jsx)(eZ.z, {
                            label: "See all",
                            size: "S",
                            className: "self-center",
                            variant: "tertiary",
                            onClick: r
                        })]
                    })]
                })
            }

            function FeedPostInput(e) {
                var t;
                let {
                    preselectedResource: s
                } = e, {
                    authUser: a,
                    isAuthenticatedWithAPI: i
                } = (0, k.aC)(), {
                    openModal: n
                } = (0, A.useModal)(), {
                    tablet: o
                } = (0, ei.useMediaQuery)(), d = (0, r.useMemo)(() => i ? "What do you love about this song?" : "Sign in to post...", [i]), c = (0, K.R)(() => {
                    if (!i) {
                        (0, T.SR)();
                        return
                    }(0, W.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: "Feed Post Input"
                        }
                    }), n(A.ModalType.FEED_POST, {
                        body: (0, l.jsx)(N.t, {
                            sourceLocation: "Feed Post Input",
                            preselectedResource: s,
                            channelId: null
                        }, "post-input")
                    })
                });
                return (0, l.jsxs)("div", {
                    className: (0, x.m)("flex w-full items-center gap-2 md:gap-4"),
                    children: [(0, l.jsx)("div", {
                        className: (0, x.m)("flex-shrink-0 rounded-full", !a && "bg-neutral500", "h-10 w-10 md:h-12 md:w-12"),
                        children: a ? (0, l.jsx)(Q.q, {
                            walletAddress: a.publicAddress,
                            username: a.username,
                            webappUri: a.webappUri,
                            size: o ? 48 : 40,
                            src: null === (t = a.avatar) || void 0 === t ? void 0 : t.url,
                            borderRadius: "50%"
                        }) : (0, l.jsx)("div", {
                            className: "flex items-center justify-center bg-white",
                            children: (0, l.jsx)(b.G, {
                                icon: tI.m0,
                                className: "text-avatar text-neutral500 md:text-avatar-md"
                            })
                        })
                    }), (0, l.jsxs)("button", {
                        className: "relative flex flex-1 items-center rounded-md bg-base100 px-3 py-2 text-base-l text-neutral500 ring-inset ring-base300 hover:bg-neutral50 hover:ring-1",
                        onClick: c,
                        children: [(0, l.jsx)("div", {
                            className: "line-clamp-1 flex-1 text-left",
                            children: d
                        }), (0, l.jsx)(eZ.z, {
                            variant: "primary",
                            className: "bg-base800/30' bottom-0 right-0 flex h-10 items-center justify-center !rounded-[100px]",
                            label: "Post",
                            disabled: !0,
                            onClick: c,
                            size: "S"
                        })]
                    })]
                })
            }

            function Skeleton() {
                return (0, l.jsx)("div", {
                    className: "flex flex-col gap-4 pt-[10px]",
                    children: [void 0, void 0, void 0].map((e, t) => (0, l.jsx)(tT.C, {}, t))
                })
            }(0, eG.c)({
                trigger: [P.G3U, P.HLY],
                refetch: [P.M81]
            });
            var tZ = s(25618),
                tG = s(41690),
                tV = s(224);
            let RewardComponent = e => {
                let {
                    releaseFrag: t
                } = e, s = (0, P.S3c)(P.XQN, t), {
                    rewards: a,
                    canCollectorsDownloadAudio: i,
                    goldenEggNft: n,
                    auctionContractType: o
                } = s, d = "TIERED_EDITION" === o, c = Object.values(G.S8).map(e => {
                    let t = "GOLDEN_EGG" === e;
                    return "AUDIO_DOWNLOAD" === e ? i ? {
                        id: e,
                        slide: (0, l.jsx)(tV._L, {
                            children: (0, l.jsx)(tG.Nx, {
                                data: s
                            })
                        }, e)
                    } : {
                        id: e,
                        slide: null
                    } : {
                        id: e,
                        slide: (0, l.jsx)(tV._L, {
                            children: (0, l.jsx)(tG.Ao, {
                                rewardType: e,
                                goldenEggWinnerFrag: t ? null == n ? void 0 : n.owner : void 0,
                                isTieredRelease: d
                            })
                        }, e)
                    }
                }).filter(e => e.slide), u = (0, r.useMemo)(() => {
                    let e = null == a ? void 0 : a.map((e, t) => ({
                        id: e.id,
                        slide: (0, l.jsx)(tV._L, {
                            children: (0, l.jsx)(tG.Ao, {
                                rewardFrag: e,
                                index: t + 1,
                                isTieredRelease: d
                            })
                        }, e.id)
                    }));
                    return e ? [...c, ...e] : [...c]
                }, [c, d, a]);
                return (0, l.jsxs)(tV.W2, {
                    children: [(0, l.jsx)(eF.NZ, {
                        title: "Rewards"
                    }), (0, l.jsxs)(tV.VR, {
                        children: [Object.values(G.S8).map(e => {
                            if ("AUDIO_DOWNLOAD" === e) return i ? (0, l.jsx)(tG.Nx, {
                                data: s
                            }, e) : null;
                            let t = "GOLDEN_EGG" === e;
                            return (0, l.jsx)(tG.Ao, {
                                rewardType: e,
                                goldenEggWinnerFrag: t ? null == n ? void 0 : n.owner : void 0,
                                isTieredRelease: d
                            }, e)
                        }), null == a ? void 0 : a.map((e, t) => (0, l.jsx)(tG.Ao, {
                            rewardFrag: e,
                            index: t + 1,
                            isTieredRelease: d
                        }, e.id))]
                    }), (0, l.jsx)(E.i, {
                        media: "notTablet",
                        children: (0, l.jsx)(tZ.l, {
                            slides: u
                        })
                    })]
                })
            };
            var tX = s(69349),
                tY = s(64832);
            let ShareAndEarn = () => (0, l.jsxs)("svg", {
                width: "63",
                height: "60",
                viewBox: "0 0 63 60",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, l.jsx)("path", {
                    d: "M30.0004 29.0013L38.9695 19.8124C38.4102 12.0019 39.4889 8.35268 39.9483 6.14895L21.3309 25.126C21.3309 25.126 19.3932 32.497 20.8115 41.586C22.1455 50.1356 25.7855 57.4468 25.7855 57.4468L28.4223 54.7501C27.5505 52.7021 25.5658 47.4673 25.5658 42.3051C25.5658 33.5557 30.0004 29.0013 30.0004 29.0013Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M38.9695 19.8124L30.0004 29.0013L31.4029 30.2817C36.109 25.492 45.8079 15.6259 46.9545 14.4792L45.4854 13.1534L38.9695 19.8124Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M21.3309 25.126L39.9483 6.14895L38.2471 5.27002L19.7212 24.2617L21.3309 25.126Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M20.8115 41.586C19.3932 32.497 21.3309 25.126 21.3309 25.126L19.7212 24.2617C18.9517 26.4946 17.9037 33.7934 19.1837 41.9275C20.2946 48.9867 23.2329 55.6159 24.2362 57.73L25.7855 57.4468C25.7855 57.4468 22.1455 50.1356 20.8115 41.586Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M25.5658 42.3051C25.5658 47.4673 27.5505 52.7021 28.4223 54.7501L28.787 55.6517L30.3279 55.365C29.3365 53.2509 27.2104 48.1984 27.2104 42.3051C27.2104 36.5525 29.9576 32.0504 31.4029 30.2817L30.0004 29.0013C30.0004 29.0013 25.5658 33.5557 25.5658 42.3051Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M46.9545 14.4792C45.8079 15.6259 36.109 25.492 31.4029 30.2817C29.9576 32.0504 27.2104 36.5525 27.2104 42.3051C27.2104 48.1984 29.3365 53.2509 30.3279 55.365L32.9079 52.7492C32.7287 52.7492 30.6145 46.765 31.4029 42.68C32.2604 38.2367 34.1262 36.672 35.0937 35.6209L42.762 27.7375C42.762 21.1442 45.0554 16.5934 46.9545 14.4792Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M52.1145 22.2192L51.0395 20.6425L38.3904 33.5784L39.3937 35.155L47.0869 27.3318C47.1177 27.2988 47.1492 27.2668 47.1813 27.2359L52.1145 22.2192Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M47.8504 22.5059C46.9187 23.4375 42.762 27.7375 42.762 27.7375L35.0937 35.6209C35.7268 35.0475 37.2079 33.9009 38.3904 33.5784L51.0395 20.6425C50.1437 21.0367 48.782 21.5742 47.8504 22.5059Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M39.3937 35.155L38.3904 33.5784C37.2079 33.9009 35.7268 35.0475 35.0937 35.6209C34.1262 36.672 32.2604 38.2367 31.4029 42.68C30.6145 46.765 32.7287 52.7492 32.9079 52.7492L33.3737 53.7525L34.8429 53.4659C33.947 51.5667 32.3943 47.0875 33.1587 43.0742C34.076 38.2582 37.6976 35.7881 39.3937 35.155Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M34.8429 53.4659L37.6737 50.4917C36.9212 48.485 36.5278 47.3338 36.742 44.5792C36.8452 43.2534 37.7246 41.2467 39.107 40.0284C41.6125 37.4535 45.666 33.3275 45.666 33.3275C45.5914 31.8921 45.7771 28.7329 47.0869 27.3318L39.3937 35.155C37.6976 35.7881 34.076 38.2582 33.1587 43.0742C32.3943 47.0875 33.947 51.5667 34.8429 53.4659Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M53.9062 28.705C53.0104 28.6214 50.3759 28.7801 48.7104 30.3175C47.3129 31.6075 46.8435 32.1328 45.666 33.3275C45.666 33.3275 41.6125 37.4535 39.107 40.0284C40.6479 38.6704 42.5415 37.9756 44.5895 38.1292L53.9062 28.705Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M37.6737 50.4917L38.032 51.3875L39.537 51.065C38.7845 49.2375 37.7783 46.7292 38.7845 43.97C40.0914 40.3867 43.6459 39.6939 45.1629 39.8492L44.5895 38.1292C42.5415 37.9756 40.6479 38.6704 39.107 40.0284C37.7246 41.2467 36.8452 43.2534 36.742 44.5792C36.5278 47.3338 36.9212 48.485 37.6737 50.4917Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M39.537 51.065L48.8179 41.5692C48.4595 40.9481 47.7214 39.2329 47.6354 37.3409L45.1629 39.8492C43.6459 39.6939 40.0914 40.3867 38.7845 43.97C37.7783 46.7292 38.7845 49.2375 39.537 51.065Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M47.6354 37.3409L54.4437 30.3892L53.9062 28.705L44.5895 38.1292L45.1629 39.8492L47.6354 37.3409Z",
                    fill: "none"
                }), (0, l.jsx)("path", {
                    d: "M30.0004 29.0013L38.9695 19.8124M30.0004 29.0013C30.0004 29.0013 25.5658 33.5557 25.5658 42.3051C25.5658 47.4673 27.5505 52.7021 28.4223 54.7501M30.0004 29.0013L31.4029 30.2817M38.9695 19.8124C38.4102 12.0019 39.4889 8.35268 39.9483 6.14895M38.9695 19.8124L45.4854 13.1534L46.9545 14.4792M39.9483 6.14895L21.3309 25.126M39.9483 6.14895L38.2471 5.27002L19.7212 24.2617M21.3309 25.126C21.3309 25.126 19.3932 32.497 20.8115 41.586C22.1455 50.1356 25.7855 57.4468 25.7855 57.4468M21.3309 25.126L19.7212 24.2617M25.7855 57.4468L28.4223 54.7501M25.7855 57.4468L24.2362 57.73C23.2329 55.6159 20.2946 48.9867 19.1837 41.9275C17.9037 33.7934 18.9517 26.4946 19.7212 24.2617M28.4223 54.7501L28.787 55.6517L30.3279 55.365M31.4029 30.2817C36.109 25.492 45.8079 15.6259 46.9545 14.4792M31.4029 30.2817C29.9576 32.0504 27.2104 36.5525 27.2104 42.3051C27.2104 48.1984 29.3365 53.2509 30.3279 55.365M46.9545 14.4792C45.0554 16.5934 42.762 21.1442 42.762 27.7375M42.762 27.7375C42.762 27.7375 46.9187 23.4375 47.8504 22.5059C48.782 21.5742 50.1437 21.0367 51.0395 20.6425M42.762 27.7375L35.0937 35.6209M51.0395 20.6425L52.1145 22.2192L47.1813 27.2359M51.0395 20.6425L38.3904 33.5784M39.3937 35.155L38.3904 33.5784M39.3937 35.155C37.6976 35.7881 34.076 38.2582 33.1587 43.0742C32.3943 47.0875 33.947 51.5667 34.8429 53.4659M39.3937 35.155L47.0869 27.3318M38.3904 33.5784C37.2079 33.9009 35.7268 35.0475 35.0937 35.6209M30.3279 55.365L32.9079 52.7492M32.9079 52.7492L33.3737 53.7525L34.8429 53.4659M32.9079 52.7492C32.7287 52.7492 30.6145 46.765 31.4029 42.68C32.2604 38.2367 34.1262 36.672 35.0937 35.6209M34.8429 53.4659L37.6737 50.4917M37.6737 50.4917L38.032 51.3875L39.537 51.065M37.6737 50.4917C36.9212 48.485 36.5278 47.3338 36.742 44.5792C36.8452 43.2534 37.7246 41.2467 39.107 40.0284M39.537 51.065L48.8179 41.5692C48.4595 40.9481 47.7214 39.2329 47.6354 37.3409M39.537 51.065C38.7845 49.2375 37.7783 46.7292 38.7845 43.97C40.0914 40.3867 43.6459 39.6939 45.1629 39.8492M47.6354 37.3409L54.4437 30.3892L53.9062 28.705M47.6354 37.3409L45.1629 39.8492M53.9062 28.705C53.0104 28.6214 50.3759 28.7801 48.7104 30.3175C47.3129 31.6075 46.8435 32.1328 45.666 33.3275M53.9062 28.705L44.5895 38.1292M45.666 33.3275C45.666 33.3275 41.6125 37.4535 39.107 40.0284M45.666 33.3275C45.5914 31.8921 45.7771 28.7329 47.0869 27.3318M47.1813 27.2359C47.1492 27.2668 47.1177 27.2988 47.0869 27.3318M47.1813 27.2359L47.0869 27.3318M44.5895 38.1292L45.1629 39.8492M44.5895 38.1292C42.5415 37.9756 40.6479 38.6704 39.107 40.0284",
                    stroke: "white",
                    strokeWidth: "0.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, l.jsx)("path", {
                    d: "M3.26087 37.1104C3.31003 38.7537 4.63449 40.0723 6.278 40.1142L6.52174 40.1204L6.278 40.1266C4.63449 40.1685 3.31003 41.4871 3.26087 43.1304C3.21171 41.4871 1.88725 40.1685 0.243736 40.1266L0 40.1204L0.243736 40.1142C1.88725 40.0723 3.21171 38.7537 3.26087 37.1104Z",
                    fill: "white"
                }), (0, l.jsx)("path", {
                    d: "M57.9435 47.1436C57.9926 48.7869 59.3171 50.1055 60.9606 50.1474L61.2044 50.1536L60.9606 50.1598C59.3171 50.2017 57.9926 51.5203 57.9435 53.1636C57.8943 51.5203 56.5699 50.2017 54.9264 50.1598L54.6826 50.1536L54.9264 50.1474C56.5699 50.1055 57.8943 48.7869 57.9435 47.1436Z",
                    fill: "white"
                }), (0, l.jsx)("path", {
                    d: "M10.5 4C10.598 7.54848 13.4515 10.402 17 10.5C13.4515 10.598 10.598 13.4515 10.5 17C10.402 13.4515 7.54848 10.598 4 10.5C7.54848 10.402 10.402 7.54848 10.5 4Z",
                    fill: "white"
                })]
            });
            var tQ = s(99398),
                tq = s(20209);
            let tK = (0, eu.zo)(eZ.z, {
                    marginTop: 24,
                    maxWidth: "unset",
                    marginX: "auto",
                    width: "100%",
                    "@tablet": {
                        marginTop: 32
                    }
                }),
                ShareAndEarnButton = e => {
                    let {
                        releaseFrag: t,
                        isBanner: s = !1
                    } = e, {
                        openModal: r
                    } = A.ModalContext.useContainer(), a = (0, P.S3c)(P.JRw, t), {
                        isShareReferrable: i
                    } = (0, tQ.$)({
                        release: a
                    });
                    if ((0, z.C)({
                            releaseId: a.id
                        }), !i) return null;
                    let onButtonClick = () => {
                        (0, W.uH)({
                            event: "Share Modal Opened",
                            properties: {
                                associationId: a.id,
                                associationType: "Release",
                                sourceComponent: "Share and Earn Button"
                            }
                        }), r(A.ModalType.SHARE, {
                            body: (0, l.jsx)(M.T, {
                                releaseId: a.id
                            })
                        })
                    };
                    return s ? (0, l.jsxs)(t0, {
                        onClick: onButtonClick,
                        children: [(0, l.jsxs)(t1, {
                            children: [(0, l.jsx)(ShareAndEarn, {}), (0, l.jsxs)(t2, {
                                children: [(0, l.jsx)("h3", {
                                    children: tq.pH
                                }), (0, l.jsx)(tJ, {
                                    children: tq.lO
                                })]
                            })]
                        }), (0, l.jsx)(b.G, {
                            icon: tX._t
                        })]
                    }) : (0, l.jsx)(tK, {
                        leadingIcon: (0, l.jsx)(b.G, {
                            icon: tY.Jy
                        }),
                        variant: "secondary",
                        label: tq.pH,
                        size: "L",
                        onClick: onButtonClick
                    })
                },
                tJ = (0, eu.zo)("p", {
                    whiteSpace: "pre-wrap",
                    fontSize: "small",
                    "@tablet": {
                        fontSize: "medium"
                    }
                }),
                t0 = (0, eu.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    backgroundColor: "$base800",
                    color: "$base400",
                    padding: "16px 24px",
                    borderRadius: 8,
                    cursor: "pointer",
                    marginTop: 24,
                    marginX: "auto",
                    "@tablet": {
                        marginTop: 48
                    },
                    "&:hover, &:focus, &:active": {
                        backgroundColor: "$base900",
                        svg: {
                            color: "$white"
                        }
                    }
                }),
                t1 = (0, eu.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    svg: {
                        flexShrink: 0
                    }
                }),
                t2 = (0, eu.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    h3: {
                        base: "L",
                        color: "$white",
                        fontStyle: "semibold",
                        marginBottom: 4
                    }
                });
            var t5 = s(59287),
                t3 = s(39905),
                t4 = s(76529);
            let getSection = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        s = e.filter(e => !(null == t ? void 0 : t.find(t => t.ownerAddress === e.ownerAddress))),
                        r = e.filter(e => null == t ? void 0 : t.find(t => t.ownerAddress === e.ownerAddress)),
                        a = s.sort((e, t) => t.percent - e.percent),
                        i = [...a, ...r];
                    return i.length ? i.map((e, s) => {
                        var r;
                        let a = e.owner,
                            i = e.avatarUrl,
                            n = null == a ? void 0 : a.username,
                            o = n === e.ownerAddress,
                            d = !!(null == t ? void 0 : t.find(t => t.ownerAddress === e.ownerAddress)),
                            c = !!(null == a ? void 0 : null === (r = a.artist) || void 0 === r ? void 0 : r.id);
                        return (0, l.jsxs)(t4.rl, {
                            children: [(0, l.jsxs)(t4.mw, {
                                children: [(0, l.jsx)(Q.q, {
                                    src: i,
                                    size: t4.IX,
                                    username: n,
                                    walletAddress: e.ownerAddress,
                                    borderRadius: 6,
                                    hasShadow: !0,
                                    webappUri: a.webappUri
                                }), (0, l.jsxs)(t4.l6, {
                                    children: [(0, l.jsx)(q.s, {
                                        pathnameUri: (0, J.OU)(a.webappUri),
                                        children: (0, l.jsx)(t4.VG, {
                                            children: o ? (0, t5.pc)(n, 5, 4) : n
                                        })
                                    }), c && (0, l.jsx)(eK.O, {})]
                                })]
                            }), !d && e.percent && (0, l.jsxs)(t4.gG, {
                                children: [Math.round(100 * e.percent) / 100, "%"]
                            })]
                        }, `${e.ownerAddress}-${e.roles}-${s}`)
                    }) : "—"
                },
                CreditSplitsSection = e => {
                    let {
                        splits: t
                    } = e, s = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("ARTIST")
                    }), r = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("SONGWRITER")
                    }), a = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("PRODUCER")
                    }), i = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("CURATOR")
                    }), n = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("REMIXER")
                    }), o = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("VISUAL_ARTIST")
                    }), d = t.filter(e => {
                        var t;
                        return null === (t = e.roles) || void 0 === t ? void 0 : t.includes("OTHER")
                    });
                    return (0, l.jsxs)(t4.W2, {
                        children: [(0, l.jsx)(eF.NZ, {
                            title: "Credits & Splits"
                        }), (0, l.jsxs)("div", {
                            children: [s && s.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Performed by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(s, [])
                                })]
                            }), r.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Written by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(r, s)
                                })]
                            }), a.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Produced by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(a, [...s, ...r])
                                })]
                            }), i.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Curated by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(i, [...s, ...r, ...a])
                                })]
                            }), n.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Remixed by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(n, [...s, ...r, ...a, ...i])
                                })]
                            }), o.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Artwork by:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(o, [...s, ...r, ...a, ...i, ...n])
                                })]
                            }), d.length > 0 && (0, l.jsxs)(t3.X, {
                                children: [(0, l.jsx)(t4.cO, {
                                    children: "Other:"
                                }), (0, l.jsx)(t4.zp, {
                                    children: getSection(d, [...s, ...r, ...a, ...i, ...n, ...o])
                                })]
                            })]
                        })]
                    })
                },
                OverviewTab = e => {
                    var t, s, a, i, n;
                    let {
                        releaseFrag: o,
                        setActiveTab: d,
                        tabsTopOffset: c
                    } = e, u = (0, r.useMemo)(() => {
                        var e;
                        return null === (e = o.creditSplit) || void 0 === e ? void 0 : e.creditAllocations.map(e => {
                            var t, s;
                            return {
                                ownerAddress: e.owner.publicAddress,
                                avatarUrl: null === (s = e.owner) || void 0 === s ? void 0 : null === (t = s.avatar) || void 0 === t ? void 0 : t.url,
                                ...e,
                                roles: e.roles
                            }
                        })
                    }, [null === (t = o.creditSplit) || void 0 === t ? void 0 : t.creditAllocations]);
                    return (0, l.jsxs)(L.I5, {
                        value: eI.t4.OVERVIEW,
                        className: "mx-auto my-0 w-full max-w-content",
                        children: [(0, l.jsx)("div", {
                            className: "px-4 md:px-6",
                            children: (0, l.jsx)(BehindTheMusicSectionV2, {
                                releaseFrag: o
                            })
                        }), (0, l.jsx)("div", {
                            className: "mt-8 px-4 md:mt-12 md:px-6",
                            children: (0, l.jsx)(PostsPreview, {
                                releaseId: o.id,
                                onSeeAll: () => {
                                    null == d || d(eI.t4.POSTS), R.M8.song_tab = eI.t4.POSTS, window.scrollTo({
                                        top: c,
                                        behavior: "instant"
                                    })
                                }
                            })
                        }), (0, l.jsx)("div", {
                            className: "mt-8 px-4 md:px-6",
                            children: (0, l.jsx)(Audience, {
                                releaseFrag: o,
                                isFullPage: !1,
                                tabsTopOffset: c
                            })
                        }), (0, l.jsx)("div", {
                            className: "px-4 md:px-6",
                            children: (0, l.jsx)(ShareAndEarnButton, {
                                isBanner: !0,
                                releaseFrag: o
                            })
                        }), (0, l.jsx)(RewardComponent, {
                            releaseFrag: o
                        }), (0, l.jsxs)("div", {
                            className: "box-border flex flex-col",
                            children: [!!u && (0, l.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: (0, l.jsx)(CreditSplitsSection, {
                                    splits: u
                                })
                            }), (0, l.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: (0, l.jsx)(tN.W, {
                                    mintStartTime: o.mintStartTime,
                                    contractAddress: o.contractAddress,
                                    splitsContractAddress: null === (s = o.creditSplit) || void 0 === s ? void 0 : s.splitAddress,
                                    chainId: o.chainId,
                                    mints: o.totalMinted,
                                    totalVolume: null === (a = o.saleDetails) || void 0 === a ? void 0 : a.totalVolume,
                                    uniqueCollectors: o.collectorsCount,
                                    royaltyBps: null !== (n = null === (i = o.listing) || void 0 === i ? void 0 : i.royaltyBPS) && void 0 !== n ? n : o.royaltyBps
                                })
                            })]
                        })]
                    })
                };
            var t7 = s(78924),
                t6 = s(56478);

            function useReleasePosts_isReleasePost(e) {
                return "ReleasePost" === e.__typename
            }

            function PostsTab(e) {
                let {
                    tabsHeight: t,
                    releaseId: s
                } = e, {
                    value: a
                } = (0, u.useGate)(G.ln.SPOTIFY_LINKS), {
                    posts: i,
                    loading: n,
                    loadMore: o,
                    hasNextPage: d,
                    isEmpty: c,
                    error: m
                } = function(e) {
                    let {
                        releaseId: t,
                        pageSize: s
                    } = e, {
                        orderedList: l,
                        isLoadingNewPage: a,
                        loadMoreNextPage: i,
                        error: n,
                        hasNextPage: o = !1,
                        refetch: d
                    } = (0, P.NSZ)(P.M81, {
                        getNextPageParam(e) {
                            let {
                                data: t
                            } = e;
                            return t.releasePosts.pageInfo.hasNextPage && {
                                after: t.releasePosts.pageInfo.endCursor
                            }
                        },
                        filterQueryKey: {
                            releaseId: t,
                            pageSize: s
                        },
                        variables(e) {
                            let {
                                pageParam: l
                            } = e, r = (null == l ? void 0 : l.after) || null;
                            return {
                                pagination: {
                                    first: null == r ? s : 5,
                                    after: r
                                },
                                releaseId: t
                            }
                        },
                        list(e) {
                            let {
                                releasePosts: t
                            } = e;
                            return t.edges.map(e => e.node).filter(useReleasePosts_isReleasePost)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        refetchOnReconnect: !1,
                        refetchOnWindowFocus: !1,
                        ...G.gq
                    }), c = (0, r.useMemo)(() => 0 === l.length && !a && !n, [n, a, l.length]);
                    return {
                        posts: l,
                        loading: a,
                        loadMore: i,
                        error: n,
                        hasNextPage: o,
                        refetch: d,
                        isEmpty: c
                    }
                }({
                    releaseId: s,
                    pageSize: 5
                }), p = (0, r.useMemo)(() => d || n ? (0, l.jsx)(ej.$, {
                    className: "py-5 text-neutral400"
                }) : null, [d, n]), h = i.length > 1;
                return (0, l.jsxs)("div", {
                    className: "flex flex-col",
                    children: [a ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(tk.R, {
                            channel: null,
                            sourceLocation: "Song Page Post Button",
                            selectedResource: {
                                type: "release",
                                releaseId: s
                            },
                            setSelectedResource: null,
                            variant: "inline",
                            showChannelSelector: !0,
                            channelSelectorDisabled: !1
                        }), (0, l.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, l.jsx)(tM.r, {
                                className: "pb-0 pt-5"
                            })
                        })]
                    }) : (0, l.jsx)("div", {
                        className: (0, x.m)("pb-4", h && "top sticky z-stickyHeader -mx-1 bg-white"),
                        style: null != t ? {
                            top: t
                        } : void 0,
                        children: (0, l.jsx)(PostsTab_FeedPostInput, {
                            preselectedResource: {
                                type: "release",
                                releaseId: s
                            }
                        })
                    }), (0, l.jsxs)("div", {
                        className: "my-7 flex flex-col gap-5",
                        children: [!!m && (0, l.jsx)(ev.IY, {
                            mainFeed: !0,
                            divider: !1
                        }), c && (0, l.jsx)(PostsTab_EmptyState, {}), (null == i ? void 0 : i.length) > 0 ? (0, l.jsx)(X.OO, {
                            useWindowScroll: !0,
                            data: i,
                            itemContent: (e, t) => (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(ReleasePostFeedItem, {
                                    userFrag: t.creator,
                                    releasePostFrag: t,
                                    commentButtonAction: tE.id.GoPostPage,
                                    shareButtonSource: "Song Page",
                                    source: "Song Page",
                                    repostSource: null
                                }), (0, l.jsx)(tM.r, {})]
                            }),
                            endReached: o,
                            components: {
                                Footer: () => p
                            },
                            style: {
                                willChange: "height"
                            },
                            increaseViewportBy: {
                                bottom: 4e3,
                                top: 500
                            }
                        }) : p]
                    })]
                })
            }

            function PostsTab_EmptyState() {
                return (0, l.jsx)(t7.Vm, {
                    illustration: (0, l.jsx)(t6.S, {}),
                    subHeading: "It's a bit quiet in here",
                    text: "Wait for the blog curators to create some awesome content!",
                    buttonLabel: "Go to Home",
                    href: "/",
                    mainFeed: !0
                })
            }

            function PostsTab_FeedPostInput(e) {
                var t;
                let {
                    preselectedResource: s
                } = e, {
                    authUser: a,
                    isAuthenticatedWithAPI: i
                } = (0, k.aC)(), {
                    openModal: n
                } = (0, A.useModal)(), {
                    tablet: o
                } = (0, ei.useMediaQuery)(), d = (0, r.useMemo)(() => i ? "What do you love about this song?" : "Sign in to post...", [i]), c = (0, K.R)(() => {
                    if (!i) {
                        (0, T.SR)();
                        return
                    }(0, W.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: "Feed Post Input"
                        }
                    }), n(A.ModalType.FEED_POST, {
                        body: (0, l.jsx)(N.t, {
                            sourceLocation: "Feed Post Input",
                            preselectedResource: s,
                            channelId: null
                        }, "post-input")
                    })
                });
                return (0, l.jsxs)("div", {
                    className: (0, x.m)("flex w-full items-center gap-2 md:gap-4"),
                    children: [(0, l.jsx)("div", {
                        className: (0, x.m)("flex-shrink-0 rounded-full", !a && "bg-neutral500", "h-10 w-10 md:h-12 md:w-12"),
                        children: a ? (0, l.jsx)(Q.q, {
                            walletAddress: a.publicAddress,
                            username: a.username,
                            webappUri: a.webappUri,
                            size: o ? 48 : 40,
                            src: null === (t = a.avatar) || void 0 === t ? void 0 : t.url,
                            borderRadius: "50%"
                        }) : (0, l.jsx)("div", {
                            className: "flex items-center justify-center bg-white",
                            children: (0, l.jsx)(b.G, {
                                icon: tI.m0,
                                className: "text-avatar text-neutral500 md:text-avatar-md"
                            })
                        })
                    }), (0, l.jsxs)("button", {
                        className: "relative flex flex-1 items-center rounded-md bg-base100 px-3 py-2 text-base-l text-neutral500 ring-inset ring-base300 hover:bg-neutral50 hover:ring-1",
                        onClick: c,
                        children: [(0, l.jsx)("div", {
                            className: "line-clamp-1 flex-1 text-left",
                            children: d
                        }), (0, l.jsx)(eZ.z, {
                            variant: "primary",
                            className: "bg-base800/30' bottom-0 right-0 flex h-10 items-center justify-center !rounded-[100px]",
                            label: "Post",
                            disabled: !0,
                            onClick: c,
                            size: "S"
                        })]
                    })]
                })
            }

            function TabContent(e) {
                var t, s;
                let {
                    activeTab: r,
                    releaseFrag: a,
                    tabRef: i,
                    setActiveTab: n,
                    tabParentRef: o
                } = e, {
                    id: d
                } = a;
                switch (r) {
                    case "activity":
                        return (0, l.jsx)(eF.m7, {
                            value: eI.t4.ACTIVITY,
                            className: "pt-12",
                            children: (0, l.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: (0, l.jsx)(ReleaseActivityFeed, {
                                    releaseId: d
                                })
                            })
                        });
                    case "audience":
                        return (0, l.jsx)(eF.m7, {
                            value: eI.t4.AUDIENCE,
                            className: "pt-12",
                            children: (0, l.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: (0, l.jsx)(Audience, {
                                    releaseFrag: a,
                                    tabsTopOffset: void 0,
                                    isFullPage: !0
                                })
                            })
                        });
                    case "overview":
                        return (0, l.jsx)("div", {
                            className: "pt-12",
                            children: (0, l.jsx)(OverviewTab, {
                                setActiveTab: n,
                                releaseFrag: a,
                                tabsTopOffset: null == o ? void 0 : null === (t = o.current) || void 0 === t ? void 0 : t.offsetTop
                            })
                        });
                    case "posts":
                        return (0, l.jsx)(eF.m7, {
                            value: eI.t4.POSTS,
                            className: "pt-12",
                            children: (0, l.jsx)("div", {
                                className: "px-4 md:px-6",
                                children: (0, l.jsx)(PostsTab, {
                                    releaseId: d,
                                    tabsHeight: null == i ? void 0 : null === (s = i.current) || void 0 === s ? void 0 : s.clientHeight
                                })
                            })
                        });
                    default:
                        return (0, V.y0)(r), null
                }
            }

            function Actions(e) {
                var t;
                let {
                    release: s
                } = e, {
                    openModal: r
                } = (0, A.useModal)(), {
                    authUser: a
                } = (0, k.aC)();
                (0, z.C)({
                    releaseId: s.id
                });
                let i = (0, F.E)({
                        auctionContractType: s.auctionContractType,
                        draftId: s.draftId,
                        releaseId: s.id,
                        releaseType: s.type,
                        stepId: G.Qp
                    }),
                    {
                        value: n
                    } = (0, u.useGate)(G.ln.SPOTIFY_LINKS),
                    {
                        isReleaseOwner: d
                    } = (0, _.w)({
                        releaseId: s.id
                    }),
                    {
                        id: c,
                        track: x,
                        type: g
                    } = s,
                    b = x.id,
                    w = "ALBUM" !== g,
                    {
                        isLiked: C,
                        onClick: y
                    } = (0, h.b)({
                        id: c,
                        source: "Song Page"
                    }),
                    L = (null == a ? void 0 : null === (t = a.artist) || void 0 === t ? void 0 : t.id) === s.artist.id,
                    {
                        onPlayClick: R,
                        isLoading: D,
                        isPlaying: U,
                        currentListeningParty: $
                    } = (0, O.a)({
                        isAlbum: "ALBUM" === g,
                        trackId: x.id,
                        playlist: {
                            associationId: s.artist.id,
                            type: P.eXh.Artist
                        },
                        listeningParty: s.listeningParty,
                        releaseId: s.id
                    }),
                    B = (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(E.i, {
                            media: "tablet",
                            children: L && s.draftId && "DISABLED" !== i && (0, l.jsx)(S.$, {
                                disabled: !s.auctionContractType || (0, m.Y)({
                                    releaseType: s.type,
                                    auctionContractType: s.auctionContractType
                                }),
                                onClick: async e => {
                                    s.draftId && (e.stopPropagation(), e.preventDefault(), await (0, p._1)({
                                        contractAddress: s.contractAddress,
                                        releaseId: s.id
                                    }), o().push(i.path))
                                }
                            })
                        }), (0, l.jsx)(j.U, {
                            releaseId: c,
                            disabled: !w,
                            source: "Song Page"
                        }), (0, l.jsx)(v.C, {
                            trackId: b,
                            disabled: !b || !w || !!$,
                            emitAnalytics: () => {
                                (0, W.uH)({
                                    event: "Add to Queue Clicked",
                                    properties: {
                                        associationId: c,
                                        associationType: "Release",
                                        sourceComponent: "Song Page"
                                    }
                                })
                            }
                        }), s.canCollectorsDownloadAudio && (0, l.jsx)(DownloadAudioMenuItem, {
                            trackId: b,
                            disabled: !d
                        })]
                    });
                return (0, l.jsx)(f.o, {
                    isLiked: C,
                    playButtonRef: null,
                    isLikeButtonDisabled: !w,
                    onLikeButtonClick: y,
                    onShareButtonClick: () => {
                        (0, W.uH)({
                            event: "Share Modal Opened",
                            properties: {
                                associationId: c,
                                associationType: "Release",
                                sourceComponent: "Song Page Action Bar"
                            }
                        }), r(A.ModalType.SHARE, {
                            body: (0, l.jsx)(M.T, {
                                releaseId: c
                            })
                        })
                    },
                    onPostButtonClick: () => {
                        a ? ((0, W.uH)({
                            event: "Create Post Clicked",
                            properties: {
                                sourceComponent: "Song Page Post Button",
                                associationId: s.id,
                                associationType: "Release"
                            }
                        }), r(A.ModalType.FEED_POST, {
                            body: n ? (0, l.jsx)(I.s, {
                                sourceLocation: "Song Page Post Button",
                                selectedResource: {
                                    type: "release",
                                    releaseId: c
                                },
                                channelId: null,
                                channelSelectorDisabled: !1
                            }) : (0, l.jsx)(N.t, {
                                sourceLocation: "Song Page Post Button",
                                preselectedResource: {
                                    type: "release",
                                    releaseId: c
                                },
                                channelId: null
                            }, "post-input")
                        })) : (0, T.SR)()
                    },
                    moreDropdownItems: B,
                    isPlaying: U,
                    isPlayButtonLoading: D,
                    isPlayButtonDisabled: !w,
                    onPlayButtonClick: R,
                    align: "start",
                    currentListeningParty: $
                })
            }

            function SongView(e) {
                let {
                    release: t
                } = e, {
                    song_tab: s
                } = (0, R.UO)(), [a, i] = (0, r.useState)(eI.t4.OVERVIEW), n = (0, r.useRef)(null), o = (0, r.useRef)(null), d = (0, P.S3c)(P.f4W, t), {
                    hideAudioPlayer: c,
                    activeTrackId: u
                } = (0, Z.PZ)();
                ! function(e) {
                    let {
                        mintStartTimestamp: t
                    } = e, [s, l] = r.useState(), a = t + B;
                    (0, $.J7)({
                        expiryTimestamp: a
                    });
                    let i = Date.now(),
                        n = i > t && i < a,
                        o = i > a,
                        d = r.useCallback(async () => {
                            if (s)
                                for (let e = 0; e < 10; e++) await sleep(100), s.addConfetti({
                                    emojis: ["\uD83D\uDE80", "\uD83C\uDFB5"]
                                })
                        }, [s]);
                    r.useEffect(() => {
                        o || l(new U.Z)
                    }, [o]), r.useEffect(() => {
                        n && d()
                    }, [d, n])
                }(d);
                let m = c || !u;
                return (0, H.G)(() => s === eI.t4.AUDIENCE ? i(eI.t4.AUDIENCE) : s === eI.t4.ACTIVITY ? i(eI.t4.ACTIVITY) : s === eI.t4.OVERVIEW ? i(eI.t4.OVERVIEW) : s === eI.t4.POSTS ? i(eI.t4.POSTS) : void 0, [s, d.track.id]), (0, r.useEffect)(() => {
                    s || i(eI.t4.OVERVIEW)
                }, [s]), (0, l.jsxs)("div", {
                    id: "container",
                    className: (0, x.m)("bg-white", m ? "pb-[48px]" : "pb-[120px] md:pb-[130px]"),
                    children: [(0, l.jsx)("div", {
                        className: "md:px-6",
                        children: (0, l.jsx)(SongHero, {
                            releaseFrag: d
                        })
                    }), (0, l.jsxs)("div", {
                        id: "info-container",
                        className: "md:mt-4 md:gap-8 lt:m-[0_auto] lt:flex lt:max-w-content lt:gap-16",
                        children: [(0, l.jsx)("div", {
                            id: "left-container",
                            className: "flex w-full min-w-0 max-w-content overflow-visible",
                            children: (0, l.jsxs)("div", {
                                id: "sections",
                                className: "flex w-full flex-col overflow-visible",
                                children: [(0, l.jsxs)("div", {
                                    id: "wrapper",
                                    className: "z-[101] mt-0 flex flex-col",
                                    children: [(0, l.jsx)("div", {
                                        className: "px-4 md:px-6",
                                        children: (0, l.jsx)(Actions, {
                                            release: d
                                        })
                                    }), (0, l.jsx)(E.i, {
                                        media: "notLaptop",
                                        children: (0, l.jsx)("div", {
                                            className: "px-4 md:px-6",
                                            children: (0, l.jsx)(g.E, {
                                                referral: null,
                                                releaseData: d,
                                                collectButtonSource: "Mint Component"
                                            })
                                        })
                                    })]
                                }), (0, l.jsx)("div", {
                                    ref: o,
                                    children: (0, l.jsxs)(L.mQ, {
                                        defaultValue: eI.t4.OVERVIEW,
                                        value: a,
                                        onValueChange: e => R.M8.song_tab = e,
                                        children: [(0, l.jsx)("div", {
                                            className: "sticky top-0 z-stickyHeader flex bg-white px-4 md:px-6 lt:pt-6",
                                            ref: n,
                                            children: (0, l.jsxs)(L.td, {
                                                className: "mt-6 overflow-x-auto scrollbar-none lg:mt-8 lt:mt-0",
                                                children: [(0, l.jsx)(L.Ur, {
                                                    value: eI.t4.OVERVIEW,
                                                    label: eI.t4.OVERVIEW
                                                }), (0, l.jsx)(L.Ur, {
                                                    value: eI.t4.POSTS,
                                                    label: eI.t4.POSTS
                                                }), (0, l.jsx)(L.Ur, {
                                                    value: eI.t4.AUDIENCE,
                                                    label: eI.t4.AUDIENCE
                                                }), (0, l.jsx)(L.Ur, {
                                                    value: eI.t4.ACTIVITY,
                                                    label: eI.t4.ACTIVITY
                                                })]
                                            })
                                        }), (0, l.jsx)(TabContent, {
                                            activeTab: a,
                                            releaseFrag: d,
                                            tabRef: n,
                                            setActiveTab: i,
                                            tabParentRef: o
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsx)("div", {
                            id: "right-container",
                            className: "hidden w-[382px] flex-shrink-0 md:pr-6 lt:sticky lt:top-8 lt:mt-0 lt:flex lt:h-full lt:flex-col lt:items-end [&>div]:w-full",
                            children: (0, l.jsx)(g.E, {
                                referral: null,
                                releaseData: d,
                                collectButtonSource: "Mint Component"
                            })
                        })]
                    })]
                })
            }(0, eG.c)({
                trigger: [P.G3U],
                refetch: [P.M81]
            });
            var t8 = !0;

            function PublicReleasePage(e) {
                let {
                    releaseData: t,
                    seo: s,
                    soundHandle: a,
                    releaseSlug: n
                } = e, u = (0, r.useMemo)(() => a || new URL(window.location.href).pathname.split("/")[1], [a]), x = (0, r.useMemo)(() => n || new URL(window.location.href).pathname.split("/")[2], [n]), {
                    data: m,
                    isInitialLoading: p,
                    isError: h,
                    isRefetchError: g,
                    isLoadingError: f
                } = (0, P.aM2)(P.pVX, {
                    variables: !!u && !!x && {
                        soundHandle: u,
                        releaseSlug: x
                    },
                    initialData: t,
                    staleTime: 0
                }), v = (0, P.S3c)(P.Ztg, (null == m ? void 0 : m.data.mintedRelease) || (null == t ? void 0 : t.data.mintedRelease)), j = !!v;
                return ((0, r.useEffect)(() => {
                    j || p || h || g || f || o().replace("/404")
                }, [p, j, h, g, f]), v) ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(i(), {
                        children: [(0, l.jsx)("meta", {
                            property: "eth:nft:collection",
                            content: v.title
                        }), (0, l.jsx)("meta", {
                            property: "eth:nft:contract_address",
                            content: v.contractAddress
                        }), (0, l.jsx)("meta", {
                            property: "eth:nft:creator_address",
                            content: v.artist.user.publicAddress
                        }), (0, l.jsx)("meta", {
                            property: "eth:nft:schema",
                            content: "erc721"
                        }), (0, l.jsx)("meta", {
                            property: "eth:nft:mint_count",
                            content: v.numSold.toString()
                        }), (0, l.jsx)("meta", {
                            property: "eth:nft:mint_url",
                            content: v.webappUri
                        })]
                    }), (0, l.jsx)(c.pQ, { ...s
                    }), (0, l.jsx)(SongView, {
                        release: v
                    }), (0, l.jsx)(d.g, {
                        channelId: null,
                        selectedResource: {
                            releaseId: v.id,
                            type: "release"
                        },
                        sourceLocation: "Song Page Floating Button",
                        channelSelectorDisabled: !1
                    })]
                }) : (0, l.jsx)("div", {
                    className: "flex h-screen w-full items-center justify-center",
                    children: (0, l.jsx)(ej.$, {})
                })
            }
        }
    },
    function(e) {
        e.O(0, [4361, 9721, 2145, 5265, 8608, 2889, 3879, 5441, 286, 8631, 7701, 9761, 5464, 8285, 5221, 1165, 247, 4449, 9416, 7543, 2332, 4606, 4578, 121, 6277, 9032, 3429, 199, 1932, 9289, 9726, 7006, 859, 6475, 9774, 2888, 179], function() {
            return e(e.s = 9137)
        }), _N_E = e.O()
    }
]);