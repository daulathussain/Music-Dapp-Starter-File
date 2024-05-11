(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405, 8943], {
        28579: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(41255)
            }])
        },
        61450: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return FeedDivider
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(44361);
            let FeedDivider = e => {
                let {
                    className: t
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.m)("flex h-[1px] w-full flex-col items-center justify-center overflow-visible py-5", t),
                    children: (0, r.jsx)("div", {
                        className: "h-[1px] w-full flex-shrink-0 bg-base200"
                    })
                })
            }
        },
        26886: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return FeedPostInput
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(72102),
                a = n(44361),
                s = n(54614),
                l = n(68753),
                d = n(69598),
                c = n(66361),
                u = n(96301),
                m = n(21956),
                p = n(43158),
                h = n(22181),
                x = n(42529),
                f = n(14034);

            function FeedPostInput() {
                var e;
                let {
                    authUser: t,
                    isAuthenticatedWithAPI: n
                } = (0, u.aC)(), {
                    openModal: b
                } = (0, h.useModal)(), {
                    tablet: v
                } = (0, p.useMediaQuery)(), g = (0, o.useMemo)(() => n ? "What's on your mind?" : "Sign in to post...", [n]), w = (0, x.R)(() => {
                    if (!n) {
                        (0, m.SR)();
                        return
                    }(0, f.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: "Feed Post Input"
                        }
                    }), b(h.ModalType.FEED_POST, {
                        body: (0, r.jsx)(c.t, {
                            sourceLocation: "Feed Post Input",
                            preselectedResource: null,
                            channelId: null
                        }, "post-input")
                    })
                });
                return (0, r.jsxs)("div", {
                    className: (0, a.m)("flex w-full items-center gap-2 md:gap-4"),
                    children: [(0, r.jsx)("div", {
                        className: (0, a.m)("flex-shrink-0 rounded-full", !t && "bg-neutral500", "h-10 w-10 md:h-12 md:w-12"),
                        children: t ? (0, r.jsx)(l.q, {
                            walletAddress: t.publicAddress,
                            username: t.username,
                            webappUri: t.webappUri,
                            size: v ? 48 : 40,
                            src: null === (e = t.avatar) || void 0 === e ? void 0 : e.url,
                            borderRadius: "50%"
                        }) : (0, r.jsx)("div", {
                            className: "flex items-center justify-center bg-white",
                            children: (0, r.jsx)(i.G, {
                                icon: s.m0,
                                className: "text-avatar text-neutral500 md:text-avatar-md"
                            })
                        })
                    }), (0, r.jsxs)("button", {
                        className: "relative flex flex-1 items-center rounded-md bg-base100 px-3 py-2 text-base-l text-neutral500 ring-inset ring-base300 hover:bg-neutral50 hover:ring-1",
                        onClick: w,
                        children: [(0, r.jsx)("div", {
                            className: "line-clamp-1 flex-1 text-left",
                            children: g
                        }), (0, r.jsx)(d.z, {
                            variant: "primary",
                            className: "bg-base800/30' bottom-0 right-0 flex h-10 items-center justify-center !rounded-[100px]",
                            label: "Post",
                            disabled: !0,
                            onClick: w,
                            size: "S"
                        })]
                    })]
                })
            }
        },
        75196: function(e, t, n) {
            "use strict";
            n.d(t, {
                yN: function() {
                    return FeedEmpty
                },
                m4: function() {
                    return FeedEmptyAuth
                },
                IY: function() {
                    return FeedError
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(78924);
            let Box3D = e => (0, r.jsxs)("svg", {
                width: 116,
                height: 124,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, r.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M98.182 95.23V42.41l-8.814-5.086-9.338 5.25V31.935l-9.338-5.389L52.414 16 15.457 37.324 6.646 42.41v10.425l8.814 5.262-8.814 5.163v31.97l8.814 5.086 27.319 15.764 9.636 5.56 9.635-5.56v-11.12l8.643 6.133 18.676-10.777 8.814-5.086ZM62.05 73.586 80.262 63.26v21.247L62.049 94.833V73.586Zm-19.271 0L24.565 63.26v21.247l18.213 10.326V73.586Zm27.914-25.764L52.414 58.097l-18.28-10.275 18.28-10.498 18.278 10.498Z",
                    fill: "#fff"
                }), (0, r.jsx)("path", {
                    d: "M98.182 42.41v52.82l-8.814 5.086-18.676 10.777m27.49-68.683-8.814 5.086-18.676 10.777-8.643 4.987-9.636 5.56m45.77-26.41-8.815-5.086-9.338 5.25M52.413 121.64V68.82m0 52.82-9.635-5.56-27.32-15.764-8.813-5.086V63.26m45.768 58.38 9.636-5.56v-11.12M6.645 42.41l8.814 5.086L42.778 63.26l9.636 5.56M6.643 42.41v10.425l8.815 5.262M6.645 42.41l8.814-5.086L52.413 16l18.28 10.547 9.337 5.389M15.458 58.097l9.107 5.163m-9.107-5.163L6.646 63.26m8.814 26.41 27.319 15.29V94.833m-27.32-5.163 9.107-5.163m-9.107 5.163V68.82m64.804-5.56L62.049 73.586v21.247M80.262 63.26l9.106-5.163V89.67m-9.106-26.41v21.247m0 0 9.106 5.163m-9.106-5.163L62.049 94.833M24.565 63.26l18.213 10.326v21.247M24.565 63.26v21.247m0-21.247-9.107 5.56m9.107 15.687 18.213 10.326m46.59-5.163-18.676 10.646m0 10.777v-10.777m0 10.777-8.643-6.133m8.643-4.644-8.643-5.483m0 0v10.127m-46.59-36.14-8.814-5.56m45.768-36.713L24.506 42.41l9.629 5.412m18.279-21.275 18.278 9.906m-18.278-9.906v10.777m18.278-.871 9.338-4.517m-9.338 4.517v11.37m9.338-15.887v10.637m-9.338 5.25L52.414 58.096l-18.28-10.275m36.558 0L52.414 37.324m18.278 10.498 9.338-5.249m-27.617-5.249L34.136 47.822",
                    stroke: "#171717",
                    strokeWidth: .5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, r.jsx)("path", {
                    d: "M6.951 112a6.175 6.175 0 0 0 6.014 5.988l.486.012-.486.012A6.175 6.175 0 0 0 6.951 124a6.175 6.175 0 0 0-6.014-5.988L.451 118l.486-.012A6.175 6.175 0 0 0 6.951 112ZM101.5 100a6.175 6.175 0 0 0 6.014 5.988L108 106l-.486.012A6.175 6.175 0 0 0 101.5 112a6.175 6.175 0 0 0-6.014-5.988L95 106l.486-.012A6.175 6.175 0 0 0 101.5 100ZM98.049 0c.264 9.008 7.519 16.24 16.528 16.475l.972.025-.972.025c-9.009.235-16.264 7.467-16.528 16.475-.264-9.008-7.52-16.24-16.529-16.475l-.971-.025.971-.025C90.53 16.24 97.785 9.008 98.05 0Z",
                    fill: "#262626"
                })]
            });
            var i = n(58400),
                a = n(56478),
                s = n(21956),
                l = n(14034);
            let FeedEmpty = () => (0, r.jsx)(o.Vm, {
                    illustration: (0, r.jsx)(a.S, {}),
                    subHeading: "It's a bit quiet in here",
                    text: "Follow a few frens to get some sounds up in this feed. Start by following top artists and collectors!",
                    buttonLabel: "Go to Charts",
                    href: "/charts?type=collectors",
                    divider: !0,
                    mainFeed: !0
                }),
                FeedEmptyAuth = () => (0, r.jsx)(o.Vm, {
                    illustration: (0, r.jsx)(Box3D, {}),
                    subHeading: "Looks like your wallet isn't connected",
                    text: "Sign in to view your personalized feed.",
                    buttonLabel: "Sign in",
                    onClick: function() {
                        (0, l.uH)({
                            event: "Sign in Clicked",
                            properties: {
                                sourceComponent: "Feed"
                            }
                        }), (0, s.SR)()
                    },
                    divider: !0,
                    mainFeed: !0
                }),
                FeedError = e => {
                    let {
                        divider: t = !1,
                        mainFeed: n = !1
                    } = e;
                    return (0, r.jsx)(o.Vm, {
                        illustration: (0, r.jsx)(i.m, {}),
                        subHeading: "Something isn't working here",
                        text: "Don’t worry we’re looking into it. Until then, discover more sounds on our home page.",
                        buttonLabel: "Go to home page",
                        href: "/",
                        divider: t,
                        mainFeed: n
                    })
                }
        },
        80222: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return PostFloatingButton
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(72102),
                a = n(78608),
                s = n(56482),
                l = n(84385),
                d = n(58430),
                c = n(66361),
                u = n(52931),
                m = n(96301),
                p = n(21956),
                h = n(22181),
                x = n(42529),
                f = n(14034),
                b = n(81688),
                v = n(85846);

            function PostFloatingButton(e) {
                let {
                    channelId: t,
                    channelSelectorDisabled: n,
                    selectedResource: g,
                    sourceLocation: w
                } = e, {
                    openModal: C
                } = (0, h.useModal)(), {
                    isAuthenticatedWithAPI: j
                } = (0, m.aC)(), {
                    activeTrackId: L
                } = (0, b.PZ)(), {
                    value: k
                } = (0, a.useGate)(v.ln.SPOTIFY_LINKS), y = (0, x.R)(() => {
                    j ? ((0, f.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: w
                        }
                    }), C(h.ModalType.FEED_POST, {
                        body: k ? (0, r.jsx)(u.s, {
                            sourceLocation: w,
                            selectedResource: g,
                            channelId: t,
                            channelSelectorDisabled: n
                        }) : (0, r.jsx)(c.t, {
                            sourceLocation: w,
                            preselectedResource: g,
                            channelId: t
                        }, "post-input")
                    })) : (0, p.SR)()
                }), M = (0, o.useMemo)(() => L ? `calc(${d.U}px + ${l.MINIMIZED_PLAYER_HEIGHT}px + env(safe-area-inset-bottom))` : `calc(${d.U}px + env(safe-area-inset-bottom))`, [L]);
                return (0, r.jsx)("button", {
                    className: "fixed right-4 z-feedPostFloatingButton mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm  transition-all active:scale-95 md:hidden",
                    onClick: y,
                    style: {
                        bottom: M
                    },
                    children: (0, r.jsx)(i.G, {
                        icon: s.r8,
                        fontSize: 20,
                        className: "text-white"
                    })
                })
            }
        },
        14930: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return Repost
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(72102),
                a = n(92127),
                s = n(31981),
                l = n(10228),
                d = n(97946),
                c = n(25347),
                u = n(3928),
                m = n(85846),
                p = n(95390),
                h = n(66778);

            function Repost(e) {
                let {
                    commentButtonAction: t,
                    originalPost: n,
                    repostSource: x,
                    showCommentInput: f
                } = e, b = (0, u.S3c)(u.gW_, n), v = (0, u.S3c)(u.WCg, x), g = (0, o.useMemo)(() => (0, r.jsx)(l.U, {
                    userId: v.creator.id
                }), [v.creator.id]);
                return (0, s.Rf)(b) ? (0, r.jsxs)("div", {
                    className: "flex flex-col gap-1 pt-1",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-row items-center gap-2 pl-[30px] align-middle text-base-m text-base500 md:pl-9 md:text-base-l",
                        children: [(0, r.jsx)(i.G, {
                            icon: a.u,
                            className: "text-base-m text-base500 md:text-base-l"
                        }), (0, r.jsx)(c.I, {
                            trigger: (0, r.jsxs)("span", {
                                className: "font-medium",
                                children: [(0, r.jsx)(d.s, {
                                    pathnameUri: (0, p.OU)(v.creator.webappUri),
                                    className: "font-semibold transition-[filter] duration-300 hover:brightness-70",
                                    children: v.creator.username
                                }), m.L_, "reposted"]
                            }),
                            userHoverCardContent: g
                        })]
                    }), (0, r.jsx)(h.Y, {
                        post: b,
                        repostSource: v,
                        variant: "feed",
                        previewCommentFrag: null,
                        hideDropdown: !1,
                        hideActions: !1,
                        commentButtonAction: t,
                        showCommentInput: f
                    })]
                }) : null
            }
        },
        72508: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return GroupedUsersAvatar
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(44361),
                a = n(67317),
                s = n(3928),
                l = n(95390);
            let d = {
                    MOBILE: 12,
                    TABLET: 16
                },
                c = {
                    MOBILE: 16,
                    TABLET: 24
                },
                GroupedUsersAvatar = e => {
                    let {
                        users: t,
                        variant: n
                    } = e, u = o.useMemo(() => t.map(e => (0, s.S3c)(s.MI9, e)), [t]), m = function(e) {
                        switch (e) {
                            case "notification":
                            default:
                                return d;
                            case "social-proof":
                                return c
                        }
                    }(n), p = u.length, h = p <= 3 ? p : 3, x = o.useMemo(() => u.slice(0, h), [h, u]), f = o.useMemo(() => x.map((e, t) => {
                        var n, o;
                        return (0, r.jsxs)("div", {
                            children: [(0, r.jsx)("span", {
                                className: "hidden lt:block",
                                children: (0, r.jsx)(a.c, {
                                    src: null === (n = e.avatar) || void 0 === n ? void 0 : n.url,
                                    size: m.TABLET,
                                    username: e.username,
                                    walletAddress: e.publicAddress,
                                    borderRadius: "100%",
                                    webappUriPath: (0, l.OU)(e.webappUri),
                                    disableLink: !0,
                                    hasBorder: !0
                                })
                            }), (0, r.jsx)("span", {
                                className: "block lt:hidden",
                                children: (0, r.jsx)(a.c, {
                                    src: null === (o = e.avatar) || void 0 === o ? void 0 : o.url,
                                    size: m.MOBILE,
                                    username: e.username,
                                    walletAddress: e.publicAddress,
                                    borderRadius: "100%",
                                    webappUriPath: (0, l.OU)(e.webappUri),
                                    disableLink: !0,
                                    hasBorder: !0
                                })
                            })]
                        }, `${e.id}-${t}`)
                    }), [m.MOBILE, m.TABLET, x]);
                    return (0, r.jsx)("div", {
                        className: (0, i.m)("relative flex flex-shrink-0 flex-row-reverse [&>*:nth-child(1)]:-ml-1.5", p >= 3 && " [&>*:nth-child(2)]:-ml-1.5"),
                        children: f
                    })
                }
        },
        72866: function(e, t, n) {
            "use strict";
            n.d(t, {
                HA: function() {
                    return a
                },
                t4: function() {
                    return i
                },
                wv: function() {
                    return useReleaseActivityState
                }
            });
            var r = n(31265),
                o = n(63558);
            let i = {
                    ACTIVITY: "activity",
                    AUDIENCE: "audience",
                    OVERVIEW: "overview",
                    POSTS: "posts"
                },
                a = (0, r.sj)({
                    scrollIndices: {},
                    filter: {}
                }),
                useReleaseActivityState = () => (0, o.R)(a)
        },
        78564: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return o
                }
            });
            var r = n(8205);
            let o = (0, r.F4)({
                "0%": {
                    opacity: 0
                },
                "100%": {
                    opacity: 1
                }
            })
        },
        9421: function(e, t, n) {
            "use strict";
            n.d(t, {
                BX: function() {
                    return fadeInAnimation
                },
                DR: function() {
                    return i
                },
                Jw: function() {
                    return s
                },
                ie: function() {
                    return a
                },
                ws: function() {
                    return o
                }
            });
            var r = n(8205);
            let fadeInAnimation = e => {
                    let {
                        duration: t,
                        delay: n
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
                            delay: n
                        }
                    }
                },
                o = (0, r.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                i = (0, r.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                a = (0, r.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                s = (0, r.F4)({
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
        36095: function(e, t, n) {
            "use strict";
            n.d(t, {
                nI: function() {
                    return p
                }
            });
            var r = n(16356),
                o = (n(97352), n(8205)),
                i = (n(73950), n(76292)),
                a = (n(97946), n(47544), n(7847));
            n(43158);
            var s = n(72102),
                l = (n(49542), n(14218)),
                d = n(83773),
                c = n(85194),
                u = n(25913);
            (0, i.Z)(96, 96);
            let m = {
                    mobile: 92,
                    tablet: 152,
                    desktop: 176,
                    minimalMobile: 68,
                    minimalTablet: 96
                },
                p = ((0, o.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    pointerEvents: "all",
                    overflow: "hidden",
                    borderRadius: "$medium",
                    transform: "translateZ(0)",
                    flexShrink: 0,
                    width: m.mobile,
                    height: m.mobile,
                    compoundVariants: [{
                        minimal: !0,
                        loading: !0,
                        css: {
                            width: m.minimalMobile,
                            height: m.minimalMobile,
                            "@tablet": {
                                width: m.minimalTablet,
                                height: m.minimalTablet
                            }
                        }
                    }],
                    variants: {
                        minimal: {
                            true: {
                                width: m.minimalMobile,
                                height: m.minimalMobile,
                                "@tablet": {
                                    width: m.minimalTablet,
                                    height: m.minimalTablet
                                }
                            },
                            false: {
                                width: m.mobile,
                                height: m.mobile,
                                "@tablet": {
                                    width: m.tablet,
                                    height: m.tablet
                                },
                                "@desktop": {
                                    width: m.desktop,
                                    height: m.desktop
                                }
                            }
                        },
                        loading: {
                            true: { ...a.Hf,
                                "@tablet": {
                                    width: m.tablet,
                                    height: m.tablet,
                                    "@desktop": {
                                        width: m.desktop,
                                        height: m.desktop
                                    }
                                }
                            }
                        }
                    }
                }), (0, o.zo)("div", {
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    img: {
                        objectFit: "cover",
                        transition: "transform 0.4s ease"
                    }
                }));
            (0, o.zo)("div", {
                transition: `opacity ${o.rS.transitions.slow}`,
                opacity: 0,
                position: "absolute",
                cursor: "pointer",
                compoundVariants: [{
                    size: "tablet",
                    minimal: !1,
                    css: {
                        bottom: 12,
                        right: 12
                    }
                }],
                variants: {
                    playing: {
                        true: {
                            opacity: 1
                        }
                    },
                    size: {
                        tablet: {},
                        mobile: {}
                    },
                    minimal: {
                        true: {},
                        false: {
                            position: "absolute"
                        }
                    }
                }
            })
        },
        78924: function(e, t, n) {
            "use strict";
            n.d(t, {
                Vm: function() {
                    return Placeholder
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(8205),
                i = n(69598),
                a = n(85906);
            let Placeholder = e => {
                    let {
                        illustration: t,
                        subHeading: n,
                        text: o,
                        buttonLabel: a,
                        divider: c = !1,
                        mainFeed: u = !1,
                        ...m
                    } = e;
                    return (0, r.jsxs)(l, {
                        divider: c,
                        children: [c && (0, r.jsx)(s, {
                            orientation: "horizontal",
                            mainFeed: u
                        }), t, (0, r.jsxs)(d, {
                            children: [(0, r.jsx)("h2", {
                                children: n
                            }), (0, r.jsx)("p", {
                                children: o
                            }), (0, r.jsx)(i.z, {
                                href: "href" in m ? m.href : void 0,
                                onClick: "onClick" in m ? m.onClick : void 0,
                                variant: "primary",
                                label: a,
                                deprecatedCSS: {
                                    height: "unset"
                                }
                            })]
                        })]
                    })
                },
                s = (0, o.zo)(a.i, {
                    height: 1,
                    margin: "10px 0 40px",
                    variants: {
                        mainFeed: {
                            true: {
                                marginTop: 60
                            }
                        }
                    }
                }),
                l = (0, o.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    height: "80vh",
                    paddingX: 24,
                    "@desktop": {
                        paddingX: 0
                    },
                    variants: {
                        divider: {
                            false: {
                                paddingTop: 20
                            }
                        }
                    }
                }),
                d = (0, o.zo)("div", {
                    marginTop: 30,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    h2: {
                        base: "M",
                        fontStyle: "semibold"
                    },
                    p: {
                        base: "M",
                        maxWidth: 300,
                        margin: "18px 0 24px",
                        "@tablet": {
                            maxWidth: 390
                        }
                    }
                })
        },
        58400: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return EyeStars
                }
            });
            var r = n(16356);
            n(97352);
            let EyeStars = () => (0, r.jsxs)("svg", {
                width: "140",
                height: "98",
                viewBox: "0 0 140 98",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, r.jsx)("path", {
                    d: "M74.0966 86.8269C91.7219 86.8269 106.01 72.5388 106.01 54.9135C106.01 37.2881 91.7219 23 74.0966 23M74.0966 86.8269C56.4712 86.8269 42.1831 72.5388 42.1831 54.9135C42.1831 37.2881 56.4712 23 74.0966 23M74.0966 86.8269C115.92 86.8269 139.293 54.9135 139.293 54.9135C139.293 54.9135 115.92 23 74.0966 23M74.0966 86.8269C32.2728 86.8269 8.90039 54.9135 8.90039 54.9135C8.90039 54.9135 32.2728 23 74.0966 23M74.0966 70.8175C82.8801 70.8175 90.0006 63.6971 90.0006 54.9135C90.0006 46.1299 82.8801 39.0094 74.0966 39.0094M74.0966 70.8175C65.313 70.8175 58.1925 63.6971 58.1925 54.9135C58.1925 46.1299 65.313 39.0094 74.0966 39.0094M74.0966 70.8175C77.8194 70.8175 80.8374 63.6971 80.8374 54.9135C80.8374 46.1299 77.8194 39.0094 74.0966 39.0094M74.0966 70.8175C70.3737 70.8175 67.3558 63.6971 67.3558 54.9135C67.3558 46.1299 70.3737 39.0094 74.0966 39.0094",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, r.jsx)("path", {
                    d: "M7.20703 75V75C7.30502 78.2757 9.94511 80.9041 13.2212 80.9876L13.707 81L13.2212 81.0124C9.94511 81.0959 7.30502 83.7243 7.20703 87V87V87C7.10905 83.7243 4.46895 81.0959 1.19288 81.0124L0.707031 81L1.19288 80.9876C4.46895 80.9041 7.10905 78.2757 7.20703 75V75Z",
                    fill: "#262626"
                }), (0, r.jsx)("path", {
                    d: "M116.207 86V86C116.305 89.2757 118.945 91.9041 122.221 91.9876L122.707 92L122.221 92.0124C118.945 92.0959 116.305 94.7243 116.207 98V98V98C116.109 94.7243 113.469 92.0959 110.193 92.0124L109.707 92L110.193 91.9876C113.469 91.9041 116.109 89.2757 116.207 86V86Z",
                    fill: "#262626"
                }), (0, r.jsx)("path", {
                    d: "M25.4004 0V0C25.6642 9.0079 32.92 16.2402 41.9287 16.4747L42.9004 16.5L41.9287 16.5253C32.92 16.7598 25.6642 23.9921 25.4004 33V33V33C25.1366 23.9921 17.8808 16.7598 8.87208 16.5253L7.90039 16.5L8.87208 16.4747C17.8808 16.2402 25.1366 9.0079 25.4004 0V0Z",
                    fill: "#262626"
                })]
            })
        },
        56478: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return Plus3D
                }
            });
            var r = n(16356);
            n(97352);
            let Plus3D = () => (0, r.jsxs)("svg", {
                width: "128",
                height: "131",
                viewBox: "0 0 128 131",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, r.jsx)("path", {
                    d: "M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141L63.1845 111.845L48.4597 120.141L33.9452 111.845V94.9359L19.1152 86.4789V69.6254L33.9452 60.8678V43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998V60.9923L107.149 69.6254Z",
                    fill: "white"
                }), (0, r.jsx)("path", {
                    d: "M33.9452 43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998M33.9452 43.9998L48.4597 52.2966L33.9452 60.8678M33.9452 43.9998V60.8678M19.1152 69.6254V86.4789L33.9452 94.9359V111.845L48.4597 120.141M19.1152 69.6254L33.9452 78.1428V61.0713M19.1152 69.6254L33.9452 60.8678M63.1845 94.9359L48.4597 86.4789M63.1845 94.9359L77.8742 86.4789M63.1845 94.9359V111.845M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141M107.149 69.6254L92.6341 60.9923M107.149 69.6254L92.6341 78.1428V60.9923M92.6341 43.9998L78.0145 52.2966L92.6341 60.9923M92.6341 43.9998V60.9923M48.4597 120.141L63.1845 111.845M48.4597 120.141V103.369L63.1845 111.845M78.0145 120.141L63.1845 111.845M78.0145 120.141L77.8742 103.352L63.1845 111.845M78.0145 69.6254L92.6341 60.9923M78.0145 69.6254L63.1845 61.0713M78.0145 69.6254L77.8742 86.4789M48.4597 69.6254L33.9452 61.0713M48.4597 69.6254V86.4789M48.4597 69.6254L63.1845 61.0713M33.9452 61.0713V60.8678M48.4597 86.4789L63.1845 78.1428M63.1845 78.1428L77.8742 86.4789M63.1845 78.1428V61.0713",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, r.jsx)("path", {
                    d: "M7.30664 84C7.40463 87.2757 10.0447 89.9041 13.3208 89.9876L13.8066 90L13.3208 90.0124C10.0447 90.0959 7.40463 92.7243 7.30664 96C7.20866 92.7243 4.56856 90.0959 1.29249 90.0124L0.806641 90L1.29249 89.9876C4.56856 89.9041 7.20866 87.2757 7.30664 84Z",
                    fill: "#262626"
                }), (0, r.jsx)("path", {
                    d: "M116.307 95C116.405 98.2757 119.045 100.904 122.321 100.988L122.807 101L122.321 101.012C119.045 101.096 116.405 103.724 116.307 107C116.209 103.724 113.569 101.096 110.292 101.012L109.807 101L110.292 100.988C113.569 100.904 116.209 98.2757 116.307 95Z",
                    fill: "#262626"
                }), (0, r.jsx)("path", {
                    d: "M24.5 0C24.7638 9.0079 32.0196 16.2402 41.0283 16.4747L42 16.5L41.0283 16.5253C32.0196 16.7598 24.7638 23.9921 24.5 33C24.2362 23.9921 16.9804 16.7598 7.97169 16.5253L7 16.5L7.97169 16.4747C16.9804 16.2402 24.2362 9.0079 24.5 0Z",
                    fill: "#262626"
                })]
            })
        },
        69598: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return m
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(49542),
                a = n(78570),
                s = n.n(a),
                l = n(44361),
                d = n(8205);
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
                        iconOnly: n
                    } = e;
                    return (0, r.jsx)("div", {
                        "data-testid": "button-leading-icon",
                        className: (0, i.clsx)("flex items-center", !n && "mr-2"),
                        children: t
                    })
                },
                TrailingIcon = e => {
                    let {
                        children: t,
                        iconOnly: n
                    } = e;
                    return (0, r.jsx)("div", {
                        "data-testid": "button-trailing-icon",
                        className: n ? "" : "ml-2",
                        children: t
                    })
                },
                m = o.forwardRef(function(e, t) {
                    let {
                        leadingIcon: n,
                        trailingIcon: o,
                        testId: a,
                        fullWidthAnchor: d = !1,
                        iconOnly: c = !1,
                        deprecatedCSS: m,
                        className: p,
                        labelComponent: h,
                        ...x
                    } = e, f = (0, r.jsx)("div", {
                        className: (0, i.clsx)("loading-circle inline-block aspect-square flex-grow-0 animate-spin rounded-full border-2 border-solid", "primary" === x.variant && "border-base100 border-l-neutral400  border-t-neutral400", ("secondary" === x.variant || "tertiary" === x.variant || "text" === x.variant) && "border-white  border-l-neutral400 border-t-neutral400 ", ("brand" === x.variant || "green" === x.variant) && "border-base50 border-l-brand100 border-t-brand100", "critical" === x.variant && "border-base50 border-l-destructive200 border-t-destructive200", "fuchsia" === x.variant && "border-base50 border-l-fuchsia500 border-t-fuchsia500", (c || "squared" === x.size) && "ml-0 aspect-square h-4/5", "XS" === x.size && "ml-2 h-2.5 w-2.5 !border-1.5", ("S" === x.size || "M" === x.size || "full" === x.size) && "ml-1 h-3.5 w-3.5", ("L" === x.size || "XL" === x.size || !x.size) && "ml-1 h-4 w-4")
                    }), b = null == x ? void 0 : x.href, v = (null == b ? void 0 : b.startsWith("http")) || (null == b ? void 0 : b.startsWith("mailto")), g = (0, r.jsxs)(u, {
                        "aria-label": x.label,
                        "aria-disabled": x.disabled,
                        hasIcon: !!n || !!o,
                        disabled: x.disabled,
                        loading: x.loading,
                        darkMode: x.darkMode,
                        "data-testid": a,
                        css: m,
                        ...x,
                        ref: t,
                        onClick: x.loading ? void 0 : e => {
                            e.currentTarget.blur(), x.onClick && x.onClick(e)
                        },
                        className: p,
                        children: [n && !x.loading && (0, r.jsx)(LeadingIcon, {
                            iconOnly: c,
                            children: n
                        }), c ? null : null != h ? h : x.label, !!o && !x.loading && (0, r.jsx)(TrailingIcon, {
                            iconOnly: c,
                            children: o
                        }), x.loading ? f : null]
                    });
                    return (0, r.jsx)(r.Fragment, {
                        children: (null == x ? void 0 : x.href) ? (0, r.jsx)(s(), {
                            className: (0, l.m)("!text-[unset] [text-decoration:unset]", d && "w-full"),
                            href: x.href,
                            "data-testid": a,
                            "data-href": x.href,
                            rel: v ? "noopener noreferrer" : void 0,
                            role: "link",
                            target: v ? "_blank" : void 0,
                            children: g
                        }) : g
                    })
                })
        },
        46061: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q_: function() {
                    return i
                },
                _R: function() {
                    return a
                }
            });
            var r = n(78564),
                o = n(9421);
            let i = {
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "400ms",
                        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform, opacity",
                        '&[data-state="delayed-open"], &[data-state="open"], ': {
                            '&[data-side="top"]': {
                                animationName: o.ie
                            },
                            '&[data-side="right"]': {
                                animationName: o.Jw
                            },
                            '&[data-side="bottom"]': {
                                animationName: o.ws
                            },
                            '&[data-side="left"]': {
                                animationName: o.DR
                            }
                        }
                    }
                },
                a = {
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
                    ...i
                };
            r.c, r.c
        },
        31451: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return TooltipContextProvider
                },
                n: function() {
                    return useTooltipContext
                }
            });
            var r = n(16356),
                o = n(97352);
            let i = o.createContext(null);

            function useTooltipContext() {
                let e = o.useContext(i);
                if (!e) throw Error("Tooltip compound components cannot be rendered outside the Tooltip component");
                return e
            }

            function TooltipContextProvider(e) {
                let {
                    children: t,
                    openOnClick: n,
                    ...a
                } = e, [s, l] = (0, o.useState)(!1), d = {
                    openContent: s,
                    setOpenContent: l,
                    openOnClick: n,
                    ...a
                };
                return (0, r.jsx)(i.Provider, {
                    value: d,
                    children: t
                })
            }
        },
        34524: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Tooltip: function() {
                    return Tooltip
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(52889),
                a = n(49542),
                s = n(8205),
                l = n(42529),
                d = n(46061),
                c = n(24455),
                u = n(31451);

            function TooltipComponent(e) {
                let {
                    children: t,
                    delayDuration: n = 0,
                    ...o
                } = e, {
                    openContent: a
                } = (0, u.n)();
                return (0, r.jsx)(i.zt, {
                    delayDuration: n,
                    children: (0, r.jsx)(i.fC, {
                        delayDuration: n,
                        open: a,
                        ...o,
                        children: t
                    })
                })
            }

            function Tooltip(e) {
                let {
                    children: t,
                    openOnClick: n,
                    delayCloseMs: o,
                    ...i
                } = e;
                return (0, r.jsx)(u.g, {
                    openOnClick: n,
                    delayCloseMs: o,
                    children: (0, r.jsx)(TooltipComponent, { ...i,
                        children: t
                    })
                })
            }
            let m = (0, o.forwardRef)(function(e, t) {
                    let {
                        children: n,
                        size: o = "xs",
                        ...i
                    } = e, {
                        sideOffset: s = 6,
                        side: l = "top",
                        avoidCollisions: d = !0,
                        className: u,
                        ...m
                    } = i, h = (0, c.Z)();
                    return (0, r.jsx)(p, {
                        sideOffset: s,
                        side: l,
                        avoidCollisions: d,
                        collisionBoundary: h,
                        className: (0, a.default)("z-tooltip bg-neutral900 font-base font-medium text-white shadow-secondary ", "xs" === o ? "rounded-sm px-2.5 py-2 text-base-xs" : "rounded-md px-2 py-3 text-base-s", u),
                        ...m,
                        ref: t,
                        children: n
                    })
                }),
                p = (0, s.zo)(i.VY, { ...d.Q_
                });
            Tooltip.StyledContent = m, Tooltip.Content = i.VY, Tooltip.Trigger = function(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    className: s
                } = n, {
                    openContent: d,
                    setOpenContent: c,
                    openOnClick: m,
                    delayCloseMs: p
                } = (0, u.n)(), h = o.useRef(null), x = (0, l.R)(() => {
                    if (p) {
                        null !== h.current && clearTimeout(h.current), h.current = setTimeout(() => {
                            c(!1)
                        }, p);
                        return
                    }
                    c(!1)
                });
                return (0, r.jsx)(i.xz, {
                    className: (0, a.default)("cursor-default hover:cursor-default", s),
                    onClick: () => {
                        m && c(!d)
                    },
                    onMouseOver: () => {
                        null !== h.current && (clearTimeout(h.current), h.current = null), m || c(!0)
                    },
                    onMouseLeave: x,
                    onBlur: x,
                    ...n,
                    children: t
                })
            }, Tooltip.Portal = i.h_
        },
        24455: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useGetLayoutContainer
                }
            });
            var r = n(97352),
                o = n(83835);
            let useGetLayoutContainer = () => {
                let [e, t] = (0, r.useState)(null);
                return (0, o.G)(() => {
                    t(window.document.getElementById("layout"))
                }, []), e
            }
        },
        41255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return Z
                },
                default: function() {
                    return Page
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(58285),
                a = n(78608),
                s = n(44361),
                l = n(19791),
                d = n(61450),
                c = n(26886),
                u = n(75196),
                m = n(31981),
                p = n(76501),
                h = n(80222),
                x = n(66778),
                f = n(14930),
                b = n(31265),
                v = n(63558);
            let g = (0, b.sj)({
                    scrollIndex: 0,
                    positionFromTop: 0
                }),
                useActivityFeedState = () => (0, v.R)(g);
            var w = n(69965),
                C = n(60963),
                j = n(20902),
                L = n(43607),
                k = n(96301),
                y = n(43158),
                M = n(75747),
                S = n(3928),
                N = n(17941),
                F = n(76254),
                $ = n(85846),
                I = n(64571),
                V = n(73334),
                z = n(72102),
                T = n(69349);
            n(96960);
            var P = n(10228),
                R = n(72508),
                A = n(72866),
                _ = n(36095),
                D = n(29413),
                E = n(44456),
                B = n(97946),
                H = n(25347),
                O = n(81688),
                U = n(95390);

            function ViralSoundsSection(e) {
                let {
                    initialData: t
                } = e, {
                    data: n,
                    isInitialLoading: o
                } = (0, S.aM2)(S.ktR, {
                    variables: {
                        pagination: {
                            first: 5,
                            after: null
                        }
                    },
                    initialData: t,
                    ...$.gq
                }), i = null == n ? void 0 : n.data.currentReleaseChart.chartRanks.edges;
                return (0, r.jsxs)("section", {
                    children: [(0, r.jsxs)("div", {
                        className: "flex items-center justify-center overflow-x-hidden",
                        children: [(0, r.jsx)("h1", {
                            className: "font-title text-title-m font-medium md:text-title-l",
                            children: "Viral Sounds"
                        }), (0, r.jsx)(B.s, {
                            type: "internal",
                            pathnameUri: "/charts/viral/sounds",
                            className: "ml-auto font-base text-base-xs text-base600",
                            children: (0, r.jsx)("div", {
                                className: "ml-[8px] flex h-6 w-6 items-center justify-center",
                                children: (0, r.jsx)(z.G, {
                                    icon: T._t,
                                    size: "xl",
                                    className: "text-base500"
                                })
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: (0, s.m)("scrollbar-transparent mt-4 flex justify-between gap-4 overflow-y-scroll pb-4 lg:pb-10 "),
                        children: null == i ? void 0 : i.map(e => {
                            let {
                                node: t
                            } = e;
                            return (0, r.jsx)(Card, {
                                data: t,
                                isLoading: o
                            }, t.id)
                        })
                    })]
                })
            }

            function Card(e) {
                let {
                    data: t,
                    isLoading: n
                } = e, {
                    release: o,
                    currentRank: i
                } = (0, S.S3c)(S.mrg, t), a = (0, U.OU)(o.webappUri, {
                    params: {
                        song_tab: A.t4.POSTS
                    }
                }), {
                    playing: s,
                    activeTrackId: l
                } = (0, O.PZ)(), d = o.track.id === l;
                return (0, r.jsxs)("div", {
                    className: "w-[100px] md:w-36",
                    children: [(0, r.jsxs)("div", {
                        className: "relative flex h-[100px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-md md:h-36 md:w-36",
                        children: [(0, r.jsx)(_.nI, {
                            children: (0, r.jsx)(D.v, {
                                playButtonSize: "2xl",
                                nextImageSizes: "144px",
                                releaseFrag: o
                            })
                        }), i && (0, r.jsx)(ChartCardRank, {
                            isLoading: n,
                            rank: i
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col",
                        children: [(0, r.jsx)(H.I, {
                            userHoverCardContent: (0, r.jsx)(P.U, {
                                userId: o.artist.userId
                            }),
                            trigger: (0, r.jsx)("div", {
                                children: (0, r.jsx)(B.s, {
                                    type: "internal",
                                    pathnameUri: (0, U.OU)(o.artist.webappUri),
                                    children: (0, r.jsx)("h4", {
                                        className: "mt-2 line-clamp-1 font-base text-base-xs font-normal uppercase text-base800",
                                        children: o.artist.name
                                    })
                                })
                            }),
                            triggerAsChild: !0
                        }), (0, r.jsxs)(B.s, {
                            type: "internal",
                            pathnameUri: a,
                            children: [(0, r.jsxs)("div", {
                                className: "flex flex-row items-end gap-2",
                                children: [d && s && (0, r.jsx)("div", {
                                    className: "pb-1.5",
                                    children: (0, r.jsx)(E.j, {
                                        smallBars: !0
                                    })
                                }), (0, r.jsx)("h4", {
                                    className: "mt-1 line-clamp-1 font-title text-title-xs font-medium text-black",
                                    children: o.title
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "mt-2 flex items-center",
                                children: [(0, r.jsx)("div", {
                                    className: 1 === o.topPosts.length ? "ml-1" : "",
                                    children: (0, r.jsx)(R.d, {
                                        users: o.topPosts.map(e => e.creator),
                                        variant: "notification"
                                    })
                                }), (0, r.jsxs)("span", {
                                    className: "text-base ml-1 text-base-xs text-base600",
                                    children: [o.postCount, $.L_, (0, I.Lo)({
                                        word: "post",
                                        count: o.postCount
                                    })]
                                })]
                            })]
                        })]
                    })]
                })
            }

            function ChartCardRank(e) {
                let {
                    rank: t,
                    isLoading: n
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, s.m)("absolute left-0 top-0 flex-shrink-0 flex-col justify-center gap-1 overflow-hidden rounded-br-md bg-black bg-opacity-90", "h-[35px] w-[35px] md:h-[38px] md:w-[38px]", n ? "hidden" : "flex"),
                    children: (0, r.jsx)("div", {
                        className: (0, s.m)("w-full text-center font-title text-title-xs font-medium leading-3 text-white md:text-title-m"),
                        children: t
                    })
                })
            }

            function Home(e) {
                let {
                    viralSoundsNew: t
                } = e, {
                    openToast: n
                } = (0, M.useToast)(), {
                    authUser: s,
                    isConnectingAPIUser: m
                } = (0, k.aC)(), x = (0, N.a)(), {
                    tablet: f
                } = (0, y.useMediaQuery)(), {
                    value: b
                } = (0, a.useGate)($.ln.SPOTIFY_LINKS), [v, g] = (0, o.useState)(null), {
                    scrollIndex: I,
                    positionFromTop: z
                } = useActivityFeedState(), {
                    isPopStateEvent: T
                } = (0, F.g$)(), P = null == s ? void 0 : s.id, {
                    orderedList: R,
                    isLoadingNewPage: A,
                    loadMoreNextPage: _,
                    error: D,
                    hasNextPage: E = !1
                } = (0, S.NSZ)(S.phN, {
                    getNextPageParam(e) {
                        let {
                            data: t
                        } = e;
                        return t.homeFeed.pageInfo.hasNextPage && {
                            after: t.homeFeed.pageInfo.endCursor
                        }
                    },
                    filterQueryKey: {
                        authUserId: P
                    },
                    variables(e) {
                        let {
                            pageParam: t
                        } = e, n = (null == t ? void 0 : t.after) || null;
                        return {
                            pagination: {
                                first: null == n ? 10 : 5,
                                after: n
                            },
                            showPreviewComment: f
                        }
                    },
                    enabled: !m,
                    list(e) {
                        let {
                            homeFeed: t
                        } = e;
                        return (0, l.eJ)(null == t ? void 0 : t.edges, e => !!e && e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    ...$.gq
                }), B = 0 === R.length && !A && !D && x, H = !!D, O = R.length;
                (0, o.useEffect)(() => {
                    H && 0 !== O && n({
                        text: "An error occurred with the activity feed.",
                        variant: "error"
                    })
                }, [H, O, n]);
                let U = (0, o.useMemo)(() => E || A ? (0, r.jsx)(L.$, {
                    className: "py-5 text-neutral400"
                }) : null, [E, A]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(w.pQ, {}), (0, r.jsx)(j.q, {
                        leftContent: (0, r.jsxs)("div", {
                            className: "flex w-full flex-1 flex-col",
                            children: [(0, r.jsx)(ViralSoundsSection, {
                                initialData: t
                            }), b ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("h2", {
                                    className: "pb-7 pt-3 font-title text-title-l font-medium text-black md:pt-0",
                                    children: "For you"
                                }), (0, r.jsx)("div", {
                                    className: "hidden md:block md:pr-2",
                                    children: (0, r.jsx)(p.R, {
                                        channel: null,
                                        sourceLocation: "Feed Post Input",
                                        selectedResource: v,
                                        setSelectedResource: g,
                                        variant: "inline",
                                        showChannelSelector: !1,
                                        channelSelectorDisabled: !1
                                    })
                                })]
                            }) : (0, r.jsx)("div", {
                                className: "mb-7 mt-2 hidden md:block md:pr-2 ",
                                children: (0, r.jsx)(c.c, {})
                            }), (0, r.jsx)("div", {
                                className: "hidden pb-5 md:block md:pr-2 ",
                                children: (0, r.jsx)(d.r, {})
                            }), !!D && (0, r.jsx)(u.IY, {
                                mainFeed: !0,
                                divider: !0
                            }), B && (0, r.jsx)(r.Fragment, {
                                children: s ? (0, r.jsx)(u.yN, {}) : (0, r.jsx)(u.m4, {})
                            }), (null == R ? void 0 : R.length) > 0 ? (0, r.jsx)(i.OO, {
                                useWindowScroll: !0,
                                data: R,
                                itemContent: renderHomeFeedItem,
                                endReached: _,
                                components: {
                                    Footer: () => U
                                },
                                style: {
                                    willChange: "height"
                                },
                                increaseViewportBy: {
                                    bottom: 4e3,
                                    top: 500
                                },
                                ...T && I ? {
                                    initialTopMostItemIndex: {
                                        index: I,
                                        align: "start",
                                        offset: -z - 40
                                    }
                                } : {}
                            }) : U]
                        }),
                        rightContent: (0, r.jsxs)("div", {
                            className: "flex h-full flex-col justify-between gap-10",
                            children: [(0, r.jsx)(C.TrendingRecommendedFollows, {}), (0, r.jsx)(V.a, {})]
                        })
                    }), (0, r.jsx)(h.g, {
                        channelId: null,
                        selectedResource: null,
                        sourceLocation: "Feed Floating Button",
                        channelSelectorDisabled: !1
                    })]
                })
            }
            let renderHomeFeedItem = (e, t) => (0, r.jsx)(HomeFeedItem, {
                index: e,
                item: t
            }, `feed-activity-group-${e}`);

            function HomeFeedItem(e) {
                let {
                    item: t,
                    index: n
                } = e, i = t.feedItem, a = "HomeFeedPost" === i.__typename, l = (0, o.useMemo)(() => {
                    if ("HomeFeedPost" === i.__typename) {
                        var e, n;
                        return (0, r.jsx)(FeedActivityTypePost, {
                            activityFrag: i.post,
                            previewCommentFrag: null === (n = i.post.comments) || void 0 === n ? void 0 : null === (e = n.edges[0]) || void 0 === e ? void 0 : e.node
                        }, t.id)
                    }
                    return (0, I.y0)(i.__typename), null
                }, [t, i]);
                return (0, r.jsxs)("div", {
                    onClick: e => {
                        g.scrollIndex = n, g.positionFromTop = e.currentTarget.getBoundingClientRect().top
                    },
                    children: [l, (0, r.jsx)("div", {
                        className: (0, s.m)(!a && "pt-5 md:pt-0"),
                        children: (0, r.jsx)(d.r, {})
                    })]
                })
            }

            function FeedActivityTypePost(e) {
                let {
                    activityFrag: t,
                    previewCommentFrag: n
                } = e, o = (0, S.S3c)(S.rLo, t);
                return o ? "Repost" === o.__typename ? null == o.originalPost ? (0, r.jsx)("div", {
                    className: "text-base-s text-neutral400",
                    children: $.YA
                }) : (0, r.jsx)(f.M, {
                    originalPost: o.originalPost,
                    repostSource: o,
                    commentButtonAction: m.id.GoPostPage,
                    showCommentInput: !1
                }) : (0, r.jsx)(x.Y, {
                    post: o,
                    repostSource: null,
                    variant: "feed",
                    previewCommentFrag: n,
                    hideDropdown: !1,
                    hideActions: !1,
                    commentButtonAction: m.id.GoPostPage,
                    showCommentInput: !1
                }) : (0, r.jsx)("div", {
                    className: "text-base-s text-neutral400",
                    children: $.YA
                })
            }
            var Z = !0;

            function Page(e) {
                let {
                    viralSoundsNew: t
                } = e;
                return (0, r.jsx)(Home, {
                    viralSoundsNew: t
                })
            }
        },
        30314: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fab",
                iconName: "discord",
                icon: [640, 512, [], "f392", "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]
            }, t.om = t.DF
        },
        38286: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fab",
                iconName: "instagram",
                icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
            }, t.Zz = t.DF
        },
        14218: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "dash",
                icon: [512, 512, ["minus-large"], "e404", "M512 256c0 13.25-10.75 24-24 24H24C10.75 280 0 269.3 0 256s10.75-24 24-24h464C501.3 232 512 242.8 512 256z"]
            }, t.sZ = t.DF
        },
        23615: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "store",
                icon: [576, 512, [], "f54e", "M483.4 224C463.8 224 445.8 217.5 431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 223.1 92.41 224C92.39 224 92.38 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 223.1 483.5 224C483.5 224 483.5 224 483.4 224H483.4zM455.6 48H120.4L68.91 129.5C63.12 138.6 62.57 149.9 66.65 159.6C70.57 168.8 77.67 174.4 86.56 175.6C88.57 175.9 90.54 176 92.36 176C104.2 176 114.6 170.9 121.9 162.8C131 152.8 143.1 147 157.6 147C171.1 147 184.1 152.8 193.2 162.8C200.5 170.9 210.9 176 222.7 176C234.6 176 244.1 170.9 252.3 162.8C261.4 152.8 274.3 147 287.9 147C301.5 147 314.4 152.8 323.5 162.8C330.8 170.9 341.3 176 353.1 176C364.9 176 375.3 170.9 382.6 162.8C391.7 152.8 404.6 147 418.2 147C431.7 147 444.7 152.7 453.8 162.8C461.2 170.9 471.7 176 483.4 176C485.4 176 487.3 175.9 489.3 175.6C498.3 174.4 505.4 168.8 509.3 159.6C513.4 149.1 512.9 138.7 507.1 129.5L455.6 48zM464 336V254.4C470.3 255.5 476.8 256 483.4 256C489 256 494.4 255.6 499.7 254.9L499.7 254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C99.06 256 105.6 255.4 112 254.4V336H464zM464 384H112V448C112 456.8 119.2 464 128 464H448C456.8 464 464 456.8 464 448V384z"]
            }, t.vJ = t.DF
        },
        83773: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fas",
                iconName: "circle-star",
                icon: [512, 512, ["star-circle"], "e123", "M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 104c-6.1 0-11.7 3.5-14.3 8.9l-36.2 73.4-81 11.8c-6 .9-11 5.1-12.9 10.9s-.3 12.2 4 16.4l58.6 57.2-13.8 80.7c-1 6 1.4 12.1 6.4 15.6s11.5 4.1 16.8 1.2L256 342.1l72.5 38.1c5.4 2.8 11.9 2.4 16.9-1.2s7.4-9.6 6.4-15.6l-13.8-80.7 58.6-57.2c4.4-4.3 5.9-10.6 4-16.4s-6.9-10-12.9-10.9l-81-11.8-36.2-73.4c-2.7-5.5-8.3-8.9-14.3-8.9z"]
            }, t.xK = t.DF
        },
        85194: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fass",
                iconName: "circle-arrow-down",
                icon: [512, 512, ["arrow-circle-down"], "f0ab", "M256 0C397.4 0 512 114.6 512 256s-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0zm17 409L385 297l17-17L368 246.1l-17 17-71 71V120 96H232v24V334.1l-71-71-17-17L110.1 280l17 17L239 409l17 17 17-17z"]
            }, t._o = t.DF
        },
        25913: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fass",
                iconName: "circle-arrow-up",
                icon: [512, 512, ["arrow-circle-up"], "f0aa", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm17-409L385 215l17 17L368 265.9l-17-17-71-71V392v24H232V392 177.9l-71 71-17 17L110.1 232l17-17L239 103l17-17 17 17z"]
            }, t.$w = t.DF
        }
    },
    function(e) {
        e.O(0, [4361, 9721, 2145, 5265, 8608, 2889, 3879, 5441, 286, 8631, 7701, 9761, 5464, 8285, 5221, 1165, 247, 4449, 9416, 7543, 2332, 4578, 121, 9032, 3429, 199, 1932, 9289, 7006, 5168, 9774, 2888, 179], function() {
            return e(e.s = 28579)
        }), _N_E = e.O()
    }
]);