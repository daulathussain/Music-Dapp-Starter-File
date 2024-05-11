(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6793, 6140, 8943], {
        99808: function(e, t, n) {
            "use strict";
            n.d(t, {
                M$: function() {
                    return v
                },
                Qp: function() {
                    return formattedAuctionType
                },
                S$: function() {
                    return b
                },
                Ue: function() {
                    return d
                },
                VY: function() {
                    return x
                },
                Wm: function() {
                    return i
                },
                X2: function() {
                    return w
                },
                Zw: function() {
                    return l
                },
                __: function() {
                    return y
                },
                _v: function() {
                    return s
                },
                l4: function() {
                    return u
                },
                mq: function() {
                    return h
                },
                nA: function() {
                    return p
                },
                pU: function() {
                    return m
                },
                rE: function() {
                    return a
                },
                ry: function() {
                    return g
                },
                tu: function() {
                    return f
                },
                zd: function() {
                    return c
                }
            });
            var r = n(8205),
                o = n(3928);
            n(85846), (0, r.zo)("div", {
                display: "flex",
                flexDirection: "column",
                gap: 16,
                marginBottom: 32
            }), (0, r.zo)("div", {
                width: 552,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                h3: {
                    base: "L",
                    fontStyle: "semibold"
                },
                p: {
                    base: "S",
                    color: "$neutral500"
                }
            }), (0, r.zo)("div", {
                display: "flex",
                backgroundColor: "$neutral200",
                color: "$neutral500",
                padding: "0px 4px",
                fontFamily: "$base",
                fontSize: 11,
                fontWeight: 500,
                height: 16,
                borderRadius: 20
            });
            let i = (0, r.zo)("div", {
                    width: "100%",
                    maxWidth: 336,
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                }),
                a = (0, r.zo)("div", {
                    border: "1px solid $neutral300",
                    color: "$neutral400",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: 160,
                    width: 160,
                    borderRadius: 6,
                    flexShrink: 0,
                    marginRight: 24,
                    paddingX: 10,
                    div: {
                        fontSize: 12,
                        lineHeight: "16px"
                    },
                    variants: {
                        isDisabled: {
                            true: {
                                border: "1px solid $neutral200",
                                cursor: "not-allowed",
                                color: "$neutral200"
                            }
                        }
                    }
                }),
                l = "new",
                s = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8
                }),
                d = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    title: "S",
                    color: "$white"
                });
            (0, r.zo)("div", {
                display: "flex",
                flexDirection: "column",
                gap: 10,
                base: "S",
                color: "$neutral400",
                lineHeight: "18px"
            });
            let u = "I confirm that I fully own the rights to this release or have the required clearance.",
                c = "Carefully review your release info. After you upload, any changes will require additional gas fees.",
                p = "Carefully review the below details before uploading. Any edits to your song after you upload will require additional gas fees. Drop type and phases cannot be edited once started.",
                h = "Build your own street team and incentivize your listeners to share your release! Collectors can share your song or add it to a playlist to earn when they refer someone else to collect your song.",
                m = 111,
                f = 35,
                x = (0, r.zo)("div", {
                    base: "M",
                    width: 410,
                    whiteSpace: "pre-wrap",
                    "@desktop": {
                        base: "L",
                        fontStyle: "regular"
                    },
                    variants: {
                        color: {
                            grey: {
                                color: "$neutral500"
                            }
                        }
                    }
                }),
                v = (0, r.zo)("h3", {
                    display: "flex",
                    justifyContent: "space-between",
                    title: "M",
                    fontStyle: "medium",
                    alignItems: "center"
                }),
                b = (0, r.zo)("div", {
                    position: "relative",
                    width: 676,
                    shadow: "M",
                    borderRadius: 12,
                    padding: "16px",
                    variants: {
                        isSingle: {
                            true: {
                                width: 590,
                                "@desktop": {
                                    width: 676
                                }
                            }
                        }
                    }
                }),
                g = (0, r.zo)("div", {
                    marginTop: 24
                });
            (0, r.zo)("div", {
                fontSize: 14,
                fontFamily: "$base",
                fontWeight: 500,
                lineHeight: "18px",
                color: "#605DEC",
                marginTop: 16
            }), (0, r.zo)("div", {
                cursor: "pointer",
                base: "L",
                fontStyle: "medium",
                color: "$neutral600",
                marginTop: 8
            });
            let w = (0, r.zo)("div", {
                    display: "flex",
                    gap: 32,
                    borderBottom: "1px solid $neutral200",
                    paddingY: 12,
                    width: "100%",
                    variants: {
                        isLast: {
                            true: {
                                border: "none"
                            }
                        }
                    }
                }),
                y = (0, r.zo)("div", {
                    base: "L",
                    fontWeight: 500,
                    color: "$neutral400",
                    width: 200
                });
            (0, r.zo)("div", {
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 34
            });
            let formattedAuctionType = e => {
                let {
                    auctionType: t
                } = e;
                return t === o.IIw.FixedQuantity ? "Fixed Editions" : t === o.IIw.OpenEdition ? "Open Editions" : t === o.IIw.OpenEditionWithSam ? "Sound Swap" : ""
            };
            (0, r.zo)("div", {
                display: "flex",
                marginTop: 24,
                paddingY: 12,
                borderBottom: "1px solid $neutral200",
                paddingLeft: 231
            }), (0, r.zo)("div", {
                base: "L",
                color: "$neutral400",
                display: "flex"
            }), (0, r.zo)("div", {
                display: "flex",
                gap: 32,
                width: "100%",
                paddingY: 10,
                borderBottom: "1px solid $neutral200",
                variants: {
                    isLast: {
                        true: {
                            borderBottom: "none"
                        }
                    }
                }
            }), (0, r.zo)("div", {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start"
            }), (0, r.zo)("div", {
                base: "L",
                width: 200,
                fontWeight: 500,
                color: "$neutral400",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                span: {
                    base: "S",
                    color: "$neutral400"
                }
            }), (0, r.zo)("div", {
                display: "flex",
                flexDirection: "column",
                width: 111,
                base: "M",
                button: {
                    fontSize: 12,
                    textDecoration: "underline",
                    cursor: "pointer",
                    textAlign: "left"
                },
                "&:nth-child(1)": {
                    marginRight: 35
                },
                "&:nth-child(2)": {
                    marginRight: 28
                },
                "@desktop": {
                    base: "L"
                }
            })
        },
        6442: function(e, t, n) {
            "use strict";
            n.d(t, {
                m: function() {
                    return LockIcon
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(72102),
                i = n(91485),
                a = n(8205),
                l = n(34524);
            let LockIcon = e => {
                    let {
                        size: t = "lg",
                        gap: n = "lg",
                        align: d,
                        tooltipText: u = "Cannot be updated"
                    } = e;
                    return (0, r.jsx)(s, {
                        gap: n,
                        align: d,
                        children: (0, r.jsxs)(l.Tooltip, {
                            openOnClick: !1,
                            children: [(0, r.jsx)(l.Tooltip.Trigger, {
                                children: (0, r.jsx)(o.G, {
                                    icon: i.HI,
                                    color: a.rS.colors.base500.toString(),
                                    size: t
                                })
                            }), (0, r.jsx)(l.Tooltip.StyledContent, {
                                children: (0, r.jsx)("p", {
                                    children: u
                                })
                            })]
                        })
                    })
                },
                s = (0, a.zo)("div", {
                    "&:hover": {
                        svg: {
                            color: "$base900"
                        }
                    },
                    variants: {
                        gap: {
                            sm: {
                                marginLeft: 6
                            },
                            lg: {
                                marginLeft: 8
                            }
                        },
                        align: {
                            right: {
                                marginLeft: "auto"
                            }
                        }
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
            var r = n(16356);
            n(97352);
            var o = n(55344);
            n(96960);
            var i = n(96220),
                a = n(68753),
                l = n(98335),
                s = n(21597),
                d = n(59287),
                u = n(8205),
                c = n(97946);
            let UserHoverCardContentUI = e => {
                    var t, n, o;
                    let {
                        user: i,
                        followButton: a,
                        verified: l,
                        avatar: u
                    } = e, {
                        publicAddress: v,
                        username: b,
                        followerCount: g,
                        followingCount: w,
                        nftsOwned: y,
                        artist: C,
                        creditAllocations: j,
                        webappUri: S,
                        bannerImage: k
                    } = i, I = b !== (0, d.pc)(v, 5, 4), N = (C ? null == C ? void 0 : C.numReleases : j.length) || 0, T = null !== (o = null !== (n = null == C ? void 0 : null === (t = C.bannerImage) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : null == k ? void 0 : k.url) && void 0 !== o ? o : "/images/sound_letter_s.svg";
                    return (0, r.jsxs)("div", {
                        className: "h-fit w-[300px]",
                        children: [(0, r.jsx)(p, {
                            css: {
                                backgroundImage: `url(${T})`,
                                backgroundSize: "cover"
                            }
                        }), (0, r.jsx)(h, {
                            children: u
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-[22px] p-[14px]",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)(c.s, {
                                    pathnameUri: S,
                                    children: (0, r.jsxs)(m, {
                                        children: [(0, r.jsxs)(f, {
                                            children: [(0, r.jsx)("h1", {
                                                children: b
                                            }), C && l]
                                        }), I && (0, r.jsx)("p", {
                                            children: (0, d.pc)(v, 5, 4)
                                        })]
                                    })
                                }), a]
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [!!N && (0, r.jsxs)(x, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, s.ZP)(N)
                                    }), (0, r.jsxs)("p", {
                                        children: ["Sound", N > 1 && "s"]
                                    })]
                                }), (0, r.jsxs)(x, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, s.ZP)(y)
                                    }), (0, r.jsx)("p", {
                                        children: "Collected"
                                    })]
                                }), (0, r.jsxs)(x, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, s.ZP)(w)
                                    }), (0, r.jsx)("p", {
                                        children: "Following"
                                    })]
                                }), (0, r.jsxs)(x, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, s.ZP)(g)
                                    }), (0, r.jsx)("p", {
                                        children: "Followers"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                p = (0, u.zo)("div", {
                    display: "flex",
                    width: "100%",
                    height: 76,
                    borderRadius: "8px 8px 0 0",
                    backgroundPosition: "center"
                }),
                h = (0, u.zo)("div", {
                    justifyContent: "center",
                    alignItems: "center",
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    background: "$white",
                    marginTop: -56,
                    marginX: 14
                }),
                m = (0, u.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 4,
                    p: {
                        base: "M",
                        color: "$neutral400"
                    }
                }),
                f = (0, u.zo)("div", {
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
                x = (0, u.zo)("div", {
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
            var v = n(3928),
                b = n(95390);
            let UserHoverCardContent = e => {
                let {
                    userId: t
                } = e, {
                    data: n
                } = (0, v.aM2)(v.FS3, {
                    variables: {
                        userId: t
                    },
                    staleTime: (0, o.Z)("5 minutes")
                }), s = null == n ? void 0 : n.data.user;
                if (!s) return null;
                let d = (0, v.S3c)(v.XXP, s),
                    {
                        avatar: u,
                        publicAddress: c,
                        username: p,
                        webappUri: h,
                        artist: m
                    } = d;
                return (0, r.jsx)(UserHoverCardContentUI, {
                    user: { ...d,
                        webappUri: (0, b.OU)(h)
                    },
                    followButton: (0, r.jsx)(i.e, {
                        userId: d.id,
                        dark: !0,
                        size: "M",
                        sourceLocation: "User Hover Card",
                        artistId: null == m ? void 0 : m.id
                    }),
                    verified: (0, r.jsx)(l.O, {
                        noTooltip: !0
                    }),
                    avatar: (0, r.jsx)(a.q, {
                        src: null == u ? void 0 : u.url,
                        walletAddress: c,
                        username: p,
                        borderRadius: 6,
                        size: 74,
                        webappUri: h
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
                    return r
                }
            });
            let r = {
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
            var r = n(16356);
            n(97352);
            var o = n(72102),
                i = n(90146),
                a = n(24114),
                l = n(73534),
                s = n(44361),
                d = n(69349),
                u = n(19847),
                c = n(12849),
                p = n(88343),
                h = n(69598),
                m = n(44456),
                f = n(98335),
                x = n(14034),
                v = n(85846);
            let NotificationWrapper = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(l.E.div, {
                        initial: {
                            opacity: 0,
                            minHeight: 64
                        },
                        animate: {
                            opacity: 1,
                            minHeight: 64
                        },
                        children: (0, r.jsx)("div", {
                            className: "group relative z-base flex min-h-[40px] w-full items-center justify-between gap-0.5 py-4 text-base-m after:absolute after:inset-0 after:-left-4 after:-right-4 after:z-below after:rounded-[6px]  after:content-[''] after:hover:bg-base50 md:min-h-[48px] md:border-b md:border-b-base200 lt:py-3 ",
                            children: t
                        })
                    })
                },
                Indicator = e => {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsx)("div", {
                        className: (0, s.m)("absolute inline-block h-2 w-2 rounded-full bg-fuchsia500 align-super", t)
                    })
                },
                NotificationCollectButton = e => {
                    let {
                        onClick: t,
                        disabled: n,
                        loading: i,
                        releaseURI: a,
                        releaseId: l,
                        sourceComponent: s
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, r.jsx)(h.z, {
                                label: "Collect",
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                loading: i,
                                disabled: n,
                                href: a,
                                variant: "tertiary",
                                leadingIcon: (0, r.jsx)(o.G, {
                                    icon: d._t
                                }),
                                onClick: () => {
                                    (0, x.uH)({
                                        event: "Collect Now Clicked",
                                        properties: {
                                            sourceComponent: s,
                                            associationType: "Release",
                                            associationId: l
                                        }
                                    })
                                }
                            })
                        }), (0, r.jsx)("div", {
                            className: "hidden lt:flex",
                            children: (0, r.jsx)(h.z, {
                                label: "Collect",
                                variant: "tertiary",
                                size: "XS",
                                className: "h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary ",
                                onClick: e => {
                                    (0, x.uH)({
                                        event: "Collect Now Clicked",
                                        properties: {
                                            sourceComponent: s,
                                            associationType: "Release",
                                            associationId: l
                                        }
                                    }), t(e)
                                },
                                disabled: n,
                                loading: i
                            })
                        })]
                    })
                },
                NotificationActionButton = e => {
                    let {
                        label: t,
                        icon: n,
                        href: o,
                        onClick: i,
                        mobileHref: a,
                        mobileOnClick: l
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, r.jsx)(h.z, {
                                label: t,
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                variant: "tertiary",
                                leadingIcon: n,
                                href: a || o,
                                onClick: l || i
                            })
                        }), (0, r.jsx)("div", {
                            className: "hidden lt:flex",
                            children: (0, r.jsx)(h.z, {
                                label: t,
                                variant: "tertiary",
                                size: "XS",
                                className: " h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary",
                                onClick: i,
                                href: o
                            })
                        })]
                    })
                },
                MobileUsername = e => {
                    let {
                        username: t,
                        isArtist: n
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "flex items-center dt:hidden",
                        children: [(0, r.jsx)("span", {
                            className: "flex max-w-[130px] items-center overflow-hidden text-ellipsis whitespace-nowrap font-semibold",
                            children: t
                        }), n && (0, r.jsxs)(r.Fragment, {
                            children: [v.L_, (0, r.jsx)("span", {
                                className: "block md:hidden",
                                children: (0, r.jsx)(f.O, {
                                    size: 16
                                })
                            }), (0, r.jsx)("span", {
                                className: "hidden md:block",
                                children: (0, r.jsx)(f.O, {
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
                    return (0, r.jsxs)("div", {
                        className: "relative flex min-w-[40px] items-center justify-end gap-1.5 md:gap-2",
                        children: [(0, r.jsx)(p.E, {
                            timeStamp: t,
                            className: "!text-base-xs text-base400"
                        }), (0, r.jsx)("div", {
                            className: "flex min-w-[8px] flex-shrink-0 items-center",
                            children: !n && (0, r.jsx)(Indicator, {
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
                    }).map((e, o) => {
                        let i = t > 1 && o % 4 == 0 && 0 !== o || n;
                        return (0, r.jsxs)("div", {
                            className: "flex min-h-[64px] w-full items-center justify-between py-4 lt:py-3 ",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)("div", {
                                    className: (0, s.m)("h-10 w-10 animate-pulse bg-base200", i ? "rounded-full" : "rounded-md")
                                }), (0, r.jsx)("div", {
                                    className: "h-3.5 w-48 animate-pulse rounded-md bg-base200  lt:w-80"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "relative flex min-w-[40px] items-center justify-end",
                                children: (0, r.jsx)("div", {
                                    className: "h-3.5 w-3.5 animate-pulse rounded-full bg-base200"
                                })
                            })]
                        }, `NOTIFICATION-LOADING-STATE${o}`)
                    })
                };

            function hasReadNotification(e) {
                let {
                    timestamp: t,
                    previousTimestamp: n
                } = e;
                return !!n && ((0, i.default)(t, n) || (0, a.default)(t, n))
            }
            let MotionPlayBars = e => {
                    let {} = e;
                    return (0, r.jsx)(l.E.div, {
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
                        children: (0, r.jsx)(m.j, {
                            size: "xs"
                        })
                    })
                },
                PlayingMotionLayoutShift = e => {
                    let {
                        children: t,
                        isPlaying: n,
                        className: o
                    } = e;
                    return (0, r.jsx)(l.E.div, {
                        layout: "position",
                        layoutDependency: void 0 !== n && n,
                        transition: {
                            duration: .25
                        },
                        className: o,
                        children: t
                    })
                };

            function getContentSnapshot(e) {
                let {
                    content: t,
                    maxLength: n = 17
                } = e, o = t.length > n, i = o ? t.slice(0, n).split(" ").slice(0, -1).concat("...") : t.split(" "), a = t.slice(0, n).concat("...");
                return t.includes(" ") ? (0, r.jsxs)("span", {
                    className: "text-base500",
                    children: ['"', a, '"']
                }) : i.map((e, t) => (0, r.jsxs)("span", {
                    className: "text-base500",
                    children: [0 === t && '"', e, t === i.length - 1 && '"', t !== i.length - 1 && v.L_]
                }, `${e}-${t}`))
            }

            function getReleaseTitleSnapshot(e) {
                let t = e.length > 20,
                    n = t ? e.slice(0, 20).split(" ").slice(0, -1).concat("...") : e.split(" ");
                return n.map((e, t) => (0, r.jsxs)("span", {
                    children: [e, t !== n.length - 1 && v.L_]
                }, `${e}-${t}`))
            }

            function getCollectedReleasesPreview(e) {
                let {
                    collectedReleases: t,
                    maxReleases: n
                } = e;
                return t.slice(0, n).map((e, o) => {
                    let {
                        release: {
                            id: i,
                            title: a,
                            artist: {
                                name: l
                            }
                        }
                    } = e, s = 0 === o, d = o === Math.min(t.length, n) - 1;
                    return (0, r.jsxs)("span", {
                        children: [2 === t.length && d ? (0, r.jsxs)(r.Fragment, {
                            children: [v.L_, "and", v.L_]
                        }) : t.length > 2 && !s && d ? (0, r.jsxs)(r.Fragment, {
                            children: [", and", v.L_]
                        }) : s ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsxs)(r.Fragment, {
                            children: [",", v.L_]
                        }), (0, r.jsxs)("span", {
                            className: "font-semibold",
                            children: [a, " - ", l]
                        })]
                    }, i)
                })
            }

            function contentForPost(e) {
                let {
                    postContentFrag: t,
                    includeYourPrefix: n
                } = e;
                if (!t) return null;
                let o = u.g.safeParse(t.lexicalContent),
                    i = c.Z.generateTextForNode(o.success ? o.data.root : void 0),
                    a = i.length ? i : t.content;
                if (a) {
                    let e = getContentSnapshot({
                        content: a
                    });
                    return n ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("span", {
                            children: "your post"
                        }), v.L_, e]
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
                                                name: o
                                            }
                                        }
                                    }
                                }
                            } = t,
                            i = getContentSnapshot({
                                content: `${e} - ${o}`,
                                maxLength: 30
                            });
                            return n ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    children: "your drop activity"
                                }), v.L_, i]
                            }) : i
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
                            o = e.slice(0, 3).map(e => {
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
                            i = getContentSnapshot({
                                content: o,
                                maxLength: 24
                            });
                            return n ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    children: "your collecting activity"
                                }), v.L_, i]
                            }) : i
                        }
                    default:
                        return "your activity"
                }
                return null
            }
        },
        95057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Provider: function() {
                    return Provider
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(24924),
                i = n.n(o),
                a = n(96301),
                l = n(58876),
                s = n(62220),
                d = n(98267),
                u = n(13866),
                c = n(95828),
                p = n(76348),
                h = n(22248);
            n(96960);
            var m = n(82443),
                f = n(8205),
                x = n(50068),
                v = n(97189),
                b = n(3928),
                g = n(85846),
                w = n(18191),
                y = n(64571),
                C = n(14034),
                j = n(25662),
                S = n(17480);
            let k = (() => {
                    let e = {
                        blockExplorerUrls: [(0, y.IW)(g.K_.eth)],
                        chainId: g.K_.eth,
                        name: "Ethereum",
                        iconUrls: ["https://app.dynamic.xyz/assets/networks/eth.svg"],
                        nativeCurrency: {
                            decimals: 18,
                            name: "Ether",
                            symbol: "ETH"
                        },
                        privateCustomerRpcUrls: g.vl.eth,
                        networkId: g.K_.eth,
                        rpcUrls: g.vl.eth,
                        vanityName: "Ethereum"
                    };
                    return [e, {
                        blockExplorerUrls: [(0, y.IW)(g.K_.optimism)],
                        chainId: g.K_.optimism,
                        name: "Optimism",
                        iconUrls: ["https://app.dynamic.xyz/assets/networks/optimism.svg"],
                        nativeCurrency: {
                            decimals: 18,
                            name: "Ether",
                            symbol: "ETH"
                        },
                        privateCustomerRpcUrls: g.vl.optimism,
                        networkId: g.K_.optimism,
                        rpcUrls: g.vl.optimism,
                        vanityName: "Optimism"
                    }, {
                        blockExplorerUrls: [(0, y.IW)(g.K_.base)],
                        chainId: g.K_.base,
                        name: "Base",
                        iconUrls: ["https://app.dynamic.xyz/assets/networks/base.svg"],
                        nativeCurrency: {
                            decimals: 18,
                            name: "Ether",
                            symbol: "ETH"
                        },
                        privateCustomerRpcUrls: g.vl.base,
                        networkId: g.K_.base,
                        rpcUrls: g.vl.base,
                        vanityName: "Base"
                    }]
                })(),
                onAuthSuccess = async e => {
                    let {
                        authToken: t,
                        user: n,
                        handleLogOut: r
                    } = e;
                    try {
                        let {
                            data: e
                        } = await (0, b.Wcv)(b.hQs, {
                            variables: {
                                token: t
                            }
                        });
                        if (!(null == e ? void 0 : e.verifyDynamicJWT)) throw new w.wg("Couldn't verify dynamic token with backend");
                        (0, S.uB)(e.verifyDynamicJWT);
                        let {
                            data: {
                                authUser: n
                            }
                        } = await (0, b.ChE)(b.ASG, {
                            fetchOptions: {
                                headers: { ...v.L,
                                    "auth-token": e.verifyDynamicJWT
                                }
                            },
                            filterQueryKey: (0, x.H)({
                                authToken: t
                            })
                        });
                        if (!n) throw new w.wg("Couldn't get authUser");
                        C.RI.identify(n.id, {
                            username: n.username,
                            isArtist: null != n.artist,
                            createdAt: n.createdAt,
                            walletAddress: n.publicAddress
                        }), await new Promise(e => setTimeout(e, 10)), (0, j.O)("loginSuccessEnd", {
                            authUser: n
                        })
                    } catch (e) {
                        (0, p.Tb)({
                            error: Error("Failed to authenticate with backend", {
                                cause: e
                            })
                        }, {
                            extra: {
                                dynamicUserId: n.userId,
                                dynamicEnvironmentId: n.environmentId,
                                dynamicSessionId: n.sessionId
                            }
                        }), (0, j.O)("loginFail"), await r()
                    } finally {
                        (0, j.O)("loginStop")
                    }
                },
                I = (0, h.Z)(onAuthSuccess, 300, {
                    trailing: !0
                }),
                N = {
                    cssOverrides: `
      .modal__backdrop {
        background: rgba(0, 0, 0, 0.5);
      }
      .dynamic-auth-layout__container, .list-tile, .search__container {
        border-radius: 6px;
      }
      .typography {
        font-family: var(${f.rS.fonts.title.variable});
      }
    `,
                    defaultNumberOfWalletsToShow: 4,
                    environmentId: "3a6ccf9e-8dd9-4af3-9bd8-c82829690ec9",
                    siweStatement: "Welcome to Sound! Approve this message to securely log in.",
                    walletsFilter: (0, u.dn)(["metamask", "walletconnect", "coinbase", "rainbow"]),
                    evmNetworks: k,
                    walletConnectors: [s.Eh, d.UL],
                    eventsCallbacks: {
                        onAuthSuccess(e) {
                            (0, j.O)("loginSuccessStart", e), I(e)
                        },
                        onAuthFlowOpen() {
                            (0, j.O)("loginStart")
                        },
                        onAuthFlowClose() {
                            function invokeEffect() {
                                clearTimeout(t), e(), (0, j.O)("loginStop")
                            }
                            let e = j.s.loginSuccessStart(invokeEffect),
                                t = setTimeout(invokeEffect, 1e3)
                        }
                    },
                    localStorageSuffix: m.L3 ? "-v20" : "-" + m.Gv + "-v17",
                    showLockedWalletView: !1
                },
                T = i()(Promise.resolve().then(n.bind(n, 43158)).then(e => e.MediaQuery.Provider), {
                    loadableGenerated: {
                        webpack: () => [43158]
                    }
                }),
                $ = i()(Promise.resolve().then(n.bind(n, 89412)).then(e => e.SecondaryModalContext.Provider), {
                    loadableGenerated: {
                        webpack: () => [89412]
                    }
                }),
                E = i()(n.e(9646).then(n.bind(n, 59646)).then(e => e.SoundStatsigProvider), {
                    loadableGenerated: {
                        webpack: () => [59646]
                    }
                }),
                M = i()(Promise.resolve().then(n.bind(n, 75747)).then(e => e.ToastContext.Provider), {
                    loadableGenerated: {
                        webpack: () => [75747]
                    }
                }),
                z = i()(Promise.resolve().then(n.bind(n, 30203)).then(e => e.Transaction.Provider), {
                    loadableGenerated: {
                        webpack: () => [30203]
                    }
                }),
                P = i()(Promise.resolve().then(n.bind(n, 71301)).then(e => e.WalletRequest.Provider), {
                    loadableGenerated: {
                        webpack: () => [71301]
                    }
                }),
                L = i()(Promise.resolve().then(n.bind(n, 89012)).then(e => e.MintReferralProvider), {
                    loadableGenerated: {
                        webpack: () => [89012]
                    }
                }),
                R = i()(Promise.resolve().then(n.bind(n, 22181)).then(e => e.ModalContext.Provider), {
                    loadableGenerated: {
                        webpack: () => [22181]
                    }
                }),
                _ = i()(Promise.resolve().then(n.bind(n, 25533)).then(e => e.ChainProvider), {
                    loadableGenerated: {
                        webpack: () => [25533]
                    }
                }),
                F = i()(Promise.all([n.e(232), n.e(2043), n.e(2090), n.e(6330), n.e(5789)]).then(n.bind(n, 58516)).then(e => e.ReservoirProvider), {
                    loadableGenerated: {
                        webpack: () => [58516]
                    }
                }),
                O = i()(() => n.e(8408).then(n.bind(n, 48408)).then(e => e.GlobalModal), {
                    loadableGenerated: {
                        webpack: () => [48408]
                    }
                }),
                A = i()(() => Promise.resolve().then(n.bind(n, 75747)).then(e => e.ToastContainer), {
                    loadableGenerated: {
                        webpack: () => [75747]
                    }
                }),
                D = Object.freeze([F, function(e) {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)(u.EI, {
                        settings: N,
                        children: (0, r.jsx)(c.z, {
                            evmNetworks: k,
                            children: t
                        })
                    })
                }, E, T, P, $, L, R, M, a.Ho, _, l.uU, z]);

            function Provider(e) {
                let {
                    children: t
                } = e;
                return D.reduceRight((e, t) => (0, r.jsx)(t, {
                    children: e
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(O, {}), t, (0, r.jsx)(A, {})]
                }))
            }
        },
        73096: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return MintComponent
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(24924),
                a = n.n(i),
                l = n(44361),
                s = n(39513),
                d = n(89012),
                u = n(3928),
                c = n(51401),
                p = n(64571);
            n(96960);
            var h = n(68753),
                m = n(92434),
                f = n(47314),
                x = n(51648),
                v = n(54668),
                b = n(96301),
                g = n(22181),
                w = n(85846);
            let YouOwnModal = e => {
                    var t, n, o, i, a, l, s, d;
                    let {
                        releaseId: c,
                        editionsOwned: h
                    } = e, {
                        authUser: m,
                        isAuthenticatedWithAPI: x
                    } = (0, b.aC)(), {
                        closeCancelModal: w
                    } = g.ModalContext.useContainer(), y = null == m ? void 0 : m.publicAddress, {
                        data: C,
                        isLoading: j,
                        error: S
                    } = (0, u.aM2)(u.XGC, {
                        variables: {
                            releaseId: c,
                            publicAddress: y
                        },
                        staleTime: 0,
                        enabled: x,
                        filterQueryKey: [y, c]
                    }), k = null == C ? void 0 : null === (t = C.data.userByAddress) || void 0 === t ? void 0 : t.collectedReleases.edges.map(e => e.node);
                    if (!k || !k.length) return;
                    let I = k[0];
                    if (!I) return;
                    let {
                        release: N,
                        gaNftsCount: T,
                        vipNftsCount: $,
                        goldenEgg: E
                    } = I, M = !!E, z = !!N.gaCoverImage, P = (null === (n = N.staticCoverImage) || void 0 === n ? void 0 : n.url) || (null === (o = N.coverImage) || void 0 === o ? void 0 : o.url), L = (null === (i = N.staticGaCoverImage) || void 0 === i ? void 0 : i.url) || (null === (a = N.gaCoverImage) || void 0 === a ? void 0 : a.url) || P, R = (null === (l = N.staticVipCoverImage) || void 0 === l ? void 0 : l.url) || (null === (s = N.vipCoverImage) || void 0 === s ? void 0 : s.url) || P, _ = (null === (d = N.animatedGoldenEggImageOptimized) || void 0 === d ? void 0 : d.url) || N.goldenEggImage.url || P, F = "TIERED_EDITION" === N.auctionContractType && !!z, O = (0, r.jsxs)(r.Fragment, {
                        children: [F ? (0, r.jsxs)(r.Fragment, {
                            children: [T > 0 && (0, r.jsx)(EditionOwnedRow, {
                                title: N.title,
                                releaseCover: L,
                                heading: f.X.FREE.heading,
                                editionCount: T
                            }), $ > 0 && (0, r.jsx)(EditionOwnedRow, {
                                title: N.title,
                                releaseCover: R,
                                heading: "Limited Edition",
                                editionCount: $
                            })]
                        }) : (0, r.jsx)(EditionOwnedRow, {
                            title: N.title,
                            releaseCover: P,
                            heading: "Limited Edition",
                            editionCount: M ? h - 1 : h
                        }), M && (0, r.jsx)(EditionOwnedRow, {
                            title: N.title,
                            releaseCover: _,
                            heading: "Golden Egg",
                            editionCount: 1
                        })]
                    }), A = (0, r.jsx)("div", {
                        className: "flex flex-col gap-4 pb-1",
                        children: j || S ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(RowSkeleton, {}), (0, r.jsx)(RowSkeleton, {})]
                        }) : O
                    });
                    return (0, r.jsx)(v.Z, {
                        body: A,
                        closeModal: w,
                        title: `${h?`${h} `:""}${(0,p.Lo)({word:"edition",count:h})} collected`,
                        bodyWithoutPaddingBottom: !0
                    })
                },
                EditionOwnedRow = e => {
                    let {
                        title: t,
                        releaseCover: n,
                        heading: o,
                        editionCount: i
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: "flex h-14 w-full items-center gap-2",
                        children: [(0, r.jsx)(x.X, {
                            releaseTitle: t,
                            releaseCover: n,
                            imageSize: 48,
                            className: "!h-14 w-12 min-w-[48px] rounded-md",
                            imageClassName: "rounded-md"
                        }), (0, r.jsxs)("div", {
                            className: "flex w-full flex-col items-start",
                            children: [(0, r.jsx)("h3", {
                                className: "font-title text-title-xxs font-medium text-black",
                                children: o
                            }), (0, r.jsxs)("p", {
                                className: "font-base text-base-s text-base700",
                                children: [i, w.L_, (0, p.Lo)({
                                    word: "edition",
                                    count: i
                                })]
                            })]
                        })]
                    })
                },
                RowSkeleton = () => (0, r.jsxs)("div", {
                    className: "flex h-14 w-full items-center gap-2",
                    children: [(0, r.jsx)("div", {
                        className: "aspect-square h-12 w-12 animate-pulse rounded-md bg-neutral300"
                    }), (0, r.jsxs)("div", {
                        className: "flex w-full flex-col items-start gap-0.5",
                        children: [(0, r.jsx)("div", {
                            className: "h-4 w-32 animate-pulse rounded-sm bg-neutral300"
                        }), (0, r.jsx)("div", {
                            className: "h-3.5 w-20 animate-pulse rounded-sm bg-neutral300"
                        })]
                    })]
                }),
                useGetNumReleaseEditionsOwned = e => {
                    let {
                        user: t,
                        releaseId: n
                    } = e, [r, i] = (0, o.useState)(0), {
                        isLoading: a
                    } = (0, u.aM2)(u.eAJ, {
                        variables: !!t && {
                            userId: t.id,
                            releaseId: n
                        },
                        onSuccess(e) {
                            var t, n, r;
                            i(null !== (r = null == e ? void 0 : null === (n = e.data.user) || void 0 === n ? void 0 : null === (t = n.collectedReleases.edges[0]) || void 0 === t ? void 0 : t.node.nftsCount) && void 0 !== r ? r : 0)
                        },
                        staleTime: 0
                    });
                    return (0, c.X)({
                        releaseId: n,
                        onData(e) {
                            var n, r;
                            let {
                                data: {
                                    releaseCollectorUpdates: o
                                }
                            } = e;
                            o.userPublicAddress === (null == t ? void 0 : t.publicAddress) && i(null !== (r = null === (n = o.collector) || void 0 === n ? void 0 : n.nftsCount) && void 0 !== r ? r : 0)
                        },
                        enabled: !!t
                    }), {
                        isLoading: a,
                        count: r
                    }
                };

            function SocialProofBar(e) {
                var t;
                let {
                    releaseId: n,
                    totalMinted: i
                } = e, {
                    authUser: a
                } = (0, b.aC)(), {
                    openModal: l
                } = g.ModalContext.useContainer(), {
                    data: s,
                    isLoading: d
                } = (0, u.aM2)(u.B$C, {
                    variables: {
                        releaseId: n,
                        userId: null == a ? void 0 : a.id
                    },
                    staleTime: 0
                }), c = null == s ? void 0 : s.data.release, f = null == c ? void 0 : c.socialProofCollectors, {
                    count: x,
                    isLoading: v
                } = useGetNumReleaseEditionsOwned({
                    user: a,
                    releaseId: n
                }), w = o.useMemo(() => f ? [...f].reverse() : [], [f]), y = 0 === i ? (0, r.jsx)("span", {
                    className: "mx-auto font-semibold ",
                    children: "Be the first to mint"
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "group flex h-full w-full cursor-pointer items-center justify-center gap-1.5",
                        onClick: () => {
                            l(g.ModalType.RELEASE_MINTS, {
                                body: (0, r.jsx)(m.Y, {
                                    releaseId: n
                                })
                            })
                        },
                        children: [(0, r.jsx)("div", {
                            className: "flex flex-row-reverse [&>*:nth-child(1)]:-ml-3 [&>*:nth-child(2)]:-ml-3 ",
                            children: w.map(e => {
                                var t;
                                return (0, r.jsx)("div", {
                                    children: (0, r.jsx)(h.q, {
                                        src: null === (t = e.avatar) || void 0 === t ? void 0 : t.url,
                                        size: 28,
                                        username: e.username,
                                        walletAddress: e.publicAddress,
                                        borderRadius: "100%",
                                        webappUri: e.webappUri,
                                        hasBorder: !0,
                                        disableLink: !0
                                    })
                                }, e.id)
                            })
                        }), (0, r.jsxs)("span", {
                            className: "font-semibold transition-[filter] duration-300 group-hover:text-base500 group-hover:brightness-70",
                            children: [(0, p.cE)({
                                value: i,
                                precision: 3
                            }), "\xa0", (0, p.Lo)({
                                count: i,
                                word: "mint"
                            })]
                        })]
                    }), !!x && a && (0, r.jsxs)("button", {
                        className: "flex h-full w-full items-center justify-center gap-1.5 font-medium outline-none hover:text-base500",
                        onClick: () => {
                            l(g.ModalType.YOU_OWN, {
                                body: (0, r.jsx)(YouOwnModal, {
                                    releaseId: n,
                                    editionsOwned: x
                                })
                            })
                        },
                        children: [(0, r.jsx)(h.q, {
                            size: 28,
                            src: null === (t = a.avatar) || void 0 === t ? void 0 : t.url,
                            username: a.username,
                            walletAddress: a.publicAddress,
                            webappUri: a.webappUri,
                            borderRadius: "100%",
                            disableLink: !0
                        }), "You own ", (0, r.jsx)("strong", {
                            children: x
                        })]
                    })]
                });
                return (0, r.jsx)("div", {
                    className: "relative flex h-[52px] max-h-[52px] w-full items-center justify-between divide-x divide-base200 rounded-b-lg font-base text-base-s text-base800 shadow-secondary ",
                    children: d || v ? (0, r.jsx)(SocialProofLoading, {}) : y
                })
            }
            let SocialProofLoading = () => (0, r.jsxs)("div", {
                className: "flex h-full w-full items-center justify-center gap-1.5",
                children: [(0, r.jsx)("div", {
                    className: "flex flex-row-reverse [&>*:nth-child(1)]:-ml-3 [&>*:nth-child(2)]:-ml-3",
                    children: [void 0, void 0, void 0].map((e, t) => (0, r.jsx)("div", {
                        className: "block aspect-square h-7 w-7 min-w-[28px] animate-pulse rounded-full bg-base200"
                    }, `SocialProofLoading-${t}`))
                }), (0, r.jsx)("span", {
                    className: "h-4 w-16 animate-pulse rounded-md bg-base200"
                })]
            });
            var y = n(10308);
            let MintComponentLoader = () => (0, r.jsx)("div", {
                    className: "h-[190px] w-full animate-pulse bg-neutral200"
                }),
                C = a()(() => Promise.all([n.e(232), n.e(2043), n.e(8631), n.e(5464), n.e(1165), n.e(247), n.e(4449), n.e(9416), n.e(7543), n.e(4606), n.e(3299), n.e(680), n.e(1573), n.e(9964), n.e(2090), n.e(4777), n.e(5942), n.e(3008), n.e(4316), n.e(6330), n.e(9032), n.e(1932), n.e(6090), n.e(7101), n.e(2422), n.e(4243), n.e(7598), n.e(9471)]).then(n.bind(n, 68540)).then(e => e.EditionMintComponent), {
                    loadableGenerated: {
                        webpack: () => [68540]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)(MintComponentLoader, {})
                }),
                j = a()(() => Promise.all([n.e(8631), n.e(5464), n.e(1165), n.e(247), n.e(4449), n.e(9416), n.e(7543), n.e(4606), n.e(3299), n.e(680), n.e(1573), n.e(9964), n.e(5942), n.e(4316), n.e(9032), n.e(1932), n.e(6090), n.e(2422), n.e(7598), n.e(5535)]).then(n.bind(n, 39753)).then(e => e.BondingCurve), {
                    loadableGenerated: {
                        webpack: () => [39753]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)(MintComponentLoader, {})
                }),
                S = a()(() => Promise.all([n.e(232), n.e(2043), n.e(8631), n.e(5464), n.e(1165), n.e(247), n.e(4449), n.e(9416), n.e(7543), n.e(4606), n.e(3299), n.e(680), n.e(9964), n.e(2090), n.e(4777), n.e(5942), n.e(3008), n.e(4316), n.e(6330), n.e(7556), n.e(5258), n.e(9032), n.e(1932), n.e(6090), n.e(7101), n.e(2422), n.e(4243), n.e(8123)]).then(n.bind(n, 98123)).then(e => e.TiersMintComponent), {
                    loadableGenerated: {
                        webpack: () => [98123]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)(MintComponentLoader, {})
                });

            function MintComponent(e) {
                let {
                    releaseData: t,
                    collectButtonSource: n,
                    isInModal: o = !1,
                    referral: i,
                    TEMPORARY_showCustomPrice: a
                } = e, {
                    setReferral: l
                } = (0, d.useMintReferral)();
                (0, s.F_)(() => {
                    l(i)
                }, [i, l]);
                let h = (0, u.S3c)(u.UGr, t),
                    {
                        data: {
                            isFirstPhaseCompleted: m,
                            totalMinted: f
                        }
                    } = (0, c.z)({
                        release: h
                    });
                if (!h.auctionContractType) return null;
                switch (h.auctionContractType) {
                    case "ARTIST":
                        return (0, r.jsxs)(MintComponentLayout, {
                            release: h,
                            isInModal: o,
                            children: [(0, r.jsx)(C, {
                                releaseInfo: h,
                                collectButtonSource: n,
                                isInModal: o
                            }), !o && (0, r.jsx)(SocialProofBar, {
                                releaseId: h.id,
                                totalMinted: f
                            })]
                        });
                    case "EDITION":
                        {
                            let e = !!h.samAddress,
                                t = "EDITION" === h.auctionContractType && m && e;
                            if (t) return (0, r.jsx)(MintComponentLayout, {
                                release: h,
                                isInModal: o,
                                children: (0, r.jsx)(j, {
                                    data: h,
                                    collectButtonSource: n,
                                    isInModal: o
                                })
                            });
                            return (0, r.jsxs)(MintComponentLayout, {
                                release: h,
                                isInModal: o,
                                children: [(0, r.jsx)(C, {
                                    releaseInfo: h,
                                    collectButtonSource: n,
                                    isInModal: o
                                }), !o && (0, r.jsx)(SocialProofBar, {
                                    releaseId: h.id,
                                    totalMinted: f
                                })]
                            })
                        }
                    case "TIERED_EDITION":
                        return (0, r.jsxs)(MintComponentLayout, {
                            release: h,
                            isInModal: o,
                            children: [(0, r.jsx)(S, {
                                release: h,
                                collectButtonSource: n,
                                isInModal: o,
                                TEMPORARY_showCustomPrice: a
                            }), !o && (0, r.jsx)(SocialProofBar, {
                                releaseId: h.id,
                                totalMinted: f
                            })]
                        });
                    default:
                        return (0, p.y0)(h.auctionContractType), null
                }
            }

            function MintComponentLayout(e) {
                let {
                    release: t,
                    children: n,
                    isInModal: o
                } = e;
                return (0, r.jsx)("div", {
                    className: "mx-auto mt-3 flex w-full lt:mt-8 lt:max-w-sm",
                    children: (0, r.jsxs)("div", {
                        className: "flex w-full flex-col rounded-md lt:max-w-sm",
                        children: [(0, r.jsx)("div", {
                            className: (0, l.m)("w-full overflow-hidden rounded-t-lg bg-white", o ? "flex border-b border-base200 pb-4" : "hidden p-4 shadow-tertiary lt:flex"),
                            children: (0, r.jsx)(y.M, {
                                release: t
                            })
                        }), n]
                    })
                })
            }
        },
        10308: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return SongInfo
                },
                c: function() {
                    return SongInfoComponent
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(72102),
                i = n(31622),
                a = n(46313),
                l = n(42940),
                s = n(21922),
                d = n(23496),
                u = n(97946),
                c = n(96301),
                p = n(3928),
                h = n(95390);
            let SongInfo = e => {
                    let {
                        release: t
                    } = e, {
                        authUser: n
                    } = (0, c.aC)(), {
                        title: d,
                        staticCoverImage: u,
                        coverImage: h,
                        webappUri: m,
                        artist: f
                    } = (0, p.S3c)(p.o7T, t), x = f.userId === (null == n ? void 0 : n.id), v = !x && !!f.id && !!f.userId, {
                        loading: b,
                        showSubscribed: g,
                        handleClick: w
                    } = (0, l.w)({
                        artistId: f.id,
                        userId: f.userId
                    }), y = g ? (0, r.jsx)("span", {
                        className: "[&_svg]:h-6",
                        children: (0, r.jsx)(a.A, {})
                    }) : (0, r.jsx)(o.G, {
                        icon: i.qm
                    });
                    return (0, r.jsx)(SongInfoComponent, {
                        title: d,
                        artistName: f.name,
                        songWebappUri: m,
                        artistWebappUri: f.webappUri,
                        coverImage: (null == u ? void 0 : u.url) || h.url,
                        iconButton: v ? (0, r.jsx)(s.h, {
                            variant: "tertiary",
                            disabled: b,
                            onClick: w,
                            iconSize: g ? 20 : 18,
                            icon: y
                        }) : null
                    })
                },
                SongInfoComponent = e => {
                    let {
                        title: t,
                        coverImage: n,
                        songWebappUri: o,
                        artistWebappUri: i,
                        artistName: a,
                        iconButton: l
                    } = e, s = (0, r.jsx)("h4", {
                        className: "overflow-hidden text-ellipsis font-title text-title-xs font-medium text-base800",
                        children: t
                    }), c = (0, r.jsx)("h5", {
                        className: "overflow-hidden text-ellipsis text-kicker-xs tracking-normal text-base500 ",
                        children: a
                    });
                    return (0, r.jsxs)("div", {
                        className: "flex w-full items-center justify-between gap-2",
                        children: [(0, r.jsxs)("div", {
                            className: "flex w-full items-center overflow-hidden",
                            children: [(0, r.jsx)("div", {
                                className: "flex-shrink-0",
                                children: (0, r.jsx)(d.E, {
                                    alt: t,
                                    src: n,
                                    size: 48,
                                    borderRadius: 8
                                })
                            }), (0, r.jsxs)("div", {
                                className: "ml-3 flex flex-col justify-center gap-[6px] overflow-hidden whitespace-nowrap",
                                children: [o ? (0, r.jsx)(u.s, {
                                    pathnameUri: (0, h.OU)(o),
                                    children: s
                                }) : s, i ? (0, r.jsx)(u.s, {
                                    pathnameUri: (0, h.OU)(i),
                                    className: "hover:cursor-pointer",
                                    children: c
                                }) : c]
                            })]
                        }), l]
                    })
                }
        },
        47314: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return r
                }
            });
            let r = {
                FIXED: {
                    heading: "Fixed Edition"
                },
                OPEN: {
                    heading: "Open Edition"
                },
                SAM: {
                    heading: "Sound Swap"
                },
                FREE: {
                    heading: "Free Edition",
                    description: "Prove you were here first"
                },
                PRESAVE: {
                    heading: "Early Listen",
                    description: "Pre-save to listen early"
                },
                FALLBACK: {
                    heading: "Limited Edition",
                    description: "Rare editions for collectors"
                }
            }
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
                    return l
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
                l = (0, r.F4)({
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
                    return v
                },
                h_: function() {
                    return f
                },
                i_: function() {
                    return s
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(84298),
                a = n(8205);
            let GlobalDropdown = e => {
                    let {
                        trigger: t,
                        children: n,
                        align: i,
                        css: a,
                        onOpenChange: s,
                        queue: d,
                        wrapperContentProps: u,
                        isModal: c = !1,
                        disabled: p
                    } = e, h = (0, o.useRef)(!1), [m, v] = (0, o.useState)(!1);
                    return (0, r.jsx)(l, {
                        css: a,
                        onPointerDownCapture: e => {
                            "touch" !== e.pointerType || m || e.preventDefault()
                        },
                        onTouchMove: () => {
                            h.current = !0
                        },
                        onTouchEnd: () => {
                            h.current || m || v(!0), h.current = !1
                        },
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: (0, r.jsxs)(f, {
                            open: m,
                            modal: c,
                            onOpenChange: e => {
                                v(e), null == s || s()
                            },
                            children: [(0, r.jsx)(x, {
                                disabled: p,
                                asChild: !0,
                                children: t
                            }), (0, r.jsx)(DropdownMenuContent, {
                                align: i,
                                queue: d,
                                ...u,
                                children: n
                            })]
                        })
                    })
                },
                l = (0, a.zo)("div", {
                    width: "auto"
                }),
                s = (0, a.zo)("span", {
                    marginLeft: 8
                }),
                d = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                u = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                c = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                p = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                h = (0, a.zo)(i.VY, {
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
                                animationName: c
                            },
                            '&[data-side="right"]': {
                                animationName: p
                            },
                            '&[data-side="bottom"]': {
                                animationName: d
                            },
                            '&[data-side="left"]': {
                                animationName: u
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
                m = (0, a.zo)(i.ck, {
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
                f = i.fC,
                x = i.xz,
                DropdownMenuContent = function(e) {
                    let {
                        children: t,
                        disablePortal: n = !1,
                        ...o
                    } = e;
                    return n ? (0, r.jsx)(h, { ...o,
                        children: t
                    }) : (0, r.jsx)(i.Uv, {
                        children: (0, r.jsx)(h, { ...o,
                            children: t
                        })
                    })
                },
                v = m
        },
        51648: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return EditionCover
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(44361),
                i = n(73950),
                a = n(76292);

            function EditionCover(e) {
                let {
                    releaseTitle: t,
                    releaseCover: n,
                    className: l,
                    imageSize: s,
                    imageClassName: d
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, o.m)("flex aspect-square items-center justify-center overflow-hidden rounded-md", l),
                    children: (0, r.jsx)(i.G, {
                        src: n,
                        alt: t,
                        blurDataURL: (0, a.Z)(s, s),
                        width: s,
                        height: s,
                        placeholder: "blur",
                        className: (0, o.m)("aspect-square", d)
                    })
                })
            }
        },
        43607: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var r = n(8205);
            let o = (0, r.F4)({
                    to: {
                        transform: "rotate(1turn)"
                    }
                }),
                i = {
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderBottomColor: "transparent",
                    borderLeftColor: "transparent",
                    animation: `${o} 0.45s linear infinite`
                },
                a = (0, r.zo)("div", {
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
                                "&::after": { ...i
                                }
                            },
                            trending: {
                                marginY: 100,
                                "&::after": { ...i
                                }
                            },
                            fullScreenLoading: {
                                "&::after": {
                                    borderWidth: "4px",
                                    borderStyle: "solid",
                                    borderColor: r.rS.colors.gray200,
                                    borderBottomColor: "#6D7180",
                                    borderLeftColor: "#6D7180",
                                    animation: `${o} 0.65s linear infinite`
                                }
                            },
                            buyModal: {
                                marginRight: "4px",
                                "&::after": {
                                    borderWidth: "2px",
                                    borderStyle: "solid",
                                    borderColor: r.rS.colors.gray200,
                                    borderBottomColor: "#6D7180",
                                    borderLeftColor: "#6D7180",
                                    animation: `${o} 0.65s linear infinite`
                                }
                            }
                        }
                    },
                    defaultVariants: {
                        size: "md",
                        type: "base"
                    }
                })
        },
        88343: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return Timestamp
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(66373),
                a = n(44361),
                l = n(50491),
                s = n(3141),
                d = n(64571);

            function TimestampText(e) {
                let {
                    timestampDate: t,
                    className: n,
                    addSuffix: l
                } = e, u = o.useMemo(() => (0, i.default)(t, 1), [t]), {
                    seconds: c
                } = (0, s.J7)({
                    expiryTimestamp: u
                }), p = o.useMemo(() => (0, d.SS)(t.getTime(), l), [l, t, c % 5 == 0]);
                return (0, r.jsx)("span", {
                    className: (0, a.m)("whitespace-nowrap font-base text-base-xs tabular-nums text-base400", n),
                    children: p
                })
            }
            let Timestamp = e => {
                let {
                    timeStamp: t,
                    className: n,
                    addSuffix: i
                } = e, a = o.useMemo(() => new Date(t), [t]), s = o.useMemo(() => (0, r.jsx)(TimestampText, {
                    timestampDate: a,
                    className: n,
                    addSuffix: i
                }), [i, n, a]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        className: "flex items-center lt:hidden",
                        children: s
                    }), (0, r.jsx)(l.r, {
                        dateTime: a,
                        className: "hidden items-center lt:flex",
                        children: s
                    })]
                })
            }
        },
        69598: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return p
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(49542),
                a = n(78570),
                l = n.n(a),
                s = n(44361),
                d = n(8205);
            let u = {
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
                c = (0, d.zo)("button", u),
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
                p = o.forwardRef(function(e, t) {
                    let {
                        leadingIcon: n,
                        trailingIcon: o,
                        testId: a,
                        fullWidthAnchor: d = !1,
                        iconOnly: u = !1,
                        deprecatedCSS: p,
                        className: h,
                        labelComponent: m,
                        ...f
                    } = e, x = (0, r.jsx)("div", {
                        className: (0, i.clsx)("loading-circle inline-block aspect-square flex-grow-0 animate-spin rounded-full border-2 border-solid", "primary" === f.variant && "border-base100 border-l-neutral400  border-t-neutral400", ("secondary" === f.variant || "tertiary" === f.variant || "text" === f.variant) && "border-white  border-l-neutral400 border-t-neutral400 ", ("brand" === f.variant || "green" === f.variant) && "border-base50 border-l-brand100 border-t-brand100", "critical" === f.variant && "border-base50 border-l-destructive200 border-t-destructive200", "fuchsia" === f.variant && "border-base50 border-l-fuchsia500 border-t-fuchsia500", (u || "squared" === f.size) && "ml-0 aspect-square h-4/5", "XS" === f.size && "ml-2 h-2.5 w-2.5 !border-1.5", ("S" === f.size || "M" === f.size || "full" === f.size) && "ml-1 h-3.5 w-3.5", ("L" === f.size || "XL" === f.size || !f.size) && "ml-1 h-4 w-4")
                    }), v = null == f ? void 0 : f.href, b = (null == v ? void 0 : v.startsWith("http")) || (null == v ? void 0 : v.startsWith("mailto")), g = (0, r.jsxs)(c, {
                        "aria-label": f.label,
                        "aria-disabled": f.disabled,
                        hasIcon: !!n || !!o,
                        disabled: f.disabled,
                        loading: f.loading,
                        darkMode: f.darkMode,
                        "data-testid": a,
                        css: p,
                        ...f,
                        ref: t,
                        onClick: f.loading ? void 0 : e => {
                            e.currentTarget.blur(), f.onClick && f.onClick(e)
                        },
                        className: h,
                        children: [n && !f.loading && (0, r.jsx)(LeadingIcon, {
                            iconOnly: u,
                            children: n
                        }), u ? null : null != m ? m : f.label, !!o && !f.loading && (0, r.jsx)(TrailingIcon, {
                            iconOnly: u,
                            children: o
                        }), f.loading ? x : null]
                    });
                    return (0, r.jsx)(r.Fragment, {
                        children: (null == f ? void 0 : f.href) ? (0, r.jsx)(l(), {
                            className: (0, s.m)("!text-[unset] [text-decoration:unset]", d && "w-full"),
                            href: f.href,
                            "data-testid": a,
                            "data-href": f.href,
                            rel: b ? "noopener noreferrer" : void 0,
                            role: "link",
                            target: b ? "_blank" : void 0,
                            children: g
                        }) : g
                    })
                })
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
            var r = n(16356);
            n(97352);
            var o = n(44361);
            let PlayIndicatorBars = e => {
                    let {
                        size: t = "sm",
                        smallBars: n,
                        className: i
                    } = e, a = (0, o.m)("block w-[3px] flex-shrink-0 origin-bottom  rounded-full bg-fuchsia500 transition-all duration-100 ease-in-out", n ? "h-3" : "h-4");
                    return (0, r.jsxs)("div", {
                        className: (0, o.m)("flex flex-shrink-0 items-end justify-between", "xs" === t && "h-3.5 w-3", "sm" === t && "h-4 w-[13.5px]", i),
                        children: [(0, r.jsx)("div", {
                            className: (0, o.m)(a, n ? " animate-[playPulse_0.5s_ease-in-out_-0.2s_infinite_alternate] " : " animate-[playPulse_0.45s_ease-in-out_-0.2s_infinite_alternate] ")
                        }), (0, r.jsx)("div", {
                            className: (0, o.m)(a, n ? "animate-[playPulse_0.65s_ease-in-out_-0.7s_infinite_alternate] " : "animate-[playPulse_0.6s_ease-in-out_-0.6s_infinite_alternate] ")
                        }), (0, r.jsx)("div", {
                            className: (0, o.m)(a, n ? "animate-[playPulse_0.35s_ease-in-out_-0.5s_infinite_alternate] " : "animate-[playPulse_0.3s_ease-in-out_-0.4s_infinite_alternate] ")
                        })]
                    })
                },
                PlayContentWrapper = e => {
                    let {
                        children: t
                    } = e;
                    return (0, r.jsx)("div", {
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
            var r = n(16356);
            n(97352);
            var o = n(49542),
                i = n(5221),
                a = n(24924),
                l = n.n(a);
            let s = l()(() => Promise.resolve().then(n.bind(n, 34524)).then(e => e.Tooltip), {
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
                u = l()(() => Promise.resolve().then(n.bind(n, 34524)).then(e => e.Tooltip.StyledContent), {
                    loadableGenerated: {
                        webpack: () => [34524]
                    },
                    ssr: !1
                }),
                DateTimeTooltip = e => {
                    let {
                        dateTime: t,
                        children: n,
                        className: a,
                        prefix: l
                    } = e;
                    return (0, r.jsxs)(s, {
                        openOnClick: !1,
                        children: [(0, r.jsx)(d, {
                            className: (0, o.default)("cursor-default", a),
                            children: n
                        }), (0, r.jsx)(u, {
                            side: "top",
                            className: "max-w-[208px] px-3 py-2 text-center text-base-s font-medium",
                            children: `${l||""}${(0,i.default)(t,"MMM d, yyyy • hh:mm a")}`
                        })]
                    })
                }
        },
        85906: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return o
                }
            });
            var r = n(50868);
            let o = (0, r.zo)("div", "bg-base200 h-[1px] w-full mb-4", {
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
            var r = n(16356);
            n(97352);
            var o = n(75928),
                i = n(8205),
                a = n(46061),
                l = n(24455);

            function HoverCard(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    openDelay: o = 0
                } = n;
                return (0, r.jsx)(s, {
                    openDelay: o,
                    ...n,
                    children: t
                })
            }

            function StyledHoverContent(e) {
                let {
                    children: t,
                    css: n,
                    ...i
                } = e, {
                    sideOffset: a = 5,
                    side: s = "bottom",
                    avoidCollisions: u = !0
                } = i, c = (0, l.Z)();
                return (0, r.jsx)(o.h_, {
                    children: (0, r.jsx)(d, {
                        sideOffset: a,
                        side: s,
                        avoidCollisions: u,
                        collisionBoundary: c,
                        ...i,
                        css: n,
                        children: t
                    })
                })
            }
            let s = (0, i.zo)(o.fC, {
                    backgroundColor: "$neutral900"
                }),
                d = (0, i.zo)(o.VY, { ...a._R,
                    opacity: 1,
                    zIndex: "$tooltip"
                }),
                u = (0, i.zo)(o.VY, {
                    variants: {
                        animate: {
                            true: { ...a.Q_
                            }
                        }
                    }
                });
            HoverCard.StyledContent = StyledHoverContent, HoverCard.Content = function(e) {
                let {
                    children: t,
                    animate: n,
                    ...o
                } = e;
                return (0, r.jsx)(u, {
                    animate: n,
                    ...o,
                    children: t
                })
            }, HoverCard.Trigger = o.xz, HoverCard.Portal = o.h_
        },
        12437: function(e, t, n) {
            "use strict";
            n.d(t, {
                z: function() {
                    return o
                }
            });
            var r = n(8205);
            let o = (0, r.zo)("div", {
                position: "absolute",
                display: "inline-block",
                width: 8,
                height: 8,
                background: `${r.rS.gradients.fuchsia.value}`,
                borderRadius: "50%",
                verticalAlign: "super",
                marginLeft: 4
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
        81992: function(e, t, n) {
            "use strict";
            n.d(t, {
                I5: function() {
                    return i.VY
                },
                Ur: function() {
                    return u
                },
                aV: function() {
                    return i.aV
                },
                mQ: function() {
                    return Tabs
                },
                td: function() {
                    return TabList
                },
                vy: function() {
                    return c
                },
                xz: function() {
                    return i.xz
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(69761),
                a = n(8205),
                l = n(12437);
            let s = o.createContext(null),
                d = (0, a.zo)(i.xz, {
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
                u = o.forwardRef((e, t) => {
                    let {
                        label: n,
                        icon: i,
                        showIndicator: a,
                        ...u
                    } = e, c = (0, o.useContext)(s);
                    return (0, r.jsxs)(d, { ...u,
                        ref: t,
                        size: c || void 0,
                        hasIcon: !!i,
                        children: [n, i, !!a && (0, r.jsx)(l.z, {})]
                    })
                });
            u.displayName = "TabTrigger";
            let c = (0, a.zo)(i.aV, {
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
                    } = e, i = (0, o.useContext)(s);
                    return (0, r.jsx)(c, {
                        isXL: "xl" === i,
                        ...n,
                        children: t
                    })
                },
                Tabs = e => {
                    let {
                        size: t,
                        ...n
                    } = e;
                    return (0, r.jsx)(s.Provider, {
                        value: t || null,
                        children: (0, r.jsx)(i.fC, { ...n
                        })
                    })
                }
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
                } = e, [l, s] = (0, o.useState)(!1), d = {
                    openContent: l,
                    setOpenContent: s,
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
                l = n(8205),
                s = n(42529),
                d = n(46061),
                u = n(24455),
                c = n(31451);

            function TooltipComponent(e) {
                let {
                    children: t,
                    delayDuration: n = 0,
                    ...o
                } = e, {
                    openContent: a
                } = (0, c.n)();
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
                return (0, r.jsx)(c.g, {
                    openOnClick: n,
                    delayCloseMs: o,
                    children: (0, r.jsx)(TooltipComponent, { ...i,
                        children: t
                    })
                })
            }
            let p = (0, o.forwardRef)(function(e, t) {
                    let {
                        children: n,
                        size: o = "xs",
                        ...i
                    } = e, {
                        sideOffset: l = 6,
                        side: s = "top",
                        avoidCollisions: d = !0,
                        className: c,
                        ...p
                    } = i, m = (0, u.Z)();
                    return (0, r.jsx)(h, {
                        sideOffset: l,
                        side: s,
                        avoidCollisions: d,
                        collisionBoundary: m,
                        className: (0, a.default)("z-tooltip bg-neutral900 font-base font-medium text-white shadow-secondary ", "xs" === o ? "rounded-sm px-2.5 py-2 text-base-xs" : "rounded-md px-2 py-3 text-base-s", c),
                        ...p,
                        ref: t,
                        children: n
                    })
                }),
                h = (0, l.zo)(i.VY, { ...d.Q_
                });
            Tooltip.StyledContent = p, Tooltip.Content = i.VY, Tooltip.Trigger = function(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    className: l
                } = n, {
                    openContent: d,
                    setOpenContent: u,
                    openOnClick: p,
                    delayCloseMs: h
                } = (0, c.n)(), m = o.useRef(null), f = (0, s.R)(() => {
                    if (h) {
                        null !== m.current && clearTimeout(m.current), m.current = setTimeout(() => {
                            u(!1)
                        }, h);
                        return
                    }
                    u(!1)
                });
                return (0, r.jsx)(i.xz, {
                    className: (0, a.default)("cursor-default hover:cursor-default", l),
                    onClick: () => {
                        p && u(!d)
                    },
                    onMouseOver: () => {
                        null !== m.current && (clearTimeout(m.current), m.current = null), p || u(!0)
                    },
                    onMouseLeave: f,
                    onBlur: f,
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
        25347: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return UserHoverCard
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(24924),
                a = n.n(i),
                l = n(36619);
            let s = a()(() => Promise.resolve().then(n.bind(n, 36619)).then(e => e.HoverCard.Trigger), {
                    loadableGenerated: {
                        webpack: () => [36619]
                    },
                    ssr: !1
                }),
                d = a()(() => Promise.resolve().then(n.bind(n, 36619)).then(e => e.StyledHoverContent), {
                    loadableGenerated: {
                        webpack: () => [36619]
                    },
                    ssr: !1
                }),
                UserHoverCard = e => {
                    let {
                        trigger: t,
                        userHoverCardContent: n,
                        triggerAsChild: i = !1,
                        align: a
                    } = e, u = o.useRef(null);
                    return (0, r.jsxs)(l.HoverCard, {
                        closeDelay: 100,
                        openDelay: 200,
                        children: [(0, r.jsx)(s, {
                            ref: u,
                            style: {
                                minWidth: 0
                            },
                            asChild: i,
                            children: t
                        }), (0, r.jsx)(d, {
                            className: "p-0",
                            sideOffset: 8,
                            onPointerDownOutside: e => {
                                e.target === u.current && e.preventDefault()
                            },
                            align: a,
                            children: n
                        })]
                    })
                }
        },
        30300: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return CollectModal
                }
            });
            var r = n(16356);
            n(97352);
            var o = n(49542),
                i = n(73096),
                a = n(54668),
                l = n(22181),
                s = n(3928);
            let CollectModal = e => {
                let {
                    releaseId: t,
                    mintReferral: n,
                    collectButtonSource: d,
                    TEMPORARY_showCustomPrice: u
                } = e, {
                    closeCancelModal: c
                } = (0, l.useModal)(), {
                    data: p,
                    isLoading: h
                } = (0, s.aM2)(s.sOw, {
                    variables: {
                        releaseId: t
                    },
                    staleTime: 0
                }), m = null == p ? void 0 : p.data.release;
                if (!m || h) return (0, r.jsx)("div", {
                    className: "h-64 w-full animate-pulse rounded-lg bg-neutral200 shadow-tertiary"
                });
                let f = (0, r.jsx)("div", {
                    className: (0, o.default)("flex justify-center [&>div>div>div]:overflow-visible [&>div]:mt-0 [&>div]:w-full [&_[dir='ltr']]:p-0 [&_[role='tabpanel']]:w-[unset]", "mb-1"),
                    children: (0, r.jsx)(i.E, {
                        releaseData: m,
                        collectButtonSource: d,
                        referral: n,
                        isInModal: !0,
                        TEMPORARY_showCustomPrice: u
                    })
                });
                return (0, r.jsx)(a.Z, {
                    body: f,
                    title: "Collect",
                    showHeaderShadow: !1,
                    closeModal: c,
                    size: "small",
                    bodyWithoutPaddingBottom: !0
                })
            }
        },
        92434: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return ReleaseMintsModal
                }
            });
            var r = n(16356),
                o = n(97352),
                i = n(3928),
                a = n(21597),
                l = n(58285),
                s = n(54668),
                d = n(43158),
                u = n(22181),
                c = n(64571),
                p = n(95095);
            let userItemContent = (e, t, n) => (0, r.jsx)(p.p, {
                    user: t,
                    sourceLocation: n.sourceLocation
                }),
                collectorItemContent = (e, t, n) => {
                    let {
                        user: o,
                        nftsCount: l,
                        ownedGoldenEgg: s,
                        vipNftsCount: d
                    } = (0, i.S3c)(i.nMv, t);
                    return (0, r.jsx)(p.p, {
                        user: o,
                        secondaryText: `${(0,a.ZP)(l)} ${(0,c.Lo)({count:l,word:"edition"})}`,
                        sourceLocation: n.sourceLocation,
                        hasGoldenEgg: null != s,
                        isVip: d > 0
                    })
                },
                UserList = e => {
                    let t, {
                            primaryCount: n,
                            primaryItem: i,
                            primarySubordinate: h,
                            secondaryCount: m,
                            secondaryItem: f,
                            isLoading: x,
                            loadMore: v,
                            sourceLocation: b,
                            ...g
                        } = e,
                        {
                            tablet: w
                        } = (0, d.useMediaQuery)(),
                        {
                            closeCancelModal: y
                        } = (0, u.useModal)(),
                        [C, j] = o.useState(),
                        S = (0, o.useCallback)(() => x ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(p.T, {}), (0, r.jsx)(p.T, {}), (0, r.jsx)(p.T, {})]
                        }) : null, [x]);
                    if ("collectorList" in g) t = (0, r.jsx)(l.OO, {
                        data: g.collectorList,
                        itemContent: collectorItemContent,
                        customScrollParent: C,
                        endReached: v,
                        context: {
                            sourceLocation: b
                        },
                        components: {
                            Footer: S
                        }
                    });
                    else {
                        if (!("userList" in g)) return null;
                        t = (0, r.jsx)(l.OO, {
                            data: g.userList,
                            itemContent: userItemContent,
                            customScrollParent: C,
                            endReached: v,
                            context: {
                                sourceLocation: b
                            },
                            components: {
                                Footer: S
                            }
                        })
                    }
                    let k = n ? `${(0,a.ZP)(n)} ${(0,c.Lo)({word:i,count:n})}${h?` ${h}`:""}` : void 0,
                        I = m && f ? `${(0,a.ZP)(m)} ${(0,c.Lo)({word:f,count:m})}` : void 0;
                    return (0, r.jsx)(s.Z, {
                        title: k,
                        subHeader: I,
                        body: t,
                        closeModal: y,
                        ref: e => {
                            j(e || void 0)
                        },
                        isFullScreen: !w
                    })
                },
                ReleaseMintsModal = e => {
                    let {
                        releaseId: t
                    } = e, {
                        orderedList: n,
                        loadMoreNextPage: o,
                        isLoadingNewPage: a,
                        firstPage: l
                    } = (0, i.NSZ)(i.Iks, {
                        variables(e) {
                            let {
                                pageParam: n
                            } = e;
                            return {
                                releaseId: t,
                                pagination: {
                                    first: 10,
                                    after: (null == n ? void 0 : n.after) || null
                                }
                            }
                        },
                        filterQueryKey: {
                            releaseId: t
                        },
                        getNextPageParam(e) {
                            var t, n;
                            let {
                                data: r
                            } = e;
                            return (null == r ? void 0 : null === (t = r.release) || void 0 === t ? void 0 : t.collectors.pageInfo.hasNextPage) && {
                                after: null == r ? void 0 : null === (n = r.release) || void 0 === n ? void 0 : n.collectors.pageInfo.endCursor
                            }
                        },
                        list(e) {
                            let {
                                release: t
                            } = e;
                            return null == t ? void 0 : t.collectors.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        staleTime: 0
                    }), s = null == l ? void 0 : l.data.release, d = null == s ? void 0 : s.totalMinted, u = null == s ? void 0 : s.collectorsCount;
                    return (0, r.jsx)(UserList, {
                        collectorList: n,
                        isLoading: a,
                        loadMore: o,
                        primaryCount: d,
                        primaryItem: "edition",
                        primarySubordinate: "minted",
                        secondaryCount: u,
                        secondaryItem: "collector",
                        sourceLocation: "Release Mints Modal"
                    })
                }
        },
        25533: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChainContext: function() {
                    return d
                },
                ChainProvider: function() {
                    return u
                },
                useChainProvider: function() {
                    return useChainProvider
                }
            });
            var r = n(59665),
                o = n(47226),
                i = n(42529),
                a = n(85846),
                l = n(22546);
            let s = (0, l.f)(function() {
                    let e = (0, r.t_)({
                            chainId: a.K_.eth
                        }),
                        t = (0, r.t_)({
                            chainId: a.K_.optimism
                        }),
                        n = (0, r.t_)({
                            chainId: a.K_.base
                        }),
                        l = (0, i.R)(r => {
                            switch (r) {
                                case o.Wr.SEPOLIA:
                                case o.Wr.MAINNET:
                                    return e;
                                case o.Wr.OPTIMISM_SEPOLIA:
                                case o.Wr.OPTIMISM:
                                    return t;
                                case o.Wr.BASE:
                                case o.Wr.BASE_SEPOLIA:
                                    return n;
                                default:
                                    throw Error(`Invalid chainId ${r}`)
                            }
                        });
                    return {
                        provider: l
                    }
                }),
                useChainProvider = () => s.useContainer(),
                d = s.Context,
                u = s.Provider
        },
        89012: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MintReferralProvider: function() {
                    return MintReferralProvider
                },
                MintReferralType: function() {
                    return o
                },
                useMintReferral: function() {
                    return useMintReferral
                }
            });
            var r, o, i = n(16356),
                a = n(97352);
            (r = o || (o = {})).Playlist = "playlist", r.Post = "post";
            let l = (0, a.createContext)({
                    setReferral: () => void 0,
                    referral: null
                }),
                useMintReferral = () => (0, a.useContext)(l),
                MintReferralProvider = e => {
                    let {
                        children: t
                    } = e, [n, r] = (0, a.useState)(null), o = (0, a.useMemo)(() => ({
                        referral: n,
                        setReferral: r
                    }), [n, r]);
                    return (0, i.jsx)(l.Provider, {
                        value: o,
                        children: t
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
            var r = n(17941);
            let useIsSsr = () => {
                let e = (0, r.a)();
                return !e
            }
        },
        14531: function(e, t, n) {
            "use strict";
            n.d(t, {
                S: function() {
                    return useLogError
                }
            });
            var r = n(76348),
                o = n(47226),
                i = n(22181),
                a = n(75747),
                l = n(71301),
                s = n(42529),
                d = n(85846);

            function useLogError() {
                let {
                    openToast: e
                } = a.ToastContext.useContainer(), {
                    setRequestRejected: t
                } = (0, l.useWalletRequest)(), {
                    closeModalByType: n
                } = i.ModalContext.useContainer(), u = (0, s.R)(a => {
                    var l, s;
                    let {
                        error: u,
                        toast: c,
                        capture: p = !0,
                        closeProcessingModal: h = !1,
                        indexedTags: m,
                        unindexedExtra: f,
                        toastDuration: x = 5e3,
                        level: v
                    } = a;
                    console.error(u);
                    let b = "string" != typeof u && null !== (s = null == u ? void 0 : u.message) && void 0 !== s ? s : "";
                    if ((null == u ? void 0 : u.code) === 4001 || b.match(/(user|signing transaction was|signing was) (rejected|denied|cancel)/gi)) {
                        n(i.ModalType.PROCESSING), n(i.ModalType.PROCESSING_UPLOAD_JOURNEY), t(!0), e({
                            text: "Request rejected in wallet.",
                            variant: "error",
                            duration: x
                        }), setTimeout(() => {
                            t(!1)
                        }, x);
                        return
                    }
                    if (null == u ? void 0 : null === (l = u.message) || void 0 === l ? void 0 : l.includes("Unsupported chain id")) {
                        e({
                            text: `Please connect your wallet to ${o.bC[d.k6]}`,
                            variant: "error",
                            duration: x
                        });
                        return
                    }
                    p && r.Tb(u instanceof Error ? u : Error(JSON.stringify(u)), {
                        tags: m,
                        extra: f,
                        level: v
                    }), c && ("string" == typeof c ? e({
                        text: c,
                        variant: "error",
                        duration: x
                    }) : e({
                        variant: "error",
                        duration: x,
                        ...c
                    })), h && (n(i.ModalType.PROCESSING), n(i.ModalType.PROCESSING_UPLOAD_JOURNEY))
                });
                return u
            }
        },
        51401: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return useSubscribeReleaseCollector
                },
                z: function() {
                    return useSubscribeRelease
                }
            });
            var r = n(97352),
                o = n(78608);
            n(96960);
            var i = n(60303),
                a = n(3928),
                l = n(85846);

            function useSubscribeRelease(e) {
                var t;
                let {
                    release: n
                } = e, {
                    id: s
                } = (0, a.S3c)(a._E9, n), {
                    value: d
                } = (0, o.useGate)(l.ln.RELEASE_MINIMAL_SUBSCRIPTIONS), u = (0, i.mU)({
                    query: a.z_b,
                    enabled: d,
                    variables: {
                        id: s
                    }
                }), c = null === (t = u.data) || void 0 === t ? void 0 : t.data.releaseUpdates, p = (0, r.useMemo)(() => {
                    let e = (0, a.S3c)(a._E9, n);
                    if (!c) return e;
                    let t = { ...c,
                        saleDetails: {
                            primaryCollected: c.primaryCollected,
                            primaryRaisedInWei: c.primaryRaisedInWei,
                            soundSwapCollected: c.soundSwapCollected,
                            soundSwapRaisedInWei: c.soundSwapRaisedInWei,
                            totalVolume: c.totalVolume
                        }
                    };
                    return t
                }, [n, c]);
                return { ...u,
                    data: p
                }
            }

            function useSubscribeReleaseCollector(e) {
                let {
                    releaseId: t,
                    onData: n,
                    enabled: r
                } = e, {
                    value: s
                } = (0, o.useGate)(l.ln.RELEASE_NFTS_SUBSCRIPTIONS);
                return (0, i.mU)({
                    query: a.xrg,
                    enabled: s && r,
                    variables: {
                        releaseId: t
                    },
                    onData: n
                })
            }
        },
        3141: function(e, t, n) {
            "use strict";
            n.d(t, {
                J7: function() {
                    return useTimer
                }
            });
            var r = n(97352),
                o = n(18167),
                i = n(97193),
                a = n(31265),
                l = n(42529);

            function getSecondsFromExpiry(e, t) {
                let n = ("number" == typeof e ? e : e.getTime()) - new Date().getTime();
                if (n > 0) {
                    let e = (0, o.Z)(n);
                    return t ? Math.round(e) : e
                }
                return 0
            }

            function getDelayFromExpiryTimestamp(e) {
                let t = ("number" == typeof e ? e : new Date(e).getTime()) > 0;
                if (!t) return null;
                let n = getSecondsFromExpiry(e),
                    r = (0, i.Z)(Math.floor(n - Math.floor(n)));
                return r > 0 ? r : 1e3
            }
            let s = (0, a.sj)({
                now: Date.now()
            });

            function useTimer(e) {
                let {
                    expiryTimestamp: t,
                    onExpire: n,
                    autoStart: o = !0
                } = e, d = "number" == typeof t ? t : t.getTime(), [u, c] = r.useState(d), [p, h] = r.useState(() => getSecondsFromExpiry(u)), [m, f] = r.useState(() => o && Date.now() < d), [x, v] = r.useState(o), [b, g] = r.useState(() => getDelayFromExpiryTimestamp(u));
                r.useEffect(() => {
                    c(d), f(!!d && Date.now() < d)
                }, [d]);
                let w = (0, l.R)(() => {
                        n && n(), f(!1), g(null)
                    }),
                    y = r.useCallback(() => {
                        f(!1)
                    }, []),
                    C = r.useCallback(function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        g(getDelayFromExpiryTimestamp(e)), v(t), f(t), c(e), h(getSecondsFromExpiry(e))
                    }, []),
                    j = r.useCallback(() => {
                        let e = new Date;
                        e.setMilliseconds(e.getMilliseconds() + (0, i.Z)(p)), C(e)
                    }, [C, p]),
                    S = r.useCallback(() => {
                        x ? (h(getSecondsFromExpiry(u)), f(!0)) : j()
                    }, [x, u, j]);
                return (0, r.useEffect)(() => {
                    if (m) return 1e3 !== b && g(1e3), (0, a.Ld)(s, () => {
                        let e = getSecondsFromExpiry(u);
                        h(e), e <= 0 && w()
                    })
                }, [m, b, g, u, w]), { ... function(e) {
                        let t = Math.ceil(e);
                        return {
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t % 3600 / 60),
                            hours: Math.floor(t % 86400 / 3600),
                            days: Math.floor(t / 86400)
                        }
                    }(p),
                    start: S,
                    pause: y,
                    resume: j,
                    restart: C,
                    isRunning: m
                }
            }
            setInterval(() => {
                s.now = Date.now()
            }, 1e3)
        },
        79320: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return useWindowSize
                }
            });
            var r = n(97352),
                o = n(22248);

            function useWindowSize() {
                let [e, t] = r.useState({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                return (0, r.useEffect)(() => {
                    let e = (0, o.Z)(() => {
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
        70931: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return expectNormalGas
                },
                w: function() {
                    return o
                }
            });
            var r = n(76348);
            let o = "soundxyz-sdk";

            function expectNormalGas(e) {
                let {
                    estimation: t,
                    editionAddress: n,
                    chainId: o,
                    quantity: i,
                    loggingExtra: a
                } = e;
                return t < 100000 n ? ((0, r.uT)("Unexpected estimation received", {
                    tags: {
                        chainId: o,
                        editionAddress: n
                    },
                    extra: { ...a,
                        estimation: t.toString(),
                        quantity: i
                    },
                    level: "warning"
                }), 500000 n) : t
            }
        },
        77348: function(e, t, n) {
            "use strict";
            n.d(t, {
                A8: function() {
                    return isDeployedContractAddress
                },
                V: function() {
                    return hasEnoughForGasEstimate
                },
                cX: function() {
                    return hasEnoughFundsForL2Upload
                },
                v1: function() {
                    return chainFromId
                }
            });
            var r = n(88266),
                o = n(96044),
                i = n(44333),
                a = n(33233),
                l = n(2807),
                s = n(80854),
                d = n(47983),
                u = n(62865),
                c = n(47226);

            function chainFromId(e) {
                switch (e) {
                    case c.Wr.OPTIMISM:
                        return o.v;
                    case c.Wr.MAINNET:
                        return i.R;
                    case c.Wr.OPTIMISM_SEPOLIA:
                        return a.O;
                    case c.Wr.SEPOLIA:
                        return l.F;
                    case c.Wr.BASE_SEPOLIA:
                        return s.L;
                    case c.Wr.BASE:
                        return d.u;
                    default:
                        throw Error(`Unsupported chain id ${e}`)
                }
            }
            async function hasEnoughForGasEstimate(e) {
                let {
                    gasEstimate: t,
                    userAddress: n,
                    publicClient: r,
                    extraValue: o
                } = e, [i, a] = await Promise.all([r.getBalance({
                    address: n,
                    blockTag: "latest"
                }), r.getBlock({
                    blockTag: "pending"
                }).then(e => {
                    var t;
                    return null !== (t = e.baseFeePerGas) && void 0 !== t ? t : 0 n
                })]);
                return i >= t * (a + 1000000 n) + (null != o ? o : 0 n)
            }
            async function hasEnoughFundsForL2Upload(e) {
                let {
                    userAddress: t,
                    publicClient: n
                } = e, o = await n.getBalance({
                    address: t,
                    blockTag: "latest"
                });
                return o > (0, r.f)("0.0005")
            }
            async function isDeployedContractAddress(e) {
                let {
                    contractAddress: t,
                    provider: n
                } = e;
                (0, u.HR)(t);
                let r = await n.getBytecode({
                    address: t
                });
                return null != r && "0x" !== r
            }
        },
        66159: function(e, t, n) {
            "use strict";

            function typedEntries(e) {
                return Object.entries(e)
            }
            n.d(t, {
                F: function() {
                    return typedEntries
                }
            })
        },
        60661: function() {},
        26917: function() {},
        73804: function() {},
        29036: function() {},
        39362: function() {},
        15325: function() {},
        22810: function() {}
    }
]);