"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2138], {
        55082: function(e, t, a) {
            a.d(t, {
                Y: function() {
                    return useHasBanner
                }
            });
            var s = a(31511),
                i = a(96301),
                l = a(36916);
            let useHasBanner = () => {
                let {
                    isAuthenticatedWithAPI: e,
                    isConnectingAPIUser: t
                } = (0, i.aC)(), {
                    enabled: a
                } = (0, s.og)(), {
                    hasDismissedNewRewardsFeatureBanner: n,
                    loading: r,
                    hasDismissedNewChannelsFeatureBanner: o
                } = (0, l.d)(), d = !e || e && "not-dismissed" === n.type, c = !e || e && "not-dismissed" === o.type;
                return !(t || r) && (a ? c : d)
            }
        },
        3037: function(e, t, a) {
            a.d(t, {
                a: function() {
                    return UserInfo
                }
            });
            var s = a(16356);
            a(97352), a(96960);
            var i = a(8205),
                l = a(33670),
                n = a(68753),
                r = a(97946),
                o = a(43158),
                d = a(3928),
                c = a(26191),
                u = a(95390);
            let UserInfo = e => {
                    let {
                        userInfo: t,
                        ...a
                    } = e, {
                        close: i
                    } = (0, c.k)(), {
                        tablet: f
                    } = o.MediaQuery.useContainer(), v = (0, d.S3c)(d.i5e, t), {
                        publicAddress: b,
                        avatar: g
                    } = v, j = v.username;
                    return (0, s.jsxs)(m, { ...a,
                        children: [(0, s.jsx)(x, {
                            onClick: i,
                            mobileNavOptions: a.mobileNavOptions || a.newMobileNav,
                            children: (0, s.jsx)(n.q, {
                                size: f ? 32 : 48,
                                src: null == g ? void 0 : g.url,
                                walletAddress: b,
                                borderRadius: 1e3,
                                disableLink: !a.desktopNavHeader,
                                username: j,
                                webappUri: v.webappUri
                            })
                        }), (0, s.jsxs)(h, {
                            mobileNavOptions: a.mobileNavOptions || a.newMobileNav,
                            children: [(0, s.jsx)("h1", {
                                children: a.desktopNavHeader ? (0, s.jsx)(r.s, {
                                    onClick: i,
                                    pathnameUri: (0, u.OU)(v.webappUri),
                                    children: j
                                }) : j
                            }), (0, s.jsx)(p, {
                                children: (0, s.jsx)(l.g, {
                                    publicAddress: b
                                })
                            })]
                        })]
                    })
                },
                m = (0, i.zo)("div", {
                    display: "flex",
                    gap: 12,
                    marginTop: 20,
                    variants: {
                        mobileNavOptions: {
                            true: {
                                height: "100%",
                                marginTop: 0,
                                alignItems: "center"
                            }
                        },
                        desktopNavHeader: {
                            true: {
                                alignItems: "center",
                                margin: 16
                            }
                        },
                        newMobileNav: {
                            true: {
                                margin: 0
                            }
                        }
                    }
                }),
                x = (0, i.zo)("div", {
                    display: "flex",
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    variants: {
                        mobileNavOptions: {
                            true: {
                                width: 48,
                                height: 48
                            }
                        },
                        newMobileNav: {
                            true: {
                                width: 48,
                                height: 48
                            }
                        }
                    }
                }),
                h = (0, i.zo)("div", {
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    overflow: "hidden",
                    gap: 8,
                    "@tablet": {
                        gap: 0
                    },
                    h1: {
                        base: "L",
                        fontWeight: 600,
                        color: "$neutral900",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    },
                    ".publicAddress": {
                        base: "S",
                        color: "$base500",
                        fontWeight: 500
                    },
                    variants: {
                        mobileNavOptions: {
                            true: {
                                height: "100%",
                                justifyContent: "space-around",
                                flexGrow: 0,
                                h1: {
                                    fontSize: 18,
                                    fontWeight: 600,
                                    color: "$black"
                                },
                                ".publicAddress": {
                                    base: "M",
                                    color: "$base500",
                                    fontWeight: 500
                                }
                            }
                        }
                    }
                }),
                p = (0, i.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    position: "relative",
                    gap: 6,
                    ".copy-address-button": {
                        width: 16,
                        height: 10
                    },
                    "@tablet": {
                        ".copy-address-button": {
                            marginTop: 0,
                            height: 14
                        }
                    }
                })
        },
        83657: function(e, t, a) {
            a.d(t, {
                B: function() {
                    return useShouldShowReferralEarningsIndicator
                }
            });
            var s = a(96301);

            function useShouldShowReferralEarningsIndicator() {
                let {
                    authUser: e
                } = (0, s.aC)();
                return !!(null == e ? void 0 : e.lastReferralWithdrawableBalance) && "0" !== e.lastReferralWithdrawableBalance
            }
        },
        12138: function(e, t, a) {
            a.r(t), a.d(t, {
                Header: function() {
                    return eP
                }
            });
            var s = a(16356),
                i = a(97352),
                l = a(50868),
                n = a(71992),
                r = a.n(n),
                o = a(43158),
                d = a(26191),
                c = a(85846),
                u = a(49542);
            a(96960);
            var m = a(9421),
                x = a(7847),
                h = a(3928),
                p = a(14531),
                f = a(64571);
            (0, m.BX)({
                duration: .15,
                delay: .25
            });
            let AnimatedText = e => {
                    let {
                        isFirstLine: t = !1,
                        children: a
                    } = e;
                    return (0, s.jsx)("p", {
                        className: (0, u.default)("absolute left-0 flex w-full animate-[animatedTextScale_4.5s_ease-in-out_infinite] items-center justify-center text-base-m font-medium [transform-origin:center_left] md:justify-start", t ? "top-[-18px] [animation-direction:alternate-reverse]" : "top-0 [animation-direction:alternate]"),
                        children: a
                    })
                },
                HeaderAnimatedText = () => {
                    var e;
                    let t = (0, p.S)(),
                        {
                            data: a,
                            isLoading: l,
                            error: n
                        } = (0, h.aM2)(h.vR2, { ...c.gq
                        });
                    return (0, i.useEffect)(() => {
                        n && t({
                            error: n
                        })
                    }, [t, n]), (0, s.jsx)("div", {
                        className: "mt-2 h-[18px] overflow-hidden font-medium text-white/70 md:mt-4",
                        children: (0, s.jsxs)("div", {
                            className: "relative h-full animate-[animatedTextRotation_4.5s_ease-in-out_infinite_alternate]",
                            children: [(0, s.jsxs)(AnimatedText, {
                                isFirstLine: !0,
                                children: [(0, s.jsxs)("span", {
                                    children: [(0, s.jsx)("span", {
                                        className: "text-white",
                                        children: l || !a ? (0, s.jsx)(x.Od, {
                                            as: "span",
                                            className: "relative top-px mr-[2px] inline-block h-[13px] w-[76px] rounded-md"
                                        }) : (0, f.ZP)((null == a ? void 0 : null === (e = a.data.totalRaisedPlatform) || void 0 === e ? void 0 : e.usd) || 0, !0)
                                    }), "\xa0Earned by artists"]
                                }), (0, s.jsx)("span", {
                                    children: "\xa0from fans on Sound"
                                })]
                            }), (0, s.jsxs)(AnimatedText, {
                                children: [(0, s.jsxs)("span", {
                                    children: ["Discover ", (0, s.jsx)("span", {
                                        className: "text-white",
                                        children: "new music "
                                    }), "and\xa0"]
                                }), (0, s.jsxs)("span", {
                                    children: ["prove you were there ", (0, s.jsx)("span", {
                                        className: "text-white",
                                        children: "first"
                                    })]
                                })]
                            })]
                        })
                    })
                };
            var v = a(55082),
                b = a(24924),
                g = a.n(b),
                j = a(84298),
                w = a(11515),
                N = a(8205),
                y = a(3037),
                C = a(85906),
                k = a(96301),
                S = a(21956),
                E = a(14034),
                A = a(28166),
                T = a(68753);
            let HeaderAvatar = () => {
                var e;
                let {
                    authUser: t
                } = (0, k.aC)();
                return t ? (0, s.jsx)("div", {
                    className: "h-7 w-7 md:h-10 md:w-10",
                    "data-testid": A.n.USER_MENU_CONTAINER,
                    children: (0, s.jsx)(T.q, {
                        size: 40,
                        src: null === (e = t.avatar) || void 0 === e ? void 0 : e.url,
                        walletAddress: t.publicAddress,
                        username: t.username,
                        disableLink: !0,
                        borderRadius: 1e3,
                        webappUri: t.webappUri
                    })
                }) : null
            };
            var M = a(69598),
                I = a(85178);
            let _ = (0, i.memo)(function(e) {
                let {
                    css: t,
                    variant: a,
                    loading: l
                } = e, {
                    pathname: r
                } = (0, n.useRouter)(), {
                    close: o
                } = (0, d.k)(), onClick = () => {
                    (0, E.uH)({
                        event: "Sign in Clicked",
                        properties: {
                            sourceComponent: "Navigation"
                        }
                    }), o(), (0, S.SR)()
                }, u = i.useMemo(() => c.QW.includes(r), [r]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(I.i, {
                        media: "tablet",
                        children: (0, s.jsx)(M.z, {
                            deprecatedCSS: t,
                            size: "mobile" === a ? "L" : "M",
                            fullWidth: !0,
                            variant: u ? "tertiary" : "primary",
                            label: "Sign in",
                            onClick: onClick,
                            loading: l
                        })
                    }), (0, s.jsx)(I.i, {
                        media: "notTablet",
                        children: (0, s.jsx)(M.z, {
                            deprecatedCSS: t,
                            size: "mobile" === a ? "L" : "M",
                            fullWidth: !0,
                            variant: "primary",
                            label: "Sign in",
                            onClick: onClick,
                            loading: l
                        })
                    })]
                })
            });
            var L = a(12437);
            (0, N.zo)("div", {
                height: 20,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                paddingX: 0
            }), (0, N.zo)("div", {
                position: "absolute",
                zIndex: "$search",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                backgroundColor: "white"
            });
            let B = (0, N.zo)("div", {
                    display: "flex",
                    position: "relative",
                    alignItems: "center",
                    height: 40,
                    width: "100%",
                    "@tablet": {
                        paddingX: 0
                    },
                    variants: {
                        variant: {
                            right: {
                                width: "fit-content",
                                marginLeft: 12
                            },
                            mobile: {
                                flexDirection: "column",
                                alignItems: "unset",
                                height: "100%"
                            }
                        },
                        align: {
                            end: {
                                justifyContent: "flex-end",
                                gap: 16
                            }
                        }
                    },
                    compoundVariants: [{
                        variant: "right",
                        align: "end",
                        css: {
                            marginLeft: 0
                        }
                    }]
                }),
                R = (0, N.iv)({
                    cursor: "pointer",
                    color: "$neutral900",
                    fontFamily: "$base",
                    lineHeight: "120%",
                    fontSize: 16,
                    "&:hover": {
                        color: "$neutral400"
                    },
                    variants: {
                        variant: {
                            desktop: {
                                color: "$black",
                                base: "M",
                                paddingY: 9,
                                paddingLeft: 16,
                                fontWeight: 400,
                                position: "relative",
                                "&:hover": {
                                    backgroundColor: "$neutral100",
                                    color: "unset"
                                },
                                "&:focus": {
                                    borderColor: "$neutral800",
                                    borderWidth: 2,
                                    paddingY: 6,
                                    paddingLeft: 14
                                }
                            },
                            mobile: {
                                display: "flex",
                                alignItems: "center",
                                title: "M",
                                fontWeight: 500,
                                transition: "0.3s all ease-in-out",
                                "&:hover": {
                                    background: "unset",
                                    color: "unset"
                                }
                            }
                        }
                    }
                }),
                D = (0, N.zo)("div", R),
                O = (0, N.zo)("div", {
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    justifyContent: "space-between"
                });
            (0, N.zo)("div", {
                display: "flex",
                columnGap: 20,
                alignItems: "center"
            }), (0, N.zo)("div", {
                variants: {
                    fill: {
                        neutral800: {
                            "& path": {
                                fill: "$neutral800"
                            }
                        },
                        white: {
                            "& path": {
                                fill: "#fff"
                            },
                            "@tabletLandscape": {
                                "& path": {
                                    fill: "$neutral800"
                                }
                            }
                        }
                    },
                    stroke: {
                        black: {
                            "& path": {
                                stroke: "black"
                            }
                        },
                        white: {
                            color: "white",
                            "& path": {
                                stroke: "#fff"
                            },
                            "@tabletLandscape": {
                                "& path": {
                                    stroke: "black"
                                }
                            }
                        }
                    }
                }
            });
            let U = (0, N.zo)(L.z, {
                    variants: {
                        variant: {
                            desktop: {
                                right: "10px",
                                top: "50%",
                                transform: "translate(-50%, -50%)"
                            },
                            mobile: {
                                position: "relative",
                                top: "-5px"
                            }
                        }
                    }
                }),
                P = (0, N.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    title: "M",
                    color: "$base800",
                    fontWeight: 500,
                    height: 32,
                    "@tablet": {
                        height: "unset",
                        color: "$black",
                        base: "M",
                        paddingY: 9,
                        paddingLeft: 16,
                        fontWeight: 400,
                        position: "relative",
                        "&:hover": {
                            backgroundColor: "$neutral100",
                            color: "unset"
                        },
                        "&:focus": {
                            borderColor: "$base800",
                            borderWidth: 2,
                            paddingY: 6,
                            paddingLeft: 14
                        }
                    },
                    variants: {
                        size: {
                            L: {
                                title: "XL",
                                color: "$base800"
                            }
                        }
                    }
                });
            var F = a(97946),
                z = a(83657);

            function CollectorSignedInOptions(e) {
                let {
                    variant: t
                } = e, {
                    close: a
                } = (0, d.k)(), {
                    authUser: i
                } = (0, k.aC)(), l = (0, z.B)();
                if (!i) return null;
                let n = !!(null == i ? void 0 : i.artist);
                return (0, s.jsxs)(s.Fragment, {
                    children: [!n && (0, s.jsx)(F.s, {
                        pathnameUri: "/dashboard/earnings",
                        onClick: a,
                        children: (0, s.jsxs)(P, {
                            children: ["My Earnings", l && (0, s.jsx)(U, {
                                variant: t
                            })]
                        })
                    }), (0, s.jsx)(F.s, {
                        pathnameUri: c.qy.ProfileEdit,
                        onClick: a,
                        children: (0, s.jsx)(P, {
                            children: "Settings"
                        })
                    })]
                })
            }
            var H = a(15406),
                W = a(66350),
                V = a(22181),
                $ = a(61080);
            let ForArtists = e => {
                    let {
                        navLoading: t,
                        closeNav: a
                    } = e, {
                        pathname: i
                    } = (0, n.useRouter)(), {
                        status: l,
                        hasApplied: r,
                        loading: o
                    } = (0, $.P)(), {
                        openModal: d
                    } = V.ModalContext.useContainer(), u = i === c.qy.ArtistApplication;
                    if (l === h.spC.Accepted) return null;
                    let m = r ? (0, s.jsx)("button", {
                        onClick: () => {
                            if (r || o) {
                                if ((0, E.uH)({
                                        event: "Join as an Artist Clicked",
                                        properties: {
                                            sourceComponent: "Navigation"
                                        }
                                    }), u) return a();
                                if (l === h.spC.Pending) return (0, E.uH)({
                                    event: "Artist Application Submitted Modal Opened",
                                    properties: {
                                        sourceComponent: "Navigation"
                                    }
                                }), d(V.ModalType.ARTIST_APPLICATION_SUBMITTED, {
                                    body: (0, s.jsx)(W.N, {
                                        nav: !0
                                    })
                                });
                                if (l === h.spC.Rejected) return (0, E.uH)({
                                    event: "Artist Application Rejected Modal Opened",
                                    properties: {
                                        sourceComponent: "Navigation"
                                    }
                                }), d(V.ModalType.ARTIST_APPLICATION_REJECTED, {
                                    body: (0, s.jsx)(H.D, {
                                        closeNav: a
                                    })
                                })
                            }
                        },
                        children: (0, s.jsx)(P, {
                            children: "For Artists"
                        })
                    }) : (0, s.jsx)(F.s, {
                        pathnameUri: c.qy.ArtistApplication,
                        onClick: a,
                        children: (0, s.jsx)(P, {
                            children: "For Artists"
                        })
                    });
                    return o || t ? (0, s.jsx)("div", {
                        className: "ml-4 block h-8 w-full animate-pulse rounded-sm bg-neutral200 md:h-6 md:w-36"
                    }) : m
                },
                Z = [{
                    title: "Admin",
                    key: "admin",
                    href: "/admin"
                }, {
                    title: "Artist Applications",
                    key: "artist-application",
                    href: c.qy.AdminArtistApplications
                }],
                G = [{
                    title: "My Releases",
                    key: "artist-releases",
                    href: "/dashboard/releases"
                }];

            function NavLinks(e) {
                let {
                    variant: t
                } = e, {
                    authUser: a,
                    isConnectingAPIUser: l
                } = (0, k.aC)(), {
                    close: n
                } = (0, d.k)(), r = !!(null == a ? void 0 : a.roles.isAdmin) || !!(null == a ? void 0 : a.roles.isArtistRelations), o = !!(null == a ? void 0 : a.artist), u = Z.map(e => (0, s.jsx)(i.Fragment, {
                    children: l ? (0, s.jsx)("div", {
                        className: "h-8 w-full animate-pulse rounded-sm bg-base200 md:h-6 md:w-36"
                    }) : (0, s.jsx)(F.s, {
                        pathnameUri: e.href,
                        onClick: n,
                        children: (0, s.jsx)(D, {
                            variant: t,
                            children: e.title
                        })
                    })
                }, e.key)), m = (0, z.B)(), x = "desktop" === t ? [{
                    title: "Artist Dashboard",
                    key: "artist-dashboard",
                    href: "/dashboard/releases"
                }] : [...G, {
                    title: "My Earnings",
                    key: "withdraw",
                    href: "/dashboard/earnings",
                    notificationIndicator: m
                }], h = o ? x.filter(e => {
                    let {
                        hideMobile: a
                    } = e;
                    return "mobile" !== t || !a
                }) : [], p = h.map(e => {
                    let a = e.href;
                    return (0, s.jsx)(i.Fragment, {
                        children: l ? (0, s.jsx)("div", {
                            className: "h-8 w-full animate-pulse rounded-sm bg-base200 md:h-6 md:w-36"
                        }) : (0, s.jsx)(F.s, {
                            pathnameUri: a,
                            onClick: n,
                            children: (0, s.jsxs)(P, {
                                children: [" ", e.icon, e.title, e.notificationIndicator && (0, s.jsx)(U, {
                                    variant: t
                                })]
                            })
                        })
                    }, e.key)
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(C.i, {
                        orientation: "horizontal",
                        className: "!mb-2"
                    }), p, o && (0, s.jsx)(F.s, {
                        pathnameUri: c.qy.Community,
                        onClick: n,
                        className: "md:hidden",
                        children: (0, s.jsx)(P, {
                            children: "My Community"
                        })
                    }), (0, s.jsx)(CollectorSignedInOptions, {
                        variant: t
                    }), r && (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(C.i, {
                            orientation: "horizontal",
                            className: "!mb-0"
                        }), u]
                    }), !o && (0, s.jsx)(ForArtists, {
                        navLoading: l,
                        closeNav: n
                    })]
                })
            }
            var K = a(44361),
                Q = a(19907),
                q = a(31265),
                Y = a(63558),
                J = a(59665),
                X = a(58658),
                ee = a(72102),
                et = a(98562),
                ea = a(92747),
                es = a(81845);

            function AddressOrEnsInput(e) {
                var t;
                let {
                    inputDisabled: a = !1,
                    setAddress: l
                } = e, {
                    authUserAddress: n
                } = (0, k.aC)(), [r, o] = i.useState(!1), [d, c] = i.useState(null), {
                    data: u,
                    isLoading: m
                } = (0, es.f)({
                    input: d
                }), x = i.useMemo(() => u && r ? "address" !== u.type ? (l(null), {
                    type: u.type,
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
                        type: u.type
                    })
                }) : u.value === n ? {
                    type: "auth-address",
                    value: "The address you entered is your own address."
                } : (l(u.value), u) : null, [n, u, r, l]), onInputChange = e => {
                    c(e), o(!0)
                }, h = i.useMemo(() => !!x && "address" !== x.type && r, [x, r]);
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(ea.SP, {
                        error: h,
                        children: [(0, s.jsx)(ea.II, {
                            type: "text",
                            value: d || "",
                            placeholder: "e.g. 0xB0A3... or wallet.eth",
                            "aria-label": "wallet address input field",
                            autoComplete: "off",
                            disabled: a,
                            onChange: e => {
                                onInputChange(e.target.value)
                            },
                            onBlur: e => {
                                onInputChange(e.target.value), r && "" === e.target.value && (o(!1), c(null), l(null))
                            }
                        }), r && (0, s.jsx)(ea.SP.Error, {
                            errorMessage: null !== (t = null == x ? void 0 : x.value) && void 0 !== t ? t : null
                        })]
                    }), !m && !h && (0, s.jsxs)("div", {
                        className: "mt-1 flex w-full items-start gap-2",
                        children: [(0, s.jsx)(ee.G, {
                            icon: et.e7,
                            className: "text-warning400",
                            fontSize: 14
                        }), (0, s.jsx)("p", {
                            className: "font-base text-base-s text-base500",
                            children: "Eth sent to the wrong address cannot be recovered. Be sure this is the correct wallet address."
                        })]
                    })]
                })
            }
            let EthInput = e => {
                let {
                    amount: t,
                    setAmount: a,
                    placeholder: i,
                    balance: l,
                    className: n,
                    ...r
                } = e;
                return (0, s.jsxs)("div", {
                    className: "grid gap-1",
                    children: [(0, s.jsxs)("div", {
                        className: "flex rounded-[6px] border border-base200",
                        children: [(0, s.jsx)(ea.II, {
                            type: "number",
                            value: null != t ? t : "",
                            placeholder: null != i ? i : "Amount",
                            autoComplete: "off",
                            onChange: e => {
                                a(e.target.value)
                            },
                            className: (0, K.m)("rounded-l-none", n),
                            ...r
                        }), (0, s.jsx)("div", {
                            className: "flex items-center gap-2 px-4 py-3",
                            children: (0, s.jsx)("div", {
                                className: "text-title-xs font-medium text-base800",
                                children: "ETH"
                            })
                        })]
                    }), l ? (0, s.jsx)("div", {
                        className: "text-base-s text-base400",
                        children: l
                    }) : (0, s.jsx)("div", {
                        className: "h-4 w-28 animate-pulse rounded-lg bg-base400"
                    })]
                })
            };
            var ei = a(9464),
                el = a(67951),
                en = a(8234),
                er = a(54668),
                eo = a(58876),
                ed = a(64398),
                ec = a(38543),
                eu = a(88266),
                em = a(59287),
                ex = a(75747),
                eh = a(17166),
                ep = a(56484),
                ef = a(77348);
            let useTransferFunds = e => {
                    let {
                        amountInEth: t,
                        recipientAddress: a,
                        chainId: s
                    } = e, {
                        authUserAddress: l
                    } = (0, k.aC)(), {
                        getSigner: n,
                        isSwitchingNetwork: r
                    } = (0, eo.Qw)(), {
                        safeHandleTransaction: o
                    } = eh.YW.useContainer(), {
                        openToast: d
                    } = (0, ex.useToast)(), {
                        ethToUsd: c
                    } = (0, ep.E)(), [u, m] = (0, i.useState)(!1), x = (0, i.useMemo)(() => (0, eu.f)(t), [t]), {
                        data: h,
                        isLoading: p,
                        isError: v
                    } = (0, J.KQ)({
                        address: null != l ? l : "0x000",
                        enabled: !!l,
                        formatUnits: "wei",
                        chainId: s
                    }), b = (0, i.useMemo)(() => (null == h ? void 0 : h.value) ? (0, f.by)({
                        weiValue: null == h ? void 0 : h.value.toString(),
                        maxDecimals: 4
                    }) : "0", [null == h ? void 0 : h.value]), g = (0, i.useMemo)(() => c ? (c * Number(b)).toFixed(2) : void 0, [b, c]), j = (0, i.useMemo)(() => x > BigInt(0), [x]), w = (0, i.useMemo)(() => {
                        var e;
                        return x <= (null !== (e = null == h ? void 0 : h.value) && void 0 !== e ? e : BigInt(0))
                    }, [x, null == h ? void 0 : h.value]), N = r || u, y = !j || !w || p || v || u;
                    (0, i.useEffect)(() => {
                        v && d({
                            text: "Unable to check your balance. Please try again later.",
                            variant: "error"
                        })
                    }, [v, d]);
                    let C = (0, i.useMemo)(() => r ? "Switch chain in wallet" : w ? u ? "Confirm in wallet" : "Send" : "Insufficient funds", [w, r, u]),
                        S = (0, ec.p)({
                            chainId: s,
                            onChainSwitchFail() {
                                m(!1)
                            },
                            onAuth: async () => {
                                if (!a) return;
                                m(!0);
                                let e = await n(s),
                                    {
                                        success: i,
                                        transactionHash: l
                                    } = await o({
                                        chainId: s,
                                        contractMethod: "SEND_FUNDS",
                                        openProcessingModal: !0,
                                        transactionFn: () => e.sendTransaction({
                                            to: a,
                                            value: x,
                                            chain: (0, ef.v1)(s)
                                        })
                                    });
                                if (i) {
                                    let e = (0, em.pc)(a, 3, 4);
                                    d({
                                        text: `Send complete! [${t}] ETH was sent to ${e}.`,
                                        variant: "success",
                                        ctaText: "View on Etherscan",
                                        ctaHref: (0, f.mt)({
                                            transactionHash: l,
                                            chainId: s
                                        }),
                                        duration: 3e5
                                    })
                                }
                                m(!1)
                            }
                        });
                    return {
                        transferFunds: S,
                        ethBalanceInEth: b,
                        usdEthBalance: g,
                        isBalanceLoading: p,
                        isBalanceError: v,
                        isLoading: N,
                        disabled: y,
                        state: C
                    }
                },
                ev = (0, q.sj)({
                    network: c.K_.optimism,
                    switchNetworkLoading: !1
                }),
                SendFundsModal = () => {
                    let {
                        closeCancelModal: e
                    } = V.ModalContext.useContainer(), t = (0, ed.S)(), {
                        activeChainId: a
                    } = (0, eo.Qw)(), [l, n] = (0, i.useState)(""), [r, o] = (0, i.useState)(null), [d, u] = (0, i.useState)(null), {
                        transferFunds: m,
                        ethBalanceInEth: x,
                        usdEthBalance: h,
                        disabled: p,
                        state: v,
                        isLoading: b
                    } = useTransferFunds({
                        amountInEth: null != l ? l : "0",
                        recipientAddress: r,
                        chainId: a.current || 1
                    }), {
                        network: g
                    } = (0, Y.R)(ev), {
                        status: j,
                        isLoading: w
                    } = (0, J.g0)(), {
                        isSwitchingNetwork: N
                    } = (0, eo.Qw)(), y = w || "loading" === j || N, C = (0, ec.p)({
                        chainId: d,
                        onChainSwitchFail(e) {
                            e && t({
                                error: e,
                                errorType: X.QS.SWITCHING_CHAINS_ERROR,
                                message: "Error switching chains",
                                toast: "Please switch network",
                                action: X.CA.TRANSACTION_ERROR,
                                level: "info",
                                isArtistOnlyPage: !0,
                                pillar: X.Lj.TRANSACTION
                            }), ev.switchNetworkLoading = !1, u(null)
                        },
                        onAuth(e) {
                            let {
                                chainId: t
                            } = e;
                            ev.network = t
                        }
                    });
                    (0, i.useEffect)(() => {
                        null != d && C()
                    }, [d, C]);
                    let k = (0, s.jsxs)("div", {
                        className: "grid gap-6",
                        children: [(0, s.jsxs)("div", {
                            className: "grid gap-4",
                            children: [(0, s.jsxs)("div", {
                                className: "grid gap-1",
                                children: [(0, s.jsx)("div", {
                                    className: "text-base-l font-semibold text-black",
                                    children: "Network"
                                }), (0, s.jsxs)(en.P, {
                                    disabled: y,
                                    value: g.toString(),
                                    onValueChange: e => {
                                        u(Number(e))
                                    },
                                    children: [(0, s.jsx)(en.c, {
                                        value: c.K_.eth.toString(),
                                        className: "mb-1 flex w-full cursor-pointer",
                                        children: (0, s.jsxs)("div", {
                                            className: "relative flex w-full items-center px-2",
                                            children: [(0, s.jsx)("div", {
                                                className: "-ml-1.5 mr-2",
                                                children: (0, s.jsx)(ei.bZ, {})
                                            }), (0, s.jsx)("div", {
                                                className: "text-left",
                                                children: (0, s.jsx)("p", {
                                                    className: "text-base-m font-semibold text-base800",
                                                    children: (0, f.DO)(c.K_.eth)
                                                })
                                            }), y && (0, s.jsx)("div", {
                                                className: "ml-1 flex",
                                                children: (0, s.jsx)(el.T, {
                                                    className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform"
                                                })
                                            })]
                                        })
                                    }), (0, s.jsx)(en.c, {
                                        value: c.K_.base.toString(),
                                        className: "mb-1 flex w-full cursor-pointer",
                                        children: (0, s.jsxs)("div", {
                                            className: "relative flex w-full items-center px-2",
                                            children: [(0, s.jsx)("div", {
                                                className: "-ml-1.5 mr-2 [&>svg]:h-[22px] [&>svg]:w-[22px]",
                                                children: (0, s.jsx)(ei.c1, {})
                                            }), (0, s.jsx)("div", {
                                                className: "text-left",
                                                children: (0, s.jsx)("p", {
                                                    className: "text-base-m font-semibold text-base800",
                                                    children: (0, f.DO)(c.K_.base)
                                                })
                                            }), y && (0, s.jsx)("div", {
                                                className: "ml-1 flex",
                                                children: (0, s.jsx)(el.T, {
                                                    className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform"
                                                })
                                            })]
                                        })
                                    }), (0, s.jsx)(en.c, {
                                        value: c.K_.optimism.toString(),
                                        className: "flex w-full cursor-pointer",
                                        children: (0, s.jsxs)("div", {
                                            className: "relative flex w-full items-center px-2",
                                            children: [(0, s.jsx)("div", {
                                                className: "-ml-1.5 mr-2",
                                                children: (0, s.jsx)(ei.dp, {})
                                            }), (0, s.jsx)("div", {
                                                className: "text-left",
                                                children: (0, s.jsx)("p", {
                                                    className: "text-base-m font-semibold text-base800",
                                                    children: (0, f.DO)(c.K_.optimism)
                                                })
                                            }), y && (0, s.jsx)("div", {
                                                className: "ml-1 flex",
                                                children: (0, s.jsx)(el.T, {
                                                    className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "grid gap-1",
                                children: [(0, s.jsx)("div", {
                                    className: "text-base-l font-semibold text-black",
                                    children: "Amount"
                                }), (0, s.jsx)(EthInput, {
                                    amount: l,
                                    setAmount: n,
                                    balance: ((e, t) => {
                                        if (e) return `Balance: ${e} ETH ${t?`($${t} USD)`:""}`
                                    })(x, h),
                                    disabled: y || b
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "grid gap-1",
                                children: [(0, s.jsx)("div", {
                                    className: "text-base-l font-semibold",
                                    children: "Recipient"
                                }), !!x && (0, s.jsx)(AddressOrEnsInput, {
                                    inputDisabled: !1,
                                    setAddress: o
                                })]
                            })]
                        }), (0, s.jsx)(M.z, {
                            label: v,
                            variant: "primary",
                            onClick: m,
                            className: "w-full flex-1",
                            fullWidth: !0,
                            disabled: p || y || !l,
                            loading: y
                        })]
                    });
                    return (0, s.jsx)(er.Z, {
                        title: "Send ETH",
                        closeModal: e,
                        body: k,
                        bodyClassName: "pt-4 pb-1"
                    })
                };
            var eb = a(64105),
                eg = a(8094),
                ej = a(14561);
            let Balance = e => {
                    let {
                        isActiveChain: t,
                        chainId: a
                    } = e, {
                        authUserAddress: i
                    } = (0, k.aC)(), {
                        isSwitchingNetwork: l
                    } = (0, eo.Qw)(), {
                        openToast: n
                    } = (0, ex.useToast)(), {
                        data: r,
                        isError: o,
                        isLoading: d
                    } = (0, J.KQ)({
                        address: i || "0x000",
                        enabled: !!i,
                        formatUnits: "gwei",
                        chainId: a
                    }), c = (0, ec.p)({
                        chainId: a,
                        onChainSwitchFail() {
                            n({
                                text: "Network switch failed",
                                variant: "error"
                            })
                        },
                        onAuth() {}
                    });
                    return (0, s.jsx)(s.Fragment, {
                        children: d || o ? (0, s.jsx)("div", {
                            className: "flex h-[42px] w-full items-center justify-center",
                            children: (0, s.jsx)(el.T, {
                                className: "aspect-square w-3"
                            })
                        }) : (0, s.jsxs)("button", {
                            className: "flex w-full cursor-pointer items-center justify-between px-3 py-3 md:py-2.5 md:hover:bg-base50",
                            onClick: c,
                            children: [(0, s.jsxs)("div", {
                                className: "flex items-center font-base text-base-m",
                                children: [(0, s.jsx)("h3", {
                                    className: " text-base900",
                                    children: (0, f.DO)(a)
                                }), (0, s.jsx)("span", {
                                    className: "text-base400",
                                    children: "\xa0•\xa0"
                                }), (0, s.jsx)("p", {
                                    className: "text-base-m text-base400",
                                    children: r ? (0, s.jsxs)(s.Fragment, {
                                        children: [(0, f.by)({
                                            weiValue: r.value.toString(),
                                            maxDecimals: 4
                                        }), " ", "ETH"]
                                    }) : (0, s.jsx)(s.Fragment, {
                                        children: "Unable to load"
                                    })
                                })]
                            }), l && !t && (0, s.jsx)(el.T, {
                                className: "h-4 w-4"
                            }), t && (0, s.jsx)(ee.G, {
                                icon: ej.f8,
                                className: "text-base-l"
                            })]
                        })
                    })
                },
                Balances = e => {
                    let {
                        variant: t
                    } = e, {
                        activeChainIdWithFallback: {
                            current: a
                        }
                    } = (0, eo.Qw)();
                    return (0, s.jsx)(ew, {
                        variant: t,
                        children: c.lS.map(e => (0, s.jsx)(Balance, {
                            isActiveChain: a === e,
                            chainId: e
                        }, e))
                    })
                },
                ew = (0, l.ZP)("div", "flex flex-col md:w-full md:min-w-[220px]", {
                    variants: {
                        variant: {
                            "nav-menu": "w-[92vw]",
                            "left-nav": "w-[70vw]"
                        }
                    }
                }),
                BalanceTrigger = e => {
                    let {
                        target: t,
                        variant: a
                    } = e, {
                        authUserAddress: l
                    } = (0, k.aC)(), {
                        activeChainIdWithFallback: {
                            current: n
                        }
                    } = (0, eo.Qw)(), [r, o] = i.useState(!1), {
                        data: d,
                        isError: c,
                        isLoading: m
                    } = (0, J.KQ)({
                        address: l || "0x000",
                        enabled: !!l,
                        formatUnits: "gwei",
                        chainId: n
                    }), x = m || c, h = i.useMemo(() => (0, s.jsx)("div", {
                        className: "flex h-11 w-full cursor-pointer flex-col gap-y-1 md:h-[54px] md:px-3 md:pt-2 md:hover:bg-neutral50",
                        children: x ? (0, s.jsx)("div", {
                            className: "flex h-[26px] w-full items-center justify-center md:h-10",
                            children: (0, s.jsx)(el.T, {
                                className: "aspect-square w-4"
                            })
                        }) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("p", {
                                className: "min-h-[16px] text-left text-base-m text-base400 md:text-base-s",
                                children: (0, f.DO)(n)
                            }), (0, s.jsxs)("div", {
                                className: "flex w-full items-center justify-between font-base text-base900",
                                children: [(0, s.jsx)("h3", {
                                    className: "font-title text-title-m font-medium ",
                                    children: d ? (0, s.jsxs)(s.Fragment, {
                                        children: [(0, f.by)({
                                            weiValue: d.value.toString(),
                                            maxDecimals: 4
                                        }), " ", "ETH"]
                                    }) : (0, s.jsx)(s.Fragment, {
                                        children: "Unable to load"
                                    })
                                }), (0, s.jsx)(ee.G, {
                                    icon: eb.pt,
                                    className: (0, u.default)("text-base-m text-base400", r && "rotate-180 transform transition-transform")
                                })]
                            })]
                        })
                    }), [x, n, d, r]);
                    return "desktop" === t ? (0, s.jsxs)(j.Tr, {
                        open: r,
                        children: [(0, s.jsx)(j.fF, {
                            onClick: () => {
                                o(e => !e)
                            },
                            disabled: x,
                            className: "outline-none focus:outline-none",
                            children: h
                        }), (0, s.jsx)(j.tu, {
                            className: "absolute right-2 top-14 z-tooltip rounded-md border-0 bg-white shadow-primary",
                            children: (0, s.jsx)(Balances, {
                                variant: a
                            })
                        })]
                    }) : (0, s.jsx)("div", {
                        className: "flex w-full md:hidden",
                        children: (0, s.jsxs)(eg.h_, {
                            children: [(0, s.jsx)(eg.$F, {
                                className: "w-full",
                                disabled: x,
                                children: h
                            }), (0, s.jsx)(eg.AW, {
                                disablePortal: !0,
                                className: "border-0 shadow-primary",
                                children: (0, s.jsx)(Balances, {
                                    variant: a
                                })
                            })]
                        })
                    })
                },
                WalletBalance = e => {
                    let {
                        target: t,
                        variant: a
                    } = e, {
                        openModal: i
                    } = V.ModalContext.useContainer(), {
                        close: l
                    } = (0, d.k)();
                    return (0, s.jsxs)("div", {
                        className: "flex w-full flex-col gap-2",
                        children: [(0, s.jsx)(BalanceTrigger, {
                            target: t,
                            variant: a
                        }), (0, s.jsxs)("div", {
                            className: (0, K.m)("flex max-md:gap-4 md:gap-2 md:px-2", "nav-menu" === a && "pb-3"),
                            children: [(0, s.jsx)("div", {
                                className: "flex-1",
                                children: (0, s.jsx)(M.z, {
                                    label: "Bridge",
                                    size: "S",
                                    variant: "tertiary",
                                    fullWidth: !0,
                                    onClick: () => {
                                        l(), setTimeout(() => {
                                            i(V.ModalType.BRIDGE_MODAL, {
                                                body: (0, s.jsx)(Q.F, {})
                                            })
                                        }, 0)
                                    }
                                })
                            }), (0, s.jsx)("div", {
                                className: "flex-1",
                                children: (0, s.jsx)(M.z, {
                                    label: "Send",
                                    size: "S",
                                    variant: "tertiary",
                                    fullWidth: !0,
                                    onClick: () => {
                                        l(), setTimeout(() => {
                                            i(V.ModalType.SEND_FUNDS_MODAL, {
                                                body: (0, s.jsx)(SendFundsModal, {})
                                            })
                                        }, 0)
                                    }
                                })
                            })]
                        })]
                    })
                },
                eN = (0, N.zo)("div", R, {
                    marginBottom: 4
                }),
                DesktopNav = () => {
                    let {
                        close: e,
                        open: t,
                        areUserOptionsOpen: a
                    } = (0, d.k)(), {
                        isAuthenticatedWithAPI: i,
                        authUser: l,
                        isConnectingAPIUser: n
                    } = (0, k.aC)(), {
                        tablet: r
                    } = (0, o.useMediaQuery)(), c = n ? (0, s.jsx)("div", {
                        className: "mb-2 ml-4 block h-8 w-36 animate-pulse rounded-sm bg-neutral200"
                    }) : (0, s.jsx)(eN, {
                        variant: "desktop",
                        onClick: () => {
                            (0, E.uH)({
                                event: "Logout Clicked",
                                properties: {
                                    sourceComponent: "Navigation"
                                }
                            }), e(), (0, S.Mk)()
                        },
                        children: "Logout"
                    });
                    return (0, s.jsx)(w.fC, {
                        className: "ml-auto",
                        children: (0, s.jsx)(w.aV, {
                            className: "flex list-none items-center",
                            children: (0, s.jsx)("div", {
                                className: "flex-end ml-4 flex h-10 w-full items-center gap-3",
                                children: i ? (0, s.jsx)(s.Fragment, {
                                    children: (0, s.jsxs)(j.fC, {
                                        open: a && r,
                                        children: [(0, s.jsx)(j.xz, {
                                            onClick: () => a ? e() : t("user"),
                                            children: (0, s.jsx)(HeaderAvatar, {})
                                        }), (0, s.jsx)(j.Uv, {
                                            children: (0, s.jsxs)(j.VY, {
                                                className: "text-base relative top-2.5 z-header flex h-fit w-[238px] flex-col rounded-md bg-white text-base-l shadow-primary",
                                                onPointerDownOutside: e,
                                                align: "end",
                                                "data-testid": A.n.USER_MENU_ITEMS_CONTAINER,
                                                children: [l && (0, s.jsx)(y.a, {
                                                    userInfo: l,
                                                    desktopNavHeader: !0
                                                }), (0, s.jsx)(C.i, {
                                                    orientation: "horizontal",
                                                    className: "!mb-0"
                                                }), (0, s.jsx)(WalletBalance, {
                                                    target: "desktop",
                                                    variant: "nav-menu"
                                                }), (0, s.jsx)(NavLinks, {
                                                    variant: "desktop"
                                                }), c]
                                            })
                                        })]
                                    })
                                }) : (0, s.jsx)(_, {
                                    variant: "desktop",
                                    loading: n
                                })
                            })
                        })
                    })
                },
                ey = g()(() => Promise.all([a.e(4231), a.e(7024), a.e(6490)]).then(a.bind(a, 38016)).then(e => e.DesktopSearchBar), {
                    loadableGenerated: {
                        webpack: () => [38016]
                    },
                    ssr: !0
                }),
                DesktopHeader = () => (0, s.jsxs)(O, {
                    children: [(0, s.jsx)(B, {
                        children: (0, s.jsx)(ey, {})
                    }), (0, s.jsx)(DesktopNav, {})]
                });
            var eC = a(48534),
                ek = a(54614),
                eS = a(58691),
                eE = a(21922),
                eA = a(42529),
                eT = a(67441);
            let MobileHeader = e => {
                var t;
                let {
                    strokeColor: a,
                    isBlurBackground: l
                } = e, {
                    open: r,
                    title: o
                } = (0, d.k)(), {
                    pathname: c
                } = (0, n.useRouter)(), {
                    authUser: u,
                    isConnectingAPIUser: m
                } = (0, k.aC)(), {
                    back: x,
                    push: h
                } = (0, n.useRouter)(), {
                    hasNavigated: p
                } = (0, eT.k0)(), f = (0, eA.R)(() => {
                    p ? x() : h("/")
                }), v = (0, i.useMemo)(() => "black" === a ? "text-black" : "text-white", [a]), {
                    showBackButton: b
                } = (0, i.useMemo)(() => {
                    let e = eS.HIDDEN_MOBILE_BOTTOM_NAV_ROUTES.some(e => c.includes(e.path));
                    return {
                        showBackButton: e
                    }
                }, [c]);
                return (0, s.jsx)("div", {
                    className: "flex w-full flex-col",
                    children: (0, s.jsxs)("div", {
                        className: "relative flex h-10 w-full items-center justify-center",
                        children: [(0, s.jsx)("div", {
                            className: "center absolute left-0 flex h-10",
                            children: m ? (0, s.jsx)("div", {
                                className: "h-10 w-10 animate-pulse rounded-full bg-base400"
                            }) : b ? (0, s.jsx)(eE.h, {
                                className: "-ml-1.5",
                                variant: "tertiary",
                                icon: (0, s.jsx)(ee.G, {
                                    icon: eC.A3,
                                    fontSize: 27
                                }),
                                onClick: f
                            }) : u ? (0, s.jsx)("button", {
                                onClick: () => r("left-nav"),
                                children: (0, s.jsx)(T.q, {
                                    size: 28,
                                    walletAddress: u.publicAddress,
                                    webappUri: u.webappUri,
                                    src: null === (t = u.avatar) || void 0 === t ? void 0 : t.url,
                                    username: u.username,
                                    borderRadius: "100%",
                                    disableLink: !0
                                })
                            }) : (0, s.jsx)("button", {
                                onClick: S.SR,
                                className: "h-10 w-10 rounded-full",
                                children: (0, s.jsx)(ee.G, {
                                    icon: ek.m0,
                                    className: (0, K.m)("text-[40px] md:text-[48px]", v)
                                })
                            })
                        }), !l && (0, s.jsx)("span", {
                            className: (0, K.m)("font-title text-title-s font-medium", v),
                            children: o
                        })]
                    })
                })
            };
            var eM = a(39724),
                eI = a(30957),
                e_ = a(88338),
                eL = a(31511),
                eB = a(72771),
                eR = a(58430),
                eD = a(83835),
                eO = a(95390);

            function MobileNavMenu() {
                var e;
                let {
                    authUser: t
                } = (0, k.aC)(), {
                    isLeftNavOpen: a,
                    close: l
                } = (0, d.k)(), [n, o] = (0, i.useState)(!1), {
                    enabled: c
                } = (0, eL.og)(), u = (0, eA.R)(() => {
                    (0, E.uH)({
                        event: "Logout Clicked",
                        properties: {
                            sourceComponent: "Navigation"
                        }
                    }), l(), (0, S.Mk)()
                }), m = (0, eA.R)(() => {
                    l(), r().push("/")
                });
                return (0, eD.G)(() => {
                    a ? document.body.classList.add("freeze-scroll") : document.body.classList.remove("freeze-scroll")
                }, [a]), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: (0, K.m)("fixed inset-0 z-mobileNav flex h-screen min-h-screen transform overflow-hidden bg-opacity-25 ease-in-out", a ? "translate-x-0 overflow-hidden opacity-100 transition-opacity duration-500" : "delay-400 -translate-x-full opacity-0 transition-all"),
                        children: [(0, s.jsx)("section", {
                            className: (0, K.m)("shadow-xl delay-400 absolute z-overlay w-[75vw] transform overflow-auto bg-white transition-all duration-500 ease-in-out", a ? "translate-x-0" : "-translate-x-full", "h-[calc(100vh-(64px+env(safe-area-inset-bottom)))]"),
                            children: (0, s.jsxs)("div", {
                                className: "relative flex h-full flex-col gap-6 p-4",
                                children: [(0, s.jsxs)(eM.fC, {
                                    className: "CollapsibleRoot",
                                    open: n,
                                    onOpenChange: o,
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [t ? (0, s.jsxs)(F.s, {
                                            className: "flex w-full items-center gap-4",
                                            pathnameUri: (0, eO.OU)(t.webappUri),
                                            onClick: l,
                                            children: [(0, s.jsx)(T.q, {
                                                size: 40,
                                                src: null === (e = t.avatar) || void 0 === e ? void 0 : e.url,
                                                walletAddress: t.publicAddress,
                                                username: t.username,
                                                webappUri: t.webappUri,
                                                disableLink: !0,
                                                borderRadius: "100%"
                                            }), (0, s.jsxs)("div", {
                                                className: "flex flex-col gap-1",
                                                children: [(0, s.jsx)("span", {
                                                    className: "font-title text-title-xs font-medium text-base800",
                                                    children: t.username
                                                }), (0, s.jsx)("span", {
                                                    className: "font-base text-[11px] font-normal leading-[11px] text-base400",
                                                    children: (0, em.pc)(t.publicAddress, 5, 4)
                                                })]
                                            })]
                                        }) : (0, s.jsxs)("div", {
                                            className: "flex w-full items-center gap-4",
                                            children: [(0, s.jsx)("div", {
                                                className: "h-10 w-10 animate-pulse rounded-full bg-neutral200"
                                            }), (0, s.jsxs)("div", {
                                                className: "flex flex-col gap-1",
                                                children: [(0, s.jsx)("div", {
                                                    className: "bg-base h-4 w-full animate-pulse rounded-lg bg-neutral200"
                                                }), (0, s.jsx)("div", {
                                                    className: "h-4 w-full animate-pulse rounded-lg bg-neutral200"
                                                })]
                                            })]
                                        }), (0, s.jsx)(eM.xz, {
                                            asChild: !0,
                                            children: (0, s.jsx)(ee.G, {
                                                icon: eb.pt,
                                                className: "duration-50 p-1 text-base500 transition-all ease-linear group-hover:text-base900 data-[state=closed]:rotate-0 data-[state=open]:rotate-180",
                                                "data-state": n ? "open" : "closed"
                                            })
                                        })]
                                    }), (0, s.jsxs)(eM.VY, {
                                        children: [(0, s.jsx)(C.i, {
                                            className: "mt-6"
                                        }), (0, s.jsx)(WalletBalance, {
                                            target: "mobile",
                                            variant: "left-nav"
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "flex flex-col gap-3",
                                    children: (0, s.jsx)(NavLinks, {
                                        variant: "mobile"
                                    })
                                }), c && (0, s.jsxs)(s.Fragment, {
                                    children: [(0, s.jsx)(C.i, {
                                        className: "!mb-0"
                                    }), (0, s.jsx)(eB.Q, {})]
                                }), (0, s.jsx)("div", {
                                    className: "pb-[calc(72px+env(safe-area-inset-bottom))]"
                                })]
                            })
                        }), (0, s.jsx)("section", {
                            className: "h-full w-screen cursor-pointer select-none bg-black opacity-75 [-webkit-tap-highlight-color:transparent]",
                            onClick: l
                        })]
                    }), (0, s.jsx)(P, {
                        onClick: u,
                        className: (0, K.m)("pb-safe fixed -bottom-[1px] z-search flex h-[calc(68px+env(safe-area-inset-bottom))] w-[75vw] justify-end overflow-hidden bg-white", a ? "translate-x-0 overflow-hidden opacity-100 transition-opacity duration-500" : "delay-400 hidden -translate-x-full opacity-0 transition-all"),
                        children: (0, s.jsxs)("div", {
                            className: "flex w-full items-center justify-between bg-white p-4",
                            children: ["Logout ", (0, s.jsx)(ee.G, {
                                icon: e_.Ye,
                                className: "text-base500"
                            })]
                        })
                    }), (0, s.jsx)(P, {
                        onClick: m,
                        className: (0, K.m)("fixed -bottom-[1px] right-0 z-[2050] h-[calc(54px+env(safe-area-inset-bottom))] w-[25vw] overflow-hidden border-l border-l-base200 bg-white", a ? "translate-x-0 overflow-hidden opacity-100 transition-opacity duration-500" : "delay-400 hidden -translate-x-full opacity-0 transition-all"),
                        style: {
                            height: `${eR.U}px`
                        },
                        children: (0, s.jsxs)("div", {
                            className: "shadow-xl flex w-full flex-col items-center justify-center bg-white px-4",
                            children: [(0, s.jsx)(ee.G, {
                                icon: eI.J9,
                                className: "text-base600",
                                fontSize: 20
                            }), (0, s.jsx)("span", {
                                className: "font-base text-base-xs font-medium text-base600",
                                children: "Home"
                            })]
                        })
                    })]
                })
            }
            let eU = (0, l.zo)("header", "top-0 z-header mx-auto", {
                    variants: {
                        isBlurBackground: {
                            true: "absolute left-0 right-0 md:left-sidebar-md lt:left-sidebar-lt",
                            false: "relative"
                        },
                        isArtistApp: {},
                        hasBanner: {
                            true: "",
                            false: ""
                        },
                        hideMobileNav: {
                            true: "hidden md:flex",
                            false: " md:flex"
                        }
                    },
                    compoundVariants: [{
                        isBlurBackground: !0,
                        hasBanner: !0,
                        className: "md:top-12 lt:top-[58px]"
                    }]
                }),
                eP = (0, i.memo)(function(e) {
                    let {
                        hideMobileNav: t,
                        showNewFeatureBanner: a
                    } = e, {
                        tablet: l
                    } = (0, o.useMediaQuery)(), {
                        isSearchOpen: r
                    } = (0, d.k)(), {
                        pathname: u
                    } = (0, n.useRouter)(), m = u === c.qy.About, x = i.useMemo(() => c.QW.includes(u), [u]), h = (0, v.Y)();
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)(eU, {
                            isBlurBackground: x,
                            hasBanner: h && a,
                            hideMobileNav: t,
                            children: (0, s.jsxs)("div", {
                                className: "mx-auto w-full px-4 py-4 md:px-6 md:py-5 dt:max-w-content",
                                children: [(0, s.jsx)("div", {
                                    className: "hidden md:block",
                                    children: (0, s.jsx)(DesktopHeader, {})
                                }), r || t ? null : (0, s.jsx)("div", {
                                    className: "md:hidden",
                                    children: (0, s.jsx)(MobileHeader, {
                                        strokeColor: x ? "white" : "black",
                                        isBlurBackground: x
                                    })
                                }), m ? (0, s.jsx)(HeaderAnimatedText, {}) : null]
                            })
                        }), !l && !t && (0, s.jsx)(MobileNavMenu, {})]
                    })
                })
        },
        9464: function(e, t, a) {
            a.d(t, {
                P9: function() {
                    return IndicatorForChain
                },
                bZ: function() {
                    return EthereumIndicator
                },
                c1: function() {
                    return BaseIndicator
                },
                dp: function() {
                    return OptimismIndicator
                }
            });
            var s = a(16356);
            a(97352);
            var i = a(19791),
                l = a(28166);
            let EthereumIndicator = e => {
                    let {
                        inverted: t = !1
                    } = e;
                    return (0, s.jsxs)("svg", {
                        "data-testid": l.n.ETHEREUM_NETWORK,
                        width: "21",
                        height: "22",
                        viewBox: "0 0 21 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            filter: "url(#filter0_b_142_50329)",
                            children: [(0, s.jsx)("rect", {
                                width: "21",
                                height: "22",
                                rx: "10.5",
                                fill: t ? "white" : "black"
                            }), (0, s.jsx)("path", {
                                d: "M10.4989 4.25146V9.24084L14.716 11.1252L10.4989 4.25146Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M10.4989 4.25146L6.28125 11.1252L10.4989 9.24084V4.25146Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M10.4989 14.3582V17.7483L14.7188 11.9102L10.4989 14.3582Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M10.4989 17.7483V14.3576L6.28125 11.9102L10.4989 17.7483Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M10.4989 13.5735L14.716 11.1249L10.4989 9.2417V13.5735Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M6.28125 11.1249L10.4989 13.5735V9.2417L6.28125 11.1249Z",
                                fill: t ? "black" : "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("filter", {
                                id: "filter0_b_142_50329",
                                x: "-24",
                                y: "-24",
                                width: "69",
                                height: "70",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, s.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, s.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                                    stdDeviation: "12"
                                }), (0, s.jsx)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur_142_50329"
                                }), (0, s.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_backgroundBlur_142_50329",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                },
                OptimismIndicator = e => {
                    let {
                        inverted: t = !1
                    } = e;
                    return (0, s.jsxs)("svg", {
                        "data-testid": l.n.OPTIMISM_NETWORK,
                        width: "21",
                        height: "22",
                        viewBox: "0 0 21 22",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsxs)("g", {
                            filter: "url(#filter0_b_108_68484)",
                            children: [(0, s.jsx)("rect", {
                                width: "21",
                                height: "22",
                                rx: "10.5",
                                fill: t ? "white" : "black"
                            }), (0, s.jsx)("path", {
                                d: "M6.1488 14.7829C5.3144 14.7829 4.6312 14.5869 4.0992 14.1949C3.5728 13.7973 3.3096 13.2261 3.3096 12.4925C3.3096 12.3357 3.3264 12.1509 3.36 11.9269C3.4496 11.4229 3.5784 10.8181 3.7464 10.1069C4.2224 8.18048 5.4544 7.21729 7.4368 7.21729C7.9744 7.21729 8.4616 7.30688 8.8872 7.49168C9.3128 7.66528 9.6488 7.93409 9.8952 8.29249C10.1416 8.64529 10.2648 9.06529 10.2648 9.55249C10.2648 9.69809 10.248 9.88288 10.2144 10.1069C10.108 10.7285 9.9848 11.3389 9.8336 11.9269C9.5872 12.8845 9.1672 13.6069 8.5624 14.0829C7.9632 14.5533 7.1568 14.7829 6.1488 14.7829ZM6.3 13.2709C6.692 13.2709 7.0224 13.1533 7.2968 12.9237C7.5768 12.6941 7.7784 12.3413 7.896 11.8597C8.0584 11.1989 8.1816 10.6277 8.2656 10.1349C8.2936 9.98928 8.3104 9.83809 8.3104 9.68129C8.3104 9.04289 7.98 8.72368 7.3136 8.72368C6.9216 8.72368 6.5856 8.84128 6.3056 9.07088C6.0312 9.30048 5.8352 9.65328 5.7176 10.1349C5.5888 10.6053 5.4656 11.1765 5.3368 11.8597C5.3088 11.9997 5.292 12.1453 5.292 12.3021C5.2864 12.9517 5.628 13.2709 6.3 13.2709Z",
                                fill: t ? "black" : "white"
                            }), (0, s.jsx)("path", {
                                d: "M10.752 14.6821C10.6736 14.6821 10.6176 14.6597 10.5728 14.6093C10.5392 14.5533 10.528 14.4917 10.5392 14.4189L11.9896 7.58693C12.0008 7.50853 12.04 7.44693 12.1072 7.39653C12.1688 7.34613 12.236 7.32373 12.3088 7.32373H15.1032C15.8816 7.32373 16.5032 7.48613 16.9736 7.80533C17.4496 8.13013 17.6904 8.59493 17.6904 9.20533C17.6904 9.37893 17.668 9.56373 17.6288 9.75413C17.4552 10.5605 17.1024 11.1541 16.5648 11.5405C16.0384 11.9269 15.316 12.1173 14.3976 12.1173H12.9808L12.4992 14.4189C12.4824 14.4973 12.4488 14.5589 12.3816 14.6093C12.32 14.6597 12.2528 14.6821 12.18 14.6821H10.752ZM14.4704 10.6669C14.7672 10.6669 15.0192 10.5885 15.2376 10.4261C15.4616 10.2637 15.6072 10.0341 15.68 9.73173C15.7024 9.61413 15.7136 9.50773 15.7136 9.41813C15.7136 9.21653 15.652 9.05973 15.5344 8.95333C15.4168 8.84133 15.2096 8.78533 14.924 8.78533H13.664L13.2664 10.6669H14.4704Z",
                                fill: t ? "black" : "white"
                            })]
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("filter", {
                                id: "filter0_b_108_68484",
                                x: "-24",
                                y: "-24",
                                width: "69",
                                height: "70",
                                filterUnits: "userSpaceOnUse",
                                colorInterpolationFilters: "sRGB",
                                children: [(0, s.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix"
                                }), (0, s.jsx)("feGaussianBlur", { in: "BackgroundImageFix",
                                    stdDeviation: "12"
                                }), (0, s.jsx)("feComposite", {
                                    in2: "SourceAlpha",
                                    operator: "in",
                                    result: "effect1_backgroundBlur_108_68484"
                                }), (0, s.jsx)("feBlend", {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect1_backgroundBlur_108_68484",
                                    result: "shape"
                                })]
                            })
                        })]
                    })
                },
                BaseIndicator = e => {
                    let {
                        inverted: t = !1
                    } = e;
                    return (0, s.jsxs)("svg", {
                        width: "36",
                        height: "36",
                        viewBox: "0 0 36 36",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, s.jsx)("g", {
                            clipPath: "url(#clip0_801_34092)",
                            children: (0, s.jsx)("path", {
                                d: "M17.9687 36C27.9273 36 36 27.941 36 17.9999C36 8.05885 27.9273 0 17.9687 0C8.52062 0 0.769789 7.25384 0 16.4869H23.8335V19.513H0C0.769789 28.746 8.52062 36 17.9687 36Z",
                                fill: t ? "white" : "black"
                            })
                        }), (0, s.jsx)("defs", {
                            children: (0, s.jsx)("clipPath", {
                                id: "clip0_801_34092",
                                children: (0, s.jsx)("rect", {
                                    width: "36",
                                    height: "36",
                                    fill: t ? "black" : "white"
                                })
                            })
                        })]
                    })
                };

            function IndicatorForChain(e) {
                let {
                    chain: t
                } = e;
                switch (t) {
                    case "MAINNET":
                    case "SEPOLIA":
                    case "GOERLI":
                        return (0, s.jsx)(EthereumIndicator, {});
                    case "OPTIMISM":
                    case "OPTIMISM_GOERLI":
                    case "OPTIMISM_SEPOLIA":
                        return (0, s.jsx)(OptimismIndicator, {});
                    case "BASE":
                    case "BASE_GOERLI":
                    case "BASE_SEPOLIA":
                        return (0, s.jsx)(BaseIndicator, {});
                    default:
                        (0, i.Yk)(t)
                }
            }
        },
        67951: function(e, t, a) {
            a.d(t, {
                T: function() {
                    return LoadingSpinner
                }
            });
            var s = a(16356);
            a(97352);
            var i = a(49542);
            let LoadingSpinner = e => {
                let {
                    className: t
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.default)("inline-block animate-spin rounded-full border-2 border-solid border-base100 border-l-neutral400", t)
                })
            }
        },
        15406: function(e, t, a) {
            a.d(t, {
                D: function() {
                    return ApplicationRejected
                }
            });
            var s = a(16356);
            a(97352);
            var i = a(69598),
                l = a(37196),
                n = a(22181),
                r = a(85846);
            let ApplicationRejected = e => {
                let {
                    closeNav: t
                } = e, {
                    closeCancelModal: a
                } = n.ModalContext.useContainer(), o = (0, s.jsxs)("div", {
                    className: "relative flex w-full flex-col items-center justify-center gap-y-6",
                    children: [(0, s.jsx)("div", {
                        className: "flex flex-col items-center justify-center gap-y-4 text-center",
                        children: (0, s.jsxs)("div", {
                            className: "flex max-w-xs flex-col gap-y-4 font-base text-base800",
                            children: [(0, s.jsx)("h2", {
                                className: "text-base-l font-semibold md:text-base-xl",
                                children: "Artist Application denied!"
                            }), (0, s.jsx)("p", {
                                className: "text-base-m md:text-base-l",
                                children: "Thanks for your interest! We weren't able to verify your identity. Please apply again or email us at gm@sound.xyz if you believe this was done in error."
                            })]
                        })
                    }), (0, s.jsx)("div", {
                        className: "flex w-full items-center justify-center gap-x-2  ",
                        children: (0, s.jsx)(i.z, {
                            href: r.qy.ArtistApplication,
                            label: "Reapply",
                            variant: "primary",
                            className: "min-w-[unset] max-w-[unset]",
                            onClick: () => {
                                t && t()
                            }
                        })
                    })]
                });
                return (0, s.jsx)(l.u_, {
                    body: o,
                    closeModal: a
                })
            }
        },
        66350: function(e, t, a) {
            a.d(t, {
                N: function() {
                    return ApplicationSubmittedModal
                }
            });
            var s = a(16356),
                i = a(97352),
                l = a(72102),
                n = a(55344),
                r = a(40286),
                o = a.n(r),
                d = a(71992),
                c = a.n(d),
                u = a(40612),
                m = a(52537),
                x = a(69598),
                h = a(21922),
                p = a(37196),
                f = a(96301),
                v = a(22181),
                b = a(3928),
                g = a(61080),
                j = a(85846),
                w = a(95390);
            let ApplicationSubmittedModal = e => {
                let {
                    nav: t
                } = e, {
                    closeCancelModal: a
                } = v.ModalContext.useContainer(), {
                    authUser: r,
                    authFilterQueryKey: d
                } = (0, f.aC)(), {
                    email: N
                } = (0, m.T)(), {
                    status: y
                } = (0, g.P)(), C = "ACCEPTED" === y;
                (0, b.aM2)(b.ASG, {
                    enabled: "PENDING" === y,
                    staleTime: 0,
                    refetchInterval: (0, n.Z)("5 seconds"),
                    filterQueryKey: d
                });
                let k = null == r ? void 0 : r.webappUri,
                    S = !!(null == r ? void 0 : r.artist);
                (0, i.useEffect)(() => {
                    k && (C || S) && c().push((0, w.OU)(k))
                }, [C, S, k]);
                let E = (0, s.jsxs)("div", {
                    className: "relative -mt-3 flex w-full flex-col items-center justify-center gap-y-8",
                    children: [t && (0, s.jsx)("div", {
                        className: "absolute right-0 top-0 flex",
                        children: (0, s.jsx)(h.h, {
                            icon: (0, s.jsx)(l.G, {
                                icon: u.g8,
                                size: "lg"
                            }),
                            onClick: a
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-col items-center justify-center gap-y-4 text-center",
                        children: [(0, s.jsx)("div", {
                            className: "relative flex h-36 w-36",
                            children: (0, s.jsx)(o(), {
                                src: "/images/transaction-success.svg",
                                alt: "transaction-success",
                                fill: !0,
                                sizes: "144px"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-2 font-base text-base800",
                            children: [(0, s.jsx)("h2", {
                                className: "text-base-l font-semibold md:text-base-xl",
                                children: "Application has been submitted!"
                            }), (0, s.jsxs)("p", {
                                className: "text-base-m md:text-base-l",
                                children: ["We're reviewing your application to verify ", (0, s.jsx)("br", {}), "your profile. We'll reach back out ", (0, s.jsx)("br", {}), " to you", " ", N ? `at ${N}` : "via email"]
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full items-center justify-center gap-x-2 [&_a]:w-full [&_button]:w-full ",
                        children: [(0, s.jsx)(x.z, {
                            href: j.qy.About,
                            label: "Learn More",
                            variant: t ? "primary" : "tertiary",
                            className: "min-w-[unset] max-w-[unset]",
                            fullWidth: t
                        }), (null == r ? void 0 : r.webappUri) && !t && (0, s.jsx)(x.z, {
                            href: (0, w.OU)(r.webappUri),
                            label: "View Profile",
                            variant: "primary",
                            className: "min-w-[unset]  max-w-[unset]"
                        })]
                    })]
                });
                return (0, s.jsx)(p.u_, {
                    body: E
                })
            }
        },
        19907: function(e, t, a) {
            a.d(t, {
                F: function() {
                    return BridgeModal
                }
            });
            var s, i, l = a(16356),
                n = a(97352),
                r = a(44361),
                o = a(92747),
                d = a(64571);
            let TokenInput = e => {
                    let {
                        chainId: t,
                        tokenSymbol: a,
                        icon: s,
                        amount: i,
                        setAmount: n,
                        placeholder: c,
                        balance: u,
                        className: m,
                        ...x
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: "grid gap-1",
                        children: [(0, l.jsxs)("div", {
                            className: "flex rounded-[6px] border border-base200",
                            children: [(0, l.jsxs)("div", {
                                className: "flex items-center gap-2 py-3 pl-2 pr-4",
                                children: [s, (0, l.jsxs)("div", {
                                    className: "grid gap-[2px]",
                                    children: [(0, l.jsx)("div", {
                                        className: "text-title-xs font-medium text-base800",
                                        children: a
                                    }), (0, l.jsx)("div", {
                                        className: "text-base-s leading-[14px]",
                                        children: (0, d.DO)(t)
                                    })]
                                })]
                            }), (0, l.jsx)(o.II, {
                                type: "number",
                                value: null != i ? i : "",
                                placeholder: null != c ? c : "Amount",
                                autoComplete: "off",
                                onChange: e => {
                                    n(e.target.value)
                                },
                                className: (0, r.m)("rounded-l-none", m),
                                ...x
                            })]
                        }), u ? (0, l.jsx)("div", {
                            className: "text-base-s text-base400",
                            children: u
                        }) : (0, l.jsx)("div", {
                            className: "h-4 w-28 animate-pulse rounded-lg bg-base400"
                        })]
                    })
                },
                EthereumIcon = e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsxs)("g", {
                        clipPath: "url(#clip0_810_41081)",
                        children: [(0, l.jsx)("path", {
                            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                            fill: "#627EEA"
                        }), (0, l.jsx)("path", {
                            d: "M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z",
                            fill: "white",
                            fillOpacity: "0.602"
                        }), (0, l.jsx)("path", {
                            d: "M12.3735 3L6.75 12.165L12.3735 9.6525V3Z",
                            fill: "white"
                        }), (0, l.jsx)("path", {
                            d: "M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z",
                            fill: "white",
                            fillOpacity: "0.602"
                        }), (0, l.jsx)("path", {
                            d: "M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z",
                            fill: "white"
                        }), (0, l.jsx)("path", {
                            d: "M12.3735 15.4297L17.9963 12.1649L12.3735 9.65393V15.4297Z",
                            fill: "white",
                            fillOpacity: "0.2"
                        }), (0, l.jsx)("path", {
                            d: "M6.75 12.1649L12.3735 15.4297V9.65393L6.75 12.1649Z",
                            fill: "white",
                            fillOpacity: "0.602"
                        })]
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_810_41081",
                            children: (0, l.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                }),
                OptimismIcon = e => (0, l.jsxs)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, l.jsxs)("g", {
                        clipPath: "url(#clip0_851_2915)",
                        children: [(0, l.jsx)("path", {
                            d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                            fill: "#FF0420"
                        }), (0, l.jsx)("path", {
                            d: "M8.50098 15.1872C7.78578 15.1872 7.20018 15.0192 6.74418 14.6832C6.29298 14.3424 6.06738 13.8528 6.06738 13.224C6.06738 13.0896 6.08178 12.9312 6.11058 12.7392C6.18738 12.3072 6.29778 11.7888 6.44178 11.1792C6.84978 9.52799 7.90578 8.70239 9.60498 8.70239C10.0658 8.70239 10.4834 8.77919 10.8482 8.93759C11.213 9.08639 11.501 9.31679 11.7122 9.62399C11.9234 9.92639 12.029 10.2864 12.029 10.704C12.029 10.8288 12.0146 10.9872 11.9858 11.1792C11.8946 11.712 11.789 12.2352 11.6594 12.7392C11.4482 13.56 11.0882 14.1792 10.5698 14.5872C10.0562 14.9904 9.36498 15.1872 8.50098 15.1872ZM8.63058 13.8912C8.96658 13.8912 9.24978 13.7904 9.48498 13.5936C9.72498 13.3968 9.89778 13.0944 9.99858 12.6816C10.1378 12.1152 10.2434 11.6256 10.3154 11.2032C10.3394 11.0784 10.3538 10.9488 10.3538 10.8144C10.3538 10.2672 10.0706 9.99359 9.49938 9.99359C9.16338 9.99359 8.87538 10.0944 8.63538 10.2912C8.40018 10.488 8.23218 10.7904 8.13138 11.2032C8.02098 11.6064 7.91538 12.096 7.80498 12.6816C7.78098 12.8016 7.76658 12.9264 7.76658 13.0608C7.76178 13.6176 8.05458 13.8912 8.63058 13.8912Z",
                            fill: "white"
                        }), (0, l.jsx)("path", {
                            d: "M12.4463 15.1008C12.3791 15.1008 12.3311 15.0816 12.2927 15.0384C12.2639 14.9904 12.2543 14.9376 12.2639 14.8752L13.5071 9.01918C13.5167 8.95198 13.5503 8.89918 13.6079 8.85598C13.6607 8.81278 13.7183 8.79358 13.7807 8.79358H16.1759C16.8431 8.79358 17.3759 8.93278 17.7791 9.20638C18.1871 9.48478 18.3935 9.88318 18.3935 10.4064C18.3935 10.5552 18.3743 10.7136 18.3407 10.8768C18.1919 11.568 17.8895 12.0768 17.4287 12.408C16.9775 12.7392 16.3583 12.9024 15.5711 12.9024H14.3567L13.9439 14.8752C13.9295 14.9424 13.9007 14.9952 13.8431 15.0384C13.7903 15.0816 13.7327 15.1008 13.6703 15.1008H12.4463ZM15.6335 11.6592C15.8879 11.6592 16.1039 11.592 16.2911 11.4528C16.4831 11.3136 16.6079 11.1168 16.6703 10.8576C16.6895 10.7568 16.6991 10.6656 16.6991 10.5888C16.6991 10.416 16.6463 10.2816 16.5455 10.1904C16.4447 10.0944 16.2671 10.0464 16.0223 10.0464H14.9423L14.6015 11.6592H15.6335Z",
                            fill: "white"
                        })]
                    }), (0, l.jsx)("defs", {
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_851_2915",
                            children: (0, l.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                });
            var c = a(69598),
                u = a(54668),
                m = a(88266),
                x = a(59665),
                h = a(96301),
                p = a(58876),
                f = a(25533),
                v = a(75747),
                b = a(10229),
                g = a(56484),
                j = a(38543),
                w = a(20553),
                N = a(53381),
                y = a(86093),
                C = a(19473),
                k = a(62832),
                S = a(89481),
                E = a(12570),
                A = a(60155),
                T = a(64054),
                M = a(23281);
            (s = i || (i = {}))[s.UserDeposit = 0] = "UserDeposit", s[s.L1InfoDeposit = 1] = "L1InfoDeposit";
            let I = [{
                    type: "event",
                    anonymous: !1,
                    inputs: [{
                        name: "from",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "to",
                        internalType: "address",
                        type: "address",
                        indexed: !0
                    }, {
                        name: "version",
                        internalType: "uint256",
                        type: "uint256",
                        indexed: !0
                    }, {
                        name: "opaqueData",
                        internalType: "bytes",
                        type: "bytes",
                        indexed: !1
                    }],
                    name: "TransactionDeposited"
                }],
                _ = (0, w.e)(I[0]);
            var L = a(77348),
                B = a(85846);
            let R = [{
                    inputs: [{
                        internalType: "uint32",
                        name: "_minGasLimit",
                        type: "uint32"
                    }, {
                        internalType: "bytes",
                        name: "_extraData",
                        type: "bytes"
                    }],
                    name: "depositETH",
                    outputs: [],
                    stateMutability: "payable",
                    type: "function"
                }, , ],
                useBridge = e => {
                    let {
                        amountInEth: t,
                        onBridge: a
                    } = e, {
                        openToast: s
                    } = (0, v.useToast)(), {
                        authUserAddress: l
                    } = (0, h.aC)(), {
                        provider: r
                    } = (0, f.useChainProvider)(), {
                        getSigner: o,
                        isSwitchingNetwork: c
                    } = (0, p.Qw)(), [u, w] = (0, n.useState)(!1), D = B.K_.eth, O = B.K_.optimism, {
                        ethToUsd: U
                    } = (0, g.E)(), P = (0, n.useMemo)(() => (0, m.f)(t), [t]), F = null != U ? U : 0, {
                        data: z,
                        isLoading: H,
                        isError: W
                    } = (0, x.KQ)({
                        address: null != l ? l : "0x000",
                        enabled: !!l,
                        formatUnits: "wei",
                        chainId: D
                    }), V = (0, n.useMemo)(() => (null == z ? void 0 : z.value) ? (0, d.by)({
                        weiValue: null == z ? void 0 : z.value.toString(),
                        maxDecimals: 4
                    }) : "0", [null == z ? void 0 : z.value]), $ = (0, n.useMemo)(() => F ? (F * Number(V)).toFixed(2) : void 0, [V, F]), {
                        data: Z,
                        isLoading: G,
                        isError: K
                    } = (0, x.KQ)({
                        address: l || "0x000",
                        enabled: !!l,
                        formatUnits: "wei",
                        chainId: B.K_.optimism
                    }), Q = (0, n.useMemo)(() => (null == Z ? void 0 : Z.value) ? (0, d.by)({
                        weiValue: null == Z ? void 0 : Z.value.toString(),
                        maxDecimals: 4
                    }) : "0", [null == Z ? void 0 : Z.value]), q = (0, n.useMemo)(() => F ? (F * Number(Q)).toFixed(2) : void 0, [Q, F]), Y = (0, n.useMemo)(() => P > BigInt(0), [P]), J = (0, n.useMemo)(() => {
                        var e;
                        return P <= (null !== (e = null == z ? void 0 : z.value) && void 0 !== e ? e : BigInt(0))
                    }, [P, null == z ? void 0 : z.value]), X = H || G, ee = (0, n.useMemo)(() => W || K, [W, K]), et = c || u, ea = !Y || !J || X || ee || u;
                    (0, n.useEffect)(() => {
                        ee && s({
                            text: "Unable to check your balance. Please try again later.",
                            variant: "error"
                        })
                    }, [ee, s]);
                    let es = (0, n.useMemo)(() => c ? "Switch chain in wallet" : J ? u ? "Confirm in wallet" : "Bridge" : "Insufficient funds", [u, J, c]),
                        waitForTransaction = async e => {
                            let {
                                transactionHash: t,
                                amountInEth: a
                            } = e, l = r(D), n = await l.waitForTransactionReceipt({
                                hash: t,
                                confirmations: 2
                            }), o = function(e) {
                                let {
                                    receipt: t
                                } = e, a = [];
                                for (let e of t.logs)
                                    if (e.topics[0] === _ && null !== e.logIndex) try {
                                        let t = (0, N.F)({
                                            abi: I,
                                            data: e.data,
                                            topics: e.topics,
                                            eventName: "TransactionDeposited"
                                        });
                                        a.push({
                                            event: t,
                                            logIndex: e.logIndex
                                        })
                                    } catch (e) {
                                        if (!(e instanceof y.lC)) throw e
                                    }
                                return a
                            }({
                                receipt: n
                            }), c = o[0];
                            if (!c) return s({
                                text: "Unable to check the transfer. Please check your balance in a few minutes.",
                                variant: "error"
                            });
                            let {
                                event: u,
                                logIndex: m
                            } = c, x = r(O), h = function(e) {
                                var t;
                                let {
                                    event: a,
                                    logIndex: s,
                                    blockHash: l
                                } = e, n = a.args.opaqueData;
                                if (!n) throw Error("No opaque data found in event");
                                let r = 0,
                                    o = (0, A.tP)(n, r, r + 32);
                                r += 32;
                                let d = (0, A.tP)(n, r, r + 32);
                                r += 32;
                                let c = (0, A.tP)(n, r, r + 8);
                                r += 8;
                                let u = 1 n == BigInt(null !== (t = n[r]) && void 0 !== t ? t : "0");
                                r += 1;
                                let m = !0 === u ? "0x" : a.args.to;
                                if (!m) throw Error("No to address found in event");
                                let x = a.args.from;
                                if (!x) throw Error("No from address found in event");
                                let h = n.length - r,
                                    p = (0, A.tP)(n, r, r + h),
                                    f = i.UserDeposit,
                                    v = function(e) {
                                        let {
                                            domain: t,
                                            logIndex: a,
                                            l1BlockHash: s
                                        } = e, i = (0, C.NC)(a), l = (0, k.zo)([s, (0, S.vk)(i, {
                                            size: 32
                                        })]), n = (0, E.w)(l), r = (0, C.NC)(t), o = (0, k.zo)([(0, S.vk)(r, {
                                            size: 32
                                        }), n]);
                                        return (0, E.w)(o)
                                    }({
                                        domain: f,
                                        logIndex: s,
                                        l1BlockHash: l
                                    }),
                                    b = (0, T.LV)([v, x, m, (0, M.f)(o), (0, M.f)(d), (0, M.f)(c), "0x", p]);
                                return (0, E.w)((0, k.zo)(["0x7E", b]))
                            }({
                                event: u,
                                logIndex: m,
                                blockHash: n.blockHash
                            }), p = await (0, b.ag)({
                                chainId: O,
                                hash: h,
                                provider: x,
                                interval: 2e4
                            });
                            "success" === p.status && s({
                                text: `Bridging complete! ${a} ETH was added to Optimism.`,
                                variant: "success",
                                ctaText: "View on Etherscan",
                                ctaHref: (0, d.mt)({
                                    transactionHash: h,
                                    chainId: O
                                }),
                                duration: 3e5
                            })
                        },
                        ei = (0, j.p)({
                            chainId: D,
                            onChainSwitchFail() {
                                w(!1)
                            },
                            onAuth: async () => {
                                w(!0);
                                let e = await o(D);
                                try {
                                    let i = await e.writeContract({
                                        address: (0, B.rI)(D),
                                        abi: R,
                                        functionName: "depositETH",
                                        args: [2e5, "0x"],
                                        value: P,
                                        chain: (0, L.v1)(D)
                                    });
                                    s({
                                        text: "Your Optimism ETH is on the way and may take a few minutes.",
                                        variant: "pending",
                                        ctaText: "View on Etherscan",
                                        ctaHref: (0, d.mt)({
                                            transactionHash: i,
                                            chainId: D
                                        }),
                                        duration: 3e5
                                    }), a(), await waitForTransaction({
                                        transactionHash: i,
                                        amountInEth: t
                                    })
                                } catch (e) {
                                    s({
                                        text: "Error during bridge transaction.",
                                        variant: "error"
                                    })
                                } finally {
                                    w(!1)
                                }
                            }
                        });
                    return {
                        bridge: ei,
                        ethBalanceInEth: V,
                        usdEthBalance: $,
                        ethOptimismBalanceInEth: Q,
                        usdEthOptimismBalance: q,
                        isBalanceLoading: X,
                        isBalanceError: ee,
                        isLoading: et,
                        disabled: ea,
                        state: es
                    }
                };
            var D = a(22181);
            let BridgeModal = () => {
                let {
                    closeCancelModal: e,
                    closeModal: t
                } = D.ModalContext.useContainer(), [a, s] = (0, n.useState)(""), {
                    bridge: i,
                    ethBalanceInEth: r,
                    ethOptimismBalanceInEth: o,
                    usdEthBalance: d,
                    usdEthOptimismBalance: m,
                    disabled: x,
                    state: h,
                    isLoading: p
                } = useBridge({
                    amountInEth: null != a ? a : "0",
                    onBridge: t
                }), getBalanceString = (e, t) => {
                    if (e) return `Balance: ${e} ETH ${t?`($${t} USD)`:""}`
                }, f = (0, l.jsxs)("div", {
                    className: "grid gap-6",
                    children: [(0, l.jsx)("span", {
                        children: "Bridge your ETH to collect drops on Optimism."
                    }), (0, l.jsxs)("div", {
                        className: "grid gap-4",
                        children: [(0, l.jsxs)("div", {
                            className: "grid gap-1",
                            children: [(0, l.jsx)("div", {
                                className: "text-base-l font-semibold text-black",
                                children: "From"
                            }), !!r && (0, l.jsx)(TokenInput, {
                                chainId: B.K_.eth,
                                amount: a,
                                setAmount: s,
                                icon: (0, l.jsx)(EthereumIcon, {}),
                                tokenSymbol: "ETH",
                                balance: getBalanceString(r, d),
                                disabled: p
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "grid gap-1",
                            children: [(0, l.jsx)("div", {
                                className: "text-base-l font-semibold",
                                children: "To"
                            }), !!o && (0, l.jsx)(TokenInput, {
                                chainId: B.K_.optimism,
                                amount: a,
                                setAmount: s,
                                icon: (0, l.jsx)(OptimismIcon, {}),
                                tokenSymbol: "ETH",
                                balance: getBalanceString(o, m),
                                disabled: p
                            })]
                        })]
                    }), (0, l.jsx)(c.z, {
                        label: h,
                        variant: "primary",
                        onClick: i,
                        className: "w-full flex-1",
                        fullWidth: !0,
                        disabled: x,
                        loading: p
                    })]
                });
                return (0, l.jsx)(u.Z, {
                    title: "Bridge ETH",
                    closeModal: e,
                    body: f,
                    bodyClassName: "pt-4 pb-1"
                })
            }
        },
        85178: function(e, t, a) {
            a.d(t, {
                i: function() {
                    return i
                }
            });
            var s = a(8205);
            let i = (0, s.zo)("div", {
                display: "none",
                variants: {
                    media: {
                        laptop: {
                            "@laptop": {
                                display: "block"
                            }
                        },
                        notLaptop: {
                            display: "block",
                            "@laptop": {
                                display: "none"
                            }
                        },
                        tablet: {
                            "@tablet": {
                                display: "block"
                            }
                        },
                        notTablet: {
                            display: "block",
                            "@tablet": {
                                display: "none"
                            }
                        },
                        tabletLandscape: {
                            "@tabletLandscape": {
                                display: "block"
                            }
                        },
                        notTabletLandscape: {
                            display: "block",
                            "@tabletLandscape": {
                                display: "none"
                            }
                        }
                    }
                }
            })
        },
        61080: function(e, t, a) {
            a.d(t, {
                P: function() {
                    return useAuthArtistApplicationStatus
                }
            });
            var s = a(71992);
            a(96960);
            var i = a(96301),
                l = a(3928),
                n = a(85846);

            function useAuthArtistApplicationStatus() {
                var e, t;
                let {
                    authUser: a
                } = (0, i.aC)(), {
                    pathname: r
                } = (0, s.useRouter)(), o = r === n.qy.ArtistApplication, {
                    data: d,
                    isLoading: c,
                    error: u
                } = (0, l.aM2)(l.kJv, {
                    enabled: !!(null == a ? void 0 : a.id),
                    filterQueryKey: {
                        id: null == a ? void 0 : a.id
                    },
                    refetchOnWindowFocus: !o,
                    ...n.gq
                });
                return {
                    hasApplied: !!(null == d ? void 0 : null === (e = d.data.artistApplication) || void 0 === e ? void 0 : e.id),
                    status: (null == d ? void 0 : null === (t = d.data.artistApplication) || void 0 === t ? void 0 : t.status) || null,
                    loading: c,
                    error: u
                }
            }
        },
        36916: function(e, t, a) {
            a.d(t, {
                d: function() {
                    return useBackendUserPersistedData
                }
            });
            var s = a(97352);
            a(96960);
            var i = a(20162),
                l = a(58658),
                n = a(28384),
                r = a(96301),
                o = a(36750),
                d = a(3928),
                c = a(42529),
                u = a(64398);
            (0, o.c)({
                trigger: [d.sPW],
                refetch: [d.lJx]
            });
            let m = l.Lj.GLOBAL;

            function useBackendUserPersistedData() {
                let {
                    isAuthenticatedWithAPI: e,
                    authUser: t
                } = (0, r.aC)(), {
                    data: a,
                    isLoading: o,
                    error: x,
                    setQueryData: h
                } = (0, d.aM2)(d.lJx, {
                    staleTime: 0,
                    filterQueryKey: {
                        authUserId: null == t ? void 0 : t.id
                    },
                    enabled: e
                }), p = (0, u.S)(), f = !!a, v = s.useMemo(() => {
                    if (!a) return n.N;
                    let e = n.L.safeParse(a.data.getUserPersistedData);
                    return e.success ? e.data : (p({
                        action: l.pe.USER_BACKEND_PERSISTED_DATA_FETCH_ERROR,
                        error: Error(e.error.message),
                        errorType: l.QS.PARSE_ERROR,
                        message: e.error.message,
                        level: "error",
                        isArtistOnlyPage: !1,
                        pillar: m
                    }), n.N)
                }, [a, p]), {
                    mutate: b
                } = (0, d.Dbo)(d.sPW, {
                    onError: e => {
                        p({
                            action: l.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(e.message),
                            errorType: l.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
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
                            action: l.pe.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            error: Error(t.setUserPersistedData.message),
                            errorType: l.QS.USER_BACKEND_PERSISTED_DATA_UPDATE_ERROR,
                            message: t.setUserPersistedData.message,
                            level: "warning",
                            isArtistOnlyPage: !1,
                            pillar: m
                        })
                    },
                    retry: 3
                }), g = (0, c.R)(e => {
                    let t = (0, i.Z)(n.L, { ...v,
                        ...e,
                        version: n.N.version
                    });
                    h({
                        data: {
                            getUserPersistedData: t
                        }
                    }), b({
                        data: t
                    })
                }), j = (0, c.R)(e => {
                    g({
                        hasDismissedNewRewardsFeatureBanner: e
                    })
                }), w = (0, c.R)(e => {
                    g({
                        hasDismissedSetupProfile: e
                    })
                }), N = (0, c.R)(e => {
                    g({
                        hasDismissedNewChannelsFeatureBanner: e
                    })
                }), y = s.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedSetupProfile ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedSetupProfile]), C = s.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedNewRewardsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedNewRewardsFeatureBanner]), k = s.useMemo(() => o || !f ? {
                    type: "loading"
                } : v.hasDismissedNewChannelsFeatureBanner ? {
                    type: "dismissed"
                } : {
                    type: "not-dismissed"
                }, [f, o, v.hasDismissedNewChannelsFeatureBanner]);
                return {
                    setHasDismissedSetupProfile: w,
                    setHasDismissedNewRewardsFeatureBanner: j,
                    setHasDismissedNewChannelsFeatureBanner: N,
                    hasDismissedSetupProfile: y,
                    hasDismissedNewRewardsFeatureBanner: C,
                    hasDismissedNewChannelsFeatureBanner: k,
                    loading: o,
                    error: x
                }
            }
        },
        56484: function(e, t, a) {
            a.d(t, {
                E: function() {
                    return useEthToUsdValue
                }
            }), a(96960);
            var s = a(3928);

            function useEthToUsdValue() {
                let {
                    data: e,
                    isInitialLoading: t
                } = (0, s.aM2)(s.Shl, {
                    filterQueryKey: {
                        key: "EthToUsd"
                    },
                    staleTime: 0
                });
                return {
                    isLoading: t,
                    ethToUsd: null == e ? void 0 : e.data.currencies.ethToUsd
                }
            }
        }
    }
]);