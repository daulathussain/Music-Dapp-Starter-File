"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [859], {
        52803: function(e, t, i) {
            i.d(t, {
                Cw: function() {
                    return b
                },
                PR: function() {
                    return ReleasesPlaylistList
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(49542),
                n = i(15311),
                s = i(22181),
                r = i(85846),
                o = i(34948),
                d = i(11817),
                c = i(42090);
            let FeaturedReleasePills = e => {
                let {
                    featuredReleases: t,
                    totalOtherReleases: i,
                    hasOtherReleases: p,
                    playlistId: u,
                    actionType: x,
                    actionId: f,
                    forceMobileView: h
                } = e, m = t.length, {
                    openModal: v
                } = s.ModalContext.useContainer(), g = t.map((e, t) => (0, l.jsxs)(l.Fragment, {
                    children: [1 !== m && t === m - 1 && !p && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(d.IG, {
                            children: "and"
                        }), r.L_]
                    }), (0, l.jsx)("div", {
                        className: "mx-1 flex items-center",
                        children: (0, l.jsx)(o.OO, {
                            release: e
                        })
                    }), t === m - 1 && p && (0, l.jsx)(c.B, {
                        forceMobileView: h,
                        count: i,
                        onClick: () => {
                            v(s.ModalType.PLAYLIST_ACTIONS, {
                                body: (0, l.jsx)(n.p, {
                                    actionId: f,
                                    type: x,
                                    playlistId: u
                                })
                            })
                        }
                    })]
                }));
                return (0, l.jsx)("div", {
                    className: (0, a.default)("hidden", !h && "lg:flex lg:items-center"),
                    children: g
                }, f)
            };
            var p = i(33423),
                u = i(43158),
                x = i(3928),
                f = i(95390),
                h = i(32185),
                m = i(55614),
                v = i(49918),
                g = i(14542);
            let b = {
                    RELEASE_ADDED: "added",
                    RELEASE_REMOVED: "removed"
                },
                ReleasesPlaylistList = e => {
                    var t;
                    let {
                        userFrag: i,
                        playlistFrag: o,
                        featuredReleases: b,
                        isoDateString: j,
                        releaseCount: y,
                        actionType: w,
                        actionId: L,
                        ...M
                    } = e, {
                        id: C,
                        name: S,
                        webappUri: k
                    } = (0, x.S3c)(x.gKo, o), R = "playlistFeed" in M && M.playlistFeed, V = "releaseFeed" in M && M.releaseFeed, {
                        laptop: F,
                        tabletLandscape: A,
                        tablet: I,
                        desktop: z
                    } = u.MediaQuery.useContainer(), N = V && F && !z || !!R, {
                        openModal: U
                    } = s.ModalContext.useContainer(), O = N ? y > 1 : F ? y > 3 : A ? y > 2 : y > 1, T = O ? N ? 1 : F ? 2 : 1 : N ? 1 : F ? 3 : A ? 2 : 1, P = b ? (0, x.S3c)(x.FTq, b[0]) : null, {
                        avatar: E,
                        username: Z,
                        publicAddress: B,
                        webappUri: D
                    } = (0, x.S3c)(x.hns, i), _ = F && !N ? y - T : y - 1, G = !!P && !!P.coverImage.url && (0, l.jsx)(d.Of, {
                        forceMobileView: N,
                        children: (0, l.jsx)(p.g, {
                            playButtonSize: I ? "m" : "s",
                            releaseFrag: P
                        })
                    }), W = (0, l.jsx)(d.jA, {
                        margin: "first",
                        className: (0, a.default)(N && !!R && "[&_h3]:text-base-s"),
                        children: (0, l.jsx)(m.w, {
                            userFrag: i,
                            forceMobileView: N
                        })
                    }), $ = (0, l.jsx)(d.IG, {
                        children: "this Sound"
                    });
                    return (0, l.jsxs)(d.ZH, {
                        children: [G, V && (0, l.jsx)(g.w, {
                            src: null == E ? void 0 : E.url,
                            username: Z,
                            walletAddress: B,
                            userWebappUri: D,
                            forceMobileView: N
                        }), (0, l.jsxs)(h.y, {
                            isoDateString: j,
                            truncateChildren: !0,
                            forceMobileView: N,
                            children: [W, (0, l.jsx)(d.IG, {
                                forceMobileView: N && !!R,
                                children: w
                            }), r.L_, V && $, !V && !!b && (0, l.jsx)(FeaturedReleasePills, {
                                featuredReleases: b.slice(0, T),
                                totalOtherReleases: _,
                                hasOtherReleases: O,
                                playlistId: C,
                                actionType: w,
                                actionId: L,
                                forceMobileView: N
                            }), P && (null === (t = P.artist) || void 0 === t ? void 0 : t.name) && (!A || N) && !V && (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(v.q, {
                                    releaseTitle: null == P ? void 0 : P.title,
                                    releaseUri: P.webappUri,
                                    artist: {
                                        artistName: P.artist.name,
                                        artistUri: P.artist.webappUri
                                    },
                                    forceMobileView: N
                                }, P.id)
                            }), O && (!A || N) && !V && (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(c.B, {
                                    count: _,
                                    forceMobileView: N,
                                    onClick: () => {
                                        U(s.ModalType.PLAYLIST_ACTIONS, {
                                            body: (0, l.jsx)(n.p, {
                                                actionId: L,
                                                type: w,
                                                playlistId: C
                                            })
                                        })
                                    }
                                })
                            }), !R && (0, l.jsxs)(l.Fragment, {
                                children: [r.L_, (0, l.jsx)(d.IG, {
                                    children: "added" === w ? "to" : "from"
                                }), r.L_, (0, l.jsx)(d.gN, {
                                    pathnameUri: (0, f.OU)(k),
                                    children: (0, l.jsx)(d.IG, {
                                        className: "playlist-name",
                                        black: !0,
                                        children: S
                                    })
                                })]
                            })]
                        })]
                    })
                }
        },
        71353: function(e, t, i) {
            i.d(t, {
                K: function() {
                    return f
                },
                P: function() {
                    return SingleReleaseList
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(32185),
                n = i(55614),
                s = i(49918),
                r = i(34948),
                o = i(14542),
                d = i(33423),
                c = i(43158),
                p = i(3928),
                u = i(85846),
                x = i(11817);
            let f = {
                    RELEASE_LIKED: "liked",
                    RLEASE_UNLIKED: "unliked",
                    RELEASE_DROPPED: "dropped"
                },
                SingleReleaseList = e => {
                    let {
                        userFrag: t,
                        releaseFrag: i,
                        isoDateString: f,
                        action: h,
                        releaseFeed: m = !1,
                        hideArtist: v = !1
                    } = e, {
                        tabletLandscape: g,
                        tablet: b,
                        laptop: j,
                        desktop: y
                    } = c.MediaQuery.useContainer(), w = m && j && !y, L = (0, p.S3c)(p.FTq, i), M = m ? `${h} this Sound` : h, {
                        avatar: C,
                        username: S,
                        publicAddress: k,
                        webappUri: R
                    } = (0, p.S3c)(p.hns, t), V = null == L ? void 0 : L.title, F = null == L ? void 0 : L.artist.name, A = null == L ? void 0 : L.artist.webappUri, I = (0, l.jsx)(x.jA, {
                        margin: "first",
                        children: (0, l.jsx)(n.w, {
                            userFrag: t,
                            forceMobileView: w
                        })
                    });
                    return (0, l.jsxs)(x.ZH, {
                        children: [!!L && !g && !m && (0, l.jsx)(x.Of, {
                            children: (0, l.jsx)(d.g, {
                                playButtonSize: b ? "m" : "s",
                                releaseFrag: L
                            })
                        }), m && (0, l.jsx)(o.w, {
                            src: null == C ? void 0 : C.url,
                            username: S,
                            walletAddress: k,
                            userWebappUri: R,
                            forceMobileView: w
                        }), (0, l.jsxs)(a.y, {
                            isoDateString: f,
                            truncateChildren: !0,
                            forceMobileView: w,
                            children: [I, (0, l.jsx)(x.IG, {
                                children: M
                            }), !m && !!i && (0, l.jsx)(x.D8, {
                                media: "tabletLandscape",
                                children: (0, l.jsx)(x.jA, {
                                    children: (0, l.jsx)(r.OO, {
                                        release: i,
                                        hideArtist: v
                                    })
                                })
                            }), !!V && A && !!F && !g && !m && (0, l.jsxs)(l.Fragment, {
                                children: [u.L_, (0, l.jsx)(s.q, {
                                    releaseTitle: V,
                                    releaseUri: L.webappUri,
                                    artist: v ? null : {
                                        artistName: F,
                                        artistUri: A
                                    }
                                })]
                            })]
                        })]
                    })
                }
        },
        33037: function(e, t, i) {
            i.d(t, {
                u: function() {
                    return EmptyState
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(8205);
            let EmptyState = () => (0, l.jsxs)(n, {
                    children: [(0, l.jsx)(s, {}), (0, l.jsx)(r, {
                        children: "No Activity"
                    })]
                }),
                n = (0, a.zo)("div", {
                    position: "relative",
                    width: "100%",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40
                }),
                s = (0, a.zo)("div", {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    maskImage: "url(/star.png)",
                    maskSize: "34px",
                    background: "radial-gradient(60% 80% at 5% 10%, rgba(255, 255, 255, 0) 0%, #FFFFFF 80%), rgba(0,0,0, 0.5)",
                    transform: "rotate(180deg) matrix(-1, 0, 0, 1, 0, 0)",
                    width: "100%",
                    height: "100%"
                }),
                r = (0, a.zo)("div", {
                    position: "relative",
                    fontSize: 18,
                    fontWeight: 400,
                    color: "$neutral400",
                    textAlign: "center",
                    marginTop: -90
                })
        },
        32185: function(e, t, i) {
            i.d(t, {
                y: function() {
                    return ListContent
                }
            });
            var l = i(16356),
                a = i(97352),
                n = i(8205),
                s = i(88343),
                r = i(43158),
                o = i(83835);
            let ListContent = e => {
                    let {
                        children: t,
                        isoDateString: i,
                        truncateChildren: n = !1,
                        forceMobileView: c = !1
                    } = e, [u, x] = a.useState(!1), f = a.useRef(null), {
                        tabletLandscape: h
                    } = r.MediaQuery.useContainer(), m = h ? 50 : 40;
                    return (0, o.G)(() => {
                        if (n && f.current) {
                            let {
                                clientHeight: e
                            } = f.current;
                            x(e > m + 1)
                        }
                    }, [m, f, n]), (0, l.jsxs)(d, {
                        ref: f,
                        children: [(0, l.jsx)(p, {
                            forceMobileView: c,
                            overflow: u,
                            lineClamp: u,
                            children: t
                        }), (0, l.jsx)(s.E, {
                            timeStamp: i,
                            className: "!text-base-xs text-base400"
                        })]
                    })
                },
                d = (0, n.zo)("div", {
                    display: "flex",
                    lineHeight: "18px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: 8,
                    "@tablet": {
                        lineHeight: "unset",
                        gap: "unset"
                    }
                }),
                c = {
                    whiteSpace: "nowrap",
                    maxWidth: 90,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    "@tabletLandscape": {
                        maxWidth: 150
                    },
                    "@laptop": {
                        maxWidth: 200
                    }
                },
                p = (0, n.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontFamily: "$base",
                    color: "$neutral500",
                    maxWidth: "100%",
                    variants: {
                        forceMobileView: {
                            false: {
                                "@tablet": {
                                    flexWrap: "nowrap",
                                    display: "inline-flex",
                                    overflow: "visible"
                                }
                            }
                        },
                        overflow: {
                            true: {}
                        },
                        lineClamp: {
                            true: {}
                        }
                    },
                    compoundVariants: [{
                        forceMobileView: !1,
                        lineClamp: !0,
                        css: {
                            display: "-webkit-box",
                            "-webkit-line-clamp": 2,
                            "-webkit-box-orient": "vertical",
                            "@tabletLandscape": {
                                display: "flex"
                            }
                        }
                    }, {
                        forceMobileView: !1,
                        overflow: !0,
                        css: {
                            ".release-title": { ...c
                            },
                            ".artist-name": { ...c
                            },
                            ".playlist-name": { ...c
                            }
                        }
                    }]
                })
        },
        55614: function(e, t, i) {
            i.d(t, {
                w: function() {
                    return ListMinimalUser
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(50509),
                n = i(43158);
            let ListMinimalUser = e => {
                let {
                    userFrag: t,
                    forceMobileView: i = !1
                } = e, {
                    tabletLandscape: s,
                    tablet: r
                } = n.MediaQuery.useContainer();
                return (0, l.jsx)(a.gM, {
                    userFrag: t,
                    avatarSize: r && !i ? 48 : 40,
                    hideAvatar: !s || i,
                    verifiedSize: r ? 20 : 12,
                    gap: r && !i ? 8 : 4,
                    borderRadius: 1e3,
                    imagePriority: !1
                })
            }
        },
        74057: function(e, t, i) {
            i.d(t, {
                h: function() {
                    return Refresh
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(72102),
                n = i(85787),
                s = i(73534),
                r = i(67720),
                o = i(41684),
                d = i(8205),
                c = i(21922);
            let p = (0, d.F4)({
                to: {
                    transform: "rotate(1turn)"
                }
            });

            function Refresh(e) {
                let {
                    showRefreshSuccess: t,
                    isFetchingNewActivity: i,
                    refetch: d
                } = e;
                return (0, l.jsx)(n.M, {
                    mode: "wait",
                    children: (0, l.jsx)(s.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        style: {
                            marginLeft: "auto"
                        },
                        children: (0, l.jsx)(u, {
                            size: 20,
                            css: {
                                animation: i ? `${p} 1s linear infinite` : "none"
                            },
                            onClick: d,
                            icon: (0, l.jsx)(a.G, {
                                icon: t ? o.faCircleCheck : r.QD,
                                size: "lg"
                            })
                        })
                    }, t ? "success" : "regular")
                })
            }
            let u = (0, d.zo)(c.h, {
                display: "none",
                "&:hover": {
                    backgroundColor: "transparent"
                },
                "@tablet": {
                    display: "flex"
                }
            })
        },
        49918: function(e, t, i) {
            i.d(t, {
                q: function() {
                    return ReleaseInfo
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(8205),
                n = i(97946),
                s = i(95390),
                r = i(11817);
            let o = (0, a.zo)(n.s, {
                    display: "inline-flex"
                }),
                ReleaseInfo = e => {
                    let {
                        releaseTitle: t,
                        releaseUri: i,
                        artist: a,
                        forceMobileView: n
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(o, {
                            pathnameUri: (0, s.OU)(i),
                            children: (0, l.jsxs)(r.IG, {
                                forceMobileView: n,
                                black: !0,
                                className: "release-title",
                                children: [t, "\xa0"]
                            })
                        }), !!a && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r.IG, {
                                forceMobileView: n,
                                black: !0,
                                children: "-\xa0"
                            }), (0, l.jsx)(o, {
                                pathnameUri: (0, s.OU)(a.artistUri),
                                children: (0, l.jsx)(r.IG, {
                                    forceMobileView: n,
                                    black: !0,
                                    className: "artist-name",
                                    children: a.artistName
                                })
                            })]
                        })]
                    })
                }
        },
        34948: function(e, t, i) {
            i.d(t, {
                AF: function() {
                    return u
                },
                OO: function() {
                    return ReleasePill
                }
            });
            var l = i(16356);
            i(97352), i(96960);
            var a = i(8205),
                n = i(33423),
                s = i(44456),
                r = i(97946),
                o = i(98038),
                d = i(3928),
                c = i(81688),
                p = i(95390);
            let u = 32,
                ReleasePill = e => {
                    let {
                        release: t,
                        goldenEgg: i = !1,
                        hideArtist: a = !1
                    } = e, u = (0, d.S3c)(d.FTq, t), {
                        title: m,
                        artist: v,
                        track: {
                            id: g
                        }
                    } = u, b = a ? m : `${m} - ${null==v?void 0:v.name}`, {
                        playing: j,
                        activeTrackId: y
                    } = (0, c.PZ)();
                    return (0, l.jsxs)(x, {
                        className: "group",
                        goldenEgg: i,
                        children: [(0, l.jsx)(n.g, {
                            releaseFrag: u,
                            playButtonSize: "xs"
                        }), (0, l.jsxs)(s.$, {
                            children: [g === y && j && (0, l.jsx)(s.j, {
                                smallBars: !0,
                                size: "xs"
                            }), (0, l.jsx)(r.s, {
                                pathnameUri: (0, p.OU)(u.webappUri),
                                children: (0, l.jsx)(f, {
                                    children: b
                                })
                            })]
                        }), i && (0, l.jsx)(h, {
                            children: (0, l.jsx)(o.n, {
                                width: 38
                            })
                        })]
                    })
                },
                x = (0, a.zo)("div", {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    maxHeight: 20,
                    gap: 8,
                    h2: {
                        title: "XS",
                        fontWeight: 500,
                        maxWidth: 190,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    },
                    svg: {
                        filter: "drop-shadow(0px 2px 5px rgba(217, 166, 37, 0.8))"
                    },
                    "@tablet": {
                        gap: 10,
                        background: "$neutral100",
                        padding: 9,
                        borderRadius: 8,
                        maxHeight: 48
                    },
                    "&:hover": {
                        shadow: "M"
                    },
                    "@tabletLandscape": {
                        "&:hover": {
                            cursor: "pointer"
                        }
                    },
                    variants: {
                        goldenEgg: {
                            true: {
                                paddingRight: 32
                            }
                        }
                    }
                }),
                f = (0, a.zo)("h2", {
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    maxWidth: "100%"
                }),
                h = (0, a.zo)("div", {
                    position: "absolute",
                    right: -2,
                    top: -4
                })
        },
        14542: function(e, t, i) {
            i.d(t, {
                w: function() {
                    return ToggledAvatar
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(44361),
                n = i(68753),
                s = i(11817);
            let ToggledAvatar = e => {
                let {
                    src: t,
                    username: i,
                    walletAddress: r,
                    userWebappUri: o,
                    forceMobileView: d = !1
                } = e;
                return (0, l.jsx)("div", {
                    className: (0, a.m)("mr-2 inline-flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-full md:h-12 md:w-12", !d && "lg:hidden"),
                    children: (0, l.jsx)(n.q, {
                        src: t,
                        username: i,
                        walletAddress: r,
                        size: s.vP,
                        borderRadius: 8,
                        webappUri: o
                    })
                })
            }
        },
        42090: function(e, t, i) {
            i.d(t, {
                B: function() {
                    return TotalOtherText
                },
                m: function() {
                    return r
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(8205),
                n = i(85846),
                s = i(11817);
            let TotalOtherText = e => {
                    let {
                        count: t,
                        onClick: i,
                        forceMobileView: a
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(s.IG, {
                            forceMobileView: a,
                            children: [n.L_, "and"]
                        }), n.L_, (0, l.jsxs)(r, {
                            forceMobileView: a,
                            onClick: i,
                            children: [t, " more"]
                        })]
                    })
                },
                r = (0, a.zo)("button", {
                    base: "S",
                    outline: "none",
                    border: "none",
                    fontStyle: "semibold",
                    color: "$neutral900",
                    cursor: "pointer",
                    "@tablet": {
                        base: "M",
                        fontStyle: "semibold",
                        color: "$neutral900"
                    },
                    "@tabletLandscape": {
                        base: "L",
                        fontStyle: "semibold",
                        color: "$neutral900"
                    },
                    "&:hover": {
                        color: "$neutral500"
                    },
                    variants: {
                        forceMobileView: {
                            true: {
                                base: "S"
                            }
                        }
                    }
                })
        },
        65571: function(e, t, i) {
            i.d(t, {
                _: function() {
                    return FeedListUsername
                },
                e: function() {
                    return FeedActivityContainer
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(44361),
                n = i(88343),
                s = i(98335),
                r = i(85846);
            let FeedActivityContainer = e => {
                    let {
                        children: t,
                        timestamp: i,
                        className: s
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: (0, a.m)(" flex w-full items-center justify-between py-3 text-base-s md:border-b md:border-base200 md:py-4 md:text-base-m lg:text-base-l", s),
                        children: [t, (0, l.jsx)(n.E, {
                            timeStamp: i,
                            className: "!text-base-xs text-base400"
                        })]
                    })
                },
                FeedListUsername = e => {
                    let {
                        username: t,
                        isArtist: i
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "inline-flex items-center",
                        children: [(0, l.jsx)("span", {
                            className: "max-w-[110px] overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-base800 2xl:max-w-[250px]",
                            children: t
                        }), i && (0, l.jsxs)(l.Fragment, {
                            children: [r.L_, (0, l.jsx)("span", {
                                className: "hidden md:block",
                                children: (0, l.jsx)(s.O, {})
                            }), (0, l.jsx)("span", {
                                className: "block md:hidden",
                                children: (0, l.jsx)(s.O, {
                                    size: 12
                                })
                            })]
                        }), r.L_]
                    })
                }
        },
        11817: function(e, t, i) {
            i.d(t, {
                BX: function() {
                    return fadeInAnimation
                },
                D8: function() {
                    return u
                },
                GP: function() {
                    return x
                },
                IG: function() {
                    return c
                },
                Of: function() {
                    return p
                },
                R3: function() {
                    return r
                },
                ZH: function() {
                    return FeedListViewContainer
                },
                gN: function() {
                    return f
                },
                jA: function() {
                    return d
                },
                vP: function() {
                    return o
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(49542),
                n = i(8205),
                s = i(97946);
            let r = 40,
                o = 48,
                FeedListViewContainer = e => {
                    let {
                        children: t,
                        spaceBetween: i
                    } = e;
                    return (0, l.jsx)("div", {
                        className: (0, a.default)("flex w-full items-center py-3 text-base-s md:border-b md:border-base200  md:py-4 md:text-base-m lg:text-base-l", i && "justify-between"),
                        children: t
                    })
                },
                d = (0, n.zo)("div", {
                    display: "inline-flex",
                    alignItems: "center",
                    "@tablet": {
                        display: "flex"
                    },
                    "@tabletLandscape": {
                        display: "flex",
                        marginX: 8
                    },
                    variants: {
                        margin: {
                            first: {
                                marginLeft: 0,
                                "&:after": {
                                    content: " ",
                                    whiteSpace: "pre"
                                },
                                "@tablet": {
                                    marginRight: 6,
                                    "&:after": {
                                        content: "unset",
                                        whiteSpace: "unset"
                                    }
                                }
                            }
                        }
                    }
                }),
                c = (0, n.zo)("span", {
                    base: "S",
                    fontStyle: "regular",
                    color: "$neutral500",
                    lineHeight: "18px",
                    "@tablet": {
                        base: "M",
                        color: "$neutral500",
                        whiteSpace: "nowrap"
                    },
                    "@tabletLandscape": {
                        base: "L",
                        color: "$neutral500"
                    },
                    variants: {
                        black: {
                            true: {
                                fontStyle: "semibold",
                                color: "$neutral900"
                            }
                        },
                        bold: {
                            true: {
                                fontStyle: "semibold"
                            }
                        },
                        time: {
                            true: {
                                "@tabletLandscape": {
                                    base: "M",
                                    color: "$neutral500"
                                }
                            }
                        },
                        cursor: {
                            true: {
                                cursor: "pointer"
                            }
                        },
                        forceMobileView: {
                            true: {
                                base: "S",
                                lineHeight: "18px"
                            }
                        }
                    }
                }),
                fadeInAnimation = e => {
                    let {
                        duration: t,
                        delay: i
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
                            delay: i
                        }
                    }
                },
                p = (0, n.zo)("div", {
                    display: "inline-flex",
                    flexShrink: 0,
                    width: r,
                    height: r,
                    overflow: "hidden",
                    borderRadius: 4,
                    marginRight: 8,
                    variants: {
                        forceMobileView: {
                            true: {
                                "@tabletLandscape": {
                                    display: "inline-flex"
                                }
                            }
                        }
                    },
                    "@tablet": {
                        display: "flex",
                        alignItems: "center",
                        width: o,
                        height: o
                    },
                    "@tabletLandscape": {
                        display: "none"
                    }
                }),
                u = (0, n.zo)("div", {
                    display: "none",
                    alignItems: "baseline",
                    variants: {
                        display: {
                            inline: {
                                display: "inline-block"
                            },
                            flex: {
                                display: "flex"
                            }
                        },
                        media: {
                            tablet: {
                                "@tablet": {
                                    display: "inline-block"
                                }
                            },
                            notTablet: {
                                display: "inline-block",
                                "@tablet": {
                                    display: "none"
                                }
                            },
                            tabletLandscape: {
                                "@tabletLandscape": {
                                    display: "inline-block"
                                }
                            },
                            notTabletLandscape: {
                                display: "inline-block",
                                "@tabletLandscape": {
                                    display: "none"
                                }
                            },
                            laptop: {
                                "@laptop": {
                                    display: "inline-block"
                                }
                            },
                            notLaptop: {
                                display: "inline-block",
                                "@laptop": {
                                    display: "none"
                                }
                            }
                        },
                        forceMobileView: {
                            true: {}
                        }
                    },
                    compoundVariants: [{
                        display: "flex",
                        media: "tablet",
                        css: {
                            display: "none",
                            "@tablet": {
                                display: "flex"
                            },
                            "@tabletLandscape": {
                                display: "none"
                            }
                        }
                    }, {
                        display: "flex",
                        media: "tablet",
                        forceMobileView: !0,
                        css: {
                            display: "flex"
                        }
                    }, {
                        display: "flex",
                        media: "notTablet",
                        css: {
                            display: "flex",
                            "@tablet": {
                                display: "none"
                            }
                        }
                    }, {
                        display: "flex",
                        media: "notTabletLandscape",
                        css: {
                            display: "flex",
                            "@tabletLandscape": {
                                display: "none"
                            }
                        }
                    }, {
                        display: "inline",
                        media: "notTabletLandscape",
                        css: {
                            display: "inline-block",
                            "@tabletLandscape": {
                                display: "none"
                            }
                        }
                    }]
                }),
                x = (0, n.zo)("div", {
                    display: "inline-flex",
                    alignItems: "center",
                    height: "12px",
                    verticalAlign: "middle",
                    transform: "scale(0.7)",
                    svg: {
                        filter: "drop-shadow(0px 2px 5px rgba(217, 166, 37, 0.6))"
                    }
                }),
                f = (0, n.zo)(s.s, {
                    display: "inline-flex",
                    "@tablet": {
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                })
        },
        75196: function(e, t, i) {
            i.d(t, {
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
            var l = i(16356);
            i(97352);
            var a = i(78924);
            let Box3D = e => (0, l.jsxs)("svg", {
                width: 116,
                height: 124,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M98.182 95.23V42.41l-8.814-5.086-9.338 5.25V31.935l-9.338-5.389L52.414 16 15.457 37.324 6.646 42.41v10.425l8.814 5.262-8.814 5.163v31.97l8.814 5.086 27.319 15.764 9.636 5.56 9.635-5.56v-11.12l8.643 6.133 18.676-10.777 8.814-5.086ZM62.05 73.586 80.262 63.26v21.247L62.049 94.833V73.586Zm-19.271 0L24.565 63.26v21.247l18.213 10.326V73.586Zm27.914-25.764L52.414 58.097l-18.28-10.275 18.28-10.498 18.278 10.498Z",
                    fill: "#fff"
                }), (0, l.jsx)("path", {
                    d: "M98.182 42.41v52.82l-8.814 5.086-18.676 10.777m27.49-68.683-8.814 5.086-18.676 10.777-8.643 4.987-9.636 5.56m45.77-26.41-8.815-5.086-9.338 5.25M52.413 121.64V68.82m0 52.82-9.635-5.56-27.32-15.764-8.813-5.086V63.26m45.768 58.38 9.636-5.56v-11.12M6.645 42.41l8.814 5.086L42.778 63.26l9.636 5.56M6.643 42.41v10.425l8.815 5.262M6.645 42.41l8.814-5.086L52.413 16l18.28 10.547 9.337 5.389M15.458 58.097l9.107 5.163m-9.107-5.163L6.646 63.26m8.814 26.41 27.319 15.29V94.833m-27.32-5.163 9.107-5.163m-9.107 5.163V68.82m64.804-5.56L62.049 73.586v21.247M80.262 63.26l9.106-5.163V89.67m-9.106-26.41v21.247m0 0 9.106 5.163m-9.106-5.163L62.049 94.833M24.565 63.26l18.213 10.326v21.247M24.565 63.26v21.247m0-21.247-9.107 5.56m9.107 15.687 18.213 10.326m46.59-5.163-18.676 10.646m0 10.777v-10.777m0 10.777-8.643-6.133m8.643-4.644-8.643-5.483m0 0v10.127m-46.59-36.14-8.814-5.56m45.768-36.713L24.506 42.41l9.629 5.412m18.279-21.275 18.278 9.906m-18.278-9.906v10.777m18.278-.871 9.338-4.517m-9.338 4.517v11.37m9.338-15.887v10.637m-9.338 5.25L52.414 58.096l-18.28-10.275m36.558 0L52.414 37.324m18.278 10.498 9.338-5.249m-27.617-5.249L34.136 47.822",
                    stroke: "#171717",
                    strokeWidth: .5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, l.jsx)("path", {
                    d: "M6.951 112a6.175 6.175 0 0 0 6.014 5.988l.486.012-.486.012A6.175 6.175 0 0 0 6.951 124a6.175 6.175 0 0 0-6.014-5.988L.451 118l.486-.012A6.175 6.175 0 0 0 6.951 112ZM101.5 100a6.175 6.175 0 0 0 6.014 5.988L108 106l-.486.012A6.175 6.175 0 0 0 101.5 112a6.175 6.175 0 0 0-6.014-5.988L95 106l.486-.012A6.175 6.175 0 0 0 101.5 100ZM98.049 0c.264 9.008 7.519 16.24 16.528 16.475l.972.025-.972.025c-9.009.235-16.264 7.467-16.528 16.475-.264-9.008-7.52-16.24-16.529-16.475l-.971-.025.971-.025C90.53 16.24 97.785 9.008 98.05 0Z",
                    fill: "#262626"
                })]
            });
            var n = i(58400),
                s = i(56478),
                r = i(21956),
                o = i(14034);
            let FeedEmpty = () => (0, l.jsx)(a.Vm, {
                    illustration: (0, l.jsx)(s.S, {}),
                    subHeading: "It's a bit quiet in here",
                    text: "Follow a few frens to get some sounds up in this feed. Start by following top artists and collectors!",
                    buttonLabel: "Go to Charts",
                    href: "/charts?type=collectors",
                    divider: !0,
                    mainFeed: !0
                }),
                FeedEmptyAuth = () => (0, l.jsx)(a.Vm, {
                    illustration: (0, l.jsx)(Box3D, {}),
                    subHeading: "Looks like your wallet isn't connected",
                    text: "Sign in to view your personalized feed.",
                    buttonLabel: "Sign in",
                    onClick: function() {
                        (0, o.uH)({
                            event: "Sign in Clicked",
                            properties: {
                                sourceComponent: "Feed"
                            }
                        }), (0, r.SR)()
                    },
                    divider: !0,
                    mainFeed: !0
                }),
                FeedError = e => {
                    let {
                        divider: t = !1,
                        mainFeed: i = !1
                    } = e;
                    return (0, l.jsx)(a.Vm, {
                        illustration: (0, l.jsx)(n.m, {}),
                        subHeading: "Something isn't working here",
                        text: "Don’t worry we’re looking into it. Until then, discover more sounds on our home page.",
                        buttonLabel: "Go to home page",
                        href: "/",
                        divider: t,
                        mainFeed: i
                    })
                }
        },
        73845: function(e, t, i) {
            i.d(t, {
                o: function() {
                    return ActionBar
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(72102),
                n = i(42178),
                s = i(14016),
                r = i(15876),
                o = i(36732),
                d = i(8205),
                c = i(21922),
                p = i(47544),
                u = i(28987);

            function ActionBar(e) {
                let {
                    align: t,
                    currentListeningParty: i,
                    isLikeButtonDisabled: x,
                    isLiked: f,
                    isPlayButtonDisabled: h,
                    isPlayButtonLoading: m,
                    isPlaying: v,
                    moreDropdownItems: g,
                    onLikeButtonClick: b,
                    onPlayButtonClick: j,
                    onPostButtonClick: y,
                    onShareButtonClick: w,
                    playButtonRef: L
                } = e;
                return (0, l.jsxs)("div", {
                    className: "flex h-[84px] w-full items-center justify-between pb-0 pt-3 md:h-auto md:pb-6 md:pt-6 lt:pb-0",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-2.5",
                        children: [b && (0, l.jsx)(c.h, {
                            icon: (0, l.jsx)(a.G, {
                                icon: f ? o.m6 : r.m6,
                                color: d.rS.colors[f ? "fuchsia500" : x ? "neutral300" : "base500"].value
                            }),
                            onClick: b,
                            disabled: x
                        }), (0, l.jsx)(c.h, {
                            icon: (0, l.jsx)(a.G, {
                                icon: n.Y,
                                color: "base500"
                            }),
                            onClick: y
                        }), (0, l.jsx)(c.h, {
                            icon: (0, l.jsx)(a.G, {
                                icon: s.A$
                            }),
                            onClick: w,
                            disabled: !1
                        }), (0, l.jsx)(u.h, {
                            align: t,
                            disabled: !1,
                            children: g
                        })]
                    }), (0, l.jsx)("div", {
                        className: "flex md:hidden",
                        children: (0, l.jsx)(p.J, {
                            playing: v,
                            onClick: j,
                            color: "black",
                            size: "m",
                            ref: L,
                            loading: m,
                            disabled: h,
                            currentListeningParty: i
                        })
                    })]
                })
            }
        },
        78924: function(e, t, i) {
            i.d(t, {
                Vm: function() {
                    return Placeholder
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(8205),
                n = i(69598),
                s = i(85906);
            let Placeholder = e => {
                    let {
                        illustration: t,
                        subHeading: i,
                        text: a,
                        buttonLabel: s,
                        divider: c = !1,
                        mainFeed: p = !1,
                        ...u
                    } = e;
                    return (0, l.jsxs)(o, {
                        divider: c,
                        children: [c && (0, l.jsx)(r, {
                            orientation: "horizontal",
                            mainFeed: p
                        }), t, (0, l.jsxs)(d, {
                            children: [(0, l.jsx)("h2", {
                                children: i
                            }), (0, l.jsx)("p", {
                                children: a
                            }), (0, l.jsx)(n.z, {
                                href: "href" in u ? u.href : void 0,
                                onClick: "onClick" in u ? u.onClick : void 0,
                                variant: "primary",
                                label: s,
                                deprecatedCSS: {
                                    height: "unset"
                                }
                            })]
                        })]
                    })
                },
                r = (0, a.zo)(s.i, {
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
                o = (0, a.zo)("div", {
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
                d = (0, a.zo)("div", {
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
        33423: function(e, t, i) {
            i.d(t, {
                g: function() {
                    return ReleasePlayButton
                }
            });
            var l = i(16356);
            i(97352);
            var a = i(49542),
                n = i(44361);
            i(96960);
            var s = i(23496),
                r = i(47544),
                o = i(3928),
                d = i(51020),
                c = i(42529),
                p = i(72777);
            let ReleasePlayButton = e => {
                var t, i, u;
                let {
                    playButtonSize: x,
                    releaseFrag: f,
                    goldenEgg: h,
                    getNextTrackIds: m
                } = e, {
                    id: v,
                    coverImage: g,
                    staticCoverImage: b,
                    eggGame: j,
                    track: {
                        id: y
                    },
                    title: w,
                    type: L,
                    listeningParty: M
                } = (0, o.S3c)(o.Won, f), C = null !== (u = h && j ? (null == j ? void 0 : null === (t = j.animatedGoldenEggImageOptimized) || void 0 === t ? void 0 : t.url) || (null == j ? void 0 : null === (i = j.goldenEggImage) || void 0 === i ? void 0 : i.url) : (null == b ? void 0 : b.url) || g.url) && void 0 !== u ? u : "", {
                    isPlaying: S,
                    isLoading: k,
                    onPlayClick: R,
                    currentListeningParty: V
                } = (0, d.a)({
                    trackId: y,
                    isAlbum: "ALBUM" === L,
                    listeningParty: M,
                    releaseId: v
                }), F = (0, c.R)(async () => {
                    await R(), m && (0, p.Hd)(m())
                });
                return (0, l.jsxs)("div", {
                    className: (0, a.default)("group relative flex-shrink-0 overflow-hidden", "xs" === x ? "rounded-sm" : "rounded-md", {
                        "h-12 w-12": "m" === x,
                        "h-10 w-10": "s" === x,
                        "h-8 w-8": "xs" === x
                    }),
                    children: [(0, l.jsx)(s.E, {
                        size: "m" === x ? 48 : "s" === x ? 40 : 32,
                        borderRadius: "xs" === x ? 4 : 8,
                        src: C,
                        alt: w
                    }), (0, l.jsx)(r.J, {
                        className: (0, a.default)("absolute left-0 top-0 group-hover:visible", S ? "visible" : "invisible"),
                        onClick: F,
                        size: x,
                        playing: S,
                        loading: k,
                        color: "transparent",
                        whileTap: void 0,
                        whileHover: void 0,
                        currentListeningParty: V,
                        iconClassname: (0, n.m)(V && "opacity-50")
                    })]
                })
            }
        },
        58400: function(e, t, i) {
            i.d(t, {
                m: function() {
                    return EyeStars
                }
            });
            var l = i(16356);
            i(97352);
            let EyeStars = () => (0, l.jsxs)("svg", {
                width: "140",
                height: "98",
                viewBox: "0 0 140 98",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, l.jsx)("path", {
                    d: "M74.0966 86.8269C91.7219 86.8269 106.01 72.5388 106.01 54.9135C106.01 37.2881 91.7219 23 74.0966 23M74.0966 86.8269C56.4712 86.8269 42.1831 72.5388 42.1831 54.9135C42.1831 37.2881 56.4712 23 74.0966 23M74.0966 86.8269C115.92 86.8269 139.293 54.9135 139.293 54.9135C139.293 54.9135 115.92 23 74.0966 23M74.0966 86.8269C32.2728 86.8269 8.90039 54.9135 8.90039 54.9135C8.90039 54.9135 32.2728 23 74.0966 23M74.0966 70.8175C82.8801 70.8175 90.0006 63.6971 90.0006 54.9135C90.0006 46.1299 82.8801 39.0094 74.0966 39.0094M74.0966 70.8175C65.313 70.8175 58.1925 63.6971 58.1925 54.9135C58.1925 46.1299 65.313 39.0094 74.0966 39.0094M74.0966 70.8175C77.8194 70.8175 80.8374 63.6971 80.8374 54.9135C80.8374 46.1299 77.8194 39.0094 74.0966 39.0094M74.0966 70.8175C70.3737 70.8175 67.3558 63.6971 67.3558 54.9135C67.3558 46.1299 70.3737 39.0094 74.0966 39.0094",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, l.jsx)("path", {
                    d: "M7.20703 75V75C7.30502 78.2757 9.94511 80.9041 13.2212 80.9876L13.707 81L13.2212 81.0124C9.94511 81.0959 7.30502 83.7243 7.20703 87V87V87C7.10905 83.7243 4.46895 81.0959 1.19288 81.0124L0.707031 81L1.19288 80.9876C4.46895 80.9041 7.10905 78.2757 7.20703 75V75Z",
                    fill: "#262626"
                }), (0, l.jsx)("path", {
                    d: "M116.207 86V86C116.305 89.2757 118.945 91.9041 122.221 91.9876L122.707 92L122.221 92.0124C118.945 92.0959 116.305 94.7243 116.207 98V98V98C116.109 94.7243 113.469 92.0959 110.193 92.0124L109.707 92L110.193 91.9876C113.469 91.9041 116.109 89.2757 116.207 86V86Z",
                    fill: "#262626"
                }), (0, l.jsx)("path", {
                    d: "M25.4004 0V0C25.6642 9.0079 32.92 16.2402 41.9287 16.4747L42.9004 16.5L41.9287 16.5253C32.92 16.7598 25.6642 23.9921 25.4004 33V33V33C25.1366 23.9921 17.8808 16.7598 8.87208 16.5253L7.90039 16.5L8.87208 16.4747C17.8808 16.2402 25.1366 9.0079 25.4004 0V0Z",
                    fill: "#262626"
                })]
            })
        },
        56478: function(e, t, i) {
            i.d(t, {
                S: function() {
                    return Plus3D
                }
            });
            var l = i(16356);
            i(97352);
            let Plus3D = () => (0, l.jsxs)("svg", {
                width: "128",
                height: "131",
                viewBox: "0 0 128 131",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, l.jsx)("path", {
                    d: "M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141L63.1845 111.845L48.4597 120.141L33.9452 111.845V94.9359L19.1152 86.4789V69.6254L33.9452 60.8678V43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998V60.9923L107.149 69.6254Z",
                    fill: "white"
                }), (0, l.jsx)("path", {
                    d: "M33.9452 43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998M33.9452 43.9998L48.4597 52.2966L33.9452 60.8678M33.9452 43.9998V60.8678M19.1152 69.6254V86.4789L33.9452 94.9359V111.845L48.4597 120.141M19.1152 69.6254L33.9452 78.1428V61.0713M19.1152 69.6254L33.9452 60.8678M63.1845 94.9359L48.4597 86.4789M63.1845 94.9359L77.8742 86.4789M63.1845 94.9359V111.845M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141M107.149 69.6254L92.6341 60.9923M107.149 69.6254L92.6341 78.1428V60.9923M92.6341 43.9998L78.0145 52.2966L92.6341 60.9923M92.6341 43.9998V60.9923M48.4597 120.141L63.1845 111.845M48.4597 120.141V103.369L63.1845 111.845M78.0145 120.141L63.1845 111.845M78.0145 120.141L77.8742 103.352L63.1845 111.845M78.0145 69.6254L92.6341 60.9923M78.0145 69.6254L63.1845 61.0713M78.0145 69.6254L77.8742 86.4789M48.4597 69.6254L33.9452 61.0713M48.4597 69.6254V86.4789M48.4597 69.6254L63.1845 61.0713M33.9452 61.0713V60.8678M48.4597 86.4789L63.1845 78.1428M63.1845 78.1428L77.8742 86.4789M63.1845 78.1428V61.0713",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, l.jsx)("path", {
                    d: "M7.30664 84C7.40463 87.2757 10.0447 89.9041 13.3208 89.9876L13.8066 90L13.3208 90.0124C10.0447 90.0959 7.40463 92.7243 7.30664 96C7.20866 92.7243 4.56856 90.0959 1.29249 90.0124L0.806641 90L1.29249 89.9876C4.56856 89.9041 7.20866 87.2757 7.30664 84Z",
                    fill: "#262626"
                }), (0, l.jsx)("path", {
                    d: "M116.307 95C116.405 98.2757 119.045 100.904 122.321 100.988L122.807 101L122.321 101.012C119.045 101.096 116.405 103.724 116.307 107C116.209 103.724 113.569 101.096 110.292 101.012L109.807 101L110.292 100.988C113.569 100.904 116.209 98.2757 116.307 95Z",
                    fill: "#262626"
                }), (0, l.jsx)("path", {
                    d: "M24.5 0C24.7638 9.0079 32.0196 16.2402 41.0283 16.4747L42 16.5L41.0283 16.5253C32.0196 16.7598 24.7638 23.9921 24.5 33C24.2362 23.9921 16.9804 16.7598 7.97169 16.5253L7 16.5L7.97169 16.4747C16.9804 16.2402 24.2362 9.0079 24.5 0Z",
                    fill: "#262626"
                })]
            })
        },
        98038: function(e, t, i) {
            i.d(t, {
                n: function() {
                    return GoldenEggSphereSM
                }
            });
            var l = i(16356);
            i(97352);
            let GoldenEggSphereSM = e => (0, l.jsxs)("svg", {
                width: e.width ? e.width : 50,
                height: e.height ? e.height : 53,
                viewBox: "0 0 50 53",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, l.jsxs)("g", {
                    filter: "url(#a)",
                    children: [(0, l.jsx)("path", {
                        d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                        fill: "url(#b)"
                    }), (0, l.jsx)("path", {
                        d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                        fill: "url(#c)",
                        style: {
                            mixBlendMode: "overlay"
                        }
                    }), (0, l.jsx)("path", {
                        d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                        fill: "#D9A625",
                        style: {
                            mixBlendMode: "color"
                        }
                    })]
                }), (0, l.jsx)("g", {
                    filter: "url(#d)",
                    children: (0, l.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M24.956 35.721c4.13 0 7.627-4.038 7.627-9.22s-3.497-9.22-7.627-9.22c-1.807 0-3.711.994-5.178 2.675a10.01 10.01 0 0 0-2.45 6.545c0 5.182 3.497 9.22 7.628 9.22Zm0 .513c4.496 0 8.14-4.358 8.14-9.733 0-5.376-3.644-9.733-8.14-9.733-3.983 0-8.141 4.357-8.141 9.733 0 5.375 3.645 9.733 8.14 9.733Z",
                        fill: "#fff",
                        fillOpacity: .7
                    })
                }), (0, l.jsx)("path", {
                    d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#e)"
                }), (0, l.jsx)("path", {
                    d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "url(#f)",
                    style: {
                        mixBlendMode: "overlay"
                    }
                }), (0, l.jsx)("path", {
                    d: "M33.096 26.5c0 5.377-3.644 9.734-8.14 9.734s-8.141-4.358-8.141-9.733c0-5.376 4.157-9.733 8.14-9.733 4.497 0 8.141 4.357 8.141 9.733Z",
                    fill: "#D9A625",
                    style: {
                        mixBlendMode: "color"
                    }
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.956 35.721c4.13 0 7.627-4.038 7.627-9.22s-3.497-9.22-7.627-9.22c-1.807 0-3.711.994-5.178 2.675a10.01 10.01 0 0 0-2.45 6.545c0 5.182 3.497 9.22 7.628 9.22Zm0 .513c4.496 0 8.14-4.358 8.14-9.733 0-5.376-3.644-9.733-8.14-9.733-3.983 0-8.141 4.357-8.141 9.733 0 5.375 3.645 9.733 8.14 9.733Z",
                    fill: "#fff",
                    fillOpacity: .7
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.141 29.12c1.476.706 3.532 1.15 5.815 1.15 2.282 0 4.338-.444 5.814-1.15 1.493-.714 2.318-1.655 2.318-2.62h.462c0 1.245-1.047 2.303-2.58 3.037-1.552.742-3.678 1.194-6.014 1.194-2.337 0-4.463-.453-6.014-1.194-1.534-.734-2.581-1.792-2.581-3.037h.462c0 .965.825 1.906 2.318 2.62ZM24.956 22.731c-.279 0-.554.007-.826.02a.23.23 0 1 1-.022-.462 17.916 17.916 0 0 1 1.695 0 .23.23 0 0 1-.022.462c-.271-.013-.547-.02-.825-.02Zm-2.113-.104a.231.231 0 0 1-.197.261c-.579.08-1.13.19-1.646.326a.231.231 0 0 1-.117-.447c.535-.14 1.104-.253 1.699-.336a.23.23 0 0 1 .26.197Zm4.226 0a.23.23 0 0 1 .26-.196c.596.082 1.165.196 1.7.336a.23.23 0 1 1-.117.447 14.235 14.235 0 0 0-1.646-.326.231.231 0 0 1-.197-.26Zm-7.308.735a.231.231 0 0 1-.127.301 7.204 7.204 0 0 0-1.567.852.23.23 0 1 1-.274-.372 7.663 7.663 0 0 1 1.667-.908.23.23 0 0 1 .301.127Zm10.445.022a.23.23 0 0 1 .302-.125 7.694 7.694 0 0 1 1.552.842.23.23 0 1 1-.27.375 7.238 7.238 0 0 0-1.458-.79.231.231 0 0 1-.126-.302Z",
                    fill: "#202020"
                }), (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27.102 33.497c.596-1.78.968-4.254.968-6.997 0-2.744-.372-5.218-.968-6.998-.298-.892-.648-1.596-1.026-2.073-.379-.48-.76-.698-1.12-.698v-.462c.562 0 1.061.34 1.483.873.423.535.794 1.295 1.1 2.213.616 1.84.993 4.365.993 7.145 0 2.779-.377 5.305-.992 7.144-.307.918-.678 1.678-1.101 2.213-.422.532-.921.873-1.484.873v-.461c.362 0 .742-.219 1.122-.698.377-.478.727-1.182 1.025-2.074ZM21.84 26.5c0 .335.006.666.017.992a.231.231 0 0 1-.461.016 30.393 30.393 0 0 1 0-2.016.231.231 0 0 1 .461.016c-.01.326-.016.657-.016.992Zm-.12 2.57a.23.23 0 0 1 .253.207c.067.696.16 1.36.274 1.981a.23.23 0 0 1-.454.084 24.283 24.283 0 0 1-.28-2.02.23.23 0 0 1 .207-.252Zm0-5.14a.23.23 0 0 1-.207-.253c.069-.707.163-1.383.28-2.019a.23.23 0 1 1 .454.084 23.76 23.76 0 0 0-.274 1.98.23.23 0 0 1-.253.208Zm.62 8.814a.23.23 0 0 1 .285.16c.21.735.452 1.373.72 1.89a.23.23 0 1 1-.41.212 10.745 10.745 0 0 1-.754-1.976.231.231 0 0 1 .16-.286Zm.018-12.556a.23.23 0 0 1-.157-.285 10.8 10.8 0 0 1 .698-1.84.231.231 0 0 1 .413.207c-.247.49-.472 1.082-.668 1.76a.23.23 0 0 1-.286.158Z",
                    fill: "#202020"
                }), (0, l.jsxs)("defs", {
                    children: [(0, l.jsxs)("linearGradient", {
                        id: "b",
                        x1: 15.817,
                        y1: 32.653,
                        x2: 43.797,
                        y2: 22.398,
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
                        id: "c",
                        x1: 23.314,
                        y1: 26.501,
                        x2: 18.914,
                        y2: 16.896,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: 0
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#fff"
                        })]
                    }), (0, l.jsxs)("linearGradient", {
                        id: "e",
                        x1: 15.817,
                        y1: 32.653,
                        x2: 43.797,
                        y2: 22.398,
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
                        id: "f",
                        x1: 23.314,
                        y1: 26.501,
                        x2: 18.914,
                        y2: 16.896,
                        gradientUnits: "userSpaceOnUse",
                        children: [(0, l.jsx)("stop", {
                            stopColor: "#fff",
                            stopOpacity: 0
                        }), (0, l.jsx)("stop", {
                            offset: 1,
                            stopColor: "#fff"
                        })]
                    }), (0, l.jsxs)("filter", {
                        id: "a",
                        x: .815,
                        y: .768,
                        width: 48.281,
                        height: 51.467,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, l.jsx)("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix"
                        }), (0, l.jsx)("feBlend", { in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: 8,
                            result: "effect1_foregroundBlur_1122_52842"
                        })]
                    }), (0, l.jsxs)("filter", {
                        id: "d",
                        x: .815,
                        y: .768,
                        width: 48.281,
                        height: 51.467,
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [(0, l.jsx)("feFlood", {
                            floodOpacity: 0,
                            result: "BackgroundImageFix"
                        }), (0, l.jsx)("feBlend", { in: "SourceGraphic",
                            in2: "BackgroundImageFix",
                            result: "shape"
                        }), (0, l.jsx)("feGaussianBlur", {
                            stdDeviation: 8,
                            result: "effect1_foregroundBlur_1122_52842"
                        })]
                    })]
                })]
            })
        },
        42440: function(e, t, i) {
            i.d(t, {
                RN: function() {
                    return j
                },
                dT: function() {
                    return ReleaseRow
                }
            });
            var l = i(16356),
                a = i(97352);
            i(96960);
            var n = i(19791),
                s = i(8205),
                r = i(78714),
                o = i(96578),
                d = i(41079),
                c = i(27469),
                p = i(62335),
                u = i(33423),
                x = i(44456),
                f = i(97946),
                h = i(3928),
                m = i(51020),
                v = i(14034),
                g = i(81688),
                b = i(95390);
            let ReleaseRow = e => {
                    let {
                        releaseFrag: t,
                        getNextTrackIds: i
                    } = e, s = (0, h.S3c)(h.$mg, t), {
                        title: L,
                        artist: {
                            name: M
                        },
                        track: {
                            id: C
                        },
                        id: S,
                        webappUri: k,
                        type: R,
                        listeningParty: V
                    } = s, F = (0, m.R)({
                        listeningParty: V,
                        releaseId: S
                    }), {
                        playing: A,
                        activeTrackId: I
                    } = (0, g.PZ)(), [z, N] = (0, a.useState)(!1), U = "ALBUM" !== R;
                    return (0, l.jsxs)(j, {
                        className: "group",
                        children: [(0, l.jsxs)(w, {
                            gap: "sm",
                            children: [(0, l.jsx)(u.g, {
                                playButtonSize: "m",
                                releaseFrag: s,
                                getNextTrackIds: i
                            }), (0, l.jsxs)(y, {
                                children: [(0, l.jsx)(w, {
                                    children: (0, l.jsxs)(x.$, {
                                        children: [C === I && A && (0, l.jsx)(x.j, {
                                            size: "xs",
                                            smallBars: !0,
                                            className: "!h-2"
                                        }), (0, l.jsx)(f.s, {
                                            pathnameUri: (0, b.OU)(s.webappUri),
                                            className: "font-title text-title-xxs font-medium text-base800",
                                            children: (0, l.jsx)("h2", {
                                                children: L
                                            })
                                        })]
                                    })
                                }), (0, l.jsx)(f.s, {
                                    pathnameUri: (0, b.OU)(s.artist.webappUri),
                                    children: (0, l.jsx)("h3", {
                                        className: "font-base text-[11px] font-medium leading-[11px] text-base500",
                                        children: M
                                    })
                                })]
                            })]
                        }), (0, l.jsxs)(w, {
                            className: "gap-16",
                            children: [(0, l.jsx)("span", {
                                className: "hidden text-right text-base-s text-base500 lt:block",
                                children: (0, n.nH)(s.track.duration)
                            }), (0, l.jsxs)(p.N, {
                                isDropdownOpen: z,
                                setIsDropdownOpen: N,
                                dropdownProps: {
                                    align: "end"
                                },
                                children: [(0, l.jsx)(c.T, {
                                    href: (0, b.OU)(k)
                                }), (0, l.jsx)(o.U, {
                                    releaseId: S,
                                    disabled: !U,
                                    source: "Playlist Releases Modal"
                                }), (0, l.jsx)(r.C, {
                                    trackId: C,
                                    disabled: !C || !U || !!F,
                                    emitAnalytics: () => {
                                        (0, v.uH)({
                                            event: "Add to Queue Clicked",
                                            properties: {
                                                associationId: S,
                                                associationType: "Release",
                                                sourceComponent: "Playlist Releases Modal"
                                            }
                                        })
                                    }
                                }), (0, l.jsx)(d.T, {
                                    releaseId: s.id,
                                    source: "Playlist Page"
                                })]
                            })]
                        })]
                    })
                },
                j = (0, s.zo)("div", {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: 80,
                    borderRadius: 6,
                    "@tabletLandscape": {
                        "&:hover": {
                            cursor: "pointer",
                            background: "$base50"
                        }
                    }
                }),
                y = (0, s.zo)("div", {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 4,
                    h2: {
                        title: "XS",
                        fontWeight: 500,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: 160
                    },
                    h3: {
                        kicker: "S",
                        color: "$base700",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        maxWidth: 160
                    },
                    "@tablet": {
                        h2: {
                            maxWidth: 210
                        },
                        h3: {
                            maxWidth: 210
                        }
                    }
                }),
                w = (0, s.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    variants: {
                        gap: {
                            sm: {
                                gap: 16
                            },
                            md: {
                                gap: 24
                            }
                        }
                    }
                })
        },
        14443: function(e, t, i) {
            i.d(t, {
                R: function() {
                    return RowSkeleton
                }
            });
            var l = i(16356);
            i(97352), i(96960);
            var a = i(8205);
            let n = (0, a.zo)("div", {
                display: "flex",
                alignItems: "flex-start",
                gap: 16,
                maxWidth: "100%",
                width: "fit-content"
            });
            (0, a.zo)("div", {
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: 8,
                minWidth: 0
            }), (0, a.zo)("div", {
                display: "flex",
                gap: 4,
                marginTop: 1
            }), (0, a.zo)("h3", {
                fontStyle: "semibold",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                maxWidth: "unset",
                "@tabletLandscape": {
                    base: "L"
                }
            });
            let UserActivityDetailSkeleton = () => (0, l.jsxs)(n, {
                children: [(0, l.jsx)("div", {
                    className: "min-h-[48px] min-w-[48px] flex-shrink-0 animate-pulse rounded-full bg-neutral300"
                }), (0, l.jsxs)("div", {
                    className: "flex h-[46px] w-[187px] flex-col justify-between md:w-[200px]",
                    children: [(0, l.jsx)("div", {
                        className: "min-h-[19px] min-w-full flex-shrink-0 animate-pulse rounded-md bg-neutral300"
                    }), (0, l.jsx)("div", {
                        className: "min-h-[19px] w-[120px] flex-shrink-0 animate-pulse rounded-md bg-neutral300"
                    })]
                })]
            });
            var s = i(42440);
            let RowSkeleton = e => {
                let {
                    count: t = 4
                } = e;
                return (0, l.jsx)(l.Fragment, {
                    children: Array.from({
                        length: t
                    }).map((e, t) => (0, l.jsx)(s.RN, {
                        css: {
                            pointerEvents: "none"
                        },
                        children: (0, l.jsx)(UserActivityDetailSkeleton, {})
                    }, t))
                })
            }
        },
        15311: function(e, t, i) {
            i.d(t, {
                p: function() {
                    return PlaylistReleasesModal
                }
            });
            var l = i(16356),
                a = i(97352),
                n = i(58285);
            i(96960);
            var s = i(8205),
                r = i(37196),
                o = i(14443),
                d = i(22181),
                c = i(3928),
                p = i(88706),
                u = i(42440);

            function PlaylistReleasesModal(e) {
                let {
                    playlistId: t,
                    actionId: i,
                    type: s
                } = e, {
                    closeCancelModal: p
                } = d.ModalContext.useContainer(), {
                    orderedList: m,
                    isFetching: v,
                    isRefetching: g,
                    loadMoreNextPage: b
                } = (0, c.NSZ)(c.$wT, {
                    getNextPageParam(e) {
                        var t, i, l, a, n, r, o;
                        let {
                            data: {
                                playlistAction: d
                            }
                        } = e;
                        switch (null == d ? void 0 : d.__typename) {
                            case "ReleasesAddedToPlaylist":
                                return (null === (t = d.addedReleases) || void 0 === t ? void 0 : t.pageInfo.hasNextPage) && {
                                    after: null === (i = d.addedReleases) || void 0 === i ? void 0 : i.pageInfo.endCursor
                                };
                            case "ReleasesRemovedFromPlaylist":
                                return (null === (l = d.removedReleases) || void 0 === l ? void 0 : l.pageInfo.hasNextPage) && {
                                    after: null === (a = d.removedReleases) || void 0 === a ? void 0 : a.pageInfo.endCursor
                                };
                            case "ReleasesAddedRemovedFromPlaylist":
                                return "added" === s ? (null === (n = d.addedReleases) || void 0 === n ? void 0 : n.pageInfo.hasNextPage) && {
                                    after: d.addedReleases.pageInfo.endCursor
                                } : (null === (r = d.removedReleases) || void 0 === r ? void 0 : r.pageInfo.hasNextPage) && {
                                    after: null === (o = d.removedReleases) || void 0 === o ? void 0 : o.pageInfo.endCursor
                                };
                            default:
                                return null
                        }
                    },
                    filterQueryKey: {
                        actionId: i,
                        playlistId: t,
                        type: s
                    },
                    variables(e) {
                        var l;
                        let {
                            pageParam: a
                        } = e;
                        return {
                            id: i,
                            playlistId: t,
                            isAdded: "added" === s,
                            isRemoved: "removed" === s,
                            pagination: {
                                first: 10,
                                after: null !== (l = null == a ? void 0 : a.after) && void 0 !== l ? l : null
                            }
                        }
                    },
                    list(e) {
                        var t, i, l, a, n;
                        switch (null === (t = e.playlistAction) || void 0 === t ? void 0 : t.__typename) {
                            case "ReleasesAddedToPlaylist":
                                return null === (i = e.playlistAction.addedReleases) || void 0 === i ? void 0 : i.edges.map(e => e.node);
                            case "ReleasesRemovedFromPlaylist":
                                return null === (l = e.playlistAction.removedReleases) || void 0 === l ? void 0 : l.edges.map(e => e.node);
                            case "ReleasesAddedRemovedFromPlaylist":
                                return "added" === s ? null === (a = e.playlistAction.addedReleases) || void 0 === a ? void 0 : a.edges.map(e => e.node) : null === (n = e.playlistAction.removedReleases) || void 0 === n ? void 0 : n.edges.map(e => e.node);
                            default:
                                return []
                        }
                    },
                    order: [e => e.createdAt, "asc"],
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    staleTime: 0
                }), [j, y] = a.useState(), w = a.useCallback((e, t) => (0, l.jsx)("div", {
                    children: (0, l.jsx)(u.dT, {
                        releaseFrag: t,
                        getNextTrackIds: void 0
                    })
                }, t.id), []), L = v && !g, M = a.useCallback(() => (0, l.jsx)(f, {
                    children: L && (0, l.jsx)(x, {
                        children: (0, l.jsx)(o.R, {
                            count: 5
                        })
                    })
                }), [L]), C = (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(h, {
                        ref: e => {
                            y(e || void 0)
                        },
                        css: {
                            overflow: m && m.length <= 5 ? "hidden" : "auto"
                        },
                        children: (0, l.jsx)(n.OO, {
                            data: m,
                            itemContent: w,
                            customScrollParent: j,
                            endReached: b,
                            components: {
                                Footer: M
                            }
                        })
                    })
                });
                return (0, l.jsx)(r.u_, {
                    headerText: `Sounds ${s}`,
                    body: C,
                    closeModal: p,
                    bodyStyles: {
                        marginTop: 18
                    },
                    containerStyles: {
                        maxWidth: 420,
                        padding: "16px 0px 0px 8px",
                        "@tablet": {
                            padding: "24px 0px 0px 16px"
                        }
                    },
                    headerStyles: {
                        alignItems: "center",
                        textTransform: "capitalize",
                        paddingRight: 16,
                        paddingLeft: 8,
                        "@tablet": {
                            paddingRight: 24
                        }
                    }
                })
            }
            let x = (0, s.zo)("div", {
                    display: "flex",
                    flexDirection: "column"
                }),
                f = (0, s.zo)("div", {
                    height: 1,
                    "@tabletLandscape": {
                        minHeight: 10,
                        height: "fit-content"
                    }
                }),
                h = (0, s.zo)(p.x, {
                    height: 330,
                    maxHeight: 330,
                    marginTop: 0
                })
        },
        88706: function(e, t, i) {
            i.d(t, {
                F: function() {
                    return s
                },
                x: function() {
                    return n
                }
            });
            var l = i(8205),
                a = i(26225);
            let n = (0, l.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                    gap: 24,
                    marginTop: 24,
                    ...a.WZ
                }),
                s = (0, l.zo)("div", {
                    base: "M",
                    color: "$neutral400",
                    "@tablet": {
                        fontSize: 16,
                        lineHeight: "20px"
                    },
                    variants: {
                        legacy: {
                            true: {
                                marginTop: -8,
                                "@tablet": {
                                    marginTop: -16
                                }
                            }
                        }
                    }
                })
        }
    }
]);