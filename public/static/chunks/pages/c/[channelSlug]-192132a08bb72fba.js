(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5042, 8943], {
        54424: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/c/[channelSlug]", function() {
                return n(97021)
            }])
        },
        31511: function(e, t, n) {
            "use strict";
            n.d(t, {
                VN: function() {
                    return getFields
                },
                V_: function() {
                    return useChannelSettingsPath
                },
                mZ: function() {
                    return l
                },
                og: function() {
                    return useChannelsEnabled
                }
            });
            var a = n(78608),
                s = n(3928),
                r = n(85846);
            let l = `1. Only posts relevant to the channel${r.A_}2. No self-promotion${r.A_}3. No spamming${r.A_}4. Be kind and civil — no hate speech`;

            function getFields(e) {
                var t, n, a;
                let {
                    channel: r,
                    channelCurators: i
                } = e;
                return {
                    name: r.name,
                    slug: r.nameSlug,
                    description: r.description,
                    rules: (null === (t = r.rules) || void 0 === t ? void 0 : t.trim()) || l,
                    coverImage: (null === (n = r.coverImage) || void 0 === n ? void 0 : n.id) ? {
                        cdnUrl: r.coverImage.url,
                        mediaType: s.DDH.ChannelCoverImage,
                        uploadKey: r.coverImage.key
                    } : null,
                    profileImage: (null === (a = r.profileImage) || void 0 === a ? void 0 : a.id) ? {
                        cdnUrl: r.profileImage.url,
                        mediaType: s.DDH.ChannelProfileImage,
                        uploadKey: r.profileImage.key
                    } : null,
                    moderators: i.filter(e => "MODERATOR" === e.role).flatMap(e => {
                        var t;
                        let {
                            user: n,
                            role: a
                        } = e;
                        return {
                            id: n.id,
                            role: a,
                            avatarUri: null === (t = n.avatar) || void 0 === t ? void 0 : t.url,
                            publicAddress: n.publicAddress,
                            webappUri: n.artist ? n.artist.webappUri : n.webappUri,
                            displayName: n.artist ? n.artist.name : n.displayName,
                            isArtist: !!n.artist
                        }
                    }),
                    telegramUrl: r.telegramUrl,
                    tiktokUrl: r.tiktokUrl,
                    twitterUrl: r.twitterUrl,
                    websiteUrl: r.websiteUrl,
                    discordUrl: r.discordUrl
                }
            }

            function useChannelSettingsPath(e) {
                return `/c/${e}/settings`
            }

            function useChannelsEnabled() {
                let {
                    value: e,
                    isLoading: t
                } = (0, a.useGate)(r.ln.CHANNELS);
                return {
                    enabled: e,
                    isLoading: t
                }
            }
        },
        54789: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return useChannelStats
                }
            });
            var a = n(19791),
                s = n(3928);

            function useChannelStats(e) {
                var t, n;
                let {
                    channelId: r
                } = e, {
                    data: l,
                    isLoading: i
                } = (0, s.aM2)(s.fUv, {
                    variables: !!r && {
                        input: {
                            channelIds: [r]
                        }
                    },
                    enabled: !!r,
                    staleTime: 1 / 0
                }), o = (0, a.CC)(null == l ? void 0 : l.data.channelStats, e => e.channelId === r && e), d = null !== (t = null == o ? void 0 : o.memberCount) && void 0 !== t ? t : 0, c = null !== (n = null == o ? void 0 : o.postCount) && void 0 !== n ? n : 0, u = null == o ? void 0 : o.joinStatus, m = null == o ? void 0 : o.notificationStatus;
                return {
                    channelStats: o,
                    memberCount: d,
                    postCount: c,
                    joinStatus: u,
                    notificationStatus: m,
                    isLoading: i
                }
            }
        },
        53259: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return useJoinOrLeaveChannel
                }
            });
            var a = n(16356),
                s = n(97352),
                r = n(58658),
                l = n(31511),
                i = n(54789),
                o = n(69598),
                d = n(73950),
                c = n(76292),
                u = n(54668),
                m = n(22181),
                h = n(3928),
                x = n(42529);

            function ChannelRulesModal(e) {
                var t, n;
                let {
                    channelId: r
                } = e, [p, f] = (0, s.useState)(!1), {
                    closeCancelModal: v
                } = (0, m.useModal)(), {
                    joinStatus: g,
                    isLoading: b
                } = (0, i.v)({
                    channelId: r
                }), {
                    data: C,
                    error: j,
                    isLoading: w
                } = (0, h.aM2)(h.dVQ, {
                    variables: {
                        channelId: r
                    },
                    staleTime: 0,
                    retry: 3
                }), N = null == C ? void 0 : C.data.channelById, L = null !== (n = null == N ? void 0 : null === (t = N.profileImage) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : "/images/sound_letter_s.svg", {
                    isLoading: y,
                    joinOrLeaveChannel: S
                } = useJoinOrLeaveChannel({
                    channelId: r,
                    joinStatus: g
                }), M = b || w, k = (0, x.R)(async () => {
                    await S(), v()
                });
                (0, s.useEffect)(() => {
                    !w && j && f(!0)
                }, [j, w]);
                let E = (0, a.jsx)("div", {
                        className: "relative mb-3 mt-6 flex w-full flex-col items-center justify-center gap-y-4",
                        children: (0, a.jsx)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-y-2 text-base800",
                            children: (0, a.jsxs)("p", {
                                className: "text-center font-base text-base-l font-normal text-base800",
                                children: ["There was an error loading the channel rules.", (0, a.jsx)("br", {}), "Please try again."]
                            })
                        })
                    }),
                    A = (0, a.jsxs)("div", {
                        className: "relative mb-3 flex w-full flex-col items-center justify-center gap-y-4",
                        children: [(0, a.jsx)("div", {
                            className: "flex h-[68px] w-[68px] items-center justify-center",
                            children: M ? (0, a.jsx)("div", {
                                className: "h-[68px] w-[68px] animate-pulse rounded-md bg-neutral200"
                            }) : (0, a.jsx)(d.G, {
                                alt: "Channel Profile Image",
                                className: "rounded-md",
                                width: 68,
                                height: 68,
                                placeholder: "blur",
                                blurDataURL: (0, c.Z)(68, 68),
                                src: L
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex w-full flex-col items-center justify-center gap-y-2 text-base800",
                            children: [M ? (0, a.jsx)("div", {
                                className: "h-6 w-[60%] animate-pulse rounded-md bg-neutral200"
                            }) : (0, a.jsxs)("h2", {
                                className: "font-title text-title-m font-medium sm:text-title-l ",
                                children: ["Welcome to ", (null == N ? void 0 : N.name) || "the channel"]
                            }), (0, a.jsxs)("p", {
                                className: "text-center font-base text-base-l font-normal text-base800",
                                children: ["This is a space to discuss artists,", (0, a.jsx)("br", {}), "songs, and playlists."]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-2 flex w-full flex-col gap-y-6",
                            children: [(0, a.jsxs)("div", {
                                className: "flex w-full flex-col gap-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex items-center gap-1.5 text-base800",
                                    children: (0, a.jsx)("h4", {
                                        className: "font-base text-base-l font-bold",
                                        children: "Channel rules"
                                    })
                                }), M ? (0, a.jsxs)("div", {
                                    className: "flex w-[80%] flex-col gap-1",
                                    children: [(0, a.jsx)("div", {
                                        className: "h-4 w-full animate-pulse rounded-md bg-neutral200"
                                    }), (0, a.jsx)("div", {
                                        className: "h-4 w-full animate-pulse rounded-md bg-neutral200"
                                    }), (0, a.jsx)("div", {
                                        className: "h-4 w-full animate-pulse rounded-md bg-neutral200"
                                    }), (0, a.jsx)("div", {
                                        className: "h-4 w-full animate-pulse rounded-md bg-neutral200"
                                    })]
                                }) : (0, a.jsx)("span", {
                                    className: "h-auto whitespace-pre-wrap font-base text-base-l font-normal text-base800",
                                    children: (null == N ? void 0 : N.rules) || l.mZ
                                })]
                            }), (0, a.jsx)("p", {
                                className: "font-base text-base-l font-normal text-base800",
                                children: "By joining, you agree to the channel rules."
                            })]
                        })]
                    });
                return (0, a.jsx)(u.Z, {
                    body: p ? E : A,
                    closeModal: v,
                    callToAction: p ? (0, a.jsx)(o.z, {
                        variant: "primary",
                        size: "L",
                        label: "Close",
                        onClick: v,
                        fullWidth: !0
                    }) : (0, a.jsx)(o.z, {
                        variant: "primary",
                        size: "L",
                        label: "Join",
                        onClick: k,
                        loading: y || M,
                        disabled: "JOINED" === g,
                        fullWidth: !0
                    })
                })
            }
            var p = n(96301),
                f = n(21956),
                v = n(75747),
                g = n(36750),
                b = n(64398),
                C = n(14034);

            function useJoinOrLeaveChannel(e) {
                let {
                    channelId: t,
                    joinStatus: n
                } = e, {
                    authUser: s
                } = (0, p.aC)(), l = (0, b.S)(), {
                    openToast: i
                } = (0, v.useToast)(), {
                    openModal: o
                } = (0, m.useModal)(), {
                    mutateAsync: d,
                    isLoading: c
                } = (0, h.Dbo)(h.Rl8, {
                    retry: 5
                }), u = (0, x.R)(() => {
                    o(m.ModalType.CHANNEL_RULES, {
                        body: (0, a.jsx)(ChannelRulesModal, {
                            channelId: t
                        })
                    })
                }), g = (0, x.R)(async () => {
                    if (!s) {
                        (0, f.SR)();
                        return
                    }
                    try {
                        let e = await d({
                            channelId: t,
                            join: "JOINED" !== n
                        });
                        if ((0, C.uH)({
                                event: "JOINED" === n ? "User left channel" : "User joined channel",
                                properties: {
                                    associationType: "Channel",
                                    associationId: t,
                                    channelId: t
                                }
                            }), "MutationSetUserJoinStatusOnChannelSuccess" === e.data.setUserJoinStatusOnChannel.__typename) {
                            i({
                                text: `You've ${"JOINED"===n?"left":"joined"} the channel`,
                                variant: "success"
                            });
                            return
                        }
                        if ("NotFoundError" === e.data.setUserJoinStatusOnChannel.__typename) throw Error("The channel does not exist.")
                    } catch (t) {
                        let e = "Failed to join/leave channel";
                        l({
                            action: r.L3.CHANNEL_SETTINGS_SAVE_FAILED,
                            error: t,
                            errorType: r.QS.CHANNELS,
                            message: e,
                            toast: e,
                            level: "error",
                            isArtistOnlyPage: !1,
                            pillar: r.Lj.CHANNELS
                        })
                    }
                });
                return {
                    joinOrLeaveChannel: g,
                    isLoading: c,
                    showRulesModal: u
                }
            }(0, g.c)({
                trigger: [h.Rl8],
                refetch: [h.fUv, h.rUc, h.Av7, h.RED]
            })
        },
        61450: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return FeedDivider
                }
            });
            var a = n(16356);
            n(97352);
            var s = n(44361);
            let FeedDivider = e => {
                let {
                    className: t
                } = e;
                return (0, a.jsx)("div", {
                    className: (0, s.m)("flex h-[1px] w-full flex-col items-center justify-center overflow-visible py-5", t),
                    children: (0, a.jsx)("div", {
                        className: "h-[1px] w-full flex-shrink-0 bg-base200"
                    })
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
            var a = n(16356);
            n(97352);
            var s = n(78924);
            let Box3D = e => (0, a.jsxs)("svg", {
                width: 116,
                height: 124,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M98.182 95.23V42.41l-8.814-5.086-9.338 5.25V31.935l-9.338-5.389L52.414 16 15.457 37.324 6.646 42.41v10.425l8.814 5.262-8.814 5.163v31.97l8.814 5.086 27.319 15.764 9.636 5.56 9.635-5.56v-11.12l8.643 6.133 18.676-10.777 8.814-5.086ZM62.05 73.586 80.262 63.26v21.247L62.049 94.833V73.586Zm-19.271 0L24.565 63.26v21.247l18.213 10.326V73.586Zm27.914-25.764L52.414 58.097l-18.28-10.275 18.28-10.498 18.278 10.498Z",
                    fill: "#fff"
                }), (0, a.jsx)("path", {
                    d: "M98.182 42.41v52.82l-8.814 5.086-18.676 10.777m27.49-68.683-8.814 5.086-18.676 10.777-8.643 4.987-9.636 5.56m45.77-26.41-8.815-5.086-9.338 5.25M52.413 121.64V68.82m0 52.82-9.635-5.56-27.32-15.764-8.813-5.086V63.26m45.768 58.38 9.636-5.56v-11.12M6.645 42.41l8.814 5.086L42.778 63.26l9.636 5.56M6.643 42.41v10.425l8.815 5.262M6.645 42.41l8.814-5.086L52.413 16l18.28 10.547 9.337 5.389M15.458 58.097l9.107 5.163m-9.107-5.163L6.646 63.26m8.814 26.41 27.319 15.29V94.833m-27.32-5.163 9.107-5.163m-9.107 5.163V68.82m64.804-5.56L62.049 73.586v21.247M80.262 63.26l9.106-5.163V89.67m-9.106-26.41v21.247m0 0 9.106 5.163m-9.106-5.163L62.049 94.833M24.565 63.26l18.213 10.326v21.247M24.565 63.26v21.247m0-21.247-9.107 5.56m9.107 15.687 18.213 10.326m46.59-5.163-18.676 10.646m0 10.777v-10.777m0 10.777-8.643-6.133m8.643-4.644-8.643-5.483m0 0v10.127m-46.59-36.14-8.814-5.56m45.768-36.713L24.506 42.41l9.629 5.412m18.279-21.275 18.278 9.906m-18.278-9.906v10.777m18.278-.871 9.338-4.517m-9.338 4.517v11.37m9.338-15.887v10.637m-9.338 5.25L52.414 58.096l-18.28-10.275m36.558 0L52.414 37.324m18.278 10.498 9.338-5.249m-27.617-5.249L34.136 47.822",
                    stroke: "#171717",
                    strokeWidth: .5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, a.jsx)("path", {
                    d: "M6.951 112a6.175 6.175 0 0 0 6.014 5.988l.486.012-.486.012A6.175 6.175 0 0 0 6.951 124a6.175 6.175 0 0 0-6.014-5.988L.451 118l.486-.012A6.175 6.175 0 0 0 6.951 112ZM101.5 100a6.175 6.175 0 0 0 6.014 5.988L108 106l-.486.012A6.175 6.175 0 0 0 101.5 112a6.175 6.175 0 0 0-6.014-5.988L95 106l.486-.012A6.175 6.175 0 0 0 101.5 100ZM98.049 0c.264 9.008 7.519 16.24 16.528 16.475l.972.025-.972.025c-9.009.235-16.264 7.467-16.528 16.475-.264-9.008-7.52-16.24-16.529-16.475l-.971-.025.971-.025C90.53 16.24 97.785 9.008 98.05 0Z",
                    fill: "#262626"
                })]
            });
            var r = n(58400),
                l = n(56478),
                i = n(21956),
                o = n(14034);
            let FeedEmpty = () => (0, a.jsx)(s.Vm, {
                    illustration: (0, a.jsx)(l.S, {}),
                    subHeading: "It's a bit quiet in here",
                    text: "Follow a few frens to get some sounds up in this feed. Start by following top artists and collectors!",
                    buttonLabel: "Go to Charts",
                    href: "/charts?type=collectors",
                    divider: !0,
                    mainFeed: !0
                }),
                FeedEmptyAuth = () => (0, a.jsx)(s.Vm, {
                    illustration: (0, a.jsx)(Box3D, {}),
                    subHeading: "Looks like your wallet isn't connected",
                    text: "Sign in to view your personalized feed.",
                    buttonLabel: "Sign in",
                    onClick: function() {
                        (0, o.uH)({
                            event: "Sign in Clicked",
                            properties: {
                                sourceComponent: "Feed"
                            }
                        }), (0, i.SR)()
                    },
                    divider: !0,
                    mainFeed: !0
                }),
                FeedError = e => {
                    let {
                        divider: t = !1,
                        mainFeed: n = !1
                    } = e;
                    return (0, a.jsx)(s.Vm, {
                        illustration: (0, a.jsx)(r.m, {}),
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
            var a = n(16356),
                s = n(97352),
                r = n(72102),
                l = n(78608),
                i = n(56482),
                o = n(84385),
                d = n(58430),
                c = n(66361),
                u = n(52931),
                m = n(96301),
                h = n(21956),
                x = n(22181),
                p = n(42529),
                f = n(14034),
                v = n(81688),
                g = n(85846);

            function PostFloatingButton(e) {
                let {
                    channelId: t,
                    channelSelectorDisabled: n,
                    selectedResource: b,
                    sourceLocation: C
                } = e, {
                    openModal: j
                } = (0, x.useModal)(), {
                    isAuthenticatedWithAPI: w
                } = (0, m.aC)(), {
                    activeTrackId: N
                } = (0, v.PZ)(), {
                    value: L
                } = (0, l.useGate)(g.ln.SPOTIFY_LINKS), y = (0, p.R)(() => {
                    w ? ((0, f.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: C
                        }
                    }), j(x.ModalType.FEED_POST, {
                        body: L ? (0, a.jsx)(u.s, {
                            sourceLocation: C,
                            selectedResource: b,
                            channelId: t,
                            channelSelectorDisabled: n
                        }) : (0, a.jsx)(c.t, {
                            sourceLocation: C,
                            preselectedResource: b,
                            channelId: t
                        }, "post-input")
                    })) : (0, h.SR)()
                }), S = (0, s.useMemo)(() => N ? `calc(${d.U}px + ${o.MINIMIZED_PLAYER_HEIGHT}px + env(safe-area-inset-bottom))` : `calc(${d.U}px + env(safe-area-inset-bottom))`, [N]);
                return (0, a.jsx)("button", {
                    className: "fixed right-4 z-feedPostFloatingButton mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/90 backdrop-blur-sm  transition-all active:scale-95 md:hidden",
                    onClick: y,
                    style: {
                        bottom: S
                    },
                    children: (0, a.jsx)(r.G, {
                        icon: i.r8,
                        fontSize: 20,
                        className: "text-white"
                    })
                })
            }
        },
        70119: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return GroupedUsernames
                }
            });
            var a = n(16356),
                s = n(97352),
                r = n(50868),
                l = n(59287),
                i = n(10228),
                o = n(97946),
                d = n(25347),
                c = n(3928),
                u = n(85846),
                m = n(64571),
                h = n(95390);
            let GroupedUsernames = e => {
                    let {
                        users: t,
                        totalUsers: n,
                        othersOnClick: r,
                        variant: v
                    } = e, g = n <= 3 ? n : 2, b = s.useMemo(() => t.map(e => (0, c.S3c)(c.MI9, e)), [t]), C = s.useMemo(() => b.slice(0, g), [b, g]), j = n - g, w = (0, a.jsxs)(p, {
                        variant: v,
                        children: [j, u.L_, (0, m.Lo)({
                            word: "other",
                            count: j
                        }), u.L_]
                    }), N = r ? (0, a.jsx)("button", {
                        onClick: r,
                        className: "z-above2 appearance-none",
                        children: w
                    }) : w;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [C.map((e, t) => {
                            let r = getCommaOrAnd(t, n),
                                c = e.username === (0, l.pc)(e.publicAddress, 5, 4),
                                m = (0, a.jsxs)("div", {
                                    className: "block",
                                    children: [(0, a.jsxs)(o.s, {
                                        className: "inline-flex max-w-[84px] items-center sm:max-w-[120px]",
                                        pathnameUri: (0, h.OU)(e.webappUri),
                                        children: [(0, a.jsx)(f, {
                                            variant: v,
                                            className: "block md:hidden",
                                            children: c ? (0, l.pc)(e.publicAddress, 4, 3) : e.username
                                        }), (0, a.jsx)(f, {
                                            variant: v,
                                            className: "hidden md:block",
                                            children: e.username
                                        })]
                                    }, `${e.id}-${t}`), !r && (0, a.jsx)(x, {
                                        variant: v,
                                        children: u.L_
                                    })]
                                });
                            return (0, a.jsxs)(s.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: "z-above1 hidden md:block",
                                    children: (0, a.jsx)(d.I, {
                                        userHoverCardContent: (0, a.jsx)(i.U, {
                                            userId: e.id
                                        }),
                                        trigger: m,
                                        triggerAsChild: !0
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "z-above1 block md:hidden",
                                    children: m
                                }), !!r && (0, a.jsxs)(x, {
                                    variant: v,
                                    children: ["and" === r && u.L_, r, u.L_]
                                }), 1 === t && n >= 3 && (0, a.jsxs)(x, {
                                    variant: v,
                                    children: ["and", u.L_]
                                })]
                            }, `${e.id}-${t}`)
                        }), j > 0 && N]
                    })
                },
                getCommaOrAnd = (e, t) => 1 === t ? null : 2 === t ? 0 === e ? "and" : null : t >= 3 ? 0 === e ? "," : 1 === e ? "," : null : null,
                x = (0, r.ZP)("span", {
                    variants: {
                        variant: {
                            notification: "",
                            "social-proof": "font-base text-base-s"
                        }
                    }
                }),
                p = (0, r.ZP)("span", "inline-flex font-semibold font-base text-black", {
                    variants: {
                        variant: {
                            notification: "",
                            "social-proof": "text-base-s"
                        }
                    }
                }),
                f = (0, r.ZP)("span", "overflow-hidden text-ellipsis whitespace-nowrap", {
                    variants: {
                        variant: {
                            notification: "font-semibold",
                            "social-proof": "font-base text-black font-semibold text-base-s"
                        }
                    }
                })
        },
        72508: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return GroupedUsersAvatar
                }
            });
            var a = n(16356),
                s = n(97352),
                r = n(44361),
                l = n(67317),
                i = n(3928),
                o = n(95390);
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
                    } = e, u = s.useMemo(() => t.map(e => (0, i.S3c)(i.MI9, e)), [t]), m = function(e) {
                        switch (e) {
                            case "notification":
                            default:
                                return d;
                            case "social-proof":
                                return c
                        }
                    }(n), h = u.length, x = h <= 3 ? h : 3, p = s.useMemo(() => u.slice(0, x), [x, u]), f = s.useMemo(() => p.map((e, t) => {
                        var n, s;
                        return (0, a.jsxs)("div", {
                            children: [(0, a.jsx)("span", {
                                className: "hidden lt:block",
                                children: (0, a.jsx)(l.c, {
                                    src: null === (n = e.avatar) || void 0 === n ? void 0 : n.url,
                                    size: m.TABLET,
                                    username: e.username,
                                    walletAddress: e.publicAddress,
                                    borderRadius: "100%",
                                    webappUriPath: (0, o.OU)(e.webappUri),
                                    disableLink: !0,
                                    hasBorder: !0
                                })
                            }), (0, a.jsx)("span", {
                                className: "block lt:hidden",
                                children: (0, a.jsx)(l.c, {
                                    src: null === (s = e.avatar) || void 0 === s ? void 0 : s.url,
                                    size: m.MOBILE,
                                    username: e.username,
                                    walletAddress: e.publicAddress,
                                    borderRadius: "100%",
                                    webappUriPath: (0, o.OU)(e.webappUri),
                                    disableLink: !0,
                                    hasBorder: !0
                                })
                            })]
                        }, `${e.id}-${t}`)
                    }), [m.MOBILE, m.TABLET, p]);
                    return (0, a.jsx)("div", {
                        className: (0, r.m)("relative flex flex-shrink-0 flex-row-reverse [&>*:nth-child(1)]:-ml-1.5", h >= 3 && " [&>*:nth-child(2)]:-ml-1.5"),
                        children: f
                    })
                }
        },
        55082: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return useHasBanner
                }
            });
            var a = n(31511),
                s = n(96301),
                r = n(36916);
            let useHasBanner = () => {
                let {
                    isAuthenticatedWithAPI: e,
                    isConnectingAPIUser: t
                } = (0, s.aC)(), {
                    enabled: n
                } = (0, a.og)(), {
                    hasDismissedNewRewardsFeatureBanner: l,
                    loading: i,
                    hasDismissedNewChannelsFeatureBanner: o
                } = (0, r.d)(), d = !e || e && "not-dismissed" === l.type, c = !e || e && "not-dismissed" === o.type;
                return !(t || i) && (n ? c : d)
            }
        },
        64894: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return StatsInfo
                }
            });
            var a = n(16356);
            n(97352);
            var s = n(21597),
                r = n(44361);
            let StatsInfo = e => {
                let {
                    total: t,
                    label: n,
                    onClick: l,
                    loading: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: (0, r.m)("flex flex-col items-start", !!l && "group cursor-pointer"),
                    onClick: l,
                    children: [i ? (0, a.jsx)("div", {
                        className: "my-0.5 h-[14px] w-6 animate-pulse rounded-md bg-neutral200 md:my-0 md:h-5 md:w-8"
                    }) : (0, a.jsx)("h3", {
                        className: "font-title text-title-xs font-medium text-base800 group-hover:text-black md:text-title-m",
                        children: (0, s.ZP)(t)
                    }), (0, a.jsx)("p", {
                        className: "font-base text-base-s font-medium capitalize text-base400 group-hover:text-base500 md:text-base-m",
                        children: n
                    })]
                })
            }
        },
        69965: function(e, t, n) {
            "use strict";
            n.d(t, {
                pQ: function() {
                    return Seo
                }
            });
            var a = n(16356),
                s = n(97352),
                r = n(13041),
                l = n.n(r),
                i = n(81688),
                o = n(64328);
            let useSetPageTitle = e => {
                    let {
                        defaultTitle: t
                    } = e, {
                        activeTrackId: n,
                        playing: a
                    } = (0, i.PZ)(), {
                        releaseInfo: r
                    } = (0, o.w)({
                        trackId: n,
                        shouldFetch: !0
                    }), [l, d] = s.useState(t);
                    return s.useEffect(() => {
                        a && r && d(r.artist ? `${r.title} • ${r.artist.name}` : r.title)
                    }, [r, a]), s.useEffect(() => {
                        a || d(t)
                    }, [a, l, t]), l
                },
                d = "Sound.xyz",
                Seo = e => {
                    let {
                        title: t = null,
                        description: n = null,
                        twitterHandle: s = null,
                        image: r = null,
                        smallTwitterCard: i,
                        audioUrl: o = null,
                        url: c
                    } = e, u = r || "https://d2i9ybouka0ieh.cloudfront.net/website-content/twitter/og-card-2023.png", m = useSetPageTitle({
                        defaultTitle: t || d
                    });
                    return (0, a.jsxs)(l(), {
                        children: [(0, a.jsx)("title", {
                            children: m
                        }), (0, a.jsx)("meta", {
                            name: "apple-itunes-app",
                            content: "app-id=6446258640"
                        }), ["og:site_name", "og:title", "twitter:title"].map(e => (0, a.jsx)("meta", {
                            property: e,
                            content: t || d
                        }, e)), o && ["og:audio", "og:url", "music:preview_url:url", "music:preview_url:secure_url", "music:preview_url:type"].map(e => (0, a.jsx)("meta", {
                            name: e,
                            content: o
                        }, e)), c ? (0, a.jsx)("meta", {
                            name: "og:url",
                            content: c
                        }, "og:url") : null, ["description", "og:description", "twitter:description"].map(e => (0, a.jsx)("meta", {
                            name: e,
                            content: n || "Discover new music and prove you were the first"
                        }, e)), (0, a.jsx)("meta", {
                            name: "twitter:card",
                            content: i ? "summary" : "summary_large_image"
                        }), s && ["twitter:site", "twitter:creator"].map(e => (0, a.jsx)("meta", {
                            name: e,
                            content: s
                        }, e)), (0, a.jsx)("meta", {
                            name: "twitter:image",
                            content: u
                        }), (0, a.jsx)("meta", {
                            property: "og:image",
                            content: u
                        }), (0, a.jsx)("meta", {
                            name: "robots",
                            content: "index,follow"
                        })]
                    })
                }
        },
        78564: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return s
                }
            });
            var a = n(8205);
            let s = (0, a.F4)({
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
                    return r
                },
                Jw: function() {
                    return i
                },
                ie: function() {
                    return l
                },
                ws: function() {
                    return s
                }
            });
            var a = n(8205);
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
                s = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                r = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateX(0)"
                    }
                }),
                l = (0, a.F4)({
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-2px)"
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0)"
                    }
                }),
                i = (0, a.F4)({
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
        12112: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZU: function() {
                    return m
                },
                VM: function() {
                    return Hero
                }
            });
            var a = n(16356);
            n(97352);
            var s = n(50868),
                r = n(49542),
                l = n(55082),
                i = n(73950),
                o = n(8205);
            let BackgroundBlur = () => (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c, {}), (0, a.jsx)(u, {})]
                }),
                d = {
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    top: 0,
                    left: 0
                },
                c = (0, o.zo)("div", { ...d,
                    backgroundColor: " rgba(255, 255, 255, 0.01)",
                    backdropFilter: "blur(32px)",
                    transform: "translate3d(0,0,0)"
                }),
                u = (0, o.zo)("div", { ...d,
                    opacity: .5,
                    backgroundColor: "$black"
                }),
                m = 358,
                Hero = e => {
                    let {
                        variant: t,
                        withBlur: n = !1,
                        backgroundImageSrc: s,
                        children: o,
                        cover: d,
                        details: c,
                        isLoading: u = !1
                    } = e, m = (0, l.Y)();
                    return (0, a.jsxs)(h, {
                        isLoading: u,
                        type: t,
                        hasBanner: m,
                        children: [!u && s && (0, a.jsx)(i.G, {
                            className: "object-cover object-center",
                            fill: !0,
                            src: s,
                            alt: "cover image",
                            quality: n ? 75 : 100,
                            priority: !0
                        }), n && (0, a.jsx)(BackgroundBlur, {}), (c || d) && (0, a.jsxs)(x, {
                            type: t,
                            hasBanner: m,
                            children: [(0, a.jsx)("div", {
                                className: "min-w-0 max-w-full flex-1",
                                children: (0, a.jsx)("div", {
                                    className: (0, r.default)("flex h-full w-full items-center justify-center md:block md:h-auto", {
                                        "lg:w-4/5": !!d
                                    }),
                                    children: c
                                })
                            }), d && (0, a.jsx)(p, {
                                type: t,
                                children: d
                            })]
                        }), o]
                    })
                },
                h = (0, s.zo)("div", "relative w-full", {
                    variants: {
                        isLoading: {
                            true: "bg-base200",
                            false: "bg-base800"
                        },
                        type: {
                            artist: "h-[232px] md:h-[300px]",
                            collector: "h-[232px] md:h-[300px]",
                            playlist: "h-[443px] md:h-[500px]",
                            song: "h-[443px] md:h-[492px]",
                            songPreview: "h-[443px] md:h-[492px]",
                            channel: "h-[232px] md:h-[300px]"
                        },
                        hasBanner: {
                            true: "",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        type: "playlist",
                        hasBanner: !0,
                        className: "h-[473px] md:h-[500px]"
                    }, {
                        type: "song",
                        hasBanner: !0,
                        className: "h-[473px] md:h-[502px]"
                    }, {
                        type: "songPreview",
                        hasBanner: !0,
                        className: "h-[473px] md:h-[502px]"
                    }]
                }),
                x = (0, s.zo)("div", "md:items-[unset] relative mx-auto flex h-full w-[296px] max-w-content flex-col-reverse items-center justify-center pt-16 md:h-auto md:w-full md:flex-row md:items-center md:justify-between md:gap-6 md:px-6", {
                    variants: {
                        type: {
                            collector: "md:pt-[89px]",
                            songPreview: "md:pt-[70px]",
                            artist: "md:pt-[89px]",
                            channel: "md:pt-[89px]",
                            playlist: "md:pt-[89px]",
                            song: "md:pt-[89px]"
                        },
                        hasBanner: {
                            true: "",
                            false: ""
                        }
                    },
                    compoundVariants: [{
                        type: "songPreview",
                        hasBanner: !0,
                        className: "pt-[89px] md:pt-[76px]"
                    }, {
                        type: "playlist",
                        hasBanner: !0,
                        className: "pt-[108px] md:pt-[94px]"
                    }, {
                        type: "song",
                        hasBanner: !0,
                        className: "pt-[108px] md:pt-[94px]"
                    }]
                }),
                p = (0, s.zo)("div", "relative z-above1 flex-shrink-0", {
                    variants: {
                        type: {
                            collector: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]",
                            artist: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]",
                            channel: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]",
                            playlist: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]",
                            song: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]",
                            songPreview: "h-[256px] w-[256px] md:h-[358px] md:w-[358px]"
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
            var a = n(16356);
            n(97352);
            var s = n(8205),
                r = n(69598),
                l = n(85906);
            let Placeholder = e => {
                    let {
                        illustration: t,
                        subHeading: n,
                        text: s,
                        buttonLabel: l,
                        divider: c = !1,
                        mainFeed: u = !1,
                        ...m
                    } = e;
                    return (0, a.jsxs)(o, {
                        divider: c,
                        children: [c && (0, a.jsx)(i, {
                            orientation: "horizontal",
                            mainFeed: u
                        }), t, (0, a.jsxs)(d, {
                            children: [(0, a.jsx)("h2", {
                                children: n
                            }), (0, a.jsx)("p", {
                                children: s
                            }), (0, a.jsx)(r.z, {
                                href: "href" in m ? m.href : void 0,
                                onClick: "onClick" in m ? m.onClick : void 0,
                                variant: "primary",
                                label: l,
                                deprecatedCSS: {
                                    height: "unset"
                                }
                            })]
                        })]
                    })
                },
                i = (0, s.zo)(l.i, {
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
                o = (0, s.zo)("div", {
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
                d = (0, s.zo)("div", {
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
            var a = n(16356);
            n(97352);
            let EyeStars = () => (0, a.jsxs)("svg", {
                width: "140",
                height: "98",
                viewBox: "0 0 140 98",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, a.jsx)("path", {
                    d: "M74.0966 86.8269C91.7219 86.8269 106.01 72.5388 106.01 54.9135C106.01 37.2881 91.7219 23 74.0966 23M74.0966 86.8269C56.4712 86.8269 42.1831 72.5388 42.1831 54.9135C42.1831 37.2881 56.4712 23 74.0966 23M74.0966 86.8269C115.92 86.8269 139.293 54.9135 139.293 54.9135C139.293 54.9135 115.92 23 74.0966 23M74.0966 86.8269C32.2728 86.8269 8.90039 54.9135 8.90039 54.9135C8.90039 54.9135 32.2728 23 74.0966 23M74.0966 70.8175C82.8801 70.8175 90.0006 63.6971 90.0006 54.9135C90.0006 46.1299 82.8801 39.0094 74.0966 39.0094M74.0966 70.8175C65.313 70.8175 58.1925 63.6971 58.1925 54.9135C58.1925 46.1299 65.313 39.0094 74.0966 39.0094M74.0966 70.8175C77.8194 70.8175 80.8374 63.6971 80.8374 54.9135C80.8374 46.1299 77.8194 39.0094 74.0966 39.0094M74.0966 70.8175C70.3737 70.8175 67.3558 63.6971 67.3558 54.9135C67.3558 46.1299 70.3737 39.0094 74.0966 39.0094",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeMiterlimit: "10",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, a.jsx)("path", {
                    d: "M7.20703 75V75C7.30502 78.2757 9.94511 80.9041 13.2212 80.9876L13.707 81L13.2212 81.0124C9.94511 81.0959 7.30502 83.7243 7.20703 87V87V87C7.10905 83.7243 4.46895 81.0959 1.19288 81.0124L0.707031 81L1.19288 80.9876C4.46895 80.9041 7.10905 78.2757 7.20703 75V75Z",
                    fill: "#262626"
                }), (0, a.jsx)("path", {
                    d: "M116.207 86V86C116.305 89.2757 118.945 91.9041 122.221 91.9876L122.707 92L122.221 92.0124C118.945 92.0959 116.305 94.7243 116.207 98V98V98C116.109 94.7243 113.469 92.0959 110.193 92.0124L109.707 92L110.193 91.9876C113.469 91.9041 116.109 89.2757 116.207 86V86Z",
                    fill: "#262626"
                }), (0, a.jsx)("path", {
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
            var a = n(16356);
            n(97352);
            let Plus3D = () => (0, a.jsxs)("svg", {
                width: "128",
                height: "131",
                viewBox: "0 0 128 131",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0, a.jsx)("path", {
                    d: "M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141L63.1845 111.845L48.4597 120.141L33.9452 111.845V94.9359L19.1152 86.4789V69.6254L33.9452 60.8678V43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998V60.9923L107.149 69.6254Z",
                    fill: "white"
                }), (0, a.jsx)("path", {
                    d: "M33.9452 43.9998L48.4597 35.3879L63.1845 43.9998L78.0145 35.3879L92.6341 43.9998M33.9452 43.9998L48.4597 52.2966L33.9452 60.8678M33.9452 43.9998V60.8678M19.1152 69.6254V86.4789L33.9452 94.9359V111.845L48.4597 120.141M19.1152 69.6254L33.9452 78.1428V61.0713M19.1152 69.6254L33.9452 60.8678M63.1845 94.9359L48.4597 86.4789M63.1845 94.9359L77.8742 86.4789M63.1845 94.9359V111.845M107.149 69.6254V86.429L92.5114 94.8908L92.6341 111.845L78.0145 120.141M107.149 69.6254L92.6341 60.9923M107.149 69.6254L92.6341 78.1428V60.9923M92.6341 43.9998L78.0145 52.2966L92.6341 60.9923M92.6341 43.9998V60.9923M48.4597 120.141L63.1845 111.845M48.4597 120.141V103.369L63.1845 111.845M78.0145 120.141L63.1845 111.845M78.0145 120.141L77.8742 103.352L63.1845 111.845M78.0145 69.6254L92.6341 60.9923M78.0145 69.6254L63.1845 61.0713M78.0145 69.6254L77.8742 86.4789M48.4597 69.6254L33.9452 61.0713M48.4597 69.6254V86.4789M48.4597 69.6254L63.1845 61.0713M33.9452 61.0713V60.8678M48.4597 86.4789L63.1845 78.1428M63.1845 78.1428L77.8742 86.4789M63.1845 78.1428V61.0713",
                    stroke: "#171717",
                    strokeWidth: "0.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0, a.jsx)("path", {
                    d: "M7.30664 84C7.40463 87.2757 10.0447 89.9041 13.3208 89.9876L13.8066 90L13.3208 90.0124C10.0447 90.0959 7.40463 92.7243 7.30664 96C7.20866 92.7243 4.56856 90.0959 1.29249 90.0124L0.806641 90L1.29249 89.9876C4.56856 89.9041 7.20866 87.2757 7.30664 84Z",
                    fill: "#262626"
                }), (0, a.jsx)("path", {
                    d: "M116.307 95C116.405 98.2757 119.045 100.904 122.321 100.988L122.807 101L122.321 101.012C119.045 101.096 116.405 103.724 116.307 107C116.209 103.724 113.569 101.096 110.292 101.012L109.807 101L110.292 100.988C113.569 100.904 116.209 98.2757 116.307 95Z",
                    fill: "#262626"
                }), (0, a.jsx)("path", {
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
            var a = n(16356),
                s = n(97352),
                r = n(49542),
                l = n(78570),
                i = n.n(l),
                o = n(44361),
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
                    return (0, a.jsx)("div", {
                        "data-testid": "button-leading-icon",
                        className: (0, r.clsx)("flex items-center", !n && "mr-2"),
                        children: t
                    })
                },
                TrailingIcon = e => {
                    let {
                        children: t,
                        iconOnly: n
                    } = e;
                    return (0, a.jsx)("div", {
                        "data-testid": "button-trailing-icon",
                        className: n ? "" : "ml-2",
                        children: t
                    })
                },
                m = s.forwardRef(function(e, t) {
                    let {
                        leadingIcon: n,
                        trailingIcon: s,
                        testId: l,
                        fullWidthAnchor: d = !1,
                        iconOnly: c = !1,
                        deprecatedCSS: m,
                        className: h,
                        labelComponent: x,
                        ...p
                    } = e, f = (0, a.jsx)("div", {
                        className: (0, r.clsx)("loading-circle inline-block aspect-square flex-grow-0 animate-spin rounded-full border-2 border-solid", "primary" === p.variant && "border-base100 border-l-neutral400  border-t-neutral400", ("secondary" === p.variant || "tertiary" === p.variant || "text" === p.variant) && "border-white  border-l-neutral400 border-t-neutral400 ", ("brand" === p.variant || "green" === p.variant) && "border-base50 border-l-brand100 border-t-brand100", "critical" === p.variant && "border-base50 border-l-destructive200 border-t-destructive200", "fuchsia" === p.variant && "border-base50 border-l-fuchsia500 border-t-fuchsia500", (c || "squared" === p.size) && "ml-0 aspect-square h-4/5", "XS" === p.size && "ml-2 h-2.5 w-2.5 !border-1.5", ("S" === p.size || "M" === p.size || "full" === p.size) && "ml-1 h-3.5 w-3.5", ("L" === p.size || "XL" === p.size || !p.size) && "ml-1 h-4 w-4")
                    }), v = null == p ? void 0 : p.href, g = (null == v ? void 0 : v.startsWith("http")) || (null == v ? void 0 : v.startsWith("mailto")), b = (0, a.jsxs)(u, {
                        "aria-label": p.label,
                        "aria-disabled": p.disabled,
                        hasIcon: !!n || !!s,
                        disabled: p.disabled,
                        loading: p.loading,
                        darkMode: p.darkMode,
                        "data-testid": l,
                        css: m,
                        ...p,
                        ref: t,
                        onClick: p.loading ? void 0 : e => {
                            e.currentTarget.blur(), p.onClick && p.onClick(e)
                        },
                        className: h,
                        children: [n && !p.loading && (0, a.jsx)(LeadingIcon, {
                            iconOnly: c,
                            children: n
                        }), c ? null : null != x ? x : p.label, !!s && !p.loading && (0, a.jsx)(TrailingIcon, {
                            iconOnly: c,
                            children: s
                        }), p.loading ? f : null]
                    });
                    return (0, a.jsx)(a.Fragment, {
                        children: (null == p ? void 0 : p.href) ? (0, a.jsx)(i(), {
                            className: (0, o.m)("!text-[unset] [text-decoration:unset]", d && "w-full"),
                            href: p.href,
                            "data-testid": l,
                            "data-href": p.href,
                            rel: g ? "noopener noreferrer" : void 0,
                            role: "link",
                            target: g ? "_blank" : void 0,
                            children: b
                        }) : b
                    })
                })
        },
        46061: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q_: function() {
                    return r
                },
                _R: function() {
                    return l
                }
            });
            var a = n(78564),
                s = n(9421);
            let r = {
                    "@media (prefers-reduced-motion: no-preference)": {
                        animationDuration: "400ms",
                        animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                        willChange: "transform, opacity",
                        '&[data-state="delayed-open"], &[data-state="open"], ': {
                            '&[data-side="top"]': {
                                animationName: s.ie
                            },
                            '&[data-side="right"]': {
                                animationName: s.Jw
                            },
                            '&[data-side="bottom"]': {
                                animationName: s.ws
                            },
                            '&[data-side="left"]': {
                                animationName: s.DR
                            }
                        }
                    }
                },
                l = {
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
                    ...r
                };
            a.c, a.c
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
            var a = n(16356),
                s = n(97352);
            let r = s.createContext(null);

            function useTooltipContext() {
                let e = s.useContext(r);
                if (!e) throw Error("Tooltip compound components cannot be rendered outside the Tooltip component");
                return e
            }

            function TooltipContextProvider(e) {
                let {
                    children: t,
                    openOnClick: n,
                    ...l
                } = e, [i, o] = (0, s.useState)(!1), d = {
                    openContent: i,
                    setOpenContent: o,
                    openOnClick: n,
                    ...l
                };
                return (0, a.jsx)(r.Provider, {
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
            var a = n(16356),
                s = n(97352),
                r = n(52889),
                l = n(49542),
                i = n(8205),
                o = n(42529),
                d = n(46061),
                c = n(24455),
                u = n(31451);

            function TooltipComponent(e) {
                let {
                    children: t,
                    delayDuration: n = 0,
                    ...s
                } = e, {
                    openContent: l
                } = (0, u.n)();
                return (0, a.jsx)(r.zt, {
                    delayDuration: n,
                    children: (0, a.jsx)(r.fC, {
                        delayDuration: n,
                        open: l,
                        ...s,
                        children: t
                    })
                })
            }

            function Tooltip(e) {
                let {
                    children: t,
                    openOnClick: n,
                    delayCloseMs: s,
                    ...r
                } = e;
                return (0, a.jsx)(u.g, {
                    openOnClick: n,
                    delayCloseMs: s,
                    children: (0, a.jsx)(TooltipComponent, { ...r,
                        children: t
                    })
                })
            }
            let m = (0, s.forwardRef)(function(e, t) {
                    let {
                        children: n,
                        size: s = "xs",
                        ...r
                    } = e, {
                        sideOffset: i = 6,
                        side: o = "top",
                        avoidCollisions: d = !0,
                        className: u,
                        ...m
                    } = r, x = (0, c.Z)();
                    return (0, a.jsx)(h, {
                        sideOffset: i,
                        side: o,
                        avoidCollisions: d,
                        collisionBoundary: x,
                        className: (0, l.default)("z-tooltip bg-neutral900 font-base font-medium text-white shadow-secondary ", "xs" === s ? "rounded-sm px-2.5 py-2 text-base-xs" : "rounded-md px-2 py-3 text-base-s", u),
                        ...m,
                        ref: t,
                        children: n
                    })
                }),
                h = (0, i.zo)(r.VY, { ...d.Q_
                });
            Tooltip.StyledContent = m, Tooltip.Content = r.VY, Tooltip.Trigger = function(e) {
                let {
                    children: t,
                    ...n
                } = e, {
                    className: i
                } = n, {
                    openContent: d,
                    setOpenContent: c,
                    openOnClick: m,
                    delayCloseMs: h
                } = (0, u.n)(), x = s.useRef(null), p = (0, o.R)(() => {
                    if (h) {
                        null !== x.current && clearTimeout(x.current), x.current = setTimeout(() => {
                            c(!1)
                        }, h);
                        return
                    }
                    c(!1)
                });
                return (0, a.jsx)(r.xz, {
                    className: (0, l.default)("cursor-default hover:cursor-default", i),
                    onClick: () => {
                        m && c(!d)
                    },
                    onMouseOver: () => {
                        null !== x.current && (clearTimeout(x.current), x.current = null), m || c(!0)
                    },
                    onMouseLeave: p,
                    onBlur: p,
                    ...n,
                    children: t
                })
            }, Tooltip.Portal = r.h_
        },
        24455: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return useGetLayoutContainer
                }
            });
            var a = n(97352),
                s = n(83835);
            let useGetLayoutContainer = () => {
                let [e, t] = (0, a.useState)(null);
                return (0, s.G)(() => {
                    t(window.document.getElementById("layout"))
                }, []), e
            }
        },
        6310: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return EmptyUserStat
                }
            });
            var a = n(16356);
            n(97352);
            var s = n(8205);
            let Subtract1 = () => (0, a.jsx)("svg", {
                    width: "88",
                    height: "88",
                    viewBox: "0 0 88 88",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M16.3148 14.2383L0 0L14.2383 16.3148C28.0396 32.1289 28.0396 55.7063 14.2383 71.5204L0 87.8352L16.3148 73.5969C32.1289 59.7956 55.7063 59.7956 71.5204 73.5969L87.8352 87.8352L73.5969 71.5204C59.7956 55.7063 59.7956 32.1289 73.5969 16.3148L87.8352 0L71.5204 14.2383C55.7063 28.0396 32.1289 28.0396 16.3148 14.2383ZM23.3455 23.549L13.4052 13.7493L23.2049 23.6896C34.2925 34.9362 34.2925 53.0025 23.2049 64.2491L13.4052 74.1894L23.3455 64.3897C34.5921 53.3021 52.6584 53.3021 63.9051 64.3897L73.8454 74.1894L64.0456 64.2491C52.9581 53.0025 52.9581 34.9362 64.0456 23.6896L73.8454 13.7493L63.9051 23.549C52.6584 34.6366 34.5921 34.6366 23.3455 23.549Z",
                        fill: "#262626"
                    })
                }),
                Star4 = () => (0, a.jsx)("svg", {
                    width: "125",
                    height: "125",
                    viewBox: "0 0 125 125",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M62.1086 0L62.7709 23.9865C63.3356 44.4366 79.7809 60.8819 100.231 61.4466L124.218 62.1089L100.231 62.7712C79.7809 63.3359 63.3356 79.7811 62.7709 100.231L62.1086 124.218L61.4463 100.231C60.8816 79.7811 44.4364 63.3359 23.9862 62.7712L-0.000244141 62.1089L23.9862 61.4466C44.4364 60.8819 60.8816 44.4366 61.4463 23.9865L62.1086 0Z",
                        fill: "#262626"
                    })
                }),
                Union1 = () => (0, a.jsx)("svg", {
                    width: "113",
                    height: "112",
                    viewBox: "0 0 113 112",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M55.2547 4.15645C55.2547 8.17776 56.3879 19.0686 56.5549 19.0686C56.7218 19.0686 57.855 8.17776 57.855 4.15645C57.855 0.135144 56.7218 0 56.5549 0C56.3879 0 55.2547 0.135144 55.2547 4.15645ZM59.3849 46.5148C59.3849 36.905 56.9241 19.0687 56.5615 19.0687C56.1988 19.0687 53.738 36.905 53.738 46.5148C53.738 46.6762 53.7387 46.8351 53.74 46.9913C53.3339 46.5515 52.8883 46.0879 52.3997 45.5992C45.6203 38.8199 31.3012 27.9729 31.0454 28.2287C30.7895 28.4845 41.6365 42.8036 48.4159 49.583C49.6634 50.8306 50.7479 51.7974 51.6886 52.5431C50.3652 52.3462 48.6744 52.2219 46.5143 52.2219C36.9045 52.2219 19.0682 54.6828 19.0682 55.0454C19.0682 55.408 36.9045 57.8689 46.5143 57.8689C47.8326 57.8689 48.9761 57.8226 49.968 57.7417C49.4811 58.1867 48.9642 58.6808 48.4159 59.2291C41.6365 66.0085 30.7895 80.3276 31.0454 80.5834C31.3012 80.8392 45.6203 69.9923 52.3997 63.2129C52.9331 62.6794 53.4153 62.1758 53.8508 61.7004C53.7788 62.6494 53.738 63.7334 53.738 64.9715C53.738 74.5812 56.1988 92.4176 56.5615 92.4176C56.9241 92.4176 59.3849 74.5812 59.3849 64.9715C59.3849 63.7219 59.3433 62.6294 59.2701 61.6742C59.7119 62.1572 60.2019 62.6695 60.7451 63.2127C67.5245 69.9921 81.8436 80.8391 82.0994 80.5832C82.3553 80.3274 71.5083 66.0083 64.7289 59.229C64.1805 58.6806 63.6637 58.1865 63.1767 57.7415C64.1293 57.8144 65.2187 57.8559 66.4645 57.8559C76.052 57.8559 93.8471 55.4007 93.8471 55.0389C93.8471 54.6771 76.052 52.222 66.4645 52.222C64.4111 52.222 62.7827 52.3346 61.4914 52.5152C62.4241 51.7733 63.4971 50.815 64.7291 49.5829C71.5085 42.8035 82.3554 28.4844 82.0996 28.2286C81.8438 27.9728 67.5247 38.8198 60.7453 45.5991C60.2477 46.0968 59.7947 46.5684 59.3827 47.0154C59.3842 46.8514 59.3849 46.6845 59.3849 46.5148ZM55.2547 107.33C55.2547 103.308 56.3879 92.4177 56.5549 92.4177C56.7218 92.4177 57.855 103.308 57.855 107.33C57.855 111.351 56.7218 111.486 56.5549 111.486C56.3879 111.486 55.2547 111.351 55.2547 107.33ZM19.0684 55.0522C19.0684 55.2192 8.17751 56.3523 4.15621 56.3523C0.134899 56.3523 -0.000244141 55.2192 -0.000244141 55.0522C-0.000244141 54.8852 0.134899 53.7521 4.15621 53.7521C8.17751 53.7521 19.0684 54.8852 19.0684 55.0522ZM108.725 56.3425C104.713 56.3425 93.847 55.212 93.847 55.0454C93.847 54.8788 104.713 53.7483 108.725 53.7483C112.737 53.7483 112.872 54.8788 112.872 55.0454C112.872 55.212 112.737 56.3425 108.725 56.3425ZM82.0951 80.5878C81.9773 80.7056 88.8611 89.1882 91.698 92.0251C94.5349 94.862 95.4296 94.158 95.5474 94.0402C95.6652 93.9224 96.3693 93.0276 93.5324 90.1907C90.6955 87.3538 82.2129 80.47 82.0951 80.5878ZM21.4471 92.0253C24.2841 89.1884 31.1678 80.7058 31.05 80.588C30.9322 80.4702 22.4497 87.354 19.6127 90.1909C16.7758 93.0278 17.4799 93.9225 17.5977 94.0403C17.7155 94.1581 18.6102 94.8622 21.4471 92.0253ZM31.05 28.2241C31.1678 28.1063 24.2841 19.6238 21.4471 16.7868C18.6102 13.9499 17.7155 14.654 17.5977 14.7718C17.4799 14.8896 16.7758 15.7843 19.6127 18.6213C22.4497 21.4582 30.9322 28.3419 31.05 28.2241ZM91.6982 16.7867C88.8613 19.6237 81.9775 28.1062 82.0953 28.224C82.2131 28.3418 90.6957 21.4581 93.5326 18.6212C96.3695 15.7842 95.6654 14.8895 95.5476 14.7717C95.4298 14.6539 94.5351 13.9498 91.6982 16.7867Z",
                        fill: "#262626"
                    })
                }),
                Wave1 = () => (0, a.jsxs)("svg", {
                    width: "214",
                    height: "102",
                    viewBox: "0 0 214 102",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, a.jsx)("path", {
                        d: "M42.029 101.969C40.3942 101.972 38.761 101.865 37.1405 101.649C23.8147 99.8723 11.7224 90.9081 0.140153 74.2411L0 74.0393L0.185003 73.8767L75.2788 6.73237L75.4526 7.01829C79.0349 12.6973 82.7854 15.8703 86.9283 16.7113C93.3529 18.0175 99.9569 13.4261 106.342 8.98603C112.823 4.50115 119.528 -0.185564 126.188 1.17111C130.471 2.04006 134.334 5.27479 137.989 11.0603L167.785 29.2858C170.477 29.0605 173.185 29.1244 175.864 29.4764C189.189 31.2535 201.282 40.2177 212.864 56.8846L213.621 57.9778L167.651 29.8464C147.289 31.5899 126.687 48.9071 106.684 65.7591C85.51 83.5921 63.6686 101.969 42.029 101.969ZM0.762431 74.1346C12.1821 90.5325 24.1063 99.3621 37.2021 101.1C60.1872 104.161 83.6375 84.4387 106.309 65.3555C126.137 48.6773 146.555 31.5002 166.855 29.3867L137.585 11.4751L137.551 11.4191C133.969 5.74009 130.219 2.56143 126.053 1.72052C119.629 0.414292 113.025 5.00569 106.639 9.44573C100.159 13.9306 93.4594 18.6173 86.7938 17.2606C82.5612 16.4029 78.749 13.2411 75.1331 7.59572L0.762431 74.1346ZM168.609 29.8015L211.608 56.111C200.396 40.2905 188.651 31.758 175.791 30.0426C173.41 29.7308 171.006 29.6482 168.609 29.7959V29.8015Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M49.8832 87.8752C48.3831 87.8761 46.8846 87.775 45.3983 87.5725C33.603 85.9523 22.9009 77.9468 12.6306 63.0906L13.0959 62.771C23.2429 77.4871 33.8385 85.4197 45.4992 87.0175C65.726 89.7869 86.3621 72.5929 106.32 55.9596C126.379 39.2478 147.115 21.9978 167.583 24.8009C179.401 26.421 190.126 34.4266 200.374 49.2827L199.908 49.6023C189.761 34.8807 179.166 26.9536 167.505 25.3559C147.284 22.5865 126.642 39.7804 106.684 56.4137C88.0832 71.8922 68.8991 87.8752 49.8832 87.8752Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M57.7317 73.7814C56.3849 73.7811 55.0398 73.6855 53.7065 73.4955C43.3857 72.0323 34.0347 64.9799 25.1154 51.9344L25.5751 51.6205C34.4103 64.5145 43.6435 71.4998 53.7962 72.9237C71.2592 75.4016 89.1147 60.736 106.337 46.575C123.676 32.3075 141.605 17.5634 159.309 20.0749C169.63 21.5381 178.981 28.5906 187.9 41.636L187.44 41.95C178.605 29.0559 169.372 22.0707 159.219 20.6467C141.756 18.1688 123.901 32.8344 106.679 46.9955C90.6564 60.181 74.124 73.7814 57.7317 73.7814Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M65.5915 59.6877C64.385 59.6894 63.1801 59.6014 61.9867 59.4242C53.1739 58.1124 45.1684 52.0129 37.5721 40.7839L38.0375 40.498C45.5608 51.5925 53.4206 57.6134 62.0708 58.8972C76.7701 61.0892 91.7832 48.9464 106.325 37.2016C120.952 25.3839 136.077 13.1626 151.017 15.3882C159.83 16.7001 167.836 22.7939 175.432 34.0285L174.967 34.3425C167.443 23.248 159.584 17.227 150.933 15.9432C136.234 13.7569 121.221 25.8941 106.679 37.6389C93.2296 48.4755 79.3601 59.6877 65.5915 59.6877Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M73.4512 45.6051C72.3849 45.6068 71.3202 45.5243 70.2669 45.3584C62.979 44.198 56.3414 39.0515 50.0401 29.6277L50.5054 29.3137C56.717 38.6031 63.2088 43.671 70.3566 44.8034C82.2976 46.6927 94.5134 37.0782 106.331 27.7777C118.238 18.4043 130.555 8.71689 142.737 10.6398C150.025 11.8003 156.663 16.9467 162.964 26.3705L162.493 26.6845C156.287 17.3952 149.795 12.3272 142.647 11.1948C130.712 9.30554 118.491 18.92 106.673 28.2206C95.7803 36.7811 84.5681 45.6051 73.4512 45.6051Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M81.3222 31.5282C80.3826 31.5303 79.4446 31.4497 78.5192 31.2872C72.7113 30.2781 67.4639 26.0791 62.4801 18.4604L62.951 18.152C67.8451 25.6362 72.9691 29.7511 78.6145 30.7378C87.7973 32.3355 97.2043 25.2382 106.303 18.3707C115.497 11.4359 125.005 4.2601 134.429 5.90269C140.237 6.9174 145.484 11.1108 150.462 18.7295L149.997 19.0378C145.103 11.5593 139.979 7.43877 134.334 6.4577C125.145 4.85435 115.744 11.9573 106.645 18.7911C98.376 25.0868 89.8323 31.5282 81.3222 31.5282Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M127.489 1.51059L127.214 1.99857L177.1 30.2113L177.376 29.7233L127.489 1.51059Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M117.156 2.67131L116.695 2.99086L141.639 38.9472L142.1 38.6276L117.156 2.67131Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M106.785 9.21588H106.225V65.5685H106.785V9.21588Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M95.7776 15.48L70.8801 92.2433L71.4134 92.4162L96.3108 15.653L95.7776 15.48Z",
                        fill: "#262626"
                    }), (0, a.jsx)("path", {
                        d: "M85.3736 16.5096L35.5482 101.029L36.0312 101.314L85.8565 16.7943L85.3736 16.5096Z",
                        fill: "#262626"
                    })]
                }),
                VectorWithStars = () => (0, a.jsxs)(r, {
                    children: [(0, a.jsx)(o, {
                        children: (0, a.jsx)(Subtract1, {})
                    }), (0, a.jsx)(i, {
                        children: (0, a.jsx)(Star4, {})
                    }), (0, a.jsx)(l, {
                        children: (0, a.jsx)(Wave1, {})
                    }), (0, a.jsx)(d, {
                        children: (0, a.jsx)(Union1, {})
                    })]
                }),
                r = (0, s.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    width: 228,
                    height: 155
                }),
                l = (0, s.zo)("div", {
                    margin: "0 auto",
                    svg: {
                        width: 220
                    }
                }),
                i = (0, s.zo)("div", {
                    position: "absolute",
                    transform: "translate(-8px, -40px)",
                    svg: {
                        width: 40
                    }
                }),
                o = (0, s.zo)("div", {
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
                        subText: n
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "-mt-2 flex h-full w-full flex-col items-center justify-center",
                        children: [(0, a.jsx)(VectorWithStars, {}), (0, a.jsxs)("div", {
                            className: "mt-6 flex flex-col items-center gap-4 text-center",
                            children: [(0, a.jsx)("h3", {
                                className: "max-w-[300px] font-title text-title-m font-medium",
                                children: t
                            }), (0, a.jsx)("div", {
                                className: "max-w-[271px] font-base  text-base-l text-neutral400",
                                children: n
                            })]
                        })]
                    })
                }
        },
        56949: function(e, t, n) {
            "use strict";
            n.d(t, {
                A_: function() {
                    return l
                },
                G: function() {
                    return i
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
                    return r
                }
            });
            var a = n(8205),
                s = n(26225);
            let r = 10,
                l = (0, a.zo)("div", {
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
                i = "Looking for followers?",
                FOLLOWERS_EMPTY_SUBTEXT = e => `When someone follows ${e}, they'll show up here`,
                FOLLOWING_EMPTY_HEADER = e => `${e} isn't following anyone`,
                FOLLOWING_EMPTY_SUBTEXT = e => `When ${e} follows someone, they’ll show up here.`,
                o = "This channel doesn't have any members yet",
                d = "When someone joins, they'll show up here"
        },
        36916: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return useBackendUserPersistedData
                }
            });
            var a = n(97352);
            n(96960);
            var s = n(20162),
                r = n(58658),
                l = n(28384),
                i = n(96301),
                o = n(36750),
                d = n(3928),
                c = n(42529),
                u = n(64398);
            (0, o.c)({
                trigger: [d.sPW],
                refetch: [d.lJx]
            });
            let m = r.Lj.GLOBAL;

            function useBackendUserPersistedData() {
                let {
                    isAuthenticatedWithAPI: e,
                    authUser: t
                } = (0, i.aC)(), {
                    data: n,
                    isLoading: o,
                    error: h,
                    setQueryData: x
                } = (0, d.aM2)(d.lJx, {
                    staleTime: 0,
                    filterQueryKey: {
                        authUserId: null == t ? void 0 : t.id
                    },
                    enabled: e
                }), p = (0, u.S)(), f = !!n, v = a.useMemo(() => {
                    if (!n) return l.N;
                    let e = l.L.safeParse(n.data.getUserPersistedData);
                    return e.success ? e.data : (p({
                        action: r.pe.USER_BACKEND_PERSISTED_DATA_FETCH_ERROR,
                        error: Error(e.error.message),
                        errorType: r.QS.PARSE_ERROR,
                        message: e.error.message,
                        level: "error",
                        isArtistOnlyPage: !1,
                        pillar: m
                    }), l.N)
                }, [n, p]), {
                    mutate: g
                } = (0, d.Dbo)(d.sPW, {
                    onError: e => {
                        p({
                            action: r.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(e.message),
                            errorType: r.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            message: e.message,
                            toast: "There was an error updating your settings. Please try again.",
                            level: "warning",
                            isArtistOnlyPage: !1,
                            pillar: m
                        })
                    },
                    onSuccess(e) {
                        let {
                            data: t
                        } = e;
                        "MutationSetUserPersistedDataSuccess" !== t.setUserPersistedData.__typename && p({
                            action: r.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(t.setUserPersistedData.message),
                            errorType: r.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            message: t.setUserPersistedData.message,
                            level: "warning",
                            isArtistOnlyPage: !1,
                            pillar: m
                        })
                    },
                    retry: 3
                }), b = (0, c.R)(e => {
                    let t = (0, s.Z)(l.L, { ...v,
                        ...e,
                        version: l.N.version
                    });
                    x({
                        data: {
                            getUserPersistedData: t
                        }
                    }), g({
                        data: t
                    })
                }), C = (0, c.R)(e => {
                    b({
                        hasDismissedNewRewardsFeatureBanner: e
                    })
                }), j = (0, c.R)(e => {
                    b({
                        hasDismissedSetupProfile: e
                    })
                }), w = (0, c.R)(e => {
                    b({
                        hasDismissedNewChannelsFeatureBanner: e
                    })
                }), N = a.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedSetupProfile ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedSetupProfile]), L = a.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedNewRewardsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedNewRewardsFeatureBanner]), y = a.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedNewChannelsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedNewChannelsFeatureBanner]);
                return {
                    setHasDismissedSetupProfile: j,
                    setHasDismissedNewRewardsFeatureBanner: C,
                    setHasDismissedNewChannelsFeatureBanner: w,
                    hasDismissedSetupProfile: N,
                    hasDismissedNewRewardsFeatureBanner: L,
                    hasDismissedNewChannelsFeatureBanner: y,
                    loading: o,
                    error: h
                }
            }
        },
        97021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return ek
                },
                default: function() {
                    return ChannelPage
                }
            });
            var a = n(16356),
                s = n(97352),
                r = n(71992),
                l = n.n(r),
                i = n(78608),
                o = n(31511),
                d = n(72102),
                c = n(5221),
                u = n(73534),
                m = n(44361),
                h = n(30314),
                x = n(65796),
                p = n(47460),
                f = n(38359),
                v = n(4892),
                g = n(79162),
                b = n(69598),
                C = n(21922),
                j = n(97946),
                w = n(3928),
                N = n(42529);
            let L = "line-clamp-3";

            function ChannelAbout(e) {
                var t;
                let {
                    showCreatedAt: n,
                    showSocials: r,
                    channelFrag: l
                } = e, [i, o] = (0, s.useState)(!1), [y, S] = (0, s.useState)(L), [M, k] = (0, s.useState)(0), E = (0, s.useRef)(null), A = !!M && M > 54, P = (0, N.R)(() => {
                    o(e => (e || S(""), !e))
                }), T = (0, N.R)(() => {
                    i ? S("") : S(L)
                });
                (0, s.useEffect)(() => {
                    var e;
                    k(null === (e = E.current) || void 0 === e ? void 0 : e.scrollHeight)
                }, [E, null === (t = E.current) || void 0 === t ? void 0 : t.scrollHeight]);
                let _ = (0, w.S3c)(w.oAT, l),
                    I = (0, s.useMemo)(() => (0, c.default)(new Date(_.createdAt), "MMM Y"), [_.createdAt]),
                    U = !!_.websiteUrl || !!_.discordUrl || !!_.telegramUrl || !!_.tiktokUrl || !!_.twitterUrl;
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, a.jsx)("h2", {
                        className: "font-title text-title-s font-medium text-base800",
                        children: "About"
                    }), (0, a.jsx)(u.E.span, {
                        ref: E,
                        animate: i ? "expand" : "collapse",
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
                                height: A ? 54 : "auto",
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
                        className: (0, m.m)("font-base !text-base-m font-normal text-base700", "flex h-auto flex-col overflow-hidden text-ellipsis whitespace-pre-wrap", y),
                        onAnimationComplete: T,
                        children: _.description
                    }), !!A && (0, a.jsx)(b.z, {
                        label: i ? "See less" : "See more",
                        variant: "text",
                        onClick: P,
                        size: "S",
                        className: "-mx-1 h-auto px-1 py-0 font-base !text-[12px] font-semibold leading-[16px] text-base900"
                    }), n && (0, a.jsxs)("div", {
                        className: "flex w-full items-center gap-2",
                        children: [(0, a.jsx)(d.G, {
                            icon: v.fT,
                            className: "leading-[24px] text-base400",
                            fontSize: 14
                        }), (0, a.jsxs)("span", {
                            className: "font-base text-[14px] font-medium leading-[24px] text-base400",
                            children: ["Created ", I]
                        })]
                    }), r && U && (0, a.jsxs)("div", {
                        className: "flex items-center gap-2 text-title-m md:gap-[18px]",
                        children: [!!_.twitterUrl && (0, a.jsx)(j.s, {
                            absoluteUri: _.twitterUrl,
                            type: "external",
                            children: (0, a.jsx)(C.h, {
                                className: "text-base400",
                                size: 20,
                                icon: (0, a.jsx)(d.G, {
                                    icon: f.md
                                })
                            })
                        }), !!_.telegramUrl && (0, a.jsx)(j.s, {
                            absoluteUri: _.telegramUrl,
                            type: "external",
                            children: (0, a.jsx)(C.h, {
                                className: "text-base400",
                                size: 20,
                                icon: (0, a.jsx)(d.G, {
                                    icon: x.Uv
                                })
                            })
                        }), !!_.discordUrl && (0, a.jsx)(j.s, {
                            absoluteUri: _.discordUrl,
                            type: "external",
                            children: (0, a.jsx)(C.h, {
                                className: "text-base400",
                                size: 20,
                                icon: (0, a.jsx)(d.G, {
                                    icon: h.om
                                })
                            })
                        }), !!_.tiktokUrl && (0, a.jsx)(j.s, {
                            absoluteUri: _.tiktokUrl,
                            type: "external",
                            children: (0, a.jsx)(C.h, {
                                className: "text-base400",
                                size: 20,
                                icon: (0, a.jsx)(d.G, {
                                    icon: p.AB
                                })
                            })
                        }), !!_.websiteUrl && (0, a.jsx)(j.s, {
                            absoluteUri: _.websiteUrl,
                            type: "external",
                            children: (0, a.jsx)(C.h, {
                                className: "text-base400",
                                size: 20,
                                icon: (0, a.jsx)(d.G, {
                                    icon: g.g4
                                })
                            })
                        })]
                    })]
                })
            }
            var y = n(12112);

            function ChannelHero(e) {
                let {
                    channelFrag: t
                } = e, {
                    coverImage: n
                } = (0, w.S3c)(w.sZU, t), s = !!(null == n ? void 0 : n.url);
                return (0, a.jsx)(y.VM, {
                    backgroundImageSrc: s ? n.url : "/images/sound_letter_s.svg",
                    variant: "channel"
                })
            }
            var S = n(64894),
                M = n(72779),
                k = n(73950),
                E = n(76292),
                A = n(58285),
                P = n(85846);

            function useChannelMembers(e) {
                let {
                    channelId: t,
                    limit: n
                } = e, {
                    orderedList: a,
                    loadMoreNextPage: s,
                    isLoading: r,
                    hasNextPage: l = !1,
                    refetch: i,
                    status: o
                } = (0, w.NSZ)(w.rUc, {
                    filterQueryKey: {
                        channelId: t,
                        limit: n
                    },
                    getNextPageParam(e) {
                        let {
                            data: t
                        } = e;
                        return t.channelMembers.pageInfo.hasNextPage && {
                            after: t.channelMembers.pageInfo.endCursor
                        }
                    },
                    enabled: !!t,
                    variables: !!t && (e => {
                        let {
                            pageParam: a
                        } = e;
                        return {
                            channelId: t,
                            pagination: {
                                first: n,
                                after: (null == a ? void 0 : a.after) || null,
                                sort: w.Asd.Desc
                            }
                        }
                    }),
                    list(e) {
                        let {
                            channelMembers: t
                        } = e;
                        return t.edges.map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    ...P.gq
                });
                return {
                    channelMembers: a,
                    loadMore: s,
                    isLoading: r,
                    hasNextPage: l,
                    refetch: i,
                    status: o
                }
            }
            var T = n(54668),
                _ = n(22181),
                I = n(64571),
                U = n(6310),
                D = n(56949),
                O = n(95095);

            function formatDate(e) {
                return (0, c.default)(new Date(e), "MMM yyyy")
            }
            let ChannelMembersModal = e => {
                let {
                    channelId: t,
                    membersNumber: n
                } = e, [r, l] = (0, s.useState)(), [i, o] = (0, s.useState)(!0), {
                    channelMembers: d,
                    loadMore: c,
                    status: u
                } = useChannelMembers({
                    channelId: t,
                    limit: D.jb
                }), {
                    closeCancelModal: m
                } = (0, _.useModal)(), h = "success" === u && 0 === d.length, x = (0, s.useCallback)(() => "loading" === u ? (0, a.jsxs)("div", {
                    className: "h-6 px-6",
                    children: [(0, a.jsx)(O.T, {}), (0, a.jsx)(O.T, {}), (0, a.jsx)(O.T, {})]
                }) : (0, a.jsx)("div", {
                    className: "h-6"
                }), [u]), p = (0, a.jsx)(D.A_, {
                    ref: e => {
                        l(e || void 0)
                    },
                    empty: h,
                    onScroll: e => {
                        !i && e.currentTarget.scrollTop <= 0 && o(!0), e.currentTarget.scrollTop > 0 && i && o(!1)
                    },
                    children: h ? (0, a.jsx)(U.K, {
                        header: D.Sy,
                        subText: D.Jd
                    }) : (0, a.jsx)(A.OO, {
                        data: d,
                        itemContent: (e, t) => (function(e) {
                            let {
                                i: t,
                                node: n,
                                type: s
                            } = e, {
                                id: r
                            } = (0, w.S3c)(w.jjh, n.user);
                            return (0, a.jsx)("div", {
                                className: "px-6",
                                children: (0, a.jsx)(O.p, {
                                    user: n.user,
                                    sourceLocation: "Channel Page",
                                    secondaryText: "curator" === s ? "OWNER" === n.role ? "Admin" : "Moderator" : `Since ${formatDate(n.createdAt)}`
                                })
                            }, `user-${r}-${t}`)
                        })({
                            i: e,
                            node: t,
                            type: "member"
                        }),
                        customScrollParent: r,
                        endReached: c,
                        components: {
                            Footer: x
                        }
                    })
                });
                return (0, a.jsx)(T.Z, {
                    title: `${n} ${(0,I.Lo)({word:"member",count:n})}`,
                    closeModal: m,
                    bodyClassName: "px-0 mx-0",
                    body: p
                })
            };
            var R = n(54789),
                F = n(35998),
                $ = n(14016),
                z = n(53576),
                B = n(58658),
                H = n(8094),
                V = n(62335),
                Z = n(96301),
                W = n(21956),
                G = n(75747),
                J = n(6911),
                Y = n(64398),
                X = n(14034),
                Q = n(95390),
                q = n(36750);
            (0, q.c)({
                trigger: [w.eol],
                refetch: [w.fUv]
            });
            var K = n(63834),
                ee = n(53259);

            function Mobile(e) {
                let {
                    channelId: t,
                    channelWebappUri: n,
                    settingsPath: r,
                    joinStatus: l,
                    handleJoinOrLeaveChannel: i,
                    joiningOrLeaving: o,
                    isChannelOwner: c
                } = e, [u, m] = (0, s.useState)(!1), {
                    copy: h
                } = (0, J.F)({
                    text: n,
                    successMessage: "Link copied to clipboard"
                });
                return (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, a.jsxs)(V.N, {
                        isDropdownOpen: u,
                        setIsDropdownOpen: m,
                        children: [(0, a.jsxs)(H.Xi, {
                            onClick: () => {
                                h(), (0, X.uH)({
                                    event: "Share Channel Clicked",
                                    properties: {
                                        associationType: "Channel",
                                        associationId: t,
                                        channelId: t
                                    }
                                })
                            },
                            children: [(0, a.jsx)(d.G, {
                                icon: z.kZ,
                                size: "lg"
                            }), (0, a.jsx)(H.i_, {
                                children: "Copy link"
                            })]
                        }), c && (0, a.jsx)(H.Xi, {
                            children: (0, a.jsxs)(j.s, {
                                pathnameUri: (0, Q.OU)(r),
                                children: [(0, a.jsx)(d.G, {
                                    icon: F.mt,
                                    size: "lg"
                                }), (0, a.jsx)(H.i_, {
                                    children: "Edit"
                                })]
                            })
                        })]
                    }), !c && (0, a.jsx)(b.z, {
                        label: "JOINED" === l ? "Joined" : "Join",
                        variant: "JOINED" === l ? "tertiary" : "primary",
                        loading: o,
                        onClick: i,
                        size: "full",
                        className: "h-9 font-title !text-title-xs"
                    })]
                })
            }

            function Desktop(e) {
                let {
                    channelId: t,
                    channelWebappUri: n,
                    joinStatus: s,
                    loading: r,
                    settingsPath: l,
                    handleJoinOrLeaveChannel: i,
                    joiningOrLeaving: o,
                    isChannelOwner: c
                } = e, {
                    copy: u
                } = (0, J.F)({
                    text: n,
                    successMessage: "Link copied to clipboard"
                });
                return (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, a.jsx)(C.h, {
                        icon: (0, a.jsx)(d.G, {
                            icon: $.A$,
                            className: "text-base500",
                            fontSize: 22
                        }),
                        onClick: () => {
                            u(), (0, X.uH)({
                                event: "Share Channel Clicked",
                                properties: {
                                    associationType: "Channel",
                                    associationId: t,
                                    channelId: t
                                }
                            })
                        }
                    }), !c && (0, a.jsx)(b.z, {
                        label: "JOINED" === s ? "Joined" : "Join",
                        variant: "JOINED" === s ? "tertiary" : "primary",
                        loading: o,
                        onClick: i,
                        size: "full",
                        className: "h-9 font-title !text-title-xs"
                    }), c && (0, a.jsx)(b.z, {
                        label: "Edit",
                        variant: "primary",
                        href: (0, Q.OU)(l),
                        loading: r,
                        size: "full",
                        className: "h-9 font-title !text-title-xs"
                    })]
                })
            }
            let ChannelActionBar = e => {
                let {
                    channelId: t,
                    joinStatus: n,
                    notificationStatus: r
                } = e, {
                    authUser: l
                } = (0, Z.aC)(), i = (0, Y.S)(), {
                    openToast: o
                } = (0, G.useToast)(), {
                    isLoading: d,
                    joinOrLeaveChannel: c,
                    showRulesModal: u
                } = (0, ee._)({
                    channelId: t,
                    joinStatus: n
                }), {
                    isChannelOwner: m
                } = (0, K.j)({
                    channelId: t
                }), h = (0, s.useMemo)(() => "NOT_JOINED" === n ? u : c, [c, n, u]), {
                    setChannelNotificationPreferences: x,
                    isLoading: p
                } = function() {
                    let {
                        mutateAsync: e,
                        isLoading: t
                    } = (0, w.Dbo)(w.eol, {
                        retry: 5
                    });
                    return {
                        setChannelNotificationPreferences: e,
                        isLoading: t
                    }
                }(), f = (0, N.R)(async () => {
                    if (!l) {
                        (0, W.SR)();
                        return
                    }
                    if ("NOT_JOINED" !== n) try {
                        let e = await x({
                            channelId: t,
                            status: "ENABLED" === r ? "DISABLED" : "ENABLED"
                        });
                        if ("MutationSetUserNotificationPreferencesOnChannelSuccess" === e.data.setUserNotificationPreferencesOnChannel.__typename) {
                            o({
                                text: "ENABLED" === r ? "You won't receive notifications from this channel anymore." : "You'll receive notifications from this channel.",
                                variant: "success"
                            });
                            return
                        }
                        i({
                            action: B.L3.CHANNEL_NOTIFICATION_PREFERENCES_FAILED,
                            error: Error(e.data.setUserNotificationPreferencesOnChannel.message),
                            errorType: "CHANNELS",
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: e.data.setUserNotificationPreferencesOnChannel.message,
                            toast: P.fn,
                            pillar: "CHANNELS"
                        });
                        return
                    } catch (e) {
                        i({
                            action: B.L3.CHANNEL_NOTIFICATION_PREFERENCES_FAILED,
                            error: e,
                            errorType: "CHANNELS",
                            isArtistOnlyPage: !1,
                            level: "error",
                            message: "There was an error setting the channel notification preferences.",
                            toast: P.fn,
                            pillar: "CHANNELS"
                        })
                    }
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        className: "block lg:hidden",
                        children: (0, a.jsx)(Mobile, {
                            joiningOrLeaving: d,
                            handleJoinOrLeaveChannel: h,
                            isChannelOwner: m,
                            setNotificationPreferences: f,
                            settingNotificationPreferences: p,
                            ...e
                        })
                    }), (0, a.jsx)("div", {
                        className: "hidden lg:block",
                        children: (0, a.jsx)(Desktop, {
                            joiningOrLeaving: d,
                            handleJoinOrLeaveChannel: h,
                            isChannelOwner: m,
                            setNotificationPreferences: f,
                            settingNotificationPreferences: p,
                            ...e
                        })
                    })]
                })
            };
            var et = n(70119),
                en = n(72508);

            function useChannelFollowedMembers(e) {
                let {
                    channelId: t,
                    limit: n
                } = e, {
                    authUser: a
                } = (0, Z.aC)(), {
                    orderedList: s,
                    loadMoreNextPage: r,
                    isLoading: l
                } = (0, w.NSZ)(w.AtH, {
                    enabled: !!a,
                    filterQueryKey: {
                        channelId: t,
                        limit: n
                    },
                    getNextPageParam(e) {
                        let {
                            data: {
                                channelMembersWhoAreFollowed: t
                            }
                        } = e;
                        if ("QueryChannelMembersWhoAreFollowedSuccess" === t.__typename) return (null == t ? void 0 : t.data.members.pageInfo.hasNextPage) && {
                            after: null == t ? void 0 : t.data.members.pageInfo.endCursor
                        }
                    },
                    variables(e) {
                        let {
                            pageParam: a
                        } = e;
                        return {
                            channelId: t,
                            pagination: {
                                first: n,
                                after: null == a ? void 0 : a.after
                            }
                        }
                    },
                    list(e) {
                        let {
                            channelMembersWhoAreFollowed: t
                        } = e;
                        return "QueryChannelMembersWhoAreFollowedSuccess" === t.__typename ? t.data.members.edges.map(e => e.node.user) : []
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    },
                    staleTime: 0
                }), i = s.length;
                return {
                    members: s,
                    memberCount: i,
                    isLoading: l,
                    loadMore: r
                }
            }
            let ChannelFollowedMembersModal_userItemContent = (e, t) => {
                    let {
                        id: n
                    } = (0, w.S3c)(w.jjh, t);
                    return (0, a.jsx)("div", {
                        className: "px-6",
                        children: (0, a.jsx)(O.p, {
                            user: t,
                            sourceLocation: "Channel Page"
                        })
                    }, `user-${n}-${e}`)
                },
                ChannelFollowedMembersModal = e => {
                    let {
                        channelId: t
                    } = e, {
                        members: n,
                        isLoading: r,
                        loadMore: l
                    } = useChannelFollowedMembers({
                        channelId: t,
                        limit: D.jb
                    }), {
                        closeCancelModal: i
                    } = (0, _.useModal)(), o = 0 === n.length || !n, [d, c] = s.useState(), [u, m] = s.useState(!0), h = s.useMemo(() => n.slice(0, D.jb), [n]), x = s.useMemo(() => n.slice(D.jb), [n]), p = s.useCallback(() => r ? (0, a.jsxs)("div", {
                        className: "h-6 px-6",
                        children: [(0, a.jsx)(O.T, {}), (0, a.jsx)(O.T, {}), (0, a.jsx)(O.T, {})]
                    }) : (0, a.jsx)("div", {
                        className: "h-6"
                    }), [r]), f = (0, a.jsxs)(D.A_, {
                        ref: e => {
                            c(e || void 0)
                        },
                        empty: o,
                        onScroll: e => {
                            !u && e.currentTarget.scrollTop <= 0 && m(!0), e.currentTarget.scrollTop > 0 && u && m(!1)
                        },
                        children: [o && !r && (0, a.jsx)(U.K, {
                            header: D.Sy,
                            subText: D.Jd
                        }), !o && (0, a.jsxs)(a.Fragment, {
                            children: [h.length > 0 && h.map((e, t) => ChannelFollowedMembersModal_userItemContent(t, e)), x.length > 0 && (0, a.jsx)(A.OO, {
                                data: x,
                                itemContent: ChannelFollowedMembersModal_userItemContent,
                                customScrollParent: d,
                                endReached: l,
                                components: {
                                    Footer: p
                                }
                            })]
                        })]
                    });
                    return (0, a.jsx)(T.Z, {
                        title: `${n.length} ${(0,I.Lo)({word:"member",count:n.length})}`,
                        closeModal: i,
                        bodyClassName: "px-0 mx-0",
                        body: f
                    })
                };
            var ea = n(96351);
            let ChannelSocialProof = e => {
                let {
                    channelId: t
                } = e, {
                    authUser: n
                } = (0, Z.aC)(), {
                    openModal: s
                } = (0, _.useModal)(), {
                    memberCount: r,
                    members: l,
                    isLoading: i
                } = useChannelFollowedMembers({
                    channelId: t,
                    limit: 5
                });
                return (i || 0 !== r) && (i || l.length) && n ? i ? (0, a.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-row-reverse",
                        children: Array.from({
                            length: 3
                        }).map((e, t) => (0, a.jsx)("div", {
                            className: "-mr-3.5 h-6 w-6 animate-pulse rounded-full bg-neutral200 sm:-mr-3 "
                        }, `social-proof-avatar-${t}`))
                    }), (0, a.jsx)("div", {
                        className: "h-3.5 w-48 animate-pulse rounded-md bg-neutral200 py-1 md:w-56"
                    })]
                }) : (0, a.jsxs)("div", {
                    className: "flex w-full items-center gap-1 md:gap-0",
                    children: [(0, a.jsx)("div", {
                        className: "block md:hidden",
                        children: (0, a.jsx)(en.d, {
                            users: l,
                            variant: "social-proof"
                        })
                    }), (0, a.jsxs)("div", {
                        className: "inline-flex w-full flex-wrap items-center pr-2 md:flex md:flex-nowrap",
                        children: [(0, a.jsxs)("div", {
                            className: "hidden items-center md:flex",
                            children: [(0, a.jsx)(en.d, {
                                users: l,
                                variant: "social-proof"
                            }), P.L_]
                        }), (0, a.jsxs)("div", {
                            className: "mb-[2px] flex items-baseline md:mb-0",
                            children: [(0, a.jsx)(et.J, {
                                users: l,
                                totalUsers: r,
                                othersOnClick: () => {
                                    s(ea.w.CHANNEL_MEMBERS, {
                                        body: (0, a.jsx)(ChannelFollowedMembersModal, {
                                            channelId: t
                                        })
                                    })
                                },
                                variant: "social-proof"
                            }), (0, a.jsx)("span", {
                                className: "hidden text-base-s md:block",
                                children: "who you're following joined."
                            }), (0, a.jsx)("span", {
                                className: "block text-base-s md:hidden",
                                children: "joined."
                            })]
                        })]
                    })]
                }) : null
            };

            function ChannelInfo(e) {
                var t, n;
                let {
                    channelFrag: s
                } = e, r = (0, w.S3c)(w.N8t, s), l = null !== (n = null === (t = r.profileImage) || void 0 === t ? void 0 : t.url) && void 0 !== n ? n : "/images/sound_letter_s.svg", {
                    openModal: i
                } = (0, _.useModal)(), d = (0, o.V_)(r.nameSlug), {
                    isLoading: c,
                    joinStatus: u,
                    postCount: m,
                    memberCount: h,
                    notificationStatus: x
                } = (0, R.v)({
                    channelId: r.id
                }), p = (0, N.R)(e => (0, a.jsx)(k.G, {
                    src: l,
                    alt: "Profile Image",
                    width: e,
                    height: e,
                    className: "h-full rounded-md object-cover",
                    style: {
                        minWidth: `${e}px`,
                        minHeight: `${e}px`
                    },
                    placeholder: "blur",
                    blurDataURL: (0, E.Z)(e, e)
                }));
                return (0, a.jsxs)("div", {
                    className: "flex w-full flex-col gap-6 lt:px-0",
                    children: [(0, a.jsxs)("div", {
                        className: "relative flex w-full items-end justify-between lg:items-end",
                        children: [(0, a.jsx)("div", {
                            className: "flex md:hidden",
                            children: p(108)
                        }), (0, a.jsx)("div", {
                            className: "group z-above2 hidden md:flex",
                            children: p(144)
                        }), (0, a.jsx)("div", {
                            className: "block lg:hidden",
                            children: (0, a.jsx)(ChannelActionBar, {
                                channelId: r.id,
                                channelWebappUri: r.webappUri,
                                settingsPath: d,
                                loading: c,
                                joinStatus: u,
                                notificationStatus: x
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "relative flex w-full flex-col gap-4",
                        children: [(0, a.jsxs)("div", {
                            className: "flex w-full flex-col gap-1 md:gap-2",
                            children: [(0, a.jsxs)("div", {
                                className: "flex w-full items-center justify-between",
                                children: [(0, a.jsx)(M.o, {
                                    loading: c,
                                    className: "mb-[6px] h-5 w-2/5 md:mb-[10px] md:h-6 md:w-1/4",
                                    children: (0, a.jsx)("div", {
                                        className: "flex items-center gap-1",
                                        children: (0, a.jsx)("h2", {
                                            className: "font-title text-title-l font-medium md:text-title-xl",
                                            children: r.name
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "hidden lg:block",
                                    children: (0, a.jsx)(ChannelActionBar, {
                                        channelId: r.id,
                                        channelWebappUri: r.webappUri,
                                        settingsPath: d,
                                        loading: c,
                                        joinStatus: u,
                                        notificationStatus: x
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                className: "lg:hidden",
                                children: (0, a.jsx)(ChannelAbout, {
                                    channelFrag: r,
                                    showCreatedAt: !1,
                                    showSocials: !0
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex gap-5 pt-1 md:gap-8",
                            children: [(0, a.jsx)(S.t, {
                                loading: c,
                                total: m,
                                label: "Posts"
                            }), (0, a.jsx)(S.t, {
                                loading: c,
                                total: h,
                                label: "Members",
                                onClick: () => {
                                    i(_.ModalType.CHANNEL_MEMBERS, {
                                        body: (0, a.jsx)(ChannelMembersModal, {
                                            channelId: r.id,
                                            membersNumber: h
                                        })
                                    })
                                }
                            })]
                        }), (0, a.jsx)(ChannelSocialProof, {
                            channelId: r.id
                        })]
                    })]
                })
            }
            var es = n(69349),
                er = n(59287),
                el = n(10228),
                ei = n(96220),
                eo = n(68753),
                ed = n(25347);

            function Skeleton() {
                return (0, a.jsxs)("div", {
                    className: "flex w-full items-center justify-between",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [(0, a.jsx)("div", {
                            className: "h-10 w-10 flex-shrink-0 animate-pulse rounded-full bg-neutral200"
                        }), (0, a.jsx)("div", {
                            className: "flex h-6 w-[120px] animate-pulse rounded-md bg-neutral200"
                        })]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)("div", {
                            className: "h-6 w-20 animate-pulse rounded-md bg-neutral200"
                        })
                    })]
                })
            }

            function ChannelMembers(e) {
                let {
                    channelId: t
                } = e, {
                    openModal: n
                } = (0, _.useModal)(), {
                    channelMembers: s,
                    hasNextPage: r,
                    status: l
                } = useChannelMembers({
                    channelId: t,
                    limit: 5
                }), {
                    memberCount: i
                } = (0, R.v)({
                    channelId: t
                }), o = "success" === l && 0 === s.length;
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, a.jsx)("h2", {
                            className: "font-title text-title-s font-medium text-base800",
                            children: "Members"
                        }), r && (0, a.jsx)("button", {
                            className: "font-base text-[11px] font-medium leading-[100%] text-base800 transition-all duration-500 hover:brightness-130",
                            onClick: () => {
                                n(ea.w.CHANNEL_MEMBERS, {
                                    body: (0, a.jsx)(ChannelMembersModal, {
                                        channelId: t,
                                        membersNumber: i
                                    })
                                })
                            },
                            children: (0, a.jsx)(d.G, {
                                icon: es._t,
                                fontSize: 16
                            })
                        })]
                    }), "loading" === l ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(Skeleton, {}), (0, a.jsx)(Skeleton, {}), (0, a.jsx)(Skeleton, {})]
                    }) : o ? (0, a.jsx)("span", {
                        className: "font-base text-base-m font-normal text-base700",
                        children: "No channel members."
                    }) : s.map(e => {
                        var t, n, s, r, l, i, o;
                        return (0, a.jsxs)("div", {
                            className: "flex w-full items-center justify-between",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [(0, a.jsx)(ed.I, {
                                    userHoverCardContent: (0, a.jsx)(el.U, {
                                        userId: e.user.id
                                    }),
                                    trigger: (0, a.jsx)("div", {
                                        className: "h-10 w-10 flex-shrink-0",
                                        children: (0, a.jsx)(eo.q, {
                                            size: 40,
                                            src: null === (t = e.user.avatar) || void 0 === t ? void 0 : t.url,
                                            walletAddress: e.user.publicAddress,
                                            webappUri: null !== (l = null === (n = e.user.artist) || void 0 === n ? void 0 : n.webappUri) && void 0 !== l ? l : e.user.webappUri,
                                            borderRadius: 999
                                        })
                                    }),
                                    triggerAsChild: !0
                                }), (0, a.jsxs)("div", {
                                    className: "flex w-full flex-col gap-[2px]",
                                    children: [(0, a.jsx)(ed.I, {
                                        userHoverCardContent: (0, a.jsx)(el.U, {
                                            userId: e.user.id
                                        }),
                                        trigger: (0, a.jsx)("div", {
                                            children: (0, a.jsx)(j.s, {
                                                className: "font-title text-[13px] font-medium leading-[120%] text-base600",
                                                pathnameUri: (0, Q.OU)(e.user.webappUri),
                                                children: null !== (o = null !== (i = null === (s = e.user.artist) || void 0 === s ? void 0 : s.name) && void 0 !== i ? i : e.user.displayName) && void 0 !== o ? o : (0, er.pc)(e.user.publicAddress)
                                            })
                                        }),
                                        triggerAsChild: !0
                                    }), (0, a.jsxs)("span", {
                                        className: "font-base text-[11px] font-medium leading-[100%] text-base500",
                                        children: ["Since ", formatDate(e.createdAt)]
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(ei.e, {
                                    artistId: null === (r = e.user.artist) || void 0 === r ? void 0 : r.id,
                                    userId: e.user.id,
                                    variant: "primary",
                                    sourceLocation: "Channel Page",
                                    size: "XS"
                                })
                            })]
                        }, e.id)
                    })]
                })
            }
            let ec = "line-clamp-3";

            function ChannelRules(e) {
                var t;
                let {
                    channelFrag: n
                } = e, [r, l] = (0, s.useState)(!1), [i, d] = (0, s.useState)(ec), [c, h] = (0, s.useState)(0), x = (0, s.useRef)(null), p = !!c && c > 54, f = (0, N.R)(() => {
                    l(e => (e || d(""), !e))
                }), v = (0, N.R)(() => {
                    r ? d("") : d(ec)
                });
                (0, s.useEffect)(() => {
                    var e;
                    h(null === (e = x.current) || void 0 === e ? void 0 : e.scrollHeight)
                }, [x, null === (t = x.current) || void 0 === t ? void 0 : t.scrollHeight]);
                let {
                    rules: g
                } = (0, w.S3c)(w.vyI, n);
                return (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [(0, a.jsx)("h2", {
                        className: "font-title text-title-s font-medium text-base800",
                        children: "Rules"
                    }), (0, a.jsx)(u.E.span, {
                        ref: x,
                        animate: r ? "expand" : "collapse",
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
                                height: p ? 54 : "auto",
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
                        className: (0, m.m)("font-base !text-base-m font-normal text-base700", "flex h-auto flex-col overflow-hidden text-ellipsis whitespace-pre-wrap", i),
                        onAnimationComplete: v,
                        children: g || o.mZ
                    }), !!p && (0, a.jsx)(b.z, {
                        label: r ? "See less" : "See more",
                        variant: "text",
                        onClick: f,
                        size: "S",
                        className: "-mx-1 h-auto px-1 py-0 font-base !text-[12px] font-semibold leading-[16px] text-base900"
                    })]
                })
            }
            var eu = n(61450),
                em = n(75196),
                eh = n(31981),
                ex = n(66778),
                ep = n(78924),
                ef = n(43607),
                ev = n(56478),
                eg = n(43158);

            function ChannelPosts(e) {
                let {
                    channelId: t
                } = e, {
                    tablet: n
                } = (0, eg.useMediaQuery)(), {
                    orderedList: r,
                    isLoadingNewPage: l,
                    loadMoreNextPage: i,
                    error: o,
                    hasNextPage: d = !1
                } = (0, w.NSZ)(w.SkT, {
                    staleTime: 1 / 0,
                    getNextPageParam(e) {
                        let {
                            data: t
                        } = e;
                        return t.channelPosts.pageInfo.hasNextPage && {
                            after: t.channelPosts.pageInfo.endCursor
                        }
                    },
                    filterQueryKey: {
                        channelId: t
                    },
                    variables(e) {
                        let {
                            pageParam: a
                        } = e, s = (null == a ? void 0 : a.after) || null;
                        return {
                            pagination: {
                                first: null == s ? 10 : 5,
                                after: s
                            },
                            channelId: t,
                            showPreviewComment: n
                        }
                    },
                    list(e) {
                        let {
                            channelPosts: t
                        } = e;
                        return t.edges.filter(e => "PlaylistPost" === e.node.__typename || "ReleasePost" === e.node.__typename || "GeneralPost" === e.node.__typename).map(e => e.node)
                    },
                    uniq(e) {
                        let {
                            id: t
                        } = e;
                        return t
                    }
                }), c = (0, s.useMemo)(() => 0 === r.length && !l && !o, [o, l, r.length]), u = (0, s.useMemo)(() => d || l ? (0, a.jsx)(ef.$, {
                    className: "py-5 text-neutral400"
                }) : null, [d, l]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [!!o && (0, a.jsx)(em.IY, {
                        mainFeed: !0,
                        divider: !1
                    }), c && (0, a.jsx)(ChannelPosts_EmptyState, {}), (null == r ? void 0 : r.length) > 0 ? (0, a.jsx)(A.OO, {
                        useWindowScroll: !0,
                        data: r,
                        itemContent: (e, t) => (0, a.jsxs)("div", {
                            children: [(0, a.jsx)(ChannelPost, {
                                post: t
                            }), (0, a.jsx)(eu.r, {})]
                        }),
                        endReached: i,
                        components: {
                            Footer: () => u
                        },
                        style: {
                            willChange: "height"
                        },
                        increaseViewportBy: {
                            bottom: 4e3,
                            top: 500
                        }
                    }) : u]
                })
            }

            function ChannelPost(e) {
                var t, n;
                let {
                    post: s
                } = e;
                return s ? (0, a.jsx)(ex.Y, {
                    post: s,
                    repostSource: null,
                    variant: "channel",
                    previewCommentFrag: null === (n = s.comments) || void 0 === n ? void 0 : null === (t = n.edges[0]) || void 0 === t ? void 0 : t.node,
                    hideDropdown: !1,
                    hideActions: !1,
                    commentButtonAction: eh.id.GoPostPage,
                    showCommentInput: !1
                }) : (0, a.jsx)("div", {
                    className: "text-base-s text-neutral400",
                    children: P.YA
                })
            }

            function ChannelPosts_EmptyState() {
                return (0, a.jsx)(ep.Vm, {
                    illustration: (0, a.jsx)(ev.S, {}),
                    subHeading: "It's a bit quiet in here",
                    text: "Wait for the channel owner to create some awesome content!",
                    buttonLabel: "Go to Home",
                    href: "/",
                    mainFeed: !0
                })
            }(0, q.c)({
                refetch: [w.SkT, w.fUv],
                trigger: [w.G3U, w.gU2]
            });
            var eb = n(68067),
                eC = n(53746),
                ej = n(54614),
                ew = n(66361);

            function usePostToChannel(e) {
                let {
                    channelId: t
                } = e, {
                    isLoading: n,
                    joinStatus: a
                } = (0, R.v)({
                    channelId: t
                }), r = (0, s.useMemo)(() => "JOINED" === a, [a]);
                return {
                    isAllowedToPost: r,
                    isLoading: n
                }
            }

            function ChannelPostInput(e) {
                let {
                    channelId: t
                } = e, {
                    authUser: n,
                    isAuthenticatedWithAPI: r
                } = (0, Z.aC)(), {
                    openModal: l
                } = (0, _.useModal)(), {
                    isAllowedToPost: i
                } = usePostToChannel({
                    channelId: t
                }), o = (0, s.useMemo)(() => r ? `What sound is on your mind${(null==n?void 0:n.displayName)?`, ${n.displayName}...`:"?"}` : "Sign in to post in channel...", [r, null == n ? void 0 : n.displayName]), d = (0, N.R)(() => {
                    if (!r) {
                        (0, W.SR)();
                        return
                    }
                    i && ((0, X.uH)({
                        event: "Create Post Clicked",
                        properties: {
                            sourceComponent: "Channel Post Input"
                        }
                    }), l(_.ModalType.CHANNEL_POST, {
                        body: (0, a.jsx)(ew.t, {
                            sourceLocation: "Channel Post Input",
                            preselectedResource: null,
                            channelId: t
                        }, "post-input")
                    }))
                });
                return i ? (0, a.jsx)("div", {
                    className: "mt-10",
                    children: (0, a.jsx)(PostInputUI, {
                        onClick: d,
                        placeholder: o,
                        isLocked: !i
                    })
                }) : null
            }

            function PostInputUI(e) {
                var t;
                let {
                    authUser: n
                } = (0, Z.aC)(), {
                    tablet: s
                } = (0, eg.useMediaQuery)(), {
                    onClick: r,
                    placeholder: l,
                    isLocked: i
                } = e, o = (0, a.jsx)("div", {
                    className: "flex aspect-square h-full w-min flex-00auto items-center justify-center rounded-full bg-base800 p-2 opacity-30",
                    children: i ? (0, a.jsx)(d.G, {
                        icon: eb.by,
                        className: "text-base-xs text-white md:text-base-m"
                    }) : (0, a.jsx)(d.G, {
                        icon: eC.OH,
                        className: "text-base-xs text-white md:text-base-m"
                    })
                });
                return (0, a.jsxs)("div", {
                    className: (0, m.m)("flex w-full items-center gap-2 md:gap-4"),
                    children: [(0, a.jsx)("div", {
                        className: (0, m.m)("flex-shrink-0 rounded-full", !n && "bg-neutral500", "h-10 w-10 md:h-12 md:w-12"),
                        children: n ? (0, a.jsx)(eo.q, {
                            walletAddress: n.publicAddress,
                            username: n.username,
                            webappUri: n.webappUri,
                            size: s ? 48 : 40,
                            src: null === (t = n.avatar) || void 0 === t ? void 0 : t.url,
                            borderRadius: "50%"
                        }) : (0, a.jsx)("div", {
                            className: "flex items-center justify-center bg-white",
                            children: (0, a.jsx)(d.G, {
                                icon: ej.m0,
                                className: "text-avatar text-neutral500 md:text-avatar-md"
                            })
                        })
                    }), (0, a.jsxs)("button", {
                        className: "relative flex flex-1 items-center rounded-md bg-base100 px-3 py-2 text-base-l text-neutral500 ring-inset ring-base300 hover:bg-neutral50 hover:ring-1",
                        onClick: r,
                        children: [(0, a.jsx)("div", {
                            className: "line-clamp-1 flex-1 text-left",
                            children: l
                        }), o]
                    })]
                })
            }
            var eN = n(55344);
            n(96960);
            let eL = (0, eN.Z)("5 seconds");
            (0, q.c)({
                trigger: [w.wFf],
                refetch: [w.jkh],
                throttled: "2 seconds"
            });
            var ey = n(76501),
                eS = n(80222),
                eM = n(69965),
                ek = !0;

            function ChannelPage(e) {
                let {
                    channel: t,
                    seo: n
                } = e, {
                    enabled: r,
                    isLoading: d
                } = (0, o.og)(), {
                    value: c
                } = (0, i.useGate)(P.ln.SPOTIFY_LINKS), [u, m] = (0, s.useState)(null);
                ! function(e) {
                    let {
                        channelId: t
                    } = e, {
                        enabled: n
                    } = (0, o.og)(), {
                        authUser: a
                    } = (0, Z.aC)(), r = (0, Y.S)(), {
                        mutateAsync: i,
                        isLoading: d
                    } = (0, w.Dbo)(w.wFf, {
                        retry: 3
                    }), c = (0, N.R)(async () => {
                        if (t && a && n) try {
                            var e, s;
                            let n = await i({
                                channelId: t
                            });
                            if ((null === (e = n.data.setUserEngagementOnChannel) || void 0 === e ? void 0 : e.__typename) !== "MutationSetUserEngagementOnChannelSuccess") throw Error(null === (s = n.data.setUserEngagementOnChannel) || void 0 === s ? void 0 : s.message)
                        } catch (e) {
                            r({
                                action: B.L3.SET_CHANNEL_ENGAGEMENT_FAILED,
                                error: e,
                                errorType: "CHANNELS",
                                isArtistOnlyPage: !1,
                                level: "error",
                                message: "Failed to set user engagement on channel",
                                pillar: "CHANNELS",
                                indexedTags: {
                                    channelId: t
                                }
                            })
                        }
                    });
                    (0, s.useEffect)(() => {
                        if (!a || !t || !n) return;
                        let e = setTimeout(() => {
                            c()
                        }, eL);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [a, t, n, c]), (0, s.useEffect)(() => {
                        if (!a || !t || !n) return;
                        let handleOnBeforeUnload = async () => {
                            await (0, w.Wcv)(w.wFf, {
                                variables: {
                                    channelId: t
                                },
                                keepalive: !0
                            })
                        };
                        return window.addEventListener("beforeunload", handleOnBeforeUnload), l().events.on("routeChangeStart", handleOnBeforeUnload), () => {
                            window.removeEventListener("beforeunload", handleOnBeforeUnload), l().events.off("routeChangeStart", handleOnBeforeUnload)
                        }
                    }, [a, t, n, c])
                }({
                    channelId: null == t ? void 0 : t.id
                });
                let {
                    isAllowedToPost: h
                } = usePostToChannel({
                    channelId: null == t ? void 0 : t.id
                });
                return (s.useEffect(() => {
                    r || d || l().replace("/")
                }, [r, d]), t) ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(eM.pQ, { ...n
                    }), (0, a.jsx)("div", {
                        className: "flex min-h-screen flex-col bg-white",
                        children: (0, a.jsxs)("div", {
                            className: "w-full bg-white",
                            children: [(0, a.jsx)(ChannelHero, {
                                channelFrag: t
                            }), (0, a.jsx)("div", {
                                className: "relative flex min-h-page justify-center overflow-x-clip md:min-h-md-page",
                                children: (0, a.jsxs)("div", {
                                    className: "flex w-full gap-20 px-4 pb-6 md:px-6 dt:max-w-content",
                                    children: [(0, a.jsx)("div", {
                                        className: "min-w-0 flex-1",
                                        children: (0, a.jsxs)("div", {
                                            className: "relative -top-14 z-above3 mx-auto mt-0 flex w-full max-w-content flex-col lg:-top-32 lt:pr-12",
                                            children: [(0, a.jsx)(ChannelInfo, {
                                                channelFrag: t
                                            }), h ? c ? (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)("div", {
                                                    className: "mb-3 mt-6 hidden md:block",
                                                    children: (0, a.jsx)(ey.R, {
                                                        channel: t,
                                                        sourceLocation: "Channel Post Input",
                                                        selectedResource: u,
                                                        setSelectedResource: m,
                                                        variant: "inline",
                                                        showChannelSelector: !1,
                                                        channelSelectorDisabled: !0
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "hidden md:block",
                                                    children: (0, a.jsx)(eu.r, {
                                                        className: "pb-0 pt-5"
                                                    })
                                                })]
                                            }) : (0, a.jsx)(ChannelPostInput, {
                                                channelId: t.id
                                            }) : null, (0, a.jsx)("div", {
                                                className: "mt-10 flex w-full flex-col gap-6",
                                                children: (0, a.jsx)(ChannelPosts, {
                                                    channelId: t.id
                                                })
                                            })]
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "relative hidden h-full min-w-0 flex-[0_0_304px] lt:inline",
                                        children: (0, a.jsx)("div", {
                                            className: "sticky mt-3 hidden h-fit min-w-0 overflow-x-hidden lt:flex",
                                            children: (0, a.jsx)("div", {
                                                className: "flex w-full min-w-0 flex-col",
                                                children: (0, a.jsxs)("div", {
                                                    className: "mt-8 flex w-full flex-col gap-10",
                                                    children: [(0, a.jsx)(ChannelAbout, {
                                                        channelFrag: t,
                                                        showCreatedAt: !0,
                                                        showSocials: !0
                                                    }), (0, a.jsx)(ChannelRules, {
                                                        channelFrag: t
                                                    }), (0, a.jsx)(ChannelMembers, {
                                                        channelId: t.id
                                                    })]
                                                })
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    }), h && (0, a.jsx)(eS.g, {
                        channelId: t.id,
                        selectedResource: null,
                        sourceLocation: "Channel Floating Button",
                        channelSelectorDisabled: !0
                    })]
                }) : (0, a.jsx)("div", {
                    className: "flex h-screen w-full items-center justify-center",
                    children: (0, a.jsx)(ef.$, {})
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
        65796: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fab",
                iconName: "telegram",
                icon: [496, 512, [62462, "telegram-plane"], "f2c6", "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]
            }, t.Uv = t.DF
        },
        47460: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fab",
                iconName: "tiktok",
                icon: [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]
            }, t.AB = t.DF
        },
        4892: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "calendar",
                icon: [448, 512, [128197, 128198], "f133", "M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"]
            }, t.fT = t.DF
        },
        53576: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "far",
                iconName: "copy",
                icon: [512, 512, [], "f0c5", "M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z"]
            }, t.kZ = t.DF
        },
        79162: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fas",
                iconName: "globe",
                icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]
            }, t.g4 = t.DF
        },
        68067: function(e, t) {
            "use strict";
            t.DF = {
                prefix: "fas",
                iconName: "lock",
                icon: [448, 512, [128274], "f023", "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"]
            }, t.by = t.DF
        },
        12424: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = "paper-plane-top",
                a = ["paper-plane-alt", "send"],
                s = "e20a",
                r = "M81.9 27.8C47.1 12.7 12.8 50.1 30.8 83.5l69.3 128.8c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L30.8 428.5c-18 33.4 16.3 70.8 51.1 55.7L523.8 292.7c32.1-13.9 32.1-59.5 0-73.4L81.9 27.8z";
            t.definition = {
                prefix: "fas",
                iconName: n,
                icon: [576, 512, a, s, r]
            }, t.faPaperPlaneTop = t.definition, t.prefix = "fas", t.iconName = n, t.width = 576, t.height = 512, t.ligatures = a, t.unicode = s, t.svgPathData = r, t.aliases = a
        },
        53746: function(e, t, n) {
            "use strict";
            var a = n(12424);
            t.DF = {
                prefix: a.prefix,
                iconName: a.iconName,
                icon: [a.width, a.height, a.aliases, a.unicode, a.svgPathData]
            }, t.OH = t.DF, a.prefix, a.iconName, a.width, a.height, a.aliases, a.unicode, a.svgPathData, a.aliases
        },
        28384: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return s
                },
                N: function() {
                    return r
                }
            });
            var a = n(80834);
            let s = (0, a.IM)((0, a.Z_)(), (0, a.O7)().or((0, a.Rx)())).and((0, a.Ry)({
                    hasFeedAccess: (0, a.O7)().default(!1),
                    hasLeaderboardAccess: (0, a.O7)().default(!1),
                    hasDismissedNewRewardsFeatureBanner: (0, a.O7)().default(!1),
                    hasDismissedNewLeaderboardFeatureBanner: (0, a.O7)().default(!1),
                    hasDismissedSetupProfile: (0, a.O7)().default(!1),
                    hasDismissedNewChannelsFeatureBanner: (0, a.O7)().default(!1),
                    version: (0, a.Rx)().int().min(1)
                })),
                r = {
                    hasFeedAccess: !1,
                    hasLeaderboardAccess: !1,
                    hasDismissedNewRewardsFeatureBanner: !1,
                    hasDismissedNewLeaderboardFeatureBanner: !1,
                    hasDismissedSetupProfile: !1,
                    hasDismissedNewChannelsFeatureBanner: !1,
                    version: 5
                }
        }
    },
    function(e) {
        e.O(0, [4361, 9721, 2145, 5265, 8608, 2889, 3879, 5441, 286, 8631, 7701, 9761, 5464, 8285, 5221, 1165, 247, 4449, 9416, 7543, 2332, 4578, 121, 9032, 3429, 199, 1932, 9289, 7006, 9774, 2888, 179], function() {
            return e(e.s = 54424)
        }), _N_E = e.O()
    }
]);