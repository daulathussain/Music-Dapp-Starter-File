"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5168], {
        73334: function(e, t, l) {
            l.d(t, {
                a: function() {
                    return NewHomeFooter
                }
            });
            var n = l(16356),
                s = l(97352),
                i = l(72102),
                o = l(38359),
                r = l(38286),
                a = l(30314),
                d = l(23615),
                c = l(8094),
                u = l(85906),
                x = l(97946),
                m = l(14034),
                h = l(85846);

            function NewHomeFooter() {
                let e = s.useMemo(() => new Date().getFullYear(), []);
                return (0, n.jsxs)("div", {
                    className: "mb-20 flex flex-col",
                    children: [(0, n.jsx)(u.i, {}), (0, n.jsxs)("div", {
                        className: "flex items-center justify-center gap-4 text-neutral400",
                        children: [(0, n.jsx)(x.s, {
                            absoluteUri: h.oG.Twitter,
                            type: "external",
                            children: (0, n.jsx)(i.G, {
                                icon: o.md,
                                size: "sm"
                            })
                        }), (0, n.jsx)(x.s, {
                            absoluteUri: h.oG.Instagram,
                            type: "external",
                            children: (0, n.jsx)(i.G, {
                                icon: r.Zz,
                                size: "sm"
                            })
                        }), (0, n.jsx)(x.s, {
                            absoluteUri: h.oG.Discord,
                            type: "external",
                            children: (0, n.jsx)(i.G, {
                                icon: a.om,
                                size: "sm"
                            })
                        }), (0, n.jsx)(x.s, {
                            absoluteUri: h.oG.Market,
                            type: "external",
                            children: (0, n.jsx)(i.G, {
                                icon: d.vJ,
                                size: "sm"
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mt-2 flex items-center justify-center gap-4 text-base-xs text-neutral400",
                        children: [(0, n.jsx)(x.s, {
                            absoluteUri: h.oG.TOS,
                            type: "external",
                            children: (0, n.jsx)("p", {
                                children: "Terms of Service"
                            })
                        }), (0, n.jsx)(x.s, {
                            absoluteUri: h.oG.TOS,
                            type: "external",
                            children: (0, n.jsx)("p", {
                                children: "Privacy Policy"
                            })
                        })]
                    }), (0, n.jsxs)("div", {
                        className: "mt-2 flex items-center justify-center gap-4 text-base-xs text-neutral400",
                        children: [(0, n.jsx)(x.s, {
                            pathnameUri: h.qy.ArtistApplication,
                            type: "internal",
                            onClick: () => {
                                (0, m.uH)({
                                    event: "Join as an Artist Clicked",
                                    properties: {
                                        sourceComponent: "Landing Page"
                                    }
                                })
                            },
                            children: "For Artists"
                        }), (0, n.jsxs)(c.E6, {
                            wrapperContentProps: {
                                side: "top"
                            },
                            trigger: (0, n.jsx)("p", {
                                className: "cursor-pointer",
                                children: "More"
                            }),
                            children: [(0, n.jsx)(FooterMoreMenuLink, {
                                absoluteUri: h.oG.Blog,
                                type: "external",
                                title: "Blog"
                            }), (0, n.jsx)(FooterMoreMenuLink, {
                                absoluteUri: h.oG.Careers,
                                type: "external",
                                title: "Careers"
                            }), (0, n.jsx)(FooterMoreMenuLink, {
                                absoluteUri: h.oG.Docs,
                                type: "external",
                                title: "Docs"
                            }), (0, n.jsx)(FooterMoreMenuLink, {
                                absoluteUri: h.Bj.Home,
                                type: "external",
                                title: "FAQ"
                            })]
                        }), (0, n.jsxs)("p", {
                            children: ["\xa9 ", e, " Sound.xyz"]
                        })]
                    })]
                })
            }

            function FooterMoreMenuLink(e) {
                let {
                    title: t,
                    ...l
                } = e;
                return (0, n.jsx)(x.s, { ...l,
                    children: (0, n.jsx)(c.Xi, {
                        className: "mt-0 p-0",
                        children: (0, n.jsx)(c.i_, {
                            className: "text-base-xs text-neutral600",
                            children: t
                        })
                    })
                })
            }
        },
        69965: function(e, t, l) {
            l.d(t, {
                pQ: function() {
                    return Seo
                }
            });
            var n = l(16356),
                s = l(97352),
                i = l(13041),
                o = l.n(i),
                r = l(81688),
                a = l(64328);
            let useSetPageTitle = e => {
                    let {
                        defaultTitle: t
                    } = e, {
                        activeTrackId: l,
                        playing: n
                    } = (0, r.PZ)(), {
                        releaseInfo: i
                    } = (0, a.w)({
                        trackId: l,
                        shouldFetch: !0
                    }), [o, d] = s.useState(t);
                    return s.useEffect(() => {
                        n && i && d(i.artist ? `${i.title} • ${i.artist.name}` : i.title)
                    }, [i, n]), s.useEffect(() => {
                        n || d(t)
                    }, [n, o, t]), o
                },
                d = "Sound.xyz",
                Seo = e => {
                    let {
                        title: t = null,
                        description: l = null,
                        twitterHandle: s = null,
                        image: i = null,
                        smallTwitterCard: r,
                        audioUrl: a = null,
                        url: c
                    } = e, u = i || "https://d2i9ybouka0ieh.cloudfront.net/website-content/twitter/og-card-2023.png", x = useSetPageTitle({
                        defaultTitle: t || d
                    });
                    return (0, n.jsxs)(o(), {
                        children: [(0, n.jsx)("title", {
                            children: x
                        }), (0, n.jsx)("meta", {
                            name: "apple-itunes-app",
                            content: "app-id=6446258640"
                        }), ["og:site_name", "og:title", "twitter:title"].map(e => (0, n.jsx)("meta", {
                            property: e,
                            content: t || d
                        }, e)), a && ["og:audio", "og:url", "music:preview_url:url", "music:preview_url:secure_url", "music:preview_url:type"].map(e => (0, n.jsx)("meta", {
                            name: e,
                            content: a
                        }, e)), c ? (0, n.jsx)("meta", {
                            name: "og:url",
                            content: c
                        }, "og:url") : null, ["description", "og:description", "twitter:description"].map(e => (0, n.jsx)("meta", {
                            name: e,
                            content: l || "Discover new music and prove you were the first"
                        }, e)), (0, n.jsx)("meta", {
                            name: "twitter:card",
                            content: r ? "summary" : "summary_large_image"
                        }), s && ["twitter:site", "twitter:creator"].map(e => (0, n.jsx)("meta", {
                            name: e,
                            content: s
                        }, e)), (0, n.jsx)("meta", {
                            name: "twitter:image",
                            content: u
                        }), (0, n.jsx)("meta", {
                            property: "og:image",
                            content: u
                        }), (0, n.jsx)("meta", {
                            name: "robots",
                            content: "index,follow"
                        })]
                    })
                }
        },
        60963: function(e, t, l) {
            l.r(t), l.d(t, {
                TrendingRecommendedFollows: function() {
                    return TrendingRecommendedFollows
                },
                TrendingRecommendedFollowsSkeleton: function() {
                    return TrendingRecommendedFollowsSkeleton
                }
            });
            var n = l(16356);
            l(97352);
            var s = l(21597);
            l(96960);
            var i = l(10228),
                o = l(96220),
                r = l(68753),
                a = l(97946),
                d = l(98335),
                c = l(25347),
                u = l(44718),
                x = l(22181),
                m = l(36750),
                h = l(3928),
                C = l(85846),
                f = l(64571),
                p = l(95390);

            function TrendingRecommendedFollowsSkeleton() {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(UserCellSkeleton, {}), (0, n.jsx)(UserCellSkeleton, {}), (0, n.jsx)(UserCellSkeleton, {}), (0, n.jsx)(UserCellSkeleton, {}), (0, n.jsx)(UserCellSkeleton, {}), (0, n.jsx)(UserCellSkeleton, {})]
                })
            }

            function TrendingRecommendedFollows() {
                let {
                    data: e,
                    isInitialLoading: t
                } = (0, h.aM2)(h.t07, {
                    staleTime: 1 / 0
                });
                if (!t && !(null == e ? void 0 : e.data.trendingPostsRecommendedFollows.length)) return null;
                let l = null == e ? void 0 : e.data.trendingPostsRecommendedFollows;
                return (0, n.jsxs)("div", {
                    className: "hidden w-full flex-00auto flex-col gap-5 lt:flex lt:pl-2",
                    children: [(0, n.jsx)("div", {
                        className: "line-clamp-1 font-title text-title-s font-medium text-base800",
                        children: "Suggested Follows"
                    }), (0, n.jsx)("div", {
                        className: "flex w-full flex-col gap-5",
                        children: t ? (0, n.jsx)(TrendingRecommendedFollowsSkeleton, {}) : null == l ? void 0 : l.map((e, t) => (0, n.jsx)(RecommendedFollowsUserCell, {
                            userFrag: e
                        }, `feed-recommended-follows-people-user-cell-${t}`))
                    })]
                })
            }

            function RecommendedFollowsUserCell(e) {
                let {
                    userFrag: t
                } = e, l = (0, h.S3c)(h.Myj, t), {
                    openModal: m
                } = x.ModalContext.useContainer(), {
                    id: j,
                    webappUri: v,
                    publicAddress: w,
                    username: g,
                    avatar: L,
                    followerCount: b,
                    artist: M
                } = l, y = (0, p.OU)(v), S = !!(null == M ? void 0 : M.id);
                return (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 lt:flex-row",
                    children: [(0, n.jsx)(c.I, {
                        userHoverCardContent: (0, n.jsx)(i.U, {
                            userId: j
                        }),
                        trigger: (0, n.jsx)("div", {
                            className: "aspect-square h-10 w-10 overflow-hidden rounded-full bg-neutral100",
                            children: (0, n.jsx)(r.q, {
                                webappUri: y,
                                username: g,
                                walletAddress: w,
                                src: null == L ? void 0 : L.url,
                                size: 40,
                                borderRadius: 999
                            })
                        }),
                        triggerAsChild: !0
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-0.5",
                        children: [(0, n.jsx)(c.I, {
                            userHoverCardContent: (0, n.jsx)(i.U, {
                                userId: j
                            }),
                            trigger: (0, n.jsx)("div", {
                                children: (0, n.jsxs)(a.s, {
                                    pathnameUri: y,
                                    className: "flex items-center",
                                    children: [(0, n.jsx)("div", {
                                        className: "font-title text-title-xxs font-medium text-base600",
                                        children: g
                                    }), S && (0, n.jsxs)(n.Fragment, {
                                        children: [C.L_, (0, n.jsx)(d.O, {
                                            size: 16
                                        })]
                                    })]
                                })
                            }),
                            triggerAsChild: !0
                        }), (0, n.jsxs)("button", {
                            "aria-label": "Follower Count - Click to view followers",
                            className: "w-fit appearance-none text-base-xs font-medium text-base500 transition-all duration-500 ease-in-out hover:text-base600",
                            onClick: () => {
                                m(x.ModalType.FOLLOWERS_FOLLOWING, {
                                    body: (0, n.jsx)(u.k, {
                                        userId: l.id
                                    })
                                })
                            },
                            children: [(0, s.ZP)(b), C.L_, (0, f.Lo)({
                                word: "follower",
                                count: b
                            })]
                        })]
                    }), (0, n.jsx)(o.e, {
                        sourceLocation: "Activity Feed Recommended Following",
                        userId: j,
                        artistId: null == M ? void 0 : M.id,
                        className: "h-7 w-[71px] min-w-[auto] font-base text-base-s font-semibold"
                    })]
                })
            }

            function UserCellSkeleton() {
                return (0, n.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 lt:flex-row",
                    children: [(0, n.jsx)("div", {
                        className: "animate-pulse rounded-full bg-neutral100",
                        style: {
                            width: 40,
                            height: 40
                        }
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-1 flex-col gap-2",
                        children: [(0, n.jsx)("div", {
                            className: "h-2 w-40 animate-pulse rounded-full bg-neutral100"
                        }), (0, n.jsx)("div", {
                            className: "h-2 w-24 animate-pulse rounded-full bg-neutral100"
                        })]
                    })]
                })
            }(0, m.c)({
                trigger: [h.c4R],
                refetch: h.t07
            })
        },
        20902: function(e, t, l) {
            l.d(t, {
                q: function() {
                    return TwoColumnPage
                }
            });
            var n = l(16356),
                s = l(97352),
                i = l(49542);
            let useIsVisible = e => {
                    let {
                        ref: t
                    } = e, [l, n] = (0, s.useState)(!1);
                    return (0, s.useEffect)(() => {
                        let e = new IntersectionObserver(e => {
                                let [t] = e;
                                t && n(t.isIntersecting)
                            }, {
                                threshold: .1
                            }),
                            l = null == t ? void 0 : t.current;
                        return l && e.observe(l), () => {
                            l && e.unobserve(l)
                        }
                    }, [t]), l
                },
                useScrollDirection = () => {
                    let [e, t] = s.useState(0), [l, n] = s.useState("down"), [i, o] = s.useState(0);
                    return s.useLayoutEffect(() => {
                        let handleScroll = () => {
                            let s = window.pageYOffset || document.documentElement.scrollTop;
                            s > e ? ("down" !== l && o(s), n("down")) : s < e && ("up" !== l && o(s), n("up")), t(s)
                        };
                        return window.addEventListener("scroll", handleScroll), () => {
                            window.removeEventListener("scroll", handleScroll)
                        }
                    }, [e, l]), {
                        scrollDirection: l,
                        scrollPositionWhenDirectionChanged: i
                    }
                };
            var o = l(79320),
                r = l(81688);

            function TwoColumnPage(e) {
                var t, l;
                let {
                    leftContent: a,
                    rightContent: d
                } = e, {
                    scrollDirection: c,
                    scrollPositionWhenDirectionChanged: u
                } = useScrollDirection(), {
                    hideAudioPlayer: x
                } = (0, r.PZ)(), [m, h] = (0, s.useState)(0), [C, f] = (0, s.useState)(void 0), [p, j] = (0, s.useState)(void 0), v = s.useRef(null), w = s.useRef(null), g = s.useRef(null), L = useIsVisible({
                    ref: w
                }), b = useIsVisible({
                    ref: g
                }), {
                    height: M
                } = (0, o.i)(), y = null !== (l = null == v ? void 0 : null === (t = v.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== l ? l : 0, S = null != M ? M : 0, F = !x && y > S - 160, N = (0, s.useCallback)(() => {
                    f(Math.min(12, S - y + 12)), j(void 0), L && h(Math.max(0, u - 80))
                }, [y, L, u, S]), T = (0, s.useCallback)(() => {
                    if (f(void 0), j(S - y - 12), b) {
                        let e = Math.max(0, u - y + (window.innerHeight - 104));
                        h(e)
                    }
                }, [y, b, u, S]);
                return (0, s.useEffect)(() => {
                    "down" === c ? N() : T()
                }, [N, T, c]), (0, n.jsx)("div", {
                    className: "relative flex min-h-page justify-center overflow-x-hidden md:min-h-md-page lt:overflow-x-clip",
                    children: (0, n.jsxs)("div", {
                        className: "flex w-full gap-7 px-4 pb-6 md:px-6 dt:max-w-content",
                        children: [(0, n.jsx)("div", {
                            className: "min-w-0 flex-1",
                            children: a
                        }), d && (0, n.jsxs)("div", {
                            className: "relative hidden h-full min-w-0 flex-[0_0_304px] lt:inline",
                            style: {
                                minHeight: y
                            },
                            children: [(0, n.jsx)("div", {
                                className: "relative flex",
                                style: {
                                    marginTop: m
                                }
                            }), (0, n.jsx)("div", {
                                className: "scrollbar-transparent sticky hidden h-fit min-w-0 overflow-x-hidden lt:flex",
                                style: {
                                    top: C,
                                    bottom: p
                                },
                                children: (0, n.jsxs)("div", {
                                    ref: v,
                                    className: (0, i.default)("flex min-h-screen w-full min-w-0 flex-col", F && "pb-28"),
                                    children: [(0, n.jsx)("div", {
                                        className: "relative",
                                        ref: w
                                    }), d, (0, n.jsx)("div", {
                                        className: "relative",
                                        ref: g
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        6310: function(e, t, l) {
            l.d(t, {
                K: function() {
                    return EmptyUserStat
                }
            });
            var n = l(16356);
            l(97352);
            var s = l(8205);
            let Subtract1 = () => (0, n.jsx)("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.3148 14.2383L0 0L14.2383 16.3148C28.0396 32.1289 28.0396 55.7063 14.2383 71.5204L0 87.8352L16.3148 73.5969C32.1289 59.7956 55.7063 59.7956 71.5204 73.5969L87.8352 87.8352L73.5969 71.5204C59.7956 55.7063 59.7956 32.1289 73.5969 16.3148L87.8352 0L71.5204 14.2383C55.7063 28.0396 32.1289 28.0396 16.3148 14.2383ZM23.3455 23.549L13.4052 13.7493L23.2049 23.6896C34.2925 34.9362 34.2925 53.0025 23.2049 64.2491L13.4052 74.1894L23.3455 64.3897C34.5921 53.3021 52.6584 53.3021 63.9051 64.3897L73.8454 74.1894L64.0456 64.2491C52.9581 53.0025 52.9581 34.9362 64.0456 23.6896L73.8454 13.7493L63.9051 23.549C52.6584 34.6366 34.5921 34.6366 23.3455 23.549Z",
                        fill: "#262626"
                    })
                }),
                Star4 = () => (0, n.jsx)("svg", {
                    width: "125",
                    height: "125",
                    viewBox: "0 0 125 125",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        d: "M62.1086 0L62.7709 23.9865C63.3356 44.4366 79.7809 60.8819 100.231 61.4466L124.218 62.1089L100.231 62.7712C79.7809 63.3359 63.3356 79.7811 62.7709 100.231L62.1086 124.218L61.4463 100.231C60.8816 79.7811 44.4364 63.3359 23.9862 62.7712L-0.000244141 62.1089L23.9862 61.4466C44.4364 60.8819 60.8816 44.4366 61.4463 23.9865L62.1086 0Z",
                        fill: "#262626"
                    })
                }),
                Union1 = () => (0, n.jsx)("svg", {
                    width: "113",
                    height: "112",
                    viewBox: "0 0 113 112",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M55.2547 4.15645C55.2547 8.17776 56.3879 19.0686 56.5549 19.0686C56.7218 19.0686 57.855 8.17776 57.855 4.15645C57.855 0.135144 56.7218 0 56.5549 0C56.3879 0 55.2547 0.135144 55.2547 4.15645ZM59.3849 46.5148C59.3849 36.905 56.9241 19.0687 56.5615 19.0687C56.1988 19.0687 53.738 36.905 53.738 46.5148C53.738 46.6762 53.7387 46.8351 53.74 46.9913C53.3339 46.5515 52.8883 46.0879 52.3997 45.5992C45.6203 38.8199 31.3012 27.9729 31.0454 28.2287C30.7895 28.4845 41.6365 42.8036 48.4159 49.583C49.6634 50.8306 50.7479 51.7974 51.6886 52.5431C50.3652 52.3462 48.6744 52.2219 46.5143 52.2219C36.9045 52.2219 19.0682 54.6828 19.0682 55.0454C19.0682 55.408 36.9045 57.8689 46.5143 57.8689C47.8326 57.8689 48.9761 57.8226 49.968 57.7417C49.4811 58.1867 48.9642 58.6808 48.4159 59.2291C41.6365 66.0085 30.7895 80.3276 31.0454 80.5834C31.3012 80.8392 45.6203 69.9923 52.3997 63.2129C52.9331 62.6794 53.4153 62.1758 53.8508 61.7004C53.7788 62.6494 53.738 63.7334 53.738 64.9715C53.738 74.5812 56.1988 92.4176 56.5615 92.4176C56.9241 92.4176 59.3849 74.5812 59.3849 64.9715C59.3849 63.7219 59.3433 62.6294 59.2701 61.6742C59.7119 62.1572 60.2019 62.6695 60.7451 63.2127C67.5245 69.9921 81.8436 80.8391 82.0994 80.5832C82.3553 80.3274 71.5083 66.0083 64.7289 59.229C64.1805 58.6806 63.6637 58.1865 63.1767 57.7415C64.1293 57.8144 65.2187 57.8559 66.4645 57.8559C76.052 57.8559 93.8471 55.4007 93.8471 55.0389C93.8471 54.6771 76.052 52.222 66.4645 52.222C64.4111 52.222 62.7827 52.3346 61.4914 52.5152C62.4241 51.7733 63.4971 50.815 64.7291 49.5829C71.5085 42.8035 82.3554 28.4844 82.0996 28.2286C81.8438 27.9728 67.5247 38.8198 60.7453 45.5991C60.2477 46.0968 59.7947 46.5684 59.3827 47.0154C59.3842 46.8514 59.3849 46.6845 59.3849 46.5148ZM55.2547 107.33C55.2547 103.308 56.3879 92.4177 56.5549 92.4177C56.7218 92.4177 57.855 103.308 57.855 107.33C57.855 111.351 56.7218 111.486 56.5549 111.486C56.3879 111.486 55.2547 111.351 55.2547 107.33ZM19.0684 55.0522C19.0684 55.2192 8.17751 56.3523 4.15621 56.3523C0.134899 56.3523 -0.000244141 55.2192 -0.000244141 55.0522C-0.000244141 54.8852 0.134899 53.7521 4.15621 53.7521C8.17751 53.7521 19.0684 54.8852 19.0684 55.0522ZM108.725 56.3425C104.713 56.3425 93.847 55.212 93.847 55.0454C93.847 54.8788 104.713 53.7483 108.725 53.7483C112.737 53.7483 112.872 54.8788 112.872 55.0454C112.872 55.212 112.737 56.3425 108.725 56.3425ZM82.0951 80.5878C81.9773 80.7056 88.8611 89.1882 91.698 92.0251C94.5349 94.862 95.4296 94.158 95.5474 94.0402C95.6652 93.9224 96.3693 93.0276 93.5324 90.1907C90.6955 87.3538 82.2129 80.47 82.0951 80.5878ZM21.4471 92.0253C24.2841 89.1884 31.1678 80.7058 31.05 80.588C30.9322 80.4702 22.4497 87.354 19.6127 90.1909C16.7758 93.0278 17.4799 93.9225 17.5977 94.0403C17.7155 94.1581 18.6102 94.8622 21.4471 92.0253ZM31.05 28.2241C31.1678 28.1063 24.2841 19.6238 21.4471 16.7868C18.6102 13.9499 17.7155 14.654 17.5977 14.7718C17.4799 14.8896 16.7758 15.7843 19.6127 18.6213C22.4497 21.4582 30.9322 28.3419 31.05 28.2241ZM91.6982 16.7867C88.8613 19.6237 81.9775 28.1062 82.0953 28.224C82.2131 28.3418 90.6957 21.4581 93.5326 18.6212C96.3695 15.7842 95.6654 14.8895 95.5476 14.7717C95.4298 14.6539 94.5351 13.9498 91.6982 16.7867Z",
                        fill: "#262626"
                    })
                }),
                Wave1 = () => (0, n.jsxs)("svg", {
                    width: "214",
                    height: "102",
                    viewBox: "0 0 214 102",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M42.029 101.969C40.3942 101.972 38.761 101.865 37.1405 101.649C23.8147 99.8723 11.7224 90.9081 0.140153 74.2411L0 74.0393L0.185003 73.8767L75.2788 6.73237L75.4526 7.01829C79.0349 12.6973 82.7854 15.8703 86.9283 16.7113C93.3529 18.0175 99.9569 13.4261 106.342 8.98603C112.823 4.50115 119.528 -0.185564 126.188 1.17111C130.471 2.04006 134.334 5.27479 137.989 11.0603L167.785 29.2858C170.477 29.0605 173.185 29.1244 175.864 29.4764C189.189 31.2535 201.282 40.2177 212.864 56.8846L213.621 57.9778L167.651 29.8464C147.289 31.5899 126.687 48.9071 106.684 65.7591C85.51 83.5921 63.6686 101.969 42.029 101.969ZM0.762431 74.1346C12.1821 90.5325 24.1063 99.3621 37.2021 101.1C60.1872 104.161 83.6375 84.4387 106.309 65.3555C126.137 48.6773 146.555 31.5002 166.855 29.3867L137.585 11.4751L137.551 11.4191C133.969 5.74009 130.219 2.56143 126.053 1.72052C119.629 0.414292 113.025 5.00569 106.639 9.44573C100.159 13.9306 93.4594 18.6173 86.7938 17.2606C82.5612 16.4029 78.749 13.2411 75.1331 7.59572L0.762431 74.1346ZM168.609 29.8015L211.608 56.111C200.396 40.2905 188.651 31.758 175.791 30.0426C173.41 29.7308 171.006 29.6482 168.609 29.7959V29.8015Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M49.8832 87.8752C48.3831 87.8761 46.8846 87.775 45.3983 87.5725C33.603 85.9523 22.9009 77.9468 12.6306 63.0906L13.0959 62.771C23.2429 77.4871 33.8385 85.4197 45.4992 87.0175C65.726 89.7869 86.3621 72.5929 106.32 55.9596C126.379 39.2478 147.115 21.9978 167.583 24.8009C179.401 26.421 190.126 34.4266 200.374 49.2827L199.908 49.6023C189.761 34.8807 179.166 26.9536 167.505 25.3559C147.284 22.5865 126.642 39.7804 106.684 56.4137C88.0832 71.8922 68.8991 87.8752 49.8832 87.8752Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M57.7317 73.7814C56.3849 73.7811 55.0398 73.6855 53.7065 73.4955C43.3857 72.0323 34.0347 64.9799 25.1154 51.9344L25.5751 51.6205C34.4103 64.5145 43.6435 71.4998 53.7962 72.9237C71.2592 75.4016 89.1147 60.736 106.337 46.575C123.676 32.3075 141.605 17.5634 159.309 20.0749C169.63 21.5381 178.981 28.5906 187.9 41.636L187.44 41.95C178.605 29.0559 169.372 22.0707 159.219 20.6467C141.756 18.1688 123.901 32.8344 106.679 46.9955C90.6564 60.181 74.124 73.7814 57.7317 73.7814Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M65.5915 59.6877C64.385 59.6894 63.1801 59.6014 61.9867 59.4242C53.1739 58.1124 45.1684 52.0129 37.5721 40.7839L38.0375 40.498C45.5608 51.5925 53.4206 57.6134 62.0708 58.8972C76.7701 61.0892 91.7832 48.9464 106.325 37.2016C120.952 25.3839 136.077 13.1626 151.017 15.3882C159.83 16.7001 167.836 22.7939 175.432 34.0285L174.967 34.3425C167.443 23.248 159.584 17.227 150.933 15.9432C136.234 13.7569 121.221 25.8941 106.679 37.6389C93.2296 48.4755 79.3601 59.6877 65.5915 59.6877Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M73.4512 45.6051C72.3849 45.6068 71.3202 45.5243 70.2669 45.3584C62.979 44.198 56.3414 39.0515 50.0401 29.6277L50.5054 29.3137C56.717 38.6031 63.2088 43.671 70.3566 44.8034C82.2976 46.6927 94.5134 37.0782 106.331 27.7777C118.238 18.4043 130.555 8.71689 142.737 10.6398C150.025 11.8003 156.663 16.9467 162.964 26.3705L162.493 26.6845C156.287 17.3952 149.795 12.3272 142.647 11.1948C130.712 9.30554 118.491 18.92 106.673 28.2206C95.7803 36.7811 84.5681 45.6051 73.4512 45.6051Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M81.3222 31.5282C80.3826 31.5303 79.4446 31.4497 78.5192 31.2872C72.7113 30.2781 67.4639 26.0791 62.4801 18.4604L62.951 18.152C67.8451 25.6362 72.9691 29.7511 78.6145 30.7378C87.7973 32.3355 97.2043 25.2382 106.303 18.3707C115.497 11.4359 125.005 4.2601 134.429 5.90269C140.237 6.9174 145.484 11.1108 150.462 18.7295L149.997 19.0378C145.103 11.5593 139.979 7.43877 134.334 6.4577C125.145 4.85435 115.744 11.9573 106.645 18.7911C98.376 25.0868 89.8323 31.5282 81.3222 31.5282Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M127.489 1.51059L127.214 1.99857L177.1 30.2113L177.376 29.7233L127.489 1.51059Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M117.156 2.67131L116.695 2.99086L141.639 38.9472L142.1 38.6276L117.156 2.67131Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M106.785 9.21588H106.225V65.5685H106.785V9.21588Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M95.7776 15.48L70.8801 92.2433L71.4134 92.4162L96.3108 15.653L95.7776 15.48Z",
                        fill: "#262626"
                    }), (0, n.jsx)("path", {
                        d: "M85.3736 16.5096L35.5482 101.029L36.0312 101.314L85.8565 16.7943L85.3736 16.5096Z",
                        fill: "#262626"
                    })]
                }),
                VectorWithStars = () => (0, n.jsxs)(i, {
                    children: [(0, n.jsx)(a, {
                        children: (0, n.jsx)(Subtract1, {})
                    }), (0, n.jsx)(r, {
                        children: (0, n.jsx)(Star4, {})
                    }), (0, n.jsx)(o, {
                        children: (0, n.jsx)(Wave1, {})
                    }), (0, n.jsx)(d, {
                        children: (0, n.jsx)(Union1, {})
                    })]
                }),
                i = (0, s.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    width: 228,
                    height: 155
                }),
                o = (0, s.zo)("div", {
                    margin: "0 auto",
                    svg: {
                        width: 220
                    }
                }),
                r = (0, s.zo)("div", {
                    position: "absolute",
                    transform: "translate(-8px, -40px)",
                    svg: {
                        width: 40
                    }
                }),
                a = (0, s.zo)("div", {
                    position: "absolute",
                    transform: "translate(150px, 10px)",
                    svg: {
                        width: 20
                    }
                }),
                d = (0, s.zo)("div", {
                    position: "absolute",
                    transform: "translate(78px, -74px)",
                    svg: {
                        width: 43
                    }
                }),
                EmptyUserStat = e => {
                    let {
                        header: t,
                        subText: l
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "-mt-2 flex h-full w-full flex-col items-center justify-center",
                        children: [(0, n.jsx)(VectorWithStars, {}), (0, n.jsxs)("div", {
                            className: "mt-6 flex flex-col items-center gap-4 text-center",
                            children: [(0, n.jsx)("h3", {
                                className: "max-w-[300px] font-title text-title-m font-medium",
                                children: t
                            }), (0, n.jsx)("div", {
                                className: "max-w-[271px] font-base  text-base-l text-neutral400",
                                children: l
                            })]
                        })]
                    })
                }
        },
        44718: function(e, t, l) {
            l.d(t, {
                k: function() {
                    return FollowersFollowingModal
                }
            });
            var n = l(16356),
                s = l(97352),
                i = l(72102),
                o = l(21597),
                r = l(40612);
            l(96960);
            var a = l(73534);
            let FadeAnimation = e => {
                let {
                    children: t,
                    ...l
                } = e;
                return (0, n.jsx)(a.E.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    ...l,
                    children: t
                })
            };
            var d = l(21922),
                c = l(54668),
                u = l(81992),
                x = l(95095),
                m = l(22181),
                h = l(3928),
                C = l(64571),
                f = l(6310),
                p = l(56949),
                j = l(6289),
                v = l(49542),
                w = l(58285),
                g = l(85787);
            let FadeContainer = e => {
                    let {
                        children: t,
                        ...l
                    } = e;
                    return (0, n.jsx)(g.M, {
                        children: (0, n.jsx)(FadeAnimation, { ...l,
                            children: t
                        })
                    })
                },
                Header = () => (0, n.jsx)("div", {
                    className: "h-[18px]"
                });

            function List(e) {
                let {
                    data: t,
                    loading: l,
                    emptyComponent: i,
                    loadMore: o,
                    onAtTopChange: r,
                    onAtBottomChange: a,
                    renderItem: d
                } = e, [c, u] = (0, s.useState)(), m = !(null == t ? void 0 : t.length), h = (0, s.useMemo)(() => (0, n.jsxs)("div", {
                    className: (0, v.default)("h-6 px-6", !t.length && "mt-[18px]"),
                    children: [(0, n.jsx)(x.T, {}), (0, n.jsx)(x.T, {}), (0, n.jsx)(x.T, {})]
                }), [t.length]), C = (0, s.useCallback)(() => (0, n.jsx)(FadeContainer, {
                    children: l ? h : (0, n.jsx)("div", {
                        className: "h-[18px]"
                    })
                }), [h, l]);
                return m && l ? (0, n.jsx)(FadeContainer, {
                    children: (0, n.jsx)(p.A_, {
                        children: h
                    })
                }) : m ? (0, n.jsx)(FadeContainer, {
                    children: (0, n.jsx)(p.A_, {
                        children: i
                    })
                }) : (0, n.jsx)(FadeContainer, {
                    children: (0, n.jsx)(p.A_, {
                        ref: e => {
                            e && u(e)
                        },
                        empty: m,
                        children: (0, n.jsx)(w.OO, {
                            data: t,
                            itemContent: d,
                            defaultItemHeight: 52,
                            atTopThreshold: 18,
                            atBottomThreshold: 26,
                            customScrollParent: c,
                            endReached: o,
                            components: {
                                Header,
                                Footer: C
                            },
                            atTopStateChange: e => r(e),
                            atBottomStateChange: e => a(e)
                        })
                    })
                })
            }
            let FollowersFollowingModal = e => {
                var t, l, s, a, v;
                let {
                    userId: w
                } = e, {
                    closeCancelModal: g
                } = (0, m.useModal)(), {
                    data: L,
                    status: b
                } = (0, h.aM2)(h.pxj, {
                    variables: {
                        userId: w
                    },
                    staleTime: 1 / 0
                }), M = null == L ? void 0 : L.data.user, {
                    followerUsersData: y,
                    followersLoading: S,
                    followersLoadMore: F,
                    followingUsersData: N,
                    followingLoading: T,
                    followingLoadMore: U
                } = (0, j.a4)({
                    publicAddress: null == M ? void 0 : M.publicAddress
                }), k = null !== (t = null == M ? void 0 : M.followerCount) && void 0 !== t ? t : 0, Z = null !== (l = null == M ? void 0 : M.followingCount) && void 0 !== l ? l : 0, _ = `${k?`${(0,o.ZP)(k)} `:""}${(0,C.Lo)({count:k,word:"follower"})}`, E = `${Z?`${(0,o.ZP)(Z)} `:""}following`, R = (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(u.I5, {
                        value: "followers",
                        children: (0, n.jsx)(List, {
                            data: y,
                            loading: S || "loading" === b,
                            loadMore: F,
                            onAtTopChange: () => null,
                            onAtBottomChange: () => null,
                            emptyComponent: (0, n.jsx)(f.K, {
                                header: p.G,
                                subText: (0, p.fr)(null !== (s = null == M ? void 0 : M.username) && void 0 !== s ? s : "")
                            }),
                            renderItem: (e, t) => {
                                let {
                                    userA: l
                                } = (0, h.S3c)(h.hXV, t);
                                return (0, n.jsx)(FadeAnimation, {
                                    className: "px-6",
                                    transition: {
                                        duration: .1
                                    },
                                    children: (0, n.jsx)(x.p, {
                                        user: l,
                                        sourceLocation: "Followers Modal"
                                    })
                                }, `user-${l.id}-${e}`)
                            }
                        })
                    }), (0, n.jsx)(u.I5, {
                        value: "following",
                        children: (0, n.jsx)(List, {
                            data: N,
                            loading: T || "loading" === b,
                            loadMore: U,
                            onAtTopChange: () => null,
                            onAtBottomChange: () => null,
                            emptyComponent: (0, n.jsx)(f.K, {
                                header: (0, p.U1)(null !== (a = null == M ? void 0 : M.username) && void 0 !== a ? a : ""),
                                subText: (0, p.Vb)(null !== (v = null == M ? void 0 : M.username) && void 0 !== v ? v : "")
                            }),
                            renderItem: (e, t) => {
                                let {
                                    userB: l
                                } = (0, h.S3c)(h.TgA, t);
                                return (0, n.jsx)(FadeAnimation, {
                                    className: "px-6",
                                    transition: {
                                        duration: .1
                                    },
                                    children: (0, n.jsx)(x.p, {
                                        user: l,
                                        sourceLocation: "Following Modal"
                                    })
                                }, `user-${l.id}-${e}`)
                            }
                        })
                    })]
                });
                return (0, n.jsx)(u.mQ, {
                    defaultValue: "followers",
                    children: (0, n.jsx)(c.Z, {
                        bodyClassName: "p-0",
                        containerClassName: "pb-0",
                        subHeader: (0, n.jsx)("div", {
                            className: "flex flex-1 items-center justify-between pb-0",
                            children: (0, n.jsxs)(u.td, {
                                className: "relative [&>button]:-mb-[1px]",
                                children: [(0, n.jsx)(u.Ur, {
                                    label: _,
                                    value: "followers"
                                }), (0, n.jsx)(u.Ur, {
                                    label: E,
                                    value: "following"
                                }), (0, n.jsx)(d.h, {
                                    className: "absolute bottom-1 right-0 flex",
                                    icon: (0, n.jsx)(i.G, {
                                        icon: r.g8,
                                        size: "lg"
                                    }),
                                    onClick: g
                                })]
                            })
                        }),
                        body: R
                    })
                })
            }
        },
        56949: function(e, t, l) {
            l.d(t, {
                A_: function() {
                    return o
                },
                G: function() {
                    return r
                },
                Jd: function() {
                    return d
                },
                Sy: function() {
                    return a
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
                    return i
                }
            });
            var n = l(8205),
                s = l(26225);
            let i = 10,
                o = (0, n.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "396px",
                    overflow: "auto",
                    height: "396px",
                    ...s.WZ,
                    variants: {
                        empty: {
                            true: {
                                overflow: "hidden"
                            }
                        }
                    }
                }),
                r = "Looking for followers?",
                FOLLOWERS_EMPTY_SUBTEXT = e => `When someone follows ${e}, they'll show up here`,
                FOLLOWING_EMPTY_HEADER = e => `${e} isn't following anyone`,
                FOLLOWING_EMPTY_SUBTEXT = e => `When ${e} follows someone, they’ll show up here.`,
                a = "This channel doesn't have any members yet",
                d = "When someone joins, they'll show up here"
        }
    }
]);