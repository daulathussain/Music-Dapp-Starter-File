(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6544], {
        41849: function(e, l, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/explore", function() {
                return r(35194)
            }])
        },
        35194: function(e, l, r) {
            "use strict";
            r.r(l), r.d(l, {
                __N_SSG: function() {
                    return H
                },
                default: function() {
                    return Explore
                }
            });
            var n = r(16356),
                t = r(97352),
                a = r(72102),
                o = r(22248),
                s = r(71992),
                i = r.n(s),
                d = r(40612),
                c = r(46679),
                u = r(84385),
                x = r(44386),
                p = r(73950),
                g = r(76292),
                m = r(60265),
                h = r(64571),
                f = r(49542),
                b = r(58285),
                v = r(74447),
                k = r.n(v),
                N = r(19791),
                E = r(87243),
                C = r(1808),
                j = r(96301),
                R = r(43158),
                A = r(83835),
                y = r(85846),
                _ = r(69598),
                L = r(14418),
                O = r(22428);
            let ExplorePageNoResults = () => (0, n.jsx)("div", {
                children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-6 md:px-4",
                    children: [(0, n.jsxs)("div", {
                        className: "flex flex-col items-center gap-4 py-10",
                        children: [(0, n.jsx)("p", {
                            className: "text-title text-center text-title-s font-medium md:text-title-l",
                            children: "No results found"
                        }), (0, n.jsx)(_.z, {
                            variant: "primary",
                            label: "Clear filters",
                            onClick: () => {
                                (0, L.aw)()
                            }
                        })]
                    }), (0, n.jsx)(O.A, {})]
                })
            });
            var T = r(41171),
                U = r(13648),
                w = r(52999),
                S = r(39170),
                q = r(17929),
                I = r(46702),
                P = r(49061),
                D = r(81111);
            let getSortDropdown = e => {
                    let {
                        exploreType: l
                    } = e;
                    switch (l) {
                        case I.AL.SOUNDS:
                            return (0, n.jsx)(S.bU, {});
                        case I.AL.ARTISTS:
                            return (0, n.jsx)(S.t3, {});
                        case I.AL.COLLECTORS:
                            return (0, n.jsx)(S.jc, {});
                        case I.AL.PLAYLISTS:
                            return (0, n.jsx)(S.WY, {});
                        default:
                            return null
                    }
                },
                ExploreResults = () => {
                    let {
                        authUser: e
                    } = (0, j.aC)(), l = null == e ? void 0 : e.id, {
                        tab: r,
                        explore_type: a
                    } = (0, m.UO)(), {
                        showAvailabilityFilter: o,
                        showLocationFilter: s,
                        showGenreFilter: i
                    } = (0, L.pD)(), {
                        searchResults: d,
                        loadMore: c,
                        isInitialLoading: u,
                        isFetchingNextPage: x,
                        hasNextPage: p = !1
                    } = (0, D.s)(), {
                        searchPageText: g
                    } = (0, E.o)(), {
                        tablet: v
                    } = (0, R.useMediaQuery)(), _ = x && p, O = t.useMemo(() => _ ? (0, n.jsx)(C.w, {}) : null, [_]), S = t.useRef(null), z = 0 === d.length;
                    (0, A.G)(() => {
                        if ((0, I.wV)(r)) return (0, P.r7)({
                            activeTab: r
                        })
                    }, [r]), (0, A.G)(() => {
                        if (v && "" !== g && null == r) return (0, P.r7)({
                            activeTab: I.lP.ALL
                        })
                    }, [v, g]);
                    let M = getSortDropdown({
                        exploreType: a
                    });
                    return (0, n.jsxs)("div", {
                        className: (0, f.default)("mx-auto my-0 flex min-h-screen flex-col px-4 md:gap-4", "md:gap-2 md:px-6 md:pb-4", "lg: max-w-content", _ ? "pb-28 md:pb-40" : "pb-2 md:pb-4"),
                        children: [(0, n.jsx)("h3", {
                            className: "flex items-center justify-between font-title text-title-l font-medium",
                            children: k()(null != a ? a : "")
                        }), (0, n.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, n.jsx)("div", {
                                className: "block md:hidden",
                                children: (0, n.jsx)(U.z, {
                                    showAvailabilityFilter: o,
                                    showLocationFilter: s,
                                    showGenreFilter: i
                                })
                            }), (0, n.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, n.jsx)(T.x, {
                                    showAvailabilityFilter: o,
                                    showLocationFilter: s,
                                    showGenreFilter: i
                                })
                            }), M]
                        }), u ? (0, n.jsxs)("div", {
                            className: "mt-2",
                            children: [(0, n.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, n.jsx)(w.x, {})
                            }), (0, n.jsx)("div", {
                                className: "block md:hidden",
                                children: (0, n.jsx)("div", {
                                    className: "grid grid-cols-2 gap-4 md:hidden md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
                                    children: Array.from({
                                        length: 20
                                    }).map((e, l) => (0, n.jsx)("div", {
                                        children: (0, n.jsx)("div", {
                                            className: "h-12 w-full animate-pulse rounded-md bg-neutral200"
                                        })
                                    }, `top-results-mobile-${l}-skeleton`))
                                })
                            })]
                        }) : (0, n.jsx)(n.Fragment, {
                            children: z ? (0, n.jsx)(ExplorePageNoResults, {}) : (0, n.jsx)("div", {
                                className: "mt-2 md:mt-0",
                                children: (0, n.jsx)(b.Mr, {
                                    ref: S,
                                    context: {
                                        loadMore: c
                                    },
                                    endReached: c,
                                    data: d,
                                    useWindowScroll: !0,
                                    itemContent: (e, l) => (0, q.k)({
                                        item: l,
                                        getNextTrackIds: "Release" === l.__typename ? (0, h.Ob)({
                                            trackId: l.track.id,
                                            releases: (0, N.eJ)(d, e => "Release" === e.__typename ? e : null)
                                        }) : void 0
                                    }),
                                    overscan: 100,
                                    listClassName: (0, f.default)("gap-4", y.U6),
                                    components: {
                                        Footer: () => O
                                    }
                                })
                            }, `search-results-${l}}`)
                        })]
                    })
                };
            var z = r(90775);
            let M = [{
                    key: x.a9.HIP_HOP_RAP,
                    label: x.a9.HIP_HOP_RAP,
                    backgroundColor: "#434D62",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/HIP_HOP_RAP.png"
                }, {
                    key: x.a9.ELECTRONIC,
                    label: x.a9.ELECTRONIC,
                    backgroundColor: "#30AEAD",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/ELECTRONIC.png"
                }, {
                    key: x.a9.POP,
                    label: x.a9.POP,
                    backgroundColor: "#C03A62",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/POP.png"
                }, {
                    key: x.a9.R_B_SOUL,
                    label: x.a9.R_B_SOUL,
                    backgroundColor: "#1B67AC",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/R_B_SOUL.png"
                }, {
                    key: x.a9.INDIE,
                    label: x.a9.INDIE,
                    backgroundColor: "#C17D56",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/INDIE.png"
                }, {
                    key: x.a9.DANCE_EDM,
                    label: x.a9.DANCE_EDM,
                    backgroundColor: "#5B509E",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/DANCE_EDM.png"
                }, {
                    key: x.a9.ALTERNATIVE_ROCK,
                    label: x.a9.ALTERNATIVE_ROCK,
                    backgroundColor: "#56AEC4",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/ALTERNATIVE_ROCK.png"
                }, {
                    key: x.a9.EXPERIMENTAL,
                    label: x.a9.EXPERIMENTAL,
                    backgroundColor: "#B56B89",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/EXPERIMENTAL.png"
                }, {
                    key: x.a9.AMBIENT,
                    label: x.a9.AMBIENT,
                    backgroundColor: "#8D4083",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/AMBIENT.png"
                }, {
                    key: x.a9.FOLK_SINGER_SONGWRITER,
                    label: "Singer-Songwriter",
                    backgroundColor: "#897E76",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/SINGER_SONGWRITER.png"
                }, {
                    key: x.a9.HOUSE,
                    label: x.a9.HOUSE,
                    backgroundColor: "#9954A9",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/HOUSE.png"
                }, {
                    key: x.a9.TECHNO,
                    label: x.a9.TECHNO,
                    backgroundColor: "#404040",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/TECHNO.png"
                }, {
                    key: x.a9.COUNTRY,
                    label: x.a9.COUNTRY,
                    backgroundColor: "#863719",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/COUNTRY.png"
                }, {
                    key: x.a9.ROCK,
                    label: x.a9.ROCK,
                    backgroundColor: "#809DB1",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/ROCK.png"
                }, {
                    key: x.a9.TRAP,
                    label: x.a9.TRAP,
                    backgroundColor: "#444444",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/TRAP.png"
                }, {
                    key: x.a9.LATIN,
                    label: x.a9.LATIN,
                    backgroundColor: "#E85C40",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/LATIN.png"
                }, {
                    key: x.a9.WORLD,
                    label: x.a9.WORLD,
                    backgroundColor: "#B68734",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/WORLD.png"
                }, {
                    key: x.a9.DRUM_BASS,
                    label: x.a9.DRUM_BASS,
                    backgroundColor: "#39656F",
                    imgUrl: "https://d16zqvkniqf1rn.cloudfront.net/explore/v1/DRUM_BASS.png"
                }],
                ExplorePage = () => {
                    let {
                        explore_type: e
                    } = (0, m.UO)();
                    return (0, n.jsx)(n.Fragment, {
                        children: e ? (0, n.jsx)(ExploreResults, {}) : (0, n.jsx)("div", {
                            className: "mb-12 flex flex-col gap-6 px-6 pb-10 md:mx-auto lg:max-w-content",
                            children: (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(O.A, {}), (0, n.jsx)(SoundsByGenres, {})]
                            })
                        })
                    })
                },
                SoundsByGenres = () => (0, n.jsxs)("div", {
                    className: "flex w-full flex-col gap-4",
                    children: [(0, n.jsx)("div", {
                        className: "flex justify-between",
                        children: (0, n.jsx)("h3", {
                            className: "font-title text-title-m font-medium md:text-title-l",
                            children: "Sounds by Genre"
                        })
                    }), (0, n.jsx)("div", {
                        className: "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:grid-cols-5 xl:grid-cols-6",
                        children: M.map((e, l) => {
                            let r = l < 6;
                            return (0, n.jsx)(GenreCard, {
                                label: e.label,
                                backgroundColor: e.backgroundColor,
                                imgUrl: e.imgUrl,
                                isPriorityImage: r,
                                onClick: () => {
                                    (0, h.k3)(), (0, P.c7)({
                                        type: I.AL.SOUNDS
                                    }), (0, P.ar)({
                                        type: I.AL.SOUNDS
                                    }), m.M8.genre = x.kd[e.key]
                                }
                            }, l)
                        })
                    })]
                }),
                GenreCard = e => {
                    let {
                        label: l,
                        backgroundColor: r,
                        imgUrl: t,
                        isPriorityImage: a = !1,
                        onClick: o
                    } = e;
                    return (0, n.jsxs)("div", {
                        className: "duration-6000 relative h-[116px] cursor-pointer overflow-hidden rounded-lg bg-black transition-all ease-in-out hover:brightness-[116%] md:h-[165px] md:w-full",
                        style: {
                            backgroundColor: r
                        },
                        onClick: o,
                        children: [(0, n.jsx)("p", {
                            className: "absolute z-above1 px-4 py-3 font-title text-title-s font-medium text-white md:text-title-m",
                            children: l
                        }), (0, n.jsxs)("div", {
                            className: "relative top-0 overflow-hidden",
                            children: [(0, n.jsx)(z.E, {
                                className: "relative h-[165px] rounded-lg"
                            }), (0, n.jsx)("div", {
                                className: "z-0 absolute top-0 h-[100px] w-[178px] rounded-lg"
                            })]
                        }), (0, n.jsx)("div", {
                            className: "absolute right-0 top-10",
                            children: (0, n.jsx)(p.G, {
                                placeholder: "blur",
                                blurDataURL: (0, g.Z)(96, 96),
                                src: t,
                                alt: "genre image",
                                width: 96,
                                height: 96,
                                priority: a,
                                style: {
                                    borderRadius: 8
                                }
                            })
                        })]
                    })
                };
            var G = r(69965),
                B = r(70522),
                H = !0;

            function Explore() {
                let e = (0, t.useRef)(null),
                    {
                        barRawInputText: l,
                        handleInputChange: r,
                        clearText: s
                    } = (0, E.o)(),
                    x = (0, t.useRef)((0, o.Z)(e => {
                        i().push({
                            pathname: "/search",
                            query: {
                                q: e
                            }
                        }).then(() => {
                            m.M8.tab = I.lP.ALL, (0, P.r7)({
                                activeTab: I.lP.ALL
                            })
                        })
                    }, 500)).current;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(G.pQ, {
                        title: "Explore | Sound.xyz"
                    }), (0, n.jsxs)("div", {
                        className: `w-full bg-white pb-12 md:pb-16 md:pb-[${u.MINIMIZED_PLAYER_HEIGHT}px]`,
                        children: [(0, n.jsx)("div", {
                            className: "flex w-full px-4 pb-5 md:hidden",
                            children: (0, n.jsxs)("div", {
                                className: "flex h-10 w-[99%] items-center rounded-md border-solid border-neutral300 bg-base100 focus-within:border focus-within:bg-white",
                                children: [(0, n.jsx)(a.G, {
                                    className: "ml-3 stroke-neutral800",
                                    icon: c.faMagnifyingGlass
                                }), (0, n.jsx)(B.Mj, {
                                    ref: e,
                                    type: "text",
                                    placeholder: "Search for anything on Sound",
                                    value: l,
                                    onChange: e => {
                                        x.cancel(), r(e), m.M8.tab = I.lP.ALL, (0, P.r7)({
                                            activeTab: I.lP.ALL
                                        }), x(e.target.value)
                                    },
                                    onKeyUp: e => {
                                        "Enter" === e.key && e.currentTarget.blur()
                                    }
                                }), !!l && (0, n.jsx)(B.G7, {
                                    className: "mr-3",
                                    onClick: () => s(),
                                    "aria-label": "Clear search input",
                                    children: (0, n.jsx)(a.G, {
                                        icon: d.g8,
                                        size: "lg"
                                    })
                                })]
                            })
                        }), (0, n.jsx)(ExplorePage, {})]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [4361, 9721, 2145, 5265, 8608, 2889, 3879, 5441, 286, 8631, 7701, 9761, 5464, 8285, 5221, 1165, 247, 4449, 9416, 7543, 2332, 4578, 121, 1826, 9032, 3429, 199, 1932, 9289, 7006, 2002, 8726, 9774, 2888, 179], function() {
            return e(e.s = 41849)
        }), _N_E = e.O()
    }
]);