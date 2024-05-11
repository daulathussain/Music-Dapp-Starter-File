(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1932], {
        63834: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return useIsChannelCurator
                }
            });
            var s = a(96301),
                n = a(3928);

            function useIsChannelCurator(e) {
                var t, a;
                let {
                    channelId: l
                } = e, {
                    authUser: r
                } = (0, s.aC)(), {
                    data: i,
                    isLoading: o
                } = (0, n.aM2)(n.U7N, {
                    enabled: !!r,
                    variables: !!l && {
                        input: {
                            channelIds: [l]
                        }
                    },
                    staleTime: 1 / 0
                }), d = null == i ? void 0 : null === (t = i.data.isChannelCurator[0]) || void 0 === t ? void 0 : t.result, c = (null == i ? void 0 : null === (a = i.data.isChannelCurator[0]) || void 0 === a ? void 0 : a.role) === "OWNER";
                return {
                    isLoading: o,
                    isChannelCurator: d,
                    isChannelOwner: c
                }
            }
        },
        33670: function(e, t, a) {
            "use strict";
            a.d(t, {
                g: function() {
                    return CopyAddress
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(49542),
                i = a(43978),
                o = a(97980),
                d = a(59287),
                c = a(31451),
                u = a(43158),
                m = a(75747),
                p = a(37464),
                x = a(72779),
                h = a(34524);
            let CopyAddress = e => {
                let {
                    publicAddress: t,
                    showIcon: a,
                    className: f,
                    loading: v
                } = e, [g, b] = (0, i.x)(() => ({
                    addressCopied: !1,
                    tooltipOpen: !1,
                    isTouched: !1
                })), y = (0, p.I)(g), {
                    addressCopied: C,
                    tooltipOpen: S
                } = g, {
                    tabletLandscape: j
                } = u.MediaQuery.useContainer();
                (0, n.useEffect)(() => {
                    let e = setTimeout(() => {
                        !0 === y.current.addressCopied && b(e => {
                            e.addressCopied = !1, y.current.isTouched && (e.tooltipOpen = !1, e.isTouched = !1)
                        })
                    }, 1e3);
                    return () => {
                        clearTimeout(e)
                    }
                }, [C, y, b]);
                let w = (0, d.pc)(t, 5, 4),
                    {
                        openToast: T
                    } = (0, m.useToast)();
                return (0, s.jsx)(c.g, {
                    openOnClick: !j,
                    openContent: S,
                    setOpenContent: e => b(t => {
                        t.tooltipOpen = e, t.isTouched = !0
                    }),
                    children: (0, s.jsxs)(h.Tooltip, {
                        openOnClick: !j,
                        children: [(0, s.jsx)(h.Tooltip.Trigger, {
                            className: (0, r.default)("cursor-pointer", f && f),
                            asChild: !0,
                            children: (0, s.jsxs)("div", {
                                className: "copy-trigger flex items-center gap-1.5",
                                onClick: async () => {
                                    try {
                                        await navigator.clipboard.writeText(t)
                                    } catch (e) {
                                        T({
                                            variant: "error",
                                            text: "Copying to clipboard failed. Please check browser permissions"
                                        });
                                        return
                                    }
                                    b(e => {
                                        e.addressCopied = !0, e.tooltipOpen = !0
                                    })
                                },
                                children: [a && (0, s.jsx)(l.G, {
                                    icon: o.X5,
                                    className: "mr-[2px] md:mx-[1px]",
                                    fontSize: 20
                                }), (0, s.jsx)(x.o, {
                                    loading: !!v,
                                    className: "h-[18px] w-[88px]",
                                    children: (0, s.jsx)("p", {
                                        className: "publicAddr publicAddress margin-0 cursor-pointer",
                                        children: w
                                    })
                                })]
                            })
                        }), (0, s.jsx)(h.Tooltip.StyledContent, {
                            size: "xs",
                            children: !1 === C ? "Copy Address" : "Address Copied"
                        })]
                    })
                })
            }
        },
        83487: function(e, t, a) {
            "use strict";
            a.d(t, {
                I: function() {
                    return GetNotifiedButton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(96301),
                l = a(42940),
                r = a(72102),
                i = a(49542),
                o = a(87355),
                d = a(18499),
                c = a(69598),
                u = a(28166);
            let AudienceButton = e => {
                    let {
                        showSubscribed: t,
                        loading: a,
                        onClick: n,
                        isOwner: l
                    } = e;
                    return l ? null : (0, s.jsx)(c.z, {
                        testId: u.n.GET_NOTIFIED_BUTTON,
                        className: (0, i.default)("font-title text-title-xs font-medium focus:border-none focus:outline-none", t ? "!bg-neutral100 text-black" : "text-white"),
                        variant: t ? "secondary" : "primary",
                        label: t ? "Subscribed" : "Get Notified",
                        leadingIcon: (0, s.jsx)(r.G, {
                            icon: t ? d.LE : o.qm,
                            fontSize: 20
                        }),
                        loading: a,
                        onClick: n
                    })
                },
                DefaultButton = e => {
                    let {
                        showSubscribed: t,
                        loading: a,
                        onClick: n,
                        dark: l,
                        noMaxWidth: m,
                        isOwner: p,
                        className: x = ""
                    } = e;
                    return p ? null : (0, s.jsx)(c.z, {
                        testId: u.n.GET_NOTIFIED_BUTTON,
                        className: (0, i.default)("font-title text-title-xs font-medium", l ? "focus:border-none focus:outline-none" : "h-9 w-32 md:h-10", m && "max-w-none", t ? l ? "text-black" : "bg-[transparent] text-white hover:text-black" : l ? "text-white" : "text-black", x),
                        variant: t ? l ? "secondary" : "tertiary" : l ? "primary" : "tertiary",
                        label: t ? "Subscribed" : "Get Notified",
                        leadingIcon: (0, s.jsx)(r.G, {
                            icon: t ? d.LE : o.qm,
                            fontSize: 20
                        }),
                        loading: a,
                        onClick: n
                    })
                };
            var m = a(31622),
                p = a(46313);
            let IconButton = e => {
                let {
                    showSubscribed: t,
                    onClick: a,
                    className: n = "h-9 w-9 min-w-[2.25rem] min-h-[2.25rem] px-0",
                    isOwner: l
                } = e;
                return l ? null : (0, s.jsx)(c.z, {
                    label: "",
                    testId: u.n.GET_NOTIFIED_BUTTON,
                    leadingIcon: t ? (0, s.jsx)("span", {
                        className: " [&_svg]:h-5 ",
                        children: (0, s.jsx)(p.A, {})
                    }) : (0, s.jsx)(r.G, {
                        icon: m.qm,
                        fontSize: 20
                    }),
                    onClick: a,
                    variant: "tertiary",
                    size: "squared",
                    className: n,
                    iconOnly: !0
                })
            };

            function SoundBarButton(e) {
                let {
                    showSubscribed: t,
                    loading: a,
                    onClick: n,
                    isOwner: l
                } = e;
                return l ? null : (0, s.jsx)(c.z, {
                    testId: u.n.GET_NOTIFIED_BUTTON,
                    className: "self-end !rounded-[100px] !border-[rgba(255,255,255,0.2)] !bg-transparent !p-3 transition-colors duration-300 ease-in-out hover:!border-white hover:![box-shadow:none]",
                    variant: "primary",
                    size: "S",
                    label: t ? "Subscribed" : "Get notified",
                    loading: a,
                    onClick: n
                })
            }
            let UpcomingDropButton = e => {
                let {
                    showSubscribed: t,
                    loading: a,
                    onClick: n,
                    isOwner: l
                } = e;
                return (0, s.jsx)("div", {
                    className: "p-2 pt-0",
                    children: (0, s.jsx)(c.z, {
                        testId: u.n.GET_NOTIFIED_BUTTON,
                        className: (0, i.default)("font-title text-title-xs font-medium", "focus:border-none focus:outline-none", t ? "bg-[transparent] text-white hover:text-black" : "text-black"),
                        fullWidth: !0,
                        variant: "tertiary",
                        label: t ? "Subscribed" : "Get Notified",
                        leadingIcon: (0, s.jsx)(r.G, {
                            icon: t ? d.LE : o.qm,
                            fontSize: 20
                        }),
                        loading: a,
                        onClick: n,
                        disabled: l
                    })
                })
            };

            function GetNotifiedButton(e) {
                let {
                    type: t,
                    artistId: a,
                    userId: r,
                    dark: i
                } = e, {
                    authUser: o
                } = (0, n.aC)(), d = (null == o ? void 0 : o.id) === r, {
                    loading: c,
                    showSubscribed: u,
                    handleClick: m
                } = (0, l.w)({
                    artistId: a,
                    userId: r
                }), p = (0, s.jsx)(DefaultButton, {
                    dark: i,
                    loading: c,
                    onClick: m,
                    showSubscribed: u,
                    isOwner: d
                });
                switch (t) {
                    case "upcoming_drop":
                        return (0, s.jsx)(UpcomingDropButton, {
                            loading: c,
                            showSubscribed: u,
                            onClick: m,
                            isOwner: d
                        });
                    case "feed_release_card":
                        return (0, s.jsx)("div", {
                            className: "mt-4 md:mt-0",
                            children: p
                        });
                    case "landing_hero":
                        return (0, s.jsx)("div", {
                            className: "ml-auto md:ml-0 md:mt-4",
                            children: p
                        });
                    case "mint_component":
                        return (0, s.jsx)(DefaultButton, {
                            dark: i,
                            loading: c,
                            onClick: m,
                            showSubscribed: u,
                            isOwner: d,
                            noMaxWidth: !0
                        });
                    case "new_profile_action_bar":
                        return (0, s.jsx)(IconButton, {
                            onClick: m,
                            showSubscribed: u,
                            className: "h-9 w-9 p-3 md:h-10 md:w-10",
                            isOwner: d
                        });
                    case "icon_button":
                        return (0, s.jsx)(IconButton, {
                            onClick: m,
                            showSubscribed: u,
                            isOwner: d
                        });
                    case "presave_icon_button":
                        return (0, s.jsx)(IconButton, {
                            onClick: m,
                            showSubscribed: u,
                            isOwner: d,
                            className: "h-full"
                        });
                    case "audience":
                        return (0, s.jsx)(AudienceButton, {
                            loading: c,
                            onClick: m,
                            showSubscribed: u,
                            isOwner: d
                        });
                    case "sound_bar":
                        return (0, s.jsx)(SoundBarButton, {
                            loading: c,
                            onClick: m,
                            showSubscribed: u,
                            isOwner: d
                        });
                    case "default":
                        return p
                }
            }
        },
        90141: function(e, t, a) {
            "use strict";
            a.d(t, {
                F: function() {
                    return PostUserAvatar
                },
                S: function() {
                    return FeedActivityHeader
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(40286),
                i = a.n(r),
                o = a(78570),
                d = a.n(o),
                c = a(54049),
                u = a(10228),
                m = a(62335),
                p = a(68753),
                x = a(50491),
                h = a(97946),
                f = a(49476),
                v = a(98335),
                g = a(25347),
                b = a(96301),
                y = a(43158),
                C = a(3928),
                S = a(59792),
                j = a(85846),
                w = a(64571),
                T = a(95390);

            function PostUserAvatar(e) {
                let {
                    userFrag: t
                } = e, {
                    authUser: a
                } = (0, b.aC)(), {
                    tablet: r
                } = y.MediaQuery.useContainer(), i = (0, C.S3c)(C.Z_r, t), {
                    username: o,
                    artist: d,
                    avatar: m,
                    publicAddress: x,
                    webappUri: h,
                    id: f
                } = i, v = (0, n.useMemo)(() => (0, s.jsx)(u.U, {
                    userId: f
                }), [f]), j = (null == a ? void 0 : a.id) === f, {
                    followingStatus: w,
                    onClick: T
                } = (0, S.O)({
                    userId: f,
                    artistId: null == d ? void 0 : d.id,
                    sourceLocation: "Post Page Header"
                });
                return (0, s.jsx)("div", {
                    className: "relative mr-1 flex items-center justify-center self-start md:mr-0",
                    children: (0, s.jsx)(g.I, {
                        trigger: (0, s.jsxs)("div", {
                            children: [(0, s.jsx)(p.q, {
                                src: null == m ? void 0 : m.url,
                                username: o,
                                size: r ? 48 : 40,
                                borderRadius: 999,
                                walletAddress: x,
                                webappUri: h
                            }), "loading" !== w && !w && !j && (0, s.jsx)("button", {
                                className: "absolute -bottom-1 -right-2 bg-transparent",
                                "aria-label": "Follow user",
                                onClick: e => {
                                    e.stopPropagation(), T(e)
                                },
                                children: (0, s.jsx)(l.G, {
                                    icon: c.EQ,
                                    size: r ? "lg" : "1x",
                                    className: "rounded-full border border-white bg-white"
                                })
                            })]
                        }),
                        userHoverCardContent: v
                    })
                })
            }
            let FeedActivityHeader = e => {
                var t, a, l;
                let {
                    description: r,
                    dropdownContent: o,
                    timestamp: c,
                    userFrag: p,
                    channelFrag: b,
                    authorNftsCountVip: y,
                    authorNftsCountGa: S
                } = e, N = (0, C.S3c)(C.$mE, p), I = (0, C.S3c)(C.OXY, b), [P, R] = n.useState(!1), {
                    username: E,
                    artist: A,
                    webappUri: k
                } = N, M = (0, w.SS)(c), _ = (0, n.useMemo)(() => (0, s.jsx)(u.U, {
                    userId: N.id
                }), [N.id]), O = null !== (l = null == I ? void 0 : null === (t = I.staticProfileImage) || void 0 === t ? void 0 : t.url) && void 0 !== l ? l : null == I ? void 0 : null === (a = I.profileImage) || void 0 === a ? void 0 : a.url, L = !!y;
                return (0, s.jsxs)("div", {
                    className: "flex flex-00auto items-start gap-2 pb-1.5 md:gap-4",
                    "data-feed-clickable-div": !0,
                    children: [(0, s.jsxs)("div", {
                        className: "flex flex-col gap-0.5 md:flex-row md:items-center",
                        "data-feed-clickable-div": !0,
                        children: [(0, s.jsx)(g.I, {
                            trigger: (0, s.jsx)(d(), {
                                href: (0, T.OU)(k),
                                children: (0, s.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [(0, s.jsx)("div", {
                                        className: "font-base text-base-m font-semibold text-base800 md:text-base-l",
                                        children: E
                                    }), !!A && (0, s.jsx)(v.O, {
                                        portal: !0
                                    }), (L || !!S) && (0, s.jsx)(f.t, {
                                        type: L ? "vip" : "ga",
                                        portal: !0
                                    })]
                                })
                            }),
                            userHoverCardContent: _
                        }), (0, s.jsxs)("div", {
                            className: "flex items-center self-start font-base text-base-m font-normal text-base500 md:ml-1 md:text-base-l lg:h-6",
                            "data-feed-clickable-div": !0,
                            children: [I ? (0, s.jsxs)("p", {
                                "data-feed-clickable-div": !0,
                                className: "flex w-full flex-row items-center",
                                children: [r, j.L_, "in", j.L_, (0, s.jsx)(h.s, {
                                    pathnameUri: (0, T.OU)(I.webappUri),
                                    children: (0, s.jsxs)("div", {
                                        className: "flex flex-row gap-1 rounded-md p-1",
                                        children: [O && (0, s.jsx)(i(), {
                                            src: O,
                                            width: 16,
                                            height: 16,
                                            alt: `Profile image for channel ${I.name}`,
                                            className: "rounded-sm object-contain",
                                            sizes: "16px"
                                        }), (0, s.jsx)("span", {
                                            className: "font-semibold text-base800",
                                            children: I.name
                                        })]
                                    })
                                })]
                            }) : (0, s.jsx)("p", {
                                "data-feed-clickable-div": !0,
                                children: r
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [(0, s.jsx)("span", {
                                    className: "px-1 text-[8px] font-normal",
                                    children: "•"
                                }), (0, s.jsx)(x.r, {
                                    dateTime: new Date(c),
                                    children: (0, s.jsx)("span", {
                                        "data-feed-clickable-div": !0,
                                        className: "hover:text-base600",
                                        children: M
                                    })
                                })]
                            })]
                        })]
                    }), (0, s.jsx)("div", {
                        className: "flex-1",
                        "data-feed-clickable-div": !0
                    }), o && (0, s.jsx)("div", {
                        className: "max-h-6",
                        children: (0, s.jsx)(m.N, {
                            setIsDropdownOpen: R,
                            isDropdownOpen: P,
                            dropdownProps: {
                                align: "end",
                                queue: !0
                            },
                            children: o
                        })
                    })]
                })
            }
        },
        66538: function(e, t, a) {
            "use strict";
            a.d(t, {
                V: function() {
                    return FeedActivityItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(3928),
                l = a(90141);

            function FeedActivityItem(e) {
                let {
                    children: t,
                    userFrag: a,
                    description: r,
                    timestamp: i,
                    dropdownContent: o,
                    channelFrag: d,
                    authorNftsCountVip: c,
                    authorNftsCountGa: u
                } = e, m = (0, n.S3c)(n.XBO, a);
                return (0, s.jsxs)("div", {
                    className: "flex flex-row",
                    "data-feed-clickable-div": !0,
                    children: [(0, s.jsx)("div", {
                        className: "pr-3 md:pr-4",
                        children: (0, s.jsx)(l.F, {
                            userFrag: m
                        })
                    }), (0, s.jsxs)("div", {
                        className: "w-full min-w-0",
                        "data-feed-clickable-div": !0,
                        children: [(0, s.jsx)(l.S, {
                            channelFrag: d,
                            userFrag: m,
                            description: r,
                            dropdownContent: o,
                            timestamp: i,
                            authorNftsCountVip: c,
                            authorNftsCountGa: u
                        }), t]
                    })]
                })
            }
        },
        31981: function(e, t, a) {
            "use strict";
            a.d(t, {
                id: function() {
                    return n
                },
                QD: function() {
                    return PostActionButtons
                },
                Rf: function() {
                    return isRepostablePost
                }
            });
            var s, n, l = a(16356),
                r = a(97352),
                i = a(72102),
                o = a(71992),
                d = a.n(o),
                c = a(44361),
                u = a(92127);
            a(96960);
            var m = a(58658),
                p = a(97946),
                x = a(64638),
                h = a(12849),
                f = a(94050),
                v = a(54668),
                g = a(82110),
                b = a(22181),
                y = a(75747),
                C = a(3928),
                S = a(25828),
                j = a(64398),
                w = a(42529),
                T = a(14034),
                N = a(85846),
                I = a(95390);

            function FeedPostReplyModal(e) {
                let {
                    postFrag: t
                } = e, {
                    closeCancelModal: a
                } = (0, b.useModal)(), {
                    openToast: s
                } = (0, y.useToast)(), {
                    mutateAsync: n,
                    isLoading: i
                } = (0, C.Dbo)(C.rR0, {}), o = (0, j.S)(), d = (0, w.R)(() => {
                    a()
                }), c = (0, C.S3c)(C.Pc$, t), u = (0, r.useCallback)(async e => {
                    let t = h.Z.generateTextForState(e);
                    if (t.length) try {
                        (0, T.L9)({
                            event: "Create Post Comment",
                            properties: {
                                associationType: "PostComment",
                                associationId: c.id,
                                postId: c.id
                            }
                        });
                        let t = await n({
                            input: {
                                postId: c.id,
                                lexicalContent: e.toJSON()
                            }
                        });
                        if ("MutationAddPostCommentSuccess" === t.data.addPostComment.__typename)(0, T.L9)({
                            event: "Create Post Comment Success",
                            properties: {
                                associationType: "PostComment",
                                associationId: c.id,
                                postCommentId: t.data.addPostComment.data.id
                            }
                        }), s({
                            text: "Reply added",
                            variant: "success",
                            ctaText: "View",
                            ctaHref: (0, I.OU)(c.webappUri)
                        }), d();
                        else if ("ValidationError" === t.data.addPostComment.__typename) s({
                            text: t.data.addPostComment.message,
                            variant: "error"
                        });
                        else if ("RateLimitError" === t.data.addPostComment.__typename) {
                            let e = "Hit limit for replying posts comments";
                            o({
                                error: Error(e),
                                action: m.Ry.REPLY_POST_COMMENT_FAILED,
                                errorType: m.QS.RATE_LIMIT,
                                isArtistOnlyPage: !1,
                                level: "error",
                                message: e,
                                toast: e,
                                pillar: "POSTING",
                                indexedTags: {
                                    postId: c.id
                                }
                            })
                        } else throw Error("Couldn't reply to post")
                    } catch (e) {
                        o({
                            error: e,
                            action: m.Ry.REPLY_POST_COMMENT_FAILED,
                            errorType: m.QS.RATE_LIMIT,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't reply to post",
                            toast: N.fn,
                            pillar: "POSTING",
                            indexedTags: {
                                postId: c.id
                            }
                        })
                    }
                }, [n, c.id, c.webappUri, s, d, o]), p = (0, S.F)(c.lexicalContent), P = (0, r.useMemo)(() => {
                    if ("ActivityFeedGroupBackingPost" === c.__typename) {
                        if ("ReleaseDroppedAggregate" === c.activityFeedGroup.information.__typename) return (0, l.jsxs)("p", {
                            className: "text-base600",
                            children: ["Dropped", N.L_, (0, l.jsx)("span", {
                                className: "font-semibold",
                                children: c.activityFeedGroup.information.release.title
                            })]
                        });
                        if ("UserCollectedManySongsAggregate" !== c.activityFeedGroup.information.__typename);
                        else {
                            let {
                                collectedReleases: e
                            } = c.activityFeedGroup.information, t = (0, f.Mx)({
                                collectedReleases: e,
                                maxReleases: 6
                            });
                            return (0, l.jsxs)("p", {
                                className: "test-base600",
                                children: ["Collected", N.L_, t]
                            })
                        }
                    }
                    return c.content
                }, [c]);
                return (0, l.jsx)(v.Z, {
                    title: "Reply",
                    closeModal: d,
                    bodyWithoutPaddingBottom: !0,
                    mobileFullScreen: !0,
                    bodyClassName: "md:overflow-auto",
                    body: (0, l.jsx)(g.u, {
                        isSubmitting: i,
                        postContent: p ? (0, l.jsx)(x.X, {
                            showMentionsHoverCard: !1,
                            state: p,
                            className: "whitespace-normal"
                        }) : P,
                        postCreator: c.creator,
                        isLoading: !1,
                        onSubmit: u,
                        autoFocus: !0
                    })
                })
            }
            var P = a(96301),
                R = a(21956),
                E = a(17941),
                A = a(64571),
                k = a(74360),
                M = a(14016),
                _ = a(92747),
                O = a(12957),
                L = a(16773),
                D = a(94864),
                U = a(86057),
                F = a(69598),
                z = a(20209),
                G = a(6911);

            function SharePostModal(e) {
                let {
                    post: t,
                    sourceLocation: a,
                    artistTwitterHandle: s
                } = e, {
                    closeModal: n
                } = (0, b.useModal)(), {
                    id: r,
                    webappUri: i
                } = (0, C.S3c)(C.eYe, t), {
                    copy: o,
                    isCopied: d
                } = (0, G.F)({
                    text: i,
                    successMessage: "Link copied to clipboard"
                }), c = encodeURIComponent((0, z.i)(i));
                return (0, l.jsx)(v.Z, {
                    closeModal: () => {
                        n(), (0, T.uH)({
                            event: "Share Modal Closed",
                            properties: {
                                associationType: "Post",
                                associationId: r,
                                sourceComponent: a
                            }
                        })
                    },
                    body: (0, l.jsxs)("div", {
                        className: "flex flex-col items-center gap-3",
                        children: [(0, l.jsxs)("div", {
                            className: "flex flex-row gap-3",
                            children: [(0, l.jsx)("a", {
                                href: (0, z.j)({
                                    webappUri: i,
                                    artistTwitterHandle: s
                                }),
                                target: "_blank",
                                className: "transition-all ease-in-out hover:brightness-[116%]",
                                onClick: () => {
                                    (0, T.uH)({
                                        event: "Share Modal Third Party Share",
                                        properties: {
                                            associationType: "Post",
                                            associationId: r,
                                            sourceComponent: a,
                                            thirdParty: "Twitter"
                                        }
                                    })
                                },
                                children: (0, l.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Share to X (Twitter)",
                                    title: "Share to X (Twitter)",
                                    children: (0, l.jsx)(D.u, {})
                                })
                            }), (0, l.jsx)("a", {
                                href: `https://warpcast.com/~/compose?text=${c}`,
                                target: "_blank",
                                className: "transition-all ease-in-out hover:brightness-[116%]",
                                onClick: () => {
                                    (0, T.uH)({
                                        event: "Share Modal Third Party Share",
                                        properties: {
                                            associationType: "Post",
                                            associationId: r,
                                            sourceComponent: a,
                                            thirdParty: "Warpcast"
                                        }
                                    })
                                },
                                children: (0, l.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Share to Warpcast",
                                    title: "Share to Warpcast",
                                    children: (0, l.jsx)(U.L, {})
                                })
                            }), (0, l.jsx)("a", {
                                href: `https://lenster.xyz/?text=${c}`,
                                target: "_blank",
                                className: "transition-all ease-in-out hover:brightness-[116%]",
                                onClick: () => {
                                    (0, T.uH)({
                                        event: "Share Modal Third Party Share",
                                        properties: {
                                            associationType: "Post",
                                            associationId: r,
                                            sourceComponent: a,
                                            thirdParty: "Hey.xyz"
                                        }
                                    })
                                },
                                children: (0, l.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Share to Hey",
                                    title: "Share to Hey",
                                    children: (0, l.jsx)(O.P, {})
                                })
                            }), (0, l.jsx)("a", {
                                href: `https://t.me/share/url?url=${i}&text=${z.FE}`,
                                target: "_blank",
                                className: "transition-all ease-in-out hover:brightness-[116%]",
                                onClick: () => {
                                    (0, T.uH)({
                                        event: "Share Modal Third Party Share",
                                        properties: {
                                            associationType: "Post",
                                            associationId: r,
                                            sourceComponent: a,
                                            thirdParty: "Telegram"
                                        }
                                    })
                                },
                                children: (0, l.jsx)("button", {
                                    type: "button",
                                    "aria-label": "Share to Telegram",
                                    title: "Share to Telegram",
                                    children: (0, l.jsx)(L.h, {})
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex w-full flex-row",
                            children: [(0, l.jsx)(_.II, {
                                disabled: !0,
                                value: i.replace("https://", "").replace("www.", ""),
                                className: "!text-black"
                            }), (0, l.jsx)(F.z, {
                                variant: "primary",
                                label: d ? "Copied" : "Copy",
                                disabled: d,
                                onClick: () => {
                                    o(), (0, T.uH)({
                                        event: "Share Modal Third Copy Clipboard",
                                        properties: {
                                            associationType: "Post",
                                            associationId: r,
                                            sourceComponent: a
                                        }
                                    })
                                }
                            })]
                        })]
                    }),
                    bodyWithoutPaddingBottom: !0,
                    title: "Share this post"
                })
            }

            function SharePostButton(e) {
                let {
                    post: t,
                    releasePostArtistTwitterHandle: a,
                    sourceLocation: s,
                    className: n,
                    iconSize: r,
                    onClick: o
                } = e, {
                    openModal: d
                } = (0, b.useModal)();
                return (0, l.jsx)("button", {
                    type: "button",
                    className: (0, c.m)("cursor-pointer rounded-md px-2 py-1 hover:bg-neutral100 active:scale-95", n),
                    onClick: () => {
                        o(), (0, T.uH)({
                            event: "Share Modal Opened",
                            properties: {
                                associationType: "Post",
                                associationId: t.id,
                                sourceComponent: s
                            }
                        }), d("SHARED_FEED_POST", {
                            body: (0, l.jsx)(SharePostModal, {
                                post: t,
                                sourceLocation: s,
                                artistTwitterHandle: a
                            })
                        })
                    },
                    children: (0, l.jsx)(i.G, {
                        icon: M.A$,
                        className: "text-base900",
                        fontSize: r
                    })
                })
            }
            var B = a(10060),
                H = a(28839),
                W = a(26475);
            let {
                batchedKeys: $,
                useBatchedKey: V
            } = (0, W.y)({
                chunkLimit: 50
            });

            function setPostStatus(e) {
                let {
                    postId: t,
                    voteStatus: a,
                    upvoteCount: s,
                    repostCount: n,
                    repostStatus: l
                } = e, r = $.keys.get(t);
                r && (0, C.QQb)({
                    query: C.VQr,
                    variables: {
                        input: {
                            postIds: r
                        }
                    }
                }, e => e ? (0, H.ZP)(e, e => {
                    for (let r of e.data.userPostStatus)
                        if (r.postId === t) {
                            r.voteStatus = a, r.upvoteCount = s, r.repostCount = n, r.repostStatus = l;
                            return
                        }
                    e.data.userPostStatus.push({
                        voteStatus: a,
                        upvoteCount: s,
                        postId: t,
                        repostCount: n,
                        repostStatus: l
                    })
                }) : e)
            }

            function isRepostablePost(e) {
                switch (e.__typename) {
                    case "PlaylistPost":
                    case "GeneralPost":
                    case "ReleasePost":
                        return !0;
                    default:
                        return !1
                }
            }

            function PostActionButtons(e) {
                let {
                    postFrag: t,
                    repostSource: a,
                    commentButtonAction: s,
                    sourceLocation: n,
                    resourceOwnerTwitterHandle: i,
                    hideShareButton: o,
                    buttonClassName: u,
                    containerClassName: x,
                    iconSize: h,
                    source: f,
                    hideRepostButton: v
                } = e, g = (0, C.S3c)(C.w29, t), S = (0, C.S3c)(C.N6Q, a), {
                    id: M,
                    commentCount: _
                } = g, {
                    isAuthenticatedWithAPI: O
                } = (0, P.aC)(), L = (0, E.a)(), {
                    openModal: D
                } = (0, b.useModal)(), {
                    openToast: U
                } = (0, y.useToast)(), F = (0, j.S)(), {
                    postStatus: z,
                    setPostStatus: G
                } = function(e) {
                    let {
                        postId: t
                    } = e, a = V({
                        key: t
                    }), {
                        isAuthenticatedWithAPI: s
                    } = (0, P.aC)(), {
                        data: n
                    } = (0, C.aM2)(C.VQr, {
                        variables: !!(null == a ? void 0 : a.length) && {
                            input: {
                                postIds: a
                            }
                        },
                        cacheTime: 1 / 0,
                        select(e) {
                            let {
                                data: a
                            } = e;
                            for (let e of a.userPostStatus)
                                if (e.postId === t) return e
                        },
                        enabled: s,
                        keepPreviousData: !0,
                        staleTime: 0
                    });
                    return {
                        postStatus: n,
                        setPostStatus
                    }
                }({
                    postId: M
                }), H = (0, w.R)(() => {
                    var e, t, a;
                    switch ((0, T.uH)({
                        event: "Comment Icon Click",
                        properties: {
                            associationType: "Post",
                            associationId: M,
                            sourceComponent: f,
                            repostId: null !== (e = null == S ? void 0 : S.id) && void 0 !== e ? e : null,
                            repostUserId: null !== (t = null == S ? void 0 : S.creator.id) && void 0 !== t ? t : null,
                            repostUserPublicAddress: null !== (a = null == S ? void 0 : S.creator.publicAddress) && void 0 !== a ? a : null
                        }
                    }), s) {
                        case 0:
                            if (!O) {
                                (0, R.SR)();
                                return
                            }
                            D(b.ModalType.FEED_POST_COMMENT, {
                                body: (0, l.jsx)(FeedPostReplyModal, {
                                    postFrag: g
                                }, `feed-post-comment-modal-${g.id}`)
                            });
                            return;
                        case 1:
                            if (!O) {
                                (0, R.SR)();
                                return
                            }(0, A.FM)((0, A.OG)(g.id));
                            return;
                        case 2:
                            d().push((0, I.OU)(g.webappUri));
                            return;
                        default:
                            (0, A.y0)(s)
                    }
                }), {
                    mutateAsync: W,
                    isLoading: $
                } = (0, C.Dbo)(C.QU, {
                    retry: 3
                }), {
                    mutateAsync: Z,
                    isLoading: Q
                } = (0, C.Dbo)(C.vfr, {
                    retry: 3
                }), {
                    mutateAsync: Y,
                    isLoading: X
                } = (0, C.Dbo)(C.aDe, {
                    retry: 3
                }), K = Q || X, q = (0, w.R)(async () => {
                    var e, t, a, s;
                    if ((0, T.uH)({
                            event: (null == z ? void 0 : z.voteStatus) === "UPVOTED" ? "Undo Upvote Clicked" : "Upvote Clicked",
                            properties: {
                                associationType: "Post",
                                associationId: M,
                                sourceComponent: f,
                                repostId: null !== (e = null == S ? void 0 : S.id) && void 0 !== e ? e : null,
                                repostUserId: null !== (t = null == S ? void 0 : S.creator.id) && void 0 !== t ? t : null,
                                repostUserPublicAddress: null !== (a = null == S ? void 0 : S.creator.publicAddress) && void 0 !== a ? a : null
                            }
                        }), !O) {
                        (0, R.SR)();
                        return
                    }
                    if ($ || !z) return;
                    let {
                        voteStatus: n,
                        upvoteCount: l,
                        repostCount: r,
                        repostStatus: i
                    } = z;
                    try {
                        let e;
                        if (n === C.i_t.NoVote ? (G({
                                postId: M,
                                voteStatus: C.i_t.Upvoted,
                                upvoteCount: l + 1,
                                repostCount: r,
                                repostStatus: i
                            }), e = await W({
                                input: {
                                    postId: M,
                                    voteStatus: C.$71.Upvote
                                }
                            })) : n === C.i_t.Upvoted && (G({
                                postId: M,
                                voteStatus: C.i_t.NoVote,
                                upvoteCount: Math.max(l - 1, 0),
                                repostCount: r,
                                repostStatus: i
                            }), e = await W({
                                input: {
                                    postId: M,
                                    voteStatus: C.$71.RemoveVote
                                }
                            })), (null == e ? void 0 : null === (s = e.data.voteOnPostRL) || void 0 === s ? void 0 : s.__typename) === "RateLimitError") {
                            let t = Error(e.data.voteOnPostRL.message);
                            F({
                                action: m.Ry.UPVOTING_POST_FAILED,
                                error: t,
                                errorType: m.QS.RATE_LIMIT,
                                isArtistOnlyPage: !1,
                                level: "warning",
                                message: e.data.voteOnPostRL.message,
                                pillar: "POSTING",
                                toast: "Hit limit for upvoting posts",
                                indexedTags: {
                                    postId: M
                                }
                            })
                        }
                    } catch (e) {
                        F({
                            action: m.Ry.UPVOTING_POST_FAILED,
                            error: e,
                            errorType: m.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "There was an error upvoting a post",
                            pillar: "POSTING",
                            toast: N.fn,
                            indexedTags: {
                                postId: M
                            }
                        })
                    }
                }), J = (0, w.R)(async () => {
                    var e, t, a;
                    if ((0, T.uH)({
                            event: (null == z ? void 0 : z.repostStatus) === "REPOSTED" ? "Undo Repost Clicked" : "Repost Clicked",
                            properties: {
                                associationType: "Post",
                                associationId: M,
                                sourceComponent: f,
                                repostId: null !== (e = null == S ? void 0 : S.id) && void 0 !== e ? e : null,
                                repostUserId: null !== (t = null == S ? void 0 : S.creator.id) && void 0 !== t ? t : null,
                                repostUserPublicAddress: null !== (a = null == S ? void 0 : S.creator.publicAddress) && void 0 !== a ? a : null
                            }
                        }), !O) {
                        (0, R.SR)();
                        return
                    }
                    if (K || !z) return;
                    let {
                        voteStatus: s,
                        upvoteCount: n,
                        repostCount: r,
                        repostStatus: i
                    } = z;
                    "NOT_REPOSTED" === i ? (G({
                        postId: M,
                        voteStatus: s,
                        upvoteCount: n,
                        repostCount: r + 1,
                        repostStatus: "REPOSTED"
                    }), await Z({
                        input: {
                            postId: M
                        }
                    }), U({
                        variant: "success",
                        text: (0, l.jsxs)("p", {
                            children: ["Reposted.", " ", (0, l.jsx)(p.s, {
                                pathnameUri: (0, I.OU)(g.webappUri),
                                className: "font-semibold underline",
                                children: "View post"
                            })]
                        })
                    })) : "REPOSTED" === i && (G({
                        postId: M,
                        voteStatus: s,
                        upvoteCount: n,
                        repostCount: Math.max(r - 1, 0),
                        repostStatus: "NOT_REPOSTED"
                    }), await Y({
                        postId: M
                    }))
                }), ee = (0, r.useMemo)(() => O && z ? z.upvoteCount : g.upvoteCount, [O, z, g.upvoteCount]), et = (0, r.useMemo)(() => O && z ? z.repostCount : g.repostCount, [O, z, g.repostCount]), ea = (0, r.useMemo)(() => O ? !z : !L, [L, O, z]), es = (0, w.R)(() => {
                    var e, t, a;
                    (0, T.uH)({
                        event: "Post Share Clicked",
                        properties: {
                            associationType: "Post",
                            associationId: M,
                            sourceComponent: f,
                            repostId: null !== (e = null == S ? void 0 : S.id) && void 0 !== e ? e : null,
                            repostUserId: null !== (t = null == S ? void 0 : S.creator.id) && void 0 !== t ? t : null,
                            repostUserPublicAddress: null !== (a = null == S ? void 0 : S.creator.publicAddress) && void 0 !== a ? a : null
                        }
                    })
                });
                if (ea) return (0, l.jsx)("div", {
                    className: "-my-1 h-7 w-36 animate-pulse rounded-md bg-neutral200"
                });
                let en = isRepostablePost(g);
                return (0, l.jsxs)("div", {
                    className: (0, c.m)("-mx-2 -my-1 flex h-7 items-center gap-8", x),
                    "data-feed-clickable-div": !0,
                    children: [(0, l.jsx)(k.U, {
                        onClick: H,
                        commentCount: _,
                        variant: "post",
                        className: u,
                        iconSize: h
                    }), !!en && !v && (0, l.jsx)(RepostButton, {
                        disabled: K,
                        className: u,
                        onClick: J,
                        repostCount: et,
                        repostStatus: null == z ? void 0 : z.repostStatus,
                        iconSize: h
                    }), (0, l.jsx)(B.r, {
                        disabled: $,
                        onClick: q,
                        upvoteCount: ee,
                        voteStatus: null == z ? void 0 : z.voteStatus,
                        iconSize: h,
                        className: u
                    }), !o && (0, l.jsx)(SharePostButton, {
                        post: g,
                        sourceLocation: n,
                        releasePostArtistTwitterHandle: i,
                        iconSize: 16,
                        onClick: es
                    })]
                })
            }

            function RepostButton(e) {
                let {
                    className: t,
                    disabled: a,
                    onClick: s,
                    repostCount: n,
                    repostStatus: r,
                    iconSize: o
                } = e, d = "REPOSTED" === r ? "text-fuchsia500" : "text-base900";
                return (0, l.jsxs)("button", {
                    type: "button",
                    className: (0, c.m)("flex items-center gap-2 rounded-md px-2 py-1 text-base-m hover:bg-neutral100 active:scale-95", t),
                    onClick: s,
                    disabled: a,
                    children: [(0, l.jsx)(i.G, {
                        icon: u.u,
                        className: d,
                        fontSize: o
                    }), null != n && (0, l.jsx)("span", {
                        className: (0, c.m)("font-base font-medium", d),
                        children: n
                    })]
                })
            }(s = n || (n = {}))[s.ShowModal = 0] = "ShowModal", s[s.FocusInput = 1] = "FocusInput", s[s.GoPostPage = 2] = "GoPostPage"
        },
        74360: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return CommentButton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(44361),
                r = a(74371);

            function CommentButton(e) {
                let {
                    className: t,
                    onClick: a,
                    variant: i,
                    iconSize: o
                } = e;
                return (0, s.jsx)("button", {
                    className: (0, l.m)("cursor-pointer rounded-md px-2 py-1 text-base-m hover:bg-neutral100 active:scale-95 ", t),
                    onClick: a,
                    children: (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, s.jsx)(n.G, {
                            icon: r.Mz,
                            className: "text-base900",
                            fontSize: o
                        }), "comment" === i ? (0, s.jsx)("span", {
                            className: "font-base font-medium text-base900",
                            children: "Reply"
                        }) : null != e.commentCount && (0, s.jsx)("span", {
                            className: "font-base font-medium text-base900",
                            children: e.commentCount
                        })]
                    })
                })
            }
        },
        17739: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return PostCommentsInput
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(50868),
                i = a(44361),
                o = a(54614);
            a(96960);
            var d = a(58658),
                c = a(11021),
                u = a(12849),
                m = a(68753),
                p = a(96301),
                x = a(21956),
                h = a(75747),
                f = a(36750),
                v = a(3928),
                g = a(64398),
                b = a(14034),
                y = a(85846),
                C = a(64571);

            function PostCommentsInput(e) {
                var t;
                let {
                    isEmpty: a,
                    postId: r
                } = e, {
                    mutateAsync: f,
                    isLoading: j
                } = (0, v.Dbo)(v.rR0, {}), {
                    openToast: w
                } = (0, h.useToast)(), [T, N] = (0, n.useState)(), I = (0, g.S)(), {
                    isAuthenticatedWithAPI: P,
                    authUser: R
                } = (0, p.aC)(), E = (0, n.useCallback)(async () => {
                    let e = u.Z.generateTextForNode(u.Z.getRootNode(T));
                    if (e.length) try {
                        (0, b.L9)({
                            event: "Create Post Comment",
                            properties: {
                                associationType: "PostComment",
                                associationId: r,
                                postId: r
                            }
                        });
                        let e = await f({
                            input: {
                                lexicalContent: null == T ? void 0 : T.toJSON(),
                                postId: r
                            }
                        });
                        "MutationAddPostCommentSuccess" !== e.data.addPostComment.__typename ? "ValidationError" === e.data.addPostComment.__typename ? I({
                            action: d.Ry.REPLY_POST_COMMENT_FAILED,
                            error: Error(e.data.addPostComment.message),
                            errorType: d.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: e.data.addPostComment.message,
                            pillar: "POSTING",
                            toast: y.fn,
                            indexedTags: {
                                postId: r
                            }
                        }) : I({
                            action: d.Ry.REPLY_POST_COMMENT_FAILED,
                            error: Error("Couldn't add post comment"),
                            errorType: d.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't add post comment",
                            pillar: "POSTING",
                            toast: y.fn,
                            indexedTags: {
                                postId: r
                            }
                        }) : ((0, b.L9)({
                            event: "Create Post Comment Success",
                            properties: {
                                associationType: "PostComment",
                                associationId: r,
                                postCommentId: e.data.addPostComment.data.id
                            }
                        }), w({
                            text: "Reply added",
                            variant: "success"
                        }))
                    } catch (e) {
                        I({
                            action: d.Ry.REPLY_POST_COMMENT_FAILED,
                            error: e,
                            errorType: d.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't add post comment",
                            pillar: "POSTING",
                            toast: y.fn,
                            indexedTags: {
                                postId: r
                            }
                        })
                    }
                }, [T, f, r, I, w]), A = (0, C.OG)(r);
                return (0, s.jsxs)("div", {
                    className: "relative w-full",
                    onClick: e => {
                        P || ((0, x.SR)(), e.currentTarget.blur())
                    },
                    children: [(0, s.jsx)(S, {}), (0, s.jsxs)("div", {
                        className: "flex w-full items-center py-2 md:py-3",
                        children: [(0, s.jsx)("div", {
                            className: (0, i.m)("mt-2 flex-shrink-0 self-start rounded-full", !R && "bg-neutral500", "h-5 w-5"),
                            children: R ? (0, s.jsx)(m.q, {
                                walletAddress: R.publicAddress,
                                username: R.username,
                                webappUri: R.webappUri,
                                size: 20,
                                src: null === (t = R.avatar) || void 0 === t ? void 0 : t.url,
                                borderRadius: "50%"
                            }) : (0, s.jsx)("div", {
                                className: "flex items-center justify-center bg-white",
                                children: (0, s.jsx)(l.G, {
                                    icon: o.m0,
                                    size: "lg",
                                    className: "text-avatar text-neutral500"
                                })
                            })
                        }), (0, s.jsx)(c.q, {
                            initialMentionData: void 0,
                            id: A,
                            autoFocus: !1,
                            onChange: N,
                            placeholder: P ? "Post your reply" : "Sign in to post your reply...",
                            loading: j,
                            disabled: j || !P,
                            onSubmit: E,
                            className: "comment-input w-full text-base-m",
                            characterCount: !1,
                            sendButtonLabel: "Reply"
                        })]
                    }), !a && (0, s.jsx)(S, {})]
                })
            }(0, f.c)({
                trigger: [v.rR0],
                refetch: [v.pH0, v.hrA, v.phN]
            });
            let S = (0, r.ZP)("div", "bg-base200 h-[1px] w-full")
        },
        13834: function(e, t, a) {
            "use strict";
            a.d(t, {
                J: function() {
                    return PostRepliesPreview
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(97946),
                l = a(36750),
                r = a(3928),
                i = a(95390),
                o = a(17739),
                d = a(54384);

            function PostRepliesPreview(e) {
                let {
                    previewCommentFrag: t,
                    postId: a,
                    postWebappUri: l,
                    postCommentCount: r,
                    showCommentInput: c
                } = e, u = 0 === r, m = !u && t ? r - 1 : r;
                return (0, s.jsxs)(s.Fragment, {
                    children: [c && (0, s.jsx)(o.z, {
                        postId: a,
                        isEmpty: u
                    }), r > 0 ? (0, s.jsxs)("div", {
                        className: "mt-2 w-full",
                        children: [t && (0, s.jsx)(d.m, {
                            postCommentsRowFrag: t
                        }), m > 0 ? (0, s.jsxs)(n.s, {
                            pathnameUri: (0, i.OU)(l),
                            className: "font-base text-base-m text-base500 hover:text-base800",
                            children: ["View ", 1 === m ? "1 reply" : `all ${m} replies`]
                        }) : null]
                    }) : null]
                })
            }(0, l.c)({
                refetch: [r.pH0, r.phN],
                trigger: [r.qB]
            })
        },
        54384: function(e, t, a) {
            "use strict";
            a.d(t, {
                m: function() {
                    return PostCommentsRow
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(28783),
                i = a(31460),
                o = a(19847),
                d = a(63834);
            a(96960);
            var c = a(58658),
                u = a(75747),
                m = a(36750),
                p = a(3928),
                x = a(64398),
                h = a(85846);
            (0, m.c)({
                trigger: [p.qB],
                refetch: [p.pH0]
            });
            var f = a(36263),
                v = a(22181);

            function DeletePostCommentModal(e) {
                let {
                    postCommentId: t
                } = e, {
                    closeModal: a
                } = (0, v.useModal)(), {
                    deletePostComment: n,
                    loading: l
                } = function(e) {
                    let {
                        postCommentId: t,
                        onDeleteSuccess: a
                    } = e, {
                        mutateAsync: s,
                        isLoading: n
                    } = (0, p.Dbo)(p.qB, {}), {
                        openToast: l
                    } = (0, u.useToast)(), r = (0, x.S)();
                    return {
                        deletePostComment: async () => {
                            try {
                                let e = await s({
                                    postCommentId: t
                                });
                                "MutationRemovePostCommentSuccess" !== e.data.removePostComment.__typename ? "ValidationError" === e.data.removePostComment.__typename ? l({
                                    text: e.data.removePostComment.message,
                                    variant: "error"
                                }) : r({
                                    action: c.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: Error("Couldn't delete post comment"),
                                    errorType: c.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post comment",
                                    pillar: "POSTING",
                                    toast: h.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                }) : (a(), l({
                                    text: "The comment was removed",
                                    variant: "success"
                                }))
                            } catch (e) {
                                r({
                                    action: c.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: e,
                                    errorType: c.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post comment",
                                    pillar: "POSTING",
                                    toast: h.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                })
                            }
                        },
                        loading: n
                    }
                }({
                    postCommentId: t,
                    onDeleteSuccess: () => {
                        a()
                    }
                });
                return (0, s.jsx)(f.s, {
                    onConfirm: n,
                    onCancel: a,
                    title: "Delete Comment?",
                    message: "Are you sure you want to delete your comment? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: l
                })
            }
            var g = a(8094),
                b = a(62335),
                y = a(53529),
                C = a(28839),
                S = a(74360),
                j = a(59820),
                w = a(10060),
                T = a(64638),
                N = a(68753),
                I = a(88343),
                P = a(29356),
                R = a(96301),
                E = a(21956),
                A = a(17941),
                k = a(42529),
                M = a(95390),
                _ = a(97946),
                O = a(49476),
                L = a(98335),
                D = a(66195);

            function UserReplyItem(e) {
                var t, a;
                let {
                    authorChannelRole: o,
                    channelId: m,
                    createdAt: h,
                    message: y,
                    parentCommentId: U,
                    replyId: F,
                    showArtistTag: z,
                    showVerifiedBadge: G,
                    upvoteCount: B,
                    userFragment: H,
                    authorNftsCountGa: W,
                    authorNftsCountVip: $
                } = e, {
                    authUser: V,
                    isAuthenticatedWithAPI: Z
                } = (0, R.aC)(), [Q, Y] = (0, n.useState)(!1), {
                    openModal: X,
                    closeModal: K
                } = (0, v.useModal)(), {
                    openToast: q
                } = (0, u.useToast)(), J = (0, p.S3c)(p.jpX, H), {
                    username: ee,
                    webappUri: et,
                    publicAddress: ea,
                    avatar: es
                } = J, en = (0, M.OU)(et), {
                    isChannelCurator: el,
                    isChannelOwner: er
                } = (0, d.j)({
                    channelId: m
                }), ei = (0, D.y9)({
                    key: F
                }), eo = (0, A.a)(), ed = (0, x.S)(), ec = !!$, {
                    data: eu
                } = (0, p.aM2)(p.O6c, {
                    variables: !!ei && {
                        input: {
                            postCommentIds: ei
                        }
                    },
                    cacheTime: 1 / 0,
                    select(e) {
                        let {
                            data: t
                        } = e;
                        for (let e of t.userVoteOnPostComment)
                            if (e.postCommentId === F) return {
                                voteStatus: e.voteStatus,
                                upvoteCount: e.upvoteCount
                            }
                    },
                    enabled: Z && !!(null == ei ? void 0 : ei.length),
                    keepPreviousData: !0,
                    staleTime: 0
                }), {
                    mutateAsync: em,
                    isLoading: ep
                } = (0, p.Dbo)(p.Lzz, {
                    retry: 3
                }), {
                    mutateAsync: ex,
                    isLoading: eh
                } = (0, p.Dbo)(p.ERI, {
                    retry: 3
                }), ef = (0, k.R)(() => {
                    if (!Z) {
                        (0, E.SR)();
                        return
                    }
                    X(v.ModalType.REPLY_POST, {
                        body: (0, s.jsx)(P.r, {
                            postCommentId: F,
                            parentPostCommentId: U
                        })
                    })
                }), ev = (0, k.R)(async () => {
                    if (!Z) {
                        (0, E.SR)();
                        return
                    }
                    if (ep || !eu) return;
                    let {
                        voteStatus: e,
                        upvoteCount: t
                    } = eu, a = e === p.i_t.NoVote;
                    (0, D.ot)({
                        postCommentId: F,
                        voteStatus: a ? p.i_t.Upvoted : p.i_t.NoVote,
                        upvoteCount: a ? t + 1 : t - 1
                    });
                    try {
                        var s, n;
                        let l = await em({
                            input: {
                                postCommentId: F,
                                voteStatus: a ? p.$71.Upvote : p.$71.RemoveVote
                            }
                        });
                        (null === (s = l.data.voteOnPostComment) || void 0 === s ? void 0 : s.__typename) === "NotFoundError" && ed({
                            action: c.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: Error(l.data.voteOnPostComment.message),
                            errorType: c.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: l.data.voteOnPostComment.message,
                            toast: "The comment you are trying to upvote does not exist.",
                            indexedTags: {
                                postCommentId: F,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: c.Lj.POSTING
                        }), (null === (n = l.data.voteOnPostComment) || void 0 === n ? void 0 : n.__typename) === "RateLimitError" && ed({
                            action: c.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: Error(l.data.voteOnPostComment.message),
                            errorType: c.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: l.data.voteOnPostComment.message,
                            toast: "You are upvoting too fast, try again later please.",
                            indexedTags: {
                                postCommentId: F,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: c.Lj.POSTING
                        })
                    } catch (a) {
                        ed({
                            action: c.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: a,
                            errorType: c.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error upvoting a post comment",
                            indexedTags: {
                                postCommentId: F,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: c.Lj.POSTING
                        })
                    }
                }), eg = (0, n.useMemo)(() => Z && eu ? eu.upvoteCount : B, [Z, eu, B]), eb = (0, n.useMemo)(() => Z ? !eu : !eo, [Z, eo, eu]), ey = (0, k.R)(async () => {
                    try {
                        let e = await ex({
                            input: {
                                replyPostCommentId: F
                            }
                        });
                        "MutationRemovePostCommentReplySuccess" === e.data.removePostCommentReply.__typename ? ((0, p.SvF)({
                            query: p.wCx,
                            filterQueryKey: (0, D.ag)(U),
                            options: {}
                        }, e => e ? (0, C.ZP)(e, e => {
                            for (let t of e.pages) {
                                let e = 0;
                                for (let a of t.data.commentReplies.edges) {
                                    if (a.node.id === F) {
                                        t.data.commentReplies.edges.splice(e, 1);
                                        return
                                    }++e
                                }
                            }
                        }) : e), q({
                            text: "The reply has been deleted",
                            variant: "success"
                        })) : ed({
                            action: c.Ry.DELETE_POST_COMMENT_FAILED,
                            error: Error(e.data.removePostCommentReply.message),
                            errorType: c.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: e.data.removePostCommentReply.message,
                            toast: e.data.removePostCommentReply.message,
                            indexedTags: {
                                postCommentId: F
                            },
                            pillar: c.Lj.POSTING
                        })
                    } catch (e) {
                        ed({
                            action: c.Ry.DELETE_POST_COMMENT_FAILED,
                            error: e,
                            errorType: c.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error deleting a post comment reply",
                            toast: "There was an error deleting the reply. Please try again.",
                            indexedTags: {
                                postCommentId: F
                            },
                            pillar: c.Lj.POSTING
                        })
                    }
                    K()
                });
                return (0, s.jsxs)("div", {
                    className: "min-h-10 flex w-full min-w-0 flex-col gap-1 rounded-md py-1.5",
                    children: [(0, s.jsxs)("div", {
                        className: "flex w-full min-w-0 justify-between",
                        children: [(0, s.jsxs)("div", {
                            className: "flex w-full min-w-0 max-w-[70%] items-center gap-2",
                            children: [(0, s.jsx)("div", {
                                className: "shrink-0",
                                children: (0, s.jsx)(N.q, {
                                    size: 16,
                                    src: null == es ? void 0 : es.url,
                                    walletAddress: ea,
                                    username: ee,
                                    borderRadius: 1e3,
                                    webappUri: en
                                })
                            }), (0, s.jsxs)("div", {
                                className: "flex items-center gap-2 truncate text-base-s font-semibold text-base900",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex min-w-0 items-center gap-0.5",
                                    children: [(0, s.jsx)(_.s, {
                                        pathnameUri: en,
                                        className: "truncate font-base text-base-m font-semibold text-base900",
                                        children: ee
                                    }), G && (0, s.jsx)(L.O, {
                                        size: 14
                                    }), (ec || !!W) && (0, s.jsx)(O.t, {
                                        type: ec ? "vip" : "ga",
                                        size: 13,
                                        portal: !1
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-center gap-2 font-base text-base-xs font-normal",
                                    children: [z && (0, s.jsx)("div", {
                                        className: "flex-shrink-0 rounded-sm bg-base300 px-1 py-[2px] font-base text-base-xs font-normal text-base500",
                                        children: "Artist"
                                    }), (0, s.jsx)(I.E, {
                                        timeStamp: h,
                                        className: "font-base !text-base-xs font-normal text-base500 duration-300 hover:text-base600"
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "relative flex items-center gap-1",
                            children: (0, s.jsx)("div", {
                                className: "flex h-4 w-8",
                                children: ((null == V ? void 0 : V.id) === J.id || (null == V ? void 0 : null === (t = V.roles) || void 0 === t ? void 0 : t.isAdmin) || el) && (0, s.jsx)("div", {
                                    className: "flex items-center",
                                    children: (0, s.jsxs)(b.N, {
                                        setIsDropdownOpen: Y,
                                        isDropdownOpen: Q,
                                        dropdownProps: {
                                            align: "end",
                                            queue: !0
                                        },
                                        children: [(null == V ? void 0 : V.id) === J.id && (0, s.jsx)(g.Xi, {
                                            onClick: () => {
                                                X(v.ModalType.DELETE_POST_COMMENT_CONFIRMATION, {
                                                    body: (0, s.jsx)(f.s, {
                                                        onConfirm: ey,
                                                        onCancel: K,
                                                        title: "Delete Comment?",
                                                        message: "Are you sure you want to delete your comment? This action cannot be undone.",
                                                        confirmText: "Delete",
                                                        cancelText: "Cancel",
                                                        loading: eh,
                                                        destructive: !0
                                                    })
                                                })
                                            },
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                                children: [(0, s.jsx)(l.G, {
                                                    icon: r.$,
                                                    size: "lg"
                                                }), "Delete"]
                                            })
                                        }), (null == V ? void 0 : null === (a = V.roles) || void 0 === a ? void 0 : a.isAdmin) && (0, s.jsxs)(s.Fragment, {
                                            children: [(null == V ? void 0 : V.id) !== J.id && (0, s.jsx)(g.Xi, {
                                                onClick: () => {
                                                    X(v.ModalType.DELETE_POST_COMMENT_CONFIRMATION, {
                                                        body: (0, s.jsx)(j.pu, {
                                                            postCommentId: F
                                                        })
                                                    })
                                                },
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                                    children: [(0, s.jsx)(l.G, {
                                                        icon: r.$,
                                                        size: "lg"
                                                    }), "Delete (Admin)"]
                                                })
                                            }), (0, s.jsx)(g.Xi, {
                                                onClick: () => {
                                                    window.open(`${window.location.origin}/admin/moderate/${J.id}`, "_blank")
                                                },
                                                children: (0, s.jsxs)("div", {
                                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                                    children: [(0, s.jsx)(l.G, {
                                                        icon: i.wO,
                                                        size: "lg"
                                                    }), "Block User (Admin)"]
                                                })
                                            })]
                                        }), (el && "OWNER" !== o || er) && (0, s.jsx)(g.Xi, {
                                            onClick: () => {
                                                X(v.ModalType.DELETE_POST_COMMENT_CONFIRMATION, {
                                                    body: (0, s.jsx)(f.s, {
                                                        onConfirm: ey,
                                                        onCancel: K,
                                                        title: "Delete Comment?",
                                                        message: "Are you sure you want to delete the comment? This action cannot be undone.",
                                                        confirmText: "Delete",
                                                        cancelText: "Cancel",
                                                        loading: eh,
                                                        destructive: !0
                                                    })
                                                })
                                            },
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                                children: [(0, s.jsx)(l.G, {
                                                    icon: r.$,
                                                    size: "lg"
                                                }), "Delete (", er ? "Owner" : "Moderator", ")"]
                                            })
                                        })]
                                    })
                                })
                            })
                        })]
                    }), (0, s.jsx)("div", {
                        className: "break-words font-base text-base-m text-base900",
                        children: "string" == typeof y ? y : (0, s.jsx)(T.X, {
                            state: y,
                            className: "font-base text-base-m"
                        })
                    }), eb ? (0, s.jsx)("div", {
                        className: "mt-1 w-10 animate-pulse rounded-md bg-neutral200"
                    }) : (0, s.jsxs)("div", {
                        className: "mt-1 flex h-7 items-center gap-7",
                        children: [(0, s.jsx)("div", {
                            className: "-mx-2 -my-1",
                            children: (0, s.jsx)(w.r, {
                                disabled: !1,
                                upvoteCount: eg,
                                voteStatus: null == eu ? void 0 : eu.voteStatus,
                                onClick: ev,
                                iconSize: 14
                            })
                        }), (0, s.jsx)("div", {
                            className: "-mx-2 -my-1",
                            children: (0, s.jsx)(S.U, {
                                variant: "comment",
                                onClick: ef,
                                iconSize: 14
                            })
                        })]
                    })]
                })
            }
            var U = a(25828);

            function PostCommentsRow(e) {
                var t, a, o;
                let {
                    postCommentsRowFrag: c
                } = e, {
                    id: u,
                    author: m,
                    authorChannelRole: x,
                    authorNftsCountGa: h,
                    authorNftsCountVip: f,
                    content: C,
                    createdAt: S,
                    labels: w,
                    lexicalContent: T,
                    post: N,
                    repliesCount: I,
                    upvoteCount: P
                } = (0, p.S3c)(p.G3i, c), E = (0, p.S3c)(p.jpX, m), {
                    isChannelCurator: A,
                    isChannelOwner: M
                } = (0, d.j)({
                    channelId: null === (t = N.channel) || void 0 === t ? void 0 : t.id
                }), {
                    authUser: _
                } = (0, R.aC)(), [O, L] = n.useState(!1), {
                    openModal: D
                } = (0, v.useModal)(), F = (0, k.R)(() => {
                    D(v.ModalType.DELETE_POST_COMMENT_CONFIRMATION, {
                        body: (0, s.jsx)(DeletePostCommentModal, {
                            postCommentId: u
                        })
                    })
                }), z = (0, k.R)(() => {
                    D(v.ModalType.DELETE_POST_COMMENT_CONFIRMATION, {
                        body: (0, s.jsx)(j.BK, {
                            postCommentId: u
                        })
                    })
                }), G = (0, k.R)(() => {
                    window.open(`${window.location.origin}/admin/moderate/${E.id}`, "_blank")
                }), B = (0, n.useMemo)(() => w.some(e => "RELEASE_ARTIST" === e), [w]), H = (0, U.F)(T), W = (null == _ ? void 0 : _.id) === m.id || (null == _ ? void 0 : null === (a = _.roles) || void 0 === a ? void 0 : a.isAdmin) || A;
                return (0, s.jsxs)("div", {
                    children: [(0, s.jsx)(y.l, {
                        postCommentId: u,
                        userFragment: m,
                        content: H || C,
                        createdAt: S,
                        showVerifiedBadge: !!E.artist,
                        showArtistTag: B,
                        selectedSlotInfo: null,
                        upvoteCount: P,
                        authorNftsCountGa: h,
                        authorNftsCountVip: f,
                        action: W && (0, s.jsx)("div", {
                            className: "flex items-center",
                            children: (0, s.jsxs)(b.N, {
                                setIsDropdownOpen: L,
                                isDropdownOpen: O,
                                dropdownProps: {
                                    align: "end",
                                    queue: !0
                                },
                                children: [(null == _ ? void 0 : _.id) === m.id && (0, s.jsx)(g.Xi, {
                                    onClick: F,
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                        children: [(0, s.jsx)(l.G, {
                                            icon: r.$,
                                            size: "lg"
                                        }), "Delete"]
                                    })
                                }), (null == _ ? void 0 : null === (o = _.roles) || void 0 === o ? void 0 : o.isAdmin) ? (0, s.jsxs)(s.Fragment, {
                                    children: [(null == _ ? void 0 : _.id) !== m.id && (0, s.jsx)(g.Xi, {
                                        onClick: z,
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                            children: [(0, s.jsx)(l.G, {
                                                icon: r.$,
                                                size: "lg"
                                            }), "Delete (Admin)"]
                                        })
                                    }), (0, s.jsx)(g.Xi, {
                                        onClick: G,
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                            children: [(0, s.jsx)(l.G, {
                                                icon: i.wO,
                                                size: "lg"
                                            }), "Block User (Admin)"]
                                        })
                                    })]
                                }) : A && "OWNER" !== x || M ? (0, s.jsx)(g.Xi, {
                                    onClick: F,
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                        children: [(0, s.jsx)(l.G, {
                                            icon: r.$,
                                            size: "lg"
                                        }), "Delete (", M ? "Owner" : "Moderator", ")"]
                                    })
                                }) : null]
                            })
                        })
                    }), (0, s.jsx)(UserCommentReplies, {
                        repliesCount: I,
                        parentCommentId: u,
                        postId: N.id
                    })]
                })
            }

            function UserCommentReplies(e) {
                let {
                    repliesCount: t,
                    parentCommentId: a,
                    postId: l
                } = e, [r, i] = n.useState(!1), {
                    orderedList: d,
                    loadMoreNextPage: c,
                    isLoadingNewPage: u,
                    hasNextPage: m,
                    remove: x
                } = (0, p.NSZ)(p.wCx, {
                    enabled: r,
                    staleTime: 1 / 0,
                    filterQueryKey: (0, D.ag)(a),
                    getNextPageParam(e) {
                        let {
                            data: t
                        } = e;
                        return t.commentReplies.pageInfo.hasNextPage && {
                            after: t.commentReplies.pageInfo.endCursor
                        }
                    },
                    variables(e) {
                        let {
                            pageParam: t
                        } = e;
                        return {
                            pagination: {
                                after: null == t ? void 0 : t.after,
                                first: 3,
                                sort: {
                                    createdAt: p.Asd.Desc
                                }
                            },
                            parentCommentId: a,
                            postId: l
                        }
                    },
                    list(e) {
                        let {
                            commentReplies: t
                        } = e;
                        return t.edges.map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    }
                }), h = Math.max(t - d.length, 0), f = (0, k.R)(async () => {
                    if (r) {
                        c();
                        return
                    }
                    i(!0), d.length && c()
                }), v = (0, k.R)(async () => {
                    x(), i(!1)
                }), g = (0, n.useMemo)(() => d.map(e => {
                    var t;
                    let {
                        id: n,
                        author: l,
                        authorChannelRole: r,
                        authorNftsCountGa: i,
                        authorNftsCountVip: d,
                        content: c,
                        createdAt: u,
                        labels: m,
                        lexicalContent: x,
                        post: h,
                        upvoteCount: f
                    } = (0, p.S3c)(p.G3i, e), v = (0, p.S3c)(p.jpX, l), g = o.g.safeParse(x), b = g.success ? g.data : null;
                    return (0, s.jsx)(UserReplyItem, {
                        replyId: n,
                        parentCommentId: a,
                        userFragment: l,
                        createdAt: u,
                        message: b || c,
                        showArtistTag: m.some(e => "RELEASE_ARTIST" === e),
                        showVerifiedBadge: !!v.artist,
                        upvoteCount: f,
                        channelId: null === (t = h.channel) || void 0 === t ? void 0 : t.id,
                        authorChannelRole: r,
                        authorNftsCountGa: i,
                        authorNftsCountVip: d
                    }, n)
                }), [d, a]);
                return (0, s.jsxs)("div", {
                    className: "w-full pl-[47px]",
                    children: [g, u && (0, s.jsx)("div", {
                        className: "flex flex-col gap-4 py-[10px]",
                        children: [void 0, void 0, void 0].map((e, t) => (0, s.jsxs)("div", {
                            className: "flex animate-pulse flex-col gap-1",
                            children: [(0, s.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, s.jsx)("div", {
                                    className: "h-4 w-4 rounded-full bg-base300"
                                }), (0, s.jsx)("div", {
                                    className: "h-4 w-20 rounded-lg bg-base300"
                                }), (0, s.jsx)("div", {
                                    className: "h-4 w-40 rounded-lg bg-base300"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "h-4 w-40 rounded-lg bg-base300"
                            })]
                        }, t))
                    }), !!h && (0, s.jsx)("button", {
                        className: "-mx-1 mb-2 cursor-pointer rounded-md px-2 py-1",
                        onClick: f,
                        disabled: u,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)("div", {
                                className: "h-[1px] w-6 bg-base500"
                            }), (0, s.jsxs)("span", {
                                className: "font-base text-base-m text-base500 hover:text-base800",
                                children: ["View ", 1 === h ? "1 reply" : `all ${h} replies`]
                            })]
                        })
                    }), 0 !== d.length && !m && !h && (0, s.jsx)("button", {
                        className: "-mx-1 mb-2 cursor-pointer rounded-md px-2 py-1",
                        onClick: v,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)("div", {
                                className: "h-[1px] w-6 bg-base500"
                            }), (0, s.jsx)("span", {
                                className: "font-base !text-base-m font-medium text-neutral500 hover:text-base800",
                                children: "Hide replies"
                            })]
                        })
                    })]
                })
            }(0, m.c)({
                refetch: [p.wCx, p.pH0, p.pVX],
                trigger: [p.r58, p.ERI]
            })
        },
        76501: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return PostComposer
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(44361),
                i = a(51274),
                o = a(54614),
                d = a(4290),
                c = a(11021),
                u = a(18389),
                m = a(12849),
                p = a(68753),
                x = a(14335),
                h = a(3967),
                f = a(69598),
                v = a(54668),
                g = a(80498),
                b = a(22181);

            function SelectPostResourceModal(e) {
                let {
                    resource: t,
                    setResource: a
                } = e, {
                    closeModal: l
                } = (0, b.useModal)(), [r, i] = (0, n.useState)(!1), [o, d] = (0, n.useState)(g.Z.RELEASE), [c, u] = (0, n.useState)(t), m = n.useRef(null), p = (0, n.useMemo)(() => (0, s.jsxs)("div", {
                    className: "relative flex-1 overflow-x-hidden",
                    children: [(0, s.jsx)("div", {
                        className: "flex min-h-[50vh] flex-col gap-6 px-4 pb-4 lt:px-6 lt:pb-6"
                    }), (0, s.jsx)("div", {
                        className: "absolute inset-0 flex flex-col gap-6 pb-4 lt:pb-6",
                        children: (0, s.jsx)(g.p, {
                            selectedResource: c,
                            setSelectedResource: u,
                            selectedTab: o,
                            setTab: d,
                            step: 1
                        })
                    })]
                }), [c, o, u]);
                return n.useEffect(() => {
                    m.current && i(m.current.clientHeight < m.current.scrollHeight)
                }, [m]), (0, s.jsx)(v.Z, {
                    ref: m,
                    mobileFullScreen: !0,
                    closeModal: l,
                    size: "medium",
                    bodyClassName: "relative flex flex-col px-0",
                    containerClassName: "pb-0 h-full md:h-fit",
                    overlayClassName: "min-h-[-webkit-fill-available]",
                    bodyWithoutPadding: !0,
                    bodyWithoutPaddingBottom: !0,
                    showHeaderShadow: r,
                    title: "Select sound or playlist",
                    callToAction: (0, s.jsxs)("div", {
                        className: "relative z-above1 flex w-full gap-3 pb-3 ",
                        children: [(0, s.jsx)(f.z, {
                            variant: "secondary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Close",
                            onClick: l
                        }), (0, s.jsx)(f.z, {
                            variant: "primary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Select",
                            disabled: !c,
                            onClick: () => {
                                c && (a(c), l())
                            }
                        })]
                    }),
                    body: p
                })
            }
            var y = a(18744),
                C = a(96301),
                S = a(21956),
                j = a(43158),
                w = a(3928),
                T = a(42529),
                N = a(85846),
                I = a(19791),
                P = a(55344),
                R = a(8234),
                E = a(73950),
                A = a(76292);

            function ChannelSelector(e) {
                let {
                    disabled: t,
                    selectedChannel: a,
                    setSelectedChannel: l
                } = e, {
                    channels: r,
                    isLoading: i
                } = function(e) {
                    let {
                        limit: t,
                        loadAll: a
                    } = e, {
                        authUser: s,
                        isAuthenticatedWithAPI: l
                    } = (0, C.aC)(), {
                        orderedList: r,
                        loadMoreNextPage: i,
                        status: o,
                        hasNextPage: d = !1
                    } = (0, w.NSZ)(w.RED, {
                        filterQueryKey: {
                            authUserId: null == s ? void 0 : s.id,
                            limit: t
                        },
                        getNextPageParam(e) {
                            let {
                                data: t
                            } = e;
                            return t.userChannels.pageInfo.hasNextPage && {
                                after: t.userChannels.pageInfo.endCursor
                            }
                        },
                        enabled: !!l,
                        variables: e => {
                            let {
                                pageParam: a
                            } = e;
                            return {
                                pagination: {
                                    first: t,
                                    after: (null == a ? void 0 : a.after) || null
                                }
                            }
                        },
                        list(e) {
                            let {
                                userChannels: t
                            } = e;
                            return t.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        staleTime: (0, P.Z)("5 minutes")
                    });
                    return (0, n.useEffect)(() => {
                        a && d && i()
                    }, [d, a, i]), {
                        channels: r,
                        isLoading: "loading" === o
                    }
                }({
                    limit: 51,
                    loadAll: !0
                }), o = (0, T.R)(e => {
                    if ("home" === e) {
                        l(null);
                        return
                    }
                    let t = (0, I.CC)(r, t => t.id === e && t),
                        a = (0, w.S3c)(w.bBJ, t);
                    l(null != a ? a : null)
                }), d = (0, n.useMemo)(() => r.map(e => {
                    let {
                        staticProfileImage: t,
                        profileImage: a,
                        id: n,
                        name: l
                    } = (0, w.S3c)(w.bBJ, e), r = (null == t ? void 0 : t.url) || (null == a ? void 0 : a.url) || "/images/sound_letter_s.svg";
                    return (0, s.jsx)(R.c, {
                        value: n,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)(E.G, {
                                alt: "Channel Profile Image",
                                src: r,
                                width: 16,
                                height: 16,
                                sizes: "32px",
                                className: "h-full rounded-[2px] object-cover",
                                placeholder: "blur",
                                style: {
                                    minWidth: "16px",
                                    minHeight: "16px"
                                },
                                blurDataURL: (0, A.Z)(16, 16)
                            }), (0, s.jsx)("span", {
                                className: "font-base text-base-m font-normal text-base800",
                                children: l
                            })]
                        })
                    }, n)
                }), [r]);
                return i ? (0, s.jsx)("div", {
                    className: "h-6 w-16 animate-pulse rounded-full bg-base200"
                }) : i || 0 !== r.length ? (0, s.jsxs)(R.P, {
                    triggerClassName: "!h-6 !min-h-[24px] !rounded-full [&_img]:hidden !bg-white !border !border-base400",
                    contentClassName: "w-full z-",
                    value: (null == a ? void 0 : a.id) || "home",
                    onValueChange: o,
                    disabled: t,
                    portal: !0,
                    children: [(0, s.jsx)(R.c, {
                        value: "home",
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, s.jsx)(E.G, {
                                alt: "Channel Profile Image",
                                src: "https://d16zqvkniqf1rn.cloudfront.net/sound_icon.png",
                                width: 16,
                                height: 16,
                                sizes: "32px",
                                className: "h-full rounded-[2px] object-cover",
                                placeholder: "blur",
                                style: {
                                    minWidth: "16px",
                                    minHeight: "16px"
                                },
                                blurDataURL: (0, A.Z)(16, 16)
                            }), (0, s.jsx)("span", {
                                className: "font-base text-base-m font-normal text-base800",
                                children: "Home"
                            })]
                        })
                    }), d]
                }, null == a ? void 0 : a.id) : null
            }
            var k = a(31594);

            function PostComposer(e) {
                var t;
                let {
                    channel: a,
                    selectedResource: f,
                    setSelectedResource: v,
                    sourceLocation: g,
                    variant: I,
                    showChannelSelector: P,
                    channelSelectorDisabled: R
                } = e, {
                    tablet: E
                } = (0, j.useMediaQuery)(), {
                    authUser: A,
                    isAuthenticatedWithAPI: M
                } = (0, C.aC)(), [_, O] = (0, n.useState)(), [L, D] = (0, n.useState)(a), [U, F] = (0, n.useState)(), {
                    openModal: z,
                    closeModal: G
                } = (0, b.useModal)(), B = "modal" === I, {
                    embed: H,
                    playlist: W,
                    release: $
                } = (0, u.i)(null == _ ? void 0 : _.toJSON()), V = !!((null == H ? void 0 : H.uri) || W || $), {
                    createGeneralIsLoading: Z,
                    createReleaseIsLoading: Q,
                    createPlaylistIsLoading: Y,
                    createGeneralPost: X,
                    createReleasePost: K,
                    createPlaylistPost: q
                } = (0, y.j)(), J = Z || Q || Y, ee = M ? "What's on your mind?" : "Sign in to post...", et = !M || J, ea = V || et || !!f, es = (0, n.useMemo)(() => A ? (0, w.jtO)({
                    creator: {
                        id: A.id,
                        publicAddress: A.publicAddress
                    },
                    id: (0, d.k$)(),
                    lexicalContent: null == _ ? void 0 : _.toJSON()
                }, w.LYH) : null, [A, _]), en = (0, n.useCallback)(() => {
                    v && v(null)
                }, [v]), el = (0, T.R)(() => {
                    G(), v && v(null)
                }), er = (0, T.R)(async () => f ? "release" === f.type ? K({
                    releaseId: f.releaseId,
                    lexicalContent: null == _ ? void 0 : _.toJSON(),
                    sourceLocation: g,
                    onPostCreated: el,
                    channelId: null == L ? void 0 : L.id
                }) : "playlist" === f.type ? q({
                    playlistId: f.playlistId,
                    lexicalContent: null == _ ? void 0 : _.toJSON(),
                    sourceLocation: g,
                    onPostCreated: el,
                    channelId: null == L ? void 0 : L.id
                }) : void 0 : X({
                    linkDomain: m.Z.getFirstLinkDomain(_),
                    lexicalContent: null == _ ? void 0 : _.toJSON(),
                    sourceLocation: g,
                    onPostCreated: el,
                    channelId: null == L ? void 0 : L.id
                })), ei = (0, n.useMemo)(() => (0, s.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, s.jsx)("button", {
                        onClick: () => {
                            if (B) e.onActionClick();
                            else {
                                if (!v) return;
                                z(b.ModalType.SELECT_POST_RESOURCE, {
                                    body: (0, s.jsx)(SelectPostResourceModal, {
                                        setResource: v,
                                        resource: f
                                    })
                                })
                            }
                        },
                        className: ea ? "cursor-not-allowed opacity-50" : "cursor-pointer transition-all duration-300 hover:brightness-130",
                        disabled: ea,
                        children: (0, s.jsx)(l.G, {
                            icon: i.Xi,
                            fontSize: 16,
                            className: "text-base500"
                        })
                    }), P && (0, s.jsx)(ChannelSelector, {
                        selectedChannel: L,
                        setSelectedChannel: D,
                        disabled: R
                    })]
                }), [R, ea, B, z, e, L, f, v, P]), eo = (0, n.useMemo)(() => null != f ? "release" === f.type ? (0, s.jsx)(h.S, {
                    allowEdit: !0,
                    onRemoveResource: en,
                    onEditSoundClicked: () => {
                        if (B) e.onActionClick();
                        else {
                            if (!v) return;
                            z(b.ModalType.SELECT_POST_RESOURCE, {
                                body: (0, s.jsx)(SelectPostResourceModal, {
                                    setResource: v,
                                    resource: f
                                })
                            })
                        }
                    },
                    releaseId: f.releaseId
                }) : (0, s.jsx)(x.C, {
                    allowEdit: !0,
                    onRemoveResource: en,
                    onEditPlaylistClicked: () => {
                        if (B) e.onActionClick();
                        else {
                            if (!v) return;
                            z(b.ModalType.SELECT_POST_RESOURCE, {
                                body: (0, s.jsx)(SelectPostResourceModal, {
                                    setResource: v,
                                    resource: f
                                })
                            })
                        }
                    },
                    playlistId: f.playlistId
                }) : !!es && (0, s.jsx)(k.Y, {
                    postFrag: es,
                    source: "Composer",
                    onClose: F
                }), [B, z, es, e, en, f, v]), ed = (0, n.useMemo)(() => !m.Z.checkForNonSpaceCharacters(_), [_]);
                return (0, s.jsx)("div", {
                    className: "relative",
                    onClick: e => {
                        M || ((0, S.SR)(), e.currentTarget.blur())
                    },
                    children: (0, s.jsxs)("div", {
                        className: "flex w-full items-start gap-2",
                        children: [(0, s.jsx)("div", {
                            className: (0, r.m)("flex-shrink-0 self-start rounded-full", !A && "bg-neutral500"),
                            children: A ? (0, s.jsx)(p.q, {
                                walletAddress: A.publicAddress,
                                username: A.username,
                                webappUri: A.webappUri,
                                size: E ? 48 : 40,
                                src: null === (t = A.avatar) || void 0 === t ? void 0 : t.url,
                                borderRadius: "50%"
                            }) : (0, s.jsx)("div", {
                                className: "flex items-center justify-center bg-white",
                                children: (0, s.jsx)(l.G, {
                                    icon: o.m0,
                                    className: "text-avatar text-neutral500 md:text-avatar-md"
                                })
                            })
                        }), (0, s.jsx)(c.q, {
                            id: "post-composer",
                            initialMentionData: void 0,
                            autoFocus: !1,
                            onChange: O,
                            placeholder: ee,
                            loading: J,
                            disabled: et,
                            onSubmit: er,
                            actionsContainerClassName: B ? "left-1" : void 0,
                            containerClassName: "min-w-0",
                            className: (0, r.m)("w-full text-base-m md:text-base-l", !M && "cursor-pointer", B && "min-h-[100px]"),
                            setRemoveLink: F,
                            removeLink: U,
                            characterCount: {
                                maxLength: N.HJ,
                                show: !0
                            },
                            sendButtonLabel: "Post",
                            actions: null != v ? ei : null,
                            showActions: !0,
                            extraContent: null != v ? eo : null,
                            disablePost: ed
                        })]
                    })
                })
            }
        },
        59820: function(e, t, a) {
            "use strict";
            a.d(t, {
                r4: function() {
                    return AdminDeleteAllUserContentModal
                },
                BK: function() {
                    return AdminDeletePostCommentModal
                },
                pu: function() {
                    return AdminDeletePostCommentReplyModal
                },
                zq: function() {
                    return AdminDeletePostModal
                },
                dW: function() {
                    return DeletePostModal
                }
            });
            var s = a(16356);
            a(97352), a(96960);
            var n = a(58658),
                l = a(75747),
                r = a(36750),
                i = a(3928),
                o = a(64398),
                d = a(85846);
            (0, r.c)({
                trigger: [i.pP9],
                refetch: [i.phN, i.hrA, i.lMr, i.M81, i.HFN]
            });
            var c = a(36263),
                u = a(22181);

            function DeletePostModal(e) {
                let {
                    postId: t
                } = e, {
                    closeModal: a
                } = (0, u.useModal)(), {
                    deletePost: r,
                    loading: m
                } = function(e) {
                    let {
                        postId: t,
                        onDeleteSuccess: a
                    } = e, {
                        mutateAsync: s,
                        isLoading: r
                    } = (0, i.Dbo)(i.pP9, {}), {
                        openToast: c
                    } = (0, l.useToast)(), u = (0, o.S)();
                    return {
                        deletePost: async () => {
                            try {
                                let e = await s({
                                    postId: t
                                });
                                "MutationDeletePostSuccess" !== e.data.deletePost.__typename ? u({
                                    action: n.Ry.DELETE_POST_FAILED,
                                    error: Error("Couldn't delete post"),
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postId: t
                                    }
                                }) : (a(), c({
                                    text: "Your post was removed.",
                                    variant: "success"
                                }))
                            } catch (e) {
                                u({
                                    action: n.Ry.DELETE_POST_FAILED,
                                    error: e,
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postId: t
                                    }
                                })
                            }
                        },
                        loading: r
                    }
                }({
                    postId: t,
                    onDeleteSuccess: () => {
                        a()
                    }
                });
                return (0, s.jsx)(c.s, {
                    onConfirm: r,
                    onCancel: a,
                    title: "Delete Post?",
                    message: "Are you sure you want to delete your post? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: m
                })
            }

            function AdminDeletePostModal(e) {
                let {
                    postId: t
                } = e, {
                    closeModal: a
                } = (0, u.useModal)(), {
                    adminDeletePost: r,
                    loading: m
                } = function(e) {
                    let {
                        postId: t,
                        onDeleteSuccess: a
                    } = e, {
                        mutateAsync: s,
                        isLoading: r
                    } = (0, i.Dbo)(i.j91, {}), {
                        openToast: c
                    } = (0, l.useToast)(), u = (0, o.S)();
                    return {
                        adminDeletePost: async () => {
                            try {
                                let e = await s({
                                    postId: t
                                });
                                "MutationAdminDeletePostSuccess" !== e.data.adminDeletePost.__typename ? u({
                                    action: n.Ry.DELETE_POST_FAILED,
                                    error: Error("Couldn't delete post"),
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postId: t
                                    }
                                }) : (a(), c({
                                    text: "The post was removed.",
                                    variant: "success"
                                }))
                            } catch (e) {
                                u({
                                    action: n.Ry.DELETE_POST_FAILED,
                                    error: e,
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete post",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postId: t
                                    }
                                })
                            }
                        },
                        loading: r
                    }
                }({
                    postId: t,
                    onDeleteSuccess: () => {
                        a()
                    }
                });
                return (0, s.jsx)(c.s, {
                    onConfirm: r,
                    onCancel: a,
                    title: "Delete Post?",
                    message: "Are you sure you want to delete this post? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: m
                })
            }

            function AdminDeletePostCommentModal(e) {
                let {
                    postCommentId: t
                } = e, {
                    closeModal: a
                } = (0, u.useModal)(), {
                    adminDeletePostComment: r,
                    loading: m
                } = function(e) {
                    let {
                        postCommentId: t,
                        onDeleteSuccess: a
                    } = e, {
                        mutateAsync: s,
                        isLoading: r
                    } = (0, i.Dbo)(i.gqN, {}), {
                        openToast: c
                    } = (0, l.useToast)(), u = (0, o.S)();
                    return {
                        adminDeletePostComment: async () => {
                            try {
                                let e = await s({
                                    postCommentId: t
                                });
                                "MutationAdminDeletePostCommentSuccess" !== e.data.adminDeletePostComment.__typename ? u({
                                    action: n.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: Error("Couldn't delete comment"),
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete comment",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                }) : (a(), c({
                                    text: "The comment was removed.",
                                    variant: "success"
                                }))
                            } catch (e) {
                                u({
                                    action: n.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: e,
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete comment",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                })
                            }
                        },
                        loading: r
                    }
                }({
                    postCommentId: t,
                    onDeleteSuccess: () => {
                        a()
                    }
                });
                return (0, s.jsx)(c.s, {
                    onConfirm: r,
                    onCancel: a,
                    title: "Delete Commment?",
                    message: "Are you sure you want to delete this comment? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: m
                })
            }

            function AdminDeletePostCommentReplyModal(e) {
                let {
                    postCommentId: t
                } = e, {
                    closeModal: a
                } = (0, u.useModal)(), {
                    adminDeletePostCommentReply: r,
                    loading: m
                } = function(e) {
                    let {
                        postCommentId: t,
                        onDeleteSuccess: a
                    } = e, {
                        mutateAsync: s,
                        isLoading: r
                    } = (0, i.Dbo)(i.gWU, {}), {
                        openToast: c
                    } = (0, l.useToast)(), u = (0, o.S)();
                    return {
                        adminDeletePostCommentReply: async () => {
                            try {
                                let e = await s({
                                    postCommentId: t
                                });
                                "MutationAdminDeletePostCommentReplySuccess" !== e.data.adminDeletePostCommentReply.__typename ? u({
                                    action: n.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: Error("Couldn't delete comment"),
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete comment",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                }) : (a(), c({
                                    text: "The reply was removed.",
                                    variant: "success"
                                }))
                            } catch (e) {
                                u({
                                    action: n.Ry.DELETE_POST_COMMENT_FAILED,
                                    error: e,
                                    errorType: n.QS.POSTING,
                                    isArtistOnlyPage: !1,
                                    level: "error",
                                    message: "Couldn't delete comment",
                                    pillar: "POSTING",
                                    toast: d.fn,
                                    indexedTags: {
                                        postCommentId: t
                                    }
                                })
                            }
                        },
                        loading: r
                    }
                }({
                    postCommentId: t,
                    onDeleteSuccess: () => {
                        a()
                    }
                });
                return (0, s.jsx)(c.s, {
                    onConfirm: r,
                    onCancel: a,
                    title: "Delete Commment?",
                    message: "Are you sure you want to delete this comment? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: m
                })
            }

            function AdminDeleteAllUserContentModal(e) {
                let {
                    userId: t
                } = e, {
                    openToast: a
                } = (0, l.useToast)(), {
                    closeModal: n
                } = (0, u.useModal)(), {
                    mutateAsync: r,
                    isLoading: o
                } = (0, i.Dbo)(i.wPu, {});
                return (0, s.jsx)(c.s, {
                    onConfirm: async () => {
                        let e = await r({
                            userId: t
                        });
                        "MutationAdminDeleteAllUserContentSuccess" === e.data.adminDeleteAllUserContent.__typename && (a({
                            text: "Content deleted successfully",
                            variant: "success"
                        }), n())
                    },
                    onCancel: n,
                    title: "Delete all user content?",
                    message: "Are you sure you want to delete all user content? This action cannot be undone.",
                    confirmText: "Delete",
                    cancelText: "Cancel",
                    destructive: !0,
                    loading: o
                })
            }(0, r.c)({
                trigger: [i.j91],
                refetch: [i.phN, i.hrA, i.THS, i.lMr]
            }), (0, r.c)({
                trigger: [i.gqN],
                refetch: [i.M$L, i.pH0]
            }), (0, r.c)({
                trigger: [i.gWU],
                refetch: [i.M$L, i.wCx]
            })
        },
        58870: function(e, t, a) {
            "use strict";
            a.d(t, {
                v: function() {
                    return PostDropdown
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(28783),
                r = a(31460),
                i = a(63834),
                o = a(59820),
                d = a(8094),
                c = a(96301),
                u = a(22181),
                m = a(42529);

            function PostDropdown(e) {
                var t;
                let {
                    postId: a,
                    creatorUserId: p,
                    channelId: x
                } = e, {
                    openModal: h
                } = (0, u.useModal)(), {
                    authUser: f
                } = (0, c.aC)(), {
                    isChannelCurator: v,
                    isChannelOwner: g
                } = (0, i.j)({
                    channelId: x
                }), b = p === (null == f ? void 0 : f.id), y = null == f ? void 0 : null === (t = f.roles) || void 0 === t ? void 0 : t.isAdmin, C = (0, m.R)(() => {
                    h(u.ModalType.DELETE_POST_CONFIRMATION, {
                        body: (0, s.jsx)(o.dW, {
                            postId: a
                        })
                    })
                }), S = (0, m.R)(() => {
                    h(u.ModalType.DELETE_POST_CONFIRMATION, {
                        body: (0, s.jsx)(o.zq, {
                            postId: a
                        })
                    })
                }), j = (0, m.R)(() => {
                    window.open(`${window.location.origin}/admin/moderate/${p}`, "_blank")
                });
                if (b || y || v) return (0, s.jsxs)(s.Fragment, {
                    children: [b && (0, s.jsx)(d.Xi, {
                        onClick: C,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                            children: [(0, s.jsx)(n.G, {
                                icon: l.$,
                                size: "lg"
                            }), "Delete"]
                        })
                    }), y ? (0, s.jsxs)(s.Fragment, {
                        children: [!b && (0, s.jsx)(d.Xi, {
                            onClick: S,
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                children: [(0, s.jsx)(n.G, {
                                    icon: l.$,
                                    size: "lg"
                                }), "Delete (Admin)"]
                            })
                        }), (0, s.jsx)(d.Xi, {
                            onClick: j,
                            children: (0, s.jsxs)("div", {
                                className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                children: [(0, s.jsx)(n.G, {
                                    icon: r.wO,
                                    size: "lg"
                                }), "Block User (Admin)"]
                            })
                        })]
                    }) : !b && (0, s.jsx)(d.Xi, {
                        onClick: C,
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                            children: [(0, s.jsx)(n.G, {
                                icon: l.$,
                                size: "lg"
                            }), "Delete (", g ? "Owner" : "Moderator", ")"]
                        })
                    })]
                })
            }
        },
        31594: function(e, t, a) {
            "use strict";
            a.d(t, {
                Y: function() {
                    return S
                }
            });
            var s = a(16356),
                n = a(97352);
            a(96960);
            var l = a(40196),
                r = a(18389),
                i = a(3928),
                o = a(72102),
                d = a(22248),
                c = a(49457),
                u = a(51247),
                m = a(43607),
                p = a(42529),
                x = a(81688),
                h = a(267),
                f = a(21605);
            let v = (0, n.memo)(function(e) {
                let {
                    embedUri: t,
                    embedSource: a,
                    id: l,
                    source: r,
                    onClose: i
                } = e, {
                    playing: v
                } = (0, x.PZ)(), {
                    inView: g,
                    ref: b
                } = (0, c.YD)(), [y, C] = (0, n.useState)(!1), S = (0, p.R)(e => {
                    let {
                        data: t
                    } = e;
                    !t.isPaused && v && (0, h.wO)()
                });
                return ((0, n.useEffect)(() => {
                    if (!t || !g) return;
                    let e = document.getElementById(l);
                    e && (window.onSpotifyIframeApiReady = a => {
                        a.createController(e, {
                            uri: t,
                            height: 152
                        }, e => {
                            f.k.controllers = [...f.k.controllers, {
                                id: l,
                                controller: e
                            }], e.addListener("playback_update", (0, d.Z)(S, 300)), e.addListener("ready", () => C(!0))
                        })
                    })
                }, [t, S, l, g]), t) ? (0, s.jsxs)("div", {
                    className: "relative min-h-[152px] w-full",
                    children: [!y && (0, s.jsxs)("div", {
                        className: "absolute m-0 flex h-[152px] w-full animate-pulse items-center justify-center gap-2 rounded-xl bg-base200 p-0",
                        children: [(0, s.jsx)(m.$, {
                            size: "xs",
                            className: "text-base500"
                        }), (0, s.jsxs)("span", {
                            className: "font-base text-base-m text-base500",
                            children: ["Attaching from ", (0, s.jsx)("span", {
                                className: "capitalize",
                                children: a
                            })]
                        })]
                    }), (0, s.jsx)("div", {
                        ref: b,
                        id: l,
                        className: "m-0 h-[152px] overflow-hidden rounded-xl p-0"
                    }), i && "Composer" == r && (0, s.jsx)("button", {
                        className: "align-center absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black align-middle",
                        onClick: i,
                        children: (0, s.jsx)(o.G, {
                            icon: u.NB,
                            color: "white",
                            size: "sm"
                        })
                    })]
                }) : null
            });
            var g = a(49395),
                b = a(45378),
                y = a(89222),
                C = a(89012);

            function SoundEmbed(e) {
                let t = "releaseSlug" in e,
                    a = "playlistId" in e,
                    {
                        data: n,
                        isLoading: l,
                        error: r
                    } = (0, i.aM2)(i.mNZ, {
                        variables: t && !!e.releaseSlug && !!e.artistHandle && {
                            releaseSlug: e.releaseSlug,
                            soundHandle: e.artistHandle
                        },
                        staleTime: 1 / 0,
                        enabled: t
                    }),
                    o = null == n ? void 0 : n.data.mintedRelease,
                    {
                        data: d,
                        isLoading: c,
                        error: u
                    } = (0, i.aM2)(i.Zok, {
                        variables: a && !!e.playlistId && {
                            playlistId: e.playlistId
                        },
                        staleTime: 1 / 0,
                        enabled: a
                    }),
                    m = null == d ? void 0 : d.data.playlistV2,
                    p = (0, s.jsx)("div", {
                        className: "m-0 h-[152px] w-full animate-pulse rounded-md bg-neutral200 p-0"
                    }),
                    x = (0, g.Tr)({
                        referralType: C.MintReferralType.Post,
                        referralData: {
                            postId: e.postId,
                            postUserAddress: e.postUserAddress
                        }
                    }),
                    h = e.onClose && "Composer" === e.source;
                return t ? r ? null : !o && l ? p : o ? (0, s.jsx)(s.Fragment, {
                    children: h ? (0, s.jsx)(y.a, {
                        variant: "composer",
                        releaseFrag: o,
                        customSubTitle: null,
                        onRemoveResource: e.onClose,
                        onEditSoundClicked: null,
                        allowEdit: !1
                    }) : (0, s.jsx)(y.a, {
                        variant: "post",
                        mintReferral: x,
                        collectButtonSource: "Feed Post Sound Bar",
                        releaseFrag: o,
                        source: "Feed Release Post",
                        customSubTitle: null
                    })
                }) : null : a ? u ? null : !m && c ? p : m ? (0, s.jsx)(b.M, {
                    playlistFrag: m,
                    source: h ? "Composer" : "Feed Playlist Post",
                    onRemoveResource: e.onClose
                }) : null : null
            }
            let S = (0, n.memo)(function(e) {
                let {
                    postFrag: t,
                    source: a,
                    onClose: n
                } = e, {
                    spotifyLinksEnabled: o
                } = (0, l.D)(), {
                    id: d,
                    lexicalContent: c,
                    creator: u
                } = (0, i.S3c)(i.LYH, t), {
                    link: m,
                    embed: p,
                    playlist: x,
                    release: h
                } = (0, r.i)(c);
                return o ? p ? (0, s.jsx)(v, {
                    id: `external-embed-post-${d}`,
                    embedUri: p.uri,
                    embedSource: p.source,
                    source: a,
                    onClose: () => {
                        n && m && n(m)
                    }
                }, p.uri) : h ? (0, s.jsx)(SoundEmbed, {
                    artistHandle: h.soundHandle,
                    releaseSlug: h.releaseSlug,
                    postId: d,
                    postUserAddress: u.publicAddress,
                    source: a,
                    onClose: () => {
                        n && m && n(m)
                    }
                }) : x ? (0, s.jsx)(SoundEmbed, {
                    playlistId: x.playlistId,
                    postId: d,
                    postUserAddress: u.publicAddress,
                    source: a,
                    onClose: () => {
                        n && m && n(m)
                    }
                }) : null : null
            })
        },
        66778: function(e, t, a) {
            "use strict";
            a.d(t, {
                Y: function() {
                    return PostItem
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(71992),
                r = a.n(l),
                i = a(78608),
                o = a(63834),
                d = a(66538),
                c = a(31981),
                u = a(58870),
                m = a(42805),
                p = a(1624),
                x = a(29442),
                h = a(96301),
                f = a(3928),
                v = a(14034),
                g = a(85846),
                b = a(95390);

            function PostItem(e) {
                var t, a;
                let {
                    commentButtonAction: l,
                    hideActions: c,
                    hideDropdown: m,
                    post: p,
                    previewCommentFrag: x,
                    repostSource: y,
                    showCommentInput: C,
                    variant: S
                } = e, {
                    value: j
                } = (0, i.useGate)(g.ln.SPOTIFY_LINKS), {
                    authUser: w
                } = (0, h.aC)(), T = (0, f.S3c)(f.LQA, p), {
                    id: N,
                    webappUri: I,
                    creator: P,
                    createdAt: R
                } = T, E = (0, n.useMemo)(() => new Date(R).getTime(), [R]), A = n.useMemo(() => {
                    switch (T.__typename) {
                        case "GeneralPost":
                            if (!j) return null;
                            return T.channel;
                        case "ReleasePost":
                        case "PlaylistPost":
                            return T.channel;
                        default:
                            return null
                    }
                }, [T, j]), k = (0, f.S3c)(f.ZNR, y), M = null !== (a = null == A ? void 0 : A.id) && void 0 !== a ? a : null, {
                    isChannelCurator: _
                } = (0, o.j)({
                    channelId: M
                }), O = null == w ? void 0 : null === (t = w.roles) || void 0 === t ? void 0 : t.isAdmin, L = P.id === (null == w ? void 0 : w.id), D = L || O || _ && "OWNER" !== T.authorChannelRole, U = "ReleasePost" === T.__typename ? T.authorNftsCountGa : null, F = "ReleasePost" === T.__typename ? T.authorNftsCountVip : null;
                return (0, s.jsx)("div", {
                    className: "cursor-pointer rounded-lg md:pr-6",
                    "data-feed-clickable-div": !0,
                    onClick: e => {
                        if (e.target instanceof HTMLElement && e.target.hasAttribute("data-feed-clickable-div")) {
                            var t, a, s;
                            r().push((0, b.OU)(I)), (0, v.uH)({
                                event: "Post Link Clicked",
                                properties: {
                                    associationId: N,
                                    associationType: "Post",
                                    sourceComponent: "Feed Post"
                                }
                            }), (0, v.uH)({
                                event: "Post Feed to Page Click",
                                properties: {
                                    associationId: N,
                                    associationType: "Post",
                                    sourceComponent: "Post Feed Card",
                                    repostId: null !== (t = null == k ? void 0 : k.id) && void 0 !== t ? t : null,
                                    repostUserId: null !== (a = null == k ? void 0 : k.creator.id) && void 0 !== a ? a : null,
                                    repostUserPublicAddress: null !== (s = null == k ? void 0 : k.creator.publicAddress) && void 0 !== s ? s : null
                                }
                            })
                        }
                    },
                    children: (0, s.jsx)(d.V, {
                        userFrag: P,
                        channelFrag: "feed" === S ? A : null,
                        description: "posted",
                        timestamp: E,
                        dropdownContent: !m && D && (0, s.jsx)(u.v, {
                            postId: N,
                            creatorUserId: P.id,
                            channelId: M
                        }),
                        authorNftsCountGa: U,
                        authorNftsCountVip: F,
                        children: (0, s.jsx)(PostGroupItem, {
                            commentButtonAction: l,
                            hideActions: c,
                            postFrag: p,
                            previewCommentFrag: x,
                            repostSource: null != k ? k : null,
                            showCommentInput: C
                        })
                    })
                })
            }

            function PostGroupItem(e) {
                let {
                    commentButtonAction: t,
                    hideActions: a,
                    postFrag: l,
                    previewCommentFrag: r,
                    repostSource: o,
                    showCommentInput: d
                } = e, {
                    value: u
                } = (0, i.useGate)(g.ln.SPOTIFY_LINKS), h = (0, f.S3c)(f.LQA, l), v = (0, n.useMemo)(() => {
                    switch (h.__typename) {
                        case "GeneralPost":
                            if (!u) return (0, s.jsx)("div", {
                                className: "text-base-s text-neutral400",
                                children: "There was an error loading this post"
                            });
                            return (0, s.jsx)(m.S, {
                                postFrag: h,
                                commentButtonAction: t,
                                shareButtonSource: "Post Feed Card",
                                source: "Post Feed Card",
                                repostSource: o,
                                readMoreEnabled: !0,
                                previewCommentFrag: r,
                                hideActions: a,
                                showCommentInput: d
                            });
                        case "ReleasePost":
                            return (0, s.jsx)(x.H, {
                                releasePostFrag: h,
                                commentButtonAction: t,
                                collectButtonSource: "Feed Post Sound Bar",
                                shareButtonSource: "Post Feed Card",
                                source: "Post Feed Card",
                                repostSource: o,
                                readMoreEnabled: !0,
                                previewCommentFrag: r,
                                hideActions: a,
                                showCommentInput: d
                            });
                        case "PlaylistPost":
                            return (0, s.jsx)(p.i, {
                                playlistPostFrag: h,
                                commentButtonAction: c.id.FocusInput,
                                readMoreEnabled: !0,
                                shareButtonSource: "Post Feed Card",
                                source: "Post Feed Card",
                                repostSource: o,
                                previewCommentFrag: r,
                                hideActions: a,
                                showCommentInput: d
                            });
                        default:
                            return (0, s.jsx)("div", {
                                className: "text-base-s text-neutral400",
                                children: "There was an error loading this post"
                            })
                    }
                }, [h, u, t, o, r, a, d]);
                return v
            }
        },
        42805: function(e, t, a) {
            "use strict";
            a.d(t, {
                S: function() {
                    return FeedGeneralPost
                }
            });
            var s = a(16356);
            a(97352), a(96960);
            var n = a(31981),
                l = a(77134),
                r = a(64638),
                i = a(3928),
                o = a(25828),
                d = a(13834),
                c = a(31594);

            function FeedGeneralPost(e) {
                let {
                    commentButtonAction: t,
                    hideActions: a,
                    postFrag: u,
                    readMoreEnabled: m,
                    previewCommentFrag: p,
                    repostSource: x,
                    shareButtonSource: h,
                    showCommentInput: f,
                    source: v
                } = e, g = (0, i.S3c)(i.KX0, u), {
                    id: b,
                    lexicalContent: y,
                    webappUri: C,
                    commentCount: S,
                    content: j
                } = g, w = (0, o.F)(y);
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-feed-clickable-div": !0,
                    children: [(0, s.jsx)(l.y, {
                        maxHeightClassName: "max-h-[140px] md:max-h-[152px]",
                        enabled: m,
                        children: w ? (0, s.jsx)(r.X, {
                            state: w,
                            className: "font-base text-base-m md:text-base-l"
                        }) : (0, s.jsx)("div", {
                            className: "font-base text-base-m text-base700 md:text-base-l",
                            "data-feed-clickable-div": !0,
                            children: j
                        })
                    }), (0, s.jsx)(c.Y, {
                        postFrag: g,
                        source: "Feed"
                    }), !a && (0, s.jsx)(n.QD, {
                        postFrag: g,
                        commentButtonAction: t,
                        sourceLocation: h,
                        resourceOwnerTwitterHandle: null,
                        iconSize: 18,
                        hideShareButton: !1,
                        hideRepostButton: !1,
                        source: v,
                        repostSource: x
                    }), p && (0, s.jsx)(d.J, {
                        postId: b,
                        previewCommentFrag: p,
                        postWebappUri: C,
                        postCommentCount: S,
                        showCommentInput: f
                    })]
                })
            }
        },
        1624: function(e, t, a) {
            "use strict";
            a.d(t, {
                i: function() {
                    return FeedPlaylistPost
                }
            });
            var s = a(16356);
            a(97352), a(96960);
            var n = a(31981),
                l = a(77134),
                r = a(64638),
                i = a(45378),
                o = a(3928),
                d = a(25828),
                c = a(13834);

            function FeedPlaylistPost(e) {
                var t;
                let {
                    commentButtonAction: a,
                    hideActions: u,
                    playlistPostFrag: m,
                    readMoreEnabled: p,
                    previewCommentFrag: x,
                    repostSource: h,
                    shareButtonSource: f,
                    showCommentInput: v,
                    source: g
                } = e, b = (0, o.S3c)(o.jyR, m), {
                    id: y,
                    webappUri: C,
                    commentCount: S,
                    optionalShelf: j,
                    content: w,
                    lexicalContent: T
                } = b, N = (0, s.jsx)("div", {
                    className: "font-base text-base-m text-base700 md:text-base-l",
                    "data-feed-clickable-div": !0,
                    children: w
                }), I = (0, d.F)(T);
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-feed-clickable-div": !0,
                    children: [(0, s.jsx)(l.y, {
                        maxHeightClassName: "max-h-[140px] md:max-h-[152px]",
                        enabled: p,
                        children: I ? (0, s.jsx)(r.X, {
                            state: I,
                            className: "font-base text-base-m md:text-base-l"
                        }) : N
                    }), b.optionalShelf ? (0, s.jsx)(i.M, {
                        playlistFrag: b.optionalShelf,
                        source: "Feed Playlist Post",
                        onRemoveResource: void 0
                    }) : (0, s.jsx)("div", {
                        className: "flex h-[100px] w-full items-center justify-center rounded-lg bg-base50 font-base text-base-m text-base500 md:h-[152px] md:text-base-l",
                        children: "This playlist has been deleted"
                    }), !u && (0, s.jsx)(n.QD, {
                        postFrag: b,
                        commentButtonAction: a,
                        sourceLocation: f,
                        resourceOwnerTwitterHandle: null !== (t = null == j ? void 0 : j.user.twitterHandle) && void 0 !== t ? t : null,
                        iconSize: 18,
                        hideShareButton: !1,
                        hideRepostButton: !1,
                        source: g,
                        repostSource: h
                    }), x && (0, s.jsx)(c.J, {
                        postId: y,
                        previewCommentFrag: x,
                        postWebappUri: C,
                        postCommentCount: S,
                        showCommentInput: v
                    })]
                })
            }
        },
        29442: function(e, t, a) {
            "use strict";
            a.d(t, {
                H: function() {
                    return FeedReleasePost
                }
            });
            var s = a(16356);
            a(97352), a(96960);
            var n = a(49395),
                l = a(31981),
                r = a(77134),
                i = a(64638),
                o = a(89222),
                d = a(89012),
                c = a(3928),
                u = a(25828),
                m = a(13834);

            function FeedReleasePost(e) {
                var t;
                let {
                    collectButtonSource: a,
                    commentButtonAction: p,
                    hideActions: x,
                    readMoreEnabled: h,
                    releasePostFrag: f,
                    previewCommentFrag: v,
                    repostSource: g,
                    shareButtonSource: b,
                    showCommentInput: y,
                    source: C
                } = e, S = (0, c.S3c)(c.z4A, f), {
                    id: j,
                    webappUri: w,
                    commentCount: T,
                    lexicalContent: N,
                    content: I,
                    creator: P,
                    optionalRelease: R
                } = S, E = (0, n.Tr)({
                    referralType: d.MintReferralType.Post,
                    referralData: {
                        postId: j,
                        postUserAddress: P.publicAddress
                    }
                }), A = (0, u.F)(N);
                return (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    "data-feed-clickable-div": !0,
                    children: [(0, s.jsx)(r.y, {
                        maxHeightClassName: "max-h-[140px] md:max-h-[152px]",
                        enabled: h,
                        children: A ? (0, s.jsx)(i.X, {
                            state: A,
                            className: "font-base text-base-m md:text-base-l"
                        }) : (0, s.jsx)("div", {
                            className: "font-base text-base-m text-base700 md:text-base-l",
                            "data-feed-clickable-div": !0,
                            children: I
                        })
                    }), R ? (0, s.jsx)(o.a, {
                        mintReferral: E,
                        collectButtonSource: a,
                        releaseFrag: R,
                        source: "Feed Release Post",
                        customSubTitle: null,
                        variant: "post"
                    }) : (0, s.jsx)("div", {
                        className: "flex h-[100px] w-full items-center justify-center rounded-lg bg-base50 font-base text-base-m text-base500 md:h-[152px] md:text-base-l",
                        children: "This sound has been removed"
                    }), !x && (0, s.jsx)(l.QD, {
                        postFrag: S,
                        commentButtonAction: p,
                        sourceLocation: b,
                        resourceOwnerTwitterHandle: null !== (t = null == R ? void 0 : R.artist.user.twitterHandle) && void 0 !== t ? t : null,
                        iconSize: 18,
                        hideShareButton: !1,
                        hideRepostButton: !1,
                        source: C,
                        repostSource: g
                    }), v && (0, s.jsx)(m.J, {
                        postId: j,
                        previewCommentFrag: v,
                        postWebappUri: w,
                        postCommentCount: T,
                        showCommentInput: y
                    })]
                })
            }
        },
        77134: function(e, t, a) {
            "use strict";
            a.d(t, {
                y: function() {
                    return ReadMore
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(44361),
                r = a(69598),
                i = a(79320);

            function ReadMore(e) {
                let {
                    maxHeightClassName: t,
                    children: a,
                    enabled: o = !0,
                    className: d,
                    buttonClassName: c
                } = e, u = (0, n.useRef)(null), m = (0, n.useRef)(null), [p, x] = (0, n.useState)(!1), [h, f] = (0, n.useState)(0), [v, g] = (0, n.useState)(!1), {
                    width: b
                } = (0, i.i)();
                return (0, n.useEffect)(() => {
                    o && u.current && m.current && u.current.offsetHeight > m.current.offsetHeight && (x(!0), f(u.current.offsetHeight))
                }, [o, b]), (0, s.jsxs)("div", {
                    className: "relative",
                    children: [(0, s.jsx)("div", {
                        className: (0, l.m)("overflow-hidden whitespace-pre-wrap break-normal break-words transition-[max-height] duration-200 ease-in-out", o && !v ? t : ""),
                        style: o && v ? {
                            maxHeight: h
                        } : {},
                        ref: m,
                        children: (0, s.jsx)("div", {
                            ref: u,
                            children: a
                        })
                    }), p && !v && (0, s.jsx)("div", {
                        className: (0, l.m)("read-more-overlay absolute bottom-0 left-0 right-0 flex h-10 items-end justify-start bg-gradient-double-t from-white from-40%", d),
                        "data-feed-clickable-div": !0,
                        children: (0, s.jsx)(r.z, {
                            label: "Read more",
                            variant: "text",
                            onClick: e => {
                                e.stopPropagation(), g(!0)
                            },
                            size: "S",
                            className: (0, l.m)("read-more-button -mx-1 h-auto px-1 py-0 font-base text-base-m font-medium text-base800", c)
                        })
                    })]
                })
            }
        },
        10060: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return UpvoteButton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(44361),
                r = a(77760),
                i = a(11795),
                o = a(3928);

            function UpvoteButton(e) {
                let {
                    className: t,
                    disabled: a,
                    onClick: d,
                    upvoteCount: c,
                    voteStatus: u,
                    iconSize: m
                } = e, p = u === o.i_t.Upvoted, x = p ? "text-fuchsia500" : "text-base900", h = p ? i.$w : r.$w;
                return (0, s.jsxs)("button", {
                    className: (0, l.m)("flex items-center gap-2 rounded-md px-2 py-1 text-base-m hover:bg-neutral100 active:scale-95", t),
                    onClick: d,
                    disabled: a,
                    children: [(0, s.jsx)(n.G, {
                        icon: h,
                        className: x,
                        fontSize: m
                    }), null != c && (0, s.jsx)("span", {
                        className: (0, l.m)("font-base font-medium", x),
                        children: c
                    })]
                })
            }
        },
        94198: function(e, t, a) {
            "use strict";
            a.d(t, {
                S: function() {
                    return GiftingAddressInput
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(98562),
                i = a(92747),
                o = a(96301),
                d = a(60265),
                c = a(81845);
            let GiftingAddressInput = e => {
                var t;
                let {
                    inputDisabled: a = !1,
                    setGiftAddress: u,
                    setOpen: m,
                    eligibleQuantity: p,
                    inputTouched: x,
                    setInputTouched: h,
                    inputValue: f,
                    setInputValue: v
                } = e, {
                    authUserAddress: g
                } = (0, o.aC)(), {
                    data: b,
                    isLoading: y
                } = (0, c.f)({
                    input: f
                }), {
                    gift_to: C
                } = (0, d.UO)(), S = n.useMemo(() => b && x ? "address" !== b.type ? (u(null), {
                    type: b.type,
                    value: function(e) {
                        let {
                            type: t
                        } = e;
                        switch (t) {
                            case "address":
                            default:
                                return null;
                            case "invalid-address":
                                return "Please enter a valid address";
                            case "invalid-ens":
                                return "Please enter a valid ENS name";
                            case "empty-input":
                                return "Please enter an address or ENS name"
                        }
                    }({
                        type: b.type
                    })
                }) : b.value === g ? {
                    type: "auth-address",
                    value: "The address you entered is you own address."
                } : (u(b.value), b) : null, [g, b, x, u]), j = p < 1, onInputChange = e => {
                    v(e), h(!0)
                }, w = n.useMemo(() => (!!S && "address" !== S.type || j) && x, [S, j, x]);
                return n.useEffect(() => {
                    if (j) {
                        d.M8.gift_to = null;
                        return
                    }
                    if (S && "address" === S.type) {
                        d.M8.gift_to = null == S ? void 0 : S.value;
                        return
                    }
                }, [j, S]), n.useEffect(() => {
                    C && (null == m || m(!0), u(C), x || v(C))
                }, [C, x, u, v, m]), n.useEffect(() => {
                    S && x && ("address" === S.type ? d.M8.gift_to = S.value : d.M8.gift_to = null)
                }, [x, S]), (0, s.jsxs)("div", {
                    children: [(0, s.jsxs)(i.SP, {
                        error: w,
                        children: [(0, s.jsx)(i.II, {
                            type: "text",
                            value: f || "",
                            placeholder: "e.g. 0xB0A3... or wallet.eth",
                            "aria-label": "wallet address input field",
                            autoComplete: "off",
                            disabled: a,
                            onChange: e => {
                                onInputChange(e.target.value)
                            },
                            onBlur: e => {
                                onInputChange(e.target.value), x && "" === e.target.value && (null == m || m(!1), h(!1), v(null), u(null))
                            }
                        }), x && (0, s.jsx)(i.SP.Error, {
                            errorMessage: j ? "This address has already reached the maximum number of editions allowed per wallet." : null !== (t = null == S ? void 0 : S.value) && void 0 !== t ? t : null
                        })]
                    }), !y && !w && !!C && (0, s.jsxs)("div", {
                        className: "mt-1 flex w-full items-start gap-2",
                        children: [(0, s.jsx)(l.G, {
                            icon: r.e7,
                            className: "text-warning400",
                            fontSize: 14
                        }), (0, s.jsx)("p", {
                            className: "font-base text-base-s text-base500",
                            children: "Items sent to the wrong address cannot be recovered. Be sure this is the correct wallet address."
                        })]
                    })]
                })
            }
        },
        70069: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return MultiLineLexicalInput
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(7348),
                r = a(87650),
                i = a(86772),
                o = a(76886),
                d = a(12386),
                c = a(84780),
                u = a(25190),
                m = a.n(u),
                p = a(45456),
                x = a(80948),
                h = a(13741),
                f = a(38233),
                v = a(44361),
                g = a(1936),
                b = a(92596),
                y = a(29235),
                C = a(80002),
                S = a(96082),
                j = a(73711),
                w = a(40196);

            function onError(e) {
                j.k.error({
                    err: e
                }, "LexicalInput Error")
            }

            function MultiLineLexicalInput(e) {
                let {
                    matchers: t,
                    spotifyLinksEnabled: a
                } = (0, w.D)(), {
                    autoFocus: u,
                    className: j,
                    disabled: T,
                    id: N,
                    onChange: I,
                    initialMentionData: P,
                    placeholder: R,
                    placeholderClassName: E,
                    characterCount: A,
                    menuAnchorClassName: k
                } = e, M = (0, n.useMemo)(() => ({
                    namespace: "MentionableInput",
                    onError,
                    nodes: [...(0, f.bH)(g.A), f.dP, l.AutoLinkNode]
                }), []);
                return (0, s.jsx)(d.LexicalComposer, {
                    initialConfig: M,
                    children: (0, s.jsxs)(C.n, {
                        setFocus: null,
                        className: (0, v.m)("relative cursor-text overflow-hidden rounded-md bg-neutral100 p-2 outline-black focus-within:outline focus-within:outline-2", j),
                        children: [(0, s.jsxs)("div", {
                            className: (0, v.m)("scrollbar-light h-full w-full overflow-y-auto", a && "[&_a]:pointer-events-none [&_a]:text-fuchsia500"),
                            children: [(0, s.jsx)(h.PlainTextPlugin, {
                                contentEditable: (0, s.jsx)(c.ContentEditable, {
                                    id: N,
                                    className: (0, v.m)("outline-none", "pb-8")
                                }),
                                placeholder: (0, s.jsx)("div", {
                                    className: (0, v.m)("action pointer-events-none absolute left-0 right-0 top-0 line-clamp-1 select-none p-2 text-neutral400", E),
                                    children: R
                                }),
                                ErrorBoundary: m()
                            }), (0, s.jsx)(p.HistoryPlugin, {}), I && (0, s.jsx)(x.OnChangePlugin, {
                                onChange: I
                            }), (0, s.jsx)(f.Jk, {}), (0, s.jsx)(o.ClearEditorPlugin, {}), (0, s.jsx)(y.o, {
                                disabled: T
                            }), a && (0, s.jsx)(i.AutoLinkPlugin, {
                                matchers: t
                            }), (0, s.jsx)(S.N, {
                                initialMentionData: P,
                                menuAnchorClassName: k
                            }), u && (0, s.jsx)(r.AutoFocusPlugin, {})]
                        }), !!A && A.show && (0, s.jsx)(b.n, {
                            maxLength: A.maxLength,
                            showCount: !a,
                            circleSize: 16
                        })]
                    })
                })
            }
        },
        18389: function(e, t, a) {
            "use strict";
            a.d(t, {
                i: function() {
                    return useResourceInPost
                }
            });
            var s = a(97352),
                n = a(78608),
                l = a(19791),
                r = a(82443),
                i = a(25828),
                o = a(85846),
                d = a(12849),
                c = a(36331);

            function useResourceInPost(e) {
                let {
                    config: t,
                    isLoading: a
                } = (0, n.useConfig)(o.Zh.POSTING_URL_WHITELIST), u = t ? t.getValue(r.Gv) : null, m = (0, i.F)(e), p = d.Z.generateTextForNode(null == m ? void 0 : m.root), x = (0, s.useMemo)(() => {
                    var e;
                    let t = [...p.matchAll(RegExp(o.Wh, "g"))],
                        s = a ? [] : null !== (e = null == u ? void 0 : u.whitelist) && void 0 !== e ? e : [];
                    if (null != t) return (0, l.CC)(t, e => (0, c.i)(e[0], s) && e[0])
                }, [p, null == u ? void 0 : u.whitelist, a]), h = (0, s.useMemo)(() => {
                    if (x) return function(e) {
                        let t;
                        try {
                            t = new URL(e)
                        } catch (e) {
                            return
                        }
                        if ("open.spotify.com" === t.hostname) {
                            let e = function(e) {
                                let [t, a, s, n] = e.pathname.split("/");
                                return "playlist" === a || "playlist" === s ? `spotify:playlist:${null!=n?n:s}` : "album" === a || "album" === s ? `spotify:album:${null!=n?n:s}` : "track" === a || "track" === s ? `spotify:track:${null!=n?n:s}` : "episode" === a || "episode" === s ? `spotify:episode:${null!=n?n:s}` : "artist" === a || "artist" === s ? `spotify:artist:${null!=n?n:s}` : "show" === a || "show" === s ? `spotify:show:${null!=n?n:s}` : null
                            }(t);
                            if (!e) return;
                            return {
                                uri: e,
                                source: "spotify"
                            }
                        }
                    }(x)
                }, [x]), f = (0, s.useMemo)(() => {
                    if (!h && x) return function(e) {
                        let t = e.toLowerCase().match(/sound\.xyz\/([^\/]+)\/([^\/?#]+)/i);
                        if (!t) return null;
                        let a = t[1],
                            s = t[2];
                        return a && s && "playlist" !== a ? {
                            soundHandle: a,
                            releaseSlug: s
                        } : null
                    }(x)
                }, [h, x]), v = (0, s.useMemo)(() => {
                    if (!h && x) return function(e) {
                        let t = e.toLowerCase().match(/sound\.xyz\/playlist\/([^\/?#]+)/i);
                        if (!t || !t[1]) return null;
                        let a = t[1];
                        return {
                            playlistId: a
                        }
                    }(x)
                }, [h, x]);
                return {
                    link: x,
                    loading: a,
                    embed: h,
                    release: f,
                    playlist: v
                }
            }
        },
        37925: function(e, t, a) {
            "use strict";
            a.d(t, {
                dJ: function() {
                    return u
                },
                oj: function() {
                    return m
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(49542),
                i = a(15876),
                o = a(36732),
                d = a(21922);
            a(10381);
            var c = a(23740);
            let u = n.forwardRef(function(e, t) {
                    let {
                        liked: a,
                        disabled: n,
                        variant: c = "primary",
                        onClick: u,
                        size: m = 32,
                        iconSize: p = 20,
                        className: x
                    } = e;
                    return (0, s.jsx)(d.h, {
                        variant: c,
                        className: (0, r.default)("like-icon", x, a && "liked"),
                        disabled: n,
                        ref: t,
                        onClick: e => {
                            e.stopPropagation(), u()
                        },
                        size: m,
                        iconSize: p,
                        animate: !n,
                        icon: (0, s.jsx)(l.G, {
                            icon: a ? o.m6 : i.m6,
                            color: a ? "#EB5CBB" : void 0,
                            size: "lg"
                        })
                    })
                }),
                m = n.forwardRef(function(e, t) {
                    let {
                        isLiked: a,
                        onClick: n
                    } = (0, c.b)({
                        id: e.releaseId,
                        onUnlikeRelease: null == e ? void 0 : e.onUnlikeRelease,
                        source: e.source
                    });
                    return (0, s.jsx)(u, {
                        ref: t,
                        onClick: n,
                        liked: a,
                        disabled: e.disabled,
                        variant: e.variant,
                        className: e.className,
                        size: e.size,
                        iconSize: e.iconSize
                    })
                })
        },
        10381: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return useLikePlaylist
                }
            });
            var s = a(71992),
                n = a.n(s);
            a(96960);
            var l = a(96301),
                r = a(21956),
                i = a(75747),
                o = a(36750),
                d = a(3928),
                c = a(14034),
                u = a(8776),
                m = a(95390),
                p = a(54070);
            (0, o.c)({
                trigger: [d._jh, d.Vlk],
                refetch: [d.NBT, d.$3Y]
            });
            let useLikePlaylist = e => {
                let {
                    id: t,
                    source: a
                } = e, {
                    authUser: s
                } = (0, l.aC)(), {
                    openToast: o
                } = i.ToastContext.useContainer(), {
                    refetch: x,
                    isLiked: h,
                    setLiked: f
                } = (0, p.R)({
                    id: t
                }), {
                    mutateAsync: v
                } = (0, d.Dbo)(d._jh, {
                    onSuccess() {
                        x()
                    }
                }), {
                    mutateAsync: g
                } = (0, d.Dbo)(d.Vlk, {
                    onSuccess() {
                        x()
                    }
                }), onClick = async () => {
                    if (!(null == s ? void 0 : s.id)) {
                        (0, r.SR)();
                        return
                    }
                    h ? (f(!1), (0, c.uH)({
                        event: "Unlike Clicked",
                        properties: {
                            sourceComponent: a,
                            associationId: t,
                            associationType: "Playlist"
                        }
                    }), await g({
                        id: t
                    }, {
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            if ((null == t ? void 0 : t.unlikeShelf.__typename) !== "MutationUnlikeShelfSuccess") {
                                f(!0), o({
                                    text: (null == t ? void 0 : t.unlikeShelf.message) || "Something went wrong while unliking this Playlist.",
                                    variant: "error"
                                });
                                return
                            }
                            o({
                                text: "You unliked this Playlist.",
                                variant: "success"
                            })
                        }
                    })) : (f(!0), (0, c.uH)({
                        event: "Like Clicked",
                        properties: {
                            sourceComponent: a,
                            associationId: t,
                            associationType: "Playlist"
                        }
                    }), await v({
                        id: t
                    }, {
                        onSuccess: e => {
                            let {
                                data: t
                            } = e;
                            if ((null == t ? void 0 : t.likeShelf.__typename) !== "MutationLikeShelfSuccess") return f(!1), o({
                                text: (null == t ? void 0 : t.likeShelf.message) || "Something went wrong while liking this Playlist.",
                                variant: "error"
                            });
                            o({
                                text: "You liked this Playlist.",
                                ctaText: "View your Liked Playlists.",
                                ctaOnClick: () => {
                                    n().push((0, m.OU)(s.webappUri)), (0, u.in)(!0)
                                },
                                variant: "success"
                            })
                        }
                    }))
                };
                return {
                    isLiked: h,
                    onClick
                }
            }
        },
        23740: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return useLikeRelease
                }
            });
            var s = a(71992),
                n = a.n(s);
            a(96960);
            var l = a(96301),
                r = a(21956),
                i = a(75747),
                o = a(3928),
                d = a(14034),
                c = a(8776),
                u = a(95390),
                m = a(54070);
            let useLikeRelease = e => {
                let {
                    id: t,
                    onUnlikeRelease: a,
                    source: s
                } = e, {
                    authUser: p
                } = (0, l.aC)(), {
                    openToast: x
                } = i.ToastContext.useContainer(), {
                    refetch: h,
                    setLiked: f,
                    isLiked: v
                } = (0, m.R)({
                    id: t
                }), {
                    mutateAsync: g
                } = (0, o.Dbo)(o.sEH, {}), {
                    mutateAsync: b
                } = (0, o.Dbo)(o.ZaY, {}), onClick = async () => {
                    if (t) {
                        if (!(null == p ? void 0 : p.id)) {
                            (0, r.SR)();
                            return
                        }
                        v ? (f(!1), (0, d.uH)({
                            event: "Unlike Clicked",
                            properties: {
                                associationId: t,
                                associationType: "Release",
                                sourceComponent: s
                            }
                        }), b({
                            id: t
                        }, {
                            onSuccess: e => {
                                let {
                                    data: s
                                } = e;
                                h(), (null == s ? void 0 : s.unlikeRelease.__typename) === "MutationUnlikeReleaseSuccess" ? (null == a || a(t), x({
                                    text: "You unliked this Sound.",
                                    variant: "success"
                                })) : (f(!0), x({
                                    text: (null == s ? void 0 : s.unlikeRelease.message) || "Something went wrong while unliking this Sound.",
                                    variant: "error"
                                }))
                            }
                        })) : (f(!0), (0, d.uH)({
                            event: "Like Clicked",
                            properties: {
                                associationId: t,
                                associationType: "Release",
                                sourceComponent: s
                            }
                        }), g({
                            id: t
                        }, {
                            onSuccess: e => {
                                let {
                                    data: t
                                } = e;
                                if (h(), (null == t ? void 0 : t.likeRelease.__typename) !== "MutationLikeReleaseSuccess") {
                                    f(!1), x({
                                        text: (null == t ? void 0 : t.likeRelease.message) || "Something went wrong while liking the song.",
                                        variant: "error"
                                    });
                                    return
                                }
                                x({
                                    text: "You liked this Sound.",
                                    ctaText: "View your Liked Sounds.",
                                    ctaOnClick: () => {
                                        n().push((0, u.OU)(p.webappUri, {
                                            subpath: "/liked-sounds"
                                        })), (0, c.in)(!0)
                                    },
                                    variant: "success"
                                })
                            }
                        }))
                    }
                };
                return {
                    isLiked: v,
                    onClick
                }
            }
        },
        54070: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return useLikeStatus
                }
            });
            var s = a(97352),
                n = a(28839),
                l = a(55344);
            a(96960);
            var r = a(96301),
                i = a(3928),
                o = a(42529),
                d = a(26475);
            let {
                useBatchedKey: c
            } = (0, d.y)({
                chunkLimit: 50
            }), useLikeStatus = e => {
                let {
                    id: t
                } = e, {
                    authUser: a
                } = (0, r.aC)(), d = null == a ? void 0 : a.id, u = c({
                    key: t
                }), m = (0, s.useMemo)(() => !!u && {
                    input: u.map(e => ({
                        id: e
                    }))
                }, [u]), {
                    refetch: p,
                    data: x,
                    setQueryData: h
                } = (0, i.aM2)(i.XcJ, {
                    variables: !!d && m,
                    filterQueryKey: {
                        authUserId: d
                    },
                    keepPreviousData: !0,
                    staleTime: (0, l.Z)("15 seconds")
                }), f = (0, o.R)(e => {
                    t && h(a => a ? (0, n.ZP)(a, a => {
                        for (let s of a.data.likeStatuses)
                            if (s.entityId === t) {
                                s.isLiked = e;
                                return
                            }
                        a.data.likeStatuses.push({
                            entityId: t,
                            isLiked: e
                        })
                    }) : {
                        data: {
                            likeStatuses: [{
                                entityId: t,
                                isLiked: e
                            }]
                        }
                    })
                }), v = (0, s.useMemo)(() => {
                    var e, a;
                    return !!t && null !== (a = null == x ? void 0 : null === (e = x.data.likeStatuses.find(e => e.entityId === t)) || void 0 === e ? void 0 : e.isLiked) && void 0 !== a && a
                }, [x, t]);
                return {
                    refetch: p,
                    isLiked: v,
                    setLiked: f
                }
            }
        },
        98910: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return LoadingBars
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(44361);
            let LoadingBar = e => {
                    let {
                        index: t,
                        className: a
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, n.m)("h-1/2 w-[10%] rounded-[6px] bg-black", a, 0 === t && "animate-[loadingBar1_1.25s_infinite_linear_alternate]", (1 === t || 3 === t) && "animate-[loadingBar24_1.25s_infinite_linear_alternate]", 2 === t && "animate-[loadingBar3_1.25s_infinite_linear_alternate]", 4 === t && "animate-[loadingBar5_1.25s_infinite_linear_alternate]")
                    })
                },
                LoadingBars = e => {
                    let {
                        height: t,
                        className: a,
                        barClassName: l
                    } = e;
                    return (0, s.jsx)("div", {
                        style: t ? {
                            height: t
                        } : void 0,
                        className: (0, n.m)("flex aspect-square h-[50px] items-center justify-between", a),
                        children: Array.from({
                            length: 5
                        }).map((e, t) => (0, s.jsx)(LoadingBar, {
                            index: t,
                            className: null != l ? l : ""
                        }, t))
                    })
                }
        },
        15574: function(e, t, a) {
            "use strict";
            a.d(t, {
                IV: function() {
                    return o
                },
                O1: function() {
                    return optimisticSetPlaylistOrderedsIds
                },
                Q$: function() {
                    return setPlaylistScrollIndex
                },
                ar: function() {
                    return usePlaylistState
                },
                q7: function() {
                    return setActiveMintableReleaseIndex
                },
                rQ: function() {
                    return setPlaylistOrderedsIds
                },
                t4: function() {
                    return c
                },
                yb: function() {
                    return d
                }
            });
            var s = a(31265),
                n = a(63558),
                l = a(14906),
                r = a(36750),
                i = a(3928);
            let o = 15,
                d = "-45% -5px",
                c = {
                    SOUNDS: "sounds",
                    ACTIVITY: "activity"
                };
            (0, l.ZN)(c), (0, r.c)({
                trigger: [i.JNr, i.xPp, i.tML],
                refetch: [i.kMz, i.$3Y]
            });
            let u = (0, s.sj)({}),
                m = {
                    orderedReleaseIds: {},
                    orderedTrackIds: {},
                    activeMintableReleaseIndex: null
                };

            function usePlaylistState(e) {
                let {
                    playlistId: t
                } = e;
                return (0, n.R)(u)[t] || m
            }

            function setPlaylistOrderedsIds(e) {
                let {
                    playlistId: t,
                    releaseIds: a,
                    trackIds: s,
                    orderType: n
                } = e;
                u[t] || (u[t] = {
                    orderedReleaseIds: {},
                    orderedTrackIds: {},
                    activeMintableReleaseIndex: null
                });
                let l = u[t];
                l && (a && (l.orderedReleaseIds[n] = a), s && (l.orderedTrackIds[n] = s))
            }

            function optimisticSetPlaylistOrderedsIds(e) {
                let {
                    playlistId: t,
                    releaseIds: a,
                    orderType: s
                } = e;
                u[t] || (u[t] = {
                    orderedReleaseIds: {},
                    orderedTrackIds: {},
                    activeMintableReleaseIndex: null
                });
                let n = u[t];
                if (!n) return;
                let l = n.orderedReleaseIds[s];
                return n.orderedReleaseIds[s] = a, {
                    rollback() {
                        n.orderedReleaseIds[s] = l
                    }
                }
            }

            function setPlaylistScrollIndex(e) {
                let {
                    playlistId: t,
                    scrollIndex: a
                } = e;
                u[t] || (u[t] = {
                    orderedReleaseIds: {},
                    orderedTrackIds: {},
                    activeMintableReleaseIndex: null
                });
                let s = u[t];
                s && (s.scrollIndex = a)
            }

            function setActiveMintableReleaseIndex(e) {
                let {
                    playlistId: t,
                    index: a
                } = e;
                u[t] || (u[t] = {
                    orderedReleaseIds: {},
                    orderedTrackIds: {},
                    activeMintableReleaseIndex: null
                });
                let s = u[t];
                s && (s.activeMintableReleaseIndex = a)
            }
        },
        45378: function(e, t, a) {
            "use strict";
            a.d(t, {
                M: function() {
                    return PlaylistBarEmbed
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(44361),
                i = a(51247);
            a(96960);
            var o = a(4967),
                d = a(51520),
                c = a(18173),
                u = a(97946),
                m = a(47544),
                p = a(96301),
                x = a(3928),
                h = a(34813),
                f = a(14461),
                v = a(85846),
                g = a(95390),
                b = a(15574);

            function PlaylistBarEmbed(e) {
                let {
                    playlistFrag: t,
                    source: a,
                    onRemoveResource: l
                } = e, {
                    authUser: r
                } = (0, p.aC)(), [i, d] = (0, n.useState)(!1), u = (0, x.S3c)(x.HoF, t), {
                    orderedTrackIds: m
                } = (0, b.ar)({
                    playlistId: u.id
                }), {
                    id: h,
                    type: v,
                    user: g,
                    releaseCount: y,
                    webappUri: C,
                    previewReleases: S
                } = u, j = (null == r ? void 0 : r.id) === g.id, w = (0, o.IP)(u) || c.rH, {
                    isPlaying: T,
                    onPlayButtonClick: N,
                    loading: I
                } = (0, f.T)({
                    playlistId: h
                }), P = n.useMemo(() => S.slice(0, 3).map(e => e.release), [S]), R = {
                    disablePlay: 0 === y,
                    dominantBackgroundColor: w,
                    isDropdownOpen: i,
                    isOwner: j,
                    isPlaying: T,
                    loading: I,
                    onPlayButtonClick: N,
                    playlist: u,
                    playlistUrl: C,
                    setIsDropdownOpen: d,
                    source: a,
                    trackIds: m.index || [],
                    type: v,
                    previewReleases: P,
                    onRemoveResource: l
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(Desktop, { ...R
                    }), (0, s.jsx)(Mobile, { ...R
                    })]
                })
            }

            function Desktop(e) {
                let {
                    disablePlay: t,
                    dominantBackgroundColor: a,
                    isDropdownOpen: n,
                    isOwner: p,
                    isPlaying: x,
                    loading: f,
                    onPlayButtonClick: v,
                    playlist: b,
                    playlistUrl: y,
                    setIsDropdownOpen: C,
                    source: S,
                    trackIds: j,
                    type: w,
                    previewReleases: T,
                    onRemoveResource: N
                } = e, [I, P] = (0, h.X)();
                return (0, s.jsx)("div", {
                    className: "hidden flex-col gap-2 md:flex",
                    ...P,
                    children: (0, s.jsxs)(c.d1, {
                        dominantBackgroundColor: a,
                        variant: "playlist-embed",
                        children: ["Composer" !== S && (0, s.jsx)("div", {
                            className: (0, r.m)("absolute right-4 top-4 z-above2 flex text-white", I || n ? "flex" : "hidden"),
                            children: (0, s.jsx)(d.a, {
                                isDropdownOpen: n,
                                setIsDropdownOpen: C,
                                playlist: b,
                                trackIds: j,
                                playlistLink: y,
                                isOwner: p,
                                playlistType: w,
                                variant: "inverted",
                                triggerProps: {},
                                source: S
                            })
                        }), (0, s.jsxs)("div", {
                            className: "relative flex flex-1 items-stretch overflow-hidden",
                            children: [(0, s.jsx)(u.s, {
                                className: "z-above1 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:content-['']",
                                pathnameUri: (0, g.OU)(b.webappUri),
                                type: "internal"
                            }), (0, s.jsx)("div", {
                                className: "relative z-above1 mr-4 aspect-square w-[60px] flex-00auto overflow-hidden rounded-md md:w-[128px]",
                                children: (0, s.jsx)(o.Zs, {
                                    playlist: b,
                                    maxSize: 128,
                                    priority: !1
                                })
                            }), (0, s.jsxs)("div", {
                                className: "relative flex w-full flex-1 flex-col gap-3 overflow-hidden",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-1 pt-1",
                                    children: [(0, s.jsx)(c.J6, {
                                        name: b.user.username,
                                        webappUri: b.user.webappUri,
                                        userId: b.user.id
                                    }), (0, s.jsx)(c.DX, {
                                        title: b.name,
                                        webappUri: (0, g.OU)(b.webappUri),
                                        isPlaying: !1
                                    }), (0, s.jsx)(c.PO, {
                                        customSubTitle: null,
                                        variant: "playlist",
                                        releaseCount: b.releaseCount,
                                        numReferralPurchases: b.numReferralPurchases,
                                        playlistId: b.id
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "relative flex w-full items-end justify-between gap-3",
                                    children: [(0, s.jsx)(PreviewReleases, {
                                        previewReleases: T,
                                        playlistId: b.id
                                    }), (0, s.jsx)(m.J, {
                                        color: "white",
                                        playing: x,
                                        onClick: v,
                                        size: "xs",
                                        loading: f,
                                        currentListeningParty: null,
                                        disabled: t,
                                        rounded: !0,
                                        contentClassname: "z-above2 items-end"
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-0 left-0 h-full w-full",
                            style: {
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, ${a} 100%)`,
                                borderRadius: "inherit"
                            }
                        }), N && "Composer" == S && (0, s.jsx)("button", {
                            className: "align-center absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black",
                            onClick: N,
                            children: (0, s.jsx)(l.G, {
                                icon: i.NB,
                                color: "white",
                                size: "sm"
                            })
                        })]
                    })
                })
            }

            function Mobile(e) {
                let {
                    disablePlay: t,
                    dominantBackgroundColor: a,
                    isDropdownOpen: n,
                    isOwner: r,
                    isPlaying: p,
                    loading: x,
                    onPlayButtonClick: h,
                    playlist: f,
                    playlistUrl: v,
                    setIsDropdownOpen: b,
                    source: y,
                    trackIds: C,
                    type: S,
                    previewReleases: j,
                    onRemoveResource: w
                } = e;
                return (0, s.jsx)("div", {
                    className: "flex-col gap-2 md:hidden",
                    children: (0, s.jsxs)(c.d1, {
                        dominantBackgroundColor: a,
                        variant: "playlist-embed",
                        children: ["Composer" !== y && (0, s.jsx)("div", {
                            className: "absolute right-4 top-4 z-above2 flex text-white",
                            children: (0, s.jsx)(d.a, {
                                isDropdownOpen: n,
                                setIsDropdownOpen: b,
                                playlist: f,
                                trackIds: C,
                                playlistLink: v,
                                isOwner: r,
                                playlistType: S,
                                variant: "inverted",
                                triggerProps: {},
                                source: y
                            })
                        }), (0, s.jsxs)("div", {
                            className: "relative flex h-full flex-1 flex-col justify-between gap-3 overflow-hidden",
                            children: [(0, s.jsxs)("div", {
                                className: "flex w-full min-w-0 items-center",
                                children: [(0, s.jsx)(u.s, {
                                    className: "z-above1 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:content-['']",
                                    pathnameUri: (0, g.OU)(f.webappUri),
                                    type: "internal"
                                }), (0, s.jsx)("div", {
                                    className: "relative z-above1 mr-3 aspect-square w-[60px] flex-00auto overflow-hidden rounded-md",
                                    children: (0, s.jsx)(o.Zs, {
                                        playlist: f,
                                        maxSize: 60,
                                        priority: !1
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "flex min-w-0 flex-col gap-1",
                                    children: [(0, s.jsx)(c.J6, {
                                        name: f.user.username,
                                        webappUri: f.user.webappUri,
                                        userId: f.user.id
                                    }), (0, s.jsx)(c.DX, {
                                        title: f.name,
                                        webappUri: (0, g.OU)(f.webappUri),
                                        isPlaying: !1
                                    }), (0, s.jsx)(c.PO, {
                                        customSubTitle: null,
                                        variant: "playlist",
                                        releaseCount: f.releaseCount,
                                        numReferralPurchases: f.numReferralPurchases,
                                        playlistId: f.id
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full items-end justify-between gap-3",
                                children: [(0, s.jsx)(PreviewReleases, {
                                    previewReleases: j,
                                    playlistId: f.id
                                }), (0, s.jsx)(m.J, {
                                    color: "white",
                                    playing: p,
                                    onClick: h,
                                    size: "xs",
                                    loading: x,
                                    currentListeningParty: null,
                                    disabled: t,
                                    rounded: !0,
                                    contentClassname: "z-above2"
                                })]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "absolute bottom-0 left-0 h-full w-full",
                            style: {
                                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, ${a} 100%)`,
                                borderRadius: "inherit"
                            }
                        }), w && "Composer" == y && (0, s.jsx)("button", {
                            className: "align-center absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black",
                            onClick: w,
                            children: (0, s.jsx)(l.G, {
                                icon: i.NB,
                                color: "white",
                                size: "sm"
                            })
                        })]
                    })
                })
            }

            function PreviewReleases(e) {
                let {
                    previewReleases: t,
                    playlistId: a
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        className: "flex min-h-[56px] flex-col gap-1 overflow-hidden",
                        children: t.map((e, t) => (0, s.jsxs)("div", {
                            className: "flex cursor-pointer items-center text-base-s text-white opacity-80",
                            children: [(0, s.jsxs)("p", {
                                children: [t + 1, v.L_, v.L_]
                            }), (0, s.jsx)("p", {
                                className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                children: e.title
                            }), (0, s.jsx)("p", {
                                children: v.L_ + v.YV + v.L_
                            }), (0, s.jsx)("p", {
                                className: "overflow-hidden text-ellipsis whitespace-nowrap",
                                children: e.artist.name
                            })]
                        }, `${e.id}-${a}-${t}`))
                    })
                })
            }
        },
        4967: function(e, t, a) {
            "use strict";
            a.d(t, {
                IP: function() {
                    return getPlaylistBackgroundDominantColor
                },
                Zs: function() {
                    return CoverImages
                },
                uT: function() {
                    return getPlaylistBackgroundImageUrl
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(49542),
                l = a(18173),
                r = a(10187),
                i = a(73950),
                o = a(3928),
                d = a(85846);
            let getPlaylistBackgroundImageUrl = e => {
                    var t, a;
                    let {
                        type: s,
                        coverImage: n,
                        previewReleases: l
                    } = (0, o.S3c)(o.ZUK, e);
                    if (s === o.wod.UserLikedSounds) return "/images/liked-sounds-background.svg";
                    if (n) return n.url;
                    if (!l || !l[0]) return d.kG;
                    let r = l[0].release;
                    return null !== (a = null === (t = r.staticCoverImage) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : r.coverImage.url
                },
                getPlaylistBackgroundDominantColor = e => {
                    var t;
                    let {
                        coverImage: a,
                        previewReleases: s,
                        type: n
                    } = (0, o.S3c)(o.ZUK, e);
                    if ("USER_LIKED_SOUNDS" === n) return "#EB5CBB";
                    if (a) return a.dominantColor;
                    if (!s || !s[0]) return l.rH;
                    let r = s[0].release;
                    return r.coverImage.dominantColor || (null === (t = r.staticCoverImage) || void 0 === t ? void 0 : t.dominantColor) || l.rH
                },
                CoverImage = e => {
                    var t, a, n, l, o;
                    let {
                        size: d,
                        previewRelease: c,
                        priority: u
                    } = e, {
                        release: m,
                        ownedGoldenEgg: p
                    } = c;
                    return p ? (0, s.jsx)(r.V, {
                        src: (null === (t = p.animatedGoldenEggImageOptimized) || void 0 === t ? void 0 : t.url) || (null === (a = p.goldenEggImage) || void 0 === a ? void 0 : a.url) || (null == m ? void 0 : null === (n = m.coverImage) || void 0 === n ? void 0 : n.url),
                        width: d,
                        height: d
                    }) : (0, s.jsx)(i.G, {
                        alt: "playlist-cover-img",
                        src: (null == m ? void 0 : null === (l = m.staticCoverImage) || void 0 === l ? void 0 : l.url) || (null == m ? void 0 : null === (o = m.coverImage) || void 0 === o ? void 0 : o.url),
                        width: d,
                        height: d,
                        style: {
                            objectFit: "cover",
                            objectPosition: "center"
                        },
                        priority: u
                    })
                },
                CoverImages = e => {
                    let {
                        playlist: t,
                        maxSize: a,
                        priority: l
                    } = e, {
                        type: r,
                        coverImage: c,
                        previewReleases: u
                    } = (0, o.S3c)(o.ZUK, t), m = r === o.wod.UserLikedSounds, p = !!c, x = u.length, h = !m && !p, f = h && x > 1, v = h && 1 !== x && x < 4, g = null;
                    return m ? g = "/images/liked-sounds-cover-new.png" : p ? g = c.url : v && (g = d.kG), (0, s.jsxs)("div", {
                        className: (0, n.default)("relative h-full w-full overflow-hidden rounded-md bg-black", {
                            "grid grid-cols-2": f
                        }),
                        children: [g && (0, s.jsx)(i.G, {
                            className: (0, n.default)(v && "absolute left-0 top-0 z-below h-full w-full", "bg-cover-skeleton"),
                            alt: "Playlist cover background",
                            src: g,
                            width: a,
                            height: a,
                            style: {
                                objectFit: "cover",
                                objectPosition: "center"
                            },
                            priority: l,
                            sizes: `${a}px`
                        }), h && (0, s.jsx)(s.Fragment, {
                            children: u.map((e, t) => (0, s.jsx)("div", {
                                className: (0, n.default)({
                                    "col-start-2 row-start-2": 2 === x && 1 === t
                                }, "bg-cover-skeleton"),
                                children: (0, s.jsx)(CoverImage, {
                                    previewRelease: e,
                                    size: 1 === x ? a : a / 2,
                                    priority: l
                                })
                            }, e.id))
                        })]
                    })
                }
        },
        51520: function(e, t, a) {
            "use strict";
            a.d(t, {
                a: function() {
                    return PreviewDropdown
                }
            });
            var s = a(16356),
                n = a(97352);
            a(96960);
            var l = a(78714),
                r = a(95234),
                i = a(97706),
                o = a(41079),
                d = a(72102),
                c = a(78608),
                u = a(42178),
                m = a(8094),
                p = a(66361),
                x = a(52931),
                h = a(96301),
                f = a(21956),
                v = a(22181),
                g = a(14034),
                b = a(85846),
                y = a(28166);
            let PostPlaylistMenuItem = e => {
                let {
                    playlistId: t,
                    source: a
                } = e, {
                    openModal: l
                } = v.ModalContext.useContainer(), {
                    isAuthenticatedWithAPI: r
                } = (0, h.aC)(), {
                    value: i
                } = (0, c.useGate)(b.ln.SPOTIFY_LINKS), o = (0, n.useCallback)(() => {
                    r ? ((0, g.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: a,
                            associationId: t,
                            associationType: "Playlist"
                        }
                    }), l(v.ModalType.FEED_POST, {
                        body: i ? (0, s.jsx)(x.s, {
                            sourceLocation: "Playlist Card",
                            selectedResource: {
                                type: "playlist",
                                playlistId: t
                            },
                            channelId: null,
                            channelSelectorDisabled: !1
                        }) : (0, s.jsx)(p.t, {
                            sourceLocation: "Playlist Card",
                            preselectedResource: {
                                type: "playlist",
                                playlistId: t
                            },
                            channelId: null
                        }, "post-input")
                    })) : (0, f.SR)()
                }, [r, l, t, a, i]), C = (0, n.useMemo)(() => (0, s.jsxs)(m.Xi, {
                    onClick: o,
                    "data-testid": y.n.FEED_POST_MENU_ITEM_DROPDOWN,
                    children: [(0, s.jsx)(d.G, {
                        icon: u.Y,
                        size: "lg"
                    }), (0, s.jsx)(m.i_, {
                        children: "Post"
                    })]
                }), [o]);
                return C
            };
            var C = a(62335),
                S = a(24482),
                j = a(43158),
                w = a(3928);
            let PreviewDropdown = e => {
                let {
                    isDropdownOpen: t,
                    setIsDropdownOpen: a,
                    playlist: n,
                    trackIds: d,
                    playlistLink: c,
                    isOwner: u,
                    playlistType: m,
                    variant: p,
                    triggerProps: x,
                    source: h
                } = e, f = (0, w.S3c)(w.RIj, n), b = f.id, {
                    openModal: y
                } = v.ModalContext.useContainer(), {
                    desktop: T
                } = j.MediaQuery.useContainer();
                return (0, s.jsxs)(C.N, {
                    isDropdownOpen: t,
                    setIsDropdownOpen: a,
                    dropdownProps: {
                        align: T ? "start" : "end"
                    },
                    variant: p,
                    triggerProps: x,
                    children: [(0, s.jsx)(l.C, {
                        trackIds: d,
                        disabled: !d,
                        emitAnalytics: () => {
                            (0, g.uH)({
                                event: "Add to Queue Clicked",
                                properties: {
                                    associationId: b,
                                    associationType: "Playlist",
                                    sourceComponent: "Playlist Preview"
                                }
                            })
                        }
                    }), "Feed Playlist Post" !== h && (0, s.jsx)(PostPlaylistMenuItem, {
                        playlistId: b,
                        source: "Playlist Card"
                    }), (0, s.jsx)(o.T, {
                        playlist: f,
                        source: "Playlist Preview"
                    }), u && (0, s.jsxs)(s.Fragment, {
                        children: ["DEFAULT" === m && (0, s.jsx)(i.B, {
                            label: "Edit Playlist",
                            shelfWebappUri: c
                        }), (0, s.jsx)(r.e, {
                            onClick: () => y(v.ModalType.DELETE_SHELF, {
                                body: (0, s.jsx)(S.d, {
                                    shelfId: b
                                })
                            })
                        })]
                    })]
                })
            }
        },
        88893: function(e, t, a) {
            "use strict";
            a.d(t, {
                g: function() {
                    return MintsDrivenTrigger
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(21597),
                r = a(58658),
                i = a(58285),
                o = a(54668),
                d = a(43158),
                c = a(22181),
                u = a(3928),
                m = a(64571),
                p = a(95095);
            let userItemContent = (e, t, a) => {
                    let {
                        user: n,
                        numAffiliateNftsPurchased: r
                    } = (0, u.S3c)(u.SXS, t), i = r ? `${(0,l.ZP)(r)} ${(0,m.Lo)({word:"edition",count:r})}` : "";
                    return (0, s.jsx)(p.p, {
                        user: n,
                        sourceLocation: a.sourceLocation,
                        secondaryText: i
                    })
                },
                MintsDrivenModal = e => {
                    let {
                        playlistId: t
                    } = e, {
                        tablet: a
                    } = (0, d.useMediaQuery)(), {
                        closeCancelModal: r
                    } = (0, c.useModal)(), [x, h] = n.useState(), {
                        orderedList: f,
                        loadMoreNextPage: v,
                        isLoadingNewPage: g,
                        firstPage: b
                    } = (0, u.NSZ)(u.NE4, {
                        variables(e) {
                            let {
                                pageParam: a
                            } = e;
                            return {
                                playlistId: t,
                                pagination: {
                                    first: 10,
                                    after: (null == a ? void 0 : a.after) || null
                                }
                            }
                        },
                        filterQueryKey: {
                            playlistId: t
                        },
                        getNextPageParam(e) {
                            var t;
                            let {
                                data: a
                            } = e;
                            return (null === (t = a.playlistV2) || void 0 === t ? void 0 : t.affiliateBuyers.pageInfo.hasNextPage) && {
                                after: a.playlistV2.affiliateBuyers.pageInfo.endCursor
                            }
                        },
                        list(e) {
                            let {
                                playlistV2: t
                            } = e;
                            return null == t ? void 0 : t.affiliateBuyers.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        staleTime: 0
                    }), y = (0, n.useCallback)(() => g ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(p.T, {}), (0, s.jsx)(p.T, {}), (0, s.jsx)(p.T, {})]
                    }) : null, [g]);
                    if (!(null == b ? void 0 : b.data.playlistV2)) return null;
                    let C = b.data.playlistV2,
                        {
                            numReferralPurchases: S,
                            numUsersReferred: j
                        } = C,
                        w = `${(0,l.ZP)(S)} ${(0,m.Lo)({word:"Mint",count:S})} Driven`,
                        T = `${(0,l.ZP)(j)} ${(0,m.Lo)({word:"collector",count:j})}`,
                        N = (0, s.jsx)(i.OO, {
                            data: f,
                            itemContent: userItemContent,
                            customScrollParent: x,
                            endReached: v,
                            context: {
                                sourceLocation: "Mints Driven Modal"
                            },
                            components: {
                                Footer: y
                            }
                        });
                    return (0, s.jsx)(o.Z, {
                        title: w,
                        subHeader: T,
                        body: N,
                        closeModal: r,
                        ref: e => {
                            h(e || void 0)
                        },
                        isFullScreen: !a
                    })
                };
            var x = a(73335);
            let MintsDrivenTrigger = e => {
                let {
                    className: t,
                    playlistId: a,
                    mintsDriven: n,
                    infoAction: i
                } = e, {
                    openModal: o
                } = (0, c.useModal)(), d = (0, x.f)(), u = (0, m.Lo)({
                    count: n,
                    word: "mint"
                });
                return (0, s.jsxs)("button", {
                    className: t,
                    onClick: () => {
                        i && d({
                            feature: r.h6.PLAYLISTS,
                            isArtistOnlyPage: !1,
                            action: i,
                            message: "Mints driven count clicked",
                            data: {
                                playlistId: a
                            }
                        }), o(c.ModalType.MINTS_DRIVEN, {
                            body: (0, s.jsx)(MintsDrivenModal, {
                                playlistId: a
                            })
                        })
                    },
                    children: [(0, l.ZP)(n), " ", u, " driven"]
                })
            }
        },
        3424: function(e, t, a) {
            "use strict";
            a.d(t, {
                Ee: function() {
                    return clearFields
                },
                HJ: function() {
                    return clearErrorField
                },
                Ji: function() {
                    return setField
                },
                U3: function() {
                    return setLoadingField
                },
                b9: function() {
                    return clearErrors
                },
                sT: function() {
                    return setError
                }
            });
            var s = a(1559);
            let setField = (e, t) => {
                    s.f.fields[e] = t
                },
                setError = (e, t) => {
                    s.f.errors[e] = t
                },
                setLoadingField = (e, t) => {
                    s.f.loading[e] = t
                },
                clearErrorField = e => {
                    s.f.errors[e] = null
                },
                clearErrors = () => {
                    s.f.errors = {
                        displayName: null,
                        bio: null,
                        avatarUploadKey: null,
                        coverImageUploadKey: null,
                        spotifyUrl: null,
                        tiktokUrl: null,
                        delegateWallet: null
                    }
                },
                clearFields = () => {
                    s.f.fields = {
                        displayName: null,
                        bio: null,
                        avatarUploadKey: null,
                        coverImageUploadKey: null,
                        spotifyUrl: null,
                        tiktokUrl: null,
                        delegateWallet: null,
                        invitedByUserId: null
                    }
                }
        },
        1559: function(e, t, a) {
            "use strict";
            a.d(t, {
                D: function() {
                    return initialProfileFormState
                },
                f: function() {
                    return n
                }
            });
            var s = a(31265);
            let initialProfileFormState = () => ({
                    fields: {
                        displayName: null,
                        bio: null,
                        avatarUploadKey: null,
                        coverImageUploadKey: null,
                        spotifyUrl: null,
                        tiktokUrl: null,
                        delegateWallet: null,
                        invitedByUserId: null
                    },
                    errors: {
                        displayName: null,
                        bio: null,
                        avatarUploadKey: null,
                        coverImageUploadKey: null,
                        spotifyUrl: null,
                        tiktokUrl: null,
                        delegateWallet: null
                    },
                    loading: {
                        avatarUploadKey: !1,
                        coverImageUploadKey: !1
                    }
                }),
                n = (0, s.sj)(initialProfileFormState())
        },
        32881: function(e, t, a) {
            "use strict";
            a.d(t, {
                W: function() {
                    return LearnMoreReferrals
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(8205),
                l = a(97946);
            let r = (0, n.zo)(l.s, {
                    textDecoration: "underline",
                    whiteSpace: "nowrap",
                    variants: {
                        textColor: {
                            white: {
                                color: "$white"
                            },
                            black: {
                                color: "$black"
                            }
                        }
                    },
                    defaultVariants: {
                        textColor: "white"
                    }
                }),
                LearnMoreReferrals = e => {
                    let {
                        withDot: t,
                        ...a
                    } = e;
                    return (0, s.jsxs)(r, { ...a,
                        absoluteUri: "https://help.sound.xyz/hc/en-us/articles/12713835355035",
                        type: "external",
                        children: ["Learn more", t ? "." : ""]
                    })
                }
        },
        87515: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return ShareReleaseImage
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(49542),
                i = a(16424),
                o = a(28391);
            a(96960);
            var d = a(24896),
                c = a(69598),
                u = a(22555),
                m = a(46801),
                p = a(62591);
            let x = [{
                    label: "portrait",
                    description: "Portrait image (1080 x 1920px) to share as story on Tiktok and Instagram.",
                    icon: m.j8,
                    width: 1080,
                    height: 1920
                }, {
                    label: "landscape",
                    description: "Landscape image (1024 x 512px) to share as post on Twitter and Telegram.",
                    icon: u.wP,
                    width: 1024,
                    height: 512
                }, {
                    label: "square",
                    description: "Square image (1080 x 1080px) to share on as post on Instagram and Facebook.",
                    icon: p.pL,
                    width: 1080,
                    height: 1080
                }, {
                    label: "square-small",
                    description: "Small Square image (552 x 552px) to share on as post on Instagram and Facebook.",
                    icon: p.pL,
                    width: 552,
                    height: 552
                }],
                ScreenshotContainer = e => {
                    var t, a;
                    let {
                        screenshotRef: l,
                        selectedAspectRatio: i,
                        className: o,
                        children: d
                    } = e, c = (0, n.useRef)(null), [u, m] = (0, n.useState)(1), p = (0, n.useCallback)(() => {
                        var e;
                        return null === l.current ? 1 : ((null === (e = c.current) || void 0 === e ? void 0 : e.clientWidth) || 100) / i.width
                    }, [l, i.width]);
                    return (0, n.useEffect)(() => {
                        m(p())
                    }, [null === (t = l.current) || void 0 === t ? void 0 : t.clientWidth, null === (a = c.current) || void 0 === a ? void 0 : a.clientWidth, p]), (0, s.jsx)("div", {
                        className: (0, r.default)("flex w-full items-center justify-center overflow-hidden", o),
                        style: {
                            aspectRatio: `${i.width}/${i.height}`
                        },
                        ref: c,
                        children: (0, s.jsx)("div", {
                            className: "flex flex-shrink-0 overflow-hidden",
                            style: {
                                transform: `scale(${u})`,
                                width: `${i.width}px`,
                                height: `${i.height}px`
                            },
                            children: (0, s.jsx)("div", {
                                className: "flex h-full w-full items-center justify-center overflow-hidden",
                                ref: l,
                                children: d
                            })
                        })
                    })
                },
                CircleLogo = e => (0, s.jsx)("svg", {
                    viewBox: "0 0 38 38",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.6673 37.0217C28.8294 37.0217 37.0673 28.7837 37.0673 18.6217C37.0673 8.45964 28.8294 0.22168 18.6673 0.22168C8.50529 0.22168 0.267334 8.45964 0.267334 18.6217C0.267334 28.7837 8.50529 37.0217 18.6673 37.0217ZM29.0438 15.9464C29.0438 16.1753 28.8564 16.3626 28.6275 16.3626H25.2974C25.0685 16.3626 24.8811 16.1753 24.8811 15.9464V14.6976C24.8811 14.4686 24.6938 14.2813 24.4649 14.2813H20.0941C19.8652 14.2813 19.6779 14.094 19.6779 13.865V11.9919C19.6779 11.7629 19.4905 11.5756 19.2616 11.5756H14.8908C14.6619 11.5756 14.4746 11.7629 14.4746 11.9919V16.3626C14.4746 16.5916 14.6619 16.7789 14.8908 16.7789H22.3836C22.6125 16.7789 22.7998 16.9662 22.7998 17.1951V18.4439C22.7998 18.6729 22.9871 18.8602 23.2161 18.8602H28.6275C28.8564 18.8602 29.0438 19.0475 29.0438 19.2765V26.1448C29.0438 26.3737 28.8564 26.561 28.6275 26.561H26.9624C26.7335 26.561 26.5462 26.7484 26.5462 26.9773V28.6424C26.5462 28.8713 26.3589 29.0586 26.1299 29.0586H11.1445C10.9155 29.0586 10.7282 28.8713 10.7282 28.6424V26.9773C10.7282 26.7484 10.5409 26.561 10.312 26.561H8.6469C8.41796 26.561 8.23064 26.3737 8.23064 26.1448V21.3578C8.23064 21.1288 8.41796 20.9415 8.6469 20.9415H11.977C12.2059 20.9415 12.3933 21.1288 12.3933 21.3578V22.6066C12.3933 22.8355 12.5806 23.0228 12.8095 23.0228H17.1803C17.4092 23.0228 17.5965 23.2101 17.5965 23.4391V25.3123C17.5965 25.5412 17.7839 25.7285 18.0128 25.7285H22.3836C22.6125 25.7285 22.7998 25.5412 22.7998 25.3123V20.9415C22.7998 20.7126 22.6125 20.5252 22.3836 20.5252H14.8908C14.6619 20.5252 14.4746 20.3379 14.4746 20.109V18.8602C14.4746 18.6312 14.2873 18.4439 14.0583 18.4439H8.6469C8.41796 18.4439 8.23064 18.2566 8.23064 18.0277V11.1593C8.23064 10.9304 8.41796 10.7431 8.6469 10.7431H10.312C10.5409 10.7431 10.7282 10.5558 10.7282 10.3268V8.66176C10.7282 8.43282 10.9155 8.2455 11.1445 8.2455H26.1299C26.3589 8.2455 26.5462 8.43282 26.5462 8.66176V10.3268C26.5462 10.5558 26.7335 10.7431 26.9624 10.7431H28.6275C28.8564 10.7431 29.0438 10.9304 29.0438 11.1593V15.9464Z",
                        fill: "currentColor"
                    })
                });
            var h = a(3928),
                f = a(42529),
                v = a(43324);
            let downloadScreenshot = async e => {
                    let {
                        filename: t,
                        screenshotRef: a,
                        options: s
                    } = e;
                    if (null === a.current) return;
                    await (0, v.hi)(a.current, s), await (0, v.hi)(a.current, s), await (0, v.hi)(a.current, s);
                    let n = await (0, v.hi)(a.current, s),
                        l = document.createElement("a");
                    l.download = `${t}.jpg`, l.href = n, l.click()
                },
                ShareReleaseImage = e => {
                    var t;
                    let {
                        releaseId: a,
                        onError: u,
                        className: m,
                        isLoading: p,
                        fullWidthButton: v
                    } = e, g = (0, n.useRef)(null), {
                        data: b,
                        isLoading: y
                    } = (0, h.aM2)(h.sPY, {
                        variables: {
                            id: a
                        },
                        staleTime: 0
                    }), C = p || y, S = null == b ? void 0 : b.data.release, j = (0, h.S3c)(h.oUO, S), w = (null == j ? void 0 : j.publicMintStart) ? new Date(j.publicMintStart) : null, T = w && (0, i.default)(w, new Date) ? new Intl.DateTimeFormat("en-US", {
                        timeZone: "America/New_York",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !0
                    }).format(w) + " EST" : null, N = null == j ? void 0 : j.coverImage.url, I = null == j ? void 0 : null === (t = j.staticCoverImage) || void 0 === t ? void 0 : t.url, P = null != I ? I : N, R = (0, f.R)(async () => {
                        try {
                            await downloadScreenshot({
                                filename: `${null==j?void 0:j.artist.name}-${null==j?void 0:j.title}`,
                                screenshotRef: g,
                                options: {
                                    cacheBust: !0,
                                    quality: 1,
                                    pixelRatio: 1,
                                    includeQueryParams: !0
                                }
                            })
                        } catch (e) {
                            null == u || u(e)
                        }
                    }), E = (0, s.jsxs)("div", {
                        className: "relative animate-pulse",
                        children: [(0, s.jsx)("div", {
                            className: "h-[393px] rounded-[10px] bg-base400 md:h-[372px]"
                        }), (0, s.jsxs)("div", {
                            className: "absolute bottom-0 flex w-full flex-col font-title text-white",
                            children: [(0, s.jsx)("div", {
                                className: "pointer-events-none z-above2 h-20 w-full transform-gpu bg-gradient-to-t from-black md:h-[146px]"
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full flex-row items-end justify-between rounded-b-[10px] bg-black p-5",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-title-s font-medium leading-6 text-base400",
                                        children: (0, s.jsx)("div", {
                                            className: "h-6 w-20 bg-base400"
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "text-[35px] font-medium leading-[100%]",
                                        children: (0, s.jsx)("div", {
                                            className: "h-[35px] w-40 bg-base400"
                                        })
                                    })]
                                }), (0, s.jsx)(CircleLogo, {
                                    className: "h-[25px] w-[25px] flex-shrink-0"
                                })]
                            })]
                        })]
                    }), A = (0, s.jsxs)(ScreenshotContainer, {
                        className: "relative rounded-[10px]",
                        screenshotRef: g,
                        selectedAspectRatio: x[2],
                        children: [P && (0, s.jsx)(d.y.Single, {
                            src: P
                        }), T && (0, s.jsxs)("div", {
                            className: (0, r.default)("absolute right-[10px] top-5 flex items-center backdrop-blur-lg", "mr-2 overflow-hidden rounded-full bg-black/30 px-4 py-2 text-[30px] leading-[100%]", "font-semibold text-white"),
                            children: ["Starts ", T]
                        }), (0, s.jsxs)("div", {
                            className: "absolute bottom-0 flex w-full flex-col font-title text-white",
                            children: [(0, s.jsx)("div", {
                                className: "pointer-events-none z-above2 -mb-[1px] h-20 w-full transform-gpu bg-gradient-to-t from-black md:h-[146px]"
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full flex-row items-end justify-between gap-2 bg-black p-10",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, s.jsx)("div", {
                                        className: "text-title-xxl font-medium text-base400",
                                        children: null == j ? void 0 : j.artist.name
                                    }), (0, s.jsx)("div", {
                                        className: "text-[70px] font-medium leading-[100%]",
                                        children: null == j ? void 0 : j.title
                                    })]
                                }), (0, s.jsx)(CircleLogo, {
                                    className: "h-[74px] w-[74px] flex-shrink-0"
                                })]
                            })]
                        })]
                    });
                    return (0, s.jsxs)("div", {
                        className: (0, r.default)("flex flex-col gap-4", m),
                        children: [C ? E : A, v ? (0, s.jsx)(c.z, {
                            variant: "primary",
                            label: "Download JPG",
                            leadingIcon: (0, s.jsx)(l.G, {
                                icon: o.fu
                            }),
                            disabled: C,
                            onClick: R,
                            fullWidth: !0,
                            className: "p-0 text-base-l"
                        }) : (0, s.jsx)(c.z, {
                            variant: "text",
                            label: "Download JPG",
                            leadingIcon: (0, s.jsx)(l.G, {
                                icon: o.fu
                            }),
                            disabled: C,
                            onClick: R,
                            size: "M",
                            className: "h-auto p-0 text-base-l"
                        })]
                    })
                }
        },
        34637: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return ReleaseCardActions
                }
            });
            var s = a(16356),
                n = a(97352);
            a(96960);
            var l = a(8205),
                r = a(37925),
                i = a(23740),
                o = a(3928),
                d = a(72102),
                c = a(94400),
                u = a(70646),
                m = a(96301),
                p = a(75747),
                x = a(28166),
                h = a(8094);
            let AddAsFeatureMenuItem = e => {
                var t, a, n, l;
                let {
                    releaseId: r
                } = e, {
                    authUser: i
                } = (0, m.aC)(), f = (0, o.aM2)(o.saE, {
                    variables: !!i && {
                        id: i.id
                    },
                    staleTime: 0
                }), v = null === (t = (0, o.S3c)(o.AsE, null == f ? void 0 : null === (l = f.data) || void 0 === l ? void 0 : null === (n = l.data.user) || void 0 === n ? void 0 : null === (a = n.featuredReleases) || void 0 === a ? void 0 : a[0])) || void 0 === t ? void 0 : t.id, g = r === v, {
                    mutateAsync: b
                } = (0, o.Dbo)(o.FG0, {}), {
                    openToast: y
                } = p.ToastContext.useContainer(), handleClick = async () => {
                    try {
                        await b({
                            releaseIds: g ? [] : [r]
                        }), y({
                            text: "Your profile feature was updated.",
                            variant: "success"
                        })
                    } catch (e) {
                        y({
                            text: "Error updating profile feature",
                            variant: "error"
                        })
                    }
                };
                return (0, s.jsxs)(h.Xi, {
                    onClick: handleClick,
                    "data-testid": x.n.ADD_AS_FEATURE_MENU_ITEM_DROPDOWN,
                    children: [(0, s.jsx)(d.G, {
                        icon: g ? u.T : c.T,
                        size: "lg"
                    }), (0, s.jsx)(h.i_, {
                        children: g ? "Remove as feature" : "Add as feature"
                    })]
                })
            };
            var f = a(78714),
                v = a(96578),
                g = a(2438),
                b = a(94198),
                y = a(69598),
                C = a(23496),
                S = a(54668),
                j = a(22181),
                w = a(83666),
                T = a(79950);
            let N = [{
                inputs: [{
                    internalType: "address",
                    name: "from",
                    type: "address"
                }, {
                    internalType: "address",
                    name: "to",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }],
                name: "safeTransferFrom",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }];
            var I = a(58876),
                P = a(30203),
                R = a(42529),
                E = a(77348),
                A = a(38543);
            let useTransferToken = e => {
                let {
                    chainId: t,
                    contractAddress: a,
                    releaseId: s,
                    tokenId: l,
                    transferToAddress: r
                } = e, [i, o] = (0, n.useState)(!1), {
                    getSigner: d,
                    walletAddress: c,
                    getDeepLink: u
                } = (0, I.Qw)(), {
                    safeHandleTransaction: m
                } = P.Transaction.useContainer(), p = (0, R.R)(async () => {
                    let e = await d(t),
                        s = u();
                    return s && (window.location.href = s), e.writeContract({
                        address: a,
                        abi: N,
                        functionName: "safeTransferFrom",
                        args: [c, r, l],
                        chain: (0, E.v1)(t)
                    })
                }), x = (0, A.p)({
                    chainId: t,
                    onChainSwitchFail() {
                        o(!1)
                    },
                    async onAuth() {
                        o(!0), await m({
                            contractMethod: T.O.COLLECTOR__TRANSFER_EDITION,
                            transactionFn: p,
                            chainId: t,
                            openProcessingModal: !0,
                            showOpenWalletToast: !1,
                            releaseId: s
                        }), o(!1)
                    }
                });
                return {
                    transferToken: x,
                    isTransferring: i,
                    setIsTransferring: o
                }
            };
            var k = a(49457),
                M = a(8234),
                _ = a(73950),
                O = a(74995);

            function EditionSelector(e) {
                let {
                    selectedIndex: t,
                    setSelectedIndex: a,
                    nfts: l,
                    loadMore: r,
                    showCommentedTag: i
                } = e, [o, d] = (0, k.YD)({
                    threshold: .1
                });
                (0, n.useEffect)(() => {
                    d && r()
                }, [d, r]);
                let nftEditionImage = e => e.isGoldenEgg ? (0, s.jsx)(_.G, {
                    alt: "goldenEggBadge",
                    src: "/images/golden-egg-badge.png",
                    className: "h-[18px] w-[18px]",
                    width: 18,
                    height: 18
                }) : e.tierNumber === O.a8.LIMITED ? (0, s.jsx)(_.G, {
                    alt: "starBadge",
                    src: "/images/star-badge.png",
                    className: "h-[18px] w-[18px]",
                    width: 18,
                    height: 18
                }) : (0, s.jsx)(_.G, {
                    alt: "starBadge",
                    src: "/images/forever-badge.png",
                    className: "h-[18px] w-[18px]",
                    width: 18,
                    height: 18
                });
                return (0, s.jsxs)(M.P, {
                    value: t.toString(),
                    onValueChange: e => {
                        a(parseInt(e))
                    },
                    disabled: l.length <= 1,
                    children: [l && l.map((e, t) => {
                        var a;
                        return (0, s.jsxs)(M.c, {
                            value: t.toString(),
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, s.jsx)("div", {
                                    children: nftEditionImage(e)
                                }), (0, s.jsxs)("span", {
                                    children: ["#", e.serialNumber.toString()]
                                })]
                            }), (0, s.jsx)("div", {
                                className: "flex items-center justify-end gap-2 text-right text-base-s",
                                children: i && (null === (a = e.comment) || void 0 === a ? void 0 : a.id) && (0, s.jsx)("div", {
                                    className: "font-medium text-base500",
                                    children: "Commented"
                                })
                            })]
                        }, e.id)
                    }), (0, s.jsx)("div", {
                        ref: o
                    })]
                })
            }
            let GiftingModal = e => {
                var t, a;
                let {
                    releaseFrag: l
                } = e, {
                    closeModal: r
                } = j.ModalContext.useContainer(), [i, c] = n.useState(!1), [u, m] = n.useState(null), p = (0, o.S3c)(o.R_m, l), {
                    title: x,
                    coverImage: h,
                    artist: f,
                    contractAddress: v,
                    chainId: T,
                    id: N,
                    staticCoverImage: I
                } = p, [P, R] = n.useState(null), {
                    loadMore: E,
                    nftsOwnedByUser: A,
                    selectedNft: k,
                    selectedNftIndex: M,
                    setSelectedNftIndex: _,
                    isLoading: O
                } = (0, w.d)({
                    releaseId: N
                }), {
                    transferToken: L,
                    isTransferring: D,
                    setIsTransferring: U
                } = useTransferToken({
                    chainId: T,
                    contractAddress: v,
                    releaseId: N,
                    tokenId: null !== (t = null == k ? void 0 : k.tokenId) && void 0 !== t ? t : "",
                    transferToAddress: null != P ? P : "0x"
                }), F = O || D, z = !P || !(null == k ? void 0 : k.tokenId), onGift = async () => {
                    U(!0), await L()
                }, G = (0, s.jsxs)("div", {
                    className: "flex flex-col gap-6",
                    children: [(0, s.jsxs)("div", {
                        className: "flex items-center gap-3 border-b border-base200 pb-3",
                        children: [(0, s.jsx)("div", {
                            className: "flex-shrink-0",
                            children: (0, s.jsx)(C.E, {
                                alt: x,
                                src: null !== (a = null == I ? void 0 : I.url) && void 0 !== a ? a : h.url,
                                size: 48,
                                borderRadius: 8
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-1.5 truncate",
                            children: [(0, s.jsx)("div", {
                                className: "truncate font-title text-title-xxs font-medium leading-[18px] text-base800",
                                children: x
                            }), (0, s.jsx)("div", {
                                className: "text-base-xs font-medium text-base500",
                                children: f.name
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "text-base-m font-semibold text-black",
                            children: "Edition"
                        }), (0, s.jsx)(EditionSelector, {
                            selectedIndex: M,
                            setSelectedIndex: _,
                            nfts: A,
                            loadMore: E,
                            showCommentedTag: !1
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "text-base-m font-semibold text-black",
                            children: "Wallet Address"
                        }), (0, s.jsx)(b.S, {
                            eligibleQuantity: 1,
                            inputTouched: i,
                            setInputTouched: c,
                            inputValue: u,
                            setInputValue: m,
                            setGiftAddress: R,
                            setOpen: null,
                            inputDisabled: !1
                        })]
                    }), (0, s.jsx)("div", {
                        className: "flex md:hidden",
                        children: (0, s.jsx)(y.z, {
                            variant: "primary",
                            label: "Gift this song",
                            fullWidth: !0,
                            leadingIcon: (0, s.jsx)(d.G, {
                                icon: g.Cl
                            }),
                            size: "XL",
                            onClick: onGift,
                            disabled: z,
                            loading: F
                        })
                    })]
                });
                return (0, s.jsx)(S.Z, {
                    title: "Gift this song",
                    body: G,
                    bodyWithoutPaddingBottom: !0,
                    closeModal: () => r(),
                    callToAction: (0, s.jsx)(y.z, {
                        variant: "primary",
                        label: "Gift this song",
                        fullWidth: !0,
                        leadingIcon: (0, s.jsx)(d.G, {
                            icon: g.Cl
                        }),
                        size: "XL",
                        onClick: onGift,
                        disabled: z,
                        loading: F,
                        className: "hidden md:flex"
                    }),
                    mobileFullScreen: !0
                })
            };
            var L = a(14034);
            let GiftMenuItem = e => {
                let {
                    releaseFrag: t,
                    sourceComponent: a
                } = e, {
                    openModal: n
                } = j.ModalContext.useContainer(), l = (0, o.S3c)(o.R_m, t);
                return (0, s.jsxs)(h.Xi, {
                    onClick: () => {
                        (0, L.uH)({
                            event: "Gift Clicked",
                            properties: {
                                associationId: l.id,
                                associationType: "Release",
                                sourceComponent: a
                            }
                        }), n(j.ModalType.GIFT_MODAL, {
                            body: (0, s.jsx)(GiftingModal, {
                                releaseFrag: t
                            })
                        })
                    },
                    children: [(0, s.jsx)(d.G, {
                        icon: g.Cl,
                        size: "lg"
                    }), (0, s.jsx)(h.i_, {
                        children: "Gift"
                    })]
                })
            };
            var D = a(76349),
                U = a(5665),
                F = a(41079),
                z = a(62335),
                G = a(43158),
                B = a(51020);
            let SongCardDropdownItems = e => {
                    let {
                        release: t,
                        isNonArtistOwner: a,
                        showLikeSound: n,
                        showGiftOption: l
                    } = e, r = (0, o.S3c)(o.EAB, t), {
                        track: d,
                        id: c,
                        type: u,
                        listeningParty: m
                    } = r, p = "ALBUM" === u, x = "ALBUM" !== r.type, {
                        isLiked: h,
                        onClick: g
                    } = (0, i.b)({
                        id: c,
                        source: "Card"
                    }), b = (0, B.R)({
                        releaseId: c,
                        listeningParty: m
                    });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [n && !p && (0, s.jsx)(D.G, {
                            liked: h,
                            onClick: g,
                            releaseId: c,
                            releaseType: r.type
                        }), !p && (0, s.jsx)(U.R, {
                            releaseId: c,
                            source: "Song Card"
                        }), !p && (0, s.jsx)(v.U, {
                            releaseId: c,
                            disabled: !x,
                            source: "Card"
                        }), !p && (0, s.jsx)(f.C, {
                            trackId: d.id,
                            disabled: !d.id || !x || !!b,
                            emitAnalytics: () => {
                                (0, L.uH)({
                                    event: "Add to Queue Clicked",
                                    properties: {
                                        associationId: c,
                                        associationType: "Release",
                                        sourceComponent: "Card"
                                    }
                                })
                            }
                        }), a && (0, s.jsx)(AddAsFeatureMenuItem, {
                            releaseId: c
                        }), l && (0, s.jsx)(GiftMenuItem, {
                            releaseFrag: r,
                            sourceComponent: "Collection Item Dropdown"
                        }), (0, s.jsx)(F.T, {
                            releaseId: c,
                            source: "Song Card"
                        })]
                    })
                },
                SongCardDropdown = e => {
                    let {
                        release: t,
                        isDropdownOpen: a,
                        setIsDropdownOpen: n,
                        isNonArtistOwner: l = !1,
                        triggerStyles: r,
                        showLikeSound: i = !0,
                        variant: o,
                        showGiftOption: d
                    } = e, {
                        tablet: c
                    } = G.MediaQuery.useContainer();
                    return (0, s.jsx)(z.N, {
                        isDropdownOpen: a,
                        setIsDropdownOpen: n,
                        dropdownProps: {
                            css: {
                                display: "flex"
                            },
                            align: c ? "start" : "end"
                        },
                        triggerProps: {
                            css: {
                                display: "flex",
                                alignItems: "center",
                                width: 32,
                                height: 32,
                                ...r
                            }
                        },
                        variant: o,
                        children: (0, s.jsx)(SongCardDropdownItems, {
                            release: t,
                            isNonArtistOwner: l,
                            showLikeSound: i,
                            showGiftOption: d
                        })
                    })
                },
                ReleaseCardActions = e => {
                    let {
                        data: t,
                        showGiftOption: a
                    } = e, [l, d] = n.useState(!1), c = (0, o.S3c)(o.OlT, t), {
                        isLiked: u,
                        onClick: m
                    } = (0, i.b)({
                        id: c.id,
                        source: "Card"
                    });
                    return (0, s.jsxs)(H, {
                        children: [(0, s.jsx)("div", {
                            className: "[&_path]:transition-colors [&_path]:duration-300 [&_path]:hover:fill-white",
                            children: (0, s.jsx)(SongCardDropdown, {
                                variant: "tertiary",
                                showLikeSound: !1,
                                release: c,
                                isDropdownOpen: l,
                                setIsDropdownOpen: d,
                                showGiftOption: a
                            })
                        }), (0, s.jsx)("div", {
                            className: "[&_path]:transition-colors [&_path]:duration-300 [&_path]:hover:fill-white",
                            children: "ALBUM" !== c.type && (0, s.jsx)(r.dJ, {
                                onClick: m,
                                liked: u,
                                disabled: !1,
                                variant: "tertiary"
                            })
                        })]
                    })
                },
                H = (0, l.zo)("div", {
                    display: "flex",
                    ".liked": {
                        visibility: "visible"
                    },
                    marginRight: -12
                })
        },
        36374: function(e, t, a) {
            "use strict";
            a.d(t, {
                xx: function() {
                    return ReleaseInfoCard
                },
                vg: function() {
                    return SaleCountdown
                },
                UE: function() {
                    return SongCardSkeleton
                },
                KT: function() {
                    return getCountdownString
                },
                ho: function() {
                    return shouldShowEndsInCountdown
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(55100);
            a(96960);
            var r = a(68754),
                i = a(50491),
                o = a(97946),
                d = a(92434),
                c = a(22181),
                u = a(3928),
                m = a(42529),
                p = a(51401),
                x = a(72777),
                h = a(42916),
                f = a(85846),
                v = a(49542),
                g = a(8205),
                b = a(68753),
                y = a(64571);
            let CollectedBy = e => {
                    let {
                        collectedByFrag: t,
                        totalMinted: a,
                        releaseId: l
                    } = e, {
                        openModal: r
                    } = (0, c.useModal)(), i = (0, u.S3c)(u.N1O, t), o = (0, n.useMemo)(() => (0, s.jsx)("span", {
                        children: "Be the first to mint"
                    }), []);
                    return (0, s.jsxs)("div", {
                        className: (0, v.default)("flex h-full w-full items-center px-3", i.length > 0 && "gap-[10px]"),
                        children: [(0, s.jsx)(S, {
                            showNewSongCard: !0,
                            children: null == i ? void 0 : i.slice(0, 3).reverse().map(e => {
                                var t;
                                return (0, s.jsx)(C, {
                                    children: (0, s.jsx)(b.q, {
                                        src: null === (t = e.avatar) || void 0 === t ? void 0 : t.url,
                                        size: 24,
                                        username: e.username,
                                        walletAddress: e.publicAddress,
                                        hasShadow: !0,
                                        hasBorder: !1,
                                        hasDarkBorder: !0,
                                        borderRadius: "50%",
                                        webappUri: e.webappUri
                                    })
                                }, e.id)
                            })
                        }), (0, s.jsx)("div", {
                            className: "flex w-full flex-wrap font-base text-base-xs text-base200 hover:text-white md:text-base-xs",
                            children: i.length <= 0 ? o : (0, s.jsxs)("button", {
                                onClick: () => {
                                    r(c.ModalType.RELEASE_MINTS, {
                                        body: (0, s.jsx)(d.Y, {
                                            releaseId: l
                                        })
                                    })
                                },
                                children: [(0, y.cE)({
                                    value: a,
                                    precision: 5
                                }), " ", (0, y.Lo)({
                                    count: a,
                                    word: "mint"
                                })]
                            })
                        })]
                    })
                },
                C = (0, g.zo)("div", {
                    width: 24,
                    height: 24
                }),
                S = (0, g.zo)("div", {
                    display: "flex",
                    flexDirection: "row-reverse",
                    [`& ${C}:nth-child(2), & ${C}:nth-child(3)`]: {
                        marginRight: -18
                    },
                    variants: {
                        showNewSongCard: {
                            true: {
                                [`& ${C}:nth-child(2), & ${C}:nth-child(3)`]: {
                                    marginRight: -12
                                }
                            }
                        }
                    }
                });
            var j = a(34637),
                w = a(52927);
            let getCountdownString = e => {
                    let {
                        timeStamp: t
                    } = e, a = (0, l.Z)(t, {
                        roundingMethod: "floor"
                    }), [s, n] = a.split(" ");
                    return s && n ? `${s}${n.includes("month")?"mo":n.charAt(0)}` : ""
                },
                SaleCountdown = e => {
                    let {
                        endTimeMs: t
                    } = e;
                    return (0, s.jsx)(i.r, {
                        dateTime: new Date(t),
                        className: "ml-auto mr-2 mt-3 flex w-fit items-center overflow-hidden rounded-full bg-black/30 px-2 py-1 text-[10px] font-semibold leading-[14px] text-white backdrop-blur-lg sm:text-base-s",
                        children: (0, s.jsxs)("div", {
                            children: [(0, s.jsxs)("span", {
                                children: ["Ends in", f.L_]
                            }), (0, s.jsx)("span", {
                                children: getCountdownString({
                                    timeStamp: t
                                })
                            })]
                        })
                    })
                },
                shouldShowRunningSection = e => {
                    let {
                        finalQuantity: t,
                        quantityUpperBound: a,
                        quantityLowerBound: s
                    } = e, n = null != t ? t : a, l = (0, h.f)(n), r = s < n && !l;
                    return (l || r) && !t
                },
                shouldShowEndsInCountdown = e => {
                    let {
                        finalQuantity: t,
                        quantityUpperBound: a,
                        quantityLowerBound: s,
                        mintStartTimestamp: n
                    } = e, l = shouldShowRunningSection({
                        finalQuantity: t,
                        quantityUpperBound: a,
                        quantityLowerBound: s
                    });
                    return l && n < Date.now()
                },
                ReleaseInfoCard = e => {
                    let {
                        data: t,
                        playlist: a,
                        getNextTrackIds: n,
                        hideSocialProof: l = !1
                    } = e, {
                        openModal: i
                    } = (0, c.useModal)(), h = (0, u.S3c)(u.Uqu, t), {
                        coverImageUrl: f,
                        trackUrl: v,
                        onPlayClick: g,
                        isAudioBuffering: b,
                        playButtonPrefetchRef: y,
                        isActiveTrack: C,
                        isAlbum: S,
                        hasAudioAccess: T,
                        artistName: N,
                        artistWebappPath: I,
                        releaseTitle: P,
                        currentListeningParty: R
                    } = (0, w.f)({
                        data: h,
                        playlist: a
                    }), {
                        data: {
                            finalQuantity: E,
                            totalMinted: A
                        }
                    } = (0, p.z)({
                        release: h
                    }), {
                        quantityUpperBound: k,
                        supplyCutoffTimestamp: M,
                        quantityLowerBound: _,
                        mintStartTimestamp: O,
                        socialProofCollectors: L
                    } = h, D = shouldShowEndsInCountdown({
                        finalQuantity: E,
                        quantityUpperBound: k,
                        quantityLowerBound: _,
                        mintStartTimestamp: O
                    }), U = (0, m.R)(async () => {
                        await g(), (0, x.Hd)(n())
                    });
                    return (0, s.jsxs)(r.P4, {
                        album: S,
                        isPlaying: C,
                        loading: !1,
                        edition: !1,
                        expanded: null,
                        setExpanded: null,
                        children: [(0, s.jsx)(r.P4.Cover, {
                            header: D && (0, s.jsx)(SaleCountdown, {
                                endTimeMs: null != M ? M : 0
                            }),
                            pathnameUri: v,
                            image: (0, s.jsx)(r.P4.Cover.Single, {
                                src: f
                            }),
                            onPlayButtonClick: U,
                            isBufferingSong: b,
                            disablePlay: !T,
                            playButtonPrefetchRef: y,
                            currentListeningParty: R
                        }), (0, s.jsx)(r.P4.Info, {
                            header: (0, s.jsx)(o.s, {
                                pathnameUri: v,
                                type: "internal",
                                children: P
                            }),
                            subheader: (0, s.jsx)(o.s, {
                                pathnameUri: I,
                                children: N
                            }),
                            actions: (0, s.jsx)(j.r, {
                                data: h
                            })
                        }), l ? (0, s.jsx)("div", {
                            className: "text-overflow-ellipsis -mt-2 mb-1 flex flex-shrink-0  overflow-hidden whitespace-nowrap px-3 py-2 text-base-s text-base400 md:-mt-5",
                            children: A > 0 ? (0, s.jsxs)("button", {
                                onClick: () => {
                                    i(c.ModalType.RELEASE_MINTS, {
                                        body: (0, s.jsx)(d.Y, {
                                            releaseId: h.id
                                        })
                                    })
                                },
                                children: [A, " minted"]
                            }) : (0, s.jsx)("span", {
                                children: "Be the first to mint"
                            })
                        }) : (0, s.jsx)("div", {
                            className: "-mt-2 mb-1 flex h-11 w-full md:-mt-2.5",
                            children: (0, s.jsx)(CollectedBy, {
                                collectedByFrag: L,
                                totalMinted: A,
                                releaseId: h.id
                            })
                        })]
                    })
                },
                SongCardSkeleton = () => (0, s.jsxs)(r.P4, {
                    album: !1,
                    isPlaying: !1,
                    edition: !1,
                    expanded: null,
                    setExpanded: null,
                    loading: !0,
                    children: [(0, s.jsx)(r.P4.Cover, {
                        image: null,
                        onPlayButtonClick: () => {},
                        currentListeningParty: null
                    }), (0, s.jsx)(r.P4.Info, {
                        header: null,
                        subheader: null,
                        actions: null
                    }), (0, s.jsx)(r.P4.Running, {
                        collected: 0,
                        price: "0 ETH"
                    })]
                })
        },
        52927: function(e, t, a) {
            "use strict";
            a.d(t, {
                f: function() {
                    return useReleaseCardInfo
                }
            }), a(96960);
            var s = a(3928),
                n = a(51020),
                l = a(81688),
                r = a(95390);
            let useReleaseCardInfo = e => {
                var t, a;
                let {
                    data: i,
                    playlist: o
                } = e, {
                    activeTrackId: d,
                    playing: c
                } = (0, l.PZ)(), u = (0, s.S3c)(s.RHd, i), m = (null === (t = u.staticCoverImage) || void 0 === t ? void 0 : t.url) || u.coverImage.url, p = "ALBUM" === u.type, x = !!d && d === (null === (a = u.track) || void 0 === a ? void 0 : a.id) && c, h = p ? "/" : (0, r.OU)(u.webappUri), {
                    onPlayClick: f,
                    isLoading: v,
                    ref: g,
                    currentListeningParty: b
                } = (0, n.a)({
                    isAlbum: p,
                    trackId: u.track.id,
                    playlist: o,
                    listeningParty: u.listeningParty,
                    releaseId: u.id
                }), y = "ALBUM" !== u.type;
                return {
                    trackUrl: h,
                    isActiveTrack: x,
                    coverImageUrl: m,
                    onPlayClick: f,
                    hasAudioAccess: !p && y,
                    playButtonPrefetchRef: g,
                    isAudioBuffering: v,
                    artistUserId: u.artist.userId,
                    artistId: u.artist.id,
                    artistName: u.artist.name,
                    artistWebappPath: (0, r.OU)(u.artist.webappUri),
                    releaseTitle: u.title,
                    isAlbum: "ALBUM" === u.type,
                    currentListeningParty: b
                }
            }
        },
        89222: function(e, t, a) {
            "use strict";
            a.d(t, {
                a: function() {
                    return SoundBar
                }
            });
            var s, n, l = a(16356),
                r = a(97352),
                i = a(72102),
                o = a(44361),
                d = a(98454),
                c = a(51247),
                u = a(29009),
                m = a(83487),
                p = a(23740),
                x = a(36374),
                h = a(97613),
                f = a(44497),
                v = a(96578),
                g = a(35998),
                b = a(8094);
            let EditArtistPickMenuItem = e => {
                let {
                    label: t,
                    onClick: a
                } = e;
                return (0, l.jsxs)(b.Xi, {
                    onClick: a,
                    children: [(0, l.jsx)(i.G, {
                        icon: g.mt,
                        size: "lg"
                    }), (0, l.jsx)(b.i_, {
                        children: t
                    })]
                })
            };
            var y = a(97946),
                C = a(95390);
            let EditFeaturedSoundMenuItem = e => {
                let {
                    label: t,
                    webappUri: a
                } = e;
                return (0, l.jsx)(b.Xi, {
                    children: (0, l.jsxs)(y.s, {
                        pathnameUri: (0, C.OU)(a, {
                            subpath: "/featured/edit"
                        }),
                        children: [(0, l.jsx)(i.G, {
                            icon: g.mt,
                            size: "lg"
                        }), (0, l.jsx)(b.i_, {
                            children: t
                        })]
                    })
                })
            };
            var S = a(76349),
                j = a(5665),
                w = a(41079),
                T = a(62335),
                N = a(69598),
                I = a(47544),
                P = a(30300),
                R = a(58285),
                E = a(66229),
                A = a(45879),
                k = a(8205);
            let NoResults = () => (0, l.jsx)("div", {
                className: "flex flex-col gap-6 md:px-4",
                children: (0, l.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 pb-40 pt-52",
                    children: [(0, l.jsx)("p", {
                        className: "text-title text-center text-title-s font-medium md:text-title-m",
                        children: "No results found"
                    }), (0, l.jsx)("p", {
                        className: "font-base text-base-xs md:text-base-m",
                        children: "If at first you don't succeed, try again."
                    })]
                })
            });
            var M = a(29413),
                _ = a(3351),
                O = a(21922),
                L = a(54668),
                D = a(22181),
                U = a(36750),
                F = a(3928),
                z = a(7847);
            let ReleaseRowSkeleton = () => (0, l.jsxs)("div", {
                    className: "flex h-16 w-full animate-pulse items-center justify-between gap-2 rounded-lg hover:bg-base50",
                    children: [(0, l.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, l.jsx)(z.Od, {
                            className: "h-12 w-12 rounded-lg"
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col gap-1.5",
                            children: [(0, l.jsx)(z.Od, {
                                className: "h-4 w-16 rounded-md"
                            }), (0, l.jsx)(z.Od, {
                                className: "h-4 w-8 rounded-md"
                            })]
                        })]
                    }), (0, l.jsx)(z.Od, {
                        className: "h-6 w-7 rounded-md"
                    })]
                }),
                UserItemContent = (e, t, a, s) => {
                    let n = (0, F.S3c)(F.S3R, t),
                        r = a === n.id;
                    return (0, l.jsxs)("div", {
                        className: "-mx-2 flex h-16 items-center justify-between rounded-lg px-2 hover:bg-base50",
                        children: [(0, l.jsxs)("div", {
                            className: "flex w-full items-center gap-3",
                            children: [(0, l.jsx)("div", {
                                className: "h-12 w-12 flex-00auto",
                                children: (0, l.jsx)(M.v, {
                                    playButtonSize: "sm",
                                    nextImageSizes: "48px",
                                    releaseFrag: n
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex max-w-[175px] flex-col gap-1.5 md:max-w-[225px]",
                                children: [(0, l.jsx)(y.s, {
                                    pathnameUri: (0, C.OU)(n.webappUri),
                                    className: "overflow-hidden text-ellipsis whitespace-nowrap font-title text-title-xxs font-medium",
                                    children: n.title
                                }), (0, l.jsx)(y.s, {
                                    pathnameUri: (0, C.OU)(n.artist.webappUri),
                                    className: "font-base text-base-xs text-base500 ",
                                    children: n.artist.name
                                })]
                            })]
                        }), r ? (0, l.jsx)(O.h, {
                            icon: (0, l.jsx)(i.G, {
                                icon: A.W3,
                                size: "sm",
                                color: k.rS.colors.base800.toString()
                            }),
                            onClick: () => {
                                a === n.id ? s(null) : s(n.id)
                            }
                        }) : (0, l.jsx)("div", {
                            className: "transition-all duration-300 ease-in-out [&_path]:hover:brightness-[30%]",
                            children: (0, l.jsx)(O.h, {
                                icon: (0, l.jsx)(i.G, {
                                    icon: E.di,
                                    size: "sm",
                                    color: k.rS.colors.base500.toString()
                                }),
                                onClick: () => s(n.id)
                            })
                        })]
                    }, `EDIT_ARTIST_PICK_${e}`)
                };
            (0, U.c)({
                trigger: [F.VdT],
                refetch: [F.ijT]
            });
            let EditArtistPickModal = e => {
                let {
                    artistId: t,
                    artistPickReleaseId: a
                } = e, {
                    closeCancelModal: s
                } = D.ModalContext.useContainer(), [n, i] = (0, r.useState)({
                    releaseAuthor: F.qvH.All
                }), {
                    orderedList: o,
                    loadMoreNextPage: d,
                    isLoadingNewPage: c
                } = (0, F.NSZ)(F.dzw, {
                    filterQueryKey: {
                        artistId: t,
                        filter: n
                    },
                    getNextPageParam(e) {
                        let {
                            data: {
                                artist: t
                            }
                        } = e;
                        return (null == t ? void 0 : t.releases.pageInfo.hasNextPage) && {
                            after: t.releases.pageInfo.endCursor
                        }
                    },
                    variables(e) {
                        let {
                            pageParam: a
                        } = e;
                        return {
                            artistId: t,
                            pagination: {
                                first: 20,
                                after: (null == a ? void 0 : a.after) || null
                            },
                            sort: "DESC",
                            filter: {
                                releaseAuthor: n.releaseAuthor
                            }
                        }
                    },
                    list(e) {
                        let {
                            artist: t
                        } = e;
                        return null == t ? void 0 : t.releases.edges.map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    staleTime: 0
                }), [u, m] = (0, r.useState)(a), p = (0, r.useCallback)(() => c ? (0, l.jsx)(l.Fragment, {
                    children: Array.from({
                        length: 6
                    }, (e, t) => (0, l.jsx)(ReleaseRowSkeleton, {}, t))
                }) : null, [c]), [x, h] = r.useState(), f = F.qvH.All, v = F.qvH.OnlyAuthoredReleases, g = F.qvH.OnlyAppearsOn, b = (0, l.jsxs)("div", {
                    className: "h-[532px]",
                    children: [(0, l.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0, l.jsx)(_.A, {
                            text: "All",
                            isSelected: n.releaseAuthor === f,
                            onClick: () => i({
                                releaseAuthor: f
                            })
                        }), (0, l.jsx)(_.A, {
                            text: "My releases",
                            isSelected: n.releaseAuthor === v,
                            onClick: () => i({
                                releaseAuthor: v
                            })
                        }), (0, l.jsx)(_.A, {
                            text: "Appears on",
                            isSelected: n.releaseAuthor === g,
                            onClick: () => i({
                                releaseAuthor: g
                            })
                        })]
                    }), 0 !== o.length || c ? (0, l.jsx)("div", {
                        className: "mt-4",
                        children: (0, l.jsx)(R.OO, {
                            data: o,
                            itemContent: (e, t) => UserItemContent(e, t, u, m),
                            customScrollParent: x,
                            endReached: d,
                            context: {
                                sourceLocation: "Edit Artist Pick Modal"
                            },
                            components: {
                                Footer: p
                            }
                        })
                    }) : (0, l.jsx)(NoResults, {})]
                });
                return (0, l.jsx)(L.Z, {
                    ref: e => {
                        h(e || void 0)
                    },
                    title: "Edit Artist Pick",
                    body: b,
                    backCallToAction: (0, l.jsx)(N.z, {
                        variant: "secondary",
                        label: "Close",
                        onClick: s,
                        fullWidth: !0
                    }),
                    callToAction: (0, l.jsx)(N.z, {
                        variant: "primary",
                        label: "Save",
                        onClick: async () => {
                            await (0, F.Wcv)(F.VdT, {
                                variables: {
                                    releaseId: u
                                }
                            }), s()
                        },
                        fullWidth: !0
                    }),
                    closeModal: s
                })
            };
            var G = a(96301),
                B = a(89012),
                H = a(99398),
                W = a(4657),
                $ = a(34813),
                V = a(51020),
                Z = a(42529),
                Q = a(3141),
                Y = a(14034),
                X = a(18173);

            function SoundBar(e) {
                let {
                    releaseFrag: t,
                    customSubTitle: a,
                    variant: s
                } = e, n = "post" === s, i = (0, F.S3c)(F.vv, t), {
                    id: o
                } = i, {
                    openModal: d
                } = (0, D.useModal)(), [c, m] = (0, r.useState)(!1), h = (0, r.useMemo)(() => i.mintStartTimestamp <= Date.now() ? "Collect" : "Get Notified", [i]), f = n && "Feed Release Post" === e.source, v = n && "Featured Sound" === e.source, g = n && "Artist Pick" === e.source, {
                    isLiked: b,
                    onClick: y
                } = (0, p.b)({
                    id: o,
                    source: "Card"
                }), {
                    isPlaying: S,
                    isLoading: j,
                    onPlayClick: w,
                    currentListeningParty: T
                } = (0, V.a)({
                    isAlbum: !1,
                    trackId: i.track.id,
                    listeningParty: i.listeningParty,
                    releaseId: o
                }), N = (0, Z.R)(() => {
                    n && ((0, Y.uH)({
                        event: "Collect Now Clicked",
                        properties: {
                            associationId: o,
                            associationType: "Release",
                            sourceComponent: e.collectButtonSource
                        }
                    }), d(D.ModalType.COLLECT, {
                        body: (0, l.jsx)(P.o, {
                            releaseId: o,
                            mintReferral: e.mintReferral,
                            collectButtonSource: e.collectButtonSource
                        })
                    }))
                }), I = "#FFFFFF" !== i.coverImage.dominantColor && i.coverImage.dominantColor ? i.coverImage.dominantColor : X.rH, R = (0, W.v)({
                    dominantColor: I
                }), E = i.mintStartTimestamp <= Date.now(), A = (0, x.ho)({
                    finalQuantity: i.finalQuantity,
                    quantityUpperBound: i.quantityUpperBound,
                    quantityLowerBound: i.quantityLowerBound,
                    mintStartTimestamp: i.mintStartTimestamp
                }), k = r.useMemo(() => i.supplyCutoffTimestamp ? new Date(i.supplyCutoffTimestamp) : null, [i.supplyCutoffTimestamp]), M = (0, Q.J7)({
                    expiryTimestamp: i.mintStartTimestamp
                }), _ = formatCountdown({ ...M,
                    prefix: "Starts in"
                }), {
                    isShareReferrable: O
                } = (0, H.$)({
                    release: i
                }), L = n && e.mintReferral && e.mintReferral.referralType === B.MintReferralType.Post && O ? (0, C.OU)((0, u.$F)(i.webappUri, {
                    referralAddress: e.mintReferral.referralData.postUserAddress,
                    source: {
                        postId: e.mintReferral.referralData.postId
                    }
                })) : (0, C.OU)(i.webappUri), U = {
                    currentListeningParty: T,
                    customSubTitle: a,
                    dominantBackgroundColor: R,
                    endsInTime: k,
                    formattedStartCountDown: _,
                    handleCollectButtonClick: N,
                    hasSaleStarted: E,
                    isDropdownOpen: c,
                    isLiked: b,
                    isPlayButtonLoading: j,
                    isPlaying: S,
                    isPost: f,
                    onLikeClick: y,
                    onPlayClick: w,
                    release: i,
                    setIsDropdownOpen: m,
                    showCountdown: A,
                    showEditArtistPickDropdownMenuItem: g,
                    showEditFeaturedSoundDropdownMenuItem: v,
                    songPagePath: L,
                    soundBarButtonAction: h,
                    variant: s,
                    allowEdit: !n && e.allowEdit,
                    onRemoveResource: n ? null : e.onRemoveResource,
                    onEditSoundClicked: n ? null : e.onEditSoundClicked
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(Desktop, { ...U
                    }), (0, l.jsx)(Mobile, { ...U
                    })]
                })
            }

            function Desktop(e) {
                var t;
                let {
                    currentListeningParty: a,
                    customSubTitle: s,
                    dominantBackgroundColor: n,
                    endsInTime: r,
                    formattedStartCountDown: u,
                    handleCollectButtonClick: p,
                    hasSaleStarted: x,
                    isDropdownOpen: g,
                    isLiked: b,
                    isPlayButtonLoading: y,
                    isPlaying: C,
                    isPost: P,
                    onLikeClick: R,
                    onPlayClick: E,
                    release: A,
                    setIsDropdownOpen: k,
                    showCountdown: M,
                    showEditArtistPickDropdownMenuItem: _,
                    showEditFeaturedSoundDropdownMenuItem: O,
                    songPagePath: L,
                    soundBarButtonAction: U,
                    variant: F,
                    allowEdit: z,
                    onRemoveResource: B,
                    onEditSoundClicked: H
                } = e, {
                    authUser: W
                } = (0, G.aC)(), [V, Z] = (0, $.X)(), {
                    openModal: Q
                } = (0, D.useModal)(), {
                    id: Y
                } = A, K = "post" === F;
                return (0, l.jsx)("div", {
                    className: (0, o.m)("hidden flex-col gap-2 md:flex", !K && "cursor-default"),
                    ...Z,
                    children: (0, l.jsxs)(X.d1, {
                        dominantBackgroundColor: n,
                        variant: "sound-bar",
                        children: [(0, l.jsx)("div", {
                            className: (0, o.m)("absolute right-4 top-4 z-above1 flex text-white", (V || g) && K ? "flex" : "hidden"),
                            children: (0, l.jsxs)(T.N, {
                                isDropdownOpen: g,
                                setIsDropdownOpen: k,
                                variant: "inverted",
                                children: [W && O && (0, l.jsx)(EditFeaturedSoundMenuItem, {
                                    label: "Edit Featured Sound",
                                    webappUri: W.webappUri
                                }), !!W && !!W.artist && _ && (0, l.jsx)(EditArtistPickMenuItem, {
                                    label: "Edit Artist Pick",
                                    onClick: () => {
                                        var e, t;
                                        return Q(D.ModalType.EDIT_FEATURED_SOUND, {
                                            body: (0, l.jsx)(EditArtistPickModal, {
                                                artistId: null !== (t = null === (e = W.artist) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "",
                                                artistPickReleaseId: Y
                                            })
                                        })
                                    }
                                }), !P && (0, l.jsx)(j.R, {
                                    releaseId: Y,
                                    source: "Sound Bar"
                                }), (0, l.jsx)(S.G, {
                                    liked: b,
                                    onClick: R,
                                    releaseId: Y,
                                    releaseType: A.type
                                }), (0, l.jsx)(v.U, {
                                    releaseId: Y,
                                    source: "Collector Profile"
                                }), (0, l.jsx)(w.T, {
                                    releaseId: Y,
                                    source: "Collector Profile"
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative flex flex-1 items-stretch gap-4 overflow-hidden",
                            children: [(0, l.jsx)(X.y5, {
                                coverImageUrl: A.coverImage.url,
                                staticCoverImageUrl: null === (t = A.staticCoverImage) || void 0 === t ? void 0 : t.url,
                                variant: "sound-bar"
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-1 flex-col justify-between overflow-hidden",
                                children: [(0, l.jsxs)("div", {
                                    className: "flex w-full min-w-0 items-center justify-between gap-2",
                                    children: [(0, l.jsxs)("div", {
                                        className: "flex min-w-0 flex-col gap-1 pt-1",
                                        children: [(0, l.jsx)(X.J6, {
                                            name: A.artist.name,
                                            webappUri: A.artist.webappUri,
                                            userId: A.artist.user.id
                                        }), (0, l.jsx)(X.DX, {
                                            title: A.title,
                                            webappUri: L,
                                            isPlaying: C
                                        }), (0, l.jsx)(X.PO, {
                                            customSubTitle: s,
                                            totalMinted: A.totalMinted,
                                            hasSaleStarted: x,
                                            showCountdown: M,
                                            endsInTime: r,
                                            formattedStartCountDown: u,
                                            variant: "sound-bar"
                                        })]
                                    }), z && H ? (0, l.jsx)("button", {
                                        className: "z-above3 ml-auto mr-1 mt-1 flex h-5 w-5 flex-shrink-0 items-center self-start rounded-full outline-none transition-all duration-300 hover:brightness-70",
                                        onClick: H,
                                        children: (0, l.jsx)(i.G, {
                                            icon: d.Iw,
                                            className: "text-white",
                                            fontSize: 18
                                        })
                                    }) : null]
                                }), (0, l.jsxs)("div", {
                                    className: "flex items-center gap-3",
                                    children: [(0, l.jsx)("div", {
                                        className: "flex w-full self-end",
                                        children: (0, l.jsx)(f.u, {
                                            type: "noComments",
                                            releaseFrag: A,
                                            isTrackDisabled: !1,
                                            showBottomHalf: !1,
                                            enableTouchHandler: !0
                                        })
                                    }), K ? "Get Notified" === U ? A.spotifyPresaveCampaign ? (0, l.jsx)(h.B, {
                                        variant: "sound-bar",
                                        releaseId: Y
                                    }) : (0, l.jsx)(m.I, {
                                        type: "sound_bar",
                                        artistId: A.artist.id,
                                        userId: A.artist.user.id
                                    }) : (0, l.jsx)(N.z, {
                                        variant: "primary",
                                        className: "flex self-end !rounded-[100px] !border-[rgba(255,255,255,0.2)] !bg-transparent !p-3 transition-colors duration-300 ease-in-out hover:!border-white hover:![box-shadow:none]",
                                        label: "Collect",
                                        size: "S",
                                        onClick: p
                                    }) : null, (0, l.jsx)(I.J, {
                                        color: "white",
                                        playing: C,
                                        onClick: E,
                                        size: "xs",
                                        loading: y,
                                        currentListeningParty: a,
                                        rounded: !0
                                    })]
                                })]
                            })]
                        }), B && "composer" == F && (0, l.jsx)("button", {
                            className: "align-center absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black",
                            onClick: B,
                            children: (0, l.jsx)(i.G, {
                                icon: c.NB,
                                color: "white",
                                size: "sm"
                            })
                        })]
                    })
                })
            }

            function Mobile(e) {
                var t;
                let {
                    currentListeningParty: a,
                    customSubTitle: s,
                    dominantBackgroundColor: n,
                    endsInTime: r,
                    formattedStartCountDown: o,
                    handleCollectButtonClick: u,
                    hasSaleStarted: p,
                    isDropdownOpen: x,
                    isLiked: g,
                    isPlayButtonLoading: b,
                    isPlaying: y,
                    isPost: C,
                    onLikeClick: P,
                    onPlayClick: R,
                    release: E,
                    setIsDropdownOpen: A,
                    showCountdown: k,
                    showEditArtistPickDropdownMenuItem: M,
                    showEditFeaturedSoundDropdownMenuItem: _,
                    songPagePath: O,
                    soundBarButtonAction: L,
                    variant: U,
                    allowEdit: F,
                    onRemoveResource: z,
                    onEditSoundClicked: B
                } = e, {
                    authUser: H
                } = (0, G.aC)(), {
                    openModal: W
                } = (0, D.useModal)(), {
                    id: $
                } = E, V = "post" === U;
                return (0, l.jsx)("div", {
                    className: "flex flex-col gap-2 md:hidden",
                    children: (0, l.jsxs)(X.d1, {
                        variant: "sound-bar",
                        dominantBackgroundColor: n,
                        children: [V && (0, l.jsx)("div", {
                            className: "absolute right-4 top-4 z-above1 flex text-white",
                            children: (0, l.jsxs)(T.N, {
                                isDropdownOpen: x,
                                setIsDropdownOpen: A,
                                variant: "inverted",
                                children: [H && _ && (0, l.jsx)(EditFeaturedSoundMenuItem, {
                                    label: "Edit Featured Sound",
                                    webappUri: H.webappUri
                                }), !!H && !!H.artist && M && (0, l.jsx)(EditArtistPickMenuItem, {
                                    label: "Edit Artist Pick",
                                    onClick: () => {
                                        var e, t;
                                        return W(D.ModalType.EDIT_FEATURED_SOUND, {
                                            body: (0, l.jsx)(EditArtistPickModal, {
                                                artistId: null !== (t = null === (e = H.artist) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : "",
                                                artistPickReleaseId: $
                                            })
                                        })
                                    }
                                }), !C && (0, l.jsx)(j.R, {
                                    releaseId: $,
                                    source: "Sound Bar"
                                }), (0, l.jsx)(S.G, {
                                    liked: g,
                                    onClick: P,
                                    releaseId: $,
                                    releaseType: E.type
                                }), (0, l.jsx)(v.U, {
                                    releaseId: $,
                                    source: "Collector Profile"
                                }), (0, l.jsx)(w.T, {
                                    releaseId: $,
                                    source: "Collector Profile"
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative flex h-full flex-1 flex-col justify-between gap-3 overflow-hidden",
                            children: [(0, l.jsxs)("div", {
                                className: "flex w-full min-w-0 items-center gap-3",
                                children: [(0, l.jsx)(X.y5, {
                                    coverImageUrl: E.coverImage.url,
                                    staticCoverImageUrl: null === (t = E.staticCoverImage) || void 0 === t ? void 0 : t.url,
                                    variant: "sound-bar"
                                }), (0, l.jsxs)("div", {
                                    className: "flex w-full min-w-0 items-center justify-between",
                                    children: [(0, l.jsxs)("div", {
                                        className: "mr-auto flex min-w-0 flex-col gap-1",
                                        children: [(0, l.jsx)(X.J6, {
                                            name: E.artist.name,
                                            webappUri: E.artist.webappUri,
                                            userId: E.artist.user.id
                                        }), (0, l.jsx)(X.DX, {
                                            title: E.title,
                                            webappUri: O,
                                            isPlaying: y
                                        }), (0, l.jsx)(X.PO, {
                                            customSubTitle: s,
                                            totalMinted: E.totalMinted,
                                            hasSaleStarted: p,
                                            showCountdown: k,
                                            endsInTime: r,
                                            formattedStartCountDown: o,
                                            variant: "sound-bar"
                                        })]
                                    }), F && B ? (0, l.jsx)("button", {
                                        className: "z-above3 ml-auto mr-1 flex h-5 w-5 flex-shrink-0 items-center rounded-full outline-none",
                                        onClick: B,
                                        children: (0, l.jsx)(i.G, {
                                            icon: d.Iw,
                                            className: "text-white",
                                            fontSize: 18
                                        })
                                    }) : null]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, l.jsx)("div", {
                                    className: "flex w-full self-end",
                                    children: (0, l.jsx)(f.u, {
                                        type: "noComments",
                                        releaseFrag: E,
                                        isTrackDisabled: !1,
                                        showBottomHalf: !1,
                                        enableTouchHandler: !0
                                    })
                                }), V ? "Get Notified" === L ? E.spotifyPresaveCampaign ? (0, l.jsx)(h.B, {
                                    variant: "sound-bar",
                                    releaseId: $
                                }) : (0, l.jsx)(m.I, {
                                    type: "sound_bar",
                                    artistId: E.artist.id,
                                    userId: E.artist.user.id
                                }) : (0, l.jsx)(N.z, {
                                    variant: "primary",
                                    className: "flex self-end !rounded-[100px] !border-[rgba(255,255,255,0.2)] !bg-transparent !p-3 transition-colors duration-300 ease-in-out hover:!border-white hover:![box-shadow:none]",
                                    label: "Collect",
                                    size: "S",
                                    onClick: u
                                }) : null, (0, l.jsx)(I.J, {
                                    color: "white",
                                    playing: y,
                                    onClick: R,
                                    size: "xs",
                                    loading: b,
                                    currentListeningParty: a,
                                    rounded: !0
                                })]
                            })]
                        }), z && "composer" == U && (0, l.jsx)("button", {
                            className: "align-center absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-black",
                            onClick: z,
                            children: (0, l.jsx)(i.G, {
                                icon: c.NB,
                                color: "white",
                                size: "sm"
                            })
                        })]
                    })
                })
            }(s = n || (n = {})).Collect = "Collect", s.GetNotified = "Get Notified";
            let formatCountdown = e => {
                let t, {
                    days: a,
                    hours: s,
                    minutes: n,
                    seconds: l,
                    prefix: r
                } = e;
                return t = a > 0 ? `${a}d` : s > 0 ? `${s}h` : n > 0 ? `${n}m` : `${l}s`, `${r} ${t}`
            }
        },
        18173: function(e, t, a) {
            "use strict";
            a.d(t, {
                J6: function() {
                    return ArtistLink
                },
                d1: function() {
                    return ContainerBackground
                },
                y5: function() {
                    return CoverImage
                },
                rH: function() {
                    return b
                },
                PO: function() {
                    return Details
                },
                DX: function() {
                    return TitleLink
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(50868),
                l = a(21597),
                r = a(44361),
                i = a(58658),
                o = a(10228),
                d = a(88893),
                c = a(36374),
                u = a(44456),
                m = a(73950),
                p = a(97946),
                x = a(25347),
                h = a(85846);
            let f = {
                formatDurationToMS: function(e) {
                    return `${Math.floor(e/60)}m ${Math.floor(e%60)}s`
                }
            };
            var v = a(64571),
                g = a(95390);
            let b = "#1F1F1F";

            function CoverImage(e) {
                let {
                    coverImageUrl: t,
                    staticCoverImageUrl: a,
                    variant: n
                } = e;
                return (0, s.jsx)(y, {
                    variant: n,
                    children: (0, s.jsx)(m.G, {
                        alt: "featured release image",
                        src: (0, v.WO)({
                            coverImage: t,
                            staticCoverImage: a
                        }),
                        sizes: "128px",
                        fill: !0
                    })
                })
            }
            let y = (0, n.ZP)("div", "relative aspect-square flex-00auto overflow-hidden rounded-md", {
                variants: {
                    variant: {
                        "sound-bar": "w-[60px] md:w-[128px]",
                        "create-post-modal-sound": "w-[72px]"
                    }
                }
            });

            function ContainerBackground(e) {
                let {
                    children: t,
                    dominantBackgroundColor: a,
                    variant: n
                } = e;
                return (0, s.jsxs)(C, {
                    style: {
                        backgroundColor: a
                    },
                    variant: n,
                    children: [(0, s.jsx)("div", {
                        className: (0, r.m)("absolute inset-0 h-full w-full overflow-hidden rounded-xl bg-base800 opacity-50", ("playlist" === n || "create-post-modal-playlist" === n) && "rounded-b-none")
                    }), t]
                })
            }
            let C = (0, n.ZP)("div", "align-center relative flex w-full items-center rounded-xl", {
                variants: {
                    variant: {
                        "sound-bar": "h-auto md:h-[152px] p-3 md:p-4",
                        "create-post-modal-sound": "h-[96px] p-3",
                        playlist: "h-auto md:h-[152px] p-3 md:p-4 rounded-b-none",
                        "create-post-modal-playlist": "h-[96px] p-3 rounded-b-none",
                        "playlist-embed": "h-auto md:h-[152px] p-3 md:p-4"
                    }
                }
            });

            function ArtistLink(e) {
                let {
                    name: t,
                    userId: a,
                    webappUri: n
                } = e;
                return (0, s.jsx)(x.I, {
                    userHoverCardContent: (0, s.jsx)(o.U, {
                        userId: a
                    }),
                    align: "start",
                    trigger: (0, s.jsx)("div", {
                        className: "w-fit",
                        children: (0, s.jsx)(p.s, {
                            className: "line-clamp-1 min-w-0 text-ellipsis whitespace-nowrap font-base text-base-s font-medium text-white",
                            pathnameUri: (0, g.OU)(n),
                            children: t
                        })
                    }),
                    triggerAsChild: !0
                })
            }

            function TitleLink(e) {
                let {
                    isPlaying: t,
                    title: a,
                    webappUri: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex items-center gap-2 whitespace-nowrap font-title text-title-s font-medium text-white",
                    children: [t && (0, s.jsx)("div", {
                        className: "",
                        children: (0, s.jsx)(u.j, {
                            className: "!h-2",
                            smallBars: !0
                        })
                    }), (0, s.jsx)(p.s, {
                        className: "overflow-hidden text-ellipsis",
                        pathnameUri: (0, g.OU)(n),
                        children: a
                    })]
                })
            }

            function Details(e) {
                let {
                    customSubTitle: t,
                    variant: a
                } = e;
                return (0, s.jsx)("div", {
                    className: "flex items-center gap-1",
                    children: t || (0, s.jsxs)("div", {
                        className: "flex font-base text-base-s text-white opacity-60",
                        children: ["create-post-modal-sound" === a && (0, s.jsxs)("span", {
                            children: [f.formatDurationToMS(e.trackDuration), h.L_, "•", h.L_]
                        }), "sound-bar" === a && (e.hasSaleStarted ? e.showCountdown && e.endsInTime ? (0, s.jsxs)("span", {
                            children: ["Ends in ", (0, c.KT)({
                                timeStamp: e.endsInTime.getTime()
                            }), h.L_, "•", h.L_, (0, l.ZP)(e.totalMinted), " minted"]
                        }) : (0, s.jsxs)("span", {
                            children: [(0, l.ZP)(e.totalMinted), " minted"]
                        }) : (0, s.jsxs)("span", {
                            children: [e.formattedStartCountDown, h.L_, "•", h.L_, (0, l.ZP)(e.totalMinted), " minted"]
                        })), "playlist" === a && e.releaseCount > 0 && (0, s.jsxs)("span", {
                            children: [e.releaseCount, h.L_, (0, v.Lo)({
                                count: e.releaseCount,
                                word: "sound"
                            }), e.numReferralPurchases ? (0, s.jsxs)(s.Fragment, {
                                children: [h.L_, "•", h.L_, (0, s.jsx)(d.g, {
                                    className: "transition-[filter] duration-300 hover:brightness-130",
                                    playlistId: e.playlistId,
                                    mintsDriven: e.numReferralPurchases,
                                    infoAction: i.YW.PLAYLIST_PREVIEW_MINTS_DRIVEN_CLICK
                                })]
                            }) : null]
                        })]
                    })
                })
            }
        },
        97613: function(e, t, a) {
            "use strict";
            a.d(t, {
                B: function() {
                    return SpotifyPresaveButton
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(28839),
                r = a(55344);
            a(96960);
            var i = a(58658),
                o = a(89088),
                d = a(21956),
                c = a(22181),
                u = a(36750),
                m = a(3928),
                p = a(79491),
                x = a(64398),
                h = a(33488),
                f = a(42529),
                v = a(72102),
                g = a(44361),
                b = a(18499),
                y = a(69598),
                C = a(73950),
                S = a(28166);

            function DefaultVariant(e) {
                let {
                    isSaved: t,
                    isLoading: a,
                    onClick: n,
                    spotifyLink: l
                } = e;
                return (0, s.jsx)("div", {
                    className: "p-2 pt-0",
                    children: (0, s.jsx)(y.z, {
                        href: l,
                        testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                        className: (0, g.m)("font-title !text-title-xs font-medium", t ? "border border-white bg-transparent text-white hover:cursor-default" : "text-black focus:border-none focus:outline-none"),
                        variant: t ? "primary" : "secondary",
                        label: t ? "Presaved" : "Presave to claim",
                        fullWidth: !0,
                        leadingIcon: t ? (0, s.jsx)(v.G, {
                            icon: b.LE,
                            fontSize: 20
                        }) : (0, s.jsx)(C.G, {
                            alt: "spotify logo",
                            src: "/images/spotify_logo_green.png",
                            width: 16,
                            height: 16
                        }),
                        loading: a,
                        onClick: n
                    })
                })
            }

            function MobileHeroVariant(e) {
                let {
                    isSaved: t,
                    isLoading: a,
                    onClick: l,
                    spotifyLink: r
                } = e, i = (0, n.useMemo)(() => a || t ? null : (0, s.jsxs)("div", {
                    className: "text-left",
                    children: [(0, s.jsx)("p", {
                        className: "text-[12px]/[18px] font-medium",
                        children: "Presave"
                    }), (0, s.jsx)("p", {
                        className: "text-[10px]/[12px] opacity-80",
                        children: "to claim"
                    })]
                }), [a, t]);
                return (0, s.jsx)(y.z, {
                    href: r,
                    testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                    className: (0, g.m)("ml-auto min-w-[80px] max-w-none font-title md:ml-[unset]", t ? "cursor-default bg-transparent text-white hover:border-white hover:bg-transparent hover:text-white" : "text-black"),
                    variant: "tertiary",
                    label: t ? "Presaved" : "Presave to claim",
                    labelComponent: i,
                    leadingIcon: t ? (0, s.jsx)(v.G, {
                        icon: b.LE,
                        fontSize: 20
                    }) : (0, s.jsx)(C.G, {
                        alt: "spotify logo",
                        src: "/images/spotify_logo_green.png",
                        width: 22,
                        height: 22
                    }),
                    loading: a,
                    onClick: l
                })
            }

            function HeroVariant(e) {
                let {
                    isSaved: t,
                    isLoading: a,
                    onClick: l,
                    spotifyLink: r
                } = e, i = (0, n.useMemo)(() => a || t ? null : (0, s.jsxs)("div", {
                    className: "text-left",
                    children: [(0, s.jsx)("p", {
                        className: "text-[12px]/[18px] font-medium",
                        children: "Presave to Spotify"
                    }), (0, s.jsx)("p", {
                        className: "text-[10px]/[12px] opacity-80",
                        children: "Unlock Early Listen"
                    })]
                }), [a, t]);
                return (0, s.jsx)(y.z, {
                    href: r,
                    testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                    className: (0, g.m)("ml-auto min-w-[164px] max-w-none font-title md:ml-[unset]", t ? "cursor-default bg-transparent text-white hover:border-white hover:bg-transparent hover:text-white" : "text-black"),
                    variant: "tertiary",
                    label: t ? "Presaved" : "Presave to claim",
                    labelComponent: i,
                    leadingIcon: t ? (0, s.jsx)(v.G, {
                        icon: b.LE,
                        fontSize: 20
                    }) : (0, s.jsx)(C.G, {
                        alt: "spotify logo",
                        src: "/images/spotify_logo_green.png",
                        width: 22,
                        height: 22
                    }),
                    loading: a,
                    onClick: l
                })
            }

            function MintPanelVariant(e) {
                let {
                    isSaved: t,
                    isLoading: a,
                    onClick: n,
                    spotifyLink: l
                } = e;
                return (0, s.jsx)(y.z, {
                    href: l,
                    testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                    className: (0, g.m)("max-w-none font-title focus-visible:bg-transparent aria-pressed:bg-transparent", t ? "hover:shadow-none focus:border-none focus:outline-none hover:cursor-default hover:border-none hover:outline-none" : "bg-black text-white focus:border-none focus:bg-black focus:outline-none hover:bg-black"),
                    variant: "primary",
                    label: t ? "Presaved" : "Presave to claim",
                    fullWidth: !0,
                    leadingIcon: t ? (0, s.jsx)(v.G, {
                        icon: b.LE,
                        fontSize: 20
                    }) : (0, s.jsx)(C.G, {
                        alt: "spotify logo",
                        src: "/images/spotify_logo_green.png",
                        width: 16,
                        height: 16
                    }),
                    loading: a,
                    onClick: n
                })
            }
            var j = a(97700),
                w = a(94050);

            function NotificationVariant(e) {
                let {
                    isSaved: t,
                    onClick: a,
                    spotifyLink: n
                } = e;
                return (0, s.jsx)("div", {
                    children: (0, s.jsx)(w.xh, {
                        icon: (0, s.jsx)(v.G, {
                            icon: j.pQ,
                            className: "-rotate-90"
                        }),
                        onClick: a,
                        label: t ? "Presaved" : "Presave",
                        href: n
                    })
                })
            }
            var T = a(11643);
            let N = "self-end !rounded-[100px] !border-[rgba(255,255,255,0.2)] !bg-transparent !p-3 transition-colors duration-300 ease-in-out hover:!border-white hover:![box-shadow:none]";

            function SoundBarVariant(e) {
                let {
                    isSaved: t,
                    isLoading: a,
                    onClick: n,
                    spotifyLink: l
                } = e, r = (0, s.jsx)(v.G, {
                    icon: t ? b.LE : T.H,
                    fontSize: 14,
                    className: "text-white"
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "hidden md:flex",
                        children: (0, s.jsx)(y.z, {
                            href: l,
                            testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                            className: N,
                            variant: "primary",
                            label: t ? "Presaved" : "Presave to listen",
                            leadingIcon: r,
                            loading: a,
                            onClick: n,
                            size: "S"
                        })
                    }), (0, s.jsx)("div", {
                        className: "md:hidden",
                        children: (0, s.jsx)(y.z, {
                            href: l,
                            testId: S.n.SPOTIFY_PRESAVE_BUTTON,
                            className: N,
                            variant: "primary",
                            label: t ? "Presaved" : "Presave",
                            leadingIcon: r,
                            loading: a,
                            onClick: n,
                            size: "S"
                        })
                    })]
                })
            }

            function SpotifyPresaveButton(e) {
                let {
                    releaseId: t,
                    variant: a
                } = e, n = (0, h.c6)(), {
                    openModal: u
                } = (0, c.useModal)(), {
                    isReleasePresaved: v,
                    setQueryData: g
                } = (0, p.L)({
                    releaseId: t
                }), {
                    mutateAsync: b,
                    isLoading: y
                } = (0, m.Dbo)(m.pkE, {}), {
                    data: C
                } = (0, m.aM2)(m.$RC, {
                    staleTime: 0,
                    variables: {
                        id: t
                    }
                }), S = "loading" === n.type || y, j = (0, f.R)(async () => {
                    try {
                        let a = await b({
                            releaseId: t
                        });
                        if ("MutationPresaveReleaseSuccess" === a.data.presaveRelease.__typename) {
                            var e;
                            g(e => e ? (0, l.ZP)(e, e => {
                                for (let a of e.data.userReleaseStatus)
                                    if (a.releaseId === t) {
                                        a.isPreSaved = !0;
                                        break
                                    }
                            }) : {
                                data: {
                                    userReleaseStatus: [{
                                        releaseId: t,
                                        isPreSaved: !0
                                    }]
                                }
                            }), (null == C ? void 0 : null === (e = C.data.release) || void 0 === e ? void 0 : e.id) && u(c.ModalType.SPOTIFY_CONNECTION_SUCCESS, {
                                body: (0, s.jsx)(o.O, {
                                    releaseFrag: C.data.release
                                })
                            })
                        } else(0, x.H)({
                            action: i.pe.SPOTIFY_PRESAVE_ERROR,
                            errorType: i.QS.SPOTIFY_PRESAVE,
                            isArtistOnlyPage: !1,
                            level: "error",
                            feature: i.h6.SPOTIFY_PRESAVE,
                            error: Error(a.data.presaveRelease.message),
                            message: a.data.presaveRelease.message,
                            toast: "There was an error presaving this release. Please try again."
                        })
                    } catch (e) {
                        (0, x.H)({
                            action: i.pe.SPOTIFY_PRESAVE_ERROR,
                            errorType: i.QS.SPOTIFY_PRESAVE,
                            isArtistOnlyPage: !1,
                            level: "error",
                            feature: i.h6.SPOTIFY_PRESAVE,
                            error: e,
                            message: "Error presaving Spotify release",
                            toast: "There was an error presaving this release. Please try again."
                        })
                    }
                }), w = (0, f.R)(async () => {
                    if (!v) switch (n.type) {
                        case "spotify-auth":
                            let e = h.LJ.onTabSync(() => {
                                    var a;
                                    (null === (a = h.LJ.state.value) || void 0 === a ? void 0 : a.justConnected) && (j(), e(), clearTimeout(t))
                                }),
                                t = setTimeout(() => {
                                    e()
                                }, (0, r.Z)("2 minutes"));
                            break;
                        case "not-authenticated":
                            (0, d.SR)();
                            break;
                        case "already-connected":
                            j()
                    }
                });
                switch (a) {
                    case "sound-bar":
                        return (0, s.jsx)(SoundBarVariant, {
                            isLoading: S,
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        });
                    case "hero":
                        return (0, s.jsx)(HeroVariant, {
                            isLoading: S,
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        });
                    case "mobile-hero":
                        return (0, s.jsx)(MobileHeroVariant, {
                            isLoading: S,
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        });
                    case "mint-component":
                        return (0, s.jsx)(MintPanelVariant, {
                            isLoading: S,
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        });
                    case "notification":
                        return (0, s.jsx)(NotificationVariant, {
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        });
                    default:
                        return (0, s.jsx)(DefaultVariant, {
                            isLoading: S,
                            isSaved: v,
                            onClick: w,
                            spotifyLink: n.link
                        })
                }
            }(0, u.c)({
                trigger: [m.pkE],
                refetch: [m.qxh, m.pVX]
            })
        },
        44497: function(e, t, a) {
            "use strict";
            a.d(t, {
                u: function() {
                    return Waveform
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(49542),
                r = a(22248);
            a(96960);
            var i = a(8205);
            (0, i.zo)("div", {
                padding: "3px 5px",
                letterSpacing: "0.04em",
                borderRadius: 4,
                backgroundColor: "#000",
                base: "S",
                lineHeight: "14px",
                color: "$neutral100",
                fontWeight: 500,
                position: "absolute",
                top: 54,
                "@tablet": {
                    top: 48
                },
                variants: {
                    side: {
                        right: {
                            right: "5px",
                            "@tablet": {
                                right: "15px"
                            }
                        }
                    }
                }
            }), (0, i.zo)("p", {
                position: "absolute",
                margin: "0.5rem",
                right: 0,
                padding: "7px 12px 5px",
                color: "$grey900",
                borderRadius: "16px",
                fontSize: "12px",
                background: "$white",
                lineHeight: 1,
                whiteSpace: "nowrap",
                userSelect: "none"
            });
            let o = (0, i.zo)("div", {
                    display: "flex",
                    align: "start",
                    pointerEvents: "none",
                    position: "absolute",
                    top: -28,
                    width: "100%"
                }),
                d = (0, i.F4)({
                    "0%": {
                        transform: "scaleX(0)"
                    },
                    "100%": {
                        transform: "scaleX(1)"
                    }
                }),
                c = (0, i.zo)("div", {
                    animationDuration: "1000ms",
                    animationFillMode: "forwards",
                    animationName: `${d}`,
                    animationTimingFunction: "ease-in",
                    height: 1,
                    width: "100%",
                    position: "absolute",
                    top: "60%",
                    backgroundColor: "$grey300",
                    zIndex: "$below"
                });
            var u = a(49674),
                m = a(13286),
                p = a(43158),
                x = a(3928),
                h = a(51020),
                f = a(81688),
                v = a(267),
                g = a(35341),
                b = a(4290),
                y = a(37464),
                C = a(64571),
                S = a(85787),
                j = a(73534),
                w = a(47226),
                T = a(19791),
                N = a(72102),
                I = a(5221),
                P = a(28783),
                R = a(31460),
                E = a(59820),
                A = a(77134),
                k = a(64638),
                M = a(8094),
                _ = a(28987),
                O = a(68753),
                L = a(97946),
                D = a(98335),
                U = a(96301),
                F = a(22181),
                z = a(42529),
                G = a(95390);

            function BlackCommentCard(e) {
                var t;
                let {
                    postId: a,
                    username: n,
                    publicAddress: r,
                    content: i,
                    lexicalContent: o,
                    avatarUrl: d,
                    isArtist: c,
                    webappUri: u,
                    waveformTimestamp: m,
                    postedAt: p,
                    totalEditions: x
                } = e, {
                    openModal: h
                } = (0, F.useModal)(), {
                    authUser: f
                } = (0, U.aC)(), v = (0, z.R)(() => {
                    h(F.ModalType.DELETE_POST_CONFIRMATION, {
                        body: (0, s.jsx)(E.zq, {
                            postId: a
                        })
                    })
                }), g = (0, s.jsxs)("div", {
                    className: "flex justify-between",
                    children: [(0, s.jsx)(L.s, {
                        pathnameUri: (0, G.OU)(u),
                        children: (0, s.jsxs)("div", {
                            className: "flex items-center gap-1.5",
                            children: [(0, s.jsx)("h2", {
                                className: "max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap font-base text-base-m font-semibold text-white",
                                children: n
                            }), c && (0, s.jsx)(D.O, {
                                noTooltip: !0,
                                size: 18
                            })]
                        })
                    }), (null == f ? void 0 : null === (t = f.roles) || void 0 === t ? void 0 : t.isAdmin) && (0, s.jsx)("div", {
                        children: (0, s.jsxs)(_.h, {
                            children: [(0, s.jsx)(M.Xi, {
                                onClick: v,
                                children: (0, s.jsxs)("div", {
                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                    children: [(0, s.jsx)(N.G, {
                                        icon: P.$,
                                        size: "lg"
                                    }), "Delete (Admin)"]
                                })
                            }), (0, s.jsx)(M.Xi, {
                                onClick: () => {
                                    window.open(`${window.location.origin}/admin/moderate/${r}`, "_blank")
                                },
                                children: (0, s.jsxs)("div", {
                                    className: "flex items-center gap-3 font-base text-base-m font-medium text-destructive700",
                                    children: [(0, s.jsx)(N.G, {
                                        icon: R.wO,
                                        size: "lg"
                                    }), "Block User (Admin)"]
                                })
                            })]
                        })
                    })]
                });
                return (0, s.jsxs)("div", {
                    className: (0, l.default)("relative flex h-auto max-w-[355px] overflow-hidden rounded-md bg-neutral900", "w-[350px] items-start px-1 py-2"),
                    children: [(0, s.jsx)("div", {
                        className: "flex",
                        children: (0, s.jsx)("div", {
                            className: "mr-2 h-12 w-12",
                            children: (0, s.jsx)(O.q, {
                                size: 48,
                                src: d,
                                username: n,
                                borderRadius: "50%",
                                walletAddress: r,
                                hasShadow: !0,
                                webappUri: u
                            })
                        })
                    }), (0, s.jsxs)("div", {
                        className: " flex h-auto w-full flex-col overflow-hidden",
                        children: [g, (0, s.jsxs)("div", {
                            className: "flex items-center gap-1 font-base text-base-xs text-base100 opacity-50",
                            children: [(0, s.jsx)("span", {
                                children: (0, T.nH)(m)
                            }), (0, s.jsx)("span", {
                                children: "•"
                            }), (0, s.jsx)("span", {
                                children: (0, I.default)(p, "MM/dd/yy")
                            }), !!x && (!!p || !!m) && (0, s.jsx)("span", {
                                children: "•"
                            }), !!x && (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsxs)("span", {
                                    children: [x, "\xa0", (0, C.Lo)({
                                        word: "edition",
                                        count: x
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(A.y, {
                            maxHeightClassName: "max-h-[40px]",
                            className: "from-neutral900 from-40%",
                            buttonClassName: "!text-white hover:bg-transparent text-base-s",
                            enabled: !0,
                            children: null != o ? (0, s.jsx)(k.X, {
                                state: o,
                                className: "overflow-hidden text-ellipsis font-base text-base-m text-white"
                            }) : (0, s.jsx)("div", {
                                className: "break-words",
                                children: i
                            })
                        })]
                    })]
                })
            }
            var B = a(36619),
                H = a(46061),
                W = a(25828),
                $ = a(85846);
            let V = n.memo(function(e) {
                    var t, a;
                    let {
                        isOpen: l,
                        width: r,
                        setRealTimeHoveredCommentId: i,
                        playComment: o,
                        isOverCollapseThreshold: d = !1,
                        waveformPost: c,
                        trackDuration: u
                    } = e, {
                        tablet: m
                    } = p.MediaQuery.useContainer(), h = !m && d ? $.W7 : $.ud, {
                        songSlot: f,
                        id: v,
                        content: g,
                        lexicalContent: b,
                        user: {
                            publicAddress: y,
                            artist: j,
                            avatar: N,
                            username: I,
                            webappUri: P
                        },
                        updatedAt: R,
                        nftsCount: E,
                        postId: A
                    } = (0, x.S3c)(x.MxQ, c), k = (0, W.F)(b), M = (0, n.useMemo)(() => new Date(R), [R]), _ = (0, T.UX)({
                        songSlot: f,
                        totalSlots: w.ug,
                        trackDuration: u
                    }), L = (0, C.ZJ)({
                        availableWidth: r,
                        avatarSize: h,
                        commentTimestamp: _,
                        trackDuration: u
                    }), D = (0, n.useCallback)(() => {
                        o({
                            commentTimestamp: _,
                            commentId: v
                        })
                    }, [v, o, _]);
                    return m ? (0, s.jsx)(B.HoverCard, {
                        open: l,
                        children: (0, s.jsxs)(Z, {
                            css: {
                                left: `${L}px`
                            },
                            isOpen: l,
                            after: !0,
                            children: [(0, s.jsx)(B.HoverCard.StyledContent, {
                                side: "top",
                                hideWhenDetached: !0,
                                onMouseEnter: () => i(v),
                                onMouseLeave: () => i(null),
                                sideOffset: 12,
                                children: (0, s.jsx)(BlackCommentCard, {
                                    postId: A,
                                    username: I,
                                    publicAddress: y,
                                    content: g,
                                    lexicalContent: k,
                                    waveformTimestamp: _,
                                    postedAt: M,
                                    avatarUrl: null !== (a = null == N ? void 0 : N.url) && void 0 !== a ? a : null,
                                    isArtist: !!(null == j ? void 0 : j.id),
                                    webappUri: P,
                                    totalEditions: E
                                })
                            }), (0, s.jsx)(B.HoverCard.Trigger, {
                                onClick: D,
                                onMouseEnter: () => i(v),
                                onMouseLeave: () => i(null),
                                children: (0, s.jsx)(O.q, {
                                    src: null == N ? void 0 : N.url,
                                    size: $.ud,
                                    walletAddress: y,
                                    disableLink: !0,
                                    webappUri: P,
                                    borderRadius: "50%"
                                })
                            })]
                        }, v)
                    }, v) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(S.M, {
                            mode: "wait",
                            children: l && (0, s.jsx)(Q, {
                                initial: {
                                    opacity: 0
                                },
                                exit: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    duration: .1,
                                    delay: 0
                                },
                                children: (0, s.jsx)(Y, {
                                    children: (0, s.jsx)(BlackCommentCard, {
                                        postId: A,
                                        username: I,
                                        publicAddress: y,
                                        content: g,
                                        lexicalContent: k,
                                        waveformTimestamp: _,
                                        postedAt: M,
                                        avatarUrl: null !== (t = null == N ? void 0 : N.url) && void 0 !== t ? t : null,
                                        isArtist: !!(null == j ? void 0 : j.id),
                                        webappUri: P,
                                        totalEditions: E
                                    })
                                })
                            })
                        }), (0, s.jsx)(Z, {
                            css: {
                                left: `${L}px`
                            },
                            isOpen: l && !d,
                            after: !d,
                            children: d ? (0, s.jsx)(X, {}) : (0, s.jsx)(O.q, {
                                src: null == N ? void 0 : N.url,
                                size: $.ud,
                                walletAddress: y,
                                disableLink: !0,
                                webappUri: P,
                                borderRadius: "50%",
                                priority: !0
                            })
                        }, v)]
                    })
                }),
                Z = (0, i.zo)("div", {
                    pointerEvents: "all",
                    position: "absolute",
                    marginTop: 40,
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                    variants: {
                        isOpen: {
                            true: {
                                transform: "scale(1.5)",
                                zIndex: "$above1"
                            }
                        },
                        after: {
                            true: {
                                "&::after": {
                                    content: "",
                                    position: "absolute",
                                    height: $.ud,
                                    width: $.ud,
                                    border: "1px solid white",
                                    top: 0,
                                    left: 0,
                                    borderRadius: "50%",
                                    pointerEvents: "none"
                                }
                            }
                        }
                    }
                }),
                Q = (0, i.zo)(j.E.div, {
                    position: "absolute",
                    bottom: -15,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: "$tooltip"
                }),
                Y = (0, i.zo)("div", { ...H._R,
                    height: "unset"
                }),
                X = (0, i.zo)("div", {
                    width: $.W7,
                    height: $.W7,
                    borderRadius: "50%",
                    backgroundColor: "$fuchsia500",
                    marginTop: 10
                }),
                K = n.memo(function(e) {
                    let {
                        releaseId: t,
                        trackId: a,
                        trackDuration: l,
                        width: r,
                        seekToSec: i
                    } = e, {
                        data: o
                    } = (0, x.aM2)(x.lMr, {
                        variables: {
                            releaseId: t
                        },
                        staleTime: 1 / 0
                    }), d = null == o ? void 0 : o.data.releaseWaveformPosts, [c, u] = (0, n.useState)(null), m = (0, y.I)(c), [p, h] = (0, n.useState)(null), [v, S] = (0, n.useState)(null), [j, w] = (0, n.useState)(0), [T, N] = (0, n.useState)(null), {
                        position: I
                    } = (0, g.E)(), {
                        activeTrackId: P,
                        playing: R
                    } = (0, f.PZ)(), E = P === a, A = (0, n.useCallback)(e => {
                        let {
                            commentId: t,
                            commentTimestamp: a
                        } = e;
                        S(t), i(a)
                    }, [i]), k = (0, n.useCallback)(() => {
                        N((0, b.k$)())
                    }, []);
                    (0, n.useEffect)(() => {
                        c ? (h(c), m.current = c) : k()
                    }, [k, c, m]), (0, n.useEffect)(() => {
                        let e = 0;
                        return e = window.setTimeout(() => {
                            m.current || (h(null), N(null))
                        }, 200), () => clearTimeout(e)
                    }, [T, m]), (0, n.useEffect)(() => {
                        if (p) {
                            S(p), w(0);
                            return
                        }
                        if (!R) return S(null);
                        let e = Date.now(),
                            t = e - j;
                        if (R && E && t >= 1e3) {
                            let a = (0, C.Yg)({
                                    position: I,
                                    trackDuration: l
                                }),
                                s = null == d ? void 0 : d.find(e => (null == e ? void 0 : e.songSlot) === a);
                            s ? S(t => (t !== s.id && w(e), s.id)) : t >= 5e3 && (S(null), w(0))
                        }
                    }, [I, P, j, R, E, p, c, l, d]);
                    let M = !!d && d.length > 20;
                    return d ? (0, s.jsx)(s.Fragment, {
                        children: d.map(e => (0, s.jsx)(V, {
                            waveformPost: e,
                            trackDuration: l,
                            isOpen: !!v && v === e.id,
                            setRealTimeHoveredCommentId: u,
                            playComment: A,
                            width: r,
                            isOverCollapseThreshold: M
                        }, e.id))
                    }) : null
                }),
                q = 2 / 3,
                J = 3 / 4;

            function Waveform(e) {
                let t, {
                        isTrackDisabled: a,
                        showBottomHalf: i,
                        enableTouchHandler: d,
                        ...b
                    } = e,
                    y = "preview" === b.type ? b.audioSrc : void 0,
                    {
                        tablet: C
                    } = (0, p.useMediaQuery)(),
                    {
                        ready: S,
                        activeTrackId: j,
                        playing: w
                    } = (0, f.PZ)(),
                    [T, N] = n.useState(0),
                    I = n.useRef(null),
                    P = n.useRef(null),
                    [R, E] = n.useState(0),
                    [A, k] = n.useState(),
                    M = "hsla(0, 100%, 100%, 1)",
                    _ = "hsla(0, 100%, 100%, 0.4)",
                    O = "withComments" === b.type;
                t = i ? 48 : 20;
                let L = "preview" === b.type ? b.track : (0, x.S3c)(x.coR, b.releaseFrag).track,
                    D = "preview" === b.type ? null : (0, x.S3c)(x.coR, b.releaseFrag),
                    U = L.duration,
                    F = (0, h.R)({
                        listeningParty: null == D ? void 0 : D.listeningParty,
                        releaseId: null == D ? void 0 : D.id
                    }),
                    z = a || !!F,
                    {
                        percentComplete: G
                    } = (0, g.E)(),
                    B = !!y || L.id === j,
                    H = z ? 0 : B ? G / 100 : 0,
                    W = Math.floor(H * T / 4),
                    $ = n.useMemo(() => {
                        let e = L.normalizedPeaks || [],
                            t = Math.floor(T / 4);
                        return (0, m.Z)(e, t)
                    }, [L.normalizedPeaks, T]),
                    V = n.useCallback(() => {
                        I.current && (0, u.nK)({
                            canvasRef: I,
                            normalizedPeaks: $,
                            maxBarHeight: 4 * t,
                            barWidth: 8,
                            barMargin: 8,
                            playingBarNum: W,
                            hoverXCoord: 4 * R,
                            isActiveTrack: B,
                            unPlayedColor: _,
                            playedColor: M,
                            showBottomHalf: i,
                            gapHeight: -1,
                            bottomHalfColor: "hsla(0, 0%, 0%, 0.2)",
                            topHalfHeight: i ? C ? J : q : 1,
                            bottomHalfHeight: i ? 1 - (C ? J : q) : void 0,
                            hoverColor: "hsla(0, 100%, 100%, 0.6)"
                        })
                    }, [$, t, W, R, B, _, M, C, i]);
                n.useEffect(() => {
                    V()
                }, [V]);
                let Z = n.useCallback(() => {
                    E(0)
                }, []);
                n.useEffect(() => {
                    let handleVisibilityChange = () => {
                        "hidden" === document.visibilityState && Z()
                    };
                    return document.addEventListener("visibilitychange", handleVisibilityChange), () => document.removeEventListener("visibilitychange", handleVisibilityChange)
                }, [Z]);
                let Q = n.useCallback(e => {
                        z || requestAnimationFrame(() => {
                            I.current && E(e.clientX - I.current.getBoundingClientRect().left)
                        })
                    }, [z]),
                    Y = n.useCallback(e => {
                        z || (y ? (0, f.Db)({
                            audioSrc: y
                        }) : (0, f.Db)({
                            trackId: L.id
                        }), k(e))
                    }, [y, z, L.id]);
                n.useEffect(() => {
                    B && A && S && ((0, f.O7)(A), w || (0, v.hY)(), k(void 0))
                }, [B, S, A, w]);
                let X = n.useCallback(e => {
                        if (!I.current || z) return;
                        let t = e.clientX - I.current.getBoundingClientRect().left,
                            a = t / T;
                        Y(Math.floor(U * a))
                    }, [z, Y, U, T]),
                    ee = n.useCallback(e => {
                        var t, a;
                        if (!I.current || z) return;
                        let s = null !== (a = null === (t = e.touches[0]) || void 0 === t ? void 0 : t.clientX) && void 0 !== a ? a : 0,
                            n = s - I.current.getBoundingClientRect().left,
                            l = n / T;
                        Y(Math.floor(U * l))
                    }, [z, Y, U, T]),
                    et = n.useCallback(e => {
                        e.preventDefault()
                    }, []);
                return n.useEffect(() => {
                    let handleResize = () => {
                            P.current && N(P.current.offsetWidth)
                        },
                        e = (0, r.Z)(handleResize, 200);
                    return window.addEventListener("resize", e), handleResize(), () => window.removeEventListener("resize", e)
                }, [P]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        ref: P,
                        className: (0, l.default)("relative w-full", i ? "h-12 pt-4 md:h-12 md:pt-3" : "h-5"),
                        children: [(0, s.jsx)("canvas", {
                            style: {
                                display: "block",
                                cursor: z ? "default" : "pointer",
                                backgroundColor: "transparent",
                                WebkitTapHighlightColor: "transparent",
                                width: "100%",
                                height: t
                            },
                            ref: I,
                            width: 4 * T,
                            height: 4 * t,
                            onBlur: Z,
                            onMouseOut: Z,
                            onMouseMove: Q,
                            onClick: X,
                            onTouchStart: d ? ee : void 0,
                            onTouchEnd: d ? et : void 0
                        }), (0, s.jsx)(c, {})]
                    }), O && D ? (0, s.jsx)(o, {
                        children: (0, s.jsx)(K, {
                            seekToSec: Y,
                            width: T,
                            releaseId: D.id,
                            trackDuration: U,
                            trackId: L.id
                        })
                    }) : null]
                })
            }
        },
        58983: function(e, t, a) {
            "use strict";
            a.d(t, {
                KV: function() {
                    return n
                },
                Lq: function() {
                    return getColor
                },
                fy: function() {
                    return s
                },
                i1: function() {
                    return l
                }
            });
            let s = .99,
                n = 1,
                l = .4,
                getColor = e => {
                    let {
                        state: t,
                        gradient: a
                    } = e;
                    return "unplayed" === t ? a ? "hsla(214, 8%, 84%, .5)" : "hsla(214, 8%, 84%, 1)" : "hsla(160, 84%, 39%, 1)"
                }
        },
        49674: function(e, t, a) {
            "use strict";
            a.d(t, {
                nK: function() {
                    return paintCanvas
                }
            });
            var s = a(58983);

            function paintCanvas(e) {
                let {
                    canvasRef: t,
                    normalizedPeaks: a,
                    maxBarHeight: l,
                    barWidth: r,
                    barMargin: i,
                    playingBarNum: o,
                    hoverXCoord: d,
                    isActiveTrack: c,
                    unPlayedColor: u = "hsla(214, 8%, 84%, 1)",
                    playedColor: m = "hsla(197, 53%, 50%, 1)",
                    showBottomHalf: p = !0,
                    topHalfHeight: x,
                    bottomHalfHeight: h,
                    gapHeight: f = 2,
                    bottomHalfColor: v,
                    hoverColor: g
                } = e, b = t.current, y = null == b ? void 0 : b.getContext("2d");
                if (!b || !y) return;
                let C = null != x ? x : n,
                    S = null != h ? h : s.i1;
                y.fillStyle = "#F3F4F6", y.clearRect(0, 0, b.width, b.height);
                let j = !!d;
                y.beginPath(), a.forEach((e, t) => {
                    let a = barCoordinates({
                        index: t,
                        barWidth: r,
                        barMargin: i,
                        maxBarHeight: l,
                        amplitude: e,
                        containerHeight: b.height,
                        topWaveHeight: x
                    });
                    roundRect({
                        ctx: y,
                        x: a.x,
                        y: a.y,
                        w: a.w,
                        h: a.h * C,
                        r: 1.5
                    });
                    let s = d >= a.x;
                    fillBar({
                        ctx: y,
                        barWidth: r,
                        maxBarHeight: l,
                        unPlayedColor: u,
                        playedColor: m,
                        opacity: 1,
                        isHovering: j,
                        withinHover: s,
                        alreadyPlayed: t < o,
                        isActiveTrack: c,
                        isTopWave: !0,
                        hoverColor: g
                    })
                }), y.closePath(), y.beginPath(), a.forEach((e, t) => {
                    let a = barCoordinates({
                        index: t,
                        barWidth: r,
                        barMargin: i,
                        maxBarHeight: l,
                        amplitude: e,
                        containerHeight: b.height,
                        topWaveHeight: x
                    });
                    p && roundRect({
                        ctx: y,
                        x: a.x,
                        y: a.y + a.h * C + f,
                        w: a.w,
                        h: a.h * S,
                        r: 1.5
                    });
                    let s = d >= a.x;
                    fillBar({
                        ctx: y,
                        barWidth: r,
                        maxBarHeight: l,
                        unPlayedColor: u,
                        playedColor: m,
                        opacity: .5,
                        isHovering: j,
                        withinHover: s,
                        alreadyPlayed: t < o,
                        isActiveTrack: c,
                        isTopWave: !1,
                        bottomHalfColor: v
                    })
                }), y.closePath()
            }

            function fillBar(e) {
                let {
                    ctx: t,
                    unPlayedColor: a,
                    playedColor: s,
                    opacity: n,
                    isHovering: l,
                    withinHover: r,
                    alreadyPlayed: i,
                    isActiveTrack: o,
                    isTopWave: d,
                    bottomHalfColor: c,
                    hoverColor: u
                } = e;

                function colorBar() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    return t.globalAlpha = n, e
                }
                c && !d ? t.fillStyle = colorBar(c) : l ? o ? r && !i || !r && i ? t.fillStyle = colorBar(null != u ? u : function(e, t) {
                    let [a, s, n] = e.replace(/hsla?\(/, "").replace(/\)/, "").split(",");
                    return `hsla(${a}, ${s}, ${n}, 0.5)`
                }(s, 0)) : r ? t.fillStyle = colorBar() : t.fillStyle = colorBar(a) : t.fillStyle = colorBar() : i ? t.fillStyle = colorBar() : t.fillStyle = colorBar(a), t.fill()
            }
            let n = .6;

            function barCoordinates(e) {
                let {
                    index: t,
                    barWidth: a,
                    maxBarHeight: s,
                    barMargin: l,
                    amplitude: r,
                    containerHeight: i,
                    topWaveHeight: o = n
                } = e, d = r / 100 * s;
                return {
                    x: t * (a + l),
                    y: (i - d) * o,
                    w: a,
                    h: d
                }
            }

            function roundRect(e) {
                let {
                    ctx: t,
                    x: a,
                    y: s,
                    w: n,
                    h: l
                } = e, {
                    r
                } = e;
                return n < 2 * r && (r = n / 2), l < 2 * r && (r = l / 2), t.beginPath(), t.moveTo(a + r, s), t.arcTo(a + n, s, a + n, s + l, r), t.arcTo(a + n, s + l, a, s + l, r), t.arcTo(a, s + l, a, s, r), t.arcTo(a, s, a + n, s, r), t.closePath(), t
            }
        },
        13286: function(e, t, a) {
            "use strict";

            function waveformAvgChunker(e, t) {
                let a = Math.floor(e.length / t),
                    s = function(e, t, a) {
                        let s = Number(e),
                            n = 0,
                            l = 0,
                            r = [];
                        for (; n < s;) {
                            let e;
                            if (l >= a.length) break;
                            e = n === s - 1 ? a.slice(l) : a.slice(l, l += t);
                            let i = Math.round(e.reduce((e, t) => e + t, 0) / e.length + 5);
                            r.push(i % 2 ? i : i + 1), n += 1
                        }
                        return r
                    }(t, a, e);
                return s
            }
            a.d(t, {
                Z: function() {
                    return waveformAvgChunker
                }
            })
        },
        78714: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return AddToQueueMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(8205);
            let AddToQueue = () => (0, s.jsx)("svg", {
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 640 512",
                children: (0, s.jsx)("path", {
                    fill: "currentColor",
                    d: "M0 88C0 74.8 10.8 64 24 64c133.4 0 266.7 0 400 0c13.3 0 24 10.8 24 24c0 13.3-10.7 24-24 24c-133.4 0-266.7 0-400 0C10.8 112 0 101.3 0 88zM0 248c0-13.3 10.8-24 24-24c90.7 0 181.3 0 272 0c13.3 0 24 10.7 24 24s-10.7 24-24 24c-90.7 0-181.3 0-272 0c-13.3 0-24-10.7-24-24zM168 432L24 432c-13.3 0-24-10.7-24-24s10.8-24 24-24c48 0 96 0 144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zm472-64c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM480 304l0 48c-16 0-32 0-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16c16 0 32 0 48 0l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16c0-16 0-32 0-48c16 0 32 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16c-16 0-32 0-48 0c0-16 0-32 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16z"
                })
            });
            var l = a(75747),
                r = a(58061),
                i = a(72777),
                o = a(28166),
                d = a(8094);
            let AddToQueueMenuItem = e => {
                    let {
                        trackId: t,
                        trackIds: a,
                        label: n = "Add to queue",
                        disabled: u,
                        css: m,
                        emitAnalytics: p
                    } = e, {
                        openToast: x
                    } = l.ToastContext.useContainer(), addMultipleTracksToQueue = e => {
                        let {
                            ids: t
                        } = e;
                        (0, i.vY)(...[...t].reverse().map(e => ({
                            trackId: e
                        }))), x({
                            text: "Added to Queue",
                            variant: "success"
                        })
                    };
                    return (0, s.jsxs)(d.Xi, {
                        "data-testid": o.n.ADD_TO_QUEUE_MENU_ITEM_DROPDOWN,
                        disabled: u,
                        onClick: e => (e.stopPropagation(), p(), a) ? addMultipleTracksToQueue({
                            ids: a
                        }) : t ? t ? (0, r.m1)({
                            trackId: t
                        }).then(() => {
                            x({
                                text: "Added to Queue",
                                variant: "success"
                            })
                        }).catch(() => {
                            x({
                                text: "Something went wrong",
                                variant: "error"
                            })
                        }) : x({
                            text: "Missing Track ID. Cannot add track to queue",
                            variant: "warning"
                        }) : x({
                            text: "Unable to add track to queue",
                            variant: "error"
                        }),
                        children: [(0, s.jsx)(c, {
                            isDisabled: u,
                            children: (0, s.jsx)(AddToQueue, {})
                        }), (0, s.jsx)(d.i_, {
                            css: m,
                            children: n
                        })]
                    })
                },
                c = (0, n.zo)("span", {
                    color: "$neutral800",
                    variants: {
                        isDisabled: {
                            true: {
                                color: "$neutral400"
                            }
                        }
                    }
                })
        },
        96578: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return AddToShelfMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(59630),
                r = a(8205),
                i = a(59173),
                o = a(96301),
                d = a(21956),
                c = a(22181),
                u = a(14034),
                m = a(28166),
                p = a(8094);
            let AddToShelfMenuItem = e => {
                let {
                    releaseId: t,
                    disabled: a = !1,
                    source: x
                } = e, {
                    openModal: h
                } = c.ModalContext.useContainer(), {
                    isAuthenticatedWithAPI: f
                } = (0, o.aC)();
                return (0, s.jsxs)(p.Xi, {
                    onClick: () => {
                        if (f) {
                            if (t) return (0, u.uH)({
                                event: "Add to Playlist Clicked",
                                properties: {
                                    sourceComponent: x,
                                    associationId: t,
                                    associationType: "Release"
                                }
                            }), h(c.ModalType.ADD_TO_PLAYLIST, {
                                body: (0, s.jsx)(i.G, {
                                    releaseId: t
                                })
                            })
                        } else {
                            (0, u.uH)({
                                event: "Sign in Clicked",
                                properties: {
                                    sourceComponent: "Add to Playlist Modal"
                                }
                            }), (0, d.SR)();
                            return
                        }
                    },
                    disabled: a,
                    "data-testid": m.n.ADD_TO_SHELF_MENU_ITEM_DROPDOWN,
                    children: [(0, s.jsx)(n.G, {
                        icon: l.zR,
                        color: a ? r.rS.colors.neutral400.toString() : void 0,
                        size: "lg"
                    }), (0, s.jsx)(p.i_, {
                        children: "Add to playlist"
                    })]
                })
            }
        },
        95234: function(e, t, a) {
            "use strict";
            a.d(t, {
                e: function() {
                    return DeleteShelfMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(27550),
                r = a(8205),
                i = a(8094);
            let DeleteShelfMenuItem = e => {
                let {
                    onClick: t
                } = e;
                return (0, s.jsxs)(i.Xi, {
                    onClick: t,
                    children: [(0, s.jsx)(n.G, {
                        icon: l.Vu,
                        color: r.rS.colors.destructive700.toString(),
                        size: "lg"
                    }), (0, s.jsx)(i.i_, {
                        css: {
                            color: "$destructive700",
                            marginLeft: 8
                        },
                        children: "Delete playlist"
                    })]
                })
            }
        },
        97706: function(e, t, a) {
            "use strict";
            a.d(t, {
                B: function() {
                    return EditShelfMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(27875),
                r = a(97946),
                i = a(95390),
                o = a(8094);
            let EditShelfMenuItem = e => {
                let {
                    label: t,
                    shelfWebappUri: a,
                    css: d
                } = e;
                return (0, s.jsx)(r.s, {
                    pathnameUri: (0, i.OU)(a, {
                        subpath: "/edit"
                    }),
                    children: (0, s.jsxs)(o.Xi, {
                        children: [(0, s.jsx)(n.G, {
                            icon: l.Tz,
                            size: "lg"
                        }), (0, s.jsx)(o.i_, {
                            css: d,
                            children: t
                        })]
                    })
                })
            }
        },
        76349: function(e, t, a) {
            "use strict";
            a.d(t, {
                G: function() {
                    return LikeSoundMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(15876);
            let HeartFilled = e => {
                let {
                    uuid: t
                } = e;
                return (0, s.jsxs)("svg", {
                    width: "16",
                    height: "14",
                    viewBox: "0 0 16 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#clip0_138_1018)",
                        children: (0, s.jsx)("path", {
                            d: "M1.46875 8.4062L7.125 13.6875C7.34375 13.9062 7.65625 14 8 14C8.3125 14 8.625 13.9062 8.84375 13.6875L14.5 8.4062C15.4375 7.5312 16 6.2812 16 4.9687V4.81245C16 2.62495 14.4062 0.749955 12.25 0.406205C10.8438 0.156205 9.375 0.624955 8.375 1.62495L8 1.99995L7.625 1.62495C6.59375 0.624955 5.15625 0.156205 3.71875 0.406205C1.5625 0.749955 0 2.62495 0 4.81245V4.9687C0 6.2812 0.53125 7.5312 1.46875 8.4062Z",
                            fill: `url(#heartfilledgradient-${t})`
                        })
                    }), (0, s.jsxs)("defs", {
                        children: [(0, s.jsxs)("linearGradient", {
                            id: `heartfilledgradient-${t}`,
                            x1: "0.292683",
                            y1: "3.69288",
                            x2: "15.4146",
                            y2: "3.69288",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, s.jsx)("stop", {
                                stopColor: "#FB7085"
                            }), (0, s.jsx)("stop", {
                                offset: "0.510417",
                                stopColor: "#EB5CBB"
                            }), (0, s.jsx)("stop", {
                                offset: "1",
                                stopColor: "#D945EF"
                            })]
                        }), (0, s.jsx)("clipPath", {
                            id: "clip0_138_1018",
                            children: (0, s.jsx)("rect", {
                                width: "16",
                                height: "14",
                                fill: "white"
                            })
                        })]
                    })]
                })
            };
            var r = a(28166),
                i = a(8094);
            let LikeSoundMenuItem = e => {
                let {
                    liked: t,
                    onClick: a,
                    releaseId: o,
                    releaseType: d
                } = e;
                return "ALBUM" === d ? null : (0, s.jsxs)(i.Xi, {
                    "data-testid": r.n.LIKE_SOUND_MENU_ITEM_DROPDOWN,
                    onClick: e => {
                        e.stopPropagation(), a()
                    },
                    children: [t ? (0, s.jsx)(HeartFilled, {
                        uuid: o
                    }) : (0, s.jsx)(n.G, {
                        icon: l.m6,
                        size: "lg"
                    }), (0, s.jsx)(i.i_, {
                        children: t ? "Unlike Sound" : "Like Sound"
                    })]
                })
            }
        },
        5665: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return PostReleaseMenuItem
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(78608),
                i = a(42178),
                o = a(8094),
                d = a(66361),
                c = a(52931),
                u = a(96301),
                m = a(21956),
                p = a(22181),
                x = a(14034),
                h = a(85846),
                f = a(28166);
            let PostReleaseMenuItem = e => {
                let {
                    releaseId: t,
                    source: a
                } = e, {
                    openModal: v
                } = p.ModalContext.useContainer(), {
                    isAuthenticatedWithAPI: g
                } = (0, u.aC)(), {
                    value: b
                } = (0, r.useGate)(h.ln.SPOTIFY_LINKS), y = (0, n.useCallback)(() => {
                    g ? ((0, x.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: a,
                            associationId: t,
                            associationType: "Release"
                        }
                    }), v(p.ModalType.FEED_POST, {
                        body: b ? (0, s.jsx)(c.s, {
                            sourceLocation: "Song Card",
                            selectedResource: {
                                type: "release",
                                releaseId: t
                            },
                            channelId: null,
                            channelSelectorDisabled: !1
                        }) : (0, s.jsx)(d.t, {
                            sourceLocation: "Song Card",
                            preselectedResource: {
                                type: "release",
                                releaseId: t
                            },
                            channelId: null
                        }, "post-input")
                    })) : (0, m.SR)()
                }, [g, v, t, a, b]), C = (0, n.useMemo)(() => (0, s.jsxs)(o.Xi, {
                    onClick: y,
                    "data-testid": f.n.FEED_POST_MENU_ITEM_DROPDOWN,
                    children: [(0, s.jsx)(l.G, {
                        icon: i.Y,
                        size: "lg"
                    }), (0, s.jsx)(o.i_, {
                        children: "Post"
                    })]
                }), [y]);
                return C
            }
        },
        41079: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return ShareMenuItem
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(14016),
                r = a(32851),
                i = a(68550),
                o = a(22181),
                d = a(25989),
                c = a(14034),
                u = a(8094);
            let ShareMenuItem = e => {
                let {
                    openModal: t
                } = o.ModalContext.useContainer();
                return (0, d.C)({
                    playlistId: "playlist" in e && e.playlist.id,
                    releaseId: "releaseId" in e && e.releaseId
                }), (0, s.jsxs)(u.Xi, {
                    onClick: () => {
                        "releaseId" in e ? ((0, c.uH)({
                            event: "Share Modal Opened",
                            properties: {
                                associationId: e.releaseId,
                                associationType: "Release",
                                sourceComponent: e.source
                            }
                        }), t(o.ModalType.SHARE, {
                            body: (0, s.jsx)(i.T, { ...e
                            })
                        })) : ((0, c.uH)({
                            event: "Share Modal Opened",
                            properties: {
                                associationId: e.playlist.id,
                                associationType: "Playlist",
                                sourceComponent: e.source
                            }
                        }), t(o.ModalType.SHARE, {
                            body: (0, s.jsx)(r.u, { ...e
                            })
                        }))
                    },
                    children: [(0, s.jsx)(n.G, {
                        icon: l.A$,
                        size: "lg"
                    }), (0, s.jsx)(u.i_, {
                        children: "Share"
                    })]
                })
            }
        },
        28987: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return MoreDropdown
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(73304),
                r = a(8205),
                i = a(8094),
                o = a(21922);
            let MoreDropdown = e => {
                    let {
                        align: t = "center",
                        children: a,
                        triggerProps: r,
                        dropdownProps: o,
                        disabled: c
                    } = e;
                    return (0, s.jsx)(i.E6, {
                        trigger: (0, s.jsx)(d, {
                            disabled: c,
                            onClick: e => e.stopPropagation(),
                            icon: (0, s.jsx)(n.G, {
                                icon: l.S6,
                                size: "lg"
                            }),
                            ...r
                        }),
                        align: t,
                        ...o,
                        children: a
                    })
                },
                d = (0, r.zo)(o.h, {
                    variants: {
                        endTable: {
                            true: {
                                marginLeft: "15px"
                            }
                        }
                    }
                })
        },
        62335: function(e, t, a) {
            "use strict";
            a.d(t, {
                N: function() {
                    return ThreeDotsDropdown
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(73304),
                r = a(21922),
                i = a(8094);
            let ThreeDotsDropdown = e => {
                let {
                    children: t,
                    isDropdownOpen: a,
                    setIsDropdownOpen: o,
                    triggerProps: d,
                    dropdownProps: {
                        align: c = "start",
                        ...u
                    } = {},
                    isModal: m = !1,
                    variant: p,
                    disabled: x = !1
                } = e;
                return (0, s.jsx)(i.E6, {
                    onOpenChange: () => x ? null : o(!a),
                    isModal: m,
                    wrapperContentProps: {
                        css: {
                            zIndex: "$modalDropdown"
                        }
                    },
                    trigger: (0, s.jsx)(r.h, {
                        variant: p,
                        onClick: e => e.stopPropagation(),
                        className: "three-dots-icon",
                        icon: (0, s.jsx)(n.G, {
                            icon: l.S6,
                            size: "lg"
                        }),
                        disabled: x,
                        ...d
                    }),
                    align: c,
                    ...u,
                    children: t
                })
            }
        },
        10187: function(e, t, a) {
            "use strict";
            a.d(t, {
                V: function() {
                    return o
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(24924),
                r = a.n(l);
            let i = r()(() => a.e(1119).then(a.bind(a, 77745)), {
                    loadableGenerated: {
                        webpack: () => [77745]
                    },
                    ssr: !1
                }),
                o = n.memo(function(e) {
                    let {
                        src: t,
                        lazy: a = !0,
                        ...n
                    } = e;
                    return (0, s.jsx)(i, {
                        src: t,
                        lazy: a,
                        ...n
                    })
                })
        },
        72779: function(e, t, a) {
            "use strict";
            a.d(t, {
                o: function() {
                    return LoadingSkeleton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(49542);

            function LoadingSkeleton(e) {
                let {
                    loading: t,
                    className: a = "",
                    children: l
                } = e;
                return t ? (0, s.jsx)("div", {
                    className: (0, n.default)(a, "animate-pulse rounded-md bg-neutral200")
                }) : l
            }
        },
        29413: function(e, t, a) {
            "use strict";
            a.d(t, {
                v: function() {
                    return ReleaseCoverImagePlayButton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(40286),
                r = a.n(l),
                i = a(44361),
                o = a(22528),
                d = a(94982),
                c = a(3928),
                u = a(51020),
                m = a(43607);
            let ReleaseCoverImagePlayButton = e => {
                let {
                    className: t,
                    playButtonSize: a,
                    nextImageSizes: l,
                    releaseFrag: p
                } = e, x = (0, c.S3c)(c.FW5, p), {
                    coverImage: h,
                    staticCoverImage: f,
                    title: v,
                    type: g,
                    track: b,
                    listeningParty: y
                } = x, C = (null == f ? void 0 : f.url) || h.url, {
                    isPlaying: S,
                    onPlayClick: j,
                    isLoading: w,
                    isDisabled: T
                } = (0, u.a)({
                    trackId: b.id,
                    isAlbum: "SINGLE" !== g,
                    listeningParty: y,
                    releaseId: x.id
                });
                return (0, s.jsxs)("div", {
                    className: (0, i.m)("relative mr-2 h-full w-full flex-shrink-0 overflow-hidden rounded-md", t),
                    children: [(0, s.jsx)(r(), {
                        src: C,
                        fill: !0,
                        sizes: l,
                        alt: v
                    }), !T && (0, s.jsxs)("button", {
                        className: (0, i.m)("absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"),
                        onClick: e => {
                            T || (e.stopPropagation(), j())
                        },
                        color: "transparent",
                        children: [(0, s.jsx)("div", {
                            className: "absolute inset-0 bg-black/80"
                        }), (0, s.jsx)("div", {
                            className: "z-above1",
                            children: w ? (0, s.jsx)(m.$, {
                                className: " text-white"
                            }) : (0, s.jsx)(n.G, {
                                icon: S ? o.ul : d.aQ,
                                size: a,
                                inverse: !0
                            })
                        })]
                    })]
                })
            }
        },
        799: function(e, t, a) {
            "use strict";
            a.d(t, {
                X: function() {
                    return n
                },
                p: function() {
                    return useSongCardContext
                }
            });
            var s = a(97352);
            let n = s.createContext({
                loading: !1,
                album: !1,
                isPlaying: !1,
                edition: !1,
                expanded: null,
                setExpanded: null
            });

            function useSongCardContext() {
                let e = s.useContext(n);
                if (!e) throw Error("SongCard compound components cannot be rendered outside the SongCard component");
                return e
            }
        },
        24896: function(e, t, a) {
            "use strict";
            a.d(t, {
                y: function() {
                    return CoverImage
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(49542),
                l = a(73950),
                r = a(76292),
                i = a(97946),
                o = a(47544),
                d = a(799),
                c = a(35281);
            let u = {
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1/1"
                },
                fillEmptyImages = e => {
                    let t = Array.from({
                        length: 3 - e.length
                    }, () => "");
                    return [...t, ...e]
                },
                m = (0, r.T)(200, 200);

            function CoverImage(e) {
                let {
                    onPlayButtonClick: t,
                    header: a,
                    isBufferingSong: l,
                    pathnameUri: r,
                    image: u,
                    disablePlay: m,
                    playButtonPrefetchRef: p,
                    currentListeningParty: x
                } = e, {
                    album: h,
                    isPlaying: f,
                    expanded: v
                } = (0, d.p)();
                return (0, s.jsxs)("div", {
                    className: "relative aspect-square overflow-hidden group-hover:[&_img.imageIndex1]:rotate-[-20deg] group-hover:[&_img.imageIndex2]:rotate-[-10deg] group-hover:[&_img.imageIndex3]:rotate-[35deg]",
                    children: [a && (0, s.jsx)("div", {
                        className: "absolute left-0 right-0 top-0 z-above1",
                        children: a
                    }), (0, s.jsx)("div", {
                        className: "relative h-full overflow-hidden object-contain transition-transform duration-500 ease-in-out [&_img]:object-cover [&_img]:duration-500",
                        children: r ? (0, s.jsx)(i.s, {
                            pathnameUri: r,
                            type: "internal",
                            children: u
                        }) : u
                    }), (0, s.jsx)("div", {
                        className: "pointer-events-none absolute bottom-0 z-above2 h-28 w-full transform-gpu bg-gradient-to-t from-black"
                    }), h && (0, s.jsx)("div", {
                        className: "absolute bottom-1 left-3 z-above2",
                        children: (0, s.jsx)(c.L, {
                            color: "white"
                        })
                    }), (0, s.jsx)("div", {
                        className: (0, n.default)("absolute bottom-0 right-3 z-above3 transform-gpu opacity-100 transition-opacity duration-500 group-hover:opacity-100 xl:opacity-0", f && "opacity-100 group-hover:opacity-100", v && "hidden"),
                        children: (0, s.jsx)(o.J, {
                            color: "white",
                            playing: f,
                            onClick: t,
                            size: "s",
                            loading: l,
                            disabled: m,
                            ref: p,
                            currentListeningParty: x
                        })
                    })]
                })
            }
            CoverImage.Single = e => {
                let {
                    src: t,
                    unoptimized: a
                } = e;
                return (0, s.jsx)(l.G, {
                    src: t,
                    className: "group-hover:scale-125",
                    width: 200,
                    height: 200,
                    alt: "Sound card cover",
                    unoptimized: a,
                    sizes: "(max-width: 640px) 66vw,  (max-width: 768px) 40vw, (max-width: 1280px) 33vw, 25vw",
                    style: u
                })
            }, CoverImage.Multiple = e => {
                let {
                    images: t,
                    unoptimized: a
                } = e;
                return (0, s.jsx)("div", {
                    className: "absolute inset-0 bg-black [&_.imageIndex1]:-bottom-1/2 [&_.imageIndex1]:left-[-20%] [&_.imageIndex1]:rotate-[-30deg] [&_.imageIndex2]:left-8 [&_.imageIndex2]:top-16 [&_.imageIndex2]:rotate-[-15deg] [&_.imageIndex3]:left-[20%] [&_.imageIndex3]:top-[28%] [&_.imageIndex3]:rotate-[30deg] [&_img]:absolute [&_img]:max-h-[90%] [&_img]:max-w-[90%] [&_img]:overflow-hidden [&_img]:rounded-md [&_img]:shadow-lg",
                    children: fillEmptyImages(t).slice(0, 3).map((e, t) => "" === e ? (0, s.jsx)("div", {
                        className: `imageIndex${t+1}`
                    }, t) : (0, s.jsx)(l.G, {
                        src: e,
                        className: `imageIndex${t+1}`,
                        unoptimized: a,
                        width: 200,
                        height: 200,
                        alt: `Cover image ${t+1}`,
                        sizes: "(max-width: 640px) 66vw,  (max-width: 768px) 40vw, (max-width: 1280px) 33vw, 25vw",
                        style: u,
                        placeholder: "blur",
                        blurDataURL: m
                    }, e + t))
                })
            }
        },
        68754: function(e, t, a) {
            "use strict";
            a.d(t, {
                P4: function() {
                    return SongCard
                }
            });
            var s = a(16356);
            a(97352), (0, a(8205).zo)("span", {
                base: "S",
                fontWeight: 500,
                paddingX: 8,
                paddingY: 4,
                borderRadius: 6,
                variants: {
                    color: {
                        white: {
                            backgroundColor: "$white",
                            opacity: .9
                        },
                        black: {
                            backgroundColor: "$black",
                            opacity: .8,
                            color: "$white"
                        }
                    }
                },
                defaultVariants: {
                    color: "white"
                }
            }), a(35281);
            var n = a(49542),
                l = a(799),
                r = a(24896),
                i = a(69598),
                o = a(44456);

            function CardInfo(e) {
                let {
                    subheader: t,
                    header: a,
                    actions: r,
                    bottom: i,
                    infoContainerBottom: d
                } = e, {
                    isPlaying: c,
                    expanded: u,
                    edition: m
                } = (0, l.p)();
                return (0, s.jsxs)("div", {
                    className: (0, n.default)("pointer-events-all flex w-full flex-col transition-all", u ? "z-above2 h-full pt-2" : m ? "h-20" : "h-auto", !!m && "absolute bottom-0 bg-black"),
                    children: [(0, s.jsxs)("div", {
                        className: (0, n.default)("flex flex-shrink-0 flex-row justify-between gap-2 bg-black px-3 pb-2 pt-1 group-hover:gap-4 md:gap-0 md:pb-3", d ? "h-20" : "h-fit"),
                        children: [(0, s.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col",
                            children: [(0, s.jsx)("div", {
                                className: "text-overflow-ellipsis flex flex-shrink-0 overflow-hidden whitespace-nowrap  text-base-s text-base400 transition-colors hover:text-white",
                                children: t
                            }), (0, s.jsxs)("div", {
                                className: "mt-1 flex items-center gap-1",
                                children: [c && (0, s.jsx)(o.j, {}), (0, s.jsx)("div", {
                                    className: "overflow-hidden text-ellipsis whitespace-nowrap font-title text-title-s font-medium text-base300 hover:text-white md:text-title-m",
                                    children: a
                                })]
                            }), d && (0, s.jsx)("div", {
                                className: "mt-1 flex-grow text-base-s text-base400",
                                children: d
                            })]
                        }), (0, s.jsx)("div", {
                            className: "opacity-1 mr-1 flex w-fit min-w-fit flex-shrink-0 flex-col justify-end group-hover:w-fit group-hover:min-w-fit group-hover:opacity-100 md:w-0 md:min-w-0 md:opacity-0",
                            children: r
                        })]
                    }), i]
                })
            }

            function SongCard(e) {
                return (0, s.jsxs)(l.X.Provider, {
                    value: { ...e
                    },
                    children: [(0, s.jsx)("div", {
                        className: (0, n.default)("group relative block h-fit max-h-fit w-full transform-gpu overflow-hidden rounded-lg bg-gradient-to-b from-white via-black to-black", e.edition && "after:block after:h-20 after:w-full after:content-['\"\"']", e.loading && "animate-pulse rounded-lg bg-card-skeleton [&_*]:opacity-0"),
                        children: e.children
                    }), e.edition && (0, s.jsx)("div", {
                        className: "relative z-below flex w-full flex-col items-center",
                        children: (0, s.jsx)("div", {
                            className: "h-2 w-[calc(100%-16px)] -translate-y-1 rounded-b-md bg-base500"
                        })
                    })]
                })
            }
            CardInfo.Button = function(e) {
                let {
                    href: t,
                    label: a,
                    variant: n,
                    onClick: l,
                    trailingIcon: r,
                    disabled: o
                } = e;
                return (0, s.jsx)("div", {
                    className: "p-2 pt-0",
                    children: (0, s.jsx)(i.z, {
                        className: "focus:border-none focus:outline-none",
                        variant: n,
                        label: a,
                        href: t,
                        size: "M",
                        fullWidth: !0,
                        onClick: l,
                        trailingIcon: r,
                        disabled: o
                    })
                })
            }, SongCard.Cover = r.y, SongCard.Info = CardInfo, SongCard.Running = function(e) {
                let {
                    collected: t,
                    price: a
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex h-14 flex-col justify-center bg-black p-3",
                    children: [(0, s.jsxs)("div", {
                        className: "mb-1 flex justify-between",
                        children: [(0, s.jsx)("div", {
                            className: "text-base-s text-base100",
                            children: "Collected"
                        }), (0, s.jsx)("div", {
                            className: "text-base-s font-semibold text-base100",
                            children: t
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0, s.jsx)("div", {
                            className: "text-base-s text-base100",
                            children: "Price"
                        }), (0, s.jsx)("div", {
                            className: "text-base-s font-semibold text-base100",
                            children: a
                        })]
                    })]
                })
            }
        },
        35281: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return AlbumLabel
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(49542),
                r = a(2877);

            function AlbumLabel(e) {
                let {
                    color: t = "black",
                    size: a = "s"
                } = e;
                return (0, s.jsxs)("div", {
                    className: (0, l.default)("flex items-center justify-center gap-x-1 rounded-[6px] ", "black" === t ? "bg-black font-medium text-white opacity-80" : "bg-white font-normal text-black opacity-70", "m" === a ? "px-2 py-1 text-base-m" : "px-1 py-0.5 text-base-s md:px-2 md:py-1"),
                    children: [(0, s.jsx)(n.G, {
                        className: "album-icon",
                        icon: r.l_
                    }), (0, s.jsx)("span", {
                        className: (0, l.default)("flex flex-col items-center justify-center font-kicker uppercase ", "m" === a ? "text-base-m" : "text-base-xs"),
                        children: "Album"
                    })]
                })
            }
        },
        8234: function(e, t, a) {
            "use strict";
            a.d(t, {
                P: function() {
                    return c
                },
                c: function() {
                    return u
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(49079),
                i = a(44361),
                o = a(40651),
                d = a(29993);
            let c = n.forwardRef((e, t) => {
                let {
                    children: a,
                    hasError: c,
                    disabled: m,
                    itemProps: p,
                    value: x,
                    contentClassName: h,
                    triggerClassName: f,
                    portal: v,
                    ...g
                } = e, b = n.useMemo(() => {
                    var e;
                    return g.placeholder ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(u, {
                            value: "",
                            disabled: m,
                            ...p,
                            children: null !== (e = g.placeholder) && void 0 !== e ? e : ""
                        }), a]
                    }) : a
                }, [a, g.placeholder, m, p]), y = (0, s.jsxs)(r.VY, {
                    className: (0, i.m)("relative z-modalDropdown flex max-h-[var(--radix-select-content-available-height)] w-[var(--radix-select-trigger-width)] cursor-pointer justify-between overflow-hidden rounded-md border-0 bg-white shadow-primary", h),
                    position: "popper",
                    sideOffset: 10,
                    children: [(0, s.jsx)(r.u_, {
                        className: "flex h-6 cursor-default items-center justify-center",
                        children: (0, s.jsx)(l.G, {
                            icon: d.on
                        })
                    }), (0, s.jsx)(r.l_, {
                        className: "flex flex-col gap-1",
                        children: b
                    }), (0, s.jsx)(r.$G, {
                        className: "flex h-6 cursor-default items-center justify-center",
                        children: (0, s.jsx)(l.G, {
                            icon: o.gc
                        })
                    })]
                });
                return (0, s.jsxs)(r.fC, {
                    value: x,
                    ...g,
                    children: [(0, s.jsxs)(r.i4, {
                        ref: t,
                        disabled: m,
                        className: (0, i.m)("flex w-full items-center justify-between rounded-[6px] border-0 bg-base200 px-2 py-[5px] font-base !text-base-m transition-all disabled:bg-base50 disabled:text-base400", "outline-none ring-0 placeholder:text-base500", "[&>span:first-child]:w-full [&>span>div:first-child]:px-0 [&>span>div:first-child]:pr-2", m ? "cursor-not-allowed" : "pointer-events-auto cursor-pointer", c ? "bg-destructive50 ring-destructive50 focus:ring-destructive300 hover:ring-1 hover:ring-destructive200" : "hover:border-base300 hover:bg-base50", (null == x ? void 0 : x.length) > 0 ? "text-base800" : "text-base500", f),
                        children: [(0, s.jsx)(r.B4, {}), (0, s.jsx)(r.JO, {
                            children: (0, s.jsx)(l.G, {
                                icon: o.gc
                            })
                        })]
                    }), v ? (0, s.jsx)(r.h_, {
                        children: y
                    }) : y]
                })
            });
            c.displayName = "Select";
            let u = n.forwardRef((e, t) => {
                let {
                    children: a,
                    disabled: n,
                    className: l,
                    ...o
                } = e;
                return (0, s.jsx)(r.ck, {
                    className: (0, i.m)("relative flex w-full select-none items-center justify-stretch rounded-none text-base-m md:text-base-l", "data-[highlighted]:bg-neutral100 data-[highlighted]:!outline-none", "[&>span]:w-full", n ? "pointer-events-none bg-white text-neutral300 focus:bg-white hover:bg-white" : "bg-white focus:bg-neutral100 hover:bg-neutral100"),
                    ...o,
                    ref: t,
                    disabled: n,
                    children: (0, s.jsx)(r.eT, {
                        children: (0, s.jsx)("div", {
                            className: (0, i.m)("flex items-center justify-between px-3 py-1.5 !text-base-m font-medium text-base800", l),
                            children: a
                        })
                    })
                })
            });
            u.displayName = "Item"
        },
        73089: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return Toggle
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(40135),
                l = a(49542),
                r = a(28166);
            let Toggle = e => {
                    let {
                        checked: t,
                        onCheckedChange: a,
                        leftLabel: i,
                        rightLabel: o,
                        testId: d = r.n.TOGGLE_SWITCH,
                        disabled: c,
                        toggleLabelProps: u
                    } = e;
                    return (0, s.jsxs)("div", {
                        className: "flex justify-between",
                        children: [!!i && (0, s.jsx)(ToggleLabel, {
                            checked: !t,
                            ...u,
                            children: i
                        }), (0, s.jsx)(n.fC, {
                            className: (0, l.default)("relative h-[22px] w-[46px] rounded-full transition-colors duration-150", c ? "cursor-not-allowed bg-base300_alpha50" : t ? "bg-accent400 focus:shadow-[0px_0px_0px_2px_#EB5CBB] hover:bg-fuchsia500_alpha30" : "bg-base100 focus:shadow-[0px_0px_0px_2px_#1F1F1F] hover:bg-base300_alpha50"),
                            "data-testid": d,
                            onCheckedChange: c ? () => null : a,
                            checked: t,
                            disabled: c,
                            children: (0, s.jsx)(n.bU, {
                                className: (0, l.default)("block h-[16px] w-[16px] rounded-full transition-transform duration-150 will-change-transform", t ? "translate-x-[28px]" : "translate-x-[2px]", c && t && "bg-fuchsia500_alpha50", c && !t && "bg-base800_alpha50", !c && t && "bg-fuchsia500", !c && !t && "bg-base800")
                            })
                        }), !!o && (0, s.jsx)(ToggleLabel, {
                            checked: t,
                            ...u,
                            children: o
                        })]
                    })
                },
                ToggleLabel = e => {
                    let {
                        children: t,
                        checked: a,
                        noMargin: n
                    } = e;
                    return (0, s.jsx)("span", {
                        className: (0, l.default)("text-base-l font-medium", a ? "text-neutral600" : "text-neutral400", n ? "mx-[unset]" : "mx-[8px]"),
                        children: t
                    })
                }
        },
        12957: function(e, t, a) {
            "use strict";
            a.d(t, {
                P: function() {
                    return HeyLogo
                }
            });
            var s = a(16356);
            a(97352);
            let HeyLogo = e => (0, s.jsxs)("svg", {
                width: "47",
                height: "46",
                viewBox: "0 0 47 46",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, s.jsx)("rect", {
                    x: "0.5",
                    width: "46",
                    height: "46",
                    rx: "23",
                    fill: "#3D4B41"
                }), (0, s.jsx)("path", {
                    d: "M28.9406 19.2522C28.8233 19.3714 28.63 19.2898 28.63 19.1225C28.63 18.9697 28.63 18.8013 28.6227 18.6423C28.4419 12.0388 18.5575 12.0388 18.3767 18.6423C18.3725 18.8013 18.3705 18.9614 18.3705 19.1225C18.3705 19.284 18.1742 19.3663 18.0598 19.2522C17.9476 19.1402 17.8313 19.0262 17.7169 18.9174C12.9472 14.3767 5.9624 21.4195 10.4714 26.2114C10.5808 26.3271 10.692 26.4422 10.8049 26.5565C16.2453 32.034 23.4985 32.0345 23.4997 32.0345C23.5009 32.0345 30.7551 32.034 36.1956 26.5565C36.3091 26.4429 36.4203 26.3278 36.529 26.2114C41.038 21.4143 34.0491 14.3767 29.2835 18.9174C29.1682 19.0262 29.0507 19.1382 28.9406 19.2522Z",
                    fill: "#FFEBB8"
                })]
            })
        },
        16773: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return TelegramLogo
                }
            });
            var s = a(16356);
            a(97352);
            let TelegramLogo = e => (0, s.jsx)("svg", {
                width: "46",
                height: "46",
                viewBox: "0 0 46 46",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, s.jsx)("path", {
                    d: "M23 0.96875C35.2188 0.96875 45.2812 11.0312 45.2812 23.25C45.2812 35.5586 35.2188 45.5312 23 45.5312C10.6914 45.5312 0.71875 35.5586 0.71875 23.25C0.71875 11.0312 10.6914 0.96875 23 0.96875ZM33.2422 16.1523C33.332 15.8828 33.332 15.6133 33.2422 15.2539C33.2422 15.0742 33.0625 14.8047 32.9727 14.7148C32.7031 14.4453 32.2539 14.4453 32.0742 14.4453C31.2656 14.4453 29.918 14.8945 23.7188 17.5C21.5625 18.3984 17.25 20.1953 10.7812 23.0703C9.70312 23.5195 9.16406 23.8789 9.07422 24.3281C8.98438 25.0469 10.1523 25.3164 11.5 25.7656C12.668 26.125 14.1953 26.5742 15.0039 26.5742C15.7227 26.5742 16.5312 26.3047 17.4297 25.6758C23.4492 21.543 26.5938 19.4766 26.7734 19.4766C26.9531 19.4766 27.1328 19.3867 27.2227 19.4766C27.4023 19.6562 27.4023 19.8359 27.3125 19.9258C27.2227 20.375 21.5625 25.5859 21.2031 25.9453C19.9453 27.2031 18.5078 28.0117 20.7539 29.4492C22.6406 30.707 23.7188 31.5156 25.6953 32.7734C26.9531 33.582 27.9414 34.5703 29.1992 34.4805C29.8281 34.3906 30.457 33.8516 30.7266 32.1445C31.5352 28.2812 32.9727 19.6562 33.2422 16.1523Z",
                    fill: "#0088CC"
                })
            })
        },
        94864: function(e, t, a) {
            "use strict";
            a.d(t, {
                u: function() {
                    return TwitterLogo
                }
            });
            var s = a(16356);
            a(97352);
            let TwitterLogo = e => (0, s.jsxs)("svg", {
                width: "47",
                height: "46",
                viewBox: "0 0 47 46",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, s.jsx)("rect", {
                    x: "0.5",
                    width: "46",
                    height: "46",
                    rx: "23",
                    fill: "#26A7DE"
                }), (0, s.jsx)("path", {
                    d: "M31.4297 19.4375C31.4297 19.6328 31.4297 19.7891 31.4297 19.9844C31.4297 25.4141 27.3281 31.625 19.7891 31.625C17.4453 31.625 15.2969 30.9609 13.5 29.7891C13.8125 29.8281 14.125 29.8672 14.4766 29.8672C16.3906 29.8672 18.1484 29.2031 19.5547 28.1094C17.7578 28.0703 16.2344 26.8984 15.7266 25.2578C16 25.2969 16.2344 25.3359 16.5078 25.3359C16.8594 25.3359 17.25 25.2578 17.5625 25.1797C15.6875 24.7891 14.2812 23.1484 14.2812 21.1562V21.1172C14.8281 21.4297 15.4922 21.5859 16.1562 21.625C15.0234 20.8828 14.3203 19.6328 14.3203 18.2266C14.3203 17.4453 14.5156 16.7422 14.8672 16.1562C16.8984 18.6172 19.9453 20.2578 23.3438 20.4531C23.2656 20.1406 23.2266 19.8281 23.2266 19.5156C23.2266 17.25 25.0625 15.4141 27.3281 15.4141C28.5 15.4141 29.5547 15.8828 30.3359 16.7031C31.2344 16.5078 32.1328 16.1562 32.9141 15.6875C32.6016 16.6641 31.9766 17.4453 31.1172 17.9531C31.9375 17.875 32.7578 17.6406 33.4609 17.3281C32.9141 18.1484 32.2109 18.8516 31.4297 19.4375Z",
                    fill: "white"
                })]
            })
        },
        86057: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return WarpcastLogo
                }
            });
            var s = a(16356);
            a(97352);
            let WarpcastLogo = e => (0, s.jsxs)("svg", {
                width: "47",
                height: "47",
                viewBox: "0 0 47 47",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, s.jsx)("rect", {
                    x: "0.5",
                    y: "0.5",
                    width: "46",
                    height: "46",
                    rx: "23",
                    fill: "#472A91"
                }), (0, s.jsx)("path", {
                    d: "M28.4961 16.951L26.9187 22.875L25.3362 16.951H21.6944L20.0968 22.9186L18.5043 16.951H14.3564L18.2108 30.0489H21.7893L23.5004 23.9667L25.2115 30.0489H28.7977L32.6436 16.951H28.4961Z",
                    fill: "white"
                })]
            })
        },
        36263: function(e, t, a) {
            "use strict";
            a.d(t, {
                s: function() {
                    return ConfirmModal
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(40612),
                r = a(69598),
                i = a(54668);

            function ConfirmModal(e) {
                let {
                    onConfirm: t,
                    onCancel: a,
                    title: o,
                    message: d,
                    confirmText: c,
                    cancelText: u,
                    loading: m = !1,
                    destructive: p = !1
                } = e;
                return (0, s.jsx)(i.Z, {
                    bodyWithoutPadding: !0,
                    bodyWithoutPaddingBottom: !0,
                    bodyClassName: "px-0 overflow-hidden",
                    containerClassName: "p-0",
                    body: (0, s.jsxs)("div", {
                        className: "md flex flex-col gap-4 p-4 md:p-6",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center",
                            children: [(0, s.jsx)("div", {
                                className: "flex-1 font-title text-title-l font-medium text-base800",
                                children: o
                            }), (0, s.jsx)("div", {
                                className: "-mx-3 -my-2 cursor-pointer rounded-full px-3 py-2 hover:bg-neutral100",
                                onClick: a,
                                children: (0, s.jsx)(n.G, {
                                    icon: l.g8,
                                    size: "xl",
                                    className: "text-neutral500"
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "font-base text-base-l text-base800",
                            children: d
                        }), (0, s.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, s.jsx)(r.z, {
                                fullWidth: !0,
                                variant: "secondary",
                                label: u,
                                onClick: a
                            }), (0, s.jsx)(r.z, {
                                fullWidth: !0,
                                variant: p ? "critical" : "primary",
                                label: c,
                                onClick: t,
                                loading: m
                            })]
                        })]
                    })
                })
            }
        },
        3351: function(e, t, a) {
            "use strict";
            a.d(t, {
                A: function() {
                    return Chip
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(50868),
                l = a(44361);
            let r = (0, n.zo)("button", "flex h-full w-full rounded-full items-center gap-2 whitespace-nowrap", "justify-center px-3 font-base text-base-m font-normal capitalize", {
                    variants: {
                        disabled: {
                            true: "cursor-not-allowed opacity-30",
                            false: "cursor-pointer"
                        },
                        selected: {
                            true: "bg-base800 text-white",
                            false: "bg-base100 text-black"
                        }
                    },
                    compoundVariants: [{
                        disabled: !1,
                        selected: !0,
                        className: "hover:bg-black"
                    }, {
                        disabled: !1,
                        selected: !1,
                        className: "hover:bg-base300"
                    }],
                    forwardProps: ["disabled"]
                }),
                Chip = e => {
                    let {
                        text: t,
                        icon: a,
                        isSelected: n,
                        disabled: i,
                        onClick: o,
                        onMouseOver: d,
                        className: c = ""
                    } = e;
                    return (0, s.jsx)("div", {
                        className: (0, l.m)("h-8 border border-solid border-transparent", c),
                        children: (0, s.jsxs)(r, {
                            selected: n,
                            "aria-label": t,
                            "aria-disabled": i,
                            onClick: o,
                            disabled: i,
                            onMouseOver: d,
                            children: [a && (0, s.jsx)("div", {
                                className: "flex h-4 w-4 items-center",
                                children: a
                            }), (0, s.jsx)("p", {
                                children: t
                            })]
                        })
                    })
                }
        },
        24595: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return NoPlaylistsFound
                }
            });
            var s = a(16356);
            a(97352);
            let NoPlaylistsFound = () => (0, s.jsxs)("svg", {
                width: "151",
                height: "150",
                viewBox: "0 0 151 150",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, s.jsx)("rect", {
                    x: "0.5",
                    width: "150",
                    height: "150",
                    fill: "white"
                }), (0, s.jsx)("path", {
                    d: "M110.5 15V15C110.636 19.9133 114.587 23.8643 119.5 24V24V24C114.587 24.1357 110.636 28.0867 110.5 33V33V33C110.364 28.0867 106.413 24.1357 101.5 24V24V24C106.413 23.8643 110.364 19.9133 110.5 15V15Z",
                    fill: "#262626"
                }), (0, s.jsx)("path", {
                    d: "M131.5 97V97C131.636 101.913 135.587 105.864 140.5 106V106V106C135.587 106.136 131.636 110.087 131.5 115V115V115C131.364 110.087 127.413 106.136 122.5 106V106V106C127.413 105.864 131.364 101.913 131.5 97V97Z",
                    fill: "#262626"
                }), (0, s.jsx)("path", {
                    d: "M78.5 27L120.5 51V99L111.945 103.888L103.391 99V108.777L94.836 113.665L86.2813 108.777V118.554L78.5 123L36.5 99V51L44.7423 46.2901L52.9846 51.1045V41.5803L62.0326 36.41L70.2663 41.261V31.705L78.5 27Z",
                    fill: "white"
                }), (0, s.jsx)("path", {
                    d: "M120.5 51L78.5 27L70.2663 31.705M120.5 51V99L111.945 103.888M120.5 51L111.945 55.8884M78.5 123L36.5 99V51M78.5 123V75M78.5 123L86.2813 118.554V108.777M36.5 51L78.5 75M36.5 51L44.7423 46.2901L52.9846 51.1045M78.5 75L86.2813 70.5536M86.2813 70.5536V108.777M86.2813 70.5536L52.9846 51.1045M103.391 60.7768L94.836 65.6652M103.391 60.7768C103.391 71.1527 103.391 88.2573 103.391 99M103.391 60.7768L70.2663 41.261M111.945 55.8884V103.888M111.945 55.8884L70.2663 31.705M111.945 103.888L103.391 99M94.836 65.6652V113.665M94.836 65.6652L52.9846 41.5803M94.836 113.665L103.391 108.777C103.391 108.777 103.391 104.823 103.391 99M94.836 113.665L86.2813 108.777M52.9846 41.5803L62.0326 36.41L70.2663 41.261M52.9846 41.5803V51.1045M70.2663 31.705V41.261",
                    stroke: "black",
                    strokeWidth: "0.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, s.jsx)("path", {
                    d: "M30 59L30.018 59.6528C30.2792 69.1131 37.8869 76.7208 47.3472 76.982L48 77L47.3472 77.018C37.8869 77.2792 30.2792 84.8869 30.018 94.3472L30 95L29.982 94.3472C29.7208 84.8869 22.1131 77.2792 12.6528 77.018L12 77L12.6528 76.982C22.1131 76.7208 29.7208 69.1131 29.982 59.6528L30 59Z",
                    fill: "#262626"
                })]
            })
        },
        37196: function(e, t, a) {
            "use strict";
            a.d(t, {
                h4: function() {
                    return h
                },
                u_: function() {
                    return u
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(6665),
                i = a(40612),
                o = a(8205),
                d = a(28166),
                c = a(21922);
            let u = n.forwardRef((e, t) => {
                let {
                    header: a,
                    headerText: n,
                    body: o,
                    footer: u,
                    closeModal: g,
                    containerClassName: b,
                    headerClassName: y,
                    footerClassName: C,
                    bodyClassName: S,
                    overlayStyles: j,
                    containerStyles: w = {},
                    headerStyles: T = {},
                    bodyStyles: N = {},
                    footerStyles: I = {}
                } = e;
                return (0, s.jsx)(r.fC, {
                    open: !0,
                    children: (0, s.jsx)(r.h_, {
                        children: (0, s.jsx)(p, {
                            css: j,
                            children: (0, s.jsxs)(m, {
                                onOpenAutoFocus: e => e.preventDefault(),
                                css: w,
                                className: b,
                                children: [(0, s.jsxs)(x, {
                                    css: T,
                                    className: y,
                                    children: [(0, s.jsx)(h, {
                                        children: a || n
                                    }), !!g && (0, s.jsx)(c.h, {
                                        testId: d.n.MODAL_CLOSE_BUTTON,
                                        iconSize: 18,
                                        icon: (0, s.jsx)(l.G, {
                                            icon: i.g8,
                                            size: "lg"
                                        }),
                                        onClick: g
                                    })]
                                }), (0, s.jsx)(f, {
                                    css: N,
                                    ref: t,
                                    className: S,
                                    children: o
                                }), u && (0, s.jsx)(v, {
                                    css: I,
                                    className: C,
                                    children: u
                                })]
                            })
                        })
                    })
                })
            });
            u.displayName = "Modal";
            let m = (0, o.zo)(r.VY, {
                    position: "relative",
                    overflowX: "hidden",
                    backgroundColor: "white",
                    width: 343,
                    borderRadius: 6,
                    boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 6px 20px rgba(0, 0, 0, 0.2)",
                    padding: 16,
                    zIndex: "$modal",
                    "@tablet": {
                        width: 420,
                        padding: 24
                    }
                }),
                p = (0, o.zo)(r.aV, {
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: "$overlay",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                    overflowY: "auto"
                }),
                x = (0, o.zo)("div", {
                    display: "flex",
                    justifyContent: "space-between"
                }),
                h = (0, o.zo)("div", {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    fontStyle: "semibold",
                    base: "L",
                    "@tablet": {
                        base: "XL"
                    }
                }),
                f = (0, o.zo)("div", {
                    fontFamily: "$base",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "$neutral700",
                    marginTop: 10,
                    "@tablet": {
                        fontSize: 16,
                        marginTop: 16
                    }
                }),
                v = (0, o.zo)("div", {
                    display: "flex",
                    justifyContent: "end",
                    width: "100%",
                    gap: 8,
                    marginTop: 16,
                    "@tablet": {
                        marginTop: 24
                    }
                })
        },
        99686: function(e, t, a) {
            "use strict";
            a.d(t, {
                m: function() {
                    return ModalButton
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(69598);
            let ModalButton = e => {
                let t = window.screen.width >= 768 ? "L" : "M";
                return (0, s.jsx)(n.z, {
                    size: t,
                    fullWidth: !0,
                    ...e
                })
            }
        },
        70522: function(e, t, a) {
            "use strict";
            a.d(t, {
                G7: function() {
                    return n
                },
                Mj: function() {
                    return i
                },
                Vi: function() {
                    return l
                },
                Wf: function() {
                    return r
                }
            });
            var s = a(8205);
            let n = (0, s.zo)("button", {
                    color: "#171717",
                    marginRight: "8px",
                    "@tablet": {
                        color: "#A3A3A3",
                        marginRight: "unset"
                    },
                    path: {
                        transition: "stroke 0.3s"
                    },
                    "&:hover": {
                        color: "$neutral900"
                    }
                }),
                l = (0, s.zo)("div", {
                    display: "flex",
                    width: "100%",
                    "@tablet": {
                        marginLeft: 0
                    }
                }),
                r = (0, s.zo)("div", {
                    background: "white",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 6,
                    width: "99%",
                    height: 40,
                    border: "1px solid $neutral300",
                    "@tablet": {
                        border: "none",
                        borderRadius: "$sm",
                        minWidth: 277,
                        height: 40,
                        padding: "11px 12px",
                        background: "$neutral50",
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(24px)",
                        transition: "background-color 0.3s ease-in-out",
                        ".search-icon": {
                            color: "$white"
                        }
                    },
                    "@desktop": {
                        paddingLeft: 16
                    },
                    "&:focus-within": {
                        background: "$white"
                    },
                    variants: {
                        main: {
                            true: {
                                zIndex: "$search"
                            }
                        },
                        isBlurBackground: {
                            true: {
                                ".search-icon": {
                                    color: "$white"
                                },
                                "&:hover, &:focus": {
                                    backgroundColor: "$white",
                                    ".search-icon": {
                                        color: "$black"
                                    }
                                }
                            },
                            false: {
                                border: "1px solid $neutral300",
                                ".search-icon": {
                                    color: "$black"
                                }
                            }
                        },
                        isActive: {
                            true: {
                                "@tablet": {
                                    backgroundColor: "$white",
                                    ".search-icon": {
                                        color: "$black"
                                    }
                                }
                            }
                        },
                        isGreyBackground: {
                            true: {
                                backgroundColor: "$base100",
                                border: "none",
                                "&:focus, &:active": {
                                    border: "1px solid $neutral300"
                                }
                            }
                        }
                    },
                    compoundVariants: [{
                        isActive: !0,
                        isGreyBackground: !0,
                        css: {
                            backgroundColor: "$base100",
                            border: "1px solid $neutral300"
                        }
                    }]
                }),
                i = (0, s.zo)("input", {
                    background: "transparent",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "17px",
                    color: "$neutral900",
                    paddingLeft: "2px",
                    height: 41,
                    margin: "0.1rem 0.5rem 0.1rem 0.5rem",
                    width: "100%",
                    border: "none",
                    outline: "$blue400",
                    justifyContent: "center",
                    "@tablet": {
                        height: 35,
                        margin: "0.1rem 0.5rem 0 0.5rem"
                    },
                    "&::placeholder": {
                        color: "$neutral400"
                    },
                    "&:focus": {
                        "&::placeholder": {
                            color: "$neutral600"
                        }
                    },
                    variants: {
                        isBlurBackground: {
                            true: {
                                "@tablet": {
                                    transition: "color 0.3s ease-in-out",
                                    "&::placeholder": {
                                        color: "$white",
                                        opacity: .8
                                    },
                                    "&:focus, &:hover": {
                                        "&::placeholder": {
                                            color: "$black",
                                            opacity: .5
                                        }
                                    }
                                }
                            },
                            false: {
                                "&::placeholder": {
                                    color: "$neutral400"
                                },
                                "&:focus": {
                                    "&::placeholder": {
                                        color: "$neutral600"
                                    }
                                }
                            }
                        }
                    }
                });
            (0, s.zo)("div", {
                display: "none",
                "@tablet": {
                    display: "block",
                    zIndex: "$overlay",
                    height: "100%",
                    width: "100%",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    overflowX: "hidden",
                    transition: "0.5s"
                }
            }), (0, s.zo)("div", {
                width: "100%",
                height: "100%",
                marginTop: 6
            })
        },
        49476: function(e, t, a) {
            "use strict";
            a.d(t, {
                t: function() {
                    return CollectorTooltip
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(74040);

            function CollectorIcon(e) {
                let {
                    type: t,
                    ...a
                } = e;
                return (0, s.jsxs)("svg", { ...a,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 18",
                    width: 16,
                    height: 18,
                    fill: "none",
                    children: [(0, s.jsx)("path", {
                        fill: "vip" === t ? "#F3B004" : "#778E9B",
                        d: "M7.103.912a1.96 1.96 0 0 1 1.794 0l2.908 1.498 2.75 1.769c.533.343.867.922.898 1.554L15.61 9l-.157 3.267a1.96 1.96 0 0 1-.897 1.554l-2.751 1.769-2.908 1.498c-.563.29-1.231.29-1.794 0L4.195 15.59l-2.75-1.77a1.96 1.96 0 0 1-.898-1.553L.391 9l.156-3.267a1.96 1.96 0 0 1 .897-1.554l2.751-1.77L7.103.913Z"
                    }), (0, s.jsx)("path", {
                        fill: "#fff",
                        d: "m8.328 5.628.938 2.016 2.015.937a.38.38 0 0 1 .219.328.384.384 0 0 1-.219.344l-2.015.937-.938 2.016A.364.364 0 0 1 8 12.41a.371.371 0 0 1-.344-.203L6.72 10.19l-2.016-.937a.371.371 0 0 1-.203-.344c0-.14.078-.265.203-.328l2.016-.937.937-2.016A.384.384 0 0 1 8 5.409a.38.38 0 0 1 .328.219Z"
                    })]
                })
            }
            var l = a(43158),
                r = a(34524);
            let CollectorTooltip = e => {
                    let {
                        portal: t,
                        toolTipOffset: a,
                        type: n,
                        size: o = 18
                    } = e, {
                        tablet: d
                    } = (0, l.useMediaQuery)(), c = (0, s.jsx)(i, {
                        className: "md:[&_svg]:hover:rounded-full md:[&_svg]:hover:shadow-secondary",
                        css: {
                            svg: {
                                height: o ? `${o}px` : "18px",
                                width: o ? `${o}px` : "18px"
                            }
                        },
                        children: (0, s.jsx)(CollectorIcon, {
                            type: n
                        })
                    }), u = (0, s.jsx)(r.Tooltip.StyledContent, {
                        className: "px-2",
                        sideOffset: a,
                        children: "ga" === n ? "Free Edition Collector" : "Limited Edition Collector"
                    });
                    return (0, s.jsx)("div", {
                        children: (0, s.jsxs)(r.Tooltip, {
                            openOnClick: !d,
                            children: [(0, s.jsx)(r.Tooltip.Trigger, {
                                asChild: !0,
                                children: c
                            }), t ? (0, s.jsx)(r.Tooltip.Portal, {
                                children: u
                            }) : u]
                        })
                    })
                },
                i = (0, n.zo)("div", {})
        },
        53529: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return UserCommentItemSkeleton
                },
                l: function() {
                    return UserCommentItem
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(58658),
                r = a(74360),
                i = a(10060),
                o = a(64638),
                d = a(68753),
                c = a(88343),
                u = a(98830),
                m = a(96301),
                p = a(21956),
                x = a(22181),
                h = a(3928),
                f = a(17941),
                v = a(64398),
                g = a(42529),
                b = a(95390),
                y = a(97946),
                C = a(49476),
                S = a(98335),
                j = a(66195);

            function UserCommentItem(e) {
                let {
                    action: t,
                    createdAt: a,
                    selectedSlotInfo: w,
                    content: T,
                    postCommentId: N,
                    showArtistTag: I,
                    showVerifiedBadge: P,
                    upvoteCount: R,
                    userFragment: E,
                    authorNftsCountGa: A,
                    authorNftsCountVip: k
                } = e, {
                    isAuthenticatedWithAPI: M
                } = (0, m.aC)(), {
                    openModal: _
                } = (0, x.useModal)(), O = (0, h.S3c)(h.jpX, E), {
                    username: L,
                    webappUri: D,
                    publicAddress: U,
                    avatar: F
                } = O, z = (0, b.OU)(D), G = (0, j.y9)({
                    key: N
                }), B = (0, f.a)(), H = (0, v.S)(), W = !!k, {
                    data: $
                } = (0, h.aM2)(h.O6c, {
                    variables: !!G && {
                        input: {
                            postCommentIds: G
                        }
                    },
                    cacheTime: 1 / 0,
                    select(e) {
                        let {
                            data: t
                        } = e;
                        for (let e of t.userVoteOnPostComment)
                            if (e.postCommentId === N) return {
                                voteStatus: e.voteStatus,
                                upvoteCount: e.upvoteCount
                            }
                    },
                    enabled: M && !!(null == G ? void 0 : G.length),
                    keepPreviousData: !0,
                    staleTime: 0
                }), {
                    mutateAsync: V,
                    isLoading: Z
                } = (0, h.Dbo)(h.Lzz, {
                    retry: 3
                }), Q = (0, g.R)(() => {
                    if (!M) {
                        (0, p.SR)();
                        return
                    }
                    _(x.ModalType.REPLY_POST, {
                        body: (0, s.jsx)(u.n, {
                            postCommentId: N
                        })
                    })
                }), Y = (0, g.R)(async () => {
                    if (!M) {
                        (0, p.SR)();
                        return
                    }
                    if (Z || !$) return;
                    let {
                        voteStatus: e,
                        upvoteCount: t
                    } = $, a = e === h.i_t.NoVote;
                    (0, j.ot)({
                        postCommentId: N,
                        voteStatus: a ? h.i_t.Upvoted : h.i_t.NoVote,
                        upvoteCount: a ? t + 1 : t - 1
                    });
                    try {
                        var s, n;
                        let r = await V({
                            input: {
                                postCommentId: N,
                                voteStatus: a ? h.$71.Upvote : h.$71.RemoveVote
                            }
                        });
                        (null === (s = r.data.voteOnPostComment) || void 0 === s ? void 0 : s.__typename) === "NotFoundError" && H({
                            action: l.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: Error(r.data.voteOnPostComment.message),
                            errorType: l.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: r.data.voteOnPostComment.message,
                            toast: "The comment you are trying to upvote does not exist.",
                            indexedTags: {
                                postCommentId: N,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: l.Lj.POSTING
                        }), (null === (n = r.data.voteOnPostComment) || void 0 === n ? void 0 : n.__typename) === "RateLimitError" && H({
                            action: l.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: Error(r.data.voteOnPostComment.message),
                            errorType: l.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: r.data.voteOnPostComment.message,
                            toast: "You are upvoting too fast, try again later please.",
                            indexedTags: {
                                postCommentId: N,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: l.Lj.POSTING
                        })
                    } catch (a) {
                        H({
                            action: l.Ry.UPVOTING_POST_COMMENT_FAILED,
                            error: a,
                            errorType: l.QS.UPVOTING_ERROR,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Error upvoting a post comment",
                            indexedTags: {
                                postCommentId: N,
                                upvoteCount: t,
                                voteStatus: e
                            },
                            pillar: l.Lj.POSTING
                        })
                    }
                }), X = (0, n.useMemo)(() => M && $ ? $.upvoteCount : R, [M, $, R]), K = (0, n.useMemo)(() => M ? !$ : !B, [B, M, $]);
                return (0, s.jsx)("div", {
                    className: "py-1.5",
                    children: (0, s.jsx)("div", {
                        className: "min-h-10 flex justify-between rounded-md",
                        children: (0, s.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col gap-1.5",
                            children: [(0, s.jsxs)("div", {
                                className: "flex w-full min-w-0 justify-between",
                                children: [(0, s.jsx)("div", {
                                    className: "flex w-full min-w-0 max-w-[70%] items-center gap-2",
                                    children: (0, s.jsxs)("div", {
                                        className: "flex items-center gap-1 truncate text-base-s font-semibold text-base500",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex min-w-0 items-center gap-1",
                                            children: [(0, s.jsx)(d.q, {
                                                size: 20,
                                                src: null == F ? void 0 : F.url,
                                                walletAddress: U,
                                                username: L,
                                                borderRadius: 1e3,
                                                webappUri: z
                                            }), (0, s.jsx)(y.s, {
                                                pathnameUri: z,
                                                className: "truncate font-base text-base-m font-semibold text-base900",
                                                children: L
                                            }), P && (0, s.jsx)(S.O, {
                                                size: 14
                                            }), (W || !!A) && (0, s.jsx)(C.t, {
                                                type: W ? "vip" : "ga",
                                                size: 13,
                                                portal: !1
                                            })]
                                        }), I && (0, s.jsx)("div", {
                                            className: "flex-shrink-0 rounded-sm bg-base300 px-1 py-[2px] font-base text-base-xs font-normal",
                                            children: "Artist"
                                        }), null != w && (0, s.jsx)("span", {
                                            className: "relative flex flex-shrink-0 cursor-pointer truncate whitespace-nowrap font-base text-base-xs font-normal tabular-nums duration-300 hover:text-base600",
                                            onClick: w.onClick,
                                            children: w.timestamp
                                        }), (0, s.jsxs)("div", {
                                            className: "flex flex-row",
                                            children: [(0, s.jsx)("span", {
                                                className: "mr-1 text-[8px] font-normal",
                                                children: "•"
                                            }), (0, s.jsx)(c.E, {
                                                timeStamp: a,
                                                className: "font-base font-normal duration-300 hover:text-base600"
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "relative flex items-center gap-1",
                                    children: (0, s.jsx)("div", {
                                        className: "flex h-4 w-8",
                                        children: t
                                    })
                                })]
                            }), "object" == typeof T ? (0, s.jsx)(o.X, {
                                state: T,
                                className: "font-base text-base-m"
                            }) : (0, s.jsx)("div", {
                                className: "break-words font-base text-base-m text-base900",
                                children: T
                            }), K ? (0, s.jsx)("div", {
                                className: "mt-1.5 w-10 animate-pulse rounded-md bg-neutral200"
                            }) : (0, s.jsxs)("div", {
                                className: "mt-1.5 flex h-7 items-center gap-7",
                                children: [(0, s.jsx)("div", {
                                    className: "-mx-2 -my-1",
                                    children: (0, s.jsx)(i.r, {
                                        disabled: !1,
                                        upvoteCount: X,
                                        voteStatus: null == $ ? void 0 : $.voteStatus,
                                        onClick: Y,
                                        iconSize: 14
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "-mx-2 -my-1",
                                    children: (0, s.jsx)(r.U, {
                                        onClick: Q,
                                        variant: "comment",
                                        iconSize: 14
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            let UserCommentItemSkeleton = () => (0, s.jsxs)("div", {
                className: "flex animate-pulse gap-3",
                children: [(0, s.jsx)("div", {
                    className: "h-10 w-10 rounded-full bg-base300"
                }), (0, s.jsxs)("div", {
                    className: "flex flex-col gap-1",
                    children: [(0, s.jsxs)("div", {
                        className: "flex gap-2",
                        children: [(0, s.jsx)("div", {
                            className: "h-4 w-20 rounded-lg bg-base300"
                        }), (0, s.jsx)("div", {
                            className: "h-4 w-40 rounded-lg bg-base300"
                        })]
                    }), (0, s.jsx)("div", {
                        className: "h-4 w-40 rounded-lg bg-base300"
                    })]
                })]
            })
        },
        66195: function(e, t, a) {
            "use strict";
            a.d(t, {
                ag: function() {
                    return commentReplyFilterQueryKey
                },
                ot: function() {
                    return setVoteStatus
                },
                y9: function() {
                    return i
                }
            });
            var s = a(28839),
                n = a(3928),
                l = a(26475);

            function commentReplyFilterQueryKey(e) {
                return {
                    postCommentId: e
                }
            }
            let {
                batchedKeys: r,
                useBatchedKey: i
            } = (0, l.y)({
                chunkLimit: 50
            });

            function setVoteStatus(e) {
                let {
                    postCommentId: t,
                    voteStatus: a,
                    upvoteCount: l
                } = e, i = r.keys.get(t);
                i && (0, n.QQb)({
                    query: n.O6c,
                    variables: {
                        input: {
                            postCommentIds: i
                        }
                    }
                }, e => e ? (0, s.ZP)(e, e => {
                    for (let s of e.data.userVoteOnPostComment)
                        if (s.postCommentId === t) {
                            s.voteStatus = a, s.upvoteCount = l;
                            return
                        }
                    e.data.userVoteOnPostComment.push({
                        voteStatus: a,
                        upvoteCount: l,
                        postCommentId: t
                    })
                }) : e)
            }
        },
        59173: function(e, t, a) {
            "use strict";
            a.d(t, {
                G: function() {
                    return AddToPlaylistModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(22248),
                i = a(88924),
                o = a(79548),
                d = a(58285),
                c = a(49868);
            a(96960);
            var u = a(8205),
                m = a(43607),
                p = a(26225),
                x = a(24595),
                h = a(37196),
                f = a(99686),
                v = a(70522),
                g = a(96301),
                b = a(43158),
                y = a(22181),
                C = a(75747),
                S = a(3928),
                j = a(17050),
                w = a(59630),
                T = a(56482),
                N = a(18499),
                I = a(4967),
                P = a(97946),
                R = a(64571);
            let PlaylistRow = e => {
                    let {
                        isSelected: t,
                        isAlreadyAdded: a,
                        onSelect: n,
                        playlistFragment: r
                    } = e, i = (0, S.S3c)(S.Uop, r), o = (0, R.a7)({
                        playTimeInSeconds: i.playTimeInSeconds
                    }), d = t || a;
                    return (0, s.jsxs)(A, {
                        children: [(0, s.jsx)(L, {
                            children: (0, s.jsx)(I.Zs, {
                                playlist: i,
                                maxSize: 48,
                                priority: !1
                            })
                        }), (0, s.jsxs)(O, {
                            children: [(0, s.jsx)(M, {
                                children: i.name
                            }), (0, s.jsxs)(_, {
                                children: [i.releaseCount, " Sound", 1 == i.releaseCount ? "" : "s", o ? ` • ${o}` : ""]
                            })]
                        }), a && (0, s.jsx)(E, {
                            children: "Added"
                        }), (0, s.jsx)(k, {
                            onClick: n,
                            isDisabled: a,
                            isAdded: d,
                            children: d ? (0, s.jsx)(l.G, {
                                icon: N.LE,
                                color: u.rS.colors.white.toString(),
                                size: "lg"
                            }) : (0, s.jsx)(l.G, {
                                icon: T.r8,
                                color: u.rS.colors.neutral800.toString(),
                                size: "lg"
                            })
                        })]
                    })
                },
                NewPlaylistRow = e => {
                    let {
                        releaseId: t
                    } = e;
                    return (0, s.jsx)(P.s, {
                        pathnameUri: `/playlist/new?initialRelease=${t}`,
                        children: (0, s.jsxs)(A, {
                            children: [(0, s.jsx)(L, {
                                newPlaylist: !0,
                                children: (0, s.jsx)(l.G, {
                                    icon: w.zR,
                                    size: "lg"
                                })
                            }), (0, s.jsx)(O, {
                                children: (0, s.jsx)(M, {
                                    children: "Create a new playlist"
                                })
                            })]
                        })
                    })
                },
                E = (0, u.zo)("span", {
                    base: "S",
                    color: "$neutral500",
                    marginRight: 6,
                    "@tablet": {
                        display: "none"
                    }
                }),
                A = (0, u.zo)("div", {
                    display: "flex",
                    height: 81,
                    color: "$neutral600",
                    fontSize: 13,
                    lineHeight: "18px",
                    alignItems: "center",
                    borderBottom: "1px solid $neutral200",
                    width: "100%",
                    [`&:hover ${E}`]: {
                        display: "inline"
                    }
                }),
                k = (0, u.zo)("button", {
                    borderRadius: 6,
                    width: 28,
                    height: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 8,
                    variants: {
                        isAdded: {
                            true: {
                                backgroundColor: "$neutral900",
                                svg: {
                                    width: 16
                                }
                            },
                            false: {
                                backgroundColor: "$white",
                                border: "1px solid $neutral500",
                                svg: {
                                    path: {
                                        stroke: "$neutral500"
                                    }
                                },
                                "&:hover": {
                                    svg: {
                                        path: {
                                            stroke: "$neutral900"
                                        }
                                    },
                                    borderColor: "$neutral900"
                                }
                            }
                        },
                        isDisabled: {
                            true: {}
                        }
                    },
                    compoundVariants: [{
                        isAdded: !0,
                        isDisabled: !0,
                        css: {
                            opacity: .2,
                            cursor: "not-allowed"
                        }
                    }]
                }),
                M = (0, u.zo)("span", {
                    base: "L",
                    fontStyle: "semibold",
                    display: "block"
                }),
                _ = (0, u.zo)("span", {
                    base: "S",
                    color: "$neutral700",
                    marginTop: 8
                }),
                O = (0, u.zo)("div", {
                    marginRight: "auto"
                }),
                L = (0, u.zo)("div", {
                    overflow: "hidden",
                    position: "relative",
                    height: 48,
                    width: 48,
                    borderRadius: 8,
                    marginRight: 16,
                    variants: {
                        newPlaylist: {
                            true: {
                                backgroundColor: "black",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "$white"
                            }
                        }
                    }
                }),
                AddToPlaylistModal = e => {
                    var t, a, u, p;
                    let {
                        releaseId: w
                    } = e, {
                        authUser: T
                    } = (0, g.aC)(), {
                        closeCancelModal: N
                    } = y.ModalContext.useContainer(), {
                        tablet: I
                    } = b.MediaQuery.useContainer(), [P, R] = (0, n.useState)([]), [E, A] = (0, n.useState)(new Set), [k, M] = (0, n.useState)(new Set), [_, O] = (0, n.useState)(""), {
                        mutateAsync: L
                    } = (0, S.Dbo)(S.tML, {}), [B, H] = (0, n.useState)(!1), {
                        openToast: W
                    } = C.ToastContext.useContainer(), $ = (0, n.useRef)((0, r.Z)(e => {
                        R([]), O(e)
                    }, 200)), [V, Z] = (0, n.useState)(null), {
                        data: Q,
                        isLoading: Y
                    } = (0, S.aM2)(S.H2H, {
                        variables: !!T && {
                            id: T.id,
                            text: _ || void 0,
                            after: V
                        },
                        onSuccess(e) {
                            R(t => {
                                var a;
                                return (0, j.a)({
                                    current: t,
                                    incoming: null === (a = e.data.user) || void 0 === a ? void 0 : a.shelves.edges,
                                    uniq(e) {
                                        let {
                                            node: t
                                        } = e;
                                        return t.id
                                    }
                                })
                            })
                        },
                        staleTime: 0
                    }), X = null == Q ? void 0 : null === (a = Q.data.user) || void 0 === a ? void 0 : null === (t = a.shelves) || void 0 === t ? void 0 : t.edges, K = null == Q ? void 0 : null === (u = Q.data.user) || void 0 === u ? void 0 : u.shelves.pageInfo;
                    (0, S.aM2)(S._WU, {
                        variables: {
                            releaseId: w,
                            playlistIds: null !== (p = null == X ? void 0 : X.map(e => {
                                let {
                                    node: t
                                } = e;
                                return t.id
                            })) && void 0 !== p ? p : []
                        },
                        onSuccess: e => {
                            M(t => {
                                var a;
                                let s = new Set(t);
                                return null == e || null === (a = e.data.release) || void 0 === a || a.shelves.edges.forEach(e => {
                                    let {
                                        node: t
                                    } = e;
                                    s.add(t.id)
                                }), s
                            })
                        },
                        enabled: !(0, i.Z)(X),
                        staleTime: 0
                    });
                    let handleSubmit = async () => {
                            if (w && 0 !== E.size) {
                                H(!0);
                                try {
                                    let t = 0,
                                        a = [];
                                    if (await (0, o.ZP)(Array.from(E), async e => {
                                            var s, n;
                                            let l = await L({
                                                input: {
                                                    releaseId: w,
                                                    shelfId: e
                                                }
                                            });
                                            (null == l ? void 0 : null === (n = l.data) || void 0 === n ? void 0 : null === (s = n.addReleaseToShelf) || void 0 === s ? void 0 : s.__typename) === "MutationAddReleaseToShelfSuccess" ? a.push(e): t++
                                        }, {
                                            stopOnError: !1,
                                            concurrency: 4
                                        }), t > 0 && W({
                                            text: `Error adding to ${t} playlist${1===t?"":"s"}`,
                                            variant: "error"
                                        }), a.length > 1) W({
                                        text: (0, s.jsxs)(s.Fragment, {
                                            children: ["Added to ", (0, s.jsxs)("strong", {
                                                children: [a.length, " playlists"]
                                            })]
                                        }),
                                        variant: "success"
                                    }), N();
                                    else if (1 === a.length) {
                                        var e;
                                        let t = P.find(e => {
                                            let {
                                                node: t
                                            } = e;
                                            return t.id === a[0]
                                        });
                                        W({
                                            text: (0, s.jsxs)(s.Fragment, {
                                                children: ["Added to ", (0, s.jsx)("strong", {
                                                    children: null == t ? void 0 : null === (e = t.node) || void 0 === e ? void 0 : e.name
                                                })]
                                            }),
                                            variant: "success"
                                        }), N()
                                    } else H(!1)
                                } catch (e) {
                                    H(!1), W({
                                        text: "Error adding to playlist",
                                        variant: "error"
                                    })
                                }
                            }
                        },
                        q = (0, s.jsxs)(D, {
                            children: [(0, s.jsx)("h3", {
                                children: "Add to playlist"
                            }), (0, s.jsx)("p", {
                                children: "Add to existing playlists or create a new playlist"
                            })]
                        }),
                        J = (0, n.useCallback)((e, t) => {
                            let {
                                node: a
                            } = t, n = a.id, l = E.has(n), r = k.has(a.id);
                            return (0, s.jsx)(PlaylistRow, {
                                playlistFragment: a,
                                isSelected: l,
                                isAlreadyAdded: r,
                                onSelect: () => {
                                    r || A(e => {
                                        let t = new Set(e);
                                        return l ? t.delete(n) : t.add(n), t
                                    })
                                }
                            })
                        }, [E, k]),
                        ee = (0, n.useCallback)(() => Y ? (0, s.jsx)(F, {
                            children: (0, s.jsx)(m.$, {
                                size: "lg"
                            })
                        }) : null, [Y]),
                        et = (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsxs)(v.Wf, {
                                css: {
                                    borderRadius: "$sm",
                                    height: 50,
                                    padding: "11px 12px",
                                    background: "$neutral50",
                                    maxWidth: "none"
                                },
                                children: [(0, s.jsx)(l.G, {
                                    icon: c.faMagnifyingGlass,
                                    size: "lg"
                                }), (0, s.jsx)(v.Mj, {
                                    css: {
                                        height: 35,
                                        margin: "0.1rem 0.5rem 0"
                                    },
                                    type: "text",
                                    placeholder: "Search your playlists",
                                    onChange: e => $.current(e.target.value)
                                })]
                            }), 0 === _.length && (0, s.jsx)(NewPlaylistRow, {
                                releaseId: w
                            }), Y || P.length > 0 || 0 === _.length ? (0, s.jsx)(z, {
                                children: (0, s.jsx)(d.OO, {
                                    style: {
                                        height: "calc(100% - 68px"
                                    },
                                    data: P,
                                    itemContent: J,
                                    endReached: () => {
                                        (null == K ? void 0 : K.hasNextPage) && Z(K.endCursor || null)
                                    },
                                    fixedItemHeight: 80,
                                    components: {
                                        Footer: ee
                                    }
                                })
                            }) : (0, s.jsxs)(G, {
                                children: [(0, s.jsx)(x.T, {}), (0, s.jsxs)("p", {
                                    children: ["No playlists found for “", _, "”"]
                                })]
                            })]
                        }),
                        ea = (0, s.jsxs)(U, {
                            children: [(0, s.jsx)(f.m, {
                                variant: "secondary",
                                label: "Cancel",
                                onClick: N,
                                fullWidth: !I,
                                deprecatedCSS: {
                                    minWidth: 167,
                                    "@tablet": {
                                        minWidth: 94
                                    }
                                }
                            }), (0, s.jsx)(f.m, {
                                variant: "primary",
                                label: "Add to Playlist",
                                onClick: handleSubmit,
                                fullWidth: !I,
                                disabled: 0 === E.size,
                                loading: B,
                                deprecatedCSS: {
                                    minWidth: 167,
                                    "@tablet": {
                                        minWidth: 136
                                    }
                                }
                            })]
                        });
                    return (0, s.jsx)(h.u_, {
                        header: q,
                        body: et,
                        closeModal: N,
                        footer: ea,
                        bodyStyles: {
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%"
                        },
                        containerStyles: {
                            width: "100%",
                            height: "100%",
                            paddingBottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            "@tablet": {
                                width: 600,
                                height: 749,
                                maxHeight: "calc(100vh - 32px)"
                            }
                        },
                        footerStyles: {
                            backgroundColor: "$white",
                            height: 68,
                            margin: 0,
                            padding: "12px 16px",
                            alignItems: "center",
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 8px 28px rgba(0, 0, 0, 0.28)",
                            "@tablet": {
                                position: "absolute",
                                paddingX: 24
                            }
                        }
                    })
                },
                D = (0, u.zo)("div", {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    h3: {
                        base: "L",
                        fontStyle: "semibold"
                    },
                    p: {
                        base: "M",
                        fontStyle: "regular",
                        color: "$neutral500"
                    },
                    "@tablet": {
                        h3: {
                            base: "XL"
                        },
                        p: {
                            base: "L",
                            color: "$neutral500"
                        }
                    }
                }),
                U = (0, u.zo)("div", {
                    display: "flex",
                    gap: 8,
                    width: "100%",
                    justifyContent: "space-evenly",
                    backgroundColor: "$white",
                    "@tablet": {
                        width: "unset",
                        gap: 16
                    }
                }),
                F = (0, u.zo)("div", {
                    height: 80,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }),
                z = (0, u.zo)("div", {
                    height: "100%",
                    "> div": { ...p.WZ
                    }
                }),
                G = (0, u.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    marginTop: 24,
                    gap: 8,
                    base: "S",
                    color: "$neutral900"
                })
        },
        24482: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return DeleteShelfModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(71992),
                r = a.n(l);
            a(96960);
            var i = a(54668),
                o = a(30676),
                d = a(96301),
                c = a(22181),
                u = a(75747),
                m = a(36750),
                p = a(3928),
                x = a(95390);
            (0, m.c)({
                trigger: [p.xPp, p.EeP],
                refetch: [p.NBT]
            });
            let DeleteShelfModal = e => {
                let {
                    shelfId: t
                } = e, {
                    closeCancelModal: a
                } = (0, c.useModal)(), {
                    openToast: l
                } = (0, u.useToast)(), {
                    authUser: m
                } = (0, d.aC)(), [h, f] = (0, n.useState)(!1), {
                    mutateAsync: v
                } = (0, p.Dbo)(p.xPp, {}), {
                    mutateAsync: g
                } = (0, p.Dbo)(p.EeP, {});
                if (!m) return null;
                let handleUndo = async () => {
                        try {
                            var e, a;
                            let s = await g({
                                playlistId: t
                            });
                            (null == s ? void 0 : null === (a = s.data) || void 0 === a ? void 0 : null === (e = a.recoverShelf) || void 0 === e ? void 0 : e.__typename) === "MutationRecoverShelfSuccess" ? l({
                                text: "Your playlist has been recovered",
                                variant: "success"
                            }): l({
                                text: "Error recovering your playlist.",
                                variant: "error"
                            })
                        } catch (e) {
                            l({
                                text: "Error recovering your playlist.",
                                variant: "error"
                            })
                        }
                    },
                    b = (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("p", {
                            children: "Are you sure you want to delete this playlist?"
                        }), (0, s.jsx)("p", {
                            children: "Once deleted, this cannot be undone but you can always create a new playlist."
                        })]
                    });
                return (0, s.jsx)(i.Z, {
                    title: "Delete Playlist",
                    body: b,
                    bodyWithoutPaddingBottom: !0,
                    callToAction: (0, s.jsx)(o.j, {
                        label: "Delete my playlist",
                        variant: "critical",
                        loading: h,
                        onClick: async () => {
                            f(!0);
                            try {
                                await v({
                                    input: {
                                        shelfId: t
                                    }
                                });
                                let e = (0, x.OU)(m.webappUri, {
                                    subpath: "/playlists"
                                });
                                window.location.pathname.startsWith(e) || await r().push(e), l({
                                    text: "Your playlist has been deleted.",
                                    ctaText: "Undo",
                                    ctaOnClick: handleUndo
                                })
                            } catch (e) {
                                l({
                                    text: "Error deleting your playlist.",
                                    variant: "error"
                                })
                            } finally {
                                a()
                            }
                        }
                    }),
                    backCallToAction: (0, s.jsx)(o.j, {
                        label: "Cancel",
                        variant: "secondary",
                        onClick: a
                    }),
                    closeModal: a
                })
            }
        },
        14335: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return FeedPostModalMainPlaylist
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(55344),
                r = a(98454);
            a(96960);
            var i = a(45378),
                o = a(21922),
                d = a(3928);
            let FeedPostModalMainPlaylist = e => {
                let {
                    playlistId: t,
                    onRemoveResource: a,
                    onEditPlaylistClicked: c,
                    allowEdit: u
                } = e, {
                    data: m,
                    isLoading: p
                } = (0, d.aM2)(d.PFu, {
                    variables: {
                        playlistId: t
                    },
                    staleTime: (0, l.Z)("1 minute")
                }), x = null == m ? void 0 : m.data.shelf;
                return !x || p ? (0, s.jsx)("div", {
                    className: "h-[152px] w-full animate-pulse rounded-lg bg-neutral200 shadow-tertiary"
                }) : (0, s.jsxs)("div", {
                    className: "relative w-full rounded-lg shadow-tertiary",
                    children: [(0, s.jsx)(i.M, {
                        playlistFrag: x,
                        source: "Composer",
                        onRemoveResource: a
                    }), (0, s.jsx)("div", {
                        className: "absolute right-4 top-3 z-above2 ",
                        children: (0, s.jsx)(o.h, {
                            variant: "inverted",
                            iconSize: 18,
                            size: 32,
                            icon: (0, s.jsx)(n.G, {
                                icon: r.Iw,
                                className: " text-white"
                            }),
                            onClick: c,
                            disabled: !u
                        })
                    })]
                })
            }
        },
        3967: function(e, t, a) {
            "use strict";
            a.d(t, {
                S: function() {
                    return FeedPostModalMainSound
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(55344);
            a(96960);
            var l = a(89222),
                r = a(3928);

            function FeedPostModalMainSound(e) {
                let {
                    releaseId: t,
                    onRemoveResource: a,
                    onEditSoundClicked: i,
                    allowEdit: o
                } = e, {
                    data: d,
                    status: c
                } = (0, r.aM2)(r.OqG, {
                    variables: {
                        releaseId: t
                    },
                    staleTime: (0, n.Z)("1 minute")
                }), u = null == d ? void 0 : d.data.release;
                return u && "loading" !== c ? (0, s.jsx)(l.a, {
                    variant: "composer",
                    releaseFrag: u,
                    customSubTitle: null,
                    onRemoveResource: a,
                    onEditSoundClicked: i,
                    allowEdit: o
                }) : (0, s.jsx)("div", {
                    className: "h-[152px] w-full animate-pulse rounded-lg bg-base200 shadow-tertiary"
                })
            }
        },
        80498: function(e, t, a) {
            "use strict";
            a.d(t, {
                p: function() {
                    return FeedPostSelectResource
                },
                Z: function() {
                    return P
                }
            });
            var s, n, l, r, i = a(16356),
                o = a(97352),
                d = a(69761),
                c = a(74447),
                u = a.n(c),
                m = a(3351),
                p = a(72102),
                x = a(22248),
                h = a(49868),
                f = a(96960),
                v = a(42529);
            let useScrollPosition = () => {
                let [e, t] = o.useState(!0), [a, s] = o.useState(!0), n = (0, o.useRef)(null), l = (0, v.R)(() => {
                    let e = n.current;
                    if (e) {
                        if (!(null == e ? void 0 : e.scrollHeight)) return t(!0);
                        t(0 === e.scrollTop), s(e.scrollHeight - e.scrollTop <= e.clientHeight)
                    }
                }), r = (0, v.R)(e => {
                    l()
                }), i = (0, o.useMemo)(() => (0, x.Z)(r, 100, {
                    leading: !0,
                    trailing: !0
                }), [r]);
                (0, o.useEffect)(() => {
                    let e = n.current;
                    if (!e) return;
                    let t = new MutationObserver((e, t) => {
                        l()
                    });
                    return t.observe(e, {
                        childList: !0
                    }), () => {
                        t.disconnect()
                    }
                }, [n, l]);
                let d = (0, o.useMemo)(() => [{
                    isScrolledToTop: e,
                    isScrolledToBottom: a
                }, {
                    onScroll: i,
                    ref: n
                }], [e, a, i, n]);
                return d
            };
            var g = a(66361),
                b = a(3928),
                y = a(4967),
                C = a(47544),
                S = a(14461),
                j = a(64571),
                w = a(66229),
                T = a(45879),
                N = a(85846);
            let SelectResourceUI = e => {
                let {
                    onClick: t,
                    cover: a,
                    title: s,
                    name: n,
                    subText: l,
                    selected: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: "group mx-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 hover:bg-neutral50 lt:mx-4",
                    onClick: t,
                    tabIndex: 0,
                    children: [(0, i.jsx)("div", {
                        className: "relative h-12 w-12 flex-00auto",
                        children: a
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-center gap-1",
                        children: [(0, i.jsx)("div", {
                            className: "line-clamp-1 font-title text-title-xxs font-medium text-neutral700",
                            children: s
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center text-base-s text-base500",
                            children: [(0, i.jsx)("div", {
                                className: "line-clamp-1 ",
                                children: n
                            }), l && (0, i.jsxs)("div", {
                                className: "line-clamp-1 ",
                                children: [N.YV, l]
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: "h-5 w-5",
                        children: r ? (0, i.jsx)(p.G, {
                            icon: T.W3,
                            size: "lg",
                            className: "text-base800"
                        }) : (0, i.jsx)(p.G, {
                            icon: w.di,
                            size: "lg",
                            className: "text-base500"
                        })
                    })]
                })
            };

            function PlaylistSelectItem(e) {
                let {
                    playlistFrag: t,
                    selected: a,
                    onPlaylistSelected: s
                } = e, n = (0, b.S3c)(b.Sji, t), {
                    isPlaying: l,
                    onPlayButtonClick: r,
                    loading: o
                } = (0, S.T)({
                    playlistId: n.id
                }), {
                    name: d,
                    user: {
                        username: c
                    },
                    releaseCount: u
                } = n, m = (0, i.jsxs)("div", {
                    className: "group relative h-12 w-12 overflow-hidden rounded-md ",
                    children: [(0, i.jsx)(y.Zs, {
                        playlist: n,
                        maxSize: 48,
                        priority: !0
                    }), ";", (0, i.jsx)("div", {
                        "data-state": l ? "playing" : "paused",
                        className: "absolute top-0 flex h-full w-full items-center justify-center transition-opacity duration-300  ease-in-out data-[state=playing]:opacity-100 group-hover:data-[state=paused]:opacity-100  lg:opacity-0  [&_.play-button-container]:h-12  [&_.play-button-container]:w-12 ",
                        children: (0, i.jsx)(C.J, {
                            color: "transparent",
                            size: "s",
                            onClick: r,
                            playing: l,
                            disabled: 0 === u,
                            loading: o,
                            elevated: !0,
                            currentListeningParty: null
                        })
                    })]
                });
                return (0, i.jsx)(SelectResourceUI, {
                    cover: m,
                    onClick: s,
                    title: d,
                    name: c,
                    selected: a,
                    subText: `${u} ${(0,j.Lo)({word:"sound",count:u})}`
                })
            }

            function SelectResourceItemSkeleton() {
                return (0, i.jsxs)("div", {
                    className: "mx-2 flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 lt:mx-4",
                    children: [(0, i.jsx)("div", {
                        className: "mr-2 h-12 w-12 animate-pulse rounded-md bg-neutral100"
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-1 flex-col justify-center gap-2",
                        children: [(0, i.jsx)("div", {
                            className: "h-2 w-32 animate-pulse rounded-full bg-neutral100"
                        }), (0, i.jsx)("div", {
                            className: "h-2 w-24 animate-pulse rounded-full bg-neutral100"
                        })]
                    })]
                })
            }(s = l || (l = {})).Recent = "Recent", s.Search = "Search";
            let SelectPlaylist = e => {
                let {
                    selectedResource: t,
                    setSelectedResource: a,
                    step: s
                } = e, [n, l] = o.useState(""), [r, d] = o.useState(""), c = o.useRef(null), [u, m] = useScrollPosition(), f = o.useMemo(() => (0, x.Z)(d, 250, {
                    leading: !0,
                    maxWait: 2e3
                }), []), {
                    data: v,
                    isLoading: y
                } = (0, b.aM2)(b.NlK, {
                    staleTime: 1 / 0
                }), {
                    data: C,
                    isLoading: S
                } = (0, b.aM2)(b.oBy, {
                    variables: {
                        input: {
                            limit: 20,
                            text: r
                        }
                    },
                    staleTime: 1 / 0,
                    enabled: !!r.length
                }), j = S || n !== r, w = null == C ? void 0 : C.data.search.shelves.edges.map(e => e.node), T = !j && !(null == w ? void 0 : w.length) && !!r.length;
                (0, o.useEffect)(() => {
                    let e;
                    return s === g._.ResourceSelect && (e = setTimeout(() => {
                        var e;
                        null === (e = c.current) || void 0 === e || e.focus()
                    }, 300)), () => {
                        clearTimeout(e)
                    }
                }, [s]);
                let [N, I] = (0, o.useMemo)(() => {
                    let e = null == v ? void 0 : v.data.currentPlaylistChart.chartRanks.edges.map(e => e.node.playlist);
                    return n.length ? ["Search", w || []] : ["Recent", e || []]
                }, [w, n, v]);
                return (0, i.jsxs)("div", {
                    className: "flex h-full w-full flex-col overflow-auto",
                    children: [(0, i.jsxs)("div", {
                        className: "mx-4 box-border flex flex-00auto items-center gap-3 self-stretch rounded-md bg-base100 px-3 lt:mx-6",
                        children: [(0, i.jsx)(p.G, {
                            icon: h.faMagnifyingGlass,
                            size: "sm",
                            className: "text-base800"
                        }), (0, i.jsx)("input", {
                            ref: c,
                            value: n,
                            onChange: e => {
                                l(e.target.value), f(e.target.value)
                            },
                            placeholder: "Search playlists",
                            className: "w-full bg-transparent py-2 text-base-m text-base900 focus:outline-none"
                        })]
                    }), (0, i.jsx)("h2", {
                        className: "mb-2 mt-3 px-4 font-base text-base-s uppercase text-neutral500 lt:px-6",
                        children: "Recent" === N ? "Recent" : "Results"
                    }), (0, i.jsxs)("div", {
                        className: "relative flex-1 overflow-hidden",
                        children: [(0, i.jsx)("div", {
                            className: `absolute left-0 right-0 top-0 h-5 bg-gradient-to-b from-neutral100 transition-opacity duration-150 ${u.isScrolledToTop?"opacity-0":"opacity-100"}`
                        }), (0, i.jsx)("div", {
                            className: `absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-neutral100 transition-opacity duration-150 ${u.isScrolledToBottom?"opacity-0":"opacity-100"}`
                        }), (0, i.jsxs)("div", {
                            className: "scrollbar-light-thin flex h-full flex-1 flex-col overflow-x-hidden overflow-y-scroll pb-3",
                            ...m,
                            children: [j || y ? Array.from({
                                length: 3
                            }).map((e, t) => (0, i.jsx)(SelectResourceItemSkeleton, {}, `sound-select-item-skeleton-${t}`)) : (0, i.jsx)(i.Fragment, {
                                children: I.map(e => (0, i.jsx)(PlaylistSelectItem, {
                                    playlistFrag: e,
                                    selected: (null == t ? void 0 : t.type) === "playlist" && e.id === t.playlistId,
                                    onPlaylistSelected: () => {
                                        a({
                                            type: "playlist",
                                            playlistId: e.id
                                        })
                                    }
                                }, `feed-post-modal-sound-select-item-${e.id}`))
                            }), T && (0, i.jsx)("div", {
                                className: "mx-4 flex flex-col items-start justify-start lt:mx-6",
                                children: (0, i.jsxs)("div", {
                                    className: "text-base-s text-base500",
                                    children: [`Nothing sounds like "${r}"`, " "]
                                })
                            })]
                        })]
                    })]
                })
            };
            var I = a(29413);

            function SoundSelectItem(e) {
                let {
                    releaseFrag: t,
                    selected: a,
                    onReleaseSelected: s
                } = e, n = (0, b.S3c)(b.tp9, t);
                return (0, i.jsx)(SelectResourceUI, {
                    cover: (0, i.jsx)(I.v, {
                        playButtonSize: "sm",
                        nextImageSizes: "48px",
                        releaseFrag: t
                    }),
                    onClick: () => {
                        s(n.id)
                    },
                    title: n.title,
                    name: n.artist.name,
                    selected: a
                })
            }

            function SelectSound(e) {
                let {
                    selectedResource: t,
                    setSelectedResource: a,
                    step: s
                } = e, [n, l] = o.useState(""), [r, d] = (0, o.useState)(""), c = (0, o.useRef)(null), [u, m] = useScrollPosition(), f = (0, o.useMemo)(() => (0, x.Z)(d, 250, {
                    leading: !0,
                    maxWait: 2e3
                }), []), {
                    data: v,
                    isLoading: y
                } = (0, b.aM2)(b.fuK, {
                    staleTime: 1 / 0
                }), {
                    data: C,
                    isLoading: S
                } = (0, b.aM2)(b.qlK, {
                    variables: {
                        input: {
                            limit: 20,
                            text: r
                        }
                    },
                    staleTime: 1 / 0,
                    enabled: !!r.length
                }), j = S || n !== r, w = null == C ? void 0 : C.data.search.releasesPaginated.edges, T = !j && !(null == w ? void 0 : w.length) && !!r.length;
                (0, o.useEffect)(() => {
                    let e;
                    return s === g._.ResourceSelect && (e = setTimeout(() => {
                        var e;
                        null === (e = c.current) || void 0 === e || e.focus()
                    }, 300)), () => {
                        clearTimeout(e)
                    }
                }, [s]);
                let [N, I] = (0, o.useMemo)(() => n.length ? ["Search", w || []] : ["Recent", (null == v ? void 0 : v.data.releases.edges) || []], [w, n, v]);
                return (0, i.jsxs)("div", {
                    className: "flex h-full w-full flex-col overflow-auto",
                    children: [(0, i.jsxs)("div", {
                        className: "mx-4 box-border flex flex-00auto items-center gap-3 self-stretch rounded-md bg-base100 px-3 lt:mx-6",
                        children: [(0, i.jsx)(p.G, {
                            icon: h.faMagnifyingGlass,
                            size: "sm",
                            className: "text-base800"
                        }), (0, i.jsx)("input", {
                            ref: c,
                            value: n,
                            onChange: e => {
                                l(e.target.value), f(e.target.value)
                            },
                            placeholder: "Search sounds",
                            className: "w-full bg-transparent py-2 text-base-m text-base900 focus:outline-none"
                        })]
                    }), (0, i.jsx)("h2", {
                        className: "mb-2 mt-3 px-4 font-base text-base-s uppercase text-neutral500 lt:px-6",
                        children: "Recent" === N ? "Recent" : "Results"
                    }), (0, i.jsxs)("div", {
                        className: "relative flex-1 overflow-hidden",
                        children: [(0, i.jsx)("div", {
                            className: `absolute left-0 right-0 top-0 h-5 bg-gradient-to-b from-neutral100 transition-opacity duration-150 ${u.isScrolledToTop?"opacity-0":"opacity-100"}`
                        }), (0, i.jsx)("div", {
                            className: `absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-neutral100 transition-opacity duration-150 ${u.isScrolledToBottom?"opacity-0":"opacity-100"}`
                        }), (0, i.jsxs)("div", {
                            className: "scrollbar-light-thin flex h-full flex-1 flex-col overflow-x-hidden  pb-3",
                            ...m,
                            children: [j || y ? Array.from({
                                length: 3
                            }).map((e, t) => (0, i.jsx)(SelectResourceItemSkeleton, {}, `sound-select-item-skeleton-${t}`)) : (0, i.jsx)(i.Fragment, {
                                children: I.map(e => {
                                    let {
                                        node: s
                                    } = e, n = (0, b.S3c)(b.tp9, s);
                                    return (0, i.jsx)(SoundSelectItem, {
                                        releaseFrag: s,
                                        selected: (null == t ? void 0 : t.type) === "release" && n.id === t.releaseId,
                                        onReleaseSelected: e => {
                                            a({
                                                type: "release",
                                                releaseId: e
                                            })
                                        }
                                    }, `feed-post-modal-sound-select-item-${n.id}`)
                                })
                            }), T && (0, i.jsx)("div", {
                                className: "mx-4 flex flex-col items-start justify-start lt:mx-6",
                                children: (0, i.jsxs)("div", {
                                    className: "text-base-s text-base500",
                                    children: [`Nothing sounds like "${r}"`, " "]
                                })
                            })]
                        })]
                    })]
                })
            }(0, f.P)(`
  query FeedPostModalSoundSelectInitialReleaseResults {
    releases(
      pagination: { first: 3, sort: { createdAt: DESC } }
      filter: { releaseAlbumRevealStatus: ONLY_NOT_REVEALED_ALBUMS, mintTimeStatus: PAST }
    ) {
      edges {
        node {
          ...FeedPostModalSoundSelectItem
          ...ReleaseCoverImagePlayButton
        }
      }
    }
  }
`), (n = r || (r = {})).Recent = "Recent", n.Search = "Search";
            let P = {
                RELEASE: "Releases",
                PLAYLIST: "Playlists"
            };

            function FeedPostSelectResource(e) {
                let {
                    selectedResource: t,
                    setSelectedResource: a,
                    selectedTab: s,
                    setTab: n,
                    step: l
                } = e;
                return (0, i.jsxs)(d.fC, {
                    value: s,
                    className: "relative flex h-full w-full flex-col",
                    children: [(0, i.jsxs)(d.aV, {
                        className: "mb-3 flex items-center  gap-2 px-4 lt:px-6",
                        children: [(0, i.jsx)(d.xz, {
                            value: P.RELEASE,
                            children: (0, i.jsx)(m.A, {
                                text: u()(P.RELEASE),
                                isSelected: s === P.RELEASE,
                                onClick: () => {
                                    n(P.RELEASE), a(null)
                                }
                            })
                        }), (0, i.jsx)(d.xz, {
                            value: P.PLAYLIST,
                            children: (0, i.jsx)(m.A, {
                                text: u()(P.PLAYLIST),
                                isSelected: s === P.PLAYLIST,
                                onClick: () => {
                                    n(P.PLAYLIST), a(null)
                                }
                            })
                        })]
                    }), (0, i.jsx)(d.VY, {
                        value: P.RELEASE,
                        className: "flex h-full w-full flex-col overflow-auto",
                        children: (0, i.jsx)(SelectSound, {
                            setSelectedResource: a,
                            selectedResource: t,
                            step: l
                        })
                    }), (0, i.jsx)(d.VY, {
                        value: P.PLAYLIST,
                        className: "flex h-full w-full flex-col overflow-auto",
                        children: (0, i.jsx)(SelectPlaylist, {
                            setSelectedResource: a,
                            selectedResource: t,
                            step: l
                        })
                    })]
                })
            }
        },
        66361: function(e, t, a) {
            "use strict";
            a.d(t, {
                t: function() {
                    return FeedPostModal
                },
                _: function() {
                    return n
                }
            });
            var s, n, l = a(16356),
                r = a(97352),
                i = a(44361),
                o = a(15429),
                d = a(42489),
                c = a(12849),
                u = a(69598),
                m = a(54668),
                p = a(72102),
                x = a(56482),
                h = a(43319),
                f = a(70069),
                v = a(3967),
                g = a(85846),
                b = a(14335);

            function FeedPostModalMain(e) {
                let {
                    onRemoveResource: t,
                    onEditResource: a,
                    allowEdit: s,
                    resource: n,
                    onChangeLexicalState: r
                } = e, i = null != n ? "release" === n.type ? (0, l.jsx)(v.S, {
                    allowEdit: s,
                    releaseId: n.releaseId,
                    onRemoveResource: t,
                    onEditSoundClicked: a
                }) : (0, l.jsx)(b.C, {
                    playlistId: n.playlistId,
                    onRemoveResource: t,
                    onEditPlaylistClicked: a,
                    allowEdit: s
                }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(f.A, {
                        initialMentionData: void 0,
                        id: void 0,
                        className: "mt-1 h-[40vh] md:h-80",
                        placeholder: "What's on your mind?",
                        onChange: r,
                        disabled: !1,
                        characterCount: {
                            maxLength: g.HJ,
                            show: !0
                        },
                        menuAnchorClassName: "z-modalDropdown",
                        autoFocus: !0
                    }), n ? i : (0, l.jsxs)("button", {
                        onClick: a,
                        className: "flex cursor-pointer items-center gap-4 rounded-md border border-base300 p-3 hover:bg-neutral50",
                        children: [(0, l.jsx)("div", {
                            className: "flex h-16 w-16 items-center justify-center rounded-md bg-black",
                            children: (0, l.jsx)(p.G, {
                                icon: h.Xi,
                                className: "text-white"
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex-1 text-left font-title text-title-xxs font-medium text-neutral700",
                            children: "Select sounds or playlists"
                        }), (0, l.jsx)(p.G, {
                            icon: x.r8,
                            size: "lg",
                            className: "text-base500"
                        })]
                    })]
                })
            }
            var y = a(80498),
                C = a(18744),
                S = a(22181),
                j = a(42529);

            function FeedPostModal(e) {
                let {
                    sourceLocation: t,
                    preselectedResource: a,
                    channelId: s
                } = e, {
                    closeModal: n
                } = (0, S.useModal)(), [p, x] = (0, r.useState)(!1), [h, f] = (0, r.useState)(0), [v, b] = (0, r.useState)(!1), [w, T] = r.useState(y.Z.RELEASE), [N, I] = (0, r.useState)(null), [P, R] = (0, r.useState)(a), E = r.useRef(null), [A, k] = (0, r.useState)(), M = (0, r.useMemo)(() => (0, o.se)(c.Z.generateTextForNode(c.Z.getRootNode(A))).length || 0, [A]), _ = M > g.HJ, {
                    createReleaseIsLoading: O,
                    createPlaylistIsLoading: L,
                    createReleasePost: D,
                    createPlaylistPost: U
                } = (0, C.j)(), F = (0, j.R)(async () => {
                    P && ("release" === P.type ? D({
                        releaseId: P.releaseId,
                        lexicalContent: null == A ? void 0 : A.toJSON(),
                        sourceLocation: t,
                        onPostCreated: () => {
                            b(!0)
                        },
                        channelId: s
                    }) : U({
                        playlistId: P.playlistId,
                        lexicalContent: null == A ? void 0 : A.toJSON(),
                        sourceLocation: t,
                        onPostCreated: () => {
                            b(!0)
                        },
                        channelId: s
                    }))
                }), z = (0, r.useMemo)(() => 0 === h ? "Create Post" : "Select sound or playlist", [h]);
                r.useEffect(() => {
                    E.current && x(E.current.clientHeight < E.current.scrollHeight)
                }, [E]);
                let G = (0, l.jsxs)("div", {
                        className: "flex w-full gap-3 pb-3",
                        children: [(0, l.jsx)(u.z, {
                            fullWidth: !0,
                            onClick: () => {
                                M && !1 === confirm("Are you sure? You changes will not be saved.") || n()
                            },
                            label: "Cancel",
                            disabled: v,
                            className: "flex-1",
                            variant: "secondary"
                        }), (0, l.jsx)(u.z, {
                            fullWidth: !0,
                            disabled: !(M > 0 && P && !_) || v,
                            label: "Post",
                            className: "flex-1",
                            loading: O || L,
                            variant: "primary",
                            onClick: F,
                            type: "submit"
                        })]
                    }),
                    B = (0, l.jsxs)("div", {
                        className: "relative z-above1 flex w-full gap-3 pb-3 ",
                        children: [(0, l.jsx)(u.z, {
                            variant: "secondary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Back",
                            onClick: () => {
                                f(0)
                            }
                        }), (0, l.jsx)(u.z, {
                            variant: "primary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Select",
                            disabled: !N,
                            onClick: () => {
                                N && (R(N), f(0))
                            }
                        })]
                    }),
                    H = (0, d.G)();
                return (0, l.jsx)(m.Z, {
                    ref: E,
                    mobileFullScreen: !0,
                    closeModal: n,
                    size: "medium",
                    bodyClassName: (0, i.m)("relative flex flex-col px-0"),
                    containerClassName: "pb-0 h-full md:h-fit",
                    overlayClassName: "min-h-[-webkit-fill-available]",
                    bodyWithoutPadding: !0,
                    bodyWithoutPaddingBottom: !0,
                    showHeaderShadow: p,
                    title: z,
                    callToAction: 0 === h ? G : B,
                    body: (0, l.jsxs)("div", {
                        className: "relative flex-1 overflow-x-hidden",
                        children: [(0, l.jsx)("div", {
                            className: (0, i.m)("flex h-full flex-col gap-6 px-4 pb-4 transition-transform duration-200 ease-out lt:px-6 lt:pb-6", 0 === h ? "translate-x-0" : "-translate-x-full", H),
                            children: (0, l.jsx)(FeedPostModalMain, {
                                allowEdit: !a,
                                onRemoveResource: () => {
                                    I && I(null)
                                },
                                onEditResource: () => {
                                    f(1)
                                },
                                onChangeLexicalState: k,
                                resource: P
                            })
                        }), (0, l.jsx)("div", {
                            className: `absolute inset-0 flex flex-col gap-6 pb-4 transition-transform duration-200 ease-out  lt:pb-6 ${0===h?"translate-x-full":"translate-x-0"}`,
                            children: (0, l.jsx)(y.p, {
                                selectedResource: N,
                                setSelectedResource: I,
                                selectedTab: w,
                                setTab: T,
                                step: h
                            })
                        })]
                    })
                })
            }(s = n || (n = {}))[s.Main = 0] = "Main", s[s.ResourceSelect = 1] = "ResourceSelect"
        },
        18744: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return useFeedPost
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(78608);
            a(96960);
            var r = a(58658),
                i = a(22181),
                o = a(3928),
                d = a(64398),
                c = a(42529),
                u = a(14034),
                m = a(85846),
                p = a(72102),
                x = a(38359),
                h = a(69598),
                f = a(73950),
                v = a(76292),
                g = a(54668),
                b = a(20209),
                y = a(64571),
                C = a(95390);
            let S = (0, v.Z)(1200, 635);

            function AfterGeneralPostModal(e) {
                let {
                    sourceLocation: t,
                    postFrag: a
                } = e, l = (0, o.S3c)(o.gKN, a), {
                    id: r,
                    webappUri: d
                } = l, {
                    closeModal: c
                } = (0, i.useModal)(), m = (0, n.useMemo)(() => (0, y.xr)({
                    postId: r
                }), [r]);
                return (0, s.jsx)(g.Z, {
                    closeModal: () => {
                        c(), (0, u.uH)({
                            event: "After Post Share Modal Closed",
                            properties: {
                                associationType: "Post",
                                associationId: r,
                                sourceComponent: t
                            }
                        })
                    },
                    bodyWithoutPaddingBottom: !0,
                    body: (0, s.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: m ? (0, s.jsx)("div", {
                            className: "h-auto w-full",
                            children: (0, s.jsx)(f.G, {
                                placeholder: "blur",
                                blurDataURL: S,
                                className: "rounded-xl",
                                src: m,
                                alt: "Shared Post Image",
                                width: 635,
                                height: 635,
                                unoptimized: !0
                            })
                        }) : null
                    }),
                    title: "Posted!",
                    callToAction: (0, s.jsxs)("div", {
                        className: "flex w-full flex-row gap-3 [&_a]:w-full",
                        children: [(0, s.jsx)(h.z, {
                            variant: "secondary",
                            className: "px-[10px] text-base-l",
                            size: "L",
                            fullWidth: !0,
                            label: "View Post",
                            href: (0, C.OU)(d),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal View Post",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                }), c()
                            }
                        }), (0, s.jsx)(h.z, {
                            variant: "primary",
                            className: "px-[10px] text-base-l",
                            leadingIcon: (0, s.jsx)(p.G, {
                                size: "lg",
                                icon: x.md
                            }),
                            size: "L",
                            fullWidth: !0,
                            label: "Share",
                            href: (0, b.j)({
                                webappUri: d,
                                artistTwitterHandle: null
                            }),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal Share To Twitter",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                })
                            }
                        })]
                    })
                })
            }
            let j = (0, v.Z)(1200, 635);

            function AfterPlaylistPostModal(e) {
                let {
                    sourceLocation: t,
                    postFrag: a
                } = e, l = (0, o.S3c)(o.TFZ, a), {
                    id: r,
                    optionalShelf: d,
                    webappUri: c
                } = l, {
                    closeModal: m
                } = (0, i.useModal)(), v = (0, n.useMemo)(() => (0, y.xr)({
                    postId: r
                }), [r]);
                if (!d) return null;
                let {
                    user: {
                        twitterHandle: S
                    }
                } = d;
                return (0, s.jsx)(g.Z, {
                    closeModal: () => {
                        m(), (0, u.uH)({
                            event: "After Post Share Modal Closed",
                            properties: {
                                associationType: "Post",
                                associationId: r,
                                sourceComponent: t
                            }
                        })
                    },
                    bodyWithoutPaddingBottom: !0,
                    body: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, s.jsx)("h2", {
                            children: "Share to amplify the reach of your post."
                        }), v ? (0, s.jsx)("div", {
                            className: "h-auto w-full",
                            children: (0, s.jsx)(f.G, {
                                placeholder: "blur",
                                blurDataURL: j,
                                className: "rounded-xl",
                                src: v,
                                alt: "Shared Post Image",
                                width: 635,
                                height: 635,
                                unoptimized: !0
                            })
                        }) : null]
                    }),
                    title: "Posted!",
                    callToAction: (0, s.jsxs)("div", {
                        className: "flex w-full flex-row gap-3 [&_a]:w-full",
                        children: [(0, s.jsx)(h.z, {
                            variant: "secondary",
                            className: "px-[10px] text-base-l",
                            size: "L",
                            fullWidth: !0,
                            label: "View Post",
                            href: (0, C.OU)(c),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal View Post",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                }), m()
                            }
                        }), (0, s.jsx)(h.z, {
                            variant: "primary",
                            className: "px-[10px] text-base-l",
                            leadingIcon: (0, s.jsx)(p.G, {
                                size: "lg",
                                icon: x.md
                            }),
                            size: "L",
                            fullWidth: !0,
                            label: "Share",
                            href: (0, b.j)({
                                webappUri: c,
                                artistTwitterHandle: S
                            }),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal Share To Twitter",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                })
                            }
                        })]
                    })
                })
            }
            let w = (0, v.Z)(1200, 635);

            function AfterReleasePostModal(e) {
                let {
                    sourceLocation: t,
                    postFrag: a
                } = e, l = (0, o.S3c)(o.D8A, a), {
                    id: r,
                    optionalRelease: d,
                    webappUri: c
                } = l, {
                    closeModal: m
                } = (0, i.useModal)(), v = (0, n.useMemo)(() => (0, y.xr)({
                    postId: r
                }), [r]);
                if (!d) return null;
                let {
                    publicAffiliateFeeBPS: S,
                    artist: {
                        user: {
                            twitterHandle: j
                        }
                    }
                } = d;
                return (0, s.jsx)(g.Z, {
                    closeModal: () => {
                        m(), (0, u.uH)({
                            event: "After Post Share Modal Closed",
                            properties: {
                                associationType: "Post",
                                associationId: r,
                                sourceComponent: t
                            }
                        })
                    },
                    bodyWithoutPaddingBottom: !0,
                    body: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [(0, s.jsx)("h2", {
                            children: S ? "Share to earn curator rewards for every primary sale from your link." : "Share to amplify the reach of your post."
                        }), v ? (0, s.jsx)("div", {
                            className: "h-auto w-full",
                            children: (0, s.jsx)(f.G, {
                                placeholder: "blur",
                                blurDataURL: w,
                                className: "rounded-xl",
                                src: v,
                                alt: "Shared Post Image",
                                width: 635,
                                height: 635,
                                unoptimized: !0
                            })
                        }) : null]
                    }),
                    title: "Posted!",
                    callToAction: (0, s.jsxs)("div", {
                        className: "flex w-full flex-row gap-3 [&_a]:w-full",
                        children: [(0, s.jsx)(h.z, {
                            variant: "secondary",
                            className: "px-[10px] text-base-l",
                            size: "L",
                            fullWidth: !0,
                            label: "View Post",
                            href: (0, C.OU)(c),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal View Post",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                }), m()
                            }
                        }), (0, s.jsx)(h.z, {
                            variant: "primary",
                            className: "px-[10px] text-base-l",
                            leadingIcon: (0, s.jsx)(p.G, {
                                size: "lg",
                                icon: x.md
                            }),
                            size: "L",
                            fullWidth: !0,
                            label: "Share",
                            href: (0, b.j)({
                                webappUri: c,
                                artistTwitterHandle: j
                            }),
                            onClick: () => {
                                (0, u.uH)({
                                    event: "After Post Share Modal Share To Twitter",
                                    properties: {
                                        associationType: "Post",
                                        associationId: r,
                                        sourceComponent: t
                                    }
                                })
                            }
                        })]
                    })
                })
            }

            function useFeedPost() {
                let {
                    openModal: e
                } = (0, i.useModal)(), {
                    value: t
                } = (0, l.useGate)(m.ln.SPOTIFY_LINKS), a = (0, d.S)(), {
                    isLoading: n,
                    mutateAsync: p
                } = (0, o.Dbo)(o.G3U, {}), {
                    isLoading: x,
                    mutateAsync: h
                } = (0, o.Dbo)(o.gU2, {}), {
                    isLoading: f,
                    mutateAsync: v
                } = (0, o.Dbo)(o.B13, {}), g = (0, c.R)(async t => {
                    let {
                        lexicalContent: n,
                        releaseId: l,
                        sourceLocation: i,
                        onPostCreated: o,
                        channelId: d
                    } = t;
                    try {
                        (0, u.L9)({
                            event: "Create Post",
                            properties: {
                                associationType: "Post",
                                associationId: l,
                                postType: "ReleasePost",
                                releaseId: l,
                                playlistId: null,
                                channelId: null != d ? d : null,
                                linkDomain: null
                            }
                        });
                        let t = await p({
                                input: {
                                    lexicalContent: n,
                                    releaseId: l,
                                    channelId: d
                                }
                            }),
                            a = t.data.createReleasePost;
                        if ("MutationCreateReleasePostSuccess" === a.__typename) "ReleasePost" === a.data.__typename && ((0, u.L9)({
                            event: "Create Post Success",
                            properties: {
                                associationType: "Post",
                                associationId: l,
                                postType: "ReleasePost",
                                releaseId: l,
                                playlistId: null,
                                channelId: null != d ? d : null,
                                linkDomain: null,
                                postId: a.data.id
                            }
                        }), e("AFTER_RELEASE_FEED_POST", {
                            body: (0, s.jsx)(AfterReleasePostModal, {
                                postFrag: a.data,
                                sourceLocation: i
                            })
                        }), o());
                        else throw Error("Failed to create release post", {
                            cause: a
                        })
                    } catch (e) {
                        a({
                            error: e,
                            action: d ? r.L3.CREATE_POST_FAILED : r.Ry.CREATE_POST_FAILED,
                            errorType: r.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't create release post",
                            toast: m.fn,
                            pillar: d ? "CHANNELS" : "POSTING"
                        })
                    }
                }), b = (0, c.R)(async t => {
                    let {
                        playlistId: n,
                        lexicalContent: l,
                        sourceLocation: i,
                        onPostCreated: o,
                        channelId: d
                    } = t;
                    try {
                        (0, u.L9)({
                            event: "Create Post",
                            properties: {
                                associationType: "Post",
                                associationId: n,
                                postType: "PlaylistPost",
                                releaseId: null,
                                playlistId: n,
                                channelId: null != d ? d : null,
                                linkDomain: null
                            }
                        });
                        let t = await h({
                                input: {
                                    lexicalContent: l,
                                    shelfId: n,
                                    channelId: d
                                }
                            }),
                            a = t.data.createPlaylistPost;
                        if ("MutationCreatePlaylistPostSuccess" === a.__typename) "PlaylistPost" === a.data.__typename && ((0, u.L9)({
                            event: "Create Post Success",
                            properties: {
                                associationType: "Post",
                                associationId: n,
                                postType: "PlaylistPost",
                                releaseId: null,
                                playlistId: n,
                                channelId: null != d ? d : null,
                                linkDomain: null,
                                postId: a.data.id
                            }
                        }), e("AFTER_PLAYLIST_FEED_POST", {
                            body: (0, s.jsx)(AfterPlaylistPostModal, {
                                postFrag: a.data,
                                sourceLocation: i
                            })
                        }), o());
                        else throw Error("Failed to create playlist post")
                    } catch (e) {
                        a({
                            error: e,
                            action: d ? r.L3.CREATE_POST_FAILED : r.Ry.CREATE_POST_FAILED,
                            errorType: r.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't create playlist post",
                            toast: m.fn,
                            pillar: d ? "CHANNELS" : "POSTING"
                        })
                    }
                }), y = (0, c.R)(async n => {
                    let {
                        linkDomain: l,
                        lexicalContent: i,
                        sourceLocation: o,
                        onPostCreated: d,
                        channelId: c
                    } = n;
                    if (t) try {
                        (0, u.L9)({
                            event: "Create Post",
                            properties: {
                                associationType: "Post",
                                associationId: null,
                                postType: "GeneralPost",
                                playlistId: null,
                                releaseId: null,
                                channelId: null != c ? c : null,
                                linkDomain: l
                            }
                        });
                        let t = await v({
                                input: {
                                    lexicalContent: i,
                                    channelId: c
                                }
                            }),
                            a = t.data.createGeneralPost;
                        if ("MutationCreateGeneralPostSuccess" === a.__typename) "GeneralPost" === a.data.__typename && ((0, u.L9)({
                            event: "Create Post Success",
                            properties: {
                                associationType: "Post",
                                associationId: a.data.id,
                                postType: "GeneralPost",
                                releaseId: null,
                                playlistId: null,
                                channelId: null != c ? c : null,
                                linkDomain: l,
                                postId: a.data.id
                            }
                        }), e("AFTER_GENERAL_FEED_POST", {
                            body: (0, s.jsx)(AfterGeneralPostModal, {
                                postFrag: a.data,
                                sourceLocation: o
                            })
                        }), d());
                        else throw Error("Failed to create general post", {
                            cause: a
                        })
                    } catch (e) {
                        a({
                            error: e,
                            action: c ? r.L3.CREATE_POST_FAILED : r.Ry.CREATE_POST_FAILED,
                            errorType: r.QS.POSTING,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "Couldn't create general post",
                            toast: m.fn,
                            pillar: c ? "CHANNELS" : "POSTING"
                        })
                    }
                });
                return {
                    createGeneralIsLoading: f,
                    createGeneralPost: y,
                    createGeneralPostAsync: v,
                    createPlaylistIsLoading: x,
                    createPlaylistPost: b,
                    createPlaylistPostAsync: h,
                    createReleaseIsLoading: n,
                    createReleasePost: g,
                    createReleasePostAsync: p
                }
            }
        },
        26831: function(e, t, a) {
            "use strict";
            a.d(t, {
                b: function() {
                    return InsufficientFundsModal
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(59665),
                l = a(33670),
                r = a(69598),
                i = a(37196),
                o = a(96301),
                d = a(22181),
                c = a(6911),
                u = a(64571);
            let InsufficientFundsModal = e => {
                let {
                    description: t,
                    chainId: a,
                    primaryButton: m,
                    secondaryButton: p
                } = e, {
                    closeCancelModal: x
                } = d.ModalContext.useContainer(), {
                    authUserAddress: h
                } = (0, o.aC)(), {
                    copy: f
                } = (0, c.F)({
                    text: h,
                    successMessage: "Address Copied"
                }), {
                    data: v,
                    isError: g,
                    isLoading: b
                } = (0, n.KQ)({
                    address: h || "0x000",
                    enabled: !!h,
                    formatUnits: "gwei",
                    chainId: a,
                    staleTime: 0
                }), y = (0, s.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-y-6",
                    children: [(0, s.jsx)("p", {
                        className: "font-base text-base-m",
                        children: t
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full flex-col items-center gap-y-4 font-base",
                        children: [(0, s.jsxs)("div", {
                            className: "flex w-full items-start justify-between align-top",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col justify-between gap-y-0.5",
                                children: [(0, s.jsx)("h2", {
                                    className: "text-base-l font-medium",
                                    children: "Your Balance"
                                }), (0, s.jsx)("p", {
                                    className: "text-base-s text-base500",
                                    children: (0, u.DO)(a)
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col justify-between gap-y-0.5 ",
                                children: [(0, s.jsx)("div", {
                                    className: "font-title text-title-s font-medium ",
                                    children: b || g ? (0, s.jsx)(r.z, {
                                        variant: "text",
                                        size: "XS",
                                        label: "",
                                        loading: !0
                                    }) : v ? (0, s.jsxs)(s.Fragment, {
                                        children: [(0, u.by)({
                                            weiValue: null == v ? void 0 : v.value.toString(),
                                            maxDecimals: 4
                                        }), " ", "ETH"]
                                    }) : (0, s.jsx)("p", {
                                        className: "text-base-s text-base500",
                                        children: "Unable to load"
                                    })
                                }), h && (0, s.jsx)("p", {
                                    className: "text-right text-base-s text-base500",
                                    children: (0, s.jsx)(l.g, {
                                        publicAddress: h.toLowerCase()
                                    })
                                })]
                            })]
                        }), h && (0, s.jsxs)("div", {
                            className: "w-[100%]",
                            children: [(0, s.jsx)("p", {
                                className: "text-base-m text-base800",
                                children: "Transfer funds to your wallet below:"
                            }), (0, s.jsxs)("div", {
                                className: "my-2 flex w-[100%]",
                                children: [(0, s.jsx)("input", {
                                    className: "mr-2 h-10 w-full gap-1 rounded-[6px] px-3 py-1 text-base-l text-base500",
                                    value: h,
                                    disabled: !0
                                }), (0, s.jsx)(r.z, {
                                    variant: "primary",
                                    label: "Copy",
                                    size: "S",
                                    onClick: async e => {
                                        e.preventDefault(), f()
                                    }
                                })]
                            }), (!!m || !!p) && (0, s.jsx)("p", {
                                className: "mt-4 flex justify-center text-base-m font-medium text-base800",
                                children: "or"
                            })]
                        }), (!!m || !!p) && (0, s.jsxs)("div", {
                            className: "flex w-full flex-col gap-y-3",
                            children: [m, p]
                        })]
                    })]
                });
                return (0, s.jsx)(i.u_, {
                    header: (0, s.jsx)("div", {
                        className: "flex items-center",
                        children: "Insufficient Funds"
                    }),
                    body: y,
                    closeModal: x
                })
            }
        },
        52931: function(e, t, a) {
            "use strict";
            a.d(t, {
                s: function() {
                    return PostComposerModal
                }
            });
            var s, n, l = a(16356),
                r = a(97352),
                i = a(44361);
            a(96960);
            var o = a(76501),
                d = a(42489),
                c = a(69598),
                u = a(54668),
                m = a(22181),
                p = a(3928),
                x = a(42529),
                h = a(80498);

            function PostComposerModal(e) {
                let {
                    channelId: t,
                    selectedResource: a,
                    sourceLocation: s,
                    channelSelectorDisabled: n
                } = e, {
                    closeModal: f
                } = (0, m.useModal)(), [v, g] = (0, r.useState)(0), [b, y] = (0, r.useState)(h.Z.RELEASE), [C, S] = (0, r.useState)(a), [j, w] = (0, r.useState)(a), {
                    data: T,
                    isLoading: N
                } = (0, p.aM2)(p.wHV, {
                    variables: !!t && {
                        channelId: t
                    },
                    enabled: !!t,
                    staleTime: 1 / 0
                }), I = (0, p.S3c)(p.bBJ, null == T ? void 0 : T.data.channelById), P = (0, d.G)(), R = (0, r.useMemo)(() => 0 === v ? "Create Post" : "Select sound or playlist", [v]), E = (0, x.R)(() => {
                    if (1 === v) {
                        g(0);
                        return
                    }
                    f()
                });
                return (0, l.jsx)(u.Z, {
                    preventClose: !0,
                    closeModal: E,
                    size: "medium",
                    bodyClassName: "px-0",
                    containerClassName: (0, i.m)("pb-0", 1 === v ? "max-h-[600px]" : "h-fit"),
                    overlayClassName: "min-h-[-webkit-fill-available]",
                    callToAction: 1 === v ? (0, l.jsxs)("div", {
                        className: "relative z-above1 flex w-full gap-3 pb-3 ",
                        children: [(0, l.jsx)(c.z, {
                            variant: "secondary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Back",
                            onClick: () => {
                                N || g(0)
                            }
                        }), (0, l.jsx)(c.z, {
                            variant: "primary",
                            fullWidth: !0,
                            className: "flex-1",
                            label: "Select",
                            disabled: !j,
                            onClick: () => {
                                N || (S(j), g(0))
                            }
                        })]
                    }) : void 0,
                    bodyWithoutPadding: !0,
                    bodyWithoutPaddingBottom: !0,
                    title: R,
                    body: (0, l.jsxs)("div", {
                        className: "relative flex-1 overflow-x-hidden",
                        children: [(0, l.jsx)("div", {
                            className: (0, i.m)("h-full flex-col gap-6 px-4 pb-4 transition-transform duration-200 ease-out lt:px-6 lt:pb-6", P, 0 === v ? "flex" : "hidden"),
                            children: N ? (0, l.jsx)("div", {
                                className: "h-28 w-full animate-pulse rounded-xl bg-base200"
                            }) : (0, l.jsx)(o.R, {
                                sourceLocation: s,
                                channel: I || null,
                                selectedResource: C,
                                setSelectedResource: S,
                                onActionClick: () => {
                                    N || g(1)
                                },
                                variant: "modal",
                                showChannelSelector: !0,
                                channelSelectorDisabled: n
                            })
                        }), (0, l.jsx)("div", {
                            className: 1 === v ? "flex" : "hidden",
                            children: (0, l.jsx)(h.p, {
                                selectedResource: j,
                                setSelectedResource: w,
                                selectedTab: b,
                                setTab: y,
                                step: v
                            })
                        })]
                    })
                })
            }(s = n || (n = {}))[s.Main = 0] = "Main", s[s.ResourceSelect = 1] = "ResourceSelect"
        },
        35143: function(e, t, a) {
            "use strict";
            a.d(t, {
                I: function() {
                    return SelectSlot
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(44361),
                i = a(7816),
                o = a(53718),
                d = a(58983),
                c = a(13286),
                u = a(3928),
                m = a(12879),
                p = a(37464),
                x = a(42529),
                h = a(81688),
                f = a(267),
                v = a(8776),
                g = a(35341),
                b = a(64571),
                y = a(28166),
                C = a(8205);

            function SelectSlot(e) {
                var t;
                let {
                    claimedSlots: a,
                    totalSlots: S,
                    selectedSlot: j,
                    onSlotClicked: w,
                    canOverwrite: T,
                    trackId: N,
                    selectedNft: I,
                    disableSlotSelection: P,
                    loading: R
                } = e, E = (0, n.useRef)(null), [A, {
                    width: k
                }] = (0, m.h)(), [M, _] = (0, n.useState)(0), [O, L] = (0, n.useState)(!1), [D, U] = (0, n.useState)({
                    min: 0,
                    max: S - 1
                }), F = k / S, {
                    data: z
                } = (0, u.aM2)(u.IBF, {
                    variables: {
                        id: N
                    },
                    staleTime: 0
                }), {
                    normalizedPeaks: G,
                    duration: B
                } = null !== (t = null == z ? void 0 : z.data.track) && void 0 !== t ? t : {}, {
                    ready: H,
                    playing: W,
                    activeTrackId: $
                } = (0, h.PZ)(), {
                    percentComplete: V
                } = (0, g.E)(), Z = N === $, [Q, Y] = (0, n.useState)(0), [X, K] = (0, n.useState)(0), [q, J] = (0, n.useState)(), ee = (0, p.I)(q), et = (0, p.I)(W), ea = Math.max(F - d.KV, 1), es = (0, n.useMemo)(() => {
                    let e = new Set;
                    for (let t of a) e.add(t);
                    return e
                }, [a]), en = (0, n.useMemo)(() => {
                    let e = new Set;
                    if (0 === Q || P) return e;
                    let t = Math.floor(Q / F);
                    return e.add(t), e
                }, [P, Q, F]), el = (0, n.useMemo)(() => {
                    let e = new Set;
                    if (0 === X || R);
                    else {
                        let t = Math.floor(X / F),
                            s = (null == I ? void 0 : I.songSlot) === t;
                        (T || s || !a.includes(t)) && e.add(t)
                    }
                    return e
                }, [T, a, X, null == I ? void 0 : I.songSlot, F, R]), er = (0, n.useMemo)(() => {
                    if (!G) return [];
                    let e = Math.floor(k / (ea + d.KV));
                    return (0, c.Z)(G, e)
                }, [G, k, ea]), ei = (0, x.R)(() => {
                    Y(0)
                }), eo = (0, n.useCallback)(e => {
                    requestAnimationFrame(() => {
                        E.current && Y(e.clientX - E.current.getBoundingClientRect().left)
                    })
                }, [E]), ed = (0, x.R)(async e => {
                    if (!E.current || P) return;
                    let t = Math.floor(e / F);
                    Z || await (0, h.Db)({
                        trackId: N
                    }), await (0, f.jA)(1);
                    let a = 0 === t ? 0 : t,
                        s = a / S,
                        n = Math.min((a + 1) / S, d.fy);
                    J({
                        startPerc: s,
                        endPerc: n
                    }), K(e), w(t), B && _(t / S * B)
                }), ec = (0, x.R)(() => {
                    let e = null == I ? void 0 : I.songSlot;
                    if ("number" != typeof e || !E.current) return;
                    let t = (e + .5) * F;
                    if (K(t), w(e), B) {
                        let t = e / S * B;
                        _(t)
                    }
                }), onSelectorClick = async e => {
                    if (!E.current || P) return;
                    let t = e.clientX - E.current.getBoundingClientRect().left;
                    await ed(t)
                }, eu = (0, n.useCallback)(async e => {
                    await ed(e)
                }, [ed]), em = (0, x.R)(() => {
                    let e = Array.from({
                            length: S
                        }, (e, t) => t).filter(e => !a.includes(e)),
                        [t, ...s] = e,
                        n = s.pop();
                    if (void 0 !== t && void 0 !== n && t >= 0 && k > 0) {
                        if (U({
                                min: t,
                                max: n
                            }), w(t), B) {
                            let e = t / S * B;
                            _(e), L(!0)
                        }
                        let e = (t + .5) * F;
                        K(e)
                    }
                });
                (0, n.useEffect)(() => {
                    null !== j && a.length <= 0 && k > 0 || O || em()
                }, [a, k, j, O, em]), (0, n.useEffect)(() => {
                    E.current && function(e) {
                        let {
                            canvasRef: t,
                            normalizedPeaks: a,
                            maxBarHeight: s,
                            barWidth: n,
                            barMargin: l,
                            claimedBars: r,
                            hoveredBars: i,
                            clickedBars: o,
                            canOverwrite: d
                        } = e, c = t.current, u = null == c ? void 0 : c.getContext("2d");
                        c && u && (u.fillStyle = "#F3F4F6", u.clearRect(0, 0, c.width, c.height), u.beginPath(), a.forEach((e, t) => {
                            let a = function(e) {
                                let {
                                    index: t,
                                    barWidth: a,
                                    minBarHeight: s = 24,
                                    maxBarHeight: n,
                                    barMargin: l,
                                    amplitude: r,
                                    containerHeight: i
                                } = e, o = Math.round(r / 100 * n) + s;
                                return {
                                    x: t * (a + l),
                                    y: Math.round((i - o) / 2) + i / 2,
                                    w: a,
                                    h: o
                                }
                            }({
                                index: t,
                                barWidth: n,
                                barMargin: l,
                                maxBarHeight: s,
                                amplitude: e,
                                containerHeight: c.height
                            });
                            (function(e) {
                                let {
                                    ctx: t,
                                    x: a,
                                    y: s,
                                    w: n,
                                    h: l
                                } = e, {
                                    r
                                } = e;
                                n < 2 * r && (r = n / 2), l < 2 * r && (r = l / 2), t.beginPath(), t.moveTo(a + r, s), t.arcTo(a + n, s, a + n, s + l, r), t.arcTo(a + n, s + l, a, s + l, r), t.arcTo(a, s + l, a, s, r), t.arcTo(a, s, a + n, s, r), t.closePath()
                            })({
                                ctx: u,
                                x: a.x,
                                y: a.y,
                                w: a.w,
                                h: a.h / 2,
                                r: 5
                            });
                            let m = r.has(t),
                                p = i.has(t),
                                x = o.has(t);
                            (function(e) {
                                let {
                                    ctx: t,
                                    isClaimed: a,
                                    isHovered: s,
                                    isClicked: n,
                                    canOverwrite: l
                                } = e;
                                l ? n ? t.fillStyle = C.rS.colors.accent700.value : s ? t.fillStyle = C.rS.colors.brand100.value : a ? t.fillStyle = C.rS.colors.neutral400.value : t.fillStyle = C.rS.colors.neutral300.value : n ? t.fillStyle = C.rS.colors.accent700.value : a ? t.fillStyle = C.rS.colors.neutral900.value : s ? t.fillStyle = C.rS.colors.neutral400.value : t.fillStyle = C.rS.colors.neutral300.value, t.fill()
                            })({
                                ctx: u,
                                barWidth: n,
                                maxBarHeight: s,
                                isClaimed: m,
                                isHovered: p,
                                isClicked: x,
                                canOverwrite: d
                            })
                        }), u.closePath())
                    }({
                        canvasRef: E,
                        normalizedPeaks: er,
                        maxBarHeight: 36,
                        barWidth: ea,
                        barMargin: d.KV,
                        claimedBars: es,
                        hoveredBars: en,
                        clickedBars: el,
                        canOverwrite: T
                    })
                }, [er, es, el, en, ea, E, T]), (0, n.useEffect)(() => {
                    if (Z && q && H && B) {
                        let {
                            startPerc: e
                        } = q;
                        (0, h.O7)(e * B), et.current || (0, f.hY)()
                    }
                }, [Z, H, q, B, et]), (0, n.useEffect)(() => {
                    var e;
                    let {
                        endPerc: t
                    } = null !== (e = ee.current) && void 0 !== e ? e : {}, a = V / 100;
                    t && a >= t && $ && (a >= d.fy ? (0, f.wO)() : ((0, f.U6)(2.5), J(void 0)))
                }, [V, $, ee]), (0, n.useEffect)(() => ((0, f.wO)(), (0, v.ZX)(!0), () => {
                    (0, f.wO)(), (0, v.ZX)(!1)
                }), []), (0, n.useEffect)(() => {
                    if (B) {
                        let e = "number" == typeof(null == I ? void 0 : I.songSlot);
                        e ? ec() : em()
                    }
                }, [ec, null == I ? void 0 : I.songSlot, em, B]);
                let ep = null === j || j <= D.min || P,
                    ex = null === j || j >= D.max || P;
                return (0, s.jsxs)("div", {
                    className: "grid w-full gap-3",
                    children: [(0, s.jsx)("div", {
                        className: "w-full text-base-l font-semibold text-base800",
                        children: "Timestamp"
                    }), (0, s.jsxs)("div", {
                        className: "flex min-w-0 items-center",
                        children: [!T && (0, s.jsxs)("div", {
                            className: "flex items-center justify-between rounded-bl-full rounded-tl-full bg-base100 px-3 py-2",
                            children: [(0, s.jsx)("button", {
                                className: "-m-2 p-2 font-normal text-base900 disabled:text-base400",
                                onClick: () => {
                                    if (P) return;
                                    let e = null !== j && j - 1 >= 0 && B;
                                    if (e) {
                                        let e = getNextStep(j, -1, S, a),
                                            t = (e + .5) * F;
                                        eu(t)
                                    }
                                },
                                disabled: ep,
                                children: (0, s.jsx)(l.G, {
                                    icon: i.ac,
                                    fontSize: 14
                                })
                            }), (0, s.jsx)("span", {
                                className: (0, r.m)("mx-2 w-[50px] select-none text-center text-title-m font-medium text-base800", R && "animate-pulse"),
                                children: R ? "" : (0, b.Gg)(M)
                            }), (0, s.jsx)("button", {
                                className: "-m-2 p-2 font-normal text-base900 disabled:text-base400",
                                onClick: () => {
                                    if (P) return;
                                    let e = null !== j && j + 1 < S && B;
                                    if (e) {
                                        let e = getNextStep(j, 1, S, a),
                                            t = (e + .5) * F;
                                        eu(t)
                                    }
                                },
                                disabled: ex,
                                children: (0, s.jsx)(l.G, {
                                    icon: o.eF,
                                    fontSize: 14
                                })
                            })]
                        }), (0, s.jsx)("div", {
                            className: "w-[1px] self-stretch bg-[#D9D9D9]"
                        }), (0, s.jsx)("div", {
                            className: "flex h-[36px] w-full items-center overflow-hidden rounded-br-full rounded-tr-full bg-base100",
                            ref: A,
                            children: (0, s.jsx)("canvas", {
                                "data-testid": y.n.SET_TIMESLOT_MODAL_WAVEFORM,
                                style: {
                                    height: 36,
                                    display: "block",
                                    cursor: "pointer",
                                    WebkitTapHighlightColor: "transparent"
                                },
                                ref: E,
                                height: 36,
                                width: k,
                                onBlur: ei,
                                onMouseOut: ei,
                                onMouseMove: eo,
                                onClick: onSelectorClick
                            })
                        })]
                    })]
                })
            }

            function getNextStep(e, t, a, s) {
                let n = e + t;
                for (; s.includes(n) && n >= 0 && n < a;) n += t;
                return n
            }
        },
        99507: function(e, t, a) {
            "use strict";
            a.d(t, {
                R: function() {
                    return ShareToSocialModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(73089),
                r = a(96301),
                i = a(42940);

            function GetNotifiedTogglePanel(e) {
                let {
                    artistId: t,
                    userId: a,
                    subscribeToggled: n,
                    toggleSubscribe: o
                } = e, {
                    authUser: d
                } = (0, r.aC)(), c = (null == d ? void 0 : d.id) === a, {
                    isSubscribedToArtist: u,
                    isEmailSet: m,
                    loading: p
                } = (0, i.w)({
                    artistId: t,
                    userId: a
                });
                return c || u && m || p ? null : (0, s.jsxs)("div", {
                    className: "w-full",
                    children: [(0, s.jsx)("div", {
                        className: "border-b border-solid border-base200"
                    }), (0, s.jsxs)("div", {
                        className: "flex items-center justify-between pt-4",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, s.jsx)("p", {
                                className: "mb-1 text-base-l font-semibold text-base800",
                                children: "Subscribe to artist"
                            }), (0, s.jsx)("p", {
                                className: "text-base-m text-base600",
                                children: "Receive notification on new drops"
                            })]
                        }), (0, s.jsx)(l.Z, {
                            onCheckedChange: () => {
                                o(e => !e)
                            },
                            checked: n
                        })]
                    })]
                })
            }
            var o = a(31981),
                d = a(66778),
                c = a(89222),
                u = a(68753),
                m = a(43607),
                p = a(69598),
                x = a(85906),
                h = a(54668),
                f = a(49476),
                v = a(98335),
                g = a(43158),
                b = a(22181),
                y = a(3928),
                C = a(99398),
                S = a(42529),
                j = a(10306),
                w = a(20209);

            function ShareToSocialModal(e) {
                var t, a, l;
                let [r, i] = n.useState(!0), {
                    closeModal: c
                } = (0, b.useModal)(), u = "postId" in e, f = "releaseId" in e, {
                    data: v,
                    isLoading: g
                } = (0, y.aM2)(y.Fg4, {
                    variables: u && {
                        postId: e.postId
                    },
                    enabled: u,
                    staleTime: 1 / 0
                }), T = (null == v ? void 0 : null === (t = v.data.post) || void 0 === t ? void 0 : t.__typename) === "ReleasePost" ? v.data.post : null, {
                    data: N,
                    isLoading: I
                } = (0, y.aM2)(y.Izw, {
                    variables: f && {
                        releaseId: e.releaseId
                    },
                    enabled: f,
                    staleTime: 1 / 0
                }), P = null == N ? void 0 : N.data.release, R = (null == T ? void 0 : null === (a = T.optionalRelease) || void 0 === a ? void 0 : a.artist.id) || (null == P ? void 0 : P.artist.id), E = (null == T ? void 0 : null === (l = T.optionalRelease) || void 0 === l ? void 0 : l.artist.user.id) || (null == P ? void 0 : P.artist.user.id), {
                    isShareReferrable: A
                } = (0, C.$)({
                    release: P
                }), {
                    urlWithReferral: k
                } = (0, j._)({
                    url: (null == P ? void 0 : P.webappUri) || null,
                    source: {
                        link: !0
                    },
                    isReferrable: A
                }), M = (0, S.R)(() => {
                    if (u && f) return;
                    let t = "";
                    if (T && u) {
                        var a;
                        t = (0, w.j)({
                            webappUri: T.webappUri,
                            artistTwitterHandle: null === (a = T.optionalRelease) || void 0 === a ? void 0 : a.artist.user.twitterHandle
                        })
                    }
                    P && f && (t = (0, w.IQ)({
                        artistName: P.artist.name,
                        artistSoundHandle: P.artist.soundHandle,
                        artistTwitterHandle: P.artist.user.twitterHandle,
                        nftSerialNumber: e.nftSerialNumber,
                        releaseTitle: P.title,
                        releaseWebappUri: k || P.webappUri
                    })), window.open(t, "_newtab")
                }), _ = (0, S.R)(async () => {
                    c()
                }), O = g || I;
                return (0, s.jsx)(h.Z, {
                    title: "You're all set!",
                    body: O ? (0, s.jsx)(m.$, {}) : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-4 rounded-xl bg-base200 p-4",
                            children: [!!T && (0, s.jsx)(d.Y, {
                                post: T,
                                variant: "feed",
                                repostSource: null,
                                hideDropdown: !0,
                                previewCommentFrag: null,
                                commentButtonAction: o.id.FocusInput,
                                hideActions: !0,
                                showCommentInput: !0
                            }), !!P && f && (0, s.jsx)(FakePostItem, {
                                release: P,
                                tierNumber: e.tierNumber
                            })]
                        }), R && E && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(x.i, {}), (0, s.jsx)(GetNotifiedTogglePanel, {
                                artistId: R,
                                userId: E,
                                subscribeToggled: r,
                                toggleSubscribe: i
                            })]
                        })]
                    }),
                    bodyWithoutPaddingBottom: !0,
                    showFooterShadow: !1,
                    showHeaderShadow: !1,
                    preventClose: !0,
                    size: "medium",
                    callToAction: (0, s.jsxs)("div", {
                        className: "flex gap-3",
                        children: [(0, s.jsx)(DoneButton, {
                            onClick: _,
                            artistId: R,
                            artistUserId: E,
                            subscribeToggled: r
                        }), (0, s.jsx)(p.z, {
                            variant: "primary",
                            size: "S",
                            fullWidth: !0,
                            label: "Share on Twitter",
                            onClick: M,
                            loading: O
                        })]
                    })
                })
            }

            function FakePostItem(e) {
                var t;
                let {
                    release: a,
                    tierNumber: n
                } = e, {
                    authUser: l
                } = (0, r.aC)(), {
                    tablet: i
                } = (0, g.useMediaQuery)();
                if (l) return (0, s.jsx)("div", {
                    className: "cursor-pointer rounded-lg",
                    children: (0, s.jsxs)("div", {
                        className: "flex flex-row",
                        children: [(0, s.jsx)("div", {
                            className: "pr-3 md:pr-4",
                            children: (0, s.jsx)("div", {
                                className: "relative mr-1 flex items-center justify-center self-start md:mr-0",
                                children: (0, s.jsx)(u.q, {
                                    src: null === (t = l.avatar) || void 0 === t ? void 0 : t.url,
                                    username: l.username,
                                    size: i ? 48 : 40,
                                    borderRadius: 999,
                                    walletAddress: l.publicAddress,
                                    webappUri: l.webappUri
                                })
                            })
                        }), (0, s.jsxs)("div", {
                            className: "w-full min-w-0",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-00auto items-start gap-2 pb-1.5 md:gap-4",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-0.5 md:flex-row md:items-center",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, s.jsx)("div", {
                                            className: "font-base text-base-m font-semibold text-base800 md:text-base-l",
                                            children: l.username
                                        }), !!l.artist && (0, s.jsx)(v.O, {
                                            portal: !0
                                        }), null != n && (0, s.jsx)(f.t, {
                                            type: 0 === n ? "ga" : "vip",
                                            portal: !0
                                        })]
                                    }), (0, s.jsx)("div", {
                                        className: "flex items-center self-start font-base text-base-m font-normal text-base500 md:ml-1 md:text-base-l lg:h-6",
                                        children: (0, s.jsx)("p", {
                                            children: "collected"
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex-1"
                                })]
                            }), (0, s.jsx)("div", {
                                className: "flex flex-col gap-4",
                                children: (0, s.jsx)(c.a, {
                                    mintReferral: null,
                                    collectButtonSource: "Feed Post Sound Bar",
                                    releaseFrag: a,
                                    source: "Feed Release Post",
                                    customSubTitle: null,
                                    variant: "post"
                                })
                            })]
                        })]
                    })
                })
            }

            function DoneButton(e) {
                let {
                    artistId: t,
                    artistUserId: a,
                    onClick: n,
                    subscribeToggled: l
                } = e, {
                    loading: r,
                    needsVerification: o,
                    isSubscribedToArtist: d,
                    handleSubscribe: c,
                    handleEmailVerification: u
                } = (0, i.w)({
                    artistId: t,
                    userId: a
                });
                return (0, s.jsx)(p.z, {
                    variant: "secondary",
                    size: "S",
                    label: "Done",
                    onClick: () => {
                        n(), l && (o && u(), d || c())
                    },
                    disabled: r
                })
            }
        },
        88258: function(e, t, a) {
            "use strict";
            a.d(t, {
                I: function() {
                    return s
                }
            });
            let s = "This timestamp has already been selected."
        },
        99795: function(e, t, a) {
            "use strict";
            a.d(t, {
                k: function() {
                    return PostAfterCollectModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(47226),
                r = a(15429),
                i = a(70069),
                o = a(12849),
                d = a(68753),
                c = a(69598),
                u = a(54668),
                m = a(96301),
                p = a(43158),
                x = a(22181),
                h = a(96351),
                f = a(75747),
                v = a(30203);
            a(96960);
            var g = a(58658),
                b = a(99507),
                y = a(21956),
                C = a(36750),
                S = a(3928),
                j = a(64398),
                w = a(73335),
                T = a(14042),
                N = a(42529);
            let I = g.Lj.MINTING;
            (0, C.c)({
                trigger: [S.HLY],
                refetch: [S.pVX, S.M81, S.lMr]
            });
            var P = a(83666),
                R = a(58038),
                E = a(85846),
                A = a(35143),
                k = a(88258);

            function PostAfterCollectModal(e) {
                var t;
                let {
                    releaseId: a,
                    usePurchasedNftInfo: C,
                    editNftId: M
                } = e, {
                    authUser: _
                } = (0, m.aC)(), {
                    tablet: O
                } = p.MediaQuery.useContainer(), {
                    openToast: L
                } = f.ToastContext.useContainer(), {
                    openModal: D
                } = x.ModalContext.useContainer(), {
                    purchasedNftInfo: U
                } = v.Transaction.useContainer(), {
                    selectedNft: F,
                    isLoading: z
                } = (0, P.d)({
                    releaseId: a,
                    ...C ? {
                        preselectedNftId: null == U ? void 0 : U.nftId
                    } : {},
                    ...M ? {
                        preselectedNftId: M
                    } : {}
                }), {
                    claimedSongSlots: G,
                    canOverwriteSlot: B,
                    songSlot: H,
                    setSongSlot: W,
                    isLoading: $
                } = (0, R.i)({
                    releaseId: a,
                    selectedNft: F
                }), {
                    isLoading: V,
                    lexicalState: Z,
                    setLexicalState: Q,
                    publishComment: Y,
                    isPublishing: X
                } = function(e) {
                    let {
                        releaseId: t,
                        songSlot: a
                    } = e, {
                        openModal: l
                    } = x.ModalContext.useContainer(), {
                        openToast: r,
                        closeToast: i
                    } = f.ToastContext.useContainer(), {
                        isAuthenticating: o
                    } = (0, y.F_)(), d = (0, j.S)(), c = (0, w.f)(), {
                        nftOwnedByUser: u
                    } = (0, T.w)({
                        releaseId: t
                    }), [m, p] = (0, n.useState)(!1), {
                        mutateAsync: h,
                        isLoading: v
                    } = (0, S.Dbo)(S.HLY, {}), [C, P] = (0, n.useState)(), R = null == u ? void 0 : u.id, E = (0, N.R)(async () => {
                        if (R) {
                            if (null == a) {
                                r({
                                    text: "Please select a spot on the song to pin your post",
                                    variant: "error"
                                });
                                return
                            }
                            try {
                                var e;
                                p(!0);
                                let n = await h({
                                    input: {
                                        releaseId: t,
                                        songSlot: a,
                                        lexicalContent: null == C ? void 0 : C.toJSON()
                                    }
                                });
                                (null === (e = n.data) || void 0 === e ? void 0 : e.createReleasePostOnWaveform.__typename) === "MutationCreateReleasePostOnWaveformSuccess" ? (l(x.ModalType.SHARE_TO_SOCIAL, {
                                    body: (0, s.jsx)(b.R, {
                                        postId: n.data.createReleasePostOnWaveform.data.postId
                                    })
                                }), c({
                                    action: g.nc.COMMENT_SET,
                                    message: `User set comment on NFT ${R}`,
                                    pillar: I,
                                    isArtistOnlyPage: !1,
                                    data: {
                                        nftId: R,
                                        lexicalContent: null == C ? void 0 : C.toJSON(),
                                        releaseId: t
                                    }
                                })) : r({
                                    text: "Something went wrong. Please try again",
                                    variant: "error"
                                }), i()
                            } catch (e) {
                                i(), d({
                                    action: g.XW.SET_COMMENT_ERROR,
                                    error: e,
                                    errorType: g.QS.UNKNOWN,
                                    message: "Error posting comment",
                                    level: "fatal",
                                    pillar: I,
                                    toast: "Encountered an error. Please try again.",
                                    isArtistOnlyPage: !1,
                                    indexedTags: {
                                        releaseId: t,
                                        nftId: R
                                    },
                                    unindexedExtra: {
                                        lexicalContent: null == C ? void 0 : C.toJSON()
                                    }
                                })
                            }
                        }
                    });
                    return {
                        publishComment: E,
                        isLoading: v || o || m,
                        lexicalState: C,
                        setLexicalState: P,
                        isPublishing: m
                    }
                }({
                    releaseId: a,
                    songSlot: H
                }), K = ("number" == typeof(null == F ? void 0 : F.songSlot) || X) && !B, q = (0, n.useCallback)(e => (null == F ? void 0 : F.songSlot) !== e && (null == G ? void 0 : G.includes(e)) && !B ? (W(null), L({
                    text: k.I,
                    variant: "error"
                })) : W(e), [B, G, L, null == F ? void 0 : F.songSlot, W]), J = (0, N.R)(() => {
                    null != F && D(h.w.SHARE_TO_SOCIAL, {
                        body: (0, s.jsx)(b.R, {
                            releaseId: a,
                            nftSerialNumber: F.serialNumber,
                            tierNumber: F.tierNumber
                        })
                    })
                }), ee = (0, n.useMemo)(() => (0, r.se)(o.Z.generateTextForNode(o.Z.getRootNode(Z))).length || 0, [Z]), et = !F, ea = ee > E.HJ, es = null == F ? void 0 : F.release.track.id;
                if (!G || !es || !_) return null;
                let en = (0, s.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, s.jsx)("div", {
                        className: "relative w-full",
                        children: (0, s.jsxs)("div", {
                            className: "flex w-full items-center gap-2 py-2 md:py-3",
                            children: [(0, s.jsx)("div", {
                                className: "h-10 w-10 flex-shrink-0 self-start rounded-full",
                                children: (0, s.jsx)(d.q, {
                                    walletAddress: _.publicAddress,
                                    username: _.username,
                                    webappUri: _.webappUri,
                                    size: 40,
                                    src: null === (t = _.avatar) || void 0 === t ? void 0 : t.url,
                                    borderRadius: "50%",
                                    disableLink: !0
                                })
                            }), (0, s.jsx)(i.A, {
                                initialMentionData: void 0,
                                id: void 0,
                                className: "h-[40vh] w-full rounded-none bg-white outline-white focus-within:outline focus-within:outline-2 md:h-80",
                                placeholder: "What do you love about this song?",
                                disabled: !1,
                                onChange: Q,
                                characterCount: {
                                    maxLength: E.HJ,
                                    show: !0
                                },
                                menuAnchorClassName: "z-modalDropdown",
                                autoFocus: !1
                            })]
                        })
                    }), (0, s.jsx)(A.I, {
                        onSlotClicked: q,
                        claimedSlots: G,
                        totalSlots: l.ug,
                        selectedSlot: H,
                        trackId: es,
                        canOverwrite: B,
                        selectedNft: F,
                        disableSlotSelection: K,
                        loading: $ || z
                    })]
                });
                return (0, s.jsx)(u.Z, {
                    title: "Pin a post to the waveform",
                    body: en,
                    bodyClassName: "overflow-y-auto",
                    bodyWithoutPaddingBottom: !0,
                    showHeaderShadow: !1,
                    size: "medium",
                    isFullScreen: !O,
                    preventClose: !0,
                    callToAction: (0, s.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, s.jsx)(c.z, {
                            label: "Skip",
                            variant: "secondary",
                            onClick: J,
                            disabled: V,
                            size: "S"
                        }), (0, s.jsx)(c.z, {
                            label: X ? "Posting..." : "Post",
                            variant: "primary",
                            onClick: Y,
                            disabled: !(ee > 0 && !ea && !et),
                            loading: V,
                            size: "S"
                        })]
                    })
                })
            }
        },
        30655: function(e, t, a) {
            "use strict";
            a.d(t, {
                j: function() {
                    return ProcessingModal
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(98910),
                l = a(97946),
                r = a(54668),
                i = a(64571);
            let ProcessingModal = e => {
                let {
                    heading: t,
                    transactionInfo: a
                } = e, o = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("div", {
                        className: "mb-2 flex w-full justify-center",
                        children: (0, s.jsx)(n.j, {
                            height: void 0
                        })
                    }), (0, s.jsx)("span", {
                        className: "mt-2 flex w-full justify-center font-base text-base-l font-semibold md:mt-4 md:text-base-xl",
                        children: "Processing..."
                    }), (0, s.jsx)("div", {
                        className: "mt-2 text-center text-[14px] md:mt-4 md:text-[16px]",
                        children: (0, s.jsxs)("div", {
                            className: "font-normal leading-5 text-neutral700",
                            children: [t, a && (0, s.jsxs)("div", {
                                children: ["View on", " ", (0, s.jsx)(l.s, {
                                    absoluteUri: (0, i.mt)({
                                        transactionHash: a.txHash,
                                        chainId: a.chainId
                                    }),
                                    type: "external",
                                    className: "font-medium",
                                    children: "Etherscan"
                                })]
                            })]
                        })
                    })]
                });
                return (0, s.jsx)(r.Z, {
                    body: o,
                    preventClose: !0
                })
            }
        },
        82110: function(e, t, a) {
            "use strict";
            a.d(t, {
                u: function() {
                    return ReplyPostContent
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(44361),
                l = a(11021),
                r = a(42489),
                i = a(68753),
                o = a(98335);

            function ReplyPostContent(e) {
                var t;
                let {
                    isLoading: a,
                    postCreator: d,
                    postContent: c,
                    onSubmit: u,
                    isSubmitting: m,
                    autoFocus: p
                } = e, x = (0, r.G)();
                return (0, s.jsxs)("div", {
                    className: (0, n.m)("relative flex h-full flex-col gap-5", x),
                    children: [(0, s.jsxs)("div", {
                        className: "flex h-[12] max-h-[48] w-full gap-3",
                        children: [d && !a ? (0, s.jsx)("div", {
                            className: "h-10 w-10 flex-shrink-0",
                            children: (0, s.jsx)(i.q, {
                                size: 40,
                                walletAddress: d.publicAddress,
                                webappUri: d.webappUri,
                                src: null === (t = d.avatar) || void 0 === t ? void 0 : t.url,
                                username: d.username,
                                borderRadius: 40
                            })
                        }) : (0, s.jsx)("div", {
                            className: "h-10 w-10 animate-pulse rounded-full bg-neutral200"
                        }), (0, s.jsxs)("div", {
                            className: "flex w-full min-w-0 flex-col gap-1.5",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center gap-1",
                                children: d && !a ? (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)("span", {
                                        className: "font-base text-base-m font-semibold text-base900",
                                        children: d.username
                                    }), " ", !!d.artist && (0, s.jsx)(o.O, {
                                        size: 14,
                                        portal: !0,
                                        noTooltip: !0
                                    })]
                                }) : (0, s.jsx)("div", {
                                    className: "h-5 w-48 animate-pulse rounded-sm bg-neutral200"
                                })
                            }), d && !a ? (0, s.jsx)("div", {
                                className: "line-clamp-4",
                                children: c
                            }) : (0, s.jsxs)("div", {
                                className: "flex w-full flex-col gap-2",
                                children: [(0, s.jsx)("div", {
                                    className: "h-[14px] w-full animate-pulse rounded-sm bg-neutral200"
                                }), (0, s.jsx)("div", {
                                    className: "h-[14px] w-full animate-pulse rounded-sm bg-neutral200"
                                })]
                            })]
                        })]
                    }), d && c && !a ? (0, s.jsx)(l.q, {
                        sendButtonLabel: "Reply",
                        initialMentionData: void 0,
                        menuAnchorClassName: "z-modalDropdown",
                        className: "mb-1",
                        loading: m,
                        onSubmit: u,
                        autoFocus: p,
                        characterCount: !1,
                        disabled: !1,
                        id: void 0,
                        placeholder: "Enter some text...",
                        onChange: null
                    }) : (0, s.jsx)("div", {
                        className: "h-10 w-full animate-pulse rounded-sm bg-neutral200"
                    })]
                })
            }
        },
        98830: function(e, t, a) {
            "use strict";
            a.d(t, {
                n: function() {
                    return ReplyPostCommentModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(28839);
            a(96960);
            var r = a(58658),
                i = a(64638),
                o = a(12849),
                d = a(54668),
                c = a(66195),
                u = a(22181),
                m = a(75747),
                p = a(3928),
                x = a(25828),
                h = a(64398),
                f = a(42529),
                v = a(14034),
                g = a(82110);

            function ReplyPostCommentModal(e) {
                var t, a, b, y;
                let {
                    postCommentId: C
                } = e, {
                    openToast: S
                } = (0, m.useToast)(), {
                    closeModal: j
                } = (0, u.useModal)(), w = (0, h.S)(), {
                    mutateAsync: T,
                    isLoading: N
                } = (0, p.Dbo)(p.r58, {
                    retry: 3
                }), {
                    data: I,
                    isLoading: P
                } = (0, p.aM2)(p.HAx, {
                    variables: {
                        postCommentId: C
                    },
                    staleTime: 0
                }), R = null == I ? void 0 : null === (t = I.data.postComment) || void 0 === t ? void 0 : t.author, E = null == I ? void 0 : null === (a = I.data.postComment) || void 0 === a ? void 0 : a.content, A = (0, x.F)(null == I ? void 0 : null === (y = I.data) || void 0 === y ? void 0 : null === (b = y.postComment) || void 0 === b ? void 0 : b.lexicalContent), [k, M] = n.useState(!1), _ = n.useRef(null), O = (0, f.R)(async e => {
                    let t = o.Z.generateTextForState(e);
                    if (t.length) try {
                        (0, v.L9)({
                            event: "Create Post Comment Reply",
                            properties: {
                                associationType: "PostComment",
                                associationId: C,
                                commentId: C,
                                parentCommentId: null
                            }
                        });
                        let {
                            data: {
                                addPostCommentReply: a
                            }
                        } = await T({
                            input: {
                                postCommentId: C,
                                lexicalContent: e.toJSON()
                            }
                        });
                        if ("MutationAddPostCommentReplySuccess" === a.__typename)(0, v.L9)({
                            event: "Create Post Comment Reply Success",
                            properties: {
                                associationType: "PostComment",
                                associationId: C,
                                commentId: a.data.id,
                                parentCommentId: C
                            }
                        }), S({
                            text: "Your reply was added",
                            variant: "success"
                        }), (0, p.SvF)({
                            query: p.wCx,
                            filterQueryKey: (0, c.ag)(C),
                            options: {}
                        }, e => {
                            let t = {
                                data: {
                                    commentReplies: {
                                        edges: [{
                                            node: a.data
                                        }],
                                        pageInfo: {
                                            endCursor: null,
                                            hasNextPage: !0
                                        }
                                    }
                                }
                            };
                            return e ? (0, l.ZP)(e, e => {
                                e.pages.unshift(t)
                            }) : {
                                pageParams: [],
                                pages: [t]
                            }
                        }), j();
                        else {
                            w({
                                action: r.Ry.REPLY_POST_COMMENT_FAILED,
                                error: Error(a.message),
                                errorType: r.QS.UNKNOWN,
                                isArtistOnlyPage: !1,
                                level: "error",
                                message: a.message,
                                pillar: "POSTING",
                                toast: a.message,
                                indexedTags: {
                                    postCommentId: C,
                                    content: t
                                }
                            });
                            return
                        }
                    } catch (e) {
                        w({
                            action: r.Ry.REPLY_POST_COMMENT_FAILED,
                            error: e,
                            errorType: r.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "There was an error replying to a comment",
                            pillar: "POSTING",
                            toast: "There was an error posting your reply. Please try again.",
                            indexedTags: {
                                postCommentId: C,
                                content: t
                            }
                        })
                    }
                });
                return (0, n.useEffect)(() => {
                    _.current && M(_.current.clientHeight < _.current.scrollHeight)
                }, [_]), (0, s.jsx)(d.Z, {
                    ref: _,
                    mobileFullScreen: !0,
                    title: "Post your reply",
                    body: (0, s.jsx)(g.u, {
                        isSubmitting: N,
                        onSubmit: O,
                        isLoading: P,
                        postCreator: R,
                        postContent: A ? (0, s.jsx)(i.X, {
                            showMentionsHoverCard: !1,
                            state: A
                        }) : E,
                        autoFocus: !0
                    }),
                    closeModal: j,
                    bodyClassName: "md:overflow-auto",
                    showHeaderShadow: k,
                    preventClose: N,
                    bodyWithoutPadding: !0
                })
            }
        },
        29356: function(e, t, a) {
            "use strict";
            a.d(t, {
                r: function() {
                    return ReplyCommentWithParentCommentModal
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(28839),
                r = a(44361),
                i = a(58658),
                o = a(11021),
                d = a(42489),
                c = a(12849),
                u = a(54668),
                m = a(66195),
                p = a(22181),
                x = a(75747),
                h = a(3928),
                f = a(64398),
                v = a(42529),
                g = a(14034),
                b = a(69741);

            function ReplyCommentWithParentCommentModal(e) {
                var t, a, y, C;
                let {
                    postCommentId: S,
                    parentPostCommentId: j
                } = e, {
                    openToast: w
                } = (0, x.useToast)(), {
                    closeModal: T
                } = (0, p.useModal)(), N = (0, f.S)(), {
                    mutateAsync: I,
                    isLoading: P
                } = (0, h.Dbo)(h.r58, {
                    retry: 3
                }), {
                    data: R,
                    isLoading: E
                } = (0, h.aM2)(h.HAx, {
                    variables: {
                        postCommentId: j
                    },
                    staleTime: 0
                }), {
                    data: A,
                    isLoading: k
                } = (0, h.aM2)(h.HAx, {
                    variables: {
                        postCommentId: S
                    },
                    staleTime: 0
                }), M = null == A ? void 0 : A.data.postComment, _ = null == R ? void 0 : R.data.postComment, [O, L] = n.useState(!1), D = n.useRef(null), U = (0, v.R)(async e => {
                    let t = c.Z.generateTextForState(e);
                    if (t.length) try {
                        (0, g.L9)({
                            event: "Create Post Comment Reply",
                            properties: {
                                associationType: "PostComment",
                                associationId: S,
                                commentId: S,
                                parentCommentId: j
                            }
                        });
                        let {
                            data: {
                                addPostCommentReply: a
                            }
                        } = await I({
                            input: {
                                postCommentId: j,
                                lexicalContent: e.toJSON()
                            }
                        });
                        if ("MutationAddPostCommentReplySuccess" === a.__typename)(0, g.L9)({
                            event: "Create Post Comment Reply Success",
                            properties: {
                                associationType: "PostComment",
                                associationId: S,
                                commentId: a.data.id,
                                parentCommentId: j
                            }
                        }), w({
                            text: "Your reply was added",
                            variant: "success"
                        }), (0, h.SvF)({
                            query: h.wCx,
                            filterQueryKey: (0, m.ag)(S),
                            options: {}
                        }, e => {
                            let t = {
                                data: {
                                    commentReplies: {
                                        edges: [{
                                            node: a.data
                                        }],
                                        pageInfo: {
                                            endCursor: null,
                                            hasNextPage: !0
                                        }
                                    }
                                }
                            };
                            return e ? (0, l.ZP)(e, e => {
                                e.pages.unshift(t)
                            }) : {
                                pageParams: [],
                                pages: [t]
                            }
                        }), T();
                        else {
                            N({
                                action: i.Ry.REPLY_POST_COMMENT_FAILED,
                                error: Error(a.message),
                                errorType: i.QS.UNKNOWN,
                                isArtistOnlyPage: !1,
                                level: "error",
                                message: a.message,
                                pillar: "POSTING",
                                toast: a.message,
                                indexedTags: {
                                    postCommentId: S,
                                    content: t
                                }
                            });
                            return
                        }
                    } catch (e) {
                        N({
                            action: i.Ry.REPLY_POST_COMMENT_FAILED,
                            error: e,
                            errorType: i.QS.UNKNOWN,
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "There was an error replying to a comment",
                            pillar: "POSTING",
                            toast: "There was an error posting your reply. Please try again.",
                            indexedTags: {
                                postCommentId: S,
                                content: t
                            }
                        })
                    }
                });
                (0, n.useEffect)(() => {
                    D.current && L(D.current.clientHeight < D.current.scrollHeight)
                }, [D]);
                let F = (0, d.G)();
                return (0, s.jsx)(u.Z, {
                    ref: D,
                    mobileFullScreen: !0,
                    title: "Reply",
                    body: (0, s.jsxs)("div", {
                        className: (0, r.m)("flex h-full flex-col gap-5", F),
                        children: [(0, s.jsx)(b.R, {
                            author: null == _ ? void 0 : _.author,
                            content: null == _ ? void 0 : _.content,
                            createdAt: null == _ ? void 0 : _.createdAt,
                            isLoading: E,
                            lexicalContent: null == _ ? void 0 : _.lexicalContent,
                            variant: "default"
                        }), (0, s.jsx)(b.s, {
                            author: null == M ? void 0 : M.author,
                            content: null == M ? void 0 : M.content,
                            createdAt: null == M ? void 0 : M.createdAt,
                            isLoading: k,
                            lexicalContent: null == M ? void 0 : M.lexicalContent
                        }), M ? (0, s.jsx)(o.q, {
                            sendButtonLabel: "Reply",
                            initialMentionData: {
                                displayName: (null === (t = M.author.artist) || void 0 === t ? void 0 : t.name) || M.author.displayName || M.author.publicAddress,
                                artistId: (null === (a = M.author.artist) || void 0 === a ? void 0 : a.id) || null,
                                userId: M.author.id,
                                avatarUrl: (null === (y = M.author.avatar) || void 0 === y ? void 0 : y.url) || null,
                                webappUri: M.author.webappUri,
                                key: `mention-${M.author.id}`
                            },
                            menuAnchorClassName: "z-modalDropdown",
                            className: "mb-1",
                            loading: P,
                            onSubmit: U,
                            characterCount: !1,
                            disabled: !1,
                            id: void 0,
                            placeholder: `Reply to ${null==M?void 0:null===(C=M.author)||void 0===C?void 0:C.username}`,
                            onChange: null,
                            autoFocus: !0
                        }) : (0, s.jsx)("div", {
                            className: "h-10 w-full animate-pulse rounded-sm bg-neutral200"
                        })]
                    }),
                    closeModal: T,
                    bodyClassName: "md:overflow-auto",
                    showHeaderShadow: O,
                    preventClose: P,
                    bodyWithoutPadding: !0
                })
            }
        },
        98886: function(e, t, a) {
            "use strict";
            a.d(t, {
                Q: function() {
                    return EmbedBody
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(505),
                i = a(40651),
                o = a(47226),
                d = a(29009),
                c = a(8205),
                u = a(69598);
            let SquareSelector = e => {
                    let {
                        items: t,
                        onChange: a,
                        size: l = "large",
                        initialSelectedId: r
                    } = e, [i, o] = (0, n.useState)(r);
                    return (0, s.jsx)(m, {
                        children: t.map(e => {
                            let {
                                id: t,
                                background: n
                            } = e;
                            return (0, s.jsx)(x, {
                                isSelected: t === i,
                                children: (0, s.jsx)(p, {
                                    css: {
                                        background: n
                                    },
                                    onClick: () => {
                                        o(t), a(t)
                                    },
                                    size: l
                                })
                            }, t)
                        })
                    })
                },
                m = (0, c.zo)("div", {
                    display: "flex",
                    gap: 4
                }),
                p = (0, c.zo)("button", {
                    border: "1px solid $neutral400",
                    borderRadius: 4,
                    variants: {
                        size: {
                            small: {
                                height: 24,
                                width: 24
                            },
                            large: {
                                height: 40,
                                width: 40
                            }
                        }
                    }
                }),
                x = (0, c.zo)("div", {
                    borderRadius: 5,
                    border: "2px solid transparent",
                    padding: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                        borderColor: "$base300"
                    },
                    variants: {
                        isSelected: {
                            true: {
                                borderColor: "$black",
                                "&:hover": {
                                    borderColor: "$black"
                                }
                            }
                        }
                    }
                });
            var h = a(7847),
                f = a(96301),
                v = a(43158),
                g = a(75747),
                b = a(14034);
            let EmbedBody = e => {
                    let {
                        type: t,
                        releaseId: a,
                        playlistId: c,
                        className: m
                    } = e, {
                        openToast: p
                    } = g.ToastContext.useContainer(), {
                        tablet: x
                    } = v.MediaQuery.useContainer(), {
                        authUserAddress: C = null
                    } = (0, f.aC)(), [S, T] = (0, n.useState)("light"), [N, I] = (0, n.useState)(""), P = (0, n.useRef)(null), R = "drop" === t ? "188px" : "355px", trackEvent = () => "drop" == t ? (0, b.uH)({
                        event: "Copy code for embed",
                        properties: {
                            associationId: a,
                            associationType: "Release",
                            referralAddress: (C || o.L1).toLowerCase()
                        }
                    }) : (0, b.uH)({
                        event: "Copy code for embed",
                        properties: {
                            associationId: c,
                            associationType: "Playlist",
                            referralAddress: (C || o.L1).toLowerCase()
                        }
                    }), E = "drop" === t ? (0, d.VL)({
                        releaseId: a,
                        referral: {
                            referralAddress: C,
                            source: {
                                embed: "sound"
                            }
                        }
                    }) : (0, d.i4)({
                        playlistId: c,
                        theme: S
                    }), A = "drop" === t ? (0, d.yC)({
                        releaseId: a,
                        html: {
                            width: "100%",
                            height: R,
                            style: "border-radius: 8px;"
                        },
                        url: E
                    }) : (0, d.Sj)({
                        playlistId: c,
                        html: {
                            width: "100%",
                            height: R,
                            style: "border-radius: 8px; box-shadow: 0px 6px 16px 1px rgba(0, 0, 0, 0.08);"
                        },
                        theme: S,
                        url: E
                    }), [k, M] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        M(!1)
                    }, [A]), (0, n.useEffect)(() => {
                        let e = P.current;
                        if (!e) return;
                        let t = e.firstChild,
                            loadListener = () => M(!0);
                        return null == t || t.addEventListener("load", loadListener), () => {
                            null == t || t.removeEventListener("load", loadListener)
                        }
                    }, [A]);
                    let onCopyClick = async () => {
                        await trackEvent(), navigator.clipboard.writeText(A).then(() => {
                            p({
                                text: "Copied to clipboard",
                                variant: "success"
                            })
                        }).catch(() => {
                            p({
                                text: "Failed to copy to clipboard",
                                variant: "error"
                            })
                        })
                    };
                    return (0, s.jsxs)("div", {
                        className: m,
                        children: ["playlist" === t && (0, s.jsxs)(y, {
                            children: [(0, s.jsx)("h3", {
                                children: "Theme"
                            }), (0, s.jsx)(SquareSelector, {
                                items: [{
                                    id: "light",
                                    background: "white"
                                }, {
                                    id: "dark",
                                    background: "$base900"
                                }],
                                initialSelectedId: "light",
                                onChange: e => {
                                    ("light" === e || "dark" === e) && T(e)
                                },
                                size: x ? "large" : "small"
                            })]
                        }), !k && (0, s.jsx)(h.KS, {
                            css: {
                                marginBottom: `-${R}`,
                                zIndex: "$above1"
                            },
                            width: "100%",
                            height: R,
                            borderRadius: "8px"
                        }), (0, s.jsx)("div", {
                            className: "m-0 p-0",
                            ref: P,
                            dangerouslySetInnerHTML: {
                                __html: A
                            }
                        }), (0, s.jsx)(r.UQ, {
                            type: "single",
                            defaultValue: "",
                            value: N,
                            onValueChange: I,
                            collapsible: !0,
                            children: (0, s.jsxs)(r.ck, {
                                className: "flex flex-col gap-0",
                                value: "embed",
                                children: [(0, s.jsxs)(w, {
                                    children: [(0, s.jsx)("span", {
                                        className: "text-base-l font-semibold",
                                        children: "Show code"
                                    }), (0, s.jsx)("div", {
                                        className: "item flex h-6 w-6 items-center justify-center",
                                        children: (0, s.jsx)(l.G, {
                                            icon: i.gc,
                                            size: "lg"
                                        })
                                    })]
                                }), (0, s.jsx)(j, {
                                    children: (0, s.jsx)("code", {
                                        children: A
                                    })
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "mt-6 flex justify-end gap-3",
                            children: (0, s.jsx)(u.z, {
                                label: "Copy Code",
                                variant: "primary",
                                onClick: onCopyClick,
                                fullWidth: !0
                            })
                        })]
                    })
                },
                y = (0, c.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 24,
                    h3: {
                        base: "M",
                        "@tablet": {
                            base: "L",
                            fontStyle: "semibold"
                        }
                    }
                }),
                C = (0, c.F4)({
                    "0%": {
                        height: 0
                    },
                    "100%": {
                        height: "var(--radix-accordion-content-height)"
                    }
                }),
                S = (0, c.F4)({
                    "0%": {
                        height: "var(--radix-accordion-content-height)"
                    },
                    "100%": {
                        height: 0
                    }
                }),
                j = (0, c.zo)(r.VY, {
                    wordBreak: "break-all",
                    overflow: "hidden",
                    backgroundColor: "$neutral100",
                    borderRadius: 8,
                    padding: 8,
                    "&[data-state='open']": {
                        animation: `${C} 300ms ease-out`
                    },
                    "&[data-state='closed']": {
                        animation: `${S} 300ms ease-out`
                    }
                }),
                w = (0, c.zo)(r.xz, {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "start",
                    height: "2rem",
                    marginTop: 24,
                    svg: {
                        transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)"
                    },
                    "&[data-state='open']": {
                        svg: {
                            transform: "rotate(180deg)"
                        }
                    }
                })
        },
        32851: function(e, t, a) {
            "use strict";
            a.d(t, {
                u: function() {
                    return ShareModalPlaylist
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(85787),
                r = a(73534),
                i = a(54668),
                o = a(81992),
                d = a(22181),
                c = a(3928),
                u = a(6911),
                m = a(25989),
                p = a(95390),
                x = a(98886),
                h = a(185),
                f = a(86079),
                v = a(20209);

            function ShareModalPlaylist(e) {
                let {
                    playlist: t
                } = e, {
                    closeCancelModal: a
                } = d.ModalContext.useContainer(), g = (0, c.S3c)(c.WX4, t), b = (0, p.fu)(g.webappUri).href, [y, C] = (0, n.useState)("social");
                (0, m.C)({
                    playlistId: g.id
                });
                let {
                    copy: S,
                    isCopied: j
                } = (0, u.F)({
                    text: b,
                    successMessage: "Link copied to clipboard"
                }), w = (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)(l.M, {
                        initial: !1,
                        mode: "popLayout",
                        children: [(0, s.jsx)(o.mQ, {
                            defaultValue: v.EK.social.key,
                            value: y,
                            onValueChange: e => C(e),
                            children: (0, s.jsxs)(o.td, {
                                children: [(0, s.jsx)(o.Ur, {
                                    value: v.EK.social.key,
                                    label: "Social Share",
                                    className: "normal-case"
                                }), (0, s.jsx)(o.Ur, {
                                    value: v.EK.embed.key,
                                    label: "Embed",
                                    className: "normal-case"
                                })]
                            })
                        }), y === v.EK.social.key && (0, s.jsxs)(r.E.div, {
                            initial: {
                                x: "-100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "-100%"
                            },
                            transition: v.SD,
                            className: "flex flex-col gap-6 pt-6",
                            children: [(0, s.jsx)(h.D, {
                                associationType: "Playlist",
                                id: g.id,
                                url: b,
                                messageType: "playlist",
                                referralAddress: null
                            }), (0, s.jsx)(f.N, {
                                url: b,
                                isCopied: j,
                                onCopyClick: S
                            })]
                        }, v.EK.social.key), y === v.EK.embed.key && (0, s.jsx)(r.E.div, {
                            initial: {
                                x: "100%",
                                opacity: 0
                            },
                            animate: {
                                x: 0,
                                opacity: 1
                            },
                            exit: {
                                x: "100%"
                            },
                            transition: v.SD,
                            children: (0, s.jsx)(x.Q, {
                                type: "playlist",
                                playlistId: g.id,
                                className: "mb-0.5 pt-3"
                            })
                        }, v.EK.embed.key)]
                    })
                });
                return (0, s.jsx)(i.Z, {
                    body: w,
                    title: "Share",
                    closeModal: a,
                    bodyClassName: "overflow-x-hidden",
                    bodyWithoutPaddingBottom: !0,
                    mobileFullScreen: !0
                })
            }
        },
        68550: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return ShareModalRelease
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(72102),
                r = a(85787),
                i = a(73534),
                o = a(64832),
                d = a(32881),
                c = a(87515),
                u = a(92747),
                m = a(12957),
                p = a(16773),
                x = a(94864),
                h = a(86057),
                f = a(69598),
                v = a(54668),
                g = a(81992),
                b = a(96301),
                y = a(21956),
                C = a(22181),
                S = a(75747),
                j = a(3928),
                w = a(99398),
                T = a(25989),
                N = a(10306),
                I = a(14034),
                P = a(98886),
                R = a(185),
                E = a(86079),
                A = a(20209);

            function ShareModalRelease(e) {
                let {
                    releaseId: t
                } = e, {
                    data: a
                } = (0, j.aM2)(j.A4k, {
                    variables: {
                        id: t
                    },
                    staleTime: 0
                }), {
                    closeCancelModal: n
                } = C.ModalContext.useContainer(), l = null == a ? void 0 : a.data.release;
                return l ? (0, s.jsx)(ShareModalReleaseInternal, {
                    release: l
                }) : (0, s.jsx)(v.Z, {
                    body: k,
                    title: "Share",
                    closeModal: n,
                    bodyWithoutPaddingBottom: !0,
                    mobileFullScreen: !0,
                    bodyClassName: "pt-4"
                })
            }

            function ShareModalReleaseInternal(e) {
                let {
                    release: t
                } = e, {
                    isAuthenticatedWithAPI: a
                } = (0, b.aC)(), {
                    closeCancelModal: u
                } = C.ModalContext.useContainer(), {
                    openToast: m
                } = S.ToastContext.useContainer(), [p, x] = (0, n.useState)("social"), [h, k] = (0, n.useState)(1), M = (0, j.S3c)(j.B3P, t), {
                    isShareReferrable: _
                } = (0, w.$)({
                    release: M
                }), {
                    urlWithReferral: O,
                    copyUrlWithReferral: L,
                    isCopied: D,
                    referralAddress: U
                } = (0, N._)({
                    url: M.webappUri,
                    source: A.WC,
                    isReferrable: _
                });
                (0, T.C)({
                    releaseId: M.id
                });
                let F = (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6 pt-3",
                        children: [_ && (0, s.jsxs)("div", {
                            className: "flex justify-between rounded-md bg-base50 p-4",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex items-center gap-1 font-title text-title-xs font-medium text-base800",
                                    children: [(0, s.jsx)(l.G, {
                                        icon: o.Jy
                                    }), (0, s.jsx)("span", {
                                        children: "Earn Curator Rewards"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "text-base-s text-base600",
                                    children: ["For each primary sale from your link.", a && (0, s.jsxs)(s.Fragment, {
                                        children: [" ", (0, s.jsx)(d.W, {
                                            textColor: "black"
                                        })]
                                    })]
                                })]
                            }), !a && (0, s.jsx)(f.z, {
                                label: "Sign in",
                                variant: "tertiary",
                                className: "h-9 w-[78px] p-2",
                                onClick: () => {
                                    (0, I.uH)({
                                        event: "Sign in Clicked",
                                        properties: {
                                            sourceComponent: "Share Release Modal"
                                        }
                                    }), u(), (0, y.SR)()
                                }
                            })]
                        }), O && (0, s.jsx)(R.D, {
                            url: O,
                            associationType: "Release",
                            messageType: "drop",
                            referralAddress: U,
                            id: M.id
                        }), O && (0, s.jsx)(E.N, {
                            url: O,
                            isCopied: D,
                            onCopyClick: L
                        })]
                    }),
                    z = (0, s.jsx)(c.T, {
                        releaseId: M.id,
                        onError: () => m({
                            text: "There was an error downloading release screenshot",
                            variant: "error"
                        }),
                        className: "col-span-3 mb-0.5 pt-3",
                        fullWidthButton: !0
                    }),
                    G = (0, s.jsx)(P.Q, {
                        type: "drop",
                        className: "mb-0.5 pt-3",
                        releaseId: M.id
                    }),
                    onTabChange = e => {
                        let t = A.EK[p].position < A.EK[e].position ? 1 : -1;
                        k(t), x(e)
                    },
                    B = (0, s.jsxs)(r.M, {
                        initial: !1,
                        mode: "popLayout",
                        custom: h,
                        children: [(0, s.jsx)(g.mQ, {
                            defaultValue: A.EK.social.key,
                            value: p,
                            onValueChange: e => onTabChange(e),
                            children: (0, s.jsxs)(g.td, {
                                children: [(0, s.jsx)(g.Ur, {
                                    value: A.EK.social.key,
                                    label: "Social Share",
                                    className: "normal-case"
                                }), (0, s.jsx)(g.Ur, {
                                    value: A.EK.image.key,
                                    label: "Share Image",
                                    className: "normal-case"
                                }), (0, s.jsx)(g.Ur, {
                                    value: A.EK.embed.key,
                                    label: "Embed",
                                    className: "normal-case"
                                })]
                            })
                        }), (0, s.jsxs)(i.E.div, {
                            variants: A.lp,
                            initial: "enter",
                            animate: "center",
                            exit: "exit",
                            transition: A.SD,
                            custom: h,
                            children: [p === A.EK.social.key && F, p === A.EK.image.key && z, p === A.EK.embed.key && G]
                        }, p)]
                    });
                return (0, s.jsx)(v.Z, {
                    body: B,
                    title: "Share",
                    closeModal: u,
                    bodyClassName: "pt-4 overflow-x-hidden",
                    mobileFullScreen: !0,
                    bodyWithoutPaddingBottom: !0
                })
            }
            let k = (0, s.jsxs)("div", {
                children: [(0, s.jsx)("div", {
                    className: "h-[33px]"
                }), (0, s.jsxs)("div", {
                    className: "flex animate-pulse flex-col gap-6 pt-3",
                    children: [(0, s.jsx)("div", {
                        className: "h-[70px] w-full rounded-md bg-base50"
                    }), (0, s.jsxs)("div", {
                        className: "mx-auto flex gap-4",
                        children: [(0, s.jsx)(x.u, {}), (0, s.jsx)(h.L, {}), (0, s.jsx)(m.P, {}), (0, s.jsx)(p.h, {})]
                    }), (0, s.jsxs)("div", {
                        className: "mb-0.5 flex h-10 w-full gap-2",
                        children: [(0, s.jsx)(u.II, {
                            disabled: !0,
                            className: "truncate !text-black"
                        }), (0, s.jsx)("div", {
                            className: "w-[78px]",
                            children: (0, s.jsx)(f.z, {
                                variant: "primary",
                                label: "Copy",
                                disabled: !0,
                                className: "h-full w-full min-w-0"
                            })
                        })]
                    })]
                })]
            })
        },
        185: function(e, t, a) {
            "use strict";
            a.d(t, {
                D: function() {
                    return SocialShare
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(47226),
                l = a(12957),
                r = a(16773),
                i = a(94864),
                o = a(86057),
                d = a(97946),
                c = a(25989),
                u = a(14034),
                m = a(64571),
                p = a(20209);
            let SocialShare = e => {
                let {
                    associationType: t,
                    id: a,
                    url: x,
                    referralAddress: h,
                    messageType: f
                } = e, v = (0, m.Pd)({
                    type: f,
                    url: x
                }), onSocialClick = e => {
                    (0, u.uH)({
                        event: "Share Modal Third Party Share",
                        properties: {
                            associationType: t,
                            associationId: a,
                            sourceComponent: "Song Card",
                            thirdParty: e
                        }
                    })
                };
                return (0, c.C)({
                    releaseId: a
                }), (0, s.jsxs)("div", {
                    className: "mx-auto flex gap-4",
                    children: [(0, s.jsx)(d.s, {
                        absoluteUri: (0, m.YJ)({
                            type: f,
                            url: x
                        }),
                        onClick: () => {
                            "Release" === t ? (0, u.uH)({
                                event: "Share to Twitter Clicked",
                                properties: {
                                    associationId: a,
                                    associationType: t,
                                    referralAddress: (null != h ? h : n.L1).toLowerCase(),
                                    sourceComponent: "Social Share"
                                }
                            }) : (0, u.uH)({
                                event: "Share Modal Third Party Share",
                                properties: {
                                    associationType: t,
                                    associationId: a,
                                    sourceComponent: "Song Card",
                                    thirdParty: "Twitter"
                                }
                            })
                        },
                        type: "external",
                        "aria-label": "Share to X (Twitter)",
                        children: (0, s.jsx)(i.u, {
                            className: "cursor-pointer transition-all ease-in-out hover:brightness-[116%]"
                        })
                    }), (0, s.jsx)(d.s, {
                        absoluteUri: `https://warpcast.com/~/compose?text=${v}`,
                        onClick: () => onSocialClick("Warpcast"),
                        type: "external",
                        "aria-label": "Share to Warpcast",
                        children: (0, s.jsx)(o.L, {
                            className: "cursor-pointer transition-all ease-in-out hover:brightness-[116%]"
                        })
                    }), (0, s.jsx)(d.s, {
                        absoluteUri: `https://lenster.xyz/?text=${v}`,
                        onClick: () => onSocialClick("Hey.xyz"),
                        type: "external",
                        "aria-label": "Share to Hey",
                        children: (0, s.jsx)(l.P, {
                            className: "cursor-pointer transition-all ease-in-out hover:brightness-[116%]"
                        })
                    }), (0, s.jsx)(d.s, {
                        absoluteUri: `https://t.me/share/url?url=${x}&text=${"drop"===f?p.UB:p.PC}`,
                        onClick: () => onSocialClick("Telegram"),
                        type: "external",
                        "aria-label": "Share to Telegram",
                        children: (0, s.jsx)(r.h, {
                            className: "cursor-pointer transition-all ease-in-out hover:brightness-[116%]"
                        })
                    })]
                })
            }
        },
        86079: function(e, t, a) {
            "use strict";
            a.d(t, {
                N: function() {
                    return UrlCopy
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(92747),
                l = a(69598);
            let UrlCopy = e => {
                let {
                    url: t,
                    isCopied: a,
                    onCopyClick: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: "mb-0.5 flex h-10 w-full gap-2",
                    children: [(0, s.jsx)(n.II, {
                        disabled: !0,
                        value: t.replace("https://", "").replace("www.", ""),
                        className: "truncate !text-black"
                    }), (0, s.jsx)("div", {
                        className: "w-[78px]",
                        children: (0, s.jsx)(l.z, {
                            variant: "primary",
                            label: a ? "Copied" : "Copy",
                            disabled: a,
                            className: "h-full w-full min-w-0",
                            onClick: r
                        })
                    })]
                })
            }
        },
        20209: function(e, t, a) {
            "use strict";
            a.d(t, {
                An: function() {
                    return d
                },
                EK: function() {
                    return l
                },
                FE: function() {
                    return u
                },
                IQ: function() {
                    return TwitterReleaseShareLink
                },
                PC: function() {
                    return p
                },
                SD: function() {
                    return r
                },
                UB: function() {
                    return m
                },
                WC: function() {
                    return n
                },
                i: function() {
                    return REGULAR_POST_SHARE_TEXT
                },
                iq: function() {
                    return c
                },
                j: function() {
                    return TwitterPostShareLink
                },
                lO: function() {
                    return o
                },
                lp: function() {
                    return x
                },
                pH: function() {
                    return i
                }
            });
            var s = a(96960);
            let n = {
                    link: !0
                },
                l = {
                    social: {
                        key: "social",
                        position: 0
                    },
                    image: {
                        key: "image",
                        position: 1
                    },
                    embed: {
                        key: "embed",
                        position: 2
                    }
                },
                r = {
                    duration: .25,
                    ease: "easeInOut"
                },
                i = "Share & Earn",
                o = "Earn curator rewards for each mint driven through your link",
                d = "5%",
                c = 500;
            (0, s.P)(`
  fragment DynamicFeePercentInfo on Release {
    publicAffiliateFeePercent
    isFirstPhaseCompleted
    samConfig {
      id
      affiliateFeePercent
    }
  }
`);
            let TWITTER_POST_SHARE_TEXT = (e, t) => t ? `👀🎧 Check out this post on @soundxyz_ @${t} ${e}` : `👀🎧 Check out this post on @soundxyz_ ${e}`,
                TWITTER_RELEASE_SHARE_TEXT = e => {
                    let {
                        artistName: t,
                        artistSoundHandle: a,
                        artistTwitterHandle: s,
                        nftSerialNumber: n,
                        releaseTitle: l,
                        releaseWebappUri: r
                    } = e;
                    return `Just became the #${n} backer of ${l} from ${s?"@"+s:t||a||""} on @soundxyz_
${r}`
                },
                u = `👀🎧 Check out this post on Sound.xyz`,
                m = `👀🎧 Check out this drop on Sound.xyz`,
                p = `👀🎧 Check out this playlist on Sound.xyz`,
                REGULAR_POST_SHARE_TEXT = e => `${u} ${e}`;

            function TwitterPostShareLink(e) {
                let {
                    webappUri: t,
                    artistTwitterHandle: a
                } = e;
                return `https://twitter.com/intent/tweet?text=${encodeURIComponent(TWITTER_POST_SHARE_TEXT(t,a))}`
            }

            function TwitterReleaseShareLink(e) {
                return `https://twitter.com/intent/tweet?text=${encodeURIComponent(TWITTER_RELEASE_SHARE_TEXT(e))}`
            }
            let x = {
                enter: e => ({
                    x: e > 0 ? "100%" : "-100%",
                    opacity: 0
                }),
                center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1
                },
                exit: e => ({
                    zIndex: 0,
                    x: e < 0 ? "100%" : "-100%",
                    opacity: 0
                })
            }
        },
        89088: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return SpotifyConnectionSuccessModal
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(72102),
                l = a(38359),
                r = a(47226),
                i = a(69598),
                o = a(73950),
                d = a(76292),
                c = a(54668),
                u = a(22181),
                m = a(3928),
                p = a(99398),
                x = a(10306),
                h = a(14034),
                f = a(64571);
            let v = {
                link: !0
            };

            function SpotifyConnectionSuccessModal(e) {
                var t, a;
                let {
                    releaseFrag: g
                } = e, {
                    closeCancelModal: b
                } = (0, u.useModal)(), y = (0, m.S3c)(m.i4i, g), C = null !== (a = null === (t = y.gaCoverImage) || void 0 === t ? void 0 : t.url) && void 0 !== a ? a : y.coverImage.url, {
                    isShareReferrable: S
                } = (0, p.$)({
                    release: y
                }), {
                    urlWithReferral: j,
                    referralAddress: w
                } = (0, x._)({
                    url: y.webappUri,
                    source: v,
                    isReferrable: S
                }), T = y.artist.user.twitterHandle ? `@${y.artist.user.twitterHandle}` : y.artist.name, N = `I just presaved "${y.title}" from ${T} to listen early and claim a free edition on @soundxyz_`, I = (0, s.jsxs)("div", {
                    className: "flex w-full flex-col items-center text-center text-base800",
                    children: [(0, s.jsx)(o.G, {
                        className: "rounded-lg",
                        alt: "cover image",
                        src: C,
                        placeholder: "blur",
                        blurDataURL: (0, d.Z)(120, 120),
                        width: 120,
                        height: 120
                    }), (0, s.jsx)("h2", {
                        className: "mt-4 font-title text-title-l font-medium",
                        children: "Early Listen Unlocked"
                    }), (0, s.jsx)("p", {
                        className: "mb-4 mt-3 text-base-l md:px-4",
                        children: "Thanks for pre-saving! You now can listen to the song early."
                    }), (0, s.jsx)("p", {
                        className: "mb-7 mt-1 text-base-l md:px-4",
                        children: "Once the song is released, you'll get a free edition. We'll notify you once it's in your wallet."
                    }), (0, s.jsx)(i.z, {
                        variant: "primary",
                        label: "Share",
                        leadingIcon: (0, s.jsx)(n.G, {
                            icon: l.md
                        }),
                        onClick: () => {
                            (0, h.uH)({
                                event: "Share to Twitter Clicked",
                                properties: {
                                    associationId: y.id,
                                    associationType: "Release",
                                    referralAddress: (w || r.L1).toLowerCase(),
                                    sourceComponent: "Spotify Pre-Save Success"
                                }
                            });
                            let e = (0, f.YJ)({
                                type: "presave",
                                url: j,
                                message: encodeURIComponent(N)
                            });
                            window.open(e, "_newtab")
                        },
                        fullWidth: !0
                    })]
                });
                return (0, s.jsx)(c.Z, {
                    body: I,
                    closeModal: b
                })
            }
        },
        58876: function(e, t, a) {
            "use strict";
            a.d(t, {
                uU: function() {
                    return H
                },
                Qw: function() {
                    return useConnectedAuth
                }
            });
            var s = a(16356),
                n = a(74346),
                l = a.n(n),
                r = a(97352),
                i = a(13866),
                o = a(76348),
                d = a(55344),
                c = a(71992),
                u = a.n(c),
                m = a(63558),
                p = a(59665);
            a(96960);
            var x = a(19791),
                h = a(47226),
                f = a(58658),
                v = a(31132),
                g = a(3424),
                b = a(99686),
                y = a(54668),
                C = a(89412);

            function SwitchChainInWalletModal(e) {
                let {
                    chain: t
                } = e, {
                    closeCancelModal: a
                } = (0, C.useSecondaryModal)(), n = (() => {
                    switch (t) {
                        case "eth":
                            return "Ethereum";
                        case "optimism":
                            return "Optimism";
                        case "base":
                            return "Base";
                        default:
                            return "Ghost Network"
                    }
                })(), onClose = () => {
                    a()
                };
                return (0, s.jsx)(y.Z, {
                    closeModal: onClose,
                    title: "Switch chain in wallet",
                    bodyWithoutPaddingBottom: !0,
                    body: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [(0, s.jsxs)("p", {
                            className: "font-base text-base800",
                            children: ["Open your wallet app and switch to ", n, " chain to continue."]
                        }), (0, s.jsx)(b.m, {
                            label: "Done",
                            variant: "primary",
                            onClick: onClose
                        })]
                    })
                })
            }
            var S = a(3928),
                j = a(37464),
                w = a(64398),
                T = a(73335),
                N = a(83835),
                I = a(42529),
                P = a(14034),
                R = a(43633),
                E = a(85846);
            let wait = e => new Promise(t => setTimeout(t, e));
            async function minimalRetry(e, t) {
                let a, {
                        attempts: s,
                        interval: n,
                        onError: l
                    } = t,
                    r = 0;
                for (; r < s;) try {
                    r += 1;
                    let t = await e({
                        attempt: r,
                        isFinalAttempt: r === s
                    });
                    return t
                } catch (e) {
                    null == l || l({
                        error: e,
                        currentTry: r
                    }), a = e, r < s && await wait(n)
                }
                throw a || Error(`Invalid attempts: ${s}`)
            }
            var A = a(95390),
                k = a(22546),
                M = a(97189),
                _ = a(22181),
                O = a(75747),
                L = a(30203),
                D = a(96301),
                U = a(25662),
                F = a(17480),
                z = a(21956);
            let G = f.Lj.AUTH,
                B = (0, k.f)(function() {
                    var e;
                    let t = (0, w.S)(),
                        a = (0, T.f)(),
                        {
                            disconnect: n
                        } = (0, p.qL)(),
                        {
                            closeCancelModal: c,
                            closeModal: b
                        } = (0, _.useModal)(),
                        {
                            openToast: y
                        } = (0, O.useToast)(),
                        {
                            authUser: k
                        } = (0, D.aC)(),
                        {
                            showAuthFlow: B,
                            setShowAuthFlow: H,
                            handleLogOut: W,
                            primaryWallet: $,
                            user: V,
                            network: Z,
                            setNetwork: Q
                        } = (0, i.SX)(),
                        Y = (0, p.mA)(),
                        X = (0, j.I)(Y),
                        K = (0, m.R)(M.L),
                        {
                            loginRequested: q,
                            logoutRequested: J,
                            isAuthenticating: ee
                        } = (0, z.F_)(),
                        et = K["auth-token"],
                        ea = null === (e = Y.address) || void 0 === e ? void 0 : e.toLowerCase(),
                        es = (0, j.I)(ea),
                        [en, el] = (0, r.useState)([]),
                        er = (0, I.R)(async () => {
                            (0, U.O)("logoutStart");
                            let e = M.L["auth-token"];
                            z.fD.isLoggingOut = !0, b(), S.rwK.removeQueries({
                                queryKey: [S.ASG]
                            }), (0, F.H6)(), await Promise.all([W(), e && (0, S.Wcv)(S.KcZ, {
                                headers: { ...M.L,
                                    "auth-token": e
                                }
                            }).catch(a => {
                                t({
                                    action: f.I2.LOG_OUT_ERROR,
                                    error: a,
                                    errorType: f.QS.FETCH_GQL_ERROR,
                                    level: "warning",
                                    message: "Error occured using fetchGQL with LogoutDocument",
                                    pillar: G,
                                    isArtistOnlyPage: !1,
                                    indexedTags: {
                                        authToken: e
                                    },
                                    unindexedExtra: {
                                        graphqlClientHeaders: M.L
                                    }
                                })
                            }), P.RI.reset()]), n(), (0, L.resetTransactionStatusStore)(), await Promise.all([S.rwK.resetQueries()]), z.fD.isLoggingOut = !1, el([]), (0, U.O)("logoutComplete"), a({
                                action: f.U9.LOGGED_OUT,
                                message: "Logged out",
                                pillar: G,
                                isArtistOnlyPage: !1,
                                data: {
                                    authToken: e
                                }
                            })
                        }),
                        ei = Y.connector,
                        eo = (0, j.I)(ei),
                        {
                            switchNetworkAsync: ed
                        } = (0, p.g0)({
                            chainId: E.k6
                        }),
                        ec = Z ? Number(Z) : void 0,
                        eu = null != ec ? ec : E.k6,
                        em = (0, j.I)(ec),
                        ep = (0, j.I)(eu),
                        ex = (0, I.R)(async e => {
                            var t;
                            let a = await (null === (t = eo.current) || void 0 === t ? void 0 : t.getWalletClient({
                                chainId: e
                            }));
                            if (!a) throw Error("Missing wallet signer", {
                                cause: {
                                    connector: eo.current
                                }
                            });
                            return ek || await a.switchChain({
                                id: e
                            }), a
                        }),
                        eh = (0, r.useMemo)(() => {
                            var e;
                            let t = null == V ? void 0 : V.lastVerifiedCredentialId;
                            if (!t) return !1;
                            let a = null == V ? void 0 : null === (e = V.verifiedCredentials) || void 0 === e ? void 0 : e.find(e => e.id === t);
                            return !!a && ((null == a ? void 0 : a.walletProvider) === "walletConnect" || (null == a ? void 0 : a.walletProvider) === "qrCode" && "coinbase" !== a.walletName || (null == a ? void 0 : a.walletProvider) === "deepLink")
                        }, [null == V ? void 0 : V.lastVerifiedCredentialId, null == V ? void 0 : V.verifiedCredentials]);
                    r.useEffect(() => {
                        var e;
                        null == $ || null === (e = $.connector) || void 0 === e || e.getSupportedNetworks().then(e => el(e || []))
                    }, [null == $ ? void 0 : $.connector, null == $ ? void 0 : $.chain, em]);
                    let ef = (0, I.R)(() => {
                            try {
                                let e = null == $ ? void 0 : $.connector.getDeepLink();
                                return e || null
                            } catch (e) {
                                return t({
                                    action: f.I2.LOG_IN_ERROR,
                                    error: e,
                                    errorType: f.QS.DEEP_LINK_ERROR,
                                    level: "warning",
                                    message: "Error occured getting deep link",
                                    pillar: G,
                                    isArtistOnlyPage: !1,
                                    indexedTags: {
                                        authToken: et
                                    }
                                }), null
                            }
                        }),
                        {
                            id: ev,
                            publicAddress: eg,
                            email: eb
                        } = k || {};
                    (0, N.G)(() => {
                        ev && eg && (0, R.DI)({
                            userID: ev,
                            custom: {
                                publicAddress: eg
                            },
                            privateAttributes: {
                                email: eb || void 0
                            }
                        })
                    }, [ev, eg, eb]);
                    let ey = (0, r.useRef)(),
                        eC = !!k && !!ea && k.publicAddress.toLowerCase() !== ea;
                    r.useEffect(() => {
                        B || ee || !eC || W().catch(() => null)
                    }, [B, ee, eC, W]);
                    let eS = (0, I.R)(() => {
                            let e = null == k ? void 0 : k.publicAddress,
                                s = (0, v.WK)(),
                                n = ey.current = s.promise;
                            z.fD.isAuthenticating = !0, n.then(() => {
                                z.fD.isAuthenticating = !1
                            });
                            let loginPromiseFail = () => {
                                    s.resolve({
                                        status: "fail"
                                    }), r()
                                },
                                l = U.s.loginStart(() => {
                                    l();
                                    let n = U.s.loginSuccessEnd(async l => {
                                            r(), o(), n(), i();
                                            let u = setTimeout(() => {
                                                    s.resolve({
                                                        status: "fail"
                                                    }), clearInterval(m)
                                                }, 2e3),
                                                m = setInterval(() => {
                                                    !1 !== X.current.isConnected && null != X.current.connector && X.current.address && (clearInterval(m), clearTimeout(u), e && X.current.address.toLowerCase() !== e ? (c(), y({
                                                        variant: "warning",
                                                        text: "Connected with a different wallet. To access your original account, sign in with the correct wallet.",
                                                        duration: (0, d.Z)("7 seconds")
                                                    }), S.rwK.invalidateQueries({
                                                        type: "active"
                                                    }).catch(e => {
                                                        t({
                                                            action: f.I2.LOG_IN_ERROR,
                                                            error: e,
                                                            errorType: f.QS.INVALIDATE_QUERIES_ERROR,
                                                            level: "warning",
                                                            message: "Error occured calling invalidateQueries",
                                                            pillar: G,
                                                            isArtistOnlyPage: !1,
                                                            indexedTags: {
                                                                authToken: et
                                                            }
                                                        })
                                                    }), S.rwK.removeQueries({
                                                        type: "inactive"
                                                    }), s.resolve({
                                                        status: "mismatch",
                                                        data: {
                                                            authUser: l.authUser,
                                                            connectedWalletAddress: X.current.address
                                                        }
                                                    })) : ((0, g.Ee)(), s.resolve({
                                                        status: "success",
                                                        data: {
                                                            authUser: l.authUser,
                                                            connectedWalletAddress: X.current.address
                                                        }
                                                    }), a({
                                                        action: f.U9.LOGGED_IN,
                                                        message: "Successfully logged in",
                                                        pillar: G,
                                                        isArtistOnlyPage: !1,
                                                        data: {
                                                            connectedWalletAddress: X.current.address,
                                                            authToken: et
                                                        }
                                                    })))
                                                }, 5)
                                        }),
                                        i = U.s.loginSuccessStart(() => {
                                            i(), r()
                                        }),
                                        o = U.s.loginFail(() => {
                                            o(), n(), loginPromiseFail()
                                        })
                                }),
                                r = U.s.loginStop(() => {
                                    r(), l(), loginPromiseFail()
                                });
                            return H(!0), n
                        }),
                        ej = (0, I.R)(() => {
                            let e = Y.isConnected && !!ea;
                            return e && es.current && k ? {
                                status: "success",
                                data: {
                                    connectedWalletAddress: es.current,
                                    authUser: k
                                }
                            } : B && ey.current ? ey.current : eS()
                        });
                    (0, r.useEffect)(() => {
                        q && Promise.resolve(ej()).then(e => {
                            if ("success" === e.status && z.fD.postLoginRedirect) switch (z.fD.postLoginRedirect.page) {
                                case "notifications":
                                    u().push(E.qy.NotificationPage);
                                    break;
                                case "profile":
                                    {
                                        let t = (0, A.OU)(e.data.authUser.webappUri);u().push(t);
                                        break
                                    }
                                default:
                                    (0, x.Yk)(z.fD.postLoginRedirect.page)
                            }
                        }).catch(e => {
                            t({
                                action: f.I2.LOG_IN_ERROR,
                                error: e,
                                errorType: f.QS.UNKNOWN,
                                level: "warning",
                                message: "Unknown error occured during login",
                                pillar: G,
                                isArtistOnlyPage: !1,
                                indexedTags: {
                                    authToken: et
                                }
                            })
                        }).finally(() => {
                            z.fD.postLoginRedirect = null, z.fD.loginRequested = !1
                        })
                    }, [et, t, ej, q]), (0, r.useEffect)(() => {
                        J && (er(), z.fD.postLoginRedirect = null, z.fD.logoutRequested = !1)
                    }, [ej, er, J]);
                    let ew = (0, I.R)(async () => {
                            if (ea && k && ea === k.publicAddress) return {
                                authUser: k,
                                connectedWalletAddress: ea,
                                stop: !1
                            };
                            let e = await ej();
                            return (null == e ? void 0 : e.status) !== "success" ? ("fail" === e.status && y({
                                text: "Please make sure you wallet is connected",
                                variant: "primary"
                            }), {
                                stop: !0
                            }) : { ...e.data,
                                stop: !1
                            }
                        }),
                        {
                            openModal: eT
                        } = (0, C.useSecondaryModal)(),
                        [eN, eI] = (0, r.useState)(!1),
                        eP = (0, j.I)(eN),
                        eR = (0, r.useRef)(),
                        eE = (0, I.R)(async function(e) {
                            if (!ed) {
                                eI(!1), y({
                                    text: "Connected wallet doesn't support switching network, please try connecting another wallet to continue",
                                    variant: "error"
                                });
                                return
                            }
                            let t = (0, h.qz)(e);
                            if (eh && !en.includes(e.toString())) {
                                let e;
                                switch (t) {
                                    case "MAINNET":
                                    case "GOERLI":
                                    case "SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "eth"
                                        });
                                        break;
                                    case "OPTIMISM":
                                    case "OPTIMISM_GOERLI":
                                    case "OPTIMISM_SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "optimism"
                                        });
                                        break;
                                    case "BASE":
                                    case "BASE_GOERLI":
                                    case "BASE_SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "base"
                                        });
                                        break;
                                    default:
                                        (0, x.Yk)(t)
                                }
                                eT("SWITCH_CHAIN_IN_WALLET", {
                                    body: e
                                });
                                return
                            }

                            function offSwitchingNetwork() {
                                clearTimeout(eR.current), eI(!1)
                            }
                            clearTimeout(eR.current), eI(!0), eR.current = setTimeout(offSwitchingNetwork, 1e4);
                            let a = await ed(e).finally(offSwitchingNetwork);
                            return Q(a.id), await minimalRetry(() => {
                                l()(e === em.current, "ChainId should be switched")
                            }, {
                                attempts: 20,
                                interval: 50
                            }).catch(() => {
                                var t, a, s;
                                let n = Error("Wallet completed network switch promise but the chain was not switched correctly");
                                throw (0, o.Tb)(n, {
                                    level: "warning",
                                    extra: {
                                        authUserAddress: null !== (t = null == k ? void 0 : k.publicAddress) && void 0 !== t ? t : null,
                                        walletAddress: null !== (a = es.current) && void 0 !== a ? a : null,
                                        fromChain: null !== (s = em.current) && void 0 !== s ? s : null,
                                        toChain: e,
                                        dynamicUser: null != V ? V : null
                                    }
                                }), n
                            }), a
                        }),
                        eA = (0, I.R)(function(e) {
                            let {} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (em.current === e) return eP.current && eI(!1), {
                                stop: !1
                            };
                            let t = (0, h.qz)(e);
                            if (eh && !en.includes(e.toString())) {
                                let e;
                                switch (t) {
                                    case "MAINNET":
                                    case "GOERLI":
                                    case "SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "eth"
                                        });
                                        break;
                                    case "OPTIMISM":
                                    case "OPTIMISM_GOERLI":
                                    case "OPTIMISM_SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "optimism"
                                        });
                                        break;
                                    case "BASE":
                                    case "BASE_GOERLI":
                                    case "BASE_SEPOLIA":
                                        e = (0, s.jsx)(SwitchChainInWalletModal, {
                                            chain: "base"
                                        });
                                        break;
                                    default:
                                        (0, x.Yk)(t)
                                }
                                return eT("SWITCH_CHAIN_IN_WALLET", {
                                    body: e
                                }), {
                                    stop: !0
                                }
                            }
                            let a = eE(e);
                            return a ? (eI(!0), {
                                stop: !1,
                                switching: a
                            }) : {
                                stop: !0
                            }
                        }),
                        ek = (0, r.useMemo)(() => {
                            var e;
                            let t = null == V ? void 0 : V.lastVerifiedCredentialId;
                            if (!t) return !1;
                            let a = null == V ? void 0 : null === (e = V.verifiedCredentials) || void 0 === e ? void 0 : e.find(e => e.id === t);
                            return !!a && ((null == a ? void 0 : a.walletProvider) === "custodialService" || (null == a ? void 0 : a.walletProvider) === "embeddedWallet")
                        }, [null == V ? void 0 : V.lastVerifiedCredentialId, null == V ? void 0 : V.verifiedCredentials]);
                    return {
                        activeChainId: em,
                        activeChainIdWithFallback: ep,
                        dynamicUser: V,
                        expectMatchingChain: eA,
                        getDeepLink: ef,
                        getSigner: ex,
                        isSwitchingNetwork: eN,
                        latestIsSwitchingNetwork: eP,
                        loginRequireConnection: ew,
                        setIsSwitchingNetwork: eI,
                        signMessage: () => {
                            throw Error("Not implemented")
                        },
                        switchNetworkChain: eE,
                        walletAddress: ea,
                        walletLogout: W
                    }
                }),
                useConnectedAuth = () => B.useContainer();
            B.Context;
            let H = B.Provider
        },
        25662: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return invokeAuthEffect
                },
                s: function() {
                    return r
                }
            });
            var s = a(76348),
                n = a(3928);
            let l = {
                    loginStart: new Set,
                    loginStop: new Set,
                    loginSuccessStart: new Set,
                    loginSuccessEnd: new Set,
                    loginFail: new Set,
                    logoutStart: new Set,
                    logoutMutationSuccess: new Set,
                    logoutComplete: new Set
                },
                r = Object.keys(l).reduce((e, t) => (t in l && (e[t] = function(e) {
                    let t = l[e];
                    return function(e) {
                        return t.add(e),
                            function() {
                                t.delete(e)
                            }
                    }
                }(t)), e), {});

            function invokeAuthEffect(e) {
                for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) a[n - 1] = arguments[n];
                for (let t of l[e]) try {
                    Promise.resolve(t(...a)).catch(t => (0, s.Tb)(t, {
                        level: "warning",
                        extra: {
                            authEffect: e,
                            payload: a
                        }
                    }))
                } catch (t) {
                    (0, s.Tb)(t, {
                        level: "warning",
                        extra: {
                            authEffect: e,
                            payload: a
                        }
                    })
                }
            }
            n.Lfh.onCompleted(n.KcZ, () => invokeAuthEffect("logoutMutationSuccess"))
        },
        89412: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                SecondaryModalContext: function() {
                    return u
                },
                SecondaryModalType: function() {
                    return d
                },
                useSecondaryModal: function() {
                    return useSecondaryModal
                }
            });
            var s = a(97352),
                n = a(71992),
                l = a.n(n),
                r = a(31265),
                i = a(63558),
                o = a(22546);
            let d = {
                    RECONNECT_WALLET: "RECONNECT_WALLET",
                    SWITCH_CHAIN: "SWITCH_CHAIN",
                    SWITCH_CHAIN_IN_WALLET: "SWITCH_CHAIN_IN_WALLET",
                    EDITION_VIEW_COVER: "EDITION_VIEW_COVER"
                },
                c = (0, r.sj)({
                    activeModal: null,
                    openModal: e => {
                        c.activeModal = e
                    },
                    onCancelModal: null,
                    setOnCancelModal: e => {
                        c.setOnCancelModal = e
                    },
                    closeModal: () => {
                        c.activeModal = null, c.onCancelModal = null
                    },
                    closeModalByType: e => {
                        c.activeModal === e && c.closeModal()
                    },
                    closeCancelModal: () => {
                        null !== c.onCancelModal && c.onCancelModal(), c.closeModal()
                    }
                });
            l().events.on("routeChangeStart", e => {
                e !== l().asPath && c.closeModal()
            });
            let u = (0, o.f)(function() {
                    let [e, t] = s.useState(null), a = s.useCallback((e, a) => {
                        t(a), c.activeModal = e
                    }, [t]), {
                        activeModal: n,
                        onCancelModal: l
                    } = (0, i.R)(c);
                    return {
                        activeModal: n,
                        onCancelModal: l,
                        modalContent: e,
                        openModal: a,
                        closeCancelModal: c.closeCancelModal,
                        setOnCancelModal: c.setOnCancelModal,
                        closeModal: c.closeModal,
                        closeModalByType: c.closeModalByType
                    }
                }),
                useSecondaryModal = () => u.useContainer()
        },
        10229: function(e, t, a) {
            "use strict";
            a.d(t, {
                MH: function() {
                    return TransactionStatusStore
                },
                ag: function() {
                    return getTransactionReceipt
                },
                fs: function() {
                    return getTransactionResponse
                }
            });
            var s = a(63191),
                n = a(32837),
                l = a(27122),
                r = a(18191),
                i = a(7380),
                o = a(8575);
            async function getTransactionResponse(e) {
                let {
                    hash: t,
                    provider: a,
                    chainId: n
                } = e;
                return (0, i.j7)(t), (0, l.xK)(async () => {
                    let e = await a.getTransaction({
                        hash: t
                    });
                    if (!e) throw Error("Transaction response is undefined");
                    return e
                }, {
                    attempts: 10,
                    interval: 750,
                    logger: {
                        fatal: s.Z,
                        error: s.Z,
                        debug: s.Z,
                        info: s.Z,
                        warn: s.Z,
                        child: function() {
                            let e = this;
                            return {
                                fatal: s.Z,
                                error: s.Z,
                                debug: s.Z,
                                info: s.Z,
                                warn: s.Z,
                                child: () => e
                            }
                        }
                    },
                    operation: "Retry transaction hash lookup",
                    operationExtra: {
                        chainId: n,
                        hash: t
                    }
                })
            }
            async function getTransactionReceipt(e) {
                let {
                    hash: t,
                    provider: a,
                    chainId: n,
                    interval: r
                } = e;
                return (0, i.j7)(t), (0, l.xK)(async () => await a.waitForTransactionReceipt({
                    hash: t
                }), {
                    attempts: 10,
                    interval: null != r ? r : 500,
                    logger: {
                        fatal: s.Z,
                        error: s.Z,
                        debug: s.Z,
                        info: s.Z,
                        warn: s.Z,
                        child: function() {
                            let e = this;
                            return {
                                fatal: s.Z,
                                error: s.Z,
                                debug: s.Z,
                                info: s.Z,
                                warn: s.Z,
                                child: () => e
                            }
                        }
                    },
                    operation: "Retry transaction receipt lookup",
                    operationExtra: {
                        chainId: n,
                        hash: t
                    }
                })
            }
            let TransactionStatusStore = class TransactionStatusStore {
                setOnTransactionProcessing(e) {
                    this.onTransactionProcessing = e
                }
                setOnTransactionComplete(e) {
                    this.onTransactionComplete = e
                }
                reset() {
                    this.data = {}, this.onChange(this.data)
                }
                hydrate(e) {
                    this.data = e
                }
                getTransactionStatus(e) {
                    return "success" === e.status ? o.bL.SUCCESS : o.bL.FAILED
                }
                createTransactionStatusLineItem(e) {
                    return {
                        transaction: e,
                        status: o.bL.UNKNOWN,
                        createdAt: new Date,
                        lastVerificationAttemptDispatchedAt: new Date,
                        lastVerificationAttemptCompletedAt: null,
                        numVerificationAttempts: 1
                    }
                }
                getTransactionKey(e) {
                    return `${e.from.toLowerCase()}-${e.nonce}`
                }
                registerTransaction(e) {
                    let t = this.getTransactionKey(e),
                        a = this.createTransactionStatusLineItem(e),
                        s = this.data[t];
                    return s ? s.items.unshift(a) : this.data[t] = {
                        items: [a]
                    }, this.onChange(this.data), a
                }
                findTransactionStatusLineItem(e) {
                    let t = this.getTransactionKey(e),
                        a = this.data[t];
                    if (!a) return null;
                    let s = a.items.find(t => t.transaction.hash.toLowerCase() === e.hash.toLowerCase());
                    return s || null
                }
                registerTransactionStatusVerificationAttempt(e) {
                    let t = this.findTransactionStatusLineItem(e);
                    t && (t.lastVerificationAttemptDispatchedAt = new Date, t.numVerificationAttempts += 1)
                }
                registerTransactionStatusVerificationResult(e) {
                    let {
                        transaction: t,
                        status: a
                    } = e, s = this.findTransactionStatusLineItem(t);
                    s && (s.lastVerificationAttemptCompletedAt = new Date, s.status = a)
                }
                expireOldTransactions(e) {
                    Object.values(this.data).forEach(t => {
                        t.items.forEach(t => {
                            let a = e.getTime() - t.createdAt.getTime();
                            (a > 3e5 || t.numVerificationAttempts > 5) && (t.status = o.bL.FAILED)
                        })
                    })
                }
                getParentTransactionStatusWithStartIndex(e, t) {
                    let a = e.items.length - t;
                    if (1 === a) {
                        let a = e.items[t];
                        return (null == a ? void 0 : a.status) === o.bL.SUCCESS ? o.UX.TOTAL_SUCCESS : (null == a ? void 0 : a.status) === o.bL.FAILED ? o.UX.TOTAL_FAILURE : o.UX.UNKNOWN
                    } {
                        let a = this.getParentTransactionStatusWithStartIndex(e, t + 1),
                            s = e.items[t];
                        return a === o.UX.TOTAL_FAILURE ? (null == s ? void 0 : s.status) === o.bL.UNKNOWN ? o.UX.UNKNOWN : (null == s ? void 0 : s.status) === o.bL.FAILED ? o.UX.TOTAL_FAILURE : o.UX.PARTIAL_SUCCESS : a === o.UX.TOTAL_SUCCESS ? o.UX.PARTIAL_SUCCESS : a
                    }
                }
                getParentTransactionStatus(e) {
                    return this.getParentTransactionStatusWithStartIndex(e, 0)
                }
                getParentTransactionsWithUnknownStatus() {
                    let e = Object.values(this.data).filter(e => {
                        let t = this.getParentTransactionStatus(e);
                        return t === o.UX.UNKNOWN
                    });
                    return e
                }
                getLineItemToVerify(e) {
                    let t = e.items.find(e => e.status === o.bL.UNKNOWN);
                    return t || null
                }
                async onVerificationComplete(e) {
                    let {
                        txResponse: t,
                        lineItem: a,
                        status: s
                    } = e;
                    this.registerTransactionStatusVerificationResult({
                        transaction: a.transaction,
                        status: s
                    }), this.onChange(this.data), await this.onTransactionComplete({
                        lineItem: a,
                        txResponse: t
                    })
                }
                async verifyLineItem(e) {
                    let {
                        lineItem: t,
                        provider: a
                    } = e;
                    this.registerTransactionStatusVerificationAttempt(t.transaction), this.onChange(this.data), await this.onTransactionProcessing(t.transaction);
                    try {
                        let e = await getTransactionResponse({
                                provider: a,
                                hash: t.transaction.hash,
                                chainId: t.transaction.chainId
                            }),
                            s = await a.waitForTransactionReceipt({
                                hash: t.transaction.hash
                            });
                        if (!s) throw Error("Transaction receipt is undefined");
                        let n = this.getTransactionStatus(s);
                        await this.onVerificationComplete({
                            txResponse: e,
                            lineItem: t,
                            status: n
                        })
                    } catch (e) {
                        throw await this.onVerificationComplete({
                            lineItem: t,
                            status: o.bL.FAILED,
                            txResponse: null
                        }), new r.Pu({
                            message: "Error while verifying transaction",
                            txHash: t.transaction.hash,
                            originalError: (0, n.Xy)(e),
                            chainId: t.transaction.chainId
                        })
                    }
                }
                async onNewTransaction(e) {
                    let {
                        txResponse: t,
                        contractMethod: a,
                        releaseId: s,
                        provider: n,
                        chainId: l
                    } = e, r = this.registerTransaction({
                        hash: t.hash,
                        from: t.from,
                        nonce: t.nonce,
                        contractMethod: a,
                        releaseId: s,
                        chainId: l
                    });
                    await this.verifyLineItem({
                        lineItem: r,
                        provider: n
                    })
                }
                async verifyUnknownTransactions(e) {
                    let {
                        now: t,
                        provider: a
                    } = e;
                    this.expireOldTransactions(t), this.onChange(this.data);
                    let s = this.getParentTransactionsWithUnknownStatus(),
                        n = s.map(e => this.getLineItemToVerify(e));
                    for (let e of n)
                        if (e) {
                            let t = a(e.transaction.chainId);
                            await this.verifyLineItem({
                                lineItem: e,
                                provider: t
                            })
                        }
                }
                constructor({
                    onChange: e,
                    onTransactionProcessing: t,
                    onTransactionComplete: a
                }) {
                    this.data = {}, this.onChange = e, this.onTransactionProcessing = t || (() => {}), this.onTransactionComplete = a || (() => {})
                }
            }
        },
        30203: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Transaction: function() {
                    return s.YW
                },
                resetTransactionStatusStore: function() {
                    return s.Gx
                },
                useTransaction: function() {
                    return s.kF
                },
                useTransactionHandler: function() {
                    return s.Qn
                }
            });
            var s = a(17166)
        },
        17166: function(e, t, a) {
            "use strict";
            a.d(t, {
                YW: function() {
                    return q
                },
                Gx: function() {
                    return resetTransactionStatusStore
                },
                kF: function() {
                    return useTransaction
                },
                Qn: function() {
                    return useTransactionHandler
                }
            });
            var s = a(16356),
                n = a(97352),
                l = a(32837);
            a(96960);
            var r = a(19791),
                i = a(47226),
                o = a(58658),
                d = a(79950),
                c = a(76348),
                u = a(85740),
                m = a(96301),
                p = a(36750),
                x = a(3928);
            let h = (0, u.Z)(() => {
                (0, x.Wcv)(x.PKV, {}).catch(e => {
                    c.Tb(e, {
                        level: "warning"
                    })
                })
            }, 5e3, {
                leading: !0,
                trailing: !1
            });
            (0, p.c)({
                trigger: [x.PKV],
                refetch: [x.ASG]
            });
            var f = a(97946),
                v = a(26831),
                g = a(30655),
                b = a(58876),
                y = a(25533),
                C = a(22181),
                S = a(75747),
                j = a(64398),
                w = a(42529),
                T = a(58102),
                N = a(70931),
                I = a(85846),
                P = a(18191),
                R = a(80403),
                E = a(20553),
                A = a(53381),
                k = a(86093);
            let M = [{
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        type: "address",
                        name: "from",
                        indexed: !0
                    }, {
                        type: "address",
                        name: "to",
                        indexed: !0
                    }, {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }]
                }],
                _ = (0, E.e)(M[0]);
            var O = a(31251),
                L = a(22546),
                D = a(10229),
                U = a(94069);
            let shouldDowngradeError = e => {
                if (!e || !(e instanceof U.mk)) return !1;
                let {
                    shortMessage: t,
                    details: a
                } = e;
                return !!((null == t ? void 0 : t.includes("does not match the target chain")) || (null == a ? void 0 : a.includes("Your app has exceeded its concurrent requests capacity")) || (null == a ? void 0 : a.includes("request too fast per second")) || (null == a ? void 0 : a.includes("Ledger device: Condition of use not satisfied")) || (null == a ? void 0 : a.includes("Please enable Blind signing or Contract data")) || (null == a ? void 0 : a.includes("Request rejected")) || (null == a ? void 0 : a.toLowerCase()) === "cancelled" || (null == a ? void 0 : a.includes("Failed to sign")) || (null == a ? void 0 : a.includes("No keyring found")) || (null == a ? void 0 : a.includes("MetaMask is having trouble connecting to the network")) || (null == a ? void 0 : a.includes("nonce too low")) || (null == a ? void 0 : a.includes("Failed to fetch")) || (null == a ? void 0 : a.includes("Transaction is underpriced")) || (null == a ? void 0 : a.includes("already known")))
            };
            var F = a(8575),
                z = a(74378),
                G = a(59287),
                B = a(8205),
                H = a(69598),
                W = a(37196);

            function SamTransactionFailedModal(e) {
                let {
                    transactionType: t
                } = e, {
                    closeCancelModal: a
                } = C.ModalContext.useContainer(), n = (0, s.jsxs)($, {
                    children: [(0, s.jsx)(V, {
                        children: "\uD83D\uDE11"
                    }), (0, s.jsx)("h2", {
                        children: "Your transaction failed"
                    }), (0, s.jsx)("p", {
                        children: "Buy" === t ? "The price has increased because a significant number of editions were collected simultaneously. Please try again." : "The price has decreased because a significant number of editions were sold simultaneously. Please try again."
                    })]
                }), l = (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(H.z, {
                        label: "Close to Try Again",
                        variant: "primary",
                        size: "L",
                        onClick: () => {
                            a()
                        }
                    })
                });
                return (0, s.jsx)(W.u_, {
                    body: n,
                    footer: l,
                    closeModal: a,
                    containerStyles: {
                        padding: "0 12px 16px",
                        "@tablet": {
                            padding: "0 16px 20px"
                        }
                    },
                    headerStyles: {
                        paddingTop: 8,
                        "@tablet": {
                            paddingTop: 12
                        }
                    },
                    bodyStyles: {
                        marginTop: -4
                    },
                    footerStyles: {
                        marginTop: 12,
                        justifyContent: "center",
                        "@tablet": {
                            marginTop: 16
                        }
                    }
                })
            }
            let $ = (0, B.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    height: "fit-content",
                    gap: 12,
                    h2: {
                        title: "L"
                    },
                    p: {
                        base: "M"
                    }
                }),
                V = (0, B.zo)("span", {
                    display: "flex",
                    fontSize: 44,
                    lineHeight: "46px",
                    "@tablet": {
                        fontSize: 54,
                        lineHeight: "56px"
                    }
                });
            var Z = a(99795),
                Q = a(60265),
                Y = a(95390);
            let X = (0, T.U)({
                    key: "@soundxyz/transactionStatusStore-0.1",
                    schema: F.ap,
                    eager: !0
                }),
                K = new D.MH({
                    onChange: e => {
                        X.set(e)
                    }
                });

            function resetTransactionStatusStore() {
                K.reset()
            }

            function useTransactionHandler() {
                let {
                    onTransactionStatusUpdate: e
                } = function() {
                    let {
                        closeModalByType: e,
                        openModal: t
                    } = C.ModalContext.useContainer(), {
                        gift_to: a
                    } = (0, Q.UO)(), {
                        data: n
                    } = (0, x.aM2)(x.Ob7, {
                        variables: {
                            publicAddress: a
                        },
                        enabled: !!a,
                        staleTime: 0
                    }), {
                        openToast: l
                    } = S.ToastContext.useContainer(), r = null == n ? void 0 : n.data.userByAddress, i = a ? (0, s.jsxs)(s.Fragment, {
                        children: ["You gifted a sound to", I.L_, r ? (0, s.jsx)(f.s, {
                            pathnameUri: (0, Y.OU)(r.webappUri),
                            className: "font-bold underline",
                            children: r.username
                        }) : (0, s.jsx)(f.s, {
                            type: "external",
                            absoluteUri: `/user/${a}`,
                            className: "font-bold underline",
                            children: (0, G.pc)(a, 4, 5)
                        })]
                    }) : null, c = (0, j.S)(), {
                        reward: u
                    } = (0, z.w5)("withdrawReward", "emoji", {
                        elementCount: 50,
                        emoji: ["\uD83D\uDCB8", "\uD83E\uDEF0", "\uD83D\uDCB0"],
                        zIndex: parseInt(B.rS.zIndices.above3.value, 10),
                        lifetime: 500
                    });
                    return {
                        onTransactionStatusUpdate: async function(n) {
                            let {
                                lineItem: r,
                                quantity: m = 1
                            } = n;
                            switch (r.transaction.contractMethod) {
                                case d.O.SAM__BUY_EDITION:
                                    switch (r.status) {
                                        case F.bL.SUCCESS:
                                            if (a) l({
                                                text: i,
                                                variant: "success"
                                            }), Q.M8.gift_to = null;
                                            else if (l({
                                                    text: "Song purchased! You can now leave a comment on the song.",
                                                    variant: "success"
                                                }), r.transaction.releaseId) t(C.ModalType.COMMENT_MODAL_V2, {
                                                body: (0, s.jsx)(Z.k, {
                                                    releaseId: r.transaction.releaseId,
                                                    usePurchasedNftInfo: 1 === m
                                                })
                                            });
                                            else {
                                                let e = `Missing releaseId in buy edition message, txHash=${r.transaction.hash}`;
                                                c({
                                                    action: o.XW.EDITION_MINT_ERROR,
                                                    error: Error(e),
                                                    errorType: o.QS.MISSING_RELEASE,
                                                    message: e,
                                                    closeProcessingModal: !0,
                                                    isArtistOnlyPage: !1,
                                                    pillar: o.Lj.MINTING,
                                                    indexedTags: {
                                                        txHash: r.transaction.hash
                                                    },
                                                    level: "error"
                                                })
                                            }
                                            break;
                                        case F.bL.FAILED:
                                            t(C.ModalType.SAM_TRANSACTION_FAILED, {
                                                body: (0, s.jsx)(SamTransactionFailedModal, {
                                                    transactionType: "Buy"
                                                })
                                            });
                                        case F.bL.UNKNOWN:
                                    }
                                    break;
                                case d.O.ARTIST__BUY_EDITION:
                                    if (r.status === F.bL.SUCCESS) {
                                        if (a) l({
                                            text: i,
                                            variant: "success"
                                        }), Q.M8.gift_to = null;
                                        else if (l({
                                                text: "Song purchased! You can now leave a comment on the song.",
                                                variant: "success"
                                            }), r.transaction.releaseId) t(C.ModalType.COMMENT_MODAL_V2, {
                                            body: (0, s.jsx)(Z.k, {
                                                releaseId: r.transaction.releaseId,
                                                usePurchasedNftInfo: 1 === m
                                            })
                                        });
                                        else {
                                            let e = "Missing releaseId in buy edition message";
                                            c({
                                                action: o.XW.EDITION_MINT_ERROR,
                                                error: Error(e),
                                                errorType: o.QS.MISSING_RELEASE,
                                                message: e,
                                                closeProcessingModal: !0,
                                                isArtistOnlyPage: !1,
                                                pillar: o.Lj.MINTING,
                                                indexedTags: {
                                                    txHash: r.transaction.hash
                                                },
                                                level: "error"
                                            })
                                        }
                                    } else l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    });
                                    break;
                                case d.O.DRAFT_SPLIT_MAIN__CREATE_SPLIT:
                                    r.status === F.bL.SUCCESS ? l({
                                        text: "Split creation completed!",
                                        variant: "success"
                                    }) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    }), e(C.ModalType.PROCESSING);
                                    break;
                                case d.O.SPLIT_MAIN__DISTRIBUTE_ETH:
                                    r.status === F.bL.SUCCESS ? l({
                                        text: "Split distribution completed!",
                                        variant: "success"
                                    }) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    }), e(C.ModalType.PROCESSING);
                                    break;
                                case d.O.SAM__SELL_EDITION:
                                    switch (r.status) {
                                        case F.bL.SUCCESS:
                                            u(), l({
                                                text: "Your funds were successfully transferred.",
                                                variant: "success"
                                            });
                                            break;
                                        case F.bL.FAILED:
                                            t(C.ModalType.SAM_TRANSACTION_FAILED, {
                                                body: (0, s.jsx)(SamTransactionFailedModal, {
                                                    transactionType: "Sell"
                                                })
                                            });
                                            break;
                                        case F.bL.UNKNOWN:
                                            break;
                                        default:
                                            e(C.ModalType.PROCESSING)
                                    }
                                    break;
                                case d.O.AFFILIATE__WITHDRAW:
                                case d.O.MULTICALL__WITHDRAW:
                                    r.status === F.bL.SUCCESS ? (await (0, x.EEr)({
                                        operations: [x.Lh0, x.C8x, x.We3, x.GxI]
                                    }), u(), l({
                                        text: "Your funds were successfully transferred.",
                                        variant: "success"
                                    })) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    }), e(C.ModalType.PROCESSING);
                                    break;
                                case F.oR.ENABLE_AFFILIATE_FEE:
                                    r.status === F.bL.SUCCESS ? l({
                                        text: "Curator rewards have been enabled for this release",
                                        variant: "success"
                                    }) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    }), e(C.ModalType.PROCESSING);
                                    break;
                                case F.oR.DISABLE_AFFILIATE_FEE:
                                    r.status === F.bL.SUCCESS ? l({
                                        text: "Curator rewards have been disabled for this release",
                                        variant: "success"
                                    }) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    }), e(C.ModalType.PROCESSING);
                                    break;
                                case d.O.SOUND_CREATOR__CREATE_SOUND_AND_MINTS:
                                    await (0, x.EEr)({
                                        operations: [x.N06]
                                    });
                                    break;
                                case d.O.DRAFT_SOUND_CREATOR__CREATE_SOUND_AND_MINTS:
                                    await (0, x.EEr)({
                                        operations: [x.bUQ]
                                    });
                                    break;
                                case F.oR.MULTICALL__EDIT:
                                    break;
                                case d.O.COLLECTOR__TRANSFER_EDITION:
                                    r.status === F.bL.SUCCESS ? (Q.M8.gift_to = null, await (0, x.EEr)({
                                        operations: [x.e8z, x.ZA9, x.fz_, x.rT9]
                                    }), l({
                                        text: i,
                                        variant: "success"
                                    })) : l({
                                        text: "Transaction failed",
                                        variant: "error"
                                    });
                                    break;
                                default:
                                    {
                                        l({
                                            text: `Transaction ${r.status}`
                                        });
                                        let e = "Unhandled transaction notification";c({
                                            action: o.CA.TRANSACTION_ERROR,
                                            error: Error(e),
                                            errorType: o.QS.UNHANDLED_CONTRACT_METHOD,
                                            message: e,
                                            closeProcessingModal: !0,
                                            isArtistOnlyPage: !1,
                                            pillar: o.Lj.TRANSACTION,
                                            indexedTags: {
                                                txHash: r.transaction.hash,
                                                contractMethod: r.transaction.contractMethod,
                                                status: r.status
                                            },
                                            level: "warning"
                                        })
                                    }
                            }
                        }
                    }
                }(), [t, a] = n.useState(!1), [c, u] = n.useState(!0), {
                    openModal: p
                } = C.ModalContext.useContainer(), {
                    mutateAsync: T,
                    error: E
                } = (0, x.Dbo)(x.gr_, {}), {
                    mutateAsync: L,
                    error: U
                } = (0, x.Dbo)(x.SGu, {
                    retry: 5
                }), H = (0, j.S)(), {
                    authUser: W
                } = (0, m.aC)(), {
                    provider: $
                } = (0, y.useChainProvider)(), {
                    walletAddress: V,
                    loginRequireConnection: q
                } = (0, b.Qw)(), {
                    closeToast: J,
                    openToast: ee
                } = S.ToastContext.useContainer(), [et, ea] = n.useState(), {
                    closeModalByType: es
                } = C.ModalContext.useContainer(), en = (0, w.R)(async e => {
                    let {
                        receipt: t,
                        chainId: a
                    } = e, {
                        transactionHash: s
                    } = t;
                    try {
                        var n, l;
                        let e = await L({
                            txHash: s,
                            chain: (0, R.G)((0, i.qz)(a))
                        });
                        ea({
                            nftId: (null === (l = e.data) || void 0 === l ? void 0 : null === (n = l.clientNftUpsert) || void 0 === n ? void 0 : n.id) || ""
                        })
                    } catch (e) {
                        H({
                            action: o.XW.NFT_UPSERT_ERROR,
                            error: e,
                            errorType: o.QS.NFT_UPSERT_MUTATION_ERROR,
                            message: "Error upserting NFT",
                            level: "fatal",
                            isArtistOnlyPage: !1,
                            pillar: o.Lj.MINTING
                        })
                    }
                }), el = (0, w.R)(async e => {
                    let {
                        receipt: t
                    } = e;
                    try {
                        let {
                            status: e,
                            transactionHash: a
                        } = t;
                        if ("reverted" === e) {
                            J();
                            let e = "Transaction failed!";
                            H({
                                action: o.A.RELEASE_DRAFT_DEPLOY_ERROR,
                                error: Error("Transaction failed!"),
                                errorType: o.QS.DEPLOY_SPLITS_TRANSACTION_FAILED,
                                toast: e,
                                message: e,
                                pillar: o.Lj.UPLOAD_RELEASE,
                                isArtistOnlyPage: !0,
                                level: "fatal",
                                indexedTags: {
                                    txHash: a
                                },
                                unindexedExtra: {
                                    receipt: t
                                }
                            });
                            return
                        }
                        "success" === e ? await T({
                            txHash: a
                        }) : (0, r.Yk)(e)
                    } catch (e) {
                        H({
                            action: o.A.RELEASE_DRAFT_DEPLOY_ERROR,
                            error: e,
                            errorType: o.QS.DEPLOY_SPLITS_TRANSACTION_FAILED,
                            message: "Transaction failed!",
                            pillar: o.Lj.UPLOAD_RELEASE,
                            isArtistOnlyPage: !0,
                            level: "fatal",
                            unindexedExtra: {
                                receipt: t
                            }
                        })
                    }
                }), er = (0, w.R)(async e => {
                    let {
                        receipt: t,
                        chainId: a
                    } = e;
                    try {
                        var s;
                        let {
                            status: e,
                            transactionHash: n
                        } = t;
                        if ("reverted" === e) {
                            J();
                            let e = "Transaction failed!";
                            H({
                                action: o.A.RELEASE_DRAFT_DEPLOY_ERROR,
                                error: Error("Transaction failed!"),
                                errorType: o.QS.CREATE_DRAFT_EDITION_TRANSACTION_FAILED,
                                toast: e,
                                message: e,
                                pillar: o.Lj.UPLOAD_RELEASE,
                                isArtistOnlyPage: !0,
                                level: "fatal",
                                indexedTags: {
                                    txHash: n,
                                    chainId: a
                                },
                                unindexedExtra: {
                                    receipt: t
                                }
                            });
                            return
                        }
                        let {
                            errors: l
                        } = await (0, x.Wcv)(x.ZZb, {
                            variables: {
                                hash: n,
                                chain: (0, R.G)((0, i.qz)(a))
                            }
                        });
                        if (null == l ? void 0 : l.length) throw Error(null === (s = l[0]) || void 0 === s ? void 0 : s.message)
                    } catch (s) {
                        let e = "Transaction failed!";
                        H({
                            action: o.A.RELEASE_DRAFT_DEPLOY_ERROR,
                            error: s,
                            errorType: o.QS.NFT_TXN_UPSERT_MUTATION_FAILED,
                            toast: e,
                            message: e,
                            pillar: o.Lj.UPLOAD_RELEASE,
                            isArtistOnlyPage: !0,
                            level: "fatal",
                            indexedTags: {
                                chainId: a
                            },
                            unindexedExtra: {
                                receipt: t
                            }
                        })
                    }
                }), ei = (0, w.R)(async e => {
                    let {
                        contractMethod: t,
                        tx: a,
                        chainId: s
                    } = e;
                    try {
                        let e = await $(s).waitForTransactionReceipt({
                            hash: a.hash
                        });
                        t === d.O.DRAFT_SPLIT_MAIN__CREATE_SPLIT ? await el({
                            receipt: e
                        }) : t === d.O.ARTIST__BUY_EDITION || t === d.O.SAM__BUY_EDITION || t === d.O.COLLECTOR__TRANSFER_EDITION ? await en({
                            receipt: e,
                            chainId: s
                        }) : t === d.O.DRAFT_SOUND_CREATOR__CREATE_SOUND_AND_MINTS ? (await er({
                            receipt: e,
                            chainId: s
                        }), (0, x.EEr)({
                            operations: [x.bUQ]
                        })) : t === d.O.AFFILIATE__WITHDRAW && W && h()
                    } catch (e) {
                        H({
                            action: o.CA.TRANSACTION_ERROR,
                            error: e,
                            errorType: o.QS.CANCELLED_TRANSACTION,
                            message: "Unhandled transaction error",
                            level: "warning",
                            pillar: o.Lj.TRANSACTION,
                            isArtistOnlyPage: !1,
                            indexedTags: {
                                chainId: s,
                                contractMethod: t,
                                transactionHash: a.hash
                            }
                        })
                    } finally {
                        x.rwK.invalidateQueries({
                            queryKey: [N.w]
                        })
                    }
                }), eo = (0, w.R)(async e => {
                    let t, a, s;
                    let {
                        error: n
                    } = e, l = n instanceof P.Pu ? n.txHash : e.txHash, r = n instanceof P.Pu ? n.chainId : e.chainId;
                    H({
                        action: o.CA.TRANSACTION_ERROR,
                        error: n,
                        errorType: o.QS.UNKNOWN,
                        message: `Unknown error for transaction ${l}`,
                        toast: t,
                        toastDuration: a,
                        indexedTags: {
                            file: "transaction.tsx",
                            txHash: l,
                            chainId: r
                        },
                        level: null != s ? s : "warning",
                        closeProcessingModal: !0,
                        pillar: o.Lj.TRANSACTION,
                        isArtistOnlyPage: !1
                    })
                }), [ed, ec] = n.useState(!1);
                (0, n.useEffect)(() => {
                    K.setOnTransactionProcessing(e => {
                        switch (a(!0), e.contractMethod) {
                            case d.O.SOUND_CREATOR__CREATE_SOUND_AND_MINTS:
                            case d.O.DRAFT_SOUND_CREATOR__CREATE_SOUND_AND_MINTS:
                            case d.O.DRAFT_SPLIT_MAIN__CREATE_SPLIT:
                                break;
                            default:
                                c && p(C.ModalType.PROCESSING, {
                                    body: (0, s.jsx)(g.j, {
                                        heading: I.zf[e.contractMethod],
                                        transactionInfo: {
                                            txHash: e.hash,
                                            chainId: e.chainId
                                        }
                                    })
                                })
                        }
                    }), K.setOnTransactionComplete(async t => {
                        var s;
                        let {
                            lineItem: n,
                            txResponse: l
                        } = t;
                        l && n.status === F.bL.SUCCESS && await ei({
                            contractMethod: n.transaction.contractMethod,
                            tx: l,
                            chainId: n.transaction.chainId
                        });
                        let r = await ((null == l ? void 0 : l.chainId) != null ? $(l.chainId).waitForTransactionReceipt({
                                hash: l.hash
                            }) : null),
                            i = r && function(e) {
                                let t = {};
                                for (let a of e.logs)
                                    if (a.topics[0] === _) try {
                                        let e = (0, A.F)({
                                                abi: M,
                                                data: a.data,
                                                topics: a.topics
                                            }),
                                            s = e.args.tokenId.toString(),
                                            n = t[s];
                                        n ? n.lastTo = e.args.to : t[s] = {
                                            firstFrom: e.args.from,
                                            lastTo: e.args.to,
                                            tokenId: s
                                        }
                                    } catch (e) {
                                        if (!(e instanceof k.lC)) throw e
                                    }
                                return Object.values(t)
                            }(r),
                            o = null !== (s = null == i ? void 0 : i.length) && void 0 !== s ? s : 1;
                        await e({
                            lineItem: n,
                            quantity: o
                        }), es(C.ModalType.PROCESSING), a(!1)
                    }), ed || (ec(!0), X.initialValue.then(e => {
                        e && (K.hydrate(e), K.verifyUnknownTransactions({
                            now: new Date,
                            provider: $
                        }).catch(e => eo({
                            error: e
                        })))
                    }))
                }, [ei, eo, es, e, p, c, $, ed]);
                let eu = (0, w.R)(async function(e) {
                        let {
                            transactionFn: t,
                            showOpenWalletToast: a,
                            chainId: n
                        } = e;
                        a && ee({
                            text: "Please confirm the transaction in your wallet."
                        });
                        try {
                            let e = await t();
                            return e
                        } catch (t) {
                            var r;
                            let e = (0, l.Xy)(t);
                            if (null === (r = e.message) || void 0 === r ? void 0 : r.includes("User denied transaction signature")) ee({
                                text: "Transaction cancelled."
                            });
                            else if ((0, O.e0)(t)) return J(), H({
                                action: o.CA.TRANSACTION_ERROR,
                                error: t,
                                errorType: o.QS.UNKNOWN,
                                level: "warning",
                                message: "Insufficient funds error when prompting user to submit transaction",
                                pillar: o.Lj.TRANSACTION,
                                isArtistOnlyPage: !1,
                                indexedTags: {
                                    file: "transaction.tsx",
                                    context: "promptUserToSubmitTx",
                                    chainId: n
                                }
                            }), p(C.ModalType.INSUFFICIENT_FUNDS, {
                                body: (0, s.jsx)(v.b, {
                                    description: "Insufficient funds to complete transaction. Please add funds to your wallet and try again.",
                                    chainId: n,
                                    primaryButton: null,
                                    secondaryButton: null
                                })
                            }), null;
                            else if ((0, O.Wl)(t) || (0, O.Hy)(t)) {
                                J();
                                let e = "Wallet returned an error. Please try again after logging out and reconnecting";
                                return H({
                                    action: o.CA.TRANSACTION_ERROR,
                                    error: t,
                                    errorType: o.QS.UNKNOWN,
                                    level: "warning",
                                    message: e,
                                    toast: e,
                                    pillar: o.Lj.TRANSACTION,
                                    isArtistOnlyPage: !1,
                                    indexedTags: {
                                        file: "transaction.tsx",
                                        context: "promptUserToSubmitTx",
                                        chainId: n
                                    }
                                }), null
                            } else if ((0, O.L0)(t)) {
                                J();
                                let e = "Transaction pending. Please check your wallet to speed up the pending transaction.";
                                return H({
                                    action: o.CA.TRANSACTION_ERROR,
                                    error: t,
                                    errorType: o.QS.UNKNOWN,
                                    level: "warning",
                                    message: e,
                                    toast: e,
                                    pillar: o.Lj.TRANSACTION,
                                    isArtistOnlyPage: !1,
                                    indexedTags: {
                                        file: "transaction.tsx",
                                        context: "promptUserToSubmitTx",
                                        chainId: n
                                    }
                                }), null
                            } else J(), H({
                                action: o.CA.TRANSACTION_ERROR,
                                error: t,
                                errorType: o.QS.UNKNOWN,
                                level: shouldDowngradeError(t) ? "warning" : "fatal",
                                message: "Error when prompting user to submit transaction",
                                pillar: o.Lj.TRANSACTION,
                                isArtistOnlyPage: !1,
                                indexedTags: {
                                    file: "transaction.tsx",
                                    context: "promptUserToSubmitTx",
                                    chainId: n
                                },
                                toast: {
                                    variant: "error",
                                    text: (0, s.jsxs)(s.Fragment, {
                                        children: ["Something went wrong.", " ", (0, s.jsxs)(f.s, {
                                            absoluteUri: I.Bj.RequestHelp,
                                            className: "font-semibold text-white underline",
                                            type: "external",
                                            children: ["Contact us", " "]
                                        }), "for assistance."]
                                    })
                                }
                            });
                            return es(C.ModalType.PROCESSING_UPLOAD_JOURNEY), es(C.ModalType.PROCESSING), null
                        }
                    }),
                    em = (0, w.R)(async function(e, t) {
                        try {
                            let a = 0;
                            for (;;) try {
                                await t(e);
                                break
                            } catch (e) {
                                if (3 == ++a) throw e
                            }
                        } catch (t) {
                            return J(), H({
                                action: o.CA.TRANSACTION_ERROR,
                                error: t,
                                errorType: o.QS.TRANSACTION_REGISTER_ERROR,
                                message: "Error registering transaction",
                                toast: "Something went wrong while sending the transaction.",
                                indexedTags: {
                                    file: "transaction.tsx",
                                    txHash: e
                                },
                                level: "fatal",
                                pillar: o.Lj.TRANSACTION,
                                isArtistOnlyPage: !1
                            }), !1
                        }
                        return !0
                    }),
                    ep = (0, w.R)(async function(e) {
                        let {
                            contractMethod: t,
                            transactionFn: s,
                            registerTransactionFn: n,
                            releaseId: l,
                            showOpenWalletToast: r = !0,
                            chainId: i,
                            openProcessingModal: d
                        } = e;
                        if (!V) {
                            let e = await q();
                            if (null == e ? void 0 : e.stop) return a(!1), {
                                success: !1,
                                transactionHash: null
                            }
                        }
                        u(d), a(!0);
                        let c = await eu({
                            transactionFn: s,
                            showOpenWalletToast: r,
                            chainId: i
                        });
                        if (!c) return a(!1), {
                            success: !1,
                            transactionHash: c
                        };
                        let m = $(i),
                            p = await (0, D.fs)({
                                chainId: i,
                                hash: c,
                                provider: m
                            }).catch(e => (H({
                                error: e,
                                message: "Error getting transaction response",
                                action: o.CA.TRANSACTION_ERROR,
                                errorType: o.QS.MISSING_TRANSACTION_HASH,
                                isArtistOnlyPage: !1,
                                pillar: "TRANSACTION",
                                level: "warning",
                                toast: "Transaction status not found. Please check your wallet for the transaction"
                            }), null));
                        if (!p) return a(!1), {
                            success: !1,
                            transactionHash: c
                        };
                        try {
                            return n && await em(c, n), await K.onNewTransaction({
                                txResponse: p,
                                contractMethod: t,
                                releaseId: l,
                                provider: m,
                                chainId: i
                            }), {
                                success: !0,
                                transactionHash: p.hash
                            }
                        } catch (e) {
                            return eo({
                                error: e,
                                txHash: p.hash,
                                chainId: i
                            }), {
                                success: !1,
                                transactionHash: p.hash
                            }
                        } finally {
                            es(C.ModalType.PROCESSING), a(!1)
                        }
                    });
                return n.useEffect(() => {
                    U && H({
                        action: o.XW.NFT_UPSERT_ERROR,
                        error: U,
                        errorType: o.QS.NFT_UPSERT_MUTATION_ERROR,
                        message: "Error upserting NFT",
                        level: "fatal",
                        isArtistOnlyPage: !1,
                        pillar: o.Lj.MINTING
                    })
                }, [U, H]), n.useEffect(() => {
                    E && H({
                        action: o.A.RELEASE_DRAFT_DEPLOY_ERROR,
                        error: E,
                        errorType: o.QS.DEPLOY_SPLITS_TRANSACTION_FAILED,
                        message: "Error deploying splits",
                        level: "fatal",
                        pillar: o.Lj.UPLOAD_RELEASE,
                        isArtistOnlyPage: !0
                    })
                }, [H, E]), {
                    safeHandleTransaction: ep,
                    pending: t,
                    purchasedNftInfo: et,
                    resetTransactionStatusStore
                }
            }
            let q = (0, L.f)(useTransactionHandler),
                useTransaction = () => q.useContainer()
        },
        99398: function(e, t, a) {
            "use strict";
            a.d(t, {
                $: function() {
                    return useCheckReferrableRelease
                }
            });
            var s = a(97352),
                n = a(16413),
                l = a(20886);
            a(96960);
            var r = a(96301),
                i = a(89012),
                o = a(60265),
                d = a(3928),
                c = a(42529),
                u = a(64571),
                m = a(16673);
            let p = [];

            function useCheckReferrableRelease(e) {
                var t;
                let {
                    release: a
                } = e, {
                    authUserAddress: x = null
                } = (0, r.aC)(), h = (0, d.S3c)(d.XVp, a), f = (0, m.v)({
                    release: h
                }), v = f || !!(null == h ? void 0 : h.publicAffiliateFeeBPS) && BigInt(null !== (t = null == h ? void 0 : h.price) && void 0 !== t ? t : 0) > 0 && (!!h.samAddress || !h.isFirstPhaseCompleted), {
                    referral: g
                } = (0, o.UO)(), b = null == g ? void 0 : g.toLowerCase(), y = (0, s.useMemo)(() => x === b ? [x] : p, [x, b]), C = (0, s.useMemo)(() => h ? (0, n.Z)([...y, ...h.artist.user.publicAddress, ...h.credits.map(e => e.publicAddress)]) : y, [h, y]), S = (0, s.useMemo)(() => {
                    if (!x || !h) return !0;
                    if (h.artist.user.publicAddress === x) return !1;
                    for (let {
                            publicAddress: e
                        } of h.credits)
                        if (e === x) return !1;
                    return !0
                }, [x, h]), j = (0, c.R)(e => {
                    var t;
                    let a = null === (t = o.M8.referral) || void 0 === t ? void 0 : t.toLowerCase();
                    if (!a && e) {
                        let {
                            referralData: t,
                            referralType: s
                        } = e;
                        s === i.MintReferralType.Playlist ? a = t.playlistUserAddress : s === i.MintReferralType.Post ? a = t.postUserAddress : (0, u.y0)(s)
                    }
                    let s = a && (0, l.U)(a) ? a : void 0,
                        n = s && C.includes(s) ? void 0 : s;
                    return n
                });
                return {
                    isReleaseReferrable: v,
                    isAuthShareReferrable: S,
                    unreferrableCollectAddresses: C,
                    isShareReferrable: v && S,
                    getAffiliate: j
                }
            }
        },
        6911: function(e, t, a) {
            "use strict";
            a.d(t, {
                F: function() {
                    return useCopy
                }
            });
            var s = a(97352),
                n = a(75747),
                l = a(42529);

            function useCopy(e) {
                let {
                    text: t,
                    successMessage: a
                } = e, {
                    openToast: r
                } = (0, n.useToast)(), i = (0, s.useRef)(void 0), [o, d] = (0, s.useState)(!1), c = (0, l.R)(async () => {
                    if (t) {
                        try {
                            await navigator.clipboard.writeText(t)
                        } catch (e) {
                            r({
                                text: "Copy failed. Check browser permissions.",
                                variant: "error"
                            });
                            return
                        }
                        d(!0), r({
                            text: a
                        }), clearTimeout(i.current), i.current = setTimeout(() => {
                            d(!1)
                        }, 1e3)
                    }
                });
                return {
                    isCopied: o,
                    copy: c
                }
            }
        },
        12879: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return useElementSize
                }
            });
            var s = a(97352),
                n = a(83835);
            let useElementSize = () => {
                let e = (0, s.useRef)(null),
                    [t, a] = (0, s.useState)({
                        width: 0,
                        height: 0,
                        offsetHeight: 0,
                        offsetWidth: 0
                    });
                return (0, n.G)(() => {
                    let updateSize = t => {
                        var s, n, l, r, i;
                        let {
                            width: o,
                            height: d
                        } = null !== (l = null == t ? void 0 : t.getBoundingClientRect()) && void 0 !== l ? l : {
                            width: 0,
                            height: 0
                        }, c = null !== (r = null === (s = e.current) || void 0 === s ? void 0 : s.offsetWidth) && void 0 !== r ? r : 0, u = null !== (i = null === (n = e.current) || void 0 === n ? void 0 : n.offsetHeight) && void 0 !== i ? i : 0;
                        a({
                            width: o,
                            height: d,
                            offsetWidth: c,
                            offsetHeight: u
                        })
                    };
                    updateSize(e.current);
                    let t = new ResizeObserver(e => {
                        let t = e[0];
                        t && updateSize(t.target)
                    });
                    return e.current && t.observe(e.current), () => t.disconnect()
                }, []), [e, t]
            }
        },
        4657: function(e, t, a) {
            "use strict";
            a.d(t, {
                v: function() {
                    return useGetDominantBackgroundColor
                }
            });
            var s = a(97352),
                n = a(52814),
                l = a(85846);
            let r = "#1F1F1F",
                i = (0, n.Z)(l.EX).getBrightness();

            function useGetDominantBackgroundColor(e) {
                let {
                    dominantColor: t
                } = e, a = (0, s.useMemo)(() => t ? (0, n.Z)(t).getBrightness() : null, [t]), l = null !== a && a <= i ? r : t;
                return null != l ? l : r
            }
        },
        16673: function(e, t, a) {
            "use strict";
            a.d(t, {
                v: function() {
                    return useIsReleaseSuperMinterV2
                }
            });
            var s = a(97352);
            a(96960);
            var n = a(36959),
                l = a(3928);

            function useIsReleaseSuperMinterV2(e) {
                let {
                    release: t
                } = e, a = (0, l.S3c)(l.H0T, t);
                return (0, s.useMemo)(() => {
                    var e;
                    let t = n.fX.toLowerCase();
                    return null == a ? void 0 : null === (e = a.listing) || void 0 === e ? void 0 : e.schedules.some(e => e.minterAddress.toLowerCase() === t)
                }, [a])
            }
        },
        14042: function(e, t, a) {
            "use strict";
            a.d(t, {
                w: function() {
                    return useNftOwnershipData
                }
            }), a(96960);
            var s = a(96301),
                n = a(36750),
                l = a(3928);

            function useNftOwnershipData(e) {
                var t, a;
                let {
                    releaseId: n
                } = e, {
                    authUser: r
                } = (0, s.aC)(), {
                    data: i,
                    isFetching: o,
                    refetch: d
                } = (0, l.aM2)(l.A2U, {
                    variables: !!n && !!r && {
                        releaseId: n,
                        userId: r.id
                    },
                    staleTime: 0
                }), c = null == i ? void 0 : null === (a = i.data.user) || void 0 === a ? void 0 : null === (t = a.nftsPaginated.edges[0]) || void 0 === t ? void 0 : t.node;
                return {
                    tokensOwnedByUserLoading: o,
                    isReleaseOwner: null != c,
                    nftOwnedByUser: c,
                    refetchOwnedNft: d
                }
            }(0, n.c)({
                trigger: [l.SGu],
                refetch: [l.A2U]
            })
        },
        25989: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return usePrefetchEmbed
                }
            });
            var s = a(97352),
                n = a(76348),
                l = a(29009);
            let r = {};

            function usePrefetchEmbed(e) {
                let {
                    releaseId: t,
                    playlistId: a
                } = e;
                (0, s.useEffect)(() => {
                    t && !r[t] && (r[t] = !0, fetch((0, l.VL)({
                        releaseId: t
                    }), {
                        method: "GET",
                        mode: "cors"
                    }).catch(e => {
                        n.Tb(e, {
                            level: "warning"
                        })
                    }))
                }, [t]), (0, s.useEffect)(() => {
                    a && !r[a] && (r[a] = !0, Promise.all([fetch((0, l.i4)({
                        playlistId: a,
                        theme: "light"
                    }), {
                        method: "GET",
                        mode: "cors"
                    }), fetch((0, l.i4)({
                        playlistId: a,
                        theme: "dark"
                    }), {
                        method: "GET",
                        mode: "cors"
                    })]).catch(e => {
                        n.Tb(e, {
                            level: "warning"
                        })
                    }))
                }, [a])
            }
        },
        83666: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return useSelectReleaseNft
                }
            });
            var s = a(97352);
            a(96960);
            var n = a(3928),
                l = a(96301);
            let useReleaseTokens = e => {
                    var t;
                    let {
                        releaseId: a
                    } = e, {
                        authUser: s
                    } = (0, l.aC)(), r = null !== (t = null == s ? void 0 : s.id) && void 0 !== t ? t : "", {
                        orderedList: i,
                        loadMoreNextPage: o,
                        isLoading: d
                    } = (0, n.NSZ)(n.fz_, {
                        enabled: !!r,
                        filterQueryKey: {
                            userId: r,
                            releaseId: a
                        },
                        getNextPageParam(e) {
                            var t;
                            let {
                                data: a
                            } = e;
                            return (null === (t = a.user) || void 0 === t ? void 0 : t.nftsPaginated.pageInfo.hasNextPage) && {
                                after: a.user.nftsPaginated.pageInfo.endCursor
                            }
                        },
                        variables(e) {
                            let {
                                pageParam: t
                            } = e;
                            return {
                                filter: {
                                    releases: [a]
                                },
                                id: r,
                                pagination: {
                                    after: (null == t ? void 0 : t.after) || null,
                                    first: 50,
                                    sort: {
                                        serialNumber: n.Asd.Asc
                                    }
                                }
                            }
                        },
                        list(e) {
                            let {
                                user: t
                            } = e;
                            return null == t ? void 0 : t.nftsPaginated.edges.map(e => e.node)
                        },
                        uniq(e) {
                            let {
                                id: t
                            } = e;
                            return t
                        },
                        staleTime: 0
                    });
                    return {
                        nftsOwnedByUser: i,
                        loadMore: o,
                        loading: d
                    }
                },
                useSelectReleaseNft = e => {
                    let {
                        releaseId: t,
                        preselectedNftId: a
                    } = e, {
                        nftsOwnedByUser: l,
                        loading: r,
                        loadMore: i
                    } = useReleaseTokens({
                        releaseId: t
                    }), {
                        data: o,
                        isLoading: d
                    } = (0, n.aM2)(n.e8z, {
                        variables: {
                            id: null != a ? a : ""
                        },
                        enabled: !!a,
                        staleTime: 0
                    }), [c, u] = (0, s.useState)(a), [m, p] = (0, s.useState)(0), [x, h] = (0, s.useState)({});
                    (0, s.useEffect)(() => {
                        let e = {},
                            t = null == o ? void 0 : o.data.nftFromId;
                        t && (e[t.id] = t, c && (u(void 0), p(0))), l.forEach(t => {
                            e[t.id] || (e[t.id] = t)
                        }), h(e)
                    }, [c, l, o]);
                    let f = (0, s.useMemo)(() => Object.values(x), [x]),
                        v = (0, s.useMemo)(() => c ? void 0 : f[m], [c, f, m]);
                    return {
                        nftsOwnedByUser: f,
                        loadMore: i,
                        isLoading: r || d,
                        setSelectedNftIndex: p,
                        selectedNftIndex: m,
                        selectedNft: v
                    }
                }
        },
        58038: function(e, t, a) {
            "use strict";
            a.d(t, {
                i: function() {
                    return useSongSlots
                }
            });
            var s = a(97352),
                n = a(47226),
                l = a(3928),
                r = a(64571);
            let useSongSlots = e => {
                var t, a;
                let {
                    releaseId: i,
                    selectedNft: o
                } = e, [d, c] = (0, s.useState)(null !== (t = null == o ? void 0 : o.songSlot) && void 0 !== t ? t : null);
                (0, s.useEffect)(() => {
                    (null == o ? void 0 : o.songSlot) && c(o.songSlot)
                }, [o]);
                let {
                    data: u,
                    isLoading: m
                } = (0, l.aM2)(l.izN, {
                    variables: {
                        releaseId: i
                    },
                    staleTime: 0
                }), p = null == u ? void 0 : u.data.claimedSongSlots, x = (0, r.ku)({
                    claimedSlots: null !== (a = null == p ? void 0 : p.length) && void 0 !== a ? a : 0,
                    totalSlots: n.ug
                });
                return {
                    claimedSongSlots: p,
                    setSongSlot: c,
                    songSlot: d,
                    canOverwriteSlot: x,
                    isLoading: m
                }
            }
        },
        33488: function(e, t, a) {
            "use strict";
            a.d(t, {
                E5: function() {
                    return newSpotifyConnectState
                },
                LJ: function() {
                    return p
                },
                c6: function() {
                    return useSpotifyAuth
                },
                z9: function() {
                    return spotifyAuthorizationLink
                }
            });
            var s = a(97352),
                n = a(31265),
                l = a(80834);
            a(96960);
            var r = a(60589),
                i = a(96301),
                o = a(17480),
                d = a(3928),
                c = a(58102),
                u = a(17941);
            let m = (0, r.QQ)("3d2471fd9f9c4d76941c529c946ba90c", "Missing SPOTIFY_CLIENT_ID"),
                p = (0, c.U)({
                    schema: l.Ry({
                        state: l.Z_(),
                        userId: l.Z_().uuid(),
                        overrideAccount: l.O7().default(!1),
                        justConnected: l.O7().default(!1)
                    }),
                    key: "spotify-connect-state",
                    eager: !0
                });

            function resetSpotifyConnectState() {
                var e, t;
                if (!p.state.value) return;
                let a = null === (t = o.UQ.state.value) || void 0 === t ? void 0 : null === (e = t.data.authUser) || void 0 === e ? void 0 : e.id;
                a && p.state.value.userId !== a && newSpotifyConnectState({
                    userId: a,
                    overrideAccount: !1,
                    justConnected: !1
                })
            }

            function newSpotifyConnectState(e) {
                let {
                    userId: t,
                    overrideAccount: a,
                    justConnected: s
                } = e;
                return p.set({
                    state: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16;
                        return Math.round(Math.pow(36, e + 1) - Math.random() * Math.pow(36, e)).toString(36).slice(1)
                    }(),
                    userId: t,
                    overrideAccount: a,
                    justConnected: s
                })
            }

            function useSpotifyAuth() {
                let e = (0, u.a)(),
                    {
                        isLoading: t,
                        value: a
                    } = p.useStore(),
                    n = null == a ? void 0 : a.state,
                    {
                        isAuthenticatedWithAPI: l,
                        authUser: r
                    } = (0, i.aC)(),
                    o = null == r ? void 0 : r.id,
                    {
                        data: c = !1,
                        isInitialLoading: m
                    } = (0, d.aM2)(d.N8R, {
                        staleTime: 0,
                        enabled: l,
                        filterQueryKey: {
                            authUserId: o
                        },
                        select: e => null != e.data.spotifyConnection
                    });
                return (0, s.useMemo)(() => !e || t || m ? {
                    type: "loading"
                } : c ? {
                    type: "already-connected"
                } : n && l && o ? {
                    type: "spotify-auth",
                    link: spotifyAuthorizationLink({
                        state: n
                    }),
                    authUserId: o
                } : {
                    type: "not-authenticated"
                }, [e, t, m, c, n, l, o])
            }

            function spotifyAuthorizationLink(e) {
                let {
                    state: t
                } = e, a = new URL("https://accounts.spotify.com/authorize");
                return a.searchParams.append("client_id", m), a.searchParams.append("response_type", "code"), a.searchParams.append("redirect_uri", new URL("/spotify-callback", window.location.href).href), a.searchParams.append("state", t), a.searchParams.append("scope", "user-library-read user-library-modify"), a.href
            }(0, n.Ld)(o.UQ.state, resetSpotifyConnectState), (0, n.Ld)(p.state, resetSpotifyConnectState), o.UQ.initialValue.then(e => {
                if (!(null == e ? void 0 : e.data.authUser)) return;
                let t = e.data.authUser.id;
                p.initialValue.then(e => {
                    e || newSpotifyConnectState({
                        userId: t,
                        overrideAccount: !1,
                        justConnected: !1
                    })
                })
            }), p.onTabSync(() => {
                (0, d.jS8)({
                    operations: [d.N8R]
                })
            })
        },
        38543: function(e, t, a) {
            "use strict";
            a.d(t, {
                p: function() {
                    return useTransactionFlow
                }
            });
            var s = a(16356);
            a(97352);
            var n = a(99686),
                l = a(54668),
                r = a(89412);

            function ReconnectWallet(e) {
                let {
                    handleSignin: t
                } = e, {
                    closeCancelModal: a
                } = (0, r.useSecondaryModal)();
                return (0, s.jsx)(l.Z, {
                    closeModal: a,
                    title: "Reconnect your wallet",
                    bodyWithoutPaddingBottom: !0,
                    body: (0, s.jsxs)("div", {
                        className: "flex flex-col gap-6",
                        children: [(0, s.jsx)("p", {
                            className: "font-base text-base800",
                            children: "We were unable to authenticate your account because you may have locked or logged out of your wallet."
                        }), (0, s.jsx)("p", {
                            className: "font-base text-base800",
                            children: "Please sign in with your wallet to continue."
                        }), (0, s.jsx)(n.m, {
                            label: "Sign in",
                            variant: "primary",
                            onClick: t
                        })]
                    })
                })
            }
            var i = a(96301),
                o = a(58876),
                d = a(21956),
                c = a(37464),
                u = a(42529);

            function useTransactionFlow(e) {
                let {
                    chainId: t,
                    onAuth: a,
                    onProcessStart: n,
                    onChainSwitchFail: l
                } = e, {
                    openModal: m,
                    closeCancelModal: p
                } = (0, r.useSecondaryModal)(), {
                    authUser: x
                } = (0, i.aC)(), {
                    loginRequireConnection: h,
                    walletAddress: f,
                    walletLogout: v,
                    expectMatchingChain: g
                } = (0, o.Qw)(), b = (0, c.I)(a), y = (0, c.I)(l), C = (0, c.I)(n), S = (0, u.R)(async () => {
                    if (!t) return {
                        success: !1,
                        chainId: null
                    };
                    let e = g(t);
                    if (e.stop) return y.current(), {
                        success: !1,
                        chainId: null
                    };
                    if (e.switching) try {
                        await e.switching
                    } catch (e) {
                        return y.current(e), {
                            success: !1,
                            chainId: null
                        }
                    }
                    return {
                        success: !0,
                        chainId: t
                    }
                }), j = (0, u.R)(async function() {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (p(), f && x && f === x.publicAddress) {
                        let {
                            success: e,
                            chainId: a
                        } = await S();
                        if (!e) return;
                        return b.current({
                            authUser: x,
                            connectedWalletAddress: f,
                            chainId: a
                        }, ...t)
                    }
                    let s = await h();
                    if (null == s ? void 0 : s.stop) {
                        v().catch(() => null);
                        return
                    }
                    let {
                        success: n,
                        chainId: l
                    } = await S();
                    if (n) return b.current({
                        authUser: s.authUser,
                        connectedWalletAddress: s.connectedWalletAddress,
                        chainId: l
                    }, ...t)
                });
                return (0, u.R)(async function() {
                    for (var e, t = arguments.length, a = Array(t), n = 0; n < t; n++) a[n] = arguments[n];
                    if (null === (e = C.current) || void 0 === e || e.call(C), !x) {
                        (0, d.SR)();
                        return
                    }
                    if (f && x.publicAddress === f) {
                        let {
                            success: e,
                            chainId: t
                        } = await S();
                        if (!e) return;
                        return b.current({
                            authUser: x,
                            connectedWalletAddress: f,
                            chainId: t
                        }, ...a)
                    }
                    m("RECONNECT_WALLET", {
                        body: (0, s.jsx)(ReconnectWallet, {
                            handleSignin: () => j(...a)
                        })
                    })
                })
            }
        },
        10306: function(e, t, a) {
            "use strict";
            a.d(t, {
                _: function() {
                    return useUrlWithAuthReferral
                }
            });
            var s = a(97352),
                n = a(29009),
                l = a(96301),
                r = a(95390),
                i = a(6911);

            function useUrlWithAuthReferral(e) {
                let {
                    url: t,
                    source: a,
                    isReferrable: o
                } = e, {
                    authUserAddress: d = null
                } = (0, l.aC)(), c = (0, s.useMemo)(() => {
                    if (null != t) return (0, r.fu)((0, n.$F)(t, {
                        referralAddress: o ? d : null,
                        source: a
                    })).href
                }, [t, o, d, a]), {
                    copy: u,
                    isCopied: m
                } = (0, i.F)({
                    text: c,
                    successMessage: "Link copied to clipboard"
                });
                return {
                    isCopied: m,
                    copyUrlWithReferral: u,
                    urlWithReferral: c,
                    referralAddress: o ? d : null
                }
            }
        },
        81845: function(e, t, a) {
            "use strict";
            a.d(t, {
                f: function() {
                    return useValidateWalletOrEns
                }
            });
            var s = a(18782),
                n = a(20886),
                l = a(14449),
                r = a(25533),
                i = a(85846);

            function useValidateWalletOrEns(e) {
                let {
                    input: t
                } = e, {
                    provider: a
                } = (0, r.useChainProvider)(), o = (0, s.a)({
                    queryKey: ["validateWalletOrEnsInput", t],
                    queryFn: async () => {
                        if (!t || "" === t) return {
                            type: "empty-input"
                        };
                        let e = t.toLowerCase();
                        if (e.startsWith("0x") && (0, n.U)(e)) return {
                            type: "address",
                            value: e
                        };
                        if (!e.endsWith(".eth")) return {
                            type: "invalid-address"
                        }; {
                            let t = a(i.K_.eth);
                            try {
                                let a = await t.getEnsAddress({
                                    name: (0, l.F)(e)
                                });
                                if (a) return {
                                    type: "address",
                                    value: a
                                };
                                return {
                                    type: "invalid-ens"
                                }
                            } catch {
                                return {
                                    type: "invalid-ens"
                                }
                            }
                        }
                    },
                    keepPreviousData: !0
                });
                return o
            }
        },
        43633: function(e, t, a) {
            "use strict";
            a.d(t, {
                DI: function() {
                    return setStatsigUser
                },
                vG: function() {
                    return useStatsigUser
                }
            });
            var s = a(31265),
                n = a(63558);
            let l = (0, s.sj)({
                user: {
                    userID: "anonymous",
                    appVersion: "39.27.1"
                }
            });

            function setStatsigUser(e) {
                let t = (0, s.CO)(l);
                l.user = { ...t.user,
                    ...e
                }
            }

            function useStatsigUser() {
                let {
                    user: e
                } = (0, n.R)(l);
                return {
                    user: e
                }
            }
        },
        42916: function(e, t, a) {
            "use strict";
            a.d(t, {
                f: function() {
                    return isOpenEdition
                }
            });
            var s = a(47226);
            let isOpenEdition = e => e >= s.Yt
        },
        80403: function(e, t, a) {
            "use strict";
            a.d(t, {
                G: function() {
                    return expectChainType
                }
            });
            var s = a(14906),
                n = a(82472);
            let l = (0, s.ZN)(n.Jb);

            function expectChainType(e) {
                if (!l(e)) throw Error(`Chain ${e} still not supported on backend schema`);
                return e
            }
        },
        17050: function(e, t, a) {
            "use strict";
            a.d(t, {
                a: function() {
                    return mergeUniqLists
                }
            });
            var s = a(62323),
                n = a(5635);

            function mergeUniqLists(e) {
                let {
                    current: t = [],
                    incoming: a = [],
                    uniq: l
                } = e, r = (0, s.Z)(a, l);
                return (0, n.Z)([...t.map(e => r[l(e)] || e), ...a], l)
            }
        },
        31251: function(e, t, a) {
            "use strict";
            a.d(t, {
                Hy: function() {
                    return isInternalRpcError
                },
                L0: function() {
                    return isTransactionNotFoundError
                },
                Wl: function() {
                    return isUnknownRpcError
                },
                e0: function() {
                    return isInsufficientFundsError
                }
            });
            var s = a(89534),
                n = a(3741),
                l = a(79930),
                r = a(94069);

            function isInsufficientFundsError(e) {
                return e instanceof s.G && e.walk(e => e instanceof n.C_) instanceof n.C_
            }

            function isUnknownRpcError(e) {
                return e instanceof s.G && e.walk(e => e instanceof l.ir) instanceof l.ir
            }

            function isInternalRpcError(e) {
                return e instanceof s.G && e.walk(e => e instanceof l.XS) instanceof l.XS
            }

            function isTransactionNotFoundError(e) {
                return e instanceof s.G && e.walk(e => e instanceof r.Bh) instanceof r.Bh
            }
        },
        51662: function() {}
    }
]);