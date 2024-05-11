"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9289], {
        99808: function(e, t, n) {
            n.d(t, {
                M$: function() {
                    return v
                },
                Qp: function() {
                    return formattedAuctionType
                },
                S$: function() {
                    return g
                },
                Ue: function() {
                    return d
                },
                VY: function() {
                    return x
                },
                Wm: function() {
                    return o
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
                    return m
                },
                nA: function() {
                    return f
                },
                pU: function() {
                    return p
                },
                rE: function() {
                    return a
                },
                ry: function() {
                    return b
                },
                tu: function() {
                    return h
                },
                zd: function() {
                    return c
                }
            });
            var r = n(8205),
                i = n(3928);
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
            let o = (0, r.zo)("div", {
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
                f = "Carefully review the below details before uploading. Any edits to your song after you upload will require additional gas fees. Drop type and phases cannot be edited once started.",
                m = "Build your own street team and incentivize your listeners to share your release! Collectors can share your song or add it to a playlist to earn when they refer someone else to collect your song.",
                p = 111,
                h = 35,
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
                g = (0, r.zo)("div", {
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
                b = (0, r.zo)("div", {
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
                return t === i.IIw.FixedQuantity ? "Fixed Editions" : t === i.IIw.OpenEdition ? "Open Editions" : t === i.IIw.OpenEditionWithSam ? "Sound Swap" : ""
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
            n.d(t, {
                m: function() {
                    return LockIcon
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(72102),
                o = n(91485),
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
                                children: (0, r.jsx)(i.G, {
                                    icon: o.HI,
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
            n.d(t, {
                U: function() {
                    return UserHoverCardContent
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(55344);
            n(96960);
            var o = n(96220),
                a = n(68753),
                l = n(98335),
                s = n(21597),
                d = n(59287),
                u = n(8205),
                c = n(97946);
            let UserHoverCardContentUI = e => {
                    var t, n, i;
                    let {
                        user: o,
                        followButton: a,
                        verified: l,
                        avatar: u
                    } = e, {
                        publicAddress: v,
                        username: g,
                        followerCount: b,
                        followingCount: w,
                        nftsOwned: y,
                        artist: j,
                        creditAllocations: C,
                        webappUri: S,
                        bannerImage: I
                    } = o, N = g !== (0, d.pc)(v, 5, 4), M = (j ? null == j ? void 0 : j.numReleases : C.length) || 0, T = null !== (i = null !== (n = null == j ? void 0 : null === (t = j.bannerImage) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : null == I ? void 0 : I.url) && void 0 !== i ? i : "/images/sound_letter_s.svg";
                    return (0, r.jsxs)("div", {
                        className: "h-fit w-[300px]",
                        children: [(0, r.jsx)(f, {
                            css: {
                                backgroundImage: `url(${T})`,
                                backgroundSize: "cover"
                            }
                        }), (0, r.jsx)(m, {
                            children: u
                        }), (0, r.jsxs)("div", {
                            className: "flex flex-col gap-[22px] p-[14px]",
                            children: [(0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, r.jsx)(c.s, {
                                    pathnameUri: S,
                                    children: (0, r.jsxs)(p, {
                                        children: [(0, r.jsxs)(h, {
                                            children: [(0, r.jsx)("h1", {
                                                children: g
                                            }), j && l]
                                        }), N && (0, r.jsx)("p", {
                                            children: (0, d.pc)(v, 5, 4)
                                        })]
                                    })
                                }), a]
                            }), (0, r.jsxs)("div", {
                                className: "flex justify-between",
                                children: [!!M && (0, r.jsxs)(x, {
                                    children: [(0, r.jsx)("div", {
                                        children: (0, s.ZP)(M)
                                    }), (0, r.jsxs)("p", {
                                        children: ["Sound", M > 1 && "s"]
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
                                        children: (0, s.ZP)(b)
                                    }), (0, r.jsx)("p", {
                                        children: "Followers"
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                f = (0, u.zo)("div", {
                    display: "flex",
                    width: "100%",
                    height: 76,
                    borderRadius: "8px 8px 0 0",
                    backgroundPosition: "center"
                }),
                m = (0, u.zo)("div", {
                    justifyContent: "center",
                    alignItems: "center",
                    width: 74,
                    height: 74,
                    borderRadius: 8,
                    background: "$white",
                    marginTop: -56,
                    marginX: 14
                }),
                p = (0, u.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 4,
                    p: {
                        base: "M",
                        color: "$neutral400"
                    }
                }),
                h = (0, u.zo)("div", {
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
                g = n(95390);
            let UserHoverCardContent = e => {
                let {
                    userId: t
                } = e, {
                    data: n
                } = (0, v.aM2)(v.FS3, {
                    variables: {
                        userId: t
                    },
                    staleTime: (0, i.Z)("5 minutes")
                }), s = null == n ? void 0 : n.data.user;
                if (!s) return null;
                let d = (0, v.S3c)(v.XXP, s),
                    {
                        avatar: u,
                        publicAddress: c,
                        username: f,
                        webappUri: m,
                        artist: p
                    } = d;
                return (0, r.jsx)(UserHoverCardContentUI, {
                    user: { ...d,
                        webappUri: (0, g.OU)(m)
                    },
                    followButton: (0, r.jsx)(o.e, {
                        userId: d.id,
                        dark: !0,
                        size: "M",
                        sourceLocation: "User Hover Card",
                        artistId: null == p ? void 0 : p.id
                    }),
                    verified: (0, r.jsx)(l.O, {
                        noTooltip: !0
                    }),
                    avatar: (0, r.jsx)(a.q, {
                        src: null == u ? void 0 : u.url,
                        walletAddress: c,
                        username: f,
                        borderRadius: 6,
                        size: 74,
                        webappUri: m
                    })
                })
            }
        },
        12849: function(e, t, n) {
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
            var i = n(72102),
                o = n(90146),
                a = n(24114),
                l = n(73534),
                s = n(44361),
                d = n(69349),
                u = n(19847),
                c = n(12849),
                f = n(88343),
                m = n(69598),
                p = n(44456),
                h = n(98335),
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
                        loading: o,
                        releaseURI: a,
                        releaseId: l,
                        sourceComponent: s
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, r.jsx)(m.z, {
                                label: "Collect",
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                loading: o,
                                disabled: n,
                                href: a,
                                variant: "tertiary",
                                leadingIcon: (0, r.jsx)(i.G, {
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
                            children: (0, r.jsx)(m.z, {
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
                                loading: o
                            })
                        })]
                    })
                },
                NotificationActionButton = e => {
                    let {
                        label: t,
                        icon: n,
                        href: i,
                        onClick: o,
                        mobileHref: a,
                        mobileOnClick: l
                    } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("div", {
                            className: "flex lt:hidden",
                            children: (0, r.jsx)(m.z, {
                                label: t,
                                iconOnly: !0,
                                size: "squared",
                                className: " h-9 w-9 min-w-[36px] p-0 font-semibold [&_.loading-circle]:h-4 [&_.loading-circle]:w-4",
                                variant: "tertiary",
                                leadingIcon: n,
                                href: a || i,
                                onClick: l || o
                            })
                        }), (0, r.jsx)("div", {
                            className: "hidden lt:flex",
                            children: (0, r.jsx)(m.z, {
                                label: t,
                                variant: "tertiary",
                                size: "XS",
                                className: " h-7 min-w-[78px] flex-shrink-0 px-1 py-2 transition-all duration-500 ease-in-out hover:bg-white hover:shadow-tertiary",
                                onClick: o,
                                href: i
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
                                children: (0, r.jsx)(h.O, {
                                    size: 16
                                })
                            }), (0, r.jsx)("span", {
                                className: "hidden md:block",
                                children: (0, r.jsx)(h.O, {
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
                        children: [(0, r.jsx)(f.E, {
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
                    }).map((e, i) => {
                        let o = t > 1 && i % 4 == 0 && 0 !== i || n;
                        return (0, r.jsxs)("div", {
                            className: "flex min-h-[64px] w-full items-center justify-between py-4 lt:py-3 ",
                            children: [(0, r.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, r.jsx)("div", {
                                    className: (0, s.m)("h-10 w-10 animate-pulse bg-base200", o ? "rounded-full" : "rounded-md")
                                }), (0, r.jsx)("div", {
                                    className: "h-3.5 w-48 animate-pulse rounded-md bg-base200  lt:w-80"
                                })]
                            }), (0, r.jsx)("div", {
                                className: "relative flex min-w-[40px] items-center justify-end",
                                children: (0, r.jsx)("div", {
                                    className: "h-3.5 w-3.5 animate-pulse rounded-full bg-base200"
                                })
                            })]
                        }, `NOTIFICATION-LOADING-STATE${i}`)
                    })
                };

            function hasReadNotification(e) {
                let {
                    timestamp: t,
                    previousTimestamp: n
                } = e;
                return !!n && ((0, o.default)(t, n) || (0, a.default)(t, n))
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
                        children: (0, r.jsx)(p.j, {
                            size: "xs"
                        })
                    })
                },
                PlayingMotionLayoutShift = e => {
                    let {
                        children: t,
                        isPlaying: n,
                        className: i
                    } = e;
                    return (0, r.jsx)(l.E.div, {
                        layout: "position",
                        layoutDependency: void 0 !== n && n,
                        transition: {
                            duration: .25
                        },
                        className: i,
                        children: t
                    })
                };

            function getContentSnapshot(e) {
                let {
                    content: t,
                    maxLength: n = 17
                } = e, i = t.length > n, o = i ? t.slice(0, n).split(" ").slice(0, -1).concat("...") : t.split(" "), a = t.slice(0, n).concat("...");
                return t.includes(" ") ? (0, r.jsxs)("span", {
                    className: "text-base500",
                    children: ['"', a, '"']
                }) : o.map((e, t) => (0, r.jsxs)("span", {
                    className: "text-base500",
                    children: [0 === t && '"', e, t === o.length - 1 && '"', t !== o.length - 1 && v.L_]
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
                return t.slice(0, n).map((e, i) => {
                    let {
                        release: {
                            id: o,
                            title: a,
                            artist: {
                                name: l
                            }
                        }
                    } = e, s = 0 === i, d = i === Math.min(t.length, n) - 1;
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
                    }, o)
                })
            }

            function contentForPost(e) {
                let {
                    postContentFrag: t,
                    includeYourPrefix: n
                } = e;
                if (!t) return null;
                let i = u.g.safeParse(t.lexicalContent),
                    o = c.Z.generateTextForNode(i.success ? i.data.root : void 0),
                    a = o.length ? o : t.content;
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
                                                name: i
                                            }
                                        }
                                    }
                                }
                            } = t,
                            o = getContentSnapshot({
                                content: `${e} - ${i}`,
                                maxLength: 30
                            });
                            return n ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    children: "your drop activity"
                                }), v.L_, o]
                            }) : o
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
                            i = e.slice(0, 3).map(e => {
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
                            o = getContentSnapshot({
                                content: i,
                                maxLength: 24
                            });
                            return n ? (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("span", {
                                    children: "your collecting activity"
                                }), v.L_, o]
                            }) : o
                        }
                    default:
                        return "your activity"
                }
                return null
            }
        },
        73096: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return MintComponent
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(24924),
                a = n.n(o),
                l = n(44361),
                s = n(39513),
                d = n(89012),
                u = n(3928),
                c = n(51401),
                f = n(64571);
            n(96960);
            var m = n(68753),
                p = n(92434),
                h = n(47314),
                x = n(51648),
                v = n(54668),
                g = n(96301),
                b = n(22181),
                w = n(85846);
            let YouOwnModal = e => {
                    var t, n, i, o, a, l, s, d;
                    let {
                        releaseId: c,
                        editionsOwned: m
                    } = e, {
                        authUser: p,
                        isAuthenticatedWithAPI: x
                    } = (0, g.aC)(), {
                        closeCancelModal: w
                    } = b.ModalContext.useContainer(), y = null == p ? void 0 : p.publicAddress, {
                        data: j,
                        isLoading: C,
                        error: S
                    } = (0, u.aM2)(u.XGC, {
                        variables: {
                            releaseId: c,
                            publicAddress: y
                        },
                        staleTime: 0,
                        enabled: x,
                        filterQueryKey: [y, c]
                    }), I = null == j ? void 0 : null === (t = j.data.userByAddress) || void 0 === t ? void 0 : t.collectedReleases.edges.map(e => e.node);
                    if (!I || !I.length) return;
                    let N = I[0];
                    if (!N) return;
                    let {
                        release: M,
                        gaNftsCount: T,
                        vipNftsCount: E,
                        goldenEgg: L
                    } = N, z = !!L, P = !!M.gaCoverImage, R = (null === (n = M.staticCoverImage) || void 0 === n ? void 0 : n.url) || (null === (i = M.coverImage) || void 0 === i ? void 0 : i.url), _ = (null === (o = M.staticGaCoverImage) || void 0 === o ? void 0 : o.url) || (null === (a = M.gaCoverImage) || void 0 === a ? void 0 : a.url) || R, k = (null === (l = M.staticVipCoverImage) || void 0 === l ? void 0 : l.url) || (null === (s = M.vipCoverImage) || void 0 === s ? void 0 : s.url) || R, F = (null === (d = M.animatedGoldenEggImageOptimized) || void 0 === d ? void 0 : d.url) || M.goldenEggImage.url || R, $ = "TIERED_EDITION" === M.auctionContractType && !!P, O = (0, r.jsxs)(r.Fragment, {
                        children: [$ ? (0, r.jsxs)(r.Fragment, {
                            children: [T > 0 && (0, r.jsx)(EditionOwnedRow, {
                                title: M.title,
                                releaseCover: _,
                                heading: h.X.FREE.heading,
                                editionCount: T
                            }), E > 0 && (0, r.jsx)(EditionOwnedRow, {
                                title: M.title,
                                releaseCover: k,
                                heading: "Limited Edition",
                                editionCount: E
                            })]
                        }) : (0, r.jsx)(EditionOwnedRow, {
                            title: M.title,
                            releaseCover: R,
                            heading: "Limited Edition",
                            editionCount: z ? m - 1 : m
                        }), z && (0, r.jsx)(EditionOwnedRow, {
                            title: M.title,
                            releaseCover: F,
                            heading: "Golden Egg",
                            editionCount: 1
                        })]
                    }), A = (0, r.jsx)("div", {
                        className: "flex flex-col gap-4 pb-1",
                        children: C || S ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(RowSkeleton, {}), (0, r.jsx)(RowSkeleton, {})]
                        }) : O
                    });
                    return (0, r.jsx)(v.Z, {
                        body: A,
                        closeModal: w,
                        title: `${m?`${m} `:""}${(0,f.Lo)({word:"edition",count:m})} collected`,
                        bodyWithoutPaddingBottom: !0
                    })
                },
                EditionOwnedRow = e => {
                    let {
                        title: t,
                        releaseCover: n,
                        heading: i,
                        editionCount: o
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
                                children: i
                            }), (0, r.jsxs)("p", {
                                className: "font-base text-base-s text-base700",
                                children: [o, w.L_, (0, f.Lo)({
                                    word: "edition",
                                    count: o
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
                    } = e, [r, o] = (0, i.useState)(0), {
                        isLoading: a
                    } = (0, u.aM2)(u.eAJ, {
                        variables: !!t && {
                            userId: t.id,
                            releaseId: n
                        },
                        onSuccess(e) {
                            var t, n, r;
                            o(null !== (r = null == e ? void 0 : null === (n = e.data.user) || void 0 === n ? void 0 : null === (t = n.collectedReleases.edges[0]) || void 0 === t ? void 0 : t.node.nftsCount) && void 0 !== r ? r : 0)
                        },
                        staleTime: 0
                    });
                    return (0, c.X)({
                        releaseId: n,
                        onData(e) {
                            var n, r;
                            let {
                                data: {
                                    releaseCollectorUpdates: i
                                }
                            } = e;
                            i.userPublicAddress === (null == t ? void 0 : t.publicAddress) && o(null !== (r = null === (n = i.collector) || void 0 === n ? void 0 : n.nftsCount) && void 0 !== r ? r : 0)
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
                    totalMinted: o
                } = e, {
                    authUser: a
                } = (0, g.aC)(), {
                    openModal: l
                } = b.ModalContext.useContainer(), {
                    data: s,
                    isLoading: d
                } = (0, u.aM2)(u.B$C, {
                    variables: {
                        releaseId: n,
                        userId: null == a ? void 0 : a.id
                    },
                    staleTime: 0
                }), c = null == s ? void 0 : s.data.release, h = null == c ? void 0 : c.socialProofCollectors, {
                    count: x,
                    isLoading: v
                } = useGetNumReleaseEditionsOwned({
                    user: a,
                    releaseId: n
                }), w = i.useMemo(() => h ? [...h].reverse() : [], [h]), y = 0 === o ? (0, r.jsx)("span", {
                    className: "mx-auto font-semibold ",
                    children: "Be the first to mint"
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "group flex h-full w-full cursor-pointer items-center justify-center gap-1.5",
                        onClick: () => {
                            l(b.ModalType.RELEASE_MINTS, {
                                body: (0, r.jsx)(p.Y, {
                                    releaseId: n
                                })
                            })
                        },
                        children: [(0, r.jsx)("div", {
                            className: "flex flex-row-reverse [&>*:nth-child(1)]:-ml-3 [&>*:nth-child(2)]:-ml-3 ",
                            children: w.map(e => {
                                var t;
                                return (0, r.jsx)("div", {
                                    children: (0, r.jsx)(m.q, {
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
                            children: [(0, f.cE)({
                                value: o,
                                precision: 3
                            }), "\xa0", (0, f.Lo)({
                                count: o,
                                word: "mint"
                            })]
                        })]
                    }), !!x && a && (0, r.jsxs)("button", {
                        className: "flex h-full w-full items-center justify-center gap-1.5 font-medium outline-none hover:text-base500",
                        onClick: () => {
                            l(b.ModalType.YOU_OWN, {
                                body: (0, r.jsx)(YouOwnModal, {
                                    releaseId: n,
                                    editionsOwned: x
                                })
                            })
                        },
                        children: [(0, r.jsx)(m.q, {
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
                j = a()(() => Promise.all([n.e(232), n.e(2043), n.e(8631), n.e(5464), n.e(1165), n.e(247), n.e(4449), n.e(9416), n.e(7543), n.e(4606), n.e(3299), n.e(680), n.e(1573), n.e(9964), n.e(2090), n.e(4777), n.e(5942), n.e(3008), n.e(4316), n.e(6330), n.e(9032), n.e(1932), n.e(6090), n.e(7101), n.e(2422), n.e(4243), n.e(7598), n.e(9471)]).then(n.bind(n, 68540)).then(e => e.EditionMintComponent), {
                    loadableGenerated: {
                        webpack: () => [68540]
                    },
                    ssr: !1,
                    loading: () => (0, r.jsx)(MintComponentLoader, {})
                }),
                C = a()(() => Promise.all([n.e(8631), n.e(5464), n.e(1165), n.e(247), n.e(4449), n.e(9416), n.e(7543), n.e(4606), n.e(3299), n.e(680), n.e(1573), n.e(9964), n.e(5942), n.e(4316), n.e(9032), n.e(1932), n.e(6090), n.e(2422), n.e(7598), n.e(5535)]).then(n.bind(n, 39753)).then(e => e.BondingCurve), {
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
                    isInModal: i = !1,
                    referral: o,
                    TEMPORARY_showCustomPrice: a
                } = e, {
                    setReferral: l
                } = (0, d.useMintReferral)();
                (0, s.F_)(() => {
                    l(o)
                }, [o, l]);
                let m = (0, u.S3c)(u.UGr, t),
                    {
                        data: {
                            isFirstPhaseCompleted: p,
                            totalMinted: h
                        }
                    } = (0, c.z)({
                        release: m
                    });
                if (!m.auctionContractType) return null;
                switch (m.auctionContractType) {
                    case "ARTIST":
                        return (0, r.jsxs)(MintComponentLayout, {
                            release: m,
                            isInModal: i,
                            children: [(0, r.jsx)(j, {
                                releaseInfo: m,
                                collectButtonSource: n,
                                isInModal: i
                            }), !i && (0, r.jsx)(SocialProofBar, {
                                releaseId: m.id,
                                totalMinted: h
                            })]
                        });
                    case "EDITION":
                        {
                            let e = !!m.samAddress,
                                t = "EDITION" === m.auctionContractType && p && e;
                            if (t) return (0, r.jsx)(MintComponentLayout, {
                                release: m,
                                isInModal: i,
                                children: (0, r.jsx)(C, {
                                    data: m,
                                    collectButtonSource: n,
                                    isInModal: i
                                })
                            });
                            return (0, r.jsxs)(MintComponentLayout, {
                                release: m,
                                isInModal: i,
                                children: [(0, r.jsx)(j, {
                                    releaseInfo: m,
                                    collectButtonSource: n,
                                    isInModal: i
                                }), !i && (0, r.jsx)(SocialProofBar, {
                                    releaseId: m.id,
                                    totalMinted: h
                                })]
                            })
                        }
                    case "TIERED_EDITION":
                        return (0, r.jsxs)(MintComponentLayout, {
                            release: m,
                            isInModal: i,
                            children: [(0, r.jsx)(S, {
                                release: m,
                                collectButtonSource: n,
                                isInModal: i,
                                TEMPORARY_showCustomPrice: a
                            }), !i && (0, r.jsx)(SocialProofBar, {
                                releaseId: m.id,
                                totalMinted: h
                            })]
                        });
                    default:
                        return (0, f.y0)(m.auctionContractType), null
                }
            }

            function MintComponentLayout(e) {
                let {
                    release: t,
                    children: n,
                    isInModal: i
                } = e;
                return (0, r.jsx)("div", {
                    className: "mx-auto mt-3 flex w-full lt:mt-8 lt:max-w-sm",
                    children: (0, r.jsxs)("div", {
                        className: "flex w-full flex-col rounded-md lt:max-w-sm",
                        children: [(0, r.jsx)("div", {
                            className: (0, l.m)("w-full overflow-hidden rounded-t-lg bg-white", i ? "flex border-b border-base200 pb-4" : "hidden p-4 shadow-tertiary lt:flex"),
                            children: (0, r.jsx)(y.M, {
                                release: t
                            })
                        }), n]
                    })
                })
            }
        },
        10308: function(e, t, n) {
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
            var i = n(72102),
                o = n(31622),
                a = n(46313),
                l = n(42940),
                s = n(21922),
                d = n(23496),
                u = n(97946),
                c = n(96301),
                f = n(3928),
                m = n(95390);
            let SongInfo = e => {
                    let {
                        release: t
                    } = e, {
                        authUser: n
                    } = (0, c.aC)(), {
                        title: d,
                        staticCoverImage: u,
                        coverImage: m,
                        webappUri: p,
                        artist: h
                    } = (0, f.S3c)(f.o7T, t), x = h.userId === (null == n ? void 0 : n.id), v = !x && !!h.id && !!h.userId, {
                        loading: g,
                        showSubscribed: b,
                        handleClick: w
                    } = (0, l.w)({
                        artistId: h.id,
                        userId: h.userId
                    }), y = b ? (0, r.jsx)("span", {
                        className: "[&_svg]:h-6",
                        children: (0, r.jsx)(a.A, {})
                    }) : (0, r.jsx)(i.G, {
                        icon: o.qm
                    });
                    return (0, r.jsx)(SongInfoComponent, {
                        title: d,
                        artistName: h.name,
                        songWebappUri: p,
                        artistWebappUri: h.webappUri,
                        coverImage: (null == u ? void 0 : u.url) || m.url,
                        iconButton: v ? (0, r.jsx)(s.h, {
                            variant: "tertiary",
                            disabled: g,
                            onClick: w,
                            iconSize: b ? 20 : 18,
                            icon: y
                        }) : null
                    })
                },
                SongInfoComponent = e => {
                    let {
                        title: t,
                        coverImage: n,
                        songWebappUri: i,
                        artistWebappUri: o,
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
                                children: [i ? (0, r.jsx)(u.s, {
                                    pathnameUri: (0, m.OU)(i),
                                    children: s
                                }) : s, o ? (0, r.jsx)(u.s, {
                                    pathnameUri: (0, m.OU)(o),
                                    className: "hover:cursor-pointer",
                                    children: c
                                }) : c]
                            })]
                        }), l]
                    })
                }
        },
        47314: function(e, t, n) {
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
        8094: function(e, t, n) {
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
                    return h
                },
                i_: function() {
                    return s
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(84298),
                a = n(8205);
            let GlobalDropdown = e => {
                    let {
                        trigger: t,
                        children: n,
                        align: o,
                        css: a,
                        onOpenChange: s,
                        queue: d,
                        wrapperContentProps: u,
                        isModal: c = !1,
                        disabled: f
                    } = e, m = (0, i.useRef)(!1), [p, v] = (0, i.useState)(!1);
                    return (0, r.jsx)(l, {
                        css: a,
                        onPointerDownCapture: e => {
                            "touch" !== e.pointerType || p || e.preventDefault()
                        },
                        onTouchMove: () => {
                            m.current = !0
                        },
                        onTouchEnd: () => {
                            m.current || p || v(!0), m.current = !1
                        },
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: (0, r.jsxs)(h, {
                            open: p,
                            modal: c,
                            onOpenChange: e => {
                                v(e), null == s || s()
                            },
                            children: [(0, r.jsx)(x, {
                                disabled: f,
                                asChild: !0,
                                children: t
                            }), (0, r.jsx)(DropdownMenuContent, {
                                align: o,
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
                f = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                m = (0, a.zo)(o.VY, {
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
                                animationName: f
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
                p = (0, a.zo)(o.ck, {
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
                h = o.fC,
                x = o.xz,
                DropdownMenuContent = function(e) {
                    let {
                        children: t,
                        disablePortal: n = !1,
                        ...i
                    } = e;
                    return n ? (0, r.jsx)(m, { ...i,
                        children: t
                    }) : (0, r.jsx)(o.Uv, {
                        children: (0, r.jsx)(m, { ...i,
                            children: t
                        })
                    })
                },
                v = p
        },
        27469: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return ViewSongMenuItem
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(72102),
                o = n(51274),
                a = n(43319),
                l = n(97946),
                s = n(8094);
            let ViewSongMenuItem = e => {
                let {
                    variant: t = "regular",
                    href: n
                } = e, d = "regular" === t ? o.Xi : a.Xi;
                return (0, r.jsx)(l.s, {
                    pathnameUri: n,
                    children: (0, r.jsxs)(s.Xi, {
                        children: [(0, r.jsx)(i.G, {
                            icon: d,
                            size: "lg"
                        }), (0, r.jsx)(s.i_, {
                            children: "View song"
                        })]
                    })
                })
            }
        },
        51648: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return EditionCover
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(44361),
                o = n(73950),
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
                    className: (0, i.m)("flex aspect-square items-center justify-center overflow-hidden rounded-md", l),
                    children: (0, r.jsx)(o.G, {
                        src: n,
                        alt: t,
                        blurDataURL: (0, a.Z)(s, s),
                        width: s,
                        height: s,
                        placeholder: "blur",
                        className: (0, i.m)("aspect-square", d)
                    })
                })
            }
        },
        43607: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return a
                }
            });
            var r = n(8205);
            let i = (0, r.F4)({
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
                                    borderColor: r.rS.colors.gray200,
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
                                    borderColor: r.rS.colors.gray200,
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
        },
        88343: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return Timestamp
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(66373),
                a = n(44361),
                l = n(50491),
                s = n(3141),
                d = n(64571);

            function TimestampText(e) {
                let {
                    timestampDate: t,
                    className: n,
                    addSuffix: l
                } = e, u = i.useMemo(() => (0, o.default)(t, 1), [t]), {
                    seconds: c
                } = (0, s.J7)({
                    expiryTimestamp: u
                }), f = i.useMemo(() => (0, d.SS)(t.getTime(), l), [l, t, c % 5 == 0]);
                return (0, r.jsx)("span", {
                    className: (0, a.m)("whitespace-nowrap font-base text-base-xs tabular-nums text-base400", n),
                    children: f
                })
            }
            let Timestamp = e => {
                let {
                    timeStamp: t,
                    className: n,
                    addSuffix: o
                } = e, a = i.useMemo(() => new Date(t), [t]), s = i.useMemo(() => (0, r.jsx)(TimestampText, {
                    timestampDate: a,
                    className: n,
                    addSuffix: o
                }), [o, n, a]);
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
        44456: function(e, t, n) {
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
            var i = n(44361);
            let PlayIndicatorBars = e => {
                    let {
                        size: t = "sm",
                        smallBars: n,
                        className: o
                    } = e, a = (0, i.m)("block w-[3px] flex-shrink-0 origin-bottom  rounded-full bg-fuchsia500 transition-all duration-100 ease-in-out", n ? "h-3" : "h-4");
                    return (0, r.jsxs)("div", {
                        className: (0, i.m)("flex flex-shrink-0 items-end justify-between", "xs" === t && "h-3.5 w-3", "sm" === t && "h-4 w-[13.5px]", o),
                        children: [(0, r.jsx)("div", {
                            className: (0, i.m)(a, n ? " animate-[playPulse_0.5s_ease-in-out_-0.2s_infinite_alternate] " : " animate-[playPulse_0.45s_ease-in-out_-0.2s_infinite_alternate] ")
                        }), (0, r.jsx)("div", {
                            className: (0, i.m)(a, n ? "animate-[playPulse_0.65s_ease-in-out_-0.7s_infinite_alternate] " : "animate-[playPulse_0.6s_ease-in-out_-0.6s_infinite_alternate] ")
                        }), (0, r.jsx)("div", {
                            className: (0, i.m)(a, n ? "animate-[playPulse_0.35s_ease-in-out_-0.5s_infinite_alternate] " : "animate-[playPulse_0.3s_ease-in-out_-0.4s_infinite_alternate] ")
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
            n.d(t, {
                r: function() {
                    return DateTimeTooltip
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(49542),
                o = n(5221),
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
                            className: (0, i.default)("cursor-default", a),
                            children: n
                        }), (0, r.jsx)(u, {
                            side: "top",
                            className: "max-w-[208px] px-3 py-2 text-center text-base-s font-medium",
                            children: `${l||""}${(0,o.default)(t,"MMM d, yyyy • hh:mm a")}`
                        })]
                    })
                }
        },
        85906: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return i
                }
            });
            var r = n(50868);
            let i = (0, r.zo)("div", "bg-base200 h-[1px] w-full mb-4", {
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
            var i = n(75928),
                o = n(8205),
                a = n(46061),
                l = n(24455);

            function HoverCard(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    openDelay: i = 0
                } = n;
                return (0, r.jsx)(s, {
                    openDelay: i,
                    ...n,
                    children: t
                })
            }

            function StyledHoverContent(e) {
                let {
                    children: t,
                    css: n,
                    ...o
                } = e, {
                    sideOffset: a = 5,
                    side: s = "bottom",
                    avoidCollisions: u = !0
                } = o, c = (0, l.Z)();
                return (0, r.jsx)(i.h_, {
                    children: (0, r.jsx)(d, {
                        sideOffset: a,
                        side: s,
                        avoidCollisions: u,
                        collisionBoundary: c,
                        ...o,
                        css: n,
                        children: t
                    })
                })
            }
            let s = (0, o.zo)(i.fC, {
                    backgroundColor: "$neutral900"
                }),
                d = (0, o.zo)(i.VY, { ...a._R,
                    opacity: 1,
                    zIndex: "$tooltip"
                }),
                u = (0, o.zo)(i.VY, {
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
                    ...i
                } = e;
                return (0, r.jsx)(u, {
                    animate: n,
                    ...i,
                    children: t
                })
            }, HoverCard.Trigger = i.xz, HoverCard.Portal = i.h_
        },
        12437: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return i
                }
            });
            var r = n(8205);
            let i = (0, r.zo)("div", {
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
        81992: function(e, t, n) {
            n.d(t, {
                I5: function() {
                    return o.VY
                },
                Ur: function() {
                    return u
                },
                aV: function() {
                    return o.aV
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
                    return o.xz
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(69761),
                a = n(8205),
                l = n(12437);
            let s = i.createContext(null),
                d = (0, a.zo)(o.xz, {
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
                u = i.forwardRef((e, t) => {
                    let {
                        label: n,
                        icon: o,
                        showIndicator: a,
                        ...u
                    } = e, c = (0, i.useContext)(s);
                    return (0, r.jsxs)(d, { ...u,
                        ref: t,
                        size: c || void 0,
                        hasIcon: !!o,
                        children: [n, o, !!a && (0, r.jsx)(l.z, {})]
                    })
                });
            u.displayName = "TabTrigger";
            let c = (0, a.zo)(o.aV, {
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
                    } = e, o = (0, i.useContext)(s);
                    return (0, r.jsx)(c, {
                        isXL: "xl" === o,
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
                        children: (0, r.jsx)(o.fC, { ...n
                        })
                    })
                }
        },
        25347: function(e, t, n) {
            n.d(t, {
                I: function() {
                    return UserHoverCard
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(24924),
                a = n.n(o),
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
                        triggerAsChild: o = !1,
                        align: a
                    } = e, u = i.useRef(null);
                    return (0, r.jsxs)(l.HoverCard, {
                        closeDelay: 100,
                        openDelay: 200,
                        children: [(0, r.jsx)(s, {
                            ref: u,
                            style: {
                                minWidth: 0
                            },
                            asChild: o,
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
            n.d(t, {
                o: function() {
                    return CollectModal
                }
            });
            var r = n(16356);
            n(97352);
            var i = n(49542),
                o = n(73096),
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
                    data: f,
                    isLoading: m
                } = (0, s.aM2)(s.sOw, {
                    variables: {
                        releaseId: t
                    },
                    staleTime: 0
                }), p = null == f ? void 0 : f.data.release;
                if (!p || m) return (0, r.jsx)("div", {
                    className: "h-64 w-full animate-pulse rounded-lg bg-neutral200 shadow-tertiary"
                });
                let h = (0, r.jsx)("div", {
                    className: (0, i.default)("flex justify-center [&>div>div>div]:overflow-visible [&>div]:mt-0 [&>div]:w-full [&_[dir='ltr']]:p-0 [&_[role='tabpanel']]:w-[unset]", "mb-1"),
                    children: (0, r.jsx)(o.E, {
                        releaseData: p,
                        collectButtonSource: d,
                        referral: n,
                        isInModal: !0,
                        TEMPORARY_showCustomPrice: u
                    })
                });
                return (0, r.jsx)(a.Z, {
                    body: h,
                    title: "Collect",
                    showHeaderShadow: !1,
                    closeModal: c,
                    size: "small",
                    bodyWithoutPaddingBottom: !0
                })
            }
        },
        92434: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return ReleaseMintsModal
                }
            });
            var r = n(16356),
                i = n(97352),
                o = n(3928),
                a = n(21597),
                l = n(58285),
                s = n(54668),
                d = n(43158),
                u = n(22181),
                c = n(64571),
                f = n(95095);
            let userItemContent = (e, t, n) => (0, r.jsx)(f.p, {
                    user: t,
                    sourceLocation: n.sourceLocation
                }),
                collectorItemContent = (e, t, n) => {
                    let {
                        user: i,
                        nftsCount: l,
                        ownedGoldenEgg: s,
                        vipNftsCount: d
                    } = (0, o.S3c)(o.nMv, t);
                    return (0, r.jsx)(f.p, {
                        user: i,
                        secondaryText: `${(0,a.ZP)(l)} ${(0,c.Lo)({count:l,word:"edition"})}`,
                        sourceLocation: n.sourceLocation,
                        hasGoldenEgg: null != s,
                        isVip: d > 0
                    })
                },
                UserList = e => {
                    let t, {
                            primaryCount: n,
                            primaryItem: o,
                            primarySubordinate: m,
                            secondaryCount: p,
                            secondaryItem: h,
                            isLoading: x,
                            loadMore: v,
                            sourceLocation: g,
                            ...b
                        } = e,
                        {
                            tablet: w
                        } = (0, d.useMediaQuery)(),
                        {
                            closeCancelModal: y
                        } = (0, u.useModal)(),
                        [j, C] = i.useState(),
                        S = (0, i.useCallback)(() => x ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(f.T, {}), (0, r.jsx)(f.T, {}), (0, r.jsx)(f.T, {})]
                        }) : null, [x]);
                    if ("collectorList" in b) t = (0, r.jsx)(l.OO, {
                        data: b.collectorList,
                        itemContent: collectorItemContent,
                        customScrollParent: j,
                        endReached: v,
                        context: {
                            sourceLocation: g
                        },
                        components: {
                            Footer: S
                        }
                    });
                    else {
                        if (!("userList" in b)) return null;
                        t = (0, r.jsx)(l.OO, {
                            data: b.userList,
                            itemContent: userItemContent,
                            customScrollParent: j,
                            endReached: v,
                            context: {
                                sourceLocation: g
                            },
                            components: {
                                Footer: S
                            }
                        })
                    }
                    let I = n ? `${(0,a.ZP)(n)} ${(0,c.Lo)({word:o,count:n})}${m?` ${m}`:""}` : void 0,
                        N = p && h ? `${(0,a.ZP)(p)} ${(0,c.Lo)({word:h,count:p})}` : void 0;
                    return (0, r.jsx)(s.Z, {
                        title: I,
                        subHeader: N,
                        body: t,
                        closeModal: y,
                        ref: e => {
                            C(e || void 0)
                        },
                        isFullScreen: !w
                    })
                },
                ReleaseMintsModal = e => {
                    let {
                        releaseId: t
                    } = e, {
                        orderedList: n,
                        loadMoreNextPage: i,
                        isLoadingNewPage: a,
                        firstPage: l
                    } = (0, o.NSZ)(o.Iks, {
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
                        loadMore: i,
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
                i = n(47226),
                o = n(42529),
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
                        l = (0, o.R)(r => {
                            switch (r) {
                                case i.Wr.SEPOLIA:
                                case i.Wr.MAINNET:
                                    return e;
                                case i.Wr.OPTIMISM_SEPOLIA:
                                case i.Wr.OPTIMISM:
                                    return t;
                                case i.Wr.BASE:
                                case i.Wr.BASE_SEPOLIA:
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
            n.r(t), n.d(t, {
                MintReferralProvider: function() {
                    return MintReferralProvider
                },
                MintReferralType: function() {
                    return i
                },
                useMintReferral: function() {
                    return useMintReferral
                }
            });
            var r, i, o = n(16356),
                a = n(97352);
            (r = i || (i = {})).Playlist = "playlist", r.Post = "post";
            let l = (0, a.createContext)({
                    setReferral: () => void 0,
                    referral: null
                }),
                useMintReferral = () => (0, a.useContext)(l),
                MintReferralProvider = e => {
                    let {
                        children: t
                    } = e, [n, r] = (0, a.useState)(null), i = (0, a.useMemo)(() => ({
                        referral: n,
                        setReferral: r
                    }), [n, r]);
                    return (0, o.jsx)(l.Provider, {
                        value: i,
                        children: t
                    })
                }
        },
        77566: function(e, t, n) {
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
            n.d(t, {
                S: function() {
                    return useLogError
                }
            });
            var r = n(76348),
                i = n(47226),
                o = n(22181),
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
                } = o.ModalContext.useContainer(), u = (0, s.R)(a => {
                    var l, s;
                    let {
                        error: u,
                        toast: c,
                        capture: f = !0,
                        closeProcessingModal: m = !1,
                        indexedTags: p,
                        unindexedExtra: h,
                        toastDuration: x = 5e3,
                        level: v
                    } = a;
                    console.error(u);
                    let g = "string" != typeof u && null !== (s = null == u ? void 0 : u.message) && void 0 !== s ? s : "";
                    if ((null == u ? void 0 : u.code) === 4001 || g.match(/(user|signing transaction was|signing was) (rejected|denied|cancel)/gi)) {
                        n(o.ModalType.PROCESSING), n(o.ModalType.PROCESSING_UPLOAD_JOURNEY), t(!0), e({
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
                            text: `Please connect your wallet to ${i.bC[d.k6]}`,
                            variant: "error",
                            duration: x
                        });
                        return
                    }
                    f && r.Tb(u instanceof Error ? u : Error(JSON.stringify(u)), {
                        tags: p,
                        extra: h,
                        level: v
                    }), c && ("string" == typeof c ? e({
                        text: c,
                        variant: "error",
                        duration: x
                    }) : e({
                        variant: "error",
                        duration: x,
                        ...c
                    })), m && (n(o.ModalType.PROCESSING), n(o.ModalType.PROCESSING_UPLOAD_JOURNEY))
                });
                return u
            }
        },
        51401: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return useSubscribeReleaseCollector
                },
                z: function() {
                    return useSubscribeRelease
                }
            });
            var r = n(97352),
                i = n(78608);
            n(96960);
            var o = n(60303),
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
                } = (0, i.useGate)(l.ln.RELEASE_MINIMAL_SUBSCRIPTIONS), u = (0, o.mU)({
                    query: a.z_b,
                    enabled: d,
                    variables: {
                        id: s
                    }
                }), c = null === (t = u.data) || void 0 === t ? void 0 : t.data.releaseUpdates, f = (0, r.useMemo)(() => {
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
                    data: f
                }
            }

            function useSubscribeReleaseCollector(e) {
                let {
                    releaseId: t,
                    onData: n,
                    enabled: r
                } = e, {
                    value: s
                } = (0, i.useGate)(l.ln.RELEASE_NFTS_SUBSCRIPTIONS);
                return (0, o.mU)({
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
            n.d(t, {
                J7: function() {
                    return useTimer
                }
            });
            var r = n(97352),
                i = n(18167),
                o = n(97193),
                a = n(31265),
                l = n(42529);

            function getSecondsFromExpiry(e, t) {
                let n = ("number" == typeof e ? e : e.getTime()) - new Date().getTime();
                if (n > 0) {
                    let e = (0, i.Z)(n);
                    return t ? Math.round(e) : e
                }
                return 0
            }

            function getDelayFromExpiryTimestamp(e) {
                let t = ("number" == typeof e ? e : new Date(e).getTime()) > 0;
                if (!t) return null;
                let n = getSecondsFromExpiry(e),
                    r = (0, o.Z)(Math.floor(n - Math.floor(n)));
                return r > 0 ? r : 1e3
            }
            let s = (0, a.sj)({
                now: Date.now()
            });

            function useTimer(e) {
                let {
                    expiryTimestamp: t,
                    onExpire: n,
                    autoStart: i = !0
                } = e, d = "number" == typeof t ? t : t.getTime(), [u, c] = r.useState(d), [f, m] = r.useState(() => getSecondsFromExpiry(u)), [p, h] = r.useState(() => i && Date.now() < d), [x, v] = r.useState(i), [g, b] = r.useState(() => getDelayFromExpiryTimestamp(u));
                r.useEffect(() => {
                    c(d), h(!!d && Date.now() < d)
                }, [d]);
                let w = (0, l.R)(() => {
                        n && n(), h(!1), b(null)
                    }),
                    y = r.useCallback(() => {
                        h(!1)
                    }, []),
                    j = r.useCallback(function(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        b(getDelayFromExpiryTimestamp(e)), v(t), h(t), c(e), m(getSecondsFromExpiry(e))
                    }, []),
                    C = r.useCallback(() => {
                        let e = new Date;
                        e.setMilliseconds(e.getMilliseconds() + (0, o.Z)(f)), j(e)
                    }, [j, f]),
                    S = r.useCallback(() => {
                        x ? (m(getSecondsFromExpiry(u)), h(!0)) : C()
                    }, [x, u, C]);
                return (0, r.useEffect)(() => {
                    if (p) return 1e3 !== g && b(1e3), (0, a.Ld)(s, () => {
                        let e = getSecondsFromExpiry(u);
                        m(e), e <= 0 && w()
                    })
                }, [p, g, b, u, w]), { ... function(e) {
                        let t = Math.ceil(e);
                        return {
                            seconds: Math.floor(t % 60),
                            minutes: Math.floor(t % 3600 / 60),
                            hours: Math.floor(t % 86400 / 3600),
                            days: Math.floor(t / 86400)
                        }
                    }(f),
                    start: S,
                    pause: y,
                    resume: C,
                    restart: j,
                    isRunning: p
                }
            }
            setInterval(() => {
                s.now = Date.now()
            }, 1e3)
        },
        79320: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return useWindowSize
                }
            });
            var r = n(97352),
                i = n(22248);

            function useWindowSize() {
                let [e, t] = r.useState({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                return (0, r.useEffect)(() => {
                    let e = (0, i.Z)(() => {
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
            n.d(t, {
                v: function() {
                    return expectNormalGas
                },
                w: function() {
                    return i
                }
            });
            var r = n(76348);
            let i = "soundxyz-sdk";

            function expectNormalGas(e) {
                let {
                    estimation: t,
                    editionAddress: n,
                    chainId: i,
                    quantity: o,
                    loggingExtra: a
                } = e;
                return t < 100000 n ? ((0, r.uT)("Unexpected estimation received", {
                    tags: {
                        chainId: i,
                        editionAddress: n
                    },
                    extra: { ...a,
                        estimation: t.toString(),
                        quantity: o
                    },
                    level: "warning"
                }), 500000 n) : t
            }
        },
        77348: function(e, t, n) {
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
                i = n(96044),
                o = n(44333),
                a = n(33233),
                l = n(2807),
                s = n(80854),
                d = n(47983),
                u = n(62865),
                c = n(47226);

            function chainFromId(e) {
                switch (e) {
                    case c.Wr.OPTIMISM:
                        return i.v;
                    case c.Wr.MAINNET:
                        return o.R;
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
                    extraValue: i
                } = e, [o, a] = await Promise.all([r.getBalance({
                    address: n,
                    blockTag: "latest"
                }), r.getBlock({
                    blockTag: "pending"
                }).then(e => {
                    var t;
                    return null !== (t = e.baseFeePerGas) && void 0 !== t ? t : 0 n
                })]);
                return o >= t * (a + 1000000 n) + (null != i ? i : 0 n)
            }
            async function hasEnoughFundsForL2Upload(e) {
                let {
                    userAddress: t,
                    publicClient: n
                } = e, i = await n.getBalance({
                    address: t,
                    blockTag: "latest"
                });
                return i > (0, r.f)("0.0005")
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
            n.d(t, {
                F: function() {
                    return typedEntries
                }
            });

            function typedEntries(e) {
                return Object.entries(e)
            }
        }
    }
]);