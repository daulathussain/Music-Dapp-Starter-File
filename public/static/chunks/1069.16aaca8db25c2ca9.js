"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1069], {
        91069: function(e, a, i) {
            i.r(a), i.d(a, {
                MobileNav: function() {
                    return MobileNav
                }
            });
            var t = i(16356);
            i(97352);
            var n = i(72102),
                c = i(49542),
                s = i(31622),
                l = i(30957),
                o = i(51274),
                r = i(76095),
                v = i(87355),
                h = i(51951),
                m = i(43319),
                d = i(25123),
                f = i(14418),
                p = i(49061),
                x = i(43416),
                N = i(44361),
                b = i(94050),
                I = i(97946);
            let MobileNavLinkV2 = e => (0, t.jsx)(I.s, {
                    className: "appearance-[button] flex-1 text-base900 no-underline active:scale-[0.98]",
                    onClick: a => {
                        var i;
                        null == a || a.stopPropagation(), null === (i = e.onClick) || void 0 === i || i.call(e, a)
                    },
                    pathnameUri: e.pathname || "/",
                    children: (0, t.jsxs)(Container, {
                        isActive: !!e.isActive,
                        icon: e.icon,
                        className: "relative",
                        children: [!!e.notificationIndicator && (0, t.jsx)(b.z$, {
                            className: "right-[calc(50%-15px)] top-0 h-2 w-2"
                        }), (0, t.jsx)("span", {
                            className: "home-label font-base text-base-xs",
                            children: e.label
                        })]
                    })
                }),
                Container = e => {
                    let {
                        children: a,
                        className: i,
                        isActive: n,
                        icon: c
                    } = e;
                    return (0, t.jsxs)("div", {
                        className: (0, N.m)("flex min-h-[43px] flex-col items-center justify-center gap-1", "data-[state=active]:text-base900 data-[state=inactive]:text-base600", "data-[state=active]:font-semibold data-[state=inactive]:font-medium", i),
                        "data-state": n ? "active" : "inactive",
                        children: [!!c && (0, t.jsx)("div", {
                            className: "flex h-[25px] w-[27px] flex-shrink-0 items-center justify-center [&_svg]:h-5",
                            children: c
                        }), a]
                    })
                };
            var u = i(58430),
                O = i(66676),
                g = i(85846);
            let MobileNav = () => {
                    let {
                        hasUnreadNotifications: e
                    } = (0, x.I)(), {
                        onNotificationsClick: a,
                        isHomepageActive: i,
                        isExploreActive: s,
                        isNotificationActive: l,
                        isViralChartsActive: o
                    } = (0, O.H)();
                    return (0, t.jsx)("div", {
                        className: (0, c.default)("fixed bottom-0 z-mobileNav flex h-[calc(68px+env(safe-area-inset-bottom))] w-screen items-center justify-center border-t", "border-base100 bg-white px-0 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 md:hidden"),
                        style: {
                            WebkitTapHighlightColor: "transparent"
                        },
                        id: u.z,
                        children: (0, t.jsxs)("div", {
                            className: "flex w-full justify-between gap-1",
                            children: [(0, t.jsx)(MobileNavLinkV2, {
                                label: j.HOME.label,
                                icon: (0, t.jsx)(n.G, {
                                    icon: i ? j.HOME.activeIcon : j.HOME.inactiveIcon
                                }),
                                pathname: j.HOME.pathname,
                                isActive: i
                            }), (0, t.jsx)(MobileNavLinkV2, {
                                label: j.VIRAL_SOUNDS.label,
                                icon: (0, t.jsx)(n.G, {
                                    icon: o ? j.VIRAL_SOUNDS.activeIcon : j.VIRAL_SOUNDS.inactiveIcon
                                }),
                                pathname: j.VIRAL_SOUNDS.pathname,
                                isActive: o
                            }), (0, t.jsx)(MobileNavLinkV2, {
                                label: j.EXPLORE.label,
                                icon: (0, t.jsx)(n.G, {
                                    icon: s ? j.EXPLORE.activeIcon : j.EXPLORE.inactiveIcon
                                }),
                                pathname: j.EXPLORE.pathname,
                                isActive: s,
                                onClick: () => {
                                    (0, f.aw)(), (0, f.oJ)(), (0, p.c7)({
                                        type: null
                                    })
                                }
                            }), (0, t.jsx)(MobileNavLinkV2, {
                                label: j.NOTIFICATIONS.label,
                                icon: (0, t.jsx)(n.G, {
                                    icon: l ? j.NOTIFICATIONS.activeIcon : j.NOTIFICATIONS.inactiveIcon
                                }),
                                pathname: j.NOTIFICATIONS.pathname,
                                isActive: l,
                                notificationIndicator: e,
                                onClick: a
                            })]
                        })
                    })
                },
                j = {
                    HOME: {
                        activeIcon: h.J9,
                        inactiveIcon: l.J9,
                        label: "Home",
                        pathname: g.qy.Home
                    },
                    VIRAL_SOUNDS: {
                        activeIcon: m.Xi,
                        inactiveIcon: o.Xi,
                        label: "Viral Sounds",
                        pathname: g.qy.ViralChartsSounds
                    },
                    EXPLORE: {
                        activeIcon: d.wn,
                        inactiveIcon: r.wn,
                        label: "Search",
                        pathname: g.qy.Explore
                    },
                    NOTIFICATIONS: {
                        activeIcon: v.qm,
                        inactiveIcon: s.qm,
                        label: "Notifications",
                        pathname: g.qy.NotificationPage
                    }
                }
        },
        76095: function(e, a, i) {
            var t = i(49868);
            a.DF = {
                prefix: t.prefix,
                iconName: t.iconName,
                icon: [t.width, t.height, t.aliases, t.unicode, t.svgPathData]
            }, a.wn = a.DF, t.prefix, t.iconName, t.width, t.height, t.aliases, t.unicode, t.svgPathData, t.aliases
        },
        46679: function(e, a) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            });
            var i = "magnifying-glass",
                t = [128269, "search"],
                n = "f002",
                c = "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z";
            a.definition = {
                prefix: "fas",
                iconName: i,
                icon: [512, 512, t, n, c]
            }, a.faMagnifyingGlass = a.definition, a.prefix = "fas", a.iconName = i, a.width = 512, a.height = 512, a.ligatures = t, a.unicode = n, a.svgPathData = c, a.aliases = t
        },
        25123: function(e, a, i) {
            var t = i(46679);
            a.DF = {
                prefix: t.prefix,
                iconName: t.iconName,
                icon: [t.width, t.height, t.aliases, t.unicode, t.svgPathData]
            }, a.wn = a.DF, t.prefix, t.iconName, t.width, t.height, t.aliases, t.unicode, t.svgPathData, t.aliases
        }
    }
]);