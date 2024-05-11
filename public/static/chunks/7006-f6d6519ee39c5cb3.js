"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7006], {
        29823: function(e, t, i) {
            i.r(t), i.d(t, {
                AUDIO_PLAYER_ID: function() {
                    return ei
                },
                AudioPlayer: function() {
                    return AudioPlayer
                },
                AudioPlayerExtra: function() {
                    return el
                }
            });
            var n = i(16356),
                l = i(97352),
                r = i(72102),
                o = i(49542),
                a = i(24924),
                s = i.n(a),
                d = i(71992),
                c = i(78608),
                u = i(31265),
                h = i(42178),
                x = i(59630),
                p = i(69598),
                v = i(21922),
                f = i(59173),
                g = i(34089),
                m = i(66361),
                b = i(52931),
                j = i(96301),
                w = i(21956),
                k = i(43158),
                y = i(22181),
                C = i(75747),
                z = i(14034),
                I = i(81688),
                P = i(85846),
                S = i(95390),
                T = i(88282),
                A = i(55116),
                R = i(9495),
                M = i(63971),
                N = i(11794),
                $ = i(82287),
                E = i(267),
                O = i(8776),
                U = i(72777);
            let ControlButtons = () => {
                let {
                    isNextTrackDisabled: e,
                    playing: t,
                    loading: i,
                    loadingActiveTrack: l,
                    repeatMode: o,
                    shuffleEnabled: a,
                    disableNextPrev: s
                } = (0, I.PZ)();
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(v.h, {
                        className: "data-[state=active]:text-fuchsia500 data-[state=inactive]:text-black ",
                        onClick: U.Ag,
                        "data-state": a ? "active" : "inactive",
                        icon: (0, n.jsx)(r.G, {
                            icon: A.a_,
                            size: "lg"
                        }),
                        title: "Shuffle"
                    }), (0, n.jsx)(v.h, {
                        className: "text-black focus:text-black hover:text-black active:text-black ",
                        onClick: I.be,
                        icon: (0, n.jsx)(r.G, {
                            icon: R.J0,
                            size: "lg"
                        }),
                        disabled: i || l || s,
                        title: "Previous track"
                    }), (0, n.jsx)(v.h, {
                        className: "text-black focus:text-black hover:text-black active:text-black ",
                        disabled: i || l,
                        onClick: E.ID,
                        icon: (0, n.jsx)(r.G, {
                            icon: t ? N.XQ : $.zc,
                            size: "xl"
                        }),
                        title: t ? "Pause" : "Play",
                        css: {
                            height: 24,
                            width: 24
                        }
                    }), (0, n.jsx)(v.h, {
                        className: "text-black focus:text-black hover:text-black active:text-black ",
                        disabled: e || i || l || s,
                        onClick: I.mP,
                        icon: (0, n.jsx)(r.G, {
                            icon: M.Jw,
                            size: "lg"
                        }),
                        title: "Next track"
                    }), (0, n.jsxs)("div", {
                        className: "relative block",
                        children: [(0, n.jsx)(v.h, {
                            className: "data-[state=active]:text-fuchsia500 data-[state=inactive]:text-black ",
                            onClick: O.fX,
                            "data-state": o !== O.zq.NO_REPEAT ? "active" : "inactive",
                            icon: (0, n.jsx)(r.G, {
                                icon: T.jH,
                                size: "lg"
                            }),
                            title: "Repeat"
                        }), o === O.zq.REPEAT_ONE && (0, n.jsx)("div", {
                            className: "absolute right-0.5 top-[3px] flex h-3 w-3 flex-shrink-0 select-none items-center justify-center rounded-full bg-black text-center leading-[10px]",
                            children: (0, n.jsx)("span", {
                                className: "w-full font-base text-[8px] font-extrabold text-white",
                                children: "1"
                            })
                        })]
                    })]
                })
            };
            var _ = i(4549);
            let QueueButton = e => {
                let {
                    isQueueOpen: t,
                    setQueueOpen: i
                } = e, {
                    disableNextPrev: l,
                    queueTrackIds: a
                } = (0, I.PZ)();
                return (0, n.jsx)(v.h, {
                    variant: t ? "inverted" : "primary",
                    className: (0, o.default)("data-[state=active]:text-fuchsia500", t && "!rounded-sm !bg-neutral800"),
                    onClick: () => {
                        i(!t)
                    },
                    icon: (0, n.jsx)(r.G, {
                        icon: _.xi
                    }),
                    "data-state": a.length > 0 ? "active" : "inactive",
                    disabled: l,
                    title: "Open queue",
                    iconSize: 16,
                    size: 30
                })
            };
            var D = i(7006),
                L = i(37925),
                Z = i(73950),
                G = i(76292),
                F = i(97946),
                W = i(70511),
                Q = i(64328);
            let SongInfo = () => {
                var e, t, i, l;
                let {
                    activeTrackId: r,
                    trackAudioUrl: o
                } = (0, I.PZ)(), {
                    releaseInfo: a
                } = (0, Q.w)({
                    trackId: r,
                    shouldFetch: !0
                });
                if (!a) return null;
                let s = a.id,
                    d = null === (e = a.staticCoverImage) || void 0 === e ? void 0 : e.url,
                    c = null !== (t = a.coverImage.url) && void 0 !== t ? t : "",
                    u = null !== (i = a.artist.name) && void 0 !== i ? i : "Unnamed Artist",
                    h = null !== (l = a.title) && void 0 !== l ? l : "Unnamed Song",
                    x = (0, S.OU)(a.webappUri),
                    p = (0, S.OU)(a.artist.webappUri);
                return (0, n.jsxs)("div", {
                    className: "flex h-full w-full items-center gap-3",
                    children: [(0, n.jsx)("div", {
                        className: "h-14 w-14 self-center overflow-hidden rounded-sm",
                        children: (0, n.jsx)(F.s, {
                            pathnameUri: x,
                            className: "relative h-full w-full overflow-hidden rounded-sm",
                            children: (0, n.jsx)(Z.G, {
                                placeholder: "blur",
                                src: d || c,
                                blurDataURL: (0, G.T)(56, 56),
                                alt: h,
                                height: 112,
                                width: 112
                            })
                        })
                    }), (0, n.jsxs)("div", {
                        className: "mr-6 flex flex-1 flex-col overflow-hidden",
                        children: [(0, n.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, n.jsx)(W.j, {
                                songTitle: h,
                                webappUri: a.webappUri
                            }), s && (0, n.jsx)(L.oj, {
                                releaseId: s,
                                disabled: !o,
                                source: "Audio Player",
                                iconSize: 16,
                                size: 16
                            })]
                        }), (0, n.jsx)("div", {
                            className: "font-base text-base-xs font-medium text-base500",
                            children: (0, n.jsx)(F.s, {
                                pathnameUri: p,
                                children: (0, n.jsx)("span", {
                                    className: "inline-block ",
                                    children: u
                                })
                            })
                        })]
                    })]
                })
            };
            var H = i(8205),
                B = i(35341),
                V = i(57233);
            let Timeline = () => {
                    let {
                        duration: e,
                        playing: t
                    } = (0, I.PZ)(), {
                        position: i
                    } = (0, B.E)(), [r, o] = (0, l.useState)(i), [a, s] = (0, l.useState)(!1), startSeek = () => {
                        s(!0)
                    }, endSeek = e => {
                        t && s(!1);
                        let i = e.target;
                        (0, I.O7)(i.valueAsNumber)
                    };
                    return (0, l.useEffect)(() => {
                        t && s(!1)
                    }, [t]), (0, n.jsxs)("div", {
                        className: "flex w-full items-center justify-center",
                        children: [(0, n.jsx)("span", {
                            className: "mr-2 min-w-[28px] text-right font-base text-[10px] text-base-xs font-semibold text-neutral500",
                            children: (0, V.m)(a ? r : i)
                        }), (0, n.jsx)(Y, {
                            type: "range",
                            step: 1,
                            min: 0,
                            value: a ? r : i,
                            max: e,
                            onMouseDown: startSeek,
                            onTouchStart: startSeek,
                            onKeyDown: startSeek,
                            onMouseUp: endSeek,
                            onTouchEnd: endSeek,
                            onKeyUp: endSeek,
                            onChange: e => {
                                o(e.target.valueAsNumber)
                            }
                        }), (0, n.jsx)("span", {
                            className: "ml-2 min-w-[28px] text-left font-base text-[10px] text-base-xs font-semibold text-neutral500",
                            children: (0, V.m)(e)
                        })]
                    })
                },
                Y = (0, H.zo)("input", {
                    WebkitAppearance: "none",
                    borderRadius: 2,
                    cursor: "pointer",
                    overflow: "hidden",
                    width: "100%",
                    "&::-webkit-slider-runnable-track": {
                        height: "4px",
                        background: "$grey200"
                    },
                    "&::-moz-range-track": {
                        height: "4px",
                        background: "$grey200"
                    },
                    "&::-webkit-slider-thumb": {
                        WebkitAppearance: "none",
                        backgroundColor: "$fuchsia500",
                        boxShadow: "-1340px -1341px 0 1340px #fff, -1340px -1337px 0 1340px #EB5CBB",
                        height: "1px",
                        width: "1px"
                    },
                    "&::-moz-range-thumb": {
                        backgroundColor: "$fuchsia500",
                        border: "none",
                        height: "1px",
                        width: "1px"
                    },
                    "&::-moz-range-progress": {
                        background: "$fuchsia500"
                    }
                });
            i(46165);
            var X = i(22248),
                q = i(85200),
                J = i(47767),
                K = i(32648),
                ee = i(89028),
                et = i(36619);
            let VolumeButton = () => {
                    let e;
                    let {
                        muted: t,
                        volume: i
                    } = (0, I.PZ)(), l = t ? 0 : i;
                    e = 0 === l ? ee.Kl : l < .5 ? K.oo : J.m1;
                    let o = (0, X.Z)(e => {
                        t && (0, E.$t)(), (0, E.jA)(e)
                    }, 70);
                    return (0, n.jsx)("div", {
                        className: "relative flex items-center",
                        children: (0, n.jsxs)(et.HoverCard, {
                            children: [(0, n.jsx)(et.HoverCard.Trigger, {
                                children: (0, n.jsx)(v.h, {
                                    icon: (0, n.jsx)(r.G, {
                                        icon: e
                                    }),
                                    onClick: E.$t,
                                    size: 32,
                                    iconSize: 20
                                })
                            }), (0, n.jsx)(et.HoverCard.Portal, {
                                children: (0, n.jsx)(et.HoverCard.Content, {
                                    className: "z-audioPlayerQueueDropdown rounded-md bg-neutral900 px-1.5 py-2 shadow-sm",
                                    children: (0, n.jsx)("div", {
                                        className: "px-2 py-3 [&_.rc-slider-handle]:border-2 [&_.rc-slider-handle]:!border-white [&_.rc-slider-handle]:bg-fuchsia500 [&_.rc-slider-handle]:opacity-100 [&_.rc-slider-handle]:!shadow-[none] [&_.rc-slider-handle]:focus:!border-white [&_.rc-slider-handle]:focus:!shadow-[none] [&_.rc-slider-handle]:hover:!border-white [&_.rc-slider-handle]:hover:!shadow-[none] [&_.rc-slider-handle]:active:!border-white [&_.rc-slider-handle]:active:!shadow-[none] [&_.rc-slider-rail]:bg-neutral300 [&_.rc-slider-track]:bg-fuchsia500",
                                        children: (0, n.jsx)(q.Z, {
                                            style: {
                                                height: 111
                                            },
                                            vertical: !0,
                                            min: 0,
                                            max: 1,
                                            step: .02,
                                            defaultValue: l,
                                            onChange: e => {
                                                let t = "number" == typeof e ? e : e[0];
                                                o(t)
                                            },
                                            draggableTrack: !0
                                        })
                                    })
                                })
                            })]
                        })
                    })
                },
                ei = "AudioPlayer",
                en = s()(() => Promise.resolve().then(i.bind(i, 84385)).then(e => e.MinimizedPlayer), {
                    loadableGenerated: {
                        webpack: () => [84385]
                    }
                }),
                el = (0, u.sj)({
                    lastReleasePlayed: null
                }),
                AudioPlayer = () => {
                    let {
                        value: e
                    } = (0, c.useGate)(P.ln.SPOTIFY_LINKS), {
                        activeTrackId: t,
                        hideAudioPlayer: i,
                        activePlaylistId: a,
                        activePlaylistReleaseIds: s,
                        activeTrackReleaseInfo: u
                    } = (0, I.PZ)(), {
                        tablet: T
                    } = (0, k.useMediaQuery)(), {
                        authUser: A
                    } = (0, j.aC)(), [R, M] = (0, l.useState)(!1), {
                        openModal: N
                    } = y.ModalContext.useContainer(), {
                        isAuthenticatedWithAPI: $
                    } = (0, j.aC)(), {
                        openToast: E
                    } = C.ToastContext.useContainer(), {
                        asPath: O
                    } = (0, d.useRouter)(), U = null == u ? void 0 : u.id;
                    (0, l.useEffect)(() => {
                        u && (el.lastReleasePlayed = u)
                    }, [u]);
                    let _ = (0, l.useMemo)(() => a && U && O.startsWith(`/playlist/${a}`) && s.includes(U), [a, U, s, O]);
                    if (!t || i) return null;
                    let L = (null == u ? void 0 : u.webappUri) ? (0, S.OU)(null == u ? void 0 : u.webappUri) : null,
                        Z = !!L && !O.startsWith(L);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [T ? null : (0, n.jsx)(en, {}), (0, n.jsx)("div", {
                            className: "fixed bottom-0 z-audioPlayerContainer hidden h-20 max-h-20 w-full flex-col items-center border-t border-t-neutral200 bg-white md:flex [&_.like-icon]:[&_svg]:!h-4 [&_.like-icon]:[&_svg]:!w-4",
                            style: {
                                WebkitTapHighlightColor: "transparent"
                            },
                            id: ei,
                            children: (0, n.jsxs)("div", {
                                className: "flex w-full justify-between p-3",
                                children: [(0, n.jsx)("div", {
                                    className: "flex h-full w-full overflow-hidden md:max-w-[360px]",
                                    children: (0, n.jsx)(SongInfo, {})
                                }), (0, n.jsxs)("div", {
                                    className: "flex h-full max-w-[1440px] flex-1 flex-col items-center",
                                    children: [(0, n.jsx)("div", {
                                        className: "mb-2 flex h-[30px] w-[224px] items-center justify-between",
                                        children: (0, n.jsx)(ControlButtons, {})
                                    }), (0, n.jsx)("div", {
                                        className: "w-full flex-1",
                                        children: (0, n.jsx)(Timeline, {})
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "flex h-full w-full max-w-[360px] items-center justify-end gap-2 overflow-hidden pr-1",
                                    children: [(0, n.jsx)(v.h, {
                                        onClick: () => {
                                            A ? U && ((0, z.uH)({
                                                event: "Create Post Clicked",
                                                properties: {
                                                    sourceComponent: "Audio Player Post Button",
                                                    associationId: U,
                                                    associationType: "Release"
                                                }
                                            }), N(y.ModalType.FEED_POST, {
                                                body: e ? (0, n.jsx)(b.s, {
                                                    sourceLocation: "Audio Player Post Button",
                                                    selectedResource: {
                                                        type: "release",
                                                        releaseId: U
                                                    },
                                                    channelId: null,
                                                    channelSelectorDisabled: !1
                                                }) : (0, n.jsx)(m.t, {
                                                    sourceLocation: "Audio Player Post Button",
                                                    preselectedResource: {
                                                        type: "release",
                                                        releaseId: U
                                                    },
                                                    channelId: null
                                                }, "post-input")
                                            })) : (0, w.SR)()
                                        },
                                        icon: (0, n.jsx)(r.G, {
                                            icon: h.Y
                                        }),
                                        size: 32,
                                        iconSize: 15
                                    }), (0, n.jsx)(v.h, {
                                        onClick: () => {
                                            if ($) return U ? ((0, z.uH)({
                                                event: "Add to Playlist Clicked",
                                                properties: {
                                                    sourceComponent: "Audio Player",
                                                    associationId: U,
                                                    associationType: "Release"
                                                }
                                            }), N(y.ModalType.ADD_TO_PLAYLIST, {
                                                body: (0, n.jsx)(f.G, {
                                                    releaseId: U
                                                })
                                            })) : E({
                                                text: "This track is not available for playlisting yet.",
                                                variant: "error"
                                            });
                                            (0, z.uH)({
                                                event: "Sign in Clicked",
                                                properties: {
                                                    sourceComponent: "Add to Playlist Modal"
                                                }
                                            }), (0, w.SR)()
                                        },
                                        icon: (0, n.jsx)(r.G, {
                                            icon: x.zR
                                        }),
                                        size: 32,
                                        iconSize: 15
                                    }), (0, n.jsx)(VolumeButton, {}), (0, n.jsx)(QueueButton, {
                                        isQueueOpen: R,
                                        setQueueOpen: M
                                    }), Z && !!U && (0, n.jsx)(p.z, {
                                        variant: "primary",
                                        size: "S",
                                        label: "Collect",
                                        className: (0, o.default)("min-w-none w-fit !px-3 !py-2", {
                                            "lt:hidden": _
                                        }),
                                        onClick: () => {
                                            (0, z.uH)({
                                                event: "Collect Now Clicked",
                                                properties: {
                                                    associationId: U,
                                                    associationType: "Release",
                                                    sourceComponent: "Audio Player"
                                                }
                                            }), N(y.ModalType.AUDIO_PLAYER_COLLECT, {
                                                body: (0, n.jsx)(g.p, {
                                                    releaseId: U
                                                })
                                            })
                                        }
                                    })]
                                })]
                            })
                        }), (0, n.jsx)(D.y, {
                            isOpen: R,
                            onClose: () => M(!1)
                        })]
                    })
                }
        },
        18909: function(e, t, i) {
            i.d(t, {
                L: function() {
                    return T
                },
                m: function() {
                    return QueueListItem
                }
            });
            var n = i(16356),
                l = i(97352),
                r = i(72102),
                o = i(27550),
                a = i(11794),
                s = i(82287),
                d = i(29009),
                c = i(8205),
                u = i(23740),
                h = i(96578),
                x = i(76349),
                p = i(41079),
                v = i(62335),
                f = i(21922),
                g = i(73950),
                m = i(76292),
                b = i(47544),
                j = i(7847),
                w = i(60265),
                k = i(51020),
                y = i(88275),
                C = i(81688),
                z = i(267),
                I = i(72777),
                P = i(95390),
                S = i(70511);
            let T = 64,
                QueueListItem = e => {
                    var t, i, j, T;
                    let {
                        activeTrackIndex: D,
                        deleteEnabled: L = !1,
                        index: Z,
                        trackId: G,
                        playing: F = !1,
                        scrollToTop: W,
                        isScrolling: Q
                    } = e, {
                        inViewRef: H,
                        playerTrackInfo: B
                    } = (0, y.p)({
                        trackId: G,
                        shouldFetch: !Q
                    }), V = B.releaseInfo, [Y, X] = (0, l.useState)(!1), q = null == V ? void 0 : null === (t = V.staticCoverImage) || void 0 === t ? void 0 : t.url, J = null !== (i = null == V ? void 0 : V.coverImage.url) && void 0 !== i ? i : "", K = null !== (j = null == V ? void 0 : V.artist.name) && void 0 !== j ? j : "Unnamed Artist", ee = null !== (T = null == V ? void 0 : V.title) && void 0 !== T ? T : "Unnamed Song", et = 0 === Z, ei = Z + D, {
                        isLiked: en,
                        onClick: el
                    } = (0, u.b)({
                        id: null == V ? void 0 : V.id,
                        source: "Audio Player"
                    }), er = (0, k.R)({
                        listeningParty: null == V ? void 0 : V.listeningParty,
                        releaseId: null == V ? void 0 : V.id
                    });
                    if (!V) return (0, n.jsxs)(R, {
                        ref: H,
                        isActive: et,
                        children: [!et && (0, n.jsx)(M, {
                            children: Z
                        }), (0, n.jsx)(U, {}), (0, n.jsx)(_, {})]
                    });
                    let eo = !!er,
                        handleClick = () => {
                            et ? (0, z.ID)() : ((0, I.Tr)(ei), (0, C.Jk)(), W())
                        },
                        ea = (0, P.fu)((0, d.$F)(V.webappUri, {
                            referralAddress: w.M8.referral,
                            source: {
                                link: !0
                            }
                        })).href,
                        es = (0, n.jsxs)(N, {
                            onClick: handleClick,
                            disabled: eo,
                            className: er ? "transition-all duration-500 hover:brightness-[80%]" : void 0,
                            children: [(0, n.jsx)(g.G, {
                                placeholder: "blur",
                                src: q || J,
                                blurDataURL: (0, m.Z)(48, 48),
                                alt: ee,
                                height: 96,
                                width: 96
                            }), (0, n.jsx)(A, {
                                children: (0, n.jsx)(r.G, {
                                    icon: F ? a.XQ : s.zc,
                                    color: c.rS.colors.neutral800.toString(),
                                    className: er ? "opacity-50" : void 0
                                })
                            })]
                        });
                    return (0, n.jsxs)(R, {
                        ref: H,
                        isActive: et,
                        children: [!et && (0, n.jsx)(M, {
                            children: Z
                        }), null != er ? (0, n.jsx)(b.h, {
                            listeningParty: er,
                            children: es
                        }) : es, (0, n.jsxs)($, {
                            disabled: eo,
                            onClick: handleClick,
                            children: [(0, n.jsx)(S.j, {
                                songTitle: ee,
                                webappUri: ea
                            }), (0, n.jsx)(E, {
                                children: K
                            })]
                        }), (0, n.jsxs)(O, {
                            children: [et && V && (0, n.jsxs)(v.N, {
                                isDropdownOpen: Y,
                                setIsDropdownOpen: X,
                                dropdownProps: {
                                    queue: !0,
                                    align: "end"
                                },
                                children: [(0, n.jsx)(x.G, {
                                    liked: en,
                                    onClick: el,
                                    releaseId: V.id,
                                    releaseType: V.type
                                }), (0, n.jsx)(h.U, {
                                    releaseId: V.id,
                                    source: "Audio Player"
                                }), (0, n.jsx)(p.T, {
                                    releaseId: V.id,
                                    source: "Audio Player"
                                })]
                            }), L && (0, n.jsx)(f.h, {
                                icon: (0, n.jsx)(r.G, {
                                    icon: o.Vu,
                                    size: "lg"
                                }),
                                onClick: () => {
                                    (0, I.C8)(ei)
                                },
                                title: "Remove",
                                size: 24,
                                iconSize: 14
                            })]
                        })]
                    })
                },
                A = (0, c.zo)("div", {
                    backgroundColor: "$neutral100",
                    borderRadius: 6,
                    bottom: 2,
                    opacity: 0,
                    position: "absolute",
                    right: 2,
                    transition: "opacity 0.25s linear",
                    height: 24,
                    width: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }),
                R = (0, c.zo)("li", {
                    alignItems: "center",
                    borderRadius: 8,
                    display: "flex",
                    padding: 8,
                    height: T,
                    variants: {
                        isActive: {
                            true: {
                                backgroundColor: "$base200"
                            }
                        }
                    },
                    "&:not(:first-child)": {
                        marginTop: 8
                    },
                    [`&:hover ${A}`]: {
                        opacity: 1
                    }
                }),
                M = (0, c.zo)("span", {
                    base: "S",
                    color: "$neutral900",
                    flexShrink: 0,
                    marginRight: 8,
                    minWidth: 16
                }),
                N = (0, c.zo)("button", {
                    flexShrink: 0,
                    height: 48,
                    width: 48,
                    overflow: "hidden",
                    borderRadius: 6,
                    marginRight: 16,
                    cursor: "pointer",
                    position: "relative",
                    [`&:focus-visible ${A}`]: {
                        opacity: 1
                    }
                }),
                $ = (0, c.zo)("button", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    overflow: "hidden",
                    cursor: "pointer"
                }),
                E = (0, c.zo)("span", {
                    base: "S",
                    color: "$neutral600"
                }),
                O = (0, c.zo)("div", {
                    alignItems: "end",
                    width: 40,
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 16,
                    height: "100%",
                    base: "S",
                    color: "$neutral600",
                    paddingTop: 8,
                    paddingRight: 4
                }),
                U = (0, c.zo)(j.Od, {
                    height: 48,
                    width: 48,
                    borderRadius: 6,
                    flexShrink: 0,
                    marginRight: 16
                }),
                _ = (0, c.zo)(j.Od, {
                    height: "100%",
                    width: "100%",
                    borderRadius: 6
                })
        },
        7006: function(e, t, i) {
            i.d(t, {
                y: function() {
                    return QueueSheet
                }
            });
            var n = i(16356),
                l = i(97352),
                r = i(59233),
                o = i(72102),
                a = i(40612),
                s = i(21922),
                d = i(29823),
                c = i(81688),
                u = i(72777),
                h = i(58285),
                x = i(69598),
                p = i(42529),
                v = i(18909);
            let QueueListSection = e => {
                    let {
                        activeTrackIndex: t,
                        clearAll: i,
                        deleteEnabled: r = !1,
                        heading: o,
                        playing: a = !1,
                        scrollToTop: s,
                        sectionStartingIndex: d,
                        trackIds: c,
                        scrollParent: u
                    } = e, [f, g] = (0, l.useState)(!1), m = (0, p.R)((e, i) => (0, n.jsx)(v.m, {
                        activeTrackIndex: t,
                        deleteEnabled: r,
                        trackId: i,
                        index: d + e,
                        playing: a,
                        scrollToTop: s,
                        isScrolling: f
                    }, `${o}-${i}-${d+e}}`));
                    return 0 === c.length ? null : (0, n.jsxs)("section", {
                        className: "[&:not(:first-of-type)]:mt-6",
                        children: [(0, n.jsxs)("div", {
                            className: "mb-4 flex",
                            children: [(0, n.jsx)("h2", {
                                className: "font-title text-title-m font-medium",
                                children: o
                            }), i && (0, n.jsx)(x.z, {
                                size: "XS",
                                label: "Clear All",
                                onClick: i,
                                variant: "text",
                                className: "ml-auto w-fit min-w-fit p-0 text-base600"
                            })]
                        }), (0, n.jsx)("ul", {
                            children: (0, n.jsx)(h.OO, {
                                data: c,
                                itemContent: m,
                                fixedItemHeight: v.L,
                                customScrollParent: u,
                                isScrolling: g
                            })
                        })]
                    })
                },
                QueueList = e => {
                    let {
                        scrollToTop: t,
                        scrollParent: i
                    } = e, {
                        activeTrackId: l,
                        activeTrackIndex: r,
                        queueTrackIds: o,
                        upNextTrackIds: a,
                        playing: s
                    } = (0, c.PZ)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(QueueListSection, {
                            activeTrackIndex: r,
                            heading: "Playing Now",
                            sectionStartingIndex: 0,
                            trackIds: l ? [l] : [],
                            playing: s,
                            scrollToTop: t,
                            scrollParent: i
                        }), (0, n.jsx)(QueueListSection, {
                            activeTrackIndex: r,
                            clearAll: u.B5,
                            deleteEnabled: !0,
                            heading: "Next in Queue",
                            sectionStartingIndex: 1,
                            trackIds: o,
                            scrollToTop: t,
                            scrollParent: i
                        }), (0, n.jsx)(QueueListSection, {
                            activeTrackIndex: r,
                            heading: "Up Next",
                            sectionStartingIndex: o.length + 1,
                            trackIds: a,
                            scrollToTop: t,
                            scrollParent: i
                        })]
                    })
                },
                QueueContainer = e => {
                    let {
                        close: t
                    } = e, [i, c] = (0, l.useState)();
                    (0, l.useEffect)(() => {
                        let handleClickOutside = e => {
                            let n = document.getElementById(d.AUDIO_PLAYER_ID),
                                l = e.target;
                            !l || (null == n ? void 0 : n.contains(l)) || (null == i ? void 0 : i.contains(l)) || t()
                        };
                        return document.addEventListener("click", handleClickOutside, !0), () => document.removeEventListener("click", handleClickOutside, !0)
                    }, [i, t]);
                    let u = (0, l.useCallback)(() => {
                        i && i.scrollTo(0, 0)
                    }, [i]);
                    return (0, n.jsx)(r.Z.Container, {
                        className: "md!bottom-20 !bottom-0 !left-[unset] !right-0 !z-audioPlayerQueueMobile !h-full !overflow-hidden !rounded-none !rounded-t-md shadow-md md:absolute md:max-h-[64%] md:max-w-[390px]",
                        children: (0, n.jsx)(r.Z.Content, {
                            className: "!overflow-hidden",
                            children: (0, n.jsxs)("div", {
                                className: "relative max-h-screen overflow-auto bg-white p-6 md:h-full md:rounded-r-md md:rounded-t-md",
                                ref: e => c(e || void 0),
                                children: [(0, n.jsx)(s.h, {
                                    className: "absolute right-5 top-5 p-[3px]",
                                    "aria-label": "Close Queue",
                                    onClick: t,
                                    icon: (0, n.jsx)(o.G, {
                                        icon: a.g8,
                                        size: "lg"
                                    })
                                }), (0, n.jsx)(QueueList, {
                                    scrollToTop: u,
                                    scrollParent: i
                                })]
                            })
                        })
                    })
                },
                QueueSheet = e => {
                    let {
                        isOpen: t,
                        onClose: i
                    } = e, [o, a] = l.useState(!1), s = l.useCallback(() => {
                        a(!0)
                    }, []), d = l.useCallback(() => {
                        a(!1)
                    }, []);
                    return (0, n.jsx)(r.Z, {
                        className: "!z-audioPlayerQueueMobile md:!z-audioPlayerQueue",
                        isOpen: t,
                        onClose: i,
                        disableDrag: o,
                        children: (0, n.jsx)("div", {
                            onTouchEnd: d,
                            onTouchStart: s,
                            children: (0, n.jsx)(QueueContainer, {
                                close: i
                            })
                        })
                    })
                }
        },
        70511: function(e, t, i) {
            i.d(t, {
                j: function() {
                    return SongTitle
                }
            });
            var n = i(16356);
            i(97352);
            var l = i(97946),
                r = i(95169),
                o = i(95390);
            let SongTitle = e => {
                let {
                    songTitle: t,
                    webappUri: i
                } = e, a = (0, n.jsx)("span", {
                    className: "block w-fit whitespace-nowrap font-title text-title-xs font-medium text-base800",
                    children: t
                }), s = (0, n.jsx)(r.R, {
                    children: a
                });
                return (0, n.jsx)("div", {
                    className: "relative h-5 w-auto overflow-hidden",
                    children: i ? (0, n.jsx)(l.s, {
                        className: "flex w-full max-w-[100%] items-center",
                        pathnameUri: (0, o.OU)(i),
                        children: s
                    }) : s
                })
            }
        },
        57233: function(e, t, i) {
            i.d(t, {
                h: function() {
                    return playTrackInPlaylist
                },
                m: function() {
                    return formatTime
                }
            });
            var n = i(267),
                l = i(58061);
            let formatTime = e => {
                    let t = Math.floor(e / 60) || 0,
                        i = Math.floor(e) - 60 * t || 0;
                    return `${t}:${i<10?"0":""}${i}`
                },
                playTrackInPlaylist = e => {
                    let {
                        tablet: t,
                        trackId: i,
                        isActiveTrack: r,
                        event: o,
                        playlistId: a
                    } = e;
                    t && 2 !== o.detail || (r ? (0, n.ID)() : (0, l.iy)(a, i))
                }
        },
        84385: function(e, t, i) {
            i.r(t), i.d(t, {
                MINIMIZED_PLAYER_HEIGHT: function() {
                    return tp
                },
                MinimizedPlayer: function() {
                    return MinimizedPlayer
                }
            });
            var n = i(16356),
                l = i(97352),
                r = i(8205),
                o = i(58430),
                a = i(88275),
                s = i(81688),
                d = i(8776),
                c = i(72102),
                u = i(13041),
                h = i.n(u),
                x = i(59233),
                p = i(64105),
                v = i(64328),
                f = i(55545),
                g = i(97858),
                m = i(97946),
                b = i(8094);
            let ViewArtistMenuItem = e => {
                let {
                    variant: t = "regular",
                    href: i
                } = e, l = "regular" === t ? f.YZ : g.YZ;
                return (0, n.jsx)(m.s, {
                    pathnameUri: i,
                    children: (0, n.jsxs)(b.Xi, {
                        children: [(0, n.jsx)(c.G, {
                            icon: l,
                            size: "lg"
                        }), (0, n.jsx)(b.i_, {
                            children: "View Artist"
                        })]
                    })
                })
            };
            var j = i(27469),
                w = i(62335),
                k = i(21922),
                y = i(95390),
                C = i(88282),
                z = i(55116),
                I = i(9495),
                P = i(63971),
                S = i(47544),
                T = i(51020),
                A = i(267),
                R = i(72777),
                M = i(74040);
            let N = (0, M.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    overflow: "hidden",
                    "h3, p": {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                }),
                $ = (0, M.zo)("div", {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center"
                }),
                AudioController_AudioController = () => {
                    let {
                        isNextTrackDisabled: e,
                        playing: t,
                        loading: i,
                        loadingActiveTrack: l,
                        repeatMode: r,
                        shuffleEnabled: o,
                        disableNextPrev: a,
                        activeTrackReleaseInfo: u
                    } = (0, s.PZ)(), h = (0, T.R)({
                        releaseId: null == u ? void 0 : u.id,
                        listeningParty: null == u ? void 0 : u.listeningParty
                    });
                    return (0, n.jsxs)($, {
                        children: [(0, n.jsx)(U, {
                            "data-state": o ? "active" : "inactive",
                            "aria-label": "Shuffle",
                            variant: "inverted",
                            icon: (0, n.jsx)(c.G, {
                                icon: z.a_
                            }),
                            onClick: R.Ag,
                            iconSize: 24
                        }), (0, n.jsxs)(_, {
                            children: [(0, n.jsx)(O, {
                                "aria-label": "Previous Track",
                                variant: "inverted",
                                icon: (0, n.jsx)(c.G, {
                                    icon: I.J0
                                }),
                                disabled: a,
                                onClick: e => {
                                    e.stopPropagation(), (0, s.be)()
                                },
                                iconSize: 32,
                                size: 34,
                                animate: !0
                            }), (0, n.jsx)(E, {
                                children: (0, n.jsx)(S.J, {
                                    playing: t,
                                    loading: i || l,
                                    onClick: A.ID,
                                    size: "l",
                                    color: "white",
                                    rounded: !0,
                                    currentListeningParty: h
                                })
                            }), (0, n.jsx)(O, {
                                "aria-label": "Next Track",
                                variant: "inverted",
                                icon: (0, n.jsx)(c.G, {
                                    icon: P.Jw
                                }),
                                disabled: e || a,
                                onClick: s.mP,
                                iconSize: 32,
                                size: 34,
                                animate: !0
                            })]
                        }), (0, n.jsx)(U, {
                            "data-state": r !== d.zq.NO_REPEAT ? "active" : "inactive",
                            "aria-label": "Repeat",
                            variant: "inverted",
                            icon: (0, n.jsxs)(D, {
                                children: [(0, n.jsx)(c.G, {
                                    icon: C.jH
                                }), r === d.zq.REPEAT_ONE && (0, n.jsx)(L, {
                                    children: (0, n.jsx)("span", {
                                        children: "1"
                                    })
                                })]
                            }),
                            onClick: d.fX,
                            iconSize: 24
                        })]
                    })
                },
                E = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    size: 64,
                    ".play-icon": {
                        size: 32
                    },
                    ".pause-icon": {
                        size: 32
                    },
                    ".play-button-container": {
                        width: 64,
                        height: 64
                    }
                }),
                O = (0, r.zo)(k.h, {
                    "&:hover, &:focus, &:active": {
                        backgroundColor: "transparent !important"
                    }
                }),
                U = (0, r.zo)(k.h, {
                    "&:hover, &:focus, &:active": {
                        backgroundColor: "transparent !important"
                    },
                    "&[data-state=active]": {
                        color: "$fuchsia500 !important"
                    },
                    "&[data-state=inactive]": {
                        color: "$white !important"
                    }
                }),
                _ = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 44
                }),
                D = (0, r.zo)("div", {
                    position: "relative"
                }),
                L = (0, r.zo)("div", {
                    position: "absolute",
                    backgroundColor: "$white",
                    borderRadius: "50%",
                    height: 12,
                    width: 12,
                    fontFamily: "$base",
                    fontSize: 8,
                    lineHeight: "10px",
                    fontWeight: 900,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    top: 0,
                    right: 0,
                    color: "$black"
                });
            var Z = i(45630),
                G = i(85740),
                F = i(57233),
                W = i(35341);
            let AudioProgress = () => {
                    let {
                        duration: e
                    } = (0, s.PZ)(), {
                        position: t
                    } = (0, W.E)(), [i, r] = l.useState(t), [o, a] = l.useState(!1), d = l.useRef(), c = l.useMemo(() => (0, G.Z)(e => {
                        r(e)
                    }, 100, {
                        leading: !0,
                        trailing: !0
                    }), [r]);
                    l.useEffect(() => {
                        o || c(t)
                    }, [t, c, o]);
                    let u = l.useMemo(() => (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(V, {
                            children: (0, n.jsx)(Y, {})
                        }), (0, n.jsx)(X, {})]
                    }), []);
                    return (0, n.jsxs)(Q, {
                        children: [(0, n.jsx)(B, {
                            "aria-label": "Audio Slider",
                            value: [i],
                            min: 0,
                            max: e,
                            onValueChange: e => {
                                let t = "number" == typeof e ? e : e[0];
                                t && (a(!0), r(t))
                            },
                            onValueCommit: () => {
                                (0, s.O7)(i), d.current && clearTimeout(d.current), d.current = setTimeout(() => a(!1), 100)
                            },
                            children: u
                        }), (0, n.jsxs)(H, {
                            children: [(0, n.jsx)("span", {
                                children: (0, F.m)(i)
                            }), (0, n.jsx)("span", {
                                children: (0, F.m)(e)
                            })]
                        })]
                    })
                },
                Q = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 12,
                    zIndex: "$above2",
                    overflow: "hidden",
                    paddingTop: 8
                }),
                H = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    fontFamily: "$base",
                    fontSize: 10,
                    fontWeight: 400,
                    lineHeight: "14px",
                    color: "$white"
                }),
                B = (0, r.zo)(Z.fC, {
                    display: " flex",
                    alignItems: " center",
                    width: "100%",
                    position: "relative"
                }),
                V = (0, r.zo)(Z.fQ, {
                    backgroundColor: "$base600",
                    position: "relative",
                    flexGrow: 1,
                    height: "4px",
                    borderRadius: 10
                }),
                Y = (0, r.zo)(Z.e6, {
                    backgroundColor: "$white",
                    position: "absolute",
                    borderRadius: "10px 0 0 10px",
                    height: "100%"
                }),
                X = (0, r.zo)(Z.bU, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    size: 16,
                    outline: "none",
                    boxSizing: "content-box",
                    backgroundColor: "$white",
                    cursor: "pointer",
                    "&:active": {
                        transform: "scale(1.2)"
                    },
                    "&:before": {
                        content: " ",
                        background: "transparent",
                        borderRadius: "50%",
                        size: 56,
                        flexShrink: 0,
                        ouline: "2px solid $white"
                    }
                });
            var q = i(78608),
                J = i(42178),
                K = i(14016),
                ee = i(7006);
            let AddToPlaylist = () => (0, n.jsxs)("svg", {
                    width: "21",
                    height: "20",
                    viewBox: "0 0 21 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("path", {
                        d: "M20.4531 0.249152C20.1406 0.0147771 19.75 -0.0633479 19.3594 0.0538396L14.9844 1.42103C14.4766 1.61634 14.125 2.08509 14.125 2.63196V14.3117C13.3828 13.9601 12.5234 13.7257 11.625 13.7257C9.20312 13.7257 7.25 15.132 7.25 16.8507C7.25 18.6085 9.20312 19.9757 11.625 19.9757C14.0078 19.9757 16 18.6085 16 16.8507V7.63196L20.1016 6.3429C20.6484 6.14759 21 5.67884 21 5.13196V1.22571C21 0.83509 20.8047 0.483527 20.4531 0.249152ZM11.625 18.1007C10.0625 18.1007 9.125 17.2804 9.125 16.8507C9.125 16.421 10.0625 15.6007 11.625 15.6007C13.1484 15.6007 14.125 16.421 14.125 16.8507C14.125 17.3195 13.1484 18.1007 11.625 18.1007ZM19.125 4.66321L16 5.63978V3.10071L19.125 2.08509V4.66321Z",
                        fill: "white"
                    }), (0, n.jsx)("path", {
                        d: "M10.3125 6.625H0.9375C0.390625 6.625 0 6.19531 0 5.6875C0 5.14062 0.390625 4.75 0.9375 4.75H10.3125C10.8203 4.75 11.25 5.14062 11.25 5.6875C11.25 6.19531 10.8203 6.625 10.3125 6.625Z",
                        fill: "white"
                    }), (0, n.jsx)("path", {
                        d: "M6.375 0.9375L6.375 10.3125C6.375 10.8594 5.98438 11.25 5.4375 11.25C4.92969 11.25 4.5 10.8594 4.5 10.3125L4.5 0.9375C4.5 0.429688 4.92969 -1.87822e-08 5.4375 -4.09794e-08C5.98437 -6.48841e-08 6.375 0.429687 6.375 0.9375Z",
                        fill: "white"
                    })]
                }),
                QueueIcon = () => (0, n.jsxs)("svg", {
                    width: "18",
                    height: "19",
                    viewBox: "0 0 18 19",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("rect", {
                        x: "0.25",
                        y: "10.7407",
                        width: "17.5",
                        height: "2",
                        rx: "1",
                        fill: "white"
                    }), (0, n.jsx)("rect", {
                        x: "0.25",
                        y: "16.9258",
                        width: "17.5",
                        height: "2",
                        rx: "1",
                        fill: "white"
                    }), (0, n.jsx)("rect", {
                        x: "1.25",
                        y: "1.25",
                        width: "15.5",
                        height: "4.5",
                        rx: "2.25",
                        stroke: "white",
                        strokeWidth: "2.5"
                    })]
                });
            var et = i(59173),
                ei = i(66361),
                en = i(52931),
                el = i(68550),
                er = i(96301),
                eo = i(21956),
                ea = i(22181),
                es = i(75747),
                ed = i(14034),
                ec = i(85846);
            let ReleaseActions = e => {
                    let {
                        closePlayer: t
                    } = e, {
                        openModal: i
                    } = ea.ModalContext.useContainer(), {
                        activeTrackId: r,
                        activeTrackReleaseInfo: o
                    } = (0, s.PZ)(), {
                        isAuthenticatedWithAPI: a,
                        authUser: d
                    } = (0, er.aC)(), {
                        openToast: u
                    } = es.ToastContext.useContainer(), [h, x] = l.useState(!1), {
                        value: p
                    } = (0, q.useGate)(ec.ln.SPOTIFY_LINKS), f = null == o ? void 0 : o.id, {
                        releaseInfo: g
                    } = (0, v.w)({
                        trackId: r,
                        shouldFetch: !0
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)($, {
                            children: [(0, n.jsxs)("div", {
                                className: "flex gap-6",
                                children: [(0, n.jsx)(k.h, {
                                    variant: "inverted",
                                    disabled: !g,
                                    iconSize: 20,
                                    size: 28,
                                    icon: (0, n.jsx)(c.G, {
                                        icon: K.A$
                                    }),
                                    onClick: () => {
                                        g && ((0, ed.uH)({
                                            event: "Share Modal Opened",
                                            properties: {
                                                associationId: g.id,
                                                associationType: "Release",
                                                sourceComponent: "Audio Player"
                                            }
                                        }), i(ea.ModalType.SHARE, {
                                            body: (0, n.jsx)(el.T, {
                                                releaseId: g.id
                                            })
                                        }))
                                    }
                                }), (0, n.jsx)(k.h, {
                                    variant: "inverted",
                                    disabled: !g,
                                    iconSize: 20,
                                    size: 28,
                                    icon: (0, n.jsx)(c.G, {
                                        icon: J.Y
                                    }),
                                    onClick: () => {
                                        d ? f && ((0, ed.uH)({
                                            event: "Create Post Clicked",
                                            properties: {
                                                sourceComponent: "Audio Player Post Button",
                                                associationId: f,
                                                associationType: "Release"
                                            }
                                        }), i(ea.ModalType.FEED_POST, {
                                            body: p ? (0, n.jsx)(en.s, {
                                                sourceLocation: "Audio Player Post Button",
                                                selectedResource: {
                                                    type: "release",
                                                    releaseId: f
                                                },
                                                channelId: null,
                                                channelSelectorDisabled: !1
                                            }) : (0, n.jsx)(ei.t, {
                                                sourceLocation: "Audio Player Post Button",
                                                preselectedResource: {
                                                    type: "release",
                                                    releaseId: f
                                                },
                                                channelId: null
                                            }, "post-input")
                                        }), t()) : (0, eo.SR)()
                                    }
                                })]
                            }), (0, n.jsxs)(eu, {
                                children: [(0, n.jsx)(eh, {
                                    variant: "inverted",
                                    iconSize: 20,
                                    size: 28,
                                    icon: (0, n.jsx)(AddToPlaylist, {}),
                                    onClick: () => {
                                        if (!a) {
                                            (0, ed.uH)({
                                                event: "Sign in Clicked",
                                                properties: {
                                                    sourceComponent: "Add to Playlist Modal"
                                                }
                                            }), (0, eo.SR)();
                                            return
                                        }
                                        return (null == g ? void 0 : g.id) ? ((0, ed.uH)({
                                            event: "Add to Playlist Clicked",
                                            properties: {
                                                sourceComponent: "Audio Player",
                                                associationId: g.id,
                                                associationType: "Release"
                                            }
                                        }), i(ea.ModalType.ADD_TO_PLAYLIST, {
                                            body: (0, n.jsx)(et.G, {
                                                releaseId: g.id
                                            })
                                        })) : u({
                                            text: "This track is not available for playlisting yet.",
                                            variant: "error"
                                        })
                                    }
                                }), (0, n.jsx)(eh, {
                                    variant: "inverted",
                                    iconSize: 20,
                                    size: 28,
                                    icon: (0, n.jsx)(QueueIcon, {}),
                                    onClick: () => x(!0)
                                })]
                            })]
                        }), (0, n.jsx)(ee.y, {
                            isOpen: h,
                            onClose: () => x(!1)
                        })]
                    })
                },
                eu = (0, r.zo)("div", {
                    display: "flex",
                    gap: 24
                }),
                eh = (0, r.zo)(k.h, {
                    svg: {
                        strokeWidth: 2.5
                    }
                });
            var ex = i(10187),
                ep = i(73950),
                ev = i(76292);
            let ReleaseCover = () => {
                    let {
                        activeTrackId: e
                    } = (0, s.PZ)(), {
                        releaseInfo: t
                    } = (0, v.w)({
                        trackId: e,
                        shouldFetch: !0
                    });
                    return (0, n.jsxs)(ef, {
                        children: [(null == t ? void 0 : t.animatedCoverImage) ? (0, n.jsx)(ex.V, {
                            src: t.animatedCoverImage.url,
                            width: "100%",
                            height: "100%"
                        }) : !!(null == t ? void 0 : t.coverImage) && (0, n.jsx)(ep.G, {
                            alt: (null == t ? void 0 : t.title) || "",
                            src: t.coverImage.url,
                            width: 400,
                            height: 400,
                            placeholder: "blur",
                            blurDataURL: (0, ev.Z)(800, 800),
                            style: {
                                objectFit: "cover",
                                objectPosition: "center"
                            }
                        }), (0, n.jsx)(eg, {})]
                    })
                },
                ef = (0, r.zo)("div", {
                    display: "block",
                    position: "relative",
                    height: "58dvh",
                    img: {
                        width: "100%",
                        height: "60dvh",
                        objectFit: "fill"
                    }
                }),
                eg = (0, r.zo)("div", {
                    position: "absolute",
                    top: 0,
                    width: "100%",
                    height: "62dvh",
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 4%, rgba(0, 0, 0, 0.4) 10%, rgba(0, 0, 0, 0) 50%, #000 94%)"
                });
            var em = i(37925);
            let SongInfo = e => {
                    var t;
                    let {
                        closePlayer: i
                    } = e, {
                        activeTrackId: l
                    } = (0, s.PZ)(), {
                        releaseInfo: r
                    } = (0, v.w)({
                        trackId: l,
                        shouldFetch: !0
                    });
                    if (!r) return null;
                    let o = null !== (t = r.artist.name) && void 0 !== t ? t : r.artist.user.username,
                        a = r.title,
                        d = (0, y.OU)(r.webappUri),
                        c = (0, y.OU)(r.artist.webappUri);
                    return (0, n.jsxs)(eb, {
                        children: [(0, n.jsxs)(N, {
                            children: [(0, n.jsx)(m.s, {
                                pathnameUri: d,
                                onClick: i,
                                children: (0, n.jsx)(ej, {
                                    children: a
                                })
                            }), (0, n.jsx)(m.s, {
                                pathnameUri: c,
                                onClick: i,
                                children: (0, n.jsx)(ew, {
                                    children: o
                                })
                            })]
                        }), (0, n.jsx)(em.oj, {
                            variant: "inverted",
                            releaseId: r.id,
                            disabled: "ALBUM" === r.type,
                            iconSize: 24,
                            source: "Audio Player"
                        })]
                    })
                },
                eb = (0, r.zo)($, {
                    overflow: "hidden",
                    gap: 32,
                    alignItems: "center"
                }),
                ej = (0, r.zo)("h3", {
                    title: "L",
                    fontWeight: 500,
                    color: "$white",
                    whiteSpace: "nowrap"
                }),
                ew = (0, r.zo)("p", {
                    base: "S",
                    fontWeight: 400,
                    color: "$white",
                    whiteSpace: "nowrap"
                });
            var ek = i(49674),
                ey = i(13286),
                eC = i(3928),
                ez = i(83835),
                eI = i(64571),
                eP = i(47226),
                eS = i(19791),
                eT = i(5221),
                eA = i(73534),
                eR = i(68753),
                eM = i(98335);
            let eN = "linear-gradient(180deg,rgba(0, 0, 0, 0) 90%,   #000 100%)",
                e$ = l.memo(function(e) {
                    let {
                        waveformPost: t
                    } = e, {
                        content: i,
                        user: {
                            username: r,
                            artist: o,
                            avatar: a,
                            publicAddress: s,
                            webappUri: c
                        },
                        updatedAt: u
                    } = (0, eC.S3c)(eC.MxQ, t), h = u ? new Date(u) : null, [x, p] = l.useState(!1), [v, f] = l.useState(!1), g = l.useRef(null);
                    return (0, ez.G)(() => {
                        if (!g.current) return;
                        let {
                            scrollHeight: e
                        } = g.current;
                        e > 18 && p(!0)
                    }, []), (0, n.jsxs)(eE, {
                        initial: {
                            background: eN
                        },
                        animate: {
                            background: v ? "linear-gradient(180deg,rgba(0, 0, 0, 0) 0%,   #000 100%)" : eN
                        },
                        transition: {
                            duration: .3
                        },
                        children: [(0, n.jsx)(eU, {
                            children: (0, n.jsx)(eR.q, {
                                src: null == a ? void 0 : a.url,
                                size: 56,
                                walletAddress: s,
                                username: r,
                                webappUri: c,
                                backgroundColor: "$black",
                                borderRadius: 6,
                                onClick: () => {
                                    (0, d.in)(!0)
                                }
                            })
                        }), (0, n.jsxs)(eO, {
                            initial: {
                                height: x ? "auto" : 76
                            },
                            animate: {
                                height: v ? "auto" : "76px"
                            },
                            transition: {
                                duration: .3
                            },
                            onTap: () => {
                                x && f(e => !e)
                            },
                            children: [(0, n.jsxs)(e_, {
                                children: [(0, n.jsx)(eD, {
                                    onClick: () => (0, d.in)(!0),
                                    children: (0, n.jsx)(m.s, {
                                        pathnameUri: (0, y.OU)(c),
                                        children: (0, n.jsxs)(eZ, {
                                            children: [(0, n.jsx)(eG, {
                                                children: r
                                            }), !!(null == o ? void 0 : o.id) && (0, n.jsx)(eM.O, {
                                                noTooltip: !0,
                                                size: 18
                                            })]
                                        })
                                    })
                                }), h && (0, n.jsx)(eL, {
                                    children: (0, eT.default)(h, "MMMM d, yyyy")
                                })]
                            }), (0, n.jsx)(eF, {
                                ref: g,
                                children: i
                            })]
                        }), x && (0, n.jsx)(eW, {
                            initial: {
                                opacity: v ? 0 : 1
                            },
                            animate: {
                                opacity: v ? 0 : 1
                            },
                            transition: {
                                duration: .3
                            },
                            onClick: () => f(e => !e)
                        })]
                    })
                }),
                eE = (0, r.zo)(eA.E.div, {
                    display: "flex",
                    gap: 16,
                    width: "100%",
                    padding: "12px 12px 0px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    position: "relative"
                }),
                eO = (0, r.zo)(eA.E.div, {
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    width: "100%"
                }),
                eU = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                    width: 56,
                    height: 56
                }),
                e_ = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column"
                }),
                eD = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    gap: 4,
                    height: 24,
                    marginTop: -6,
                    "& > a": {
                        width: "fit-content",
                        maxWidth: "70%"
                    }
                }),
                eL = (0, r.zo)("p", {
                    base: "XS",
                    color: "$base100"
                }),
                eZ = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    gap: 6,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%",
                    height: 24
                }),
                eG = (0, r.zo)("p", {
                    title: "XS",
                    fontWeight: 500,
                    color: "$white",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "unset",
                    height: 18
                }),
                eF = (0, r.zo)("p", {
                    base: "M",
                    color: "$white",
                    fontWeight: 500
                }),
                eW = (0, r.zo)(eA.E.div, {
                    position: "absolute",
                    bottom: -4,
                    right: 0,
                    width: "100%",
                    height: 20,
                    background: "linear-gradient(180deg,rgba(0, 0, 0, 0.1) 0%,  rgba(0, 0, 0, 0.8) 100%)"
                });
            var eQ = i(78564),
                eH = i(36619);
            let eB = l.memo(function(e) {
                    let {
                        waveformPost: t,
                        trackDuration: i,
                        width: l,
                        isOpen: r
                    } = e, {
                        id: o,
                        songSlot: a
                    } = (0, eC.S3c)(eC.MxQ, t), s = (0, eS.UX)({
                        songSlot: a,
                        totalSlots: eP.ug,
                        trackDuration: i
                    }), d = (0, eI.ZJ)({
                        availableWidth: l,
                        avatarSize: 6,
                        commentTimestamp: s,
                        trackDuration: i
                    });
                    return (0, n.jsx)(eH.HoverCard, {
                        open: r,
                        children: (0, n.jsxs)(eV, {
                            css: {
                                left: `${d}px`
                            },
                            children: [(0, n.jsx)(eq, {
                                side: "top",
                                sideOffset: 112,
                                children: (0, n.jsx)(e$, {
                                    waveformPost: t
                                })
                            }), (0, n.jsx)(eY, {
                                asChild: !0,
                                children: (0, n.jsx)(eX, {})
                            })]
                        }, o)
                    }, o)
                }),
                eV = (0, r.zo)("div", {
                    pointerEvents: "all",
                    position: "absolute",
                    cursor: "pointer"
                }),
                eY = (0, r.zo)(eH.HoverCard.Trigger, {
                    outline: "none",
                    "&:hover, &:focus, &:focus": {
                        outline: "none"
                    }
                }),
                eX = (0, r.zo)("span", {
                    display: "flex",
                    flexShrink: 0,
                    width: "4px ",
                    height: "4px ",
                    backgroundColor: "$fuchsia500",
                    border: "1px solid #000",
                    "&:hover, &:focus, &:focus": {
                        backgroundColor: "$fuchsia500",
                        outline: "none"
                    }
                }),
                eq = (0, r.zo)(eH.HoverCard.Content, {
                    zIndex: "$audioPlayerComments",
                    width: "100vw",
                    "@media (prefers-reduced-motion: no-preference)": {
                        animation: `${eQ.c} 300ms ease-in`
                    }
                }),
                eJ = l.memo(function(e) {
                    let {
                        width: t,
                        releaseId: i,
                        trackDuration: r,
                        trackId: o
                    } = e, {
                        data: a
                    } = (0, eC.aM2)(eC.lMr, {
                        variables: {
                            releaseId: i
                        },
                        staleTime: 1 / 0
                    }), d = null == a ? void 0 : a.data.releaseWaveformPosts, {
                        position: c
                    } = (0, W.E)(), {
                        hideExpandedPlayer: u,
                        activeTrackId: h
                    } = (0, s.PZ)(), x = h === o, p = (0, eI.Yg)({
                        position: c,
                        trackDuration: r
                    }), v = null == d ? void 0 : d.find(e => (null == e ? void 0 : e.songSlot) === p), f = l.useRef(null), g = function() {
                        let [, e] = l.useState(0);
                        return l.useCallback(() => {
                            e(e => e + 1)
                        }, [])
                    }(), m = (0, l.useRef)(), b = (() => {
                        if (u || !x) return !1;
                        if (null != v || null == f.current) return f.current = Date.now(), !0;
                        let e = Date.now() - f.current;
                        return e < 5e3 && (clearTimeout(m.current), m.current = setTimeout(g, 5e3), !0)
                    })();
                    return d ? (0, n.jsx)(n.Fragment, {
                        children: d.map(e => (0, n.jsx)(eB, {
                            trackDuration: r,
                            waveformPost: e,
                            isOpen: b && e.id === (null == v ? void 0 : v.id),
                            width: t
                        }, e.id))
                    }) : null
                });

            function Waveform(e) {
                let {
                    releaseId: t,
                    isOpen: i
                } = e, {
                    activeTrackId: r
                } = (0, s.PZ)(), [o, a] = l.useState(0), d = l.useRef(null), c = l.useRef(null), {
                    data: u
                } = (0, eC.aM2)(eC._FD, {
                    variables: {
                        releaseId: t
                    },
                    staleTime: 1 / 0,
                    enabled: i
                }), h = null == u ? void 0 : u.data.release, x = null == h ? void 0 : h.track, p = (0, T.R)({
                    listeningParty: null == h ? void 0 : h.listeningParty,
                    releaseId: null == h ? void 0 : h.id
                }), {
                    percentComplete: v
                } = (0, W.E)(), f = (null == x ? void 0 : x.id) === r, g = f ? v / 100 : 0, m = l.useMemo(() => v < .2 ? 0 : v > .2 && v < 1.5 ? .5 : v > 1.5 && v < 50 ? 1 : .5, [v]), b = Math.floor(g * o / 4 + m), j = l.useMemo(() => {
                    let e = (null == x ? void 0 : x.normalizedPeaks) || [],
                        t = Math.floor(o / 4);
                    return (0, ey.Z)(e, t)
                }, [null == x ? void 0 : x.normalizedPeaks, o]), w = l.useCallback(() => {
                    d.current && (0, ek.nK)({
                        canvasRef: d,
                        normalizedPeaks: j,
                        maxBarHeight: 272,
                        barWidth: 8,
                        barMargin: 8,
                        playingBarNum: b,
                        hoverXCoord: 0,
                        isActiveTrack: f,
                        unPlayedColor: "hsla(227, 0%, 100%, 0.14)",
                        playedColor: "hsla(227, 0%, 100%, 0.8)",
                        showBottomHalf: !1
                    })
                }, [j, f, b]);
                return l.useEffect(() => {
                    w()
                }, [w]), (0, ez.G)(() => {
                    c.current && a(c.current.offsetWidth)
                }, []), (0, n.jsxs)(eK, {
                    ref: c,
                    children: [(0, n.jsx)("canvas", {
                        style: {
                            height: 68,
                            display: "block",
                            cursor: !h || p ? "default" : "pointer",
                            WebkitTapHighlightColor: "transparent",
                            width: "100%"
                        },
                        ref: d,
                        height: 272,
                        width: 4 * o
                    }), (0, n.jsx)(e1, {}), !!h && (0, n.jsx)(e0, {
                        children: (0, n.jsx)(eJ, {
                            releaseId: t,
                            trackId: h.track.id,
                            trackDuration: h.track.duration,
                            width: o
                        })
                    })]
                })
            }
            let eK = (0, r.zo)("div", {
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "-16px auto 0",
                    width: "99%",
                    background: "transparent",
                    bottom: -32
                }),
                e0 = (0, r.zo)("div", {
                    position: "absolute",
                    left: 0,
                    top: 38,
                    zIndex: "$above2"
                }),
                e1 = (0, r.zo)("div", {
                    position: "absolute",
                    bottom: 23,
                    width: "100%",
                    height: 5,
                    backgroundColor: "#000",
                    zIndex: "$above1"
                }),
                ExpandedPlayer = e => {
                    let {
                        isOpen: t,
                        closePlayer: i
                    } = e, {
                        activeTrackId: r
                    } = (0, s.PZ)(), [o, a] = l.useState(!1), [d, u] = l.useState(!1), x = l.useCallback(() => {
                        u(!0)
                    }, []), f = l.useCallback(() => {
                        u(!1)
                    }, []), {
                        releaseInfo: g
                    } = (0, v.w)({
                        trackId: r,
                        shouldFetch: !0
                    });
                    return g ? (0, n.jsxs)(e2, {
                        isOpen: t,
                        onClose: i,
                        disableDrag: d,
                        springConfig: {
                            damping: 40,
                            stiffness: 400
                        },
                        children: [(0, n.jsx)(h(), {
                            children: (0, n.jsx)("meta", {
                                name: "theme-color",
                                content: "#000"
                            })
                        }), (0, n.jsxs)(e5, {
                            children: [(0, n.jsx)(e4, {
                                children: (0, n.jsxs)(e8, {
                                    children: [(0, n.jsx)(ReleaseCover, {}), (0, n.jsxs)(e7, {
                                        onTouchStart: x,
                                        onTouchEnd: f,
                                        children: [(0, n.jsx)(SongInfo, {
                                            closePlayer: i
                                        }), (0, n.jsxs)(te, {
                                            children: [(0, n.jsx)(Waveform, {
                                                releaseId: g.id,
                                                isOpen: t
                                            }), (0, n.jsx)(AudioProgress, {})]
                                        }), (0, n.jsxs)(e9, {
                                            children: [(0, n.jsx)(AudioController_AudioController, {}), (0, n.jsx)(ReleaseActions, {
                                                closePlayer: i
                                            })]
                                        })]
                                    })]
                                })
                            }), (0, n.jsx)(e6, {
                                variant: "inverted",
                                icon: (0, n.jsx)(c.G, {
                                    icon: p.pt
                                }),
                                onClick: i
                            }), (0, n.jsx)(e3, {
                                children: (0, n.jsxs)(w.N, {
                                    isDropdownOpen: o,
                                    setIsDropdownOpen: a,
                                    dropdownProps: {
                                        wrapperContentProps: {
                                            collisionPadding: {
                                                right: 16
                                            },
                                            css: {
                                                zIndex: "$audioPlayerSheet"
                                            }
                                        }
                                    },
                                    triggerProps: {
                                        variant: "inverted",
                                        css: {
                                            backgroundColor: "transparent",
                                            "&:hover, &:focus, &:active": {
                                                backgroundColor: "transparent"
                                            }
                                        }
                                    },
                                    children: [(0, n.jsx)(tt, {
                                        onClick: i,
                                        children: (0, n.jsx)(j.T, {
                                            variant: "solid",
                                            href: (0, y.OU)(g.webappUri)
                                        })
                                    }), (0, n.jsx)(tt, {
                                        onClick: i,
                                        children: (0, n.jsx)(ViewArtistMenuItem, {
                                            variant: "solid",
                                            href: (0, y.OU)(g.artist.webappUri)
                                        })
                                    })]
                                })
                            })]
                        })]
                    }) : null
                },
                e2 = (0, r.zo)(x.Z, {
                    zIndex: "$audioPlayerSheet !important",
                    "@tablet": {
                        display: "none"
                    }
                }),
                e5 = (0, r.zo)(x.Z.Container, {
                    borderRadius: "unset !important",
                    background: "#000 !important",
                    overflow: "hidden",
                    height: "100dvh !important"
                }),
                e6 = (0, r.zo)(k.h, {
                    position: "absolute",
                    top: 12,
                    left: 12,
                    backgroundColor: "transparent",
                    "&:hover, &:focus, &:active": {
                        backgroundColor: "transparent"
                    }
                }),
                e3 = (0, r.zo)("div", {
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: "$above1"
                }),
                e4 = (0, r.zo)(x.Z.Content, {}),
                e8 = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100dvh !important",
                    position: "relative",
                    overflow: "auto"
                }),
                e7 = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    padding: "0 16px 28px",
                    zIndex: "$above1"
                }),
                e9 = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    gap: 24
                }),
                te = (0, r.zo)("div", {
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    alignItems: "top",
                    marginBottom: 16,
                    width: "100%",
                    position: "relative"
                }),
                tt = (0, r.zo)("div", {});
            var ti = i(71992),
                tn = i(11794),
                tl = i(82287),
                tr = i(69598),
                to = i(34089);
            let PlayerController = () => {
                    let {
                        asPath: e
                    } = (0, ti.useRouter)(), {
                        activeTrackId: t,
                        playing: i
                    } = (0, s.PZ)(), {
                        releaseInfo: l
                    } = (0, v.w)({
                        trackId: t,
                        shouldFetch: !0
                    }), {
                        openModal: r
                    } = (0, ea.useModal)(), o = null == l ? void 0 : l.id;
                    if (!l) return null;
                    let a = (0, y.OU)(l.webappUri),
                        d = !e.startsWith(a);
                    return (0, n.jsxs)(ta, {
                        children: [d && !!o && (0, n.jsx)(tr.z, {
                            className: "h-8 w-[65px] border border-neutral500 leading-normal focus:border-neutral500 hover:border-neutral500 active:border-neutral500",
                            darkMode: !0,
                            label: "Collect",
                            variant: "tertiary",
                            size: "S",
                            onClick: e => {
                                e.stopPropagation(), (0, ed.uH)({
                                    event: "Collect Now Clicked",
                                    properties: {
                                        associationId: o,
                                        associationType: "Release",
                                        sourceComponent: "Audio Player"
                                    }
                                }), r(ea.ModalType.AUDIO_PLAYER_COLLECT, {
                                    body: (0, n.jsx)(to.p, {
                                        releaseId: o
                                    })
                                })
                            }
                        }), (0, n.jsx)(k.h, {
                            variant: "inverted",
                            icon: (0, n.jsx)(c.G, {
                                icon: i ? tn.XQ : tl.zc
                            }),
                            onClick: e => {
                                e.stopPropagation(), (0, A.ID)()
                            },
                            size: 24,
                            animate: !0
                        })]
                    })
                },
                ta = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 16
                });
            var ts = i(31475);
            let SongInfo_SongInfo = () => {
                    var e, t, i, l, r;
                    let {
                        activeTrackId: o
                    } = (0, s.PZ)(), {
                        releaseInfo: a
                    } = (0, v.w)({
                        trackId: o,
                        shouldFetch: !0
                    });
                    if (!a) return null;
                    let d = null === (e = a.staticCoverImage) || void 0 === e ? void 0 : e.url,
                        c = null !== (i = a.coverImage.url) && void 0 !== i ? i : "",
                        u = null !== (l = null === (t = a.artist) || void 0 === t ? void 0 : t.name) && void 0 !== l ? l : "Unnamed Artist",
                        h = null !== (r = a.title) && void 0 !== r ? r : "Unnamed Song";
                    return (0, n.jsxs)(td, {
                        children: [(0, n.jsx)(ts.Y, {
                            src: d || c,
                            alt: h,
                            size: 40
                        }), (0, n.jsxs)(N, {
                            children: [(0, n.jsx)(tc, {
                                children: h
                            }), (0, n.jsx)(tu, {
                                children: u
                            })]
                        })]
                    })
                },
                td = (0, r.zo)("div", {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    overflow: "hidden"
                }),
                tc = (0, r.zo)("h3", {
                    title: "XS",
                    fontWeight: 500,
                    color: "$white",
                    whiteSpace: "nowrap"
                }),
                tu = (0, r.zo)("p", {
                    base: "XS",
                    fontWeight: 400,
                    color: "$white",
                    whiteSpace: "nowrap"
                });
            var th = i(63191);
            let Timeline = () => {
                    let {
                        duration: e
                    } = (0, s.PZ)(), {
                        position: t
                    } = (0, W.E)();
                    return (0, n.jsx)(tx, {
                        type: "range",
                        step: 1,
                        min: 0,
                        value: t,
                        max: e,
                        onChange: th.Z
                    })
                },
                tx = (0, r.zo)("input", {
                    WebkitAppearance: "none",
                    cursor: "pointer",
                    overflow: "hidden",
                    width: "100%",
                    transition: "all 0.2s",
                    background: "$neutral600",
                    "&::-webkit-slider-runnable-track": {
                        height: "2px",
                        background: "$neutral600"
                    },
                    "&::-moz-range-track": {
                        height: "2px",
                        background: "$neutral600"
                    },
                    "&::-webkit-slider-thumb": {
                        WebkitAppearance: "none",
                        backgroundColor: "$fuchsia500",
                        boxShadow: "-1340px -1341px 0 1340px #000, -1340px -1337px 0 1340px #EB5CBB",
                        height: "1px",
                        width: "1px",
                        transition: "all 0.2s"
                    },
                    "&::-moz-range-thumb": {
                        backgroundColor: "$fuchsia500",
                        border: "none",
                        height: "1px",
                        width: "1px",
                        transition: "all 0.2s"
                    },
                    "&::-moz-range-progress": {
                        background: "$fuchsia500"
                    }
                }),
                tp = 56,
                MinimizedPlayer = () => {
                    let {
                        activeTrackId: e,
                        hideExpandedPlayer: t
                    } = (0, s.PZ)(), {
                        inViewRef: i
                    } = (0, a.p)({
                        trackId: e
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(ExpandedPlayer, {
                            isOpen: !t,
                            closePlayer: () => (0, d.in)(!0)
                        }), (0, n.jsxs)(tv, {
                            onClick: () => {
                                (0, d.in)(!1)
                            },
                            ref: i,
                            children: [(0, n.jsx)(Timeline, {}), (0, n.jsxs)(tf, {
                                children: [(0, n.jsx)(SongInfo_SongInfo, {}), (0, n.jsx)(PlayerController, {})]
                            })]
                        })]
                    })
                },
                tv = (0, r.zo)("div", {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    backgroundColor: "#000",
                    zIndex: "$audioPlayerContainer",
                    position: "fixed",
                    bottom: `calc(${o.U}px + env(safe-area-inset-bottom))`,
                    "@tablet": {
                        display: "none"
                    }
                }),
                tf = (0, r.zo)($, {
                    paddingLeft: 8,
                    paddingRight: 16,
                    gap: 16,
                    height: tp
                })
        },
        31475: function(e, t, i) {
            i.d(t, {
                Y: function() {
                    return Cover
                }
            });
            var n = i(16356);
            i(97352);
            var l = i(23496),
                r = i(24797),
                o = i(22181),
                a = i(10187);

            function Cover(e) {
                let {
                    src: t,
                    alt: i,
                    size: s,
                    priority: d = !1,
                    isAnimated: c = !1,
                    ...u
                } = e, {
                    borderRadius: h = 4,
                    disableLink: x,
                    hasShadow: p,
                    hasBorder: v
                } = u, {
                    openModal: f
                } = o.ModalContext.useContainer(), g = "href" in u ? u.href : void 0, m = "modalOnClick" in u && u.modalOnClick;
                return (0, n.jsx)(l.f, {
                    href: g,
                    hasShadow: p,
                    hasBorder: v,
                    disableLink: x,
                    borderRadius: h,
                    onClick: () => {
                        m && f(o.ModalType.IMAGE_VIEW, {
                            body: (0, n.jsx)(r.C, {
                                src: t
                            })
                        })
                    },
                    css: {
                        flexShrink: 0,
                        cursor: g || m ? "pointer" : "unset",
                        width: s
                    },
                    children: c ? (0, n.jsx)(a.V, {
                        src: t,
                        width: s,
                        height: s
                    }) : (0, n.jsx)(l.E, {
                        src: t,
                        alt: i,
                        size: s,
                        priority: d,
                        borderRadius: h
                    })
                })
            }
        },
        95169: function(e, t, i) {
            i.d(t, {
                R: function() {
                    return Marquee
                }
            });
            var n = i(16356),
                l = i(97352),
                r = i(78570),
                o = i.n(r),
                a = i(8205),
                s = i(22248),
                d = i(83835);
            let useFadedText = function(e, t) {
                    var i, n;
                    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        [o, a] = (0, l.useState)(void 0),
                        [c, u] = (0, l.useState)(!1),
                        h = (0, l.useCallback)(() => {
                            if (e.current && t.current && c) {
                                var i, n;
                                let l = (null == e ? void 0 : null === (i = e.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                                    r = (null == t ? void 0 : null === (n = t.current) || void 0 === n ? void 0 : n.scrollWidth) || 0;
                                l < r ? a(!0) : a(!1)
                            }
                        }, [c, t, e]),
                        x = (0, s.Z)(h, 100);
                    return (0, d.G)(() => (window.addEventListener("resize", x), x(), () => window.removeEventListener("resize", x)), [r, h, null === (i = t.current) || void 0 === i ? void 0 : i.clientWidth, null === (n = e.current) || void 0 === n ? void 0 : n.scrollWidth, c]), (0, l.useEffect)(() => {
                        u(!0)
                    }, [h]), o
                },
                Marquee = e => {
                    let {
                        children: t
                    } = e, i = (0, l.useRef)(null), r = (0, l.useRef)(null), o = useFadedText(i, r), a = (0, l.useCallback)(() => {
                        var e, t;
                        let n = ((null === (e = r.current) || void 0 === e ? void 0 : e.scrollWidth) || 0) / ((null === (t = i.current) || void 0 === t ? void 0 : t.clientWidth) || 0) * 10;
                        return {
                            animation: `${n}s linear 0s infinite normal none ${u}`
                        }
                    }, []);
                    return (0, n.jsx)(c, {
                        ref: i,
                        fade: void 0 === o ? "right" : o,
                        children: o ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(h, {
                                ref: r,
                                css: a(),
                                children: t
                            }), (0, n.jsx)(x, {}), (0, n.jsx)(h, {
                                css: a(),
                                children: t
                            }), (0, n.jsx)(x, {})]
                        }) : (0, n.jsx)(h, {
                            ref: r,
                            children: t
                        })
                    })
                },
                c = (0, a.zo)("div", {
                    height: "100%",
                    display: "inline-flex",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100%",
                    variants: {
                        fade: {
                            true: {
                                maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)"
                            },
                            right: {
                                maskImage: "linear-gradient(90deg, black 0%, black 90%, transparent)"
                            }
                        }
                    }
                }),
                u = (0, a.F4)({
                    "0%": {
                        transform: "translateX(0) "
                    },
                    "100%": {
                        transform: "translateX(calc(-1 * (100% + 20px)))"
                    }
                }),
                h = (0, a.zo)("div", {
                    display: "inline-block"
                }),
                x = (0, a.zo)("div", {
                    width: 20,
                    display: "inline-block",
                    flexShrink: 0
                });
            (0, a.zo)(o(), {
                width: "100%"
            })
        },
        58430: function(e, t, i) {
            i.d(t, {
                U: function() {
                    return l
                },
                z: function() {
                    return n
                }
            });
            let n = "MobileNav",
                l = 68
        },
        34089: function(e, t, i) {
            i.d(t, {
                p: function() {
                    return AudioPlayerCollectModal
                }
            });
            var n = i(16356),
                l = i(97352);
            i(96960);
            var r = i(49395),
                o = i(89012),
                a = i(3928),
                s = i(99398),
                d = i(81688),
                c = i(30300);
            let AudioPlayerCollectModal = e => {
                var t, i;
                let {
                    releaseId: u
                } = e, {
                    data: h
                } = (0, a.aM2)(a.sOP, {
                    variables: {
                        releaseId: u
                    },
                    staleTime: 0
                }), x = null !== (i = null == h ? void 0 : h.data.release) && void 0 !== i ? i : null, {
                    isShareReferrable: p
                } = (0, s.$)({
                    release: x
                }), {
                    activePlaylistId: v,
                    activePlaylistReleaseIds: f
                } = (0, d.PZ)(), g = (0, l.useMemo)(() => f.includes(u), [f, u]), {
                    data: m
                } = (0, a.aM2)(a.tKR, {
                    variables: !!v && g && p && {
                        playlistId: v
                    },
                    staleTime: 0
                }), b = null == m ? void 0 : null === (t = m.data.playlistV2) || void 0 === t ? void 0 : t.user.publicAddress, j = g && v && b ? {
                    playlistId: v,
                    playlistUserAddress: b
                } : null, w = (0, r.Tr)(j ? {
                    referralType: o.MintReferralType.Playlist,
                    referralData: { ...j
                    }
                } : null);
                return x ? (0, n.jsx)(c.o, {
                    releaseId: u,
                    mintReferral: w,
                    collectButtonSource: "Audio Player"
                }) : null
            }
        },
        24797: function(e, t, i) {
            i.d(t, {
                C: function() {
                    return ImageViewModal
                }
            });
            var n = i(16356);
            i(97352);
            var l = i(72102),
                r = i(40612),
                o = i(8205),
                a = i(73950),
                s = i(37196),
                d = i(22181);
            let ImageViewModal = e => {
                    let {
                        src: t
                    } = e, {
                        closeCancelModal: i
                    } = d.ModalContext.useContainer(), o = (0, n.jsx)(n.Fragment, {
                        children: t ? (0, n.jsx)(a.G, {
                            alt: "Image view",
                            src: t,
                            fill: !0,
                            style: {
                                objectFit: "contain"
                            }
                        }) : null
                    }), h = (0, n.jsx)(c, {
                        children: (0, n.jsx)(u, {
                            onClick: () => i(),
                            children: (0, n.jsx)(l.G, {
                                icon: r.g8,
                                size: "lg"
                            })
                        })
                    });
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(s.u_, {
                            header: h,
                            headerStyles: {
                                height: 0
                            },
                            body: o,
                            bodyStyles: {
                                margin: 0
                            },
                            closeModal: i,
                            containerStyles: {
                                size: 343,
                                padding: 0,
                                margin: 0,
                                overflow: "visible",
                                "@tablet": {
                                    size: 720
                                },
                                "@tabletLandscape": {
                                    size: 788
                                }
                            }
                        })
                    })
                },
                c = (0, o.zo)("div", {
                    position: "absolute",
                    top: -10,
                    right: -10,
                    zIndex: "$above1"
                }),
                u = (0, o.zo)("div", {
                    width: 35,
                    height: 35,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(255, 255, 255, 0.6)",
                    borderRadius: 32,
                    backdropFilter: "blur(4px)",
                    cursor: "pointer",
                    "&:hover": {
                        background: "rgba(255, 255, 255, 1)"
                    }
                })
        },
        88275: function(e, t, i) {
            i.d(t, {
                p: function() {
                    return usePrefetchTrackInView
                }
            });
            var n = i(97352),
                l = i(49457),
                r = i(64328),
                o = i(58061);
            let usePrefetchTrackInView = e => {
                let {
                    trackId: t,
                    shouldFetch: i = !0
                } = e, {
                    inView: a,
                    ref: s
                } = (0, l.YD)(), d = (0, r.w)({
                    trackId: t,
                    shouldFetch: a && i
                }), {
                    trackAudioUrl: c
                } = d;
                return (0, n.useEffect)(() => {
                    c && a && (0, o.Qb)({
                        url: c
                    })
                }, [c, a, t]), {
                    inViewRef: s,
                    playerTrackInfo: d,
                    inView: a
                }
            }
        }
    }
]);