"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4231], {
        25340: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return getNodeName
                }
            });

            function getNodeName(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }
        },
        20304: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return getWindow
                }
            });

            function getWindow(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }
        },
        2716: function(e, t, n) {
            n.d(t, {
                Re: function() {
                    return isHTMLElement
                },
                Zq: function() {
                    return isShadowRoot
                },
                kK: function() {
                    return isElement
                }
            });
            var o = n(20304);

            function isElement(e) {
                var t = (0, o.Z)(e).Element;
                return e instanceof t || e instanceof Element
            }

            function isHTMLElement(e) {
                var t = (0, o.Z)(e).HTMLElement;
                return e instanceof t || e instanceof HTMLElement
            }

            function isShadowRoot(e) {
                if ("undefined" == typeof ShadowRoot) return !1;
                var t = (0, o.Z)(e).ShadowRoot;
                return e instanceof t || e instanceof ShadowRoot
            }
        },
        40318: function(e, t, n) {
            var o = n(25340),
                r = n(2716);
            t.Z = {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(e) {
                    var t = e.state;
                    Object.keys(t.elements).forEach(function(e) {
                        var n = t.styles[e] || {},
                            i = t.attributes[e] || {},
                            a = t.elements[e];
                        (0, r.Re)(a) && (0, o.Z)(a) && (Object.assign(a.style, n), Object.keys(i).forEach(function(e) {
                            var t = i[e];
                            !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t)
                        }))
                    })
                },
                effect: function(e) {
                    var t = e.state,
                        n = {
                            popper: {
                                position: t.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(t.elements).forEach(function(e) {
                                var i = t.elements[e],
                                    a = t.attributes[e] || {},
                                    s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                        return e[t] = "", e
                                    }, {});
                                (0, r.Re)(i) && (0, o.Z)(i) && (Object.assign(i.style, s), Object.keys(a).forEach(function(e) {
                                    i.removeAttribute(e)
                                }))
                            })
                        }
                },
                requires: ["computeStyles"]
            }
        },
        84231: function(e, t, n) {
            n.d(t, {
                fi: function() {
                    return D
                }
            });
            var o, r, i, a, s, f = n(2716),
                c = Math.max,
                l = Math.min,
                p = Math.round,
                d = n(20304);

            function getUAString() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
                    return e.brand + "/" + e.version
                }).join(" ") : navigator.userAgent
            }

            function isLayoutViewport() {
                return !/^((?!chrome|android).)*safari/i.test(getUAString())
            }

            function getBoundingClientRect(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var o = e.getBoundingClientRect(),
                    r = 1,
                    i = 1;
                t && (0, f.Re)(e) && (r = e.offsetWidth > 0 && p(o.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && p(o.height) / e.offsetHeight || 1);
                var a = ((0, f.kK)(e) ? (0, d.Z)(e) : window).visualViewport,
                    s = !isLayoutViewport() && n,
                    c = (o.left + (s && a ? a.offsetLeft : 0)) / r,
                    l = (o.top + (s && a ? a.offsetTop : 0)) / i,
                    u = o.width / r,
                    m = o.height / i;
                return {
                    width: u,
                    height: m,
                    top: l,
                    right: c + u,
                    bottom: l + m,
                    left: c,
                    x: c,
                    y: l
                }
            }

            function getWindowScroll(e) {
                var t = (0, d.Z)(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }
            var u = n(25340);

            function getDocumentElement(e) {
                return (((0, f.kK)(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function getWindowScrollBarX(e) {
                return getBoundingClientRect(getDocumentElement(e)).left + getWindowScroll(e).scrollLeft
            }

            function getComputedStyle(e) {
                return (0, d.Z)(e).getComputedStyle(e)
            }

            function isScrollParent(e) {
                var t = getComputedStyle(e),
                    n = t.overflow,
                    o = t.overflowX,
                    r = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + r + o)
            }

            function getLayoutRect(e) {
                var t = getBoundingClientRect(e),
                    n = e.offsetWidth,
                    o = e.offsetHeight;
                return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - o) && (o = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: o
                }
            }

            function getParentNode(e) {
                return "html" === (0, u.Z)(e) ? e : e.assignedSlot || e.parentNode || ((0, f.Zq)(e) ? e.host : null) || getDocumentElement(e)
            }

            function listScrollParents(e, t) {
                void 0 === t && (t = []);
                var n, o = function getScrollParent(e) {
                        return ["html", "body", "#document"].indexOf((0, u.Z)(e)) >= 0 ? e.ownerDocument.body : (0, f.Re)(e) && isScrollParent(e) ? e : getScrollParent(getParentNode(e))
                    }(e),
                    r = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = (0, d.Z)(o),
                    a = r ? [i].concat(i.visualViewport || [], isScrollParent(o) ? o : []) : o,
                    s = t.concat(a);
                return r ? s : s.concat(listScrollParents(getParentNode(a)))
            }

            function getTrueOffsetParent(e) {
                return (0, f.Re)(e) && "fixed" !== getComputedStyle(e).position ? e.offsetParent : null
            }

            function getOffsetParent(e) {
                for (var t, n = (0, d.Z)(e), o = getTrueOffsetParent(e); o && (t = o, ["table", "td", "th"].indexOf((0, u.Z)(t)) >= 0) && "static" === getComputedStyle(o).position;) o = getTrueOffsetParent(o);
                return o && ("html" === (0, u.Z)(o) || "body" === (0, u.Z)(o) && "static" === getComputedStyle(o).position) ? n : o || function(e) {
                    var t = /firefox/i.test(getUAString());
                    if (/Trident/i.test(getUAString()) && (0, f.Re)(e) && "fixed" === getComputedStyle(e).position) return null;
                    var n = getParentNode(e);
                    for ((0, f.Zq)(n) && (n = n.host);
                        (0, f.Re)(n) && 0 > ["html", "body"].indexOf((0, u.Z)(n));) {
                        var o = getComputedStyle(n);
                        if ("none" !== o.transform || "none" !== o.perspective || "paint" === o.contain || -1 !== ["transform", "perspective"].indexOf(o.willChange) || t && "filter" === o.willChange || t && o.filter && "none" !== o.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || n
            }
            var m = "bottom",
                g = "right",
                h = "left",
                v = "auto",
                y = ["top", m, g, h],
                b = "start",
                w = "viewport",
                x = "popper",
                O = y.reduce(function(e, t) {
                    return e.concat([t + "-" + b, t + "-end"])
                }, []),
                P = [].concat(y, [v]).reduce(function(e, t) {
                    return e.concat([t, t + "-" + b, t + "-end"])
                }, []),
                S = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
                E = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

            function areValidElements() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some(function(e) {
                    return !(e && "function" == typeof e.getBoundingClientRect)
                })
            }
            var R = {
                passive: !0
            };

            function getBasePlacement(e) {
                return e.split("-")[0]
            }

            function getVariation(e) {
                return e.split("-")[1]
            }

            function getMainAxisFromPlacement(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function computeOffsets(e) {
                var t, n = e.reference,
                    o = e.element,
                    r = e.placement,
                    i = r ? getBasePlacement(r) : null,
                    a = r ? getVariation(r) : null,
                    s = n.x + n.width / 2 - o.width / 2,
                    f = n.y + n.height / 2 - o.height / 2;
                switch (i) {
                    case "top":
                        t = {
                            x: s,
                            y: n.y - o.height
                        };
                        break;
                    case m:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case g:
                        t = {
                            x: n.x + n.width,
                            y: f
                        };
                        break;
                    case h:
                        t = {
                            x: n.x - o.width,
                            y: f
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = i ? getMainAxisFromPlacement(i) : null;
                if (null != c) {
                    var l = "y" === c ? "height" : "width";
                    switch (a) {
                        case b:
                            t[c] = t[c] - (n[l] / 2 - o[l] / 2);
                            break;
                        case "end":
                            t[c] = t[c] + (n[l] / 2 - o[l] / 2)
                    }
                }
                return t
            }
            var j = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function mapToStyles(e) {
                var t, n, o, r, i, a, s, f = e.popper,
                    c = e.popperRect,
                    l = e.placement,
                    u = e.variation,
                    v = e.offsets,
                    y = e.position,
                    b = e.gpuAcceleration,
                    w = e.adaptive,
                    x = e.roundOffsets,
                    O = e.isFixed,
                    P = v.x,
                    S = void 0 === P ? 0 : P,
                    E = v.y,
                    R = void 0 === E ? 0 : E,
                    A = "function" == typeof x ? x({
                        x: S,
                        y: R
                    }) : {
                        x: S,
                        y: R
                    };
                S = A.x, R = A.y;
                var B = v.hasOwnProperty("x"),
                    C = v.hasOwnProperty("y"),
                    D = h,
                    M = "top",
                    T = window;
                if (w) {
                    var k = getOffsetParent(f),
                        Z = "clientHeight",
                        L = "clientWidth";
                    k === (0, d.Z)(f) && "static" !== getComputedStyle(k = getDocumentElement(f)).position && "absolute" === y && (Z = "scrollHeight", L = "scrollWidth"), ("top" === l || (l === h || l === g) && "end" === u) && (M = m, R -= (O && k === T && T.visualViewport ? T.visualViewport.height : k[Z]) - c.height, R *= b ? 1 : -1), (l === h || ("top" === l || l === m) && "end" === u) && (D = g, S -= (O && k === T && T.visualViewport ? T.visualViewport.width : k[L]) - c.width, S *= b ? 1 : -1)
                }
                var W = Object.assign({
                        position: y
                    }, w && j),
                    V = !0 === x ? (t = {
                        x: S,
                        y: R
                    }, n = (0, d.Z)(f), o = t.x, r = t.y, {
                        x: p(o * (i = n.devicePixelRatio || 1)) / i || 0,
                        y: p(r * i) / i || 0
                    }) : {
                        x: S,
                        y: R
                    };
                return (S = V.x, R = V.y, b) ? Object.assign({}, W, ((s = {})[M] = C ? "0" : "", s[D] = B ? "0" : "", s.transform = 1 >= (T.devicePixelRatio || 1) ? "translate(" + S + "px, " + R + "px)" : "translate3d(" + S + "px, " + R + "px, 0)", s)) : Object.assign({}, W, ((a = {})[M] = C ? R + "px" : "", a[D] = B ? S + "px" : "", a.transform = "", a))
            }
            var A = n(40318),
                B = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

            function getOppositePlacement(e) {
                return e.replace(/left|right|bottom|top/g, function(e) {
                    return B[e]
                })
            }
            var C = {
                start: "end",
                end: "start"
            };

            function getOppositeVariationPlacement(e) {
                return e.replace(/start|end/g, function(e) {
                    return C[e]
                })
            }

            function contains(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && (0, f.Zq)(n)) {
                    var o = t;
                    do {
                        if (o && e.isSameNode(o)) return !0;
                        o = o.parentNode || o.host
                    } while (o)
                }
                return !1
            }

            function rectToClientRect(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function getClientRectFromMixedType(e, t, n) {
                var o, r, i, a, s, l, p, u, m, g;
                return t === w ? rectToClientRect(function(e, t) {
                    var n = (0, d.Z)(e),
                        o = getDocumentElement(e),
                        r = n.visualViewport,
                        i = o.clientWidth,
                        a = o.clientHeight,
                        s = 0,
                        f = 0;
                    if (r) {
                        i = r.width, a = r.height;
                        var c = isLayoutViewport();
                        (c || !c && "fixed" === t) && (s = r.offsetLeft, f = r.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: s + getWindowScrollBarX(e),
                        y: f
                    }
                }(e, n)) : (0, f.kK)(t) ? ((o = getBoundingClientRect(t, !1, "fixed" === n)).top = o.top + t.clientTop, o.left = o.left + t.clientLeft, o.bottom = o.top + t.clientHeight, o.right = o.left + t.clientWidth, o.width = t.clientWidth, o.height = t.clientHeight, o.x = o.left, o.y = o.top, o) : rectToClientRect((r = getDocumentElement(e), a = getDocumentElement(r), s = getWindowScroll(r), l = null == (i = r.ownerDocument) ? void 0 : i.body, p = c(a.scrollWidth, a.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), u = c(a.scrollHeight, a.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), m = -s.scrollLeft + getWindowScrollBarX(r), g = -s.scrollTop, "rtl" === getComputedStyle(l || a).direction && (m += c(a.clientWidth, l ? l.clientWidth : 0) - p), {
                    width: p,
                    height: u,
                    x: m,
                    y: g
                }))
            }

            function getFreshSideObject() {
                return {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            }

            function mergePaddingObject(e) {
                return Object.assign({}, getFreshSideObject(), e)
            }

            function expandToHashMap(e, t) {
                return t.reduce(function(t, n) {
                    return t[n] = e, t
                }, {})
            }

            function detectOverflow(e, t) {
                void 0 === t && (t = {});
                var n, o, r, i, a, s, p, d = t,
                    h = d.placement,
                    v = void 0 === h ? e.placement : h,
                    b = d.strategy,
                    O = void 0 === b ? e.strategy : b,
                    P = d.boundary,
                    S = d.rootBoundary,
                    E = d.elementContext,
                    R = void 0 === E ? x : E,
                    j = d.altBoundary,
                    A = d.padding,
                    B = void 0 === A ? 0 : A,
                    C = mergePaddingObject("number" != typeof B ? B : expandToHashMap(B, y)),
                    D = e.rects.popper,
                    M = e.elements[void 0 !== j && j ? R === x ? "reference" : x : R],
                    T = (n = (0, f.kK)(M) ? M : M.contextElement || getDocumentElement(e.elements.popper), s = (a = [].concat("clippingParents" === (o = void 0 === P ? "clippingParents" : P) ? (r = listScrollParents(getParentNode(n)), i = ["absolute", "fixed"].indexOf(getComputedStyle(n).position) >= 0 && (0, f.Re)(n) ? getOffsetParent(n) : n, (0, f.kK)(i) ? r.filter(function(e) {
                        return (0, f.kK)(e) && contains(e, i) && "body" !== (0, u.Z)(e)
                    }) : []) : [].concat(o), [void 0 === S ? w : S]))[0], (p = a.reduce(function(e, t) {
                        var o = getClientRectFromMixedType(n, t, O);
                        return e.top = c(o.top, e.top), e.right = l(o.right, e.right), e.bottom = l(o.bottom, e.bottom), e.left = c(o.left, e.left), e
                    }, getClientRectFromMixedType(n, s, O))).width = p.right - p.left, p.height = p.bottom - p.top, p.x = p.left, p.y = p.top, p),
                    k = getBoundingClientRect(e.elements.reference),
                    Z = computeOffsets({
                        reference: k,
                        element: D,
                        strategy: "absolute",
                        placement: v
                    }),
                    L = rectToClientRect(Object.assign({}, D, Z)),
                    W = R === x ? L : k,
                    V = {
                        top: T.top - W.top + C.top,
                        bottom: W.bottom - T.bottom + C.bottom,
                        left: T.left - W.left + C.left,
                        right: W.right - T.right + C.right
                    },
                    H = e.modifiersData.offset;
                if (R === x && H) {
                    var N = H[v];
                    Object.keys(V).forEach(function(e) {
                        var t = [g, m].indexOf(e) >= 0 ? 1 : -1,
                            n = ["top", m].indexOf(e) >= 0 ? "y" : "x";
                        V[e] += N[n] * t
                    })
                }
                return V
            }

            function within(e, t, n) {
                return c(e, l(t, n))
            }

            function getSideOffsets(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function isAnySideFullyClipped(e) {
                return ["top", g, m, h].some(function(t) {
                    return e[t] >= 0
                })
            }
            var D = (i = void 0 === (r = (o = {
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            o = e.options,
                            r = o.scroll,
                            i = void 0 === r || r,
                            a = o.resize,
                            s = void 0 === a || a,
                            f = (0, d.Z)(t.elements.popper),
                            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return i && c.forEach(function(e) {
                                e.addEventListener("scroll", n.update, R)
                            }), s && f.addEventListener("resize", n.update, R),
                            function() {
                                i && c.forEach(function(e) {
                                    e.removeEventListener("scroll", n.update, R)
                                }), s && f.removeEventListener("resize", n.update, R)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = computeOffsets({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = n.gpuAcceleration,
                            r = n.adaptive,
                            i = n.roundOffsets,
                            a = void 0 === i || i,
                            s = {
                                placement: getBasePlacement(t.placement),
                                variation: getVariation(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: void 0 === o || o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, mapToStyles(Object.assign({}, s, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: void 0 === r || r,
                            roundOffsets: a
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, mapToStyles(Object.assign({}, s, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: a
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, A.Z, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.offset,
                            i = void 0 === r ? [0, 0] : r,
                            a = P.reduce(function(e, n) {
                                var o, r, a, s, f, c;
                                return e[n] = (o = t.rects, a = [h, "top"].indexOf(r = getBasePlacement(n)) >= 0 ? -1 : 1, f = (s = "function" == typeof i ? i(Object.assign({}, o, {
                                    placement: n
                                })) : i)[0], c = s[1], f = f || 0, c = (c || 0) * a, [h, g].indexOf(r) >= 0 ? {
                                    x: c,
                                    y: f
                                } : {
                                    x: f,
                                    y: c
                                }), e
                            }, {}),
                            s = a[t.placement],
                            f = s.x,
                            c = s.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += f, t.modifiersData.popperOffsets.y += c), t.modifiersData[o] = a
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name;
                        if (!t.modifiersData[o]._skip) {
                            for (var r = n.mainAxis, i = void 0 === r || r, a = n.altAxis, s = void 0 === a || a, f = n.fallbackPlacements, c = n.padding, l = n.boundary, p = n.rootBoundary, d = n.altBoundary, u = n.flipVariations, w = void 0 === u || u, x = n.allowedAutoPlacements, S = t.options.placement, E = getBasePlacement(S) === S, R = f || (E || !w ? [getOppositePlacement(S)] : function(e) {
                                    if (getBasePlacement(e) === v) return [];
                                    var t = getOppositePlacement(e);
                                    return [getOppositeVariationPlacement(e), t, getOppositeVariationPlacement(t)]
                                }(S)), j = [S].concat(R).reduce(function(e, n) {
                                    var o, r, i, a, s, f, d, u, m, g, h, b;
                                    return e.concat(getBasePlacement(n) === v ? (r = (o = {
                                        placement: n,
                                        boundary: l,
                                        rootBoundary: p,
                                        padding: c,
                                        flipVariations: w,
                                        allowedAutoPlacements: x
                                    }).placement, i = o.boundary, a = o.rootBoundary, s = o.padding, f = o.flipVariations, u = void 0 === (d = o.allowedAutoPlacements) ? P : d, 0 === (h = (g = (m = getVariation(r)) ? f ? O : O.filter(function(e) {
                                        return getVariation(e) === m
                                    }) : y).filter(function(e) {
                                        return u.indexOf(e) >= 0
                                    })).length && (h = g), Object.keys(b = h.reduce(function(e, n) {
                                        return e[n] = detectOverflow(t, {
                                            placement: n,
                                            boundary: i,
                                            rootBoundary: a,
                                            padding: s
                                        })[getBasePlacement(n)], e
                                    }, {})).sort(function(e, t) {
                                        return b[e] - b[t]
                                    })) : n)
                                }, []), A = t.rects.reference, B = t.rects.popper, C = new Map, D = !0, M = j[0], T = 0; T < j.length; T++) {
                                var k = j[T],
                                    Z = getBasePlacement(k),
                                    L = getVariation(k) === b,
                                    W = ["top", m].indexOf(Z) >= 0,
                                    V = W ? "width" : "height",
                                    H = detectOverflow(t, {
                                        placement: k,
                                        boundary: l,
                                        rootBoundary: p,
                                        altBoundary: d,
                                        padding: c
                                    }),
                                    N = W ? L ? g : h : L ? m : "top";
                                A[V] > B[V] && (N = getOppositePlacement(N));
                                var F = getOppositePlacement(N),
                                    q = [];
                                if (i && q.push(H[Z] <= 0), s && q.push(H[N] <= 0, H[F] <= 0), q.every(function(e) {
                                        return e
                                    })) {
                                    M = k, D = !1;
                                    break
                                }
                                C.set(k, q)
                            }
                            if (D)
                                for (var _ = w ? 3 : 1, _loop = function(e) {
                                        var t = j.find(function(t) {
                                            var n = C.get(t);
                                            if (n) return n.slice(0, e).every(function(e) {
                                                return e
                                            })
                                        });
                                        if (t) return M = t, "break"
                                    }, K = _; K > 0 && "break" !== _loop(K); K--);
                            t.placement !== M && (t.modifiersData[o]._skip = !0, t.placement = M, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            o = e.name,
                            r = n.mainAxis,
                            i = n.altAxis,
                            a = n.boundary,
                            s = n.rootBoundary,
                            f = n.altBoundary,
                            p = n.padding,
                            d = n.tether,
                            u = void 0 === d || d,
                            v = n.tetherOffset,
                            y = void 0 === v ? 0 : v,
                            w = detectOverflow(t, {
                                boundary: a,
                                rootBoundary: s,
                                padding: p,
                                altBoundary: f
                            }),
                            x = getBasePlacement(t.placement),
                            O = getVariation(t.placement),
                            P = !O,
                            S = getMainAxisFromPlacement(x),
                            E = "x" === S ? "y" : "x",
                            R = t.modifiersData.popperOffsets,
                            j = t.rects.reference,
                            A = t.rects.popper,
                            B = "function" == typeof y ? y(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : y,
                            C = "number" == typeof B ? {
                                mainAxis: B,
                                altAxis: B
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, B),
                            D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            M = {
                                x: 0,
                                y: 0
                            };
                        if (R) {
                            if (void 0 === r || r) {
                                var T, k = "y" === S ? "top" : h,
                                    Z = "y" === S ? m : g,
                                    L = "y" === S ? "height" : "width",
                                    W = R[S],
                                    V = W + w[k],
                                    H = W - w[Z],
                                    N = u ? -A[L] / 2 : 0,
                                    F = O === b ? j[L] : A[L],
                                    q = O === b ? -A[L] : -j[L],
                                    _ = t.elements.arrow,
                                    K = u && _ ? getLayoutRect(_) : {
                                        width: 0,
                                        height: 0
                                    },
                                    U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : getFreshSideObject(),
                                    X = U[k],
                                    I = U[Z],
                                    z = within(0, j[L], K[L]),
                                    Y = P ? j[L] / 2 - N - z - X - C.mainAxis : F - z - X - C.mainAxis,
                                    G = P ? -j[L] / 2 + N + z + I + C.mainAxis : q + z + I + C.mainAxis,
                                    J = t.elements.arrow && getOffsetParent(t.elements.arrow),
                                    Q = J ? "y" === S ? J.clientTop || 0 : J.clientLeft || 0 : 0,
                                    $ = null != (T = null == D ? void 0 : D[S]) ? T : 0,
                                    ee = W + Y - $ - Q,
                                    et = W + G - $,
                                    en = within(u ? l(V, ee) : V, W, u ? c(H, et) : H);
                                R[S] = en, M[S] = en - W
                            }
                            if (void 0 !== i && i) {
                                var eo, er, ei = "x" === S ? "top" : h,
                                    ea = "x" === S ? m : g,
                                    es = R[E],
                                    ef = "y" === E ? "height" : "width",
                                    ec = es + w[ei],
                                    el = es - w[ea],
                                    ep = -1 !== ["top", h].indexOf(x),
                                    ed = null != (er = null == D ? void 0 : D[E]) ? er : 0,
                                    eu = ep ? ec : es - j[ef] - A[ef] - ed + C.altAxis,
                                    em = ep ? es + j[ef] + A[ef] - ed - C.altAxis : el,
                                    eg = u && ep ? (eo = within(eu, es, em)) > em ? em : eo : within(u ? eu : ec, es, u ? em : el);
                                R[E] = eg, M[E] = eg - es
                            }
                            t.modifiersData[o] = M
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t, n, o = e.state,
                            r = e.name,
                            i = e.options,
                            a = o.elements.arrow,
                            s = o.modifiersData.popperOffsets,
                            f = getBasePlacement(o.placement),
                            c = getMainAxisFromPlacement(f),
                            l = [h, g].indexOf(f) >= 0 ? "height" : "width";
                        if (a && s) {
                            var p = mergePaddingObject("number" != typeof(t = "function" == typeof(t = i.padding) ? t(Object.assign({}, o.rects, {
                                    placement: o.placement
                                })) : t) ? t : expandToHashMap(t, y)),
                                d = getLayoutRect(a),
                                u = "y" === c ? "top" : h,
                                v = "y" === c ? m : g,
                                b = o.rects.reference[l] + o.rects.reference[c] - s[c] - o.rects.popper[l],
                                w = s[c] - o.rects.reference[c],
                                x = getOffsetParent(a),
                                O = x ? "y" === c ? x.clientHeight || 0 : x.clientWidth || 0 : 0,
                                P = p[u],
                                S = O - d[l] - p[v],
                                E = O / 2 - d[l] / 2 + (b / 2 - w / 2),
                                R = within(P, E, S);
                            o.modifiersData[r] = ((n = {})[c] = R, n.centerOffset = R - E, n)
                        }
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = e.options.element,
                            o = void 0 === n ? "[data-popper-arrow]" : n;
                        null != o && ("string" != typeof o || (o = t.elements.popper.querySelector(o))) && contains(t.elements.popper, o) && (t.elements.arrow = o)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            o = t.rects.reference,
                            r = t.rects.popper,
                            i = t.modifiersData.preventOverflow,
                            a = detectOverflow(t, {
                                elementContext: "reference"
                            }),
                            s = detectOverflow(t, {
                                altBoundary: !0
                            }),
                            f = getSideOffsets(a, o),
                            c = getSideOffsets(s, r, i),
                            l = isAnySideFullyClipped(f),
                            p = isAnySideFullyClipped(c);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: f,
                            popperEscapeOffsets: c,
                            isReferenceHidden: l,
                            hasPopperEscaped: p
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": l,
                            "data-popper-escaped": p
                        })
                    }
                }]
            }).defaultModifiers) ? [] : r, s = void 0 === (a = o.defaultOptions) ? E : a, function(e, t, n) {
                void 0 === n && (n = s);
                var o, r = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, E, s),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    a = [],
                    c = !1,
                    l = {
                        state: r,
                        setOptions: function(n) {
                            var o, c, p, d, u, m = "function" == typeof n ? n(r.options) : n;
                            cleanupModifierEffects(), r.options = Object.assign({}, s, r.options, m), r.scrollParents = {
                                reference: (0, f.kK)(e) ? listScrollParents(e) : e.contextElement ? listScrollParents(e.contextElement) : [],
                                popper: listScrollParents(t)
                            };
                            var g = (c = Object.keys(o = [].concat(i, r.options.modifiers).reduce(function(e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }, {})).map(function(e) {
                                return o[e]
                            }), p = new Map, d = new Set, u = [], c.forEach(function(e) {
                                p.set(e.name, e)
                            }), c.forEach(function(e) {
                                d.has(e.name) || function sort(e) {
                                    d.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach(function(e) {
                                        if (!d.has(e)) {
                                            var t = p.get(e);
                                            t && sort(t)
                                        }
                                    }), u.push(e)
                                }(e)
                            }), S.reduce(function(e, t) {
                                return e.concat(u.filter(function(e) {
                                    return e.phase === t
                                }))
                            }, []));
                            return r.orderedModifiers = g.filter(function(e) {
                                return e.enabled
                            }), r.orderedModifiers.forEach(function(e) {
                                var t = e.name,
                                    n = e.options,
                                    o = e.effect;
                                if ("function" == typeof o) {
                                    var i = o({
                                        state: r,
                                        name: t,
                                        instance: l,
                                        options: void 0 === n ? {} : n
                                    });
                                    a.push(i || function() {})
                                }
                            }), l.update()
                        },
                        forceUpdate: function() {
                            if (!c) {
                                var e, t, n, o, i, a, s, m, g, h, v, y, b = r.elements,
                                    w = b.reference,
                                    x = b.popper;
                                if (areValidElements(w, x)) {;
                                    r.rects = {
                                        reference: (t = getOffsetParent(x), n = "fixed" === r.options.strategy, o = (0, f.Re)(t), m = (0, f.Re)(t) && (a = p((i = t.getBoundingClientRect()).width) / t.offsetWidth || 1, s = p(i.height) / t.offsetHeight || 1, 1 !== a || 1 !== s), g = getDocumentElement(t), h = getBoundingClientRect(w, m, n), v = {
                                            scrollLeft: 0,
                                            scrollTop: 0
                                        }, y = {
                                            x: 0,
                                            y: 0
                                        }, (o || !o && !n) && (("body" !== (0, u.Z)(t) || isScrollParent(g)) && (v = (e = t) !== (0, d.Z)(e) && (0, f.Re)(e) ? {
                                            scrollLeft: e.scrollLeft,
                                            scrollTop: e.scrollTop
                                        } : getWindowScroll(e)), (0, f.Re)(t) ? (y = getBoundingClientRect(t, !0), y.x += t.clientLeft, y.y += t.clientTop) : g && (y.x = getWindowScrollBarX(g))), {
                                            x: h.left + v.scrollLeft - y.x,
                                            y: h.top + v.scrollTop - y.y,
                                            width: h.width,
                                            height: h.height
                                        }),
                                        popper: getLayoutRect(x)
                                    }, r.reset = !1, r.placement = r.options.placement, r.orderedModifiers.forEach(function(e) {
                                        return r.modifiersData[e.name] = Object.assign({}, e.data)
                                    });
                                    for (var O = 0; O < r.orderedModifiers.length; O++) {
                                        if (!0 === r.reset) {
                                            r.reset = !1, O = -1;
                                            continue
                                        }
                                        var P = r.orderedModifiers[O],
                                            S = P.fn,
                                            E = P.options,
                                            R = void 0 === E ? {} : E,
                                            j = P.name;
                                        "function" == typeof S && (r = S({
                                            state: r,
                                            options: R,
                                            name: j,
                                            instance: l
                                        }) || r)
                                    }
                                }
                            }
                        },
                        update: function() {
                            return o || (o = new Promise(function(e) {
                                Promise.resolve().then(function() {
                                    o = void 0, e(new Promise(function(e) {
                                        l.forceUpdate(), e(r)
                                    }))
                                })
                            })), o
                        },
                        destroy: function() {
                            cleanupModifierEffects(), c = !0
                        }
                    };
                if (!areValidElements(e, t)) return l;

                function cleanupModifierEffects() {
                    a.forEach(function(e) {
                        return e()
                    }), a = []
                }
                return l.setOptions(n).then(function(e) {
                    !c && n.onFirstUpdate && n.onFirstUpdate(e)
                }), l
            })
        }
    }
]);