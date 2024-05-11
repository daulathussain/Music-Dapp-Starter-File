(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8769], {
        43999: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/notifications", function() {
                return n(26560)
            }])
        },
        11817: function(e, t, n) {
            "use strict";
            n.d(t, {
                BX: function() {
                    return fadeInAnimation
                },
                D8: function() {
                    return m
                },
                GP: function() {
                    return p
                },
                IG: function() {
                    return c
                },
                Of: function() {
                    return u
                },
                R3: function() {
                    return l
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
            var i = n(16356);
            n(97352);
            var a = n(49542),
                r = n(8205),
                s = n(97946);
            let l = 40,
                o = 48,
                FeedListViewContainer = e => {
                    let {
                        children: t,
                        spaceBetween: n
                    } = e;
                    return (0, i.jsx)("div", {
                        className: (0, a.default)("flex w-full items-center py-3 text-base-s md:border-b md:border-base200  md:py-4 md:text-base-m lg:text-base-l", n && "justify-between"),
                        children: t
                    })
                },
                d = (0, r.zo)("div", {
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
                c = (0, r.zo)("span", {
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
                u = (0, r.zo)("div", {
                    display: "inline-flex",
                    flexShrink: 0,
                    width: l,
                    height: l,
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
                m = (0, r.zo)("div", {
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
                p = (0, r.zo)("div", {
                    display: "inline-flex",
                    alignItems: "center",
                    height: "12px",
                    verticalAlign: "middle",
                    transform: "scale(0.7)",
                    svg: {
                        filter: "drop-shadow(0px 2px 5px rgba(217, 166, 37, 0.6))"
                    }
                }),
                f = (0, r.zo)(s.s, {
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
        10228: function(e, t, n) {
            "use strict";
            n.d(t, {
                U: function() {
                    return UserHoverCardContent
                }
            });
            var i = n(16356);
            n(97352);
            var a = n(55344);
            n(96960);
            var r = n(96220),
                s = n(68753),
                l = n(98335),
                o = n(21597),
                d = n(59287),
                c = n(8205),
                u = n(97946);
            let UserHoverCardContentUI = e => {
                    var t, n, a;
                    let {
                        user: r,
                        followButton: s,
                        verified: l,
                        avatar: c
                    } = e, {
                        publicAddress: g,
                        username: b,
                        followerCount: v,
                        followingCount: j,
                        nftsOwned: w,
                        artist: y,
                        creditAllocations: C,
                        webappUri: N,
                        bannerImage: z
                    } = r, S = b !== (0, d.pc)(g, 5, 4), k = (y ? null == y ? void 0 : y.numReleases : C.length) || 0, P = null !== (a = null !== (n = null == y ? void 0 : null === (t = y.bannerImage) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : null == z ? void 0 : z.url) && void 0 !== a ? a : "/images/sound_letter_s.svg";
                    return (0, i.jsxs)("div", {
                        className: "h-fit w-[300px]",
                        children: [(0, i.jsx)(m, {
                            css: {
                                backgroundImage: `url(${P})`,
                                backgroundSize: "cover"
                            }
                        }), (0, i.jsx)(p, {
                            children: c
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col gap-[22px] p-[14px]",
                            children: [(0, i.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, i.jsx)(u.s, {
                                    pathnameUri: N,
                                    children: (0, i.jsxs)(f, {
                                        children: [(0, i.jsxs)(h, {
                                            children: [(0, i.jsx)("h1", {
                                                children: b
                                            }), y && l]
                                        }), S && (0, i.jsx)("p", {
                                            children: (0, d.pc)(g, 5, 4)
                                        })]
                                    })
                                }), s]
                            }), (0, i.jsxs)("div", {
                                className: "flex justify-between",
                                children: [!!k && (0, i.jsxs)(x, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, o.ZP)(k)
                                    }), (0, i.jsxs)("p", {
                                        children: ["Sound", k > 1 && "s"]
                                    })]
                                }), (0, i.jsxs)(x, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, o.ZP)(w)
                                    }), (0, i.jsx)("p", {
                                        children: "Collected"
                                    })]
                                }), (0, i.jsxs)(x, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, o.ZP)(j)
                                    }), (0, i.jsx)("p", {
                                        children: "Following"
                                    })]
                                }), (0, i.jsxs)(x, {
                                    children: [(0, i.jsx)("div", {
                                        children: (0, o.ZP)(v)
                                    }), (0, i.jsx)("p", {
                                        children: "Followers"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                m = (0, c.zo)("div", {
                    display: "flex",
                    width: "100%",
                    height: 76,
                    borderRadius: "8px 8px 0 0",
                    backgroundPosition: "center"
                }),
                p = (0, c.zo)("div", {
                    justifyContent: "center",
                    alignItems: "center",
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    background: "$white",
                    marginTop: -56,
                    marginX: 14
                }),
                f = (0, c.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 4,
                    p: {
                        base: "M",
                        color: "$neutral400"
                    }
                }),
                h = (0, c.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    h1: {
                        base: "L",
                        color: "$white",
                        fontStyle: "medium",
                        maxWidth: 118,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                }),
                x = (0, c.zo)("div", {
                    div: {
                        base: "M",
                        fontStyle: "semibold",
                        color: "$white"
                    },
                    p: {
                        base: "S",
                        fontStyle: "medium",
                        color: "$neutral400"
                    }
                });
            var g = n(3928),
                b = n(95390);
            let UserHoverCardContent = e => {
                let {
                    userId: t
                } = e, {
                    data: n
                } = (0, g.aM2)(g.FS3, {
                    variables: {
                        userId: t
                    },
                    staleTime: (0, a.Z)("5 minutes")
                }), o = null == n ? void 0 : n.data.user;
                if (!o) return null;
                let d = (0, g.S3c)(g.XXP, o),
                    {
                        avatar: c,
                        publicAddress: u,
                        username: m,
                        webappUri: p,
                        artist: f
                    } = d;
                return (0, i.jsx)(UserHoverCardContentUI, {
                    user: { ...d,
                        webappUri: (0, b.OU)(p)
                    },
                    followButton: (0, i.jsx)(r.e, {
                        userId: d.id,
                        dark: !0,
                        size: "M",
                        sourceLocation: "User Hover Card",
                        artistId: null == f ? void 0 : f.id
                    }),
                    verified: (0, i.jsx)(l.O, {
                        noTooltip: !0
                    }),
                    avatar: (0, i.jsx)(s.q, {
                        src: null == c ? void 0 : c.url,
                        walletAddress: u,
                        username: m,
                        borderRadius: 6,
                        size: 74,
                        webappUri: p
                    })
                })
            }
        },
        12849: function(e, t, n) {
            "use strict";

            function generateTextForNode(e) {
                return e ? "root" === e.type ? e.children.map(generateTextForNode).join("") : "text" === e.type ? e.text : "paragraph" === e.type || "autolink" === e.type ? e.children.map(generateTextForNode).join("") : "custom-beautifulMention" === e.type ? e.value : "linebreak" === e.type ? "\n" : "" : ""
            }

            function getRootNode(e) {
                return null == e ? void 0 : e.toJSON().root
            }

            function generateTextForState(e) {
                return generateTextForNode(getRootNode(e))
            }
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            let i = {
                getRootNode,
                getNodeTextLength: function(e) {
                    return generateTextForNode(e).length
                },
                getFirstLinkDomain: function(e) {
                    let t = getRootNode(e),
                        n = function getFirstAutoLinkNode(e) {
                            if (!e) return null;
                            if ("autolink" === e.type) return e;
                            if ("children" in e)
                                for (let t of e.children) {
                                    let e = getFirstAutoLinkNode(t);
                                    if (e) return e
                                }
                            return null
                        }(t);
                    if (n && n.url) try {
                        let e = new URL(n.url),
                            t = e.hostname.replace(/^www\./, "");
                        return `${e.protocol}//${t}`
                    } catch (e) {}
                    return null
                },
                generateTextForNode,
                generateTextForState,
                checkForNonSpaceCharacters: function(e) {
                    let t = generateTextForState(e);
                    return "" !== t.trim()
                }
            }
        },
        25601: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return PostSingleUser
                }
            });
            var i = n(16356),
                a = n(97352);
            n(96960);
            var r = n(8061),
                s = n(94050),
                l = n(97946),
                o = n(3928),
                d = n(85846),
                c = n(64571),
                u = n(95390);
            let PostSingleUser = e => {
                let {
                    postWebappUri: t,
                    userFrag: n
                } = e, m = (0, o.S3c)(o.Hay, n), {
                    webappUri: p,
                    username: f,
                    artist: h
                } = m, x = !!(null == h ? void 0 : h.id), g = (0, u.OU)(p), b = a.useMemo(() => (function(e) {
                    let t = (0, s.Sq)({
                            postContentFrag: (0, o.S3c)(o.X4p, e.postContentFrag),
                            includeYourPrefix: "reposted" !== e.action && "posted in channel" !== e.action
                        }),
                        n = "commentContent" in e && null != e.commentContent ? (0, s.Cj)({
                            content: e.commentContent
                        }) : null;
                    switch (e.action) {
                        case "reposted":
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "reposted"
                                }), d.L_, t]
                            });
                        case "upvoted post":
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "upvoted"
                                }), d.L_, (0, i.jsx)("span", {
                                    children: "on"
                                }), d.L_, t]
                            });
                        case "upvoted reply":
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "upvoted"
                                }), d.L_, (0, i.jsx)("span", {
                                    children: "your"
                                }), d.L_, (0, i.jsx)("span", {
                                    children: "comment"
                                }), d.L_, n]
                            });
                        case "commented post":
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "commented"
                                }), d.L_, n, d.L_, (0, i.jsx)("span", {
                                    children: "on"
                                }), d.L_, t]
                            });
                        case "commented release":
                            let a = (0, s._)(e.release.title),
                                r = (0, u.OU)(e.release.webappUri);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "commented"
                                }), d.L_, n, d.L_, (0, i.jsx)("span", {
                                    children: "on"
                                }), d.L_, (0, i.jsx)("span", {
                                    className: "overflow-hidden text-ellipsis whitespace-nowrap font-semibold",
                                    children: (0, i.jsx)(l.s, {
                                        pathnameUri: r,
                                        children: a
                                    })
                                })]
                            });
                        case "commented reply":
                            let m = (0, s.Cj)({
                                content: e.parentCommentContent
                            });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "replied"
                                }), d.L_, n, d.L_, (0, i.jsx)("span", {
                                    children: "to your comment"
                                }), d.L_, m]
                            });
                        case "posted in channel":
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "posted"
                                }), d.L_, t, d.L_, (0, i.jsx)("span", {
                                    children: "in"
                                }), d.L_, (0, i.jsx)(l.s, {
                                    pathnameUri: (0, u.OU)(e.channel.webappUri),
                                    className: "font-semibold text-base800",
                                    children: e.channel.name
                                })]
                            });
                        default:
                            return (0, c.y0)(e), null
                    }
                })(e), [e]);
                return (0, i.jsx)(l.s, {
                    className: "flex w-full min-w-0 items-start sm:items-center md:min-w-[unset]",
                    pathnameUri: (0, u.OU)(t),
                    children: (0, i.jsxs)("div", {
                        className: "flex w-full items-start gap-2 pr-2 sm:items-center md:max-w-none md:gap-3 md:pr-3 lt:max-w-[calc(100%-80px)] dt:max-w-none dt:gap-0",
                        children: [(0, i.jsx)(l.s, {
                            pathnameUri: g,
                            children: (0, i.jsx)(r.k, {
                                userFrag: m,
                                disableLink: !0
                            })
                        }), (0, i.jsxs)("div", {
                            className: "inline-flex min-w-0 flex-wrap items-start dt:flex dt:flex-nowrap",
                            children: [(0, i.jsx)(l.s, {
                                pathnameUri: g,
                                className: "z-above2",
                                children: (0, i.jsx)(s.E5, {
                                    username: f,
                                    isArtist: x
                                })
                            }), d.L_, b]
                        })]
                    })
                })
            }
        },
        8061: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return NotificationUser
                }
            });
            var i = n(16356);
            n(97352), n(96960);
            var a = n(10228),
                r = n(67317),
                s = n(98335),
                l = n(25347),
                o = n(3928),
                d = n(95390);
            let NotificationUser = e => {
                let {
                    userFrag: t,
                    disableLink: n
                } = e, {
                    id: c,
                    username: u,
                    avatar: m,
                    publicAddress: p,
                    webappUri: f,
                    artist: h
                } = (0, o.S3c)(o.hXh, t), x = !!(null == h ? void 0 : h.id), g = (0, i.jsx)("div", {
                    className: "flex aspect-square h-10 w-10 flex-shrink-0 rounded-full ",
                    children: (0, i.jsx)(r.c, {
                        src: null == m ? void 0 : m.url,
                        username: u,
                        walletAddress: p,
                        size: 40,
                        webappUriPath: (0, d.OU)(f),
                        borderRadius: "50%",
                        priority: !0,
                        disableLink: n
                    })
                }), b = (0, i.jsxs)("div", {
                    className: "relative inline-flex items-center gap-2 md:gap-3",
                    children: [g, (0, i.jsx)("div", {
                        className: "hidden items-center overflow-hidden dt:flex",
                        children: (0, i.jsx)("span", {
                            className: "max-w-[120px] items-center overflow-hidden text-ellipsis whitespace-nowrap font-semibold dt:max-w-[250px]",
                            children: u
                        })
                    })]
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "flex flex-shrink-0 dt:hidden",
                        children: g
                    }), (0, i.jsxs)("div", {
                        className: "hidden items-center gap-0.5 dt:flex",
                        children: [(0, i.jsx)(l.I, {
                            userHoverCardContent: (0, i.jsx)(a.U, {
                                userId: c
                            }),
                            trigger: b,
                            triggerAsChild: !0
                        }), x && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("span", {
                                className: "block md:hidden",
                                children: (0, i.jsx)(s.O, {
                                    size: 16
                                })
                            }), (0, i.jsx)("span", {
                                className: "hidden md:block",
                                children: (0, i.jsx)(s.O, {
                                    size: 18
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        94050: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cj: function() {
                    return getContentSnapshot
                },
                E5: function() {
                    return MobileUsername
                },
                EA: function() {
                    return MotionPlayBars
                },
                FU: function() {
                    return hasReadNotification
                },
                Gj: function() {
                    return NotificationCollectButton
                },
                II: function() {
                    return PlayingMotionLayoutShift
                },
                Mx: function() {
                    return getCollectedReleasesPreview
                },
                Sq: function() {
                    return contentForPost
                },
                Xy: function() {
                    return NotificationInfo
                },
                _: function() {
                    return getReleaseTitleSnapshot
                },
                aj: function() {
                    return NotificationWrapper
                },
                iO: function() {
                    return NotificationLoadingSkeleton
                },
                xh: function() {
                    return NotificationActionButton
                },
                z$: function() {
                    return Indicator
                }
            });
            var i = n(16356);
            n(97352);
            var a = n(72102),
                r = n(90146),
                s = n(24114),
                l = n(73534),
                o = n(44361),
                d = n(69349),
                c = n(19847),
                u = n(12849),
                m = n(88343),
                p = n(69598),
                f = n(44456),
                h = n(98335),
                x = n(14034),
                g = n(85846);
            let NotificationWrapper = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)(l.E.div, {
                        initial: {
                            opacity: 0,
                            minHeight: 64
                        },
                        animate: {
                            opacity: 1,
                            minHeight: 64
                        },
                        children: (0, i.jsx)("div", {
                            className: "group relative z-base flex min-h-[40px] w-full items-center justify-between gap-0.5 py-4 text-base-m after:absolute after:inset-0 after:-left-4 after:-right-4 after:z-below after:rounded-[6px]  after:content-[''] after:hover:bg-base50 md:min-h-[48px] md:border-b md:border-b-base200 lt:py-3 ",
                            children: t
                        })
                    })
                },
                Indicator = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: (0, o.m)("absolute inline-block h-2 w-2 rounded-full bg-fuchsia500 align-super", t)
                    })
                },
                NotificationCollectButton = e => {
                    let {
                        onClick: t,
                        disabled: n,
                        loading: r,
                        releaseURI: s,
                        releaseId: l,
                        sourceComponent: o
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, i.jsx)(p.z, {
                                label: "Collect",
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                loading: r,
                                disabled: n,
                                href: s,
                                variant: "tertiary",
                                leadingIcon: (0, i.jsx)(a.G, {
                                    icon: d._t
                                }),
                                onClick: () => {
                                    (0, x.uH)({
                                        event: "Collect Now Clicked",
                                        properties: {
                                            sourceComponent: o,
                                            associationType: "Release",
                                            associationId: l
                                        }
                                    })
                                }
                            })
                        }), (0, i.jsx)("div", {
                            className: "hidden lt:flex",
                            children: (0, i.jsx)(p.z, {
                                label: "Collect",
                                variant: "tertiary",
                                size: "XS",
                                className: "h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary ",
                                onClick: e => {
                                    (0, x.uH)({
                                        event: "Collect Now Clicked",
                                        properties: {
                                            sourceComponent: o,
                                            associationType: "Release",
                                            associationId: l
                                        }
                                    }), t(e)
                                },
                                disabled: n,
                                loading: r
                            })
                        })]
                    })
                },
                NotificationActionButton = e => {
                    let {
                        label: t,
                        icon: n,
                        href: a,
                        onClick: r,
                        mobileHref: s,
                        mobileOnClick: l
                    } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, i.jsx)(p.z, {
                                label: t,
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                variant: "tertiary",
                                leadingIcon: n,
                                href: s || a,
                                onClick: l || r
                            })
                        }), (0, i.jsx)("div", {
                            className: "hidden lt:flex",
                            children: (0, i.jsx)(p.z, {
                                label: t,
                                variant: "tertiary",
                                size: "XS",
                                className: " h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary",
                                onClick: r,
                                href: a
                            })
                        })]
                    })
                },
                MobileUsername = e => {
                    let {
                        username: t,
                        isArtist: n
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "flex items-center dt:hidden",
                        children: [(0, i.jsx)("span", {
                            className: "flex max-w-[130px] items-center overflow-hidden text-ellipsis whitespace-nowrap font-semibold",
                            children: t
                        }), n && (0, i.jsxs)(i.Fragment, {
                            children: [g.L_, (0, i.jsx)("span", {
                                className: "block md:hidden",
                                children: (0, i.jsx)(h.O, {
                                    size: 16
                                })
                            }), (0, i.jsx)("span", {
                                className: "hidden md:block",
                                children: (0, i.jsx)(h.O, {
                                    size: 18
                                })
                            })]
                        })]
                    })
                },
                NotificationInfo = e => {
                    let {
                        timeStamp: t,
                        hasRead: n
                    } = e;
                    return (0, i.jsxs)("div", {
                        className: "relative flex min-w-[40px] items-center justify-end gap-1.5 md:gap-2",
                        children: [(0, i.jsx)(m.E, {
                            timeStamp: t,
                            className: "!text-base-xs text-base400"
                        }), (0, i.jsx)("div", {
                            className: "flex min-w-[8px] flex-shrink-0 items-center",
                            children: !n && (0, i.jsx)(Indicator, {
                                className: "relative"
                            })
                        })]
                    })
                },
                NotificationLoadingSkeleton = e => {
                    let {
                        length: t,
                        avatar: n
                    } = e;
                    return Array.from({
                        length: t
                    }).map((e, a) => {
                        let r = t > 1 && a % 4 == 0 && 0 !== a || n;
                        return (0, i.jsxs)("div", {
                            className: "flex min-h-[64px] w-full items-center justify-between py-4 lt:py-3 ",
                            children: [(0, i.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, i.jsx)("div", {
                                    className: (0, o.m)("h-10 w-10 animate-pulse bg-base200", r ? "rounded-full" : "rounded-md")
                                }), (0, i.jsx)("div", {
                                    className: "h-3.5 w-48 animate-pulse rounded-md bg-base200  lt:w-80"
                                })]
                            }), (0, i.jsx)("div", {
                                className: "relative flex min-w-[40px] items-center justify-end",
                                children: (0, i.jsx)("div", {
                                    className: "h-3.5 w-3.5 animate-pulse rounded-full bg-base200"
                                })
                            })]
                        }, `NOTIFICATION-LOADING-STATE${a}`)
                    })
                };

            function hasReadNotification(e) {
                let {
                    timestamp: t,
                    previousTimestamp: n
                } = e;
                return !!n && ((0, r.default)(t, n) || (0, s.default)(t, n))
            }
            let MotionPlayBars = e => {
                    let {} = e;
                    return (0, i.jsx)(l.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .25
                        },
                        className: "mr-1 mt-1 hidden md:block",
                        children: (0, i.jsx)(f.j, {
                            size: "xs"
                        })
                    })
                },
                PlayingMotionLayoutShift = e => {
                    let {
                        children: t,
                        isPlaying: n,
                        className: a
                    } = e;
                    return (0, i.jsx)(l.E.div, {
                        layout: "position",
                        layoutDependency: void 0 !== n && n,
                        transition: {
                            duration: .25
                        },
                        className: a,
                        children: t
                    })
                };

            function getContentSnapshot(e) {
                let {
                    content: t,
                    maxLength: n = 17
                } = e, a = t.length > n, r = a ? t.slice(0, n).split(" ").slice(0, -1).concat("...") : t.split(" "), s = t.slice(0, n).concat("...");
                return t.includes(" ") ? (0, i.jsxs)("span", {
                    className: "text-base500",
                    children: ['"', s, '"']
                }) : r.map((e, t) => (0, i.jsxs)("span", {
                    className: "text-base500",
                    children: [0 === t && '"', e, t === r.length - 1 && '"', t !== r.length - 1 && g.L_]
                }, `${e}-${t}`))
            }

            function getReleaseTitleSnapshot(e) {
                let t = e.length > 20,
                    n = t ? e.slice(0, 20).split(" ").slice(0, -1).concat("...") : e.split(" ");
                return n.map((e, t) => (0, i.jsxs)("span", {
                    children: [e, t !== n.length - 1 && g.L_]
                }, `${e}-${t}`))
            }

            function getCollectedReleasesPreview(e) {
                let {
                    collectedReleases: t,
                    maxReleases: n
                } = e;
                return t.slice(0, n).map((e, a) => {
                    let {
                        release: {
                            id: r,
                            title: s,
                            artist: {
                                name: l
                            }
                        }
                    } = e, o = 0 === a, d = a === Math.min(t.length, n) - 1;
                    return (0, i.jsxs)("span", {
                        children: [2 === t.length && d ? (0, i.jsxs)(i.Fragment, {
                            children: [g.L_, "and", g.L_]
                        }) : t.length > 2 && !o && d ? (0, i.jsxs)(i.Fragment, {
                            children: [", and", g.L_]
                        }) : o ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)(i.Fragment, {
                            children: [",", g.L_]
                        }), (0, i.jsxs)("span", {
                            className: "font-semibold",
                            children: [s, " - ", l]
                        })]
                    }, r)
                })
            }

            function contentForPost(e) {
                let {
                    postContentFrag: t,
                    includeYourPrefix: n
                } = e;
                if (!t) return null;
                let a = c.g.safeParse(t.lexicalContent),
                    r = u.Z.generateTextForNode(a.success ? a.data.root : void 0),
                    s = r.length ? r : t.content;
                if (s) {
                    let e = getContentSnapshot({
                        content: s
                    });
                    return n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: "your post"
                        }), g.L_, e]
                    }) : e
                }
                if ("ActivityFeedGroupBackingPost" === t.__typename) switch (t.activityFeedGroup.information.__typename) {
                    case "ReleaseDroppedAggregate":
                        {
                            let {
                                activityFeedGroup: {
                                    information: {
                                        release: {
                                            title: e,
                                            artist: {
                                                name: a
                                            }
                                        }
                                    }
                                }
                            } = t,
                            r = getContentSnapshot({
                                content: `${e} - ${a}`,
                                maxLength: 30
                            });
                            return n ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "your drop activity"
                                }), g.L_, r]
                            }) : r
                        }
                    case "UserCollectedManySongsAggregate":
                        {
                            let {
                                activityFeedGroup: {
                                    information: {
                                        collectedReleases: e
                                    }
                                }
                            } = t,
                            a = e.slice(0, 3).map(e => {
                                let {
                                    release: {
                                        title: t,
                                        artist: {
                                            name: n
                                        }
                                    }
                                } = e;
                                return `${t} - ${n}`
                            }).join(", "),
                            r = getContentSnapshot({
                                content: a,
                                maxLength: 24
                            });
                            return n ? (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)("span", {
                                    children: "your collecting activity"
                                }), g.L_, r]
                            }) : r
                        }
                    default:
                        return "your activity"
                }
                return null
            }
        },
        43416: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return useUserNotificationStatus
                }
            });
            var i = n(97352),
                a = n(71992);
            n(96960);
            var r = n(96301),
                s = n(36750),
                l = n(3928),
                o = n(42529),
                d = n(85846),
                c = n(31265),
                u = n(63558),
                m = n(80834),
                p = n(82443),
                f = n(58102);
            let h = m.z.object({
                    lastReadTimestamp: m.z.number().optional()
                }),
                x = (0, c.sj)({
                    notificationStatus: {},
                    loading: !1
                }),
                useNotificationState = () => (0, u.R)(x),
                setNotificationStatusPersistence = e => {
                    let {
                        lastReadTimestamp: t
                    } = e;
                    x.notificationStatus.lastReadTimestamp = t
                },
                g = (0, f.U)({
                    schema: h,
                    key: `@soundxyz/notification-lastReadTimestamp-${"production"===p.Gv?"":"-"+p.Gv}-1.0`
                });
            g.initialValue.then(e => {
                if (x.loading = !0, !e) {
                    x.loading = !1;
                    return
                }
                Object.assign(x.notificationStatus, e), x.loading = !0
            }).catch(console.error);
            var b = n(19173);
            (0, s.c)({
                trigger: [l.$39, l.riO, l.AO8],
                refetch: [l.GwS]
            });
            let useUserNotificationStatus = () => {
                let {
                    isAuthenticatedWithAPI: e
                } = (0, r.aC)(), [t, n] = i.useState(!1), {
                    data: s,
                    isLoading: c,
                    refetch: u
                } = (0, l.aM2)(l.GwS, {
                    enabled: e,
                    onSuccess: e => {
                        let {
                            data: t
                        } = e;
                        n(t.userNotificationsStatus.hasUnreadNotifications)
                    },
                    ...d.gq
                }), {
                    asPath: m
                } = (0, a.useRouter)(), {
                    notificationStatus: p
                } = useNotificationState(), {
                    mutate: f,
                    isLoading: h
                } = (0, l.Dbo)(l.$39, {
                    onSuccess: e => {
                        let {
                            data: t
                        } = e, n = m.includes("/notifications");
                        t.markAllUserNotificationsRead.lastReadTimestamp && n && g.set({
                            lastReadTimestamp: t.markAllUserNotificationsRead.lastReadTimestamp
                        })
                    }
                }), x = null == s ? void 0 : s.data.userNotificationsStatus, v = i.useMemo(() => (null == x ? void 0 : x.lastReadTimestamp) ? x.lastReadTimestamp : null, [null == x ? void 0 : x.lastReadTimestamp]), j = i.useMemo(() => {
                    var e;
                    return null !== (e = p.lastReadTimestamp) && void 0 !== e ? e : v ? v - 10 : null
                }, [v, p.lastReadTimestamp]), w = (0, o.R)(() => {
                    f({}), u(), v && v !== j && setNotificationStatusPersistence({
                        lastReadTimestamp: v
                    })
                });
                return (0, b.S)({
                    onNewGlobalUserNotificationSubscribeData: () => {
                        u()
                    },
                    onNewUserNotificationSubscribeData: () => {
                        u()
                    }
                }), {
                    isLoading: c,
                    hasUnreadNotifications: t,
                    lastReadTimestamp: v,
                    previousTimestamp: j,
                    mutateNotificationStatus: f,
                    markNotificationsAsRead: w,
                    isMarkingNotificationsAsRead: h
                }
            }
        },
        19173: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return useUserNotifications
                },
                S: function() {
                    return useUserNotificationSubscriptions
                }
            }), n(96960);
            var i = n(18873),
                a = n(96301),
                r = n(44397),
                s = n(3928),
                l = n(85846);

            function useUserNotifications() {
                let {
                    authUser: e
                } = (0, a.aC)(), t = null == e ? void 0 : e.id, {
                    orderedList: n,
                    isLoading: r,
                    isFetchingNextPage: o,
                    loadMoreNextPage: d,
                    hasNextPage: c = !1,
                    isInitialLoading: u,
                    refetch: m
                } = (0, s.NSZ)(s.hMK, {
                    getNextPageParam(e) {
                        let {
                            data: {
                                userNotifications: t
                            }
                        } = e;
                        return (null == t ? void 0 : t.pageInfo.hasNextPage) && {
                            after: t.pageInfo.endCursor
                        }
                    },
                    list(t) {
                        let {
                            userNotifications: n
                        } = t;
                        return null == n ? void 0 : n.edges.filter(t => {
                            let {
                                node: n
                            } = t;
                            if ("ViralPresave" === n.__typename) {
                                var a;
                                let {
                                    presaveRelease: t
                                } = (0, s.S3c)(s.RgD, n), r = !!t.mintStartTime && i.E.getUnixTime(new Date) >= t.mintStartTime, l = (null == e ? void 0 : null === (a = e.artist) || void 0 === a ? void 0 : a.id) === t.artist.id;
                                if (r || !t.spotifyPresaveCampaign || l) return !1
                            }
                            if ("PresaveDropStarted" === n.__typename) {
                                let {
                                    presaveRelease: e
                                } = (0, s.S3c)(s.T7w, n), t = !!e.mintStartTime && i.E.getUnixTime(new Date) >= e.mintStartTime;
                                if (t || !e.spotifyPresaveCampaign) return !1
                            }
                            if ("ReleasePresaved" === n.__typename) {
                                let {
                                    featuredUsers: e,
                                    numUsers: t
                                } = (0, s.S3c)(s.Tmg, n);
                                if (0 === t || e.length <= 0) return !1
                            }
                            return !0
                        }).map(e => {
                            let {
                                node: t
                            } = e;
                            return t
                        })
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    filterQueryKey: {
                        authUserId: t
                    },
                    enabled: !!t,
                    variables(e) {
                        let {
                            pageParam: t
                        } = e, n = (null == t ? void 0 : t.after) || null;
                        return {
                            pagination: {
                                first: null == n ? 20 : 15,
                                after: n
                            }
                        }
                    },
                    refetchOnReconnect: !1,
                    refetchOnWindowFocus: !1,
                    ...l.gq
                });
                return {
                    data: n,
                    isLoading: r,
                    isInitialLoading: u,
                    isFetchingNextPage: o,
                    loadMore: d,
                    hasNextPage: c,
                    refetch: m
                }
            }

            function useUserNotificationSubscriptions(e) {
                let {
                    onNewGlobalUserNotificationSubscribeData: t,
                    onNewUserNotificationSubscribeData: n
                } = e, {
                    isAuthenticatedWithAPI: i
                } = (0, a.aC)();
                (0, r.mU)({
                    query: s.riO,
                    enabled: !!i,
                    onData: n
                }), (0, r.mU)({
                    query: s.AO8,
                    enabled: !!i,
                    onData: t
                })
            }
        },
        8094: function(e, t, n) {
            "use strict";
            n.d(t, {
                $F: function() {
                    return x
                },
                AW: function() {
                    return DropdownMenuContent
                },
                E6: function() {
                    return GlobalDropdown
                },
                Xi: function() {
                    return g
                },
                h_: function() {
                    return h
                },
                i_: function() {
                    return o
                }
            });
            var i = n(16356),
                a = n(97352),
                r = n(84298),
                s = n(8205);
            let GlobalDropdown = e => {
                    let {
                        trigger: t,
                        children: n,
                        align: r,
                        css: s,
                        onOpenChange: o,
                        queue: d,
                        wrapperContentProps: c,
                        isModal: u = !1,
                        disabled: m
                    } = e, p = (0, a.useRef)(!1), [f, g] = (0, a.useState)(!1);
                    return (0, i.jsx)(l, {
                        css: s,
                        onPointerDownCapture: e => {
                            "touch" !== e.pointerType || f || e.preventDefault()
                        },
                        onTouchMove: () => {
                            p.current = !0
                        },
                        onTouchEnd: () => {
                            p.current || f || g(!0), p.current = !1
                        },
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: (0, i.jsxs)(h, {
                            open: f,
                            modal: u,
                            onOpenChange: e => {
                                g(e), null == o || o()
                            },
                            children: [(0, i.jsx)(x, {
                                disabled: m,
                                asChild: !0,
                                children: t
                            }), (0, i.jsx)(DropdownMenuContent, {
                                align: r,
                                queue: d,
                                ...c,
                                children: n
                            })]
                        })
                    })
                },
                l = (0, s.zo)("div", {
                    width: "auto"
                }),
                o = (0, s.zo)("span", {
                    marginLeft: 8
                }),
                d = (0, s.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                c = (0, s.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                u = (0, s.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                m = (0, s.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                p = (0, s.zo)(r.VY, {
                    zIndex: "$dropdown",
                    minWidth: 172,
                    "@tablet": {
                        minWidth: 190
                    },
                    marginTop: 4,
                    backgroundColor: "white",
                    borderRadius: 8,
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 6px 16px rgba(0, 0, 0, 0.12);",
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "400ms",
                        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform, opacity",
                        '&[data-state="open"]': {
                            '&[data-side="top"]': {
                                animationName: u
                            },
                            '&[data-side="right"]': {
                                animationName: m
                            },
                            '&[data-side="bottom"]': {
                                animationName: d
                            },
                            '&[data-side="left"]': {
                                animationName: c
                            }
                        }
                    },
                    variants: {
                        queue: {
                            true: {
                                zIndex: "$audioPlayerQueueDropdown"
                            }
                        },
                        compactWidth: {
                            true: {
                                minWidth: "unset"
                            }
                        }
                    }
                }),
                f = (0, s.zo)(r.ck, {
                    all: "unset",
                    base: "M",
                    lineHeight: "14px",
                    fontStyle: "medium",
                    display: "flex",
                    padding: "6px 10px",
                    alignItems: "center",
                    color: "$neutral800",
                    height: 32,
                    borderRadius: 6,
                    position: "relative",
                    userSelect: "none",
                    cursor: "pointer",
                    "&[data-disabled]": {
                        color: "$neutral400",
                        pointerEvents: "none"
                    },
                    "&[data-highlighted]": {
                        backgroundColor: "$neutral100"
                    },
                    svg: {
                        width: 20
                    }
                }),
                h = r.fC,
                x = r.xz,
                DropdownMenuContent = function(e) {
                    let {
                        children: t,
                        disablePortal: n = !1,
                        ...a
                    } = e;
                    return n ? (0, i.jsx)(p, { ...a,
                        children: t
                    }) : (0, i.jsx)(r.Uv, {
                        children: (0, i.jsx)(p, { ...a,
                            children: t
                        })
                    })
                },
                g = f
        },
        88343: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return Timestamp
                }
            });
            var i = n(16356),
                a = n(97352),
                r = n(66373),
                s = n(44361),
                l = n(50491),
                o = n(3141),
                d = n(64571);

            function TimestampText(e) {
                let {
                    timestampDate: t,
                    className: n,
                    addSuffix: l
                } = e, c = a.useMemo(() => (0, r.default)(t, 1), [t]), {
                    seconds: u
                } = (0, o.J7)({
                    expiryTimestamp: c
                }), m = a.useMemo(() => (0, d.SS)(t.getTime(), l), [l, t, u % 5 == 0]);
                return (0, i.jsx)("span", {
                    className: (0, s.m)("whitespace-nowrap font-base text-base-xs tabular-nums text-base400", n),
                    children: m
                })
            }
            let Timestamp = e => {
                let {
                    timeStamp: t,
                    className: n,
                    addSuffix: r
                } = e, s = a.useMemo(() => new Date(t), [t]), o = a.useMemo(() => (0, i.jsx)(TimestampText, {
                    timestampDate: s,
                    className: n,
                    addSuffix: r
                }), [r, n, s]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: "flex items-center lt:hidden",
                        children: o
                    }), (0, i.jsx)(l.r, {
                        dateTime: s,
                        className: "hidden items-center lt:flex",
                        children: o
                    })]
                })
            }
        },
        44456: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return PlayContentWrapper
                },
                j: function() {
                    return PlayIndicatorBars
                }
            });
            var i = n(16356);
            n(97352);
            var a = n(44361);
            let PlayIndicatorBars = e => {
                    let {
                        size: t = "sm",
                        smallBars: n,
                        className: r
                    } = e, s = (0, a.m)("block w-[3px] flex-shrink-0 origin-bottom  rounded-full bg-fuchsia500 transition-all duration-100 ease-in-out", n ? "h-3" : "h-4");
                    return (0, i.jsxs)("div", {
                        className: (0, a.m)("flex flex-shrink-0 items-end justify-between", "xs" === t && "h-3.5 w-3", "sm" === t && "h-4 w-[13.5px]", r),
                        children: [(0, i.jsx)("div", {
                            className: (0, a.m)(s, n ? " animate-[playPulse_0.5s_ease-in-out_-0.2s_infinite_alternate] " : " animate-[playPulse_0.45s_ease-in-out_-0.2s_infinite_alternate] ")
                        }), (0, i.jsx)("div", {
                            className: (0, a.m)(s, n ? "animate-[playPulse_0.65s_ease-in-out_-0.7s_infinite_alternate] " : "animate-[playPulse_0.6s_ease-in-out_-0.6s_infinite_alternate] ")
                        }), (0, i.jsx)("div", {
                            className: (0, a.m)(s, n ? "animate-[playPulse_0.35s_ease-in-out_-0.5s_infinite_alternate] " : "animate-[playPulse_0.3s_ease-in-out_-0.4s_infinite_alternate] ")
                        })]
                    })
                },
                PlayContentWrapper = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: "flex max-w-full items-center gap-1",
                        children: t
                    })
                }
        },
        50491: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return DateTimeTooltip
                }
            });
            var i = n(16356);
            n(97352);
            var a = n(49542),
                r = n(5221),
                s = n(24924),
                l = n.n(s);
            let o = l()(() => Promise.resolve().then(n.bind(n, 34524)).then(e => e.Tooltip), {
                    loadableGenerated: {
                        webpack: () => [34524]
                    },
                    ssr: !1
                }),
                d = l()(() => Promise.resolve().then(n.bind(n, 34524)).then(e => e.Tooltip.Trigger), {
                    loadableGenerated: {
                        webpack: () => [34524]
                    },
                    ssr: !1
                }),
                c = l()(() => Promise.resolve().then(n.bind(n, 34524)).then(e => e.Tooltip.StyledContent), {
                    loadableGenerated: {
                        webpack: () => [34524]
                    },
                    ssr: !1
                }),
                DateTimeTooltip = e => {
                    let {
                        dateTime: t,
                        children: n,
                        className: s,
                        prefix: l
                    } = e;
                    return (0, i.jsxs)(o, {
                        openOnClick: !1,
                        children: [(0, i.jsx)(d, {
                            className: (0, a.default)("cursor-default", s),
                            children: n
                        }), (0, i.jsx)(c, {
                            side: "top",
                            className: "max-w-[208px] px-3 py-2 text-center text-base-s font-medium",
                            children: `${l||""}${(0,r.default)(t,"MMM d, yyyy • hh:mm a")}`
                        })]
                    })
                }
        },
        85906: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var i = n(50868);
            let a = (0, i.zo)("div", "bg-base200 h-[1px] w-full mb-4", {
                variants: {
                    orientation: {
                        horizontal: "h-[1px] w-full",
                        vertical: "w-[1px] h-full"
                    }
                },
                defaultVariants: {
                    orientation: "horizontal"
                }
            })
        },
        36619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HoverCard: function() {
                    return HoverCard
                },
                StyledHoverContent: function() {
                    return StyledHoverContent
                }
            });
            var i = n(16356);
            n(97352);
            var a = n(75928),
                r = n(8205),
                s = n(46061),
                l = n(24455);

            function HoverCard(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    openDelay: a = 0
                } = n;
                return (0, i.jsx)(o, {
                    openDelay: a,
                    ...n,
                    children: t
                })
            }

            function StyledHoverContent(e) {
                let {
                    children: t,
                    css: n,
                    ...r
                } = e, {
                    sideOffset: s = 5,
                    side: o = "bottom",
                    avoidCollisions: c = !0
                } = r, u = (0, l.Z)();
                return (0, i.jsx)(a.h_, {
                    children: (0, i.jsx)(d, {
                        sideOffset: s,
                        side: o,
                        avoidCollisions: c,
                        collisionBoundary: u,
                        ...r,
                        css: n,
                        children: t
                    })
                })
            }
            let o = (0, r.zo)(a.fC, {
                    backgroundColor: "$neutral900"
                }),
                d = (0, r.zo)(a.VY, { ...s._R,
                    opacity: 1,
                    zIndex: "$tooltip"
                }),
                c = (0, r.zo)(a.VY, {
                    variants: {
                        animate: {
                            true: { ...s.Q_
                            }
                        }
                    }
                });
            HoverCard.StyledContent = StyledHoverContent, HoverCard.Content = function(e) {
                let {
                    children: t,
                    animate: n,
                    ...a
                } = e;
                return (0, i.jsx)(c, {
                    animate: n,
                    ...a,
                    children: t
                })
            }, HoverCard.Trigger = a.xz, HoverCard.Portal = a.h_
        },
        12437: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return a
                }
            });
            var i = n(8205);
            let a = (0, i.zo)("div", {
                position: "absolute",
                display: "inline-block",
                width: 8,
                height: 8,
                background: `${i.rS.gradients.fuchsia.value}`,
                borderRadius: "50%",
                verticalAlign: "super",
                marginLeft: 4
            })
        },
        81992: function(e, t, n) {
            "use strict";
            n.d(t, {
                I5: function() {
                    return r.VY
                },
                Ur: function() {
                    return c
                },
                aV: function() {
                    return r.aV
                },
                mQ: function() {
                    return Tabs
                },
                td: function() {
                    return TabList
                },
                vy: function() {
                    return u
                },
                xz: function() {
                    return r.xz
                }
            });
            var i = n(16356),
                a = n(97352),
                r = n(69761),
                s = n(8205),
                l = n(12437);
            let o = a.createContext(null),
                d = (0, s.zo)(r.xz, {
                    transition: "color 0.1s ease",
                    textTransform: "capitalize",
                    WebkitTapHighlightColor: "transparent",
                    borderBottom: "2px solid transparent",
                    outline: "none",
                    paddingBottom: "4px",
                    title: "M",
                    "@tablet": {
                        paddingBottom: "8px"
                    },
                    '&[data-state="active"]': {
                        color: "$base800",
                        borderBottom: "2px solid $black"
                    },
                    '&[data-state="inactive"]': {
                        color: "$base500"
                    },
                    "&:hover": {
                        color: "$base800"
                    },
                    "&[data-disabled]": {
                        cursor: "not-allowed",
                        borderBottom: "none",
                        color: "$base500",
                        opacity: .3
                    },
                    variants: {
                        size: {
                            xl: {
                                fontSize: 32,
                                lineHeight: "40px",
                                fontFamily: "$title",
                                fontWeight: 500
                            },
                            lg: {
                                title: "L"
                            },
                            md: {
                                title: "M"
                            },
                            sm: {
                                title: "S"
                            }
                        },
                        hasIcon: {
                            true: {
                                display: "flex"
                            }
                        }
                    }
                }),
                c = a.forwardRef((e, t) => {
                    let {
                        label: n,
                        icon: r,
                        showIndicator: s,
                        ...c
                    } = e, u = (0, a.useContext)(o);
                    return (0, i.jsxs)(d, { ...c,
                        ref: t,
                        size: u || void 0,
                        hasIcon: !!r,
                        children: [n, r, !!s && (0, i.jsx)(l.z, {})]
                    })
                });
            c.displayName = "TabTrigger";
            let u = (0, s.zo)(r.aV, {
                    position: "relative",
                    display: "flex",
                    flexShrink: 0,
                    width: "100%",
                    gap: 24,
                    verticalAlign: "baseline",
                    borderBottom: "1px solid $base200",
                    variants: {
                        isXL: {
                            true: {
                                gap: 32
                            }
                        }
                    }
                }),
                TabList = e => {
                    let {
                        children: t,
                        ...n
                    } = e, r = (0, a.useContext)(o);
                    return (0, i.jsx)(u, {
                        isXL: "xl" === r,
                        ...n,
                        children: t
                    })
                },
                Tabs = e => {
                    let {
                        size: t,
                        ...n
                    } = e;
                    return (0, i.jsx)(o.Provider, {
                        value: t || null,
                        children: (0, i.jsx)(r.fC, { ...n
                        })
                    })
                }
        },
        25347: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return UserHoverCard
                }
            });
            var i = n(16356),
                a = n(97352),
                r = n(24924),
                s = n.n(r),
                l = n(36619);
            let o = s()(() => Promise.resolve().then(n.bind(n, 36619)).then(e => e.HoverCard.Trigger), {
                    loadableGenerated: {
                        webpack: () => [36619]
                    },
                    ssr: !1
                }),
                d = s()(() => Promise.resolve().then(n.bind(n, 36619)).then(e => e.StyledHoverContent), {
                    loadableGenerated: {
                        webpack: () => [36619]
                    },
                    ssr: !1
                }),
                UserHoverCard = e => {
                    let {
                        trigger: t,
                        userHoverCardContent: n,
                        triggerAsChild: r = !1,
                        align: s
                    } = e, c = a.useRef(null);
                    return (0, i.jsxs)(l.HoverCard, {
                        closeDelay: 100,
                        openDelay: 200,
                        children: [(0, i.jsx)(o, {
                            ref: c,
                            style: {
                                minWidth: 0
                            },
                            asChild: r,
                            children: t
                        }), (0, i.jsx)(d, {
                            className: "p-0",
                            sideOffset: 8,
                            onPointerDownOutside: e => {
                                e.target === c.current && e.preventDefault()
                            },
                            align: s,
                            children: n
                        })]
                    })
                }
        },
        77566: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return useIsSsr
                }
            });
            var i = n(17941);
            let useIsSsr = () => {
                let e = (0, i.a)();
                return !e
            }
        },
        3141: function(e, t, n) {
            "use strict";
            n.d(t, {
                J7: function() {
                    return useTimer
                }
            });
            var i = n(97352),
                a = n(18167),
                r = n(97193),
                s = n(31265),
                l = n(42529);

            function getSecondsFromExpiry(e, t) {
                let n = ("number" == typeof e ? e : e.getTime()) - new Date().getTime();
                if (n > 0) {
                    let e = (0, a.Z)(n);
                    return t ? Math.round(e) : e
                }
                return 0
            }

            function getDelayFromExpiryTimestamp(e) {
                let t = ("number" == typeof e ? e : new Date(e).getTime()) > 0;
                if (!t) return null;
                let n = getSecondsFromExpiry(e),
                    i = (0, r.Z)(Math.floor(n - Math.floor(n)));
                return i > 0 ? i : 1e3
            }
            let o = (0, s.sj)({
                now: Date.now()
            });

            function useTimer(e) {
                let {
                    expiryTimestamp: t,
                    onExpire: n,
                    autoStart: a = !0
                } = e, d = "number" == typeof t ? t : t.getTime(), [c, u] = i.useState(d), [m, p] = i.useState(() => getSecondsFromExpiry(c)), [f, h] = i.useState(() => a && Date.now() < d), [x, g] = i.useState(a), [b, v] = i.useState(() => getDelayFromExpiryTimestamp(c));
                i.useEffect(() => {
                    u(d), h(!!d && Date.now() < d)
                }, [d]);
                let j = (0, l.R)(() => {
                        n && n(), h(!1), v(null)
                    }),
                    w = i.useCallback(() => {
                        h(!1)
                    }, []),
                    y = i.useCallback(function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        v(getDelayFromExpiryTimestamp(e)), g(t), h(t), u(e), p(getSecondsFromExpiry(e))
                    }, []),
                    C = i.useCallback(() => {
                        let e = new Date;
                        e.setMilliseconds(e.getMilliseconds() + (0, r.Z)(m)), y(e)
                    }, [y, m]),
                    N = i.useCallback(() => {
                        x ? (p(getSecondsFromExpiry(c)), h(!0)) : C()
                    }, [x, c, C]);
                return (0, i.useEffect)(() => {
                    if (f) return 1e3 !== b && v(1e3), (0, s.Ld)(o, () => {
                        let e = getSecondsFromExpiry(c);
                        p(e), e <= 0 && j()
                    })
                }, [f, b, v, c, j]), { ... function(e) {
                        let t = Math.ceil(e);
                        return {
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t % 3600 / 60),
                            hours: Math.floor(t % 86400 / 3600),
                            days: Math.floor(t / 86400)
                        }
                    }(m),
                    start: N,
                    pause: w,
                    resume: C,
                    restart: y,
                    isRunning: f
                }
            }
            setInterval(() => {
                o.now = Date.now()
            }, 1e3)
        },
        79320: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return useWindowSize
                }
            });
            var i = n(97352),
                a = n(22248);

            function useWindowSize() {
                let [e, t] = i.useState({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                return (0, i.useEffect)(() => {
                    let e = (0, a.Z)(() => {
                        t({
                            width: window.innerWidth,
                            height: window.innerHeight
                        })
                    }, 250);
                    return e(), window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e), e.cancel()
                    }
                }, []), e
            }
        },
        26560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return Notifications
                }
            });
            var i = n(16356),
                a = n(97352),
                r = n(73534),
                s = n(85787),
                l = n(24924),
                o = n.n(l),
                d = n(58285),
                c = n(11817),
                u = n(73334),
                m = n(72102),
                p = n(6665),
                f = n(9417),
                h = n(69598),
                x = n(28166);
            let PopupButton = e => {
                    let {
                        dataTestId: t,
                        bottom: n = 10,
                        onClick: a,
                        loading: s,
                        label: l,
                        isVisible: o
                    } = e;
                    return (0, i.jsx)(p.fC, {
                        open: !0,
                        children: (0, i.jsxs)(p.h_, {
                            children: [(0, i.jsx)(r.E.div, {
                                className: "fixed z-above2 flex w-full items-center justify-center will-change-[bottom] ",
                                animate: o ? "reveal" : "hide",
                                variants: {
                                    reveal: {
                                        opacity: 1,
                                        bottom: n
                                    },
                                    hide: {
                                        opacity: 0,
                                        bottom: n - 100
                                    }
                                },
                                initial: "hide",
                                transition: {
                                    type: "spring",
                                    stiffness: 100,
                                    delay: 1
                                },
                                "data-testid": x.n.POPUP_BUTTON_WRAPPER,
                                children: (0, i.jsx)(h.z, {
                                    testId: t,
                                    label: l,
                                    leadingIcon: s ? null : (0, i.jsx)(m.G, {
                                        icon: f.u2
                                    }),
                                    variant: "primary",
                                    size: "M",
                                    className: "h-8 rounded-xl text-base-s md:text-base-m",
                                    onClick: a,
                                    loading: s
                                })
                            }), (0, i.jsx)("span", {
                                className: "fixed left-1/2 h-5 w-5 translate-x-1/2",
                                id: "rewardId",
                                style: {
                                    bottom: n
                                }
                            })]
                        })
                    })
                },
                NewNotificationButton = e => {
                    let {
                        bottom: t = 10,
                        isVisible: n,
                        onClick: a,
                        loading: r
                    } = e;
                    return (0, i.jsx)(PopupButton, {
                        isVisible: n,
                        label: "new notification",
                        bottom: t,
                        onClick: a,
                        loading: r
                    })
                };
            n(96960);
            var g = n(94050),
                b = n(43416),
                v = n(96220),
                j = n(3928),
                w = n(25601);

            function RepostNotificationCard(e) {
                var t, n;
                let {
                    notificationFrag: a
                } = e, {
                    reposter: r,
                    post: s,
                    timestamp: l
                } = (0, j.S3c)(j.SDj, a), {
                    previousTimestamp: o
                } = (0, b.I)();
                if (!s || !r) return null;
                let d = !!o && (0, g.FU)({
                    timestamp: l,
                    previousTimestamp: o
                });
                return (0, i.jsxs)(g.aj, {
                    children: [(0, i.jsx)(w.i, {
                        postWebappUri: s.webappUri,
                        postContentFrag: s,
                        userFrag: r,
                        action: "reposted"
                    }), (0, i.jsxs)("div", {
                        className: "z-above1 flex min-w-[80px] max-w-[80px] flex-shrink-0 items-center justify-end gap-1 sm:gap-1.5 dt:min-w-[136px] dt:gap-4",
                        children: [(0, i.jsx)("div", {
                            className: "block lt:hidden",
                            children: (0, i.jsx)(v.e, {
                                userId: r.id,
                                sourceLocation: "Repost Notification",
                                variant: "notification",
                                size: "XS",
                                useIcon: !0,
                                artistId: null === (t = r.artist) || void 0 === t ? void 0 : t.id
                            })
                        }), (0, i.jsx)("div", {
                            className: "hidden lt:block",
                            children: (0, i.jsx)(v.e, {
                                userId: r.id,
                                sourceLocation: "Repost Notification",
                                variant: "notification",
                                size: "XS",
                                artistId: null === (n = r.artist) || void 0 === n ? void 0 : n.id
                            })
                        }), (0, i.jsx)(g.Xy, {
                            timeStamp: l,
                            hasRead: d
                        })]
                    })]
                })
            }
            var y = n(19173),
                C = n(69965),
                N = n(60963),
                z = n(20902),
                S = n(43158),
                k = n(77566),
                P = n(42529),
                T = n(81688),
                F = n(64571);
            let _ = o()(() => n.e(9554).then(n.bind(n, 89554)).then(e => e.EmptyNotifications), {
                    loadableGenerated: {
                        webpack: () => [89554]
                    },
                    ssr: !1
                }),
                M = o()(() => Promise.resolve().then(n.bind(n, 60963)).then(e => e.TrendingRecommendedFollows), {
                    loadableGenerated: {
                        webpack: () => [60963]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(N.TrendingRecommendedFollowsSkeleton, {})
                }),
                L = o()(() => Promise.all([n.e(8608), n.e(3429), n.e(3997)]).then(n.bind(n, 47552)).then(e => e.ArtistDrop), {
                    loadableGenerated: {
                        webpack: () => [47552]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                R = o()(() => n.e(6661).then(n.bind(n, 96661)).then(e => e.GoldenEggWinnerCard), {
                    loadableGenerated: {
                        webpack: () => [96661]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                I = o()(() => n.e(6307).then(n.bind(n, 16307)).then(e => e.NewFollowerCard), {
                    loadableGenerated: {
                        webpack: () => [16307]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                O = o()(() => Promise.all([n.e(8608), n.e(3429), n.e(8018)]).then(n.bind(n, 30716)).then(e => e.PresaleArtistDrop), {
                    loadableGenerated: {
                        webpack: () => [30716]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                U = o()(() => n.e(6251).then(n.bind(n, 6251)).then(e => e.ReferralReceivedCard), {
                    loadableGenerated: {
                        webpack: () => [6251]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                D = o()(() => n.e(8979).then(n.bind(n, 48979)).then(e => e.SubscribeCard), {
                    loadableGenerated: {
                        webpack: () => [48979]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                E = o()(() => n.e(485).then(n.bind(n, 485)).then(e => e.ReleaseMintedCard), {
                    loadableGenerated: {
                        webpack: () => [485]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                G = o()(() => Promise.all([n.e(8608), n.e(3429), n.e(3562)]).then(n.bind(n, 75627)).then(e => e.ViralMintCard), {
                    loadableGenerated: {
                        webpack: () => [75627]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                H = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(5772), n.e(5143)]).then(n.bind(n, 55143)).then(e => e.NewPostCommentCard), {
                    loadableGenerated: {
                        webpack: () => [55143]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                A = o()(() => Promise.all([n.e(8606), n.e(8619)]).then(n.bind(n, 98619)).then(e => e.PostUpvotedCard), {
                    loadableGenerated: {
                        webpack: () => [98619]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                $ = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(8158), n.e(4856)]).then(n.bind(n, 4856)).then(e => e.ArtistReleasePosted), {
                    loadableGenerated: {
                        webpack: () => [4856]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                V = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(2646)]).then(n.bind(n, 8507)).then(e => e.NewCommentOnRelease), {
                    loadableGenerated: {
                        webpack: () => [8507]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                Z = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(1261)]).then(n.bind(n, 31474)).then(e => e.NewPostCommentReply), {
                    loadableGenerated: {
                        webpack: () => [31474]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                B = o()(() => Promise.all([n.e(8606), n.e(4226)]).then(n.bind(n, 54226)).then(e => e.NewPostCommentUpvote), {
                    loadableGenerated: {
                        webpack: () => [54226]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                W = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(8158), n.e(2267)]).then(n.bind(n, 12267)).then(e => e.PlaylistPostedNotif), {
                    loadableGenerated: {
                        webpack: () => [12267]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                X = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(5772), n.e(889)]).then(n.bind(n, 20889)).then(e => e.MentionedInPostCommentNotification), {
                    loadableGenerated: {
                        webpack: () => [20889]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                q = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(8158), n.e(8002)]).then(n.bind(n, 88002)).then(e => e.MentionedInPostNotification), {
                    loadableGenerated: {
                        webpack: () => [88002]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                Y = o()(() => Promise.all([n.e(8608), n.e(8631), n.e(9032), n.e(7475)]).then(n.bind(n, 84716)).then(e => e.MentionedInPostCommentReplyNotification), {
                    loadableGenerated: {
                        webpack: () => [84716]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1,
                        avatar: !0
                    })
                }),
                Q = o()(() => Promise.all([n.e(8539), n.e(1872)]).then(n.bind(n, 41872)).then(e => e.ReleasePresaved), {
                    loadableGenerated: {
                        webpack: () => [41872]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                J = o()(() => Promise.all([n.e(9416), n.e(6313)]).then(n.bind(n, 66313)).then(e => e.PresaveDropStarted), {
                    loadableGenerated: {
                        webpack: () => [66313]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                K = o()(() => n.e(2417).then(n.bind(n, 92417)).then(e => e.PresaveGiftReceived), {
                    loadableGenerated: {
                        webpack: () => [92417]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                ee = o()(() => Promise.all([n.e(8539), n.e(2123)]).then(n.bind(n, 2123)).then(e => e.ViralPresave), {
                    loadableGenerated: {
                        webpack: () => [2123]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                et = o()(() => Promise.all([n.e(8608), n.e(7628)]).then(n.bind(n, 32953)).then(e => e.NewChannelMember), {
                    loadableGenerated: {
                        webpack: () => [32953]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                }),
                en = o()(() => Promise.all([n.e(8608), n.e(5188)]).then(n.bind(n, 6637)).then(e => e.NewChannelPost), {
                    loadableGenerated: {
                        webpack: () => [6637]
                    },
                    ssr: !1,
                    loading: () => (0, i.jsx)(g.iO, {
                        length: 1
                    })
                });

            function Notifications() {
                let {
                    isInitialLoading: e,
                    data: t,
                    loadMore: n,
                    hasNextPage: l,
                    refetch: o
                } = (0, y.A)(), [m, p] = a.useState(!1), f = (0, k.I)(), {
                    tablet: h
                } = S.MediaQuery.useContainer(), {
                    activeTrackId: x,
                    hideAudioPlayer: v
                } = (0, T.PZ)(), j = a.useMemo(() => l ? (0, i.jsx)(g.iO, {
                    length: 15
                }) : null, [l]), {
                    mutateNotificationStatus: w,
                    markNotificationsAsRead: N,
                    hasUnreadNotifications: L
                } = (0, b.I)();
                a.useEffect(() => {
                    w({})
                }, [w]);
                let R = (0, P.R)(async () => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        }), await (0, F.Dc)(200), p(!0), await (0, F.Dc)(50), window.scrollTo({
                            top: 0
                        }), await o(), N(), window.scrollTo({
                            top: 0
                        }), p(!1)
                    }),
                    I = (null == t ? void 0 : t.length) === 0 && !e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(C.pQ, {
                        title: "Notifications"
                    }), (0, i.jsx)(z.q, {
                        leftContent: (0, i.jsxs)("div", {
                            className: "flex w-full flex-1 flex-col",
                            children: [(0, i.jsx)("h1", {
                                className: "hidden text-center font-title text-title-l font-medium text-black md:block md:text-left",
                                children: "Notifications"
                            }), (0, i.jsx)("div", {
                                className: "z-above1 flex w-full flex-col",
                                children: (0, i.jsx)(a.Suspense, {
                                    fallback: (0, i.jsx)(g.iO, {
                                        length: 15
                                    }),
                                    children: I ? (0, i.jsx)(_, {}) : e ? (0, i.jsx)(g.iO, {
                                        length: 15
                                    }) : (0, i.jsx)(r.E.div, { ...(0, c.BX)({
                                            duration: .5,
                                            delay: .2
                                        }),
                                        className: "md:pt-4",
                                        children: (0, i.jsx)(s.M, {
                                            children: (0, i.jsx)(d.OO, {
                                                useWindowScroll: !0,
                                                data: t || [],
                                                itemContent: renderItem,
                                                endReached: n,
                                                components: {
                                                    Footer: () => j
                                                },
                                                style: {
                                                    willChange: "height"
                                                },
                                                increaseViewportBy: 100
                                            })
                                        })
                                    })
                                })
                            }), f ? null : (0, i.jsx)(NewNotificationButton, {
                                isVisible: L,
                                onClick: R,
                                bottom: h ? x && !v ? 103 : 10 : x && !v ? 136 : 76,
                                loading: m
                            })]
                        }),
                        rightContent: (0, i.jsxs)("div", {
                            className: "flex h-full flex-col justify-between gap-10",
                            children: [(0, i.jsx)(M, {}), (0, i.jsx)(u.a, {})]
                        })
                    })]
                })
            }

            function renderItem(e, t) {
                switch (t.__typename) {
                    case "SubscribeToEmailCTA":
                        return (0, i.jsx)(r.E.div, {
                            initial: {
                                opacity: 0,
                                minHeight: 64
                            },
                            animate: {
                                opacity: 1,
                                minHeight: 64
                            },
                            exit: {
                                opacity: 0,
                                minHeight: 0
                            },
                            children: (0, i.jsx)(D, {})
                        }, t.id);
                    case "NewFollower":
                        return (0, i.jsx)(I, {
                            notificationFrag: t
                        });
                    case "ReferralReceivedNotification":
                        return (0, i.jsx)(U, {
                            notificationFrag: t
                        });
                    case "GoldenEggWon":
                        return (0, i.jsx)(R, {
                            notificationFrag: t
                        });
                    case "PresaleStarted":
                        return (0, i.jsx)(O, {
                            notificationFrag: t
                        });
                    case "PublicSaleStarted":
                        return (0, i.jsx)(L, {
                            notificationFrag: t
                        });
                    case "ViralMintsReached":
                        return (0, i.jsx)(G, {
                            notificationFrag: t
                        });
                    case "ReleaseMinted":
                        return (0, i.jsx)(E, {
                            notificationFrag: t
                        });
                    case "NewPostComment":
                        return (0, i.jsx)(H, {
                            notificationFrag: t
                        });
                    case "NewPostUpvote":
                        return (0, i.jsx)(A, {
                            notificationFrag: t
                        });
                    case "ArtistReleasePosted":
                        return (0, i.jsx)($, {
                            notifFragment: t
                        });
                    case "NewCommentOnRelease":
                        return (0, i.jsx)(V, {
                            notificationFrag: t
                        });
                    case "NewPostCommentReply":
                        return (0, i.jsx)(Z, {
                            notificationFrag: t
                        });
                    case "NewPostCommentUpvote":
                        return (0, i.jsx)(B, {
                            notificationFrag: t
                        });
                    case "PlaylistPosted":
                        return (0, i.jsx)(W, {
                            notifFragment: t
                        });
                    case "MentionedInPost":
                        return (0, i.jsx)(q, {
                            notificationFrag: t
                        });
                    case "MentionedInPostComment":
                        return (0, i.jsx)(X, {
                            notificationFrag: t
                        });
                    case "MentionedInPostCommentReply":
                        return (0, i.jsx)(Y, {
                            notificationFrag: t
                        });
                    case "NewRepost":
                        return (0, i.jsx)(RepostNotificationCard, {
                            notificationFrag: t
                        });
                    case "ReleasePresaved":
                        return (0, i.jsx)(Q, {
                            notificationFrag: t
                        });
                    case "PresaveDropStarted":
                        return (0, i.jsx)(J, {
                            notificationFrag: t
                        });
                    case "PresaveGiftReceived":
                        return (0, i.jsx)(K, {
                            notificationFrag: t
                        });
                    case "ViralPresave":
                        return (0, i.jsx)(ee, {
                            notificationFrag: t
                        });
                    case "NewChannelMember":
                        return (0, i.jsx)(et, {
                            notificationFrag: t
                        });
                    case "NewChannelPost":
                        return (0, i.jsx)(en, {
                            notificationFrag: t
                        });
                    default:
                        return (0, F.y0)(t), null
                }
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
        9417: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "arrow-up-long",
                icon: [320, 512, ["long-arrow-up"], "f176", "M312.1 176.1C308.3 181.7 302.2 184 296 184s-12.28-2.344-16.97-7.031L184 81.94V488c0 13.25-10.75 24-24 24s-24-10.75-24-24V81.94L40.97 176.1c-9.375 9.375-24.56 9.375-33.94 0s-9.375-24.56 0-33.94l136-136c9.375-9.375 24.56-9.375 33.94 0l136 136C322.3 152.4 322.3 167.6 312.1 176.1z"]
            }, t.u2 = t.DF
        },
        23615: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "store",
                icon: [576, 512, [], "f54e", "M483.4 224C463.8 224 445.8 217.5 431.3 206.8C426.5 203.3 422.2 199.4 418.3 195C414.4 199.3 410.1 203.2 405.4 206.7C390.9 217.5 372.8 224 353.1 224C333.5 224 315.6 217.6 301.1 206.1C296.3 203.4 291.9 199.4 287.9 195C283.9 199.4 279.5 203.4 274.7 206.1C260.2 217.6 242.3 224 222.7 224C203.2 224 185.2 217.6 170.7 206.1C165.9 203.4 161.5 199.4 157.6 195C153.6 199.4 149.1 203.4 144.3 206.1C129.9 217.6 111.1 223.1 92.41 224C92.39 224 92.38 224 92.36 224C88.3 224 84.21 223.7 80.24 223.2C24.92 215.8-1.255 150.6 28.33 103.8L85.66 13.13C90.76 4.979 99.87 0 109.6 0H466.4C476.1 0 485.2 4.978 490.3 13.13L547.6 103.8C577.3 150.7 551 215.8 495.5 223.2C491.6 223.7 487.6 223.1 483.5 224C483.5 224 483.5 224 483.4 224H483.4zM455.6 48H120.4L68.91 129.5C63.12 138.6 62.57 149.9 66.65 159.6C70.57 168.8 77.67 174.4 86.56 175.6C88.57 175.9 90.54 176 92.36 176C104.2 176 114.6 170.9 121.9 162.8C131 152.8 143.1 147 157.6 147C171.1 147 184.1 152.8 193.2 162.8C200.5 170.9 210.9 176 222.7 176C234.6 176 244.1 170.9 252.3 162.8C261.4 152.8 274.3 147 287.9 147C301.5 147 314.4 152.8 323.5 162.8C330.8 170.9 341.3 176 353.1 176C364.9 176 375.3 170.9 382.6 162.8C391.7 152.8 404.6 147 418.2 147C431.7 147 444.7 152.7 453.8 162.8C461.2 170.9 471.7 176 483.4 176C485.4 176 487.3 175.9 489.3 175.6C498.3 174.4 505.4 168.8 509.3 159.6C513.4 149.1 512.9 138.7 507.1 129.5L455.6 48zM464 336V254.4C470.3 255.5 476.8 256 483.4 256C489 256 494.4 255.6 499.7 254.9L499.7 254.9C503.1 254.4 508 253.6 512 252.6V448C512 483.3 483.3 512 448 512H128C92.66 512 64 483.3 64 448V252.6C67.87 253.6 71.86 254.4 75.97 254.9L76.09 254.9C81.35 255.6 86.83 256 92.36 256C99.06 256 105.6 255.4 112 254.4V336H464zM464 384H112V448C112 456.8 119.2 464 128 464H448C456.8 464 464 456.8 464 448V384z"]
            }, t.vJ = t.DF
        },
        24180: function(e, t, n) {
            "use strict";

            function toInteger(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }
            n.d(t, {
                Z: function() {
                    return toInteger
                }
            })
        },
        66373: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return addHours
                }
            });
            var i = n(24180),
                a = n(91760),
                r = n(37901);

            function addHours(e, t) {
                (0, r.Z)(2, arguments);
                var n = (0, i.Z)(t);
                return (0, a.Z)(e, 36e5 * n)
            }
        },
        91760: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return addMilliseconds
                }
            });
            var i = n(24180),
                a = n(68711),
                r = n(37901);

            function addMilliseconds(e, t) {
                (0, r.Z)(2, arguments);
                var n = (0, a.default)(e).getTime(),
                    s = (0, i.Z)(t);
                return new Date(n + s)
            }
        },
        90146: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return isBefore
                }
            });
            var i = n(68711),
                a = n(37901);

            function isBefore(e, t) {
                (0, a.Z)(2, arguments);
                var n = (0, i.default)(e),
                    r = (0, i.default)(t);
                return n.getTime() < r.getTime()
            }
        },
        24114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return isEqual
                }
            });
            var i = n(68711),
                a = n(37901);

            function isEqual(e, t) {
                (0, a.Z)(2, arguments);
                var n = (0, i.default)(e),
                    r = (0, i.default)(t);
                return n.getTime() === r.getTime()
            }
        },
        18873: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            let i = class {
                    static fromUnixTime(e) {
                        return new Date(1e3 * e)
                    }
                    static getUnixTime(e) {
                        let t = "number" == typeof e ? e : e.getTime();
                        return Math.floor(t / 1e3)
                    }
                    static startOfDay(e) {
                        let t = new Date(e);
                        return t.setHours(0, 0, 0, 0), t
                    }
                    static subMinutes(e, t) {
                        let n = new Date(e);
                        return n.setMinutes(n.getMinutes() - t), n
                    }
                },
                a = i;
            a.SECOND = 1e3, a.MINUTE = 60 * i.SECOND, a.HOUR = 60 * i.MINUTE, a.DAY = 24 * i.HOUR, a.WEEK = 7 * i.DAY, a.MONTH = 30 * i.DAY, a.YEAR = 365 * i.DAY
        },
        19847: function(e, t, n) {
            "use strict";
            n.d(t, {
                g: function() {
                    return u
                }
            });
            var i = n(80834);
            let a = i.z.object({
                    type: i.z.literal("text"),
                    text: i.z.string().min(1, "Text cannot be empty"),
                    format: i.z.number(),
                    style: i.z.string(),
                    detail: i.z.number(),
                    mode: i.z.string(),
                    version: i.z.number()
                }),
                r = i.z.object({
                    type: i.z.literal("zeroWidth"),
                    text: i.z.string(),
                    format: i.z.number(),
                    style: i.z.string(),
                    detail: i.z.number(),
                    mode: i.z.string(),
                    version: i.z.number()
                }),
                s = i.z.object({
                    type: i.z.literal("linebreak"),
                    version: i.z.number()
                }),
                l = i.z.lazy(() => i.z.object({
                    type: i.z.literal("paragraph"),
                    children: c.array(),
                    direction: i.z.string().nullable(),
                    format: i.z.string(),
                    indent: i.z.number(),
                    version: i.z.number()
                })),
                o = i.z.lazy(() => i.z.object({
                    children: c.array(),
                    direction: i.z.string().nullable(),
                    format: i.z.string(),
                    indent: i.z.number(),
                    rel: i.z.string().nullable(),
                    target: i.z.string().nullable(),
                    title: i.z.string().nullable(),
                    type: i.z.literal("autolink"),
                    url: i.z.string().url(),
                    version: i.z.number()
                })),
                d = i.z.object({
                    type: i.z.literal("custom-beautifulMention"),
                    data: i.z.object({
                        displayName: i.z.string(),
                        artistId: i.z.string().uuid().nullable(),
                        avatarUrl: i.z.string().nullable(),
                        userId: i.z.string().uuid(),
                        webappUri: i.z.string(),
                        key: i.z.string()
                    }),
                    trigger: i.z.string(),
                    value: i.z.string().min(1, "Text cannot be empty"),
                    version: i.z.number()
                }),
                c = i.z.union([l, a, s, r, d, o]),
                u = i.z.object({
                    root: i.z.object({
                        type: i.z.literal("root"),
                        children: c.array(),
                        direction: i.z.string().nullable(),
                        format: i.z.string(),
                        indent: i.z.number(),
                        version: i.z.number()
                    })
                })
        }
    },
    function(e) {
        e.O(0, [4361, 9721, 2145, 5265, 2889, 3879, 5441, 286, 7701, 9761, 8285, 5221, 2332, 199, 8943, 5168, 9774, 2888, 179], function() {
            return e(e.s = 43999)
        }), _N_E = e.O()
    }
]);