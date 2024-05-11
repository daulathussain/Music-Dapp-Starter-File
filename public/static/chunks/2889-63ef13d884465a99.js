"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2889], {
        95067: function(e, t, n) {
            n.d(t, {
                Cp: function() {
                    return hide
                },
                RR: function() {
                    return flip
                },
                cv: function() {
                    return offset
                },
                dp: function() {
                    return size
                },
                dr: function() {
                    return limitShift
                },
                oo: function() {
                    return computePosition
                },
                uY: function() {
                    return shift
                },
                x7: function() {
                    return arrow
                }
            });
            var r = n(38760);

            function computeCoordsFromPlacement(e, t, n) {
                let o, {
                        reference: i,
                        floating: l
                    } = e,
                    a = (0, r.Qq)(t),
                    c = (0, r.Wh)(t),
                    s = (0, r.I4)(c),
                    u = (0, r.k3)(t),
                    f = "y" === a,
                    d = i.x + i.width / 2 - l.width / 2,
                    p = i.y + i.height / 2 - l.height / 2,
                    g = i[s] / 2 - l[s] / 2;
                switch (u) {
                    case "top":
                        o = {
                            x: d,
                            y: i.y - l.height
                        };
                        break;
                    case "bottom":
                        o = {
                            x: d,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        o = {
                            x: i.x + i.width,
                            y: p
                        };
                        break;
                    case "left":
                        o = {
                            x: i.x - l.width,
                            y: p
                        };
                        break;
                    default:
                        o = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch ((0, r.hp)(t)) {
                    case "start":
                        o[c] -= g * (n && f ? -1 : 1);
                        break;
                    case "end":
                        o[c] += g * (n && f ? -1 : 1)
                }
                return o
            }
            let computePosition = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, a = i.filter(Boolean), c = await (null == l.isRTL ? void 0 : l.isRTL(t)), s = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: u,
                    y: f
                } = computeCoordsFromPlacement(s, r, c), d = r, p = {}, g = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = a[n], {
                        x: h,
                        y: w,
                        data: v,
                        reset: y
                    } = await m({
                        x: u,
                        y: f,
                        initialPlacement: r,
                        placement: d,
                        strategy: o,
                        middlewareData: p,
                        rects: s,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    if (u = null != h ? h : u, f = null != w ? w : f, p = { ...p,
                            [i]: { ...p[i],
                                ...v
                            }
                        }, y && g <= 50) {
                        g++, "object" == typeof y && (y.placement && (d = y.placement), y.rects && (s = !0 === y.rects ? await l.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: o
                        }) : y.rects), {
                            x: u,
                            y: f
                        } = computeCoordsFromPlacement(s, d, c)), n = -1;
                        continue
                    }
                }
                return {
                    x: u,
                    y: f,
                    placement: d,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function detectOverflow(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: o,
                    y: i,
                    platform: l,
                    rects: a,
                    elements: c,
                    strategy: s
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: f = "viewport",
                    elementContext: d = "floating",
                    altBoundary: p = !1,
                    padding: g = 0
                } = (0, r.ku)(t, e), m = (0, r.yd)(g), h = c[p ? "floating" === d ? "reference" : "floating" : d], w = (0, r.JB)(await l.getClippingRect({
                    element: null == (n = await (null == l.isElement ? void 0 : l.isElement(h))) || n ? h : h.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(c.floating)),
                    boundary: u,
                    rootBoundary: f,
                    strategy: s
                })), v = "floating" === d ? { ...a.floating,
                    x: o,
                    y: i
                } : a.reference, y = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c.floating)), x = await (null == l.isElement ? void 0 : l.isElement(y)) && await (null == l.getScale ? void 0 : l.getScale(y)) || {
                    x: 1,
                    y: 1
                }, b = (0, r.JB)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: v,
                    offsetParent: y,
                    strategy: s
                }) : v);
                return {
                    top: (w.top - b.top + m.top) / x.y,
                    bottom: (b.bottom - w.bottom + m.bottom) / x.y,
                    left: (w.left - b.left + m.left) / x.x,
                    right: (b.right - w.right + m.right) / x.x
                }
            }
            let arrow = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: o,
                            placement: i,
                            rects: l,
                            platform: a,
                            elements: c
                        } = t, {
                            element: s,
                            padding: u = 0
                        } = (0, r.ku)(e, t) || {};
                        if (null == s) return {};
                        let f = (0, r.yd)(u),
                            d = {
                                x: n,
                                y: o
                            },
                            p = (0, r.Wh)(i),
                            g = (0, r.I4)(p),
                            m = await a.getDimensions(s),
                            h = "y" === p,
                            w = h ? "clientHeight" : "clientWidth",
                            v = l.reference[g] + l.reference[p] - d[p] - l.floating[g],
                            y = d[p] - l.reference[p],
                            x = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s)),
                            b = x ? x[w] : 0;
                        b && await (null == a.isElement ? void 0 : a.isElement(x)) || (b = c.floating[w] || l.floating[g]);
                        let E = b / 2 - m[g] / 2 - 1,
                            C = (0, r.VV)(f[h ? "top" : "left"], E),
                            T = (0, r.VV)(f[h ? "bottom" : "right"], E),
                            A = b - m[g] - T,
                            R = b / 2 - m[g] / 2 + (v / 2 - y / 2),
                            P = (0, r.uZ)(C, R, A),
                            O = null != (0, r.hp)(i) && R != P && l.reference[g] / 2 - (R < C ? C : T) - m[g] / 2 < 0,
                            S = O ? R < C ? C - R : A - R : 0;
                        return {
                            [p]: d[p] - S,
                            data: {
                                [p]: P,
                                centerOffset: R - P + S
                            }
                        }
                    }
                }),
                flip = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var n, o, i, l;
                            let {
                                placement: a,
                                middlewareData: c,
                                rects: s,
                                initialPlacement: u,
                                platform: f,
                                elements: d
                            } = t, {
                                mainAxis: p = !0,
                                crossAxis: g = !0,
                                fallbackPlacements: m,
                                fallbackStrategy: h = "bestFit",
                                fallbackAxisSideDirection: w = "none",
                                flipAlignment: v = !0,
                                ...y
                            } = (0, r.ku)(e, t), x = (0, r.k3)(a), b = (0, r.k3)(u) === u, E = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)), C = m || (b || !v ? [(0, r.pw)(u)] : (0, r.gy)(u));
                            m || "none" === w || C.push(...(0, r.KX)(u, v, w, E));
                            let T = [u, ...C],
                                A = await detectOverflow(t, y),
                                R = [],
                                P = (null == (n = c.flip) ? void 0 : n.overflows) || [];
                            if (p && R.push(A[x]), g) {
                                let e = (0, r.i8)(a, s, E);
                                R.push(A[e[0]], A[e[1]])
                            }
                            if (P = [...P, {
                                    placement: a,
                                    overflows: R
                                }], !R.every(e => e <= 0)) {
                                let e = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                                    t = T[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: P
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let n = null == (i = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                if (!n) switch (h) {
                                    case "bestFit":
                                        {
                                            let e = null == (l = P.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        n = u
                                }
                                if (a !== n) return {
                                    reset: {
                                        placement: n
                                    }
                                }
                            }
                            return {}
                        }
                    }
                };

            function getSideOffsets(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function isAnySideFullyClipped(e) {
                return r.mA.some(t => e[t] >= 0)
            }
            let hide = function(e) {
                return void 0 === e && (e = {}), {
                    name: "hide",
                    options: e,
                    async fn(t) {
                        let {
                            rects: n
                        } = t, {
                            strategy: o = "referenceHidden",
                            ...i
                        } = (0, r.ku)(e, t);
                        switch (o) {
                            case "referenceHidden":
                                {
                                    let e = await detectOverflow(t, { ...i,
                                            elementContext: "reference"
                                        }),
                                        r = getSideOffsets(e, n.reference);
                                    return {
                                        data: {
                                            referenceHiddenOffsets: r,
                                            referenceHidden: isAnySideFullyClipped(r)
                                        }
                                    }
                                }
                            case "escaped":
                                {
                                    let e = await detectOverflow(t, { ...i,
                                            altBoundary: !0
                                        }),
                                        r = getSideOffsets(e, n.floating);
                                    return {
                                        data: {
                                            escapedOffsets: r,
                                            escaped: isAnySideFullyClipped(r)
                                        }
                                    }
                                }
                            default:
                                return {}
                        }
                    }
                }
            };
            async function convertValueToCoords(e, t) {
                let {
                    placement: n,
                    platform: o,
                    elements: i
                } = e, l = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), a = (0, r.k3)(n), c = (0, r.hp)(n), s = "y" === (0, r.Qq)(n), u = ["left", "top"].includes(a) ? -1 : 1, f = l && s ? -1 : 1, d = (0, r.ku)(t, e), {
                    mainAxis: p,
                    crossAxis: g,
                    alignmentAxis: m
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...d
                };
                return c && "number" == typeof m && (g = "end" === c ? -1 * m : m), s ? {
                    x: g * f,
                    y: p * u
                } : {
                    x: p * u,
                    y: g * f
                }
            }
            let offset = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: r
                            } = t, o = await convertValueToCoords(t, e);
                            return {
                                x: n + o.x,
                                y: r + o.y,
                                data: o
                            }
                        }
                    }
                },
                shift = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: i
                            } = t, {
                                mainAxis: l = !0,
                                crossAxis: a = !1,
                                limiter: c = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: n
                                        } = e;
                                        return {
                                            x: t,
                                            y: n
                                        }
                                    }
                                },
                                ...s
                            } = (0, r.ku)(e, t), u = {
                                x: n,
                                y: o
                            }, f = await detectOverflow(t, s), d = (0, r.Qq)((0, r.k3)(i)), p = (0, r.Rn)(d), g = u[p], m = u[d];
                            if (l) {
                                let e = g + f["y" === p ? "top" : "left"],
                                    t = g - f["y" === p ? "bottom" : "right"];
                                g = (0, r.uZ)(e, g, t)
                            }
                            if (a) {
                                let e = "y" === d ? "top" : "left",
                                    t = "y" === d ? "bottom" : "right",
                                    n = m + f[e],
                                    o = m - f[t];
                                m = (0, r.uZ)(n, m, o)
                            }
                            let h = c.fn({ ...t,
                                [p]: g,
                                [d]: m
                            });
                            return { ...h,
                                data: {
                                    x: h.x - n,
                                    y: h.y - o
                                }
                            }
                        }
                    }
                },
                limitShift = function(e) {
                    return void 0 === e && (e = {}), {
                        options: e,
                        fn(t) {
                            let {
                                x: n,
                                y: o,
                                placement: i,
                                rects: l,
                                middlewareData: a
                            } = t, {
                                offset: c = 0,
                                mainAxis: s = !0,
                                crossAxis: u = !0
                            } = (0, r.ku)(e, t), f = {
                                x: n,
                                y: o
                            }, d = (0, r.Qq)(i), p = (0, r.Rn)(d), g = f[p], m = f[d], h = (0, r.ku)(c, t), w = "number" == typeof h ? {
                                mainAxis: h,
                                crossAxis: 0
                            } : {
                                mainAxis: 0,
                                crossAxis: 0,
                                ...h
                            };
                            if (s) {
                                let e = "y" === p ? "height" : "width",
                                    t = l.reference[p] - l.floating[e] + w.mainAxis,
                                    n = l.reference[p] + l.reference[e] - w.mainAxis;
                                g < t ? g = t : g > n && (g = n)
                            }
                            if (u) {
                                var v, y;
                                let e = "y" === p ? "width" : "height",
                                    t = ["top", "left"].includes((0, r.k3)(i)),
                                    n = l.reference[d] - l.floating[e] + (t && (null == (v = a.offset) ? void 0 : v[d]) || 0) + (t ? 0 : w.crossAxis),
                                    o = l.reference[d] + l.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? w.crossAxis : 0);
                                m < n ? m = n : m > o && (m = o)
                            }
                            return {
                                [p]: g,
                                [d]: m
                            }
                        }
                    }
                },
                size = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "size",
                        options: e,
                        async fn(t) {
                            let n, o;
                            let {
                                placement: i,
                                rects: l,
                                platform: a,
                                elements: c
                            } = t, {
                                apply: s = () => {},
                                ...u
                            } = (0, r.ku)(e, t), f = await detectOverflow(t, u), d = (0, r.k3)(i), p = (0, r.hp)(i), g = "y" === (0, r.Qq)(i), {
                                width: m,
                                height: h
                            } = l.floating;
                            "top" === d || "bottom" === d ? (n = d, o = p === (await (null == a.isRTL ? void 0 : a.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (o = d, n = "end" === p ? "top" : "bottom");
                            let w = h - f[n],
                                v = m - f[o],
                                y = !t.middlewareData.shift,
                                x = w,
                                b = v;
                            if (g) {
                                let e = m - f.left - f.right;
                                b = p || y ? (0, r.VV)(v, e) : e
                            } else {
                                let e = h - f.top - f.bottom;
                                x = p || y ? (0, r.VV)(w, e) : e
                            }
                            if (y && !p) {
                                let e = (0, r.Fp)(f.left, 0),
                                    t = (0, r.Fp)(f.right, 0),
                                    n = (0, r.Fp)(f.top, 0),
                                    o = (0, r.Fp)(f.bottom, 0);
                                g ? b = m - 2 * (0 !== e || 0 !== t ? e + t : (0, r.Fp)(f.left, f.right)) : x = h - 2 * (0 !== n || 0 !== o ? n + o : (0, r.Fp)(f.top, f.bottom))
                            }
                            await s({ ...t,
                                availableWidth: b,
                                availableHeight: x
                            });
                            let E = await a.getDimensions(c.floating);
                            return m !== E.width || h !== E.height ? {
                                reset: {
                                    rects: !0
                                }
                            } : {}
                        }
                    }
                }
        },
        17633: function(e, t, n) {
            n.d(t, {
                Me: function() {
                    return autoUpdate
                },
                oo: function() {
                    return computePosition
                }
            });
            var r = n(38760),
                o = n(95067);

            function getNodeName(e) {
                return isNode(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function getWindow(e) {
                var t;
                return (null == e ? void 0 : null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function getDocumentElement(e) {
                var t;
                return null == (t = (isNode(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function isNode(e) {
                return e instanceof Node || e instanceof getWindow(e).Node
            }

            function isElement(e) {
                return e instanceof Element || e instanceof getWindow(e).Element
            }

            function isHTMLElement(e) {
                return e instanceof HTMLElement || e instanceof getWindow(e).HTMLElement
            }

            function isShadowRoot(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof getWindow(e).ShadowRoot)
            }

            function isOverflowElement(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = getComputedStyle(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function isContainingBlock(e) {
                let t = isWebKit(),
                    n = getComputedStyle(e);
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function isWebKit() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function isLastTraversableNode(e) {
                return ["html", "body", "#document"].includes(getNodeName(e))
            }

            function getComputedStyle(e) {
                return getWindow(e).getComputedStyle(e)
            }

            function getNodeScroll(e) {
                return isElement(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function getParentNode(e) {
                if ("html" === getNodeName(e)) return e;
                let t = e.assignedSlot || e.parentNode || isShadowRoot(e) && e.host || getDocumentElement(e);
                return isShadowRoot(t) ? t.host : t
            }

            function getOverflowAncestors(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = function getNearestOverflowAncestor(e) {
                        let t = getParentNode(e);
                        return isLastTraversableNode(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : isHTMLElement(t) && isOverflowElement(t) ? t : getNearestOverflowAncestor(t)
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    i = getWindow(r);
                return o ? t.concat(i, i.visualViewport || [], isOverflowElement(r) ? r : []) : t.concat(r, getOverflowAncestors(r))
            }

            function getCssDimensions(e) {
                let t = getComputedStyle(e),
                    n = parseFloat(t.width) || 0,
                    o = parseFloat(t.height) || 0,
                    i = isHTMLElement(e),
                    l = i ? e.offsetWidth : n,
                    a = i ? e.offsetHeight : o,
                    c = (0, r.NM)(n) !== l || (0, r.NM)(o) !== a;
                return c && (n = l, o = a), {
                    width: n,
                    height: o,
                    $: c
                }
            }

            function unwrapElement(e) {
                return isElement(e) ? e : e.contextElement
            }

            function getScale(e) {
                let t = unwrapElement(e);
                if (!isHTMLElement(t)) return (0, r.ze)(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: o,
                        height: i,
                        $: l
                    } = getCssDimensions(t),
                    a = (l ? (0, r.NM)(n.width) : n.width) / o,
                    c = (l ? (0, r.NM)(n.height) : n.height) / i;
                return a && Number.isFinite(a) || (a = 1), c && Number.isFinite(c) || (c = 1), {
                    x: a,
                    y: c
                }
            }
            let i = (0, r.ze)(0);

            function getVisualOffsets(e) {
                let t = getWindow(e);
                return isWebKit() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : i
            }

            function getBoundingClientRect(e, t, n, o) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let l = e.getBoundingClientRect(),
                    a = unwrapElement(e),
                    c = (0, r.ze)(1);
                t && (o ? isElement(o) && (c = getScale(o)) : c = getScale(e));
                let s = (void 0 === (i = n) && (i = !1), o && (!i || o === getWindow(a)) && i) ? getVisualOffsets(a) : (0, r.ze)(0),
                    u = (l.left + s.x) / c.x,
                    f = (l.top + s.y) / c.y,
                    d = l.width / c.x,
                    p = l.height / c.y;
                if (a) {
                    let e = getWindow(a),
                        t = o && isElement(o) ? getWindow(o) : o,
                        n = e.frameElement;
                    for (; n && o && t !== e;) {
                        let e = getScale(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n),
                            o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        u *= e.x, f *= e.y, d *= e.x, p *= e.y, u += o, f += i, n = getWindow(n).frameElement
                    }
                }
                return (0, r.JB)({
                    width: d,
                    height: p,
                    x: u,
                    y: f
                })
            }

            function getWindowScrollBarX(e) {
                return getBoundingClientRect(getDocumentElement(e)).left + getNodeScroll(e).scrollLeft
            }

            function getClientRectFromClippingAncestor(e, t, n) {
                let o;
                if ("viewport" === t) o = function(e, t) {
                    let n = getWindow(e),
                        r = getDocumentElement(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        c = 0;
                    if (o) {
                        i = o.width, l = o.height;
                        let e = isWebKit();
                        (!e || e && "fixed" === t) && (a = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: l,
                        x: a,
                        y: c
                    }
                }(e, n);
                else if ("document" === t) o = function(e) {
                    let t = getDocumentElement(e),
                        n = getNodeScroll(e),
                        o = e.ownerDocument.body,
                        i = (0, r.Fp)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
                        l = (0, r.Fp)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight),
                        a = -n.scrollLeft + getWindowScrollBarX(e),
                        c = -n.scrollTop;
                    return "rtl" === getComputedStyle(o).direction && (a += (0, r.Fp)(t.clientWidth, o.clientWidth) - i), {
                        width: i,
                        height: l,
                        x: a,
                        y: c
                    }
                }(getDocumentElement(e));
                else if (isElement(t)) o = function(e, t) {
                    let n = getBoundingClientRect(e, !0, "fixed" === t),
                        o = n.top + e.clientTop,
                        i = n.left + e.clientLeft,
                        l = isHTMLElement(e) ? getScale(e) : (0, r.ze)(1),
                        a = e.clientWidth * l.x,
                        c = e.clientHeight * l.y,
                        s = i * l.x,
                        u = o * l.y;
                    return {
                        width: a,
                        height: c,
                        x: s,
                        y: u
                    }
                }(t, n);
                else {
                    let n = getVisualOffsets(e);
                    o = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return (0, r.JB)(o)
            }

            function getTrueOffsetParent(e, t) {
                return isHTMLElement(e) && "fixed" !== getComputedStyle(e).position ? t ? t(e) : e.offsetParent : null
            }

            function getOffsetParent(e, t) {
                let n = getWindow(e);
                if (!isHTMLElement(e)) return n;
                let r = getTrueOffsetParent(e, t);
                for (; r && ["table", "td", "th"].includes(getNodeName(r)) && "static" === getComputedStyle(r).position;) r = getTrueOffsetParent(r, t);
                return r && ("html" === getNodeName(r) || "body" === getNodeName(r) && "static" === getComputedStyle(r).position && !isContainingBlock(r)) ? n : r || function(e) {
                    let t = getParentNode(e);
                    for (; isHTMLElement(t) && !isLastTraversableNode(t);) {
                        if (isContainingBlock(t)) return t;
                        t = getParentNode(t)
                    }
                    return null
                }(e) || n
            }
            let getElementRects = async function(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: o
                    } = e, i = this.getOffsetParent || getOffsetParent, l = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let o = isHTMLElement(t),
                                i = getDocumentElement(t),
                                l = "fixed" === n,
                                a = getBoundingClientRect(e, !0, l, t),
                                c = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                s = (0, r.ze)(0);
                            if (o || !o && !l) {
                                if (("body" !== getNodeName(t) || isOverflowElement(i)) && (c = getNodeScroll(t)), o) {
                                    let e = getBoundingClientRect(t, !0, l, t);
                                    s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                } else i && (s.x = getWindowScrollBarX(i))
                            }
                            return {
                                x: a.left + c.scrollLeft - s.x,
                                y: a.top + c.scrollTop - s.y,
                                width: a.width,
                                height: a.height
                            }
                        }(t, await i(n), o),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await l(n)
                        }
                    }
                },
                l = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            rect: t,
                            offsetParent: n,
                            strategy: o
                        } = e, i = isHTMLElement(n), l = getDocumentElement(n);
                        if (n === l) return t;
                        let a = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = (0, r.ze)(1),
                            s = (0, r.ze)(0);
                        if ((i || !i && "fixed" !== o) && (("body" !== getNodeName(n) || isOverflowElement(l)) && (a = getNodeScroll(n)), isHTMLElement(n))) {
                            let e = getBoundingClientRect(n);
                            c = getScale(n), s.x = e.x + n.clientLeft, s.y = e.y + n.clientTop
                        }
                        return {
                            width: t.width * c.x,
                            height: t.height * c.y,
                            x: t.x * c.x - a.scrollLeft * c.x + s.x,
                            y: t.y * c.y - a.scrollTop * c.y + s.y
                        }
                    },
                    getDocumentElement: getDocumentElement,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: o,
                            strategy: i
                        } = e, l = "clippingAncestors" === n ? function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = getOverflowAncestors(e).filter(e => isElement(e) && "body" !== getNodeName(e)),
                                o = null,
                                i = "fixed" === getComputedStyle(e).position,
                                l = i ? getParentNode(e) : e;
                            for (; isElement(l) && !isLastTraversableNode(l);) {
                                let t = getComputedStyle(l),
                                    n = isContainingBlock(l);
                                n || "fixed" !== t.position || (o = null);
                                let a = i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || isOverflowElement(l) && !n && function hasFixedPositionAncestor(e, t) {
                                    let n = getParentNode(e);
                                    return !(n === t || !isElement(n) || isLastTraversableNode(n)) && ("fixed" === getComputedStyle(n).position || hasFixedPositionAncestor(n, t))
                                }(e, l);
                                a ? r = r.filter(e => e !== l) : o = t, l = getParentNode(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), a = [...l, o], c = a[0], s = a.reduce((e, n) => {
                            let o = getClientRectFromClippingAncestor(t, n, i);
                            return e.top = (0, r.Fp)(o.top, e.top), e.right = (0, r.VV)(o.right, e.right), e.bottom = (0, r.VV)(o.bottom, e.bottom), e.left = (0, r.Fp)(o.left, e.left), e
                        }, getClientRectFromClippingAncestor(t, c, i));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    getOffsetParent,
                    getElementRects,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        return getCssDimensions(e)
                    },
                    getScale,
                    isElement: isElement,
                    isRTL: function(e) {
                        return "rtl" === getComputedStyle(e).direction
                    }
                };

            function autoUpdate(e, t, n, o) {
                let i;
                void 0 === o && (o = {});
                let {
                    ancestorScroll: l = !0,
                    ancestorResize: a = !0,
                    elementResize: c = "function" == typeof ResizeObserver,
                    layoutShift: s = "function" == typeof IntersectionObserver,
                    animationFrame: u = !1
                } = o, f = unwrapElement(e), d = l || a ? [...f ? getOverflowAncestors(f) : [], ...getOverflowAncestors(t)] : [];
                d.forEach(e => {
                    l && e.addEventListener("scroll", n, {
                        passive: !0
                    }), a && e.addEventListener("resize", n)
                });
                let p = f && s ? function(e, t) {
                        let n, o = null,
                            i = getDocumentElement(e);

                        function cleanup() {
                            clearTimeout(n), o && o.disconnect(), o = null
                        }
                        return ! function refresh(l, a) {
                            void 0 === l && (l = !1), void 0 === a && (a = 1), cleanup();
                            let {
                                left: c,
                                top: s,
                                width: u,
                                height: f
                            } = e.getBoundingClientRect();
                            if (l || t(), !u || !f) return;
                            let d = (0, r.GW)(s),
                                p = (0, r.GW)(i.clientWidth - (c + u)),
                                g = (0, r.GW)(i.clientHeight - (s + f)),
                                m = (0, r.GW)(c),
                                h = {
                                    rootMargin: -d + "px " + -p + "px " + -g + "px " + -m + "px",
                                    threshold: (0, r.Fp)(0, (0, r.VV)(1, a)) || 1
                                },
                                w = !0;

                            function handleObserve(e) {
                                let t = e[0].intersectionRatio;
                                if (t !== a) {
                                    if (!w) return refresh();
                                    t ? refresh(!1, t) : n = setTimeout(() => {
                                        refresh(!1, 1e-7)
                                    }, 100)
                                }
                                w = !1
                            }
                            try {
                                o = new IntersectionObserver(handleObserve, { ...h,
                                    root: i.ownerDocument
                                })
                            } catch (e) {
                                o = new IntersectionObserver(handleObserve, h)
                            }
                            o.observe(e)
                        }(!0), cleanup
                    }(f, n) : null,
                    g = -1,
                    m = null;
                c && (m = new ResizeObserver(e => {
                    let [r] = e;
                    r && r.target === f && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                        m && m.observe(t)
                    })), n()
                }), f && !u && m.observe(f), m.observe(t));
                let h = u ? getBoundingClientRect(e) : null;
                return u && function frameLoop() {
                    let t = getBoundingClientRect(e);
                    h && (t.x !== h.x || t.y !== h.y || t.width !== h.width || t.height !== h.height) && n(), h = t, i = requestAnimationFrame(frameLoop)
                }(), n(), () => {
                    d.forEach(e => {
                        l && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                    }), p && p(), m && m.disconnect(), m = null, u && cancelAnimationFrame(i)
                }
            }
            let computePosition = (e, t, n) => {
                let r = new Map,
                    i = {
                        platform: l,
                        ...n
                    },
                    a = { ...i.platform,
                        _c: r
                    };
                return (0, o.oo)(e, t, { ...i,
                    platform: a
                })
            }
        },
        38760: function(e, t, n) {
            n.d(t, {
                Fp: function() {
                    return i
                },
                GW: function() {
                    return a
                },
                I4: function() {
                    return getAxisLength
                },
                JB: function() {
                    return rectToClientRect
                },
                KX: function() {
                    return getOppositeAxisPlacements
                },
                NM: function() {
                    return l
                },
                Qq: function() {
                    return getSideAxis
                },
                Rn: function() {
                    return getOppositeAxis
                },
                VV: function() {
                    return o
                },
                Wh: function() {
                    return getAlignmentAxis
                },
                gy: function() {
                    return getExpandedPlacements
                },
                hp: function() {
                    return getAlignment
                },
                i8: function() {
                    return getAlignmentSides
                },
                k3: function() {
                    return getSide
                },
                ku: function() {
                    return evaluate
                },
                mA: function() {
                    return r
                },
                pw: function() {
                    return getOppositePlacement
                },
                uZ: function() {
                    return clamp
                },
                yd: function() {
                    return getPaddingObject
                },
                ze: function() {
                    return createCoords
                }
            });
            let r = ["top", "right", "bottom", "left"],
                o = Math.min,
                i = Math.max,
                l = Math.round,
                a = Math.floor,
                createCoords = e => ({
                    x: e,
                    y: e
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                s = {
                    start: "end",
                    end: "start"
                };

            function clamp(e, t, n) {
                return i(e, o(t, n))
            }

            function evaluate(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function getSide(e) {
                return e.split("-")[0]
            }

            function getAlignment(e) {
                return e.split("-")[1]
            }

            function getOppositeAxis(e) {
                return "x" === e ? "y" : "x"
            }

            function getAxisLength(e) {
                return "y" === e ? "height" : "width"
            }

            function getSideAxis(e) {
                return ["top", "bottom"].includes(getSide(e)) ? "y" : "x"
            }

            function getAlignmentAxis(e) {
                return getOppositeAxis(getSideAxis(e))
            }

            function getAlignmentSides(e, t, n) {
                void 0 === n && (n = !1);
                let r = getAlignment(e),
                    o = getAlignmentAxis(e),
                    i = getAxisLength(o),
                    l = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                return t.reference[i] > t.floating[i] && (l = getOppositePlacement(l)), [l, getOppositePlacement(l)]
            }

            function getExpandedPlacements(e) {
                let t = getOppositePlacement(e);
                return [getOppositeAlignmentPlacement(e), t, getOppositeAlignmentPlacement(t)]
            }

            function getOppositeAlignmentPlacement(e) {
                return e.replace(/start|end/g, e => s[e])
            }

            function getOppositeAxisPlacements(e, t, n, r) {
                let o = getAlignment(e),
                    i = function(e, t, n) {
                        let r = ["left", "right"],
                            o = ["right", "left"];
                        switch (e) {
                            case "top":
                            case "bottom":
                                if (n) return t ? o : r;
                                return t ? r : o;
                            case "left":
                            case "right":
                                return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                                return []
                        }
                    }(getSide(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(getOppositeAlignmentPlacement)))), i
            }

            function getOppositePlacement(e) {
                return e.replace(/left|right|bottom|top/g, e => c[e])
            }

            function getPaddingObject(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function rectToClientRect(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
        },
        40764: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return O
                },
                Eh: function() {
                    return L
                },
                VY: function() {
                    return S
                },
                fC: function() {
                    return $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9
                },
                D7: function() {
                    return v
                }
            });
            var r = n(84477),
                o = n(97352),
                i = n(95067),
                l = n(17633),
                a = n(64353);
            let floating_ui_react_dom_esm_arrow = e => ({
                name: "arrow",
                options: e,
                fn(t) {
                    let {
                        element: n,
                        padding: r
                    } = "function" == typeof e ? e(t) : e;
                    if (n && ({}).hasOwnProperty.call(n, "current")) {
                        if (null != n.current) return (0, i.x7)({
                            element: n.current,
                            padding: r
                        }).fn(t)
                    } else if (n) return (0, i.x7)({
                        element: n,
                        padding: r
                    }).fn(t);
                    return {}
                }
            });
            var c = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;

            function deepEqual(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) != t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!deepEqual(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !deepEqual(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function getDPR(e) {
                if ("undefined" == typeof window) return 1;
                let t = e.ownerDocument.defaultView || window;
                return t.devicePixelRatio || 1
            }

            function roundByDPR(e, t) {
                let n = getDPR(e);
                return Math.round(t * n) / n
            }

            function useLatestRef(e) {
                let t = o.useRef(e);
                return c(() => {
                    t.current = e
                }), t
            }
            var s = n(26815);
            let u = (0, o.forwardRef)((e, t) => {
                let {
                    children: n,
                    width: i = 10,
                    height: l = 5,
                    ...a
                } = e;
                return (0, o.createElement)(s.WV.svg, (0, r.Z)({}, a, {
                    ref: t,
                    width: i,
                    height: l,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none"
                }), e.asChild ? n : (0, o.createElement)("polygon", {
                    points: "0,0 30,0 15,10"
                }))
            });
            var f = n(8e4),
                d = n(89849),
                p = n(90106),
                g = n(89744),
                m = n(36221);
            let h = "Popper",
                [w, v] = (0, d.b)(h),
                [y, x] = w(h),
                b = (0, o.forwardRef)((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...l
                    } = e, a = x("PopperAnchor", n), c = (0, o.useRef)(null), u = (0, f.e)(t, c);
                    return (0, o.useEffect)(() => {
                        a.onAnchorChange((null == i ? void 0 : i.current) || c.current)
                    }), i ? null : (0, o.createElement)(s.WV.div, (0, r.Z)({}, l, {
                        ref: u
                    }))
                }),
                E = "PopperContent",
                [C, T] = w(E),
                A = (0, o.forwardRef)((e, t) => {
                    var n, u, d, h, w, v, y, b;
                    let {
                        __scopePopper: T,
                        side: A = "bottom",
                        sideOffset: R = 0,
                        align: P = "center",
                        alignOffset: O = 0,
                        arrowPadding: S = 0,
                        collisionBoundary: L = [],
                        collisionPadding: k = 0,
                        sticky: $ = "partial",
                        hideWhenDetached: D = !1,
                        avoidCollisions: N = !0,
                        onPlaced: W,
                        ...M
                    } = e, _ = x(E, T), [F, H] = (0, o.useState)(null), B = (0, f.e)(t, e => H(e)), [V, z] = (0, o.useState)(null), I = (0, m.t)(V), Z = null !== (n = null == I ? void 0 : I.width) && void 0 !== n ? n : 0, q = null !== (u = null == I ? void 0 : I.height) && void 0 !== u ? u : 0, X = "number" == typeof k ? k : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...k
                    }, Y = Array.isArray(L) ? L : [L], G = Y.length > 0, K = {
                        padding: X,
                        boundary: Y.filter($cf1ac5d9fe0e8206$var$isNotNull),
                        altBoundary: G
                    }, {
                        refs: j,
                        floatingStyles: Q,
                        placement: J,
                        isPositioned: U,
                        middlewareData: ee
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: i,
                            elements: {
                                reference: s,
                                floating: u
                            } = {},
                            transform: f = !0,
                            whileElementsMounted: d,
                            open: p
                        } = e, [g, m] = o.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [h, w] = o.useState(r);
                        deepEqual(h, r) || w(r);
                        let [v, y] = o.useState(null), [x, b] = o.useState(null), E = o.useCallback(e => {
                            e != R.current && (R.current = e, y(e))
                        }, [y]), C = o.useCallback(e => {
                            e !== P.current && (P.current = e, b(e))
                        }, [b]), T = s || v, A = u || x, R = o.useRef(null), P = o.useRef(null), O = o.useRef(g), S = useLatestRef(d), L = useLatestRef(i), k = o.useCallback(() => {
                            if (!R.current || !P.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: h
                            };
                            L.current && (e.platform = L.current), (0, l.oo)(R.current, P.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                $.current && !deepEqual(O.current, t) && (O.current = t, a.flushSync(() => {
                                    m(t)
                                }))
                            })
                        }, [h, t, n, L]);
                        c(() => {
                            !1 === p && O.current.isPositioned && (O.current.isPositioned = !1, m(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [p]);
                        let $ = o.useRef(!1);
                        c(() => ($.current = !0, () => {
                            $.current = !1
                        }), []), c(() => {
                            if (T && (R.current = T), A && (P.current = A), T && A) {
                                if (S.current) return S.current(T, A, k);
                                k()
                            }
                        }, [T, A, k, S]);
                        let D = o.useMemo(() => ({
                                reference: R,
                                floating: P,
                                setReference: E,
                                setFloating: C
                            }), [E, C]),
                            N = o.useMemo(() => ({
                                reference: T,
                                floating: A
                            }), [T, A]),
                            W = o.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!N.floating) return e;
                                let t = roundByDPR(N.floating, g.x),
                                    r = roundByDPR(N.floating, g.y);
                                return f ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...getDPR(N.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, f, N.floating, g.x, g.y]);
                        return o.useMemo(() => ({ ...g,
                            update: k,
                            refs: D,
                            elements: N,
                            floatingStyles: W
                        }), [g, k, D, N, W])
                    }({
                        strategy: "fixed",
                        placement: A + ("center" !== P ? "-" + P : ""),
                        whileElementsMounted: l.Me,
                        elements: {
                            reference: _.anchor
                        },
                        middleware: [(0, i.cv)({
                            mainAxis: R + q,
                            alignmentAxis: O
                        }), N && (0, i.uY)({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === $ ? (0, i.dr)() : void 0,
                            ...K
                        }), N && (0, i.RR)({ ...K
                        }), (0, i.dp)({ ...K,
                            apply: ({
                                elements: e,
                                rects: t,
                                availableWidth: n,
                                availableHeight: r
                            }) => {
                                let {
                                    width: o,
                                    height: i
                                } = t.reference, l = e.floating.style;
                                l.setProperty("--radix-popper-available-width", `${n}px`), l.setProperty("--radix-popper-available-height", `${r}px`), l.setProperty("--radix-popper-anchor-width", `${o}px`), l.setProperty("--radix-popper-anchor-height", `${i}px`)
                            }
                        }), V && floating_ui_react_dom_esm_arrow({
                            element: V,
                            padding: S
                        }), $cf1ac5d9fe0e8206$var$transformOrigin({
                            arrowWidth: Z,
                            arrowHeight: q
                        }), D && (0, i.Cp)({
                            strategy: "referenceHidden"
                        })]
                    }), [et, en] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(J), er = (0, p.W)(W);
                    (0, g.b)(() => {
                        U && (null == er || er())
                    }, [U, er]);
                    let eo = null === (d = ee.arrow) || void 0 === d ? void 0 : d.x,
                        ei = null === (h = ee.arrow) || void 0 === h ? void 0 : h.y,
                        el = (null === (w = ee.arrow) || void 0 === w ? void 0 : w.centerOffset) !== 0,
                        [ea, ec] = (0, o.useState)();
                    return (0, g.b)(() => {
                        F && ec(window.getComputedStyle(F).zIndex)
                    }, [F]), (0, o.createElement)("div", {
                        ref: j.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...Q,
                            transform: U ? Q.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: ea,
                            "--radix-popper-transform-origin": [null === (v = ee.transformOrigin) || void 0 === v ? void 0 : v.x, null === (y = ee.transformOrigin) || void 0 === y ? void 0 : y.y].join(" ")
                        },
                        dir: e.dir
                    }, (0, o.createElement)(C, {
                        scope: T,
                        placedSide: et,
                        onArrowChange: z,
                        arrowX: eo,
                        arrowY: ei,
                        shouldHideArrow: el
                    }, (0, o.createElement)(s.WV.div, (0, r.Z)({
                        "data-side": et,
                        "data-align": en
                    }, M, {
                        ref: B,
                        style: { ...M.style,
                            animation: U ? void 0 : "none",
                            opacity: null !== (b = ee.hide) && void 0 !== b && b.referenceHidden ? 0 : void 0
                        }
                    }))))
                }),
                R = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                P = (0, o.forwardRef)(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...i
                    } = e, l = T("PopperArrow", n), a = R[l.placedSide];
                    return (0, o.createElement)("span", {
                        ref: l.onArrowChange,
                        style: {
                            position: "absolute",
                            left: l.arrowX,
                            top: l.arrowY,
                            [a]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[l.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[l.placedSide],
                            visibility: l.shouldHideArrow ? "hidden" : void 0
                        }
                    }, (0, o.createElement)(u, (0, r.Z)({}, i, {
                        ref: t,
                        style: { ...i.style,
                            display: "block"
                        }
                    })))
                });

            function $cf1ac5d9fe0e8206$var$isNotNull(e) {
                return null !== e
            }
            let $cf1ac5d9fe0e8206$var$transformOrigin = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, l;
                    let {
                        placement: a,
                        rects: c,
                        middlewareData: s
                    } = t, u = (null === (n = s.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, f = u ? 0 : e.arrowWidth, d = u ? 0 : e.arrowHeight, [p, g] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[g], h = (null !== (r = null === (o = s.arrow) || void 0 === o ? void 0 : o.x) && void 0 !== r ? r : 0) + f / 2, w = (null !== (i = null === (l = s.arrow) || void 0 === l ? void 0 : l.y) && void 0 !== i ? i : 0) + d / 2, v = "", y = "";
                    return "bottom" === p ? (v = u ? m : `${h}px`, y = `${-d}px`) : "top" === p ? (v = u ? m : `${h}px`, y = `${c.floating.height+d}px`) : "right" === p ? (v = `${-d}px`, y = u ? m : `${w}px`) : "left" === p && (v = `${c.floating.width+d}px`, y = u ? m : `${w}px`), {
                        data: {
                            x: v,
                            y: y
                        }
                    }
                }
            });

            function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, i] = (0, o.useState)(null);
                    return (0, o.createElement)(y, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: i
                    }, n)
                },
                O = b,
                S = A,
                L = P
        },
        52889: function(e, t, n) {
            n.d(t, {
                Eh: function() {
                    return B
                },
                VY: function() {
                    return H
                },
                fC: function() {
                    return $a093c7e1ec25a057$export$be92b6f5f03c0fe9
                },
                h_: function() {
                    return $a093c7e1ec25a057$export$602eac185826482c
                },
                xz: function() {
                    return F
                },
                zt: function() {
                    return $a093c7e1ec25a057$export$2881499e37b75b9a
                }
            });
            var r = n(84477),
                o = n(97352),
                i = n(12527),
                l = n(8e4),
                a = n(89849),
                c = n(43492),
                s = n(65399),
                u = n(40764),
                f = n(51119),
                d = n(21155),
                p = n(26815),
                g = n(66754),
                m = n(58020),
                h = n(21666);
            let [w, v] = (0, a.b)("Tooltip", [u.D7]), y = (0, u.D7)(), x = "tooltip.open", [b, E] = w("TooltipProvider"), C = "Tooltip", [T, A] = w(C), R = "TooltipTrigger", P = (0, o.forwardRef)((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...a
                } = e, c = A(R, n), s = E(R, n), f = y(n), d = (0, o.useRef)(null), g = (0, l.e)(t, d, c.onTriggerChange), m = (0, o.useRef)(!1), h = (0, o.useRef)(!1), w = (0, o.useCallback)(() => m.current = !1, []);
                return (0, o.useEffect)(() => () => document.removeEventListener("pointerup", w), [w]), (0, o.createElement)(u.ee, (0, r.Z)({
                    asChild: !0
                }, f), (0, o.createElement)(p.WV.button, (0, r.Z)({
                    "aria-describedby": c.open ? c.contentId : void 0,
                    "data-state": c.stateAttribute
                }, a, {
                    ref: g,
                    onPointerMove: (0, i.M)(e.onPointerMove, e => {
                        "touch" === e.pointerType || h.current || s.isPointerInTransitRef.current || (c.onTriggerEnter(), h.current = !0)
                    }),
                    onPointerLeave: (0, i.M)(e.onPointerLeave, () => {
                        c.onTriggerLeave(), h.current = !1
                    }),
                    onPointerDown: (0, i.M)(e.onPointerDown, () => {
                        m.current = !0, document.addEventListener("pointerup", w, {
                            once: !0
                        })
                    }),
                    onFocus: (0, i.M)(e.onFocus, () => {
                        m.current || c.onOpen()
                    }),
                    onBlur: (0, i.M)(e.onBlur, c.onClose),
                    onClick: (0, i.M)(e.onClick, c.onClose)
                })))
            }), O = "TooltipPortal", [S, L] = w(O, {
                forceMount: void 0
            }), k = "TooltipContent", $ = (0, o.forwardRef)((e, t) => {
                let n = L(k, e.__scopeTooltip),
                    {
                        forceMount: i = n.forceMount,
                        side: l = "top",
                        ...a
                    } = e,
                    c = A(k, e.__scopeTooltip);
                return (0, o.createElement)(d.z, {
                    present: i || c.open
                }, c.disableHoverableContent ? (0, o.createElement)(M, (0, r.Z)({
                    side: l
                }, a, {
                    ref: t
                })) : (0, o.createElement)(D, (0, r.Z)({
                    side: l
                }, a, {
                    ref: t
                })))
            }), D = (0, o.forwardRef)((e, t) => {
                let n = A(k, e.__scopeTooltip),
                    i = E(k, e.__scopeTooltip),
                    a = (0, o.useRef)(null),
                    c = (0, l.e)(t, a),
                    [s, u] = (0, o.useState)(null),
                    {
                        trigger: f,
                        onClose: d
                    } = n,
                    p = a.current,
                    {
                        onPointerInTransitChange: g
                    } = i,
                    m = (0, o.useCallback)(() => {
                        u(null), g(!1)
                    }, [g]),
                    h = (0, o.useCallback)((e, t) => {
                        let n = e.currentTarget,
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            o = function(e, t) {
                                let n = Math.abs(t.top - e.y),
                                    r = Math.abs(t.bottom - e.y),
                                    o = Math.abs(t.right - e.x),
                                    i = Math.abs(t.left - e.x);
                                switch (Math.min(n, r, o, i)) {
                                    case i:
                                        return "left";
                                    case o:
                                        return "right";
                                    case n:
                                        return "top";
                                    case r:
                                        return "bottom";
                                    default:
                                        throw Error("unreachable")
                                }
                            }(r, n.getBoundingClientRect()),
                            i = function(e, t, n = 5) {
                                let r = [];
                                switch (t) {
                                    case "top":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y + n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "bottom":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y - n
                                        });
                                        break;
                                    case "left":
                                        r.push({
                                            x: e.x + n,
                                            y: e.y - n
                                        }, {
                                            x: e.x + n,
                                            y: e.y + n
                                        });
                                        break;
                                    case "right":
                                        r.push({
                                            x: e.x - n,
                                            y: e.y - n
                                        }, {
                                            x: e.x - n,
                                            y: e.y + n
                                        })
                                }
                                return r
                            }(r, o),
                            l = function(e) {
                                let {
                                    top: t,
                                    right: n,
                                    bottom: r,
                                    left: o
                                } = e;
                                return [{
                                    x: o,
                                    y: t
                                }, {
                                    x: n,
                                    y: t
                                }, {
                                    x: n,
                                    y: r
                                }, {
                                    x: o,
                                    y: r
                                }]
                            }(t.getBoundingClientRect()),
                            a = function(e) {
                                let t = e.slice();
                                return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0),
                                    function(e) {
                                        if (e.length <= 1) return e.slice();
                                        let t = [];
                                        for (let n = 0; n < e.length; n++) {
                                            let r = e[n];
                                            for (; t.length >= 2;) {
                                                let e = t[t.length - 1],
                                                    n = t[t.length - 2];
                                                if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
                                                else break
                                            }
                                            t.push(r)
                                        }
                                        t.pop();
                                        let n = [];
                                        for (let t = e.length - 1; t >= 0; t--) {
                                            let r = e[t];
                                            for (; n.length >= 2;) {
                                                let e = n[n.length - 1],
                                                    t = n[n.length - 2];
                                                if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
                                                else break
                                            }
                                            n.push(r)
                                        }
                                        return (n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y) ? t : t.concat(n)
                                    }(t)
                            }([...i, ...l]);
                        u(a), g(!0)
                    }, [g]);
                return (0, o.useEffect)(() => () => m(), [m]), (0, o.useEffect)(() => {
                    if (f && p) {
                        let handleTriggerLeave = e => h(e, p),
                            handleContentLeave = e => h(e, f);
                        return f.addEventListener("pointerleave", handleTriggerLeave), p.addEventListener("pointerleave", handleContentLeave), () => {
                            f.removeEventListener("pointerleave", handleTriggerLeave), p.removeEventListener("pointerleave", handleContentLeave)
                        }
                    }
                }, [f, p, h, m]), (0, o.useEffect)(() => {
                    if (s) {
                        let handleTrackPointerGrace = e => {
                            let t = e.target,
                                n = {
                                    x: e.clientX,
                                    y: e.clientY
                                },
                                r = (null == f ? void 0 : f.contains(t)) || (null == p ? void 0 : p.contains(t)),
                                o = ! function(e, t) {
                                    let {
                                        x: n,
                                        y: r
                                    } = e, o = !1;
                                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                        let l = t[e].x,
                                            a = t[e].y,
                                            c = t[i].x,
                                            s = t[i].y,
                                            u = a > r != s > r && n < (c - l) * (r - a) / (s - a) + l;
                                        u && (o = !o)
                                    }
                                    return o
                                }(n, s);
                            r ? m() : o && (m(), d())
                        };
                        return document.addEventListener("pointermove", handleTrackPointerGrace), () => document.removeEventListener("pointermove", handleTrackPointerGrace)
                    }
                }, [f, p, s, d, m]), (0, o.createElement)(M, (0, r.Z)({}, e, {
                    ref: c
                }))
            }), [N, W] = w(C, {
                isInside: !1
            }), M = (0, o.forwardRef)((e, t) => {
                let {
                    __scopeTooltip: n,
                    children: i,
                    "aria-label": l,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: s,
                    ...f
                } = e, d = A(k, n), p = y(n), {
                    onClose: m
                } = d;
                return (0, o.useEffect)(() => (document.addEventListener(x, m), () => document.removeEventListener(x, m)), [m]), (0, o.useEffect)(() => {
                    if (d.trigger) {
                        let handleScroll = e => {
                            let t = e.target;
                            null != t && t.contains(d.trigger) && m()
                        };
                        return window.addEventListener("scroll", handleScroll, {
                            capture: !0
                        }), () => window.removeEventListener("scroll", handleScroll, {
                            capture: !0
                        })
                    }
                }, [d.trigger, m]), (0, o.createElement)(c.XB, {
                    asChild: !0,
                    disableOutsidePointerEvents: !1,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: s,
                    onFocusOutside: e => e.preventDefault(),
                    onDismiss: m
                }, (0, o.createElement)(u.VY, (0, r.Z)({
                    "data-state": d.stateAttribute
                }, p, f, {
                    ref: t,
                    style: { ...f.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                }), (0, o.createElement)(g.A4, null, i), (0, o.createElement)(N, {
                    scope: n,
                    isInside: !0
                }, (0, o.createElement)(h.f, {
                    id: d.contentId,
                    role: "tooltip"
                }, l || i))))
            }), _ = (0, o.forwardRef)((e, t) => {
                let {
                    __scopeTooltip: n,
                    ...i
                } = e, l = y(n), a = W("TooltipArrow", n);
                return a.isInside ? null : (0, o.createElement)(u.Eh, (0, r.Z)({}, l, i, {
                    ref: t
                }))
            }), $a093c7e1ec25a057$export$2881499e37b75b9a = e => {
                let {
                    __scopeTooltip: t,
                    delayDuration: n = 700,
                    skipDelayDuration: r = 300,
                    disableHoverableContent: i = !1,
                    children: l
                } = e, [a, c] = (0, o.useState)(!0), s = (0, o.useRef)(!1), u = (0, o.useRef)(0);
                return (0, o.useEffect)(() => {
                    let e = u.current;
                    return () => window.clearTimeout(e)
                }, []), (0, o.createElement)(b, {
                    scope: t,
                    isOpenDelayed: a,
                    delayDuration: n,
                    onOpen: (0, o.useCallback)(() => {
                        window.clearTimeout(u.current), c(!1)
                    }, []),
                    onClose: (0, o.useCallback)(() => {
                        window.clearTimeout(u.current), u.current = window.setTimeout(() => c(!0), r)
                    }, [r]),
                    isPointerInTransitRef: s,
                    onPointerInTransitChange: (0, o.useCallback)(e => {
                        s.current = e
                    }, []),
                    disableHoverableContent: i
                }, l)
            }, $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = e => {
                let {
                    __scopeTooltip: t,
                    children: n,
                    open: r,
                    defaultOpen: i = !1,
                    onOpenChange: l,
                    disableHoverableContent: a,
                    delayDuration: c
                } = e, f = E(C, e.__scopeTooltip), d = y(t), [p, g] = (0, o.useState)(null), h = (0, s.M)(), w = (0, o.useRef)(0), v = null != a ? a : f.disableHoverableContent, b = null != c ? c : f.delayDuration, A = (0, o.useRef)(!1), [R = !1, P] = (0, m.T)({
                    prop: r,
                    defaultProp: i,
                    onChange: e => {
                        e ? (f.onOpen(), document.dispatchEvent(new CustomEvent(x))) : f.onClose(), null == l || l(e)
                    }
                }), O = (0, o.useMemo)(() => R ? A.current ? "delayed-open" : "instant-open" : "closed", [R]), S = (0, o.useCallback)(() => {
                    window.clearTimeout(w.current), A.current = !1, P(!0)
                }, [P]), L = (0, o.useCallback)(() => {
                    window.clearTimeout(w.current), P(!1)
                }, [P]), k = (0, o.useCallback)(() => {
                    window.clearTimeout(w.current), w.current = window.setTimeout(() => {
                        A.current = !0, P(!0)
                    }, b)
                }, [b, P]);
                return (0, o.useEffect)(() => () => window.clearTimeout(w.current), []), (0, o.createElement)(u.fC, d, (0, o.createElement)(T, {
                    scope: t,
                    contentId: h,
                    open: R,
                    stateAttribute: O,
                    trigger: p,
                    onTriggerChange: g,
                    onTriggerEnter: (0, o.useCallback)(() => {
                        f.isOpenDelayed ? k() : S()
                    }, [f.isOpenDelayed, k, S]),
                    onTriggerLeave: (0, o.useCallback)(() => {
                        v ? L() : window.clearTimeout(w.current)
                    }, [L, v]),
                    onOpen: S,
                    onClose: L,
                    disableHoverableContent: v
                }, n))
            }, F = P, $a093c7e1ec25a057$export$602eac185826482c = e => {
                let {
                    __scopeTooltip: t,
                    forceMount: n,
                    children: r,
                    container: i
                } = e, l = A(O, t);
                return (0, o.createElement)(S, {
                    scope: t,
                    forceMount: n
                }, (0, o.createElement)(d.z, {
                    present: n || l.open
                }, (0, o.createElement)(f.h, {
                    asChild: !0,
                    container: i
                }, r)))
            }, H = $, B = _
        },
        36221: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return $db6c3485150b8e66$export$1ab7ae714698c4b8
                }
            });
            var r = n(97352),
                o = n(89744);

            function $db6c3485150b8e66$export$1ab7ae714698c4b8(e) {
                let [t, n] = (0, r.useState)(void 0);
                return (0, o.b)(() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let r, o;
                            if (!Array.isArray(t) || !t.length) return;
                            let i = t[0];
                            if ("borderBoxSize" in i) {
                                let e = i.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize, o = t.blockSize
                            } else r = e.offsetWidth, o = e.offsetHeight;
                            n({
                                width: r,
                                height: o
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }, [e]), t
            }
        },
        21666: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return l
                },
                f: function() {
                    return a
                }
            });
            var r = n(84477),
                o = n(97352),
                i = n(26815);
            let l = (0, o.forwardRef)((e, t) => (0, o.createElement)(i.WV.span, (0, r.Z)({}, e, {
                    ref: t,
                    style: {
                        position: "absolute",
                        border: 0,
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        wordWrap: "normal",
                        ...e.style
                    }
                }))),
                a = l
        }
    }
]);