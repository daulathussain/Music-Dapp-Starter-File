"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9032], {
        64638: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return LexicalDisplay
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(44361),
                r = n(10228),
                i = n(97946),
                o = n(25347),
                u = n(95390);

            function LexicalDisplayNodesMention(e) {
                let {
                    displayText: t,
                    userId: n,
                    webappUri: a,
                    showMentionsHoverCard: d
                } = e, c = (0, l.useMemo)(() => (0, s.jsx)(i.s, {
                    pathnameUri: (0, u.OU)(a),
                    className: "cursor-pointer",
                    children: (0, s.jsx)("span", {
                        className: "font-medium text-fuchsia500 hover:brightness-90",
                        children: t
                    })
                }), [t, a]);
                return d ? (0, s.jsx)(o.I, {
                    userHoverCardContent: (0, s.jsx)(r.U, {
                        userId: n
                    }),
                    trigger: c
                }) : c
            }

            function LexicalDisplayNodes(e) {
                let {
                    nodes: t,
                    depth: n,
                    showMentionsHoverCard: a
                } = e, r = (0, l.useMemo)(() => {
                    let e = t.findIndex(e => "linebreak" !== e.type),
                        l = t.length - 1 - [...t].reverse().findIndex(e => "linebreak" !== e.type),
                        r = t.slice(e, l + 1);
                    return r.map((e, t) => {
                        switch (e.type) {
                            case "autolink":
                                return (0, s.jsx)(i.s, {
                                    absoluteUri: e.url,
                                    className: "cursor-pointer",
                                    type: "external",
                                    children: (0, s.jsx)("span", {
                                        className: "font-medium text-fuchsia500 hover:brightness-90",
                                        children: (0, s.jsx)(LexicalDisplayNodes, {
                                            showMentionsHoverCard: a,
                                            nodes: e.children,
                                            depth: n + 1
                                        }, `root-${n}-${t}`)
                                    })
                                });
                            case "text":
                                return (0, s.jsx)("span", {
                                    "data-feed-clickable-div": !0,
                                    children: e.text
                                }, `text-${n}-${t}`);
                            case "paragraph":
                                if (e.children.length) return (0, s.jsx)("p", {
                                    "data-feed-clickable-div": !0,
                                    children: (0, s.jsx)(LexicalDisplayNodes, {
                                        showMentionsHoverCard: a,
                                        nodes: e.children,
                                        depth: n + 1
                                    })
                                }, `p-${n}-${t}`);
                                return null;
                            case "root":
                                return (0, s.jsx)(LexicalDisplayNodes, {
                                    showMentionsHoverCard: a,
                                    nodes: e.children,
                                    depth: n + 1
                                }, `root-${n}-${t}`);
                            case "linebreak":
                                return (0, s.jsxs)("span", {
                                    children: [(0, s.jsx)("br", {}, `br-${n}-${t}`), (0, s.jsx)("span", {
                                        children: "​"
                                    }, `zeroWidth-${n}-${t}`)]
                                }, `linebreak-${n}-${t}`);
                            case "zeroWidth":
                                return (0, s.jsx)("span", {
                                    children: "​"
                                }, `zeroWidth-${n}-${t}`);
                            case "custom-beautifulMention":
                                return (0, s.jsx)(LexicalDisplayNodesMention, {
                                    showMentionsHoverCard: a,
                                    webappUri: e.data.webappUri,
                                    displayText: e.data.displayName,
                                    userId: e.data.userId
                                }, `custom-beautifulMention-${n}-${t}`);
                            default:
                                return null
                        }
                    })
                }, [t, n, a]);
                return r
            }

            function LexicalDisplay(e) {
                let {
                    state: t,
                    showMentionsHoverCard: n = !0,
                    className: r
                } = e, [i, o] = (0, l.useState)(t.root);
                return (0, l.useEffect)(() => {
                    o(t.root)
                }, [t]), (0, s.jsx)("div", {
                    className: (0, a.m)("whitespace-pre-wrap", r),
                    "data-feed-clickable-div": !0,
                    children: i && (0, s.jsx)(LexicalDisplayNodes, {
                        showMentionsHoverCard: n,
                        depth: 0,
                        nodes: [i]
                    })
                })
            }
        },
        11021: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return InlineLexicalInput
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(7348),
                r = n(87650),
                i = n(86772),
                o = n(76886),
                u = n(12386),
                d = n(84780),
                c = n(25190),
                x = n.n(c),
                m = n(45456),
                f = n(80948),
                p = n(13741),
                h = n(38233),
                v = n(44361),
                b = n(1936),
                g = n(92596),
                j = n(29235),
                N = n(80002),
                y = n(96082),
                w = n(71849),
                C = n(83915),
                L = n(49395),
                k = n(12849),
                P = n(69598);

            function SendButtonPlugin(e) {
                let {
                    loading: t,
                    onSubmit: n,
                    sendButtonLabel: a,
                    textLength: r,
                    setTextLength: i,
                    className: o,
                    error: u
                } = e, [d] = (0, w.useLexicalComposerContext)(), c = (0, L.R9)(() => {
                    d.dispatchCommand(C.CLEAR_EDITOR_COMMAND, void 0), n(d.getEditorState())
                });
                return (0, l.useEffect)(() => d.registerUpdateListener(e => {
                    let {
                        editorState: t
                    } = e, n = k.Z.getNodeTextLength(k.Z.getRootNode(t));
                    i(n)
                }), [d, i]), (0, s.jsx)("div", {
                    className: (0, v.m)("absolute right-0 z-above1 flex items-center justify-center", o),
                    children: (0, s.jsx)(P.z, {
                        variant: "primary",
                        className: (0, v.m)("bottom-0 right-0 flex h-8 w-[72px] min-w-[72px] items-center justify-center !rounded-[100px] py-1.5", r && !u ? "bg-base800 hover:bg-base800/90" : "bg-base800/30"),
                        label: t ? "" : a,
                        disabled: !r || u,
                        size: "S",
                        onClick: c,
                        loading: t
                    })
                })
            }
            var M = n(73711);

            function AutoLinkRemovalPlugin(e) {
                let {
                    removeLink: t,
                    setRemoveLink: n
                } = e, [s] = (0, w.useLexicalComposerContext)();
                return (0, l.useEffect)(() => {
                    t && s.update(() => {
                        let e = (0, C.$getRoot)(),
                            processNode = e => {
                                switch (e.getType()) {
                                    case "autolink":
                                    case "text":
                                        e.getTextContent() === t && e.remove()
                                }
                                let n = e.getChildren ? e.getChildren() : [];
                                n.forEach(e => processNode(e))
                            };
                        processNode(e), n(void 0)
                    })
                }, [s, t, n]), null
            }
            var E = n(40196);

            function onError(e) {
                M.k.error({
                    err: e
                }, "LexicalInput Error")
            }

            function InlineLexicalInput(e) {
                let {
                    matchers: t,
                    spotifyLinksEnabled: n
                } = (0, E.D)(), {
                    autoFocus: c,
                    className: w,
                    disabled: C,
                    id: L,
                    onChange: k,
                    initialMentionData: P,
                    placeholder: M,
                    placeholderClassName: I,
                    setRemoveLink: R,
                    removeLink: A,
                    characterCount: S,
                    menuAnchorClassName: T,
                    actions: D,
                    extraContent: $,
                    containerClassName: _,
                    showActions: B,
                    actionsContainerClassName: U
                } = e, [O, F] = (0, l.useState)(!1), [z, H] = (0, l.useState)(0), W = (0, l.useMemo)(() => ({
                    namespace: "MentionableInput",
                    onError,
                    nodes: [...(0, h.bH)(b.A), h.dP, a.AutoLinkNode]
                }), []);
                return (0, s.jsx)(u.LexicalComposer, {
                    initialConfig: W,
                    children: (0, s.jsxs)("div", {
                        className: (0, v.m)("flex w-full flex-col", _),
                        children: [(0, s.jsxs)(N.n, {
                            setFocus: F,
                            className: (0, v.m)("relative cursor-text overflow-hidden rounded-md p-2", w),
                            children: [(0, s.jsxs)("div", {
                                className: (0, v.m)("h-full w-full overflow-y-auto scrollbar-none", n && "[&_a]:pointer-events-none [&_a]:text-fuchsia500"),
                                children: [(0, s.jsx)(p.PlainTextPlugin, {
                                    contentEditable: (0, s.jsx)(d.ContentEditable, {
                                        id: L,
                                        className: "outline-none"
                                    }),
                                    placeholder: (0, s.jsx)("div", {
                                        className: (0, v.m)("action pointer-events-none absolute left-0 right-0 top-0 line-clamp-1 select-none p-2 pr-10 text-neutral400", I),
                                        children: M
                                    }),
                                    ErrorBoundary: x()
                                }), (0, s.jsx)(m.HistoryPlugin, {}), k && (0, s.jsx)(f.OnChangePlugin, {
                                    onChange: k
                                }), (0, s.jsx)(h.Jk, {}), (0, s.jsx)(o.ClearEditorPlugin, {}), (0, s.jsx)(j.o, {
                                    disabled: C
                                }), A && R && (0, s.jsx)(AutoLinkRemovalPlugin, {
                                    removeLink: A,
                                    setRemoveLink: R
                                }), n && (0, s.jsx)(i.AutoLinkPlugin, {
                                    matchers: t
                                }), (0, s.jsx)(y.N, {
                                    initialMentionData: P,
                                    menuAnchorClassName: T
                                }), c && (0, s.jsx)(r.AutoFocusPlugin, {})]
                            }), !!$ && (0, s.jsx)("div", {
                                className: "mt-4",
                                children: $
                            }), !!S && S.show && !n && (0, s.jsx)(g.n, {
                                maxLength: S.maxLength,
                                circleSize: 16,
                                showCount: !0
                            }), !B && !O && 0 === z && (0, s.jsx)(SendButtonPlugin, {
                                loading: e.loading,
                                onSubmit: e.onSubmit,
                                sendButtonLabel: e.sendButtonLabel,
                                textLength: z,
                                setTextLength: H,
                                className: "top-0",
                                error: !!S && S.maxLength < z || !!e.disablePost
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "h-8 pt-1",
                            children: [!!D && (0, s.jsx)("div", {
                                className: (0, v.m)("absolute bottom-0 left-[62px] z-above2", U),
                                tabIndex: -1,
                                children: D
                            }), (B || O || z > 0) && (0, s.jsxs)(s.Fragment, {
                                children: [!!S && S.show && n && (0, s.jsx)(g.n, {
                                    maxLength: S.maxLength,
                                    showCount: !1,
                                    className: "bottom-[1px] right-[82px] !bg-transparent",
                                    circleSize: 20
                                }), (0, s.jsx)(SendButtonPlugin, {
                                    loading: e.loading,
                                    onSubmit: e.onSubmit,
                                    sendButtonLabel: e.sendButtonLabel,
                                    textLength: z,
                                    setTextLength: H,
                                    className: "relative bottom-0 justify-end",
                                    error: !!S && S.maxLength < z || !!e.disablePost
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        1936: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(71849),
                r = n(83915),
                i = n(44361);
            let o = (0, l.forwardRef)((e, t) => {
                let {
                    trigger: n,
                    value: o,
                    children: u,
                    data: d,
                    className: c,
                    ...x
                } = e, [m] = (0, a.useLexicalComposerContext)(), [f, p] = l.useState(!1);
                return (0, l.useEffect)(() => m.registerCommand(r.SELECTION_CHANGE_COMMAND, (e, t) => {
                    let n = (0, r.$getSelection)(),
                        s = null == n ? void 0 : n.getNodes(),
                        l = !1;
                    for (let e of null != s ? s : []) "custom-beautifulMention" === e.__type && e.__data.key === (null == d ? void 0 : d.key) && (l = !0);
                    return p(l), !1
                }, r.COMMAND_PRIORITY_EDITOR), [m, d]), (0, s.jsx)("span", {
                    ref: t,
                    title: o,
                    className: (0, i.m)("rounded mx-0 cursor-pointer select-none px-0 font-medium text-fuchsia500", f && "-mx-1 rounded-sm bg-fuchsia500/20 px-1 outline-none", c),
                    ...x,
                    children: o
                })
            });
            o.displayName = "MentionNode"
        },
        92596: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return CharacterCountPlugin
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(71849),
                r = n(44361),
                i = n(12849);
            let lerp = (e, t, n) => e * (1 - n) + t * n,
                o = 20 * Math.PI;

            function ProgressCircle(e) {
                let {
                    usedColor: t = "currentColor",
                    remainingColor: n = "#F5F5F5",
                    bgColor: l = "transparent",
                    percent: a,
                    size: r = 16
                } = e, i = lerp(1, 96, a / 100);
                return (0, s.jsxs)("svg", {
                    className: "block -rotate-90 overflow-visible",
                    height: r,
                    width: r,
                    viewBox: "0 0 24 24",
                    style: {
                        display: "block",
                        overflow: "visible",
                        fill: "none"
                    },
                    children: [(0, s.jsx)("circle", {
                        r: 10,
                        cx: 12,
                        cy: 12,
                        style: {
                            fill: l
                        }
                    }), (0, s.jsx)(Progress, {
                        color: n,
                        r: 10,
                        style: {
                            strokeWidth: 3.6
                        }
                    }), (0, s.jsx)(Progress, {
                        color: t,
                        r: 10,
                        style: {
                            strokeWidth: 4,
                            strokeDasharray: `${o} ${o}`,
                            strokeDashoffset: o + i / 100 * o
                        }
                    })]
                })
            }
            let Progress = e => (0, s.jsx)("circle", {
                className: "linecap-[round] fill-[transparent]",
                cx: 12,
                cy: 12,
                r: e.r,
                style: { ...e.style,
                    stroke: e.color,
                    strokeLinecap: "round",
                    transition: "stroke-dashoffset 250ms linear"
                }
            });

            function CharacterCountPlugin(e) {
                let {
                    circleSize: t,
                    className: n,
                    maxLength: o,
                    showCount: u
                } = e, [d, c] = l.useState(0), [x] = (0, a.useLexicalComposerContext)();
                (0, l.useEffect)(() => x.registerUpdateListener(e => {
                    let {
                        editorState: t
                    } = e, n = i.Z.getNodeTextLength(i.Z.getRootNode(t));
                    c(n)
                }), [x]);
                let [m, f] = (0, l.useMemo)(() => [d > o, Math.min(d / o * 100, 100)], [d, o]);
                return (0, s.jsxs)("div", {
                    className: (0, r.m)("absolute bottom-2 right-2 -mx-2 -my-1 flex select-none items-center gap-1 overflow-hidden rounded-full px-2 py-1 backdrop-blur", m ? "bg-destructive50/50" : "bg-neutral100/50", n),
                    children: [u && (0, s.jsxs)("div", {
                        className: (0, r.m)("text-base-s", m ? "text-destructive400" : "text-neutral400"),
                        children: [d, "/", o]
                    }), (0, s.jsx)(ProgressCircle, {
                        percent: f,
                        size: t,
                        remainingColor: "#E6E6E6",
                        usedColor: m ? "#D22F2F" : "#22C55E"
                    })]
                })
            }
        },
        29235: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return DisabledPlugin
                }
            });
            var s = n(97352),
                l = n(71849);

            function DisabledPlugin(e) {
                let {
                    disabled: t
                } = e, [n] = (0, l.useLexicalComposerContext)();
                return (0, s.useEffect)(() => {
                    n.setEditable(!t)
                }, [t, n]), null
            }
        },
        80002: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return FocusContainerPlugin
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(71849),
                r = n(83915),
                i = n(96301);

            function FocusContainerPlugin(e) {
                let {
                    className: t,
                    children: n,
                    setFocus: o
                } = e, {
                    isAuthenticatedWithAPI: u
                } = (0, i.aC)(), [d] = (0, a.useLexicalComposerContext)();
                (0, l.useEffect)(() => d.registerCommand(r.BLUR_COMMAND, () => !1, r.COMMAND_PRIORITY_LOW), [d]), (0, l.useEffect)(() => {
                    let onKeyDown = e => {
                        "Escape" === e.key && (d.blur(), null == o || o(!1))
                    };
                    return d.registerRootListener((e, t) => {
                        null !== t && t.removeEventListener("keydown", onKeyDown), null !== e && e.addEventListener("keydown", onKeyDown)
                    })
                }, [d, o]);
                let c = (0, l.useCallback)(() => {
                    u && (null == o || o(!0), d.focus())
                }, [d, u, o]);
                return (0, s.jsx)("div", {
                    className: t,
                    onClick: c,
                    tabIndex: -1,
                    children: n
                })
            }
        },
        96082: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return MentionsPlugin
                }
            });
            var s = n(16356),
                l = n(97352),
                a = n(71849),
                r = n(83915),
                i = n(38233),
                o = n(44361),
                u = n(49395),
                d = n(59287),
                c = n(68753),
                x = n(42789);
            let m = (0, l.forwardRef)((e, t) => {
                let {
                    publicAddress: n,
                    displayName: l,
                    selected: a,
                    showVerified: r,
                    webappUri: i,
                    avatarUrl: u,
                    ...m
                } = e;
                return (0, s.jsxs)("li", {
                    className: (0, o.m)("-mx-2 -my-2 mb-3 flex cursor-pointer items-center gap-3 overflow-hidden rounded-md px-2 py-2 last:mb-0 only:mb-0", a ? "bg-base200" : " bg-white "),
                    ...m,
                    ref: t,
                    children: [(0, s.jsx)("div", {
                        className: "aspect-square h-8 w-8 flex-00auto",
                        children: (0, s.jsx)(c.q, {
                            walletAddress: n,
                            src: null != u ? u : null,
                            borderRadius: 999,
                            disableLink: !0,
                            size: 32,
                            webappUri: i
                        })
                    }), (0, s.jsxs)("div", {
                        className: "flex flex-1 flex-col overflow-hidden ",
                        children: [(0, s.jsxs)("div", {
                            className: "flex items-center gap-1",
                            children: [(0, s.jsx)("div", {
                                className: "line-clamp-1 text-ellipsis  text-base-m font-semibold text-base900",
                                children: l
                            }), r && (0, s.jsx)(x.l, {
                                className: "h-3.5 w-3.5 flex-00auto"
                            })]
                        }), (0, s.jsx)("div", {
                            className: "text-ellipsis break-words text-base-s text-neutral500",
                            children: (0, d.pc)(n, 5, 4)
                        })]
                    })]
                })
            });
            m.displayName = "MentionCell";
            var f = n(12849),
                p = n(3928),
                h = n(34050),
                v = n(85846);

            function dataToBeautifulMentionsItemArray(e) {
                return [...e.data.search.artistsPaginated.edges.map(e => {
                    var t;
                    return {
                        key: `artist-${e.node.id}`,
                        value: e.node.name,
                        displayName: e.node.name,
                        publicAddress: e.node.user.publicAddress,
                        artistId: e.node.id,
                        userId: e.node.user.id,
                        avatarUrl: (null === (t = e.node.user.avatar) || void 0 === t ? void 0 : t.url) || null,
                        webappUri: e.node.webappUri
                    }
                }), ...e.data.search.collectors.edges.map(e => {
                    var t;
                    return {
                        key: `collector-${e.node.id}`,
                        value: e.node.displayName || e.node.publicAddress,
                        displayName: e.node.displayName || e.node.publicAddress,
                        publicAddress: e.node.publicAddress,
                        artistId: null,
                        userId: e.node.id,
                        avatarUrl: (null === (t = e.node.avatar) || void 0 === t ? void 0 : t.url) || null,
                        webappUri: e.node.webappUri
                    }
                })]
            }
            let b = (0, l.forwardRef)((e, t) => {
                let {
                    loading: n,
                    children: l,
                    ...a
                } = e;
                return l.length ? (0, s.jsxs)("ul", {
                    className: "pointer-events-auto relative z-dropdown mt-8 block w-56 rounded-lg bg-white px-4 pb-2 pt-4 shadow-tertiary",
                    ...a,
                    ref: t,
                    children: [(0, s.jsx)("div", {
                        children: l
                    }), (0, s.jsx)("div", {
                        className: (0, o.m)("absolute left-0 right-0 top-0 flex h-2 items-center justify-center transition-opacity", n ? "opacity-100" : "opacity-0"),
                        children: (0, s.jsx)("div", {
                            className: "loading-container relative h-1 w-36 overflow-hidden rounded-full bg-neutral100",
                            children: (0, s.jsx)("div", {
                                className: "loading-bar absolute bottom-0 left-0 top-0 w-12 animate-loadingBarBounce rounded-full bg-neutral300"
                            })
                        })
                    })]
                }) : null
            });
            b.displayName = "MentionsMenu";
            let g = (0, l.forwardRef)((e, t) => {
                let {
                    selected: n,
                    publicAddress: l,
                    avatarUrl: a,
                    displayName: r,
                    webappUri: i,
                    itemValue: o,
                    children: u,
                    userId: d,
                    artistId: c,
                    ...x
                } = e;
                return (0, s.jsx)(m, {
                    webappUri: i,
                    avatarUrl: a,
                    publicAddress: l,
                    showVerified: !!c,
                    selected: n,
                    displayName: r,
                    ref: t,
                    ...x
                })
            });

            function MentionsPlugin(e) {
                let {
                    menuAnchorClassName: t,
                    initialMentionData: n
                } = e, o = (0, l.useRef)({}), d = (0, l.useRef)(!1), [c] = (0, a.useLexicalComposerContext)(), x = (0, l.useCallback)(async (e, t) => {
                    let n = t || "",
                        s = o.current[n];
                    if (s) return s; {
                        let e = await (0, p.ChE)(p.o9p, {
                                variables: {
                                    input: {
                                        text: t
                                    }
                                }
                            }),
                            s = dataToBeautifulMentionsItemArray(e);
                        return o.current[n] = s, s
                    }
                }, []);
                (0, l.useEffect)(() => c.registerUpdateListener(async e => {
                    let {
                        editorState: t
                    } = e, n = f.Z.getNodeTextLength(f.Z.getRootNode(t));
                    if (n >= 1 && !d.current) {
                        d.current = !0;
                        let e = await (0, p.ChE)(p.o9p, {
                                variables: {
                                    input: {
                                        text: ""
                                    }
                                }
                            }),
                            t = dataToBeautifulMentionsItemArray(e);
                        o.current[""] = t
                    }
                }), [c]);
                let m = (0, u.R9)(() => {
                    c.update(() => {
                        let e = (0, r.$getRoot)(),
                            t = e.getChildren();
                        if (1 === t.length) {
                            var n;
                            let e = (0, r.$createTextNode)(v.L_);
                            null === (n = t[0]) || void 0 === n || n.append(e), e.selectNext()
                        }
                    })
                });
                return (0, h.q)(() => {
                    n && c.update(() => {
                        let e = (0, r.$getRoot)(),
                            t = e.getChildren();
                        if (1 === t.length) {
                            var s, l;
                            let e = (0, i.kg)("@", n.displayName, n);
                            null === (s = t[0]) || void 0 === s || s.append(e);
                            let a = (0, r.$createTextNode)(v.L_);
                            null === (l = t[0]) || void 0 === l || l.append(a), a.selectNext()
                        }
                    })
                }), (0, s.jsx)(i.tr, {
                    triggers: ["@"],
                    onMenuItemSelect: m,
                    searchDelay: 0,
                    menuItemComponent: g,
                    menuComponent: b,
                    onSearch: x,
                    menuAnchorClassName: t,
                    insertOnBlur: !1,
                    allowSpaces: !1
                })
            }
            g.displayName = "MentionsMenuItem"
        },
        40196: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return useLexicalLinks
                }
            });
            var s = n(97352),
                l = n(78608),
                a = n(82443),
                r = n(42529),
                i = n(85846),
                o = n(36331);

            function useLexicalLinks() {
                let {
                    value: e
                } = (0, l.useGate)(i.ln.SPOTIFY_LINKS), {
                    config: t,
                    isLoading: n
                } = (0, l.useConfig)(i.Zh.POSTING_URL_WHITELIST), u = t ? t.getValue(a.Gv) : null, d = (0, s.useMemo)(() => {
                    var e;
                    let t = n ? [] : null !== (e = null == u ? void 0 : u.whitelist) && void 0 !== e ? e : [];
                    return [e => {
                        let n = i.Wh.exec(e);
                        if (null == n) return null;
                        let s = n[0];
                        return (0, o.i)(s, t) ? {
                            index: n.index,
                            length: s.length,
                            text: s,
                            url: s.startsWith("http") ? s : `https://${s}`,
                            attributes: {
                                rel: "noreferrer",
                                target: "_blank"
                            }
                        } : null
                    }]
                }, [u, n]), c = (0, r.R)(e => i.Wh.test(e));
                return {
                    matchers: d,
                    validateUrl: c,
                    spotifyLinksEnabled: e
                }
            }
        },
        42489: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return useLexicalMentionsMenuContainerMarginClassName
                }
            });
            var s = n(97352);

            function useLexicalMentionsMenuContainerMarginClassName() {
                let [e, t] = (0, s.useState)(!1);
                return (0, s.useEffect)(() => {
                    let e = new MutationObserver(function() {
                        document.getElementById("typeahead-menu") ? t(!0) : t(!1)
                    });
                    return e.observe(document.body, {
                        childList: !0
                    }), () => {
                        e.disconnect()
                    }
                }, []), e ? "mb-[200px] md:mb-0" : ""
            }
        },
        36331: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return isInWhitelist
                }
            });

            function isInWhitelist(e, t) {
                return t.some(t => e.includes(t))
            }
        },
        69741: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return Comment
                },
                R: function() {
                    return ParentComment
                }
            });
            var s = n(16356);
            n(97352);
            var l = n(64638),
                a = n(72102),
                r = n(49542),
                i = n(11794),
                o = n(82287),
                u = n(44456),
                d = n(21922),
                c = n(34813),
                x = n(14461);
            let PlaylistPlayButton = e => {
                var t;
                let {
                    playlist: n
                } = e, [l, m] = (0, c.X)(), {
                    isPlaying: f,
                    onPlayButtonClick: p
                } = (0, x.T)({
                    playlistId: null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : ""
                });
                if (!n) return null;
                let h = (0, r.default)(l ? "text-base800" : "text-base600"),
                    v = (0, s.jsx)(d.h, {
                        className: "h-3 w-3 [&_svg]:h-3",
                        icon: (0, s.jsx)(a.G, {
                            className: (0, r.default)("text-base-s", h),
                            icon: f ? i.XQ : o.zc
                        }),
                        animate: !0
                    });
                return (0, s.jsxs)("div", {
                    className: (0, r.default)("flex w-fit items-center gap-1.5 pb-1 text-base600 transition-colors hover:text-base800"),
                    onClick: p,
                    ...m,
                    children: [v, f && (0, s.jsx)(u.j, {
                        smallBars: !0
                    }), (0, s.jsx)("div", {
                        className: "line-clamp-1 w-fit text-base-s font-semibold",
                        children: null == n ? void 0 : n.name
                    })]
                })
            };
            var m = n(49395),
                f = n(47544),
                p = n(51020),
                h = n(81688);
            let ReleasePlayButton = e => {
                var t;
                let {
                    release: n
                } = e, {
                    activeTrackId: l,
                    playing: x
                } = (0, h.PZ)(), [v, b] = (0, c.X)(), g = l === (null == n ? void 0 : n.track.id) && x, j = (0, p.R)({
                    listeningParty: null == n ? void 0 : n.listeningParty,
                    releaseId: null == n ? void 0 : n.id
                }), {
                    onPlayClick: N
                } = (0, p.a)({
                    releaseId: null == n ? void 0 : n.id,
                    isAlbum: !1,
                    trackId: null !== (t = null == n ? void 0 : n.track.id) && void 0 !== t ? t : null,
                    listeningParty: null
                }), y = (0, m.R9)(() => {
                    j || N()
                });
                if (!n) return null;
                let w = (0, r.default)(v ? "text-base800" : "text-base600", j && "cursor-not-allowed text-base800 opacity-30"),
                    C = (0, s.jsx)(d.h, {
                        className: "h-3 w-3 [&_svg]:h-3",
                        icon: (0, s.jsx)(a.G, {
                            className: (0, r.default)("text-base-s", w),
                            icon: g ? i.XQ : o.zc
                        }),
                        animate: !0
                    }),
                    L = (0, s.jsxs)("div", {
                        className: (0, r.default)("flex w-fit items-center gap-1.5 pb-1 text-base600 transition-colors hover:text-base800", j && "!cursor-not-allowed"),
                        onClick: y,
                        ...b,
                        children: [C, g && (0, s.jsx)(u.j, {
                            smallBars: !0
                        }), (0, s.jsxs)("div", {
                            className: "line-clamp-1 w-fit text-base-s font-semibold",
                            children: [null == n ? void 0 : n.artist.name, " - ", null == n ? void 0 : n.title]
                        })]
                    });
                return j ? (0, s.jsx)(f.h, {
                    listeningParty: j,
                    children: L
                }) : L
            };
            var v = n(68753),
                b = n(88343),
                g = n(98335),
                j = n(25828);

            function LoadingContent() {
                return (0, s.jsxs)("div", {
                    className: "flex w-full flex-col gap-2",
                    children: [(0, s.jsx)("div", {
                        className: "h-[14px] w-full animate-pulse rounded-sm bg-neutral200"
                    }), (0, s.jsx)("div", {
                        className: "h-[14px] w-full animate-pulse rounded-sm bg-neutral200"
                    })]
                })
            }

            function LoadingAuthor() {
                return (0, s.jsx)("div", {
                    className: "h-5 w-48 animate-pulse rounded-sm bg-neutral200"
                })
            }

            function ParentComment(e) {
                var t;
                let {
                    author: n,
                    content: a,
                    createdAt: r,
                    isLoading: i,
                    lexicalContent: o,
                    variant: u
                } = e, d = (0, j.F)(o);
                return (0, s.jsxs)("div", {
                    className: "flex w-full gap-3",
                    children: [n && !i ? (0, s.jsx)("div", {
                        className: "h-10 w-10 flex-shrink-0",
                        children: (0, s.jsx)(v.q, {
                            size: 40,
                            walletAddress: n.publicAddress,
                            webappUri: n.webappUri,
                            src: null === (t = n.avatar) || void 0 === t ? void 0 : t.url,
                            username: n.username,
                            borderRadius: 40
                        })
                    }) : (0, s.jsx)("div", {
                        className: "h-10 w-10 animate-pulse rounded-full bg-neutral200"
                    }), (0, s.jsxs)("div", {
                        className: "flex w-full min-w-0 flex-col gap-1.5",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: n && r && !i ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("span", {
                                    className: "font-base text-base-m font-semibold text-base900",
                                    children: n.username
                                }), " ", !!n.artist && (0, s.jsx)(g.O, {
                                    size: 16,
                                    portal: !0,
                                    noTooltip: !0
                                }), (0, s.jsx)(b.E, {
                                    timeStamp: r,
                                    className: "font-base !text-base-xs font-normal text-base500 duration-300 hover:text-base600"
                                })]
                            }) : (0, s.jsx)(LoadingAuthor, {})
                        }), i ? (0, s.jsx)(LoadingContent, {}) : (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: "line-clamp-4",
                                children: d ? (0, s.jsx)(l.X, {
                                    showMentionsHoverCard: !1,
                                    state: d
                                }) : a
                            }), "release" === u && (0, s.jsx)(ReleasePlayButton, {
                                release: e.optionalRelease
                            }), "playlist" === u && (0, s.jsx)(PlaylistPlayButton, {
                                playlist: e.optionalShelf
                            })]
                        })]
                    })]
                })
            }

            function Comment(e) {
                var t;
                let {
                    author: n,
                    content: a,
                    createdAt: r,
                    isLoading: i,
                    lexicalContent: o
                } = e, u = (0, j.F)(o);
                return (0, s.jsx)("div", {
                    className: "flex w-full gap-3 pl-[48px]",
                    children: (0, s.jsxs)("div", {
                        className: "flex w-full min-w-0 flex-col gap-1.5",
                        children: [(0, s.jsx)("div", {
                            className: "flex items-center gap-2",
                            children: n && r && !i ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: "h-4 w-4 flex-shrink-0",
                                    children: (0, s.jsx)(v.q, {
                                        size: 16,
                                        walletAddress: n.publicAddress,
                                        webappUri: n.webappUri,
                                        src: null === (t = n.avatar) || void 0 === t ? void 0 : t.url,
                                        username: n.username,
                                        borderRadius: 16
                                    })
                                }), (0, s.jsx)("span", {
                                    className: "font-base text-base-m font-semibold text-base900",
                                    children: n.username
                                }), " ", !!n.artist && (0, s.jsx)(g.O, {
                                    size: 16,
                                    portal: !0,
                                    noTooltip: !0
                                }), (0, s.jsx)(b.E, {
                                    timeStamp: r,
                                    className: "font-base !text-base-xs font-normal text-base500 duration-300 hover:text-base600"
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: "h-4 w-4 animate-pulse rounded-full bg-neutral200"
                                }), (0, s.jsx)(LoadingAuthor, {})]
                            })
                        }), i ? (0, s.jsx)(LoadingContent, {}) : (0, s.jsx)("div", {
                            className: "line-clamp-4",
                            children: u ? (0, s.jsx)(l.X, {
                                showMentionsHoverCard: !1,
                                state: u
                            }) : a
                        })]
                    })
                })
            }
        },
        34050: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return useEffectOnce
                }
            });
            var s = n(97352);

            function useEffectOnce(e) {
                let t = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    if (!t.current) return t.current = !0, e()
                }, [])
            }
        },
        34813: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return useHover
                }
            });
            var s = n(97352);
            let useHover = e => {
                let {
                    activeOnStart: t = !1,
                    stopHoveringOnMenuItems: n = !1
                } = e || {}, [l, a] = (0, s.useState)(t), r = (0, s.useCallback)(() => {
                    a(!0)
                }, [a]), i = (0, s.useCallback)(() => {
                    a(!1)
                }, [a]), o = (0, s.useCallback)(e => {
                    e.nativeEvent.target instanceof HTMLDivElement && "menuitem" === e.nativeEvent.target.role && a(!1)
                }, []);
                return [l, {
                    onMouseEnter: r,
                    onMouseLeave: i,
                    ...n && {
                        onMouseMove: o
                    }
                }]
            }
        },
        25828: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return useLexicalValidate
                },
                X: function() {
                    return useLexicalValidateGetText
                }
            });
            var s = n(97352),
                l = n(19847),
                a = n(12849);

            function useLexicalValidate(e) {
                let t = (0, s.useMemo)(() => {
                    if (!e) return null;
                    let t = l.g.safeParse(e);
                    return t.success ? t.data : null
                }, [e]);
                return t
            }

            function useLexicalValidateGetText(e) {
                let t = useLexicalValidate(e),
                    n = (0, s.useMemo)(() => a.Z.generateTextForNode(null == t ? void 0 : t.root), [t]);
                return n.length ? n : null
            }
        },
        14461: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return usePlaylistPlayingState
                }
            });
            var s = n(81688),
                l = n(267),
                a = n(58061);

            function usePlaylistPlayingState(e) {
                let {
                    playlistId: t
                } = e, {
                    playing: n,
                    activePlaylistId: r,
                    loading: i
                } = (0, s.PZ)(), o = t === r;
                return {
                    isPlaying: o && n,
                    isActivePlaylist: o,
                    loading: i && o,
                    onPlayButtonClick: () => {
                        o ? (0, l.ID)() : (0, a.iy)(t)
                    }
                }
            }
        }
    }
]);