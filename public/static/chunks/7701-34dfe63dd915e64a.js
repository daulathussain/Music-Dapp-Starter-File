"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7701], {
        42241: function(p, g, $) {
            $.d(g, {
                YF: function() {
                    return useFloating
                },
                x7: function() {
                    return arrow
                }
            });
            var M = $(68326),
                _ = $(97355),
                S = $(97352),
                F = $(64353),
                I = "undefined" != typeof document ? S.useLayoutEffect : S.useEffect;

            function useFloating(p) {
                let {
                    middleware: g,
                    placement: $ = "bottom",
                    strategy: _ = "absolute",
                    whileElementsMounted: Z
                } = void 0 === p ? {} : p, K = S.useRef(null), V = S.useRef(null), B = function(p) {
                    let g = S.useRef(p);
                    return I(() => {
                        g.current = p
                    }), g
                }(Z), j = S.useRef(null), [U, Y] = S.useState({
                    x: null,
                    y: null,
                    strategy: _,
                    placement: $,
                    middlewareData: {}
                }), [G, X] = S.useState(g);
                ! function deepEqual(p, g) {
                    let $, M, _;
                    if (p === g) return !0;
                    if (typeof p != typeof g) return !1;
                    if ("function" == typeof p && p.toString() === g.toString()) return !0;
                    if (p && g && "object" == typeof p) {
                        if (Array.isArray(p)) {
                            if (($ = p.length) != g.length) return !1;
                            for (M = $; 0 != M--;)
                                if (!deepEqual(p[M], g[M])) return !1;
                            return !0
                        }
                        if (($ = (_ = Object.keys(p)).length) !== Object.keys(g).length) return !1;
                        for (M = $; 0 != M--;)
                            if (!Object.prototype.hasOwnProperty.call(g, _[M])) return !1;
                        for (M = $; 0 != M--;) {
                            let $ = _[M];
                            if (("_owner" !== $ || !p.$$typeof) && !deepEqual(p[$], g[$])) return !1
                        }
                        return !0
                    }
                    return p != p && g != g
                }(null == G ? void 0 : G.map(p => {
                    let {
                        options: g
                    } = p;
                    return g
                }), null == g ? void 0 : g.map(p => {
                    let {
                        options: g
                    } = p;
                    return g
                })) && X(g);
                let q = S.useCallback(() => {
                    K.current && V.current && (0, M.oo)(K.current, V.current, {
                        middleware: G,
                        placement: $,
                        strategy: _
                    }).then(p => {
                        J.current && F.flushSync(() => {
                            Y(p)
                        })
                    })
                }, [G, $, _]);
                I(() => {
                    J.current && q()
                }, [q]);
                let J = S.useRef(!1);
                I(() => (J.current = !0, () => {
                    J.current = !1
                }), []);
                let Q = S.useCallback(() => {
                        if ("function" == typeof j.current && (j.current(), j.current = null), K.current && V.current) {
                            if (B.current) {
                                let p = B.current(K.current, V.current, q);
                                j.current = p
                            } else q()
                        }
                    }, [q, B]),
                    ee = S.useCallback(p => {
                        K.current = p, Q()
                    }, [Q]),
                    et = S.useCallback(p => {
                        V.current = p, Q()
                    }, [Q]),
                    en = S.useMemo(() => ({
                        reference: K,
                        floating: V
                    }), []);
                return S.useMemo(() => ({ ...U,
                    update: q,
                    refs: en,
                    reference: ee,
                    floating: et
                }), [U, q, en, ee, et])
            }
            let arrow = p => {
                let {
                    element: g,
                    padding: $
                } = p;
                return {
                    name: "arrow",
                    options: p,
                    fn(p) {
                        if (Object.prototype.hasOwnProperty.call(g, "current")) {
                            if (null != g.current) return (0, _.x7)({
                                element: g.current,
                                padding: $
                            }).fn(p)
                        } else if (g) return (0, _.x7)({
                            element: g,
                            padding: $
                        }).fn(p);
                        return {}
                    }
                }
            }
        },
        84298: function(p, g, $) {
            let M;
            $.d(g, {
                VY: function() {
                    return tb
                },
                ck: function() {
                    return tx
                },
                Uv: function() {
                    return $d08ef79370b62062$export$602eac185826482c
                },
                fC: function() {
                    return $d08ef79370b62062$export$be92b6f5f03c0fe9
                },
                Tr: function() {
                    return $d08ef79370b62062$export$d7a01e11500dfb6f
                },
                tu: function() {
                    return tE
                },
                fF: function() {
                    return t$
                },
                xz: function() {
                    return tw
                }
            });
            var _ = $(84477),
                S = $(97352),
                F = $(28085),
                I = $(92634),
                Z = $(87992),
                K = $(43979),
                V = $(54065),
                B = $(49474),
                j = $(70776),
                U = $(78152);
            let Y = 0;

            function $3db38b7d1fb3fe6a$var$createFocusGuard() {
                let p = document.createElement("span");
                return p.setAttribute("data-radix-focus-guard", ""), p.tabIndex = 0, p.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", p
            }
            var G = $(43270);
            let X = "focusScope.autoFocusOnMount",
                q = "focusScope.autoFocusOnUnmount",
                J = {
                    bubbles: !1,
                    cancelable: !0
                },
                Q = (0, S.forwardRef)((p, g) => {
                    let {
                        loop: $ = !1,
                        trapped: M = !1,
                        onMountAutoFocus: F,
                        onUnmountAutoFocus: Z,
                        ...K
                    } = p, [B, j] = (0, S.useState)(null), U = (0, G.W)(F), Y = (0, G.W)(Z), Q = (0, S.useRef)(null), et = (0, I.e)(g, p => j(p)), en = (0, S.useRef)({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    (0, S.useEffect)(() => {
                        if (M) {
                            function handleFocusIn(p) {
                                if (en.paused || !B) return;
                                let g = p.target;
                                B.contains(g) ? Q.current = g : $d3863c46a17e8a28$var$focus(Q.current, {
                                    select: !0
                                })
                            }

                            function handleFocusOut(p) {
                                en.paused || !B || B.contains(p.relatedTarget) || $d3863c46a17e8a28$var$focus(Q.current, {
                                    select: !0
                                })
                            }
                            return document.addEventListener("focusin", handleFocusIn), document.addEventListener("focusout", handleFocusOut), () => {
                                document.removeEventListener("focusin", handleFocusIn), document.removeEventListener("focusout", handleFocusOut)
                            }
                        }
                    }, [M, B, en.paused]), (0, S.useEffect)(() => {
                        if (B) {
                            ee.add(en);
                            let p = document.activeElement,
                                g = B.contains(p);
                            if (!g) {
                                let g = new CustomEvent(X, J);
                                B.addEventListener(X, U), B.dispatchEvent(g), g.defaultPrevented || (function(p, {
                                    select: g = !1
                                } = {}) {
                                    let $ = document.activeElement;
                                    for (let M of p)
                                        if ($d3863c46a17e8a28$var$focus(M, {
                                                select: g
                                            }), document.activeElement !== $) return
                                }($d3863c46a17e8a28$var$getTabbableCandidates(B).filter(p => "A" !== p.tagName), {
                                    select: !0
                                }), document.activeElement === p && $d3863c46a17e8a28$var$focus(B))
                            }
                            return () => {
                                B.removeEventListener(X, U), setTimeout(() => {
                                    let g = new CustomEvent(q, J);
                                    B.addEventListener(q, Y), B.dispatchEvent(g), g.defaultPrevented || $d3863c46a17e8a28$var$focus(null != p ? p : document.body, {
                                        select: !0
                                    }), B.removeEventListener(q, Y), ee.remove(en)
                                }, 0)
                            }
                        }
                    }, [B, U, Y, en]);
                    let er = (0, S.useCallback)(p => {
                        if (!$ && !M || en.paused) return;
                        let g = "Tab" === p.key && !p.altKey && !p.ctrlKey && !p.metaKey,
                            _ = document.activeElement;
                        if (g && _) {
                            let g = p.currentTarget,
                                [M, S] = function(p) {
                                    let g = $d3863c46a17e8a28$var$getTabbableCandidates(p),
                                        $ = $d3863c46a17e8a28$var$findVisible(g, p),
                                        M = $d3863c46a17e8a28$var$findVisible(g.reverse(), p);
                                    return [$, M]
                                }(g),
                                F = M && S;
                            F ? p.shiftKey || _ !== S ? p.shiftKey && _ === M && (p.preventDefault(), $ && $d3863c46a17e8a28$var$focus(S, {
                                select: !0
                            })) : (p.preventDefault(), $ && $d3863c46a17e8a28$var$focus(M, {
                                select: !0
                            })) : _ === g && p.preventDefault()
                        }
                    }, [$, M, en.paused]);
                    return (0, S.createElement)(V.WV.div, (0, _.Z)({
                        tabIndex: -1
                    }, K, {
                        ref: et,
                        onKeyDown: er
                    }))
                });

            function $d3863c46a17e8a28$var$getTabbableCandidates(p) {
                let g = [],
                    $ = document.createTreeWalker(p, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: p => {
                            let g = "INPUT" === p.tagName && "hidden" === p.type;
                            return p.disabled || p.hidden || g ? NodeFilter.FILTER_SKIP : p.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; $.nextNode();) g.push($.currentNode);
                return g
            }

            function $d3863c46a17e8a28$var$findVisible(p, g) {
                for (let $ of p)
                    if (! function(p, {
                            upTo: g
                        }) {
                            if ("hidden" === getComputedStyle(p).visibility) return !0;
                            for (; p && (void 0 === g || p !== g);) {
                                if ("none" === getComputedStyle(p).display) return !0;
                                p = p.parentElement
                            }
                            return !1
                        }($, {
                            upTo: g
                        })) return $
            }

            function $d3863c46a17e8a28$var$focus(p, {
                select: g = !1
            } = {}) {
                if (p && p.focus) {
                    var $;
                    let M = document.activeElement;
                    p.focus({
                        preventScroll: !0
                    }), p !== M && ($ = p) instanceof HTMLInputElement && "select" in $ && g && p.select()
                }
            }
            let ee = (M = [], {
                add(p) {
                    let g = M[0];
                    p !== g && (null == g || g.pause()), (M = $d3863c46a17e8a28$var$arrayRemove(M, p)).unshift(p)
                },
                remove(p) {
                    var g;
                    null === (g = (M = $d3863c46a17e8a28$var$arrayRemove(M, p))[0]) || void 0 === g || g.resume()
                }
            });

            function $d3863c46a17e8a28$var$arrayRemove(p, g) {
                let $ = [...p],
                    M = $.indexOf(g);
                return -1 !== M && $.splice(M, 1), $
            }
            var et = $(17413),
                en = $(42241),
                er = $(68326),
                eo = $(97355);
            let ea = (0, S.forwardRef)((p, g) => {
                let {
                    children: $,
                    width: M = 10,
                    height: F = 5,
                    ...I
                } = p;
                return (0, S.createElement)(V.WV.svg, (0, _.Z)({}, I, {
                    ref: g,
                    width: M,
                    height: F,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), p.asChild ? $ : (0, S.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var ei = $(13964),
                el = $(18294);
            let ec = "Popper",
                [eu, ed] = (0, Z.b)(ec),
                [es, ef] = eu(ec),
                ep = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopePopper: $,
                        virtualRef: M,
                        ...F
                    } = p, Z = ef("PopperAnchor", $), K = (0, S.useRef)(null), B = (0, I.e)(g, K);
                    return (0, S.useEffect)(() => {
                        Z.onAnchorChange((null == M ? void 0 : M.current) || K.current)
                    }), M ? null : (0, S.createElement)(V.WV.div, (0, _.Z)({}, F, {
                        ref: B
                    }))
                }),
                em = "PopperContent",
                [eh, ev] = eu(em),
                [eg, ey] = eu(em, {
                    hasParent: !1,
                    positionUpdateFns: new Set
                }),
                ew = (0, S.forwardRef)((p, g) => {
                    var $, M, _, F, Z, K, B, j;
                    let {
                        __scopePopper: U,
                        side: Y = "bottom",
                        sideOffset: X = 0,
                        align: q = "center",
                        alignOffset: J = 0,
                        arrowPadding: Q = 0,
                        collisionBoundary: ee = [],
                        collisionPadding: et = 0,
                        sticky: ea = "partial",
                        hideWhenDetached: ec = !1,
                        avoidCollisions: eu = !0,
                        onPlaced: ed,
                        ...es
                    } = p, ep = ef(em, U), [ev, ew] = (0, S.useState)(null), eb = (0, I.e)(g, p => ew(p)), [ex, e$] = (0, S.useState)(null), eE = (0, el.t)(ex), eM = null !== ($ = null == eE ? void 0 : eE.width) && void 0 !== $ ? $ : 0, eC = null !== (M = null == eE ? void 0 : eE.height) && void 0 !== M ? M : 0, eR = "number" == typeof et ? et : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...et
                    }, e_ = Array.isArray(ee) ? ee : [ee], eP = e_.length > 0, eO = {
                        padding: eR,
                        boundary: e_.filter($cf1ac5d9fe0e8206$var$isNotNull),
                        altBoundary: eP
                    }, {
                        reference: eT,
                        floating: eA,
                        strategy: eD,
                        x: eS,
                        y: eL,
                        placement: ek,
                        middlewareData: eF,
                        update: eI
                    } = (0, en.YF)({
                        strategy: "fixed",
                        placement: Y + ("center" !== q ? "-" + q : ""),
                        whileElementsMounted: er.Me,
                        middleware: [$cf1ac5d9fe0e8206$var$anchorCssProperties(), (0, eo.cv)({
                            mainAxis: X + eC,
                            alignmentAxis: J
                        }), eu ? (0, eo.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === ea ? (0, eo.dr)() : void 0,
                            ...eO
                        }) : void 0, ex ? (0, en.x7)({
                            element: ex,
                            padding: Q
                        }) : void 0, eu ? (0, eo.RR)({ ...eO
                        }) : void 0, (0, eo.dp)({ ...eO,
                            apply: ({
                                elements: p,
                                availableWidth: g,
                                availableHeight: $
                            }) => {
                                p.floating.style.setProperty("--radix-popper-available-width", `${g}px`), p.floating.style.setProperty("--radix-popper-available-height", `${$}px`)
                            }
                        }), $cf1ac5d9fe0e8206$var$transformOrigin({
                            arrowWidth: eM,
                            arrowHeight: eC
                        }), ec ? (0, eo.Cp)({
                            strategy: "referenceHidden"
                        }) : void 0].filter($cf1ac5d9fe0e8206$var$isDefined)
                    });
                    (0, ei.b)(() => {
                        eT(ep.anchor)
                    }, [eT, ep.anchor]);
                    let eW = null !== eS && null !== eL,
                        [eH, eZ] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(ek),
                        eK = (0, G.W)(ed);
                    (0, ei.b)(() => {
                        eW && (null == eK || eK())
                    }, [eW, eK]);
                    let eV = null === (_ = eF.arrow) || void 0 === _ ? void 0 : _.x,
                        eN = null === (F = eF.arrow) || void 0 === F ? void 0 : F.y,
                        ez = (null === (Z = eF.arrow) || void 0 === Z ? void 0 : Z.centerOffset) !== 0,
                        [eB, ej] = (0, S.useState)();
                    (0, ei.b)(() => {
                        ev && ej(window.getComputedStyle(ev).zIndex)
                    }, [ev]);
                    let {
                        hasParent: eU,
                        positionUpdateFns: eY
                    } = ey(em, U), eG = !eU;
                    (0, S.useLayoutEffect)(() => {
                        if (!eG) return eY.add(eI), () => {
                            eY.delete(eI)
                        }
                    }, [eG, eY, eI]), (0, ei.b)(() => {
                        eG && eW && Array.from(eY).reverse().forEach(p => requestAnimationFrame(p))
                    }, [eG, eW, eY]);
                    let eX = {
                        "data-side": eH,
                        "data-align": eZ,
                        ...es,
                        ref: eb,
                        style: { ...es.style,
                            animation: eW ? void 0 : "none",
                            opacity: null !== (K = eF.hide) && void 0 !== K && K.referenceHidden ? 0 : void 0
                        }
                    };
                    return (0, S.createElement)("div", {
                        ref: eA,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            position: eD,
                            left: 0,
                            top: 0,
                            transform: eW ? `translate3d(${Math.round(eS)}px, ${Math.round(eL)}px, 0)` : "translate3d(0, -200%, 0)",
                            minWidth: "max-content",
                            zIndex: eB,
                            "--radix-popper-transform-origin": [null === (B = eF.transformOrigin) || void 0 === B ? void 0 : B.x, null === (j = eF.transformOrigin) || void 0 === j ? void 0 : j.y].join(" ")
                        },
                        dir: p.dir
                    }, (0, S.createElement)(eh, {
                        scope: U,
                        placedSide: eH,
                        onArrowChange: e$,
                        arrowX: eV,
                        arrowY: eN,
                        shouldHideArrow: ez
                    }, eG ? (0, S.createElement)(eg, {
                        scope: U,
                        hasParent: !0,
                        positionUpdateFns: eY
                    }, (0, S.createElement)(V.WV.div, eX)) : (0, S.createElement)(V.WV.div, eX)))
                }),
                eb = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                ex = (0, S.forwardRef)(function(p, g) {
                    let {
                        __scopePopper: $,
                        ...M
                    } = p, F = ev("PopperArrow", $), I = eb[F.placedSide];
                    return (0, S.createElement)("span", {
                        ref: F.onArrowChange,
                        style: {
                            position: "absolute",
                            left: F.arrowX,
                            top: F.arrowY,
                            [I]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[F.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[F.placedSide],
                            visibility: F.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, S.createElement)(ea, (0, _.Z)({}, M, {
                        ref: g,
                        style: { ...M.style,
                            display: "block"
                        }
                    })))
                });

            function $cf1ac5d9fe0e8206$var$isDefined(p) {
                return void 0 !== p
            }

            function $cf1ac5d9fe0e8206$var$isNotNull(p) {
                return null !== p
            }
            let $cf1ac5d9fe0e8206$var$anchorCssProperties = () => ({
                    name: "anchorCssProperties",
                    fn(p) {
                        let {
                            rects: g,
                            elements: $
                        } = p, {
                            width: M,
                            height: _
                        } = g.reference;
                        return $.floating.style.setProperty("--radix-popper-anchor-width", `${M}px`), $.floating.style.setProperty("--radix-popper-anchor-height", `${_}px`), {}
                    }
                }),
                $cf1ac5d9fe0e8206$var$transformOrigin = p => ({
                    name: "transformOrigin",
                    options: p,
                    fn(g) {
                        var $, M, _, S, F;
                        let {
                            placement: I,
                            rects: Z,
                            middlewareData: K
                        } = g, V = (null === ($ = K.arrow) || void 0 === $ ? void 0 : $.centerOffset) !== 0, B = V ? 0 : p.arrowWidth, j = V ? 0 : p.arrowHeight, [U, Y] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(I), G = {
                            start: "0%",
                            center: "50%",
                            end: "100%"
                        }[Y], X = (null !== (M = null === (_ = K.arrow) || void 0 === _ ? void 0 : _.x) && void 0 !== M ? M : 0) + B / 2, q = (null !== (S = null === (F = K.arrow) || void 0 === F ? void 0 : F.y) && void 0 !== S ? S : 0) + j / 2, J = "", Q = "";
                        return "bottom" === U ? (J = V ? G : `${X}px`, Q = `${-j}px`) : "top" === U ? (J = V ? G : `${X}px`, Q = `${Z.floating.height+j}px`) : "right" === U ? (J = `${-j}px`, Q = V ? G : `${q}px`) : "left" === U && (J = `${Z.floating.width+j}px`, Q = V ? G : `${q}px`), {
                            data: {
                                x: J,
                                y: Q
                            }
                        }
                    }
                });

            function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(p) {
                let [g, $ = "center"] = p.split("-");
                return [g, $]
            }
            let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = p => {
                let {
                    __scopePopper: g,
                    children: $
                } = p, [M, _] = (0, S.useState)(null);
                return (0, S.createElement)(es, {
                    scope: g,
                    anchor: M,
                    onAnchorChange: _
                }, $)
            };
            var e$ = $(35712),
                eE = $(53511),
                eM = $(64690),
                eC = $(29196),
                eR = $(13476),
                e_ = $(50249);
            let eP = ["Enter", " "],
                eO = ["ArrowUp", "PageDown", "End"],
                eT = ["ArrowDown", "PageUp", "Home", ...eO],
                eA = {
                    ltr: [...eP, "ArrowRight"],
                    rtl: [...eP, "ArrowLeft"]
                },
                eD = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                eS = "Menu",
                [eL, ek, eF] = (0, B.B)(eS),
                [eI, eW] = (0, Z.b)(eS, [eF, ed, eM.Pc]),
                eH = ed(),
                eZ = (0, eM.Pc)(),
                [eK, eV] = eI(eS),
                [eN, ez] = eI(eS),
                eB = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeMenu: $,
                        ...M
                    } = p, F = eH($);
                    return (0, S.createElement)(ep, (0, _.Z)({}, F, M, {
                        ref: g
                    }))
                }),
                ej = "MenuPortal",
                [eU, eY] = eI(ej, {
                    forceMount: void 0
                }),
                eG = "MenuContent",
                [eX, eq] = eI(eG),
                eJ = (0, S.forwardRef)((p, g) => {
                    let $ = eY(eG, p.__scopeMenu),
                        {
                            forceMount: M = $.forceMount,
                            ...F
                        } = p,
                        I = eV(eG, p.__scopeMenu),
                        Z = ez(eG, p.__scopeMenu);
                    return (0, S.createElement)(eL.Provider, {
                        scope: p.__scopeMenu
                    }, (0, S.createElement)(eE.z, {
                        present: M || I.open
                    }, (0, S.createElement)(eL.Slot, {
                        scope: p.__scopeMenu
                    }, Z.modal ? (0, S.createElement)(eQ, (0, _.Z)({}, F, {
                        ref: g
                    })) : (0, S.createElement)(e0, (0, _.Z)({}, F, {
                        ref: g
                    })))))
                }),
                eQ = (0, S.forwardRef)((p, g) => {
                    let $ = eV(eG, p.__scopeMenu),
                        M = (0, S.useRef)(null),
                        Z = (0, I.e)(g, M);
                    return (0, S.useEffect)(() => {
                        let p = M.current;
                        if (p) return (0, eR.Ry)(p)
                    }, []), (0, S.createElement)(e1, (0, _.Z)({}, p, {
                        ref: Z,
                        trapFocus: $.open,
                        disableOutsidePointerEvents: $.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, F.M)(p.onFocusOutside, p => p.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => $.onOpenChange(!1)
                    }))
                }),
                e0 = (0, S.forwardRef)((p, g) => {
                    let $ = eV(eG, p.__scopeMenu);
                    return (0, S.createElement)(e1, (0, _.Z)({}, p, {
                        ref: g,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => $.onOpenChange(!1)
                    }))
                }),
                e1 = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeMenu: $,
                        loop: M = !1,
                        trapFocus: Z,
                        onOpenAutoFocus: K,
                        onCloseAutoFocus: V,
                        disableOutsidePointerEvents: B,
                        onEntryFocus: j,
                        onEscapeKeyDown: G,
                        onPointerDownOutside: X,
                        onFocusOutside: q,
                        onInteractOutside: J,
                        onDismiss: ee,
                        disableOutsideScroll: et,
                        ...en
                    } = p, er = eV(eG, $), eo = ez(eG, $), ea = eH($), ei = eZ($), el = ek($), [ec, eu] = (0, S.useState)(null), ed = (0, S.useRef)(null), es = (0, I.e)(g, ed, er.onContentChange), ef = (0, S.useRef)(0), ep = (0, S.useRef)(""), em = (0, S.useRef)(0), eh = (0, S.useRef)(null), ev = (0, S.useRef)("right"), eg = (0, S.useRef)(0), ey = et ? e_.Z : S.Fragment, eb = et ? {
                        as: eC.g7,
                        allowPinchZoom: !0
                    } : void 0, handleTypeaheadSearch = p => {
                        var g, $;
                        let M = ep.current + p,
                            _ = el().filter(p => !p.disabled),
                            S = document.activeElement,
                            F = null === (g = _.find(p => p.ref.current === S)) || void 0 === g ? void 0 : g.textValue,
                            I = _.map(p => p.textValue),
                            Z = function(p, g, $) {
                                var M;
                                let _ = g.length > 1 && Array.from(g).every(p => p === g[0]),
                                    S = _ ? g[0] : g,
                                    F = $ ? p.indexOf($) : -1,
                                    I = (M = Math.max(F, 0), p.map((g, $) => p[(M + $) % p.length])),
                                    Z = 1 === S.length;
                                Z && (I = I.filter(p => p !== $));
                                let K = I.find(p => p.toLowerCase().startsWith(S.toLowerCase()));
                                return K !== $ ? K : void 0
                            }(I, M, F),
                            K = null === ($ = _.find(p => p.textValue === Z)) || void 0 === $ ? void 0 : $.ref.current;
                        ! function updateSearch(p) {
                            ep.current = p, window.clearTimeout(ef.current), "" !== p && (ef.current = window.setTimeout(() => updateSearch(""), 1e3))
                        }(M), K && setTimeout(() => K.focus())
                    };
                    (0, S.useEffect)(() => () => window.clearTimeout(ef.current), []), (0, S.useEffect)(() => {
                        var p, g;
                        let $ = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (p = $[0]) && void 0 !== p ? p : $3db38b7d1fb3fe6a$var$createFocusGuard()), document.body.insertAdjacentElement("beforeend", null !== (g = $[1]) && void 0 !== g ? g : $3db38b7d1fb3fe6a$var$createFocusGuard()), Y++, () => {
                            1 === Y && document.querySelectorAll("[data-radix-focus-guard]").forEach(p => p.remove()), Y--
                        }
                    }, []);
                    let ex = (0, S.useCallback)(p => {
                        var g, $;
                        let M = ev.current === (null === (g = eh.current) || void 0 === g ? void 0 : g.side);
                        return M && function(p, g) {
                            if (!g) return !1;
                            let $ = {
                                x: p.clientX,
                                y: p.clientY
                            };
                            return function(p, g) {
                                let {
                                    x: $,
                                    y: M
                                } = p, _ = !1;
                                for (let p = 0, S = g.length - 1; p < g.length; S = p++) {
                                    let F = g[p].x,
                                        I = g[p].y,
                                        Z = g[S].x,
                                        K = g[S].y,
                                        V = I > M != K > M && $ < (Z - F) * (M - I) / (K - I) + F;
                                    V && (_ = !_)
                                }
                                return _
                            }($, g)
                        }(p, null === ($ = eh.current) || void 0 === $ ? void 0 : $.area)
                    }, []);
                    return (0, S.createElement)(eX, {
                        scope: $,
                        searchRef: ep,
                        onItemEnter: (0, S.useCallback)(p => {
                            ex(p) && p.preventDefault()
                        }, [ex]),
                        onItemLeave: (0, S.useCallback)(p => {
                            var g;
                            ex(p) || (null === (g = ed.current) || void 0 === g || g.focus(), eu(null))
                        }, [ex]),
                        onTriggerLeave: (0, S.useCallback)(p => {
                            ex(p) && p.preventDefault()
                        }, [ex]),
                        pointerGraceTimerRef: em,
                        onPointerGraceIntentChange: (0, S.useCallback)(p => {
                            eh.current = p
                        }, [])
                    }, (0, S.createElement)(ey, eb, (0, S.createElement)(Q, {
                        asChild: !0,
                        trapped: Z,
                        onMountAutoFocus: (0, F.M)(K, p => {
                            var g;
                            p.preventDefault(), null === (g = ed.current) || void 0 === g || g.focus()
                        }),
                        onUnmountAutoFocus: V
                    }, (0, S.createElement)(U.XB, {
                        asChild: !0,
                        disableOutsidePointerEvents: B,
                        onEscapeKeyDown: G,
                        onPointerDownOutside: X,
                        onFocusOutside: q,
                        onInteractOutside: J,
                        onDismiss: ee
                    }, (0, S.createElement)(eM.fC, (0, _.Z)({
                        asChild: !0
                    }, ei, {
                        dir: eo.dir,
                        orientation: "vertical",
                        loop: M,
                        currentTabStopId: ec,
                        onCurrentTabStopIdChange: eu,
                        onEntryFocus: (0, F.M)(j, p => {
                            eo.isUsingKeyboardRef.current || p.preventDefault()
                        })
                    }), (0, S.createElement)(ew, (0, _.Z)({
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": $6cc32821e9371a1c$var$getOpenState(er.open),
                        "data-radix-menu-content": "",
                        dir: eo.dir
                    }, ea, en, {
                        ref: es,
                        style: {
                            outline: "none",
                            ...en.style
                        },
                        onKeyDown: (0, F.M)(en.onKeyDown, p => {
                            let g = p.target,
                                $ = g.closest("[data-radix-menu-content]") === p.currentTarget,
                                M = p.ctrlKey || p.altKey || p.metaKey,
                                _ = 1 === p.key.length;
                            $ && ("Tab" === p.key && p.preventDefault(), !M && _ && handleTypeaheadSearch(p.key));
                            let S = ed.current;
                            if (p.target !== S || !eT.includes(p.key)) return;
                            p.preventDefault();
                            let F = el().filter(p => !p.disabled),
                                I = F.map(p => p.ref.current);
                            eO.includes(p.key) && I.reverse(),
                                function(p) {
                                    let g = document.activeElement;
                                    for (let $ of p)
                                        if ($ === g || ($.focus(), document.activeElement !== g)) return
                                }(I)
                        }),
                        onBlur: (0, F.M)(p.onBlur, p => {
                            p.currentTarget.contains(p.target) || (window.clearTimeout(ef.current), ep.current = "")
                        }),
                        onPointerMove: (0, F.M)(p.onPointerMove, $6cc32821e9371a1c$var$whenMouse(p => {
                            let g = p.target,
                                $ = eg.current !== p.clientX;
                            if (p.currentTarget.contains(g) && $) {
                                let g = p.clientX > eg.current ? "right" : "left";
                                ev.current = g, eg.current = p.clientX
                            }
                        }))
                    })))))))
                }),
                e2 = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeMenu: $,
                        ...M
                    } = p;
                    return (0, S.createElement)(V.WV.div, (0, _.Z)({
                        role: "group"
                    }, M, {
                        ref: g
                    }))
                }),
                e6 = ((p, g) => {
                    let {
                        __scopeMenu: $,
                        ...M
                    } = p;
                    return (0, S.createElement)(V.WV.div, (0, _.Z)({}, M, {
                        ref: g
                    }))
                }, "MenuItem"),
                e8 = "menu.itemSelect",
                e3 = (0, S.forwardRef)((p, g) => {
                    let {
                        disabled: $ = !1,
                        onSelect: M,
                        ...Z
                    } = p, K = (0, S.useRef)(null), B = ez(e6, p.__scopeMenu), j = eq(e6, p.__scopeMenu), U = (0, I.e)(g, K), Y = (0, S.useRef)(!1);
                    return (0, S.createElement)(e7, (0, _.Z)({}, Z, {
                        ref: U,
                        disabled: $,
                        onClick: (0, F.M)(p.onClick, () => {
                            let p = K.current;
                            if (!$ && p) {
                                let g = new CustomEvent(e8, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                p.addEventListener(e8, p => null == M ? void 0 : M(p), {
                                    once: !0
                                }), (0, V.jH)(p, g), g.defaultPrevented ? Y.current = !1 : B.onClose()
                            }
                        }),
                        onPointerDown: g => {
                            var $;
                            null === ($ = p.onPointerDown) || void 0 === $ || $.call(p, g), Y.current = !0
                        },
                        onPointerUp: (0, F.M)(p.onPointerUp, p => {
                            var g;
                            Y.current || null === (g = p.currentTarget) || void 0 === g || g.click()
                        }),
                        onKeyDown: (0, F.M)(p.onKeyDown, p => {
                            let g = "" !== j.searchRef.current;
                            !$ && (!g || " " !== p.key) && eP.includes(p.key) && (p.currentTarget.click(), p.preventDefault())
                        })
                    }))
                }),
                e7 = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeMenu: $,
                        disabled: M = !1,
                        textValue: Z,
                        ...K
                    } = p, B = eq(e6, $), j = eZ($), U = (0, S.useRef)(null), Y = (0, I.e)(g, U), [G, X] = (0, S.useState)(!1), [q, J] = (0, S.useState)("");
                    return (0, S.useEffect)(() => {
                        let p = U.current;
                        if (p) {
                            var g;
                            J((null !== (g = p.textContent) && void 0 !== g ? g : "").trim())
                        }
                    }, [K.children]), (0, S.createElement)(eL.ItemSlot, {
                        scope: $,
                        disabled: M,
                        textValue: null != Z ? Z : q
                    }, (0, S.createElement)(eM.ck, (0, _.Z)({
                        asChild: !0
                    }, j, {
                        focusable: !M
                    }), (0, S.createElement)(V.WV.div, (0, _.Z)({
                        role: "menuitem",
                        "data-highlighted": G ? "" : void 0,
                        "aria-disabled": M || void 0,
                        "data-disabled": M ? "" : void 0
                    }, K, {
                        ref: Y,
                        onPointerMove: (0, F.M)(p.onPointerMove, $6cc32821e9371a1c$var$whenMouse(p => {
                            if (M) B.onItemLeave(p);
                            else if (B.onItemEnter(p), !p.defaultPrevented) {
                                let g = p.currentTarget;
                                g.focus()
                            }
                        })),
                        onPointerLeave: (0, F.M)(p.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(p => B.onItemLeave(p))),
                        onFocus: (0, F.M)(p.onFocus, () => X(!0)),
                        onBlur: (0, F.M)(p.onBlur, () => X(!1))
                    }))))
                }),
                [e9, e5] = ((p, g) => {
                    let {
                        checked: $ = !1,
                        onCheckedChange: M,
                        ...I
                    } = p;
                    return (0, S.createElement)(te, {
                        scope: p.__scopeMenu,
                        checked: $
                    }, (0, S.createElement)(e3, (0, _.Z)({
                        role: "menuitemcheckbox",
                        "aria-checked": $6cc32821e9371a1c$var$isIndeterminate($) ? "mixed" : $
                    }, I, {
                        ref: g,
                        "data-state": $6cc32821e9371a1c$var$getCheckedState($),
                        onSelect: (0, F.M)(I.onSelect, () => null == M ? void 0 : M(!!$6cc32821e9371a1c$var$isIndeterminate($) || !$), {
                            checkForDefaultPrevented: !1
                        })
                    })))
                }, eI("MenuRadioGroup", {
                    value: void 0,
                    onValueChange: () => {}
                })),
                e4 = ((p, g) => {
                    let {
                        value: $,
                        onValueChange: M,
                        ...F
                    } = p, I = (0, G.W)(M);
                    return (0, S.createElement)(e9, {
                        scope: p.__scopeMenu,
                        value: $,
                        onValueChange: I
                    }, (0, S.createElement)(e2, (0, _.Z)({}, F, {
                        ref: g
                    })))
                }, "MenuItemIndicator"),
                [te, tt] = eI(e4, {
                    checked: !1
                }),
                tn = ((p, g) => {
                    let {
                        __scopeMenu: $,
                        forceMount: M,
                        ...F
                    } = p, I = tt(e4, $);
                    return (0, S.createElement)(eE.z, {
                        present: M || $6cc32821e9371a1c$var$isIndeterminate(I.checked) || !0 === I.checked
                    }, (0, S.createElement)(V.WV.span, (0, _.Z)({}, F, {
                        ref: g,
                        "data-state": $6cc32821e9371a1c$var$getCheckedState(I.checked)
                    })))
                }, "MenuSub"),
                [tr, to] = eI(tn),
                ta = "MenuSubTrigger",
                ti = (0, S.forwardRef)((p, g) => {
                    let $ = eV(ta, p.__scopeMenu),
                        M = ez(ta, p.__scopeMenu),
                        Z = to(ta, p.__scopeMenu),
                        K = eq(ta, p.__scopeMenu),
                        V = (0, S.useRef)(null),
                        {
                            pointerGraceTimerRef: B,
                            onPointerGraceIntentChange: j
                        } = K,
                        U = {
                            __scopeMenu: p.__scopeMenu
                        },
                        Y = (0, S.useCallback)(() => {
                            V.current && window.clearTimeout(V.current), V.current = null
                        }, []);
                    return (0, S.useEffect)(() => Y, [Y]), (0, S.useEffect)(() => {
                        let p = B.current;
                        return () => {
                            window.clearTimeout(p), j(null)
                        }
                    }, [B, j]), (0, S.createElement)(eB, (0, _.Z)({
                        asChild: !0
                    }, U), (0, S.createElement)(e7, (0, _.Z)({
                        id: Z.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": $.open,
                        "aria-controls": Z.contentId,
                        "data-state": $6cc32821e9371a1c$var$getOpenState($.open)
                    }, p, {
                        ref: (0, I.F)(g, Z.onTriggerChange),
                        onClick: g => {
                            var M;
                            null === (M = p.onClick) || void 0 === M || M.call(p, g), p.disabled || g.defaultPrevented || (g.currentTarget.focus(), $.open || $.onOpenChange(!0))
                        },
                        onPointerMove: (0, F.M)(p.onPointerMove, $6cc32821e9371a1c$var$whenMouse(g => {
                            K.onItemEnter(g), g.defaultPrevented || p.disabled || $.open || V.current || (K.onPointerGraceIntentChange(null), V.current = window.setTimeout(() => {
                                $.onOpenChange(!0), Y()
                            }, 100))
                        })),
                        onPointerLeave: (0, F.M)(p.onPointerLeave, $6cc32821e9371a1c$var$whenMouse(p => {
                            var g, M;
                            Y();
                            let _ = null === (g = $.content) || void 0 === g ? void 0 : g.getBoundingClientRect();
                            if (_) {
                                let g = null === (M = $.content) || void 0 === M ? void 0 : M.dataset.side,
                                    S = "right" === g,
                                    F = _[S ? "left" : "right"],
                                    I = _[S ? "right" : "left"];
                                K.onPointerGraceIntentChange({
                                    area: [{
                                        x: p.clientX + (S ? -5 : 5),
                                        y: p.clientY
                                    }, {
                                        x: F,
                                        y: _.top
                                    }, {
                                        x: I,
                                        y: _.top
                                    }, {
                                        x: I,
                                        y: _.bottom
                                    }, {
                                        x: F,
                                        y: _.bottom
                                    }],
                                    side: g
                                }), window.clearTimeout(B.current), B.current = window.setTimeout(() => K.onPointerGraceIntentChange(null), 300)
                            } else {
                                if (K.onTriggerLeave(p), p.defaultPrevented) return;
                                K.onPointerGraceIntentChange(null)
                            }
                        })),
                        onKeyDown: (0, F.M)(p.onKeyDown, g => {
                            let _ = "" !== K.searchRef.current;
                            if (!p.disabled && (!_ || " " !== g.key) && eA[M.dir].includes(g.key)) {
                                var S;
                                $.onOpenChange(!0), null === (S = $.content) || void 0 === S || S.focus(), g.preventDefault()
                            }
                        })
                    })))
                }),
                tl = (0, S.forwardRef)((p, g) => {
                    let $ = eY(eG, p.__scopeMenu),
                        {
                            forceMount: M = $.forceMount,
                            ...Z
                        } = p,
                        K = eV(eG, p.__scopeMenu),
                        V = ez(eG, p.__scopeMenu),
                        B = to("MenuSubContent", p.__scopeMenu),
                        j = (0, S.useRef)(null),
                        U = (0, I.e)(g, j);
                    return (0, S.createElement)(eL.Provider, {
                        scope: p.__scopeMenu
                    }, (0, S.createElement)(eE.z, {
                        present: M || K.open
                    }, (0, S.createElement)(eL.Slot, {
                        scope: p.__scopeMenu
                    }, (0, S.createElement)(e1, (0, _.Z)({
                        id: B.contentId,
                        "aria-labelledby": B.triggerId
                    }, Z, {
                        ref: U,
                        align: "start",
                        side: "rtl" === V.dir ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: p => {
                            var g;
                            V.isUsingKeyboardRef.current && (null === (g = j.current) || void 0 === g || g.focus()), p.preventDefault()
                        },
                        onCloseAutoFocus: p => p.preventDefault(),
                        onFocusOutside: (0, F.M)(p.onFocusOutside, p => {
                            p.target !== B.trigger && K.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: (0, F.M)(p.onEscapeKeyDown, p => {
                            V.onClose(), p.preventDefault()
                        }),
                        onKeyDown: (0, F.M)(p.onKeyDown, p => {
                            let g = p.currentTarget.contains(p.target),
                                $ = eD[V.dir].includes(p.key);
                            if (g && $) {
                                var M;
                                K.onOpenChange(!1), null === (M = B.trigger) || void 0 === M || M.focus(), p.preventDefault()
                            }
                        })
                    })))))
                });

            function $6cc32821e9371a1c$var$getOpenState(p) {
                return p ? "open" : "closed"
            }

            function $6cc32821e9371a1c$var$isIndeterminate(p) {
                return "indeterminate" === p
            }

            function $6cc32821e9371a1c$var$getCheckedState(p) {
                return $6cc32821e9371a1c$var$isIndeterminate(p) ? "indeterminate" : p ? "checked" : "unchecked"
            }

            function $6cc32821e9371a1c$var$whenMouse(p) {
                return g => "mouse" === g.pointerType ? p(g) : void 0
            }
            let $6cc32821e9371a1c$export$be92b6f5f03c0fe9 = p => {
                    let {
                        __scopeMenu: g,
                        open: $ = !1,
                        children: M,
                        dir: _,
                        onOpenChange: F,
                        modal: I = !0
                    } = p, Z = eH(g), [K, V] = (0, S.useState)(null), B = (0, S.useRef)(!1), U = (0, G.W)(F), Y = (0, j.gm)(_);
                    return (0, S.useEffect)(() => {
                        let handleKeyDown = () => {
                                B.current = !0, document.addEventListener("pointerdown", handlePointer, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", handlePointer, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            handlePointer = () => B.current = !1;
                        return document.addEventListener("keydown", handleKeyDown, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", handleKeyDown, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", handlePointer, {
                                capture: !0
                            }), document.removeEventListener("pointermove", handlePointer, {
                                capture: !0
                            })
                        }
                    }, []), (0, S.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, Z, (0, S.createElement)(eK, {
                        scope: g,
                        open: $,
                        onOpenChange: U,
                        content: K,
                        onContentChange: V
                    }, (0, S.createElement)(eN, {
                        scope: g,
                        onClose: (0, S.useCallback)(() => U(!1), [U]),
                        isUsingKeyboardRef: B,
                        dir: Y,
                        modal: I
                    }, M)))
                },
                $6cc32821e9371a1c$export$602eac185826482c = p => {
                    let {
                        __scopeMenu: g,
                        forceMount: $,
                        children: M,
                        container: _
                    } = p, F = eV(ej, g);
                    return (0, S.createElement)(eU, {
                        scope: g,
                        forceMount: $
                    }, (0, S.createElement)(eE.z, {
                        present: $ || F.open
                    }, (0, S.createElement)(e$.h, {
                        asChild: !0,
                        container: _
                    }, M)))
                },
                $6cc32821e9371a1c$export$d7a01e11500dfb6f = p => {
                    let {
                        __scopeMenu: g,
                        children: $,
                        open: M = !1,
                        onOpenChange: _
                    } = p, F = eV(tn, g), I = eH(g), [Z, K] = (0, S.useState)(null), [V, B] = (0, S.useState)(null), j = (0, G.W)(_);
                    return (0, S.useEffect)(() => (!1 === F.open && j(!1), () => j(!1)), [F.open, j]), (0, S.createElement)($cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9, I, (0, S.createElement)(eK, {
                        scope: g,
                        open: M,
                        onOpenChange: j,
                        content: V,
                        onContentChange: B
                    }, (0, S.createElement)(tr, {
                        scope: g,
                        contentId: (0, et.M)(),
                        triggerId: (0, et.M)(),
                        trigger: Z,
                        onTriggerChange: K
                    }, $)))
                },
                tc = "DropdownMenu",
                [tu, td] = (0, Z.b)(tc, [eW]),
                ts = eW(),
                [tf, tp] = tu(tc),
                tm = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeDropdownMenu: $,
                        disabled: M = !1,
                        ...Z
                    } = p, K = tp("DropdownMenuTrigger", $), B = ts($);
                    return (0, S.createElement)(eB, (0, _.Z)({
                        asChild: !0
                    }, B), (0, S.createElement)(V.WV.button, (0, _.Z)({
                        type: "button",
                        id: K.triggerId,
                        "aria-haspopup": "menu",
                        "aria-expanded": K.open,
                        "aria-controls": K.open ? K.contentId : void 0,
                        "data-state": K.open ? "open" : "closed",
                        "data-disabled": M ? "" : void 0,
                        disabled: M
                    }, Z, {
                        ref: (0, I.F)(g, K.triggerRef),
                        onPointerDown: (0, F.M)(p.onPointerDown, p => {
                            M || 0 !== p.button || !1 !== p.ctrlKey || (K.onOpenToggle(), K.open || p.preventDefault())
                        }),
                        onKeyDown: (0, F.M)(p.onKeyDown, p => {
                            !M && (["Enter", " "].includes(p.key) && K.onOpenToggle(), "ArrowDown" === p.key && K.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(p.key) && p.preventDefault())
                        })
                    })))
                }),
                th = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeDropdownMenu: $,
                        ...M
                    } = p, I = tp("DropdownMenuContent", $), Z = ts($), K = (0, S.useRef)(!1);
                    return (0, S.createElement)(eJ, (0, _.Z)({
                        id: I.contentId,
                        "aria-labelledby": I.triggerId
                    }, Z, M, {
                        ref: g,
                        onCloseAutoFocus: (0, F.M)(p.onCloseAutoFocus, p => {
                            var g;
                            K.current || null === (g = I.triggerRef.current) || void 0 === g || g.focus(), K.current = !1, p.preventDefault()
                        }),
                        onInteractOutside: (0, F.M)(p.onInteractOutside, p => {
                            let g = p.detail.originalEvent,
                                $ = 0 === g.button && !0 === g.ctrlKey,
                                M = 2 === g.button || $;
                            (!I.modal || M) && (K.current = !0)
                        }),
                        style: { ...p.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                tv = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeDropdownMenu: $,
                        ...M
                    } = p, F = ts($);
                    return (0, S.createElement)(e3, (0, _.Z)({}, F, M, {
                        ref: g
                    }))
                }),
                tg = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeDropdownMenu: $,
                        ...M
                    } = p, F = ts($);
                    return (0, S.createElement)(ti, (0, _.Z)({}, F, M, {
                        ref: g
                    }))
                }),
                ty = (0, S.forwardRef)((p, g) => {
                    let {
                        __scopeDropdownMenu: $,
                        ...M
                    } = p, F = ts($);
                    return (0, S.createElement)(tl, (0, _.Z)({}, F, M, {
                        ref: g,
                        style: { ...p.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    }))
                }),
                $d08ef79370b62062$export$be92b6f5f03c0fe9 = p => {
                    let {
                        __scopeDropdownMenu: g,
                        children: $,
                        dir: M,
                        open: F,
                        defaultOpen: I,
                        onOpenChange: Z,
                        modal: V = !0
                    } = p, B = ts(g), j = (0, S.useRef)(null), [U = !1, Y] = (0, K.T)({
                        prop: F,
                        defaultProp: I,
                        onChange: Z
                    });
                    return (0, S.createElement)(tf, {
                        scope: g,
                        triggerId: (0, et.M)(),
                        triggerRef: j,
                        contentId: (0, et.M)(),
                        open: U,
                        onOpenChange: Y,
                        onOpenToggle: (0, S.useCallback)(() => Y(p => !p), [Y]),
                        modal: V
                    }, (0, S.createElement)($6cc32821e9371a1c$export$be92b6f5f03c0fe9, (0, _.Z)({}, B, {
                        open: U,
                        onOpenChange: Y,
                        dir: M,
                        modal: V
                    }), $))
                },
                tw = tm,
                $d08ef79370b62062$export$602eac185826482c = p => {
                    let {
                        __scopeDropdownMenu: g,
                        ...$
                    } = p, M = ts(g);
                    return (0, S.createElement)($6cc32821e9371a1c$export$602eac185826482c, (0, _.Z)({}, M, $))
                },
                tb = th,
                tx = tv,
                $d08ef79370b62062$export$d7a01e11500dfb6f = p => {
                    let {
                        __scopeDropdownMenu: g,
                        children: $,
                        open: M,
                        onOpenChange: F,
                        defaultOpen: I
                    } = p, Z = ts(g), [V = !1, B] = (0, K.T)({
                        prop: M,
                        defaultProp: I,
                        onChange: F
                    });
                    return (0, S.createElement)($6cc32821e9371a1c$export$d7a01e11500dfb6f, (0, _.Z)({}, Z, {
                        open: V,
                        onOpenChange: B
                    }), $)
                },
                t$ = tg,
                tE = ty
        },
        18294: function(p, g, $) {
            $.d(g, {
                t: function() {
                    return $db6c3485150b8e66$export$1ab7ae714698c4b8
                }
            });
            var M = $(97352),
                _ = $(13964);

            function $db6c3485150b8e66$export$1ab7ae714698c4b8(p) {
                let [g, $] = (0, M.useState)(void 0);
                return (0, _.b)(() => {
                    if (p) {
                        $({
                            width: p.offsetWidth,
                            height: p.offsetHeight
                        });
                        let g = new ResizeObserver(g => {
                            let M, _;
                            if (!Array.isArray(g) || !g.length) return;
                            let S = g[0];
                            if ("borderBoxSize" in S) {
                                let p = S.borderBoxSize,
                                    g = Array.isArray(p) ? p[0] : p;
                                M = g.inlineSize, _ = g.blockSize
                            } else M = p.offsetWidth, _ = p.offsetHeight;
                            $({
                                width: M,
                                height: _
                            })
                        });
                        return g.observe(p, {
                            box: "border-box"
                        }), () => g.unobserve(p)
                    }
                    $(void 0)
                }, [p]), g
            }
        },
        77757: function(p, g, $) {
            var M = $(74641);
            M.default, g.GS = M.useMedia, M.useMediaLayout
        },
        74641: function(p, g, $) {
            Object.defineProperty(g, "__esModule", {
                value: !0
            });
            var M = $(97352),
                _ = $(97167);
            g.mockMediaQueryList = {
                media: "",
                matches: !1,
                onchange: _.noop,
                addListener: _.noop,
                removeListener: _.noop,
                addEventListener: _.noop,
                removeEventListener: _.noop,
                dispatchEvent: function(p) {
                    return !0
                }
            };
            var createUseMedia = function(p) {
                return function($, S) {
                    void 0 === S && (S = !1);
                    var F = M.useState(S),
                        I = F[0],
                        Z = F[1],
                        K = _.queryObjectToString($);
                    return p(function() {
                        var p = !0,
                            $ = "undefined" == typeof window ? g.mockMediaQueryList : window.matchMedia(K),
                            onChange = function() {
                                p && Z(!!$.matches)
                            };
                        return $.addListener(onChange), Z($.matches),
                            function() {
                                p = !1, $.removeListener(onChange)
                            }
                    }, [K]), I
                }
            };
            g.useMedia = createUseMedia(M.useEffect), g.useMediaLayout = createUseMedia(M.useLayoutEffect), g.default = g.useMedia
        },
        78760: function(p, g) {
            Object.defineProperty(g, "__esModule", {
                value: !0
            }), g.default = function(p) {
                return p.replace(/[A-Z]/g, function(p) {
                    return "-" + p.toLowerCase()
                }).toLowerCase()
            }
        },
        97167: function(p, g, $) {
            Object.defineProperty(g, "__esModule", {
                value: !0
            });
            var M = $(78760);
            g.camelToHyphen = M.default;
            var _ = $(14683);
            g.queryObjectToString = _.default;
            var S = $(90668);
            g.noop = S.default
        },
        90668: function(p, g) {
            Object.defineProperty(g, "__esModule", {
                value: !0
            }), g.default = function() {}
        },
        14683: function(p, g, $) {
            Object.defineProperty(g, "__esModule", {
                value: !0
            });
            var M = $(78760);
            g.default = function(p) {
                return "string" == typeof p ? p : Object.entries(p).map(function(p) {
                    var g = p[0],
                        $ = p[1],
                        _ = M.default(g),
                        S = $;
                    return "boolean" == typeof S ? S ? _ : "not " + _ : ("number" == typeof S && /[height|width]$/.test(_) && (S += "px"), "(" + _ + ": " + S + ")")
                }).join(" and ")
            }
        },
        97355: function(p, g, $) {
            function t(p) {
                return p.split("-")[0]
            }

            function e(p) {
                return p.split("-")[1]
            }

            function n(p) {
                return ["top", "bottom"].includes(t(p)) ? "x" : "y"
            }

            function r(p) {
                return "y" === p ? "height" : "width"
            }

            function i(p, g, $) {
                let M, {
                        reference: _,
                        floating: S
                    } = p,
                    F = _.x + _.width / 2 - S.width / 2,
                    I = _.y + _.height / 2 - S.height / 2,
                    Z = n(g),
                    K = r(Z),
                    V = _[K] / 2 - S[K] / 2,
                    B = "x" === Z;
                switch (t(g)) {
                    case "top":
                        M = {
                            x: F,
                            y: _.y - S.height
                        };
                        break;
                    case "bottom":
                        M = {
                            x: F,
                            y: _.y + _.height
                        };
                        break;
                    case "right":
                        M = {
                            x: _.x + _.width,
                            y: I
                        };
                        break;
                    case "left":
                        M = {
                            x: _.x - S.width,
                            y: I
                        };
                        break;
                    default:
                        M = {
                            x: _.x,
                            y: _.y
                        }
                }
                switch (e(g)) {
                    case "start":
                        M[Z] -= V * ($ && B ? -1 : 1);
                        break;
                    case "end":
                        M[Z] += V * ($ && B ? -1 : 1)
                }
                return M
            }
            $.d(g, {
                Cp: function() {
                    return P
                },
                JB: function() {
                    return l
                },
                RR: function() {
                    return b
                },
                cv: function() {
                    return T
                },
                dp: function() {
                    return k
                },
                dr: function() {
                    return L
                },
                oo: function() {
                    return o
                },
                uY: function() {
                    return D
                },
                x7: function() {
                    return m
                }
            });
            let o = async (p, g, $) => {
                let {
                    placement: M = "bottom",
                    strategy: _ = "absolute",
                    middleware: S = [],
                    platform: F
                } = $, I = await (null == F.isRTL ? void 0 : F.isRTL(g)), Z = await F.getElementRects({
                    reference: p,
                    floating: g,
                    strategy: _
                }), {
                    x: K,
                    y: V
                } = i(Z, M, I), B = M, j = {}, U = 0;
                for (let $ = 0; $ < S.length; $++) {
                    let {
                        name: Y,
                        fn: G
                    } = S[$], {
                        x: X,
                        y: q,
                        data: J,
                        reset: Q
                    } = await G({
                        x: K,
                        y: V,
                        initialPlacement: M,
                        placement: B,
                        strategy: _,
                        middlewareData: j,
                        rects: Z,
                        platform: F,
                        elements: {
                            reference: p,
                            floating: g
                        }
                    });
                    K = null != X ? X : K, V = null != q ? q : V, j = { ...j,
                        [Y]: { ...j[Y],
                            ...J
                        }
                    }, Q && U <= 50 && (U++, "object" == typeof Q && (Q.placement && (B = Q.placement), Q.rects && (Z = !0 === Q.rects ? await F.getElementRects({
                        reference: p,
                        floating: g,
                        strategy: _
                    }) : Q.rects), {
                        x: K,
                        y: V
                    } = i(Z, B, I)), $ = -1)
                }
                return {
                    x: K,
                    y: V,
                    placement: B,
                    strategy: _,
                    middlewareData: j
                }
            };

            function a(p) {
                return "number" != typeof p ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...p
                } : {
                    top: p,
                    right: p,
                    bottom: p,
                    left: p
                }
            }

            function l(p) {
                return { ...p,
                    top: p.y,
                    left: p.x,
                    right: p.x + p.width,
                    bottom: p.y + p.height
                }
            }
            async function s(p, g) {
                var $;
                void 0 === g && (g = {});
                let {
                    x: M,
                    y: _,
                    platform: S,
                    rects: F,
                    elements: I,
                    strategy: Z
                } = p, {
                    boundary: K = "clippingAncestors",
                    rootBoundary: V = "viewport",
                    elementContext: B = "floating",
                    altBoundary: j = !1,
                    padding: U = 0
                } = g, Y = a(U), G = I[j ? "floating" === B ? "reference" : "floating" : B], X = l(await S.getClippingRect({
                    element: null == ($ = await (null == S.isElement ? void 0 : S.isElement(G))) || $ ? G : G.contextElement || await (null == S.getDocumentElement ? void 0 : S.getDocumentElement(I.floating)),
                    boundary: K,
                    rootBoundary: V,
                    strategy: Z
                })), q = l(S.convertOffsetParentRelativeRectToViewportRelativeRect ? await S.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: "floating" === B ? { ...F.floating,
                        x: M,
                        y: _
                    } : F.reference,
                    offsetParent: await (null == S.getOffsetParent ? void 0 : S.getOffsetParent(I.floating)),
                    strategy: Z
                }) : F[B]);
                return {
                    top: X.top - q.top + Y.top,
                    bottom: q.bottom - X.bottom + Y.bottom,
                    left: X.left - q.left + Y.left,
                    right: q.right - X.right + Y.right
                }
            }
            let M = Math.min,
                _ = Math.max,
                m = p => ({
                    name: "arrow",
                    options: p,
                    async fn(g) {
                        let {
                            element: $,
                            padding: S = 0
                        } = null != p ? p : {}, {
                            x: F,
                            y: I,
                            placement: Z,
                            rects: K,
                            platform: V
                        } = g;
                        if (null == $) return {};
                        let B = a(S),
                            j = {
                                x: F,
                                y: I
                            },
                            U = n(Z),
                            Y = e(Z),
                            G = r(U),
                            X = await V.getDimensions($),
                            q = "y" === U ? "top" : "left",
                            J = "y" === U ? "bottom" : "right",
                            Q = K.reference[G] + K.reference[U] - j[U] - K.floating[G],
                            ee = j[U] - K.reference[U],
                            et = await (null == V.getOffsetParent ? void 0 : V.getOffsetParent($)),
                            en = et ? "y" === U ? et.clientHeight || 0 : et.clientWidth || 0 : 0;
                        0 === en && (en = K.floating[G]);
                        let er = B[q],
                            eo = en - X[G] - B[J],
                            ea = en / 2 - X[G] / 2 + (Q / 2 - ee / 2),
                            ei = _(er, M(ea, eo)),
                            el = ("start" === Y ? B[q] : B[J]) > 0 && ea !== ei && K.reference[G] <= K.floating[G];
                        return {
                            [U]: j[U] - (el ? ea < er ? er - ea : eo - ea : 0),
                            data: {
                                [U]: ei,
                                centerOffset: ea - ei
                            }
                        }
                    }
                }),
                S = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function d(p) {
                return p.replace(/left|right|bottom|top/g, p => S[p])
            }
            let F = {
                start: "end",
                end: "start"
            };

            function y(p) {
                return p.replace(/start|end/g, p => F[p])
            }
            let I = ["top", "right", "bottom", "left"];
            I.reduce((p, g) => p.concat(g, g + "-start", g + "-end"), []);
            let b = function(p) {
                return void 0 === p && (p = {}), {
                    name: "flip",
                    options: p,
                    async fn(g) {
                        var $, M, _, S;
                        let {
                            placement: F,
                            middlewareData: I,
                            rects: Z,
                            initialPlacement: K,
                            platform: V,
                            elements: B
                        } = g, {
                            mainAxis: j = !0,
                            crossAxis: U = !0,
                            fallbackPlacements: Y,
                            fallbackStrategy: G = "bestFit",
                            flipAlignment: X = !0,
                            ...q
                        } = p, J = t(F), Q = Y || (J !== K && X ? function(p) {
                            let g = d(p);
                            return [y(p), g, y(g)]
                        }(K) : [d(K)]), ee = [K, ...Q], et = await s(g, q), en = [], er = (null == ($ = I.flip) ? void 0 : $.overflows) || [];
                        if (j && en.push(et[J]), U) {
                            let {
                                main: p,
                                cross: g
                            } = function(p, g, $) {
                                void 0 === $ && ($ = !1);
                                let M = e(p),
                                    _ = n(p),
                                    S = r(_),
                                    F = "x" === _ ? M === ($ ? "end" : "start") ? "right" : "left" : "start" === M ? "bottom" : "top";
                                return g.reference[S] > g.floating[S] && (F = d(F)), {
                                    main: F,
                                    cross: d(F)
                                }
                            }(F, Z, await (null == V.isRTL ? void 0 : V.isRTL(B.floating)));
                            en.push(et[p], et[g])
                        }
                        if (er = [...er, {
                                placement: F,
                                overflows: en
                            }], !en.every(p => p <= 0)) {
                            let p = (null != (M = null == (_ = I.flip) ? void 0 : _.index) ? M : 0) + 1,
                                g = ee[p];
                            if (g) return {
                                data: {
                                    index: p,
                                    overflows: er
                                },
                                reset: {
                                    placement: g
                                }
                            };
                            let $ = "bottom";
                            switch (G) {
                                case "bestFit":
                                    {
                                        let p = null == (S = er.map(p => [p, p.overflows.filter(p => p > 0).reduce((p, g) => p + g, 0)]).sort((p, g) => p[1] - g[1])[0]) ? void 0 : S[0].placement;p && ($ = p);
                                        break
                                    }
                                case "initialPlacement":
                                    $ = K
                            }
                            if (F !== $) return {
                                reset: {
                                    placement: $
                                }
                            }
                        }
                        return {}
                    }
                }
            };

            function R(p, g) {
                return {
                    top: p.top - g.height,
                    right: p.right - g.width,
                    bottom: p.bottom - g.height,
                    left: p.left - g.width
                }
            }

            function A(p) {
                return I.some(g => p[g] >= 0)
            }
            let P = function(p) {
                    let {
                        strategy: g = "referenceHidden",
                        ...$
                    } = void 0 === p ? {} : p;
                    return {
                        name: "hide",
                        async fn(p) {
                            let {
                                rects: M
                            } = p;
                            switch (g) {
                                case "referenceHidden":
                                    {
                                        let g = R(await s(p, { ...$,
                                            elementContext: "reference"
                                        }), M.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: g,
                                                referenceHidden: A(g)
                                            }
                                        }
                                    }
                                case "escaped":
                                    {
                                        let g = R(await s(p, { ...$,
                                            altBoundary: !0
                                        }), M.floating);
                                        return {
                                            data: {
                                                escapedOffsets: g,
                                                escaped: A(g)
                                            }
                                        }
                                    }
                                default:
                                    return {}
                            }
                        }
                    }
                },
                T = function(p) {
                    return void 0 === p && (p = 0), {
                        name: "offset",
                        options: p,
                        async fn(g) {
                            let {
                                x: $,
                                y: M
                            } = g, _ = await async function(p, g) {
                                let {
                                    placement: $,
                                    platform: M,
                                    elements: _
                                } = p, S = await (null == M.isRTL ? void 0 : M.isRTL(_.floating)), F = t($), I = e($), Z = "x" === n($), K = ["left", "top"].includes(F) ? -1 : 1, V = S && Z ? -1 : 1, B = "function" == typeof g ? g(p) : g, {
                                    mainAxis: j,
                                    crossAxis: U,
                                    alignmentAxis: Y
                                } = "number" == typeof B ? {
                                    mainAxis: B,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...B
                                };
                                return I && "number" == typeof Y && (U = "end" === I ? -1 * Y : Y), Z ? {
                                    x: U * V,
                                    y: j * K
                                } : {
                                    x: j * K,
                                    y: U * V
                                }
                            }(g, p);
                            return {
                                x: $ + _.x,
                                y: M + _.y,
                                data: _
                            }
                        }
                    }
                };

            function O(p) {
                return "x" === p ? "y" : "x"
            }
            let D = function(p) {
                    return void 0 === p && (p = {}), {
                        name: "shift",
                        options: p,
                        async fn(g) {
                            let {
                                x: $,
                                y: S,
                                placement: F
                            } = g, {
                                mainAxis: I = !0,
                                crossAxis: Z = !1,
                                limiter: K = {
                                    fn: p => {
                                        let {
                                            x: g,
                                            y: $
                                        } = p;
                                        return {
                                            x: g,
                                            y: $
                                        }
                                    }
                                },
                                ...V
                            } = p, B = {
                                x: $,
                                y: S
                            }, j = await s(g, V), U = n(t(F)), Y = O(U), G = B[U], X = B[Y];
                            if (I) {
                                let p = "y" === U ? "bottom" : "right";
                                G = _(G + j["y" === U ? "top" : "left"], M(G, G - j[p]))
                            }
                            Z && (X = _(X + j["y" === Y ? "top" : "left"], M(X, X - j["y" === Y ? "bottom" : "right"])));
                            let q = K.fn({ ...g,
                                [U]: G,
                                [Y]: X
                            });
                            return { ...q,
                                data: {
                                    x: q.x - $,
                                    y: q.y - S
                                }
                            }
                        }
                    }
                },
                L = function(p) {
                    return void 0 === p && (p = {}), {
                        options: p,
                        fn(g) {
                            let {
                                x: $,
                                y: M,
                                placement: _,
                                rects: S,
                                middlewareData: F
                            } = g, {
                                offset: I = 0,
                                mainAxis: Z = !0,
                                crossAxis: K = !0
                            } = p, V = {
                                x: $,
                                y: M
                            }, B = n(_), j = O(B), U = V[B], Y = V[j], G = "function" == typeof I ? I({ ...S,
                                placement: _
                            }) : I, X = "number" == typeof G ? {
                                mainAxis: G,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...G
                            };
                            if (Z) {
                                let p = "y" === B ? "height" : "width",
                                    g = S.reference[B] - S.floating[p] + X.mainAxis,
                                    $ = S.reference[B] + S.reference[p] - X.mainAxis;
                                U < g ? U = g : U > $ && (U = $)
                            }
                            if (K) {
                                var q, J, Q, ee;
                                let p = "y" === B ? "width" : "height",
                                    g = ["top", "left"].includes(t(_)),
                                    $ = S.reference[j] - S.floating[p] + (g && null != (q = null == (J = F.offset) ? void 0 : J[j]) ? q : 0) + (g ? 0 : X.crossAxis),
                                    M = S.reference[j] + S.reference[p] + (g ? 0 : null != (Q = null == (ee = F.offset) ? void 0 : ee[j]) ? Q : 0) - (g ? X.crossAxis : 0);
                                Y < $ ? Y = $ : Y > M && (Y = M)
                            }
                            return {
                                [B]: U,
                                [j]: Y
                            }
                        }
                    }
                },
                k = function(p) {
                    return void 0 === p && (p = {}), {
                        name: "size",
                        options: p,
                        async fn(g) {
                            let $, M;
                            let {
                                placement: S,
                                rects: F,
                                platform: I,
                                elements: Z
                            } = g, {
                                apply: K,
                                ...V
                            } = p, B = await s(g, V), j = t(S), U = e(S);
                            "top" === j || "bottom" === j ? ($ = j, M = U === (await (null == I.isRTL ? void 0 : I.isRTL(Z.floating)) ? "start" : "end") ? "left" : "right") : (M = j, $ = "end" === U ? "top" : "bottom");
                            let Y = _(B.left, 0),
                                G = _(B.right, 0),
                                X = _(B.top, 0),
                                q = _(B.bottom, 0),
                                J = {
                                    availableHeight: F.floating.height - (["left", "right"].includes(S) ? 2 * (0 !== X || 0 !== q ? X + q : _(B.top, B.bottom)) : B[$]),
                                    availableWidth: F.floating.width - (["top", "bottom"].includes(S) ? 2 * (0 !== Y || 0 !== G ? Y + G : _(B.left, B.right)) : B[M])
                                },
                                Q = await I.getDimensions(Z.floating);
                            null == K || K({ ...g,
                                ...J
                            });
                            let ee = await I.getDimensions(Z.floating);
                            return Q.width !== ee.width || Q.height !== ee.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        68326: function(p, g, $) {
            $.d(g, {
                Me: function() {
                    return N
                },
                oo: function() {
                    return z
                }
            });
            var M = $(97355);

            function n(p) {
                return p && p.document && p.location && p.alert && p.setInterval
            }

            function o(p) {
                if (null == p) return window;
                if (!n(p)) {
                    let g = p.ownerDocument;
                    return g && g.defaultView || window
                }
                return p
            }

            function i(p) {
                return o(p).getComputedStyle(p)
            }

            function r(p) {
                return n(p) ? "" : p ? (p.nodeName || "").toLowerCase() : ""
            }

            function l() {
                let p = navigator.userAgentData;
                return null != p && p.brands ? p.brands.map(p => p.brand + "/" + p.version).join(" ") : navigator.userAgent
            }

            function c(p) {
                return p instanceof o(p).HTMLElement
            }

            function f(p) {
                return p instanceof o(p).Element
            }

            function s(p) {
                return "undefined" != typeof ShadowRoot && (p instanceof o(p).ShadowRoot || p instanceof ShadowRoot)
            }

            function u(p) {
                let {
                    overflow: g,
                    overflowX: $,
                    overflowY: M
                } = i(p);
                return /auto|scroll|overlay|hidden/.test(g + M + $)
            }

            function h(p) {
                let g = /firefox/i.test(l()),
                    $ = i(p);
                return "none" !== $.transform || "none" !== $.perspective || "paint" === $.contain || ["transform", "perspective"].includes($.willChange) || g && "filter" === $.willChange || g && !!$.filter && "none" !== $.filter
            }

            function a() {
                return !/^((?!chrome|android).)*safari/i.test(l())
            }
            let _ = Math.min,
                S = Math.max,
                F = Math.round;

            function w(p, g, $) {
                var M, _, S, I;
                void 0 === g && (g = !1), void 0 === $ && ($ = !1);
                let Z = p.getBoundingClientRect(),
                    K = 1,
                    V = 1;
                g && c(p) && (K = p.offsetWidth > 0 && F(Z.width) / p.offsetWidth || 1, V = p.offsetHeight > 0 && F(Z.height) / p.offsetHeight || 1);
                let B = f(p) ? o(p) : window,
                    j = !a() && $,
                    U = (Z.left + (j && null != (M = null == (_ = B.visualViewport) ? void 0 : _.offsetLeft) ? M : 0)) / K,
                    Y = (Z.top + (j && null != (S = null == (I = B.visualViewport) ? void 0 : I.offsetTop) ? S : 0)) / V,
                    G = Z.width / K,
                    X = Z.height / V;
                return {
                    width: G,
                    height: X,
                    top: Y,
                    right: U + G,
                    bottom: Y + X,
                    left: U,
                    x: U,
                    y: Y
                }
            }

            function v(p) {
                return ((p instanceof o(p).Node ? p.ownerDocument : p.document) || window.document).documentElement
            }

            function y(p) {
                return f(p) ? {
                    scrollLeft: p.scrollLeft,
                    scrollTop: p.scrollTop
                } : {
                    scrollLeft: p.pageXOffset,
                    scrollTop: p.pageYOffset
                }
            }

            function x(p) {
                return w(v(p)).left + y(p).scrollLeft
            }

            function L(p) {
                return "html" === r(p) ? p : p.assignedSlot || p.parentNode || (s(p) ? p.host : null) || v(p)
            }

            function R(p) {
                return c(p) && "fixed" !== getComputedStyle(p).position ? p.offsetParent : null
            }

            function T(p) {
                let g = o(p),
                    $ = R(p);
                for (; $ && ["table", "td", "th"].includes(r($)) && "static" === getComputedStyle($).position;) $ = R($);
                return $ && ("html" === r($) || "body" === r($) && "static" === getComputedStyle($).position && !h($)) ? g : $ || function(p) {
                    let g = L(p);
                    for (s(g) && (g = g.host); c(g) && !["html", "body"].includes(r(g));) {
                        if (h(g)) return g;
                        g = g.parentNode
                    }
                    return null
                }(p) || g
            }

            function W(p) {
                if (c(p)) return {
                    width: p.offsetWidth,
                    height: p.offsetHeight
                };
                let g = w(p);
                return {
                    width: g.width,
                    height: g.height
                }
            }

            function H(p, g) {
                var $;
                void 0 === g && (g = []);
                let M = function E(p) {
                        let g = L(p);
                        return ["html", "body", "#document"].includes(r(g)) ? p.ownerDocument.body : c(g) && u(g) ? g : E(g)
                    }(p),
                    _ = M === (null == ($ = p.ownerDocument) ? void 0 : $.body),
                    S = o(M),
                    F = _ ? [S].concat(S.visualViewport || [], u(M) ? M : []) : M,
                    I = g.concat(F);
                return _ ? I : I.concat(H(F))
            }

            function C(p, g, $) {
                return "viewport" === g ? (0, M.JB)(function(p, g) {
                    let $ = o(p),
                        M = v(p),
                        _ = $.visualViewport,
                        S = M.clientWidth,
                        F = M.clientHeight,
                        I = 0,
                        Z = 0;
                    if (_) {
                        S = _.width, F = _.height;
                        let p = a();
                        (p || !p && "fixed" === g) && (I = _.offsetLeft, Z = _.offsetTop)
                    }
                    return {
                        width: S,
                        height: F,
                        x: I,
                        y: Z
                    }
                }(p, $)) : f(g) ? function(p, g) {
                    let $ = w(p, !1, "fixed" === g),
                        M = $.top + p.clientTop,
                        _ = $.left + p.clientLeft;
                    return {
                        top: M,
                        left: _,
                        x: _,
                        y: M,
                        right: _ + p.clientWidth,
                        bottom: M + p.clientHeight,
                        width: p.clientWidth,
                        height: p.clientHeight
                    }
                }(g, $) : (0, M.JB)(function(p) {
                    var g;
                    let $ = v(p),
                        M = y(p),
                        _ = null == (g = p.ownerDocument) ? void 0 : g.body,
                        F = S($.scrollWidth, $.clientWidth, _ ? _.scrollWidth : 0, _ ? _.clientWidth : 0),
                        I = S($.scrollHeight, $.clientHeight, _ ? _.scrollHeight : 0, _ ? _.clientHeight : 0),
                        Z = -M.scrollLeft + x(p),
                        K = -M.scrollTop;
                    return "rtl" === i(_ || $).direction && (Z += S($.clientWidth, _ ? _.clientWidth : 0) - F), {
                        width: F,
                        height: I,
                        x: Z,
                        y: K
                    }
                }(v(p)))
            }
            let I = {
                getClippingRect: function(p) {
                    let {
                        element: g,
                        boundary: $,
                        rootBoundary: M,
                        strategy: F
                    } = p, I = [..."clippingAncestors" === $ ? function(p) {
                        let g = H(p),
                            $ = ["absolute", "fixed"].includes(i(p).position) && c(p) ? T(p) : p;
                        return f($) ? g.filter(p => f(p) && function(p, g) {
                            let $ = null == g.getRootNode ? void 0 : g.getRootNode();
                            if (p.contains(g)) return !0;
                            if ($ && s($)) {
                                let $ = g;
                                do {
                                    if ($ && p === $) return !0;
                                    $ = $.parentNode || $.host
                                } while ($)
                            }
                            return !1
                        }(p, $) && "body" !== r(p)) : []
                    }(g) : [].concat($), M], Z = I[0], K = I.reduce((p, $) => {
                        let M = C(g, $, F);
                        return p.top = S(M.top, p.top), p.right = _(M.right, p.right), p.bottom = _(M.bottom, p.bottom), p.left = S(M.left, p.left), p
                    }, C(g, Z, F));
                    return {
                        width: K.right - K.left,
                        height: K.bottom - K.top,
                        x: K.left,
                        y: K.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(p) {
                    let {
                        rect: g,
                        offsetParent: $,
                        strategy: M
                    } = p, _ = c($), S = v($);
                    if ($ === S) return g;
                    let F = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        I = {
                            x: 0,
                            y: 0
                        };
                    if ((_ || !_ && "fixed" !== M) && (("body" !== r($) || u(S)) && (F = y($)), c($))) {
                        let p = w($, !0);
                        I.x = p.x + $.clientLeft, I.y = p.y + $.clientTop
                    }
                    return { ...g,
                        x: g.x - F.scrollLeft + I.x,
                        y: g.y - F.scrollTop + I.y
                    }
                },
                isElement: f,
                getDimensions: W,
                getOffsetParent: T,
                getDocumentElement: v,
                getElementRects: p => {
                    let {
                        reference: g,
                        floating: $,
                        strategy: M
                    } = p;
                    return {
                        reference: function(p, g, $) {
                            let M = c(g),
                                _ = v(g),
                                S = w(p, M && function(p) {
                                    let g = w(p);
                                    return F(g.width) !== p.offsetWidth || F(g.height) !== p.offsetHeight
                                }(g), "fixed" === $),
                                I = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                Z = {
                                    x: 0,
                                    y: 0
                                };
                            if (M || !M && "fixed" !== $) {
                                if (("body" !== r(g) || u(_)) && (I = y(g)), c(g)) {
                                    let p = w(g, !0);
                                    Z.x = p.x + g.clientLeft, Z.y = p.y + g.clientTop
                                } else _ && (Z.x = x(_))
                            }
                            return {
                                x: S.left + I.scrollLeft - Z.x,
                                y: S.top + I.scrollTop - Z.y,
                                width: S.width,
                                height: S.height
                            }
                        }(g, T($), M),
                        floating: { ...W($),
                            x: 0,
                            y: 0
                        }
                    }
                },
                getClientRects: p => Array.from(p.getClientRects()),
                isRTL: p => "rtl" === i(p).direction
            };

            function N(p, g, $, M) {
                void 0 === M && (M = {});
                let {
                    ancestorScroll: _ = !0,
                    ancestorResize: S = !0,
                    elementResize: F = !0,
                    animationFrame: I = !1
                } = M, Z = _ && !I, K = S && !I, V = Z || K ? [...f(p) ? H(p) : [], ...H(g)] : [];
                V.forEach(p => {
                    Z && p.addEventListener("scroll", $, {
                        passive: !0
                    }), K && p.addEventListener("resize", $)
                });
                let B, j = null;
                if (F) {
                    let M = !0;
                    j = new ResizeObserver(() => {
                        M || $(), M = !1
                    }), f(p) && !I && j.observe(p), j.observe(g)
                }
                let U = I ? w(p) : null;
                return I && function e() {
                    let g = w(p);
                    U && (g.x !== U.x || g.y !== U.y || g.width !== U.width || g.height !== U.height) && $(), U = g, B = requestAnimationFrame(e)
                }(), $(), () => {
                    var p;
                    V.forEach(p => {
                        Z && p.removeEventListener("scroll", $), K && p.removeEventListener("resize", $)
                    }), null == (p = j) || p.disconnect(), j = null, I && cancelAnimationFrame(B)
                }
            }
            let z = (p, g, $) => (0, M.oo)(p, g, {
                platform: I,
                ...$
            })
        }
    }
]);