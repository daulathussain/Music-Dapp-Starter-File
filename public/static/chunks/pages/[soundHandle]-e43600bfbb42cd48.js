(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1664], {
        31079: function(n, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[soundHandle]", function() {
                return a(29951)
            }])
        },
        71204: function(n, e, a) {
            "use strict";
            a.d(e, {
                h: function() {
                    return LoadingPage
                }
            });
            var t = a(16356);
            a(97352);
            var i = a(98910);
            let LoadingPage = () => (0, t.jsx)("div", {
                className: "flex h-full justify-center",
                children: (0, t.jsx)("div", {
                    className: "absolute top-1/2 -translate-y-1/2",
                    children: (0, t.jsx)(i.j, {
                        height: 80
                    })
                })
            })
        },
        98910: function(n, e, a) {
            "use strict";
            a.d(e, {
                j: function() {
                    return LoadingBars
                }
            });
            var t = a(16356);
            a(97352);
            var i = a(44361);
            let LoadingBar = n => {
                    let {
                        index: e,
                        className: a
                    } = n;
                    return (0, t.jsx)("div", {
                        className: (0, i.m)("h-1/2 w-[10%] rounded-[6px] bg-black", a, 0 === e && "animate-[loadingBar1_1.25s_infinite_linear_alternate]", (1 === e || 3 === e) && "animate-[loadingBar24_1.25s_infinite_linear_alternate]", 2 === e && "animate-[loadingBar3_1.25s_infinite_linear_alternate]", 4 === e && "animate-[loadingBar5_1.25s_infinite_linear_alternate]")
                    })
                },
                LoadingBars = n => {
                    let {
                        height: e,
                        className: a,
                        barClassName: r
                    } = n;
                    return (0, t.jsx)("div", {
                        style: e ? {
                            height: e
                        } : void 0,
                        className: (0, i.m)("flex aspect-square h-[50px] items-center justify-between", a),
                        children: Array.from({
                            length: 5
                        }).map((n, e) => (0, t.jsx)(LoadingBar, {
                            index: e,
                            className: null != r ? r : ""
                        }, e))
                    })
                }
        },
        29951: function(n, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                __N_SSG: function() {
                    return r
                },
                default: function() {
                    return ArtistProfile
                }
            });
            var t = a(16356);
            a(97352);
            var i = a(71204);
            a(3928);
            var r = !0;

            function ArtistProfile() {
                return (0, t.jsx)(i.h, {})
            }
        }
    },
    function(n) {
        n.O(0, [4361, 9774, 2888, 179], function() {
            return n(n.s = 31079)
        }), _N_E = n.O()
    }
]);